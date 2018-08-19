module.exports = (apiClient) => {
	return {
		getList: () => apiClient.get("/banks"),
		getAccountList: () => apiClient.get("/bank_accounts/"),
		getAccountById: (id) => apiClient.get("/bank_accounts/" + id),
		createAccount: (data) => apiClient.post("/bank_accounts/", data)
	};
}
