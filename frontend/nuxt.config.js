import redirectMiddleware from './server-middleware/redirect';

const strapiBaseUri = process.env.API_URL || 'http://localhost:8082';
const isProd = process.env.NODE_ENV === 'production';

export default {
    target: 'static',
    // ssr: false,
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        '@nuxtjs/moment',
        '@nuxtjs/google-gtag'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/styles/style.scss'],

    env: {
        strapiBaseUri,
    },
    'google-gtag': {
        id: 'G-VQYDRXG4JT',
        debug: false,
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - economy anxiety - reviews for airlines, business class, lounge, hotels and more.',
        title: 'Home',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon', href: '/favicon.ico'
            },
            {
                link: 'preconnect',
                href: 'https://fonts.googleapis.com'
            },
            {
                link: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossorigin: true
            },
            {
                link: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap'
            },
        ],
    },

    link: [
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Staatliches',
        },
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    serverMiddleware: [
        ...(isProd ? ['redirect-ssl'] : [])
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/apollo',
        '@nuxtjs/markdownit'
    ],

    apollo: {
        clientConfigs: {
            default: '~/plugins/apollo.config.js'
        },
        /**
         * default 'apollo' definition
         */
        defaultOptions: {
            // See 'apollo' definition
            // For example: default query options
            $query: {
                loadingKey: 'loading',
                fetchPolicy: 'cache-and-network',
            },
        },
    },

    markdownit: {
        preset: 'default',
        linkify: true,
        breaks: true,
        injected: true
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        optionsPath: './vuetify.config.js'
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};
