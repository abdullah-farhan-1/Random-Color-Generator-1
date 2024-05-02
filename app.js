
const btn = document.querySelector('#button')
const h1 = document.querySelector('h1')

const colorPicker = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const RGB = `rgb(${r}, ${g}, ${b})`

    document.body.style.backgroundColor = `${RGB}`

    h1.innerText = `Your color is: ${RGB}`
}


btn.addEventListener('click', colorPicker)




































