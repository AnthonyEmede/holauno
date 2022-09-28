const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  ];

// forEach
const usernameArray = [array[0].username, array[1].username, array[2].username, array[3].username];
const newArray = [];
const forEachArray = usernameArray.forEach((names) => {
    newArray.push(names + "!");
});
console.log(newArray);

// Map
const mapArray = usernameArray.map((names) => {
    return names + "?";
})
console.log(mapArray);

// const filterArray = usernameArray.filter((names) => )
const filterArray = array.filter((user) => {
    return user.team === "red";
    console.log(user);
})
filterArray;


// Reduce
const scoreArray = [array[0].score, array[1].score, array[2].score, array[3].score];
const reduceArray = scoreArray.reduce((acc, score) => {
    return acc + score;
}, 0)
console.log(reduceArray);

// eliminating side effects and attaining deterministic
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num) => {
	// console.log(num, i);
	// alert(num);
	return num * 2;
})

// BONUS
array[0].items = array[0].items.map(obj => obj + "!");
array[1].items = array[1].items.map(obj => obj + "!");
array[2].items = array[2].items.map(obj => obj + "!");
array[3].items = array[3].items.map(obj => obj + "!");

const newArray = array;
newArray;

const newItem = array.map((user) => {
    user.items = user.items.map((items) => {
      return items + "!";
    })
    return user
})
console.log(newItem);


// Instantiating
class Player {
    constructor(name, type) {
      console.log("player", this);
      this.name = name
      this.type = type
    }
    introduce() {
      console.log(`Hi, i'm  ${this.name} and i'm a ${this.type}`);
    }
}

class Knights extends Player {
    constructor(name, type) {
      super(name, type)
      console.log("knights", this);
    }
    play() {
      console.log(`People of westeros, I'm a ${this.type}`);
    }
}

const knights1 = new Knights("Cristan Cole", "Kingsguard");
const knights2 = new Knights("Arthur Dayne", "Commander of the Kingsguard");

let houses = {
  north: "starks",
  west: "lannisters",
  south: {
    south_west: "velaryon",
    south_east: "tyrells",
  },
};

let houses2 = houses;
let clonedHouse = JSON.parse(JSON.stringify(houses));

houses.south.south_east = "Selmy";

console.log(houses);
console.log(houses2);
console.log(clonedHouse);


// Check if this array includes any name that has "John" inside of it. If it does, return that name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

const newName = dragons.filter((names) => {
	return names.includes("John");
	console.log(names)
})
newName;

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power = (x) => (x**100);
power(2);

const power1 = (x) => (x**100);
power1(1000);

let obj = {
  username0: "vince",
  username1: "alec",
  username2: "maeve",
}

Object.keys(obj).forEach((key, value) => {
  console.log(keys, obj[keys]);
})

Object.entries(obj).forEach((value) => {
  return value[1] + value[0].replace("username", "");
})



// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer',
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map((value) => value[0] + " " + value[1] + " ").join('').trimEnd()

                                                // OR

Object.entries(obj).map((value) => value.join(" ")).join(' '


const meed = [1, 2, ["shit", "grimm", [55, 90, "dragon"]]]
meed.flat()