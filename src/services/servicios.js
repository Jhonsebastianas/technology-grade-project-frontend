import axios from 'axios';
import ConstantsList from '@constants/Constants';
import AuthHeader from '@services/auth-header'

class Servicios {
    constructor() {
        this.apiEndpoint = ConstantsList.API_ENDPOINT
        this.isPublic = true
        this.isPrivate = false
        this.module = ''
        this.path = ''
    }

    get post(parameters, success, error) {
        const completePath = this.apiEndpoint + this.module + '/' + this.path
        let options = {}
        if (this.isPrivate) {
            options = { 'headers': AuthHeader.authHeader() }
            axios.post(completePath, parameters, options)
                .then(success)
                .catch(error)
        } else {
            axios.post(completePath, parameters)
                .then(success)
                .catch(error)
        }
    }

    get get(parameters, success, error) {
        const completePath = this.apiEndpoint + this.module + '/' + this.path
        let options = {}
        if (this.isPrivate) {
            options = { 'headers': AuthHeader.authHeader() }
            axios.post(completePath, parameters, options)
                .then(success)
                .catch(error)
        } else {
            axios.post(completePath, parameters)
                .then(success)
                .catch(error)
        }
    }

    setPath(path) {
        this.path = path
    }

    // Contrucción de la clase
    withEndpoint(endpoint) {
        this.apiEndpoint = endpoint
        return this
    }

    withIsPublic(isPublic) {
        this.isPublic = isPublic
        return this
    }

    withIsPrivate(isPrivate) {
        this.isPrivate = isPrivate
        return this
    }

    withModule(modulo) {
        this.module = modulo
        return this
    }

    withPath(path) {
        this.path = path
        return this
    }

    build() {
        return {
            endpoint: this.apiEndpoint,
            isPublic: this.isPublic,
        }
    }
}

module.exports = Servicios