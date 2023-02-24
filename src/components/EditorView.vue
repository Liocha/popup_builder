<script lang="jsx">
import CellWrapperVue from "@/components/CellWrapper.vue";
import PluginDropFileVue from "@/components/PluginDrop.vue";

export default {
  props: {
    value: Array,
    parentId: String,
    parent: Object,
    size: Object
  },
  methods: {
    /**
     * @type {HTMLElement}
     */
    getWrapperElement() {
      return this.$refs.editor
    },
  },
  computed: {
    style() {
      return `width:${this.size.width}px;height:${
        this.size.height
      }px;`
    },
  },
  render() {
    return (
      <div class={`vs-editor ${this.parentId ? 'nest-editor' : 'root-editor'}`}>
        <div class="vs-editor-canvas" ref="editor" style={this.style}>
          {this.value.map((item) => {
            return <CellWrapperVue key={item.id} item={item} />
          })}
          {/***Inject Plugins**/}
          {this.$slots.default()}
          <PluginDropFileVue parentId={this.parentId} length={this.value.length} />
        </div>
      </div>
    )
  },
}
</script>

<style lang="less">
.vs-editor-canvas {
//  width: 100%;
//  height: 100%; 
//  width: 400px;
//  height: 400px;
  border: 1px solid;
}

.root-editor > .vs-editor-canvas {
  transform: scale(1);
  transform-origin: top left;
}
</style>
