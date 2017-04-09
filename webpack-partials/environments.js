const env = {
  desktop: process.env.NODE_ENV === 'desktop',
  desktopProd: process.env.NODE_ENV === 'desktop:prod',
  mobile: process.env.NODE_ENV === 'mobile',
  mobileProd: process.env.NODE_ENV === 'mobile:prod'
};

module.exports = env;