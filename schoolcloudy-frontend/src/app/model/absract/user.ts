import { Contact } from "app/model/absract/contact";
import { Gender } from "app/model/absract/gender.enum";
import { Credential } from "app/model/absract/credential";

export interface User {
    internalId:number;
    externalId:string;
    firstName:string;
    lastName:string;
    middleName:string;
    dateOfBirth:Date;
    user:string;
    contact:Contact;
    gender:Gender;
    credential:Credential;
    startDate:Date;
    endDate:Date;

    getInternalId():number;
    getUser():string
}
