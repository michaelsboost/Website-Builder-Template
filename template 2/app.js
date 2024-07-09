// Function for reactive state management
function onChange(target, callback, path = []) {
  function createProxy(target, path) {
    if (typeof target !== 'object' || target === null) {
      return target;
    }

    return new Proxy(target, {
      set(obj, property, value) {
        const fullPath = [...path, property];
        const oldValue = obj[property];
        const result = Reflect.set(obj, property, createProxy(value, fullPath));

        if (oldValue !== value) {
          callback(fullPath, oldValue, value);
        }

        return result;
      },
      get(obj, property) {
        const value = obj[property];
        if (typeof value === 'object' && value !== null) {
          return createProxy(value, [...path, property]);
        }
        return value;
      }
    });
  }

  return createProxy(target, path);
}

// Keep project and data in the global scope
let p = {
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
      <a href="https://michaelsboost.com/Polyrise/" target="_blank">michaelsboost.com/Polyrise</a>
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
        <a href="https://pixabay.com/sound-effects/ding-47489/" target="_blank">pixabay.com</a>
      </figcaption>
    </figure>
    <figure>
      <video controls>
        <source src="media/movie.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <figcaption>
        Video from
        <a href="https://pixabay.com/videos/turtle-ocean-sea-animal-35427/" target="_blank">pixabay.com</a>
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
};
let d = {
  colors: {
    text: "text-[#fff]",
    border: "border-gray-800"
  },
  themeIcon: "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z",
  activePanel: 'layers',
  layerStructure: [],
  selectedSize: 'none',
  selectedBlock: null,
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
};
// Reactive objects
const project = onChange(p, (property, oldValue, newValue) => {
  // console.log(`Project: ${property} changed from ${oldValue} to ${newValue}`);
  App.render('#app');
  renderPreview();
});
const data = onChange(d, (property, oldValue, newValue) => {
  // console.log(`Data: ${property} changed from ${oldValue} to ${newValue}`);
  App.render('#app');
});

