import { Builder, Browser, By, Key, until } from 'selenium-webdriver'
import path from 'path';
import { setTimeout as sleep } from 'timers/promises';

(async function testing() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {


    await driver.get('http://localhost:5173');

    await sleep(1000);
    await driver.findElement(By.id('connectButton')).click();


    await driver.wait(until.urlContains('login'), 2000);
    await driver.wait(until.elementLocated(By.id('loginForm')), 10000);
    await sleep(1000);

    for (let character of 'superadmin@gmail.com') {
      await driver.findElement(By.id('email')).sendKeys(character);
      await sleep(100);
    }

    for (let character of '123AZEqsd@') {
      await driver.findElement(By.id('password')).sendKeys(character);
      await sleep(100);
    }

    await sleep(1000);
    await driver.findElement(By.id('loginSubmit')).click();

    await driver.wait(until.urlContains('dashboard-admin'), 10000);
    await driver.navigate().refresh();
    await sleep(1000);

    await driver.findElement(By.id('customer')).click();
    await sleep(1000);

    await driver.wait(until.urlContains('http://localhost:5173/Customer'), 10000);
    await sleep(1000);

    await driver.findElement(By.id('handletoggleBanStatus')).click();
    await sleep(1000);

    await driver.findElement(By.id('Film')).click();
    await sleep(1000);

    await driver.wait(until.urlContains('http://localhost:5173/Films'), 10000);
    await sleep(1000);

    await driver.findElement(By.id('addButton')).click();
    await sleep(1000);

    await driver.wait(until.elementLocated(By.id('addForm')), 10000);
    await sleep(1000);

    for (let character of 'test titre') {
      await driver.findElement(By.id('titre')).sendKeys(character);
      await sleep(100);
    }

    for (let character of 'lorem lorem lorem lorem lorem lorem lorem lorem ') {
      await driver.findElement(By.id('description')).sendKeys(character);
      await sleep(100);
    }
    for (let character of 'lorem') {
      await driver.findElement(By.id('genre')).sendKeys(character);
      await sleep(100);
    }
    for (let character of '000') {
      await driver.findElement(By.id('duration')).sendKeys(character);
      await sleep(100);
    }
    await driver.findElement(By.id('year')).sendKeys('2000-01-01');
    await sleep(100);
    const imagePath = path.resolve('C:/Users/brahi/Desktop/cinéManager-FullStack - Copy/CineManager-BackEnd/uploads/img1.jpeg');
    await driver.findElement(By.id('image')).sendKeys(imagePath);
    await sleep(100);

    const videoPath = path.resolve('C:/Users/brahi/Desktop/cinéManager-FullStack - Copy/CineManager-BackEnd/uploads/video.mp4');
    await driver.findElement(By.id('video')).sendKeys(videoPath);
    await sleep(100);


    await sleep(1000);
    await driver.findElement(By.id('AddSubmitbutton')).click();
    await sleep(5000);



  } finally {

    await driver.quit();
  }

})();