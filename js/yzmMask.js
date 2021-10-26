$(function () {
    //监听input输入事件
    $(".yzm-mask .input-box input").on('input', function (e) {
        var id = Number(e.currentTarget.dataset.index) 
        var val = $(this).val()
        switch (id){
            case id: if (val.length == 1) {
                        if(id<3){
                            $("#yzm"+id).attr('disabled', 'disabled').addClass('text-align')
                            $("#yzm"+(id+1)).removeAttr('disabled').focus()
                        }else{
                            $("#yzm3").attr('disabled', 'disabled').addClass('text-align')
                            let t = setTimeout(function(){
                                $('.loading-mask').show()
                                var showLoad = setTimeout(function(){
                                    $('.loading-mask').hide()
                                    $('.yzm-mask .msg').text('手机验证码错误')
                                    for(var i=0;i<4;i++){
                                      $("#yzm"+i).val('')
                                    }
                                    $("#yzm0").removeAttr('disabled').focus()
                                    clearTimeout(showLoad)
                                },1000)
                               clearInterval(t)
                            },100)
                        }
                    }else if(val.length>1){
                        var value = $("#yzm0").val()
                        alert(11111)
                        $("#yzm1").val(value.slice(1,2))
                        $("#yzm2").val(value.slice(2,3))
                        $("#yzm3").val(value.slice(3,4))
                        $("#yzm0").val(value.slice(0,1))
                    }
                    break;
        }
    })

    // 监听回车键盘事件
    $(".yzm-mask .input-box input").keyup(function(e){
        var id = Number(e.currentTarget.dataset.index) 
        switch (id){
            case id:if(id>0){
                        if(e.keyCode == 8){
                            $("#yzm"+(id-1)).removeAttr('disabled').focus().removeClass('text-align').val('')
                            $("#yzm"+id).attr('disabled', 'disabled').removeClass('text-align')
                        }
                    }
                   break;
        }
    })

    $(".yzm-mask .input-box").click(function(){
        for(var i=0;i<4;i++){
            if(!$("#yzm"+i).attr('disabled')){
                 $("#yzm"+i).focus()
            }
        }
    })


    // 60秒倒计时
    function interval(){
        let arrTime = 60
        let t = setInterval(function(){
            if(arrTime == 0){
                $('.yzm-mask .tip').hide()
                $('.yzm-mask .sendBtn').show()
                clearInterval(t)
            }else{
                arrTime -= 1
                $('.yzm-mask .tip .time').text(arrTime)
            }
        },1000)
    }interval()


    // 重新发送验证码
    $('.yzm-mask .sendBtn').click(function(){
        $('.yzm-mask .msg').text('')
        $('.yzm-mask .tip .time').text('60')
        $('.yzm-mask .tip').show()
        $("#yzm0").removeAttr('disabled').focus()
        $('.yzm-mask .sendBtn').hide()
        interval()
    })
   



})