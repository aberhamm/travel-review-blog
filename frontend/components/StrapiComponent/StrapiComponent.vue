<template>
    <component :is="strapiComponent" v-bind="$attrs">
        <slot />
    </component>
</template>

<script>
import { getStrapiComponent } from './utils';

export default {
    name: 'StrapiComponent',
    props: {
        typename: {
            type: String,
            required: true,
        }
    },
    computed: {
        strapiComponent () {
            return getStrapiComponent(this.typename);
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
