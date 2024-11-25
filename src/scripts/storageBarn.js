export const barn = () => {
    return {
        crops: [],
        push: function (crop){
            crop.push(crop);
        },
        pop: function () {
            return crops.pop();
        },
        peek: function () {
            return crops[this.crops.length - 1].type;
        },
        isEmpty: function () {
            return crops.length === 0
        }
        
    }
}

//what behaviors does the barn have?
    //put something in the barn (push into the barn)
    //pop something out of the barn
    //is the barn empty or not?
    //




/*
    Create objects that have both properties methods (push and pop) stored in it.




*/