const check = document.getElementById('check');
const addressBox = document.getElementById('address');

check.addEventListener('click', (e) => {
    if (!e.target.checked) {
        addressBox.style.height = '0px'
    }
    if (e.target.checked) {
        addressBox.style.height = '100%'
    }
})