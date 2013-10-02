PaginateMyTable
===============

Simple jQuery plugin for HTML table pagination

Basic usage:
<pre><code>
$(".MyTable").paginate();
    </cod></pre>
Options:
<pre><code>
$(".MyTable").paginate({
            rows: 10,          // Set number of rows per page. Default: 5
            position: "top",   // Set position of pager. Default: "bottom"
            jqueryui: true,    // Allow using jQueryUI theme fro pager buttons. Default: false
            showIfLess: false  // Don't show pager if table has only one page. Default: true
        });
      </cod></pre>  
<a href="http://gubal.net/">Live DEMOS and code examples</a>
