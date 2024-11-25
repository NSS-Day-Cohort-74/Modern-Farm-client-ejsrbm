
export const harvestPlants = (plantsArray) => {
    let id = 1
    let harvestedFood = []
    for (const seedObject of plantsArray) {
        if (seedObject.type === "Corn") {
            for(let output = 0; output < 3; output += 1 ){
                harvestedFood.push(
                    {
                        ...seedObject,   //{} creates a new object that spreads the seedObject's existing properties and then adds the new id property
                        id: id++
                    }
                )
            }    
        } else if (seedObject.type !== "Corn") {
                for (let output = 0; output < seedObject.output; output += 1 ){
                    harvestedFood.push(
                        {
                            ...seedObject, 
                            id: id++
                        }
                    )
            } 
            
        } 
       
    } 
    return harvestedFood
}


//define and export the harvestPlants(usePlants() or maybe ARR)
//function needs to return an array of seed objects based on outputs (iterate that array)
    //corn is half of output
