import { dbConnection } from "../initMysql";
import { User } from "./User";

class UserDAO{


    async login(username: string, lozinka: string): Promise<User | null>{
        return new Promise((resolve, reject )=> {
            var sqlQuery = "SELECT * FROM rukovodioc WHERE " + " username=? and lozinka=?";
            var queryVar = [username, lozinka];
            dbConnection.query(sqlQuery, queryVar, function(err, rows){
                if(err) return reject(err);
                else resolve(JSON.parse(JSON.stringify(rows))[0])  
            })
        })
    }
    // saljemo korisnicko ime i lozinku a treba da dobijemp promise ili je odbijen
    // selektujemo sve , izvrsimo query i ako nije greska vraca promise sa podacima
    // on kao podatke daje redove iz tabele i da bi dobili objekte, pretvorimo u string
    // pa u json objekte, i uzmem samo prvi jer ce sigurno biti samo jedan sa tim kor_imenom


    async register(user: User){
        var sqlQuery = "INSERT INTO rukovodioc (username, lozinka, ime, prezime, datumRodjenja, mailRukovodioca, telefon, pregledPodnetih, idInstitucije) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        var queryVar = [user.username, user.lozinka, user.ime, user.prezime, user.datumRodjenja, user.mailRukovodioca, user.telefon, user.pregledPodnetih, user.idInstitucije];
        dbConnection.query(sqlQuery, queryVar, function(err, rows){})
    }


    async getAllUsers(): Promise<User | null>{
        return new Promise((resolve, reject )=> {
            var sqlQuery = "SELECT * FROM rukovodioc";
            dbConnection.query(sqlQuery, null, function(err, rows){
                if(err) return reject(err);
                 else resolve(JSON.parse(JSON.stringify(rows))) 
            })
        })
    }
        
}

export const userDAO = new UserDAO()