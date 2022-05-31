const AdmZip = require("adm-zip");

async function createZipArchive() {
  const zip = new AdmZip();

  const outputFile = "converter.zip";

  zip.addLocalFolder("./converter");   // put your local folder path you want to zip them 
  
  zip.writeZip(outputFile);
  console.log(`Created ${outputFile} successfully`);
}

createZipArchive();
