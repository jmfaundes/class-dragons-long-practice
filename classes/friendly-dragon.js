// Your code here
const Dragon = require('./dragon');

class FriendlyDragon extends Dragon{
    constructor(name, color, lifeGoals, friend) {
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }

    hasLifeGoals(){
        let name = this.name;
        this.lifeGoals.forEach(function(lg){
            console.log(`${name} likes to ${lg}`)
        });
    }

    helpsPeople(){
        return `${this.name} helps their friend ${this.friend}`;
    }
}

module.exports = FriendlyDragon;

//Test 1
// const puff = new FriendlyDragon(
//     "Puff",
//     "green",
//     [
//       "live by the sea",
//       "frolick in the autumn mist",
//       "help small children"
//     ],
//     "Jackie Paper"
// );
// console.log(puff);
// console.log(puff.breathesFire()); //Friendly dragons can still breathe fire!
// puff.hasLifeGoals();
// console.log(puff.helpsPeople());

//Test 2
// const toothless = new FriendlyDragon(
//     "Toothless",
//     "black",
//     [
//       "save the town of Burke",
//       "fly with a kid on his back",
//       "hang out with Vikings"
//     ],
//     "Hiccup"
//   );
//   console.log(toothless); toothless.hasLifeGoals();
//   console.log(toothless.helpsPeople());
//   console.log(toothless.breathesFire());
