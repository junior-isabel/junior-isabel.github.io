
const links = document.querySelectorAll('*[data-link]')
const pages = document.querySelectorAll('*[data-page]')
for( let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        for(let j = 0; j < links.length; j++) {
            links[j].classList.remove('active-link')
        }
        e.target.classList.add('active-link')
        // navegação
        for(let k = 0; k < pages.length; k++) {
            if(pages[k].getAttribute('data-page').localeCompare(e.target.getAttribute('data-link')) !== 0) {
                pages[k].classList.remove('active-page')
                pages[k].querySelector('.body') && pages[k].querySelector('.body').classList.remove('delay-page')
            } else {
                pages[k].classList.add('active-page')
                pages[k].querySelector('.body') && pages[k].querySelector('.body').classList.add('delay-page')
            }
        }
    })
}