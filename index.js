let screen = document.getElementById('screen')
let button = document.querySelectorAll('button')
let screenValue = ''

for(let i of button) {
    i.addEventListener('click', (e) => {
        screenValue = e.target.innerText;

        if(screenValue == 'x') {
            screenValue = '*'
            screen.value += screenValue
        }
        else if (screenValue == 'C') {
            screen.value = ''
        }
        else if(screenValue == '=') {
            screenValue = eval(screen.value)
            screen.value = screenValue
        }
        else {
            screen.value += screenValue
        }
    })
}