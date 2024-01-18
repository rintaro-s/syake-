$(document).ready(function() {
    // フォームの送信をハンドル
    $('#searchForm').submit(function(event) {
        event.preventDefault();

        // 検索クエリを取得
        var query = $('#searchQuery').val();

        // PHPスクリプトに送信して結果を取得
        $.post('search.php', { query: query }, function(response) {
            // 検索結果を表示
            $('#searchResults').html(response);
        });
    });
});
