/**
 * General configuration file, include here what you need for app configuration.
 */

const TsConfiguration = {
  map: {
    baseMapUrl: 'https://api.digitransit.fi/map/v1/hsl-map/{z}/{x}/{y}.png',
    initialCenter: [24.945831, 60.192059]
  }
};

/**
 *  Use this to include css changes to common components, especially the js parameters
 *  like paper's paperZDepth. If this is not enough, you can use also plain css but try to
 *  reserve css-files to specific components needing some extra css. */
const TsCommonStyle = {
  // used by TsPanel
  paper: {
    paperZDepth: 3,
    style: {
      padding: '5px'
    }
  },
  tab: {
    style: {
      fontSize: '12px'
    }
  },
  table: {
    displayRowCheckbox: false
  }
};

export { TsConfiguration, TsCommonStyle };