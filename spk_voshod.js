

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('1jG6ibweArYVsAmXM9JiuXeHmaNYqBtqPxVVHwqdRmBQ')
      .getSheetByName('Лист1') || SpreadsheetApp.openById('1jG6ibweArYVsAmXM9JiuXeHmaNYqBtqPxVVHwqdRmBQ').getSheets()[0];
    
    const data = JSON.parse(e.postData.contents);
    sheet.appendRow([data.email, data.phone || '', new Date()]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: err.message}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return HtmlService.createHtmlOutput("Этот URL предназначен только для POST-запросов");
}

console.log('Отправляемые данные:', {email, phone});

