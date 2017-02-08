
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
    },
    vehicleDataSearch: {
      operatorLabel: 'Liikennöitsijä',
      vehicleLabel: 'Ajoneuvo',
      timespanLabel: 'Aikaväli',
      vehicleInfoLabel: 'Ajoneuvon tiedot',
      searchButtonTittle: 'Hae'
    }
  },
  en: {}
};

export function getLocalisation() {
  return localisation;
}
