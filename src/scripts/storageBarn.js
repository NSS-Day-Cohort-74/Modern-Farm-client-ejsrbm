export const barn = () => {
    return {
        crops: [],
        push: function (crop){
            this.crops.push(crop);
        },
        pop: function () {
            return this.crops.pop();
        },
        peek: function () {
            return this.crops[this.crops.length - 1].type;
        },
        isEmpty: function () {
            return this.crops.length === 0
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