class CoffeeMachine {
  start() {
    //Complex code
    return `Starting the machine`;
  }

  brew() {
    //complex calculation
    return "Brewing the coffee";
  }

  pressStartButton() {
    let msgone = this.start();
    let msgtwo = this.brew();
    return `${msgone}
${msgtwo}`;
  }
}

let newMachine = new CoffeeMachine();
console.log(newMachine.pressStartButton());
