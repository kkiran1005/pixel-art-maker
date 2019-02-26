const WIDTH = 60
const HEIGHT = 100
let colorSelector = 'Red'
const colors = [`Red`,`Green`,`Blue`,`Black`,`Orange`,`Violet`,`Indigo`,`Black`]
let mainDiv = document.getElementById('mainDiv')
mainDiv.className = 'mainDiv'

for (let i =0 ; i<WIDTH ; i++){

    let rowContainer = document.createElement('div')
    rowContainer.className = 'row'
    for (let j =0; j<HEIGHT;j++){

        let pixel = document.createElement('div')
        pixel.className = 'pixel'
        pixel.onclick = () => {
            pixel.style.backgroundColor = colorSelector
        }
        rowContainer.appendChild(pixel)

    }
    mainDiv.appendChild(rowContainer)
}

let brushColorContainer = document.createElement('div')
brushColorContainer.className = 'brushColorContainer'
brushColorContainer.style.backgroundColor = colorSelector

let colorContainer = document.createElement('div')
colorContainer.className = 'colorContainer'

colors.forEach((color) => {
    let colorSelectorDiv = document.createElement('div')
    colorSelectorDiv.className = 'colorSelectorDiv'
    colorSelectorDiv.style.backgroundColor = color
    colorSelectorDiv.onclick = () =>{
        colorSelector = color;
        brushColorContainer.style.backgroundColor = color
    }
    colorContainer.appendChild(colorSelectorDiv)

});

document.body.appendChild(colorContainer)
document.body.appendChild(brushColorContainer)



