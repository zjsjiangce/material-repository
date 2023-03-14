---
to: packages/<%= folder %>/src/index.js

---
import <%= folder %> from './src/<%= folder %>.vue';
import { App } from 'vue'

<%= folder %>.install = ( App) => {
    App.component(<%= folder %>.name, <%= folder %>)
}


export default <%= folder %>;
