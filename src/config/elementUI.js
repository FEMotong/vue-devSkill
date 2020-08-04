import {
    Button,
    Form
} from 'element-ui'

const components = {
    Button,
    Form
}
const componentHandler = (Vue) => {
        Object.keys(components).forEach(key => {
            Vue.use(components[key])
        })
}

export default componentHandler
