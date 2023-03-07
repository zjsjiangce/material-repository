---
to: packages/<%= folder %>/src/index.js

---
import <%= name %> from './src/<%= name %>.vue';
import { App } from 'vue'

<%= name %>.install = ( App) => {
    App.component(<%= name %>.name, <%= name %>)
}


export default <%= name %>;
