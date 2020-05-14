// https://www.npmjs.com/package/open-graph-scraper
const ogs = require('open-graph-scraper');
const fs = require('fs');
const readline = require('readline');

const sample_env = '../sample/generate';
const extract_urls_path = `${sample_env}/extract_urls.txt`;
const title_path = `${sample_env}/title.json`;

const readInterface = readline.createInterface({
    input: fs.createReadStream(extract_urls_path)
});

// read file line by line
readInterface.on('line', (line) => {    
    let options = {
        'url': line,
        'timeout': 5000
    }
    // fetch open graph info
    ogs(options, (error, results) => {
        if (error) {
            console.log('error:', error);
        } else {
            // write to file
            fs.appendFileSync(title_path, gen(results));
        }
    });
});

function gen(results) {
    let output = '{\n';
    output += `"ogTitle": "${results.data.ogTitle}",\n`;
    output += `"ogDesc": "${results.data.ogDescription}",\n`;
    output += `"ogUrl": "${results.data.ogUrl}",\n`;
    output += '}\n';
    return output;
}

/* Response
{ 
  ogTitle: '噓！偷偷告訴你，需要通關密語、熟人帶路才找得到的 9 間超私密隱藏版酒吧！｜PopDaily 波波黛莉',
  ogDescription: '#酒吧 #ไทเปเทเค้าทำไมอ่ะ #alchemybar#barhoppingtaipei#taipeibar#cocktailbar #taipei #tablefootball...介紹 10 間你走經過很容易錯過的超隱密酒',
  ogUrl: 'https://www.popdaily.com.tw/food/1636',
  ogType: 'website',
  ogImage: 
    { 
     url: 'https://www.popdaily.com.tw/u/201912/32693ba3-db77-4bb8-9768-bbcb3344bc99.jpg',
     width: null,
     height: null,
     type: null
    } 
}
*/

// const options = {'url': 'https://www.popdaily.com.tw/food/1636'};
// 
// ogs(options, (error, results) => {
//     if (error) {
//         console.log('error:', error);
//     } else {
//         console.log('ogTitle:', results.data.ogTitle);
//     }
// });
   