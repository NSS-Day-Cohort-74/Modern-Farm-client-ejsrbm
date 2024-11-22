import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

export const plantSeeds = (yearlyPlanVar) => {
    for (let row; row<yearlyPlanVar.length; row += 1 ) {
        for (const plant of yearlyPlanVar[row]) {
            if( plant === "Asparagus" ){
                addPlant(row, createAsparagus())
             } else if (plant === "Corn") {
                addPlant(row, createCorn())
             } else if (plant === "Potato") {
               addPlant(row, createPotato())
             } else if (plant === "Soybean") {
                addPlant(row, createSoybean())
             } else if (plant === "Sunflower") {
                addPlant(row, createSunflower())
             } else { 
                addPlant(row, createWheat())
             }
            }
    } //may need to add back a return statement
}

//define and export plantSeeds(yearlyPlan)
        //How do we iterate through parent and child arrays?
        //iterates through 3 rows and 6 plots
        // invokes corresponding factory function (ex createAsparagus)
        //Add it to the array of plants in the field module
