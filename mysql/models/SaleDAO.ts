import { dbConnection } from "../initMysql";
import { Sale } from "./Sale";

class SaleDAO{


    async getAllSales(): Promise<Sale | null>{
        return new Promise((resolve, reject )=> {
            var sqlQuery = "SELECT * FROM sale JOIN user USING (idu)";
            dbConnection.query(sqlQuery, null, function(err, rows){
                if(err) return reject(err);
                else resolve(JSON.parse(JSON.stringify(rows)))  
            })
        })
    }

}

export const saleDAO = new SaleDAO()