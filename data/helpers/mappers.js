module.exports = {
    intToBoolean,
    booleanToint,
    characterToBody,
    ablilityToBody
}

function intToBoolean(int) {
    return int === 1 ? true : false;
}

function booleanToint(bool) {
    return bool === true ? 1 : 0;
}

function characterToBody(character) {
    const result = {
        ...character
    }

    if(character.abilities) {
        result.abilities = character.abilities.map(ability => ({
            ...ability
        }))
    }
    return result
}

function ablilityToBody(ability) {
    return {
        ...ability
    }
}