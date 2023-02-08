function toggleMode() {
    const html = document.documentElement

    // if (html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }

    html.classList.toggle('light')

    //take a tag img 

    const img = document.querySelector('#profile img')

    // //replace a img

    // if (html.classList.contains('light')) {

    // // if it has a light mode, add the light img

    //  img.setAttribute('src', './assets/avatar-light.jpeg')
    // } else {

    // // if there isn't a light mode, keep the img 

    //  img.setAttribute('src', './assets/avatar2.jpeg')

    // }
    img.setAttribute('src', html.classList.contains('light') ? './assets/avatar-light.jpeg' : './assets/avatar2.jpeg');
}