import { express, fs, app, chalk, URL } from "./variablesforsender.js"

import { sendRequest } from './parsing.js'

import { emailAdder } from './emailadder.js'

import { sendEmail } from "./emailsender.js"

import bp from 'body-parser';

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

var file = fs.readFileSync("../json/data.json");

const responsedata = JSON.parse(`${file}`);

//*************************** First request******************************
app.get('/rate', (req, res) => {
  sendRequest('GET', URL).catch((error) => console.log(chalk.black.bgRed(`Error was occured(request): ${error}`)));

  const statusCode = 200;
  res.writeHead(statusCode);

  res.write(`${responsedata['currency']}`);

  res.end();
})

app.use((error, req, res, next) => {
  res.status(400);
  res.write("Invalid status value");
  res.end();
})


//*************************** Second request******************************
app.post('/subscribe', (req, res) => {
  var statusCode = 200;

  const email = req.query.email;

  if( responsedata[email] == undefined ) {
    emailAdder(email);

    res.status(statusCode);
    res.write("E-mail додано");

  } else {
    statusCode = 409;

    res.status(statusCode);
    res.write("Email has been already there");
  }

  res.end();
})

//*************************** Third request******************************
app.post('/sendEmails', (req, res) => {

  const statusCode = 200;
  res.status(statusCode);

  sendRequest('POST', URL)
    .catch((error) => console.log(chalk.black.bgRed(`Error was occured(request): ${error}`)));

  for (var key in responsedata) {
    if (key != 'currency') {
       sendEmail(key)
          .catch((error) => console.log(chalk.black.bgRed(`Error was occured: ${error}`)));
    } else {
      continue;
    }
  }

  res.write("E-mailʼи відправлено");

  res.end();
})


app.listen(3000, () => console.log(chalk.black.bgGreen("Server is running....")));

export { responsedata }
