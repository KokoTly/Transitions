const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const btnColor = document.getElementById('btnColor');
const btnBgColor = document.getElementById('btnBgColor');

btnColor.addEventListener('click', () => {
    box1.style.color = '#f74bc6';
    box2.style.color = '#f59d50';
});

btnBgColor.addEventListener('click', () => {
    box1.style.backgroundColor = '#f30cb2f7';
    box2.style.backgroundColor = '#f3801c';
});
