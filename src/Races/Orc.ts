import Race from './Race';

class Orc extends Race {
  maxLifePoints: number;

  static numRaces = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this.maxLifePoints = 74;
    Orc.numRaces += 1; 
  }

  static createdRacesInstances(): number {
    return Orc.numRaces;
  }
}

export default Orc;