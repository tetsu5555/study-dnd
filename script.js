window.addEventListener("load", function () {
    // Drag可能な要素を取得
    var els = document.querySelectorAll('#srcarea [class=item]');
    // 取得した要素にイベントを設定していく
    for (var i = 0; i < els.length; i++) {
        els[i].addEventListener('dragstart', function (evt) {
            var elm = evt.target;
            // dataTransferを使うことで要素のidを'Text'をキーとして転送する
            evt.dataTransfer.setData('Text', elm.id);
            // stopPropagationを使って親要素にイベントが伝搬しないようにしてる。
            // もし親要素がドラッグ可能な要素だった場合、予期せぬ挙動になってしまう可能性があるため。
            evt.stopPropagation();
        }, false)
    }

    var droparea = document.getElementById('droparea');
    // ここでpreventDefaultしているのは必須。デフォルトアクションを抑止しないと、ドロップできなくなってしまう。
    droparea.addEventListener("dragenter", function (evt) {
        evt.preventDefault();
    }, false);
    droparea.addEventListener("dragover", function (evt) {
        evt.preventDefault();
    }, false);
    droparea.addEventListener("drop", function (evt) {
        var elm = evt.target;
        // ここで先ほどsetDataした値をgetDataで取り出す
        var id = evt.dataTransfer.getData('Text');
        // ↑のidを使って、要素を取得する
        var target = document.getElementById(id);
        if (target) {
            // appendChildで要素を移動させる。コピーされるわけではない。
            droparea.appendChild(target);
        }
        evt.preventDefault();
    }, false);

})();