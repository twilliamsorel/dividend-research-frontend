module.exports = function () {
  return {
    environment: process.env.ENVIRONMENT || "development",
    cssPath: process.env.ENVIRONMENT === 'production' ? '/assets/css/main-min.css' : '/assets/css/main.css',
    jsPath: '/assets/js/main.js',
    "title": "Dividend List",
    "description": "A tool for dividend stock discovery, focused on high yield income stocks that pay monthly.",
    "baseUrl": process.env.ENVIRONMENT === 'production' ? "https://thedividendlist.com" : "localhost:8080",
    "image": "/assets/img/logo.svg"
  };
};