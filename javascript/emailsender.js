import { fs, chalk, nodemailer, google, sendRequest, oAuth2Client, URL, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN} from './variablesforsender.js'

import { responsedata } from './server.js'

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendEmail(email) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'justforsendemail3@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'Me <justforsendemail3@gmail.com>',
      to: email,
      subject: 'Хай',
      text: `Oт короче курс бітка: ${responsedata['currency']}`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return chalk.black.bgRed(`Error was occured: ${error}`);
  }
}

export { sendEmail }
