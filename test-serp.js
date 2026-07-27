const fs = require('fs');
const data = JSON.parse(fs.readFileSync('jobs_cache.json', 'utf8'));
const key = Object.keys(data)[0];
console.log(JSON.stringify(data[key].jobs[0], null, 2));
