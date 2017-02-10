const DummyStopVisits = 
  {
    'name': 'Rautatientori',
    'code': '1020122',
    'shortCode' : 'H2050',
    'visitingJourneyPatterns': [
      {
        'id': '234862983463',
        'variant': null,
        'directionOfLine': {'direction': '1', 'destination': 'Pajamäki'},
        'line': {'designation': '14', 'transportMode': 'BUS'},
        'stopVisits': [
            {
                'plannedTime': '05:05:00',
                'actualTime': '05:07:00',
                'delay': 120,
                'journeyId': '1523612990'
            },
            {
                'plannedTime': '05:35:00',
                'actualTime': '05:34:00',
                'delay': -60,
                'journeyId': '1523612901'
            },
            {
                'plannedTime': '06:05:00',
                'actualTime': '06:07:00',
                'delay': 120,
                'journeyId': '1523612992'
            },
            {
                'plannedTime': '06:35:00',
                'actualTime': '06:33:00',
                'delay': -120,
                'journeyId': '1523612903'
            },
            {
                'plannedTime': '07:05:00',
                'actualTime': '07:10:00',
                'delay': 300,
                'journeyId': '1523612994'
            },
            {
                'plannedTime': '07:35:00',
                'actualTime': '07:35:00',
                'delay': 0,
                'journeyId': '1523612905'
            }            
        ]
      },
      {
        'id': '234862983464',
        'variant': null,
        'directionOfLine': {'direction': '1', 'destination': 'Munkkivuori'},
        'line': {'designation': '18', 'transportMode': 'BUS'}
      },
      {
        'id': '234862983465',
        'variant': null,
        'directionOfLine': {'direction': '1', 'destination': 'Malminkartano'},
        'line': {'designation': '37', 'transportMode': 'BUS'}
      },
      {
        'id': '234862983466',
        'variant': null,
        'directionOfLine': {'direction': '1', 'destination': 'Konala'},
        'line': {'designation': '39B', 'transportMode': 'BUS'}
      },
      {
        'id': '234862983467',
        'variant': null,
        'directionOfLine': {'direction': '1', 'destination': 'Veräjälaakso'},
        'line': {'designation': '65', 'transportMode': 'BUS'},
        'stopVisits': [
            {
                'plannedTime': '15:05:00',
                'actualTime': '15:07:00',
                'delay': 120,
                'journeyId': '1523612890'
            },
            {
                'plannedTime': '15:35:00',
                'actualTime': '15:34:00',
                'delay': -60,
                'journeyId': '1523612801'
            },
            {
                'plannedTime': '16:05:00',
                'actualTime': '16:07:00',
                'delay': 120,
                'journeyId': '1523612892'
            },
            {
                'plannedTime': '16:35:00',
                'actualTime': '16:33:00',
                'delay': -120,
                'journeyId': '1523612803'
            },
            {
                'plannedTime': '17:05:00',
                'actualTime': '17:10:00',
                'delay': 300,
                'journeyId': '1523612894'
            },
            {
                'plannedTime': '17:35:00',
                'actualTime': '17:35:00',
                'delay': 0,
                'journeyId': '1523612805'
            }            
        ]
      }
    ]
  };

export { DummyStopVisits };
