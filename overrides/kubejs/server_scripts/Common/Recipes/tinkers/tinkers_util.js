const tinkersEntityMelting = (event, entityTypes, fluid, amount, damage) => {
    let recipe = {
        type: "tconstruct:entity_melting",
        entity: {
            types: entityTypes
        },
        result: {
            fluid: fluid,
            amount: amount
        },
        damage: damage || 2
    }

    return event.custom(recipe)
} 

const tinkersMelting = (event, output, input, temp, time, byproducts) => {
    let recipe = {
        type: "tconstruct:melting",
        result: output.toJson(),
        ingredient: input,
        temperature: temp,
        time: time
    }

    if(byproducts)
        recipe.byproducts = byproducts

    return event.custom(recipe)
}