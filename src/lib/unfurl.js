// https://www.npmjs.com/package/open-graph-scraper
const ogs = require('open-graph-scraper');
const options = {'url': 'https://www.ettoday.net/dalemon/post/40959'};

ogs(options, (error, results) => {
    if (error) {
        console.log('error:', error);
    } else {
        console.log('ogTitle:', results.data.ogTitle);
    }
});
   