
(function ($) {

    $.fn.paginate = function (options) {

        //Default options
        var settings = $.extend({
            rows: 5,
            position: "bottom",
            jqueryui: false,
            showIfLess: true
        }, options);

        $(this).each(function () {
            var currentPage = 0;
            var rowPerPage = settings.rows;
            var table = $(this);
            table.bind('pageTable', function () {
                table.find('tbody tr').hide().slice(currentPage * rowPerPage, (currentPage + 1) * rowPerPage).show();
            });
            table.trigger('pageTable');
            var numRows = table.find('tbody tr').length;
            var numPages = Math.ceil(numRows / rowPerPage);
            var pager = $('<div class="pager"></div>');

            //Check ui theming====================================================================
            var activeclass = settings.jqueryui ? "ui-state-active" : "active";
            var defaultclass = settings.jqueryui ? "ui-state-default" : "number";

            for (var page = 0; page < numPages; page++) {
                $('<span class="' + defaultclass + '"></span>').text(page + 1).bind('click', {
                    newPage: page
                }, function (event) {
                    currentPage = event.data['newPage'];
                    table.trigger('pageTable');
                    $(this).addClass(activeclass).siblings().removeClass(activeclass);
                }).appendTo(pager).addClass('clickable');
            }


            //Add pager===========================================================================
            if (settings.showIfLess) {

                if (settings.position == "bottom") {
                    pager.insertAfter(table).find('span.' + defaultclass + ':first').addClass(activeclass);
                }
                else if (settings.position == "top") {
                    pager.insertBefore(table).find('span.' + defaultclass + ':first').addClass(activeclass);
                }
            }
            else if (rowPerPage < numRows) {
                if (settings.position == "bottom") {
                    pager.insertAfter(table).find('span.' + defaultclass + ':first').addClass(activeclass);
                }
                else if (settings.position == "top") {
                    pager.insertBefore(table).find('span.' + defaultclass + ':first').addClass(activeclass);
                }
            }


        });

        return this;
    }


})(jQuery);



