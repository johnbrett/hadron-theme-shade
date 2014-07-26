module.exports = function(Settings) {
  
  Settings.property('website', {
    title: {
      type: String,
      required: true
    },
    headline: String,
    bannerImage: String
  });
  

  return Settings;
};

module.exports.__module = {
  args: ['data/models/Settings']
};