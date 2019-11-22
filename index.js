const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://www.google.com');
	await page.screenshot({path: './assets/images/google.png'});

	await browser.close();
})();
