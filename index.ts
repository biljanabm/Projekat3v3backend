import { initApi } from "./api/initApi";                
import { dbConnection } from "./mysql/initMysql";       


initApi();                      
dbConnection.connect();         

// ovo sve pisemo za mySQL
// proba gita
