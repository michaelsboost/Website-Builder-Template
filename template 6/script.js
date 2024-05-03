let project = {
  name: "App name",
  author: "App Builder Template",
  version: 0.1,
  url: "https://michaelsboost.com/",
  settings: {
    console: false,
    scratchpad: "",
  },
  meta: "",
  libraries: ["libraries/pico/pico.classless.min.css"],
  title: "An attractive title",
  description: "The most attractive description ever!",
  html: `<main class="container">
  <h1>Pico CSS Demo</h1>
  <hr>

  <input type="search" id="search" name="search" placeholder="Search">
  <input type="date" />

  <p><img src="imgs/image.png"></p>

  <label for="range">Range slider
    <input type="range" min="0" max="100" value="50" id="range" name="range">
  </label>

  <select>
    <option value="apples">Apples</option>
    <option value="bananas">Bananas</option>
    <option value="oranges">Oranges</option>
  </select>
</main>`,
  data: {},
  logo: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iNTEyIgogICBoZWlnaHQ9IjUxMiIKICAgdmlld0JveD0iMCAwIDEzNS40NjY2NiAxMzUuNDY2NjciCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzUiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPGcKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuODMwNjQyO2ZpbGw6IzQ3NDdmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6Ny45Mzc1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtwYWludC1vcmRlcjptYXJrZXJzIHN0cm9rZSBmaWxsIgogICAgICAgaWQ9InBhdGgxODQiCiAgICAgICBjeD0iNjcuNzMzMzMiCiAgICAgICBjeT0iNjcuNzMzMzMiCiAgICAgICByPSI2Ny43MzMzMyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjMyMjQzMXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDc0LjU4MzQxMiw2My43NjcwNDQgODUuMzI0MTY3LDIzLjY4MTk5MiAzOC4xODAxMzgsNzAuODI2MDIzIDYwLjg4MzI1Niw3MS42OTk2MjIgNTAuMTQyNTAxLDExMS43ODQ2NyA5Ny4yODY1MjksNjQuNjQwNjQzIFoiCiAgICAgICBpZD0icGF0aDg5OC0zIiAvPgogIDwvZz4KPC9zdmc+Cg==",
};

