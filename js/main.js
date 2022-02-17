window.addEventListener('DOMContentLoaded', function(){

    // HEADER 
    const header = document.querySelector('header');
    if( window.scrollY > 1 ){
        header.classList.add('fix');
    } else {
        header.classList.remove('fix');
    }
    window.addEventListener('scroll', ()=>{
        
        if( window.scrollY > 1 ){
            header.classList.add('fix');
        } else {
            header.classList.remove('fix');
        }
    })
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

    // PORTFOLIO Fillter
    const portFolioFillter = document.querySelectorAll('.portfolio > .sorting > span');
    const portFolioList = document.querySelectorAll('.portfolio > ul > li');
    
    portFolioFillter.forEach((filter)=>{
        filter.addEventListener('click', (e)=>{

            const getClass = e.target.innerText.toLowerCase();
            const ALL = "all";
            const WEB = "web";
            const MOBILE = "mobile";
            const ILLUSTRATION = "illustration";
            const PRINT = "print";

            if( getClass === ALL) {
                portFolioList.forEach((list)=>{
                    list.style.display = 'block';
                })
            } else if ( getClass === WEB ) {
                checkClass(WEB);
            } else if ( getClass === MOBILE ) {
                checkClass(MOBILE);
            } else if ( getClass === ILLUSTRATION ) {
                checkClass(ILLUSTRATION);
            } else if ( getClass === PRINT ) {
                checkClass(PRINT);
            }            
            
            for( var i = 0; i < portFolioFillter.length; i++){
                portFolioFillter[i].classList.remove('active');
            }
            e.target.classList.add("active");
        })
    })

    function checkClass(className){
        portFolioList.forEach((list)=>{
            if( list.classList.value === className ){
                list.style.display = 'block';
            } else {
                list.style.display = 'none';
            }
        })
    }

    // PARTNERS SLIDER
    $(".partner_list").bxSlider({
        pager: false,
        controls: false,
        easing:"linear",
        auto:true,
        autoHover:true,
        minSlides: 3,        // 최소 슬라이드
        maxSlides: 6,        // 최대 슬라이드
        moveSlides: 1,       // 움직이는 슬라이드
        slideWidth: 170,     // 슬라이드 너비 값
        slideMargin: 30,     // 슬라이드 간격
        shrinkItems: true    // 브라우저 너비에 맞게 반응형
    });

    // TESTIMONIALS TAB MENU
    const tabList = document.querySelectorAll('.review_contents .item');
    const tabLink = document.querySelectorAll('.tab_links span');

    let tabindex = 0;

    tabLink.forEach((elem, index)=>{
        elem.addEventListener('click', ()=>{
            tabindex = index;
            for(var i=0; i < tabLink.length; i++){
                tabLink[i].classList.remove('active');
                tabList[i].classList.remove('active');
            }
            tabLink[tabindex].classList.add('active');
            tabList[tabindex].classList.add('active');
        })
    })

    // TESTIMONIALS ACCORDION
    const accrdionTitle = document.querySelectorAll('.accordion dt');
    const accrdionContent = document.querySelectorAll('.accordion dd');
    
    let accrdionIndex = 0;

    accrdionTitle.forEach((elem, index)=>{
        elem.addEventListener('click', ()=>{
            accrdionIndex = index;
            for(var i=0; i < tabLink.length; i++){
                accrdionTitle[i].classList.remove('active');
                accrdionContent[i].classList.remove('active');
            }
            accrdionTitle[accrdionIndex].classList.add('active');
            accrdionContent[accrdionIndex].classList.add('active');
        })
    })

    // BACK TO TOP
    $('.back_to_Top').click(()=>{
        $("html, body").animate({scrollTop: 0}, 1000);
    })
})
