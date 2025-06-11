class BankBalance {
  #balance = 0;

  deposit(amount) {
    return (this.#balance += amount);
  }

  getBalance() {
    return this.#balance;
  }
}

let user = new BankBalance();
user.deposit(50);
console.log(user.getBalance());

let balance = user.getBalance();
console.log(balance);

console.log(typeof balance);
