import axios from 'axios'
export default {
  methods:{
      login(){
        axios.post(`https://jsonplaceholder.typicode.com/posts`).then((res)=>{
        return {
          data: res.data,
        }}).catch((e)=>{
          error({ statusCode: 404, massege:'no llega'}) 
      })
        let prueba= true//data.boleano
        let login= prueba == true? true: false
        
        return login
      }
    }
}   