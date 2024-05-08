
// Animacion


window.addEventListener('scroll', () => {
    const gl = document.getElementById('gl');
    const scrollPosition = window.scrollY + window.innerHeight;
    const glPosition = gl.getBoundingClientRect().top + window.scrollY;

    if (scrollPosition > glPosition) {
        gl.style.opacity = '1';
        gl.style.width = '355px'; 
    }
});


    document.addEventListener("DOMContentLoaded", function() {
        const sliders = document.querySelectorAll('.slider1');

        sliders.forEach((slider, index) => {
            const radioButtons = slider.querySelectorAll('input[type="radio"]');
            const totalSlides = radioButtons.length;

            let currentSlide = 0;

            const showNextSlide = () => {
                radioButtons[currentSlide].checked = false;
                currentSlide = (currentSlide + 1) % totalSlides;
                radioButtons[currentSlide].checked = true;
            };

            setInterval(showNextSlide, 5000); 
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const sliders = document.querySelectorAll('.slider');
        const blocks = document.querySelectorAll('.block-servicersTop');
    
        sliders.forEach(function(slider) {
            slider.addEventListener('click', function() {
                sliders.forEach(function(slider) {
                    slider.style.backgroundColor = 'unset';
                });
                blocks.style.margin = "-100"
            });
            this.style.backgroundColor = 'orange';
        });
    });

 
    
    let swiperCards = new Swiper(".card__content", {
        loop: true,
        spaceBetween: 32,
        grabCursor: true,
      
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
      
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      
        breakpoints:{
          600: {
            slidesPerView: 2,
          },
          968: {
            slidesPerView: 3,
          },
        },
      });




// Animacion for Products





 