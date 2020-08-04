import {
    Button,
    Form,
    Row
} from 'element-ui'

const components = {
    Button,
    Form,
    Row
}
const componentHandler = (Vue) => {
        Object.keys(components).forEach(key => {
            Vue.use(components[key])
        })
}

export default componentHandler
