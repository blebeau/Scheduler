import { nextLocation } from "./nextLocation";

export interface ListTileInterface {
  name: string;
  role?: string;
  currentLocation?: string;
  nextLocations?: nextLocation[];
}
