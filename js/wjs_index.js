$(function(){
    //计算UL总长度
    var allW=0;
    $('.wjs_pbox li').each(function(index,item){
        allW +=$(item).outerWidth()
        console.log(allW);
    })
    $('.wjs_pbox .nav-tabs').width(allW)
    //初始化iscroll
    var myScroll =  new  IScroll('.wjs_pbox',{
        scrollX: true, //支持水平滑动
        scrollY: false //设置不支持垂直滑动
    })
    //初始提示框
    $('[data-toggle="tooltip"]').tooltip()

    var isMB=true;
    if($(window).width()>768){
        isMB=false;
    }
    function init(){
        $.ajax({
            type:'get',
            url:'./data/imgData.json',
            dataType:'json',
            success:function(res){
                var str=template('imgTemp',{list:res,isMB})
                $('.carousel-inner').html(str)
                var str1=template('btnTemp',{list:res})
                $('.carousel-indicators').html(str1)
            }
        })
    }
    init()
    window.onresize=function(){
        var windowwidth=$(window).width()
        if((isMB && windowwidth > 768) || (!isMB && windowwidth < 768)){
            isMB = windowwidth > 768 ? false:true
            init()
        }
    }
    //滑动轮播
    var startX,distanceX
    var inner = $('.carousel-inner')[0]
    inner.addEventListener('touchstart',function(e){
        startX = e.targetTouches[0].clientX
    })
    inner.addEventListener('touchend',function(e){
        distanceX = e.changedTouches[0].clientX - startX
        console.log(distanceX)
        if(Math.abs(distanceX) > 50){
            if(distanceX > 0){
                $('.carousel').carousel('prev')
            }else{
                $('.carousel').carousel('next')
            }
        }
    })
})