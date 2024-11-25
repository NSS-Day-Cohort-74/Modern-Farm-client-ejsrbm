import {harvestPlants} from './harvester.js'

let barnWarehouse = harvestPlants()

export const barn = (barnWarehouse) => {
    for (const storedFood of barnWarehouse) {
       console.log(barnWarehouse.pop())
    }
    



}

/*
    //Need a for of loop that is going through the harvestedFood
        //for of loop is stacking each object into the barnWarehouse array
    //after everything is added to barnWarehouse we .pop the last object to the processingFacility
    //another for of loop that pops off the last item in barnWarehouse and does so until the array is empty



*/