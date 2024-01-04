import { Injectable } from '@nestjs/common';

@Injectable()
export class BookIdService {
  generateUniqueBookID(): string {
    let orderId = 'BOK' + new Date().getTime();
    const randomRound = 6;

    for (let index = 0; index < randomRound; index++) {
      const randomNum = Math.floor(Math.random() * 10);
      orderId = orderId + randomNum.toString();
    }
    return orderId;
  }
}
