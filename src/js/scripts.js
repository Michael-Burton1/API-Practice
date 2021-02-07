let inputAge = 1
let mercuryOutput = 0
let venusOutput = 0
let marsOutput = 0
export function mercuryAge(){
  const mercuryMultiplyer = .25
  mercuryOutput = (inputAge / mercuryMultiplyer);
  return mercuryOutput;
};

export function venusAge(){
  const venusMultiplyer = .62
  venusOutput = Math.round((inputAge / venusMultiplyer)*10)/ 10;
  return venusOutput;
};

export function marsAge(){
  const marsMultiplyer = 1.88
  marsOutput = Math.round((inputAge / marsMultiplyer)*10)/ 10;
  return marsOutput;
};