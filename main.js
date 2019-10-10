﻿var HText = "";
//התלונות
for (let i = 0; i < TheProblems.Tlonot.length; i++) {
    HText += "<div id ='ck-button'><label><input class='picktlon' id='Tlonbtn" + i + "' type ='checkbox'><span>";
    HText += TheProblems.Tlonot[i].Tlon;
    HText += "</span></button></label></div>";
}


HText += "<div class='Shela' id='TheFirst'style='display:block'>";
HText += 'פרופיל:<select id="profiles"><option id="97" value="97">97</option>  <option id="82" value="82">82</option>   <option id="72" value="72">72</option>  <option id="64" value="64">64</option>  <option id="45" value="45">45</option>  </select>';
HText += "רגישות לתרופות<input type='text' style='margin-top: 1.55%;width: 150px; ' placeholder ='פירוט רגישות לתרופות' value = '' id='DrugAler' value=''>";
HText += "</div>"
HText += "<div><button style='background-color:#4c7aaf' class='picktlon' id='Tlonbtn-1' type ='button' onclick='First(0)'>התחל</button></div>";

for (let i = 0; i < data.Shelot.length; i++) {

    HText += "<div class='Shela' id='Shela" + i + "'>";

    HText += "<div class='textShela' id ='textShela'>מלווה ב" + data.Shelot[i].shela + "?</div>";

    HText += "<button class='btncheck' id='melo' type ='button' onclick='GlobalAdd(" + (i) + ",1)'>";
    HText += "מלווה"
    HText += "</button>";

    if (data.Shelot[i].type == "amount") {
        HText += "<input type='number' name='quantity' min='1' max='25' style='margin-top: 1.55%;width: 52px; ' placeholder ='מספר' id='Val" + i + "'>";
    } else if (data.Shelot[i].type == "check") {
        HText += "<input type='text' style='margin-top: 1.55%;width: 100px; ' placeholder ='פירוט נוסף' id='Val" + i + "' >";

    } else if (data.Shelot[i].type == "num") {
        HText += "<input type='number' name='quantity' min='37.5' value = '38.3' max='44.0' style='margin-top: 1.55%;width: 52px; ' placeholder ='מספר' id='Val" + i + "' step='0.1'>";
    }


    HText += "<button class='btncheck' id='shol' type ='button' onclick='GlobalAdd(" + (i) + ",0)' >";
    HText += "שולל"
    HText += "</button>";

    //HText += "</div>";

    HText += "<div><button class='btncheck' id='skip' type ='button' onclick='GlobalAdd(" + (i) + ",-1)'>";
    HText += "דלג"
    HText += "</button></div></div>"
}

document.getElementById("all").innerHTML += HText;

var anamneza = "";
var melobtn = document.getElementById("melo");
var skipbtn = document.getElementById("skip");
var sholbtn = document.getElementById("shol");

var ana = new Array(data.Shelot.length);
for (var i = 0; i < ana.length; i++) {
    ana[i] = "";
}
var DataTlonot = new Array(TheProblems.Tlonot.length);
for (var i = 0; i < DataTlonot.length; i++) {
    DataTlonot[i] = TheProblems.Tlonot[i].Tlon
}

function AddToArray(Index, kind) {

    if (kind == 1) {
        ana[Index] = "melo";
    }
    if (kind == 0) {
        ana[Index] = "shol";
    }
    if (kind == -1)
        ana[Index] = "skip";
}

function IsShelaExsit(Index) {

    console.log("Index  → " + (Index - 1))
    console.log("ana : " + ana.toString())

    if (data.Shelot[Index].Pre === data.Shelot[Index - 1].shela && ana[Index - 1] === "melo") {
        return true;
    } else if (data.Shelot[Index].Pre != "0")
        return false;


    if (Index >= data.Shelot.length)
        return false;
    for (var i = 0; i < DataTlonot.length; i++) {
        for (var w = 0; w < data.Shelot[Index].Tlon.length; w++) {
            if (DataTlonot[i] == data.Shelot[Index].Tlon[w] && document.getElementById("Tlonbtn" + i).checked) {
                return true;
            }
        }
    }
    return false;
}


function First() {
    var flag = true;
    for (var i = 0; i < DataTlonot.length; i++) {
        if (document.getElementById("Tlonbtn" + i).checked) {
            flag = false;
        }

    }
    if (flag) {
        alert("לא נבחרה תלונה")

    } else {
        document.getElementById("TheFirst").style.display = "none";
        document.getElementById("Shela" + 0).style.display = "block";
    }


}


