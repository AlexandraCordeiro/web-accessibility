dyslexiaFont = true
lightMode = false

function changeFont() {

    if (dyslexiaFont) {
        font = 'CenturyGothic'
        buttonFont = 'OpenDyslexic-Regular'
        lineHeight = 2
        wordSpacing = '0.5rem'
        fontWeight = "normal"
    }
    else {
        font = 'OpenDyslexic-Regular'
        buttonFont = 'CenturyGothic'
        lineHeight = 'normal'
        wordSpacing = 'normal'
        fontWeight = "bold"
    }

    document.getElementById('fontButton').style.fontFamily = buttonFont
    textElements = document.querySelectorAll('.text')
    textElements.forEach(e => {
        e.style.fontFamily = font
        e.style.lineHeight = lineHeight
        e.style.wordSpacing = wordSpacing
    });

    dyslexiaFont = !dyslexiaFont
}


function changeMode() {

    if (lightMode) {
        svg = 'sun.svg'
        fontColor = 'aliceblue'
        backgroundColor = '#122C6F'
        speech = 'speech.svg'
    }
    else {
        svg = 'moon.svg'
        speech = 'speech_white.svg'
        fontColor = '#122C6F'
        backgroundColor = 'aliceblue'
    }
    document.getElementById("speechButton").children[0].src = speech
    document.getElementById("modeButton").children[0].src = svg
    document.body.style.background = backgroundColor
    document.getElementById("fontButton").style.color = backgroundColor
    document.documentElement.style.setProperty('--background-color', backgroundColor);
    document.documentElement.style.setProperty('--font-color', fontColor);
    lightMode = !lightMode
}
