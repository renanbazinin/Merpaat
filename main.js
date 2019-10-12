var HText = "";
//התלונות

for (let i = 0; i < data.questions.length; i++) {
    HText += "<div class='questionTest' id='questionTest" + i + "'>";

    HText +=
        "<div class='textquestionTest' id ='textquestionTest'>מלווה ב" +
        data.questions[i].questionTest +
        "?</div>";

    HText +=
        "<button class='btncheck' id='melo' type ='button' onclick='GlobalAdd(" +
        i +
        ",1)'>";
    HText += "מלווה";
    HText += "</button>";

    if (data.questions[i].type === "amount") {
        HText +=
            "<input type='number' name='quantity' min='1' max='25' style='margin-top: 1.55%;width: 52px; ' placeholder ='מספר' id='Val" +
            i +
            "'>";
    } else if (data.questions[i].type === "check") {
        HText +=
            "<input type='text' style='margin-top: 1.55%;width: 100px; ' placeholder ='פירוט נוסף' id='Val" +
            i +
            "' >";
    } else if (data.questions[i].type === "num") {
        HText +=
            "<input type='number' name='quantity' min='37.5' value = '38.3' max='44.0' style='margin-top: 1.55%;width: 52px; ' placeholder ='מספר' id='Val" +
            i +
            "' step='0.1'>";
    }

    HText +=
        "<button class='btncheck' id='shol' type ='button' onclick='GlobalAdd(" +
        i +
        ",0)' >";
    HText += "שולל";
    HText += "</button>";

    //HText += "</div>";

    HText +=
        "<div><button class='btncheck' id='skip' type ='button' onclick='GlobalAdd(" +
        i +
        ",-1)'>";
    HText += "דלג";
    HText += "</button></div></div>";
}

document.getElementById("all").innerHTML += HText;

var ana = new Array(data.questions.length);
for (let i = 0; i < ana.length; i++) {
    ana[i] = "";
}
var DataTlonot = new Array(TheProblems.Tlonot.length);
for (let i = 0; i < DataTlonot.length; i++) {
    DataTlonot[i] = TheProblems.Tlonot[i].Tlon;
}

function AddToArray(Index, kind) {
    if (kind === 1) {
        ana[Index] = "melo";
    }
    if (kind === 0) {
        ana[Index] = "shol";
    }
    if (kind === -1) ana[Index] = "skip";
}

/**
 * @return {boolean}
 */
function IsquestionTestExsit(Index) {
    if (
        data.questions[Index].condition === data.questions[Index - 1].questionTest &&
        ana[Index - 1] === "melo"
    ) {
        return true;
    } else if (data.questions[Index].condition) {
        return false;
    }

    if (Index >= data.questions.length) return false;
    for (var i = 0; i < DataTlonot.length; i++) {
        for (var w = 0; w < data.questions[Index].Tlon.length; w++) {
            if (
                DataTlonot[i] === data.questions[Index].Tlon[w] &&
                document.getElementById("Tlonbtn" + i).checked
            ) {
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
        alert("לא נבחרה תלונה");
    } else {
        document.getElementById("TheFirst").style.display = "none";
        document.getElementById("questionTest" + 0).style.display = "block";
    }
}

function GlobalAdd(Index, kind) {
    AddToArray(Index, kind);
    Index++;
    if (Index < data.questions.length) {
        //  data.questions[i].questionTest    // שאלה לפי אינדקס
        //  data.questions[i].type //סוג לפי אינדקס
        //  data.questions[i].Tlon[?] //תלונות של בעיה לפי אינדקס
        //  TheProblems.Tlonot[i].Tlon;// תלונה לפי אינקס (אך לא ניתן לדעת את התלונה לפי האינדקס)

        //TheMainProbelms.
        var DataTlonot = new Array(TheProblems.Tlonot.length);
        //Checking all the Q
        for (var i = 0; i < data.questions.length; i++) {
            document.getElementById("questionTest" + i).style.display = "none";
        }

        var ThequestionTest = data.questions[Index].questionTest;

        if (IsquestionTestExsit(Index)) {
            document.getElementById("questionTest" + Index).style.display = "block";
            document.getElementById("questionTest" + (Index - 1)).style.display = "none";
        } else {
            while (!IsquestionTestExsit(Index) && data.questions.length - 1 > Index) {
                Index++;
                console.log("index " + Index + " questionTest " + data.questions[Index].questionTest);
            }
            if (data.questions.length >= Index)
                document.getElementById("questionTest" + Index).style.display = "block";
            document.getElementById("questionTest" + (Index - 1)).style.display = "none";
        }
    } else {
        console.log("END");
        document.getElementById("TheOutput").style.display = "block";
        var Mel = "מלווה-";
        var Shol = "שולל-";

        document.getElementById("anam").innerHTML =
            "פרופיל " + document.getElementById("profiles").value;
        if (document.getElementById("DrugAler").value === "") {
            document.getElementById("anam").innerHTML += " לא ידועה רגישות לתרופות ";
        } else
            document.getElementById("anam").innerHTML +=
                "רגישות ל " + document.getElementById("DrugAler").value;
        ///data.questions[i].Tlon[0] Main tlonoa
        var DataTlonotChecked = new Array(TheProblems.Tlonot.length);
        for (var i = 0; i < DataTlonotChecked.length; i++) {
            if (document.getElementById("Tlonbtn" + i).checked)
                DataTlonotChecked[i] = "checked";
        }

        // for (var i = 0; i < data.questions.length; i++) {

        //if (ana[i] != "") {
        //    var Main = -1;
        //    for (var w = 0;  w< TheProblems.Tlonot.length; w++) {
        //        if (data.questions[i].Tlon[0] == document.getElementById("Tlonbtn" + w).checked) {
        //            Main = w;
        //            w=999999;
        //        }
        //    }

        //}

        //console.log("questionTest " + data.questions[i].questionTest + " And chose: " + ana[i]);
        //if (ana[i] == "melo")
        //    Mel += " " + data.questions[i].questionTest;
        //else if (ana[i] == "shol")
        //    Shol += " " + data.questions[i].questionTest;

        //}
        var textfortext = CreateAnaText();

        document.getElementById("anam").innerHTML += textfortext;
    }
}

/**
 * @return {string}
 */
function CreateAnaText() {
    var text = "";
    for (var w = 0; w < DataTlonot.length; w++) {
        //alert("tlon " + DataTlonot[w] + "text: " + text);
        if (document.getElementById("Tlonbtn" + w).checked) {
            text += "\n";
            text += "החייל מתלונן על " + DataTlonot[w] + " ";
            var Mel = "מלווה ב- ";
            var Shol = "שולל- ";
            for (var i = 0; i < data.questions.length; i++) {
                //alert("questionTest " + data.questions[i].questionTest + "true: " + data.questions[i].Tlon[0].includes(DataTlonot[w]))
                if (
                    ana[i] !== "" &&
                    data.questions[i].Tlon.includes(DataTlonot[w]) === true
                ) {
                    if (ana[i] === "melo") {
                        if (document.getElementById("Val" + i).value === "") {
                            Mel += " " + data.questions[i].questionTest + ", ";
                        } else
                            Mel +=
                                " " +
                                data.questions[i].questionTest +
                                "- " +
                                document.getElementById("Val" + i).value +
                                ", ";
                    } else if (ana[i] === "shol")
                        Shol += " " + data.questions[i].questionTest + ", ";
                    ana[i] = "";
                }
            }
            text += Mel + "\n" + Shol;
        }
    }

    return text;
}
