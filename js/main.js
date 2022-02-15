window.addEventListener('DOMContentLoaded', function(){

    // MAIN SLIDER
    const swiper = new Swiper('.main_slider_wrapper', {
        loop: true,
        speed: 400,
        spaceBetween: 100,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // NUMBER ANIMATION
    const countNum = $('.stats_excerpt .count');

    countNum.each((idx, elem)=>{

        const waypoint = new Waypoint({
        element: elem,
        handler: function() {
            const rateNum = $(elem).attr('data-rate');
            $({count:0}).animate({count:rateNum},{
                duration: 2000,
                progress: function(){
                    const currentNum = Math.floor(this.count);
                    $(elem).text(currentNum)
                }
            })
            this.destroy();
        },
        offset: '70%',
        });

    })
    const prev = document.querySelector('.blog_prev');
    const next = document.querySelector('.blog_next');

    const blogSlider = new Swiper(".blog_list_slider", {
        loop:true,
        autoplay: true,
        breakpoints: {
            640: { // mobile
              slidesPerView: 1, // 슬라이드 개수
              spaceBetween: 30, // 슬라이드 간격
            },
            768: { // tablet
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1140: { // pc
              slidesPerView: 3,
              spaceBetween: 30,
            },
        },
    })

    prev.addEventListener('click',()=>{
        blogSlider.slidePrev();
    });
    next.addEventListener('click',()=>{
        blogSlider.slideNext();
    }); 
})
