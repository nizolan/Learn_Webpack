import { createApp } from "vue";
import { sum } from "./js/math";
const { priceFormat } = require("./js/format");

import "./js/element"

console.log(sum(20, 30));
console.log(priceFormat());

const message = "Hello World";
const names = ["abc", "cba", "nab"];

names.forEach(item => console.log(item));
console.log(message);

// Vue代码
const app = createApp({
  template: "#my-app",
  components: {

  },
  data() {
    return {
      title: "Hello World",
      message: "哈哈哈哈"
    }
  }
})
app.mount("#app");
// const app = createApp(App);
