const signInBtnLink = document.querySelector('.signInBtnlink');

const signUpBtnLink = document.querySelector('.signUpBtnlink');

const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
} );

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
} );