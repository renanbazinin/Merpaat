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
  const oldInnerHtml = child.innerHTML;
  child.innerHTML = "";

  const forl =
    "for (" +
    attributeValue +
    ") {" +
    "raForLogic1(child, oldInnerHtml, i);" +
    "}";
  eval(forl);
}

function raForLogic1(child, oldInnerHtml, i) {
    const parsedElementHtmlStr = replaceBracetsWithRealValue(oldInnerHtml, i);
    child.innerHTML += parsedElementHtmlStr;
  }
  


