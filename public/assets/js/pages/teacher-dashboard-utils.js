/* ── Teacher Dashboard — Utilities ───────────────────────── */

function copyTeacherCode() {
    var chip = document.getElementById('teacherCodeChip');
    var code = chip ? chip.dataset.code : '';

    if (!code) return;

    navigator.clipboard.writeText(code).then(function () {
        alert('Teacher code ' + code + ' copied!');
    }).catch(function () {
        var el = document.createElement('textarea');
        el.value = code;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('Teacher code ' + code + ' copied!');
    });
}
