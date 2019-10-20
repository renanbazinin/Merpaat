function replaceBracetsWithRealValue(elementHtmlStr, i) {
    const bracetsRegex = new RegExp("{{(.*)}}", "g");
    const matchsArr = elementHtmlStr.match(bracetsRegex);

    matchsArr.forEach(match => {
        const quotRegex = new RegExp("&quot", "g");
        match = match.replace(quotRegex, '"');
    });
    const stringToValue = {};
    matchsArr.forEach(match => {
        stringToValue[match] = eval(match.slice(2, -2));
    });
    for (let [key, value] of Object.entries(stringToValue)) {
        const regex = new RegExp(RegExp.quote(key), "g");
        elementHtmlStr = elementHtmlStr.replace(regex, value);
    }
    return elementHtmlStr;
}

function ra(element) {
    element.innerHTML = replaceBracetsWithRealValue(element.innerHTML);
}
