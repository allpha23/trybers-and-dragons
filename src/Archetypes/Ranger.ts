import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  _energyType: EnergyType;
  
  static numAchertype = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
    Ranger.numAchertype += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.numAchertype;
  }

  get energyType() {
    return this._energyType;
  }
}

export default Ranger;