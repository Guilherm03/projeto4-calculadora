function switchTheme() {
    document.documentElement.classList.toggle('is-light')
    document.documentElement.classList.toggle('is-dark')
}
document.getElementById('switchBtn').addEventListener('click', switchTheme)

const display = document.getElementById('display')
const buttons = document.querySelectorAll('.key')

function updateDisplay(value) {
    if (value === 'C') {
        display.value = ''
    } else if (value === 'eraser') {
        display.value = display.value.slice(0, -1)
    } else if (value === '=') {
        try {
            display.value = eval(display.value)
        } catch {
            display.value = 'Erro'
        }
    } else {
        display.value += value
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => updateDisplay(button.value))
})

document.getElementById('copy').addEventListener('click', function (ev) {
    const button = ev.currentTarget
    if (button.innerText === 'COPIAR') {
        button.classList.add('success')
        navigator.clipboard.writeText(display.value)
    } else {
        button.innerText = 'COPIAR'
        button.classList.remove('success')
    }
})
