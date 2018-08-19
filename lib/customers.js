module.exports = (apiClient) => {
  return {
    create: (data) => apiClient.post('/customers/', data),
    update: (id, data) => apiClient.put('/bank_accounts/' + id, data),
    getById: (id) => apiClient.get('/customers/' + id),
    getList: () => apiClient.get('/customers')
  }
}
