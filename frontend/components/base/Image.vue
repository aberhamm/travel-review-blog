<template>
    <v-img
        v-bind="$attrs"
        v-on="$listeners"
        flat
        tile>
        <slot />
    </v-img>
</template>

<script>
export default {
    name: 'BaseImage'
};
</script>
