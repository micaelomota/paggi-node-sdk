module.exports = (apiClient) => {
  return {
    applePay: (data) => apiClient.post("/applepay", data),
    create: (data) => apiClient.post("/charges", data),
    cancel: (id) => apiClient.put("/charges/"+ id +"/cancel"),
    capture: (id) => apiClient.put("/charges/"+ id +"/capture"),
    getById: (id) => apiClient.get("/charges/" + id),
    getList: () => apiClient.get("/charges")    
	};
}
