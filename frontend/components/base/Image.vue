<template>
    <v-img
        v-bind="$attrs"
        v-on="$listeners"
        class="grey lighten-2"
        flat
        tile>
        <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center">
                <v-progress-circular
                    indeterminate
                    color="grey lighten-5" />
            </v-row>
        </template>
    </v-img>
</template>

<script>
export default {
    name: 'BaseImage',
};
</script>
