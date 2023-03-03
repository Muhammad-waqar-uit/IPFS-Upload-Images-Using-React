// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';

// const ParseExcell = () => {
//   const [excelData, setExcelData] = useState([]);

//   const handleFile = async (e) => {
//     const file = e.target.files[0];
//     const data = await file.arrayBuffer();
//     const workbook = XLSX.read(data);
//     const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//     const jsonData = XLSX.utils.sheet_to_json(worksheet);
//     setExcelData(jsonData);
//   }

//   return (
//     <div>
//       <h1>Excel File For MetaData</h1>
//       <input type='file' onChange={(e) => handleFile(e)} />
//     </div>
//   )
// }

import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ParseExcell = ({ setExcelData }) => {
  const handleFile = async (e) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    setExcelData(jsonData);
  }

  return (
    <div>
      <h1>Excel File For MetaData</h1>
      <input type='file' onChange={(e) => handleFile(e)} />
    </div>
  )
}

export default ParseExcell;