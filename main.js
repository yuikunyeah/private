function math1(){
  str answer = document.getElementById('1').value;
if(answer==2){
alert('正解です。');
}else{
alert('不正解です');
}
}


window.onload = function () { 
  var result = '';
  var value = decodeURI(new URLSearchParams(window.location.search).get('word'));
  for(i=0;i<tags.length;i++){
    if(tags[i][0].indexOf(value)!=-1){
      result += '<a href=' + tags[i][1] + '>' + tags[i][0] + '</a> ';
    }
  }
  document.getElementById('result').innerHTML = result;
};
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
