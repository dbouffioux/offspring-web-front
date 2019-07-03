import { Person } from './person.model';

export class Activity {
  public id?: number;
  public name: string;
  public dateDebut: string;
  public dateFin: string;
  public heureDebut: string;
  public heureFin: string;
  public creatorId: string;
  public eventId: string;
  public participants?: Person[];
}
