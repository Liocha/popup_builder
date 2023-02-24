<script lang="jsx">
import Logo from '@/assets/logo.png'
import input from '@/assets/input.png'
export default {
  data() {
    return {
      components: [
        {
          type: 'p',
          value: 'Произвольный текст',
          name: 'текст',
          width: 100,
          height: 30,
          color: '#8B0000',
          fontSize: 14,
          zIndex: 5,
          textAlign: 'start'
        },
        {
          type: 'img',
          name: 'Image',
          url: Logo,
          width: 100,
          height: 100,
          zIndex: 1,

        },
        {
          type: 'input',
          inputType: 'button',
          name: 'Button',
          value: 'Button2',
          width: 100,
          height: 30,
          zIndex: 5,
        },
        // {
        //   type: 'label',
        //   value: 'Hi~我是一段文本',
        //   name: 'Label',
        //   width: 150,
        //   height: 30,
        // },
        // {
        //   type: 'input',
        //   value: '输入',
        //   inputType: 'input',
        //   name: 'Input',
        //   width: 150,
        //   height: 30,
        // },
        // {
        //   type: 'select',
        //   options: [],
        //   name: 'Select',
        //   width: 150,
        //   height: 30,
        // },

        // {
        //   type: 'input',
        //   inputType: 'checkbox',
        //   name: 'Checkbox',
        //   label: '多选',
        //   width: 100,
        //   height: 30,
        // },
        // {
        //   type: 'input',
        //   inputType: 'radio',
        //   name: 'Radio',
        //   label: '单选',
        //   width: 100,
        //   height: 30,
        // },

        // {
        //   type: 'input',
        //   inputType: 'date',
        //   name: 'Date',
        //   value: '2021-10-10',
        //   width: 100,
        //   height: 30,
        // },
        // {
        //   type: 'container',
        //   name: 'Container',
        //   width: 200,
        //   height: 200,
        //   children: [],
        // },
      ],
    }
  },
  methods: {
    handleDrag(e, item) {
      e.dataTransfer.dropEffect = 'copy'
      e.dataTransfer.setData('text/component', JSON.stringify(item))
    },
  },
  render() {
    return (
      <div class="vs-components">
        {this.components.map((item, index) => {
          return (
            <div ondragstart={(e) => this.handleDrag(e, item)} draggable="true" class="components-item" key={index}  style={`background-image: url("/src/assets/${item.type}.png");`}>
              {item.name}
            </div>
          )
        })}
      </div>
    )
  },
}
</script>

<style lang="less" scoped>
.vs-components {
  width: 100px;
  border-right: 1px solid #ececec;
  position: relative;
  overflow-y: scroll;
  background: #f8f8f8;
  &::-webkit-scrollbar {
    display: none;
  }
}
.components-item {
  height: 100px;
  width: 100%;
  float: left;
  display: flex;
  background-size:contain;
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: 50% 25%;
  border-bottom: 1px solid #ececec;
  align-items: center;
  justify-content: center;
  cursor: move;
  flex-direction: column;
  font-weight: 300;
  padding-top: 20px;
}
</style>
