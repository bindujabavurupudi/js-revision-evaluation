function createBankAccount(){
    let balance = 0;
    let transactions = [];
    return{
        deposit(amount){
            if(amount <= 0){
                return "Invalid amount";
            }
            balance += amount;
            transactions.push(`Deposited: Rs.${amount}`);
            return `Deposited: Rs.${amount}`;
        },
        withdraw(amount){
            if(amount <= 0){
                return "Invalid amount";
            }
            if(amount > balance){
                return "Insufficient Balance"
            }
            balance -= amount;
            transactions.push(`Withdrawl: Rs.${amount}`);
            return `Withdrawl: Rs.${amount}`;
        },
        getBalance(){
            return balance;
        },
        getTransactionHistory(){
            return transactions;
        }
};
}


let account1 = createBankAccount();
console.log(account1.deposit(-100));
console.log(account1.withdraw(500));
console.log(account1.deposit(500));
console.log(account1.withdraw(250));
console.log(account1.deposit(200));
console.log(account1.getBalance())
console.log(account1.getTransactionHistory())
