import { html, useState, useRef } from '../libraries/preact/standalone-module.js';

const PreviewMenu = ({ border, selectedSize, resizeCanvas, rotateCanvas }) => {
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

  return html`<div class="flex justify-between items-center overflow-auto">
  <div class="flex justify-between items-center">
    <button
      aria-label="new project"
      name="new project"
      class="${buttonClass}"
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
    class="px-2 flex justify-between border border-solid border-y-0 ${border}">
    
    <label for="selectedSize" aria-label="resize canvas" class="m-auto">
      <select 
        id="selectedSize" 
        class="${selectClass}" 
        style="${selectStyle}"
        onChange=${(e) => resizeCanvas(e.target.value)}
      >
        <option value="none" selected=${selectedSize === 'none' ? 'selected' : ''}>Select Size</option>
        ${Object.keys(sizeOptions).map(group => html`
          <optgroup label="${group}">
            ${Object.keys(sizeOptions[group]).map(option => html`
              <option 
                value=${option} 
                selected=${option === selectedSize ? 'selected' : ''}
              >${sizeOptions[group][option]}</option>
            `)}
          </optgroup>
        `)}
      </select>
    </label>
  
    <button 
      aria-label="rotate canvas"
      name="rotate canvas" 
      class="${buttonClass} ${selectedSize === 'none' ? 'hidden' : ''}"
      style="color: unset;"
      onClick=${() => rotateCanvas()}>
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
};

export default PreviewMenu;