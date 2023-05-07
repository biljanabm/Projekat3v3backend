import { Body, Controller, Delete, Get, Path, Post, Put, Route } from "tsoa";
import { Oblast } from "../../../mysql/models/Oblast";
import { oblastDAO } from "../../../mysql/models/OblastDAO";

@Route("oblast")
export class OblastController extends Controller{

   
    @Get("getAllOblast")
    async getAllOblast() {
        return await oblastDAO.getAllOblast();
    }

    @Post("")
    async insertOblast(@Body() oblast: Oblast) {
        let result = await oblastDAO.insertOblast(oblast);
        return result;
    }

    @Put("editOblast")
    async editOblast(@Body() oblast: Oblast) {
        return await oblastDAO.editOblast(oblast);
    }

    @Delete("deleteOblast/{idOblasti}")
    async deleteBook(@Path() idOblasti: number) {
        return await oblastDAO.deleteOblast(idOblasti);
    }
    
}