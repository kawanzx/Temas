'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        this.textContent = "Purple";
    } else if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('purple-theme');
        this.textContent = "Green";
    } else if (document.body.classList.contains('purple-theme')) {
        document.body.classList.remove('purple-theme');
        document.body.classList.add('green-theme');
        this.textContent = "Light";
    } else {
        document.body.classList.remove('green-theme');
        document.body.classList.add('light-theme');
        this.textContent = "Dark";
    }
});
