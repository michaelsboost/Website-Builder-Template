const { createApp } = Vue;

const Navbar = {
  props: {
    colors: Object,
    project: Object,
    themeIcon: String,
    activePanel: String,
    togglePanel: Function,
    theme: Function
  },
  template: `<ul class="p-0 m-0 flex justify-between items-center flex-col md:flex-row">
  <li class="list-none m-0">
    <button
      aria-label="menu button"
      name="menu"
      class="w-full text-sm border-0 px-4 py-3 rounded-md bg-transparent -mt-1"
      :class="colors.text"
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
      class="w-full text-sm border-0 px-4 py-3"
      :class="{ 'hidden': activePanel !== 'layerspanel' }"
    >
      <svg class="w-3" viewBox="0 0 448 512">
        <path 
          fill="currentColor" 
          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
      </svg>
    </button>
  </li>
  <li class="list-none m-0">
    <button
      aria-label="export project"
      name="export project"
      class="w-full text-sm border-0 px-4 py-3 rounded-md bg-transparent"
      :class="colors.text"
      :class="{ 'hidden': activePanel }"
    >
      <svg class="w-3" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
      </svg>
    </button>
  </li>
</ul>
<ul class="p-0 m-0 flex justify-between items-center flex-col md:flex-row">
  <li class="list-none m-0">
    <button
      aria-label="toggle layers"
      name="toggle layers"
      @click="togglePanel('layerspanel')"
      class="w-full text-sm border-0 px-4 py-3 rounded-md bg-transparent"
      :class="colors.text"
    >
      <svg class="w-3" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
      </svg>
    </button>
  </li>
  <li class="list-none m-0 md:hidden">
    <button
      aria-label="toggle inspector"
      name="toggle inspector"
      @click="togglePanel('inspectorpanel')"
      class="w-full text-sm border-0 px-4 py-3 rounded-md bg-transparent"
      :class="colors.text"
    >
      <svg class="w-3" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
      </svg>
    </button>
  </li>
</ul>
<ul class="p-0 m-0 flex justify-between items-center flex-col md:flex-row">
  <li class="list-none m-0">
    <button
      aria-label="undo"
      name="undo"
      class="w-full text-sm border-0 px-4 py-3 rounded-md bg-transparent"
      :class="colors.text, { 'hidden': activePanel !== 'layerspanel' && activePanel !== 'inspectorpanel' }"
    >
      <svg class="w-3" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z" />
      </svg>
    </button>
  </li>
  <li class="list-none m-0">
    <button
      aria-label="redo"
      name="redo"
      class="w-full text-sm border-0 px-4 py-3 rounded-md bg-transparent"
      :class="colors.text, { 'hidden': activePanel !== 'layerspanel' && activePanel !== 'inspectorpanel' }"
    >
      <svg class="w-3" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" />
      </svg>
    </button>
  </li>
  <li class="list-none m-0">
    <button
      aria-label="toggle theme"
      name="toggle theme"
      class="w-full text-sm border-0 px-4 py-3 rounded-md bg-transparent"
      :class="colors.text"
      @click="theme()"
    >
      <svg class="w-3" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          :d="themeIcon"
            />
      </svg>
    </button>
  </li>
</ul>`
};
const LayerTree = {
  name: 'LayerTree',
  props: {
    theme: Object,
    layers: {
      type: Array,
      required: true
    },
    selectElement: Function
  },
  data() {
    return {
      arrowDown: `
        <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
          <path 
            fill="currentColor" 
            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
        </svg>
      `,
      arrowRotate: `
        <svg class="w-3 transform origin-center -rotate-90" viewBox="0 0 576 512" style="color: unset;">
          <path 
            fill="currentColor" 
            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
        </svg>
      `,
      arrowRight: `
        <svg class="w-2" viewBox="0 0 320 512" style="color: unset;">
          <path 
            fill="currentColor" 
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
        </svg>
      `,
      eye: `
        <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
          <path 
            fill="currentColor" 
            d="M572.52,241.4c-1.5-1.8-38.5-46-93.94-90.67C417.8,111.16,358.8,85.33,288,85.33S158.2,111.16,97.42,150.72C41.98,195.4,4.98,239.6,3.48,241.4A32,32,0,0,0,0,256a32,32,0,0,0,3.48,14.6c1.5,1.8,38.5,46,93.94,90.67C158.2,400.84,217.2,426.67,288,426.67s129.8-25.83,190.58-65.4c55.44-44.67,92.44-88.87,93.94-90.67A32,32,0,0,0,576,256,32,32,0,0,0,572.52,241.4ZM288,384a128,128,0,1,1,128-128A128,128,0,0,1,288,384Zm0-192a64,64,0,1,0,64,64A64,64,0,0,0,288,192Z"/>
        </svg>
      `,
      eyeSlash: `
        <svg class="w-3" viewBox="0 0 640 512" style="color: unset;">
          <path 
            fill="currentColor" 
            d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5z"/>
        </svg>
      `,
      cog: `
        <svg class="w-3" viewBox="0 0 512 512" style="color: unset;">
          <path 
            fill="currentColor" 
            d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
        </svg>
      `,
    };
  },
  methods: {
    toggleCollapse(layer) {
      if (layer.hasOwnProperty('collapsed')) {
        layer.collapsed = !layer.collapsed;
      } else {
        this.$set(layer, 'collapsed', true);
      }
    },
    toggleVisible(layer) {
      if (layer.hasOwnProperty('visible')) {
        layer.visible = !layer.visible;
      } else {
        this.$set(layer, 'visible', true);
      }
    }
  },
  components: {
    LayerTree: () => import('../components/LayerTree.js')
  },
  template: `
    <li class="list-none select-none cursor-grab" v-for="layer in layers" :key="layer.id">
      <code 
        class="p-0 flex justify-between whitespace-nowrap"
        :class="[
          {'bg-blue-500 text-white': layer.selected}   // Applied when not selected and theme is light
        ]"
      >
        <span>
          <button 
            v-if="layer.children && layer.children.length" 
            aria-label="collapse element children"
            :class="['bg-transparent border-0 p-2 text-xs transform transition-transform']" 
            :style="{'color': 'unset', 'transform': layer.collapsed ? 'rotate(-90deg)' : 'rotate(0deg)'}" 
            @click="toggleCollapse(layer)"
          >
            <div v-html="arrowDown"></div>
          </button>
          <button 
            aria-label="toggle element visibility"
            class="bg-transparent border-0 p-2 text-xs" 
            style="color: unset;"
            @click="toggleVisible(layer)"
          >
            <div v-html="layer.visible ? eye : eyeSlash"></div>
          </button>
        </span>
        <button 
          aria-label="select element"
          class="bg-transparent border-0 p-2 text-xs"
          style="color: unset;"
          @click="selectElement(layer)"
        >
          {{ layer.tag }}
        </button>
      </code>
      <ul class="mt-1 mb-1 -ml-4" v-if="layer.children && !layer.collapsed">
        <LayerTree 
          :theme="theme" 
          :layers="layer.children"
          :selectElement="selectElement"></LayerTree>
      </ul>
    </li>
  `
};
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
      <!-- component -->
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <nav class="items-center">
          <span class="select-none capitalize">
            varients
          </span>
          <button class="bg-transparent border-0 px-2 py-0">
            <div v-html="expand"></div>
          </button>
        </nav>
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">varient</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
            <option value="header">header</option>
            <option value="main">main</option>
            <option value="footer">footer</option>
          </select>
        </div>
      </div>
      <!-- component -->
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <nav class="items-center">
          <span class="select-none capitalize">
            temporary varients
          </span>
          <button class="bg-transparent border-0 px-2 py-0">
            <div v-html="expand"></div>
          </button>
        </nav>
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">state</button>
          <select class="m-0 w-auto rounded-md normal-case text-[.6rem]" style="padding: .5rem; background-image: none;">
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
        <nav class="items-center">
          <span class="select-none capitalize">
            breakpoints
          </span>
          <button class="bg-transparent border-0 px-2 py-0">
            <div v-html="expand"></div>
          </button>
        </nav>
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
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <nav class="items-center">
          <span class="select-none capitalize">
            position
          </span>
          <button class="bg-transparent border-0 px-2 py-0">
            <div v-html="expand"></div>
          </button>
        </nav>
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
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <nav class="items-center">
          <span class="select-none capitalize">
            size
          </span>
          <button class="bg-transparent border-0 px-2 py-0">
            <div v-html="expand"></div>
          </button>
        </nav>
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
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <nav class="items-center">
          <span class="select-none capitalize">
            layout
          </span>
          <button class="bg-transparent border-0 px-2 py-0">
            <div v-html="expand"></div>
          </button>
        </nav>
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
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <nav class="items-center">
          <span class="select-none capitalize">
            text
          </span>
          <button class="bg-transparent border-0 px-2 py-0">
            <div v-html="expand"></div>
          </button>
        </nav>
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
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <nav class="items-center">
          <span class="select-none capitalize">
            cursor
          </span>
          <button class="bg-transparent border-0 px-2 py-0">
            <div v-html="expand"></div>
          </button>
        </nav>
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
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <nav class="items-center">
          <span class="select-none capitalize">
            styles
          </span>
          <button class="bg-transparent border-0 px-2 py-0">
            <div v-html="expand"></div>
          </button>
        </nav>
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
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <nav class="items-center">
          <span class="select-none capitalize">
            border
          </span>
          <button class="bg-transparent border-0 px-2 py-0">
            <div v-html="expand"></div>
          </button>
        </nav>
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
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <nav class="items-center">
          <span class="select-none capitalize">
            shadows
          </span>
          <button class="bg-transparent border-0 px-2 py-0">
            <div v-html="expand"></div>
          </button>
        </nav>
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">color</button>
          <input class="w-auto rounded-md capitalize text-[.6rem]" style="height: 2rem; margin: 0; padding: .25rem; overflow: hidden;" type="color" value="#000000">

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">type</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
            <option value="extra small">extra small</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            <option value="extra large">extra large</option>
          </select>
        </div>
      </div>
      <!-- transitions -->
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <nav class="items-center">
          <span class="select-none capitalize">
            transitions
          </span>
          <button class="bg-transparent border-0 px-2 py-0">
            <div v-html="expand"></div>
          </button>
        </nav>
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
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <nav class="items-center">
          <span class="select-none capitalize">
            transforms
          </span>
          <button class="bg-transparent border-0 px-2 py-0">
            <div v-html="expand"></div>
          </button>
        </nav>
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
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <nav class="items-center">
          <span class="select-none capitalize">
            filters
          </span>
          <button class="bg-transparent border-0 px-2 py-0">
            <div v-html="expand"></div>
          </button>
        </nav>

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
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <nav class="items-center">
          <span class="select-none capitalize">
            link
          </span>
          <button class="bg-transparent border-0 px-2 py-0">
            <div v-html="expand"></div>
          </button>
        </nav>
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">link to</button>
          <input class="w-auto rounded-md normal-case text-[.6rem]" style="height: auto; margin: 0; padding: .4rem;" type="text" placeholder="https://michaelsboost.com/">

          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">new tab</button>
          <select class="m-0 w-auto rounded-md capitalize text-[.6rem]" style="padding: .5rem; background-image: none;">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
      </div>
      <!-- accessibility -->
      <div class="border-0 border-b border-solid pb-2 mb-4"
        :class="colors.border">
        <nav class="items-center">
          <span class="select-none capitalize">
            accessibility
          </span>
          <button class="bg-transparent border-0 px-2 py-0">
            <div v-html="expand"></div>
          </button>
        </nav>
        <div class="grid grid-cols-2 gap-1 items-center py-2 capitalize">
          <button class="bg-transparent border-0 text-[.6rem] p-0 m-0 h-full capitalize text-left" style="color: unset;">tag</button>
          <select class="m-0 w-auto rounded-md normal-case text-[.6rem]" style="padding: .5rem; background-image: none;">
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
  `
};
const App = {
  components: {
    Navbar,
    LayerTree,
    Inspector
  },
  data() {
    return {
      colors: {
        text: "text-[#fff]",
        border: "border-gray-800"
      },
      project: {
        styles: {
          "p4dmvkj5v": {
            "base": {
              "text-align": "center",
              "display": "grid",
              "grid-template-columns": "repeat(1, minmax(0, 1fr))",
              "align-items": "center"
            }
          },
          "w78d2h": {
            "base": {
              "display": "grid",
              "grid-template-columns": "repeat(1, minmax(0, 1fr))",
              "align-items": "center",
              "gap": "1rem",
              "padding": "1rem"
            }
          },
          "cc7uwye7i": {
            "base": {
              "margin": "auto",
            }
          },
          "h30v6g": {
            "base": {
              "text-transform": "uppercase",
              "margin": "0 .5rem",
              "border-color": "#6e1566",
              "background-color": "#6e1566"
            },
            "variants": {
              "customVariant": {
                "name": "helloworld",
                "style": {
                  "text-transform": "lowercase",
                  "border-color": "#12770b",
                  "background-color": "#12770b",
                  "temporaryVariants": {
                    "hover": {
                      "border-color": "#189b0e",
                      "background-color": "#189b0e",
                      "mediaQueries": {
                        "640px": {
                          "text-size": ".5rem"
                        },
                        "768px": {
                          "text-size": "1rem"
                        },
                        "1024px": {
                          "text-size": "1.5rem"
                        },
                        "1280px": {
                          "text-size": "2rem"
                        }
                      }
                    }
                  },
                  "mediaQueries": {
                    "640px": {
                      "text-size": ".5rem"
                    },
                    "768px": {
                      "text-size": "1rem"
                    },
                    "1024px": {
                      "text-size": "1.5rem"
                    },
                    "1280px": {
                      "text-size": "2rem"
                    }
                  }
                },
              }
            },
            "temporaryVariants": {
              "hover": {
                "border-color": "#9f2394",
                "background-color": "#9f2394"
              },
            },
            "mediaQueries": {
              "640px": {
                "padding": ".5rem"
              },
              "768px": {
                "padding": "1rem"
              },
              "1024px": {
                "padding": "1.5rem"
              },
              "1280px": {
                "padding": "2rem"
              }
            }
          }
        },
        layerStructure: [
          {
            "tag": "header",
            "id": "slal9dwxo",
            "style": {
              "p4dmvkj5v": "base"
            },
            "collapsed": false,
            "selected": false,
            "visible": true,
            "children": [
              {
                "tag": "hgroup",
                "id": "h9f2mfyu3",
                "style": {
                  "w78d2h": "base"
                },
                "collapsed": false,
                "selected": false,
                "visible": true,
                "children": [
                  {
                    "tag": "h1",
                    "id": "s41hd6m61",
                    "text": "App name",
                    "collapsed": false,
                    "selected": false,
                    "visible": true,
                    "children": []
                  },
                  {
                    "tag": "h2",
                    "id": "lestnzu53",
                    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusantium rem sint voluptatum quisquam cum. Nostrum dolorum alias doloribus quod accusantium odit vero dolor excepturi cumque mollitia? Laboriosam, dolore rem!",
                    "collapsed": false,
                    "selected": false,
                    "visible": true,
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "tag": "main",
            "id": "nhgxl6cb9",
            "props": {
              "class": "container"
            },
            "collapsed": false,
            "selected": false,
            "visible": true,
            "children": [
              {
                "tag": "img",
                "id": "hjwxxvjir",
                "style": {
                  "cc7uwye7i": "base"
                },
                "props": {
                  "src": "imgs/image.webp"
                },
                "collapsed": false,
                "selected": false,
                "visible": true
              }
            ]
          },
          {
            "tag": "footer",
            "id": "nhgxl6cb9",
            "props": {
              "class": "container"
            },
            "collapsed": false,
            "selected": false,
            "visible": true,
            "children": [
              {
                "tag": "div",
                "id": "hjwxxvjir",
                "props": {
                  "style": "text-align: center;"
                },
                "collapsed": false,
                "selected": false,
                "visible": true,
                "children": [
                  {
                    "tag": "button",
                    "id": "usrq4dfna",
                    "style": {
                      "h30v6g": "base"
                    },
                    "text": "Button",
                    "collapsed": false,
                    "selected": false,
                    "visible": true,
                    "children": []
                  },
                  {
                    "tag": "button",
                    "id": "drh4elj4d",
                    "style": {
                      "h30v6g": "helloworld"
                    },
                    "text": "Button",
                    "collapsed": false,
                    "selected": false,
                    "visible": true,
                    "children": []
                  }
                ],
              }
            ]
          }
        ],
        dark: true
      },
      themeIcon: "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z",
      activePanel: 'layerspanel',
      selectedLayer: null
    }
  },
  computed: {
    layerHtml() {
      return this.renderPreview(this.project.styles, this.project.layerStructure);
    }
  },
  methods: {
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
    },
    generateId() {
      let id = '';
      while (!/^[a-zA-Z]/.test(id)) {
        id = Math.random().toString(36).substr(2, 9);
      }
      return id;
    },
    initializeLayerStructure(layers) {
      const renderLayer = layer => {
        // Ensure all necessary properties are set
        layer.collapsed = layer.collapsed || false;
        layer.visible = layer.visible || true;

        if (layer.children) {
          layer.children = layer.children.map(child => renderLayer(child));
        }

        if (Array.isArray(layers)) {
          layers.forEach(layer => {
            renderElement(layer);
          });
        }
        return layer;
      }
      
      return layers;
    },
    selectElement(layer) {
      // Helper function to recursively update the selected state
      const updateSelectedState = (layers, targetLayer) => {
        layers.forEach(l => {
          if (l === targetLayer) {
            // Toggle selected state for the clicked layer
            l.selected = !l.selected;

            // Update selectedLayer to the id of the selected layer
            if (l.selected) {
              this.selectedLayer = l.id;

              console.log(l);
            } else {
              this.selectedLayer = null;
            }
          } else {
            // Set selected state to false for other layers
            l.selected = false;
          }
          
          // Recursively update children if they exist
          if (l.children && l.children.length > 0) {
            updateSelectedState(l.children, targetLayer);
          }
        });
      };
    
      // Start the recursive update from the top level
      updateSelectedState(this.project.layerStructure, layer);
    },
    renderPreview(css, json) {
      // Determine data-theme based on this.project.dark
      const dataTheme = this.project.dark ? 'dark' : 'light';
      
      return `<!DOCTYPE html>
