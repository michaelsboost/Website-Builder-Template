const Inspector = {
  name: 'Inspector',
  props: {
    theme: Object,
    colors: Object,
    styles: Object,
    layers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      dropdownTextClass: 'bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left',
      expandStyle: 'bg-transparent border-0 p-0 text-right',
      gridcol2Style: 'grid grid-cols-2 gap-1 items-center py-2 capitalize',
      innergridcol2Style: 'grid grid-cols-2 gap-1 items-center capitalize',
      inputClass: 'w-auto rounded-md capitalize text-[.6rem]',
      inputStyle: 'height: auto; margin: 0; padding: .4rem;',
      inputColorStyle: 'height: 2rem; margin: 0; padding: .25rem; overflow: hidden;',
      selectClass: 'm-0 w-auto rounded-md capitalize text-[.6rem]',
      selectStyle: 'padding: .5rem; background-image: none;',
      expand: `
        <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
          <path 
            fill="currentColor" 
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
        </svg>
      `,
      collapse: `
        <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
          <path 
            fill="currentColor" 
            d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
        </svg>
      `
    };
  },
  methods: {
    
  },
  template: `
    <div class="text-[.6rem]">
      <!-- search -->
      <div class="px-2" :class="colors.border">
        <input class="m-0 w-auto capitalize text-[.6rem]" type="search" placeholder="Search...">
      </div>
      <!-- themes -->
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">
            themes
          </button>
          <button :class="expandStyle" style="color: unset;">
            <div v-html="expand"></div>
          </button>
        </div>
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">theme</button>
          <select :class="selectClass" :style="selectStyle">
            <option value="base">base</option>
            <option value="dark">dark</option>
            <option value="light">light</option>
          </select>
        </div>
      </div>
      <!-- components varients -->
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">
            varients
          </button>
          <button :class="expandStyle" style="color: unset;">
            <div v-html="expand"></div>
          </button>
        </div>
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">varient</button>
          <select :class="selectClass" :style="selectStyle">
            <option value="header">header</option>
            <option value="main">main</option>
            <option value="footer">footer</option>
          </select>
        </div>
      </div>
      <!-- temporary varients / states -->
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">
            temporary varients
          </button>
          <button :class="expandStyle" style="color: unset;">
            <div v-html="expand"></div>
          </button>
        </div>
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">state</button>
          <select :class="selectClass" :style="selectStyle">
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
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">
            breakpoints
          </button>
          <button :class="expandStyle" style="color: unset;">
            <div v-html="expand"></div>
          </button>
        </div>
        <div :class="gridcol2Style">
          <div>breakpoints</div>
          <select :class="selectClass" :style="selectStyle">
            <option value="base">base</option>
            <option value="small">small (640px)</option>
            <option value="medium">medium (768px)</option>
            <option value="large">large (1024px)</option>
            <option value="extra large">extra large (1280px)</option>
            <option value="huge">huge (1536px)</option>
          </select>

          <button :class="dropdownTextClass" style="color: unset;">small</button>
          <input :class="inputClass" :style="inputStyle" type="number" min="0" step="1" value="640">
          <button :class="dropdownTextClass" style="color: unset;">medium</button>
          <input :class="inputClass" :style="inputStyle" type="number" min="0" step="1" value="768">
          <button :class="dropdownTextClass" style="color: unset;">large</button>
          <input :class="inputClass" :style="inputStyle" type="number" min="0" step="1" value="1024">
          <button :class="dropdownTextClass" style="color: unset;">extra large</button>
          <input :class="inputClass" :style="inputStyle" type="number" min="0" step="1" value="1280">
          <button :class="dropdownTextClass" style="color: unset;">huge</button>
          <input :class="inputClass" :style="inputStyle" type="number" min="0" step="1" value="1536">
        </div>
      </div>
      <!-- position -->
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">
            position
          </button>
          <button :class="expandStyle" style="color: unset;">
            <div v-html="expand"></div>
          </button>
        </div>
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">type</button>
          <select :class="selectClass" :style="selectStyle">
            <option value="relative">relative</option>
            <option value="absolute">absolute</option>
            <option value="fixed">fixed</option>
            <option value="sticky">sticky</option>
          </select>
        </div>
      </div>
      <!-- size -->
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">
            size
          </button>
          <button :class="expandStyle" style="color: unset;">
            <div v-html="expand"></div>
          </button>
        </div>
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">width</button>
          <div :class="innergridcol2Style">
            <input :class="inputClass" :style="inputStyle" type="number" min="0" step=".1" value="1">
            
            <select :class="selectClass" :style="selectStyle">
              <option value="fixed">fixed</option>
              <option value="relative">relative</option>
              <option value="fill">fill</option>
              <option value="fit content">fit content</option>
              <option value="viewport">viewport</option>
            </select>
          </div>

          <button :class="dropdownTextClass" style="color: unset;">height</button>
          <div :class="innergridcol2Style">
            <input :class="inputClass" :style="inputStyle" type="number" min="0" step=".1" value="1">
            
            <select :class="selectClass" :style="selectStyle">
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
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">
            layout
          </button>
          <button :class="expandStyle" style="color: unset;">
            <div v-html="expand"></div>
          </button>
        </div>
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">type</button>
          <select :class="selectClass" :style="selectStyle">
            <option value="stack">stack</option>
            <option value="grid">grid</option>
          </select>

          <button :class="dropdownTextClass" style="color: unset;">direction</button>
          <select :class="selectClass" :style="selectStyle">
            <option value="horizontal">horizontal</option>
            <option value="vertical">vertical</option>
          </select>

          <button :class="dropdownTextClass" style="color: unset;">align</button>
          <select :class="selectClass" :style="selectStyle">
            <option value="left">left</option>
            <option value="center">center</option>
            <option value="right">right</option>
          </select>

          <button :class="dropdownTextClass" style="color: unset;">wrap</button>
          <select :class="selectClass" :style="selectStyle">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>

          <button :class="dropdownTextClass" style="color: unset;">gap</button>
          <div :class="innergridcol2Style">
            <input :class="inputClass" :style="inputStyle" type="number" min="0" max="100" step="1" value="10">
            <input style="margin: 0;" type="range" min="0" max="100" step="1" value="10">
          </div>

          <button :class="dropdownTextClass" style="color: unset;">Distribute</button>
          <select :class="selectClass" :style="selectStyle">
            <option value="start">start</option>
            <option value="center">center</option>
            <option value="end">end</option>
            <option value="space between">space between</option>
            <option value="space around">space around</option>
            <option value="space evenly">space evenly</option>
          </select>

          <button :class="dropdownTextClass" style="color: unset;">Padding</button>
          <div :class="innergridcol2Style">
            <input :class="inputClass" :style="inputStyle" type="number" min="0" max="100" step=".01" value="1">
            
            <select :class="selectClass" :style="selectStyle">
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
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">
            text
          </button>
          <button :class="expandStyle" style="color: unset;">
            <div v-html="expand"></div>
          </button>
        </div>
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">content</button>
          <input class="w-auto rounded-md normal-case text-[.6rem]" :style="inputStyle" type="text" placeholder="Text content">

          <button :class="dropdownTextClass" style="color: unset;">font</button>
          <input :class="inputClass" :style="inputStyle" type="text" placeholder="font family">

          <button :class="dropdownTextClass" style="color: unset;">weight</button>
          <select :class="selectClass" :style="selectStyle">
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

          <button :class="dropdownTextClass" style="color: unset;">color</button>
          <input :class="inputClass" :style="inputColorStyle" type="color" value="#000000">

          <button :class="dropdownTextClass" style="color: unset;">size</button>
          <div :class="innergridcol2Style">
            <input :class="inputClass" :style="inputStyle" type="number" min="0" step="1" value="16">
            <select :class="selectClass" :style="selectStyle">
              <option value="pixels">pixels</option>
              <option value="fit">fit</option>
            </select>
          </div>

          <button :class="dropdownTextClass" style="color: unset;">letter</button>
          <div :class="innergridcol2Style">
            <input :class="inputClass" :style="inputStyle" type="number" min="0" step=".01" value="0">
            <select :class="selectClass" :style="selectStyle">
              <option value="em">em</option>
              <option value="pixels">pixels</option>
            </select>
          </div>

          <button :class="dropdownTextClass" style="color: unset;">line</button>
          <div :class="innergridcol2Style">
            <input :class="inputClass" :style="inputStyle" type="number" min="0" step=".1" value="1.6">
            <select :class="selectClass" :style="selectStyle">
              <option value="em">em</option>
              <option value="pixels">pixels</option>
              <option value="%">%</option>
            </select>
          </div>

          <button :class="dropdownTextClass" style="color: unset;">align</button>
          <select :class="selectClass" :style="selectStyle">
            <option value="left">left</option>
            <option value="center">center</option>
            <option value="right">right</option>
          </select>
        </div>
      </div>
      <!-- cursor -->
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">
            cursor
          </button>
          <button :class="expandStyle" style="color: unset;">
            <div v-html="expand"></div>
          </button>
        </div>
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">web</button>
          <select :class="selectClass" :style="selectStyle">
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
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">
            styles
          </button>
          <button :class="expandStyle" style="color: unset;">
            <div v-html="expand"></div>
          </button>
        </div>
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">opacity</button>
          <div :class="innergridcol2Style">
            <input :class="inputClass" :style="inputStyle" type="number" min="0" max="100" step=".01" value="1">
            <input style="margin: 0;" type="range" min="0" max="100" step=".01" value="1">
          </div>

          <button :class="dropdownTextClass" style="color: unset;">visible</button>
          <select :class="selectClass" :style="selectStyle">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>

          <button :class="dropdownTextClass" style="color: unset;">fill</button>
          <input :class="inputClass" :style="inputColorStyle" type="color" value="#000000">

          <button :class="dropdownTextClass" style="color: unset;">overflow</button>
          <select :class="selectClass" :style="selectStyle">
            <option value="hidden">hidden</option>
            <option value="visible">visible</option>
            <option value="scroll">scroll</option>
          </select>

          <button :class="dropdownTextClass" style="color: unset;">radius</button>
          <div :class="innergridcol2Style">
            <input :class="inputClass" :style="inputStyle" type="number" min="0" step="1" value="0">
            
            <select :class="selectClass" :style="selectStyle">
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
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">
            border
          </button>
          <button :class="expandStyle" style="color: unset;">
            <div v-html="expand"></div>
          </button>
        </div>
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">color</button>
          <input :class="inputClass" :style="inputColorStyle" type="color" value="#000000">

          <button :class="dropdownTextClass" style="color: unset;">width</button>
          <div :class="innergridcol2Style">
            <input :class="inputClass" :style="inputStyle" type="number" min="0" max="100" step=".01" value="1">
            
            <select :class="selectClass" :style="selectStyle">
              <option value="fill">fill</option>
              <option value="top">top</option>
              <option value="bottom">bottom</option>
              <option value="left">left</option>
              <option value="right">right</option>
              <option value="horizontal">horizontal</option>
              <option value="vertical">vertical</option>
            </select>
          </div>

          <button :class="dropdownTextClass" style="color: unset;">overflow</button>
          <select :class="selectClass" :style="selectStyle">
            <option value="solid">solid</option>
            <option value="dashed">dashed</option>
            <option value="dotted">dotted</option>
            <option value="double">double</option>
          </select>
        </div>
      </div>
      <!-- shadows -->
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">
            shadows
          </button>
          <button :class="expandStyle" style="color: unset;">
            <div v-html="expand"></div>
          </button>
        </div>
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">spread</button>
          <input :class="inputClass" :style="inputColorStyle" type="number" min="0" step="1" value="0">

          <button :class="dropdownTextClass" style="color: unset;">blur</button>
          <input :class="inputClass" :style="inputColorStyle" type="number" min="0" step="1" value="0">

          <button :class="dropdownTextClass" style="color: unset;">x offset</button>
          <input :class="inputClass" :style="inputColorStyle" type="number" step="1" value="0">

          <button :class="dropdownTextClass" style="color: unset;">y offset</button>
          <input :class="inputClass" :style="inputColorStyle" type="number" step="1" value="0">

          <button :class="dropdownTextClass" style="color: unset;">color</button>
          <input :class="inputClass" :style="inputColorStyle" type="color" value="#000000">

          <button :class="dropdownTextClass" style="color: unset;">type</button>
          <select :class="selectClass" :style="selectStyle">
            <option value="inset">inset</option>
            <option value="outset">outset</option>
          </select>
        </div>
      </div>
      <!-- transitions -->
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">
            transitions
          </button>
          <button :class="expandStyle" style="color: unset;">
            <div v-html="expand"></div>
          </button>
        </div>
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">speed</button>
          <input :class="inputClass" :style="inputStyle" type="number" min="0" max="100" step=".01" value="1">

          <button :class="dropdownTextClass" style="color: unset;">timing</button>
          <select :class="selectClass" :style="selectStyle">
            <option value="linear">linear</option>
            <option value="ease">ease</option>
            <option value="ease-in">ease-in</option>
            <option value="ease-out">ease-out</option>
            <option value="ease-in-out">ease-in-out</option>
          </select>
        </div>
      </div>
      <!-- transforms -->
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">
            transforms
          </button>
          <button :class="expandStyle" style="color: unset;">
            <div v-html="expand"></div>
          </button>
        </div>
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">scale</button>
          <input :class="inputClass" :style="inputStyle" type="number" step=".1" value="0">

          <button :class="dropdownTextClass" style="color: unset;">rotate 2d</button>
          <input :class="inputClass" :style="inputStyle" type="number" step="1" value="0">

          <button :class="dropdownTextClass" style="color: unset;">rotate 3d</button>
          <div class="grid grid-cols-3 gap-1 items-center capitalize">
            <div class="flex flex-col items-center space-y-0">
              <input :class="inputClass" style="height: auto; margin: 0; padding: .2rem;" type="number" step="1" value="0">
              <div class="w-full text-center">x</div>
            </div>
            <div class="flex flex-col items-center space-y-0">
              <input :class="inputClass" style="height: auto; margin: 0; padding: .2rem;" type="number" step="1" value="0">
              <div class="w-full text-center">y</div>
            </div>
            <div class="flex flex-col items-center space-y-0">
              <input :class="inputClass" style="height: auto; margin: 0; padding: .2rem;" type="number" step="1" value="0">
              <div class="w-full text-center">z</div>
            </div>
          </div>

          <button :class="dropdownTextClass" style="color: unset;">skew</button>
          <div :class="innergridcol2Style">
            <input :class="inputClass" :style="inputStyle" type="number" step="1" value="0">
            <input :class="inputClass" :style="inputStyle" type="number" step="1" value="0">
          </div>

          <button :class="dropdownTextClass" style="color: unset;">depth</button>
          <div :class="innergridcol2Style">
            <input :class="inputClass" :style="inputStyle" type="number" min="-500" max="500" step="1" value="0">
            <input style="margin: 0;" type="range" min="-500" max="500" step="1" value="0">
          </div>

          <button :class="dropdownTextClass" style="color: unset;">perspective</button>
          <div :class="innergridcol2Style">
            <input :class="inputClass" :style="inputStyle" type="number" min="500" max="5000" step="1" value="0">
            <input style="margin: 0;" type="range" min="500" max="5000" step="1" value="0">
          </div>

          <button :class="dropdownTextClass" style="color: unset;">origin</button>
          <div :class="innergridcol2Style">
            <input :class="inputClass" :style="inputStyle" type="number" min="0" max="100" step="1" value="50">
            <input :class="inputClass" :style="inputStyle" type="number" min="0" max="100" step="1" value="50">
          </div>

          <button :class="dropdownTextClass" style="color: unset;">backface</button>
          <select :class="selectClass" :style="selectStyle">
            <option value="visible">visible</option>
            <option value="hidden">hidden</option>
          </select>

          <button :class="dropdownTextClass" style="color: unset;">preserve</button>
          <select :class="selectClass" :style="selectStyle">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
      </div>
      <!-- filters -->
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">
            filters
          </button>
          <button :class="expandStyle" style="color: unset;">
            <div v-html="expand"></div>
          </button>
        </div>

        <!-- 
          blur(0px) hue-rotate(-6deg) brightness(0.76) contrast(1.8) saturate(1) grayscale(0%) sepia(30%) invert(0%);
        -->

        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">blur</button>
          <input :class="inputClass" :style="inputStyle" type="number" min="0" max="100" step=".1" value="0">

          <button :class="dropdownTextClass" style="color: unset;">hue</button>
          <div :class="innergridcol2Style">
            <input :class="inputClass" :style="inputStyle" type="number" min="0" max="360" step="1" value="0">
            <input style="margin: 0;" type="range" min="0" max="360" step="1" value="0">
          </div>

          <button :class="dropdownTextClass" style="color: unset;">brightness</button>
          <input :class="inputClass" :style="inputStyle" type="number" min="0" max="1" step=".01" value="0">

          <button :class="dropdownTextClass" style="color: unset;">contrast</button>
          <input :class="inputClass" :style="inputStyle" type="number" min="0" max="1" step=".01" value="1">

          <button :class="dropdownTextClass" style="color: unset;">saturation</button>
          <input :class="inputClass" :style="inputStyle" type="number" min="0" max="1" step=".01" value="1">

          <button :class="dropdownTextClass" style="color: unset;">grayscale</button>
          <div :class="innergridcol2Style">
            <input :class="inputClass" :style="inputStyle" type="number" min="0" max="100" step="1" value="0">
            <input style="margin: 0;" type="range" min="0" max="100" step="1" value="0">
          </div>
          
          <button :class="dropdownTextClass" style="color: unset;">sepia</button>
          <div :class="innergridcol2Style">
            <input :class="inputClass" :style="inputStyle" type="number" min="0" max="100" step="1" value="0">
            <input style="margin: 0;" type="range" min="0" max="100" step="1" value="0">
          </div>
          
          <button :class="dropdownTextClass" style="color: unset;">invert</button>
          <div :class="innergridcol2Style">
            <input :class="inputClass" :style="inputStyle" type="number" min="0" max="100" step="1" value="0">
            <input style="margin: 0;" type="range" min="0" max="100" step="1" value="0">
          </div>
        </div>
      </div>
      <!-- link -->
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">
            link
          </button>
          <button :class="expandStyle" style="color: unset;">
            <div v-html="expand"></div>
          </button>
        </div>
        <div :class="gridcol2Style">
          <span class="text-[.6rem] h-full capitalize">link to</span>
          <input class="w-auto rounded-md normal-case text-[.6rem]" :style="inputStyle" type="text" placeholder="https://michaelsboost.com/">

          <span class="text-[.6rem] h-full capitalize">new tab</span>
          <select :class="selectClass" :style="selectStyle">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
      </div>
      <!-- accessibility -->
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <div :class="gridcol2Style">
          <button :class="dropdownTextClass" style="color: unset;">
            accessibility
          </button>
          <button :class="expandStyle" style="color: unset;">
            <div v-html="expand"></div>
          </button>
        </div>
        <div :class="gridcol2Style">
          <span class="text-[.6rem] h-full capitalize">block name</span>
          <input class="w-auto rounded-md normal-case text-[.6rem]" :style="inputStyle" type="text">

          <span class="text-[.6rem] h-full capitalize">tag</span>
          <select :class="selectClass" :style="selectStyle">
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

          <button :class="dropdownTextClass" style="color: unset;">aria label</button>
          <input class="w-auto rounded-md normal-case text-[.6rem]" :style="inputStyle" type="text">

          <button :class="dropdownTextClass" style="color: unset;">tab index</button>
          <input class="w-auto rounded-md normal-case text-[.6rem]" :style="inputStyle" type="number" value="1">
        </div>
      </div>
    </div>
  `
};

export default Inspector;