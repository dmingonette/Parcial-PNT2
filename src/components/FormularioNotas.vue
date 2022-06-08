<template>

  <section class="formulario-notas">
    <h1>Notas</h1>

    <vue-form :state="formState" @submit.prevent="enviar()">
      <validate tag="div">
        <!-- elemento de entrada -->
        <label for="nombre">Nombre</label>
        <input
          type="text" 
          id="nombre"
          name="nombre"
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.nombre" 
          required
          :minlength="nombreMinLength"
          :maxlength="nombreMaxLength"
          no-espacios
        />
  
        <!-- mensajes de validacion -->
        <field-messages name="nombre" show="$dirty">
          <!-- <div class="alert alert-success mt-1">Success!</div> -->
          <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
          <div slot="minlength" class="alert alert-danger mt-1">Este campo requiere como minimo {{nombreMinLength}} caracteres</div>
          <div slot="maxlength" class="alert alert-danger mt-1">Este campo requiere como maximo {{nombreMaxLength}} caracteres</div>
          <div slot="no-espacios" class="alert alert-danger mt-1">No se permiten espacios intermedios</div>

        </field-messages>
      </validate>

      <validate tag="div">
        <!-- elemento de entrada -->
        <label for="apellido">Apellido</label>
        <input
          type="text" 
          id="apellido"
          name="apellido"
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.apellido" 
          required
          :minlength="nombreMinLength"
          :maxlength="nombreMaxLength"
          no-espacios
        />
  
        <!-- mensajes de validacion -->
        <field-messages name="apellido" show="$dirty">
          <!-- <div class="alert alert-success mt-1">Success!</div> -->
          <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
          <div slot="minlength" class="alert alert-danger mt-1">Este campo requiere como minimo {{nombreMinLength}} caracteres</div>
          <div slot="maxlength" class="alert alert-danger mt-1">Este campo requiere como maximo {{nombreMaxLength}} caracteres</div>
          <div slot="no-espacios" class="alert alert-danger mt-1">No se permiten espacios intermedios</div>

        </field-messages>
      </validate>

      <validate tag="div">
        <!-- elemento de entrada -->
        <label for="nota">Nota</label>
        <input
          type="number" 
          id="nota"
          name="nota"
          class="form-control"
          autocomplete="off"
          v-model.number="formData.nota" 
          required
          :min="notaMin"
          :max="notaMax"
        />
  
        <!-- mensajes de validacion -->
        <field-messages name="nota" show="$dirty">
          <!-- <div class="alert alert-success mt-1">Success!</div> -->
          <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
          <div slot="min" class="alert alert-danger mt-1">La nota minima permitida es de {{notaMin}}</div>
          <div slot="max" class="alert alert-danger mt-1">La nota maxima permitida es de {{notaMax}}</div>
        </field-messages>
      </validate>

      <button class="btn btn-success my-3" :disabled="formState.$invalid">Enviar</button>
    </vue-form>
    <div v-if="alumnos.length" class="table-responsive">
      <table class="table table-dark">
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Nota</th>
        </tr>
        <tr v-for="(alumno, index) in alumnos" :key="index">
          <td>{{alumno.nombre}}</td>
          <td>{{alumno.apellido}}</td>
          <td :style="getColorNota(alumno.nota)">{{alumno.nota}}</td>
        </tr>
        <tr>
          <th>Nota promedio</th>
          <th :style="getColorNota(calcularPromedio.prom)">{{calcularPromedio.prom}}</th>
        </tr>
      </table>
      
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'formulario-notas',
    props: [],
    mounted () {

    },
    data () {
      return {
        formData: {},
        formState: {},
        nombreMinLength: 3,
        nombreMaxLength: 15,
        notaMin: 0,
        notaMax: 10,
        alumnos: [],
      }
    },
    methods: {
      getInicialData(){
        return{
          nombre:'',
          apellido:'',
          nota:'',
          
        }
      },
      getColorNota(nota) {
        return {
          color: nota < 4 ? "red" : nota < 7 ? "yellow" : "green",
        };
      },
      enviar(){
        let alumno = {
          "nombre":this.formData.nombre,
          "apellido":this.formData.apellido,
          "nota":this.formData.nota,
        }
        console.log(alumno)
        this.alumnos.push(alumno)
        console.log(this.alumnos)
        this.formData = this.getInicialData();
        this.formState._reset(); // reset de los estados del vue-form
      }
    },
    computed: {
      calcularPromedio(){
        let total = 0
        let cant = this.alumnos.length
        this.alumnos.forEach(alumno => {
          total += alumno.nota
        });

        return {
          prom: total/cant,
        }
      }
      
    }
}


</script>

<style scoped lang="css">
  .formulario-notas {

  }
  table{
    background-color: grey;
  }
</style>
