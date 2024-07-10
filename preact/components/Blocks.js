import { html, useState } from '../../libraries/preact/standalone-module.js';

const Blocks = ({ data }) => {
  const ArrowDown = html`<svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
    <path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
  </svg>`;

  const toggleBlockCategory = (id) => {
    setBlocks(prevBlocks => {
      const newBlocks = { ...prevBlocks };
      newBlocks[id].collapsed = !newBlocks[id].collapsed;
      return newBlocks;
    });
  };

  const [blocks, setBlocks] = useState(data.blocks);

  return html`
    <div>
      ${Object.keys(blocks).map(category => {
        const blockData = blocks[category];
        let blockCount = 0;
        let categoryBlock = '';

        if (blockData.items) {
          blockCount = blockData.items.length;
          categoryBlock = blockData.items.map(block => html`
            <div class="p-4 text-center rounded-md border border-solid cursor-grab ${data.colors.border}">
              ${block.type}
            </div>
          `);
        } else {
          blockCount = 1;
          categoryBlock = html`
            <div class="p-4 text-center rounded-md border border-solid cursor-grab ${data.colors.border}">
              ${blockData.type}
            </div>
          `;
        }

        const gridColsClass = blockCount === 1 ? 'grid-cols-1' : 'grid-cols-2';

        return html`
          <article class="select-none">
            <section class="p-0 flex justify-between ${blockData.collapsed ? 'm-0' : ''}">
              <button 
                class="bg-transparent border-0 p-2 text-xs transform transition-transform" 
                style="color: unset; transform: ${blockData.collapsed ? 'rotate(-90deg)' : 'rotate(0deg)'}"
                onclick=${() => toggleBlockCategory(blockData.id)}>
                ${ArrowDown}
              </button>
              <span class="p-2 text-right">${category}</span>
            </section>
            <div class="grid ${gridColsClass} gap-2 ${blockData.collapsed ? 'hidden' : ''}">
              ${categoryBlock}
            </div>
          </article>
        `;
      })}
    </div>
  `;
};

export default Blocks;