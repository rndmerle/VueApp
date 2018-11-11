import axios from 'axios'

let $backend = axios.create({
  baseURL: '/api',
  timeout: 5000
  // ,
  // headers: { 'crossDomain': true, 'Content-Type': 'application/json' }
})

// Response Interceptor to handle and log errors
$backend.interceptors.response.use(function (response) {
  return response
}, function (error) {
  // eslint-disable-next-line
  console.log(error)
  return Promise.reject(error)
})

$backend.$fetchItems = () => {
  return $backend.get(`wqmt/`)
    .then(response => response.data)
}

$backend.$fetchItem = (itemID) => {
  return $backend.get(`wqmt/${itemID}`)
    .then(response => response.data)
}

$backend.$searchItems = (searchTerm) => {
  return $backend.get(`wqmt/?search=${searchTerm}`)
    .then(response => response.data)
}

$backend.$postItem = (payload) => {
  return $backend.post(`wqmt/`, payload)
    .then(response => response.data)
}

$backend.$updateItem = (itemID, payload) => {
  return $backend.put(`wqmt/${itemID}/`, payload)
    .then(response => response.data)
}

$backend.$deleteItem = (itemID) => {
  return $backend.delete(`wqmt/${itemID}`)
    .then(response => response.data)
}

export default $backend
