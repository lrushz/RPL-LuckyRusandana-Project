const readline = require('readline');

class Calculator {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this.num1 = null;
    this.num2 = null;
    this.operator = null;
    this.result = null;
  }

  askQuestion(prompt, callback) {
    this.rl.question(prompt, (answer) => {
      callback(answer);
    });
  }

  start() {
    this.askQuestion('Masukkan angka pertama: ', (num1) => {
      this.num1 = parseInt(num1);
      this.askQuestion('Masukkan angka kedua: ', (num2) => {
        this.num2 = parseInt(num2);
        this.askQuestion('Masukkan operator (+, -, *, /): ', (operator) => {
          this.operator = operator;
          this.calculateResult();
        });
      });
    });
  }

  calculateResult() {
    switch (this.operator) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num1 / this.num2;
        break;
      default:
        console.log('Operator yang dimasukkan tidak valid.');
        this.rl.close();
        return;
    }
    console.log(`Hasil dari ${this.num1} ${this.operator} ${this.num2} = ${this.result}`);
    this.rl.close();
  }
}

const calculator = new Calculator();
calculator.start();
