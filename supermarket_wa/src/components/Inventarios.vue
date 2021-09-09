<template>
    <div id="Categories">
        <h2>Usuario autenticado: <span>{{username}}</span></h2>
        <button v-on:click="getInventarios">Obtener inventarios</button>

         <select v-if="ids" v-model="id">
           <option v-for="id in ids" :key='id.id'>
             {{id.id}}
           </option>
         </select>
         <button v-if="id" v-on:click="getInventarioById">Obtener inventario por ID</button>
         <h2 v-if="inventario">
           Se ha generado un total de <span>{{inventario.cantidad}} {{inventario.producto.unit_measurement}}</span> del producto <span>{{inventario.producto.name}}</span> que es un <span>{{inventario.producto.description}}</span> con categoria <span>{{inventario.producto.category.name}}</span></span>
           <!--{ "_id": "613a2cbcc759f6b778e949da", "cantidad": 13, "producto": { "name": "P1", "description": "Producto 1", "unit_measurement": "Units", "quantity": 12, "category": { "name": "C1", "description": "Categoria 1" } } }
         --></h2>
    </div>
</template>

<script>

    import axios from 'axios';
    const api = 'http://supermarket-api:5000/graphql';
    export default {

        name: 'Categories',

        data: function (){
            return {
                ids: null,
                id: null,
                inventario:null,
            }
        },

        created: function() {

            this.username = this.$route.params.username
            let self = this
        },

        methods: {
            getInventarioById: function (){
              this.username = this.$route.params.username
              let self = this
              axios.post(api,{
              query:`
              query{
                inventarioById(id: "${self.id}"){
                  _id
                  cantidad
                  producto{
                    name
                    description
                    unit_measurement
                    quantity
                    category{
                      name
                      description
                    }
                  }
                }
              }
              `
            })
            .then(result=>{
              self.inventario=result.data.data.inventarioById;
            })
            .catch(e => alert("ERROR de Servidor"))

            },

            getInventarios: function() {

                this.username = this.$route.params.username
                let self = this

                axios.post(api,
                  {
                    query: `
                      query{
                          allInventarios{
                            _id
                          }
                        }
                      `
                  }
                )
                    .then((result) => {
                        self.ids = result.data.data.allInventarios.map(x=> {return {id: x._id, values:x._id}});
                    })
                    .catch((error) => {
                        console.log(error)
                        alert("ERROR de Servidor");
                    });
            }
        }
    }
</script>

<style>
    #Categories{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #Categories h2{
        font-size: 25 px;
        color: #283747;
    }
    #Categories span{
        color: crimson;
        font-weight: bold;
    }
</style>
