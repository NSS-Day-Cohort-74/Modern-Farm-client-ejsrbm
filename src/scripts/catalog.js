
// export const Catalog = (harvestedFoodArray) => {

//     const domElement = document.querySelector(".container");

//     let harvestHTML = '';

//     for (const foodItem of harvestedFoodArray) {
//         harvestHTML += `<section class="plant">${foodItem.type}</section>`
//     } return domElement.innerHTML = harvestHTML
// };


export const Catalog = (harvestedFoodArray) => {

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
};




//define and export catalog function
//create container in index.html
//should accept the harvested food array as an input
//create a variable to hold document.querySelector/getElementByID/getElementByClassName
//use .innerHTML 
