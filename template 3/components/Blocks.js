const Blocks = {
  props: {
    colors: Object,
    blocks: Object
  },
  data() {
    return {
      internalBlocks: JSON.parse(JSON.stringify(this.blocks)) // to make blocks reactive
    };
  },
  methods: {
    toggleBlockCategory(id) {
      this.internalBlocks[id].collapsed = !this.internalBlocks[id].collapsed;
    }
  },
  template: `
    <article v-for="(blockData, category) in internalBlocks" :key="category" class="select-none">
      <section class="p-0 flex justify-between" :class="{ 'm-0': blockData.collapsed }">
        <button 
          class="bg-transparent border-0 p-2 text-xs transform transition-transform"
          :style="{ color: 'unset', transform: blockData.collapsed ? 'rotate(-90deg)' : 'rotate(0deg)' }"
          @click="toggleBlockCategory(category)">
          <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
            <path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
          </svg>
        </button>
        <span class="p-2 text-right">{{ category }}</span>
      </section>
      <div :class="['grid', blockData.items ? 'grid-cols-2' : 'grid-cols-1', 'gap-2', { 'hidden': blockData.collapsed }]">
        <div v-if="blockData.items" v-for="block in blockData.items" :key="block.type" class="p-4 text-center rounded-md border border-solid cursor-grab" :class="colors.border">
          {{ block.type }}
        </div>
        <div v-else class="p-4 text-center rounded-md border border-solid cursor-grab" :class="colors.border">
          {{ blockData.type }}
        </div>
      </div>
    </article>`
};

export default Blocks;