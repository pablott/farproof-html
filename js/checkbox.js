// http://briancray.com/posts/check-all-jquery-javascript

$(function () {
    $('.checkall').click(function () {
        $('.list_container:eq(0)').find(':checkbox').attr('checked', this.checked);
    });
});
    