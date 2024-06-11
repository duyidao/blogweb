<script setup>
import bgImg from '../../../assets/img/puke.jpg'
</script>

<template>
    <svg viewBox="0 0 500 300">
        <defs>
            <filter id="conform">
                <feImage :href="bgImg"
                    result="ORIGIN_IMAGE"
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none">
                </feImage>
                <feColorMatrix in="ORIGIN_IMAGE"
                    type="saturate"
                    values="0"
                    result="GRAY_IMAGE"></feColorMatrix>
                <feDisplacementMap in="SourceGraphic"
                    in2="GRAY_IMAGE"
                    scale="15"
                    xChannelSelector="R"
                    yChannelSelector="R"
                    result="TEXTURED_TEXT"></feDisplacementMap>
                <feImage :href="bgImg"
                    in="TEXTURED_TEXT"
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    result="BG">
                </feImage>
                <feColorMatrix in="TEXTURED_TEXT"
                    type="matrix"
                    values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 9 0"
                    result="OPACITY_TEXT"></feColorMatrix>
                <feBlend in="BG"
                    in2="OPACITY_TEXT"
                    mode="multiply"
                    result="BLENDED_TEXT"></feBlend>
            </filter>
        </defs>
        <Image :href="bgImg"
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="none">
        </Image>
        <text x="50%"
            y="50%"
            font-size="10em"
            font-weight="bold"
            text-anchor="middle"
            alignment-baseline="middle"
            fill="red"
            filter="url(#conform)">
            Logo
        </text>
    </svg>
</template>

<style scoped>

</style>