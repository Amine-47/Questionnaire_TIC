Survey.StylesManager.applyTheme("modern");
//surveyJSON variable is defined outside thsi file
dataBase_URL = sessionStorage.getItem('dataBase_URL');
//"https://script.google.com/macros/s/AKfycbxKVRpf-CW4DujpEYPsGxQgA0VhjS9jJTiPPu3vBj68YhsElchO3RWCG3alfUStaCW53A/exec"
function toHHMMSS(duration) {
    duration = duration / 1000;
    var hours = Math.floor(duration / 3600);
    var minutes = Math.floor((duration - (hours * 3600)) / 60);
    var seconds = duration - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    elapsed = hours + ':' + minutes + ':' + seconds;
    return elapsed.substring(0, 8);
}
function sendDataToServer(survey, options) {
    stop_TIMER = Date.now();
    var Duration = stop_TIMER - start_TIMER
    const elapsed_TIME = toHHMMSS(Duration);
    //send Ajax request to your web server
    options.showDataSaving();

    console.log(log_ON_date_TIME, elapsed_TIME, Duration, deviceType, visitorId, survey.data)
    //[deviceType, JSON.stringify(survey.data)]
    $.ajax({
        //original spreadsheet: https://docs.google.com/spreadsheets/d/1WTtD8F2dtI4aiS8gZCGdicW7d3-8TY5uUfBHPHNO1oY/edit?usp=sharing
        url: dataBase_URL,
        type: 'post',
        dataType: 'json',
        data: JSON.stringify({ page_Load_DATE: log_ON_date_TIME, TIME_spent: elapsed_TIME, mileseconds: Duration, Detected_Device: deviceType, visitor_fingerprint: visitorId, raw_data: survey.data }),
        headers: {
            "Content-Type": "text/plain"
        },
        processData: false,
        complete: function (res, status) {
            if (status == 'success') {
                options.showDataSavingSuccess();
            } else {
                options.showDataSavingError();
            }
        },
    });
}

const survey = new Survey.Model(surveyJSON);
var selected_Lang = sessionStorage.getItem('selected_Lang');
survey.locale = selected_Lang;
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});