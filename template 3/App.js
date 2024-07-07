// keep project and data in the global scope
let project = {
  name: "App name",
  version: 0.01,
  title: "An attractive title",
  description: "The most attractive description ever!",
  author: "AppBuilder",
  url: "https://michaelsboost.com/",
  meta: "",
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
        "margin": "1rem"
      },
      "h30v6g": {
        "font-weight": '400',
        "line-height": '1.5',
        "padding": '0.75rem 1rem',
        "text-align": "center",
        "text-decoration": "none",
        "text-transform": "uppercase",
        "margin": "0 .5rem",
        "border-radius": ".25rem",
        "color": "#ffffff",
        "border-width": "0.0625rem",
        "border-style": "solid",
        "border-color": "#c15ab8",
        "background-color": "#a949a0"
      },
      "tv2rf2xx3": {
        "font-weight": '400',
        "line-height": '1.5',
        "padding": '0.75rem 1rem',
        "text-align": "center",
        "text-decoration": "none",
        "text-transform": "lowercase",
        "margin": "0 .5rem",
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
  layerStructure: [
    {
      "type": "box",
      "name": "box",
      "tag": "header",
      "id": "slal9dwxo",
      "styles": "p4dmvkj5v",
      "state": {
        "collapsed": false,
        "selected": false,
        "visible": true,
      },
      "children": [
        {
          "type": "box",
          "name": "box",
          "tag": "hgroup",
          "id": "h9f2mfyu3",
          "styles": "w78d2h",
          "state": {
            "collapsed": false,
            "selected": false,
            "visible": true,
          },
          "children": [
            {
              "type": "text",
              "name": "text",
              "tag": "h1",
              "id": "s41hd6m61",
              "styles": "n6zv2tuar",
              "text": "App name",
              "state": {
                "collapsed": false,
                "selected": false,
                "visible": true,
              },
              "children": []
            },
            {
              "type": "text",
              "name": "text",
              "tag": "h2",
              "id": "lestnzu53",
              "styles": "xqkuxhejp",
              "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusantium rem sint voluptatum quisquam cum. Nostrum dolorum alias doloribus quod accusantium odit vero dolor excepturi cumque mollitia? Laboriosam, dolore rem!",
              "state": {
                "collapsed": false,
                "selected": false,
                "visible": true,
              },
              "children": []
            }
          ]
        }
      ]
    },
    {
      "type": "box",
      "name": "box",
      "tag": "main",
      "id": "nhgxl6cb9",
      "styles": "p4dmvkj5v",
      "state": {
        "collapsed": false,
        "selected": false,
        "visible": true,
      },
      "children": [
        {
          "type": "image",
          "name": "image",
          "tag": "img",
          "id": "hjwxxvjir",
          "styles": "cc7uwye7i",
          "props": {
            "src": "imgs/image.webp"
          },
          "state": {
            "collapsed": false,
            "selected": false,
            "visible": true,
          }
        }
      ]
    },
    {
      "type": "box",
      "name": "box",
      "tag": "footer",
      "id": "p8f8xirih",
      "styles": "p4dmvkj5v",
      "state": {
        "collapsed": false,
        "selected": false,
        "visible": true,
      },
      "children": [
        {
          "type": "input",
          "name": "input",
          "tag": "input",
          "id": "ejrm4l486",
          "props": {
            "type": "text",
            "placeholder": "text here...",
            "style": "padding: .5rem; border: 1px solid #666; border-radius: .25rem;"
          },
          "state": {
            "collapsed": false,
            "selected": false,
            "visible": true,
          }
        },
        {
          "type": "select",
          "name": "select",
          "tag": "select",
          "id": "ts613kep8",
          "props": {
            "style": "display: block; width: 100%; margin: 1rem auto .25rem auto; padding: .5rem; border-radius: .25rem;"
          },
          "state": {
            "collapsed": false,
            "selected": false,
            "visible": true,
          },
          "children": [
            {
              "type": "option",
              "name": "option",
              "tag": "option",
              "id": "r0rxrd9si",
              "props": {
                "value": "hello",
              },
              "state": {
                "collapsed": false,
                "selected": false,
                "visible": true,
              },
              "text": "hello"
            },
            {
              "type": "option",
              "name": "option",
              "tag": "option",
              "id": "wlhnb64dg",
              "props": {
                "value": "world",
              },
              "state": {
                "collapsed": false,
                "selected": false,
                "visible": true,
              },
              "text": "world"
            }
          ]
        },
        {
          "type": "box",
          "name": "box",
          "tag": "div",
          "id": "er43v0gqz",
          "state": {
            "collapsed": false,
            "selected": false,
            "visible": true,
          },
          "children": [
            {
              "type": "box",
              "name": "box",
              "tag": "div",
              "id": "tifb0414m",
              "styles": "aofdknf1r",
              "props": {
                "style": "text-align: center;"
              },
              "state": {
                "collapsed": false,
                "selected": false,
                "visible": true,
              },
              "children": [
                {
                  "type": "text",
                  "name": "text",
                  "tag": "button",
                  "id": "usrq4dfna",
                  "styles": "h30v6g",
                  "props": {
                    "aria-label": "button"
                  },
                  "text": "Button",
                  "state": {
                    "collapsed": false,
                    "selected": false,
                    "visible": true,
                  },
                  "children": []
                },
                {
                  "type": "text",
                  "name": "text",
                  "tag": "button",
                  "id": "drh4elj4d",
                  "styles": "tv2rf2xx3",
                  "props": {
                    "aria-label": "button"
                  },
                  "text": "Button",
                  "state": {
                    "collapsed": false,
                    "selected": false,
                    "visible": true,
                  },
                  "children": []
                }
              ],
            }
          ]
        }
      ]
    }
  ],
  scratchpad: "",
  logo: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iNTEyIgogICBoZWlnaHQ9IjUxMiIKICAgdmlld0JveD0iMCAwIDEzNS40NjY2NyAxMzUuNDY2NjciCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzUiCiAgIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iaW1hZ2Uuc3ZnIgogICBpbmtzY2FwZTpleHBvcnQteGRwaT0iOTYiCiAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSI5NiIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9Im5hbWVkdmlldzciCiAgICAgcGFnZWNvbG9yPSIjNTA1MDUwIgogICAgIGJvcmRlcmNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMSIKICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiM1MDUwNTAiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgIHNob3dncmlkPSJmYWxzZSIgLz4KICA8ZGVmcwogICAgIGlkPSJkZWZzMiIgLz4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSI+CiAgICA8Y2lyY2xlCiAgICAgICBzdHlsZT0iZmlsbDojY2NjY2NjO2ZpbGwtb3BhY2l0eTowLjk4MDQ2O3N0cm9rZS13aWR0aDoxLjAxMjM1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCIKICAgICAgIGlkPSJwYXRoNzM0IgogICAgICAgY3g9IjY3LjczMzMzIgogICAgICAgY3k9IjUwLjc5OTk5NSIKICAgICAgIHI9IjMzLjUyNjQ5MyIgLz4KICAgIDxwYXRoCiAgICAgICBpZD0icmVjdDc4OC0zIgogICAgICAgc3R5bGU9ImZpbGw6I2NjY2NjYztmaWxsLW9wYWNpdHk6MC45ODA0NjtzdHJva2Utd2lkdGg6MC43MjM3ODc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIgogICAgICAgZD0iTSAzMy44NjY2NjcsMTAxLjYgQyAxNS4xMDQ1NTEsMTAxLjYgMCwxMTYuNzA0NTUgMCwxMzUuNDY2NjcgSCAxMzUuNDY2NjcgQyAxMzUuNDY2NjcsMTE2LjcwNDU1IDEyMC4zNjIxMiwxMDEuNiAxMDEuNiwxMDEuNiBaIiAvPgogIDwvZz4KPC9zdmc+Cg==",
  pwa: false,
  cssreset: true,
  dark: true
};
let data = {
  themeIcon: "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z",
  activePanel: '',
  selectedSize: 'none',
  selectedBlock: null
}
const LeftMenubar = {
  render() {
    const html = `<ul class="p-0 m-0">
  <li class="list-none m-0">
    <button
      aria-label="settings button"
      name="settings"
      class="w-full text-sm border-0 px-4 py-3 rounded-md bg-transparent -mt-1"
      style="color: unset;"
      onclick="togglePanel('settings')"
    >
      <svg class="w-3" viewBox="0 0 448 512">
        <path
          fill="currentColor"
          d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        />
      </svg>
    </button>
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
      aria-label="toggle inspector"
      name="toggle inspector"
      class="w-full text-sm border-0 px-4 py-3 rounded-md bg-transparent"
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
</ul>`;
          
    const element = document.querySelector('[data-leftmenubar]');
    if (!element) return;
    element.innerHTML = html;
  }
}
const PreviewMenu = {
  render(selected = false) {
    const buttonClass = 'border-0 bg-transparent text-sm';
    const svgClass = 'h-3 -mt-1';
    const svgClassTransform = `${svgClass} transform origin-center scale-125`;
    const selectClass = 'm-0 w-auto rounded-md capitalize text-[.6rem]';
    const selectStyle = 'padding: 0.5rem;';

    if (!selected) {
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
  
      const html = `<div class="flex justify-between items-center overflow-auto">
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
      class="px-2 flex justify-between border border-solid border-y-0 ${project.dark ? 'border-gray-800' : 'border-gray-200'}" 
      data-theme="border">
      
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
        class="${buttonClass}"
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
            
      const element = document.querySelector('[data-previewmenu]');
      if (!element) return;
      element.innerHTML = html;
    }
    if (selected) {
      const html = `<div class="flex justify-between items-center overflow-auto">
    <div class="flex justify-between items-center">
      <button
        aria-label="copy block"
        name="copy block"
        class="${buttonClass}"
        onclick="copyBlock(data.selectedBlock.id)"
        style="color: unset;"
      >
        <svg class="${svgClass}" viewBox="0 0 448 512">
          <path 
            fill="currentColor"
            d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" />
        </svg>
      </button>
      <button
        aria-label="paste block"
        name="paste block"
        class="${buttonClass}"
        onclick="pasteBlock(data.selectedBlock.id)"
        style="color: unset;"
      >
        <svg class="${svgClass}" viewBox="0 0 512 512">
          <path 
            fill="currentColor"
            d="M160 0c-23.7 0-44.4 12.9-55.4 32H48C21.5 32 0 53.5 0 80V400c0 26.5 21.5 48 48 48H192V176c0-44.2 35.8-80 80-80h48V80c0-26.5-21.5-48-48-48H215.4C204.4 12.9 183.7 0 160 0zM272 128c-26.5 0-48 21.5-48 48V448v16c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V243.9c0-12.7-5.1-24.9-14.1-33.9l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1H320 272zM160 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
        </svg>
      </button>
    </div>
    <div class="flex justify-between items-center">
      <button
        aria-label="clone block"
        name="clone block"
        class="${buttonClass}"
        onclick="cloneBlock(data.selectedBlock.id)"
        style="color: unset;"
      >
        <svg class="${svgClass}" viewBox="0 0 512 512">
          <path 
            fill="currentColor"
            d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z" />
        </svg>
      </button>
      <button
        aria-label="delete block"
        name="delete block"
        class="${buttonClass}"
        onclick="deleteBlock(data.selectedBlock.id)"
        style="color: unset;"
      >
        <svg class="${svgClass}" viewBox="0 0 448 512">
          <path 
            fill="currentColor"
            d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
        </svg>
      </button>
    </div>
  </div>`;
            
      const element = document.querySelector('[data-previewmenu]');
      if (!element) return;
      element.innerHTML = html;
    }
  }
}
const Settings = {
  render() {
    const html = `<ul class="py-4 px-0">
  <li class="list-none">
    <div class="items-center text-center">
      <div>
        <a 
          target="_blank" 
          href="https://github.com/michaelsboost/AppBuilder/tree/gh-pages">
          <img 
            class="my-4 w-24 m-auto"
            src="imgs/logo.svg" />
        </a>
        <div class="text-2xl">
          About AppBuilder
        </div>
        <div class="my-2 text-xs">
          Version 0.0.3
        </div>
        <a 
          target="_blank" 
          class="text-sm underline mb-2 text-blue-500" 
          href="https://github.com/michaelsboost/AppBuilder/blob/gh-pages/LICENSE">
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
        onchange="project.cssreset = this.checked; renderPreview(project.styles, project.layerStructure);"
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
      oninput="project.title = this.value; renderPreview(project.styles, project.layerStructure);"
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
      oninput="project.description = this.value; renderPreview(project.styles, project.layerStructure);"
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
      oninput="project.author = this.value; renderPreview(project.styles, project.layerStructure);"
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
      oninput="project.meta = this.value; renderPreview(project.styles, project.layerStructure);"
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
      oninput="project.scratchpad = this.value; renderPreview(project.styles, project.layerStructure);"
    >${project.scratchpad}</textarea>
  </li>
</ul>`;

    const element = document.querySelector('[data-panel=settings]');
    if (!element) return;
    element.innerHTML = html;
  }
}
const Inspector = {
  categoriesArray: [
    { collapsed: false, title: 'states' },
    { collapsed: false, title: 'breakpoints' },
    { collapsed: false, title: 'styles' },
    { collapsed: false, title: 'accessibility' }
  ],
  boxComponent: [
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
  ],
  textComponent: [
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
  ],
  buttonTextClass: 'bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left',
  addStyle: 'bg-transparent border-0 p-0 text-right',
  gridcol2Style: 'grid grid-cols-2 gap-1 items-center py-2 capitalize',
  innergridcol2Style: 'grid grid-cols-2 gap-1 items-center capitalize',
  inputClass: 'w-auto rounded-md capitalize text-[.6rem]',
  inputStyle: 'height: auto; margin: 0; padding: .4rem;',
  inputColorStyle: 'height: 2rem; margin: 0; padding: .25rem; overflow: hidden;',
  selectClass: 'm-0 w-auto rounded-md capitalize text-[.6rem]',
  selectStyle: 'padding: .5rem; background-image: none;',
  plus: `
    <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
      <path 
        fill="currentColor" 
        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
    </svg>
  `,
  minus: `
    <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
      <path 
        fill="currentColor" 
        d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
    </svg>
  `,
  toggleDropdown(element) {
    let index = null;
    if (element.hasAttribute('data-index')) {
      index = element.getAttribute('data-index');
      let category = Inspector.categoriesArray[index];
      if (category.hasOwnProperty('collapsed')) {
        category.collapsed = !category.collapsed;
      } else {
        category.collapsed = true;
      }
    }

    element.parentElement.nextElementSibling.classList.toggle('hidden');
  },
  shouldDisplayCategory(category) {
    // Array of categories to hide
    const hiddenCategories = [''];
    // Return true if the category's title is not in the hidden categories array
    return !hiddenCategories.includes(category.title);
  },
  getBreakpointLabel(key) {
    const value = parseInt(key, 10);
    if (value <= 640) {
      return 'Small';
    } else if (value <= 1024) {
      return 'Medium';
    } else if (value <= 1280) {
      return 'Large';
    } else {
      return 'Extra Large';
    }
  },
  updateBlockName(newName) {
    if (data.selectedBlock) data.selectedBlock.name = newName;
    LayerTree(project.layerStructure, "[data-panel=layers]");
  },
  updateBlockTag(newTag) {
    if (data.selectedBlock) data.selectedBlock.tag = newTag;
    renderPreview(project.styles, project.layerStructure);
  },
  updateBlockText(newText) {
    if (data.selectedBlock) data.selectedBlock.text = newText;
    renderPreview(project.styles, project.layerStructure);
  },
  updateProp(key, value) {
    if (data.selectedBlock && data.selectedBlock.props) {
      if (data.selectedBlock.props[key]) {
        data.selectedBlock.props[key] = value;
      }
    }
    renderPreview(project.styles, project.layerStructure);
  },
  render() {
    const inspectorPanel = document.querySelector('[data-panel="inspector"]');
    if (!inspectorPanel) return;
    if (!data.selectedBlock) {
      inspectorPanel.innerHTML = `<div class="grid grid-cols-1 h-full text-center items-center" style="opacity: .25;">
        No element/layer selected
      </div>`;
      return false;
    };
    inspectorPanel.innerHTML = '';
    let styles = project.styles;
    let selectedBlock = data.selectedBlock;
    let styleId = selectedBlock.styles;

    // define theme color
    const borderColor = project.dark ? 'border-gray-800' : 'border-gray-200';
    const categoryStyles = `border-0 border-b border-solid pb-2 mb-4 ${borderColor}`;
  
    // Start building the HTML string
    let html = `
      <div class="text-[.6rem]">
        <!-- search -->
        <div class="px-2">
          <input class="m-0 w-auto capitalize text-[.6rem]" type="search" placeholder="Search...">
        </div>
        <!-- themes -->
        <div class="${categoryStyles} ${borderColor}" data-theme="border">
          <div class="${Inspector.gridcol2Style}">
            <button class="${Inspector.buttonTextClass} py-2" onclick="Inspector.toggleDropdown(this)">
              themes
            </button>
            <button class="${Inspector.buttonTextClass} py-2 text-right" style="color: unset;" onclick="handlePlusClick()">
              ${Inspector.plus}
            </button>
          </div>
          <div class="${Inspector.gridcol2Style}">
            <span>theme</span>
            <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;" onchange="handleThemeChange(this.value)">
              <option value="base">base</option>
              <option value="dark">dark</option>
              <option value="light">light</option>
            </select>
          </div>
        </div>
    `;
  
    // Iterate over categoriesArray and add corresponding HTML
    Inspector.categoriesArray.forEach((category, index) => {
      if (Inspector.shouldDisplayCategory(category)) {
        if (!selectedBlock.styles && ['states', 'breakpoints'].includes(category.title)) return false;

        html += `
          <div class="${categoryStyles}" data-theme="border">
            <div class="${Inspector.gridcol2Style}">
              <button class="${Inspector.buttonTextClass} py-2" data-index="${index}" onclick="Inspector.toggleDropdown(this)">
                ${category.title}
              </button>
              <button class="${Inspector.buttonTextClass} py-2 text-right">
                ${Inspector.plus}
              </button>
            </div>
            <div id="category-${index}" class="w-full h-full">
        `;

        // Depending on category title, add specific sections
        if (category.title === 'states') {
          html += `
            <!-- States section -->
            <div class="${Inspector.gridcol2Style} w-full h-full">
              <button class="${Inspector.buttonTextClass}">state</button>
              <button class="${Inspector.buttonTextClass} normal-case text-right">main</button>
            </div>
          `;
          // Iterate over styles.states[selectedBlock.styles] and add HTML
          if (selectedBlock && styles.states[styleId]) {
            Object.entries(styles.states[styleId]).forEach(([key, value]) => {
              html += `
                <div class="${Inspector.gridcol2Style}e">
                  <button class="${Inspector.buttonTextClass}">state</button>
                  <button class="${Inspector.buttonTextClass} normal-case text-right">${key}</button>
                </div>
              `;
            });
          }
        } else if (category.title === 'breakpoints') {
          if (selectedBlock.styles) {
            html += `
              <!-- Breakpoints section -->
              <div class="w-full">
            `;
            // Iterate over styles.breakpoints[selectedBlock.styles] and add HTML
            if (selectedBlock && styles.breakpoints[styleId]) {
              Object.entries(styles.breakpoints[styleId]).forEach(([key, value]) => {
                html += `
                  <div class="${Inspector.gridcol2Style}">
                    <button class="${Inspector.buttonTextClass}">${Inspector.getBreakpointLabel(key)}</button>
                    <button class="${Inspector.buttonTextClass} text-right">${key}px</button>
                  </div>
                `;
              });
            }
            html += `</div>`;
          }
        } else if (category.title === 'styles') {
          html += `
            <!-- Display select menu for styles -->
            <div class="w-full">
          `;
          // Iterate over styles.common[selectedBlock.styles] and add HTML
          if (selectedBlock && styles.common && styles.common[styleId]) {
            Object.entries(styles.common[styleId]).forEach(([key, value]) => {
              html += `
                <div class="${Inspector.gridcol2Style} py-[1px]">
                  <button onclick="deleteStyle('${styleId}', '${key}')" class="${Inspector.buttonTextClass}">${key}</button>
                  <input oninput="handleStyleInput(this, '${key}', '${styleId}')" type="text" value="${value}" class="${Inspector.inputClass} normal-case" style="${Inspector.inputStyle}">
                </div>
              `;
            });
          }
          html += `</div>`;
        } else if (category.title === 'accessibility') {
          html += `
            <!-- Accessibility section -->
            <div class="w-full">
              <div class="${Inspector.gridcol2Style} py-[1px]">
              ${selectedBlock.styles ? `
                <button class="${Inspector.buttonTextClass} w-full" style="color: unset;" onclick="deleteStyleId('${selectedBlock.styles}')">style id</button>
                <input class="${Inspector.inputClass} normal-case" style="${Inspector.inputStyle}" type="text" value="${selectedBlock.styles}" readonly>
              ` : ''}

                <button class="${Inspector.buttonTextClass} w-full" style="color: unset;" onclick="deleteBlockId('${selectedBlock.id}')">block</button>
                <input type="text" value="${selectedBlock.name}" class="${Inspector.inputClass} normal-case" style="${Inspector.inputStyle}" oninput="Inspector.updateBlockName(this.value)">
              </div>
          `;
          // Depending on selectedBlock type, add specific inputs/selects
          if (selectedBlock) {
            if (selectedBlock.type === 'box') {
              html += `
                <div class="${Inspector.gridcol2Style} py-[1px]">
                  <span>tag</span>
                  <select class="m-0 w-auto rounded-md capitalize text-[.6rem] w-full normal-case" style="padding: .5rem; background-image: none;" onchange="Inspector.updateBlockTag(this.value)">
                    ${Inspector.boxComponent.map(value => `<option value="${value}" ${selectedBlock.tag === value ? 'selected' : ''}>${value}</option>`).join('')}
                  </select>
                </div>
              `;
            } else if (selectedBlock.type === 'text') {
              html += `
                <div class="${Inspector.gridcol2Style} py-[1px]">
                  <span>tag</span>
                  <select class="m-0 w-auto rounded-md capitalize text-[.6rem] w-full normal-case" style="padding: .5rem; background-image: none;" onchange="Inspector.updateBlockTag(this.value)">
                    ${Inspector.textComponent.map(value => `<option value="${value}" ${selectedBlock.tag === value ? 'selected' : ''}>${value}</option>`).join('')}
                  </select>
                </div>
              `;
            }
            if (selectedBlock.type === 'box' || selectedBlock.type === 'text') {
              html += `
                <div class="${Inspector.gridcol2Style} py-[1px]">
                  <span>content</span>
                  <textarea class="${Inspector.inputClass} normal-case" style="${Inspector.inputStyle}" oninput="Inspector.updateBlockText(this.value)">${selectedBlock ? selectedBlock.text : ''}</textarea>
                </div>
              `;
            }
          }
          // Add inputs for selectedBlock.props if available
          if (selectedBlock && selectedBlock.props) {
            Object.entries(selectedBlock.props).forEach(([key, value]) => {
              let container = '';
              let tag = selectedBlock.tag;
              let name = key;
              if (tag === 'input') {
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
                  if (name === numAttr.toLowerCase()) nodeType = "number";
                }
                for (let string of stringAttributes) {
                  if (name === string.toLowerCase()) nodeType = "text";
                }
                if (name === "value") {
                  for (let inputType of inputTypes) {
                    if (element.type === inputType.toLowerCase()) {
                      nodeType = element.type.toLowerCase();
                    }
                    if (element.type === "range") nodeType = "number";
                  }
                }

                if (name === "type") {
                  let option = '';
                  for (let string of inputTypes) {
                    option += `<option class="${Inspector.inputClass}" value="${string}" ${(value === string ? "selected" : "")}>${string}</option>`;
                  }
                  container = `<select class="${Inspector.selectClass}" style="${Inspector.selectStyle}" onchange="Inspector.updateProp('${key}', escapeHtml(this.value));">${option}</select>`;
                } else {
                  container += `<input class="${Inspector.inputClass}" style="${Inspector.inputStyle}" type="${nodeType}" value="${value}" placeholder="no value set for ${name} attribute" oninput="Inspector.updateProp('${key}', escapeHtml(this.value));">`;
                }
                
                html += `
                  <div class="${Inspector.gridcol2Style} py-[1px]">
                    <button onclick="deleteBlockProp('${data.selectedBlock.id}', '${key}')" class="${Inspector.buttonTextClass}">${key}</button>
                    ${container}
                  </div>
                `;
              } else if (tag === "img") {
                let numTypes = ["width", "height"];
                if (numTypes.includes(name)) {
                  let type = "text";
                  for (let numType of numTypes) {
                    if (name === numType) {
                      type = "number";
                    }
                  }
                  html += `
                    <div class="${Inspector.gridcol2Style} py-[1px]">
                      <button onclick="deleteBlockProp('${data.selectedBlock.id}', '${key}')" class="${Inspector.buttonTextClass}">${key}</button>
                      <input type="${type}" value="${value}" class="${Inspector.inputClass} normal-case" style="${Inspector.inputStyle}" oninput="Inspector.updateProp('${key}', escapeHtml(this.value));">
                    </div>
                  `;
                } else if (name === "src") {
                  html += `
                    <div class="${Inspector.gridcol2Style} py-[1px]">
                      <button onclick="deleteBlockProp('${data.selectedBlock.id}', '${key}')" class="${Inspector.buttonTextClass}">${key}</button>
                      <img class="cursor-pointer w-full" src="${value}" alt="Image">
                    </div>
                  `;
                } else {
                  html += `
                    <div class="${Inspector.gridcol2Style} py-[1px]">
                      <button onclick="deleteBlockProp('${data.selectedBlock.id}', '${key}')" class="${Inspector.buttonTextClass}">${key}</button>
                      ${container}
                    </div>
                  `;
                }
              } else {
                html += `
                  <div class="${Inspector.gridcol2Style} py-[1px]">
                    <button onclick="deleteBlockProp('${data.selectedBlock.id}', '${key}')" class="${Inspector.buttonTextClass}">${key}</button>
                    <input type="text" value="${value}" class="${Inspector.inputClass} normal-case" style="${Inspector.inputStyle}" oninput="Inspector.updateProp('${key}', escapeHtml(this.value));">
                  </div>
                `;
              }
            });
          }
          html += `</div>`;
        }
  
        html += `
            </div>
          </div>
        `;
      }
    });
  
    html += `</div>`; // Close the outermost div
  
    // Set the HTML content to the inspectorPanel
    inspectorPanel.innerHTML = html;
  
    // Implement additional event listeners and bindings as needed here
  }
};
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

// define functions
function resizeCanvas(size) {
  const iframe = document.getElementById('previewElm').firstElementChild;

  if (size === 'none') {
    iframe.style = `
      width: 100%;
      height: 100%;
      transform: scale(1);
      position: absolute;
      top: auto;
      left: auto;
      margin-top: 0;
      margin-left: 0;`;
  } else {
    // Calculate zoom transform based on viewport size and iframe size
    const viewportWidth = previewElm.clientWidth;
    const viewportHeight = previewElm.clientHeight;

    let [width, height] = size.split('x').map(Number);
    iframe.style = `
      width: ${width}px;
      height: ${height}px;
      transform: scale(${Math.min(viewportWidth / width, viewportHeight / height)});
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -${height / 2}px;
      margin-left: -${width / 2}px;`;
  }
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

  // update icon based upon theme
  data.themeIcon = project.dark ? moon : sun;

  // Set data-theme attribute on <html> element
  document.documentElement.setAttribute('data-theme', project.dark ? 'dark' : 'light');

  // update elements to new theme
  document.getElementById('themeIcon').setAttribute('d', data.themeIcon);
  document.querySelectorAll('[data-theme]').forEach(element => {
    if (element.tagName.toLowerCase() === 'html') return;
    let item = element.getAttribute('data-theme');
    
    switch (item) {
      case 'border':
        element.classList.toggle("border-gray-800", project.dark);
        element.classList.toggle("border-gray-200", !project.dark);
        break;
      // Add more cases for other attributes if needed
      default:
        break;
    }
  });
}
function generateId() {
  let id = '';
  while (!/^[a-zA-Z]/.test(id)) {
    id = Math.random().toString(36).substr(2, 9);
  }
  return id;
}
function togglePanel(panel) {
  const prevActivePanel = data.activePanel;
  data.activePanel = data.activePanel === panel ? null : panel;

  const panelElements = document.querySelectorAll('[data-panel]');
  if (data.activePanel) {
    if (data.activePanel === 'settings') Settings.render();
    if (data.activePanel === 'layers') {
      document.querySelector("[data-panel=layers]").innerHTML = '';
      LayerTree(project.layerStructure, "[data-panel=layers]");
    }
    if (data.activePanel === 'inspector') Inspector.render();

    if (document.querySelector('[data-panels]').classList.contains('hidden')) {
      document.querySelector('[data-panels]').classList.remove('hidden');
    }
    panelElements.forEach(element => element.classList.add('hidden'));
    document.querySelector(`[data-panel=${panel}]`).classList.remove('hidden');
} else {
    document.querySelector('[data-panels]').classList.add('hidden');
    panelElements.forEach(element => element.classList.add('hidden'));
  }
  
  // Resize the canvas if viewport changed or activePanel changed from/to null
  const iframe = document.getElementById('previewElm').firstElementChild;
  if (prevActivePanel === null || data.activePanel === null) {
    if (iframe.style.width === "100%") return false;
    const width = parseFloat(iframe.style.width);
    const height = parseFloat(iframe.style.height);
    resizeCanvas(`${width}x${height}`);
  }
}
function panelState() {
  let panel = data.activePanel;
  if (panel) {
    // if there's an active panel display panels container
    if (document.querySelector('[data-panels]').classList.contains('hidden')) {
      document.querySelector('[data-panels]').classList.remove('hidden');
    }
    if (panel === 'layers') {
      document.querySelector('[data-panel=layers]').parentElement.classList.remove('hidden');
    } else {
      document.querySelector('[data-panel=layers]').parentElement.classList.add('hidden');
    }

    // if there's an active panel display said panel
    document.querySelectorAll('[data-panel]').forEach(element => {
      let container = element.getAttribute('data-panel');
      if (panel === container) {
        if (element.classList.contains('hidden')) {
          element.classList.remove('hidden');
        }
      } else {
        element.classList.add('hidden');
      }
    });
    return false;
  } else {
    document.querySelectorAll('[data-panel]').forEach(element => {
      element.classList.add('hidden');
    });
  }
}
function handleLogoChange(event) {
  const file = event.target.files[0];
  if (!file) return; // If no file selected, return

  try {
    // Convert file to base64 string
    fileToBase64(file).then(base64String => {
      // Update project.logo with base64String
      project.logo = base64String;
      document.getElementById('projectLogo').src = base64String;
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

function LayerTree(layers, container) {
  let selectedLayerId = null;

  function a(html, parentElement) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    const element = template.content.firstChild;
    if (parentElement) {
      parentElement.appendChild(element);
    }
    return element;
  }

  // Function to render each layer recursively
  function renderLayer(layer, parentElement) {
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
          d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
      </svg>`;

    // HTML structure for each layer
    const listItem = a(`
      <li class="list-none select-none" data-id="${id}">
        <code class="p-0 flex justify-between whitespace-nowrap ${state.selected ? 'bg-blue-500 text-white' : ''}" data-layer>
          <span>
            <button 
              data-togglecollapse
              class="bg-transparent ${hasChildren ? '' : 'hidden'} border-0 p-2 text-xs transform transition-transform" style="color: unset; transform: ${state.collapsed ? 'rotate(90deg)' : 'rotate(0deg)'};">
              ${hasChildren ? arrowDown : ''}
            </button>
            <button 
              data-move
              class="bg-transparent border-0 p-2 text-xs cursor-grab" style="color: unset;">
              ${move}
            </button>
            <button 
              data-togglestate
              class="bg-transparent border-0 p-2 text-xs" style="color: unset;">
              ${isVisible ? eye : eyeSlash}
            </button>
          </span>
          <button 
            class="bg-transparent border-0 p-2 text-xs text-right capitalize" 
            style="color: unset;"
            data-name
          >
            ${name}
          </button>
        </code>
        ${hasChildren ? '<ul class="mt-1 mb-1 -ml-4"></ul>' : ''}
      </li>
    `, parentElement);

    function toggleCollapse(layer) {
      layer.state.collapsed = !layer.state.collapsed;
    };
    function toggleVisible(layer) {
      layer.state.visible = !layer.state.visible;
    };

    // Add onclick event handler to the collapse button
    listItem.querySelector('[data-togglecollapse]').onclick = function() {
      toggleCollapse(layer);
      const ulElement = this.closest('li').querySelector('ul');
      this.style.transform = layer.state.collapsed ? 'rotate(-90deg)' : 'rotate(0deg)';
      ulElement.classList.toggle('hidden', layer.state.collapsed);
    };

    // Add onclick event handler to the state button
    listItem.querySelector('[data-togglestate]').onclick = function() {
      toggleVisible(layer);
      this.innerHTML = layer.state.visible ? eye : eyeSlash;
      renderPreview(project.styles, project.layerStructure);
    };

    // Handle click on layer name
    listItem.querySelector('[data-name]').onclick = function() {
      // Deselect previously selected layer
      if (selectedLayerId !== null) {
        const previouslySelected = document.querySelector(`[data-id="${selectedLayerId}"]`);
        if (previouslySelected) {
          previouslySelected.querySelector('[data-layer]').classList.remove('bg-blue-500', 'text-white');
          // Update the state of the previously selected layer
          const previouslySelectedLayer = findLayerById(layers, selectedLayerId).layer;
          if (previouslySelectedLayer) {
            previouslySelectedLayer.state.selected = false;
          }
        }
      }

      // Select current layer
      state.selected = true;
      selectedLayerId = id;
      data.selectedBlock = layer;

      // Update the UI for the selected layer only
      this.closest('code').classList.add('bg-blue-500', 'text-white');

      // Update layers and the inspector UI
      // LayerTree(project.layerStructure, "[data-panel=layers]");
      Inspector.render();
    };

    // Render children recursively
    if (hasChildren) {
      const ulElement = listItem.querySelector('ul');
      children.forEach(child => renderLayer(child, ulElement));
    }

    return listItem;
  }

  // Get the container element
  const containerElement = document.querySelector(container);
  if (!containerElement) {
    console.error(`Container element "${container}" not found.`);
    return;
  }

  // Clear existing content in the container
  containerElement.innerHTML = '';

  // Call renderLayer for each layer in the layers array
  layers.forEach(layer => renderLayer(layer, containerElement));

  // Initialize SortableJS on the container element
  const initializeSortable = element => {
    new Sortable(element, {
      group: 'shared', // Enable moving items between containers
      handle: '[data-move]',
      animation: 150,
      fallbackOnBody: true,
      swapThreshold: 0.65,
      onEnd: (evt) => {
        const oldIndex = evt.oldIndex;
        const newIndex = evt.newIndex;
        const movedLayerId = evt.item.dataset.id;

        // Find old and new parent layers
        const { layer: oldParentLayer } = findLayerById(layers, evt.from.closest('li') ? evt.from.closest('li').dataset.id : null);
        const { layer: newParentLayer } = findLayerById(layers, evt.to.closest('li') ? evt.to.closest('li').dataset.id : null);

        if (!oldParentLayer || !newParentLayer) {
          console.error('Layer not found');
          return;
        }

        // Update the layer structure
        layers = updateLayerStructure(layers, oldIndex, newIndex, oldParentLayer, newParentLayer, movedLayerId);

        // Log the updated layers for debugging
        console.log('Updated layers:', layers);

        // Update the preview
        renderPreview(project.styles, project.layerStructure);

        // Log the updated preview for debugging
        console.log('Updated preview:', document.querySelector(container));
      }
    });
  };

  // Function to find the layer by ID recursively
  function findLayerById(layers, id) {
    for (const layer of layers) {
      if (layer.id === id) {
        return { layer, parent: null };
      }
      if (layer.children) {
        const result = findLayerById(layer.children, id);
        if (result.layer) {
          return { layer: result.layer, parent: layer };
        }
      }
    }
    return { layer: null, parent: null }; // Handle case where layer is not found
  }

  // Function to update the layer structure after sorting
  function updateLayerStructure(layers, oldIndex, newIndex, oldParent, newParent, movedLayerId) {
    const { layer: movedLayer, parent: movedLayerParent } = findLayerById(layers, movedLayerId);

    // Generate a new ID for the moved layer (if necessary)
    const newId = generateId();

    // Ensure the new parent has a children array
    if (!newParent.children) {
      newParent.children = [];
    }

    // Remove the layer from its old position
    if (movedLayerParent) {
      movedLayerParent.children.splice(oldIndex, 1);
    } else {
      layers.splice(oldIndex, 1);
    }

    // Create a copy of the moved layer with the new ID
    const movedLayerCopy = { ...movedLayer, id: newId };

    // Add the copied layer to its new position
    if (newParent) {
      newParent.children.splice(newIndex, 0, movedLayerCopy);
    } else {
      layers.splice(newIndex, 0, movedLayerCopy);
    }

    return layers;
  }

  // Initialize SortableJS for the main container
  initializeSortable(containerElement);

  // Initialize SortableJS for nested containers
  containerElement.querySelectorAll('ul').forEach(ul => initializeSortable(ul));
}
function handleStyleInput(inputElement, styleProperty, styleId) {
  // Get the value entered by the user
  let value = inputElement.value;
  project.styles.common[styleId][styleProperty] = value;

  // render preview
  renderPreview(project.styles, project.layerStructure);
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
function renderElementTree(elements) {
  const renderElement = element => {
    let html = '';
    
    // Skip rendering if element is not visible
    if (!element.state.visible) {
      return html;
    }
    
    if (!element.tag) {
      html += element.text || '';
      return html;
    }
  
    html += `<${element.tag}`;
  
    // Process styles
    let classList = '';
    if (element.styles) {
      classList += `${element.styles}`;
      if ((element.variant)) {
        classList += `-${element.variant}`;
      }
      // html += ` class="${classList}"`;
    }
      
    if (!element.props) {
      element.props = {};
      if (!element.props.class) {
        element.props.class = `${classList}`;
      }
    }
    if (element.props) {
      if (!element.props.class) {
        element.props.class = `${classList}`;
      }
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
  if (Array.isArray(elements)) {
    elements.forEach(element => {
      html += renderElement(element);
    });
  }
  return html;
}
function renderPreview(css, json) {
  let resetCss = `/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,::after,::before{box-sizing:border-box}html{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji'}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,'Liberation Mono',Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}body{font-family:inherit;line-height:inherit}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:-moz-focusring{outline:auto}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}`;
  if (!project.cssreset) resetCss = '';

  const iframe = document.getElementById("s6bnahb1h");
  if (iframe) {
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    if (iframeDocument) {
      // Get elements
      const titleElement = iframeDocument.querySelector('title');
      const metaDescription = iframeDocument.querySelector('meta[name="description"]');
      const metaAuthor = iframeDocument.querySelector('meta[name="author"]');
      const styleElement = iframeDocument.querySelector('style#ch5tjy3i9');

      // Update HTML attributes
      iframeDocument.documentElement.setAttribute('data-theme', project.dark ? 'dark' : 'light');

      // Update title
      if (titleElement) {
        if (project.title != titleElement.textContent) {
          titleElement.textContent = project.title;
          return false;
        }
      }

      // Update meta tags
      if (metaDescription) {
        if (project.description != metaDescription.getAttribute('content')) {
          metaDescription.setAttribute('content', project.description);
          return false;
        }
      }

      if (metaAuthor) {
        if (project.author != metaAuthor.getAttribute('content')) {
          metaAuthor.setAttribute('content', project.author);
          return false;
        }
      }

      // Update CSS
      if (styleElement) {
        // Add css reset only if enabled
        if (!project.cssreset) resetCss = '';
        if (`${resetCss}${this.renderStyles(project.styles, true)}` != styleElement.textContent) {
          styleElement.textContent = `${resetCss}${this.renderStyles(css, true)}`;
          return false;
        }
      }

      // Update body content dynamically (if needed)
      const bodyElement = iframeDocument.body;
      if (bodyElement) {
        // Recursive function to find element by ID in layerStructure and corresponding HTML node
        function findElement(layerStructure, id, parentNode, returnHTML = true) {
          for (let i = 0; i < layerStructure.length; i++) {
            const element = layerStructure[i];
            const htmlNode = parentNode.children[i];

            if (element.id === id) {
              if (returnHTML) {
                return htmlNode;
              } else {
                return element;
              }
              return false;
            }

            if (element.children && element.children.length > 0) {
              const found = findElement(element.children, id, htmlNode);
              if (found) {
                return found; // Return the corresponding HTML node if found in children
              }
            }
          }
          return null; // Return null if no matching element is found
        }

        function updateAttributes(jsonElement, htmlElement) {
          // Remove attributes that are present on the HTML element but not in the JSON
          const currentAttributes = htmlElement.getAttributeNames();
          for (const attr of currentAttributes) {
            if (!(attr in jsonElement.props)) {
              htmlElement.removeAttribute(attr);
            }
          }
        
          // Update or add attributes from the JSON
          if (jsonElement.props) {
            for (const [key, value] of Object.entries(jsonElement.props)) {
              const currentProp = htmlElement.getAttribute(key);
              if (currentProp !== value) {
                htmlElement.setAttribute(key, value);
              }
            }
          }
        
          // Compare and update text content
          if (jsonElement.text !== undefined && htmlElement.textContent !== jsonElement.text) {
            htmlElement.textContent = jsonElement.text;
          }
        }        

        if (data.selectedBlock) {
          const jsonID = data.selectedBlock.id;
          const selectedElement = findElement(json, jsonID, bodyElement, true);
  
          // compare text and attributes
          updateAttributes(data.selectedBlock, selectedElement);
        }
        return false;
      }
    }
  }
}
function deleteFromPreview(id) {
  const json = project.layerStructure;
  const iframe = document.getElementById("s6bnahb1h");
  if (iframe) {
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    if (iframeDocument) {
      const bodyElement = iframeDocument.body;
      if (bodyElement) {
        // Recursive function to find element by ID in layerStructure and corresponding HTML node
        function findElement(layerStructure, id, parentNode, returnHTML = true) {
          for (let i = 0; i < layerStructure.length; i++) {
            const element = layerStructure[i];
            const htmlNode = parentNode.children[i];

            if (element.id === id) {
              if (returnHTML) {
                return htmlNode;
              } else {
                return element;
              }
              return false;
            }

            if (element.children && element.children.length > 0) {
              const found = findElement(element.children, id, htmlNode);
              if (found) {
                return found; // Return the corresponding HTML node if found in children
              }
            }
          }
          return null; // Return null if no matching element is found
        }
        const jsonID = data.selectedBlock.id;
        const selectedElement = findElement(json, jsonID, bodyElement, true);
        selectedElement.remove();
      }
    }
  }
}
function beautifyHtml(json) {
  const html = renderElementTree(json);
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
function collectUsedStyles(elements, usedStyles = new Set()) {
  elements.forEach(element => {
    if (element.styles) {
      usedStyles.add(element.styles);
    }
    if (element.variant) {
      usedStyles.add(element.variant);
    }
    if (element.children) {
      collectUsedStyles(element.children, usedStyles);
    }
  });
  return usedStyles;
}
function renderStyles(styles, min = false) {
  if (!styles.common) return false;
  let css = '';
  const usedStyles = collectUsedStyles(project.layerStructure);

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
function fetchResources(project) {
  const clonedLayerStructure = JSON.parse(JSON.stringify(project.layerStructure));
  const cssContent = JSON.parse(JSON.stringify(project.styles));

  const imageUrls = [];
  const audioUrls = [];
  const videoUrls = [];

  // Extract media URLs and clone layerStructure with media sources
  const extractMediaUrls = layers => {
    layers.forEach((layer) => {
      if (layer.tag === 'img' && layer.props && layer.props.src) {
        imageUrls.push(layer.props.src);
        const fileInfo = this.getFileNameAndType(layer.props.src);
        layer.props.src = `imgs/${fileInfo.fileName}`;
      } else if (layer.tag === 'audio' && layer.children) {
        layer.children.forEach((source) => {
          if (source.tag === 'source' && source.props && source.props.src) {
            audioUrls.push(source.props.src);
            const fileInfo = this.getFileNameAndType(source.props.src);
            source.props.src = `audios/${fileInfo.fileName}`;
          }
        });
      } else if (layer.tag === 'video' && layer.children) {
        layer.children.forEach((source) => {
          if (source.tag === 'source' && source.props && source.props.src) {
            videoUrls.push(source.props.src);
            const fileInfo = this.getFileNameAndType(source.props.src);
            source.props.src = `vids/${fileInfo.fileName}`;
          }
        });
      }
      if (layer.children) {
        extractMediaUrls(layer.children);
      }
    });
  };

  extractMediaUrls(clonedLayerStructure);
  
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
    videoUrls,
    cssContent,
    clonedLayerStructure
  };
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

function newProject() {
  // Ask user for confirmation
  // const confirmed = window.confirm("Are you sure you want to start a new project? All current data will be lost.");
  // if (!confirmed) return;

  Modal.render({
    title: "Are you sure you want to start a new project?",
    content: `<div class="p-4 text-center">All current data will be lost.</div>`,
    onConfirm: function() {
      if (data.activePanel) togglePanel(data.activePanel)
    
      // reset project file
      project = {
        name: "App name",
        version: 0.01,
        title: "A Title",
        description: "Some description",
        author: "AppBuilder",
        url: "https://michaelsboost.com/",
        meta: "",
        styles: {},
        layerStructure: [],
        scratchpad: "",
        logo: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iNTEyIgogICBoZWlnaHQ9IjUxMiIKICAgdmlld0JveD0iMCAwIDEzNS40NjY2NiAxMzUuNDY2NjciCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzEiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnMKICAgICBpZD0iZGVmczEiIC8+PGcKICAgICBpZD0iZzI0Ij48cGF0aAogICAgICAgaWQ9InBhdGgyMiIKICAgICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOiMxMzNhZDQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjk2LjE3NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiCiAgICAgICBkPSJNIDkuNTgyODc3NSw2Ny43MzMzMzIgViAxMzUuMjAwNTMgTCAyNS4zODc1OTcsMTI2LjAzMTA3IFYgMTA2Ljk2MDQgNjcuNzMzMzMyIFogbSA4NS45Njg5MTE1LDAgLTU3Ljc2OTA4MywzMi4yOTcyNTggdiAxOC44MTA3MyBMIDEyNS44ODIyNCw2Ny43MzMzMzIgWiIgLz48cGF0aAogICAgICAgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2ZpbGw6IzA0YTJmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MTQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIgogICAgICAgaWQ9InBhdGgyMyIKICAgICAgIGQ9Im0gNDkuNTY4NTI3LDM1LjgxOTU1MyAtMTYuOTcwNDc4LDkuNzk3OTEgMCwtMTkuNTk1ODIgeiIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDIuMjE3MjY1MiwwLDAsMi4xNDcwMjkzLC0zNC40OTUyNjksLTkuMjYyMTYyKSIgLz48cGF0aAogICAgICAgaWQ9InBhdGgyNCIKICAgICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOiM4NjAwZWY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjk2LjE3NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiCiAgICAgICBkPSJNIDkuNTgyODc3NSwwLjI2NjEzMzYyIFYgNjcuNzMzMzMyIEggMjUuMzg3NTk3IFYgNDIuODU2ODE1IDI4LjMyNjk1MyBsIDcwLjMyNTkzOSwzOS4zMTU5NDYgLTAuMTYxNzQ3LDAuMDkwNDMgaCAzMC4zMzA0NTEgbCAwLjAwMiwtMC4wMDEgeiIgLz48L2c+PC9zdmc+Cg==",
        pwa: false,
        cssreset: true,
        dark: true
      };
      
      // render layers and preview
      const iframe = document.getElementById("s6bnahb1h");
      iframe.title = project.title;
      let resetCss = `/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,::after,::before{box-sizing:border-box}html{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji'}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,'Liberation Mono',Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}body{font-family:inherit;line-height:inherit}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:-moz-focusring{outline:auto}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}`;
      iframe.setAttribute('srcdoc', `<!DOCTYPE html>
          <html data-theme="${project.dark ? 'dark' : 'light'}">
            <head>
              <title>${project.title}</title>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
              <meta name="description" content="${project.description}">
              <meta name="author" content="${project.author}">
              ${project.meta ? `${project.meta}\n          ` : ''}<style id="ch5tjy3i9">${resetCss}${renderStyles(project.styles, true)}</style>
            </head>
            <body id="yg0zuaywm">
              ${renderElementTree(project.layerStructure)}
            </body>
          </html>`);
    
      // reset elements
      document.getElementById("s6bnahb1h").setAttribute('src', project.logo); // reset logo
      document.getElementById("o14tigo4m").checked = project.cssreset;
      document.querySelector('[data-panel=layers]').innerHTML = '';
      Settings.render();
    }
  });
}
function importProject() {
  // Ask user for confirmation
  // const confirmed = window.confirm("Are you sure you want to load a new project? All current data will be lost.");
  // if (!confirmed) return;
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
            project = {...project, ...importedData};
    
            // Reset data
            const iframe = document.getElementById("s6bnahb1h");
            iframe.title = project.title;
            document.getElementById("s6bnahb1h").setAttribute('src', project.logo); // reset logo
            document.getElementById("o14tigo4m").checked = project.cssreset;
            renderPreview(project.styles, project.layerStructure);
            document.querySelector('[data-panel=layers]').innerHTML = '';
            LayerTree(project.layerStructure, "[data-panel=layers]");
            Settings.render();
    
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
async function downloadProject() {
  let { imageUrls, audioUrls, videoUrls, cssContent, clonedLayerStructure } = fetchResources(project);
  
  const zip = new JSZip();

  // Project file
  zip.file(`${project.name.split(' ').join('').toLowerCase()}-AppBuilder.json`, JSON.stringify(project, null, 2));

let licenseStr = `The MIT License (MIT)
Copyright (c) ${new Date().getFullYear()} John Doe

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

Welcome to your new website built with AppBuilder, the **Free Mobile Website Builder!** 

## About AppBuilder

AppBuilder allows you to create awesome responsive websites quickly and easily, without any coding required. It's free for commercial use, so you can use it to create professional websites for your business, portfolio, or any other purpose.

## Website Overview

${project.description}

### Technologies Used
- **HTML**
- **CSS**
- **Created with AppBuilder Website Builder**

## How to Update Your Website

To update your website, simply load in the project.json file included in the export of your project's zip file into AppBuilder and use the app to make changes as needed and export as initially done before.

## Support

If you need help or have any questions, please visit our [Website](https://michaelsboost.com/AppBuilder/).

## License

This website is created using AppBuilder and is free for personal and commercial use and is licensed under the MIT license agreement.

---

Thank you for using AppBuilder!

[AppBuilder - Free Mobile Website Builder](https://michaelsboost.com/AppBuilder/)`;
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
  zip.file('css/style.min.css', `${resetCssContent}${renderStyles(cssContent, true)}`);
  zip.file('css/style.css', `${resetCssContent}

${renderStyles(cssContent, false)}`);

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
    <link rel="stylesheet" href="css/style.css">
    ${project.meta ? `${project.meta}\n  ` : ''}</head>
  <body>

${beautifyHtml(clonedLayerStructure)}
${(project.pwa ? swinit : '')}
  </body>
</html>`;
  zip.file('index.html', indexHtmlContent);

  // Create a folder "imgs" and add images inside it with their correct MIME types
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
      clonedLayerStructure.length = 0;
      cssContent = {};
    })
    .catch(err => console.error('Error creating ZIP:', err));
}
function share() {
  let resetCss = `/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,::after,::before{box-sizing:border-box}html{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji'}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,'Liberation Mono',Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}body{font-family:inherit;line-height:inherit}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:-moz-focusring{outline:auto}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}`;
  
  const project = {
    title: project.title,
    description: project.description,
    head: project.meta,
    html: beautifyHtml(project.layerStructure),
    html_pre_processor : "none",
    css: `${resetCss}\n\n${renderStyles(project.styles, false)}`,
    css_pre_processor : "none",
    css_starter: "neither",
    css_prefix: "neither",
    editors: '110',
    layout: 'left'
  };

  // Stringify the JSON object and escape quotes
  const JSONstring = JSON.stringify(project)
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

// Inspector functions
function deleteStyle(id, key) {
  // Search through the styles object to find the style with the specified id
  for (const category in project.styles) {
    if (Object.prototype.hasOwnProperty.call(project.styles, category)) {
      const categoryStyles = project.styles[category];
      if (id in categoryStyles) {
        const style = categoryStyles[id];
        // Check if the style has the key to be deleted
        if (key in style) {
          Modal.render({
            title: `Are you sure you want to delete ${key}?`,
            onConfirm: function() {
              // Delete the style key
              delete style[key];
              Inspector.render();
              renderPreview(project.styles, project.layerStructure);
              console.log(`Deleted ${key} from style ${id}`);
            }
          });
          return; // Exit the function after rendering the modal
        } else {
          console.log(`Key ${key} not found in style ${id}`);
          return;
        }
      }
    }
  }
  console.log(`Style with id ${id} not found`);
}
function deleteStyleDepth(id, breakpoint, state, key) {
  // Search through the styles object to find the style with the specified id
  for (const category in project.styles) {
    if (Object.prototype.hasOwnProperty.call(project.styles, category)) {
      const categoryStyles = project.styles[category];
      if (id in categoryStyles) {
        const style = categoryStyles[id];

        // Check if breakpoint is specified and exists
        if (breakpoint && 'breakpoints' in style && breakpoint in style['breakpoints']) {
          const breakpointStyle = style['breakpoints'][breakpoint];

          // Check if state is specified and exists
          if (state && state in breakpointStyle && key in breakpointStyle[state]) {
            deleteStyleHelper(breakpointStyle[state], key);
            return;
          } else if (state && !(state in breakpointStyle)) {
            console.log(`State ${state} not found at breakpoint ${breakpoint}`);
            return;
          } else if (!state) { // No state specified, delete from breakpoint directly
            deleteStyleHelper(breakpointStyle, key);
            return;
          }
        }

        // Check if state is specified and exists in main style
        if (state && state in style && key in style[state]) {
          deleteStyleHelper(style[state], key);
          return;
        } else if (state && !(state in style)) {
          console.log(`State ${state} not found in style ${id}`);
          return;
        } else if (!state) { // No state specified, delete from main style directly
          deleteStyleHelper(style, key);
          return;
        }

        // If style, breakpoint, or state not found
        console.log(`Style with id ${id}, breakpoint ${breakpoint}, state ${state} not found`);
        return;
      }
    }
  }
  console.log(`Style with id ${id} not found`);

  function deleteStyleHelper(styleObj, keyToDelete) {
    // Check if the key exists in the style object
    if (keyToDelete in styleObj) {
      Modal.render({
        title: `Are you sure you want to delete ${keyToDelete} from ${state || 'style'}${breakpoint ? ` at ${breakpoint} breakpoint` : ''}?`,
        onConfirm: function() {
          // Delete the key from the style object
          delete styleObj[keyToDelete];
          renderPreview(project.styles, project.layerStructure);
          console.log(`Deleted ${keyToDelete} from ${state || 'style'}${breakpoint ? ` at ${breakpoint} breakpoint` : ''}`);
        }
      });
    } else {
      console.log(`Key ${keyToDelete} not found in ${state || 'style'}${breakpoint ? ` at ${breakpoint} breakpoint` : ''}`);
    }
  }
}
function deleteStyleId(id) {
  // Search through the styles object to find the style with the specified id
  for (const category in project.styles) {
    if (Object.prototype.hasOwnProperty.call(project.styles, category)) {
      const categoryStyles = project.styles[category];
      if (id in categoryStyles) {
        Modal.render({
          title: `Are you sure you want to delete the style ${id}?`,
          onConfirm: function() {
            // Delete the style id from the categoryStyles object
            delete categoryStyles[id];
            delete data.selectedBlock.styles;
            Inspector.render();
            renderPreview(project.styles, project.layerStructure);
            console.log(`Deleted style ${id}`);
          }
        });
        return; // Exit the function after rendering the modal
      }
    }
  }
  console.log(`Style with id ${id} not found`);
}
function deleteBlockId(id, parentArray = project.layerStructure) {
  for (let i = 0; i < parentArray.length; i++) {
    const block = parentArray[i];
    if (block.id === id) {
      Modal.render({
        title: `Are you sure you want to delete the block ${id}?`,
        onConfirm: function() {
          // Delete block from preview
          deleteFromPreview(id);
          // Delete the block from the parent array
          parentArray.splice(i, 1);
          data.selectedBlock = null;
          Inspector.render();
          console.log(`Deleted block ${id}`);
        }
      });
      return; // Exit the function after rendering the modal
    }
    // Recursively search in children arrays if present
    if (block.children && block.children.length > 0) {
      deleteBlockId(id, block.children);
    }
  }
  console.log(`Block with id ${id} not found`);
}
function deleteBlockProp(id, prop, parentArray = project.layerStructure) {
  for (let i = 0; i < parentArray.length; i++) {
    const block = parentArray[i];
    if (block.id === id) {
      if (block.props && block.props[prop] !== undefined) {
        Modal.render({
          title: `Are you sure you want to delete the property ${prop}?`,
          onConfirm: function() {
            // Delete the property from the block
            delete block.props[prop];
            Inspector.render();
            renderPreview(project.styles, project.layerStructure);
            console.log(`Deleted property ${prop} from block ${id}`);
          }
        });
        return; // Exit the function after rendering the modal
      } else {
        console.log(`Property ${prop} not found in block ${id}`);
      }
    }
    // Recursively search in children arrays if present
    if (block.children && block.children.length > 0) {
      deleteBlockProp(id, prop, block.children);
    }
  }
  console.log(`Block with id ${id} not found`);
}

// once dom has loaded init functions
document.addEventListener('DOMContentLoaded', function() {
  // Initialize and render settings and inspector components
  LeftMenubar.render();
  PreviewMenu.render();
  // PreviewMenu.render(true);
  // deleteStyle('drh4elj4d');
  // deleteBlockId('drh4elj4d');
  // deleteBlockProp('drh4elj4d', 'aria-label');
  // Modal.render({
  //   title: "Change Image Source",
  //   content: `
  //   <div class="p-4 text-center">
  //     <input id="file" type="file">
  //     <input id="search" type="search" placeholder="Search query here...">
  //     <div id="searchresults" class="grid grid-cols-2">
  //       <img class="cursor-pointer" src="imgs/image.webp" alt="Image">
  //     </div>
  //   </div>
  //   `,
  //   onLoad: function() {
      
  //   },
  //   onConfirm: function() {
      
  //   }
  // });

  // init functions
  panelState();

  // render layers and preview
  let cssReset = `/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,::after,::before{box-sizing:border-box}html{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji'}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,'Liberation Mono',Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}body{font-family:inherit;line-height:inherit}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:-moz-focusring{outline:auto}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}`;
  if (!project.cssreset) cssReset = '';
  const iframe = document.getElementById("s6bnahb1h");
  iframe.title = project.title;
  iframe.setAttribute('srcdoc', `<!DOCTYPE html>
      <html data-theme="${project.dark ? 'dark' : 'light'}">
        <head>
          <title>${project.title}</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta name="description" content="${project.description}">
          <meta name="author" content="${project.author}">
          ${project.meta ? `${project.meta}\n          ` : ''}<style id="ch5tjy3i9">${cssReset}${renderStyles(project.styles, true)}</style>
        </head>
        <body id="yg0zuaywm">
          ${renderElementTree(project.layerStructure)}
        </body>
      </html>`);
});