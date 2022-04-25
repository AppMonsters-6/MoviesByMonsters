import { UserLogin } from '../model/user-login';

export class Users {

    constructor(public name: string, public phoneNumber: number, public dob: string, public userLogin: UserLogin) {

    }

}

