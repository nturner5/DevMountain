element.on('click', function(){

element.children().css('background-color', startTheParty())

})

setInterval(function(){
    element.children().css('background-color', startTheParty());
}, 1000)