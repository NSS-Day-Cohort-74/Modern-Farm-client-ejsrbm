const types = ["Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"]




export const createPlan = () => {
    const plan = []

    for (let index = 0; index < 3; index++) {
        const row = []
        for (let j = 0; j < 6; j++) {
            row.push(crop.next().value)
        }
        plan.push(row)
    }

    return plan
}




/*
    This is a generator function used to randomly
    generate crop types to plants in each plot. It
    is not relevant for you implementing your code
    for this project.
*/
const crop = function* () {
    while (true) {
        const typeIdx = Math.floor(Math.random() * types.length)
        yield types[typeIdx]
    }
}()

//Loop through each row 6 times and return a plant. Each row should be it's own array.
//Export createPlan()
//On main.js, need to store createPlan() value into the yearlyPlan variable
