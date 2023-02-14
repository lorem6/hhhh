import $ from "jquery";
export default {
  sayHello() {
    console.log("你好 webpack");
  },
  setH() {
    $("body").append("<h1>我是jQuery</h1>");
  },
};
