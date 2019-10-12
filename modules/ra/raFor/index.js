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
    const oldInnerHtml = child.innerHTML;
    child.innerHTML = "";
    const matchsArr = oldInnerHtml.match(/{{(.*)}}/g);
    matchsArr.forEach(match => {
        match = match.replace(/&quot;/g, '"');
    });

    console.log(matchsArr);
    const forl =
        "for (" +
        attributeValue +
        ") {" +
        "raForLogic1(child, oldInnerHtml, matchsArr, i);" +
        "}";
    eval(forl);
}

function raForLogic1(child, oldInnerHtml, matchsArr, i) {
    const stringToValue = {};
    matchsArr.forEach(match => {
        stringToValue[match] = eval(match.slice(2, -2));
    });
    for (let [key, value] of Object.entries(stringToValue)) {
        const regex = new RegExp(key, 'g');
        oldInnerHtml = oldInnerHtml.replace(regex, value);
    }
    child.innerHTML += oldInnerHtml;
}
