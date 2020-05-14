const ogs = require('open-graph-scraper');
const options = {'url': 'https://www.ettoday.net/dalemon/post/40959'};

ogs(options, (error, results) => {
    // This is returns true or false. True if there was a error. The error it self is inside the results object.
    console.log('error:', error);
    console.log('results:', results);
});
   