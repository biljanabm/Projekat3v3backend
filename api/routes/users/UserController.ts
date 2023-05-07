import { Body, Controller, Get, Post, Route } from "tsoa";
import { User } from "../../../mysql/models/User";
import { userDAO } from "../../../mysql/models/UserDAO";

@Route("users")
export class UserController extends Controller{

    @Post("login")
    async login(@Body()user: User) {
        return await userDAO.login(user.username, user.lozinka)
    }
    // obradjuje rute users, ako stigne sa lokal host 5000 user/login to ce moci da se obradi
    // uzmem iz bodija parametre, zovem DAO i pokusam login 


    @Post("register")
    async register(@Body() user: User){
        return await userDAO.register(user);
    }

    @Get("getAllUsers")
    async getAllUsers() {
        return await userDAO.getAllUsers();
    }

}
