import axios from 'axios';
 
export async function queryMusic () {
  
  return axios({
    url: `http://localhost:3000/music`,
    method: 'get'
  })
}
export async function productList () {
  
  return axios({
    url: `http://localhost:3000/product`,
    method: 'get'
  })
}
