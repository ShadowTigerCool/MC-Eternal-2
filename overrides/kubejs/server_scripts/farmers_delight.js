 ServerEvents.recipes(event => {

    //Organic Compost
    event.shaped(Item.of('farmersdelight:organic_compost', 1), [
        'DSS',
        'MMB',
        'BBB'
    ],
    {
        D: 'minecraft:dirt',
        S: 'farmersdelight:straw',
        M: 'minecraft:bone_meal',
        B: '#immersive_weathering:bark'
    }).id('farmersdelight:organic_compost')

})