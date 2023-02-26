 var HttpService = {
    baseUrl: "http://fundoonotes.incubation.bridgelabz.com/api/notes/",

    get: function (endpoint) {
        return $.ajax({
            url: this.baseUrl + endpoint,
            method: "GET",
            headers: { "Authorization": localStorage.getItem('token') },
        });
    },

    post: function (endpoint, data) {
        return $.ajax({
            url: this.baseUrl + endpoint,
            method: "POST",
            data: data,
            headers: { "Authorization": localStorage.getItem('token') },
        });
    },
};
 export default HttpService;

