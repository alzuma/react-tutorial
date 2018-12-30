import { Browser, launch } from 'puppeteer';

describe('Mom test', () => {
    let browser: Browser;

    beforeEach(async () => {
        browser = await launch({
            headless: false,
        });
    });

    afterEach(async () => {
        await browser.close();
    });

    test('Go to root of web and it should contain Hello Mom message', async () => {
        const page = await browser.newPage();

        await page.emulate({
            viewport: {
                width: 500,
                height: 2400,
            },
            userAgent: 'hello mom agent',
        });

        await page.goto('http://localhost:8080');
        await page.waitForSelector('#message');

        const html = await page.$eval('#message', (e: any) => e.innerHTML);
        expect(html).toBe('Hello Mom!');
    }, 16000);
});
