function toggleBlocks(blockToShow) {
    const block1 = document.getElementById('block1');
    const block2 = document.getElementById('block2');
    const block3 = document.getElementById('block3');
    const block4 = document.getElementById('block4');
    const block5 = document.getElementById('block5');
    if (blockToShow === 1) {
        block1.style.opacity = '1';
        block2.style.opacity = '0';
        block3.style.opacity = '0';
        block4.style.opacity = '0';
        block5.style.opacity = '0';
        setTimeout(() => {
            block1.style.display = 'flex';
            block2.style.display = 'none';
            block3.style.display = 'none';
            block4.style.display = 'none';
            block5.style.display = 'none';
        }, 200);
    } else if (blockToShow === 2) {
        block1.style.opacity = '0';
        block2.style.opacity = '1';
        block3.style.opacity = '0';
        block4.style.opacity = '0';
        block5.style.opacity = '0';
        setTimeout(() => {
            block1.style.display = 'none';
            block2.style.display = 'flex';
            block3.style.display = 'none';
            block4.style.display = 'none';
            block5.style.display = 'none';
        }, 200);
    } else if (blockToShow === 3) {
        block1.style.opacity = '0';
        block2.style.opacity = '0';
        block3.style.opacity = '1';
        block4.style.opacity = '0';
        block5.style.opacity = '0';
        setTimeout(() => {
            block1.style.display = 'none';
            block2.style.display = 'none';
            block3.style.display = 'flex';
            block4.style.display = 'none';
            block5.style.display = 'none';
        }, 200);
    } else if (blockToShow === 4) {
        block1.style.opacity = '0';
        block2.style.opacity = '0';
        block3.style.opacity = '0';
        block4.style.opacity = '1';
        block5.style.opacity = '0';
        setTimeout(() => {
            block1.style.display = 'none';
            block2.style.display = 'none';
            block3.style.display = 'none';
            block4.style.display = 'flex';
            block5.style.display = 'none';
        }, 200);
    } else if (blockToShow === 5) {
        block1.style.opacity = '0';
        block2.style.opacity = '0';
        block3.style.opacity = '0';
        block4.style.opacity = '0';
        block5.style.opacity = '1';
        setTimeout(() => {
            block1.style.display = 'none';
            block2.style.display = 'none';
            block3.style.display = 'none';
            block4.style.display = 'none';
            block5.style.display = 'flex';
        }, 200);
    }
}



function toggleBlocks(blockToShow) {
    const blocks = document.querySelectorAll('.new-block1');
    const menuItems = document.querySelectorAll('.menuHub-work li');
    menuItems.forEach(item => {
        item.style.color = '';
    });
    const clickedListItem = document.querySelector('.li' + blockToShow);
    clickedListItem.style.color = '#F96B31';
    blocks.forEach((block, index) => {
        block.style.opacity = (index === blockToShow - 1) ? '1' : '0';
        block.style.display = (index === blockToShow - 1) ? 'flex' : 'none';
    });

    const menuItems_ab = document.querySelectorAll('.menuHub-work li');

    menuItems_ab.forEach(item => {
        item.style.color = '#FFFFFFB2';
        item.style.borderLeft = 'unset';
        item.style.borderBottom = 'unset';
    });

    const clickedListItem_ab = document.getElementById('li' + blockToShow);
    if (window.innerWidth > 920) {
        clickedListItem.style.color = '#F96B31';
        clickedListItem.style.borderLeft = '2px solid #F96B31';
        clickedListItem_ab.style.borderBottom = 'unset';
    } else {
        clickedListItem.style.color = '#F96B31';
        clickedListItem.style.borderBottom = '2px solid #F96B31';
        clickedListItem_ab.style.borderLeft = 'unset';
    }
}



let isDragging = false;
let startX;
let scrollLeft;

function startDragging(e) {
    e.preventDefault();
    isDragging = true;
    startX = e.pageX - document.getElementById('menu-areas_1').offsetLeft;
    scrollLeft = document.getElementById('menu-areas_1').scrollLeft;

    document.getElementById('menu-areas_1').classList.add('grabbing');

    window.addEventListener('mousemove', handleDragging);
    window.addEventListener('mouseup', stopDragging);
}

function handleDragging(e) {
    if (!isDragging) return;
    const x = e.pageX - document.getElementById('menu-areas_1').offsetLeft;
    const walk = (x - startX) * 2;
    document.getElementById('menu-areas_1').scrollLeft = scrollLeft - walk;
}

function stopDragging() {
    isDragging = false;
    document.getElementById('menu-areas_1').classList.remove('grabbing');
    window.removeEventListener('mousemove', handleDragging);
    window.removeEventListener('mouseup', stopDragging);
}