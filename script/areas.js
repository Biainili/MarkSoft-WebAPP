

function toggleBlocks(blockToShow) {
    const blocks = document.querySelectorAll('.wrapper-area');
    blocks.forEach((block, index) => {
        if (index === blockToShow - 1) {
            block.style.opacity = '1';
            block.style.display = 'flex';
        } else {
            block.style.opacity = '0';
            block.style.display = 'none';
        }
    });
    const menuItems = document.querySelectorAll('.menu-areas li');

    menuItems.forEach(item => {
        item.style.color = '#FFFFFFB2';
        item.style.borderLeft = 'unset';
        item.style.borderBottom = 'unset';
    });

    const clickedListItem = document.getElementById('li' + blockToShow);
    
    if (window.innerWidth > 920) { 
        clickedListItem.style.color = '#F96B31';
        clickedListItem.style.borderLeft = '2px solid #F96B31';
        clickedListItem.style.borderBottom = 'unset';
    } else { 
        clickedListItem.style.color = '#F96B31';
        clickedListItem.style.borderBottom = '2px solid #F96B31';
        clickedListItem.style.borderLeft = 'unset';
    }
}



let isDragging = false;
let startX;
let scrollLeft;

function startDragging(e) {
    e.preventDefault();
    isDragging = true;
    startX = e.pageX - document.getElementById('menu-areas').offsetLeft;
    scrollLeft = document.getElementById('menu-areas').scrollLeft;

    document.getElementById('menu-areas').classList.add('grabbing');

    window.addEventListener('mousemove', handleDragging);
    window.addEventListener('mouseup', stopDragging);
}

function handleDragging(e) {
    if (!isDragging) return;
    const x = e.pageX - document.getElementById('menu-areas').offsetLeft;
    const walk = (x - startX) * 2;
    document.getElementById('menu-areas').scrollLeft = scrollLeft - walk;
}

function stopDragging() {
    isDragging = false;
    document.getElementById('menu-areas').classList.remove('grabbing');
    window.removeEventListener('mousemove', handleDragging);
    window.removeEventListener('mouseup', stopDragging);
}