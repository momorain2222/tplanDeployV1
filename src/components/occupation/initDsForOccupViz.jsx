export function initViz() {
  var containerDiv = document.getElementById("tableauPlaceholder"),
    url =
      "https://public.tableau.com/views/Function_1_15544457062700/Dashboard1?:embed=y&:display_count=yes&publish=yes";

  var options = {
    width: containerDiv.offsetWidth,
    height: containerDiv.offsetHeight,
    hideTabs: true,
    hideToolbar: false
  };

  let viz = new tableau.Viz(containerDiv, url, options);
}

export function getVizObject() {
  var divElement = document.getElementById("viz1554445704733");
  var vizElement = divElement.getElementsByTagName("object")[0];
  vizElement.style.width = "100%";
  vizElement.style.height = divElement.offsetWidth * 0.75 + "px";
  var scriptElement = document.createElement("script");
  scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
}

export function vizResize() {
  var width = document.getElementById("resizeWidth").value;
  var height = document.getElementById("resizeHeight").value;

  viz.setFrameSize(parseInt(width, 10), parseInt(height, 10));
}