// Components
function LeftMenubar() {
  return `<ul class="p-0 m-0">
  <li class="list-none m-0">
    <a
      href="https://michaelsboost.com/Polyrise/"
      target="_blank"
      aria-label="home page"
      role="button"
      class="w-full text-sm border-0 px-4 py-3 rounded-md bg-transparent"
      style="color: unset;"
    >
      <svg class="w-3" viewBox="0 0 135.46666 135.46667">
        <path
          fill="currentColor"
          d="M 9.5828775,0.26613362 V 135.20053 L 25.387597,126.03107 V 28.326953 l 70.325939,39.315946 -57.93083,32.387691 v 18.81073 L 125.88224,67.733332 Z M 37.783223,46.606974 V 88.679857 L 75.411417,67.643416 Z"
        />
      </svg>
    </a>
  </li>
  <li class="list-none m-0">
    <a
      href="https://michaelsboost.com/donate/"
      aria-label="Donation helps developer maintence"
      target="_blank"
      role="button"
      class="w-full text-sm border-0 px-4 py-3 rounded-md bg-transparent text-red-400"
    >
      <svg class="w-3" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
      </svg>
    </a>
  </li>
  <li class="list-none m-0">
    <button 
      aria-label="add blocks" 
      name="add blocks" 
      class="w-full text-sm border-0 px-4 py-3 mb-2"
      onclick="togglePanel('blocks')"
    >
      <svg class="w-3" viewBox="0 0 448 512">
        <path 
          fill="currentColor" 
          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
      </svg>
    </button>
  </li>
</ul>
<ul class="p-0 m-0">
  <li class="list-none m-0">
    <hr />
  </li>
  <li class="list-none m-0">
    <button
      aria-label="toggle layers"
      name="toggle layers"
      class="w-full text-sm border-0 px-4 py-3 rounded-md bg-transparent"
      style="color: unset;"
      onclick="togglePanel('layers')"
    >
      <svg class="w-3" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
      </svg>
    </button>
  </li>
  <li class="list-none m-0">
    <button
      id="inspectorBtn"
      aria-label="toggle inspector"
      name="toggle inspector"
      class="w-full text-sm lg:hidden border-0 px-4 py-3 rounded-md bg-transparent"
      style="color: unset;"
      onclick="togglePanel('inspector')"
    >
      <svg class="w-3" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
      </svg>
    </button>
  </li>
  <li class="list-none m-0">
    <hr />
  </li>
</ul>
<ul class="p-0 m-0">
  <li class="list-none m-0">
    <button
      aria-label="toggle theme"
      name="toggle theme"
      class="w-full text-sm border-0 px-4 py-3 rounded-md bg-transparent"
      style="color: unset;"
      onclick="theme()"
    >
      <svg class="w-3" viewBox="0 0 512 512">
        <path 
          id="themeIcon"
          fill="currentColor"
          d="${data.themeIcon}"
        />
      </svg>
    </button>
  </li>
  <li class="list-none m-0">
    <button
      aria-label="settings button"
      name="settings"
      class="w-full text-sm border-0 px-4 py-3 rounded-md bg-transparent -mt-1"
      style="color: unset;"
      onclick="togglePanel('settings')"
    >
      <svg class="w-3" viewBox="0 0 512 512" style="color: unset;">
        <path 
          fill="currentColor" 
          d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
      </svg>
    </button>
  </li>
</ul>`;
}
function PreviewMenu() {
  const buttonClass = 'border-0 bg-transparent text-sm';
  const svgClass = 'h-3 -mt-1';
  const svgClassTransform = `${svgClass} transform origin-center scale-125`;
  const selectClass = 'm-0 w-auto rounded-md capitalize text-[.6rem]';
  const selectStyle = 'padding: 0.5rem;';

  const sizeOptions = {
    Phones: {
      '320x480': 'iPhone 3GS',
      '375x667': 'iPhone 6/7/8',
      '414x736': 'iPhone 6/7/8 Plus',
      '375x812': 'iPhone X/XS/11 Pro',
      '414x896': 'iPhone XR/XS Max/11/11 Pro Max',
      '360x640': 'Samsung Galaxy S5',
      '360x740': 'Samsung Galaxy S8+',
      '1440x3200': 'Samsung Galaxy S21 Ultra',
      '1080x2340': 'Google Pixel 5',
      '1080x2400': 'OnePlus 8 Pro',
      '1440x3200': 'Xiaomi Mi 11 Ultra',
      '1644x3840': 'Sony Xperia 1 III'
    },
    Tablets: {
      '2048x2732': 'iPad Pro 12.9" (3rd/4th Gen)',
      '2388x1668': 'iPad Pro 11" (1st/2nd/3rd Gen)',
      '2736x1824': 'Microsoft Surface Pro 7',
      '2800x1752': 'Samsung Galaxy Tab S7+',
      '2560x1600': 'Huawei MatePad Pro',
      '2000x1200': 'Lenovo Tab P11 Pro',
      '1920x1200': 'Amazon Fire HD 10',
      '1536x2048': 'iPad Air (3rd Gen)',
      '1620x2160': 'iPad Air (4th Gen)',
      '1620x2160': 'iPad 10.2" (8th Gen)',
      '1668x2224': 'iPad Pro 11" (2021)'
    },
    Desktops: {
      '3840x2160': '4K UHD (3840x2160)',
      '2560x1440': 'WQHD (2560x1440)',
      '1920x1080': 'Full HD (1920x1080)',
      '1366x768': 'Laptop (1366x768)',
      '3440x1440': 'UltraWide QHD (3440x1440)',
      '5120x2880': '5K Retina (5120x2880)',
      '1280x800': 'MacBook (1280x800)',
      '2560x1600': 'MacBook Pro (2560x1600)',
      '2880x1800': 'MacBook Pro Retina (2880x1800)'
    }
  };

  return `<div class="flex justify-between items-center overflow-auto">
<div class="flex justify-between items-center">
  <button
    aria-label="new project"
    name="new project"
    class="${buttonClass}"
    onclick="newProject()"
    style="color: unset;"
  >
    <svg class="${svgClass}" viewBox="0 0 384 512">
      <path 
        fill="currentColor"
        d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
    </svg>
  </button>
  <button
    aria-label="import project"
    name="import project"
    class="${buttonClass}"
    onclick="importProject()"
    style="color: unset;"
  >
    <svg class="${svgClassTransform}" viewBox="0 0 512 512">
      <path 
        fill="currentColor"
        d="M128 64c0-35.3 28.7-64 64-64H352V128c0 17.7 14.3 32 32 32H512V448c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V336H302.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H128V64zm0 224v48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H128zM512 128H384V0L512 128z" />
    </svg>
  </button>
</div>
<div 
  class="px-2 flex justify-between border border-solid border-y-0 ${data.colors.border}">
  
  <label for="selectedSize" aria-label="resize canvas" class="m-auto">
    <select id="selectedSize" onchange="resizeCanvas(this.value)" class="${selectClass}" style="${selectStyle}">
      <option value="none">Select Size</option>
      ${Object.keys(sizeOptions).map(group => `
        <optgroup label="${group}">
          ${Object.keys(sizeOptions[group]).map(option => `
            <option value="${option}">${sizeOptions[group][option]}</option>
          `).join('')}
        </optgroup>
      `).join('')}
    </select>
  </label>

  <button 
    aria-label="rotate canvas"
    name="rotate canvas" 
    class="${buttonClass} ${data.selectedSize === 'none' ? 'hidden' : ''}"
    style="color: unset;"
    onclick="rotateCanvas()">
    <svg class="${svgClass}" viewBox="0 0 512 512">
      <path 
        fill="currentColor" 
        d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" />
    </svg>
  </button>
</div>
<div class="flex justify-between items-center">
  <button
    aria-label="export project"
    name="export project"
    class="${buttonClass}"
    onclick="downloadProject()"
    style="color: unset;"
  >
    <svg class="${svgClassTransform}" viewBox="0 0 512 512">
      <path 
        fill="currentColor"
        d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </svg>
  </button>
  <button
    aria-label="share to codepen"
    name="share to codepen"
    class="${buttonClass}"
    style="color: unset;"
    onclick="share()"
  >
    <svg class="${svgClassTransform}" viewBox="0 0 512 512">
      <path 
        fill="currentColor"
        d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z" />
    </svg>
  </button>
</div>
</div>`;
}
function Settings() {
  return `<ul class="py-4 px-0">
<li class="list-none">
  <div class="items-center text-center">
    <div>
      <a 
        target="_blank" 
        href="https://github.com/michaelsboost/Polyrise/tree/gh-pages">
        <img 
          class="my-4 w-24 m-auto"
          src="imgs/logo.svg" />
      </a>
      <div class="text-2xl">
        About Polyrise
      </div>
      <div class="my-2 text-xs">
        Version 0.0.3
      </div>
      <a 
        target="_blank" 
        class="text-sm underline mb-2 text-blue-500" 
        href="https://github.com/michaelsboost/Polyrise/blob/gh-pages/LICENSE">
          Open Source License
      </a>
    </div>
  </div>
</li>
<li class="p-0 list-none">
  <hr />
</li>
<li class="list-none">
  <div class="mb-2">
    <input 
      id="pjqgd1wka"
      type="file" 
      name="project logo" 
      class="hidden"
      onchange="handleLogoChange(event)"
    />
    <label 
      for="pjqgd1wka"
      class="mb-2 flex justify-between items-center cursor-pointer">
      <span>Project logo:</span>

      <img 
        id="projectLogo"
        class="w-8"
        alt="Project Logo"
        src="${project.logo}">
    </label>
  </div>
</li>
<li class="p-0 list-none">
  <hr />
</li>
<li class="list-none">
  <nav class="mt-5 items-center">
    <label 
      for="o14tigo4m"
      class="mb-2 flex justify-between items-center cursor-pointer">
      <span>CSS Reset:</span>
    </label>

    <input 
      id="o14tigo4m"
      type="checkbox" 
      role="switch"
      name="toggle css reset"
      onchange="project.cssreset = this.checked;"
      ${project.cssreset ? 'checked' : ''}
    />
  </nav>
</li>
<li class="p-0 list-none">
  <hr />
</li>
<li class="list-none">
  <nav class="mt-5 items-center">
    <label 
      for="osbpm2k0q"
      class="mb-2 flex justify-between items-center cursor-pointer">
      <span>PWA:</span>
    </label>

    <input 
      id="osbpm2k0q"
      type="checkbox" 
      role="switch"
      name="export project as a pwa"
      onchange="project.pwa = this.checked"
      ${project.pwa ? 'checked' : ''}
    />
  </nav>
</li>
<li class="p-0 list-none">
  <hr />
</li>
<li class="list-none">
  <div class="mb-2">
    Project name:
  </div>
  <input 
    type="text" 
    name="project name"
    placeholder="Project name" 
    class="p-2 rounded-md w-full" 
    value="${project.name}"
    oninput="project.name = this.value;"
  />
</li>
<li class="p-0 list-none">
  <hr />
</li>
<li class="list-none">
  <div class="mb-2">
    Project version:
  </div>
  <input 
    type="number" 
    min="0"
    step="0.01"
    name="project version"
    placeholder="Project version" 
    class="p-2 rounded-md w-full" 
    value="${project.version}"
    oninput="project.version = this.value;"
  />
</li>
<li class="p-0 list-none">
  <hr />
</li>
<li class="list-none">
  <div class="mb-2">
    Project title:
  </div>
  <input 
    type="text" 
    name="project title"
    placeholder="Project title"
    class="p-2 rounded-md w-full" 
    value="${project.title}"
    oninput="project.title = this.value;"
  />
</li>
<li class="p-0 list-none">
  <hr />
</li>
<li class="list-none">
  <div class="mb-2">
    Project description:
  </div>
  <textarea 
    name="project description"
    placeholder="Project description" 
    class="p-2 rounded-md w-full resize-vertical h-56"
    oninput="project.description = this.value;"
  >${project.description}</textarea>
</li>
<li class="p-0 list-none">
  <hr />
</li>
<li class="list-none">
  <div class="mb-2">
    Project author:
  </div>
  <input 
    type="text" 
    name="project author"
    placeholder="Project author" 
    class="p-2 rounded-md w-full" 
    value="${project.author}"
    oninput="project.author = this.value;"
  />
</li>
<li class="p-0 list-none">
  <hr />
</li>
<li class="list-none">
  <div class="mb-2">
    Project url:
  </div>
  <input 
    type="text" 
    name="project url"
    placeholder="Project url" 
    class="p-2 rounded-md w-full" 
    value="${project.url}"
    oninput="project.url = this.value;"
  />
</li>
<li class="p-0 list-none">
  <hr />
</li>
<li class="list-none">
  <div class="my-2">
    HTML before closing head tag:
  </div>
  <textarea 
    placeholder="HTML before closing </head> tag" 
    class="p-2 rounded-md w-full resize-vertical h-56"
    oninput="project.meta = this.value;"
  >${project.meta}</textarea>
</li>
<li class="p-0 list-none">
  <hr />
</li>
<li class="list-none">
  <div class="my-2">
    Scratchpad
  </div>
  <textarea 
    name="project scratchpad"
    placeholder="Empty barebones notepad..." 
    class="p-2 rounded-md w-full resize-vertical h-56"
    oninput="project.scratchpad = this.value;"
  >${project.scratchpad}</textarea>
</li>
</ul>`;
}
const App = {
  initialRender: true,
  render(container) {
    // Calculate zoom transform based on viewport size and iframe size
    const size = data.selectedSize;
    let viewportWidth, viewportHeight;
    const previewElm = document.getElementById('previewElm');
    if (document.getElementById('previewElm')) {
      viewportWidth = previewElm.clientWidth;
      viewportHeight = previewElm.clientHeight;
    }
    let [width, height] = size.split('x').map(Number);
  
    const html = `
      <div>
        <div class="absolute inset-y-0 left-0 flex flex-col text-center justify-between px-2 py-4 overflow-auto">
          ${LeftMenubar()}
        </div>
        
        <!-- flexbox for panels and preview -->
        <div class="flex flex-col flex-col-reverse sm:flex-row absolute inset-y-0 right-0 left-16 bottom-0 overflow-hidden">
          <div class="flex-[2] sm:flex-[1] relative w-full sm:w-96 h-full px-2 text-sm overflow-auto ${data.activePanel ? '' : 'hidden'}">
            <div class="${data.activePanel === 'settings' ? '' : 'hidden'}">
              ${Settings()}
            </div>
            <div class="absolute inset-0 px-2 py-4 overflow-auto capitalize ${data.activePanel === 'blocks' ? '' : 'hidden'}">
              ${Blocks()}
            </div>
            <ul id="sortableContainer" class="absolute inset-0 px-2 py-4 overflow-auto ${data.activePanel === 'layers' ? '' : 'hidden'}">
              ${LayerTree()}
            </ul>
            <div class="absolute inset-0 px-2 py-4 overflow-auto ${data.activePanel === 'inspector' ? '' : 'hidden'}">
              <div class="grid grid-cols-1 h-full text-center items-center">
                ${data.selectedBlock ? Inspector() : `
                <div class="text-[.6rem] select-none grid grid-cols-1 items-center text-center opacity-25 h-full">
                  No block is selected
                </div>`}
              </div>
            </div>
          </div>
          
          <div class="flex-[2] w-full overflow-hidden flex">
            <div class="relative w-full h-full border-0 border-x border-solid overflow-auto p-4 ${data.colors.border}">
              <nav class="absolute inset-0 flex flex-col">
                <div class="flex-[0]">
                  ${PreviewMenu()}
                </div>
                <div class="flex-[2] overflow-hidden">
                  <div id="previewElm" class="relative grid grid-cols-1 align-center items-center w-full h-full">
                    <iframe
                      id="s6bnahb1h"
                      title="${project.title}"
                      class="bg-white shadow-2xl shadow-blue-500"
                      style="${data.selectedSize === 'none' ? 'width: 100%; height: 100%' : `
      width: ${width}px;
      height: ${height}px;
      transform: scale(${Math.min(viewportWidth / width, viewportHeight / height)});
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -${height / 2}px;
      margin-left: -${width / 2}px;`}"
                      sandbox="allow-scripts allow-same-origin allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups"
                    ></iframe>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          
          <div
            class="flex-[1] hidden ${data.activePanel === 'layers' ? 'lg:block' : ''} w-full sm:w-96 h-full px-2 py-4 text-sm overflow-auto">
            <div class="text-[.6rem] ${data.selectedBlock ? 'hidden' : ''} select-none grid grid-cols-1 items-center text-center opacity-25 h-full">
              No block is selected
            </div>
            <div class="${data.selectedBlock ? '' : 'hidden'} h-full">
              ${Inspector()}
            </div>
          </div>
        </div>
      </div>`
    
    const element = document.querySelector(container);
    if (!element) return;

    // Create a new temporary element to compare
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    if (doc.body.innerHTML.trim() === html.trim()) return;
    if (App.initialRender) {
      element.innerHTML = html;
      renderPreview();
      // Initialize SortableJS on the element with ID 'sortableContainer'
      const initializeSortable = element => {
        new Sortable(element, {
          group: 'shared', // Enable moving items between containers
          handle: '[data-move]',
          animation: 150,
          fallbackOnBody: true,
          swapThreshold: 0.65,
          onEnd: evt => {
            // Get the updated order
            const newOrder = Array.from(evt.from.children).map(item => item.dataset.id);
            
            // Update the layer structure based on new order
            console.log(newOrder);
          }
        })
      };

      const containerElement = document.getElementById('sortableContainer');
      containerElement.querySelectorAll('ul').forEach(ul => initializeSortable(ul));
      App.initialRender = false;
      return false;
    }

    // Compare and update only the changed parts
    const currentDoc = element.firstElementChild;
    const newDoc = doc.body.firstElementChild;
    diffNodes(currentDoc, newDoc);
  }
}
function Blocks() {
  const arrowDown = `<svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
      <path 
        fill="currentColor" 
        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
    </svg>`;
  const move = `<svg class="w-3" viewBox="0 0 512 512" style="color: unset;">
      <path 
        fill="currentColor" 
        d="M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h32v96H128V192c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V288h96v96H192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H288V288h96v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6v32H288V128h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z"/>
    </svg>`;
    
    let listItem = '';

    Object.keys(data.blocks).forEach(category => {
      let categoryBlock = '';
      let blockCount = 0;
      const blockData = data.blocks[category];
    
      if (blockData.items) {
        blockCount = blockData.items.length;
        blockData.items.forEach(block => {
          categoryBlock += `
            <div class="p-4 text-center rounded-md border border-solid cursor-grab ${data.colors.border}">
              ${block.type}
            </div>`;
        });
      } else {
        blockCount = 1;
        categoryBlock += `
          <div class="p-4 text-center rounded-md border border-solid cursor-grab ${data.colors.border}">
            ${blockData.type}
          </div>`;
      }

      const gridColsClass = blockCount === 1 ? 'grid-cols-1' : 'grid-cols-2';  
  
      listItem += `
        <article class="select-none">
          <section class="p-0 flex justify-between ${blockData.collapsed ? 'm-0' : ''}">
            <button 
              class="bg-transparent border-0 p-2 text-xs transform transition-transform" style="color: unset; transform: ${blockData.collapsed ? 'rotate(-90deg)' : 'rotate(0deg)'}"
              onclick="toggleBlockCategory('${blockData.id}')">
              ${arrowDown}
            </button>
            <span class="p-2 text-right">${category}</span>
          </section>
          <div class="grid ${gridColsClass} gap-2 ${blockData.collapsed ? 'hidden' : ''}">
            ${categoryBlock}
          </div>
        </article>`;
    });
  
    let html = `<div>${listItem}</div>`;
    
    return html;
}
function LayerTree() {
  // Function to render each layer recursively
  function renderLayer(layer) {
    const { id, name, children, state } = layer;
    const hasChildren = children && children.length > 0;
    const isVisible = state.visible;
    const arrowDown = `<svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
        <path 
          fill="currentColor" 
          d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
      </svg>`;
    const move = `<svg class="w-3" viewBox="0 0 512 512" style="color: unset;">
        <path 
          fill="currentColor" 
          d="M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h32v96H128V192c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V288h96v96H192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H288V288h96v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6v32H288V128h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z"/>
      </svg>`;
    const eye = `<svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
        <path 
          fill="currentColor" 
          d="M572.52,241.4c-1.5-1.8-38.5-46-93.94-90.67C417.8,111.16,358.8,85.33,288,85.33S158.2,111.16,97.42,150.72C41.98,195.4,4.98,239.6,3.48,241.4A32,32,0,0,0,0,256a32,32,0,0,0,3.48,14.6c1.5,1.8,38.5,46,93.94,90.67C158.2,400.84,217.2,426.67,288,426.67s129.8-25.83,190.58-65.4c55.44-44.67,92.44-88.87,93.94-90.67A32,32,0,0,0,576,256,32,32,0,0,0,572.52,241.4ZM288,384a128,128,0,1,1,128-128A128,128,0,0,1,288,384Zm0-192a64,64,0,1,0,64,64A64,64,0,0,0,288,192Z"/>
      </svg>`;
    const eyeSlash = `<svg class="w-3" viewBox="0 0 640 512" style="color: unset;">
        <path 
          fill="currentColor" 
          d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5z"/>
      </svg>`;
    const cog = `<svg class="w-3" viewBox="0 0 512 512" style="color: unset;">
        <path 
          fill="currentColor" 
          d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
      </svg>`;

      // HTML structure for each layer
      const listItem = `
      <li class="list-none select-none" data-id="${id}">
        <code class="p-0 flex justify-between whitespace-nowrap ${state.selected ? 'bg-blue-500 text-white' : ''}" data-layer>
          <span>
            <button 
              aria-label="toggle layer children"
              name="toggle layer children"
              class="bg-transparent ${hasChildren ? '' : 'hidden'} border-0 p-2 text-xs transform transition-transform" style="color: unset; transform: ${state.collapsed ? 'rotate(-90deg)' : 'rotate(0deg)'};"
              onclick="toggleLayerChildren('${id}')">
              ${hasChildren ? arrowDown : ''}
            </button>
            <button 
              data-move
              aria-label="sort layer"
              name="sort layer"
              class="bg-transparent border-0 p-2 text-xs cursor-grab focus:shadow-none" style="color: unset;">
              ${move}
            </button>
            <button 
              aria-label="toggle layer visibility"
              name="toggle layer visibility"
              class="bg-transparent border-0 p-2 text-xs" style="color: unset;"
              onclick="toggleVisible('${id}')">
              ${isVisible ? eye : eyeSlash}
            </button>
          </span>
          <button 
            aria-label="toggle selected layer"
            name="toggle selected layer"
            class="bg-transparent border-0 p-2 text-xs text-right capitalize" 
            style="color: unset;"
            onclick="selectedBlock('${id}')"
          >
            ${name}
          </button>
        </code>
        ${hasChildren ? `<ul class="mt-1 mb-1 -ml-4 ${state.collapsed ? 'hidden' : ''}">` + children.map(child => renderLayer(child)).join('') + '</ul>' : ''}
      </li>
    `;

    return listItem;
  }

  return data.layerStructure.map(layer => renderLayer(layer)).join('');
}
function Inspector() {
  const dropdownTextClass = 'bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left';
  const expandStyle = 'bg-transparent border-0 p-0 text-right';
  const gridcol2Style = 'grid grid-cols-2 gap-1 items-center py-2 capitalize';
  const innergridcol2Style = 'grid grid-cols-2 gap-1 items-center capitalize';
  const inputClass = 'w-auto rounded-md capitalize text-[.6rem]';
  const inputStyle = 'height: auto; margin: 0; padding: .4rem;';
  const inputColorStyle = 'height: 2rem; margin: 0; padding: .25rem; overflow: hidden;';
  const selectClass = 'm-0 w-auto rounded-md capitalize text-[.6rem]';
  const selectStyle = 'padding: .5rem; background-image: none;';
  const expand = `
    <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
      <path 
        fill="currentColor" 
        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
    </svg>
  `;
  const collapse = `
    <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
      <path 
        fill="currentColor" 
        d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
    </svg>
  `;
  return `<div class="text-[.6rem] text-left">
      <!-- search -->
      <div class="px-2" class="${data.colors.border}">
        <input class="m-0 w-auto capitalize text-[.6rem]" type="search" placeholder="Search...">
      </div>
      <!-- themes -->
      <div class="border-0 border-b border-solid pb-2 mb-4 ${data.colors.border}">
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">
            themes
          </button>
          <button class="${expandStyle}" style="color: unset;">
            ${expand}
          </button>
        </div>
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">theme</button>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="base">base</option>
            <option value="dark">dark</option>
            <option value="light">light</option>
          </select>
        </div>
      </div>
      <!-- components varients -->
      <div class="border-0 border-b border-solid pb-2 mb-4 ${data.colors.border}">
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">
            varients
          </button>
          <button class="${expandStyle}" style="color: unset;">
            ${expand}
          </button>
        </div>
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">varient</button>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="header">header</option>
            <option value="main">main</option>
            <option value="footer">footer</option>
          </select>
        </div>
      </div>
      <!-- temporary varients / states -->
      <div class="border-0 border-b border-solid pb-2 mb-4 ${data.colors.border}">
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">
            temporary varients
          </button>
          <button class="${expandStyle}" style="color: unset;">
            ${expand}
          </button>
        </div>
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">state</button>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="base">base</option>
            <option value="active">active</option>
            <option value="hover">hover</option>
            <option value="focus">focus</option>
            <option value="focus-within">focus-within</option>
            <option value="focus-visible">focus-visible</option>
            <option value="target">target</option>
            <option value="visited">visited</option>
          </select>
        </div>
      </div>
      <!-- breakpoints -->
      <div class="border-0 border-b border-solid pb-2 mb-4 ${data.colors.border}">
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">
            breakpoints
          </button>
          <button class="${expandStyle}" style="color: unset;">
            ${expand}
          </button>
        </div>
        <div class="${gridcol2Style}">
          <div>breakpoints</div>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="base">base</option>
            <option value="small">small (640px)</option>
            <option value="medium">medium (768px)</option>
            <option value="large">large (1024px)</option>
            <option value="extra large">extra large (1280px)</option>
            <option value="huge">huge (1536px)</option>
          </select>

          <button class="${dropdownTextClass}" style="color: unset;">small</button>
          <input class="${inputClass}" style="${inputStyle}" type="number" min="0" step="1" value="640">
          <button class="${dropdownTextClass}" style="color: unset;">medium</button>
          <input class="${inputClass}" style="${inputStyle}" type="number" min="0" step="1" value="768">
          <button class="${dropdownTextClass}" style="color: unset;">large</button>
          <input class="${inputClass}" style="${inputStyle}" type="number" min="0" step="1" value="1024">
          <button class="${dropdownTextClass}" style="color: unset;">extra large</button>
          <input class="${inputClass}" style="${inputStyle}" type="number" min="0" step="1" value="1280">
          <button class="${dropdownTextClass}" style="color: unset;">huge</button>
          <input class="${inputClass}" style="${inputStyle}" type="number" min="0" step="1" value="1536">
        </div>
      </div>
      <!-- position -->
      <div class="border-0 border-b border-solid pb-2 mb-4 ${data.colors.border}">
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">
            position
          </button>
          <button class="${expandStyle}" style="color: unset;">
            ${expand}
          </button>
        </div>
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">type</button>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="relative">relative</option>
            <option value="absolute">absolute</option>
            <option value="fixed">fixed</option>
            <option value="sticky">sticky</option>
          </select>
        </div>
      </div>
      <!-- size -->
      <div class="border-0 border-b border-solid pb-2 mb-4 ${data.colors.border}">
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">
            size
          </button>
          <button class="${expandStyle}" style="color: unset;">
            ${expand}
          </button>
        </div>
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">width</button>
          <div class="${innergridcol2Style}">
            <input class="${inputClass}" style="${inputStyle}" type="number" min="0" step=".1" value="1">
            
            <select class="${selectClass}" style="${selectStyle}">
              <option value="fixed">fixed</option>
              <option value="relative">relative</option>
              <option value="fill">fill</option>
              <option value="fit content">fit content</option>
              <option value="viewport">viewport</option>
            </select>
          </div>

          <button class="${dropdownTextClass}" style="color: unset;">height</button>
          <div class="${innergridcol2Style}">
            <input class="${inputClass}" style="${inputStyle}" type="number" min="0" step=".1" value="1">
            
            <select class="${selectClass}" style="${selectStyle}">
              <option value="fixed">fixed</option>
              <option value="relative">relative</option>
              <option value="fill">fill</option>
              <option value="fit content">fit content</option>
              <option value="viewport">viewport</option>
            </select>
          </div>
        </div>
      </div>
      <!-- layout -->
      <div class="border-0 border-b border-solid pb-2 mb-4 ${data.colors.border}">
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">
            layout
          </button>
          <button class="${expandStyle}" style="color: unset;">
            ${expand}
          </button>
        </div>
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">type</button>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="stack">stack</option>
            <option value="grid">grid</option>
          </select>

          <button class="${dropdownTextClass}" style="color: unset;">direction</button>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="horizontal">horizontal</option>
            <option value="vertical">vertical</option>
          </select>

          <button class="${dropdownTextClass}" style="color: unset;">align</button>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="left">left</option>
            <option value="center">center</option>
            <option value="right">right</option>
          </select>

          <button class="${dropdownTextClass}" style="color: unset;">wrap</button>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>

          <button class="${dropdownTextClass}" style="color: unset;">gap</button>
          <div class="${innergridcol2Style}">
            <input class="${inputClass}" style="${inputStyle}" type="number" min="0" max="100" step="1" value="10">
            <input style="margin: 0;" type="range" min="0" max="100" step="1" value="10">
          </div>

          <button class="${dropdownTextClass}" style="color: unset;">Distribute</button>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="start">start</option>
            <option value="center">center</option>
            <option value="end">end</option>
            <option value="space between">space between</option>
            <option value="space around">space around</option>
            <option value="space evenly">space evenly</option>
          </select>

          <button class="${dropdownTextClass}" style="color: unset;">Padding</button>
          <div class="${innergridcol2Style}">
            <input class="${inputClass}" style="${inputStyle}" type="number" min="0" max="100" step=".01" value="1">
            
            <select class="${selectClass}" style="${selectStyle}">
              <option value="fill">fill</option>
              <option value="top">top</option>
              <option value="bottom">bottom</option>
              <option value="left">left</option>
              <option value="right">right</option>
              <option value="horizontal">horizontal</option>
              <option value="vertical">vertical</option>
            </select>
          </div>
        </div>
      </div>
      <!-- typography -->
      <div class="border-0 border-b border-solid pb-2 mb-4 ${data.colors.border}">
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">
            text
          </button>
          <button class="${expandStyle}" style="color: unset;">
            ${expand}
          </button>
        </div>
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">content</button>
          <input class="w-auto rounded-md normal-case text-[.6rem]" style="${inputStyle}" type="text" placeholder="Text content">

          <button class="${dropdownTextClass}" style="color: unset;">font</button>
          <input class="${inputClass}" style="${inputStyle}" type="text" placeholder="font family">

          <button class="${dropdownTextClass}" style="color: unset;">weight</button>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="thin">thin</option>
            <option value="extra light">extra light</option>
            <option value="light">light</option>
            <option value="regular">regular</option>
            <option value="medium">medium</option>
            <option value="semibold">semibold</option>
            <option value="bold">bold</option>
            <option value="extrabold">extrabold</option>
            <option value="black">black</option>
          </select>

          <button class="${dropdownTextClass}" style="color: unset;">color</button>
          <input class="${inputClass}" style="${inputColorStyle}" type="color" value="#000000">

          <button class="${dropdownTextClass}" style="color: unset;">size</button>
          <div class="${innergridcol2Style}">
            <input class="${inputClass}" style="${inputStyle}" type="number" min="0" step="1" value="16">
            <select class="${selectClass}" style="${selectStyle}">
              <option value="pixels">pixels</option>
              <option value="fit">fit</option>
            </select>
          </div>

          <button class="${dropdownTextClass}" style="color: unset;">letter</button>
          <div class="${innergridcol2Style}">
            <input class="${inputClass}" style="${inputStyle}" type="number" min="0" step=".01" value="0">
            <select class="${selectClass}" style="${selectStyle}">
              <option value="em">em</option>
              <option value="pixels">pixels</option>
            </select>
          </div>

          <button class="${dropdownTextClass}" style="color: unset;">line</button>
          <div class="${innergridcol2Style}">
            <input class="${inputClass}" style="${inputStyle}" type="number" min="0" step=".1" value="1.6">
            <select class="${selectClass}" style="${selectStyle}">
              <option value="em">em</option>
              <option value="pixels">pixels</option>
              <option value="%">%</option>
            </select>
          </div>

          <button class="${dropdownTextClass}" style="color: unset;">align</button>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="left">left</option>
            <option value="center">center</option>
            <option value="right">right</option>
          </select>
        </div>
      </div>
      <!-- cursor -->
      <div class="border-0 border-b border-solid pb-2 mb-4 ${data.colors.border}">
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">
            cursor
          </button>
          <button class="${expandStyle}" style="color: unset;">
            ${expand}
          </button>
        </div>
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">web</button>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="auto">auto</option>
            <option value="default">default</option>
            <option value="pointer">pointer</option>
            <option value="wait">wait</option>
            <option value="text">text</option>
            <option value="move">move</option>
            <option value="help">help</option>
            <option value="not allowed">not allowed</option>
            <option value="none">none</option>
            <option value="context menu">context menu</option>
            <option value="progress">progress</option>
            <option value="cell">cell</option>
            <option value="crosshair">crosshair</option>
            <option value="vertical text">vertical text</option>
            <option value="alias">alias</option>
            <option value="copy">copy</option>
            <option value="no drop">no drop</option>
            <option value="grab">grab</option>
            <option value="grabbing">grabbing</option>
            <option value="all scroll">all scroll</option>
            <option value="column resize">column resize</option>
            <option value="row resize">row resize</option>
            <option value="up resize">up resize</option>
            <option value="right resize">right resize</option>
            <option value="down resize">down resize</option>
            <option value="left resize">left resize</option>
            <option value="top right resize">top right resize</option>
            <option value="bottom right resize">bottom right resize</option>
            <option value="bottom left resize">bottom left resize</option>
            <option value="top left resize">top left resize</option>
            <option value="horizontal resize">horizontal resize</option>
            <option value="vertical resize">vertical resize</option>
            <option value="top right bottom left resize">top right bottom left resize</option>
            <option value="top left bottom right resize">top left bottom right resize</option>
            <option value="zoom in">zoom in</option>
            <option value="zoom out">zoom out</option>
          </select>
        </div>
      </div>
      <!-- styles -->
      <div class="border-0 border-b border-solid pb-2 mb-4 ${data.colors.border}">
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">
            styles
          </button>
          <button class="${expandStyle}" style="color: unset;">
            ${expand}
          </button>
        </div>
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">opacity</button>
          <div class="${innergridcol2Style}">
            <input class="${inputClass}" style="${inputStyle}" type="number" min="0" max="100" step=".01" value="1">
            <input style="margin: 0;" type="range" min="0" max="100" step=".01" value="1">
          </div>

          <button class="${dropdownTextClass}" style="color: unset;">visible</button>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>

          <button class="${dropdownTextClass}" style="color: unset;">fill</button>
          <input class="${inputClass}" style="${inputColorStyle}" type="color" value="#000000">

          <button class="${dropdownTextClass}" style="color: unset;">overflow</button>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="hidden">hidden</option>
            <option value="visible">visible</option>
            <option value="scroll">scroll</option>
          </select>

          <button class="${dropdownTextClass}" style="color: unset;">radius</button>
          <div class="${innergridcol2Style}">
            <input class="${inputClass}" style="${inputStyle}" type="number" min="0" step="1" value="0">
            
            <select class="${selectClass}" style="${selectStyle}">
              <option value="fill">fill</option>
              <option value="top">top</option>
              <option value="bottom">bottom</option>
              <option value="left">left</option>
              <option value="right">right</option>
              <option value="horizontal">horizontal</option>
              <option value="vertical">vertical</option>
            </select>
          </div>
        </div>
      </div>
      <!-- border -->
      <div class="border-0 border-b border-solid pb-2 mb-4 ${data.colors.border}">
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">
            border
          </button>
          <button class="${expandStyle}" style="color: unset;">
            ${expand}
          </button>
        </div>
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">color</button>
          <input class="${inputClass}" style="${inputColorStyle}" type="color" value="#000000">

          <button class="${dropdownTextClass}" style="color: unset;">width</button>
          <div class="${innergridcol2Style}">
            <input class="${inputClass}" style="${inputStyle}" type="number" min="0" max="100" step=".01" value="1">
            
            <select class="${selectClass}" style="${selectStyle}">
              <option value="fill">fill</option>
              <option value="top">top</option>
              <option value="bottom">bottom</option>
              <option value="left">left</option>
              <option value="right">right</option>
              <option value="horizontal">horizontal</option>
              <option value="vertical">vertical</option>
            </select>
          </div>

          <button class="${dropdownTextClass}" style="color: unset;">overflow</button>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="solid">solid</option>
            <option value="dashed">dashed</option>
            <option value="dotted">dotted</option>
            <option value="double">double</option>
          </select>
        </div>
      </div>
      <!-- shadows -->
      <div class="border-0 border-b border-solid pb-2 mb-4 ${data.colors.border}">
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">
            shadows
          </button>
          <button class="${expandStyle}" style="color: unset;">
            ${expand}
          </button>
        </div>
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">spread</button>
          <input class="${inputClass}" style="${inputColorStyle}" type="number" min="0" step="1" value="0">

          <button class="${dropdownTextClass}" style="color: unset;">blur</button>
          <input class="${inputClass}" style="${inputColorStyle}" type="number" min="0" step="1" value="0">

          <button class="${dropdownTextClass}" style="color: unset;">x offset</button>
          <input class="${inputClass}" style="${inputColorStyle}" type="number" step="1" value="0">

          <button class="${dropdownTextClass}" style="color: unset;">y offset</button>
          <input class="${inputClass}" style="${inputColorStyle}" type="number" step="1" value="0">

          <button class="${dropdownTextClass}" style="color: unset;">color</button>
          <input class="${inputClass}" style="${inputColorStyle}" type="color" value="#000000">

          <button class="${dropdownTextClass}" style="color: unset;">type</button>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="inset">inset</option>
            <option value="outset">outset</option>
          </select>
        </div>
      </div>
      <!-- transitions -->
      <div class="border-0 border-b border-solid pb-2 mb-4 ${data.colors.border}">
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">
            transitions
          </button>
          <button class="${expandStyle}" style="color: unset;">
            ${expand}
          </button>
        </div>
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">speed</button>
          <input class="${inputClass}" style="${inputStyle}" type="number" min="0" max="100" step=".01" value="1">

          <button class="${dropdownTextClass}" style="color: unset;">timing</button>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="linear">linear</option>
            <option value="ease">ease</option>
            <option value="ease-in">ease-in</option>
            <option value="ease-out">ease-out</option>
            <option value="ease-in-out">ease-in-out</option>
          </select>
        </div>
      </div>
      <!-- transforms -->
      <div class="border-0 border-b border-solid pb-2 mb-4 ${data.colors.border}">
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">
            transforms
          </button>
          <button class="${expandStyle}" style="color: unset;">
            ${expand}
          </button>
        </div>
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">scale</button>
          <input class="${inputClass}" style="${inputStyle}" type="number" step=".1" value="0">

          <button class="${dropdownTextClass}" style="color: unset;">rotate 2d</button>
          <input class="${inputClass}" style="${inputStyle}" type="number" step="1" value="0">

          <button class="${dropdownTextClass}" style="color: unset;">rotate 3d</button>
          <div class="grid grid-cols-3 gap-1 items-center capitalize">
            <div class="flex flex-col items-center space-y-0">
              <input class="${inputClass}" style="height: auto; margin: 0; padding: .2rem;" type="number" step="1" value="0">
              <div class="w-full text-center">x</div>
            </div>
            <div class="flex flex-col items-center space-y-0">
              <input class="${inputClass}" style="height: auto; margin: 0; padding: .2rem;" type="number" step="1" value="0">
              <div class="w-full text-center">y</div>
            </div>
            <div class="flex flex-col items-center space-y-0">
              <input class="${inputClass}" style="height: auto; margin: 0; padding: .2rem;" type="number" step="1" value="0">
              <div class="w-full text-center">z</div>
            </div>
          </div>

          <button class="${dropdownTextClass}" style="color: unset;">skew</button>
          <div class="${innergridcol2Style}">
            <input class="${inputClass}" style="${inputStyle}" type="number" step="1" value="0">
            <input class="${inputClass}" style="${inputStyle}" type="number" step="1" value="0">
          </div>

          <button class="${dropdownTextClass}" style="color: unset;">depth</button>
          <div class="${innergridcol2Style}">
            <input class="${inputClass}" style="${inputStyle}" type="number" min="-500" max="500" step="1" value="0">
            <input style="margin: 0;" type="range" min="-500" max="500" step="1" value="0">
          </div>

          <button class="${dropdownTextClass}" style="color: unset;">perspective</button>
          <div class="${innergridcol2Style}">
            <input class="${inputClass}" style="${inputStyle}" type="number" min="500" max="5000" step="1" value="0">
            <input style="margin: 0;" type="range" min="500" max="5000" step="1" value="0">
          </div>

          <button class="${dropdownTextClass}" style="color: unset;">origin</button>
          <div class="${innergridcol2Style}">
            <input class="${inputClass}" style="${inputStyle}" type="number" min="0" max="100" step="1" value="50">
            <input class="${inputClass}" style="${inputStyle}" type="number" min="0" max="100" step="1" value="50">
          </div>

          <button class="${dropdownTextClass}" style="color: unset;">backface</button>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="visible">visible</option>
            <option value="hidden">hidden</option>
          </select>

          <button class="${dropdownTextClass}" style="color: unset;">preserve</button>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
      </div>
      <!-- filters -->
      <div class="border-0 border-b border-solid pb-2 mb-4 ${data.colors.border}">
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">
            filters
          </button>
          <button class="${expandStyle}" style="color: unset;">
            ${expand}
          </button>
        </div>

        <!-- 
          blur(0px) hue-rotate(-6deg) brightness(0.76) contrast(1.8) saturate(1) grayscale(0%) sepia(30%) invert(0%);
        -->

        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">blur</button>
          <input class="${inputClass}" style="${inputStyle}" type="number" min="0" max="100" step=".1" value="0">

          <button class="${dropdownTextClass}" style="color: unset;">hue</button>
          <div class="${innergridcol2Style}">
            <input class="${inputClass}" style="${inputStyle}" type="number" min="0" max="360" step="1" value="0">
            <input style="margin: 0;" type="range" min="0" max="360" step="1" value="0">
          </div>

          <button class="${dropdownTextClass}" style="color: unset;">brightness</button>
          <input class="${inputClass}" style="${inputStyle}" type="number" min="0" max="1" step=".01" value="0">

          <button class="${dropdownTextClass}" style="color: unset;">contrast</button>
          <input class="${inputClass}" style="${inputStyle}" type="number" min="0" max="1" step=".01" value="1">

          <button class="${dropdownTextClass}" style="color: unset;">saturation</button>
          <input class="${inputClass}" style="${inputStyle}" type="number" min="0" max="1" step=".01" value="1">

          <button class="${dropdownTextClass}" style="color: unset;">grayscale</button>
          <div class="${innergridcol2Style}">
            <input class="${inputClass}" style="${inputStyle}" type="number" min="0" max="100" step="1" value="0">
            <input style="margin: 0;" type="range" min="0" max="100" step="1" value="0">
          </div>
          
          <button class="${dropdownTextClass}" style="color: unset;">sepia</button>
          <div class="${innergridcol2Style}">
            <input class="${inputClass}" style="${inputStyle}" type="number" min="0" max="100" step="1" value="0">
            <input style="margin: 0;" type="range" min="0" max="100" step="1" value="0">
          </div>
          
          <button class="${dropdownTextClass}" style="color: unset;">invert</button>
          <div class="${innergridcol2Style}">
            <input class="${inputClass}" style="${inputStyle}" type="number" min="0" max="100" step="1" value="0">
            <input style="margin: 0;" type="range" min="0" max="100" step="1" value="0">
          </div>
        </div>
      </div>
      <!-- link -->
      <div class="border-0 border-b border-solid pb-2 mb-4 ${data.colors.border}">
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">
            link
          </button>
          <button class="${expandStyle}" style="color: unset;">
            ${expand}
          </button>
        </div>
        <div class="${gridcol2Style}">
          <span class="text-[.6rem] h-full capitalize">link to</span>
          <input class="w-auto rounded-md normal-case text-[.6rem]" style="${inputStyle}" type="text" placeholder="https://michaelsboost.com/">

          <span class="text-[.6rem] h-full capitalize">new tab</span>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
      </div>
      <!-- accessibility -->
      <div class="border-0 border-b border-solid pb-2 mb-4 ${data.colors.border}">
        <div class="${gridcol2Style}">
          <button class="${dropdownTextClass}" style="color: unset;">
            accessibility
          </button>
          <button class="${expandStyle}" style="color: unset;">
            ${expand}
          </button>
        </div>
        <div class="${gridcol2Style}">
          <span class="text-[.6rem] h-full capitalize">block name</span>
          <input class="w-auto rounded-md normal-case text-[.6rem]" style="${inputStyle}" type="text">

          <span class="text-[.6rem] h-full capitalize">tag</span>
          <select class="${selectClass}" style="${selectStyle}">
            <option value="article">article</option>
            <option value="aside">aside</option>
            <option value="button">button</option>
            <option value="div">div</option>
            <option value="figcaption">figcaption</option>
            <option value="figure">figure</option>
            <option value="footer">footer</option>
            <option value="header">header</option>
            <option value="main">main</option>
            <option value="nav">nav</option>
            <option value="ol">ol</option>
            <option value="section">section</option>
            <option value="ul">ul</option>
            <option value="label">label</option>
          </select>

          <button class="${dropdownTextClass}" style="color: unset;">aria label</button>
          <input class="w-auto rounded-md normal-case text-[.6rem]" style="${inputStyle}" type="text">

          <button class="${dropdownTextClass}" style="color: unset;">tab index</button>
          <input class="w-auto rounded-md normal-case text-[.6rem]" style="${inputStyle}" type="number" value="1">
        </div>
      </div>
    </div>`;
}
const Modal = {
  render({
    title = "Are you sure you want to proceed?",
    content,
    CloseLabel,
    ConfirmLabel,
    onLoad,
    onConfirm
  }) {
    // if (!options) return false;
    const hClass = "text-lg font-thin";
    const buttonClass = "text-xs w-auto px-3 py-2 m-0 capitalize rounded-md";
    const svgClass = "w-3";
    const times = `<svg class="${svgClass}" viewBox="0 0 384 512">
        <path 
          fill="currentColor" 
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
      </svg>`;

    const html = `<article class="rounded-md">
      <header class="flex justify-between items-center">
        <h1 class="${hClass}">${title}</h1>
        <button class="${buttonClass} bg-transparent border-0" style="color: unset;" aria-label="Close">
          ${times}
        </button>
      </header>
      <main class="font-thin">
        ${content ? content : ''}
      </main>
      <footer>
        <button class="${buttonClass} bg-transparent border ${project.dark ? 'border-gray-600' : 'border-gray-200'}" style="color: unset;" aria-label="Close" onclick="this.closest('dialog').close()">${CloseLabel ? CloseLabel : 'close'}</button>
        ${onConfirm ? `<button class="${buttonClass}" aria-label="Confirm">${ConfirmLabel ? ConfirmLabel : 'confirm'}</button>` : ''}
      </footer>
    </article>`;

    const modal = document.createElement('dialog');
    modal.open = true;
    modal.innerHTML = html;

    document.body.appendChild(modal);
    if (onLoad && typeof onLoad === 'function') {
      onLoad();
    }

    const closeBtn = modal.querySelector('footer button:first-child');
    const confirmBtn = modal.querySelector('footer button:last-child');

    // Confirm handler function
    closeBtn.onclick = () => document.body.removeChild(modal);
    confirmBtn.onclick = function() {
      if (onConfirm && typeof onConfirm === 'function') {
        onConfirm();
      }
      document.body.removeChild(modal);
    }
  }
}

