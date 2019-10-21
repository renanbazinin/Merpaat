RegExp.quote = str => str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");

function searchByAttribute(attributeKey, fatherElement, logic) {
    for (const child of fatherElement.children) {
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
    let elementHtmlStr = child.innerHTML;
    child.innerHTML = "";
    const funcLines = getInnerTextFunctionWithoutReturn(replaceBracetsWithRealValue);
    const forl =
        "for (" + attributeValue + ") {" +
        funcLines +
        "child.innerHTML += newElementHtmlStr;" +
        "}";
    eval(forl);
}
  
function getInnerTextFunctionWithoutReturn(func) {
    let lines = func.toString();
    // cut the first line:
    lines = lines.substring(lines.indexOf("\n") + 1);

    // cut the 2 last line:
    lines = lines.replace(/\r?\n?[^\r\n]*$/, "");
    lines = lines.replace(/\r?\n?[^\r\n]*$/, "");
    return lines;
}

