import { a as applyPolyfills, d as defineCustomElements } from "./index.8dbfa1c9.js";
(async () => {
  await applyPolyfills();
  await defineCustomElements();
  console.log("Hello World!");
  const button = document.getElementById("test-button");
  button.addEventListener("click", () => {
    alert("Alert works!");
  });
})();
