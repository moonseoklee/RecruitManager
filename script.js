

let getInfo = document.getElementById('getInfo');

getInfo.onclick = function(element) {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        excute();
    });
};

function excute() {
    chrome.tabs.executeScript(null, {
        code: '' +
            //'var x = document.getElementsByClassName("title");' +
            'var s = new Array();s = [[],[]];' +
            //'var idx = 0;for(var i=1;i<5;i=i+2){s[0][idx] = document.getElementsByTagName("textarea")[i].innerHTML;idx+=1;}'+
            'var x = document.getElementsByTagName("textarea");' +
            'for(var i=0;i<2;i=i+1){s[0][i] = document.getElementsByTagName("textarea")[i].value;s}'

    }, function (result) {
        console.log(result);

        var html = '';
        if (result != null) {

            for (let i = 0; i < result[0].length; i++) {
                console.log(result[0][i]);
                //let selector = '#result'+String(i);
                html += "<div>";
                html += result[0][i];
                html += "</div>";

                // document.querySelector(selector).innerText = result[0][i];}
            }

        }
        document.querySelector("#result0").innerText = html;

    });
}






