import colors from 'vuetify/es5/util/colors';

export default {
    customVariables: ['~/styles/variables.scss'],
    treeShake: true,
    theme: {
        options: {
            customProperties: true,
        },
        light: true,
        themes: {
            light: {
                background: colors.blueGrey.lighten5,
                'text-color--primary': colors.grey.darken4,
            },
        },
    },
}