const components = {
  'search-bar': Search,
  'todo-list': Todo,
  'status-bar': Statusbar,
  'current-time': Clock,
  'weather-forecast': Weather,
  'tabs-list': Tabs,
  'modal-popup': Modal
};

Object.keys(components).forEach(componentName => {
  if (!CONFIG.disabled.includes(componentName))
    customElements.define(componentName, components[componentName]);
});
