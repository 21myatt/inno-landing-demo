import { FormData } from "@/components/RegistrationForm/types";
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby9BoFc1UUFDM62M9S5lQnGK978OVz4onhKEwzMlavPPqsuNZ5bAFCnYheq5JGaVmb5/exec";

export async function submitToGoogleSheets(data: FormData): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      // Create or get hidden iframe
      let iframe = document.getElementById(
        "hidden_iframe"
      ) as HTMLIFrameElement;
      if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.id = "hidden_iframe";
        iframe.name = "hidden_iframe";
        iframe.style.display = "none";
        document.body.appendChild(iframe);
      }

      // Create form element
      const formElement = document.createElement("form");
      formElement.method = "POST";
      formElement.action = GOOGLE_SCRIPT_URL;
      formElement.target = "hidden_iframe";

      // Add form fields
      Object.entries(data).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        formElement.appendChild(input);
      });

      // Append form to body and submit
      document.body.appendChild(formElement);
      formElement.submit();
      document.body.removeChild(formElement);

      // Wait a bit then resolve
      setTimeout(() => {
        resolve();
      }, 1500);
    } catch (error) {
      reject(error);
    }
  });
}
