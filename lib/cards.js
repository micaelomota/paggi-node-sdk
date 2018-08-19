module.exports = (apiClient) => {
	return {
    create: (data) => apiClient.post("/cards/", data),
		delete: (id) => apiClient.remove("/cards/"+id),
    getById: (id) => apiClient.get("/cards/" + id),
    getList: () => apiClient.get("/cards")    
	};
}
