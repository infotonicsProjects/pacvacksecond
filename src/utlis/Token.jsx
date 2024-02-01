export let Local;
try {
  var myCookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("packM"));
} catch (err) {}

let extractedValue;
if (myCookieValue) {
  extractedValue = myCookieValue.split("=")[1];
  Local = myCookieValue.split("=")[1];
}
