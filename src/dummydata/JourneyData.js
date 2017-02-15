const DummyJourneyData = 
  {
    'journeyId': '1523612990',
    'planned': {
      'startTime': '2017-02-03T07:55:00',
      'endTime': '2017-02-03T08:30:00',
      'terminalTime': 180,
      'recoveryTime': 300,
      'requiredVehicleClass': 'C',
      'contractReference': 'HELB12645423H',
      'mainOperator': {
        'id' : '7990000000002956',
        'name' : 'Helsingin Bussiliikenne Oy',
        'code' : '0012',
        'corporation' : 'Helsingin Bussiliikenne Oy',
        'shortName' : 'HelB'
      },
      'subContractors': [
        {
          'id' : '7990000000002981',
          'name' : 'Nobina Finland Oy',
          'code' : '0022',
          'corporation' : 'Nobina Finland Oy',
          'shortName' : 'NOF',
        }, {
          'id' : '7990000000003026',
          'name' : 'Nurmijärven Linja Oy',
          'code' : '0036',
          'corporation' : 'Korsisaari-yhtiöt',
          'shortName' : 'NurL',
        }      
      ],
      'authorityBlock': {
        'number': 34572,
        'previousJourney': {
          'journeyId': '1523612989',
          'plannedStartTime': '2017-02-03T07:20:00',
          'plannedEndTime': '2017-02-03T07:55:00',
          'actualStartTime': '2017-02-03T07:21:00',
          'actualEndTime': '2017-02-03T07:52:00',
          'variant': null,
          'directionOfLine': {'direction': '1', 'destination': 'Veräjälaakso'},
          'line': {'designation': '65', 'transportMode': 'BUS'}
        },
        'nextJourney': {
          'journeyId': '1523612991',
          'plannedStartTime': '2017-02-03T08:40:00',
          'plannedEndTime': '2017-02-03T09:10:00',
          'actualStartTime': '2017-02-03T08:41:00',
          'actualEndTime': '2017-02-03T09:12:00',
          'variant': null,
          'directionOfLine': {'direction': '1', 'destination': 'Veräjälaakso'},
          'line': {'designation': '65', 'transportMode': 'BUS'}
        }
      },
      'operatorBlock': {
        'number': 13,
        'previousJourney': {
          'journeyId': '1523612901',
          'plannedStartTime': '2017-02-03T07:30:00',
          'plannedEndTime': '2017-02-03T07:55:00',
          'actualStartTime': '2017-02-03T07:30:00',
          'actualEndTime': '2017-02-03T07:56:00',
          'variant': null,
          'directionOfLine': {'direction': '2', 'destination': 'Hakaniemi'},
          'line': {'designation': '74', 'transportMode': 'BUS'}
        },
        'nextJourney': {
          'journeyId': '1523612991',
          'plannedStartTime': '2017-02-03T08:40:00',
          'plannedEndTime': '2017-02-03T09:10:00',
          'actualStartTime': '2017-02-03T08:41:00',
          'actualEndTime': '2017-02-03T09:12:00',
          'variant': null,
          'directionOfLine': {'direction': '1', 'destination': 'Veräjälaakso'},
          'line': {'designation': '65', 'transportMode': 'BUS'}
        }
      }
    },
    'monitored': {
        'vehicles': [
          {
            'id': '93302392392320',
            'sideNumber': '5555',
            'vehicleClass': 'C',
            'age': 5
          }        
        ],
        'startTime': '2017-02-03T07:57:12',
        'endTime': '2017-02-03T08:28:23',
        'drivers': ['536267'],
        'totalEntries': 112,
        'maximumLoad': 45,
        'deviationCases': null,
        'deviationCaseCandidates': null,
        'bulletins': null
    }
  };

export { DummyJourneyData };    