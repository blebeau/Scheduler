import { nextLocation } from "./nextLocation";

export interface StaffInterface {
  name: string;
  role: string;
  currentLocation: string;
  nextLocations: nextLocation[];
}
