const mainComponent = document.getElementById('mainTlunotComponent');
raFor(mainComponent);

// for (let i = 0; i < TheProblems.Tlonot.length; i++) {
//     HText += "";
//     HText += TheProblems.Tlonot[i].Tlon;
//     HText += "";
// }

function searchByAttribute(attributeKey, fatherElement, logic) {
    for (const child of fatherElement.children) {
        console.log(child);
        if (child.children && child.children.length) {
            raFor(child);
        }
        if (child instanceof Object) {
            const attributeValue = child.getAttribute(attributeKey);
            if (attributeValue) {
                logic(child, attributeValue);
            }
        }
    }

}

function raFor(fatherElement) {
    searchByAttribute("raFor", fatherElement, raForLogic);
}

function raForLogic(child, attributeValue) {
    // eval('for(' + logic + '){}')
    const inner = child.innerHTML;
    child.innerHTML = "";
    const forl = "for (" + attributeValue + ") {" +
        "raForLogic1(child, inner);" +
        "}";
    eval(forl);
}

function raForLogic1(child, inner) {
    child.innerHTML += inner;
}

// function raForChild(element) {
//     searchByAttribute("raForChild", element, raForChildLogic);
// }
// function raForChildLogic(element) {
//
// }
