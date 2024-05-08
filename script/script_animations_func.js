{
    const elements = document.querySelectorAll('.crm_animacion, .finace_animacion, .service_animacion, .see_all_btn, .service_menu_animacion_1, .service_menu_animacion_2, .service_menu_animacion_3, .service_menu_animacion_4, .service_menu_animacion_5, .service_menu_animacion_6, .see_more_bnt_A');

    const options = {
        threshold: 0.1,
    };

    const options_A = {
        threshold: 0.8,
    };

    function handleIntersection(entry, element) {
        if (entry.isIntersecting) {
            element.style.animationPlayState = 'running';
        } else {
            element.style.animationPlayState = 'paused';
        }
    }

    const observers = Array.from(elements).map((element, index) => {
        const observerOptions = index >= 3 && index <= 18 ? options_A : options;
        const observer = new IntersectionObserver((entries) => {
            handleIntersection(entries[0], element);
        }, observerOptions);

        observer.observe(element);
        return observer;
    });

} // function for animation to run in scrool
