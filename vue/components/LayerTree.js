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

      move: `
        <svg class="w-3" viewBox="0 0 512 512" style="color: unset;">
          <path 
            fill="currentColor" 
            d="M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h32v96H128V192c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V288h96v96H192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H288V288h96v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6v32H288V128h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z"/>
        </svg>`,
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
      layer.state.collapsed = !layer.state.collapsed;
    },
    toggleVisible(layer) {
      layer.state.visible = !layer.state.visible;
    }
  },
  components: {
    LayerTree: () => import('../components/LayerTree.js')
  },
  template: `
    <li class="list-none select-none" v-for="layer in layers" :key="layer.id">
      <code 
        class="p-0 flex justify-between whitespace-nowrap min-w-min"
        :class="[
          {'bg-blue-500 text-white': layer.state.selected}   // Applied when not selected and theme is light
        ]"
      >
        <span>
          <button 
            v-if="layer.children && layer.children.length" 
            aria-label="collapse element children"
            :class="['bg-transparent border-0 p-2 text-xs transform transition-transform']" 
            :style="{'color': 'unset', 'transform': layer.state.collapsed ? 'rotate(-90deg)' : 'rotate(0deg)'}" 
            @click="toggleCollapse(layer)"
          >
            <div v-html="arrowDown"></div>
          </button>
          <button 
            aria-label="move/sort element"
            class="bg-transparent border-0 p-2 text-xs cursor-grab focus:shadow-none"
            style="color: unset;"
          >
            <div v-html="move"></div>
          </button>
          <button 
            aria-label="toggle element visibility"
            class="bg-transparent border-0 p-2 text-xs" 
            style="color: unset;"
            @click="toggleVisible(layer)"
          >
            <div v-html="layer.state.visible ? eye : eyeSlash"></div>
          </button>
        </span>
        <button 
          aria-label="select element"
          class="bg-transparent border-0 p-2 text-xs capitalize"
          style="color: unset;"
          @click="selectElement(layer)"
        >
          {{ layer.name }}
        </button>
      </code>
      <ul class="mt-1 mb-1 -ml-4" v-if="layer.children && !layer.state.collapsed">
        <LayerTree 
          :theme="theme" 
          :layers="layer.children"
          :selectElement="selectElement"></LayerTree>
      </ul>
    </li>
  `
};

export default LayerTree;