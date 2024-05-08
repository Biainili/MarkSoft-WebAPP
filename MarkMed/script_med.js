

{
    document.getElementById('services').addEventListener('mouseenter', function () {
        document.getElementById('services').style.color = '#4D99CF';
        document.getElementById('services').style.borderBottom = '2px solid #4D99CF';
        document.querySelector('.nav_bar_open').style.display = 'flex';
    });

    function handleMouseLeave() {
        document.getElementById('services').style.color = '#F7FCFF';
        document.getElementById('services').style.borderBottom = "unset";
        document.querySelector('.nav_bar_open').style.display = 'none';
    }

    document.getElementById('open_bar').addEventListener('mouseleave', handleMouseLeave);

    document.querySelectorAll('.header_container').forEach(function (element) {
        element.addEventListener('mouseleave', handleMouseLeave);
    });



} // This is a Hover function open services


{
    document.getElementById('see_the_price').addEventListener('click', function () {
        document.querySelector('.see_more').style.display = 'flex';
        document.querySelector('.main_page').style.display = 'none';
        document.querySelector('.send').style.display = 'none';

    });
} // The Function opener << see more page >> 

{
    var sendFunction = function () {
        document.querySelector('.see_more').style.display = 'none';
        document.querySelector('.send').style.display = 'flex';

    };
} // The Function opener << SEND page >> 

{
    var reloadFunction = function () {
        location.reload();
    }
}// Reload the page 


{
    var originalSrc = "./img_med/Icon_menu.svg";
    var alternativeSrc = "./img_med/Icon_menu_alt.svg";
    var iconMenu = document.getElementById("icon_menu");

    iconMenu.addEventListener('click', function () {
        if (iconMenu.getAttribute('src') === originalSrc) {
            iconMenu.setAttribute('src', alternativeSrc);

            document.querySelector('.main_page').style.display = 'none';
            document.querySelector('.send').style.display = 'none';
            document.querySelector('.markSec').style.display = 'flex';

        } else {
            iconMenu.setAttribute('src', originalSrc);
            document.querySelector('.main_page').style.display = 'flex';
            document.querySelector('.markSec').style.display = 'none';
        }
    });
}



const openIndex_see_more = () => {
    document.querySelector('.markSec').style.display = 'none';
    document.querySelector('.see_more').style.display = 'flex';
}

const openIndex = (url) => {
    window.location.href = url;
}

const bnt_buy = () => {
    document.querySelector('.see_more').style.display = 'flex';
    document.querySelector('.main_page').style.display = 'none';
    document.querySelector('.send').style.display = 'none';
    document.querySelector('.markSec').style.display = 'none';
    iconMenu.setAttribute('src', originalSrc);

}




const parrent = document.querySelector(".itemTop");
const list = document.querySelector(".opClDv");
const vector = document.querySelector(".vect");
const spn = document.querySelector(".itTopSp");


function openLi() {

    vector.style.transform = vector.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
    list.style.display = list.style.display === "flex" ? "none" : "flex";

    spn.style.color = spn.style.color === "#F7FCFF" ? "#4D99CF" : "#F7FCFF";

}

window.addEventListener("click", function (event) {
    if (!parrent.contains(event.target) && list.style.display === "flex") {
        list.style.display = "none";
        vector.style.transform = "rotate(0deg)";
    }
})
