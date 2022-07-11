import Race from './Race';

class Elf extends Race {
  maxLifePoints: number;

  static numRaces = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this.maxLifePoints = 99;
    Elf.numRaces += 1; 
  }

  static createdRacesInstances(): number {
    return Elf.numRaces;
  }
}

export default Elf;