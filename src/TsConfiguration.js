/**
 * General configuration file, include here what you need for app configuration.
 */


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
  }
};

export { TsCommonStyle };