let width = document.querySelector('body').clientWidth;

if(width <= 980) {
    const dropdowns = document.querySelectorAll('.dropdown');
    const smollDropdowns = document.querySelectorAll('.smollDropdown');

    window.onclick = function(e) {
        console.log(e.target);
        if(!e.target.matches('#dropdown') && !e.target.matches('#smollDropdown')) {
            const allDropdown = document.getElementsByClassName('show');

            for(let i = 0; i < allDropdown.length; i++) {
                allDropdown[i].classList.remove('show');
            }
        }
    }

    for(let i = 0; i < dropdowns.length; i++) {
        let currentDropdown = dropdowns[i];
        
        currentDropdown.addEventListener('click', () => {
            for(let i = 0; i < dropdowns.length; i++) {
                if(dropdowns[i].querySelector('.show')) {
                    dropdowns[i].querySelector('.show').classList.remove('show');
                }
            }

            currentDropdown.querySelector('ul').classList.add('show');
            
        });
    }

    for(let i = 0; i < smollDropdowns.length; i++) {
        let currentSmollDropdown = smollDropdowns[i];
        let hours = currentSmollDropdown.querySelector('ol');

        currentSmollDropdown.addEventListener('click', () => {
            for(let i = 0; i < smollDropdowns.length; i++) {
                if(smollDropdowns[i].querySelector('.show')) {
                    smollDropdowns[i].querySelector('.show').classList.remove('show');
                }
            }
            hours.classList.add('show');
        });
    }
}

if(width < 1225) {
    const hamburgerButton = document.getElementById('hamburgerButton');
    const hamburger = document.getElementById('links');

    hamburgerButton.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger');
    });

    hamburger.firstElementChild.addEventListener('click', () => {
        hamburger.classList.remove('hamburger');
    });
}