import { User } from '../../users/interfaces/user.interface';
export interface LoginResponse {
    userLogged : User
    jwt : string;
}
