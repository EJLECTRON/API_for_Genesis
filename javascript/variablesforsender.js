import chalk from 'chalk';

import nodemailer from 'nodemailer';

import { google } from 'googleapis';

import { sendRequest } from './parsing.js';

import fs from 'fs';

import express from "express";

const URL = 'https://minfin.com.ua/api/currency/crypto/list/?filter[code]=btc';
const CLIENT_ID = '598396378254-cjd4ui8kta47alnh7gbgschghcvl0j6q.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04-QwIp7PwQh2CgYIARAAGAQSNwF-L9IrCK4Y9daU-xCrYRXNOG6DZVpchN-UXMwaIH6gUBSQKtELC_i7KrgUHe1p_zS7JNmbnkI';

const app = express();

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

export { app, express, fs, chalk, nodemailer, google, sendRequest, oAuth2Client, URL, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN}
