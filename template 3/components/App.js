const { ref, reactive } = Vue;
import LeftMenubar from '/components/LeftMenubar.js';
import PreviewMenu from '/components/PreviewMenu.js';
import Settings from '/components/Settings.js';
import LayerTree from '/components/LayerTree.js';
import Inspector from '/components/Inspector.js';
import Blocks from '/components/Blocks.js';

const App = {
  components: {
    LeftMenubar,
    PreviewMenu,
    Settings,
    LayerTree,
    Inspector,
    Blocks
  },
  data() {
    return {
      app: {
        name: "Polyrise",
        author: {
          name: "Michael Schwartz",
          href: "https://michaelsboost.com/",
          src: "imgs/author.jpg"
        },
        version: "0.0.3",
        url: "https://github.com/michaelsboost/Polyrise/tree/gh-pages",
        license: "https://github.com/michaelsboost/Polyrise/blob/gh-pages/LICENSE"
      },
      colors: {
        text: "text-[#fff]",
        border: "border-gray-800"
      },
      project: reactive({
        name: "App name",
        version: 0.01,
        title: "An attractive title",
        description: "The most attractive description ever!",
        author: "Polyrise",
        url: "https://michaelsboost.com/",
        meta: "",
        libraries: [
          "https://cdnjs.cloudflare.com/ajax/libs/picocss/1.5.7/pico.classless.min.css",
          "https://michaelsboost.com/TailwindCSSMod/tailwind-mod.min.js",
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/all.min.js"
        ],
        styles: {
          "common": {
            "p4dmvkj5v": {
              "padding": "1rem",
              "text-align": "center",
              "display": "grid",
              "grid-template-columns": "repeat(1, minmax(0, 1fr))",
              "align-items": "center",
              "max-width": "840px",
              "margin": "auto"
            },
            "n6zv2tuar": {
              "font-family": 'system-ui,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,Helvetica,Arial,"Helvetica Neue",sans-serif',
              "font-size": "2rem",
              "line-height": "1.125"
            },
            "xqkuxhejp": {
              "font-family": 'system-ui,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,Helvetica,Arial,"Helvetica Neue",sans-serif',
              "font-weight": "unset",
              "font-size": "1rem",
              "line-height": "1.15",
              "color": "#7b8495"
            },
            "w78d2h": {
              "margin": "1rem",
              "display": "grid",
              "grid-template-columns": "repeat(1, minmax(0, 1fr))",
              "align-items": "center",
              "gap": "1rem"
            },
            "cc7uwye7i": {
              "margin": "auto",
              "width": "100%",
              "max-width": "500px"
            },
            "aofdknf1r": {
              "margin": "0 1rem"
            },
            "h30v6g": {
              "cursor": 'pointer',
              "font-weight": '100',
              "line-height": '1.5',
              "padding": '0.75rem 1rem',
              "text-align": "center",
              "text-decoration": "none",
              "text-transform": "uppercase",
              "margin": "1rem .5rem",
              "border-radius": ".25rem",
              "color": "#ffffff",
              "border-width": "0.0625rem",
              "border-style": "solid",
              "border-color": "#c15ab8",
              "background-color": "#a949a0"
            },
            "tv2rf2xx3": {
              "cursor": 'pointer',
              "font-weight": '100',
              "line-height": '1.5',
              "padding": '0.75rem 1rem',
              "text-align": "center",
              "text-decoration": "none",
              "text-transform": "lowercase",
              "margin": "1rem .5rem",
              "border-radius": ".25rem",
              "color": "#ffffff",
              "border-width": "0.0625rem",
              "border-style": "solid",
              "border-color": "#58bf74",
              "background-color": "#4aa963",
            }
          },
          "states": {
            "h30v6g": {
              "hover": {
                "border-color": "#a949a0",
                "background-color": "#c15ab8"
              }
            },
            "tv2rf2xx3": {
              "hover": {
                "border-color": "#4aa963",
                "background-color": "#58bf74"
              }
            }
          },
          "breakpoints": {
            "h30v6g": {
              "640": {
                "font-weight": "100",
                "hover": {
                  "border-color": "#a949a0",
                  "background-color": "#c15ab8"
                }
              }
            },
            "tv2rf2xx3": {
              "640": {
                "font-weight": "100",
                "hover": {
                  "border-color": "#4aa963",
                  "background-color": "#58bf74"
                },
                "focus-within": {
                  "border-color": "black",
                  "background-color": "black"
                }
              }
            }
          }
        },
        html: `<header class="p4dmvkj5v">
        <hgroup class="w78d2h">
          <h1 class="n6zv2tuar">App name</h1>
          <h2 class="xqkuxhejp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusantium rem sint voluptatum quisquam cum. Nostrum dolorum alias doloribus quod accusantium odit vero dolor excepturi cumque mollitia? Laboriosam, dolore rem!</h2>
        </hgroup>
      </header>
      <main class="p4dmvkj5v">
        <figure>
          <img
            class="cc7uwye7i"
            src="imgs/image.webp"
            alt="Polyrise"
          />
          <figcaption>
            Image from 
            <a class="mx-1" href="https://michaelsboost.com/Polyrise/" target="_blank">michaelsboost.com/Polyrise</a>
          </figcaption>
        </figure>
      </main>
      <footer class="p4dmvkj5v">
        <div style="text-align: center;" class="aofdknf1r">
        <button class="h30v6g">Button</button>
        <button class="tv2rf2xx3">Button</button>
        </div>
        <div style="text-align: center;" class="aofdknf1r">
          <figure>
            <audio controls style="margin: auto;">
              <source src="media/sound.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
            <figcaption>
              Audio from 
              <a class="mx-1" href="https://pixabay.com/sound-effects/ding-47489/" target="_blank">pixabay.com</a>
            </figcaption>
          </figure>
          <figure>
            <video controls>
              <source src="media/movie.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <figcaption>
              Video from 
              <a class="mx-1" href="https://pixabay.com/videos/turtle-ocean-sea-animal-35427/" target="_blank">pixabay.com</a>
            </figcaption>
          </figure>
          <svg viewBox="0 0 135.46666 135.46667">
            <g>
              <path fill="#133ad4" stroke-width="96.174" stroke-linecap="round" stroke-linejoin="round"
                d="M 9.5828775,67.733332 V 135.20053 L 25.387597,126.03107 V 106.9604 67.733332 Z m 85.9689115,0 -57.769083,32.297258 v 18.81073 L 125.88224,67.733332 Z" />
              <path fill="#04a2ff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"
                d="m 49.568527,35.819553 -16.970478,9.79791 0,-19.59582 z"
                transform="matrix(2.2172652,0,0,2.1470293,-34.495269,-9.262162)" />
              <path fill="#8600ef" stroke-width="96.174" stroke-linecap="round" stroke-linejoin="round"
                d="M 9.5828775,0.26613362 V 67.733332 H 25.387597 V 42.856815 28.326953 l 70.325939,39.315946 -0.161747,0.09043 h 30.330451 l 0.002,-0.001 z" />
            </g>
          </svg>
        </div>
      </footer>`,
        scratchpad: "",
        logo: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iNTEyIgogICBoZWlnaHQ9IjUxMiIKICAgdmlld0JveD0iMCAwIDEzNS40NjY2NiAxMzUuNDY2NjciCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzEiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnMKICAgICBpZD0iZGVmczEiIC8+PGcKICAgICBpZD0iZzI0Ij48cGF0aAogICAgICAgaWQ9InBhdGgyMiIKICAgICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOiMxMzNhZDQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjk2LjE3NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiCiAgICAgICBkPSJNIDkuNTgyODc3NSw2Ny43MzMzMzIgViAxMzUuMjAwNTMgTCAyNS4zODc1OTcsMTI2LjAzMTA3IFYgMTA2Ljk2MDQgNjcuNzMzMzMyIFogbSA4NS45Njg5MTE1LDAgLTU3Ljc2OTA4MywzMi4yOTcyNTggdiAxOC44MTA3MyBMIDEyNS44ODIyNCw2Ny43MzMzMzIgWiIgLz48cGF0aAogICAgICAgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2ZpbGw6IzA0YTJmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIgogICAgICAgaWQ9InBhdGgyMyIKICAgICAgIGQ9Im0gNDkuNTY4NTI3LDM1LjgxOTU1MyAtMTYuOTcwNDc4LDkuNzk3OTEgMCwtMTkuNTk1ODIgeiIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDIuMjE3MjY1MiwwLDAsMi4xNDcwMjkzLC0zNC40OTUyNjksLTkuMjYyMTYyKSIgLz48cGF0aAogICAgICAgaWQ9InBhdGgyNCIKICAgICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOiM4NjAwZWY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjk2LjE3NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiCiAgICAgICBkPSJNIDkuNTgyODc3NSwwLjI2NjEzMzYyIFYgNjcuNzMzMzMyIEggMjUuMzg3NTk3IFYgNDIuODU2ODE1IDI4LjMyNjk1MyBsIDcwLjMyNTkzOSwzOS4zMTU5NDYgLTAuMTYxNzQ3LDAuMDkwNDMgaCAzMC4zMzA0NTEgbCAwLjAwMiwtMC4wMDEgeiIgLz48L2c+PC9zdmc+Cg==",
        pwa: false,
        cssreset: false,
        dark: true
      }),
      themeIcon: "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z",
      activePanel: reactive('layers'),
      blocksBool: false,
      blockPreview: "Block Preview",
      layerJSON: null,
      selectedLayer: null,
      selectedBlock: null,
      previewContainer: ref({
        width: 0,
        height: 0
      }),
      iframeSize: reactive({
        "transform-origin": 'center center',
        "width": "100%",
        "height": "100%",
        "transform": "scale(1)",
        "position": 'absolute',
        "top": 'auto',
        "left": 'auto',
        "margin-top": `0`,
        "margin-left": `0`
      }),
      blocks: {
        container: {
          id: 'nytse0b2f',
          type: "box",
          code: '<div></div>',
          collapsed: false
        },
        text: {
          id: 'c8a28n2zn',
          type: "text",
          code: '<p>text</p>',
          collapsed: false
        },
        button: {
          id: 'iptrx4yoi',
          type: "button",
          code: '<button>text</button>',
          collapsed: false
        },
        progress: {
          id: 'j8xlr22pd',
          type: "progress",
          code: '<progress />',
          collapsed: false
        },
        form: {
          id: 'lhygmqu59',
          collapsed: false,
          items: [
            {
              type: "form",
              code: `<form>
                <input
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  aria-label="First name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  aria-label="Email address"
                  autocomplete="email"
                  required
                />
                <button type="submit">Subscribe</button>
                <fieldset>
                  <label for="terms">
                    <input type="checkbox" role="switch" id="terms" name="terms" />
                    I agree to the
                    <a href="#">Privacy Policy</a>
                  </label>
                </fieldset>
              </form>`
            },
            {
              type: "datalist",
              code: `<input list="list" type="search" placeholder="Search..." />
              <datalist id="list">
                <option value="Hello"></option>
                <option value="World"></option>
              </list>`
            },
            {
              type: "textarea",
              code: `<textarea placeholder="Text here"/>`
            },
            {
              type: "select",
              code: `<select>
                <option value="Hello" selected>Hello</option>
                <option value="World">World</option>
              </select>`
            }
          ]
        },
        media: {
          id: 'ifcor7q5f',
          collapsed: false,
          items: [
            {
              type: "audio",
              code: `<figure>
              <audio controls>
                <source src="media/sound.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
              </audio>
              <figcaption>
                Audio from
                <a href="https://pixabay.com/sound-effects/ding-47489/" target="_blank">pixabay.com</a>
              </figcaption>
            </figure>`
            },
            {
              type: "video",
              code: `<figure>
                <video controls>
                  <source src="media/movie.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                <figcaption>
                  Video from
                  <a href="https://pixabay.com/videos/turtle-ocean-sea-animal-35427/" target="_blank">pixabay.com</a>
                </figcaption>
              </figure>`
            },
            {
              type: "image",
              code: `<figure>
              <img
                src="imgs/image.webp"
                alt="Polyrise"
              />
              <figcaption>
                Image from
                <a href="https://michaelsboost.com/Polyrise/" target="_blank">michaelsboost.com/Polyrise</a>
              </figcaption>
            </figure>`
            },
            {
              type: "vector",
              code: `<svg viewBox="0 0 135.46666 135.46667">
              <g>
                <path fill="#133ad4" stroke-width="96.174" stroke-linecap="round" stroke-linejoin="round"
                  d="M 9.5828775,67.733332 V 135.20053 L 25.387597,126.03107 V 106.9604 67.733332 Z m 85.9689115,0 -57.769083,32.297258 v 18.81073 L 125.88224,67.733332 Z" />
                <path fill="#04a2ff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"
                  d="m 49.568527,35.819553 -16.970478,9.79791 0,-19.59582 z"
                  transform="matrix(2.2172652,0,0,2.1470293,-34.495269,-9.262162)" />
                <path fill="#8600ef" stroke-width="96.174" stroke-linecap="round" stroke-linejoin="round"
                  d="M 9.5828775,0.26613362 V 67.733332 H 25.387597 V 42.856815 28.326953 l 70.325939,39.315946 -0.161747,0.09043 h 30.330451 l 0.002,-0.001 z" />
              </g>
            </svg>`
            },
            {
              type: "iframe",
              code: `<iframe src="https://michaelsboost.com/">
                Your browser does not support the iframe tag.
              </iframe>`
            }
          ]
        }
      }
    }
  },
  computed: {
    layerHtml() {
      const html = this.renderPreview();
      return html;
    },
    layerStructure() {
      this.layerJSON = this.html2json(this.project.html);
      return this.layerJSON;
    },
    isLayersEmpty() {
      return this.layerJSON.length === 0;
    }
  },
  methods: {
    html2json(input) {
      function generateId() {
        let id = '';
        while (!/^[a-zA-Z]/.test(id)) {
          id = Math.random().toString(36).substr(2, 9);
        }
        return id;
      }
      function elementToJson(element) {
        const boxElements = [
          'article',
          'aside',
          'div',
          'figcaption',
          'figure',
          'footer',
          'header',
          'hgroup',
          'label',
          'main',
          'nav',
          'ol',
          'section',
          'ul'
        ];
        const textElements = [
          'a',
          'abbr',
          'b',
          'blockquote',
          'button',
          'cite',
          'del',
          'em',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'i',
          'ins',
          'kbd',
          'mark',
          'p',
          'small',
          'span',
          'strike',
          'strong',
          'summary',
          'sub',
          'sup',
          'u'
        ];
        const obj = {
          tag: element.tagName.toLowerCase()
        };

        const tagName = element.tagName.toLowerCase();
        if (boxElements.includes(tagName)) {
          obj.type = "box";
          obj.name = "box";
        } else if (textElements.includes(tagName)) {
          obj.type = "text";
          obj.name = "text";
        } else {
          obj.type = tagName;
          obj.name = tagName;
        }
        obj.id = generateId();
        // obj.styles = generateId();
        obj.state = {
          collapsed: false,
          visible: true,
          selected: false
        }
      
        // Collect attributes
        const props = {};
        const events = {};
        Array.from(element.attributes).forEach(attr => {
          if (attr.name.startsWith('on')) {
            events[attr.name] = attr.value;
          } else {
            props[attr.name] = attr.value;
          }
        });
      
        // Add props only if not empty
        if (Object.keys(props).length > 0) obj.props = props;
      
        // Add events only if not empty
        if (Object.keys(events).length > 0) obj.events = events;
      
        if (element.childNodes.length > 0) {
          obj.children = [];
          element.childNodes.forEach(child => {
            if (child.nodeType === Node.ELEMENT_NODE) {
              obj.children.push(elementToJson(child));
            } else if (child.nodeType === Node.TEXT_NODE && child.nodeValue.trim()) {
              obj.text = child.nodeValue.trim();
            }
          });
        }
      
        return obj;
      }
    
      const parser = new DOMParser();
      const doc = parser.parseFromString(input, 'text/html');
      const json = Array.from(doc.body.children).map(child => elementToJson(child));
      return json;
    },
    json2html(input) {
      const selfClosingTags = [
        'br',
        'hr',
        'input',
        'img',
        'option'
      ]
      function jsonToElement(json) {
        const renderElement = element => {
          let html = '';

          if (!element.state.visible) return '';
          
          if (!element.tag) {
            html += element.text || '';
            return html;
          }
        
          html += `<${element.tag}`;
            
          if (element.props) {
            for (const [key, value] of Object.entries(element.props)) {
              html += ` ${key}="${value}"`;
            }
          }
        
          if (selfClosingTags.includes(element.tag)) {
            html += '/>';
          } else {
            html += '>';
          }
        
          if (element.text) {
            html += escapeHtml(element.text);
          }
        
          if (element.children) {
            for (const childElement of element.children) {
              html += renderElement(childElement);
            }
          }
          if (!selfClosingTags.includes(element.tag)) {
            html += `</${element.tag}>`;
          }
          return html;
        }
      
        let html = '';
        if (Array.isArray(json)) {
          json.forEach(element => {
            html += renderElement(element);
          });
        }
        return html;
      }
      function escapeHtml(text) {
        const map = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
      }
      function beautifyHtml(json) {
        const html = jsonToElement(json);
        let tab = '  ';
        let result = '';
        let indent = '';
      
        html.split(/>\s*</).forEach(function(element) {
          if (element.match(/^\/\w/)) {
            indent = indent.substring(tab.length);
          }
      
          result += indent + '<' + element.trim() + '>\r\n';
      
          if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith("<input")) {
            indent += tab;
          }
        });
      
        // Remove leading tab and newline, and trim trailing newline and whitespace
        return result.substring(1, result.length - 3).trim();
      }
    
      return beautifyHtml(input);
    },
    generateId() {
      let id = '';
      while (!/^[a-zA-Z]/.test(id)) {
        id = Math.random().toString(36).substr(2, 9);
      }
      return id;
    },
    theme() {
      const sun = "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z";
      const moon = "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z";
      
      // Toggle dark mode
      this.project.dark = !this.project.dark;
    
      // Set colors based on dark mode
      this.colors.text = this.project.dark ? "text-[#fff]" : "text-[#1c1c1c]";
      this.colors.border = this.project.dark ? "border-gray-800" : "border-gray-200";

      // update icon based upon theme
      this.themeIcon = this.project.dark ? moon : sun;
    
      // Set data-theme attribute on <html> element
      document.documentElement.setAttribute('data-theme', this.project.dark ? 'dark' : 'light');
    },
    togglePanel(panel) {
      this.activePanel = this.activePanel === panel ? null : panel;
      this.updateContainerSize();
    },
    updateContainerSize() {
      // Update dimensions initially or when needed
      this.$nextTick(() => {
        if (this.$refs.previewContainer) {
          this.previewContainer.width = this.$refs.previewContainer.clientWidth;
          this.previewContainer.height = this.$refs.previewContainer.clientHeight;

          if (this.iframeSize.width !== "100%") {
            // Calculate zoom transform based on viewport size and iframe size
            const viewportWidth = this.previewContainer.width;
            const viewportHeight = this.previewContainer.height;
            const width = parseInt(this.iframeSize.width);
            const height = parseInt(this.iframeSize.height);            
            
            Object.assign(this.iframeSize, {
              width: `${width}px`,
              height: `${height}px`,
              transform: `scale(${Math.min(viewportWidth / width, viewportHeight / height)})`,
              position: 'absolute',
              top: '50%',
              left: '50%',
              'margin-top': `-${height / 2}px`,
              'margin-left': `-${width / 2}px`
            });
          }
        }
      });
    },
    selectElement(layer) {
      // Helper function to recursively update the selected state
      const updateSelectedState = (layers, targetLayer) => {
        layers.forEach(l => {
          if (l === targetLayer) {
            // Toggle selected state for the clicked layer
            l.state.selected = !l.state.selected;

            // Update selectedLayer to the id of the selected layer
            if (l.state.selected) {
              this.selectedLayer = l.id;
              this.selectedBlock = l;

              // console.log('selectedBlock', l);
            } else {
              this.selectedLayer = null;
              this.selectedBlock = null;
            }
          } else {
            // Set selected state to false for other layers
            l.state.selected = false;
          }
          
          // Recursively update children if they exist
          if (l.children && l.children.length > 0) {
            updateSelectedState(l.children, targetLayer);
          }
        });
      };
    
      // Start the recursive update from the top level
      updateSelectedState(this.layerJSON, layer);
    },
    collectUsedStyles(elements, usedStyles = new Set()) {
      elements.forEach(element => {
        if (element.props && element.props.class) {
          element.props.class.split(' ').forEach(cls => usedStyles.add(cls));
        }
        if (element.children) {
          this.collectUsedStyles(element.children, usedStyles);
        }
      });
      return usedStyles;
    },
    renderStyles(styles, min = false) {
      if (!styles.common) return false;
      let css = '';
      const usedStyles = this.collectUsedStyles(this.layerStructure);
    
      // Function to recursively process styles
      const processStyles = (className, style, pseudo = '', mediaQuery = '') => {
        let result = '';
        const selector = `.${className}${pseudo}`;
        const mediaPrefix = mediaQuery ? `${(min ? `@media(min-width:${mediaQuery}px){` : `@media (min-width: ${mediaQuery}px) {\n `)}` : '';
        const mediaSuffix = mediaQuery ? `${(min ? `}` : `\n}\n\n`)}` : '';
    
        if (!mediaQuery) {
          // Regular styles outside breakpoints
          result += `${(min ? `${selector}{` : `${selector} {\n`)}`;
    
          Object.entries(style).forEach(([property, value]) => {
            if (property !== 'breakpoints' && property !== 'states' && typeof value !== 'object') {
              result += `${(min ? `${property}:${value};` : `  ${property}: ${value};\n`)}`;
            }
          });
      
          result += `${(min ? `}` : `}\n\n`)}`;
        } else {
          // breakpoint styles
          result += `${(min ? `${mediaPrefix}${selector}{` : `${mediaPrefix} ${selector} {\n`)}`;
    
          Object.entries(style).forEach(([property, value]) => {
            if (property !== 'breakpoints' && property !== 'states' && typeof value !== 'object') {
              result += `${(min ? `${property}:${value};` : `    ${property}: ${value};\n`)}`;
            }
          });
      
          result += `${(min ? `}${mediaSuffix}` : `  }${mediaSuffix}`)}`;
        }
    
        return result;
      };
    
      // Process common styles
      Object.entries(styles.common).forEach(([className, style]) => {
        if (!usedStyles.has(className)) return;
    
        // Regular styles
        css += processStyles(className, style);
    
        // Handle states (e.g., hover)
        if (styles.states[className]) {
          Object.entries(styles.states[className]).forEach(([variantName, variantStyle]) => {
            css += processStyles(className, variantStyle, `:${variantName}`);
          });
        }
    
        // Breakpoints (global)
        if (styles.breakpoints[className]) {
          Object.entries(styles.breakpoints[className]).forEach(([breakpoint, bpStyle]) => {
            css += processStyles(className, bpStyle, '', breakpoint);
    
            // Handle states within breakpoints
            Object.entries(bpStyle).forEach(([variantName, variantStyle]) => {
              if (typeof variantStyle === 'object') {
                css += processStyles(className, variantStyle, `:${variantName}`, breakpoint);
              }
            });
          });
        }
      });
    
      return css;
    },
    beautifyHtml(json) {
      const html = this.renderElementTree(json);
      let tab = '  ';
      let result = '';
      let indent = '';
    
      html.split(/>\s*</).forEach(function(element) {
        if (element.match(/^\/\w/)) {
          indent = indent.substring(tab.length);
        }
    
        result += indent + '<' + element.trim() + '>\r\n';
    
        if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith("<input")) {
          indent += tab;
        }
      });
    
      // Remove leading tab and newline, and trim trailing newline and whitespace
      return result.substring(1, result.length - 3).trim();
    },
    renderPreview() {
      // Iterate over each library
      let scriptTags = '';
      let cssTags = '';
      this.project.libraries.map(library => {
        if (library.endsWith('.js')) {
          scriptTags += `<script src="${library}"></script>\n    `;
        } else if (library.endsWith('.css')) {
          cssTags += `<link rel="stylesheet" href="${library}">\n          `;
        } else {
          // Assuming it's a Google font
          cssTags += `<link href="${library}" rel="stylesheet">\n          `;
        }
      });
    
      // render layers and preview
      let cssReset = `/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,::after,::before{box-sizing:border-box}html{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji'}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,'Liberation Mono',Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}body{font-family:inherit;line-height:inherit}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:-moz-focusring{outline:auto}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}`;
      if (!this.project.cssreset) cssReset = '';
      const iframeSrc = `<html data-theme="${this.project.dark ? 'dark' : 'light'}">
      <head>
        <title>${this.project.title}</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="${this.project.description}">
        <meta name="author" content="${this.project.author}">
        ${this.project.meta ? `${this.project.meta}\n          ` : ''}${cssTags}<style>${cssReset}${this.renderStyles(this.project.styles, true)}</style>
        ${scriptTags ? scriptTags : ''}
      </head>
      <body>
    ${this.json2html(this.layerJSON)}
      </body>
    </html>`;

      return iframeSrc;
    },
    getFileNameAndType(url) {
      // Extract the file name with extension from the URL
      const fileName = url.substring(url.lastIndexOf('/') + 1);
      
      // Extract the file extension
      const fileExtension = fileName.split('.').pop().toLowerCase();
      
      // Map file extensions to MIME types
      const mimeTypes = {
        'jpeg': 'image/jpeg',
        'jpg': 'image/jpeg',
        'png': 'image/png',
        'gif': 'image/gif',
        'bmp': 'image/bmp',
        'webp': 'image/webp',
        'svg': 'image/svg+xml',
        'mp3': 'audio/mpeg',
        'wav': 'audio/wav',
        'ogg': 'audio/ogg',
        'mp4': 'video/mp4',
        'webm': 'video/webm',
        'ogv': 'video/ogg'
      };
      
      // Get the MIME type based on the file extension
      const fileType = mimeTypes[fileExtension] || 'application/octet-stream';
      
      return {
        fileName,
        fileType
      };
    },
    fetchResources(obj) {
      try {
        const cssContent = JSON.parse(JSON.stringify(obj.styles));
        const doc = new DOMParser().parseFromString(obj.html, 'text/html');
        const body = doc.body;
    
        const imageUrls = [];
        const audioUrls = [];
        const vectors = [];
        const videoUrls = [];
    
        // Extract image URLs
        body.querySelectorAll('img').forEach(img => {
          if (img.hasAttribute('src')) {
            imageUrls.push(img.getAttribute('src'));
            img.src = `imgs/${this.getFileNameAndType(img.getAttribute('src')).fileName}`;
          }
        });
    
        // Extract audio URLs
        body.querySelectorAll('audio').forEach(audio => {
          audio.querySelectorAll('source').forEach(source => {
            if (source.hasAttribute('src')) {
              audioUrls.push(source.getAttribute('src'));
              source.src = `audios/${this.getFileNameAndType(source.getAttribute('src')).fileName}`;
            }
          });
        });
    
        // Extract vectors
        body.querySelectorAll('svg').forEach(svg => {
          vectors.push(svg.outerHTML);
        });
    
        // Extract video URLs
        body.querySelectorAll('video').forEach(video => {
          video.querySelectorAll('source').forEach(source => {
            if (source.hasAttribute('src')) {
              videoUrls.push(source.getAttribute('src'));
              source.src = `vids/${this.getFileNameAndType(source.getAttribute('src')).fileName}`;
            }
          });
        });
      
        // Fetch images from CSS background-image property for index.html
        for (const styles in cssContent) {
          const styleObj = cssContent[styles];
          for (const variantId in styleObj) {
            const variant = styleObj[variantId];
            for (const prop in variant) {
              // Check for background-image property
              if (prop === 'background-image' && variant[prop].includes('url(')) {
                const urlMatch = variant[prop].match(/url\(["']?(.*?)["']?\)/);
                if (urlMatch && urlMatch[1]) {
                  const imageUrl = urlMatch[1];
                  imageUrls.push(imageUrl);
                  const fileInfo = this.getFileNameAndType(imageUrl);
                  variant[prop] = `url('../imgs/${fileInfo.fileName}')`;
                }
              }
            }
          }
        }
    
        return {
          imageUrls,
          audioUrls,
          vectors,
          videoUrls
        };
      } catch (error) {
        console.error('Error fetching resources:', error);
        return null; // Or handle the error in an appropriate way
      }
    },
    async getBase64Media(mediaUrl) {
      const response = await fetch(mediaUrl);
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    },
    async downloadProject() {
      let project = this.project;
      let { imageUrls, audioUrls, vectors, videoUrls } = this.fetchResources(this.project);
      
      const zip = new JSZip();

  // Project file
  zip.file(`${project.name.split(' ').join('').toLowerCase()}-polyrise.json`, JSON.stringify(project, null, 2));

let licenseStr = `The MIT License (MIT)
Copyright (c) ${new Date().getFullYear()} ${project.author}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;
  zip.file("LICENSE.md", licenseStr);

  let READMEStr = `# [${project.name}]

Welcome to your new website built with Polyrise, the **Free Mobile Website Builder!** 

## About Polyrise

Polyrise allows you to create awesome responsive websites quickly and easily, without any coding required. It's free for commercial use, so you can use it to create professional websites for your business, portfolio, or any other purpose.

## Website Overview

${project.description}

### Technologies Used
- **HTML**
- **CSS**
- **Created with Polyrise Website Builder**

## How to Update Your Website

To update your website, simply load in the project.json file included in the export of your project's zip file into Polyrise and use the app to make changes as needed and export as initially done before.

## Support

If you need help or have any questions, please visit our [Website](https://michaelsboost.com/Polyrise/).

## License

This website is created using Polyrise and is free for personal and commercial use and is licensed under the MIT license agreement.

---

Thank you for using Polyrise!

[Polyrise - Free Mobile Website Builder](https://michaelsboost.com/Polyrise/)`;
  zip.file("README.md", READMEStr);


  // Always include the original logo
  if (project.logo) {
    try {
      let base64Logo = '';
  
      if (project.logo.startsWith('data:')) {
        // If logo is already a data URL, extract base64 part
        base64Logo = project.logo; // Get the base64 part
      } else {
        // Otherwise fetch and convert to base64
        base64Logo = await this.getBase64Media(project.logo);
      }
  
      // Determine file extension based on MIME type
      let logoType;
      if (project.logo.startsWith('data:image/png')) {
        logoType = 'png';
      } else if (project.logo.startsWith('data:image/jpeg')) {
        logoType = 'jpeg';
      } else if (project.logo.startsWith('data:image/svg+xml')) {
        logoType = 'svg';
      } else {
        console.error('Unsupported logo MIME type:', project.logo);
        return; // Exit or handle error appropriately
      }
  
      const logoFileName = `logo.${logoType}`;
      zip.folder('imgs').file(logoFileName, base64Logo.split(",")[1], { base64: true });
  
      // Add icons to manifest.json based on image sizes
      const sizes = ['192x192', '256x256', '384x384', '512x512'];
      const icons = sizes.map(size => ({
        "src": `./imgs/logo-${size}.png`,
        "sizes": size,
        "type": "image/png",
        "purpose": "any"
      }));
      for (const size of sizes) {
        const canvas = document.createElement('canvas');
        canvas.width = parseInt(size.split('x')[0]);
        canvas.height = parseInt(size.split('x')[1]);
        const ctx = canvas.getContext('2d');

        // Draw logo on canvas at the desired size
        const img = new Image();
        img.src = base64Logo;
        img.onload = function() {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          const base64Image = canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, '');
          zip.folder('imgs').file(`logo-${size}.png`, base64Image, { base64: true });
        };

        // Clean up canvas element
        canvas.remove();
      }
  
      zip.file(`manifest.json`, JSON.stringify({
        "theme_color": "#13171f",
        "background_color": "#13171f",
        "display": "standalone",
        "start_url": "./index.html",
        "lang": "en-US",
        "name": project.name,
        "short_name": project.name,
        "description": project.description,
        "icons": icons
      }, null, 2));
  
    } catch (error) {
      console.error('Error adding logo to ZIP:', error);
      return; // Exit method or handle error as needed
    }
  }

  // Fetch css reset
  const resetCssUrl = "dist/reset.css";
  let resetCssContent = '';
  try {
    const response = await fetch(resetCssUrl);
    resetCssContent = await response.text();
  } catch (error) {
    console.error('Error fetching reset.css:', error);
  }

  // Add style.css to the root of the ZIP
  zip.file('css/style.min.css', `${resetCssContent}${this.renderStyles(project.styles, true)}`);
  zip.file('css/style.css', `${resetCssContent}

${this.renderStyles(project.styles, false)}`);

// if pwa is enabled
let swinit = '';
if (project.pwa) {
  swinit = `
<script src="https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"></script>
<script>
// service worker for progressive web app
if ('serviceWorker' in navigator) {
window.addEventListener('load', () => {
navigator.serviceWorker.register('./sw.js')
})
}
</script>`;
  const swjs = `// Service worker code
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { CacheFirst } = workbox.strategies;

const cacheName = '${project.name.split(' ').join('')}-cache';

workbox.routing.registerRoute(
({ request }) => request.destination === 'script' ||
           request.destination === 'style' ||
           request.destination === 'document' ||
           request.destination === 'image' ||
           request.destination === 'font' ||
           request.destination === 'audio' ||
           request.destination === 'video',
new CacheFirst({
cacheName: cacheName,
plugins: [
// Any additional plugins can be added here
],
})
);`
  zip.file("sw.js", swjs);
}
  
  // Add index.html
  const indexHtmlContent = `<!DOCTYPE html>
<html data-theme="${project.dark ? 'dark' : 'light'}">
  <head>
    <title>${project.title}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, interactive-widget=resizes-content">
    <meta name="description" content="${project.description}">
    <meta name="author" content="${project.author}">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="application-name" content="${project.title}">
    <meta name="theme-color" content="#13171f">
    <meta name="apple-mobile-web-app-title" content="${project.title}">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="msapplication-starturl" content="./index.html">
    <meta name="msapplication-navbutton-color" content="#13171f">
    <meta property="og:url" content="${project.url}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${project.title}" />
    <meta property="og:description" content="${project.description}" />
    <link rel="manifest" href="manifest.json">
    <link rel="shortcut icon" type="image/x-icon" href="imgs/logo.svg">
    <link rel="icon" type="image/svg+xml" href="imgs/logo.svg" />
    <link rel="apple-touch-icon" href="imgs/logo.svg">
    <link rel="stylesheet" href="css/style.min.css">
    ${project.meta ? `${project.meta}\n  ` : ''}</head>
  <body>

${project.html}
${(project.pwa ? swinit : '')}
  </body>
</html>`;
  zip.file('index.html', indexHtmlContent);

  // Create a folder "imgs" and add images inside it with their correct MIME types
  if (audioUrls.length > 0) {
    const audioFolder = zip.folder('audios');
    try {
      for (const audioUrl of audioUrls) {
        const base64Audio = await this.getBase64Media(audioUrl);
        audioFolder.file(audioUrl.substring(audioUrl.lastIndexOf('/') + 1), base64Audio, { base64: true });
      }
    } catch (error) {
      console.error('Error adding audio to ZIP:', error);
      return;
    }
  }
  if (imageUrls.length > 0) {
    const imgFolder = zip.folder('imgs');
    try {
      // Convert each image URL to Base64 and add to ZIP folder
      for (const imageUrl of imageUrls) {
        const base64Image = await this.getBase64Media(imageUrl);
        imgFolder.file(imageUrl.substring(imageUrl.lastIndexOf('/') + 1), base64Image, { base64: true });
      }
    } catch (error) {
      console.error('Error adding images to ZIP:', error);
      return; // Exit method or handle error as needed
    }
  }
  if (vectors.length > 0) {
    const svgFolder = zip.folder('svgs');
    try {
      // Convert each SVG to a file inside the 'svgs' folder
      vectors.forEach((svg, index) => {
        svgFolder.file(`vector-${index + 1}.svg`, svg);
      });
    } catch (error) {
      console.error('Error adding images to ZIP:', error);
      return; // Exit method or handle error as needed
    }
  }
  if (videoUrls.length > 0) {
    const videoFolder = zip.folder('vids');
    try {
      for (const videoUrl of videoUrls) {
        const base64Video = await this.getBase64Media(videoUrl);
        videoFolder.file(videoUrl.substring(videoUrl.lastIndexOf('/') + 1), base64Video, { base64: true });
      }
    } catch (error) {
      console.error('Error adding videos to ZIP:', error);
      return;
    }
  }

  // Generate the ZIP file
  zip.generateAsync({ type: 'blob' })
    .then(blob => {
      // Save the ZIP file
      saveAs(blob, `${project.name.split(' ').join('').toLowerCase()}_project.zip`);

      // Clear all arrays after saving
      imageUrls.length = audioUrls.length = videoUrls.length = 0;
    })
    .catch(err => console.error('Error creating ZIP:', err));
    },
    share() {
      let project = this.project;
      let resetCss = `/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,::after,::before{box-sizing:border-box}html{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji'}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,'Liberation Mono',Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}body{font-family:inherit;line-height:inherit}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:-moz-focusring{outline:auto}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}`;
      
      const shareProject = {
        title: project.title,
        description: project.description,
        head: project.meta,
        html: this.json2html(this.layerStructure),
        html_pre_processor : "none",
        css: `${resetCss}\n\n${this.renderStyles(project.styles, false)}`,
        css_pre_processor : "none",
        css_starter: "neither",
        css_prefix: "neither",
        css_external: this.project.libraries.filter(lib => lib.endsWith('.css')).join(';'),
        js_external: this.project.libraries.filter(lib => lib.endsWith('.js')).join(';'),
        editors: '110',
        layout: 'left'
      };
    
      // Stringify the JSON object and escape quotes
      const JSONstring = JSON.stringify(shareProject)
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&apos;");
    
      // Create form element
      const form = `
        <form action="https://codepen.io/pen/define" method="POST" target="_blank">
          <input type="hidden" name="data" value='${JSONstring}'>
          <input type="image" src="http://s.cdpn.io/3/cp-arrow-right.svg" width="40" height="40" value="Create New Pen with Prefilled Data" class="codepen-mover-button">
        </form>`;
    
      // Append form to the document body and submit
      document.body.insertAdjacentHTML('beforeend', form);
      document.querySelector('form').submit();
      document.querySelector('form').remove();
    }
  },
  watch: {
    project: {
      handler() {
        this.renderPreview(this.project.styles);
      },
      deep: true,
      immediate: true
    },
    previewContainer: {
      handler() {
        this.updateContainerSize();
      },
      deep: true,
      immediate: true
    }
  },
  template: `<div class="absolute inset-0" :class="colors.text">
    <div :class="{ 'hidden': blocksBool }">
      <div class="absolute inset-y-0 left-0 flex flex-col text-center justify-between px-2 py-4 overflow-auto">
        <LeftMenubar
          :colors="colors"
          :project="project"
          :themeIcon="themeIcon"
          :blocksToggle="blocksToggle"
          :activePanel="activePanel"
          :togglePanel="togglePanel"
          :downloadProject="downloadProject"
          :undo="undo"
          :redo="redo"
          :share="share"
          :theme="theme"
        />
      </div>
      
      <!-- flexbox for panels and preview -->
      <div class="flex flex-col flex-col-reverse sm:flex-row absolute inset-y-0 right-0 left-16 bottom-0 overflow-hidden">
        <div class="flex-[2] sm:flex-[1] w-full sm:w-96 h-full px-2 text-sm overflow-auto" :class="{ 'hidden': !activePanel }">
          <div :class="{ 'hidden': activePanel !== 'settings' }">
            <Settings
              :app="app"
              :project="project"
            />
          </div>
          <div 
            class="px-2 py-4 overflow-auto capitalize"
            :class="{ 'hidden': activePanel !== 'blocks' }">
            <Blocks
              :colors="colors"
              :blocks="blocks"
            />
          </div>
          <div class="px-2 py-4 w-full h-full overflow-auto" :class="{ 'hidden': activePanel !== 'layers' }">
            <div v-if="isLayersEmpty" class="text-[.6rem] select-none grid grid-cols-1 items-center text-center opacity-25 h-full">
              Drag and drop a block
            </div>
            <ul class="relative w-full h-full p-0 m-0" v-if="layerStructure">
              <LayerTree 
                :theme="project.dark" 
                :layers="layerStructure"
                :selectElement="selectElement" />
            </ul>
          </div>
          <div class="px-2 py-4" :class="{ 'hidden': activePanel !== 'inspector' }">
            <div v-if="!selectedBlock" class="text-[.6rem] select-none grid grid-cols-1 items-center text-center opacity-25 h-full">
              No block is selected
            </div>
            <div v-if="selectedBlock">
              <Inspector 
                :theme="project.dark" 
                :colors="colors" 
                :styles="project.styles"
                :selectedBlock="selectedBlock"
                :layers="layerStructure" />
            </div>
          </div>
        </div>
        
        <div class="flex-[2] w-full overflow-hidden flex">
          <div class="relative w-full h-full border border-solid overflow-auto p-4" :class="colors.border">
            <nav class="absolute inset-0 flex flex-col">
              <div class="flex-[0]">
                <PreviewMenu
                  :colors="colors"
                  :project="project"
                  :togglePanel="togglePanel"
                  :activePanel="activePanel"
                  :previewContainer="previewContainer"
                  :iframeSize="iframeSize"
                  :downloadProject="downloadProject"
                  :share="share"
                />
              </div>
              <div class="flex-[2] overflow-hidden">
                <div ref="previewContainer" id="previewContainer" class="relative grid grid-cols-1 align-center items-center w-full h-full">
                  <iframe
                    ref="previewIframe"
                    class="bg-white shadow-2xl shadow-blue-500"
                    title="project.title"
                    :style="iframeSize"
                    sandbox="allow-scripts allow-same-origin allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups"
                    :srcdoc="layerHtml"
                  ></iframe>
                </div>
              </div>
            </nav>
          </div>
        </div>
        
        <div class="flex-[1] hidden md:block w-full sm:w-96 h-full px-2 py-4 text-sm overflow-auto" :class="{ 'md:hidden': !activePanel }">
          <div v-if="!selectedBlock" class="text-[.6rem] select-none grid grid-cols-1 items-center text-center opacity-25 h-full">
            No block is selected
          </div>
          <div v-if="selectedBlock">
            <Inspector 
              :theme="project.dark" 
              :colors="colors" 
              :styles="project.styles" 
              :selectedBlock="selectedBlock"
              :layers="layerStructure" />
          </div>
        </div>
      </div>
    </div>
  </div>`,
  mounted() {
    console.log(this.generateId());
    window.addEventListener('resize', this.updateContainerSize);
    this.updateContainerSize();
  }
};

export default App;