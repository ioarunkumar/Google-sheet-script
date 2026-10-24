function createFolderFileList() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt(
    'Create folder file list',
    'Paste the Google Drive folder URL:',
    ui.ButtonSet.OK_CANCEL
  );

  if (response.getSelectedButton() !== ui.Button.OK) return;

  const folderId = extractFolderId(response.getResponseText().trim());
  if (!folderId) {
    ui.alert('That does not look like a valid Drive folder URL or ID.');
    return;
  }

  try {
    const folder = DriveApp.getFolderById(folderId);
    const files = folder.getFiles();
    const rows = [['File name', 'Download link', 'View link', 'File type', 'File ID']];
    const fileNames = [];
    const downloadLinks = [];
    const viewLinks = [];

    while (files.hasNext()) {
      const file = files.next();
      const id = file.getId();
      const mimeType = file.getMimeType();
      const downloadUrl = getDownloadUrl(id, mimeType);
      const viewUrl = file.getUrl();

      rows.push([
        '',
        '',
        '',
        mimeType,
        id
      ]);
      fileNames.push(makeRichText(file.getName()));
      downloadLinks.push(makeRichText(downloadUrl ? 'Download' : '', downloadUrl));
      viewLinks.push(makeRichText('Open', viewUrl));
    }

    const output = SpreadsheetApp.create(`${folder.getName()} - file links`);
    const sheet = output.getSheets()[0];
    sheet.setName('Files');
    sheet.getRange(1, 1, rows.length, rows[0].length).setValues(rows);
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, rows[0].length);
    if (fileNames.length) {
      sheet.getRange(2, 1, fileNames.length, 1).setRichTextValues(fileNames.map(value => [value]));
      sheet.getRange(2, 2, downloadLinks.length, 1).setRichTextValues(downloadLinks.map(value => [value]));
      sheet.getRange(2, 3, viewLinks.length, 1).setRichTextValues(viewLinks.map(value => [value]));
    }

    ui.alert(`Created a Google Sheet with ${rows.length - 1} files:\n${output.getUrl()}`);
  } catch (error) {
    ui.alert(`Could not read that folder or create the output sheet:\n${error.message}`);
  }
}

function extractFolderId(input) {
  if (/^[A-Za-z0-9_-]+$/.test(input)) return input;

  const match = input.match(/(?:\/folders\/|[?&]id=)([A-Za-z0-9_-]+)/);
  return match ? match[1] : null;
}

function getDownloadUrl(fileId, mimeType) {
  const exportFormats = {
    'application/vnd.google-apps.document': ['docs.google.com/document', 'docx'],
    'application/vnd.google-apps.spreadsheet': ['docs.google.com/spreadsheets', 'xlsx'],
    'application/vnd.google-apps.presentation': ['docs.google.com/presentation', 'pptx'],
    'application/vnd.google-apps.drawing': ['docs.google.com/drawings', 'png']
  };
  const exportFormat = exportFormats[mimeType];

  if (exportFormat) {
    return `https://${exportFormat[0]}/d/${fileId}/export?format=${exportFormat[1]}`;
  }
  if (mimeType === 'application/vnd.google-apps.form') return '';

  return `https://drive.google.com/uc?export=download&id=${fileId}`;
}

function makeRichText(text, url) {
  const builder = SpreadsheetApp.newRichTextValue().setText(text);
  if (url) builder.setLinkUrl(url);
  return builder.build();
}