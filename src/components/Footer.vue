<script>
export default {
  props: {
    controls: Array
  },
  methods: {
    html(data) {
     return  `<${data.type} id='${data.id}'>${data.extra.value}</${data.type}>`
    },
    style(data) {
      return `
       #${data.id} {
        left:${data.transform.x}px;top:${data.transform.y}px;width:${data.transform.width}px;height:${
        data.transform.height
      }px;transform:rotate(${data.transform.rotation}deg);
      position: absolute;
      }`
    },
  }

}
</script>

<template>
  <footer class="vs-footer">
    <ul class="demo-html">
      <li v-for="value in controls">
          {{ html(value) }}
      </li>
    </ul>
    <ul class="demo-css">
      <li v-for="value in controls">
          {{ style(value) }}
      </li>
    </ul>
  </footer>
</template>

<style lang="less" scoped>

li {
  list-style: none;
}

ul {
  border: dashed red;
}

.vs-footer {
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 0 15px;
  background: #f8f8f8;
  border-top: 1px solid #ececec;
  min-height: 200px;

  a {
    margin-right: 24px;
    font-weight: 300;
    font-size: 14px;
    color: #888;
    &:hover {
      color: blue;
    }
  }
}
</style>
