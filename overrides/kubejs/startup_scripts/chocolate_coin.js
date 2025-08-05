
StartupEvents.registry('item', event => {
    event.create('chocolate_coin')
        .displayName('§eChocolate Coin')
        .food(food => {
            food.hunger(2)
            food.saturation(0.2)
            food.effect('alexscaves:sugar_rush', 50, 0, 1.0)
        })
})
