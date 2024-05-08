const logo = document.getElementById('navbar-logo');
logo.addEventListener('click', function () {
    window.location.href = 'index.html'
})
document.addEventListener('DOMContentLoaded', function () {
    const flexItems = document.querySelectorAll('.flex-item, .flex-item1');

    function checkInView() {
        flexItems.forEach(item => {
            const windowHeight = window.innerHeight;
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < windowHeight * 0.75) {
                item.classList.add('show');
            }
        });
    }

    document.addEventListener('scroll', checkInView);
    checkInView();
});
document.addEventListener('DOMContentLoaded', function () {
    const flexItems = document.querySelectorAll('.wrapper-show');

    function checkInView() {
        flexItems.forEach(item => {
            const windowHeight = window.innerHeight;
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < windowHeight * 0.75) {
                item.classList.add('show1');
            }
        });
    }

    document.addEventListener('scroll', checkInView);
    checkInView();
});


document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');

    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('fixed-navbar');
        } else {
            navbar.classList.remove('fixed-navbar');
        }
    }

    window.addEventListener('scroll', handleScroll);
});



document.addEventListener('mousemove', (e) => {
    const animation = document.getElementById('animation');
    const rect = animation.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const rotateX = (mouseY / rect.height - 0.5) * 9;
    const rotateY = (mouseX / rect.width - 0.5) * 9;
    animation.style.transform = `translate(0%, 0%) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) `;
});

document.addEventListener('mouseout', () => {
    const animation = document.getElementById('animation');
    animation.style.transform = 'translate(0%, 0%) perspective(1000px) rotateX(0deg) rotateY(0deg) ';
});


document.addEventListener('DOMContentLoaded', function () {
    const icon = document.querySelector('.navbar-icon');
    const iconOpen = document.querySelector('.navbar-icon-open');
    const dropdown = document.querySelector('.dropdown-menu');

    icon.onclick = function () {
        toggleDropdown();
    };

    iconOpen.onclick = function () {
        toggleDropdown();
    };

    function toggleDropdown() {
        const isOpen = dropdown.classList.toggle('open');
        icon.style.display = isOpen ? 'none' : 'block';
        iconOpen.style.display = isOpen ? 'block' : 'none';

        if (isOpen) {
            dropdown.style.display = 'block';
            dropdown.classList.add('active'); 
            setTimeout(() => {
                dropdown.style.height = '544px';
            }, 10);
        } else {
            dropdown.style.height = '0';
            dropdown.classList.remove('active'); 
            setTimeout(() => {
                dropdown.style.display = 'none';
            });
        }
    }

    function closeMenu() {
        if (window.innerWidth > 320 && window.innerWidth <= 1180) {
            dropdown.classList.remove('open');
            dropdown.style.height = '0';
            dropdown.style.display = 'none';
            icon.style.display = 'block';
            iconOpen.style.display = 'none';
        } else if (window.innerWidth > 1180) {
            icon.style.display = 'none';
            dropdown.classList.remove('open');
            dropdown.style.height = '0';
            dropdown.style.display = 'none';
        } else {
            icon.style.display = 'block';
            iconOpen.style.display = 'none';
        }
    }

    closeMenu();
    window.addEventListener('resize', closeMenu);
});



// document.addEventListener('DOMContentLoaded', function () {
//     const icon = document.querySelector('.navbar-icon');
//     const iconOpen = document.querySelector('.navbar-icon-open');
//     const dropdown = document.querySelector('.dropdown-menu');

//     icon.onclick = function () {
//         toggleDropdown();
//     };

//     iconOpen.onclick = function () {
//         toggleDropdown();
//     };

//     function toggleDropdown() {
//         const isOpen = dropdown.classList.toggle('open');
//         icon.style.display = isOpen ? 'none' : 'block';
//         iconOpen.style.display = isOpen ? 'block' : 'none';

//         if (isOpen) {
//             dropdown.style.display = 'block';
//             isOpen.style.left = '0'
//             setTimeout(() => {
//                 dropdown.style.height = '544px';
//             }, 10);
//         } else {
//             dropdown.style.height = '0';
//             setTimeout(() => {
//                 dropdown.style.display = 'none';
//             });
//         }
//     }

//     function closeMenu() {
//         if (window.innerWidth > 320 && window.innerWidth <= 1180) {
//             dropdown.classList.remove('open');
//             dropdown.style.height = '0';
//             dropdown.style.display = 'none';
//             icon.style.display = 'block';
//             iconOpen.style.display = 'none';
//         } else if (window.innerWidth > 1180) {
//             icon.style.display = 'none';
//             dropdown.classList.remove('open');
//             dropdown.style.height = '0';
//             dropdown.style.display = 'none';
//         } else {
//             icon.style.display = 'block';
//             iconOpen.style.display = 'none';
//         }
//     }

//     closeMenu();
//     window.addEventListener('resize', closeMenu);
// });




document.querySelector('.navbar-btn button').addEventListener('click', function() {
    window.location.href = 'login.html';
});
document.querySelector('.login-navbar1 .navbar-btn button').addEventListener('click', function() {
    window.location.href = 'login.html';
});
document.getElementById("login").addEventListener("click",function(){
    window.location.href = 'login.html'
})






// { function for animation to run in scrool
//   const elements = document.querySelectorAll('');

//   const options = {
//     threshold: 0.9,
//   };

//   const options_A = {
//     threshold: 0.6,
//   };

//   function handleIntersection(entry, element) {
//     if (entry.isIntersecting) {
//       element.style.animationPlayState = 'running';
//     } else {
//       element.style.animationPlayState = 'paused';
//     }
//   }

//   const observers = Array.from(elements).map((element, index) => {
//     const observerOptions = index >= 3 && index <= 18 ? options_A : options;
//     const observer = new IntersectionObserver((entries) => {
//       handleIntersection(entries[0], element);
//     }, observerOptions);

//     observer.observe(element);
//     return observer;
//   });

// } // function for animation to run in scrool







