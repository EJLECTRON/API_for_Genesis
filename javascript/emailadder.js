import chalk from 'chalk';

import fs from 'fs';

function emailAdder(email) {
  var file = fs.readFileSync("../json/data.json");

  const obj = JSON.parse(`${file}`);

  obj[`${email}`] = `${email}`;

  var data = JSON.stringify(obj, null, 2);

  fs.writeFileSync('../json/data.json', data);
}

export { emailAdder }
