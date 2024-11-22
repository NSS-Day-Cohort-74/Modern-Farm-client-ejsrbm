import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { plantSeeds } from "./tractor.js"
import { addPlant, usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

console.log("Welcome to the main module")

const yearlyPlan = createPlan() 


console.log(yearlyPlan)

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

const cornSeed = createCorn()
console.log(cornSeed)

plantSeeds(yearlyPlan)

let testUsePlants = usePlants()
console.log(testUsePlants)

const harvestedPlants = harvestPlants(testUsePlants)
console.log(harvestedPlants)
console.log(Catalog(harvestedPlants))

//import createPlan() from plan.js
//create yearlyPlan variable to store return values from createPlan()
//import SEEDS functions into main
//imports from field.js usePlants() and addPlants()
//imports from tractor.js plantSeeds(yearlyPlan)
//import harvestPlants(usePlants()?)

//harvest them by invoking the appropriate function that you defined above. Make sure you specify the array of plants as an argument to the harvesting function.
//import catalog to main and execute the function and use array of food as argument.