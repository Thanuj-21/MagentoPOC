import * as fs from 'fs';
import { type } from 'os';
import path from 'path';
import XLSX from 'xlsx';

const excelFolderPath = 'C:/Users/2303723/OneDrive - Cognizant/Desktop/Playwright/tests/TestsData/';

export function readDataFromExcelFile(fileName) {
  const fullPath = excelFolderPath + fileName;
  // console.log(`READING XLSX FILE ${fullPath}`)
//   if (!fs.existsSync(fullPath)) {
//     throw new Error(`CANNOT FIND FILE ${fullPath}. PLEASE MAKE SURE IT EXISTS!`);
//   }
  const workbook = XLSX.readFile(fullPath);
  const dataFromFirstSheet = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
  return dataFromFirstSheet;
}