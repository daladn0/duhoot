document.addEventListener('DOMContentLoaded', function() {

    function buttonClickHandler(button, activeClass, callback) {
        const selector = document.querySelector(button)

        selector.addEventListener('click', e => {
            const menu = e.target.closest(button)
    
            if ( activeClass != false ) menu.classList.toggle(activeClass)

            callback()
        })
    }

    function toggleNavbar() {

        const navbar = document.querySelector('.header__hidden')

        if ( navbar.classList.contains('header__hidden_active') ) {

            navbar.classList.add('header__hidden_hiding')
            setTimeout( () => {
                navbar.classList.remove('header__hidden_hiding')
                navbar.classList.remove('header__hidden_active')
            }, 100)

        } else {
            navbar.classList.add('header__hidden_active')
        }

    }

    function openModal() {
       document.querySelector('.modal').classList.add('modal_active')
    }

    function closeModal() {
        document.querySelector('.modal').classList.remove('modal_active')

        removeActiveClass('.filter__menu', 'filter__menu_active')
    }

    function setActiveClass(target, activeClass) {
        target.classList.add(activeClass)
    }

    function removeActiveClass(target, activeClass) {
        document.querySelector(target).classList.remove(activeClass)
    }

    buttonClickHandler('.header__menu', 'header__menu_active', toggleNavbar)
    buttonClickHandler('.filter__menu', 'filter__menu_active', openModal )
    buttonClickHandler('.modal__close', '', closeModal)

    // Filter

    const firstFilter = document.querySelector('.filter__link')
    setFilter(firstFilter)

    function showPost(filter) {
        document.querySelectorAll(`.${filter}`).forEach( post => {
            post.style.display = ''
        } )
    }

    function hidePosts() {
        document.querySelectorAll('.posts__item').forEach( post => {
            post.style.display = 'none'
        } )
    }

    function setFilter(target) {

        setActiveClass(target, 'active')

        const filter = target.getAttribute('data-filter')

        hidePosts()
        showPost(filter)
    }

    const filters = document.querySelectorAll('.filter__link')

    filters.forEach( filter => {

        filter.addEventListener( 'click', e => {

            e.preventDefault()

            const currentActiveFilter = document.querySelector('.filter__link.active')

            if  ( currentActiveFilter ) currentActiveFilter.classList.remove('active')

            setFilter(e.target)
        } )

    } )

})