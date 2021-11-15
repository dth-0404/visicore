$(".text-ques").eq(0).slideDown("slow"), $(".text-ques").eq(0).attr("data-status", "block"), $(".list-ques li").each(function (t) {
	$(this).click(function () {
		var t = $(this).attr("data-ques");
		$(".text-ques").each(function () {
			if ($(this).attr("id") == t) {
				var a = $(this).attr("data-status");
				"block" == a ? ($(this).slideUp("slow"), $(this).attr("data-status", "none")) : "none" == a && ($(".text-ques").slideUp("slow"), $(this).slideDown("slow"), $(".text-ques").each(function () {
					$(this).attr("data-status", "none")
				}), $(this).attr("data-status", "block"))
			}
		})
	})
}), $(".navbar-bar").click(function () {
	$(".navbar-content").addClass("show-navbar"), $(".navbar-content").removeClass("hide-navbar")
}), $(".navbar-close").click(function () {
	$(".navbar-content").removeClass("show-navbar"), $(".navbar-content").addClass("hide-navbar")
}), $(".icon-modal").click(function () {
	console.log("click"), $("#myModal").modal("hide")
}), $(".btn-blog").click(function () {
	$(".btn-blog").removeClass("active-btn"), $(this).addClass("active-btn");
	var t = $(this).attr("data-sidebar");
	$(".single-sidebar-widget").hide(), $("html").find(".single-sidebar-widget#" + t).show()
}), $(".list-number-blog li").each(function () {
	$(this).click(function () {
		$(".list-number-blog li").removeClass("active"), $(this).addClass("active")
	})
});
var btn = $("#button_scroll_top");

function validate(t) {
	var a = t || window.event;
	if ("paste" === a.type) e = event.clipboardData.getData("text/plain");
	else {
		var e = a.keyCode || a.which;
		e = String.fromCharCode(e)
	}
	/[0-9()]|\+/.test(e) || (a.returnValue = !1, a.preventDefault && a.preventDefault())
}
$(window).scroll(function () {
	$(window).scrollTop() > 500 ? btn.addClass("show") : btn.removeClass("show")
}), btn.on("click", function (t) {
	t.preventDefault(), $("html, body").animate({
		scrollTop: 0
	}, "300")
});