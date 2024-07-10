import { html, useState } from '../../libraries/preact/standalone-module.js';

// Components
const LeftMenubar = ({ activePanel, togglePanel, themeIcon, theme }) => {
  return html`
  <ul class="p-0 m-0">
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
        class="w-full text-sm border-0 px-4 py-3 mb-2 ${activePanel !== 'layers' ? 'hidden' : ''}"
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
        onClick=${() => togglePanel('layers')}
        class="w-full text-sm border-0 px-4 py-3 rounded-md bg-transparent"
        style="color: unset;"
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
        onClick=${() => togglePanel('inspector')}
        class="w-full text-sm border-0 px-4 py-3 rounded-md bg-transparent"
        style="color: unset;"
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
        onClick=${() => theme()}
      >
        <svg class="w-3" viewBox="0 0 512 512">
          <path 
            fill="currentColor"
            d="${themeIcon}"/>
        </svg>
      </button>
    </li>
    <li class="list-none m-0">
      <button
        aria-label="settings button"
        name="settings"
        class="w-full text-sm border-0 px-4 py-3 rounded-md bg-transparent -mt-1"
        style="color: unset;"
        onClick=${() => togglePanel('settings')}
      >
        <svg class="w-3" viewBox="0 0 512 512" style="color: unset;">
          <path 
            fill="currentColor" 
            d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
        </svg>
      </button>
    </li>
  </ul>`;
};

export default LeftMenubar;