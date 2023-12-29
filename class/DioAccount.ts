export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  protected setBalance = (value: number): void => {
    this.balance = value
  }

  protected getBalance = (): number => {
    return this.balance;
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value;
      console.log(`Voce depositou ${value}, saldo atual ${this.balance}`)
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.balance >= value){
      this.balance-=value;
      console.log(`Voce sacou ${value}, saldo atual ${this.balance}`);
    } else {
      console.log('Saldo insuficiente');
    }
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
