import componentsInit from "./components";
import initiatePageScript from "./pageScript";

try {
  var digitalData = {};
  window.lists = digitalData;

  $(document).ready(()=> {
    // executing on pageload capture
    initiatePageScript(digitalData);

    // Initiating element listeners
    componentsInit(digitalData);
  });
} catch (error) {
  console.log("Error in Digital data layer", error);
}
