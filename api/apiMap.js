const api = (config) => ({
    login: (payload) => config('post', 'api/exhibit/exhibit_user/login', payload),
})

export default api
