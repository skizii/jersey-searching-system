import storesJson from '../db/example.json';
import { Store } from '../types/store';

export function getStores(): Store[] {
  return storesJson as Store[];
}