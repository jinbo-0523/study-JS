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

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じんぼ",
//   age: 28
// };
// val4.name = "jinbo";
// val4.address = "東京";
// console.log(val4);
// // オブジェクトのものはconst変数でも変更可能

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// // 配列に書き換え処理可能
// val5[0] = "bird";

// val5.push("monkey");
// console.log(val5);

// // テンプレート文字列
// const name = "光将";
// const age = 32;
// // 私の名前は光将です。年齢は３２歳です。と表示したい
// // 従来
// const massage１ = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(massage１);

// // テンプレート文字列を使うと
// const massage2 = ` 私の名前は${name}です。年齢は${age}です `;
// console.log(massage１);

// // アロー関数
// // 従来
// // function func1(str) {
// //   return str
// // }
// // 変数定義をしてから関数を表示させる
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("fun1(従来関数)です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));
// // 旧式とアロー関数ではthisの扱いが違うので注意

// 分割代入
const myProfile = {
  name: "mitumasa",
  age: 32
};

const massage1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(massage1);

// 分割代入を使って書き換える
const { name, age } = myProfile;
const massage2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(massage2);

// 配列にも分割代入使用可能
const myProfile2 = ["mitumasa", 32];
const massage3 = `僕の名前は${myProfile2[0]}です。歳は${myProfile2[1]}歳です。`;
console.log(massage3);

const [namae, nennrei] = myProfile2;
const massage４ = `私の名前は${namae}だよ。年齢は${nennrei}歳になります。`;
console.log(massage４);
