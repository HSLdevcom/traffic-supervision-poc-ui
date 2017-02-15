
const localisation = {
  fi: {
    pageTitle: 'Liikenteen valvontatyökalu',

    journeyPattern: 'Reitti',
    line: 'Linja',
    stop: 'Pysäkki',
    operator: 'Liikennöitsijä',
    driver: 'Kuljettaja',

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
        "DRIVER_SIGNOFF": "Kujettajan poiskirjautuminen",
        "JOURNEY_SIGNON": "Lähdölle kirjautuminen",
        "DOOR_OPEN": "Ovi auki",
        "TICKET_SALE": "Lipunmyynti",
        "CARD": "Kortti",
        "DOOR_CLOSE": "Ovi kiinni",
        "TLP_REQ": "Liikennevaloetuisuus pyyntö",
        "TLP_ACK": "Liikennevaloetuisuus kuittaus",
        "STOP_ARRIVAL": "Pysäkille saapuminen",
        "STOP_DEPARTURE": "Pysäkiltä lähteminen",
        "BUS_FULL": "Bussi täynnä",
        "JOURNEY_SIGNOFF": "Lähdöltä poiskirjautuminen"
      },
      eventDataTypes: {
        "driverId": "Kuljettajan tunnus",
        "lineDesignation": "Linjatunnus",
        "direction": "Suunta",
        "journeyNumber": "Reitin numero",
        "plannedStartTime": "Suunniteltu lähtöaika",
        "stopCode": "Pysäkki koodi",
        "stopShortCode": "Pysäkin tunnus",
        "stopName": "Pysäkkin nimi",
      }
    },
    stopVisitDialog: {
      journeyPatternCheckboxTitle: "Linjat:",
      googleStreetViewButton: "Google katunäkymä"
    },
    journeyDataPanel: {
      startTime: 'Lähtöaika',
      endTime: 'Lopetusaika',
      terminalTime: 'Terminaaliaika',
      recoveryTime: 'Elpymisaika',
      requiredVehicleClass: 'Kalustovaatimus',
      contractReference: 'Kilpailukohde',
      subContractors: 'Alihankkijat',
      entries: 'Nousut',
      maximumLoad: 'Maksimikuorma',
      deviationCases: 'Poikkeamatiedot',
      bulletins: 'Tiedotteet'
    },
    blockDialog: {
      dialogTitle: "HSL:n tai Liikennöisijän lähtöketju"
    },
    journeyBulletinsDialog: {
      dialogTitle: "Lähdön aikana voimassa olleet tiedotteet"
    },
    journeyDeviationDialog: {
      dialogTitle: "Lähdön poikkeamatiedot"
    }
  },
  en: {}
};

export function getLocalisation() {
  return localisation;
}
