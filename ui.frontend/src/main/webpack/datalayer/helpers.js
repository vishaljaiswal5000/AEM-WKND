export const transformText = (text) =>
  text
    ?.toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[\n\r]/g, "")
    .replace(/&nbsp;/g, "")
    .trim() || "";

export const track = (digitalData) => {
  console.log("digital-interaction", JSON.stringify(digitalData.interaction));

  // uncomment below code for push
  // if (_satellite) _satellite?.track(digitalData.event);
};

export const splitString = (value, delimiter) => {
  let splitedParts = value.split(delimiter);
  return splitedParts;
};
