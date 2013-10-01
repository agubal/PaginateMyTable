PaginateMyTable
===============

Simple jQuery plugin for HTML table pagination

Basic usage:
<br/><br/>
$(".MyTable").paginate();
    <br/><br/>
Options:<br/>
$(".MyTable").paginate({<br/>
            rows: 10,          // Set number of rows per page. Default: 5<br/>
            position: "top",   // Set position of pager. Default: "bottom"<br/>
            jqueryui: true,    // Allow using jQueryUI theme fro pager buttons. Default: false<br/>
            showIfLess: false  // Don't show pager if table has only one page. Default: true<br/>
        });<br/><br/>
        
<a href="http://gubal.net/">Live DEMOS are here</a>
