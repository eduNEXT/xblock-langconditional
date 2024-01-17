const path = require('path');

module.exports = {
  entry: {
    ConditionalBlockDisplay: [
        './langconditional/static/js/src/display/display.js',
        './langconditional/static/js/src/utils/xmodule.js',
        './langconditional/static/js/src/utils/javascript_loader.js',
        './langconditional/static/js/src/utils/collapsible.js'
    ],
    ConditionalBlockEdit: [
        './langconditional/static/js/src/utils/xmodule.js',
        './langconditional/static/js/src/editor/editor.js'
    ],
  },
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
        {
            test: /langconditional\/static\/js\/src\/display\/display.js/,
            use: [
                {
                    loader: 'imports-loader',
                    options: {
                        wrapper: 'window'
                    }
                }
            ]
        }
    ],
  },
};
