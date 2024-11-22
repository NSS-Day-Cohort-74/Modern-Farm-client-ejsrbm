
let fieldArray = [];


export const addPlant = (seedObject) => {
    for (const seed of seedObject) {
        if(Array.isArray(seed)){
            for (const corn of seed) {
                fieldArray.push(corn)
            }
        } else { 
            fieldArray.push(seed)
        }
    }
} 
//Is this row already added to fieldArray?
//if not create a new index/child
//if it does exist, push the plant into the child array of field array
//if seedObject is an ARRAY (CORN) then how do we separate out that array with the array.isarray method. 

export const usePlants = () => {
    return [...fieldArray]
};

//define a variable that does NOT GET EXPORTED that is an empty array
//define and export the addPlant() function
//addPlant(seedObject) function pushes the seed to the variable with the empty array
//need to look into array.isArray for corn
//define and export usePlant which is a copy of the array stored in the variable

//import tractor plants array into the field module
