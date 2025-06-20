!(function (t) {
  "use strict";
  var a = {
    upKey: 38,
    downKey: 40,
    easing: "linear",
    scrollTime: 600,
    activeClass: "active",
    onPageChange: null,
    topOffset: 0,
    margin: 1,
  };
  t.scrollIt = function (o) {
    var n = t.extend(a, o),
      e = 0,
      l = t("[data-scroll-index]:last").attr("data-scroll-index"),
      s = function (a) {
        if (!(0 > a || a > l)) {
          var o =
            t("[data-scroll-index=" + a + "]").offset().top +
            n.topOffset +
            margin;
          t("html,body").animate(
            { scrollTop: o, easing: n.easing },
            n.scrollTime
          );
        }
      },
      r = function (a) {
        var o =
          t(a.target).closest("[data-scroll-nav]").attr("data-scroll-nav") ||
          t(a.target).closest("[data-scroll-goto]").attr("data-scroll-goto");
        s(parseInt(o));
      },
      c = function (a) {
        var o = a.which;
        return !t("html,body").is(":animated") ||
          (o != n.upKey && o != n.downKey)
          ? o == n.upKey && e > 0
            ? (s(parseInt(e) - 1), !1)
            : o == n.downKey && l > e
            ? (s(parseInt(e) + 1), !1)
            : !0
          : !1;
      },
      i = function (a) {
        n.onPageChange && a && e != a && n.onPageChange(a),
          (e = a),
          t("[data-scroll-nav]").removeClass(n.activeClass),
          t("[data-scroll-nav=" + a + "]").addClass(n.activeClass);
      },
      d = function () {
        var a = t(window).scrollTop(),
          o = t("[data-scroll-index]").filter(function (o, e) {
            return (
              a >= t(e).offset().top + n.topOffset &&
              a < t(e).offset().top + n.topOffset + t(e).outerHeight()
            );
          }),
          e = o.first().attr("data-scroll-index");
        i(e);
      };
    t(window).on("scroll", d).scroll(),
      t(window).on("keydown", c),
      t("body").on(
        "click",
        "[data-scroll-nav], [data-scroll-goto]",
        function (t) {
          t.preventDefault(), r(t);
        }
      );
  };
})(jQuery);
