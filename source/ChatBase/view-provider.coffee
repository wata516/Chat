
module.exports =
class ViewProvider
  Views = []
  Add: (view)->
    Views.push view
  Generate: ->
    foreach = (Views,view)->
      view.Generate
