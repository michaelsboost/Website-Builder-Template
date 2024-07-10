let project = {
  name: "App name",
  author: "John Doe",
  version: "0.1",
  url: "https://michaelsboost.com/",
  logo: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iNTEyIgogICBoZWlnaHQ9IjUxMiIKICAgdmlld0JveD0iMCAwIDEzNS40NjY2NiAxMzUuNDY2NjciCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzUiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPGcKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuODMwNjQyO2ZpbGw6IzQ3NDdmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6Ny45Mzc1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtwYWludC1vcmRlcjptYXJrZXJzIHN0cm9rZSBmaWxsIgogICAgICAgaWQ9InBhdGgxODQiCiAgICAgICBjeD0iNjcuNzMzMzMiCiAgICAgICBjeT0iNjcuNzMzMzMiCiAgICAgICByPSI2Ny43MzMzMyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjMyMjQzMXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDc0LjU4MzQxMiw2My43NjcwNDQgODUuMzI0MTY3LDIzLjY4MTk5MiAzOC4xODAxMzgsNzAuODI2MDIzIDYwLjg4MzI1Niw3MS42OTk2MjIgNTAuMTQyNTAxLDExMS43ODQ2NyA5Ny4yODY1MjksNjQuNjQwNjQzIFoiCiAgICAgICBpZD0icGF0aDg5OC0zIiAvPgogIDwvZz4KPC9zdmc+Cg==",
  libraries: [
    "https://cdnjs.cloudflare.com/ajax/libs/picocss/1.5.7/pico.classless.min.css",
    "https://michaelsboost.com/TailwindCSSMod/tailwind-mod.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  ],
  settings: {
    console: true,
    scratchpad: "",
  },
  assets: {
    images: [],
    videos: [],
    audio: []
  },
  data: {
    obj: {
      name: "John",
      age: 32,
      arr: ["hello", 32, false],
      address: {
        street: "123 main st",
        city: "rockford",
        state: "illinois",
        zip: 61101
      },
      phoneNumbers: [
        {
          type: "home",
          number: "000-000-0000"
        },
        {
          type: "work",
          number: "333-333-3333"
        }
      ]
    }
  },
  page: [
    {
      name: "index",
      title: "An attractive title",
      description: "The most attractive description ever!",
      author: "John Doe",
      website: "https://website.com/",
      htmlTag: [{
        attr: "data-theme",
        value: "dark"
      }],
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
    
      <details open>
        <summary>Accordion 1</summary>
        <p>
          Some info here...
          <hr>
          <button>Button</button>
          <a href="#" role="button">Link</a>
          <a href="#" role="button" class="secondary">Secondary</a>
          <a href="#" role="button" class="contrast">Contrast</a>
    
          <hr>
    
          <input type="text" placeholder="Valid" aria-invalid="false">
          <input type="text" placeholder="Invalid" aria-invalid="true">
          <input type="text" placeholder="Disabled" disabled>
          <input type="text" value="Readonly" readonly>
        </p>
      </details>
    
      <details>
        <summary>Accordion 2</summary>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
        <ol>
          <li>Item 1</li>
          <li>Item 2</li>
        </ol>
    
        <label for="color">Color
          <input type="color" id="color" name="color" value="#0eaaaa">
        </label>
      </details>
    
      <fieldset>
        <label for="switch">
          <input type="checkbox" id="switch" name="switch" role="switch">
          Publish on my profile
        </label>
        <label for="switch_disabled">
          <input type="checkbox" id="switch_disabled" name="switch_disabled" role="switch" disabled checked>
          User must change password at next logon
        </label>
      </fieldset>
    </main>`,
      css: ``,
      javascript: `console.log("hello world")`,
      actionBlocks: []
    }
  ]
};
let sortable;

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

  // Ajax function to download over http
  getFile: (url, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    xhr.onreadystatechange = data => {
      if (xhr.readyState !== 4) {
        return;
      }

      if (xhr.status === 200) {
        callback(xhr.responseText);
      } else {
        console.warn("request_error");
      }
    };
  },
  
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

  // Function to handle storage and display of library/framework
  fetchSuggestions: searchText => {
    fetch(
      `https://api.cdnjs.com/libraries?search=${searchText}&fields=filename,description,version`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        if (data && data.results && data.results.length > 0) {
          const libraries = data.results.map(result => result);
          app.displaySuggestions(libraries);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  },
  displaySuggestions: suggestions => {
    const suggestionsList = document.getElementById("suggestions");
    suggestionsList.innerHTML = ""; // Clear previous suggestions

    suggestions.forEach(result => {
      const listItem = app.elm(`<li class="cursor-pointer select-none"></li>`, suggestionsList);
      listItem.innerHTML = `<div class="flex justify-between mb-2 font-bold text-1xl">
          <span>${result.name}</span>
          <span>${result.version}</span>
        </div>
        <div class="text-sm">${result.description}<br><hr></div>`;
      listItem.onclick = () => {
        // Add the clicked suggestion to the libraries array
        const url = result.latest; // Assuming 'latest' holds the URL
        project.libraries.push(url);
        // Clear the suggestions list
        suggestionsList.innerHTML = "";
        // Display the libraries display
        app.displayLibrariesArray();
        searchBox.value = "";
        app.renderPreview(preview);
      };
    });
  },
  displayLibrariesArray: () => {
    const librariesArray = project.libraries;
    let sortLibrariesContainer = document.getElementById("sortLibraries");
    sortLibrariesContainer.innerHTML = "";
    const embedArray = (result, index) => {
      const newNav = app.elm(`<nav class="flex justify-between py-2" data-index="${index}"></nav>`, sortLibrariesContainer);
      app.elm(`<button class="p-3" data-sort="${index}"><i class="fa fa-sort"></i></button>`, newNav);

      const newInput = app.elm(`<input type="text" class="w-full p-3 pr-0 rounded-md rounded-r-none bg-gray-800" placeholder="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.2/Sortable.min.js" value="${result}">`, newNav);
      newInput.onkeyup = () => {
        // Update the value of the librariesArray at the corresponding index
        librariesArray[index] = newInput.value.trim();
        app.renderPreview(preview);
      };

      const deleteButton = app.elm(`<button class="p-3 bg-gray-900 rounded-md rounded-l-none" data-sort="${index}"><i class="fa fa-trash"></i></button>`, newNav);
      deleteButton.onclick = () => {
        // Remove the library from the array by its index
        project.libraries.splice(index, 1);
        // Re-render the libraries array
        app.displayLibrariesArray();
        app.renderPreview(preview);
      };
    };

    // Embed each library into a new input field and delete button
    librariesArray.forEach((input, index) => {
      embedArray(librariesArray[index], index);
    });
    
    // Initialize SortableJS if it hasn't been initialized yet
    if (!sortable) {
      sortable = new Sortable(sortLibrariesContainer, {
        handle: '[data-sort]', // Selector for the handle element
        animation: 150, // Animation duration in milliseconds
        onEnd: (event) => {
          // Update the libraries array after sorting
          const startIndex = event.oldIndex;
          const endIndex = event.newIndex;
          const movedLibrary = librariesArray.splice(startIndex, 1)[0];
          librariesArray.splice(endIndex, 0, movedLibrary);
          app.renderPreview(preview);
        }
      });
    }

    // Check if the last input field is empty, and append an additional empty input field if needed
    if (
      librariesArray.length === 0 ||
      librariesArray[librariesArray.length - 1].trim() !== ""
    ) {
      embedArray("", librariesArray.length);
    }
  },

  // render treeview
  renderTreeView: (container, html) => {
    // Clear existing content in the container element
    container.innerHTML = "";

    // parse iframe to edit elements only in iframe
    const previewFrame = document.querySelector("#preview > iframe");
    const previewDoc =
      previewFrame.contentDocument || previewFrame.contentWindow.document;
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    function updateJSON() {
      project.page[app.activePage].html = doc.body.innerHTML;
    }

    function inputChange(e, attrName, attrValue) {
      e.setAttribute(attrName, attrValue); // Update attribute in the treeview
      const correspondingElement = previewDoc.querySelector(e.tagName); // Find corresponding element in the preview
      if (correspondingElement) {
        correspondingElement.setAttribute(attrName, attrValue); // Update attribute in the preview
      }
      updateJSON();
    }
    function textareaChange(e, value) {
      e.value = value;
      const correspondingElement = previewDoc.querySelector(e.tagName);
      if (correspondingElement) correspondingElement.value = value;
      updateJSON();
    }
    function textNode(elm) {
      // Iterate through child nodes of the element
      for (let node of elm.childNodes) {
        // Check if the node is a text node
        if (node.nodeType === Node.TEXT_NODE) {
          // Return the text node if found
          return node;
        }
      }
      // If no text node found, return null
      return null;
    }
    function textChange(element, value) {
      // Find the text node associated with the element
      let textElm = textNode(element);
      
      if (textElm) {
        // If text node exists, update its value
        textElm.nodeValue = value;
      } else {
        // If text node doesn't exist, create a new one and append it to the element
        const newTextNode = document.createTextNode(value);
        element.appendChild(newTextNode);
      }
      
      // Update the corresponding text node in the preview document
      const correspondingElement = previewDoc.querySelector(element.tagName);
      if (correspondingElement) {
        let correspondingTextElm = textNode(correspondingElement);
        if (correspondingTextElm) {
          // If corresponding text node exists, update its value
          correspondingTextElm.nodeValue = value;
        } else {
          // If corresponding text node doesn't exist, create a new one and append it to the element
          const newCorrespondingTextNode = document.createTextNode(value);
          correspondingElement.appendChild(newCorrespondingTextNode);
        }
      }
      updateJSON();
    }
    function booleanChange(e, attrName, attrValue) {
      const correspondingElement = previewDoc.querySelector(e.tagName);

      if (attrValue) {
        e.setAttribute(attrName, attrValue);
        if (correspondingElement) correspondingElement.setAttribute(attrName, attrValue);
      } else {
        e.removeAttribute(attrName);
        if (correspondingElement) correspondingElement.removeAttribute(attrName);
      }
      updateJSON();
      renderBtn.onclick();
    }
    function refreshIDs(e, attrName, attrValue) {
      const elementsWithId = doc.body.querySelectorAll('[id]');
      const treeElementsWithSelect = treeview.querySelectorAll('select[data-for]');
      const correspondingElement = previewDoc.querySelector(e.tagName);

      if (attrValue) {
        e.setAttribute(attrName, attrValue);
        if (correspondingElement) correspondingElement.setAttribute(attrName, attrValue);
      } else {
        e.removeAttribute(attrName);
        if (correspondingElement) correspondingElement.removeAttribute(attrName);
      }
      
      updateJSON();

      // // Define an object to store selected values for each select element
      // const selectedValues = {};
      // let tree;

      // treeElementsWithSelect.forEach(treeElement => {
      //   // Assign current treeElement to tree
      //   tree = treeElement;

      //   elementsWithId.forEach(select => {
      //     if (select.id.toLowerCase() === e.id) {
      //       // Clear the options list
      //       tree.innerHTML = "";
            
      //       elementsWithId.forEach(select => {
      //         const string = select.id.toLowerCase();
              
      //         // Create option element using app.elm()
      //         app.elm(`<option class="${inputClass}" value="${string}" ${(tree.value === string ? "selected" : "")}>${string}</option>`, tree);
      //       });
      //     }
      //   });
      // });
      
      // // Update the selected value for the current select element
      // selectedValues[tree.id] = tree.value;
    }
    // Function to escape HTML entities
    function escapeHTML(html) {
      return html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }
  
    const renderElement = (element, parent, topLevel = false) => {
      // Skip processing if the element's tag matches the excluded tag
      const excludedTags = ["head", "script"]; // Add more tags if needed
      const tag = element.tagName.toLowerCase();
      if (excludedTags.includes(tag)) {
        return; // Skip processing
      }
      btnStyle = "lowercase";
      inputClass = "p-2 rounded-md";

      const li = app.elm(`<li></li>`, parent);

      // display element tag and settings button
      const code = app.elm(`<code class="p-4 lowercase bg-gray-900 rounded-3xl"></code>`, li);
      const grid = app.elm(`<div class="flex flex-row justify-between gap-12"></div>`, code);
      const elmBtn = app.elm(`<button class="${btnStyle}" aria-label="toggle element children">${tag}</button>`, grid);
      elmBtn.addEventListener("click", function() {
        this.closest("code").nextElementSibling.classList.toggle("hidden");
      });
      const elmSettingsBtn = app.elm(`<button aria-label="element settings"><i class="fa fa-cog"></i></button>`, grid);
      elmSettingsBtn.addEventListener("click", function() {
        console.log("cog clicked");
      });

      // attributes handler
      const attrGrid = app.elm(`<div class="mt-4 flex flex-row justify-between gap-12"></div>`, code);
      const toggleElmAttrBtn = app.elm(`<button class="${btnStyle}" aria-label="toggle element attributes">attributes</button>`, attrGrid);
      toggleElmAttrBtn.addEventListener("click", function() {
        attrContainer.classList.toggle("hidden");
      });

      const addAttrBtn = app.elm(`<button aria-label="add attribute to element"><i class="fa fa-plus"></i></button>`, attrGrid);
      addAttrBtn.addEventListener("click", function() {
        console.log("add attribute");
      });

      const attrContainer = app.elm(`<div class="mt-4 flex flex-col justify-between gap-4"></div>`, code);

      const booleanAttributes = [
        "autofocus",
        "autoplay",
        "checked",
        "controls",
        "default",
        "defer",
        "disabled",
        "formnovalidate",
        "hidden",
        "loop",
        "multiple",
        "muted",
        "novalidate",
        "open",
        "contenteditable",
        "readonly",
        "required",
        "reversed",
        "scoped",
        "seamless",
        "selected"
      ];

      for (let i = 0; i < element.attributes.length; i++) {
        let name = element.attributes[i].nodeName.toLowerCase();
        let value = element.attributes[i].nodeValue;

        const container = app.elm(`<div class="flex flex-row justify-between gap-12"></div>`, attrContainer);
        const openAttrBtn = app.elm(`<button class="${btnStyle}" aria-label="open specific attribute settings">${name}</button>`, container);
        openAttrBtn.addEventListener("click", function() {
          console.log(`attribute ${name} clicked`);
        });

        // Check if the attribute is a boolean attribute
        if (booleanAttributes.includes(name)) {
          const input = app.elm(`<input class="${inputClass}" type="checkbox" ${name}>`, container);
          input.onchange = () => booleanChange(element, name, input.checked);
        } else if (name === "id") {
          const input = app.elm(`<input class="${inputClass}" type="text" value="${value}" placeholder="no value set for ${name} attribute">`, container);
          input.oninput = () => {
            refreshIDs(element, name, input.value)
          };
        } else if (tag === "input") {
          let nodeType = "text";
          let inputTypes = [
            "button", 
            "checkbox", 
            "color", 
            "date", 
            "datetime-local", 
            "email", 
            "file", 
            "hidden", 
            "image", 
            "month", 
            "number", 
            "password", 
            "radio", 
            "range", 
            "reset", 
            "search", 
            "submit", 
            "tel", 
            "text", 
            "time", 
            "url", 
            "week"
          ];
          // Attributes that accept numbers
          const numberAttributes = [
            "max",
            "maxlength",
            "min",
            "minlength",
            "multiple",
            "range",
            "size",
            "step"
          ];
          // Attributes that accept strings
          const stringAttributes = [
            "accept",
            "acceptCharset",
            "accesskey",
            "action",
            "align",
            "alt",
            "autocomplete",
            "form",
            "list",
            "pattern",
            "placeholder",
            "src",
            "tabindex",
            "title",
            "type",
            "usemap",
            "value"
          ];

          for (let numAttr of numberAttributes) {
            if (name === numAttr.toLowerCase()) {
              nodeType = "number";
            }
          }
          for (let string of stringAttributes) {
            if (name === string.toLowerCase()) {
              nodeType = "text";
            }
          }
          if (name === "value") {
            for (let inputType of inputTypes) {
              if (element.type === inputType.toLowerCase()) {
                nodeType = element.type.toLowerCase();
              }
              if (element.type === "range") {
                nodeType = "number";
              }
            }
          }
          if (name === "type") {
            const select = app.elm(`<select class="${inputClass}"></select>`, container);
            for (let string of inputTypes) {
              app.elm(`<option class="${inputClass}" value="${string}" ${(value === string ? "selected" : "")}>${string}</option>`, select);
            }
            select.onchange = () => inputChange(element, name, select.value);
          } else {
            const input = app.elm(`<input class="${inputClass}" type="${nodeType}" value="${value}" placeholder="no value set for ${name} attribute">`, container);
            input.oninput = () => inputChange(element, name, input.value);
          }
        } else if (tag === "button") {
          if (name === "type") {
            let nodeType = "button";
            let buttonTypes = ["submit", "reset", "button"];
            const select = app.elm(`<select class="${inputClass}"></select>`, container);
            for (let btnType of buttonTypes) {
              app.elm(`<option class="${inputClass}" value="${btnType}" ${(value === btnType ? "selected" : "")}>${btnType}</option>`, select);
            }
            select.onchange = () => inputChange(element, name, select.value);
          } else {
            const input = app.elm(`<input class="${inputClass}" type="text" value="${value}" placeholder="no value set for ${name} attribute">`, container);
            input.oninput = () => inputChange(element, name, input.value);
          }
        } else if (tag === "a") {
          if (name === "target") {
            let nodeType = "_self";
            let aTypes = ["_blank", "_self", "_parent", "_top"];
            const select = app.elm(`<select class="${inputClass}"></select>`, container);
            for (let aType of aTypes) {
              app.elm(`<option class="${inputClass}" value="${aType}" ${(value === aType ? "selected" : "")}>${aType}</option>`, select);
            }
            select.onchange = () => inputChange(element, name, select.value);
          } else {
            const input = app.elm(`<input class="${inputClass}" type="text" value="${value}" placeholder="no value set for ${name} attribute">`, container);
            input.oninput = () => inputChange(element, name, input.value);
          }
        } else if (tag === "img") {
          let numTypes = ["width", "height"];
          if (numTypes.includes(name)) {
            let type = "text";
            for (let numType of numTypes) {
              if (name === numType) {
                type = "number";
              }
            }
            const input = app.elm(`<input class="${inputClass}" type="${type}" value="${value}" placeholder="no value set for ${name} attribute">`, container);
            input.oninput = () => inputChange(element, name, input.value);
          } else if (name === "src") {
            const imgGroup = app.elm(`<div class="grid grid-cols-1"></div>`, container);
            const img = app.elm(`<img class="cursor-pointer w-full" src="${value}">`, imgGroup);
            img.addEventListener("click", function() {
              // Trigger file input
              const input = document.createElement('input');
              input.type = 'file';
              input.accept = 'image/*';
              input.onchange = function(event) {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = function(event) {
                  const base64String = event.target.result; // Get base64 string
                  // Do something with the base64 string, e.g., display it or use it for further processing
                  inputChange(element, name, base64String);
                  inputChange(img, name, base64String);
                  inputChange(img.nextElementSibling, "value", base64String);
                  input.remove();
                };
                reader.readAsDataURL(file);
              };
              input.click(); // Trigger click event programmatically
            });
            const input = app.elm(`<input class="${inputClass}" type="text" value="${value}" placeholder="no value set for ${name} attribute">`, imgGroup);
            input.oninput = () => inputChange(element, name, input.value);
            input.oninput = () => inputChange(input.previousElementSibling, name, input.value);
          } else {
            const input = app.elm(`<input class="${inputClass}" type="${value}" value="${value}" placeholder="no value set for ${name} attribute">`, container);
            input.oninput = () => inputChange(element, name, input.value);
          }
        } else if (tag === "svg") {
          let numTypes = ["width", "height", "stroke-width"];
          let colorTypes = ["fill", "stroke"];
          let type = "text";
          for (let numType of numTypes) {
            if (name === numType) {
              type = "number";
            }
          }
          for (let colorType of colorTypes) {
            if (name === colorType) {
              type = "color";
            }
          }
          input = app.elm(`<input class="${inputClass}" type="${type}" value="${value}" placeholder="no value set for ${name} attribute">`, container);
          input.oninput = () => inputChange(element, name, input.value);
        } else if (tag === "textarea") {
          const input = app.elm(`<input class="${inputClass}" type="text" value="${value}" placeholder="no value set for ${name} attribute">`, container);
          input.oninput = () => inputChange(element, name, input.value);
        } else if (tag === "form") {
          if (name === "method") {
            let nodeType = "GET";
            let formTypes = ["GET", "POST", "PUT", "DELETE"];
            const select = app.elm(`<select class="${inputClass}"></select>`, container);
            for (let fType of formTypes) {
              app.elm(`<option class="${inputClass}" value="${fType}" ${(value === fType ? "selected" : "")}>${fType}</option>`, select);
            }
            select.onchange = () => inputChange(element, name, select.value);
          } else {
            const input = app.elm(`<input class="${inputClass}" type="${nodeType}" value="${value}" placeholder="no value set for ${name} attribute">`, container);
            input.oninput = () => inputChange(element, name, input.value);
          }
        } else {
          if (name === "for") {
            // const elementsWithId = doc.body.querySelectorAll('[id]');
            // const select = app.elm(`<select class="${inputClass}" data-for></select>`, container);
            // elementsWithId.forEach(elm => {
            //   let string = elm.id.toLowerCase();
            //   app.elm(`<option class="${inputClass}" value="${string}" ${(value === string ? "selected" : "")}>${string}</option>`, select);
            // });
            // select.onchange = () => inputChange(element, name, select.value);
            const input = app.elm(`<input class="${inputClass}" type="text" value="${value}" placeholder="no value set for ${name} attribute">`, container);
            input.oninput = () => inputChange(element, name, input.value);
          } else {
            const input = app.elm(`<input class="${inputClass}" type="text" value="${value}" placeholder="no value set for ${name} attribute">`, container);
            input.oninput = () => inputChange(element, name, input.value);
          }
        }
      }

      // grab the text node
      const voidTags = ["html", "area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];
      let textNode = null;
      if (!voidTags.includes(tag.toLowerCase())) {
        for (let i = 0; i < element.childNodes.length; i++) {
          if (element.childNodes[i].nodeType === Node.TEXT_NODE) {
            textNode = element.childNodes[i];
            break;
          }
        }
  
        // If a text node was found, update its value
        if (textNode) {
          const textContent = textNode.nodeValue.trim();
          const container = app.elm(`<div class="flex flex-row justify-between gap-12 items-center"></div>`, attrContainer);
          app.elm(`<span>text</span>`, container);
          if (tag === "textarea") {
            contentInput = app.elm(`<textarea class="${inputClass} h-40" placeholder="no text content">${escapeHTML(textContent)}</textarea`, container);
          } else {
            contentInput = app.elm(`<input class="${inputClass}" type="text" value="" placeholder="no text content">`, container);
          }
          contentInput.oninput = function() {
            textChange(element, this.value.trim());
          };
        } else {
          const container = app.elm(`<div class="flex flex-row justify-between gap-12 items-center"></div>`, attrContainer);
          app.elm(`<span>text</span>`, container);
          let contentInput = null;
          if (tag === "textarea") {
            contentInput = app.elm(`<textarea class="${inputClass} h-40" placeholder="no text content"></textarea`, container);
          } else {
            contentInput = app.elm(`<input class="${inputClass}" type="text" value="" placeholder="no text content">`, container);
          }
          contentInput.oninput = function() {
            textChange(element, this.value.trim());
          };
        }
      }

      const wrapper = app.elm(`<div></div>`, li);
  
      if (!topLevel) {
        if (tag != "input" && 
            tag != "img" && 
            tag != "option") {
          const roundUl = app.elm(`<ul class="round"></ul>`, wrapper);
          const roundLi = app.elm(`<li></li>`, roundUl);
        
          const addChildBtn = app.elm(`<button aria-label="add a child element" class="bg-gray-900"><i class="fa fa-plus"></i></button>`, roundLi);
          addChildBtn.addEventListener("click", function() {
            console.log(`add child to ${tag}`);
          });
        }
      }
  
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
    <title>${project.page[app.activePage].title}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="${project.description}">
    <meta name="author" content="${project.page[app.activePage].author}">
    ${cssTags}${consoleStyle}
  </head>
  <body>
    ${project.page[app.activePage].html}
    
    ${scriptTags}
    <script type="module" src="js/dom-console.js" defer></script>
    ${(!project.page[app.activePage].javascript ? "" : `<script>document.addEventListener("DOMContentLoaded", (event) => {
      ${project.page[app.activePage].javascript}
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

  // allows user to export json database file
  exportDataJSON: (json, name) => {
    let blob = new Blob([JSON.stringify(json, null, 2)], {
      type: "application/json"
    });
    saveAs(blob, `${name.toString().toLowerCase().replace(/ /g,"")}.json`);
  },
  
  // Exports zip file
  exportZip: () => {
    let zip = new JSZip();
    
    // Iterate over each library
    project.libraries.forEach(library => {
      app.getFile(library, data => {
        // Get the name of the library file from its URL
        let parts = library.split("/");
        let name = parts[parts.length - 1];
  
        // Add the downloaded file to the zip archive
        zip.file(name, data);
  
        // Check if all files are added, then generate and download the zip file
        if (Object.keys(zip.files).length === project.libraries.length) {
          let content = zip.generate({ type: "blob" });
          saveAs(content, `libraries-${new Date().getFullYear()}.zip`);
        }
      });
    });
  },

  // Initiate function
  init: () => {
    // Place app name and version
    document.getElementById("appName").textContent = app.appName;
    document.getElementById("appAuthor").href = app.appAuthor.href;
    // document.getElementById("appAuthor").textContent = app.appAuthor.name;
    const authorPic = `<img class="m-auto my-4 w-28 rounded-full" src="${app.appAuthor.src}" alt="${app.appAuthor.name}">
    ${app.appAuthor.name}`;
    document.getElementById("appAuthor").innerHTML = app.appAuthor.name;
    // document.getElementById("appAuthor").innerHTML = authorPic;
    document.getElementById("appVersion").textContent = app.appVersion;
    document.getElementById("appUrl").href = app.appUrl;
    document.getElementById("appLicense").href = app.appLicense;
    
    // Place project name and version
    document.getElementById("projectLogo").src = project.logo;
    document.getElementById("projectName").value = project.name;
    document.getElementById("projectAuthor").value = project.author;
    document.getElementById("projectVersion").value = project.version;
    document.getElementById("projectUrl").value = project.url;
    document.getElementById("projectTitle").value = project.page[app.activePage].title;
    document.getElementById("projectDesc").value = project.page[app.activePage].description;
    document.getElementById("projectScratchpad").value = project.settings.scratchpad;

    // function to load logo
    importlogo.onchange = function(input) {
      let reader = new FileReader();

      reader.onload = e => {
        // grab file
        logo.src = e.target.result;

        // update logo in project file
        project.logo = app.elm("logo").src;

        // remove images if they already exist for exporting
        if (document.querySelector("[data-image]")) {
          document.querySelectorAll("[data-image]").forEach((child, index) => {
            child.remove();
          });
        }

        // convert create logo image sizes for manifest.json
        let imageArr = ["192", "256", "384", "512", app.elm("logo").width];
        for (let i of imageArr) {
          app.embedImage(app.elm("logo").src, i);
        }
      };
      reader.readAsDataURL(input.files[0]);
    };

    // set size containers for top left menu
    menuBtn.onclick = function() {
      if (menutl.classList.contains("hidden")) {
        zoomPanTreeview.disablePanzoom();
      }
      this.className = "py-2 px-3 text-blue-500";
      menu.classList.remove("hidden");
      [editorBtn, previewBtn].map(btn => {btn.className = "py-2 px-3"});
      design.classList.add("hidden");
    };
    editorBtn.onclick = function() {
      // if preview is active fill the page
      this.className = "py-2 px-3 text-blue-500";
      menu.classList.add("hidden");
      design.classList.remove("hidden");
      previewBtn.className = "py-2 px-3";
      preview.className = "absolute bottom-0 right-0 m-4 transform origin-bottom-right";
      previewSize(preview);
      preview.style.scale = preview.getAttribute("data-scale");
      previewFill.classList.add("cursor-pointer");
      preview.setAttribute("data-minimap", "true");
      if (editorFill.getAttribute("data-zoom") === "true") {
        zoomBtn.setAttribute("data-zoom", true);
        zoomBtn.className = "py-2 px-3 text-blue-500";
        editorFill.classList.remove('hidden');
      } else {
        zoomBtn.setAttribute("data-zoom", false);
        zoomBtn.className = "py-2 px-3";
        editorFill.classList.add('hidden');
      }

      // reset panzoom state
      if (zoomBtn.classList.contains("text-blue-500")) {
        zoomPanTreeview.enablePanzoom();
      }
    };
    previewBtn.onclick = function() {
      // navbar buttons must be in columns
      if (menutl.classList.contains("open")) {
        menutl.classList.add("closed");
      }

      this.className = "py-2 px-3 text-blue-500";
      menu.classList.add("hidden");
      design.classList.remove("hidden");
      editorBtn.className = "py-2 px-3";
      preview.className = "absolute inset-0";
      preview.removeAttribute("style");
      previewFill.classList.remove("cursor-pointer");
      preview.setAttribute("data-minimap", "false");
      if (previewFill.getAttribute("data-zoom") === "true") {
        zoomBtn.setAttribute("data-zoom", true);
        zoomBtn.className = "py-2 px-3 text-blue-500";
        previewFill.classList.remove('hidden');
      } else {
        zoomBtn.setAttribute("data-zoom", false);
        zoomBtn.className = "py-2 px-3";
        previewFill.classList.add('hidden');
      }

      // reset panzoom state
      if (zoomBtn.classList.contains("text-blue-500")) {
        zoomPanTreeview.enablePanzoom();
      }
    };

    function addCDNLibs() {
      // displays and handles libraries array
      app.displayLibrariesArray();
      const searchBox = document.getElementById("searchBox");
      const suggestionsList = document.getElementById("suggestions");
      const searchFunc = e => {
        if (e.value.trim().length <= 0) {
          suggestionsList.classList.add("hidden");
          suggestionsList.innerHTML = "";
        } else {
          suggestionsList.classList.remove("hidden");
          app.fetchSuggestions(e.value.trim());
        }
      };
      searchBox.onkeyup = function() {searchFunc(this)};
      searchBox.onchange = function() {searchFunc(this)};
      addanother.onclick = () => app.displayLibrariesArray();
    }
    addCDNLibs();

    // init live preview
    app.renderPreview(preview);

    // render treeview
    app.renderTreeView(document.getElementById('treeview'), project.page[app.activePage].html);

    const editorFill = app.elm(`<div class="absolute inset-0" data-zoom="true"></div>`, editor);
    const previewFill = app.elm(`<div class="absolute inset-0 hidden" data-zoom="false"></div>`, preview);
    
    // retrieve width and height values from size attribute
    const parseSizeAttribute = attributeValue => {
      const [width, height] = attributeValue.split(',').map(Number);
      return (width && height) ? { width, height } : null;
    };

    previewFill.onclick = function() {
      if (preview.getAttribute("data-minimap") === "true") {
        previewBtn.onclick();
      }
    };

    // initiate zooming and panning for the treeview
    const zoomPanTreeview = app.zoomPan(treeview, true);
    // const zoomPanPreview = app.zoomPan(preview, true);
    
    zoomBtn.onclick = function() {
      let element;
      let instance;
      if (preview.getAttribute("data-minimap") === "false") {
        // preview fullscreen
        element = previewFill;
        instance = zoomPanTreeview;
      } else {
        // preview is in minimap
        element = editorFill;
        instance = zoomPanTreeview;
      }
      if (element.classList.contains("cursor-pointer")) {
        element.classList.remove("cursor-pointer");
      }

      if (this.getAttribute("data-zoom") === "true") {
        this.setAttribute("data-zoom", false);
        this.className = "py-2 px-3";
        element.setAttribute("data-zoom", false);
        element.classList.add('hidden');
        instance.disablePanzoom();
      } else {
        this.setAttribute("data-zoom", true);
        this.className = "py-2 px-3 text-blue-500";
        element.setAttribute("data-zoom", true);
        element.classList.remove('hidden');
        instance.enablePanzoom();
      }
    };

    // toggle console
    consoleBtn.className = `${(project.settings.console) ? "text-blue-500" : ""}`;
    consoleBtn.onclick = function() {
      const previewFrame = preview.querySelector("iframe");
      const doc = previewFrame.contentDocument || previewFrame.contentWindow.document;

      if (project.settings.console === true) {
        project.settings.console = false;
        consoleBtn.classList.remove("text-blue-500");
        doc.querySelector(".target_wrapper_yOR7u").innerHTML = `.wrapper_yOR7u {display: none!important;}`;
      } else {
        project.settings.console = true;
        consoleBtn.classList.add("text-blue-500");
        doc.querySelector(".target_wrapper_yOR7u").innerHTML = ``;
      }
    };

    // function to set minimap size
    function previewSize(element) {
      const size = parseSizeAttribute(element.getAttribute("data-size"));
      let scale = parseFloat(preview.style.scale);
      scale = `${scale * 100}%`;
      if (size) {
        element.style.width = `${size.width}px`;
        element.style.height = `${size.height}px`;
        element.style.scale = scale;
      }
    }

    // button to re render preview
    renderBtn.onclick = () => {
      app.renderPreview(preview);
    };

    // change preview size
    windowSize.onclick = () => {
      mainTRContainer.className = "hidden";
      sizeTRContainer.className = "";
    };

    // share app source to codepen
    shareBtn.onclick = () => {
      console.log("share app to codepen");
    };

    // buttons to change preview size
    function windowSizeBtns() {
      // exit to main top right menu buttons
      backSizeBtn.onclick = () => {
        mainTRContainer.className = "";
        sizeTRContainer.className = "hidden";
      };
      // mobile portrait size
      mobilep.onclick = () => {
        let w = 360;
        let h = 740;
        preview.setAttribute("data-size", `${w}, ${h}`);
        previewSize(preview);
        preview.style.scale = "45%";
        preview.setAttribute("data-scale", preview.style.scale);
      };
      // mobile landscape size
      mobilel.onclick = () => {
        let w = 740;
        let h = 360;
        preview.setAttribute("data-size", `${w}, ${h}`);
        previewSize(preview);
        preview.style.scale = "40%";
        preview.setAttribute("data-scale", preview.style.scale);
      };
      // tablet portrait size
      tabletp.onclick = () => {
        let w = 768;
        let h = 1024;
        preview.setAttribute("data-size", `${w}, ${h}`);
        previewSize(preview);
        preview.style.scale = "30%";
        preview.setAttribute("data-scale", preview.style.scale);
      };
      // tablet landscape size
      tabletl.onclick = () => {
        let w = 1024;
        let h = 768;
        preview.setAttribute("data-size", `${w}, ${h}`);
        previewSize(preview);
        preview.style.scale = "30%";
        preview.setAttribute("data-scale", preview.style.scale);
      };
      // tablet landscape size
      desktopBtn.onclick = () => {
        let w = 1440;
        let h = 834;
        preview.setAttribute("data-size", `${w}, ${h}`);
        previewSize(preview);
        preview.style.scale = "22.25%";
        preview.setAttribute("data-scale", preview.style.scale);
      };
    }
    windowSizeBtns();
    previewSize(preview);

    newProjBtn.onclick = function() {
      // new project
    };
    importBtn.onclick = function() {
      // import project
    };
    exportBtn.onclick = function() {
      // export project
      app.exportDataJSON(project, project.name);
    };
  }
};

// check if FileReader API is available
if (!window.FileReader) {
  alert("File API & FileReader API not supported!");
}

app.init();