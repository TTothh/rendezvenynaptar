const puppeteer = require('puppeteer');
const express = require('express');

const app = express();

app.get('/page', async (req, res) => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(req.query.url);
	await page.waitForSelector(req.query.selector);
	const fullPage = await page.$$(`${req.query.selector} > *`);
	
	// Respond with the image
	res.writeHead(200, {
		'Content-Type': 'text/html',
		'Content-Length': fullPage.length
	});
	res.end(fullPage);
	
	await browser.close();
})

app.listen(4000);