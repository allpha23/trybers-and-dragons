import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  _energyType: EnergyType;
  
  static numAchertype = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
    Warrior.numAchertype += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.numAchertype;
  }

  get energyType() {
    return this._energyType;
  }
}

export default Warrior;