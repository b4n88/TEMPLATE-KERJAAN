/**
 * ===================================================
 * FUNGSI UTAMA WEB APP
 * Menampilkan halaman HTML
 * ===================================================
 */
function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('Index')
    .setTitle('Portal Finance');
}

/**
 * ===================================================
 * MENGAMBIL DATA MENU DARI GOOGLE SHEET
 * ===================================================
 */
function getMenuData() {

  // Ambil spreadsheet aktif
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // Ambil sheet MENU
  const sheet = ss.getSheetByName("MENU");

  // Ambil semua data
  const data = sheet.getDataRange().getValues();

  // Hapus header
  data.shift();

  // Bentuk object
  return data.map(row => ({
    nama: row[0],
    link: row[1],
    warna: row[2]
  }));

}
