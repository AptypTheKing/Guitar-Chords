let content
let showed = false

let chords = document.querySelector('.chords')

chords.addEventListener('click', function(event) { // handle the click on button, change button class
  let target = event.target
  let active = document.querySelector('.showed')

  if (target.tagName != 'BUTTON') return
  if (active) {
    active.classList.remove('showed')
    target.classList.toggle('showed')
    showChord(target)
  }
  if (active === target) {
    active.classList.remove('showed')
    showChord()
  } else {
    target.classList.add('showed')
    showChord(target)
  }
})

function loadChord(letter) { // load and locate the chords
  let div = document.createElement('div')
  div.class = `chord${letter}`
  div.style.textAlign = 'center'
  div.innerHTML = `<img class='chord${letter}' src='chords/chord${letter}.png' style='max-width: 100%' width='1400px' id='chord${letter}'>`
              
  let guitar = document.querySelector('.guitar')
  let guitarCoords = guitar.getBoundingClientRect()
                                
  div.style.position = 'relative';
  div.style.top =  -guitarCoords.height + 'px'
  return div
}

function showChord(content) { // show the chord
  let guitar = document.querySelector('.guitar')
  if (showed) {
    guitar.lastChild.remove()
    showed = false
  } 
                
  if (!content) return

  let load = loadChord(content.innerHTML)
  document.body.style.overflow = 'hidden'
  guitar.append(load)
  showed = true
}
            