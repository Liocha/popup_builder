<script lang="jsx">
import PropCheckInputVue from "@/components/props/PropCheckInput.vue";
import PropColorInputVue from "@/components/props/PropColorInput.vue";
import PropGridInputVue from "@/components/props/PropGridInput.vue";
import PropNumberInputVue from "@/components/props/PropNumberInput.vue";
import PropRadioInputVue from "@/components/props/PropRadioInput.vue";
import PropTextInputVue from "@/components/props/PropTextInput.vue";

const PropInputImpl = {
  grid: PropGridInputVue,
  radio: PropRadioInputVue,
  number: PropNumberInputVue,
  checkbox: PropCheckInputVue,
  text: PropTextInputVue,
  color: PropColorInputVue
}
export default {
  props: ['controlled', 'modalData'],
  emits: ['change'],
  data() {
    return {
      inputs: [
        { type: 'number', name: 'x' },
        { type: 'number', name: 'y' },
        { type: 'number', name: 'width' },
        { type: 'number', name: 'height' },
        { type: 'number', name: 'rotation' },
        { type: 'number', name: 'minWidth' },
        { type: 'number', name: 'minHeight' },
        { type: 'grid', name: 'grid' },
        {
          type: 'radio',
          name: 'axis',
          options: [{ label: 'y', value: 'y' }, { label: 'x', value: 'x' }, { label: 'xy', value: 'xy' }],
        },
        { type: 'checkbox', name: 'acceptRatio' },
        { type: 'checkbox', name: 'draggable' },
        { type: 'checkbox', name: 'resizable' },
        { type: 'checkbox', name: 'rotatable' },
        { type: 'checkbox', name: 'active' },
        { type: 'checkbox', name: 'parent' },
      ],
      extraInputs: [
        { type: 'text', name: 'value' }, 
        { type: 'text', name: 'label' }, 
        { type: 'color', name: 'color'},
        { type: 'number', name: 'fontSize'},
        { type: 'number', name: 'zIndex'},
        { type: 'radio', name: 'textAlign', options: [{label: 'L', value: 'start'}, {label: 'C', value: 'center'}, {label: 'R', value: 'end'}, {label: 'J', value: 'justify'}]},
        { type: 'text', name: 'url' },
      ],
      editor: ''
    }
  },
  methods: {
    customChange(e, item) {
      this.$emit('change', {
        ...item,
        value: e,
      })
    },
    getTextArea(name, val, func) {
      if(name == 'value') {
        return <textarea onInput={func} ref="header"> { val }</textarea>;
      }
    },
    extraChange(e, item) {
      this.$emit('change', {
        ...item,
        value: e.target.value,
        checked: e.target.checked,
        extra: true,
      })
    },
    eChange(e, item) {
      console.log(e);
      this.$emit('change', {
        ...item,
        value: e,
        extra: true,
      })
    },
    sizeChange(e, name) {
      this.$emit('change', {
        value: e,
        name: name
      })
    }
  },
  render() {
    return (
      <div class="vs-inspector">

        <div class="text-center">Modal Size</div>
            <div class="input-item" >
              <label class="input-label">width</label>
              <input class="input-value" value={this.modalData.width} disabled/>
            </div>
            <div class="input-item" >
              <label class="input-label">height</label>
              <PropNumberInputVue 
                value={this.modalData.height}
                onInput={(e) => this.sizeChange(e, 'sizeChange')}
                />
        </div>

        <div class="text-center">DDR Props</div>
        {this.inputs.map((item) => {
          let DyInput = PropInputImpl[item.type]
          return (
            <div class="input-item" key={item.name}>
              <label class="input-label">{item.name}</label>
              <DyInput
                options={item.options}
                value={this.controlled[item.name]}
                onInput={(e) => this.customChange(e, item)}
              />
            </div>
          )
        })}

        {/* 
        <div class="text-center">Extra Props</div>
        {this.controlled &&
          this.controlled.extra &&
          this.extraInputs
            .filter((item) => item.name in this.controlled.extra)
            .map((item) => {
              return (
                <div class="input-item" key={item.name}>
                  <label class="input-label">{item.name}</label>
                  <input
                    onInput={(e) => this.extraChange(e, item)}
                    class="input-value"
                    type={item.type}
                    checked={this.controlled.extra[item.name]}
                    value={this.controlled.extra[item.name]}
                  />
                </div>
              )
            })}
        */}

        <div class="text-center">Extra Props </div>
        {this.controlled &&
          this.controlled.extra &&
          this.extraInputs
            .filter((item) => item.name in this.controlled.extra)
            .map((item) => {
              let DyInput = PropInputImpl[item.type]
              return (
                  <div class="input-item" key={item.name}>
                    <label class="input-label">{item.name}</label>
                    <DyInput
                      options={item.options}
                      value={this.controlled.extra[item.name]}
                      onInput={(e) => this.eChange(e, item)}
                    />
                  </div>
              )
            })}
      </div>
    )
  },
}
</script>

<style lang="less">
.vs-inspector {
  width: 240px;
  border-left: 1px solid #ececec;
  background: #f8f8f8;
  padding: 15px;
  overflow-y: auto;
  .input-item {
    margin-bottom: 12px;
    display: flex;
  }
  .input-label {
    display: inline-block;
    width: 100px;
    color: #555;
  }
  .input-value:not([type='checkbox']) {
    height: 24px;
    padding: 0;
    border-radius: 0;
    border: 1px solid #d3d3d3;
    padding-left: 10px;
    flex: 1;
    width: 0;
  }

  .text-center {
    text-align:center;
    padding: 15px;
    font-weight: bold;
  }
}
</style>
