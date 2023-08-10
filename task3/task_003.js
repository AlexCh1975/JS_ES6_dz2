/**
 * ****** Задача необязательная для выполнения:

    Это расширенная версия задачи с банком, которую мы решлали на семинаре:

    Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов. Класс должен иметь методы для добавления нового клиента, открытия нового счета для клиента, пополнения счета, снятия денег со счета и проверки баланса.

    Пример работы:

    const bank = new Bank("Мой Банк");

    const client1 = new Client("Иван", 25);
    const client2 = new Client("Мария", 30);

    bank.addClient(client1);
    bank.addClient(client2);

    bank.openAccount(client1, 1000);
    bank.openAccount(client2, 500);

    bank.deposit(123456789, 200);
    bank.withdraw(987654321, 100);
    bank.checkBalance(123456789);
    bank.checkBalance(987654321);
 */

class Bank{
    clients = [];
    accountsNumber = [123456789, 987654321];
    constructor(name){
        this.name = name;
    }

    addClient(client){
        this.clients.push(client);
    }

    getClients(client){
        for(let key in this.clients){
            if (client === this.clients[key]){
                console.log(this.clients[key]);
            }
            
        }
    }

    openAccount(client, balans){
        const key = (this.accountsNumber[this.clients.indexOf(client)]);
        client[key] = balans;
    }

    deposit(check, amount){
        for (let i = 0; i < this.clients.length; i++){
            if (check in this.clients[i]){
                const balans = this.clients[i][check] + amount;
                this.clients[i][check] = balans;
            }
        }
    }

    withdraw(check, amount){
        for (let i = 0; i < this.clients.length; i++){
            if (check in this.clients[i]){
                if (amount > this.clients[i][check]){
                    console.log(`На счету ${check} недостаточно средств!`)
                }else{
                    const balans = this.clients[i][check] - amount;
                    this.clients[i][check] = balans;
                }
            }
        }
    }

    checkBalance(check){
        for (let i = 0; i < this.clients.length; i++){
            if (check in this.clients[i]){
                console.log(`Клиент: ${this.clients[i].name}, Баланс: ${this.clients[i][check]}`);
            }
        }
    }
}

class Client{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getClient(){
        console.log(`name: ${this.name}, age: ${this.age}`);
    }
}

const bank = new Bank("Мой Банк");
const client1 = new Client("Иван", 25);
const client2 = new Client("Мария", 30);

bank.addClient(client1);
bank.addClient(client2);
bank.openAccount(client1, 1000);
bank.openAccount(client2, 500);

bank.getClients(client1);
bank.getClients(client2);
bank.deposit('123456789', 200);
console.log('увеличчим депозит client1 на 200');
bank.getClients(client1);
console.log('снимем с депозита client2 300');
bank.withdraw('987654321', 300);
bank.getClients(client2);
console.log('еще снимем с депозита client2 300');
bank.withdraw('987654321', 300);
console.log('посмотрим баланс clienta2');
bank.checkBalance('987654321')



