ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:crushing/venus_sandstone_to_venus_sand' })

  event.custom({
    type: 'mekanism:crushing',
    input: {
      ingredient: {
        item: 'minecraft:sandstone'
      }
    },
    output: {
      item: 'ad_astra:venus_sand',
      count: 1
    }
  }).id('mekanism:crushing/venus_sandstone_to_venus_sand')
})

