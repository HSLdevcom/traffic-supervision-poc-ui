const dummyJourneyPatterns = [
  {
    'id': '234862983467',
    'variant': null,
    'directionOfLine': {'direction': '1', 'description': 'Rautatientori-Käpylä-Veräjälaakso'},
    'line': {'designation': '65'}
  },
  {
    'id': '234862983468',
    'variant': null,
    'directionOfLine': {'direction': '2', 'description': 'Veräjälaakso-Käpylä-Rautatientori'},
    'line': {'designation': '65'}
  },
  {
    'id': '234862983469',
    'variant': '5',
    'directionOfLine': {'direction': '1', 'description': 'Rautatientori-Käpylä-Veräjälaakso'},
    'line': {'designation': '65'}
  }
];

export function getDummyJourneyPatterns() {
  return dummyJourneyPatterns;
}