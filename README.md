# ZIP and UNZIP folder using nodejs
Repository for zip & unzip project
-first you need to project setup with package.json file.
-then install the package adm-zip using npm install this package helps to both zip and unzip folder .
- after installed you create first  createZip.js file then import this package ...
```
const AdmZip = require("adm-zip");
```
once you imported then create async function and then inside this function create one new object of your AdmZip so you can easily use this functionality  like that..
```
async function createZipArchive() {
  const zip = new AdmZip();

  const outputFile = "converter.zip";

  zip.addLocalFolder("./converter");   // put your local folder path you want to zip them 
  
  zip.writeZip(outputFile);
  console.log(`Created ${outputFile} successfully`);
}

createZipArchive();
```
-run the script on terminal 
```
node createZip.js
```
- if all working well then you can see the output is successfully created zip file and you can see also one zip folder in your project directry.
- Next is for unZip create new file unZip.js import amd-zip package .
- after that we need the path package for parse the file path so install path package and import them
```
npm i path
```
import in file unZip.js
```
const path = require("path");
```
once you imported then create async function and then inside this function create one new object of your AdmZip so you can easily use this functionality  like that..
```
async function extractArchive(filepath) {
  try {
    const zip = new AdmZip(filepath);
    const outputDir = `${path.parse(filepath).name}_extracted`;
    zip.extractAllTo(outputDir);

    console.log(`Extracted to "${outputDir}" successfully`);
  } catch (e) {
    console.log(`Something went wrong. ${e}`);
  }
}

extractArchive("./converter.zip");             // put your folder path want to extract them
```
- run script on terminal 
```
node unZip.js
```
- if all working well then you can see the output is successfully extracted folder and you can see also one extract folder in same zip folder directry .
- I hope it's helpul for you and you need to more clarity with all consepts you can [explore](https://www.digitalocean.com/community/tutorials/how-to-work-with-zip-files-in-node-js) with this referense.



