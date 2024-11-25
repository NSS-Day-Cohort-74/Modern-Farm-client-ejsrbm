export const createCorn = () => {
    const cornArr = []
    const cornProperties = {
    type: "Corn",
    height: 180,
    output: 6,
    icon: "🌽",
    };
    cornArr.push(cornProperties)
    cornArr.push(cornProperties)
    return cornArr
}

//create the createCorn) that will be exported
//function should return an object with the properties of type, height, and output. 
//function should return an ARRAY with two identical objects