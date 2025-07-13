 ServerEvents.tags('item', event => {
//unify tags
    event.add('forge:barks', '#immersive_weathering:bark')
    event.add('forge:barks', '#farmersdelight:barks')
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

//Pale Jane needs overriding manually
    event.remove({type: 'brewinandchewin:fermenting', output:'brewinandchewin:pale_jane'})
    event.custom({
        'type': 'brewinandchewin:fermenting',
        'basefluid': {
            'count': 1000,
            'fluid': 'brewinandchewin:rice_wine'
        },
        'experience': 1.0,
        'ingredients': [
            {'item': 'minecraft:honey_bottle'},
            {'tag': 'forge:barks'},
            {'item': 'minecraft:lily_of_the_valley'},
            {'item': 'minecraft:sugar'}
        ],
        'result': {
            'count': 1000,
            'fluid': 'brewinandchewin:pale_jane'
        },
        'temperature':4
    })
})
