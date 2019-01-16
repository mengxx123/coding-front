import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const GarbledText = resolve => require(['@/views/GarbledText'], resolve)
const CoreValue = resolve => require(['@/views/CoreValue'], resolve)
const CoreValueHelp = resolve => require(['@/views/CoreValueHelp'], resolve)
const About = resolve => require(['@/views/About'], resolve)
const TextToAsc2 = resolve => require(['@/views/TextToAsc2'], resolve)
const Binary = resolve => require(['@/views/Binary'], resolve)
const Binary2 = resolve => require(['@/views/Binary2'], resolve)
const Utf8 = resolve => require(['@/views/Utf8'], resolve)
const CharsetConvert = resolve => require(['@/views/CharsetConvert'], resolve)
const Recognition = resolve => require(['@/views/Recognition'], resolve)
const Base64 = resolve => require(['@/views/Base64'], resolve)
const Base64Help = resolve => require(['@/views/Base64Help'], resolve)
const Base32 = resolve => require(['@/views/Base32'], resolve)
const Base16 = resolve => require(['@/views/Base16'], resolve)
const Morse = resolve => require(['@/views/Morse'], resolve)
const MorseHelp = resolve => require(['@/views/MorseHelp'], resolve)
const Hex = resolve => require(['@/views/Hex'], resolve)
const QuotedPrintable = resolve => require(['@/views/QuotedPrintable'], resolve)
const QuotedPrintableHelp = resolve => require(['@/views/QuotedPrintableHelp'], resolve)
const Escape = resolve => require(['@/views/Escape'], resolve)
const AaEncode = resolve => require(['@/views/AaEncode'], resolve)
const JjEncode = resolve => require(['@/views/JjEncode'], resolve)
const Jsfuck = resolve => require(['@/views/Jsfuck'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/garbled_text',
        component: GarbledText
    },
    {
        path: '/core_values',
        component: CoreValue
    },
    {
        path: '/core_values/help',
        component: CoreValueHelp
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/text_to_asc2',
        component: TextToAsc2
    },
    {
        path: '/binary',
        component: Binary2
    },
    {
        path: '/binary_convert',
        component: Binary
    },
    {
        path: '/utf8',
        component: Utf8
    },
    {
        path: '/charset/convert',
        component: CharsetConvert
    },
    {
        path: '/recognition',
        component: Recognition
    },
    {
        path: '/base64',
        component: Base64
    },
    {
        path: '/base64/help',
        component: Base64Help
    },
    {
        path: '/base32',
        component: Base32
    },
    {
        path: '/base16',
        component: Base16
    },
    {
        path: '/morse',
        component: Morse
    },
    {
        path: '/morse/help',
        component: MorseHelp
    },
    {
        path: '/hex',
        component: Hex
    },
    {
        path: '/quoted_printable',
        component: QuotedPrintable
    },
    {
        path: '/quoted_printable/help',
        component: QuotedPrintableHelp
    },
    {
        path: '/escape',
        component: Escape
    },
    {
        path: '/aaencode',
        component: AaEncode
    },
    {
        path: '/jjencode',
        component: JjEncode
    },
    {
        path: '/jsfuck',
        component: Jsfuck
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
