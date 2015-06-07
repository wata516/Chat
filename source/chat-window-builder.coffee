
module.exports =
  class ChatWindowBuilder
    build: ->
      element = document.createElement 'div'
      element.id = 'id'
      element.innerHTML = 'AAAAA'
      element.style.backgroundColor = 'red'
      document.querySelector('body').appendChild element
