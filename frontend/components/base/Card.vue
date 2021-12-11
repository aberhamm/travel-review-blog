<template>
    <v-card
        v-bind="$attrs"
        v-on="$listeners"
        flat
        tile>
        <slot />
    </v-card>
</template>

<script>
export default {
    name: 'BaseCard',
};
</script>
