import { components, trackType } from "./constants";
import { track } from "./helpers";

let digitalData;
const adobeDataLayerState = adobeDataLayer?.getState();
const adobeDataLayerSiteData = adobeDataLayerState?.page?.siteData || {};

const getSectionLevels = () => {
  const sections = getAdobePageValue().split(":");
  return {
    primarySection: sections[0] || "",
    subSection1: sections[1] || "",
    subSection2: sections.length > 2 ? sections.slice(2).join("/") : "",
  };
};

const getSearchTerm = () => {
  const url = new URL(window.location.href);
  return url.pathname.includes("/search") && url.href.includes("#stq=")
    ? url.href.split("=")[1]
    : "";
};

const pageNameCleanUp = (s_pagename) => {
  s_pagename = s_pagename.replace(new RegExp(/content\:amp\:/g), " "); // remove content:amp prefix
  s_pagename = s_pagename.replace(new RegExp(/-/g), " "); // replace dashes with spaces
  s_pagename = s_pagename.replace(new RegExp(/_/g), " "); // replace underscores with spaces
  s_pagename = s_pagename.replace(new RegExp(/\%20/g), " "); // replace html spaces with spaces
  s_pagename = s_pagename.replace(new RegExp(/\%26/g), "&"); // replace html ampersand with ampersand
  s_pagename = s_pagename.replace(new RegExp(/\::/g), ":"); // replace double colon with a single colon
  s_pagename = s_pagename.replace(new RegExp(/\.html/g), ""); // drop .html
  s_pagename = s_pagename.replace(new RegExp(/\.htm/g), ""); // drop .htm
  s_pagename = s_pagename.replace(new RegExp(/\.aspx/g), ""); // drop .aspx
  s_pagename = s_pagename.replace(new RegExp(/\.php/g), ""); // drop .php

  return s_pagename;
};

const getAdobePageValue = () => {
  let s_pagename = document.location.pathname; // capture the current pathname
  // set pagename
  s_pagename = s_pagename.replace(new RegExp(/\//g), ":"); // replace "/" with ":"
  s_pagename = s_pagename.slice(1); // remove preceding ":" if required
  if (s_pagename.slice(-1) == "/") {
    // ends with "/"
    s_pagename = s_pagename.slice(0, -1); // remove end "/"
  }
  s_pagename = s_pagename.toLowerCase(); // set to lowercase if required

  if (s_pagename == "") {
    s_pagename = "home"; // if it's the homepage default to "home"
  }
  if (document.getElementsByTagName("title")[0] != null) {
    var title = document.getElementsByTagName("title")[0].innerHTML;
    if (title && title.startsWith("500")) {
      title = "500";
      s_pagename = title + ":" + s_pagename;
    }

    if (title && title.startsWith("404")) {
      title = "404";
      s_pagename = title + ":" + s_pagename;
    }
  }

  // clean pagename
  if (s_pagename) {
    s_pagename = pageNameCleanUp(s_pagename);
  }

  return s_pagename;
};

const getPreviousPage = () => {
  const referrer = document.referrer;
  if (!referrer) {
    return "";
  }

  const path = new URL(referrer).pathname
    .replace(/^\/|\/$/g, "")
    .split("/")
    .pop();
  return path ? path.replace(/\.[^/.]+$/, "") : "home";
};

const getFormsName = () => {
  let forms = document.querySelectorAll(components.form.selector);
  let formNames = "";
  formNames = Array.from(forms)
    .filter((form) => form.hasAttribute("name"))
    .map((form) => form.getAttribute("name"))
    .join(", ");

  return formNames;
};

const getCalculatorName = () => {
  return Array.from(document.querySelectorAll("[data-calculator-name]"))
    .map((element) => element.getAttribute("data-calculator-name"))
    .join(",");
};

const getPageData = () => ({
  section: getSectionLevels(),
  pageInfo: {
    pageName: getAdobePageValue().split(":").pop(),
    pageURL: window.location.href,
    previousPage: getPreviousPage(),
    referrerURL: document.referrer || "",
    site: adobeDataLayerSiteData?.siteBrand || "",
    formName: getFormsName(),
    searchTerm: getSearchTerm(),
    calculatorName: getCalculatorName(),
    formSearch: "",
  },
});

const getSiteData = () => ({
  environment: adobeDataLayerSiteData?.environment || "",
  siteBrand: adobeDataLayerSiteData?.siteBrand || "",
  siteDomain: adobeDataLayerSiteData?.siteDomain || "",
  deviceType: getDeviceType(),
  browserType: getBrowser(),
});

const getUserData = () => ({
  // Use _satellite?.getVisitorId()?._fields?.MCMID?.toString()
  // to get ECID;
  profile: {
    userStatus: "",
    userID: "",
    ECID: "",
    ampEmployee: "",
    returningUser: "",
  },
});

const getAdobeData = () => ({
  launch: {
    propertyName: adobeDataLayerSiteData?.launchProperty || "",
  },
});

const getBrowser = () => {
  const { userAgent, vendor } = navigator;
  if (/Edg/.test(userAgent)) {
    return "Edge";
  }
  if (/Chrome/.test(userAgent) && /Google Inc/.test(vendor)) {
    return "Chrome";
  }
  if (/Firefox/.test(userAgent)) {
    return "Firefox";
  }
  if (/Safari/.test(userAgent) && /Apple Computer/.test(vendor)) {
    return "Safari";
  }
  if (/OPR|Opera/.test(userAgent)) {
    return "Opera";
  }
  if (/Trident/.test(userAgent)) {
    return "Internet Explorer";
  }
  return "Unknown";
};

const getDeviceType = () =>
  /Mobi|Android/i.test(navigator.userAgent)
    ? "Mobile"
    : /Tablet|iPad/i.test(navigator.userAgent)
      ? "Tablet"
      : "Desktop";

const initiatePageLoad = (dData) => {
  digitalData = dData;
  //Datalayer for Generic Page Load
  window.addEventListener("load", async () => {
    digitalData.event = trackType.pageLoad;
    digitalData.page = getPageData();
    digitalData.site = getSiteData();
    digitalData.user = getUserData();
    digitalData.adobe = getAdobeData();
    track(digitalData);
  });
};

export default initiatePageLoad;
