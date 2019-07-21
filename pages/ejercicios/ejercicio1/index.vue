<template>
  <div>
    <h1 v-for="item in data" :key="item.id">
      {{ item.id }}: {{ item.title }}
      <br>
    </h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  asyncData({ router, paramas, error }){
    let categoria="w"
    return axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res)=>{
       return {
         data: res.data,
       };
     }).catch((e)=>{
        error({ statusCode: 404, massege:'no llega'})
        
     })
 }
}
</script>
