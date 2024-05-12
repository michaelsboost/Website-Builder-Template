let project = {
  name: "App name",
  author: "App Builder Template",
  version: 0.1,
  url: "https://michaelsboost.com/",
  settings: {
    console: true,
    scratchpad: "",
  },
  meta: "",
  libraries: ["libraries/pico/pico.classless.min.css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css", "https://michaelsboost.com/TailwindCSSMod/tailwind-mod.min.js"],
  title: "An attractive title",
  description: "The most attractive description ever!",
  html: {
    tag: 'div',
    attrs: { id: 'todo-app', class: 'p-4' },
    children: [
      {
        tag: 'fieldset',
        attrs: { id: 'input-container', role: "group" },
        children: [
          {
            tag: 'input',
            attrs: { type: 'text', placeholder: 'Add new todo', id: 'todo-input' },
            events: {
              keyup: function(event) {
                if (event.key === 'Enter') {
                    addTodo();
                }
              }
            }
          },
          {
            tag: 'button',
            children: [{ tag: 'i', attrs: { class: 'fas fa-plus' } }],
            events: {
              click: function(event) {
                app.addTodo();
              }
            }
          }
        ]
      },
      {
        tag: 'div',
        attrs: { id: 'todo-list' },
        children: []
      }
    ]
  },
  data: {}
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
  
  // render json dom to html
  renderHTML: (container, json) => {
    // Clear existing content in the container element
    container.innerHTML = '';

    const renderElement = (json, parent) => {
      // Base case: if the JSON node has no tag, it's a text node
      if (!json.tag) {
        const textNode = document.createTextNode(json.text || '');
        parent.appendChild(textNode);
        return;
      }

      // Create the HTML element with tag
      const element = document.createElement(json.tag);

      // Add attributes to the element
      if (json.attrs) {
        for (const [key, value] of Object.entries(json.attrs)) {
          element.setAttribute(key, value);
        }
      }

      // Add text content if present
      if (json.text) {
        element.textContent = json.text;
      }

      // Add event listeners if present
      if (json.events) {
        for (const [eventName, eventHandler] of Object.entries(json.events)) {
          element.addEventListener(eventName, eventHandler);
        }
      }

      // Append the element to the parent
      parent.appendChild(element);

      // Add children elements recursively
      if (json.children) {
        for (const childJson of json.children) {
          renderElement(childJson, element);
        }
      }
    };

    // Render the element tree from the JSON structure
    renderElement(json, container);
  },

  // Function to render layers from virtual DOM
  renderLayers: (container, json) => {
    // Clear existing content in the container element
    container.innerHTML = '';

    // Parse the HTML content of the preview using DOMParser
    const parser = new DOMParser();
    const iframe = preview.querySelector("iframe");
    const previewDoc = iframe.contentDocument || iframe.contentWindow.document;
    const previewBodyHTML = previewDoc.body.innerHTML;
    const doc = parser.parseFromString(previewBodyHTML, "text/html");

    const renderElement = (json, parent) => {
      // Create HTML elements based on JSON and HTML elements
      // Here, you'll compare the JSON element with the HTML element to ensure they match

      // For simplicity, let's assume the JSON structure and HTML structure are similar,
      // and you want to render the HTML structure within the container

      let tag = json.tag.toLowerCase();

      // Find corresponding HTML element
      let element = findCorrespondingElement(doc.body, json);

      // Find corresponding element inside the preview
      const correspondingElement = findCorrespondingElement(previewDoc.body, json);

      // Create the HTML element with tag
      const li = app.elm(`<li class="list-none" data-tag="${json.tag.toLowerCase()}" draggable="true"></li>`, parent);
      // display element tag
      btnStyle = "bg-transparent border-0 p-2 text-xs";
      const code = app.elm(`<code class="p-0"></code>`, li);
      const grid = app.elm(`<nav></nav>`, code);
      const box = app.elm(`<div></div>`, grid);
      if (json.children) {
        const collapseBtn = app.elm(`<button class="${btnStyle}" aria-label="toggle element children"><i class="fa fa-chevron-down"></button>`, box);
        collapseBtn.addEventListener('click', function() {
          const ul = this.closest("code").nextElementSibling;
          ul.classList.toggle('hidden');
          const icon = this.querySelector('i');
          icon.classList.toggle('fa-chevron-down');
          icon.classList.toggle('fa-chevron-right');
        });
      }
      const elmBtn = app.elm(`<button class="${btnStyle}" aria-label="open element's attributes">${tag}</button>`, box);
      elmBtn.addEventListener("click", function() {
        // Toggle the text-green-500 class on the button
        code.classList.toggle("bg-green-800");
        // Remove the bg-green-500 class from other code elements
        const codeElements = layers.querySelectorAll("code");
        codeElements.forEach(codeElement => {
          if (codeElement !== code && codeElement.classList.contains("bg-green-800")) {
            codeElement.classList.remove("bg-green-800");
          }
        });
        app.renderAttributes(correspondingElement, json);
      });

      let icon = "eye";
      if (json.attrs && json.attrs.style && json.attrs.style.display && json.attrs.style.display != "none") {
        icon = "eye-slash";
      }
      const eyeBtn = app.elm(`<button class="${btnStyle}" aria-label="toggle element children"><i class="fa fa-${icon}"></button>`, grid);
      eyeBtn.addEventListener("click", function() {
        // Apply changes to the corresponding element inside the preview
        const isVisible = correspondingElement.style.display !== "none";
        const newDisplay = isVisible ? "none" : "";
        correspondingElement.style.display = newDisplay;

        // Update JSON with new display style
        if (!json.attrs) json.attrs = {};
        if (!json.attrs.style) json.attrs.style = {};
        json.style = {
          display: newDisplay
        };
      
        // Update eye icon classes based on new visibility
        this.firstElementChild.classList.toggle("fa-eye-slash", isVisible);
        this.firstElementChild.classList.toggle("fa-eye", !isVisible);
        app.renderAttributes(correspondingElement, json);
      });

      const wrapper = app.elm(`<div class="mt-1"></div>`, li);

      // Add event listeners for drag and drop
      li.addEventListener('dragstart', dragStart);
      li.addEventListener('dragover', dragOver);
      li.addEventListener('dragend', dragEnd);

      // Add children elements recursively
      if (json.children) {
        const ul = app.elm(`<ul class="mb-1 -ml-4"></ul>`, wrapper);
        for (let i = 0; i < json.children.length; i++) {
          renderElement(json.children[i], ul); // Pass the index of the child element
        }
      }
    };

    // Render the element tree from the JSON structure
    renderElement(json, container);

    // Function to handle drag start event
    function dragStart(e) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', null);
      e.currentTarget.classList.add('dragging');
    }

    // Function to handle drag over event
    function dragOver(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    }

    // Function to handle drag end event
    function dragEnd() {
      const draggingElement = container.querySelector('.dragging');
      if (draggingElement) {
        draggingElement.classList.remove('dragging');
      }
    }

    // Function to find corresponding HTML element in the parsed HTML
    function findCorrespondingElement(parentElement, jsonElement) {
      const tag = jsonElement.tag.toLowerCase();
      const children = parentElement.children;

      for (const childElement of children) {
        if (childElement.tagName.toLowerCase() === tag) {
          // If the tag matches, check if other attributes match too
          // You can implement this based on your specific requirements
          return childElement;
        }
      }

      // If no match found, recursively search in children
      for (const childElement of children) {
        const correspondingElement = findCorrespondingElement(childElement, jsonElement);
        if (correspondingElement) {
          return correspondingElement;
        }
      }

      return null; // Corresponding element not found
    }
  },

  // Function to display add edit and remove attributes
  renderAttributes: (element, vdomNode) => {
    const container = document.getElementById('placeattrs');
    container.innerHTML = ''; // Clear existing content
    placeElm.innerHTML = `
    <nav class="items-center mt-1">
      <span>Delete Element</span>
      <button id="delE" class="text-xs py-1 px-1 bg-transparent border-0">
        <i class="fa fa-trash"></i>
      </button>
    </nav>
    <nav class="items-center mt-1 ${element.children.length ? `` : `hidden`}">
      <span>Delete Children</span>
      <button id="delC" class="text-xs py-1 px-1 bg-transparent border-0">
        <i class="fa fa-trash"></i>
      </button>
    </nav>
    <nav class="items-center mt-1 ${element.children.length ? `` : `hidden`}">
      <span>Clear Children</span>
      <button id="clearC" class="text-xs py-1 px-1 bg-transparent border-0">
        <i class="fa fa-trash"></i>
      </button>
    </nav>
  `;
    const liStyle = "py-0 px-1";
    const inputClass = "text-xs";
    const btnStyle = "text-xs bg-transparent border-0";
    
    const nav = app.elm(`<nav>
    <ul>
      <li class="${liStyle}">
        <input type="text" placeholder="Attribute name" class="${inputClass}">
      </li>
      <li class="${liStyle}">
        <input type="text" placeholder="Attribute value" class="${inputClass}">
      </li>
      <li class="${liStyle}">
        <button class="${btnStyle}"><i class="fa fa-plus"></i></button>
      </li>
    </ul>
  </nav>`, container);
    const [txtName, txtVal, btn] = nav.querySelectorAll("input, button");
    
    // add attribute
    btn.onclick = element => {
      // Update attribute value in the VDOM node
      if (!vdomNode.attrs) vdomNode.attrs = {};
      vdomNode.attrs[txtName.value] = txtVal.value;

      element.setAttribute(txtName.value, txtVal.value);
      txtName.value = txtVal.value = "";
      app.renderAttributes(element, vdomNode);
    };
    txtVal.onkeyup = function(event) {
      if (event.keyCode === 13) btn.onclick(element);
    };

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

    function updateAttr(attrName, attrValue) {
      if (attrName === 'style') {
        // Parse the style string into an object
        const styles = attrValue.split(';').map(style => style.trim()).filter(style => style !== '').reduce((acc, curr) => {
          const [property, value] = curr.split(':').map(part => part.trim());
          acc[property] = value;
          return acc;
        }, {});
    
        // Update the style attribute in the virtual DOM
        vdomNode.attrs[attrName] = styles;
    
        // Update the style attribute of the HTML element
        Object.entries(styles).forEach(([property, value]) => {
          element.style[property] = value;
        });
      } else {
        // Update other attributes as usual
        if (!vdomNode.attrs) vdomNode.attrs = {};
        vdomNode.attrs[attrName] = attrValue;
    
        // Update the attribute of the HTML element
        element.setAttribute(attrName, attrValue);
      }
    }    
  
    const attributes = Array.from(element.attributes);
    attributes.forEach(attribute => {
      let tag = element.tagName.toLowerCase();
      let name = attribute.name;
      let value = attribute.value;
      const grid = app.elm(`<nav class="items-center w-full"></nav>`, container);
      const gridUl = app.elm(`<ul class="mt-1"></ul>`, grid);
      let gridLi = app.elm(`<li class="${liStyle}"></li>`, gridUl);
      app.elm(`<span>${name}</span>`, gridLi);
      gridLi = app.elm(`<li class="${liStyle}"></li>`, gridUl);

      // Check if the attribute is a boolean attribute
      if (booleanAttributes.includes(name)) {
        const input = app.elm(`<input class="${inputClass}" type="checkbox" role="switch" ${name}>`, gridLi);
        input.onchange = () => updateAttr(name, input.checked);
      } else if (name === "id") {
        const input = app.elm(`<input class="${inputClass}" type="text" value="${value}" placeholder="no value set for ${name} attribute">`, gridLi);
        input.oninput = () => {
          updateAttr(name, input.value)
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
          const select = app.elm(`<select class="${inputClass}"></select>`, gridLi);
          for (let string of inputTypes) {
            app.elm(`<option class="${inputClass}" value="${string}" ${(value === string ? "selected" : "")}>${string}</option>`, select);
          }
          select.onchange = () => updateAttr(name, select.value);
        } else {
          const input = app.elm(`<input class="${inputClass}" type="${nodeType}" value="${value}" placeholder="no value set for ${name} attribute">`, gridLi);
          input.oninput = () => updateAttr(name, input.value);
        }
      } else if (tag === "button") {
        if (name === "type") {
          let nodeType = "button";
          let buttonTypes = ["submit", "reset", "button"];
          const select = app.elm(`<select class="${inputClass}"></select>`, gridLi);
          for (let btnType of buttonTypes) {
            app.elm(`<option class="${inputClass}" value="${btnType}" ${(value === btnType ? "selected" : "")}>${btnType}</option>`, select);
          }
          select.onchange = () => updateAttr(name, select.value);
        } else {
          const input = app.elm(`<input class="${inputClass}" type="text" value="${value}" placeholder="no value set for ${name} attribute">`, gridLi);
          input.oninput = () => updateAttr(name, input.value);
        }
      } else if (tag === "a") {
        if (name === "target") {
          let nodeType = "_self";
          let aTypes = ["_blank", "_self", "_parent", "_top"];
          const select = app.elm(`<select class="${inputClass}"></select>`, gridLi);
          for (let aType of aTypes) {
            app.elm(`<option class="${inputClass}" value="${aType}" ${(value === aType ? "selected" : "")}>${aType}</option>`, select);
          }
          select.onchange = () => updateAttr(name, select.value);
        } else {
          const input = app.elm(`<input class="${inputClass}" type="text" value="${value}" placeholder="no value set for ${name} attribute">`, gridLi);
          input.oninput = () => updateAttr(name, input.value);
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
          const input = app.elm(`<input class="${inputClass}" type="${type}" value="${value}" placeholder="no value set for ${name} attribute">`, gridLi);
          input.oninput = () => updateAttr(name, input.value);
        } else if (name === "src") {
          const imgGroup = app.elm(`<div class="grid grid-cols-1"></div>`, gridLi);
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
                updateAttr(name, base64String);
                updateAttr(img, name, base64String);
                updateAttr(img.nextElementSibling, "value", base64String);
                input.remove();
              };
              reader.readAsDataURL(file);
            };
            input.click(); // Trigger click event programmatically
          });
          const input = app.elm(`<input class="${inputClass}" type="text" value="${value}" placeholder="no value set for ${name} attribute">`, imgGroup);
          input.oninput = () => updateAttr(name, input.value);
          input.oninput = () => updateAttr(input.previousElementSibling, name, input.value);
        } else {
          const input = app.elm(`<input class="${inputClass}" type="${value}" value="${value}" placeholder="no value set for ${name} attribute">`, gridLi);
          input.oninput = () => updateAttr(name, input.value);
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
        input = app.elm(`<input class="${inputClass}" type="${type}" value="${value}" placeholder="no value set for ${name} attribute">`, gridLi);
        input.oninput = () => updateAttr(name, input.value);
      } else if (tag === "textarea") {
        const input = app.elm(`<input class="${inputClass}" type="text" value="${value}" placeholder="no value set for ${name} attribute">`, gridLi);
        input.oninput = () => updateAttr(name, input.value);
      } else if (tag === "form") {
        if (name === "method") {
          let nodeType = "GET";
          let formTypes = ["GET", "POST", "PUT", "DELETE"];
          const select = app.elm(`<select class="${inputClass}"></select>`, gridLi);
          for (let fType of formTypes) {
            app.elm(`<option class="${inputClass}" value="${fType}" ${(value === fType ? "selected" : "")}>${fType}</option>`, select);
          }
          select.onchange = () => updateAttr(name, select.value);
        } else {
          const input = app.elm(`<input class="${inputClass}" type="${nodeType}" value="${value}" placeholder="no value set for ${name} attribute">`, gridLi);
          input.oninput = () => updateAttr(name, input.value);
        }
      } else {
        if (name === "for") {
          // const elementsWithId = doc.body.querySelectorAll('[id]');
          // const select = app.elm(`<select class="${inputClass}" data-for></select>`, gridLi);
          // elementsWithId.forEach(elm => {
          //   let string = elm.id.toLowerCase();
          //   app.elm(`<option class="${inputClass}" value="${string}" ${(value === string ? "selected" : "")}>${string}</option>`, select);
          // });
          // select.onchange = () => inputChange(element, name, select.value);
          const input = app.elm(`<input class="${inputClass}" type="text" value="${value}" placeholder="no value set for ${name} attribute">`, gridLi);
          input.oninput = () => updateAttr(name, input.value);
        } else {
          const input = app.elm(`<input class="${inputClass}" type="text" value="${value}" placeholder="no value set for ${name} attribute">`, gridLi);
          input.oninput = () => updateAttr(name, input.value);
        }
      }
    
      gridLi = app.elm(`<li class="${liStyle}"></li>`, gridUl);
      const delBtn = app.elm(`<button class="${btnStyle}"><i class="fa fa-trash"></i></button>`, gridLi);
      delBtn.onclick = () => {
        element.removeAttribute(name);
        app.renderAttributes(element, vdomNode);
        app.renderLayers(layers, preview);
      }
    });

    // delete element
    delE.onclick = () => {
      let e = element.closest('body');
      element.remove();
      app.renderAttributes(e);
      app.renderLayers(layers, preview);
    };
    // delete element's children
    delC.onclick = () => {
      element.innerHTML = "";
      app.renderAttributes(element, vdomNode);
      app.renderLayers(layers, preview);
    };
    // clear element's children's html
    clearC.onclick = function() {
      console.log(element.children);
      [...element.children].map(e => {
        e.innerHTML = "";
      });
      app.renderAttributes(element, vdomNode);
      app.renderLayers(layers, preview);
    };
  },

  // Function to render preview from virtual DOM
  renderPreview: (e, json) => {
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

    const generateHtmlCode = json => {
      // Function to convert virtual DOM to HTML
      const renderElement = json => {
          let html = '';

          // Base case: if the JSON node has no tag, it's a text node
          if (!json.tag) {
            html += json.text || '';
            return html;
          }

          // Create the HTML element with tag
          html += `<${json.tag}`;

          // Add attributes to the element
          if (json.attrs) {
            for (const [key, value] of Object.entries(json.attrs)) {
              html += ` ${key}="${value}"`;
            }
          }

          html += '>';

          // Add text content if present
          if (json.text) {
            html += json.text;
          }

          // Add children elements recursively
          if (json.children) {
            for (const childJson of json.children) {
              html += renderElement(childJson);
            }
          }

          // Close the HTML element
          html += `</${json.tag}>`;

          return html;
        };

        return renderElement(json);
      };

    // Clear existing content in the preview element
    e.innerHTML = '';

    // Create iframe and append for live preview
    const iframe = app.elm(`<iframe 
        class="shadow-2xl shadow-blue-500"
        title="${project.name}" 
        sandbox="allow-scripts allow-same-origin allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups" 
        style="width: 360px; height: 740px;"></iframe>`, e);

    // Get the content document of each iframe and render HTML tree
    const previewFrame = iframe;
    const previewDoc =
        previewFrame.contentDocument || previewFrame.contentWindow.document;

    // Open, write HTML code, and close the content document
    previewDoc.open();
    previewDoc.write(`<!DOCTYPE html>
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
  ${generateHtmlCode(json)}
    
    ${scriptTags}
    <script type="module" src="js/dom-console.js" defer></script>
    ${(!project.javascript ? "" : `<script>document.addEventListener("DOMContentLoaded", (event) => {
      ${project.javascript}
    });</script>`)}
  </body>
</html>`);
    previewDoc.close();
  },

  // Initiate function
  init: () => {
    // toggle console
    terminal.onclick = function() {
      const isEnabled = !project.settings.console;
      const displayStyle = isEnabled ? '' : 'none!important';
      const textClass = isEnabled ? 'text-blue-500' : '';
      
      this.setAttribute('data-console', isEnabled.toString());
      this.className = `text-xs bg-transparent border-0 ${textClass}`;
      project.settings.console = isEnabled;
    
      const previewFrame = preview.querySelector('iframe');
      const doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
      doc.querySelector('.target_wrapper_yOR7u').innerHTML = `.wrapper_yOR7u {display: ${displayStyle};}`;
    };    

    // toggle dark mode
    dark.onclick = function() {
      const isDark = this.getAttribute("data-dark") === "true";
      const theme = isDark ? "light" : "dark";
      const iconClass = isDark ? "fa fa-sun" : "fa fa-moon";
      const previewFrame = preview.querySelector("iframe");
      const previewDoc =
          previewFrame.contentDocument || previewFrame.contentWindow.document;
    
      this.setAttribute("data-dark", isDark ? "false" : "true");
      // document.querySelector("html").setAttribute("data-theme", theme);
      previewDoc.querySelector("html").setAttribute("data-theme", theme);
      project.settings.dark = !isDark;
      this.innerHTML = `<i class="${iconClass}"></i>`;
    };

    // init live preview
    app.renderPreview(preview, project.html);

    // render layers
    app.renderLayers(layers, project.html);
  }
};

// check if FileReader API is available
if (!window.FileReader) {
  alert("File API & FileReader API not supported!");
}

app.init();