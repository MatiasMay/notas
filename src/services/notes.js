import axios from 'axios';

const url = 'http://localhost:3001/notes/'

const getAll = () =>{
    const request = axios.get(url)
    const nonExist = {
        id:1000,
        content: 'This note is not saved to server',
        date: '2023:03-15',
        important: true
    }
    return request.then(response => response.data.concat(nonExist))
}

const create = newObject => {
    const request = axios.post(url,newObject)
    return request.then(response => response.data)
}

const update = (id,newObject) => {
    const request = axios.put(`${url}/${id}`,newObject)
    return request.then(response => response.data)
}

export default {getAll,create,update}