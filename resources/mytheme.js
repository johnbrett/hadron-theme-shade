

module.exports = {
  __module: {
    provides: {
      "resources/use_scripts": {},
      "resources/use_stylesheets": {},
      "resources/register_assets_dir": {
        after: ['resources/bootstrap', 'resources/hadron', 'resources/hadron-theme-nodus']
      },
      "resources/register_views_dir": {
        after: ['resources/bootstrap', 'resources/hadron', 'resources/hadron-theme-nodus']
      }
    }
  },

  register_assets_dir: function() {
    return __dirname + "/../assets";
  },

  register_views_dir: function() {
    return __dirname + "/../views";
  },

  use_scripts: function() {
    return {};
  },

  use_stylesheets: function() {
    return {};
  }
};