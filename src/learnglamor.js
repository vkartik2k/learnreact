

import { css } from 'glamor'

// make css rules
let rule = css({
  color: 'red',
  ':hover': {
    color: 'pink'
  },
  '@media(min-width: 300px)': {
    color: 'green',
    ':hover': {
      color: 'yellow'
    }
  }
})

glam = () =>{
    <div {...rule} {...another}>
        glam
    </div>

}
