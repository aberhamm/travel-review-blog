const ContentBlock = () => import(
    /* webpackChunkName: "ContentBlock" */
    '~/components/ContentBlock');
const Hero = () => import(
    /* webpackChunkName: "Hero" */
    '~/components/Hero')
const ImageGrid = () => import(
    /* webpackChunkName: "ImageGrid" */
    '~/components/ImageGrid');
const Menu = () => import(
    /* webpackChunkName: "Menu" */
    '~/components/Menu');

export default {
    ComponentPostContentBlock: ContentBlock,
    ComponentHeroHero: Hero,
    ComponentPostCarousel: ImageGrid,
    ComponentMenuMenu: Menu,
}