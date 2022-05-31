//  Enter sheet name where results will be collected
var SHEET_NAME = "Sheet1";
var CHOICES_SHEET_NAME = "Choices"; //We will use it later

var SCRIPT_PROP = PropertiesService.getScriptProperties(); // new property service

//Fetching choice options from spreadsheet
function doGet(e) {
	return getDataFromSheet();
}

function doPost(e) {
	return handleResponse(e);
}


function set_Data_in_Sheet() {
	var doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));
	sheet1 = doc.getSheetByName(SHEET_NAME);
	var sheet1_headers = sheet1.getRange(1, 1, 1, sheet1.getLastColumn()).getValues()[0];
	sheet2 = doc.getSheetByName(CHOICES_SHEET_NAME);
	var sheet2_headers = sheet2.getRange(1, 1, 1, sheet2.getLastColumn()).getValues()[0];

	for (k in sheet1_headers) {
		if (sheet1_headers[k] == "mileseconds") {
			var mileseconds_Column_number = parseFloat(k) + 1;
			var raw_durations_table = sheet1.getRange(2, mileseconds_Column_number, sheet1.getLastRow(), 1).getValues();
			var durations_table = [];
			for (j in raw_durations_table) {
				if (typeof raw_durations_table[j][0] == "number") {
					durations_table.push(raw_durations_table[j][0])
				}
			}
			var durations_average = durations_table.reduce((a, b) => a + b) / durations_table.length;
			for (l in sheet2_headers) {
				if (sheet2_headers[l] == "mean_elapsed_time") {
          var mean_elapsed_time_Column_number = parseFloat(l) + 1;
					sheet2.getRange(2, mean_elapsed_time_Column_number).setValue(durations_average);
				}
			}
		}    
    else if (sheet1_headers[k] == "visitor_fingerprint") {
      var visitor_fingerprint_Column_number = parseFloat(k) + 1;
      var raw_fingerprints_Table = sheet1.getRange(2, visitor_fingerprint_Column_number, sheet1.getLastRow(), 1).getValues();
      var fingerprints_Table=[];
      var stringified_fingerprints_Table='[';
      for (j in raw_fingerprints_Table) {
				if (raw_fingerprints_Table[j][0] != "") {
          if(!fingerprints_Table.includes(raw_fingerprints_Table[j][0])){
            fingerprints_Table.push(raw_fingerprints_Table[j][0])
            stringified_fingerprints_Table+=raw_fingerprints_Table[j][0]+',';
          }
				}
			}
      for (l in sheet2_headers) {
				if (sheet2_headers[l] == "all_fingerprints") {
          var all_fingerprints_Column_number = parseFloat(l) + 1;
					sheet2.getRange(2, all_fingerprints_Column_number).setValue(stringified_fingerprints_Table.replace(/,$/,"]"));
				}
			}
    }
	}
}
// execute function set_Data_in_Sheet
set_Data_in_Sheet()

function getDataFromSheet() {
	try {
		var doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));
		var sheet = doc.getSheetByName(CHOICES_SHEET_NAME);

		var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
		var next_2NDrow = sheet.getRange(2, 1, 1, sheet.getLastColumn()).getValues()[0];
		var data = {};
		for (var o in headers) {
			data[headers[o]] = next_2NDrow[o];
		}
		return ContentService
			.createTextOutput(JSON.stringify(data))
			.setMimeType(ContentService.MimeType.JSON);
	} catch (e) {
		return ContentService
			.createTextOutput(JSON.stringify({
				"status": "error",
				"error": e
			}))
			.setMimeType(ContentService.MimeType.JSON);
	}

}

function handleResponse(e) {
	// The LockService allows you to have only one invocation of the script or portions thereof run at a time.
	// More about: http://googleappsdeveloper.blogspot.co.uk/2011/10/concurrency-and-google-apps-script.html
	var lock = LockService.getPublicLock(); //Public lock locks for any invocation of script.
	lock.waitLock(30000);



	try {
		// Alternatively, you can hard code spreadsheet here
		// eg. SpreadsheetApp.openById("1AcsuboS3xxk0kj02ACcE_j4ASb8GrxyZscTU5IM-wqc")
		var doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));


		var sheet = doc.getSheetByName(SHEET_NAME);

		var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];





		var nextRow = sheet.getLastRow() + 1; // get next row
		var row = [];



		var data = JSON.parse(e.postData.contents); //without request it cause me troubel
		for (i in headers) {

			if (headers[i] == "response_storage_date") {
				row.push(Utilities.formatDate(new Date(), "GMT+1", "dd/MM/yyyy HH:mm:ss"));
			} else if (headers[i] == "mileseconds") {
				row.push(JSON.stringify(data[headers[i]]));
			} else if (headers[i] == "page_Load_DATE") {
				row.push(Utilities.formatDate(new Date(JSON.stringify(data[headers[i]])), "GMT+1", "dd/MM/yyyy HH:mm:ss"));
			} else if (headers[i] == "TIME_spent") {
				row.push(JSON.stringify(data[headers[i]]).replace('"', '').replace('"', ''));
			} else if (headers[i] == "Detected_Device") {
				row.push(JSON.stringify(data[headers[i]]).replace('\"', "").replace('"', ''));
			} else if (headers[i] == "visitor_fingerprint") {
				row.push(JSON.stringify(data[headers[i]]).replace('\"', "").replace('"', ''));
			} else if (headers[i] == "raw_data") {
				row.push(JSON.stringify(data[headers[i]]));
			} else {
				//To support multiple choice question (checkboxes)
				if (Array.isArray(data[headers[i]])) {
					row.push(data[headers[i]].join('|'));
				} else {
					row.push(data[headers[i]]);
				}
				//TODO: Support other types of questions
			}
		}


		sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);



		// return json success results
		return ContentService
			.createTextOutput(JSON.stringify({
				"status": "success",
				"row": nextRow
			}))
			.setMimeType(ContentService.MimeType.JSON);
	} catch (e) {
		// if error return this
		return ContentService
			.createTextOutput(JSON.stringify({
				"status": "error",
				"error": e
			}))
			.setMimeType(ContentService.MimeType.JSON);
	} finally {
		//Release public lock from line 19
		lock.releaseLock();
	}
}

function setup() {
	var doc = SpreadsheetApp.getActiveSpreadsheet();
	SCRIPT_PROP.setProperty("key", doc.getId());
}