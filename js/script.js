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

const gisdayStart = new Date('Nov 15, 2023 9:00:00').getTime();

const x = setInterval(function() {
    let now = new Date().getTime();
    let distance = gisdayStart - now;
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('timer').innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    if(distance < 0 && distance > -140400000) {
        clearInterval(x);
        document.getElementById('timer').innerHTML = "Właśnie trwa!";
    } else if (distance < -140400000) {
        clearInterval(x);
        document.getElementById('timer').innerHTML = "Dobiegł już końca <br> Do zobaczenia za rok!";
        document.getElementById('timer').parentElement.querySelector('h1').innerHTML = "GIS day 2023";
    }
}, 1000);