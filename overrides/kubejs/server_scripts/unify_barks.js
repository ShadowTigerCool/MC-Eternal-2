 ServerEvents.tags('item', event => {
//unify tags
    event.add('mce2:barks', ['#immersive_weathering:bark', '#farmersdelight:barks'])
 })
 

 ServerEvents.recipes(event => {
    event.replaceInput(
        {input:'#farmersdelight:barks'},
        '#farmersdelight:barks',
        '#forge:barks')

    event.replaceInput(
        {input:'#immersive_weathering:bark'},
        '#immersive_weathering:bark',
        '#forge:barks')

//Pale Jane needs to be removed manually
    event.remove({id:'brewinandchewin:fermenting/pale_jane_from_rice_wine'})
})
