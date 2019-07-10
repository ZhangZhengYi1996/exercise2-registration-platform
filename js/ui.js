// ui-backtop
$.fn.UiBackTop = function () {
    var ui = $(this);
    var ele = $("<a href='#0' class='ui-backTop'></a>");
    ui.append(ele);
    // var windowHeight = $(window).height();
    $(window).on("scroll", function () {
        var top = $('html,body').scrollTop();

        if (top > 10) {
            ele.show();
        } else {
            ele.hide();
        }

    });
    ele.on("click", function () {
        $(window).scrollTop(0);

    });
}
//ui-search
$.fn.UiSearch = function () {
    var ui = $(this);
    var select = $(".ui-search-select>span", ui);
    var selectItem = $(".ui-search-select-item", ui);
    select.on("click", function () {
        selectItem.css("display", "block");
        return false;
    });
    $("span", selectItem).on("click", function () {
        selectItem.hide();
        select.text($(this).text());
        return false;
    });
    $("body").on("click", function () {
        selectItem.hide();
        return false;
    });
}
//ui-tab
$.fn.UiTab = function () {
    var ui = $(this);
    var uiContent = $(".ui-tab-content");
    var uiItem = $(".ui-tab-item", ui);
    var uiContentItem = $(".ui-tab-content-item", uiContent);
    uiItem.on("click", function () {
        var index=$(this).index();
        uiItem.removeClass("active").eq(index).addClass("active");
        uiContentItem.css("display","none").eq(index).css("display","block");
        return false;
    });
}


//页面脚本逻辑
$(document).ready(function () {
    $("body").UiBackTop();
    $(".ui-search").UiSearch();
    $(".ui-tab").UiTab();
});