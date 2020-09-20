const ApiService = {

    get: function (api) {
        var promise = new Promise((resolve, reject) => {
            if (api === '/colors') {
                resolve({ data: { defaultColor: 'green' } });
            }
            else {
                reject(Error("Promise rejected"));
            }
        });
        return promise;
    }
};

export default ApiService;