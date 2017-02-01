
const localisation = {
  fi: {
    pageTitle: 'Liikenteen valvontatyökalu',
    journeyPattern: 'Reitti',
    stop: 'Pysäkki',
    searchPanel: {
      searchJourneyPatternsHintText: 'Etsi reittejä',
      searchStopsHintText: 'Etsi pysäkkejä'
    },
    journeyPatternPanel: {
      stopListTabTitle: 'Pysäkkilista',
      completedDeparturesTabTitle: 'Toteutuneet lähtöajat'
    }
  },
  en: {}
};

export function getLocalisation() {
  return localisation;
}