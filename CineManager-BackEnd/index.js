import puppeteer from "puppeteer";

(async () => {
	
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5173');

    // perform various browser actions

    await browser.close();
})();