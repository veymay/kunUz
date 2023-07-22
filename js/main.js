// Menu Languages
let menu = document.querySelector('ul.menu')
let langUzb = ['O\'ZBEKISTON', 'JAHON', 'IQTISODIYOT', 'JAMIYAT', 'FAN-TEXNIKA', 'SPORT', 'NUQTAYI-NAZAR', 'AUDIO']
let langRus = ['УЗБЕКИСТАН', 'МИР', 'ЭКОНОМИКА', 'ОБЩЕСТВО', 'НАУКА-ТЕХНОЛОГИЯ', 'СПОРТ', 'ТОЧКА ЗРЕНИЯ', 'АУДИО']
let langEng = ['UZBEKISTAN', 'WORLD', 'ECONOMY', 'SOCIETY', 'SCIENCE-TECHNOLOGY', 'SPORTS', 'POINT OF VIEW', 'AUDIO']

// Language Switcher
const language = document.querySelector('.language')
const languageItem = document.querySelectorAll('.language>li')

language.addEventListener('click',() => {
    language.classList.toggle('active')
})

langUzb.forEach(langItem => {
    menu.innerHTML+=`<li><a href='#'>${langItem}</a></li>`
})

languageItem.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('active')
        if (item.innerHTML=='Uzb') {
            menu.innerHTML=''
            langUzb.forEach(langItem => {
                menu.innerHTML+=`<li><a href='#'>${langItem}</a></li>`
            })
        }else if (item.innerHTML=='Rus') {
            menu.innerHTML=''
            langRus.forEach(langItem => {
                menu.innerHTML+=`<li><a href='#'>${langItem}</a></li>`
            })
        } else if (item.innerHTML=='Eng') {
            menu.innerHTML=''
            langEng.forEach(langItem => {
                menu.innerHTML+=`<li><a href='#'>${langItem}</a></li>`
            })
        }
        languageItem.forEach(item2=> {
            if (item != item2) {
                item2.classList.remove('active')
            }
        })
    })
});

// Searching
let searchBtn = document.querySelector('.search')
let searchBar = document.querySelector('.search_bar')
searchBtn.addEventListener('click', () => {
    if (searchBtn.innerHTML==`<i class="fa-solid fa-magnifying-glass"></i>`) {
        searchBtn.innerHTML=`<i class="fa-solid fa-xmark"></i>`
    } else {
        searchBtn.innerHTML=`<i class="fa-solid fa-magnifying-glass"></i>`
    }
    searchBar.classList.toggle('active')
})

// Mobile Menu
let mMenu = document.querySelector('.m_menu')
let nav = document.querySelector('nav')

mMenu.addEventListener('click', () => {
    nav.classList.toggle('active')
})
nav.addEventListener('click', () => {
    nav.classList.remove('active')
})