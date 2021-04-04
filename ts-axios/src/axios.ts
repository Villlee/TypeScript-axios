import {AxiosIntance} from './types'
import Axios from './core/Axios'
import {extend} from './helpers/util'

function createIntance():AxiosIntance{
    const context = new Axios();
    const instance = Axios.prototype.request.bind(context)

    extend(instance,context)

    return instance as AxiosIntance
}

const axios = createIntance()

export default axios