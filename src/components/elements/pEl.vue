<!-- <template>
    <div :style="styleObject()" v-html="this.params.value" @click="clickHandler" :id="this.meta.id" ref="editable" @blur="handleBlur"> </div>
</template> -->

<template>
    <div :style="styleObject()"  @click="clickHandler" :id="this.meta.id" ref="editable"> </div>
</template> 
  
<script>
import { EVENT_COMPONENT_EDITABLE } from '@/event-enums';

export default {
  emits: ['click'],
    data: function() {
      return {
        greeting: "Hello",
      };
    },
    props: ['params', 'meta'],
    methods: {
      tearDown () {
        this.medium.destroy()
      },
      styleObject() {
        return {
          color: this.params.color,
          fontSize: `${this.params.fontSize}px`,
          textAlign: `${this.params.textAlign}`
        }
      },
    },
    mounted() {
      this.$refs.editable.innerHTML = this.params.value
      this.medium  = new MediumEditor(this.$refs.editable);
      this.medium.subscribe('editableInput', 
            (event, editable) => {
             this.emitter.emit(EVENT_COMPONENT_EDITABLE, {text : this.medium.getContent()})
            });
     },
     updated() {
      console.log('updated')
     },
     beforeUnmount (evt) {
      this.tearDown()
    },
  };
</script>
  
<style scoped>
</style>



