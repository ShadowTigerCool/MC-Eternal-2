 ServerEvents.tags('item', event => {
//unify tags
    event.add('mce2:barks', ['#immersive_weathering:bark', '#farmersdelight:barks'])
 })
 

 ServerEvents.recipes(event => {
    event.replaceInput(
        {input:'#farmersdelight:barks'},
        '#farmersdelight:barks',
        '#mce2:barks')

    event.replaceInput(
        {input:'#immersive_weathering:bark'},
        '#immersive_weathering:bark',
        '#mce2:barks')

//Pale Jane needs to be removed manually
    event.remove({id:'brewinandchewin:fermenting/pale_jane_from_rice_wine'})

    event.custom({
        'type': 'brewinandchewin:fermenting',
        'basefluid': {
            'count': 1000,
            'fluid': 'brewinandchewin:rice_wine'
        },
        'experience': 1.0,
        'ingredients': [
            {'item': 'minecraft:honey_bottle'},
            {'tag': 'mce2:barks'},
            {'item': 'minecraft:lily_of_the_valley'},
            {'item': 'minecraft:sugar'}
        ],
        'result': {
            'count': 1000,
            'fluid': 'brewinandchewin:pale_jane'
        },
        'temperature':4
    }).id('brewinandchewin:fermenting/pale_jane_from_rice_wine')  
})

