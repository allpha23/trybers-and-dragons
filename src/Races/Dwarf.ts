import Race from './Race';

class Dwarf extends Race {
  maxLifePoints: number;

  static numRaces = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this.maxLifePoints = 80;
    Dwarf.numRaces += 1; 
  }

  static createdRacesInstances(): number {
    return Dwarf.numRaces;
  }
}

export default Dwarf;