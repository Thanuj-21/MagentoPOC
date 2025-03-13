import {test} from '@playwright/test';
import { readFile, utils, read as _read } from 'xlsx';
import { readDataFromExcelFile } from './ReadExcelFileUtils';

const data = readDataFromExcelFile('MagentoData.xlsx')
for(const linefromExcel of data){
test(`${linefromExcel.ID} - ${linefromExcel.Prod_url}`, async({page}) => {
    await page.goto(linefromExcel.Prod_url);
    await page.waitForLoadState('load');
})
}