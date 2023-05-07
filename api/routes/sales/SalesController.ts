import { Controller, Get, Route } from "tsoa";
import { saleDAO } from "../../../mysql/models/SaleDAO"

@Route("sales")

export class SalesController extends Controller{

    @Get("getAllSales")
    async getAllSales() {
        return await saleDAO.getAllSales();
    }

}