const fs = require('fs');
const readline = require('readline');

const sample_env = "../sample/generate";
const urls_path = `${sample_env}/urls.txt`;
const extract_urls_path = `${sample_env}/extract_urls.txt`;

const readInterface = readline.createInterface({
    input: fs.createReadStream(urls_path)
});

readInterface.on('line', (line) => {    
    if (line.indexOf('http') >= 0) {
        fs.appendFileSync(extract_urls_path, cleanse(line));
    }
});

function cleanse(url) {
    let target = 'utm'
    let index = url.indexOf(target);
    url = url.replace('"', '');
    if (index > 0) {
        url = url.slice(0,index-1);
    }
    url = url + '\n';
    return url.toString('utf8');
}

/* blocking vs. non-blocking
https://blog.techbridge.cc/2019/10/05/javascript-async-sync-and-callback/
*/

/* blocking method
let data = fs.readFile(filepath);
console.log(data.toString('utf8'));
*/

/* non-blocking method
fs.readFile(filepath, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log('writing file');
        fs.appendFile('../jsurls.txt', data.toString('utf8'), (err) => {
            err ? console.log(err) : console.log('created');
        });
    }
});
*/