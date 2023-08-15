import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateUser(token: object): Promise<any> {
    const obj = Object.getOwnPropertySymbols(token);
    const acess_token = token[obj[1]].xapptoken
    if (acess_token === "test"){
      return { id: 2, username: 'your-username' };
    }

    return "error"
  }
}
