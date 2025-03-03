import componentsInit from "./components";
import initiatePageScript from "./pageScript";

try {
  var digitalData = {};
  window.lists = digitalData;

  $(document).ready(function () {
    initiatePageScript(digitalData);
    componentsInit(digitalData);
  });
} catch (error) {
  console.log("Error in Digital data layer", error);
}
