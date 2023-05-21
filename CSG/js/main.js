window.onload = () => {
    document.querySelector('#btn-to-form').addEventListener('click', () => {
        document.querySelector('#form-req').classList.remove('hide');
    });
    document.querySelector('#close-icon').addEventListener('click', () => {
        document.querySelector('#form-req').classList.add('hide');
    });
}