// global
dyslexiaFont = true
lightMode = false
audioOn = false

let audioPT = newAudio("audio/pt.mp3")
let audioFR = newAudio("audio/fr.mp3")
let audioEN = newAudio("audio/en.mp3")
let audioES = newAudio("audio/es.mp3")
let audioCH = newAudio("audio/chinese.mp3")

let allAudios = [audioPT, audioEN, audioES, audioFR, audioCH]

// functions


// updates written text in order to correspond to the selected language
function changeLang(lang) {
    switch (lang) {
        case 'en':
            document.documentElement.lang = 'en'
            document.getElementById('skip').innerText = "skip"
            document.getElementById('title').innerText = 'Middle school student with ADHD and dyslexia'
            document.getElementById('firstParagraph').innerText = `Preety is a middle school student with attention deficit hyperactivity disorder with dyslexia.
            She has difficulty reading, but she enjoys her literature class. Her school started using online textbooks. 
            She was inicially worried about using this new format, but using text-to-speech software that highlights the text on the screen as it reads it aloud, she realized that she can focus on the content instead of struggling over every word.
            The text-to-speech software helps with other online text but, her experience with websites varies.          
            `
            document.getElementById('secondParagraph').innerText = `Some sites use graphics in a way that helps her to focus on the content that she would like to read, while other sites have distracting advertisements and moving content.
            She has problems with online content when the navigation is unclear, and prefers sites that have navigation cues including a navigation bar, search box, bread-crumb trails, and a sitemap. Her school is using an accessible library catalog online. Before it she had to go to the library to find books. Now she can search the catalog using her phone, tablet, or laptop. She struggles with spelling but the search feature that suggests alternative spellings and correct words is helpful.`
            break
        case 'es':
            document.documentElement.lang = 'es'
            document.getElementById('skip').innerText = "saltar"
            document.getElementById('title').innerText = 'Estudiante de secundaria con TDAH y dislexia'
            document.getElementById('firstParagraph').innerText = `Preety es una estudiante de secundaria con trastorno por déficit de atención con hiperactividad y dislexia.
            Le cuesta leer, pero disfruta en clase de literatura. Su colegio ha empezado a utilizar libros de texto en línea. 
            Al principio le preocupaba utilizar este nuevo formato, pero al utilizar el software de conversión de texto a voz, que resalta el texto en la pantalla mientras lo lee en voz alta, se dio cuenta de que podía centrarse en el contenido en lugar de tener que esforzarse por leer cada palabra.
            El software de conversión de texto a voz le ayuda con otros textos en línea, pero su experiencia con los sitios web varía.          
            `
            document.getElementById('secondParagraph').innerText = `Algunos sitios utilizan gráficos que le ayudan a centrarse en el contenido que le gustaría leer, mientras que otros tienen anuncios que la distraen y contenido en movimiento.
            Tiene problemas con los contenidos en línea cuando la navegación no es clara, y prefiere los sitios que tienen pistas de navegación, como una barra de navegación, un cuadro de búsqueda, senderos de migas de pan y un mapa del sitio. Su colegio utiliza un catálogo accesible en línea. Antes tenía que ir a la biblioteca a buscar libros. Ahora puede buscar en el catálogo desde su teléfono, tableta o portátil. Tiene problemas con la ortografía, pero la función de búsqueda que sugiere ortografías alternativas y palabras correctas es muy útil.`
            break
            
        case 'fr':
            document.documentElement.lang = 'fr'
            document.getElementById('skip').innerText = "sauter"
            document.getElementById('title').innerText = 'Collégien souffrant de TDAH et de dyslexie'
            document.getElementById('firstParagraph').innerText = `Preety est une collégienne qui souffre d'un trouble déficitaire de l'attention avec hyperactivité et de dyslexie.
            Elle a du mal à lire, mais elle aime son cours de littérature. Son école a commencé à utiliser des manuels en ligne. 
            Au départ, elle était inquiète à l'idée d'utiliser ce nouveau format, mais en utilisant un logiciel de synthèse vocale qui met en évidence le texte à l'écran pendant qu'il est lu à haute voix, elle a réalisé qu'elle pouvait se concentrer sur le contenu au lieu de se battre pour chaque mot.
            Le logiciel de synthèse vocale l'aide à lire d'autres textes en ligne, mais son expérience des sites web est variable.         
            `
            document.getElementById('secondParagraph').innerText = `Certains sites utilisent des graphiques qui l'aident à se concentrer sur le contenu qu'elle souhaite lire, tandis que d'autres sites contiennent des publicités distrayantes et du contenu en mouvement.
            Elle a des difficultés avec le contenu en ligne lorsque la navigation n'est pas claire, et préfère les sites qui ont des repères de navigation, notamment une barre de navigation, une boîte de recherche, un fil d'Ariane et un plan du site. Son école utilise un catalogue de bibliothèque accessible en ligne. Auparavant, elle devait se rendre à la bibliothèque pour trouver des livres. Désormais, elle peut effectuer des recherches dans le catalogue à l'aide de son téléphone, de sa tablette ou de son ordinateur portable. Elle a des difficultés avec l'orthographe, mais la fonction de recherche qui suggère d'autres orthographes et des mots corrects lui est utile.`
            break
        
        case 'pt':
            document.documentElement.lang = 'fr'
            document.getElementById('skip').innerText = "saltar"
            document.getElementById('title').innerText = 'Estudante do ensino secundário com PDAH e dislexia'
            document.getElementById('firstParagraph').innerText = `Preety é uma aluna do ensino secundário com perturbação de défice de atenção e hiperatividade e dislexia.
            Tem dificuldade em ler, mas gosta das aulas de literatura. A sua escola começou a utilizar manuais escolares digitais. 
            Inicialmente, Preety estava preocupada com a utilização deste novo formato, mas com a utilização de software de conversão de texto em voz que realça o texto no ecrã enquanto o lê em voz alta, apercebeu-se de que pode concentrar-se no conteúdo em vez de se esforçar por ler cada palavra.
            O software de conversão de texto em voz ajuda com outros textos online, mas a sua experiência com websites é variável.
            `
            document.getElementById('secondParagraph').innerText = `Alguns websites utilizam multimédia de uma forma que a ajuda a concentrar-se no conteúdo que gostaria de ler, enquanto outros websites têm anúncios que a distraem e conteúdo em movimento.
            Ela tem problemas com o conteúdo online quando a navegação não é clara e prefere websites que tenham pistas de navegação, incluindo uma barra de navegação e de pesquisa, trilhos de navegação e um mapa do website. A escola dela está a utilizar um catálogo de biblioteca acessível online. Antes disso, ela tinha de se deslocar à biblioteca para encontrar livros. Agora, pode pesquisar o catálogo utilizando o telemóvel, o tablet ou o computador portátil. Ela tem dificuldades com a ortografia, mas a funcionalidade de pesquisa que sugere ortografias alternativas e palavras corretas é útil.`
            break
        
        case 'chinese':
            document.documentElement.lang = 'zh-CHS'
            document.getElementById('skip').innerText = "跳过"
            document.documentElement.style.setProperty("--currentFont", "Chinese")
            document.getElementById('title').className = "title chinese text"
            document.getElementById('firstParagraph').className = "col1 chinese text"
            document.getElementById('secondParagraph').className = "col2 chinese text"
            
            document.getElementById('title').innerText = '患有多动症和阅读障碍的中学生'
            document.getElementById('firstParagraph').innerText = `Preety 是一名患有注意力缺陷多动障碍和阅读障碍的中学生。
            她在阅读方面有困难，但她很喜欢文学课。她所在的学校开始使用在线教科书。
            她最初对使用这种新形式感到担心，但使用文字转语音软件后，她发现自己可以专注于内容，而不是纠结于每个字。
            文字转语音软件对其他在线文本也有帮助；但是，她对网站的体验却不尽相同。
            `
            document.getElementById('secondParagraph').innerText = `有些网站使用图形的方式有助于她集中精力阅读想看的内容，而有些网站则有分散注意力的广告和移动内容。
            如果导航不清晰，她在阅读在线内容时就会遇到问题，因此她更喜欢有导航提示的网站，包括导航栏、搜索框、面包屑轨迹和网站地图。她所在的学校正在使用无障碍在线图书馆目录。在此之前，她必须去图书馆找书。现在，她可以用手机、平板电脑或笔记本电脑搜索目录。她在拼写方面很吃力，但搜索功能可以为她推荐其他拼写和正确的单词，这对她很有帮助。`
            break
            
            default:
                break
    }
}
            
