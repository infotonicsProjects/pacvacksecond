function preprocessImage(canvas) {
  const ctx = canvas.getContext("2d");
  const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
  reverseColors(image);
  // blurARGB(image.data, canvas, 1);
  // dilate(image.data, canvas);
  //   invertColors(image.data);
  thresholdFilter(canvas, 0.5);

  return image;
}

export default preprocessImage;
let reverseColors = ({ data }) => {
  for (var i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i];
    data[i + 1] = 255 - data[i + 1];
    data[i + 2] = 255 - data[i + 2];
    data[i + 3] = 255;
  }
};
const thresholdFilter = (canvas) => {
  canvas.style.filter = "brightness(100%) grayscale(500%) contrast(1000%)";
};
