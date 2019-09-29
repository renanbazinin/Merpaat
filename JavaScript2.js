/// <reference path="JavaScript.js" />


      var btn = document.getElementById("mybtn");



if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Great success! All the File APIs are supported.
} else {
    alert('Sorry, you need HTML5 browsers!');
}


var data = '{"Shelot" : [{ "shela":"חבלה"  , "type":"check","Tlon":["כאבי ראש", "כאבי בטן", "כאבי גרון"] },' +
//'{ "shela":"כמה זמן?" , "type":"time", "Tlon":["כאבי ראש", "כאבי בטן", "כאבי גרון"] },' +
'{ "shela":"סחרחורת" , "type":"check", "Tlon":["כאבי ראש", "כאבי בטן", "כאבי גרון"] },' +
'{ "shela":"בחילות" , "type":"check" ,"Tlon":["כאבי ראש", "כאבי בטן", "כאבי גרון"] },' +
'{ "shela":"הקאות" , "type":"amount" , "Tlon":["כאבי ראש", "כאבי בטן", "כאבי גרון"]} ]}';


var TheProblems = '{"Tlonot": [{ "Tlon":"כאבי ראש" } ,' +
  '{ "Tlon":"כאבי בטן" },' +
  '{ "Tlon":"כאבי גרון" }' +
']}';

var mydata = JSON.parse(data);
var Problems = JSON.parse(TheProblems);
var HText = "";
for (var i = 0; i < Problems.Tlonot.length; i++) {
    HText += "<button class='picktlon' id='Tlonbtn" + i + "' type ='button'>";
    HText += Problems.Tlonot[i].Tlon;
    HText += "</button>";
}

HText += "<div><button style='background-color:#4c7aaf' class='picktlon' id='Tlonbtn-1' type ='button'>התחל</button></div>";
for (var i = 0; i < mydata.Shelot.length; i++) {
 
    HText += "<div class='Shela' id='Shela" + i + "'>";

    HText += "<div class='textShela' id ='textShela'>מלווה ב"+mydata.Shelot[i].shela + "?</div>";
    
    HText += "<button onclick='GlobalAdd(\"" + mydata.Shelot[i].shela + "\")' class='btncheck' id='melo' type ='button'>";
    HText += "מלווה"
    HText += "</button>";

    if (mydata.Shelot[i].type == "amount") {
        HText += "<input type='number' name='quantity' min='1' max='25' style='float:right;margin-top: 4.55%;width: 52px; ' placeholder ='מספר'>";
        HText += "<button class='btncheck' id='skip' type ='button' style='margin-left: 52px' >";


    }
    else if (mydata.Shelot[i].type == "check") {
        HText += "<input type='text' style='float:right;margin-top: 4.55%;width: 100px; ' placeholder ='פירוט נוסף'>";
        HText += "<button class='btncheck' id='skip' type ='button' style='margin-left: 100px' >";
    }
    HText += "דלג"
    HText += "</button>";

    HText += "<button class='btncheck' id='shol' type ='button'>";
    HText += "שולל"
    HText += "</button>";

    HText += "</div>";
    
}

document.getElementById("all").innerHTML += HText;

var anamneza = "";

var melobtn = document.getElementById("melo");
var skipbtn = document.getElementById("skip");
var sholbtn = document.getElementById("shol");

function GlobalAdd(val) {
    alert(val);
}