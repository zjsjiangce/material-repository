import CW_Button from './CW_Button.vue';
import { App } from 'vue'

CW_Button.install = ( App) => {
    App.component(CW_Button.name, CW_Button)
}


export default CW_Button;
