const myArray = ["camel", 265, true, "5.6"];

class bulb {
  constructor(watts, type) {
    this.watts = watts;
    this.type = type;
  }
}

const multiplyByFour = (a) => {
  return a * 4;
};

export { myArray, bulb, multiplyByFour };
