import Race from './Race';

class Halfling extends Race {
  maxLifePoints: number;

  static numRaces = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this.maxLifePoints = 60;
    Halfling.numRaces += 1; 
  }

  static createdRacesInstances(): number {
    return Halfling.numRaces;
  }
}

export default Halfling;