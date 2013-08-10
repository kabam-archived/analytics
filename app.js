var mwcKernel = require('mwc_kernel'),
  mwcPluginAnalytics = require('mwc_plugin_analytics');

var env = (process.env.NODE_ENV) ? (process.env.NODE_ENV) : 'development',
  config = require('./config/config.json')[env];

var mwc = mwcKernel(config);

mwc.usePlugin(mwcPluginAnalytics);

// start the server
mwc.start();