<html data-theme="${dataTheme}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/picocss/2.0.6/pico.min.css">
    <style>${this.renderStyles(css, true)}</style>
  </head>
  <body>
    ${this.renderElementTree(json)}
  </body>
</html>`;
    },
    renderElementTree(elements) {
      const renderElement = element => {
        let html = '';
        
        // Skip rendering if element is not visible
        if (!element.visible) {
          return html;
        }
        
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
      
        // Process styles
        let classList = '';
        if (element.style) {
          for (const [key, value] of Object.entries(element.style)) {
            if (value === 'base') {
              classList += `${key}`;
            } else {
              classList += `${key}-${value}`;
            }
          }
          html += ` class="${classList}"`;
        }
      
        html += '>';
      
        if (element.text) {
          html += element.text;
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
    collectUsedStyles(elements, usedStyles = new Set()) {
      elements.forEach(element => {
        if (element.style) {
          Object.keys(element.style).forEach(styleKey => usedStyles.add(styleKey));
        }
        if (element.children) {
          this.collectUsedStyles(element.children, usedStyles);
        }
      });
      return usedStyles;
    },
    renderStyles(styles, min = false) {
      let css = '';
      const usedStyles = this.collectUsedStyles(this.project.layerStructure);
    
      // Function to recursively process styles
      const processStyles = (className, style, pseudo = '', mediaQuery = '') => {
        let result = '';
        const selector = `.${className}${pseudo}`;
        const mediaPrefix = mediaQuery ? `${(min ? `@media(min-width:${mediaQuery}){` : `@media (min-width: ${mediaQuery}) {\n `)}` : '';
        const mediaSuffix = mediaQuery ? `${(min ? `}` : `\n}\n\n`)}` : '';
    
        if (!mediaQuery) {
          // Regular styles outside media queries
          result += `${(min ? `${selector}{` : `${selector} {\n`)}`;
    
          Object.entries(style).forEach(([property, value]) => {
            if (property !== 'mediaQueries' && property !== 'temporaryVariants' && typeof value !== 'object') {
              result += `${(min ? `${property}:${value};` : `  ${property}: ${value};\n`)}`;
            }
          });
      
          result += `${(min ? `}` : `}\n\n`)}`;
        } else {
          // Media query styles
          result += `${(min ? `${mediaPrefix}${selector}{` : `${mediaPrefix} ${selector} {\n`)}`;
    
          Object.entries(style).forEach(([property, value]) => {
            if (property !== 'mediaQueries' && property !== 'temporaryVariants' && typeof value !== 'object') {
              result += `${(min ? `${property}:${value};` : `    ${property}: ${value};\n`)}`;
            }
          });
      
          result += `${(min ? `}${mediaSuffix}` : `  }${mediaSuffix}`)}`;
        }
    
        // Handle media queries inside styles
        if (style.mediaQueries) {
          Object.entries(style.mediaQueries).forEach(([breakpoint, mqStyle]) => {
            result += processStyles(className, mqStyle, pseudo, breakpoint);
          });
        }
    
        // Handle temporary variants inside styles
        if (style.temporaryVariants) {
          Object.entries(style.temporaryVariants).forEach(([tempVariantName, tempVariantStyle]) => {
            result += processStyles(className, tempVariantStyle, `:${tempVariantName}`);
          });
        }
    
        return result;
      };
    
      // Iterate over each className and its styles
      Object.entries(styles).forEach(([className, styleObj]) => {
        if (!usedStyles.has(className)) return;
        
        // Regular styles (base, global temporary variants, variants)
        if (styleObj.base) {
          css += processStyles(className, styleObj.base);
        }
    
        if (styleObj.temporaryVariants) {
          Object.entries(styleObj.temporaryVariants).forEach(([variantName, variantStyle]) => {
            css += processStyles(className, variantStyle, `:${variantName}`);
          });
        }
    
        if (styleObj.variants) {
          Object.entries(styleObj.variants).forEach(([variantName, variantStyleObj]) => {
            if (variantName === "customVariant" && variantStyleObj.style) {
              const variantClassName = `${className}-${variantStyleObj.name}`;
              css += processStyles(variantClassName, variantStyleObj.style);
    
              if (variantStyleObj.style.temporaryVariants) {
                Object.entries(variantStyleObj.style.temporaryVariants).forEach(([tempVariantName, tempVariantStyle]) => {
                  css += processStyles(variantClassName, tempVariantStyle, `:${tempVariantName}`);
                });
              }
            }
          });
        }
    
        // Media queries (global)
        if (styleObj.mediaQueries) {
          Object.entries(styleObj.mediaQueries).forEach(([breakpoint, mqStyle]) => {
            css += processStyles(className, mqStyle, '', breakpoint);
          });
        }
      });
    
      return css;
    }
  },
  template: `<div class="absolute inset-0" :class="colors.text">
    <div>
      <div class="absolute top-0 bottom-0 left-0 right-auto inset-y-0 flex flex-col p-2 md:right-0 md:bottom-auto md:flex-row text-center justify-between overflow-auto">
        <Navbar
          :colors="colors"
          :project="project"
          :themeIcon="themeIcon"
          :activePanel="activePanel"
          :togglePanel="togglePanel"
          :theme="theme"
        />
      </div>
      
      <!-- flexbox for panels and preview -->
      <div class="flex flex-col flex-col-reverse sm:flex-row absolute inset-y-0 right-0 left-16 md:top-16 md:left-0 bottom-0 overflow-hidden">
        <div class="flex-[2] sm:flex-[1] w-full sm:w-96 h-full px-2 text-sm overflow-auto" :class="{ 'hidden': !activePanel }">
          <div class="px-2 py-4 w-full h-full overflow-auto" :class="{ 'hidden': activePanel !== 'layerspanel' }">
            <ul class="relative w-full h-full p-0 m-0">
              <LayerTree 
                :theme="project.dark" 
                :layers="project.layerStructure"
                :selectElement="selectElement" />
            </ul>
          </div>
          <div class="px-2 py-4" :class="{ 'hidden': activePanel !== 'inspectorpanel' }">
            <Inspector 
              :theme="project.dark" 
              :colors="colors" 
              :styles="project.styles"
              :layers="project.layerStructure" />
          </div>
        </div>
        
        <div class="flex-[2] w-full overflow-hidden flex">
          <div class="relative w-full h-full border border-solid overflow-auto p-4" :class="colors.border">
            <nav class="absolute inset-0 w-full h-full">
              <iframe
                class="w-full h-full shadow-2xl shadow-blue-500"
                title="project.title"
                sandbox="allow-scripts allow-same-origin allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups"
                :srcdoc="layerHtml"
              ></iframe>
            </nav>
          </div>
        </div>
        
        <div class="flex-[1] hidden md:block w-full sm:w-96 h-full px-2 py-4 text-sm overflow-auto" :class="{ 'md:hidden': !activePanel }">
          <Inspector 
            :theme="project.dark" 
            :colors="colors" 
            :styles="project.styles" 
            :layers="project.layerStructure" />
        </div>
      </div>
    </div>
  </div>`
};

createApp(App).mount('#app');