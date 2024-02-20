$(document).ready(function(){
    $('.slthumbs').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots:false,
		autoplay: true,
		speed:1000,
		autoplaySpeed:5000,
        variableWidth: true
	});
	$('.haconts .ctdecss').each(function(){
        var that = $(this);
        that.parents(".haconts").append('<div class="dsview"><div class="vhviewtt"><div class="showview"><a class="" href="javascript:void(0)"><span>Đọc thêm</span></a></div><div class="hideview"><a class="" href="javascript:void(0)"><span>Thu gọn</span></a></div></div></div>');
        var innerhpc = that.innerHeight();
		if(innerhpc > 156){
			that.css({
				'height' : 156,
				'overflow' : 'hidden'
			})
			that.siblings('.dsview').find('.showview').show();
			that.siblings('.dsview').find('.showview a').on('click', function(){
				that.css({
					'height' : 'auto',
				})
				that.siblings('.dsview').find('.showview').hide();
				that.siblings('.dsview').find('.hideview').show();
			})
			that.siblings('.dsview').find('.hideview a').on('click', function(){
				that.css({
					'height' : 156,
				})
				that.siblings('.dsview').find('.showview').show();
				that.siblings('.dsview').find('.hideview').hide();
			})
		}
    }) 
	// 
	$('.slprojecttt').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        speed: 1000,
        slidesToShow : 4,
        responsive: [
          {
            breakpoint:991,
            settings: {
                slidesToShow : 3,
            }
          },
            {
            breakpoint:767,
            settings: {
                slidesToShow : 2,
            }
          }
        ]
    });
	// 
	$('.slprojectnn').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        speed: 1000,
        slidesToShow : 3,
        responsive: [
          {
            breakpoint:991,
            settings: {
                slidesToShow : 2,
            }
          },
            {
            breakpoint:767,
            settings: {
                slidesToShow : 1,
            }
          }
        ]
    });
	
})