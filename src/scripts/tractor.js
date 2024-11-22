import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"


export const plantSeeds = (yearlyPlanVar) => {
  let seedObject = []
  for (const childArray of yearlyPlanVar) {
     for (const plant of childArray) {
        if (plant === "Asparagus") {
           seedObject.push(createAsparagus())
        } else if (plant === "Corn") {
           seedObject.push(createCorn())
        } else if (plant === "Potato") {
           seedObject.push(createPotato())
        } else if (plant === "Soybean") {
           seedObject.push(createSoybean())
        } else if (plant === "Sunflower") {
           seedObject.push(createSunflower())
        } else {
           seedObject.push(createWheat())
        }
     }
  }
  //console.log(seedObject)
  addPlant(seedObject);
}


//define and export plantSeeds(yearlyPlan)
        //How do we iterate through parent and child arrays?
        //iterates through 3 rows and 6 plots
        // invokes corresponding factory function (ex createAsparagus)
        //Add it to the array of plants in the field module
