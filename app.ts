import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(123, 'Giovanne', 10)

console.log(peopleAccount)
peopleAccount.deposit(100)
console.log(peopleAccount)
peopleAccount.withdraw(50)
console.log(peopleAccount)
peopleAccount.withdraw(51)

const companyAccount: CompanyAccount = new CompanyAccount('Nath', 10)

console.log(companyAccount)
companyAccount.deposit(100)
console.log(companyAccount)
companyAccount.withdraw(50)
console.log(companyAccount)
companyAccount.withdraw(51)
companyAccount.getLoan(100)
console.log(companyAccount)

const specialAccount: SpecialAccount = new SpecialAccount('Talissa', 10)

console.log(specialAccount)
specialAccount.deposit(100)
console.log(specialAccount)
specialAccount.withdraw(50)
console.log(specialAccount)
specialAccount.withdraw(51)
specialAccount.deposit(100)
console.log(specialAccount)
