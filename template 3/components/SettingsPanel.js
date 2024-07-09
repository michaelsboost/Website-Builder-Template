const Menu = {
  props: {
    app: Object,
    project: Object
  },
  methods: {
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
    }
  },
  template: `<ul class="py-4 px-0">
  <li class="list-none">
    <div class="items-center text-center">
    <div>
        <a 
          target="_blank" 
          :href="app.url">
          <img 
            class="my-4 w-24 m-auto"
            src="imgs/logo.svg" />
        </a>
        <div class="text-2xl">
          About {{app.name}}
        </div>
        <div class="my-2 text-xs">
          Version {{app.version}}
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
        @change="handleLogoChange"
      />
      <label 
        for="pjqgd1wka"
        class="mb-2 flex justify-between items-center cursor-pointer">
        <span>Project logo:</span>

        <img 
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
        :checked="project.cssreset"
        v-model="project.cssreset"
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
        :checked="project.pwa"
        v-model="project.pwa"
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
      :value="project.name"
      v-model="project.name"
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
      :value="project.version"
      v-model="project.version"
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
      :value="project.title"
      v-model="project.title"
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
      v-model="project.description"
    >{{project.description}}</textarea>
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
      :value="project.author"
      v-model="project.author"
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
      :value="project.url"
      v-model="project.url"
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
      name="project metadata"
      placeholder="HTML before closing </head> tag" 
      class="p-2 rounded-md w-full resize-vertical h-56"
      v-model="project.meta"
    >{{project.meta}}</textarea>
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
      v-model="project.scratchpad"
    >{{project.scratchpad}}</textarea>
  </li>
</ul>`
};

export default Menu;