import { Contact } from './contact';
import { Gender } from './gender.enum';
import { Credential } from './credential';



export interface User {
    internalId: number;
    externalId: string;
    firstName: string;
    lastName: string;
    middleName: string;
    dateOfBirth: Date;
    user: string;
    contact: Contact;
    gender: Gender;
    credential: Credential;
    startDate: Date;
    endDate: Date;

    getInternalId(): number;
    getUser(): string;
}
