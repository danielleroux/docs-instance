import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.dc1a0ae3.js";
const workflowStepsCss = ".sc-ix-workflow-steps-h .steps.sc-ix-workflow-steps{display:flex}.sc-ix-workflow-steps-h .steps.vertical.sc-ix-workflow-steps{display:block}";
const WorkflowSteps = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.stepSelected = createEvent(this, "stepSelected", 7);
    this.vertical = false;
    this.linear = false;
    this.clickable = false;
    this.selectedIndex = 0;
  }
  getSteps() {
    return Array.from(this.hostElement.querySelectorAll("ix-workflow-step"));
  }
  deselectAll() {
    const steps = this.getSteps();
    steps.forEach((element) => {
      element.setAttribute("selected", "false");
    });
  }
  componentDidRender() {
    const steps = this.getSteps();
    steps.forEach((element, index) => {
      element.setAttribute("vertical", this.vertical === true ? "true" : "false");
      element.setAttribute("clickable", this.clickable === true ? "true" : "false");
      element.setAttribute("selected", this.selectedIndex === index ? "true" : "false");
      if (index === 0)
        element.setAttribute("position", "first");
      if (index === steps.length - 1)
        element.setAttribute("position", "last");
    });
  }
  componentWillRender() {
    const steps = this.getSteps();
    steps.forEach((element, index) => {
      element.addEventListener("click", () => {
        if (!this.clickable)
          return;
        const previousElement = steps[index - 1];
        if (this.linear && previousElement && !["done", "success"].includes(previousElement === null || previousElement === void 0 ? void 0 : previousElement.status)) {
          return element.setAttribute("selected", "false");
        }
        this.deselectAll();
        element.setAttribute("selected", "true");
        this.stepSelected.emit(index);
      });
    });
  }
  render() {
    return h(Host, null, h("div", { class: { steps: true, vertical: this.vertical } }, h("slot", null)));
  }
  get hostElement() {
    return getElement(this);
  }
};
WorkflowSteps.style = workflowStepsCss;
export {
  WorkflowSteps as ix_workflow_steps
};
