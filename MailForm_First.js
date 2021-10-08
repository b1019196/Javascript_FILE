
function frameClick() {
  document.location.href = "MailForm_Secondのurl";
}
/*nameTextボックス内の文字列を記憶*/
function buttonClick_name() {
  msg1.innerText = 'お名前は' + nameText.value + 'さんですね';
}
let nameText = document.getElementById('nameText');
nameText.value = '名前';
let msg1 = document.getElementById('msg1');
let checkButton_name = document.getElementById('checkButton_name');
checkButton_name.addEventListener('click', buttonClick_name);

function buttonClick_address() {
  msg2.innerText = 'アドレスは' + addressText.value + 'ですね';
}
let addressText = document.getElementById('addressText');
addressText.value = 'アドレス';
let msg2 = document.getElementById('msg2');
let checkButton_address = document.getElementById('checkButton_address');
checkButton_address.addEventListener('click', buttonClick_address);


function buttonClick_password() {
  msg3.innerText = 'パスワードは' + passwordText.value + 'ですね';
}
let passwordText = document.getElementById('passwordText');
passwordText.value = 'パスワード';
let msg3 = document.getElementById('msg3');
let checkButton_password = document.getElementById('checkButton_password');
checkButton_password.addEventListener('click', buttonClick_password);

var sample1 = document.getElementById("sample1");
sample1.innerHTML = "aaa";