function GlobalAdd(Index, kind) {
    AddToArray(Index, kind);
    Index++;
    if (Index < data.Shelot.length) {
        //  data.Shelot[i].shela    // שאלה לפי אינדקס
        //  data.Shelot[i].type //סוג לפי אינדקס
        //  data.Shelot[i].Tlon[?] //תלונות של בעיה לפי אינדקס
        //  TheProblems.Tlonot[i].Tlon;// תלונה לפי אינקס (אך לא ניתן לדעת את התלונה לפי האינדקס)

        //TheMainProbelms.
        var DataTlonot = new Array(TheProblems.Tlonot.length);
        //Checking all the Q
        for (var i = 0; i < data.Shelot.length; i++) {
            document.getElementById("Shela" + (i)).style.display = "none";

        }

        var TheShela = data.Shelot[Index].shela;


        if (IsShelaExsit(Index)) {

            document.getElementById("Shela" + (Index)).style.display = "block";
            document.getElementById("Shela" + (Index - 1)).style.display = "none";

        } else {
            while (!IsShelaExsit(Index) && data.Shelot.length - 1 > Index) {
                Index++;
                console.log("index " + Index + " Shela " + data.Shelot[Index].shela);
            }
            if (data.Shelot.length >= Index)
                document.getElementById("Shela" + (Index)).style.display = "block";
            document.getElementById("Shela" + (Index - 1)).style.display = "none";

        }
    } else {

        console.log("END")
        document.getElementById("TheOutput").style.display = "block";
        var Mel = "מלווה-";
        var Shol = "שולל-";


        document.getElementById("anam").innerHTML = "פרופיל " + document.getElementById("profiles").value;
        if (document.getElementById("DrugAler").value == "") {
            document.getElementById("anam").innerHTML += " לא ידועה רגישות לתרופות ";
        } else
            document.getElementById("anam").innerHTML += "רגישות ל " + document.getElementById("DrugAler").value;
        ///data.Shelot[i].Tlon[0] Main tlonoa
        var DataTlonotChecked = new Array(TheProblems.Tlonot.length);
        for (var i = 0; i < DataTlonotChecked.length; i++) {
            if (document.getElementById("Tlonbtn" + i).checked)
                DataTlonotChecked[i] = "checked";
        }

        // for (var i = 0; i < data.Shelot.length; i++) {

        //if (ana[i] != "") {
        //    var Main = -1;
        //    for (var w = 0;  w< TheProblems.Tlonot.length; w++) {
        //        if (data.Shelot[i].Tlon[0] == document.getElementById("Tlonbtn" + w).checked) {
        //            Main = w;
        //            w=999999;
        //        }
        //    }

        //}


        //console.log("Shela " + data.Shelot[i].shela + " And chose: " + ana[i]);
        //if (ana[i] == "melo")
        //    Mel += " " + data.Shelot[i].shela;
        //else if (ana[i] == "shol")
        //    Shol += " " + data.Shelot[i].shela;

        //}
        var textfortext = CreateAnaText();

        document.getElementById("anam").innerHTML += textfortext;

    }
}

function CreateAnaText() {
    var text = "";
    for (var w = 0; w < DataTlonot.length; w++) {
        //alert("tlon " + DataTlonot[w] + "text: " + text);
        if (document.getElementById("Tlonbtn" + w).checked) {
            text += "\n";
            text += "החייל מתלונן על " + DataTlonot[w] + " ";
            var Mel = "מלווה ב- ";
            var Shol = "שולל- ";
            for (var i = 0; i < data.Shelot.length; i++) {

                //alert("shela " + data.Shelot[i].shela + "true: " + data.Shelot[i].Tlon[0].includes(DataTlonot[w]))
                if (ana[i] != "" && data.Shelot[i].Tlon.includes(DataTlonot[w]) == true) {
                    if (ana[i] == "melo") {
                        if (document.getElementById("Val" + i).value == "") {
                            Mel += " " + data.Shelot[i].shela + ", ";
                        } else
                            Mel += " " + data.Shelot[i].shela + "- " + document.getElementById("Val" + i).value + ", ";
                    } else if (ana[i] == "shol")
                        Shol += " " + data.Shelot[i].shela + ", ";
                    ana[i] = "";
                }

            }
            text += Mel + "\n" + Shol;
        }
    }


    return text;
}

