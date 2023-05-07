import { dbConnection } from "../initMysql";
import { Oblast } from "./Oblast";

class OblastDAO{


    async getAllOblast(): Promise<Oblast | null>{
        return new Promise((resolve, reject )=> {
            var sqlQuery = "SELECT * FROM oblast";
            dbConnection.query(sqlQuery, null, function(err, rows){
                if(err) return reject(err);
                 else resolve(JSON.parse(JSON.stringify(rows))) 
            })
        })
    }


    async insertOblast(oblast: Oblast) {
        var sqlQuery = "INSERT INTO oblast (nazivOblasti) VALUES (?)";
        var queryVar = [oblast.nazivOblasti];
        dbConnection.query(sqlQuery, queryVar, function (err, rows) {});
    }


    async editOblast(oblast: Oblast) {
        var sqlQuery =
            "UPDATE oblast SET nazivOblasti =? WHERE idOblasti=?";
        var queryVar = [oblast.nazivOblasti,oblast.idOblasti];
        dbConnection.query(sqlQuery, queryVar, function (err, rows) {});
    }


    async deleteOblast(idOblasti: number) {
        var sqlQuery = "DELETE FROM oblast WHERE idOblasti=?";
        var queryVar = [idOblasti];
        dbConnection.query(sqlQuery, queryVar, function (err, rows) {});
    }

}

export const oblastDAO = new OblastDAO()