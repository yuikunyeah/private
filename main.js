//URLのパラメーターを取得
  let v = new URLSearchParams(window.location.search);
　//URLのパラメーターのうち検索されたキーワードを取得
  v = v.get('search-key');
　//検索したい全てのURLを配列に格納
  const urlLists = [
    "/data/xml/",
    "/site-speed/asynchronous/",
    "/site-speed/for_while/",
    "/site-speed/async-2/"];
  $.each(urlLists, function(i){
    $.ajax({
      url　: urlLists[i],
      dataType : 'html',
      success　: function(data){
　　　   //上記のURLからキーワードを探す
        if( $(data).find("#article").text().indexOf(v) !== -1){
　　　　　　//あれば、ページを表示する
          $('<li><a href="' + urlLists[i] + '">' +$(data).find("h1").text() + '</a></li>').appendTo('ul');
          }
        },
        error: function(data){
          console.log("error")
        }
      });
    });
//引用
function data1(){
         alert('よく見るダイアログ');
        }
        function data2(){
        confirm("aleatと何が違うでしょーか");
        }
        function data3(){
         var value = prompt("これで全部です。わかりましたか？わかりましたら、はいと入力をお願いします。");
         if(value == "はい"){
         alert('okです');
         } else {
         alert('正確に入力してください。');
         }
        }
        function ok(){
        alert('それは良かったですね');
        }
        
      function download() {
        // テキストエリア内の文字列を取得する
        const text = document.getElementById('textarea').value;

        // 取得した文字列をBlob形式に変換
        let blobedText = new Blob([text], {type: 'text/plain' });

        // BlobをURLに変換
        let url = URL.createObjectURL(blobedText);

        // ダウンロード可能なa要素を作成する
        let link = document.createElement('a');
        link.href = url;
        link.download = 'code().text';
        // 要素の追加
        document.body.appendChild(link);

        // linkをclickすることでダウンロードが完了
        link.click();

        // 「link」は不要な要素になるので、link要素を削除
        link.parentNode.removeChild(link);
      }
        //以上が引用(qiita)
      
          function Down(){
const a = document.createElement('a');
a.href = 'data:text/plain,' + encodeURIComponent('img gif\n');
a.download = 'img.gif';
      }
  function gate() {
 　var Value = prompt("パスワードを入力");
   location.href= Value + ".html";
  }
