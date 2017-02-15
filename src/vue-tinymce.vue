<template>
    <textarea id="WysigEditor"></textarea>
</template>
<script>
    export default{
        props: ['content'],
        ready(){
            this.initJS();
        },
        watch:{
            'content': 'updateTinyMCE',
        },
        methods:{
            updateTinyMCE: function(){
                if(this.content == ''){
                    tinymce.activeEditor.setContent(this.content)
                }
            },
            initJS: function(){
                this.$nextTick(function () {
                    var self = this;
                    tinymce.init({
                        selector: "#WysigEditor",
                        theme: "modern",
                        height: 300,
                        setup: function (editor) {
                            // when typing keyup event
                            editor.on('keyup', function () {
                                // get new value
                                var new_value = tinymce.get('WysigEditor').getContent(self.value);
                                self.content = new_value;
                            });
                        }
                    });
                });
            }


        },
        beforeDestroy: function(){
            tinymce.remove()
        }


    }
</script>