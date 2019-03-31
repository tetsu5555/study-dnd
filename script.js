window.addEventListener("load", function () {
    var els = document.querySelectorAll('#srcarea [class=item]');
    for (var i = 0; i < els.length; i++) {
        els[i].addEventListener('dragstart', function (evt) {
            var elm = evt.target;
            evt.dataTransfer.setData('Text', elm.id);
            evt.stopPropagation();
        }, false)
    }

    var droparea = document.getElementById('droparea');
    droparea.addEventListener("dragenter", function (evt) {
        evt.preventDefault();
    }, false);
    droparea.addEventListener("dragover", function (evt) {
        evt.preventDefault();
    }, false);
    droparea.addEventListener("drop", function (evt) {
        var elm = evt.target;
        var id = evt.dataTransfer.getData('Text');
        var target = document.getElementById(id);
        if (target) {
            droparea.appendChild(target);
        }
        evt.preventDefault();
    }, false);

})();