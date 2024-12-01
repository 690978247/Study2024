import $ from 'jquery'
import styles from './index.module.less'

function init() {
  $('<h1>').text('封面').addClass(styles.red).appendTo('#app')
}

init()
console.log('cover')