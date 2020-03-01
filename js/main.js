$(function(){
    $('a[href^="#"]').on('click', function (event) {
        $('.navbar-toggle').removeClass('active');
        $('.top-nav ul').removeClass('on');
        var target = this.hash; // gets the #hash
        $target = $(target); //
        event.preventDefault();
        if(target='order')
        $('html, body').stop().animate({
            
            'scrollTop': $target.offset().top-80 // scrolls to the link
        }, 1500, 'easeInOutCubic');
        else
        $('html, body').stop().animate({
            
            'scrollTop': $target.offset().top // scrolls to the link
        }, 1500, 'easeInOutCubic');
    });
    animationFuncs();

   var scroll =  $(window).scrollTop()
   if(scroll > 10)
   $("header").addClass("sticky")
   else
   $("header").removeClass("sticky")

   $(window).on("scroll",function(){
    animationFuncs();
    var scroll =  $(window).scrollTop();
        if(scroll > 10)
        $("header").addClass("sticky")
        else
        $("header").removeClass("sticky")

        if(scroll>100)
            $("#scrollup").addClass('active')
        else
            $("#scrollup").removeClass('active')
   })
  

     $('.navbar-toggle').click(function () {
        $(this).toggleClass('active');
        $('.top-nav ul').toggleClass('on');
    })

    $("#scrollup").click(function(){
        $('html, body').stop().animate({
            
            'scrollTop': 0 // scrolls to the link
        }, 1500, 'easeInOutCubic');
    })


})

function animationFuncs(){
    var scrollPosition = $(document).scrollTop();
    $('.top-nav ul li a').each(function () {

        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        var refElementhref = currentLink.attr("href");
       
        if (refElement.position().top <= (scrollPosition + $(window).height() / 2)) {
            $('.top-nav ul li a.active').removeClass('active');
            $(this).addClass('active');
     
                $(refElementhref +' .animation > *').each(function (z) {
                    var el = $(this);
                    var interval = el.parent().data('interval');
                    
                    setTimeout(function () {
                        var effect = el.parent().data('animate-effect');
                        el.addClass(effect);
                    }, z * parseInt(interval), 'easeInSine');
                });
                $(refElementhref +' .animation').addClass('animatied')
        }
        else {
            currentLink.removeClass("active");
        }
    })

}

$(function(){
var $filtered = $('#products-filtered').isotope({
    itemSelector: '.product',
    percentPosition: true,
    filter: '.all',
    masonry: {
      columnWidth: '.product'
    }
  });
  $("#product-filter ul li").click(function(){
      $(this).parent("ul").children("li").removeClass('active');
      $(this).addClass('active');
      var filter =$(this).attr('data-filter');
      $filtered.isotope({
        itemSelector: '.product',
        percentPosition: true,
        filter: filter,
        isOriginLeft: false,
        masonry: {
          columnWidth: '.product'
        }
      });
  })
})



