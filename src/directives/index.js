import resize from './resize.js'
import close from './close.js'
import slideIn from './slideIn.js'
import lazy from './lazy.js'

const directives = {
  resize,
  close,
  slideIn,
  lazy,
}
   
export default {
  /**
   * 安装所有指令到Vue应用中
   *
   * @param app Vue应用实例
   */
  install(app) {
    Object.keys(directives).forEach((key) => {
        app.directive(key, directives[key])
    })
  }
}