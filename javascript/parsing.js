import chalk from 'chalk';

import fetch from "node-fetch";

import fs from 'fs';

function sendRequest(method, url) {
  return fetch(url).then((response) => {
    return response.json();
  }).then((response) => {
    const curr = response['data']['last'];

    var file = fs.readFileSync("../json/data.json");

    const obj = JSON.parse(`${file}`);

    obj["currency"] = curr;

    var data = JSON.stringify(obj, null, 2);

    fs.writeFileSync('../json/data.json', data);
  });
}

export { sendRequest }
