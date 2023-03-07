import Button from './Button.vue';
import { App } from 'vue'

Button.install = ( App) => {
    App.component(Button.name, Button)
}


export default Button;
