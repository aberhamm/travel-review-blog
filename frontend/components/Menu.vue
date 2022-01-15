<template>
    <v-card class="mx-auto">
        <v-list-item
            v-for="item in menu.menu_items"
            :key="item.id"
            two-line>
            <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-card>
</template>

<script>

export default {
    name: 'Menu',
    props: {
        menu: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
