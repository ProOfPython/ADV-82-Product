div = document.getElementById('demo')
mouseDown = 0
divP = document.getElementById('demoP')
div.addEventListener('mousedown', function(e){
    div.style.background = 'red'
    mouseDown = 1
    divP.innerHTML = "The mouse is down."
})
div.addEventListener('mousedown', function(e){
    div.style.background = 'green' 
    divP.innerHTML = 'The mouse previously moved.'
    if (mouseDown > 0){
        div.style.background = 'yellow' 
        divP.innerHTML = 'The mouse previously moved and was held down doing so.'
    }
})
div.addEventListener('mouseup', function(e){
    div.style.background = 'blue' 
    divP.innerHTML = 'The mouse is up.'
})
div.addEventListener('mouseleave', function(e){
    div.style.background = 'grey' 
    divP.innerHTML = 'The mouse has left.'
})