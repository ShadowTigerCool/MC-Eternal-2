ServerEvents.recipes(event => {

  //fix Venus Sandstone crushing (targets a nonexistent tag usually)
  event.custom({
    type: 'mekanism:crushing',
    input: {
      ingredient: {
        item: 'ad_astra:venus_sandstone'
      }
    },
    output: {
      item: 'ad_astra:venus_sand',
      count: 1
    }
  }).id('mekanism:crushing/venus_sandstone_to_venus_sand')
})