// get selected language           
function getCurrentLanguage(langs) {
    let currLang
    langs.forEach(lang => {
        if (lang.checked) {
            currLang = lang.id
            changeLang(lang.id)
        }
        })
    return currLang
}

// update font
function changeFont() {
    
    if (dyslexiaFont) {
        font = 'CenturyGothic'
        lineHeight = 2
        wordSpacing = '0.5rem'
        fontWeight = "normal"
    }
    else {
        font = 'OpenDyslexic-Regular'
        lineHeight = 'normal'
        wordSpacing = 'normal'
        fontWeight = "bold"
    }
    
    document.documentElement.style.setProperty("--currentFont", font)
    textElements = document.querySelectorAll('.text')
    textElements.forEach(e => {
        e.style.fontFamily = font
        e.style.lineHeight = lineHeight
        e.style.wordSpacing = wordSpacing
    })
    
    dyslexiaFont = !dyslexiaFont
}


// update mode (dark/light)
function changeMode() {
    
    lightMode = !lightMode
    if (lightMode) {
        console.log('lightMode')
        fontColor = '#1F1E1E'
        backgroundColor = '#EBE3D5'
        icon = "bi bi-moon"
        radialButton = '#283593'
    }
    else {
        console.log('darkMode')
        fontColor = '#EBE3D5'
        backgroundColor = '#1F1E1E'
        icon = "bi bi-brightness-low-fill"
        radialButton = '#FFB731'
        
    }
    
    document.getElementById("modeButton").className = icon
    document.documentElement.style.setProperty('--background-color', backgroundColor)
    document.documentElement.style.setProperty('--font-color', fontColor)
    document.documentElement.style.setProperty('--radialButton', radialButton)
    document.documentElement.style.background = backgroundColor
    icons = document.getElementsByClassName("bi")
    for (let icon of icons) {
        icon.style.color = backgroundColor
    }
    document.getElementById('fontButton').style.color = backgroundColor
}

