export function exportCSV(tableData) {
  const csv = 'data:text/csv;charset=utf-8,' + buildCSV(tableData);
  const data = encodeURI(csv);
  const link = document.createElement('a');
  link.setAttribute('href', data);
  link.setAttribute('download', 'tableData.csv');
  link.click();
}

function buildCSV(tableData) {
  return tableData.map(row => {
    return row.map(cell => '"' + cell.replace(/"/g, '""') + '"').join(',');
  }).join('\n');
}