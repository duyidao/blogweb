<script setup>

</script>

<template>
  <div>在 Vue 3 + Vite 项目中，如果你遇到了修改端口号后仍然报错的问题，这通常是因为以下几个原因：

    端口号已被占用：如果端口号已经被其他应用程序占用，Vite 将无法启动服务器。你可以尝试更改为另一个端口号，或者关闭占用该端口的应用程序。

    权限问题：如果你尝试监听的端口号低于 1024（例如 80 端口），则需要管理员权限。你可以尝试使用更高的端口号，或者使用 sudo 命令（在 Linux 或 macOS 上）来运行你的开发服务器。

    配置文件错误：确保你的 vite.config.js 文件中的 server 配置是正确的。</div>
</template>

<style scoped>
div {
    width: 100%;
    padding: 20px;
    border: 50px solid transparent;
    border-image: url('./border.svg') 50 round;
}
</style>