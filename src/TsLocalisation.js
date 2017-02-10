
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
    },
    vehicleDataAccordion: {
      vehicleOperatingDayJourneysTitle: 'Liikennevuorokauden lähdöt',
      vehicleEventsTitle: 'Tapahtumat'
    },
    vehicleEvents: {
      timeLabel: "Aika",
      eventLabel: "Tapahtuma",
      types: {
        signOn: "Kirjautuminen",
        ticketing: "Lipputapahtumat",
        busFull: "Bussi täynnä",
        stop: "Pysäkkiohitukset",
        door: "Ovitapahtumat",
        tlp: "LIVA-tapahtumat"
      },
      subtypes: {
        "DRIVER_SIGNON": "Kujettajan kirjautuminen",
        "JOURNEY_SIGNON": "Lähdölle kirjautuminen",
        "DOOR_OPEN": "Ovi auki",
        "TICKET_SALE": "Lipunmyynti",
        "CARD": "Kortti",
        "DOOR_CLOSE": "Ovi kiinni",
        "TLP_REQ": "Liikennevaloetuisuus pyyntö",
        "TLP_ACK": "Liikennevaloetuisuus kuittaus",
        "STOP_ARRIVAL": "Pysäkille saapuminen",
        "BUS_FULL": "Bussi täynnä",
        "JOURNEY_SIGNOFF": "Lähdöltä poiskirjautuminen"
      }
    }
  },
  en: {}
};

export function getLocalisation() {
  return localisation;
}
