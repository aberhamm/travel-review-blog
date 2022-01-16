<template>
    <div
        class="hero mt-sm-3 py-6 d-flex flex-column"
        :class="cssClass">
        <div class="text-h4 text-sm-h2">
            {{ heading }}
        </div>
        <v-col sm="10" md="8" class="text-body-1 pa-0 mt-6">
            {{ subtitle }}
        </v-col>
    </div>
</template>

<script>
export default {
    name: 'Hero',
    props: {
        heading: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
        alignment: {
            type: String,
            default: 'center',
        }
    },
    computed: {
        cssClass () {
            if (this.alignment == 'left') {
                return 'align-left text-left';
            } else if (this.alignment == 'center') {
                return 'align-center text-center';
            } else if (this.alignment == 'right') {
                return 'align-right text-right';
            }
        }
    }
};
</script>

<style lang="scss" scoped>
</style>