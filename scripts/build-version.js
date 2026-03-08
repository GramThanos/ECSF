const fs = require('fs');
const path = require('path');
const output_folder = path.join(__dirname, '..', 'src');


const today = new Date();
const buildVersion = `${today.getFullYear()}${(today.getMonth()+1).toString().padStart(2,'0')}${today.getDate().toString().padStart(2,'0')}`;
fs.writeFileSync(path.join(output_folder, `build-version.json`), JSON.stringify({ buildVersion }));
