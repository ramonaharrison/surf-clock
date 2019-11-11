export const toFahrenheit = (celcius) => {
  return Math.round(celcius * 9 / 5 + 32);
}

export const toKnots = (metersPerSecond) => {
  return metersPerSecond * 1.9438444924406
}
