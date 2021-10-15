<template>
  <div>
    <input
      v-bind="$attrs"
      :type="type"
      :value="value"
      @input="handelInput">
  </div>
</template>

<script>
  export default {
    name: 'lgInput',
    inheritAttrs: false,
    props: {
      value: {
        type: String,
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    methods: {
      handelInput(e) {
        this.$emit('input', e.target.value)
        const findParent = parent => {
          while(parent) {
            if(parent.$options.name === 'LgFormItem') {
              console.log('parent===>', parent);
              break
            } else {
              parent = parent.$parent
            }
          }
          return parent
        }

        const parent = findParent(this.$parent)
        console.log('===>', parent);
        parent && parent.$emit('validate')
      }
    },
  }
</script>

<style scoped>

</style>