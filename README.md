 <div align="center">

# ⚡ DriveLink

### Your Google Drive folder. One clean spreadsheet.

Turn a Drive folder into an organized list of file names, download links, view links, and file IDs — automatically.

**No server. No external libraries. Just Google Apps Script.**

<br/>

![Google Apps Script](https://img.shields.io/badge/GOOGLE_APPS_SCRIPT-Automation-4285F4?style=for-the-badge&logo=googleappsscript&logoColor=white)
![Open Source](https://img.shields.io/badge/OPEN_SOURCE-FREE_FOREVER-22C55E?style=for-the-badge&logo=github&logoColor=white)
![License](https://img.shields.io/badge/LICENSE-MIT-8B5CF6?style=for-the-badge)

<br/>

[✨ Features](#-features) · [🚀 Setup](#-quick-start) · [⚙️ Workflow](#️-how-it-works) · [📜 License](#-license)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%" valign="top">

### 📂 Folder to Spreadsheet

Provide a Google Drive folder URL or ID and automatically create a spreadsheet of its files.

</td>
<td width="50%" valign="top">

### 🔗 Instant File Links

Get clickable links to open files and download or export supported file types.

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🧾 File Metadata

Collect file names, MIME types, and unique Google Drive file IDs in one place.

</td>
<td width="50%" valign="top">

### 📊 Clean Spreadsheet

Get organized columns, clickable links, a frozen header row, and automatically resized columns.

</td>
</tr>
<tr>
<td width="50%" valign="top">

### ⚡ Simple Automation

Run one function from Google Apps Script. No complex installation or server configuration.

</td>
<td width="50%" valign="top">

### 🔒 Google Account Permissions

Works with your authorized Google account. It does not automatically make private files public.

</td>
</tr>
</table>

---

## 🖥️ What You Get

The generated spreadsheet looks like this:

| File name | Download link | View link | File type | File ID |
|---|---|---|---|---|
| `report.pdf` | Download | Open | PDF MIME type | File ID |
| `presentation` | Download | Open | Slides MIME type | File ID |
| `spreadsheet` | Download | Open | Sheets MIME type | File ID |

*Example layout only. Actual files and links depend on the folder you select.*

---

## 🚀 Quick Start

### Requirements

- A Google account
- Access to the Google Drive folder you want to process
- Permission to authorize Google Apps Script

### 01 — Open Apps Script

Go to [script.google.com](https://script.google.com/) and create a new project.

### 02 — Add the code

Open `Code.gs`, replace the starter code with the contents of [`Google Sheet script.gs`](./Google%20Sheet%20script.gs), and save.

### 03 — Run DriveLink

Select the function below from the function dropdown:

```javascript
createFolderFileList
```

Click **Run**.

### 04 — Authorize access

On your first run, Google will ask you to review and authorize the script's requested permissions. Review them before continuing.

### 05 — Generate your spreadsheet

Paste your Google Drive folder URL or folder ID into the prompt. Once the script finishes, open the spreadsheet URL displayed in the completion alert.

**That's it. Your file-link spreadsheet is ready.**

---

## ⚙️ How It Works

<div align="center">

**📁 Drive Folder**  
↓  
**🔎 Read File Information**  
↓  
**🔗 Generate File Links**  
↓  
**📊 Create Google Sheet**  
↓  
**✅ Ready to Use**

</div>

The script uses Google's built-in `DriveApp` and `SpreadsheetApp` services to read files and create the output spreadsheet.

### Supported download/export links

| File type | Export format |
|---|---|
| Google Docs | `.docx` |
| Google Sheets | `.xlsx` |
| Google Slides | `.pptx` |
| Google Drawings | `.png` |
| Google Forms | View link only |
| Other files | Standard Drive download URL |

---

## 🧰 Built With

| Technology | Role |
|---|---|
| Google Apps Script | Automation logic |
| `DriveApp` | Accessing Drive folders and files |
| `SpreadsheetApp` | Creating and formatting spreadsheets |
| JavaScript | Processing file metadata and generating links |

No package manager, external dependencies, or dedicated backend required.

---

## ⚠️ Notes & Limitations

- **Top-level files only:** The script lists files directly inside the selected folder. It does not scan nested subfolders.
- **Access matters:** Generated links do not bypass Google Drive permissions or restrictions.
- **Download support varies:** Direct downloads and exports may depend on the file type and account permissions.
- **New spreadsheet per run:** Every successful execution creates a new Google Sheet.
- **Google Apps Script quotas:** Very large folders may encounter execution or service limits.

---

## 🌍 Free & Open Source

DriveLink is intended to be **free for everyone to use**.

You can explore the code, adapt it for your own workflows, improve it, and share your changes under the terms of the MIT License.

No paid subscription to this project is required.

### 🤝 Contributing

Have an improvement in mind?

1. Fork this repository.
2. Create a branch for your changes.
3. Make and test your improvements.
4. Open a pull request with a description of your changes.

Bug reports and feature suggestions are welcome.

---

## 📜 License

Released under the **MIT License**.

You may use, copy, modify, distribute, sublicense, and sell copies of the software, subject to the license terms.

See [`LICENSE`](./LICENSE) for the full license text.

---

<div align="center">

### Built for simpler file management.

**Free to use. Open to improve. Made for everyone.**

⭐ If DriveLink is useful to you, consider starring the repository.

</div>
