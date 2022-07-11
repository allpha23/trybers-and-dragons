import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  _energyType: EnergyType;
  
  static numAchertype = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
    Necromancer.numAchertype += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.numAchertype;
  }

  get energyType() {
    return this._energyType;
  }
}

export default Necromancer;