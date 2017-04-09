const {renderer, main} = require ('./webpack-partials/desktop');
const mobile = require('./webpack-partials/mobile');

let platforms = [];


if (process.env.NODE_ENV == 'desktop' || process.env.NODE_ENV == 'desktop:prod'){
  platforms = [];
  platforms.push(renderer, main);
  
}
  

if (process.env.NODE_ENV == 'mobile' || process.env.NODE_ENV == 'mobile:prod'){
  platforms = [];
  platforms.push(mobile);
}


module.exports = platforms;