// Diffing algorithm to update ui when changes occur
function diffNodes(oldNode, newNode, iframe = false) {
  if (!oldNode || !newNode) {
    return;
  }

  // Check if nodes are iframe elements
  if (!iframe) {
    const acceptableIframeAttributes = ['id', 'title', 'class', 'style', 'sandbox'];
    if (oldNode.nodeName === 'IFRAME' && newNode.nodeName === 'IFRAME') {
      // Compare acceptable attributes only
      acceptableIframeAttributes.forEach(attr => {
        if (oldNode.getAttribute(attr) !== newNode.getAttribute(attr)) {
          oldNode.setAttribute(attr, newNode.getAttribute(attr));
        }
      });

      const oldSrcdoc = oldNode.getAttribute('srcdoc');
      const newSrcdoc = newNode.getAttribute('srcdoc');
      // Ignore srcdoc attribute if it hasn't changed
      if (oldSrcdoc === newSrcdoc) {
        return;
      }
      return;
    }
  }

  if (oldNode.nodeName !== newNode.nodeName) {
    oldNode.replaceWith(newNode.cloneNode(true));
    // console.log('Different node names:', oldNode, newNode);
    return;
  }


  if (oldNode.nodeType === Node.ELEMENT_NODE && newNode.nodeType === Node.ELEMENT_NODE) {
    const oldAttributes = Array.from(oldNode.attributes);

    oldAttributes.forEach(attr => {
      if (attr.name === 'srcdoc') return; // Ignore srcdoc attribute for iframe
      if (!newNode.hasAttribute(attr.name) || newNode.getAttribute(attr.name) !== attr.value) {
        oldNode.setAttribute(attr.name, newNode.getAttribute(attr.name));
      }
    });

    const oldChildren = Array.from(oldNode.childNodes);
    const newChildren = Array.from(newNode.childNodes);

    oldChildren.forEach((oldChild, index) => {
      const newChild = newChildren[index];
      if (!newChild) {
        // console.log('New child is missing:', oldChild);
        oldNode.removeChild(oldChild);
        return;
      }
      if (oldChild.nodeType === Node.TEXT_NODE && oldChild.nodeValue !== newChild.nodeValue) {
        // console.log('Different text content:', oldChild, newChild);
        oldChild.nodeValue = newChild.nodeValue;
        return;
      }
      if (oldChild.nodeType === Node.ELEMENT_NODE) {
        diffNodes(oldChild, newChild);
      }
    });

    newChildren.slice(oldChildren.length).forEach(newChild => {
      oldNode.appendChild(newChild.cloneNode(true));
      // console.log('New child added:', newChild);
    });
  }
}

