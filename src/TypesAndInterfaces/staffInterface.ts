import { nextLocation } from "./nextLocation";

export interface StaffInterface {
  id: string;
  name: string;
  role: string;
  currentLocation: string;
  nextLocations: nextLocation[];
}
