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

// // 分割代入
// const myProfile = {
//   name: "mitumasa",
//   age: 32
// };

// const massage1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(massage1);

// // 分割代入を使って書き換える
// const { name, age } = myProfile;
// const massage2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(massage2);

// // 配列にも分割代入使用可能
// const myProfile2 = ["mitumasa", 32];
// const massage3 = `僕の名前は${myProfile2[0]}です。歳は${myProfile2[1]}歳です。`;
// console.log(massage3);

// const [namae, nennrei] = myProfile2;
// const massage４ = `私の名前は${namae}だよ。年齢は${nennrei}歳になります。`;
// console.log(massage４);

// // デフォルト値、引数
// const sayHallo = (name) => console.log(`こんにちは、${name}さん！！`);
// sayHallo("mitumasa");
// // こんにちは、mitumasaさん！！
// sayHallo();
// // こんにちは、undefinedさん！！になってしまう

// // デフォルトでゲストさん！！になるように設定する
// const sayHallo2 = (name = "ゲスト") =>
//   console.log(`こんにちは、${name}さん！！`);
// sayHallo2();
// // こんにちは、ゲストさん！！になる

// // スプレット構文
// // 配列の展開
// // ...を先頭に入れる
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // 展開の反対 => まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// // 345がarr3に入れられる
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // コピー
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// // 結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// 参照が引き継がれてしまう。元の配列が影響を受けてしまう
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);
// const arr4 = [10,20];だったのに
// [100, 20]になってしまう
// なので配列のコピーは基本スプレット構文を使う

// mapとfilterを使用して配列の処理
// const nameArr = ["田中", "山田", "神保"];
// 従来（for文）
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index +　1 }番目は${nameArr[index]}です`);
// }

// map使用
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));
// nameArr.map((name, index) => console.log(`${index+1}番目は${name}です`));
// ループ処理と新しい配列の生成に使われる

// 自分の名前以外には「さん」をつけるようにする
// const nameArr = ["田中", "山田", "神保"];
// const newNameArr = nameArr.map((name) => {
//   if (name === "神保") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);
// filtterの使用
// 条件に一致したものを返却して、新しい配列を生成する関数
// const numArr3 = [1, 2, 3, 4, 5];
// const newNumArr = numArr3.filter((num) => {
//   return num% 2 === 1;
// });
// console.log(newNumArr)

// 三項演算子について
// JSの追加要素ではないが頻出
// ある条件 ？ 条件がtrueの時 : 条件がfalseの時
// const val1 = 1>0 ? "trueです"　:　"falseです";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());
// // toLocaleString とは1,300のように３
// // 桁区切りにカンマがを入れられる関数。
// // 文字列には反応しないので三項演算子を使って
// // 数値の場合は３桁区切り、文字列の場合には「文字列を入力してください」と表示せるようにする
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// // typeofとは型を判別してくれる
// console.log(formattedNum);

// // 値の合計が100以下かどうかをチェックする関数checkSumを作成するとする
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "１００を超えています" : "許容範囲内です";
// };
// console.log(checkSum(50, 60));

// 論理演算子の本当の意味を知ろう　&& ||
// const flag1 = true;
// const flag2 = false;
// 「または」とか「かつ」で読みがち
// if(flag1 || flag2){
//   console.log("1か2はtrueになります");
// }
// if(flag1 && flag2){
//   console.log("1も2はtrueになります");
// }
// ||
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);
// 実際には、||の左側がfalseの時、右を返す
// nullはflase判定になるため||の右側『金額未設です』が返される。

// &&　は左側がtrueなら右を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
