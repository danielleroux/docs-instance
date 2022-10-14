import "./index.dc1a0ae3.js";
import "./index.2eef27b6.js";
import { c as closeModal, d as dismissModal, m as modal } from "./modal-utils-ec39c1bc.bde1d171.js";
import "./init.e920e8e8.js";
import "./logical-filter-operator-1bf83315.1b3b3530.js";
import "./flip-tile-state-28a1f8ce.23318fa9.js";
import "./modal-f9b3f7a9.523ff0b2.js";
import "./typed-event-dd6c83dd.77656892.js";
import "./anime.es-185e9087.87a18bcc.js";
import "./animation-b667a4c4.18fe34bf.js";
import "./upload-file-state-631bb8a2.5434751f.js";
(async function() {
  await window.customElements.whenDefined("ix-button");
  const customModal = document.createElement("div");
  const template = document.getElementById("custom-modal");
  const templateContent = template.content;
  customModal.appendChild(templateContent);
  customModal.querySelector(".close-modal").addEventListener("click", () => {
    closeModal(customModal, "Done!");
  });
  customModal.querySelectorAll(".dismiss-modal").forEach(
    (item) => item.addEventListener("click", () => {
      dismissModal(customModal, "canceled!");
    })
  );
  const button = document.querySelector("ix-button");
  button.addEventListener("click", () => {
    modal({
      content: customModal
    });
  });
})();
