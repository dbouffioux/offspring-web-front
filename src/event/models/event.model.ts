import { Activity } from './activity.model';

export class Event {
  public id?: number;
  public name: string;
  public dateDebut: string;
  public dateFin: string;
  public heureDebut: string;
  public heureFin: string;
  public creatorId: string;
  public start: any;
  public end: any;
  public listActivity?: Activity[];
}