const app = {
  appName: "AppName",
  appAuthor: {
    name: "Michael Schwartz",
    href: "https://michaelsboost.com/",
    src: "imgs/author.jpg"
  },
  appVersion: "0.0.1",
  appUrl: "https://github.com/michaelsboost/App-Builder-Template/tree/gh-pages",
  appLicense: "https://github.com/michaelsboost/App-Builder-Template/blob/gh-pages/LICENSE",
  activePage: 0,
  
  // zooming and panning function
	zoomPan: (canvas, isEnabled = true) => {
		// init panzoom
		let instance = panzoom(canvas, {
			bounds: true,
			boundsPadding: 0.1
		});

    function centerCanvas() {
      const zoomRatio = 0.75;
      const canvasRect = canvas.getBoundingClientRect();
      const canvasW = canvasRect.width * zoomRatio;
      const canvasH = canvasRect.height * zoomRatio;
      const bodyW = window.innerWidth / 2;
      const bodyH = window.innerHeight / 2;
      const initialXPos = bodyW - canvasW / 2;
      const initialYPos = bodyH - canvasH / 2;

      instance.zoomAbs(initialXPos, initialYPos, zoomRatio);
      instance.moveTo(initialXPos, initialYPos);
    };
  
    centerCanvas();

		// reset canvas dimentions and center it
		let resetCanvas = (w, h) => {
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      centerCanvas();
		};

    // enable panzoom function
    const enablePanzoom = () => {
      instance.resume();
    };

    // disable panzoom function
    const disablePanzoom = () => {
      instance.pause();
    };

    // clear style attribute
    const destroy = () => {
      instance.zoomAbs(0, 0, 1);
      instance.dispose();
      instance.off();
      canvas.style = "";
      console.log(instance);
    };

    // if isEnabled is false, disable panzoom initially
    if (!isEnabled) {
      disablePanzoom();
    }

    // expose enable and disable panzoom functions
    return { enablePanzoom, disablePanzoom, centerCanvas, resetCanvas, destroy };
	},

  // easy way to render an element to reduce code
  elm(htmlOrOptions, container) {
    let html, events, func;
    
    if (typeof htmlOrOptions === 'object') {
      html = htmlOrOptions.html;
      events = htmlOrOptions.events;
      func = htmlOrOptions.func;
      container = htmlOrOptions.container;
    } else {
      html = htmlOrOptions;
    }
    
    const elm = document.createElement("div");
    elm.innerHTML = html;
    const element = elm.firstElementChild;
    
    if (events && func) {
      events.split(' ').forEach(event => {
        element.addEventListener(event, func);
      });
    }
    
    return container.appendChild(element);
  },

  // render treeview from html
  renderHTMLTree: (container, html) => {
    // Clear existing content in the container element
    container.innerHTML = "";

    // parse iframe to edit elements only in iframe
    const previewFrame = document.querySelector("#preview > iframe");
    const previewDoc =
      previewFrame.contentDocument || previewFrame.contentWindow.document;
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
  
    const renderElement = (element, parent, topLevel = false) => {
      // Skip processing if the element's tag matches the excluded tag
      const excludedTags = ["head", "script"]; // Add more tags if needed
      const tag = element.tagName.toLowerCase();
      if (excludedTags.includes(tag)) {
        return; // Skip processing
      }
      btnStyle = "btnicon";

      const li = app.elm(`<li></li>`, parent);

      // display element tag and settings button
      const code = app.elm(`<code></code>`, li);
      const grid = app.elm(`<nav></nav>`, code);
      const elmBtn = app.elm(`<button class="${btnStyle}" aria-label="toggle element children">${tag}</button>`, grid);
      elmBtn.addEventListener("click", function() {
        this.closest("code").nextElementSibling.classList.toggle("hidden");
      });
      const addBtn = app.elm(`<button class="${btnStyle}" aria-label="add element"><i class="fa fa-plus"></i></button>`, grid);
      addBtn.addEventListener("click", function() {
        console.log("add button clicked");
      });

      const wrapper = app.elm(`<div></div>`, li);
  
      if (element.children.length > 0) {
        const ul = app.elm(`<ul></ul>`, wrapper);
  
        for (const childNode of element.children) {
          if (childNode.nodeType === Node.ELEMENT_NODE) {
            renderElement(childNode, ul);
          }
        }
      }
    };
  
    renderElement(doc.body, container, true);
  },

  // Function to render preview
  renderPreview: e => {
    const generateHtmlCode = () => {
      const tailwindStyle =
        ".wrapper_yOR7u {left: 0!important; width: 100%!important; border-radius: 15px 15px 0 0!important; z-index: 99999999;} .btn_yOR7u { cursor: pointer; background: inherit; padding: 0 0.5rem; margin: inherit; margin-right: 0px; border: inherit; color: #fff!important; } .nav_yOR7u {padding-bottom: 14px!important;} .line_yOR7u {background: inherit!important;}";
      const consoleStyle = `
    <style>${tailwindStyle}</style>
    <style class="target_wrapper_yOR7u">${(project.settings.console) ? "" : ".wrapper_yOR7u {display: none!important;}"}</style>`;

    // Iterate over each library
    let scriptTags = '';
    let cssTags = '';
    project.libraries.forEach(library => {
      if (library.endsWith('.js')) {
        scriptTags += `<script src="${library}"></script>\n    `;
      } else if (library.endsWith('.css')) {
        cssTags += `<link rel="stylesheet" href="${library}">\n`;
      } else {
        // Assuming it's a Google font
        cssTags += `<link href="${library}" rel="stylesheet">\n`;
      }
    });

      return `<!DOCTYPE html>
<html>
  <head>
    <title>${project.title}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="${project.description}">
    <meta name="author" content="${project.author}">
    ${cssTags}${consoleStyle}
  </head>
  <body>
    ${project.html}
    
    ${scriptTags}
    <script type="module" src="js/dom-console.js" defer></script>
    ${(!project.javascript ? "" : `<script>document.addEventListener("DOMContentLoaded", (event) => {
      ${project.javascript}
    });</script>`)}
  </body>
</html>`;
    };

    // Clear existing content in the preview element
    e.innerHTML = "";

    // Create iframe and append for live preview
    const frame = app.elm(`<iframe class="w-full h-full bg-white" title="${project.name}" sandbox="allow-scripts allow-same-origin allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups"></iframe>`, e);

    // Get the content document of the iframe
    const previewFrame = frame;
    const previewDoc =
      previewFrame.contentDocument || previewFrame.contentWindow.document;

    // Open, write HTML code, and close the content document
    previewDoc.open();
    previewDoc.write(generateHtmlCode());
    previewDoc.close();
  },

  // Initiate function
  init: () => {
    // Place app name and version
    document.getElementById("appVersion").textContent = app.appVersion;
    document.getElementById("appUrl").href = app.appUrl;
    document.getElementById("appLicense").href = app.appLicense;
    
    // Place project name and version
    document.getElementById("projectLogo").src = project.logo;
    document.getElementById("projectName").value = project.name;
    document.getElementById("projectAuthor").value = project.author;
    document.getElementById("projectVersion").value = project.version;
    document.getElementById("projectUrl").value = project.url;
    document.getElementById("projectTitle").value = project.title;
    document.getElementById("projectDesc").value = project.description;
    document.getElementById("projectScratchpad").value = project.settings.scratchpad;

    // init live preview
    app.renderPreview(preview);

    // render treeview from html
    app.renderHTMLTree(layers, project.html);
    
    // init zooming and panning
    const canvas = app.zoomPan(canvas_container, true);
    const canvasTree = app.zoomPan(document.querySelector("#tree > div:first-child"), true);
    canvas.resetCanvas(360, 720);
    // canvas.disablePanzoom();

    // toggle zoom/pan
    zoomBtn.onclick = function() {
      if (this.getAttribute("data-zoom") === "true") {
        this.setAttribute("data-zoom", false);
        this.firstElementChild.classList.remove("fa-magnifying-glass-plus");
        this.firstElementChild.classList.add("fa-magnifying-glass-minus");
        fill.classList.remove("fill");
        fillcover.classList.remove("fill");
        canvas.disablePanzoom();
        canvasTree.disablePanzoom();
      } else {
        this.setAttribute("data-zoom", true);
        this.firstElementChild.classList.add("fa-magnifying-glass-plus");
        this.firstElementChild.classList.remove("fa-magnifying-glass-minus");
        fill.classList.add("fill");
        fillcover.classList.add("fill");
        canvas.enablePanzoom();
        canvasTree.enablePanzoom();
      }
    };

    // function to update nav content based upon select value
    const treeElms = ["actions", "components", "layers", "styles"];
    const notTreeElms = ["elements", "menu", "settings"];
    const allElms = ['actions', 'components', 'elements', 'layers', 'menu', 'settings', 'styles'];
    selectmenu.onchange = function() {
      const isTree = null;
      const val = this.value;

      // first hide all divs
      allElms.map(id => navcontent.querySelector(`#${id}`).classList.add("hidden") );

      // detect if id is for tree display
      treeElms.map(id => {
        if (id === val) {
          tree.classList.remove("hidden");
          navcontent.querySelector(`#${id}`).classList.remove("hidden");
          return false;
        }
      });


      // detect if id is not for tree display
      notTreeElms.map(id => {
        if (id === val) {
          tree.classList.add("hidden");
          navcontent.querySelector(`#${id}`).classList.remove("hidden");
          return false;
        }
      });
    };
    selectmenu.value = "settings";
    selectmenu.onchange();
  }
};

// check if FileReader API is available
if (!window.FileReader) {
  alert("File API & FileReader API not supported!");
}

app.init();