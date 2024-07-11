function App() {
  return {
    app: {
      name: 'Polyrise',
      author: {
        name: 'Michael Schwartz',
        href: 'https://michaelsboost.com/',
        src: '../imgs/author.jpg'
      },
      version: '0.0.3',
      url: 'https://github.com/michaelsboost/Polyrise/tree/gh-pages',
      license: 'https://github.com/michaelsboost/Polyrise/blob/gh-pages/LICENSE'
    },
    project: {
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
    },
    data: {
      colors: {
        text: "text-[#fff]",
        border: "border-gray-800"
      },
      activePanel: 'layers',
      layerStructure: [
        {
          "tag": "header",
          "type": "box",
          "name": "box",
          "id": "wnl0mxhml",
          "state": {
            "collapsed": false,
            "visible": true,
            "selected": false
          },
          "props": {
            "class": "p4dmvkj5v"
          },
          "children": [
            {
              "tag": "hgroup",
              "type": "box",
              "name": "box",
              "id": "xw0wqhizc",
              "state": {
                "collapsed": false,
                "visible": true,
                "selected": false
              },
              "props": {
                "class": "w78d2h"
              },
              "children": [
                {
                  "tag": "h1",
                  "type": "text",
                  "name": "text",
                  "id": "orfik88na",
                  "state": {
                    "collapsed": false,
                    "visible": true,
                    "selected": false
                  },
                  "props": {
                    "class": "n6zv2tuar"
                  },
                  "children": [],
                  "text": "App name"
                },
                {
                  "tag": "h2",
                  "type": "text",
                  "name": "text",
                  "id": "lzsntwjt3",
                  "state": {
                    "collapsed": false,
                    "visible": true,
                    "selected": false
                  },
                  "props": {
                    "class": "xqkuxhejp"
                  },
                  "children": [],
                  "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusantium rem sint voluptatum quisquam cum. Nostrum dolorum alias doloribus quod accusantium odit vero dolor excepturi cumque mollitia? Laboriosam, dolore rem!"
                }
              ]
            }
          ]
        },
        {
          "tag": "main",
          "type": "box",
          "name": "box",
          "id": "o03yq4tqx",
          "state": {
            "collapsed": false,
            "visible": true,
            "selected": false
          },
          "props": {
            "class": "p4dmvkj5v"
          },
          "children": [
            {
              "tag": "figure",
              "type": "box",
              "name": "box",
              "id": "ary2rnlid",
              "state": {
                "collapsed": false,
                "visible": true,
                "selected": false
              },
              "children": [
                {
                  "tag": "img",
                  "type": "img",
                  "name": "img",
                  "id": "o4cwkc0zb",
                  "state": {
                    "collapsed": false,
                    "visible": true,
                    "selected": false
                  },
                  "props": {
                    "class": "cc7uwye7i",
                    "src": "imgs/image.webp",
                    "alt": "Polyrise"
                  }
                },
                {
                  "tag": "figcaption",
                  "type": "box",
                  "name": "box",
                  "id": "t57ciu00f",
                  "state": {
                    "collapsed": false,
                    "visible": true,
                    "selected": false
                  },
                  "children": [
                    {
                      "tag": "a",
                      "type": "text",
                      "name": "text",
                      "id": "u50q0cuz9",
                      "state": {
                        "collapsed": false,
                        "visible": true,
                        "selected": false
                      },
                      "props": {
                        "href": "https://michaelsboost.com/Polyrise/",
                        "target": "_blank"
                      },
                      "children": [],
                      "text": "michaelsboost.com/Polyrise"
                    }
                  ],
                  "text": "Image from"
                }
              ]
            }
          ]
        },
        {
          "tag": "footer",
          "type": "box",
          "name": "box",
          "id": "oq80xzl22",
          "state": {
            "collapsed": false,
            "visible": true,
            "selected": false
          },
          "props": {
            "class": "p4dmvkj5v"
          },
          "children": [
            {
              "tag": "div",
              "type": "box",
              "name": "box",
              "id": "mr17ruy9z",
              "state": {
                "collapsed": false,
                "visible": true,
                "selected": false
              },
              "props": {
                "style": "text-align: center;",
                "class": "aofdknf1r"
              },
              "children": [
                {
                  "tag": "button",
                  "type": "text",
                  "name": "text",
                  "id": "g3lo48p9t",
                  "state": {
                    "collapsed": false,
                    "visible": true,
                    "selected": false
                  },
                  "props": {
                    "class": "h30v6g"
                  },
                  "children": [],
                  "text": "Button"
                },
                {
                  "tag": "button",
                  "type": "text",
                  "name": "text",
                  "id": "r6n04ai06",
                  "state": {
                    "collapsed": false,
                    "visible": true,
                    "selected": false
                  },
                  "props": {
                    "class": "tv2rf2xx3"
                  },
                  "children": [],
                  "text": "Button"
                }
              ]
            },
            {
              "tag": "div",
              "type": "box",
              "name": "box",
              "id": "kjhl79ngo",
              "state": {
                "collapsed": false,
                "visible": true,
                "selected": false
              },
              "props": {
                "style": "text-align: center;",
                "class": "aofdknf1r"
              },
              "children": [
                {
                  "tag": "figure",
                  "type": "box",
                  "name": "box",
                  "id": "euwe2fuzp",
                  "state": {
                    "collapsed": false,
                    "visible": true,
                    "selected": false
                  },
                  "children": [
                    {
                      "tag": "audio",
                      "type": "audio",
                      "name": "audio",
                      "id": "bsg4rc8va",
                      "state": {
                        "collapsed": false,
                        "visible": true,
                        "selected": false
                      },
                      "props": {
                        "controls": "",
                        "style": "margin: auto;"
                      },
                      "children": [
                        {
                          "tag": "source",
                          "type": "source",
                          "name": "source",
                          "id": "q7q91suuk",
                          "state": {
                            "collapsed": false,
                            "visible": true,
                            "selected": false
                          },
                          "props": {
                            "src": "media/sound.mp3",
                            "type": "audio/mpeg"
                          }
                        }
                      ],
                      "text": "Your browser does not support the audio element."
                    },
                    {
                      "tag": "figcaption",
                      "type": "box",
                      "name": "box",
                      "id": "b5eavx1b0",
                      "state": {
                        "collapsed": false,
                        "visible": true,
                        "selected": false
                      },
                      "children": [
                        {
                          "tag": "a",
                          "type": "text",
                          "name": "text",
                          "id": "rok8jiqbm",
                          "state": {
                            "collapsed": false,
                            "visible": true,
                            "selected": false
                          },
                          "props": {
                            "href": "https://pixabay.com/sound-effects/ding-47489/",
                            "target": "_blank"
                          },
                          "children": [],
                          "text": "pixabay.com"
                        }
                      ],
                      "text": "Audio from"
                    }
                  ]
                },
                {
                  "tag": "figure",
                  "type": "box",
                  "name": "box",
                  "id": "qe5fi07hy",
                  "state": {
                    "collapsed": false,
                    "visible": true,
                    "selected": false
                  },
                  "children": [
                    {
                      "tag": "video",
                      "type": "video",
                      "name": "video",
                      "id": "hhct870ab",
                      "state": {
                        "collapsed": false,
                        "visible": true,
                        "selected": false
                      },
                      "props": {
                        "controls": ""
                      },
                      "children": [
                        {
                          "tag": "source",
                          "type": "source",
                          "name": "source",
                          "id": "kn8zxnor3",
                          "state": {
                            "collapsed": false,
                            "visible": true,
                            "selected": false
                          },
                          "props": {
                            "src": "media/movie.mp4",
                            "type": "video/mp4"
                          }
                        }
                      ],
                      "text": "Your browser does not support the video tag."
                    },
                    {
                      "tag": "figcaption",
                      "type": "box",
                      "name": "box",
                      "id": "to0merpou",
                      "state": {
                        "collapsed": false,
                        "visible": true,
                        "selected": false
                      },
                      "children": [
                        {
                          "tag": "a",
                          "type": "text",
                          "name": "text",
                          "id": "qtx7rq2x1",
                          "state": {
                            "collapsed": false,
                            "visible": true,
                            "selected": false
                          },
                          "props": {
                            "href": "https://pixabay.com/videos/turtle-ocean-sea-animal-35427/",
                            "target": "_blank"
                          },
                          "children": [],
                          "text": "pixabay.com"
                        }
                      ],
                      "text": "Video from"
                    }
                  ]
                },
                {
                  "tag": "svg",
                  "type": "svg",
                  "name": "svg",
                  "id": "kppvn4o5p",
                  "state": {
                    "collapsed": false,
                    "visible": true,
                    "selected": false
                  },
                  "props": {
                    "viewBox": "0 0 135.46666 135.46667"
                  },
                  "children": [
                    {
                      "tag": "g",
                      "type": "g",
                      "name": "g",
                      "id": "n4q8xjcew",
                      "state": {
                        "collapsed": false,
                        "visible": true,
                        "selected": false
                      },
                      "children": [
                        {
                          "tag": "path",
                          "type": "path",
                          "name": "path",
                          "id": "q5yfe7cn1",
                          "state": {
                            "collapsed": false,
                            "visible": true,
                            "selected": false
                          },
                          "props": {
                            "fill": "#133ad4",
                            "stroke-width": "96.174",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "d": "M 9.5828775,67.733332 V 135.20053 L 25.387597,126.03107 V 106.9604 67.733332 Z m 85.9689115,0 -57.769083,32.297258 v 18.81073 L 125.88224,67.733332 Z"
                          }
                        },
                        {
                          "tag": "path",
                          "type": "path",
                          "name": "path",
                          "id": "ur1yrluse",
                          "state": {
                            "collapsed": false,
                            "visible": true,
                            "selected": false
                          },
                          "props": {
                            "fill": "#04a2ff",
                            "stroke-width": "14",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "d": "m 49.568527,35.819553 -16.970478,9.79791 0,-19.59582 z",
                            "transform": "matrix(2.2172652,0,0,2.1470293,-34.495269,-9.262162)"
                          }
                        },
                        {
                          "tag": "path",
                          "type": "path",
                          "name": "path",
                          "id": "bnyelg7p1",
                          "state": {
                            "collapsed": false,
                            "visible": true,
                            "selected": false
                          },
                          "props": {
                            "fill": "#8600ef",
                            "stroke-width": "96.174",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "d": "M 9.5828775,0.26613362 V 67.733332 H 25.387597 V 42.856815 28.326953 l 70.325939,39.315946 -0.161747,0.09043 h 30.330451 l 0.002,-0.001 z"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      selectedSize: 'none',
      sizeOptions: {
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
      },
      iframeStyles: "width: 100%; height: 100%;",
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
    },
    icons: {
      sun: "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z",
      moon: "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z",
      arrowDown: `<svg class='w-3' viewBox='0 0 576 512' style='color: unset;'>
      <path 
        fill='currentColor' 
        d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'/>
    </svg>`,
      move: `<svg class="w-3" viewBox="0 0 512 512" style="color: unset;">
        <path 
          fill="currentColor" 
          d="M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h32v96H128V192c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V288h96v96H192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H288V288h96v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6v32H288V128h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z"/>
      </svg>`,
      eye: `<svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
        <path 
          fill="currentColor" 
          d="M572.52,241.4c-1.5-1.8-38.5-46-93.94-90.67C417.8,111.16,358.8,85.33,288,85.33S158.2,111.16,97.42,150.72C41.98,195.4,4.98,239.6,3.48,241.4A32,32,0,0,0,0,256a32,32,0,0,0,3.48,14.6c1.5,1.8,38.5,46,93.94,90.67C158.2,400.84,217.2,426.67,288,426.67s129.8-25.83,190.58-65.4c55.44-44.67,92.44-88.87,93.94-90.67A32,32,0,0,0,576,256,32,32,0,0,0,572.52,241.4ZM288,384a128,128,0,1,1,128-128A128,128,0,0,1,288,384Zm0-192a64,64,0,1,0,64,64A64,64,0,0,0,288,192Z"/>
      </svg>`,
      eyeSlash: `
      <svg class="w-3" viewBox="0 0 640 512" style="color: unset;">
        <path 
          fill="currentColor" 
          d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5z"/>
      </svg>`,
      cog: `<svg class="w-3" viewBox="0 0 512 512" style="color: unset;">
        <path 
          fill="currentColor" 
          d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
      </svg>`,
      heart: `<svg class="w-3" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
      </svg>`,
      plus: `<svg class="w-3" viewBox="0 0 448 512">
        <path 
          fill="currentColor" 
          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
      </svg>`,
      layers: `<svg class="w-3" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
      </svg>`,
      inspector: `<svg class="w-3" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
      </svg>`,
      file: `<svg class="h-3 -mt-1" viewBox="0 0 384 512">
        <path 
          fill="currentColor"
          d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
      </svg>`,
      import: `<svg class="h-3 -mt-1 transform origin-center scale-125" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M128 64c0-35.3 28.7-64 64-64H352V128c0 17.7 14.3 32 32 32H512V448c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V336H302.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H128V64zm0 224v48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H128zM512 128H384V0L512 128z" />
      </svg>`,
      rotate: `<svg class="h-3 -mt-1" viewBox="0 0 512 512">
        <path 
          fill="currentColor" 
          d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" />
      </svg>`,
      download: `<svg class="h-3 -mt-1 transform origin-center scale-125" viewBox="0 0 512 512">
      <path 
        fill="currentColor"
        d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </svg>`,
      codepen: `<svg class="h-3 -mt-1 transform origin-center scale-125" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z" />
      </svg>`
    },
    components: {
      leftmenubar: `<ul class="p-0 m-0">
        <li class="list-none m-0">
          <a
            href="javascript:void(0)"
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
            <div x-html="icons.heart"></div>
          </a>
        </li>
        <li class="list-none m-0">
          <button 
            aria-label="add blocks" 
            name="add blocks" 
            class="w-full text-sm border-0 px-4 py-3 mb-2"
            x-on:click="data.activePanel = data.activePanel === 'blocks' ? null : 'blocks'"
          >
            <div x-html="icons.plus"></div>
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
            x-on:click="data.activePanel = data.activePanel === 'layers' ? null : 'layers'"
          >
            <div x-html="icons.layers"></div>
          </button>
        </li>
        <li class="list-none m-0 lg:hidden">
          <button
            aria-label="toggle inspector"
            name="toggle inspector"
            class="w-full text-sm lg:hidden border-0 px-4 py-3 rounded-md bg-transparent"
            style="color: unset;"
            x-on:click="data.activePanel = data.activePanel === 'inspector' ? null : 'inspector'"
          >
            <div x-html="icons.inspector"></div>
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
            x-on:click="
              project.dark = !project.dark;
              data.colors.border = project.dark ? 'border-gray-800' : 'border-gray-200'
            "
          >
            <svg class="w-3" viewBox="0 0 512 512">
              <path 
                fill="currentColor"
                :d="project.dark ? icons.moon : icons.sun"
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
            x-on:click="data.activePanel = data.activePanel === 'settings' ? null : 'settings'"
          >
            <div x-html="icons.cog"></div>
          </button>
        </li>
      </ul>`,
      settings: `<ul class="py-4 px-0">
        <li class="list-none">
          <div class="items-center text-center">
            <div>
              <a 
                target="_blank" 
                :href="app.url">
                <img 
                  class="my-4 w-24 m-auto"
                  src="../imgs/logo.svg" />
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
                :href="app.license">
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
              x-on:change="handleLogoChange($event)"
            />
            <label 
              for="pjqgd1wka"
              class="mb-2 flex justify-between items-center cursor-pointer">
              <span>Project logo:</span>
        
              <img 
                id="projectLogo"
                class="w-8"
                alt="Project Logo"
                :src="project.logo">
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
              x-model="project.cssreset"
              :checked="project.cssreset"
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
              x-model="project.pwa"
              :checked="project.pwa"
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
            x-model="project.name"
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
            x-model="project.version"
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
            x-model="project.title"
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
            x-model="project.description"
          ></textarea>
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
            x-model="project.author"
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
            x-model="project.url"
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
            x-model="project.meta"
          ></textarea>
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
            x-model="project.scratchpad"
          ></textarea>
        </li>
      </ul>`,
      blocks: `<template x-for="(categoryName, index) in Object.keys(data.blocks)" :key="categoryName">
  <article class="select-none">
    <section class="p-0 flex justify-between" :class="{ 'm-0': data.blocks[categoryName].collapsed }">
      <button 
        class="bg-transparent border-0 p-2 text-xs transform transition-transform" 
        :style="'color: unset; transform: ' + (data.blocks[categoryName].collapsed ? 'rotate(-90deg)' : 'rotate(0deg)' )"
        x-on:click="toggleBlockCategory(categoryName, index)">
        <span x-html="icons.arrowDown"></span>
      </button>
      <span class="p-2 text-right" x-text="categoryName"></span>
    </section>
    <div class="grid gap-2" :class="{ 
      'grid-cols-1': !data.blocks[categoryName].items || data.blocks[categoryName].items.length === 1, 
      'grid-cols-2': data.blocks[categoryName].items && data.blocks[categoryName].items.length > 1, 
      'hidden': data.blocks[categoryName].collapsed 
    }">
      <template x-if="!data.blocks[categoryName].items">
        <div class="p-4 text-center rounded-md border border-solid cursor-grab" :class="data.colors.border">
          <span x-text="data.blocks[categoryName]?.type"></span>
        </div>
      </template>
      <template x-if="data.blocks[categoryName].items && data.blocks[categoryName].items.length > 0">
        <template x-for="block in data.blocks[categoryName].items" :key="block">
          <div class="p-4 text-center rounded-md border border-solid cursor-grab" :class="data.colors.border">
            <span x-text="block.type"></span>
          </div>
        </template>
      </template>
    </div>
  </article>
</template>`,
      previewmenu: `<div class="flex justify-between items-center overflow-auto">
        <div class="flex justify-between items-center">
          <button
            aria-label="new project"
            name="new project"
            class="border-0 bg-transparent text-sm"
            style="color: unset;"
            x-on:click="newProject"
          >
            <div x-html="icons.file"></div>
          </button>
          <button
            aria-label="import project"
            name="import project"
            class="border-0 bg-transparent text-sm"
            style="color: unset;"
            x-on:click="importProject"
          >
            <div x-html="icons.import"></div>
          </button>
        </div>
        <div class="px-2 flex justify-between border border-solid border-y-0" :class="data.colors.border">
          <label for="selectedSize" aria-label="resize canvas" class="m-auto">
            <select 
              id="selectedSize" 
              x-on:change="computeIframeStyle($event.target.value)" 
              class="m-0 w-auto rounded-md capitalize text-[.6rem]" 
              style="padding: 0.5rem;"
            >
              <option value="none">Select Size</option>
              <template x-for="(options, group) in data.sizeOptions" :key="group">
                <optgroup :label="group">
                  <template x-for="(label, option) in options" :key="option">
                    <option :value="option" x-text="label"></option>
                  </template>
                </optgroup>
              </template>
            </select>
          </label>
          <button 
            aria-label="rotate canvas"
            name="rotate canvas" 
            class="border-0 bg-transparent text-sm"
            :class="{'hidden': data.selectedSize === 'none'}"
            style="color: unset;"
            x-on:click="rotateCanvas"
          >
            <div x-html="icons.rotate"></div>
          </button>
        </div>
        <div class="flex justify-between items-center">
          <button
            aria-label="export project"
            name="export project"
            class="border-0 bg-transparent text-sm"
            style="color: unset;"
            x-on:click="downloadProject"
          >
            <div x-html="icons.download"></div>
          </button>
          <button
            aria-label="share to codepen"
            name="share to codepen"
            class="border-0 bg-transparent text-sm"
            style="color: unset;"
            x-on:click="share"
          >
            <div x-html="icons.codepen"></div>
          </button>
        </div>
      </div>`,
      inspectorSelected: `<div class="grid grid-cols-1 h-full text-center items-center">
    <div class="text-[.6rem] text-left">
      <!-- search -->
      <div class="px-2 border-gray-800">
        <input class="m-0 w-auto capitalize text-[.6rem]" type="search" placeholder="Search...">
      </div>
      <!-- themes -->
      <div class="border-0 border-b border-solid pb-2 mb-4 border-gray-800">
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">
            themes
          </button>
          <button class="bg-transparent border-0 p-0 text-right" style="color: unset;">
            <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
              <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">theme</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
            <option value="base">base</option>
            <option value="dark">dark</option>
            <option value="light">light</option>
          </select>
        </div>
      </div>
      <!-- components varients -->
      <div class="border-0 border-b border-solid pb-2 mb-4 border-gray-800">
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">
            varients
          </button>
          <button class="bg-transparent border-0 p-0 text-right" style="color: unset;">
            <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
              <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">varient</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
            <option value="header">header</option>
            <option value="main">main</option>
            <option value="footer">footer</option>
          </select>
        </div>
      </div>
      <!-- temporary varients / states -->
      <div class="border-0 border-b border-solid pb-2 mb-4 border-gray-800">
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">
            temporary varients
          </button>
          <button class="bg-transparent border-0 p-0 text-right" style="color: unset;">
            <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
              <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">state</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
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
      <div class="border-0 border-b border-solid pb-2 mb-4 border-gray-800">
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">
            breakpoints
          </button>
          <button class="bg-transparent border-0 p-0 text-right" style="color: unset;">
            <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
              <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <div>breakpoints</div>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
            <option value="base">base</option>
            <option value="small">small (640px)</option>
            <option value="medium">medium (768px)</option>
            <option value="large">large (1024px)</option>
            <option value="extra large">extra large (1280px)</option>
            <option value="huge">huge (1536px)</option>
          </select>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">small</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" step="1" value="640">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">medium</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" step="1" value="768">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">large</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" step="1" value="1024">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">extra large</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" step="1" value="1280">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">huge</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" step="1" value="1536">
        </div>
      </div>
      <!-- position -->
      <div class="border-0 border-b border-solid pb-2 mb-4 border-gray-800">
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">
            position
          </button>
          <button class="bg-transparent border-0 p-0 text-right" style="color: unset;">
            <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
              <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">type</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
            <option value="relative">relative</option>
            <option value="absolute">absolute</option>
            <option value="fixed">fixed</option>
            <option value="sticky">sticky</option>
          </select>
        </div>
      </div>
      <!-- size -->
      <div class="border-0 border-b border-solid pb-2 mb-4 border-gray-800">
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">
            size
          </button>
          <button class="bg-transparent border-0 p-0 text-right" style="color: unset;">
            <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
              <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">width</button>
          <div class="grid grid-cols-2 gap-1 items-center capitalize">
            <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" step=".1" value="1">
            
            <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
              <option value="fixed">fixed</option>
              <option value="relative">relative</option>
              <option value="fill">fill</option>
              <option value="fit content">fit content</option>
              <option value="viewport">viewport</option>
            </select>
          </div>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">height</button>
          <div class="grid grid-cols-2 gap-1 items-center capitalize">
            <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" step=".1" value="1">
            
            <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
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
      <div class="border-0 border-b border-solid pb-2 mb-4 border-gray-800">
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">
            layout
          </button>
          <button class="bg-transparent border-0 p-0 text-right" style="color: unset;">
            <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
              <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">type</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
            <option value="stack">stack</option>
            <option value="grid">grid</option>
          </select>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">direction</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
            <option value="horizontal">horizontal</option>
            <option value="vertical">vertical</option>
          </select>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">align</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
            <option value="left">left</option>
            <option value="center">center</option>
            <option value="right">right</option>
          </select>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">wrap</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">gap</button>
          <div class="grid grid-cols-2 gap-1 items-center capitalize">
            <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" max="100" step="1" value="10">
            <input style="margin: 0;" type="range" min="0" max="100" step="1" value="10">
          </div>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">Distribute</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
            <option value="start">start</option>
            <option value="center">center</option>
            <option value="end">end</option>
            <option value="space between">space between</option>
            <option value="space around">space around</option>
            <option value="space evenly">space evenly</option>
          </select>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">Padding</button>
          <div class="grid grid-cols-2 gap-1 items-center capitalize">
            <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" max="100" step=".01" value="1">
            
            <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
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
      <div class="border-0 border-b border-solid pb-2 mb-4 border-gray-800">
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">
            text
          </button>
          <button class="bg-transparent border-0 p-0 text-right" style="color: unset;">
            <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
              <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">content</button>
          <input class="w-auto rounded-md normal-case text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="text" placeholder="Text content">

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">font</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="text" placeholder="font family">

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">weight</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
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

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">color</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: 2rem; margin: 0; padding: .25rem; overflow: hidden;" type="color" value="#000000">

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">size</button>
          <div class="grid grid-cols-2 gap-1 items-center capitalize">
            <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" step="1" value="16">
            <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
              <option value="pixels">pixels</option>
              <option value="fit">fit</option>
            </select>
          </div>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">letter</button>
          <div class="grid grid-cols-2 gap-1 items-center capitalize">
            <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" step=".01" value="0">
            <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
              <option value="em">em</option>
              <option value="pixels">pixels</option>
            </select>
          </div>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">line</button>
          <div class="grid grid-cols-2 gap-1 items-center capitalize">
            <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" step=".1" value="1.6">
            <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
              <option value="em">em</option>
              <option value="pixels">pixels</option>
              <option value="%">%</option>
            </select>
          </div>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">align</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
            <option value="left">left</option>
            <option value="center">center</option>
            <option value="right">right</option>
          </select>
        </div>
      </div>
      <!-- cursor -->
      <div class="border-0 border-b border-solid pb-2 mb-4 border-gray-800">
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">
            cursor
          </button>
          <button class="bg-transparent border-0 p-0 text-right" style="color: unset;">
            <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
              <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">web</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
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
      <div class="border-0 border-b border-solid pb-2 mb-4 border-gray-800">
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">
            styles
          </button>
          <button class="bg-transparent border-0 p-0 text-right" style="color: unset;">
            <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
              <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">opacity</button>
          <div class="grid grid-cols-2 gap-1 items-center capitalize">
            <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" max="100" step=".01" value="1">
            <input style="margin: 0;" type="range" min="0" max="100" step=".01" value="1">
          </div>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">visible</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">fill</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: 2rem; margin: 0; padding: .25rem; overflow: hidden;" type="color" value="#000000">

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">overflow</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
            <option value="hidden">hidden</option>
            <option value="visible">visible</option>
            <option value="scroll">scroll</option>
          </select>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">radius</button>
          <div class="grid grid-cols-2 gap-1 items-center capitalize">
            <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" step="1" value="0">
            
            <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
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
      <div class="border-0 border-b border-solid pb-2 mb-4 border-gray-800">
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">
            border
          </button>
          <button class="bg-transparent border-0 p-0 text-right" style="color: unset;">
            <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
              <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">color</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: 2rem; margin: 0; padding: .25rem; overflow: hidden;" type="color" value="#000000">

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">width</button>
          <div class="grid grid-cols-2 gap-1 items-center capitalize">
            <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" max="100" step=".01" value="1">
            
            <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
              <option value="fill">fill</option>
              <option value="top">top</option>
              <option value="bottom">bottom</option>
              <option value="left">left</option>
              <option value="right">right</option>
              <option value="horizontal">horizontal</option>
              <option value="vertical">vertical</option>
            </select>
          </div>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">overflow</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
            <option value="solid">solid</option>
            <option value="dashed">dashed</option>
            <option value="dotted">dotted</option>
            <option value="double">double</option>
          </select>
        </div>
      </div>
      <!-- shadows -->
      <div class="border-0 border-b border-solid pb-2 mb-4 border-gray-800">
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">
            shadows
          </button>
          <button class="bg-transparent border-0 p-0 text-right" style="color: unset;">
            <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
              <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">spread</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: 2rem; margin: 0; padding: .25rem; overflow: hidden;" type="number" min="0" step="1" value="0">

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">blur</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: 2rem; margin: 0; padding: .25rem; overflow: hidden;" type="number" min="0" step="1" value="0">

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">x offset</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: 2rem; margin: 0; padding: .25rem; overflow: hidden;" type="number" step="1" value="0">

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">y offset</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: 2rem; margin: 0; padding: .25rem; overflow: hidden;" type="number" step="1" value="0">

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">color</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: 2rem; margin: 0; padding: .25rem; overflow: hidden;" type="color" value="#000000">

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">type</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
            <option value="inset">inset</option>
            <option value="outset">outset</option>
          </select>
        </div>
      </div>
      <!-- transitions -->
      <div class="border-0 border-b border-solid pb-2 mb-4 border-gray-800">
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">
            transitions
          </button>
          <button class="bg-transparent border-0 p-0 text-right" style="color: unset;">
            <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
              <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">speed</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" max="100" step=".01" value="1">

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">timing</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
            <option value="linear">linear</option>
            <option value="ease">ease</option>
            <option value="ease-in">ease-in</option>
            <option value="ease-out">ease-out</option>
            <option value="ease-in-out">ease-in-out</option>
          </select>
        </div>
      </div>
      <!-- transforms -->
      <div class="border-0 border-b border-solid pb-2 mb-4 border-gray-800">
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">
            transforms
          </button>
          <button class="bg-transparent border-0 p-0 text-right" style="color: unset;">
            <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
              <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">scale</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" step=".1" value="0">

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">rotate 2d</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" step="1" value="0">

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">rotate 3d</button>
          <div class="grid grid-cols-3 gap-1 items-center capitalize">
            <div class="flex flex-col items-center space-y-0">
              <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .2rem;" type="number" step="1" value="0">
              <div class="w-full text-center">x</div>
            </div>
            <div class="flex flex-col items-center space-y-0">
              <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .2rem;" type="number" step="1" value="0">
              <div class="w-full text-center">y</div>
            </div>
            <div class="flex flex-col items-center space-y-0">
              <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .2rem;" type="number" step="1" value="0">
              <div class="w-full text-center">z</div>
            </div>
          </div>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">skew</button>
          <div class="grid grid-cols-2 gap-1 items-center capitalize">
            <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" step="1" value="0">
            <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" step="1" value="0">
          </div>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">depth</button>
          <div class="grid grid-cols-2 gap-1 items-center capitalize">
            <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="-500" max="500" step="1" value="0">
            <input style="margin: 0;" type="range" min="-500" max="500" step="1" value="0">
          </div>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">perspective</button>
          <div class="grid grid-cols-2 gap-1 items-center capitalize">
            <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="500" max="5000" step="1" value="0">
            <input style="margin: 0;" type="range" min="500" max="5000" step="1" value="0">
          </div>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">origin</button>
          <div class="grid grid-cols-2 gap-1 items-center capitalize">
            <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" max="100" step="1" value="50">
            <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" max="100" step="1" value="50">
          </div>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">backface</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
            <option value="visible">visible</option>
            <option value="hidden">hidden</option>
          </select>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">preserve</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
      </div>
      <!-- filters -->
      <div class="border-0 border-b border-solid pb-2 mb-4 border-gray-800">
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">
            filters
          </button>
          <button class="bg-transparent border-0 p-0 text-right" style="color: unset;">
            <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
              <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
          </button>
        </div>

        <!-- 
          blur(0px) hue-rotate(-6deg) brightness(0.76) contrast(1.8) saturate(1) grayscale(0%) sepia(30%) invert(0%);
        -->

        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">blur</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" max="100" step=".1" value="0">

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">hue</button>
          <div class="grid grid-cols-2 gap-1 items-center capitalize">
            <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" max="360" step="1" value="0">
            <input style="margin: 0;" type="range" min="0" max="360" step="1" value="0">
          </div>

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">brightness</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" max="1" step=".01" value="0">

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">contrast</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" max="1" step=".01" value="1">

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">saturation</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" max="1" step=".01" value="1">

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">grayscale</button>
          <div class="grid grid-cols-2 gap-1 items-center capitalize">
            <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" max="100" step="1" value="0">
            <input style="margin: 0;" type="range" min="0" max="100" step="1" value="0">
          </div>
          
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">sepia</button>
          <div class="grid grid-cols-2 gap-1 items-center capitalize">
            <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" max="100" step="1" value="0">
            <input style="margin: 0;" type="range" min="0" max="100" step="1" value="0">
          </div>
          
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">invert</button>
          <div class="grid grid-cols-2 gap-1 items-center capitalize">
            <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" min="0" max="100" step="1" value="0">
            <input style="margin: 0;" type="range" min="0" max="100" step="1" value="0">
          </div>
        </div>
      </div>
      <!-- link -->
      <div class="border-0 border-b border-solid pb-2 mb-4 border-gray-800">
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">
            link
          </button>
          <button class="bg-transparent border-0 p-0 text-right" style="color: unset;">
            <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
              <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <span class="text-[.6rem] h-full capitalize">link to</span>
          <input class="w-auto rounded-md normal-case text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="text" placeholder="https://michaelsboost.com/">

          <span class="text-[.6rem] h-full capitalize">new tab</span>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
      </div>
      <!-- accessibility -->
      <div class="border-0 border-b border-solid pb-2 mb-4 border-gray-800">
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">
            accessibility
          </button>
          <button class="bg-transparent border-0 p-0 text-right" style="color: unset;">
            <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
              <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <span class="text-[.6rem] h-full capitalize">block name</span>
          <input class="w-auto rounded-md normal-case text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="text">

          <span class="text-[.6rem] h-full capitalize">tag</span>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
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

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">aria label</button>
          <input class="w-auto rounded-md normal-case text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="text">

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">tab index</button>
          <input class="w-auto rounded-md normal-case text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="number" value="1">
        </div>
      </div>
    </div>
  </div>`,
      layers: `<template x-for="layer in data.layerStructure">
        <ul 
          class="mt-1 mb-1 -ml-4"
          x-html="renderLayer(layer)"></ul>
      </template>`
    },
    computeIframeStyle(size) {
      this.data.selectedSize = size;
      let viewportWidth, viewportHeight;
      const previewElm = document.getElementById('previewElm');
      if (document.getElementById('previewElm')) {
        viewportWidth = previewElm.clientWidth;
        viewportHeight = previewElm.clientHeight;
      }
      let [width, height] = size.split('x').map(Number);

      if (size === 'none') {
        return this.data.iframeStyles = 'width: 100%; height: 100%';
      } else {
        const scale = Math.min(viewportWidth / width, viewportHeight / height);
        return this.data.iframeStyles = `
          width: ${width}px;
          height: ${height}px;
          transform: scale(${scale});
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -${height / 2}px;
          margin-left: -${width / 2}px;
        `;
      }
    },
    async handleLogoChange(event) {
      const file = event.target.files[0];
      if (!file) return; // If no file selected, return

      try {
        // Convert file to base64 string
        const base64String = await this.fileToBase64(file);
        // Update project.logo with base64String
        this.project.logo = base64String;
      } catch (error) {
        console.error('Error converting image to base64:', error);
      }
    },
    fileToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    },
    rotateCanvas() {
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
    },
    toggleBlockCategory(categoryName) {
      const block = this.data.blocks[categoryName];
      block.collapsed = !block.collapsed;
    },
    renderLayer(layer) {
      let html = `<li class="list-none select-none" :data-id="layer.id">
        <code 
          :class="{ 'bg-blue-500 text-white': layer.state.selected }" 
          class="p-0 flex justify-between whitespace-nowrap min-w-min data-layer">
          <span>
            <button 
              aria-label="collapse layer"
              name="collapse layer"
              :class="{ 'hidden': !layer.children }" 
              class="bg-transparent border-0 p-2 text-xs transform transition-transform" 
              :style="{ 'transform': layer.state.collapsed ? 'rotate(-90deg)' : 'rotate(0deg)' }" 
              style="color: unset;"
              @click="toggleCollapse(layer)">
              <span x-html="icons.arrowDown"></span>
            </button>
            <button 
              data-move
              aria-label="sort layer"
              name="sort layer"
              class="bg-transparent border-0 p-2 text-xs cursor-grab focus:shadow-none" style="color: unset;">
              <span x-html="icons.move"></span>
            </button>
            <button 
              aria-label="toggle layer visibility"
              name="toggle layer visibility"
              class="bg-transparent border-0 p-2 text-xs" style="color: unset;"
              @click="toggleVisible(layer)">
              <span x-html="layer.state.visible ? icons.eye : icons.eyeSlash"></span>
            </button>
          </span>
          <button 
            aria-label="toggle selected layer"
            name="toggle selected layer"
            class="bg-transparent border-0 p-2 text-xs text-right capitalize"
            style="color: unset;"
            @click="selectedBlock(layer)">
            <span x-html="layer.name"></span>
          </button>
        </code>
        <ul 
          class="mt-1 mb-1 -ml-4"
          :class="{ 'hidden': ${layer.state.collapsed} }">
          ${layer.children ? this.renderLayerChildren(layer.children) : ''}
        </ul>
      </li>`;

      return html;
    },
    renderLayerChildren(children) {
      let html = '';
      children.forEach(child => {
        html += this.renderLayer(child);
      });
      return html;
    },
    toggleCollapse(layer) {
      layer.state.collapsed = !layer.state.collapsed;
    },
    toggleVisible(layer) {
      layer.state.visible = !layer.state.visible;
    },
    selectedBlock(layer) {
      layer.state.selected = !layer.state.selected;
    },
    findLayer(layers, layerId) {
      for (const layer of layers) {
        if (layer.id === layerId) return layer;
        if (layer.children) {
          const found = this.findLayer(layer.children, layerId);
          if (found) return found;
        }
      }
      return null;
    },
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
  }
}