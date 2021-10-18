import LgLink from '../'

export default {
  title: 'LgLinkt',
  component: LgLink
}

export const Link = () => ({
  components: {  LgLink  },
  template:  `<lg-link :disabled="false" href="http://www.baidu.com">baidu</lg-link>`,
})

