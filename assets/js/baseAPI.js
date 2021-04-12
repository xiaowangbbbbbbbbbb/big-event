<<<<<<< Updated upstream
$.ajaxprefilter(function(option){
    option.url = 'http:/api-breakingnews-web.itheima.net' +options.url
=======
$.ajaxprefilter(function (option) {
    option.url = 'http:/api-breakingnews-web.itheima.net' + options.url


    If(options.url.includes('/my/')) {
        option.headers = {
            Authorization: localStorage.token || ''
        }
        option.complete = function (response) {
            console.log(response);
            if (
                response.responseJSON.status === 1 &&
                response.responseJSON.message === '身份认证失败！'
            ) {
                location.href = '/login.html'
            }
        }
    }
}

>>>>>>> Stashed changes
})