// converts html to json
function html2json(input) {
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
          obj.text = child.nodeValue.trim()
        }
      });
    }
  
    return obj;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(input, 'text/html');
  const json = Array.from(doc.body.children).map(child => elementToJson(child));
  // const string = JSON.stringify(json, null, 2);
  return json;
}
// converts json to html
function json2html(input) {
  function jsonToElement(json) {
    const renderElement = element => {
      let html = '';

      // Skip elements that are not visible
      if (element.state && !element.state.visible) return html;
      
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
    
      html += '>';
    
      if (element.text) {
        html += escapeHtml(element.text);
      }
    
      if (element.children) {
        for (const childElement of element.children) {
          html += renderElement(childElement);
        }
      }
    
      html += `</${element.tag}>`;
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
}

// Functions for state changes
function resizeCanvas(size) {
  data.selectedSize = size;
}
function rotateCanvas() {
  const iframe = document.getElementById('previewElm').firstElementChild;
  if (iframe.style.width === '100%') return false;

  // Extract current width and height
  let width = parseInt(iframe.style.width);
  let height = parseInt(iframe.style.height);

  // Swap width and height
  [width, height] = [height, width];

  // Calculate the new transform scale
  const viewportWidth = previewElm.clientWidth;
  const viewportHeight = previewElm.clientHeight;
  const scale = Math.min(viewportWidth / width, viewportHeight / height);

  // Apply the new styles
  iframe.style.width = `${width}px`;
  iframe.style.height = `${height}px`;
  iframe.style.transform = `scale(${scale})`;
  iframe.style.marginTop = `-${height / 2}px`;
  iframe.style.marginLeft = `-${width / 2}px`;
}
function theme() {
  const sun = "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z";
  const moon = "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z";
  
  // Toggle dark mode
  project.dark = !project.dark;

  // Set colors based on dark mode
  // data.colors.text = project.dark ? "text-[#fff]" : "text-[#1c1c1c]";
  data.colors.border = project.dark ? 'border-gray-800' : 'border-gray-200';

  // update icon based upon theme
  data.themeIcon = project.dark ? moon : sun;
    
  // Set data-theme attribute on <html> element
  document.documentElement.setAttribute('data-theme', project.dark ? 'dark' : 'light');
}
function generateId() {
  let id = '';
  while (!/^[a-zA-Z]/.test(id)) {
    id = Math.random().toString(36).substr(2, 9);
  }
  return id;
}
function togglePanel(panel) {
  data.activePanel = data.activePanel === panel ? null : panel;
}
function handleLogoChange(event) {
  const file = event.target.files[0];
  if (!file) return; // If no file selected, return

  try {
    // Convert file to base64 string
    fileToBase64(file).then(base64String => {
      // Update project.logo with base64String
      project.logo = base64String;
    });
  } catch (error) {
    console.error('Error converting image to base64:', error);
  }
}
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

function renderPreview() {
  // Iterate over each library
  let scriptTags = '';
  let cssTags = '';
  project.libraries.forEach(library => {
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
  if (!project.cssreset) cssReset = '';
  const iframeSrc = `<html data-theme="${project.dark ? 'dark' : 'light'}">
  <head>
    <title>${project.title}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="${project.description}">
    <meta name="author" content="${project.author}">
    ${project.meta ? `${project.meta}\n          ` : ''}${cssTags}<style>${cssReset}${renderStyles(project.styles, true)}</style>
    ${scriptTags ? scriptTags : ''}
  </head>
  <body>
    ${project.html}
  </body>
</html>`;

  const element = document.getElementById('s6bnahb1h');
  if (!element) return;

  // Create a new temporary element to compare
  const parser = new DOMParser();
  const doc = parser.parseFromString(iframeSrc, 'text/html');
  const idoc = element.contentDocument || element.contentWindow.document;

  if (App.initialRender) {
    element.setAttribute('srcdoc', iframeSrc);
    App.initialRender = false;
    return false;
  }

  // Compare and update only the changed parts
  const currentDoc = idoc.documentElement;
  const newDoc = doc.documentElement;
  console.log(currentDoc, newDoc);
  diffNodes(currentDoc, newDoc);
}
function toggleBlockCategory(blockId) {
  // Function to recursively find and toggle the collapsed state of the block
  function findAndToggle(block) {
    if (block.id === blockId) {
      block.collapsed = !block.collapsed;
      return true; // Found and toggled the block
    }
    if (block.items) {
      for (let i = 0; i < block.items.length; i++) {
        if (findAndToggle(block.items[i])) {
          return true; // Found and toggled the block in items
        }
      }
    }
    return false; // Block not found
  }

  // Iterate through each block in the blocks object
  Object.values(data.blocks).forEach(block => findAndToggle(block));
}
function toggleLayerChildren(layerId) {
  // Function to recursively find and set the selected block
  function findId(block) {
    if (block.id === layerId) {
      block.state.collapsed = !block.state.collapsed;
      return true; // Found the block
    }
    if (block.children) {
      for (let i = 0; i < block.children.length; i++) {
        if (findId(block.children[i])) {
          return true; // Found the block in children
        }
      }
    }
    return false; // Block not found
  }

  data.layerStructure.map(layer => findId(layer));
}
function toggleVisible(layerId) {
  // Function to recursively find and set the selected block
  function findId(block) {
    if (block.id === layerId) {
      block.state.visible = !block.state.visible;
      project.html = json2html(data.layerStructure);
      return true; // Found the block
    }
    if (block.children) {
      for (let i = 0; i < block.children.length; i++) {
        if (findId(block.children[i])) {
          return true; // Found the block in children
        }
      }
    }
    return false; // Block not found
  }
  
  data.layerStructure.map(layer => findId(layer));
}
function selectedBlock(layerId) {
  // Function to recursively find and set the selected block
  function findId(block) {
    if (block.id !== layerId) {
      block.state.selected = false; // Deselect blocks that don't match the given layerId
    } else {
      block.state.selected = !block.state.selected; // Toggle selected state for the matched block
      data.selectedBlock = block.state.selected ? block : null; // Update selectedBlock if block is selected
    }

    if (block.children) {
      // Recursively check children
      for (let i = 0; i < block.children.length; i++) {
        findId(block.children[i]);
      }
    }
  }

  // Deselect all blocks before selecting the new one
  data.layerStructure.map(layer => findId(layer));

  // If selectedBlock is active then show inspector
  const inspectorBtn = document.getElementById('inspectorBtn');
  if (inspectorBtn) {
    const style = window.getComputedStyle(inspectorBtn);
    // console.log('Inspector button display style:', style.display);

    if (data.selectedBlock) {
      if (style.display !== 'none') togglePanel('inspector');
    }
  } else {
    // console.error('Inspector button not found');
  }
}


// Render styles json as css in iframe
function renderStyles(styles, min = false) {
  if (!styles.common) return false;
  let css = '';
  const usedStyles = collectUsedStyles(data.layerStructure);

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
}
function collectUsedStyles(elements, usedStyles = new Set()) {
  elements.forEach(element => {
    if (element.props && element.props.class) {
      element.props.class.split(' ').forEach(cls => usedStyles.add(cls));
    }
    if (element.children) {
      collectUsedStyles(element.children, usedStyles);
    }
  });
  return usedStyles;
}

// new, import, export and share project functions
function newProject() {
  // Ask user for confirmation
  Modal.render({
    title: "Are you sure you want to start a new project?",
    content: `<div class="p-4 text-center">All current data will be lost.</div>`,
    onConfirm: function() {
      // reset project file
      project.name = "App name";
      project.version = 0.01;
      project.title = "An attractive title";
      project.description = "The most attractive description ever!";
      project.author = "AppBuilder";
      project.url = "https://michaelsboost.com/";
      project.meta = "";
      project.layerStructure = [];
      project.styles = {};
      project.html = [];
      project.scratchpad = "";
      project.logo = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iNTEyIgogICBoZWlnaHQ9IjUxMiIKICAgdmlld0JveD0iMCAwIDEzNS40NjY2NiAxMzUuNDY2NjciCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzEiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnMKICAgICBpZD0iZGVmczEiIC8+PGcKICAgICBpZD0iZzI0Ij48cGF0aAogICAgICAgaWQ9InBhdGgyMiIKICAgICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOiMxMzNhZDQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjk2LjE3NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiCiAgICAgICBkPSJNIDkuNTgyODc3NSw2Ny43MzMzMzIgViAxMzUuMjAwNTMgTCAyNS4zODc1OTcsMTI2LjAzMTA3IFYgMTA2Ljk2MDQgNjcuNzMzMzMyIFogbSA4NS45Njg5MTE1LDAgLTU3Ljc2OTA4MywzMi4yOTcyNTggdiAxOC44MTA3MyBMIDEyNS44ODIyNCw2Ny43MzMzMzIgWiIgLz48cGF0aAogICAgICAgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2ZpbGw6IzA0YTJmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIgogICAgICAgaWQ9InBhdGgyMyIKICAgICAgIGQ9Im0gNDkuNTY4NTI3LDM1LjgxOTU1MyAtMTYuOTcwNDc4LDkuNzk3OTEgMCwtMTkuNTk1ODIgeiIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDIuMjE3MjY1MiwwLDAsMi4xNDcwMjkzLC0zNC40OTUyNjksLTkuMjYyMTYyKSIgLz48cGF0aAogICAgICAgaWQ9InBhdGgyNCIKICAgICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOiM4NjAwZWY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjk2LjE3NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiCiAgICAgICBkPSJNIDkuNTgyODc3NSwwLjI2NjEzMzYyIFYgNjcuNzMzMzMyIEggMjUuMzg3NTk3IFYgNDIuODU2ODE1IDI4LjMyNjk1MyBsIDcwLjMyNTkzOSwzOS4zMTU5NDYgLTAuMTYxNzQ3LDAuMDkwNDMgaCAzMC4zMzA0NTEgbCAwLjAwMiwtMC4wMDEgeiIgLz48L2c+PC9zdmc+Cg==";
      project.pwa = false;
      project.cssreset = true;
      project.dark = true;
    }
  });
}
function importProject() {
  // Ask user for confirmation
  Modal.render({
    title: "Are you sure you want to load a new project?",
    content: `<div class="p-4 text-center">All current data will be lost.</div>`,
    onConfirm: function() {
      // Create an input element of type file
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json'; // Accept only .json files
    
      // Add event listener for file selection
      input.addEventListener('change', (event) => {
        const file = event.target.files[0];
        
        if (!file) {
          console.error('No file selected.');
          return;
        }
    
        const reader = new FileReader();
    
        // Define what happens once file is loaded
        reader.onload = function(event) {
          try {
            const importedData = JSON.parse(event.target.result);
            
            // Replace project data with imported JSON data
            Object.keys(importedData).forEach(key => {
              project[key] = importedData[key];
            });
    
            console.log('Project imported successfully:', importedData);
          } catch (error) {
            console.error('Error parsing JSON file:', error);
          }
        };
    
        // Read the file as text
        reader.readAsText(file);
        input.remove();
      });
    
      // Click the input element to trigger file selection dialog
      input.click();
    }
  });
}
function getFileNameAndType(url) {
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
}
function fetchResources(obj) {
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
        img.src = `imgs/${getFileNameAndType(img.getAttribute('src')).fileName}`;
      }
    });

    // Extract audio URLs
    body.querySelectorAll('audio').forEach(audio => {
      audio.querySelectorAll('source').forEach(source => {
        if (source.hasAttribute('src')) {
          audioUrls.push(source.getAttribute('src'));
          source.src = `audios/${getFileNameAndType(source.getAttribute('src')).fileName}`;
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
          source.src = `vids/${getFileNameAndType(source.getAttribute('src')).fileName}`;
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
}
async function getBase64Media(mediaUrl) {
  const response = await fetch(mediaUrl);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
async function downloadProject() {
  let { imageUrls, audioUrls, vectors, videoUrls } = fetchResources(project);
  
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
        base64Logo = await getBase64Media(project.logo);
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
  zip.file('css/style.min.css', `${resetCssContent}${renderStyles(project.styles, true)}`);
  zip.file('css/style.css', `${resetCssContent}

${renderStyles(project.styles, false)}`);

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
        const base64Audio = await getBase64Media(audioUrl);
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
        const base64Image = await getBase64Media(imageUrl);
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
        const base64Video = await getBase64Media(videoUrl);
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
}
function share() {
  let resetCss = `/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,::after,::before{box-sizing:border-box}html{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji'}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,'Liberation Mono',Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}body{font-family:inherit;line-height:inherit}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:-moz-focusring{outline:auto}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}`;
  
  const shareProject = {
    title: project.title,
    description: project.description,
    head: project.meta,
    html: project.html,
    html_pre_processor : "none",
    css: `${resetCss}\n\n${renderStyles(project.styles, false)}`,
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

// Once dom has loaded init functions
document.addEventListener('DOMContentLoaded', function() {
  data.layerStructure = html2json(project.html);
  App.render('#app');
});
