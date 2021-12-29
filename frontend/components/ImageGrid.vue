<template>
    <div class="image-grid">
        <CoolLightBox
            :items="lightboxImages"
            :index="imageIndex"
            :close-on-click-outside-mobile="true"
            @close="imageIndex = null" />
        <div class="grid-item-container">
            <div
                v-for="(image, i) in images"
                :key="i"
                class="grid-item">
                <base-image
                    :src="image.url"
                    height="150px"
                    @click="imageIndex = i" />
            </div>
        </div>
    </div>
</template>

<script>
const BaseImage = () => import('~/components/base/Image');
const CoolLightBox = () => import('vue-cool-lightbox');
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
    name: 'ImageGrid',
    components: {
        BaseImage,
        CoolLightBox,
    },
    props: {
        images: {
            type: Array,
            required: true
        }
    },
    data: () => ({
        imageIndex: null,
    }),
    computed: {
        lightboxImages () {
            return this.images.map(img => img.url)
        }
    }
};
</script>

<style lang="scss" scoped>
.grid-item-container {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    overflow-x: auto;
    gap: .5em;
    grid-template-columns: repeat(auto-fill, calc(50% - 1em));
    grid-auto-columns: calc(50% - 1em);

    @media (min-width: 600px) {
        grid-template-columns: repeat(auto-fill, calc(33% - 1em));
        grid-auto-columns: calc(33% - 1em);
    }

    @media (min-width: 960px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-auto-columns: minmax(200px, 1fr);
        grid-auto-flow: row;
    }

    .grid-item {

    }
}
</style>