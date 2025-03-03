import { components, selectors, trackType } from "./constants";
import { track } from "./helpers";

let digitalData;

// <----------- click events ------------>
const getComponentName = (element) => {
  let dataLayerValue = getDataLayerAttribute(element);
  if (dataLayerValue) {
    let parts = dataLayerValue["@type"]?.split("/") || "";
    return parts[parts.length - 1];
  } else {
    return "text";
  }
};

const getDataLayerAttribute = (element, isParent = true, isootb = false) => {
  let dataLayerElement = isParent
    ? element.closest(`[${selectors.dataCmpDataLayer}]`)
    : element.is(`[${selectors.dataCmpDataLayer}]`)
      ? element
      : [];
  if (dataLayerElement.length > 0) {
    let dataLayerValue = JSON.parse(
      dataLayerElement.attr(selectors.dataCmpDataLayer)
    );
    if (isootb) {
      return dataLayerValue;
    } else {
      return Object.values(dataLayerValue)[0];
    }
  } else {
    return null;
  }
};

const clickHandler = (event) => {
  // sample script from AEM documentation - for reference
  var dataObject = window.adobeDataLayer.getState(event.eventInfo.path);
  if (dataObject != null && dataObject["@type"] === "wknd/components/byline") {
    console.log("Byline Clicked!");
    console.log("Byline name: " + dataObject["name"]);
  }
};

// capture components events
const getLinkData = (element, componentName = "") => {
  let linkText ="";
  if (!componentName) {
    componentName = getComponentName(element);
  }
  let dataLayerAttribute = getDataLayerAttribute(element);
  if(!dataLayerAttribute) {return;}

  if(dataLayerAttribute.hasOwnProperty('image')){
    linkText = `image:${dataLayerAttribute['xdm:linkURL']}`;
  }else{
    linkText = `Link:${dataLayerAttribute['dc:title']}`;
  }
  digitalData.event = trackType.click;
  digitalData.interaction = {
    linkText: linkText,
    componentName: dataLayerAttribute['@type'],
    linkClicked: dataLayerAttribute['xdm:linkURL'],
    fileDownloaded: "",
    videoName: "",
    videoInteraction: "",
  };
};

const handlers = [
  { selectors: components.accordion.selector, handler: clickHandler },
  { selectors: components.header.selector, handler: clickHandler },
  { selectors: components.footer.selector, handler: clickHandler },
];

const init = (dData) => {
  digitalData = dData;


  $("a, button").on("click", function () {
    let element = $(this);
    const matchHandler = handlers.find(
      (h) => element.closest(h.selectors).length > 0
    );

    // for custom component scope
    if (matchHandler) {
      matchHandler.handler(element);
    } else {
      getLinkData(element);
    }

    digitalData.event = trackType.click;
    track(digitalData);
  });
};

export default init;
