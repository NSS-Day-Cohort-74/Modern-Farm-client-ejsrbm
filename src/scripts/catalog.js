
// export const Catalog = (harvestedFoodArray) => {

//     const domElement = document.querySelector(".container");

//     let harvestHTML = '';

//     for (const foodItem of harvestedFoodArray) {
//         harvestHTML += `<section class="plant">${foodItem.type}</section>`
//     } return domElement.innerHTML = harvestHTML
// };


/*export const Catalog = (harvestedFoodArray) => {

    const domElement = document.querySelector(".container");

    const reducePlants = harvestedFoodArray.reduce((plantCount, foodItem) => {
        if (plantCount[foodItem.type]) {
                plantCount[foodItem.type]++;
        } else {
            plantCount[foodItem.type] = 1;
        } return plantCount;
    }, {});

    let harvestHTML = '';

    for (const [plantType, quantity] of Object.entries(reducePlants)) {
        harvestHTML += `
            <section class="plant">${plantType}</section>
            <section class="quantity">${quantity}</section>
            `
    } return domElement.innerHTML = harvestHTML
};*/

export const Catalog = (harvestedFoodArray) => {
    
    const domElement = document.querySelector(".container"); 

    // let foodCountedItems = []

    let harvestedFoodCount = [
        {
            type: "Asparagus",
            count: 0
        },
        {
            type: "Corn",
            count: 0
            
        },
        {
            type: "Potato",
            count: 0
        },
        {
            type: "Soybean",
            count: 0
        },
        {
            type: "Sunflower",
            count: 0
        },
        {
            type: "Wheat",
            count: 0
        }
    ]
    
    
    for (let foodType of harvestedFoodArray) {
        if (foodType.type === "Asparagus") {
            harvestedFoodCount[0].count ++
        } else if (foodType.type === "Corn") {
            harvestedFoodCount[1].count  ++
        } else if (foodType.type === "Potato") {
            harvestedFoodCount[2].count ++
        } else if (foodType.type === "Soybean") {
            harvestedFoodCount[3].count  ++
        } else if (foodType.type === "Sunflower") {
            harvestedFoodCount[4].count ++
        } else {
            harvestedFoodCount[5].count ++
        }
    }
    console.log(harvestedFoodCount)

    let harvestHTML = '';

    for (const foodItem of harvestedFoodCount) {
        harvestHTML += `
            <div>
                <section class="plant">${foodItem.type}</section>
                <section class="quantity">${foodItem.count}</section>
            </div>
        `
    } return domElement.innerHTML = harvestHTML
};


//<section class="icon">${foodItem.icon}</section>

//define and export catalog function
//create container in index.html
//should accept the harvested food array as an input
//create a variable to hold document.querySelector/getElementByID/getElementByClassName
//use .innerHTML 
