import Vue from 'vue'
import Vueform from 'vue-form'

var options = {
    validators: {
        'no-espacios': function(value){
            return !value.includes(' ')
        }
    }
}

Vue.use(Vueform, options)