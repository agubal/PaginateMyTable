
(function ($) {

    $.fn.paginate = function (options) {

        //Default options
        var settings = $.extend({
            rows: 5,
            position: "bottom",
            jqueryui: false,
            showIfLess: true,
			container: '<div class="pager"></div>',
			tag: 'span',
			attributes : '',
			activeclass : 'active',
			defaultclass  : 'number',
			callback : function() { }
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
            var pager = $(settings.container);

            //Check ui theming====================================================================
            var activeclass = settings.jqueryui ? "ui-state-active" : settings.activeclass;
            var defaultclass = settings.jqueryui ? "ui-state-default" : settings.defaultclass;

            for (var page = 0; page < numPages; page++) {
                $('<'+settings.tag+' class="' + defaultclass + '" '+settings.attributes+'></'+settings.tag+'>').text(page + 1).bind('click', {
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
                    pager.insertAfter(table).find(settings.tag+'.' + defaultclass + ':first').addClass(activeclass);
                }
                else if (settings.position == "top") {
                    pager.insertBefore(table).find(settings.tag+'.' + defaultclass + ':first').addClass(activeclass);
                }
            }
            else if (rowPerPage < numRows) {
                if (settings.position == "bottom") {
                    pager.insertAfter(table).find(settings.tag+'.' + defaultclass + ':first').addClass(activeclass);
                }
                else if (settings.position == "top") {
                    pager.insertBefore(table).find(settings.tag+'.' + defaultclass + ':first').addClass(activeclass);
                }
            }


        });
		settings.callback();
        return this;
    }


})(jQuery);
