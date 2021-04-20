// 変数宣言
// const let
// var val1 = "var変数";
// console.log(val1);

// var val1 = "var変数を上書き";
// console.log(val1);

// // varは再宣言できる

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能

// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
// val3 = "const変数を上書き"

// constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "じんぼ",
  age: 28
};
val4.name = "jinbo";
val4.address = "東京";
console.log(val4);
// オブジェクトのものはconst変数でも変更可能

// constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
// 配列に書き換え処理可能
val5[0] = "bird";

val5.push("monkey");
console.log(val5);
