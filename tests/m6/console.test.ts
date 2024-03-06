import {test, expect} from '@playwright/test'

test('Console check', async({page})=>{
    page.on('console', msg=>{
        console.log(msg);
        expect.soft(msg.type()).not.toEqual('error');
    });

    page.on('pageerror',error=>{
        console.log(`Found an error: ${error.name}, ${error.message}`);
        expect.soft(error.name).not.toEqual('Error');
    });

    page.goto('/')
    await page.getByRole('button',{name:'Register'}).click();

});

