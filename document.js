const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://www.google.com', {waitUntil: 'networkidle2'});
	await page.pdf({path: './assets/documents/google.pdf', format: 'A4'});

	await browser.close();
})();
