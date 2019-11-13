// $(function(){
//   $("left_hover_content").hover(
//     $(function(){
//       $(".left_hover_text").fadeIn();
//     },
//     function(){
//       $(".left_hover_text").fadeOut();
//     })
//   );

// });


// $(function() {
//   $(".left_hover_text").css("color", "green");
//  });

// let content = document.getElementsByClassName("left_hover_content");

// function textFade(){
//   console.log("Hello world");
// }

// content.addEventListener("hover",textFade);


// function printHelloWithButton() {
//   let btn = document.getElementsByClassName("left_hover_content");

//   function printHello() {
//     console.log("Hello world");
//   }
//   // 関数内で定義された関数は、関数の中でしか呼び出せない性質があるだけで、
//   // 通常の関数同様に呼び出せる

//   btn.addEventListener("click", printHello);
// }
// // 一連の処理をまとめた関数を作る

// window.addEventListener("load", printHelloWithButton);

window.onload = function() {
document.addEventListener(
  "DOMContentLoaded", e => {
    let modal_open = document.getElementById("left_hover_content");
    modal_open.onclick = function () {
      $('.left_hover_text').fadeIn();
      document.getElementById('modal-close-btn').onclick = function () {
        $('#overlay').fadeOut();
      };
      document.getElementById("delete-comformation-btn").onclick = function () {
        document.getElementById("item-delete-btn").click();
      };
    };
  },
  false
);

};