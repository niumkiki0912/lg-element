<template>
  <div>
    <label>{{label}}</label>
    <div>
      <slot></slot>
      <p v-if="errMessage">{{errMessage}}</p>
    </div>
  </div>
</template>

<script>
  import schema from 'async-validator'
  export default {
    name: 'LgFormItem',
    inject:  ['form'],
    props: {
      label: {
        type: String,
      },
      prop: {
        type: String,
      },
    },
    data() {
      return {
        errMessage: ''
      }
    },
    mounted () {
      this.$on('validate', () => {
        this.validate()
      })
    },
    methods: {
      validate() {
        if(!this.prop) return
        const value = this.form.model[this.prop]
        const rules = this.form.rules[this.prop]
        console.log('===>', value, rules);

        const descriptor = {[this.prop]: rules}
        const validator = new schema(descriptor)
        return validator.validate({[this.prop]: value}, errors => {
          console.log('errors===>', errors);
          
          if(errors) {
            this.errMessage = errors[0].message
          } else {
            this.errMessage  = ''
          }
        })
      }
    },
  }
</script>

<style scoped>

</style>