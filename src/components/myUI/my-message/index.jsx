import {render} from 'vue'

export const message = (info, handler) => {
  let container = document.createElement('div');

  const closeMessage = () => {
    render(null, container);
    document.body.removeChild(container);
    if (info.onClose) info.onClose();
  };

  let pop = <div class="my-message" class={info.type}>
    <div class="my-message-content">{info.message}</div>
  </div>
  
  // 参数一：要渲染的虚拟dom；参数二，要渲染到那个真实dom上
  render(pop, container)
  document.body.appendChild(container)

  setTimeout(closeMessage, info.duration || 3000);
}