const DummyVehicleEvents = [
  {
    'id': '79904567865',
    'timestamp': '2017-02-03T07:01:00.000',
    'type': 'SIGNON',
    'subtype': 'DRIVER_SIGNON',
    'eventData': {'driverId': '345', 'attribute2': 'value2', 'attribute3': 'value3'}
  },
  {
    'id': '79904567866',
    'timestamp': '2017-02-03T07:02:00.000',
    'type': 'SIGNON',
    'subtype': 'JOURNEY_SIGNON',
    'eventData': {'lineDesignation': '65', 'direction': '1', 'journeyNumber': '43462', 'plannedStartTime': '07:20' }
  },
  {
    'id': '79904567867',
    'timestamp': '2017-02-03T07:03:00.000',
    'type': 'DOOR',
    'subtype': 'DOOR_OPEN',
    'eventData': {'attributeX': 'valueX' }
  },
  {
    'id': '79904567868',
    'timestamp': '2017-02-03T07:04:00.000',
    'type': 'TICKETING',
    'subtype': 'TICKET_SALE',
    'eventData': {'attributeX': 'valueX' }
  },
  {
    'id': '79904567869',
    'timestamp': '2017-02-03T07:05:00.000',
    'type': 'TICKETING',
    'subtype': 'CARD',
    'eventData': {'attributeX': 'valueX' }
  },
  {
    'id': '79904567870',
    'timestamp': '2017-02-03T07:06:00.000',
    'type': 'DOOR',
    'subtype': 'DOOR_CLOSE',
    'eventData': {'attributeX': 'valueX' }
  },
  {
    'id': '79904567871',
    'timestamp': '2017-02-03T07:07:00.000',
    'type': 'STOP',
    'subtype': 'STOP_DEPARTURE',
    'eventData': {'stopCode': '1020122', 'stopShortCode': 'H2050', 'stopName': 'Rautatientori'}
  },
  {
    'id': '79904567872',
    'timestamp': '2017-02-03T07:08:00.000',
    'type': 'TLP',
    'subtype': 'TLP_REQ',
    'eventData': {'attributeX': 'valueX'}
  },
  {
    'id': '79904567873',
    'timestamp': '2017-02-03T07:09:00.000',
    'type': 'TLP',
    'subtype': 'TLP_ACK',
    'eventData': {'attributeX': 'valueX'}
  },  
  {
    'id': '79904567874',
    'timestamp': '2017-02-03T07:10:00.000',
    'type': 'STOP',
    'subtype': 'STOP_ARRIVAL',
    'eventData': {'stopCode': '1020105', 'stopShortCode': 'H2061', 'stopName': 'Kaisaniemenpuisto'}
  },  
  {
    'id': '79904567875',
    'timestamp': '2017-02-03T07:11:00.000',
    'type': 'BUS_FULL',
    'subtype': null,
    'eventData': {'attributeX': 'valueX'}
  },
  {
    'id': '79904567876',
    'timestamp': '2017-02-03T07:12:00.000',
    'type': 'SIGNON',
    'subtype': 'JOURNEY_SIGNOFF',
    'eventData': {'lineDesignation': '65', 'direction': '1', 'journeyNumber': '43462', 'plannedStartTime': '07:20' }
  },
  {
    'id': '79904567877',
    'timestamp': '2017-02-03T07:13:00.000',
    'type': 'SIGNON',
    'subtype': 'DRIVER_SIGNOFF',
    'eventData': {'driverId': '345', 'attribute2': 'value2', 'attribute3': 'value3'}
  }
];

export { DummyVehicleEvents };