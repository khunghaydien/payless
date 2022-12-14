import cookies from 'vue-cookies'
import axios from 'axios'
import authApiMap from './apiMap'
const config = (method, url, data, header, params) => {
  const obj = {
    method,
    url,
  }
  if (data) {
    if (method === 'get') {
      obj.params = data
    } else {
      obj.data = data
      if (params) {
        obj.params = params
      }
    }
  }
  if (header) {
    obj.headers = header
  }
  return obj
}

const apiMap = { ...authApiMap(config) }
const url = 'https://develop.pregi.api.paylessgate.com'
const api = async (apiName, apiParams) => {
  const configApi = apiMap[apiName](apiParams)
  try {
    let token = cookies.get('JWT_TOKEN')
    const refreshToken = cookies.get('REFRESH_TOKEN')
    if (!token && refreshToken) {
      const resRefresh = await axios.get(
        `${url}refresh-token`,
        { params: { refreshToken } }
      )
      if (resRefresh && resRefresh.status === 200) {
        cookies.set(
          'JWT_TOKEN',
          resRefresh.data.data.accessToken,
          new Date(resRefresh.data.data.expirationTimeToken)
        )
        cookies.set(
          'REFRESH_TOKEN',
          resRefresh.data.data.refreshToken,
          new Date(
            new Date(resRefresh.data.data.expirationTimeToken).getTime() +
            86400 * 365 * 1000 * 10
          )
        )
        token = resRefresh.data.data.accessToken
      }
    }
    const request = axios.create({
      baseURL: url,
      // withCredentials: false,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    const { data } = await request(configApi)
    return data
  } catch (error) {
    return {
      success: false,
      data: error.response
        ? error
        : {
          response: {
            data: {
              message:
                'ネットワーク通信品質が低下しています。通信環境を再確認するか、しばらくお待ちいただいてから再度接続してみてください。',
            },
          },
        },
    }
  }
}

export default api
