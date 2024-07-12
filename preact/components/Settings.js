import { html, useState } from '../../libraries/preact/standalone-module.js';

const Settings = ({ project }) => {
  // State variables for managing form data
  const [name, setName] = useState(project.name);
  const [version, setVersion] = useState(project.version);
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);
  const [author, setAuthor] = useState(project.author);
  const [url, setUrl] = useState(project.url);
  const [meta, setMeta] = useState(project.meta);
  const [scratchpad, setScratchpad] = useState(project.scratchpad);
  const [cssreset, setCssReset] = useState(project.cssreset);
  const [pwa, setPwa] = useState(project.pwa);

  // Event handler for input change
  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  // Event handler for checkbox change
  const handleCheckboxChange = (event, setState) => {
    setState(event.target.checked);
  };

  return html`
    <ul class="py-4 px-0">
      <li class="list-none">
        <div class="items-center text-center">
        <div>
            <a 
              target="_blank" 
              href="https://michaelsboost.com/">
              <img 
                class="my-4 w-24 m-auto"
                src="../imgs/logo.svg"/>
            </a>
            <div class="text-2xl">
              About Designer
            </div>
            <div class="my-2 text-xs">
              Version 0.0.3
            </div>
            <a 
              target="_blank" 
              class="text-sm underline mb-2 text-blue-500" 
              href="https://michaelsboost.com/">
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
          />
          <label 
            for="pjqgd1wka"
            class="mb-2 flex justify-between items-center cursor-pointer">
            <span>Project logo:</span>

            <img 
              class="w-8"
              alt="Project Logo"
              src="${project.logo}"/>
          </label>
        </div>
      </li>
      <li class="p-0 list-none">
        <hr />
      </li>
      <li class="list-none">
        <nav class="mt-5 items-center">
          <label for="o14tigo4m" class="mb-2 flex justify-between items-center cursor-pointer">
            <span>CSS Reset:</span>
          </label>
          <input
            id="o14tigo4m"
            type="checkbox"
            role="switch"
            name="toggle css reset"
            checked=${cssreset}
            onChange=${(e) => handleCheckboxChange(e, setCssReset)}
          />
        </nav>
      </li>
      <li class="p-0 list-none">
        <hr />
      </li>
      <li class="list-none">
        <nav class="mt-5 items-center">
          <label for="osbpm2k0q" class="mb-2 flex justify-between items-center cursor-pointer">
            <span>PWA:</span>
          </label>
          <input
            id="osbpm2k0q"
            type="checkbox"
            role="switch"
            name="export project as a pwa"
            checked=${pwa}
            onChange=${(e) => handleCheckboxChange(e, setPwa)}
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
          value=${name}
          onInput=${(e) => handleInputChange(e, setName)}
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
          value=${version}
          onInput=${(e) => handleInputChange(e, setVersion)}
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
          value=${title}
          onInput=${(e) => handleInputChange(e, setTitle)}
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
          value=${description}
          onInput=${(e) => handleInputChange(e, setDescription)}
        >${description}</textarea>
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
          value=${author}
          onInput=${(e) => handleInputChange(e, setAuthor)}
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
          value=${url}
          onInput=${(e) => handleInputChange(e, setUrl)}
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
          value=${meta}
          onInput=${(e) => handleInputChange(e, setMeta)}
        >${meta}</textarea>
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
          value=${scratchpad}
          onInput=${(e) => handleInputChange(e, setScratchpad)}
        >${scratchpad}</textarea>
      </li>
    </ul>
  `;
};

export default Settings;