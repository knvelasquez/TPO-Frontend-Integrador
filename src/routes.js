// Define route components.
// These can be imported from other files
import Pagina1 from './components/Pagina1.vue'
import Pagina2 from './components/Pagina2.vue'
import Pagina3 from './components/Pagina3.vue'
import Formulario from './components/Formulario.vue'

// Define some routes
// Each route should map to a component.
const routes = [
    { path: '/pagina1', component: Pagina1 },
    { path: '/pagina2', component: Pagina2 },
    { path: '/pagina3', component: Pagina3 },
    { path: '/formulario', component: Formulario },
];

export default routes