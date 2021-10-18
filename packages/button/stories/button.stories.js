import LgButton from '../'

export default {
  title: 'LgButton',
  component: LgButton
}

export const Text = () => ({
  components: {LgButton},
  template:  `<lg-button @click="handleClick">按钮</lg-button>`,
  methods: {
    handleClick() {
      console.log('click===>');
      
    }
  },
})
