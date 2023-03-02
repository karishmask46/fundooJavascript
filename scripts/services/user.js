export class HttpService {
    baseUrl= "http://fundoonotes.incubation.bridgelabz.com/api/"

    getService (endpoint) {
        return $.ajax({
            url: this.baseUrl + endpoint,
            method: "GET",
            headers: { "Authorization": localStorage.getItem('token') },
        });
    }

    postService (endpoint, data) {
        return $.ajax({
            url: this.baseUrl + endpoint,
            method: "POST",
            data: data,
            headers: { "Authorization": localStorage.getItem('token') },
        });
    }
};
  