// reset all audios
function stopAllAudios(audios) {
    audios.forEach(audio => {
        console.log(audio)
        audio.pause()
        audio.currentTime = 0
    });
    
}


// event-listeners waiting for language changes
function handleLanguage() {
    let langs = document.querySelectorAll('input[name="radio-group"]')
    
    langs.forEach(lang => {
        lang.addEventListener("change", () => {
            // reset soundwave icon
            stopAllAudios(allAudios)
            document.getElementById('speechButton').className = 'bi bi-soundwave'

            // update chinese font
            if(lang.id != 'chinese') {
                document.getElementById('title').className = "title text"
                document.getElementById('firstParagraph').className = "col1 text"
                document.getElementById('secondParagraph').className = "col2 text"
                document.documentElement.style.setProperty("--currentFont", "OpenDyslexic-Regular")
            }
            changeLang(lang.id)    
        })
    })
}


function newAudio(dir) {
    let audio = new Audio(dir)
    audio.id = dir.split("/")[1].split('.')[0]
    return audio
}

function getAudio(currLang) {
    switch (currLang) {
        case 'en':
            return audioEN
        
        case 'es':
            return audioES

        case 'fr':
            return audioFR

        case 'pt':
            return audioPT

        case 'chinese':
            return audioCH
    }
}

function textToSpeech() {
    audioOn = !audioOn
    
    audioOn ? document.getElementById('speechButton').className = "bi bi-pause-fill" : document.getElementById('speechButton').className = "bi bi-soundwave"
    let langs = document.querySelectorAll('input[name="radio-group"]')
    lang = getCurrentLanguage(langs)
                
    let audio = getAudio(lang)        
    audioOn ? audio.play() : audio.pause()
            
}
        

changeLang(getCurrentLanguage(document.querySelectorAll('input[name="radio-group"]')))
handleLanguage()