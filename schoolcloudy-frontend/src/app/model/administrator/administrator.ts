import { Contact } from '../absract/contact';
import { Gender } from '../absract/gender.enum';
import { Credential } from '../absract/credential';
import { User } from '../absract/user';

export class Administrator implements User {
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
    getInternalId(): number {
    throw new Error('Method not implemented.');
    }
    getUser(): string {
    throw new Error('Method not implemented.');
    }


}
