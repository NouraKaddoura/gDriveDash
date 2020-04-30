const convertStringtoWeight = (stringToConvert) => {
  const lookupTable = {
    'answer one': 1,
    'answer 2': 2,
    'Somewhat less user friendly than other tools': 3,
    'More user friendly than other tools': 4,
    'Much More': 5
  }

  const weight = lookupTable[stringToConvert]
}
