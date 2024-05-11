const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  const filePath = path.join(__dirname, 'index.html');
  const fileUrl = `file://${filePath}`;
  await page.goto(fileUrl);

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  // Type into search box
  console.log('hi');


  // Locate the full title with a unique string
  await page.waitForSelector('.people');
  
  const listItems = await page.$$eval('.people', items => {
    // Extract the text content of each list item
    return items.map(item => item.textContent);
  });

  // Print the full title
  console.log('The attendees are', listItems);

  await browser.close();
})();