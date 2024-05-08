for (let i = 111; i <= 116; i++) {
    let btn = document.getElementById('btn' + i);
    if(btn) {
        btn.addEventListener('click', function() {
            window.location.href = 'openCurses.html';
        });
    }
}

let regBtn = document.getElementById('reg');
let regBtn1 = document.getElementById('reg1');
if(regBtn) {
    regBtn.addEventListener('click', function() {
        window.location.href = 'registrCourse.html';
    });
}
if(regBtn1) {
    regBtn1.addEventListener('click', function() {
        window.location.href = 'registrCourse.html';
    });
}
