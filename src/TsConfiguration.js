/**
 * General configuration file, include here what you need for app configuration.
 */

const TsConfiguration = {
  map: {
    baseMapUrl: 'https://api.digitransit.fi/map/v1/hsl-map/{z}/{x}/{y}.png',
    initialCenter: {
      longitude: 24.945831,
      latitude: 60.192059
    },
    journeyPattern: {
      linkColor: '#007ac9',
      linkLineWidth: 8
    },
    vehicleLocation: {
      linkColor: '#f44262',
      linkLineWidth: 8
    }
  },
  // Time difference in seconds between vehicle location points before
  // the journey is cut to parts
  vehicleLocationDiffMax: 60
};

/**
 *  Use this to include css changes to common components, especially the js parameters
 *  like paper's paperZDepth. If this is not enough, you can use also plain css but try to
 *  reserve css-files to specific components needing some extra css. */
const TsCommonStyle = {
  tsPanel: {
    width: 400,
    openCloseButton: {
      width: '20px',
      position: 'fixed',
      top: function () { return window.innerHeight / 2 + 'px' },
      leftRight: function (visible) { return visible ? TsCommonStyle.tsPanel.width : 0}
    }
  },
  // used by TsPanel
  paper: {
    paperZDepth: 3,
    style: {
      padding: '5px'
    }
  },
  raisedButton: {
    height: '20px'
  },
  tab: {
    style: {
      fontSize: '12px'
    }
  },
  table: {
    displayRowCheckbox: false,
    header: {
      enableSelectAll: false,
      displaySelectAll: false,
      adjustForCheckbox: false
    }
  }
};

export { TsConfiguration, TsCommonStyle };
