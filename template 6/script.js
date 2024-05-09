let project = {
  name: "App name",
  author: "App Builder Template",
  version: 0.1,
  dark: true,
  url: "https://michaelsboost.com/",
  settings: {
    dark: true,
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
  <input style="display: none;" type="date" />

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
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    function updateJSON() {
      project.html = doc.body.innerHTML;
    }
  
    const renderElement = (element, parent, topLevel = false) => {
      // Function to update corresponding element style in all iframes
      function updateCorrespondingElements(callback) {
        const previewFrames = document.querySelectorAll("#preview > iframe");
        previewFrames.forEach(previewFrame => {
          // parse iframe to edit elements only in iframe
          const previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
          
          // Find the corresponding element for the provided element
          const correspondingElement = findCorrespondingElement(previewDoc.body, element);
          callback(correspondingElement);
        });
      }

      // Function to find corresponding element in the preview
      function findCorrespondingElement(previewElement, sourceElement) {
        if (!previewElement || !sourceElement) {
          return null;
        }
    
        // Extract relevant information from the source element
        const sourceTagName = sourceElement.tagName.toLowerCase();
        const sourceAttributes = Array.from(sourceElement.attributes).map(attr => ({
          name: attr.name,
          value: attr.value
        }));
    
        // Traverse the preview DOM tree
        const queue = [previewElement];
        while (queue.length > 0) {
          const currentElement = queue.shift();
  
          // Check if the tag name matches and it's not the source element
          if (currentElement.tagName.toLowerCase() === sourceTagName && currentElement !== sourceElement) {
            // Check if attributes match
            const currentAttributes = Array.from(currentElement.attributes).map(attr => ({
              name: attr.name,
              value: attr.value
            }));

            if (attributesMatch(sourceAttributes, currentAttributes)) {
              return currentElement;
            }
          }
  
          // Add children to the queue for further traversal
          for (const childNode of currentElement.children) {
            queue.push(childNode);
          }
        }
    
        return null; // Corresponding element not found
      }
    
      // Function to check if two sets of attributes match
      function attributesMatch(attributes1, attributes2) {
        if (attributes1.length !== attributes2.length) {
          return false;
        }
    
        for (const attr1 of attributes1) {
          const matchingAttr = attributes2.find(attr2 => attr2.name === attr1.name && attr2.value === attr1.value);
          if (!matchingAttr) {
            return false;
          }
        }
    
        return true;
      }

      // Skip processing if the element's tag matches the excluded tag
      const excludedTags = ["head", "script"];
      const tag = element.tagName.toLowerCase();
      if (excludedTags.includes(tag)) {
        return; // Skip processing
      }
      btnStyle = "btnicon";

      const li = app.elm(`<li></li>`, parent);

      // display element tag and settings button
      const code = app.elm(`<code></code>`, li);
      const grid = app.elm(`<nav></nav>`, code);
      const leftgrid = app.elm(`<div></div>`, grid);
      if (element.children.length > 0) {
        const collapseBtn = app.elm(`<button class="${btnStyle}" aria-label="toggle element children"><i class="fa fa-chevron-down"></button>`, leftgrid);
        collapseBtn.addEventListener("click", function() {
          this.firstElementChild.classList.toggle("fa-chevron-right");
          this.firstElementChild.classList.toggle("fa-chevron-down");
          this.closest("code").nextElementSibling.classList.toggle("hidden");
        });
      }
      const isVisible = element.style.display !== "none";
      const eyeBtn = app.elm(`<button class="${btnStyle}" aria-label="toggle element children"><i class="fa ${(element.style.display = isVisible) ? "fa-eye" : "fa-eye-slash"}"></button>`, leftgrid);
      eyeBtn.addEventListener("click", function() {
        const isVisible = element.style.display !== "none";
        updateCorrespondingElements(correspondingElement => {
          correspondingElement.style.display = isVisible ? "none" : "";
        });
        element.style.display = isVisible ? "none" : "";
    
        // Update eye icon classes based on new visibility
        this.firstElementChild.classList.toggle("fa-eye-slash", isVisible);
        this.firstElementChild.classList.toggle("fa-eye", !isVisible);
      });
      const elmBtn = app.elm(`<button class="${btnStyle}" aria-label="toggle element children">${tag}</button>`, leftgrid);
      elmBtn.addEventListener("click", function() {
        console.log("Element settings");
      });

      // These elements do not have child elements
      const voidElements = [
        "br", "hr", "img", "input", "meta", "link", "embed", "area", "base", 
        "col", "colgroup", "param", "source", "track", "wbr", "command", 
        "keygen", "menuitem", "circle", "ellipse", "line", "path", "polygon", 
        "polyline", "rect", "mesh", "meshgradient", "meshpatch", "meshrow",
        "basefont", "bgsound", "nobr", "spacer", "isindex", "plaintext"
      ];    
      if (!voidElements.includes(tag)) {
        const addBtn = app.elm(`<button class="${btnStyle}" aria-label="add element"><i class="fa fa-plus"></i></button>`, leftgrid);
        addBtn.addEventListener("click", function() {
          console.log("add button clicked");
        });
      }

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
      const consoleStyle = `
    <style>.wrapper_yOR7u {left: 0!important; width: 100%!important; border-radius: 15px 15px 0 0!important; z-index: 99999999;} .btn_yOR7u { cursor: pointer; background: inherit; padding: 0 0.5rem; margin: inherit; margin-right: 0px; border: inherit; color: #fff!important; } .nav_yOR7u {padding-bottom: 14px!important;} .line_yOR7u {background: inherit!important;}</style>
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
    const iframes = [];
    const frameStyles = ["width: 360px; height: 740px;", "width: 740px; height: 360px;", "width: 768px; height: 1024px;", "width: 1280px; height: 800px;"];

    for (let i = 0; i < 4; i++) {
      const iframe = app.elm(`<iframe title="${project.name}" sandbox="allow-scripts allow-same-origin allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups" style="${frameStyles[i]}"></iframe>`, e);
      iframes.push(iframe);
    }

    // Get the content document of each iframe and render HTML tree
    iframes.forEach(iframe => {
      const previewFrame = iframe;
      const previewDoc =
          previewFrame.contentDocument || previewFrame.contentWindow.document;

      // Open, write HTML code, and close the content document
      previewDoc.open();
      previewDoc.write(generateHtmlCode());
      previewDoc.close();
    });
  },

  // Initiate function
  init: () => {
    // Place app name and version
    appName.textContent = app.appName;
    appVersion.textContent = app.appVersion;
    appUrl.href = app.appUrl;
    appLicense.href = app.appLicense;
    
    // Place project name and version
    projectLogo.src = project.logo;
    projectLogo.onkeyup = () => project.logo = projectLogo.value;
    projectName.value = project.name;
    projectName.onkeyup = () => project.name = projectName.value;
    projectAuthor.value = project.author;
    projectAuthor.onkeyup = () => project.author = projectAuthor.value;
    projectVersion.value = project.version;
    projectVersion.onkeyup = () => project.version = projectVersion.value;
    projectUrl.value = project.url;
    projectUrl.onkeyup = () => project.url = projectUrl.value;
    projectTitle.value = project.title;
    projectTitle.onkeyup = () => project.title = projectTitle.value;
    projectDesc.value = project.description;
    projectDesc.onkeyup = () => project.description = projectDesc.value;
    projectScratchpad.value = project.settings.scratchpad;
    projectScratchpad.onkeyup = () => project.settings.scratchpad = projectScratchpad.value;

    // init live preview
    app.renderPreview(preview);
    refreshpreview.onclick = () => app.renderPreview(preview);

    // render treeview from html
    app.renderHTMLTree(layers, project.html);

    // toggle dark mode
    dark.checked = project.settings.dark;
    dark.onchange = function() {
      document.querySelector("html").setAttribute("data-theme", this.checked ? "dark" : "light");
      project.settings.dark = this.checked;
    };
    dark.onchange();

    // toggle dark mode for preview
    darkstyle.checked = project.dark;
    darkstyle.onchange = function() {
      const previewFrames = document.querySelectorAll("#preview > iframe");
      previewFrames.forEach(previewFrame => {
        const previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
        previewDoc.querySelector("html").setAttribute("data-theme", this.checked ? "dark" : "light");
      });
        
      project.dark = this.checked;
    };
    darkstyle.onchange();

    // toggle console
    terminal.checked = project.settings.console;
    terminal.onchange = function() {
      project.settings.console = this.checked;
      const previewFrames = document.querySelectorAll("#preview > iframe");
      previewFrames.forEach(previewFrame => {
        const previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
        previewDoc.querySelector(".target_wrapper_yOR7u").innerHTML = `.wrapper_yOR7u { display: ${this.checked ? "flex" : "none!important"}; }`
      });
    };
    terminal.onchange();
    
    // init zooming and panning
    const canvas = app.zoomPan(canvas_container, true);
    canvas.resetCanvas(3148, 1024);
    zoomBtn.onclick = function() {
      if (this.getAttribute("data-zoom") === "true") {
        this.setAttribute("data-zoom", false);
        this.firstElementChild.classList.remove("fa-magnifying-glass-plus");
        this.firstElementChild.classList.add("fa-magnifying-glass-minus");
        fill.classList.remove("fill");
        canvas.disablePanzoom();
      } else {
        this.setAttribute("data-zoom", true);
        this.firstElementChild.classList.add("fa-magnifying-glass-plus");
        this.firstElementChild.classList.remove("fa-magnifying-glass-minus");
        fill.classList.add("fill");
        canvas.enablePanzoom();
      }
    };

    // function to update nav content based upon select value
    const allElms = ["actions", "components", "elements", "layers", "menu", "settings", "styles"];
    selectmenu.onchange = function() {
      const val = this.value;

      // first hide all divs
      allElms.map(id => navcontent.querySelector(`#${id}`).classList.add("hidden") );

      // detect element to show
      allElms.map(id => {
        if (id === val) {
          navcontent.querySelector(`#${id}`).classList.remove("hidden");
          return false;
        }
      });
    };
    // selectmenu.value = "styles";
    selectmenu.onchange();

    // handle styles
    addclass.onclick = function() {
      console.log("add class");
    };
    deleteclass.onclick = function() {
      console.log("delete class");
    };
    document.querySelectorAll("#classes button").forEach(e => {
      e.onclick = function() {
        console.log("class clicked");
      };
    });
    document.querySelectorAll("#psuedoselectors button").forEach(e => {
      e.onclick = function() {
        console.log("psuedo selector clicked");
      };
    });
    document.querySelectorAll("#breakpoints button").forEach(e => {
      e.onclick = function() {
        console.log("breakpoint clicked");
      };
    });
  }
};

// check if FileReader API is available
if (!window.FileReader) {
  alert("File API & FileReader API not supported!");
}

app.init();