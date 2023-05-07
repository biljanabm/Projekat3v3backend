//Klasa User je klasa za polje Rukovodioc

export interface User{
    idRukovodioca: number;
    username: string;
    lozinka: string;
    ime: string;
    prezime: string;
    datumRodjenja: string;
    mailRukovodioca: string;
    telefon: string;
    pregledPodnetih: string;
    idInstitucije: number;
}

