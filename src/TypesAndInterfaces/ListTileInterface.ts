import { nextLocation } from "./nextLocation";

export interface ListTileInterface {
  id: string;
  name: string;
  role?: string;
  currentLocation?: string;
  nextLocations?: nextLocation[];
}
