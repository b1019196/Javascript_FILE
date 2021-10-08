$('.submit-button1').click(function() {

  //入力されたデータを受け取る
  var name = $('[name="name"]').val();
  var gender = $('[name="gender"]:checked').val();
  var tel = $('[name="tel"]').val();
  var mail = $('[name="mail"]').val();
  var password = $('[name="password"]').val();
  var confirm = $('[name="confirm"]').val();

  $("#end div").html('<h1>メール送信完了</h1>' + name + '様' +
    '<p>メール送信ありがとうございます。<br>' + mail + 'へメールを送信いたしました。' +
    '<br>下の”メール一覧を表示”からメールを確認できます。</p>');
  var flag = 0; //入力エラーのフラグ
  var err = []; //エラーメッセージ配列
  var err_message = ''; //エラーメッセージ出力

  //必須項目の入力チェック
  if (!name || !gender || !tel || !mail) {
    err[1] = "・必須項目に未入力があります";
    flag = 1;
  } else {
    //電話番号の入力チェック
    if (!tel.match(/^[0-9]+$/)) {
      err[2] = "・電話番号が正しく入力されていません";
      flag = 1;
    }

    //メールアドレスの入力チェック
    if (mail) {
      if (!mail.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        err[3] = "・メールアドレスが正しく入力されていません";
        flag = 1;
      }
    }
  }
  if (password != confirm) {
    flag = 1;
    err[4] = "・パスワードと確認用パスワードが一致しません"
  }

  if (password.length < 4) {
    flag = 1;
    err[5] = "・パスワードは4文字以上にしてください"
  }
  if (flag == 1) {
    //エラーメッセージを連結
    for (i = 1; i < err.length; i++) {
      if (err[i])
        err_message = err_message + err[i] + "<br>";
    }
    $('.err').html(err_message).show(); //エラー出力
  } else {
    $('#frm').hide(); //フォームを非表示に;
    $('#end').fadeIn(); //送信完了画面を表示
  }

  //id=end
  $('#submit-last').click(function() {
    $("#mail_list div").html("メールフォーム表示" +
      "<br>" + "<input type=submit id=lastpage value=メール確認>");
    $('#end').hide();
    $('#mail_list').fadeIn();

    $('#lastpage').click(function() {
      alert("メール選択後の画面を表示　まだ作ってない");
        document.location.href = "https://b1019196.github.io/Personal_Infomation/";
    });
  });



  //<input type="+"submit"+ "id="+"lastpage" +"value="+"メール確認"+"+>"

});
