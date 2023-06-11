const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const localPath = process.argv[3];
//const filepath = process.argv[3];

request(url, (error, response, body) => {
  fs.writeFile(localPath, body, error => {
    if (error) {
      console.error(error);
    }
    // file written successfully
    console.log(`Downladed and saved ${body.length} bytes to ${localPath}`);
  });
});


// fs.writeFile(localPath, body, (error) => {
//   if (error) {
//    console.log('Failed to write to localPath: ', localPath);
//   } else {
//    console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
//   }
//  });
// });


// // fetcher.js
// const request = require('request');
// const fs = require('fs');
// const url = process.argv[2];
// const localPath = process.argv[3];
// const fetchAndSave = function(url, localPath) {
//  request(url, (error, response, body) => {
//   if (error) {
//    console.log('Failed to download resource: ', error);
//    return;
//   }


// /Users/anthonytran/lighthouse/page-fetcher/index.html

//Users/anthonytran/lighthouse/page-fetcher/index.txt

// page-fetcher/index.txt





//   fs.writeFile(filepath, body, error => {
//     if (error) {
//       console.log("File download incomplete");
//     } else {
//        console.log("Sucess!");
//     }
//   });