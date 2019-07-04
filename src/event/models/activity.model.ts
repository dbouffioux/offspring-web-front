import { Person } from './person.model';

export class Activity {
  public id?: number;
  public name: string;
  public dateDebut: any;
  public dateFin: any;
  public heureDebut: any;
  public heureFin: any;
  public creatorId: string;
  public eventId: string;
  public participants?: Person[];
}
