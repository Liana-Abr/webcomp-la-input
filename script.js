import InputField from "./components/index.js";


if (!customElements.get("la-input")) {
    customElements.define("la-input", InputField);
}