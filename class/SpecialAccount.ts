import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
    const Acrecimo = 10;

    this.setBalance(this.getBalance() + (value + Acrecimo));
  }
}