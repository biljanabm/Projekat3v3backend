import mysql from "mysql2";  // u backend smo instalirali npm install mysql2 

export const dbConnection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "ZlatnoIPlavo.",  // sifra u workbencu
    database: "projekat3"     // ime baze u mySQL
})

// ovo sve pisemo za mySQL