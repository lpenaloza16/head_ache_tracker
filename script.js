document.querySelector("button").addEventListener("click", function () {
  html2canvas(document.querySelector(".wrapper"), {
    onrendered: function (canvas) {
      // document.body.appendChild(canvas);
      return Canvas2Image.saveAsPNG(canvas);
    },
  });
});
