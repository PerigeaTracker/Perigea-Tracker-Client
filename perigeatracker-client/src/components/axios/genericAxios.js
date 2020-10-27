const axios = require('axios')

class genericAxios {

    constructor({ url }) {
        this.url = url 
        this.endpoints ={}
    }


    createEntity(entity){
        this.endpoints[entity.name] = this.createBasicCRUDEndpoints(entity)
    }
  

    createEntity(arrayofEntity){
        arrayOfEntity.forEach(this.createEntity.bind(this))
    }

    createBasciCRUDEndpoints ({ name }) {
        var endpoints = {}
        const resouceURL = '${this.url}/${name}'

        endpoints.getAll = ({ query} = {}) => axios.get( resouceURL, { params : {query} } )

        endpoints.getOne = ({ id }) => axios.get('${resouceURL}/${id}')

        endpoints.create = (toCreate) => axios.post(resouceURL,toCreate)

        endpoints.delete = ({ id }) => axios.post('${resouceURL}/${id}')

        endpoints.update = (toUpdate) => axios.post(resouceURL,toUpdate)

        return
    }
}