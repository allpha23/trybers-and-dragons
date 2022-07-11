import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  _energyType: EnergyType;
  
  static numAchertype = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
    Mage.numAchertype += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.numAchertype;
  }

  get energyType() {
    return this._energyType;
  }
}

export default Mage;