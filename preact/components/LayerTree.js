import { html, useState } from '../../libraries/preact/standalone-module.js';

const LayerTree = ({ layers, onSelect, iframeRef, renderPreview }) => {
  // Define SVG icons as Preact functional components
  const ArrowDown = () => html`
    <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
      <path 
        fill="currentColor" 
        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
    </svg>
  `;
  const Move = () => html`
    <svg class="w-3" viewBox="0 0 512 512" style="color: unset;">
      <path 
        fill="currentColor" 
        d="M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h32v96H128V192c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V288h96v96H192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H288V288h96v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6v32H288V128h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z"/>
    </svg>`;
  const Eye = () => html`
    <svg class="w-3" viewBox="0 0 576 512" style="color: unset;">
      <path 
        fill="currentColor" 
        d="M572.52,241.4c-1.5-1.8-38.5-46-93.94-90.67C417.8,111.16,358.8,85.33,288,85.33S158.2,111.16,97.42,150.72C41.98,195.4,4.98,239.6,3.48,241.4A32,32,0,0,0,0,256a32,32,0,0,0,3.48,14.6c1.5,1.8,38.5,46,93.94,90.67C158.2,400.84,217.2,426.67,288,426.67s129.8-25.83,190.58-65.4c55.44-44.67,92.44-88.87,93.94-90.67A32,32,0,0,0,576,256,32,32,0,0,0,572.52,241.4ZM288,384a128,128,0,1,1,128-128A128,128,0,0,1,288,384Zm0-192a64,64,0,1,0,64,64A64,64,0,0,0,288,192Z"/>
    </svg>`;
  const EyeSlash = () => html`
    <svg class="w-3" viewBox="0 0 640 512" style="color: unset;">
      <path 
        fill="currentColor" 
        d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5z"/>
    </svg>`;

  const [collapsedLayers, setCollapsedLayers] = useState([]);
  const [selectedLayerId, setSelectedLayerId] = useState(null);

  const toggleCollapse = layer => {
    setCollapsedLayers((prevCollapsedLayers) => {
      if (prevCollapsedLayers.includes(layer.id)) {
        return prevCollapsedLayers.filter((id) => id !== layer.id);
      } else {
        return [...prevCollapsedLayers, layer.id];
      }
    });
  };

  const toggleVisible = layer => {
    layer.state.visible = !layer.state.visible;
    // Trigger a re-render by updating state with a new object reference
    setCollapsedLayers([...collapsedLayers]);

    // Update the iframe preview
    const iframeElement = iframeRef.current;
    if (iframeElement) {
      iframeElement.srcdoc = renderPreview();
    }
  };

  const selectElement = (layer) => {
    onSelect(layer);
    // if (selectedLayerId === layer.id) {
    //   setSelectedLayerId(null); // Deselect the layer
    //   // Optionally handle deselection logic or notify parent component
    // } else {
    //   setSelectedLayerId(layer.id); // Select the current layer
    //   onSelect(layer); // Pass selected layer up to parent component (App.js)
    // }
  };

  return html`
    ${layers.map((layer) => html`
      <li class="list-none select-none" key=${layer.id}>
      <code class="p-0 flex justify-between whitespace-nowrap min-w-min ${layer.id === selectedLayerId ? 'bg-blue-500 text-white' : ''}">
        <span>
          <button 
            aria-label="toggle layer children"
            name="toggle layer children"
            class="bg-transparent ${layer.children && layer.children.length > 0 ? '' : 'hidden'} border-0 p-2 text-xs transform transition-transform" style="color: unset; transform: ${collapsedLayers.includes(layer.id) ? 'rotate(-90deg)' : 'rotate(0deg)'};"
            onClick=${() => toggleCollapse(layer)}>
            ${layer.children && layer.children.length > 0 ? html`<${ArrowDown} />` : ''}
          </button>
          <button 
            data-move
            aria-label="sort layer"
            name="sort layer"
            class="bg-transparent border-0 p-2 text-xs cursor-grab focus:shadow-none" style="color: unset;">
            <${Move} />
          </button>
          <button 
            aria-label="toggle layer visibility"
            name="toggle layer visibility"
            class="bg-transparent border-0 p-2 text-xs" style="color: unset;"
            onClick=${() => toggleVisible(layer)}>
            ${layer.state.visible ? html`<${Eye} />` : html`<${EyeSlash} />`}
          </button>
        </span>
        <button 
          aria-label="toggle selected layer"
          name="toggle selected layer"
          class="bg-transparent border-0 p-2 text-xs text-right capitalize" 
          style="color: unset;"
          onClick=${() => selectElement(layer)}>
          ${layer.name}
        </button>
      </code>
        ${layer.children && layer.children.length > 0 && !collapsedLayers.includes(layer.id) && html`
          <ul class="mt-1 mb-1 -ml-4">
            <${LayerTree}
              layers=${layer.children}
              onSelect=${onSelect}
              iframeRef=${iframeRef}
              renderPreview=${renderPreview}
            />
          </ul>
        `}
      </li>
    `)}
  `;
};

export default LayerTree;