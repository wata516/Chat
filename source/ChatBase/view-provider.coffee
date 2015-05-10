class ViewProvider
  Views = []

  AddView: (view)->
    Views.push view
  Generate: ->
    foreach = (Views,view)->
      view.Generate
 
