const Menu = () => import(
    /* webpackChunkName: "Menu" */
    '~/components/Menu');
const ImageGrid = () => import(
    /* webpackChunkName: "ImageGrid" */
    '~/components/ImageGrid');
const ContentBlock = () => import(
    /* webpackChunkName: "ContentBlock" */
    '~/components/ContentBlock');

export default {
    ComponentMenuMenu: Menu,
    ComponentPostCarousel: ImageGrid,
    ComponentPostContentBlock: ContentBlock,
}