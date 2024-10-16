<script setup>

const clickFn = () => {
    const links = document.querySelectorAll('a');
    for (const link of links) {
        const newHref = btoa(`AA${link.href}ZZ`);
        link.href = `thunder://${newHref}`;
    }
}
</script>

<template>
    <IframeItem title="迅雷下载"
        :needCode="false"
        column
        class="ifrname-box box">
        <button @click.stop="clickFn">迅雷下载</button>
        <a href="https://ts1.cn.mm.bing.net/th/id/R-C.748160bf925a7acb3ba1c9514bbc60db?rik=AYY%2bJ9WcXYIMgw&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50017%2f0822.jpg_wh1200.jpg&ehk=CMVcdZMU6xxsjVjafO70cFcmJvD62suFC1ytk8UuAUk%3d&risl=&pid=ImgRaw&r=0"
            target="_blank">下载链接1</a>
        <a href="https://ts1.cn.mm.bing.net/th/id/R-C.57384e4c2dd256a755578f00845e60af?rik=uy9%2bvT4%2b7Rur%2fA&riu=http%3a%2f%2fimg06file.tooopen.com%2fimages%2f20171224%2ftooopen_sy_231021357463.jpg&ehk=whpCWn%2byPBvtGi1%2boY1sEBq%2frEUaP6w2N5bnBQsLWdo%3d&risl=&pid=ImgRaw&r=0"
            target="_blank">下载链接2</a>
    </IframeItem>
</template>

<style scoped>
.box {
    padding-top: 20px;
}

button {
    margin: 0 auto 20px;
}

a {
    margin-bottom: 15px;
}

@media screen and (max-width: 768px) {
    .box {
        padding-top: 1.25rem;
    }

    button {
        margin: 0 auto 1.25rem;
    }

    a {
        margin-bottom: 1.15rem;
    }
}
</style>