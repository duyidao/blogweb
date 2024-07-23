import {render} from 'vue'

export const signProp = (content, handler) => {
    let div = document.createElement('div')
    let pop = <div class="dialog-cover">
  	    <div class="dialog-cover-content">
            <div class="content">{content}</div>
            <div class="btns">
      		    <button onClick={() => {
                    document.body.removeChild(div) // 这里需要真实dom，虚拟dom会报错
                    handler.cancel && handler.cancel()
                }}>不同意</button>
                <button onClick={() => {
                    document.body.removeChild(div) // 这里需要真实dom，虚拟dom会报错
                    handler.confirm && handler.confirm()
                }}>确认签署</button>
      	    </div>
        </div>
    </div>
  
  // 参数一：要渲染的虚拟dom；参数二，要渲染到那个真实dom上
  render(pop, div)
  document.body.appendChild(div)
}