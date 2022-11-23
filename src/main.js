import { createApp } from 'vue'
import './assets/scss/style.scss'
import '../node_modules/bootstrap'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faWindows } from '@fortawesome/free-brands-svg-icons'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faMagnifyingGlass, faFileLines, faApple, faWindows, faAndroid, faMugSaucer, faCubes, faLaptop, faWrench, faChevronRight, faArrowRightLong, faCopyright, faFacebookF, faTwitter, faInstagram, faYoutube, faChevronUp)

/* add font awesome component */
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')