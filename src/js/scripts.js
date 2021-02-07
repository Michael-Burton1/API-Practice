let inputAge = 1
let mercuryOutput = 0
let venusOutput = 0
let marsOutput = 0
let jupiterOutput= 0
export function mercuryAge(){
  const mercuryMultiplyer = .24
  mercuryOutput = Math.round((inputAge / mercuryMultiplyer)*10)/10;
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
export function jupiterAge(){
  const jupiterMultiplyer = 11.86
  jupiterOutput = Math.round((inputAge / jupiterMultiplyer)*1000)/ 1000;
  return jupiterOutput;
};