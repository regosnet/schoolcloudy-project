import { Contact } from './contact';
import { Gender } from './gender.enum';
import { Credential } from './credential';

export class UserImpl {
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
    getUser(): string {
        return this.user;
    }

}
