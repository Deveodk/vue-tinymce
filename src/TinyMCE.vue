<template>
  <div>
  <textarea ref="WysigEditor"></textarea>
  </div>
</template>
<style scoped>
  @import url('//cdnjs.cloudflare.com/ajax/libs/tinymce/4.6.3/skins/lightgray/skin.min.css');
  @import url('//cdnjs.cloudflare.com/ajax/libs/tinymce/4.6.3/skins/lightgray/content.min.css');
</style>
<script>
    // Import TinyMCE
    import tinymce from 'tinymce/tinymce'
    // A theme is also required
    import 'tinymce/themes/modern/theme'
    // Any plugins you want to use has to be imported
    import 'tinymce/plugins/paste'
    import 'tinymce/plugins/link'
    export default{
        data () {
            return {
                content: ''
            }
        },
        props: {
            data: {
                required: false,
                type: String
            },
            height: {
                required: false,
                default: 300
            }
        },
        mounted () {
            this.initJS();
        },
        methods:{
            initJS: function(){
                this.$nextTick(function () {
                  let self = this;
                  tinymce.init({
                        target: self.$refs.WysigEditor,
                        height: self.height,
                        skin: false,
                        setup: function (editor) {
                            editor.on('NodeChange Change keyup', function () {
                                self.content = this.getContent()
                                self.$emit('input', self.content)
                                self.$emit('change', self.content)
                            })
                            editor.on('init', function () {
                                this.setContent(self.data)
                                self.content = this.getContent()
                                self.$emit('input', self.content)
                            })
                        }
                    })
                })
            }
        },
        beforeDestroy: function(){
            tinymce.remove()
        }
    }
</script>