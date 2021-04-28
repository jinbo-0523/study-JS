import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し・初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";
  // liタグの生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);

  //button（完了）タグの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  //button（削除）タグの生成
  const deleateButton = document.createElement("button");
  deleateButton.innerText = "削除";
  deleateButton.addEventListener("click", () => {
    alert("削除");
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleateButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
