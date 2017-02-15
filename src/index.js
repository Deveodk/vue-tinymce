import Tinymce from './vue-tinymce.vue'

const VueTinyMCE = {

    install: (Vue, options) => {
        Vue.component('vue-tinymce', Tinymce)
    }

}
if (typeof module === 'object' && module.exports) {
    module.exports = VueTinyMCE;
}