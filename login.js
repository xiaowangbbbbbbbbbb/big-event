$(function () {
            //登录注册按需切换
            $('#link_reg').on('click', function () {
                //去注册按钮的点击事件
                $('#link_login').hide();
                $('#link_reg').show();
            })
            $('#link_login').on('click', function () {
                //去注册按钮的点击事件
                $('#link_login').show();
                $('#link_reg').hide();
            })



            var form = layui.form
            form.verify({
                // 自定义了一个叫做 pwd 校验规则 
                pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
                // 校验两次密码是否一致的规则 
                repwd: function (value) {
                    // 通过形参拿到的是确认密码框中的内容 
                    // 还需要拿到密码框中的内容 // 然后进行一次等于的判断
                    // 如果判断失败,则return一个提示消息即可 
                    var pwd = $('.reg-box [name=password]').val()
                    if (pwd !== value) {
                        return '两次密码不一致！'
                    }
                }
            })
            var layer = layui.layer
            $('#form_reg').on('submit', function (e) {
                        // 1. 阻止默认的提交行为 
                        e.preventDefault()
                        // 2. 发起Ajax的POST请求 
                        var data = {
                            username: $('#form_reg [name=username]').val(),
                            password: $('#form_reg [name=password]').val()
                        }
                        $.post('http:/api-breakingnews-web.itheima.net/api/reguser', data, function(res) {
                            if (res.status !== 0) {
                                return layer.msg(res.message)
                            }
                            layer.msg('注册成功，请登录！') 
                            // 模拟人的点击行为 
                            $('#link_login').click() }) })
                            
                        })