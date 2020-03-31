

let getInfo = document.getElementById('getInfo');

getInfo.onclick = function(element) {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        excute();
    });
};

function excute() {
    chrome.tabs.executeScript(null, {
        code: 'var x = document.getElementsByClassName("textarea");var s = new Array();for(let i=0;i<x.length;i++){s[i] = document.getElementsByClassName("textarea")[i].innerHTML;s}'
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






