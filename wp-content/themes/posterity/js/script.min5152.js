jQuery.noConflict(),
    (function (t, a, l) {
        "use strict";
        (t = jQuery),
            (Isotope.Item.prototype.hide = function () {
                (this.isHidden = !0), this.css({ display: "none" });
            });
        var o,
            n,
			na,
            s,
            d,
            r,
            c = a.A13FRAMEWORK,
            h = l.documentElement,
            p = t(h),
            g = l.body,
            f = t(g),
            m = t(a),
            u = SKTParams,
            e = "rtl" === p.attr("dir"),
            v = !1,
            y = !1,
            b = [600, 768, 1024, 1300];
        (a.A13FRAMEWORK = {
            onReady: function () {
                for (var e = ["single-album-slider", "single-album-scroller"], a = !1, h = 0; h < e.length; h++)
                    if (f.hasClass(e[h])) {
                        a = !0;
                        break;
                    }
                "undefined" == typeof t.fn.isotope || a || p.addClass("show-scroll"),
                    (y = c.transitionsAvailable()),
                    (o = t("#header")),
                    (n = t("#header-tools")),
					(na = t("#header-tools1")),
                    (s = t("#footer")),
                    (d = t("#mid")),
                    (r = t("#wpadminbar")),
                    r.length && (v = !0),
                    m.resize(c.debounce(c.layout.resize, 250)),
                    f.on("webfontsloaded", function () {
                        m.resize();
                    }),
                    l.addEventListener("touchstart", function () {}, !0),
                    c.layout.set(),
                    c.runPlugins(),
                    c.temporarySafes(),
                    c.elementsActions.init();
            },
            layout: {
                pointers: [],
                size: 0,
                add: function (e) {
                    c.layout.pointers.push(e);
                },
                remove: function (e) {
                    for (var t = c.layout.pointers, a = 0; a < t.length; a++) t[a] === e && delete t[a];
                },
                set: function () {
                    var e,
                        t = a.getComputedStyle ? getComputedStyle(g, ":after").getPropertyValue("content") : null,
                        i = m.width(),
                        l = null === t ? -1 : t.indexOf("narrow");
                    return (e = -1 === l ? i : parseInt(t.substr(l + 6), 10)), (c.layout.size = e), e;
                },
                resize: function (t) {
                    for (var e = c.layout, a = e.set(), l = e.pointers, o = 0; o < l.length; o++) void 0 !== l[o] && l[o].call(this, t, a);
                },
            },
            runPlugins: function () {
                t("div.post-media").fitVids(), t("div.real-content").find("p").fitVids();
            },
            temporarySafes: function () {
                m.bind("hashchange", function () {
                    "#!" == a.location.hash && history.pushState("", l.title, a.location.pathname);
                });
            },
            cookieExpire: function (e, t) {
                var a,
                    i = new Date();
                i.setTime(i.getTime() + 1e3 * (60 * (60 * t))), (a = i.toUTCString()), (l.cookie = e + "; expires=" + a + "; path=/");
            },
            transitionsAvailable: function () {
                var e = l.createElement("div");
                return e.style.transition !== void 0;
            },
            windowVisibleAvailableHeight: function (e) {
                "undefined" == typeof e && (e = 0);
                var a,
                    i = m.height(),
                    l = v ? parseInt(r.height(), 10) : 0,
                    n = o.hasClass("vertical"),
                    s = 0;
                if ((n ? c.layout.size <= b[2] && (s = o.height()) : (s = 0 < e ? parseInt(f.css("padding-top"), 10) : 0), (a = i - l - s), f.hasClass("site-layout-bordered"))) {
                    var d = t(".theme-borders"),
                        h = d.find(".top-border"),
                        p = d.find(".bottom-border"),
                        g = h.length ? h.height() : 0,
                        u = p.length ? p.height() : 0;
                    a = a - g - u;
                }
                if (1 < e) {
                    var y = t("header.title-bar.outside"),
                        k = y.length ? y.height() : 0;
                    a -= k;
                }
                return a;
            },
            isInteger: function (e) {
                return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
            },
            throttle: function (s, t) {
                t || (t = 100);
                var d = null,
                    h = +new Date(),
                    p = !1,
                    g = 0;
                return function () {
                    var e = +new Date(),
                        i = this,
                        a = arguments,
                        o = function () {
                            clearTimeout(d),
                                s.apply(i, a),
                                (h = g = e),
                                (p = !0),
                                (d = setTimeout(function () {
                                    g !== h && o();
                                }, t));
                        };
                    !p || e - h > t ? o() : (g = e);
                };
            },
            debounce: function (a, t, l) {
                var e;
                return function () {
                    var o = this,
                        i = arguments;
                    e ? clearTimeout(e) : l && a.apply(o, i),
                        (e = setTimeout(function () {
                            l || a.apply(o, i), (e = null);
                        }, t || 100));
                };
            },
            elementsActions: {
                init: function () {
                    var e = c.elementsActions;
                    e.preloader(),
                        e.headerVertical(),
                        e.headerHorizontal(),
                        e.headerSearch(),
                        e.topMessage(),
                        e.logo(),
                        e.menuOverlay(),
                        e.sideMenu(),
                        e.basketMenu(),
                        e.toolsLanguages(),
                        e.footer(),
                        e.topMenu(),
                        e.toTop(),
                        u.scroll_to_anchor && e.scrollToAnchor(),
                        e.parallax(),
                        e.pageSlider(),
                        e.titleBar(),
                        e.stickyOnePage(),
                        e.carousel(),
                        e.countDown(),
                        e.countTo(),
                        e.fitText(),
                        e.typedJS(),
                        e.A13PostLightbox(),
                        e.lightbox(),
                        e.blogMasonry(),
                        e.shopMasonry(),
                        e.albumsListMasonry(),
                        e.singleAlbumMasonry(),
                        e.singleWork(),
                        e.makeBricks(),
                        e.makeSlider(),
                        e.makeScroller(),
                        e.worksListMasonry(),
                        e.peopleListMasonry(),
                        e.widgetSlider(),
                        e.demoFlyOut(),
                        "undefined" != typeof wp &&
                            "undefined" != typeof wp.customize &&
                            "undefined" != typeof wp.customize.selectiveRefresh &&
                            wp.customize.selectiveRefresh.bind("partial-content-rendered", function (a) {
                                u.options_name + "[footer_switch]" === a.partial.id && (d.css("margin-bottom", ""), (s = t("#footer")), e.footer());
                            }),
                        m.on("elementor/frontend/init", () => {
                            "undefined" != typeof elementorFrontend &&
                                "undefined" != typeof elementorFrontend.hooks &&
                                (elementorFrontend.hooks.addAction("frontend/element_ready/shortcode.default", function (t) {
                                    e.typedJS(t), e.makeSlider(t), e.makeScroller(t), e.blogMasonry(t), e.albumsListMasonry(t), e.worksListMasonry(t), e.peopleListMasonry(t), e.makeBricks(t);
                                }),
                                elementorFrontend.hooks.addAction("frontend/element_ready/a13fe-slider.default", function (t) {
                                    e.makeSlider(t);
                                }),
                                elementorFrontend.hooks.addAction("frontend/element_ready/a13fe-scroller.default", function (t) {
                                    e.makeScroller(t);
                                }),
                                elementorFrontend.hooks.addAction("frontend/element_ready/a13fe-gallery.default", function (t) {
                                    e.makeBricks(t);
                                }),
                                elementorFrontend.hooks.addAction("frontend/element_ready/a13fe-post-list.default", function (t) {
                                    e.blogMasonry(t), e.albumsListMasonry(t), e.worksListMasonry(t), e.peopleListMasonry(t);
                                }));
                        });
                },
                stickyOnePage: function () {
                    var e = d.find("div.content-box");
                    if (e.hasClass("a13-sticky-one-page")) {
                        var i = d.find("div.real-content").children("div.vc_row"),
                            l = [],
                            o = void 0 === e.attr("data-a13-sticky-one-page-icon-global-color") ? "" : e.attr("data-a13-sticky-one-page-icon-global-color"),
                            n = void 0 === e.attr("data-a13-sticky-one-page-icon-global-icon") ? "" : e.attr("data-a13-sticky-one-page-icon-global-icon");
                        i.each(function () {
                            var e = t(this).attr("data-a13-sticky-one-page-icon-title");
                            l.push(void 0 === e ? "" : e);
                        }),
                            t(a).resize(
                                c.debounce(function () {
                                    t.fn.fullpage.reBuild();
                                }, 250)
                            ),
                            t("div.real-content").fullpage({
                                lockAnchors: !1,
                                autoScrolling: !0,
                                scrollingSpeed: 700,
                                fitToSection: !0,
                                css3: !0,
                                easingcss3: "ease",
                                easing: "easeInOutCubic",
                                continuousVertical: !1,
                                loopBottom: !1,
                                loopTop: !1,
                                loopHorizontal: !0,
                                scrollOverflow: !0,
                                controlArrows: !1,
                                verticalCentered: !0,
                                responsiveWidth: 0,
                                responsiveHeight: 0,
                                fixedElements: "",
                                keyboardScrolling: !0,
                                animateAnchor: !0,
                                recordHistory: !1,
                                resize: !1,
                                sectionSelector: "div.real-content > div.vc_row",
                                navigation: !0,
                                paddingTop: r.length ? parseInt(r.height(), 10) + "px" : "",
                                navigationTooltips: l,
                                showActiveTooltip: !0,
                                scrollBar: !1,
                                afterRender: function () {
                                    var e = t("#fp-nav").find("ul");
                                    i.each(function (a) {
                                        var i = t(this).attr("data-a13-sticky-one-page-icon-class"),
                                            l = t(this).attr("data-a13-sticky-one-page-icon-color"),
                                            s = i ? i : n,
                                            d = l ? l : o;
                                        s ? e.children().eq(a).css({ color: d }).find("a").addClass("custom").find("span").addClass(s) : e.children().eq(a).css({ color: d }).find("a").find("span").css({ "background-color": d });
                                    }),
                                        e.fadeIn();
                                },
                                afterLoad: function () {},
                                onLeave: function () {},
                            });
                    }
                },
                carousel: function () {
                    t(".a13_images_carousel").each(function () {
                        var e = t(this),
                            a = e.find(".owl-carousel"),
                            i = 1 == e.data("wrap"),
                            l = e.data("autoplay"),
                            o = e.data("interval"),
                            n = e.data("per_view"),
                            s = "1" == e.data("hide_nav"),
                            d = "1" == e.data("hide_pag"),
                            r = function (e) {
                                for (var t, a = {}, l = 0; l < e; l++) (t = {}), (t = l % 2 ? { items: l + 1 } : { items: l + 1, center: !0 }), (a[Math.floor(1 + l * (1920 / e))] = t);
                                return a;
                            };
                        m.on("load", function () {
                            a.owlCarousel({ loop: i, items: n, autoplay: l, autoplayTimeout: o, responsive: r(n), nav: !s, navText: ['<span class="a13icon-chevron-thin-left">', '<span class="a13icon-chevron-thin-right">'], dots: !d });
                        });
                    });
                },
                countDown: function () {
                    t("div.a13_count_down").each(function () {
                        function e(e) {
                            var t = e.match(c),
                                a = {};
                            return (
                                l.forEach(function (e, l) {
                                    a[e] = t[l];
                                }),
                                a
                            );
                        }
                        function a(e, t) {
                            var a = [];
                            return (
                                l.forEach(function (i) {
                                    e[i] !== t[i] && a.push(i);
                                }),
                                a
                            );
                        }
                        var i = t(this),
                            l = [i.data("weeks"), i.data("days"), i.data("hours"), i.data("minutes"), i.data("seconds")],
                            o = i.data("style"),
                            n = i.data("date"),
                            s = "simple" == o ? "" : _.template(t("#main-example-template").html()),
                            d = "00:00:00:00:00",
                            r = "00:00:00:00:00",
                            c = /([0-9]{2})/gi;
                        if ("simple" == o)
                            i.countdown(n).on("update.countdown", function (e) {
                                t(this).html(
                                    e.strftime(
                                        '<div class="block"><div class="value">%w</div> <div class="label">' +
                                            i.data("weeks") +
                                            '</div></div><div class="block"><div class="value">%d</div> <div class="label">' +
                                            i.data("days") +
                                            '</div></div><div class="block"><div class="value">%H</div> <div class="label">' +
                                            i.data("hours") +
                                            '</div></div><div class="block"><div class="value">%M</div> <div class="label">' +
                                            i.data("minutes") +
                                            '</div></div><div class="block"><div class="value">%S</div> <div class="label">' +
                                            i.data("seconds") +
                                            "</div></div>"
                                    )
                                );
                            });
                        else {
                            var h = e(d);
                            l.forEach(function (e) {
                                i.append(s({ curr: h[e], next: h[e], label: e }));
                            }),
                                i.countdown(n, function (t) {
                                    var l,
                                        o = t.strftime("%w:%d:%H:%M:%S");
                                    o !== r &&
                                        ((d = r),
                                        (r = o),
                                        (l = { curr: e(d), next: e(r) }),
                                        a(l.curr, l.next).forEach(function (e) {
                                            var t = ".%s".replace(/%s/, e),
                                                a = i.find(t);
                                            a.removeClass("flip"),
                                                a.find(".curr").text(l.curr[e]),
                                                a.find(".next").text(l.next[e]),
                                                _.delay(
                                                    function (e) {
                                                        e.addClass("flip");
                                                    },
                                                    50,
                                                    a
                                                );
                                        }));
                                });
                        }
                    });
                },
                countTo: function () {
                    var e = t("div.a13_counter");
                    e.each(function () {
                        var e = t(this),
                            a = e.find("span.number"),
                            i = {
                                onComplete: function () {
                                    e.find("span.finish-text").css({ visibility: "visible", opacity: "0", top: "-20px" }).animate({ top: "0", opacity: "1" }, 600);
                                },
                            };
                        c.layout.size <= b[0] && (i.speed = 1),
                            "undefined" == typeof t.fn.waypoint
                                ? a.countTo(i)
                                : e.waypoint(
                                      function () {
                                          a.countTo(i);
                                      },
                                      { triggerOnce: !0, offset: "bottom-in-view" }
                                  );
                    });
                },
                fitText: function () {
                    var e = d.find(".vc_custom_heading.a13-fit_text"),
                        a = function (e) {
                            var a = t(e).data("compress"),
                                i = t(e).data("min-font-size"),
                                l = t(e).data("max-font-size"),
                                o = {};
                            "undefined" != typeof i && (o.minFontSize = i), "undefined" != typeof l && (o.maxFontSize = l), t(e).fitText(a, o);
                        };
                    e.each(function () {
                        "undefined" == typeof t.fn.waypoint
                            ? "undefined" == typeof t.fn.vcwaypoint
                                ? a(this)
                                : t(this).vcwaypoint(t.proxy(a, this, this, 0), { offset: "bottom-in-view", triggerOnce: !0 })
                            : t(this).waypoint(t.proxy(a, this, this, 0), { offset: "bottom-in-view", triggerOnce: !0 });
                    });
                },
                typedJS: function (e) {
                    e = "undefined" == typeof e ? f : e;
                    var a = e.find(".a13-to-type"),
                        i = function (e) {
                            var a = t(e),
                                i = [],
                                l = 1 == a.data("loop");
                            if (!u.writing_effect_mobile && c.layout.size <= b[0]) a.addClass("disabled-writing");
                            else {
                                var o = a.find(".typing-area");
                                if (o.data("typed")) return;
                                a
                                    .find(".sentences-to-type")
                                    .children()
                                    .each(function () {
                                        i.push(t(this).html());
                                    }),
                                    o.typed({ strings: i, startDelay: 500, typeSpeed: parseInt(u.writing_effect_speed, 10), loop: l });
                            }
                        };
                    a.each(function () {
                        var e = this;
                        "function" == typeof Waypoint
                            ? new Waypoint({
                                  element: e,
                                  handler: function () {
                                      i(this.element), this.destroy();
                                  },
                                  offset: "85%",
                              })
                            : "function" == typeof jQuery.waypoints
                            ? t(this).waypoint(t.proxy(i, this, this, 0), { offset: "bottom-in-view", triggerOnce: !0 })
                            : "undefined" != typeof t.fn.vcwaypoint && t(this).vcwaypoint(t.proxy(i, this, this, 0), { offset: "bottom-in-view", triggerOnce: !0 });
                    });
                },
                parallax: function () {
                    var e = t("div.a13-parallax, div.a13-parallax-video, header.a13-parallax"),
                        i = function (e, t, a, i) {
                            "undefined" == typeof i && (i = 1), (e.style.backgroundPosition = i * t + "% " + i * a + "%");
                        },
                        l = function (e, t, a) {
                            var i = (a - e.innerHeight()) * t;
                            e[0].style.top = i + "px";
                        },
                        o = function () {
                            (d = !1),
                                e.each(function () {
                                    var e = this,
                                        o = t(e),
                                        n = "no-repeat" !== getComputedStyle(e).getPropertyValue("background-repeat"),
                                        d = o.hasClass("a13-parallax-video"),
                                        r = d ? o.children("video.a13-bg-video") : t([]),
                                        c = d ? o.data("a13-parallax-video-type") : o.data("a13-parallax-type"),
                                        p = n ? o.data("a13-parallax-speed") : 1;
                                    if (!d || (d && r.length)) {
                                        var g = a.innerHeight || h.clientHeight,
                                            f = s,
                                            m = f + g,
                                            u = o.innerHeight(),
                                            v = o.offset().top,
                                            y = v + u + g,
                                            b = (m - v) / (y - v);
                                        m >= v &&
                                            m <= y &&
                                            ("tb" === c
                                                ? d
                                                    ? l(r, b, u)
                                                    : i(e, 50, 100 * b, p)
                                                : "bt" === c
                                                ? d
                                                    ? l(r, 1 - b, u)
                                                    : i(e, 50, 100 * (1 - b), p)
                                                : "lr" === c
                                                ? i(e, 100 * b, 50, p)
                                                : "rl" === c
                                                ? i(e, 100 * (1 - b), 50, p)
                                                : "tlbr" === c
                                                ? i(e, 100 * b, 100 * b, p)
                                                : "trbl" === c
                                                ? i(e, 100 * (1 - b), 100 * b, p)
                                                : "bltr" === c
                                                ? i(e, 100 * b, 100 * (1 - b), p)
                                                : "brtl" === c && i(e, 100 * (1 - b), 100 * (1 - b), p));
                                    }
                                });
                        },
                        n = function () {
                            d || requestAnimationFrame(o), (d = !0);
                        },
                        s = 0,
                        d = !1;
                    e.length &&
                        (m.off("scroll.parallax resize.parallax a13_parallax_trigger.parallax").on("scroll.parallax resize.parallax a13_parallax_trigger.parallax", function () {
                            (s = h.scrollTop || a.pageYOffset || 0), n();
                        }),
                        m.trigger("a13_parallax_trigger"));
                },
                preloader: function (e) {
                    var a = t("#preloader");
                    if (a.length) {
                        var i = a.find("div.preload-content"),
                            o = a.find("a.skip-preloader"),
                            n = a.hasClass("onReady"),
                            s = function () {
                                i.fadeOut()
                                    .promise()
                                    .done(function () {
                                        a.fadeOut(400);
                                    });
                            },
                            d = function () {
                                o.hide(), i.show(), a.fadeIn();
                            };
                        "undefined" == typeof e
                            ? n
                                ? t(l).ready(s)
                                : (o.fadeIn().on("click", function (e) {
                                      e.stopPropagation(), e.preventDefault(), s();
                                  }),
                                  m.load(s))
                            : e
                            ? d()
                            : s();
                    }
                },
                logo: function () {
                    var e = o.find(".image-logo"),
                        t = "",
                        a = function () {
                            t.on("load", function () {
                                f.trigger("a13LogoLoaded");
                            });
                        };
                    if (e.length) {
                        if (((t = o.find("a." + u.default_header_variant + "-logo").children()), t.is("img"))) return void a();
                        if (((t = o.find("a.normal-logo").children()), t.is("img"))) return void a();
                    }
                    f.trigger("a13LogoLoaded");
                },
                topMenu: function () {
                    var i = o.find("ul.sub-menu"),
                        l = o.find("div.menu-container"),
                        s = l.children(),
                        d = i.parent().not(function () {
                            return t(this).parents(".mega-menu").length;
                        }),
                        r = t("#mobile-menu-opener"),
                        h = t("#content-overlay"),
                        p = c.layout.size,
                        g = o.hasClass("vertical"),
                        v = function (e) {
                            if ("undefined" != typeof e && !1 === e) o.removeClass("desktop_menu"), C(void 0, !0), d.off("click").children("i.sub-mark, span.title").off("click");
                            else if (
                                (o.addClass("desktop_menu"),
                                d.children("i.sub-mark, span.title, .top-menu li a").on("click keydown", function (e) {									
                                    if ("keydown" !== e.type || -1 !== [13, 32].indexOf(e.keyCode)) {
                                        e.stopPropagation(), e.preventDefault();
                                        var a = t(this).parent(),
                                            i = a.children("ul.sub-menu"),
                                            l = a.hasClass("open");
                                        C(a),
                                            l ||
                                                (0 < a.parents("li").length
                                                    ? a.children("i.sub-mark").removeClass(u.submenu_third_lvl_opener).addClass(u.submenu_third_lvl_closer)
                                                    : a.children("i.sub-mark").removeClass(u.submenu_opener).addClass(u.submenu_closer),
                                                x(i),
                                                g
                                                    ? (a.addClass("open"),
                                                      i.slideDown(600, function () {
                                                          m.trigger("mess_in_header");
                                                      }))
                                                    : (i.show(),
                                                      setTimeout(function () {
                                                          a.addClass("open");
                                                      }, 15)),
                                                f.off("click", k),
                                                f.on("click", k));
                                    }
                                }),
                                g)
                            ) {
                                var a = d.filter(".to-open");
                                a.length && a.addClass("open");
                            }
                        },
                        k = function (e) {
                            t(e.target).parents().addBack().hasClass("menu-container") || (e.stopPropagation(), e.preventDefault(), C());
                        },
                        C = function (e, a) {
                            var i,
                                l = function (e) {
                                    n.is(e.target) && "visibility" === e.originalEvent.propertyName && (n.off("transitionend", l), o());
                                },
                                o = function () {
                                    n.removeClass("otherway").attr("style", ""),
                                        i.each(function () {
                                            var e = t(this);
                                            0 < e.parents("li").length
                                                ? e.children("i.sub-mark").removeClass(u.submenu_third_lvl_closer).addClass(u.submenu_third_lvl_opener)
                                                : e.children("i.sub-mark").removeClass(u.submenu_closer).addClass(u.submenu_opener);
                                        });
                                };
                            if (("undefined" == typeof e ? (i = d.filter(".open")) : ((i = e.siblings("li").addBack().filter(".open")), 1 < s.length && (i = i.add(e.parents(".top-menu").siblings().find("li.open")))), g))
                                i.children("ul.sub-menu")
                                    .slideUp(350)
                                    .promise()
                                    .done(function () {
                                        i.removeClass("open"),
                                            0 < i.parents("li").length
                                                ? i.children("i.sub-mark").removeClass(u.submenu_third_lvl_closer).addClass(u.submenu_third_lvl_opener)
                                                : i.children("i.sub-mark").removeClass(u.submenu_closer).addClass(u.submenu_opener),
                                            m.trigger("mess_in_header");
                                    });
                            else {
                                var n = i.children("ul.sub-menu");
                                y && "undefined" == typeof a ? (n.on("transitionend", l), i.removeClass("open")) : (i.removeClass("open"), o());
                            }
                            f.off("click", k);
                        },
                        x = function (t) {
                            o.css("overflow", "hidden");
                            var a,
                                i,
                                l,
                                n = m.width(),
                                s = t.addClass("measure").width(),
                                d = t.parent(),
                                r = d.offset(),
                                c = d.hasClass("mega-menu"),
                                h = 0,
                                p = e ? "right" : "left",
                                f = !1;
                            if ((g || t.css(p, ""), t.removeClass("measure"), g)) c && s > n - o.width() && t.width(n);
                            else if (((l = r.left), (i = e ? n - (l + d.outerWidth()) : l), c)) s > n && (t.width(n), (s = n)), (h = i + s), h > n && t.css(p, -(h - n));
                            else {
                                if (((a = t.parents("ul")), (h = a.length), 1 === h)) i + s > n && (f = !0);
                                else if (1 < h) {
                                    var u = a.eq(0),
                                        v = u.offset().left,
                                        y = a.eq(0).width(),
                                        b = e ? n - (v + y) : v;
                                    b + y + s > n && (f = !0);
                                }
                                f && t.addClass("otherway");
                            }
                            o.css("overflow", "");
                        },
                        w = function (t) {
                            t.preventDefault(), r.trigger("click");
                        },
                        z = function (e) {
                            e.stopPropagation(), e.preventDefault();
                            var a = t(this);
                            l.hasClass("open")
                                ? (l.slideUp(200, function () {
                                      l.children().hide(), i.attr("style", ""), d.removeClass("open").attr("style", ""), A(), a.removeClass("active");
                                  }),
                                  l.removeClass("open"),
                                  f.removeClass("mobile-menu-open"),
                                  h.off("click", w))
                                : (s.show(), l.slideDown(200, A), l.addClass("open"), a.addClass("active"), f.addClass("mobile-menu-open"), h.on("click", w));
                        },
                        T = function (e) {							
                            e.stopPropagation(), e.preventDefault();
                            var a = t(this).parent(),
                                i = a.children("ul");
                            a.hasClass("open") ? (i.slideUp(200, A), a.removeClass("open")) : (i.slideDown(200, A), a.addClass("open"));
                        },
                        A = function () {
                            var e = o.height() + l.height(),
                                t = g ? parseInt(o.css("top"), 10) : parseInt(o.css("margin-top"), 10),
                                a = m.height(),
                                i = o.hasClass("scrollable-menu");
                            (g && c.layout.size <= b[0]) ||
                                (!i && e > a - t ? o.addClass("scrollable-menu").css(g ? "margin-top" : "top", m.scrollTop()) : i && e <= a - t && o.removeClass("scrollable-menu").css(g ? "margin-top" : "top", ""));
                        },
                        M = function (e) {
                            "undefined" != typeof e && !1 === e
                                ? (o.removeClass("mobile-menu"),
                                  r.off("click"),
                                  l.removeClass("open").attr("style", ""),
                                  r.removeClass("active"),
                                  s.css("display", ""),
                                  n.removeClass("menu-open"),
                                  o.removeClass("scrollable-menu").css("margin-top", ""),
                                  i.length && (d.removeClass("open").children("i.sub-mark, span.title").off("click"), i.removeClass("open").attr("style", "")),
                                  f.removeClass("mobile-menu-open"),
                                  h.off("click", w),
                                  !!parseInt(u.close_mobile_menu_on_click, 10) && s.children().not(d).off("click.mobile"))
                                : (o.addClass("mobile-menu"),
                                  r.off("click"),
                                  r.on("click", z),
                                  i.length && (d.children("i.sub-mark, span.title").off("click keypress"), d.children("i.sub-mark, span.title").on("click keypress", T)),
                                  !!parseInt(u.close_mobile_menu_on_click, 10) &&
                                      s
                                          .children()
                                          .not(d)
                                          .off("click.mobile")
                                          .on("click.mobile", function () {										  										  
                                              r.trigger("click");
                                          }));
                        },
                        S = function (e, t) {
                            var a = l.data("menu-type"),
                                i = !!parseInt(u.allow_mobile_menu, 10);
                            !i || (t > b[2] && "desktop" !== a) ? (M(!1), v(!0), l.data("menu-type", "desktop")) : i && t <= b[2] && "mobile" !== a && (v(!1), M(!0), l.data("menu-type", "mobile"));
                        },
                        L = function () {
                            var e = l.find('a[href*="#"]').not('a[href="#"]'),
                                o = t([]),
                                n = [],
                                s = function (e) {
                                    var a = t("#" + e),
                                        i = m.height(),
                                        l = m.scrollTop(),
                                        o = l + i,
                                        n = a.offset().top,
                                        s = n + a.outerHeight(),
                                        d = o - 0.75 * i;
                                    return { inView: !((s >= o && n >= o) || (s <= l && n <= l)), inActivePoint: s >= d && n <= d };
                                },
                                d = function () {
                                    for (var e, t, a, l, d = [], r = 0; r < n.length; r++)
                                        (t = n[r]), (a = o.filter('a[href*="#' + t + '"]')), (l = s(t)), l.inView ? d.push({ links: a, positions: l }) : a.parent().removeClass("current-menu-item");
                                    if (((e = d.length), 1 === e)) d[0].links.parent().addClass("current-menu-item");
                                    else if (1 < e) for (r = 0; r < d.length; r++) d[r].positions.inActivePoint ? d[r].links.parent().addClass("current-menu-item") : d[r].links.parent().removeClass("current-menu-item");
                                },
                                r = function (e) {
                                    return e.split("?", 1)[0].replace(/^https?\:\/\//i, "");
                                };
                            e.length &&
                                (e.each(function () {
                                    var e,
                                        i,
                                        l = t(this),
                                        s = l.attr("href").split("/#", 2);
                                    2 === s.length ? ((i = s[1]), (e = s[0])) : ((s = l.attr("href").split("#", 2)), (e = s[0]), (i = s[1])),
                                        i.length && ((e = r(e)), ((e.length && -1 < a.location.href.indexOf(e)) || !e.length) && t("#" + i).length && ((o = o.add(l)), n.push(i)));
                                }),
                                (n = n.filter(function (e, t, a) {
                                    return a.indexOf(e) === t;
                                })),
                                o.length && (m.scroll(c.throttle(d, 500)), d(), f.on("revolution.slide.onloaded", d)));
                        };
                    c.layout.add(S), S({}, p), L(), l.addClass("loaded");
                },
                headerHorizontal: function () {
                    if (o.hasClass("a13-horizontal")) {
                        for (
                            var e,
                                a = 0,
                                l = "",
                                n = o.outerHeight(),
                                s = o.find("div.top-bar-container"),
                                r = o.find("nav.navigation-bar"),
                                h = o.hasClass("header-type-one_line"),
                                p = h && o.find("div.logo-container").hasClass("shield"),
                                g = void 0,
                                v = o.find("ul.top-menu").children().children("a, span.title"),
                                k = !o.hasClass("no-sticky"),
                                C = !o.hasClass("sticky-no-hiding"),
                                x = o.hasClass("hide-until-scrolled-to"),
                                w = t("div.rev_slider").filter(function () {
                                    return t("li[data-variant]", this).length;
                                }),
                                z = t("div.vc_row").filter("[data-a13-header-color-variant]"),
                                T = u.header_color_variants,
                                A = u.default_header_variant,
                                M = "sticky",
                                S = A,
                                L = A,
                                D = ["dark", "light", "normal", M],
                                q = "hidden-logo",
                                O = k || x || z.length || w.length,
                                P = 0,
                                j = { normal: o.find("a.normal-logo"), sticky: o.find("a.sticky-logo"), light: o.find("a.light-logo"), dark: o.find("a.dark-logo") },
                                E = { normal: u.header_normal_social_colors.split("|"), light: u.header_light_social_colors.split("|"), dark: u.header_dark_social_colors.split("|"), sticky: u.header_sticky_social_colors.split("|") },
                                H = t([]),
                                B = "",
                                W = function () {
                                    if ((!p && h && ((g = void 0), F()), (n = parseInt(o.outerHeight(), 10)), "content" === u.hide_content_under_header));
                                    else if ("title" === u.hide_content_under_header) {
                                        var e,
                                            t = d.find("header.outside"),
                                            a = t.children();
                                        t.length && (a.css("padding-top", ""), (e = parseInt(a.css("padding-top"), 10)), a.css("padding-top", n + e));
                                    } else f.css("padding-top", n);
                                    O && N(), m.trigger("resize.vcRowBehaviour");
                                },
                                I = function (e) {
                                    var t = m.scrollTop(),
                                        a = t + parseInt(n / 2, 10),
                                        i = e.outerHeight(),
                                        l = e.offset().top;
                                    return a > l && a < l + i;
                                },
                                R = function (e) {
                                    if (e)
                                        o.addClass("sticky-values"),
                                            s.length &&
                                                !u.header_sticky_top_bar &&
                                                (y
                                                    ? (s.css("height", s.height() + "px"),
                                                      s.on("transitionend", X),
                                                      setTimeout(function () {
                                                          s.addClass("hide").css("height", "");
                                                      }, 15))
                                                    : s.addClass("hide").hide()),
                                            C &&
                                                (clearTimeout(P),
                                                (P = setTimeout(function () {
                                                    o.css("position", "fixed");
                                                }, 800))),
                                            f.trigger("header-sticked");
                                    else {
                                        if ((o.removeClass("sticky-values"), s.length && !u.header_sticky_top_bar))
                                            if (y) {
                                                s.show().addClass("measure");
                                                var t = s.height();
                                                s.removeClass("measure"),
                                                    s.on("transitionend", J),
                                                    setTimeout(function () {
                                                        s.removeClass("hide").css("height", t + "px");
                                                    }, 15);
                                            } else s.show().removeClass("hide");
                                        C &&
                                            (clearTimeout(P),
                                            (P = setTimeout(function () {
                                                o.css("position", "");
                                            }, 800))),
                                            f.trigger("header-unsticked");
                                    }
                                },
                                V = function (e, t) {
                                    o
                                        .children("div.head")
                                        .find("div.socials")
                                        .removeClass(E[e][0] + " " + E[e][1])
                                        .addClass(E[t][0] + " " + E[t][1]),
                                        s.length &&
                                            s
                                                .find("div.socials")
                                                .removeClass(E[e][2] + " " + E[e][3])
                                                .addClass(E[t][2] + " " + E[t][3]);
                                },
                                N = function (i, e) {
                                    if (k) {
                                        var s = m.scrollTop(),
                                            r = s < n,
                                            c = s > a,
                                            h = s < a,
                                            p = 0;
                                        !r && c && "noTop_scrollingDown" !== l
                                            ? ((l = "noTop_scrollingDown"), C && o.addClass("sticky-hide"), R(1))
                                            : r && c && "top_scrollingDown" !== l
                                            ? (l = "top_scrollingDown")
                                            : C && (0 === s || 0 > s) && h && o.hasClass("sticky-values")
                                            ? (o.css("position", ""), o.removeClass("sticky-hide"), R(0))
                                            : C && r && h && "top_scrollingUp" !== l && "top_scrollingDown" !== l
                                            ? (o.css("position", "fixed"), (l = "top_scrollingUp"), o.removeClass("sticky-hide"))
                                            : !C && r && h && "top_scrollingUp" !== l && "top_scrollingDown" !== l
                                            ? ((l = "top_scrollingUp"), R(0))
                                            : !r && h && "noTop_scrollingUp" !== l && ((l = "noTop_scrollingUp"), C && (o.css("position", "fixed"), o.removeClass("sticky-hide")), R(1)),
                                            (a = s);
                                    }
                                    var g = !1;
                                    if (w.length)
                                        for (p = 0; p < w.length; p++) {
                                            var f = w.eq(p);
                                            if (I(f)) {
                                                var v,
                                                    y = void 0;
                                                if ("undefined" == typeof i || "undefined" == typeof i.type || "revolution" !== i.type || "onbeforeswap.slide" !== i.namespace)
                                                    (v = f.attr("data-slideactive")), "undefined" != typeof v && (y = f.find('li[data-index="' + v + '"]').attr("data-variant"));
                                                else if (e.nextslide.parents("div.rev_slider").eq(0).is(f)) y = e.nextslide.attr("data-variant");
                                                else return;
                                                "undefined" != typeof y && ((g = !0), U(y));
                                                break;
                                            }
                                        }
                                    if (!g && z.length)
                                        for (p = 0; p < z.length; p++)
                                            if (I(z.eq(p))) {
                                                (g = !0), U(z.eq(p).attr("data-a13-header-color-variant"));
                                                break;
                                            }
                                    if ((g || U(), x)) {
                                        var b = parseInt(u.show_header_at, 10),
                                            T = {};
                                        (b = 0 < b ? b : 1),
                                            "object" == typeof elementorFrontend
                                                ? (T = t(".elementor-section-wrap")
                                                      .children()
                                                      .eq(b - 1))
                                                : "function" == typeof vc_js &&
                                                  (T = d
                                                      .find("div.real-content")
                                                      .children("div.vc_row")
                                                      .eq(b - 1)),
                                            T.length && m.scrollTop() < T.offset().top ? o.addClass("hide-until-scrolled-to") : o.removeClass("hide-until-scrolled-to");
                                    }
                                },
                                F = function (t) {
                                    var e = parseInt(o.find("div.logo-container").find("a.logo").not(".hidden-logo").innerHeight(), 10),
                                        a = !!parseInt(u.allow_mobile_menu, 10),
                                        i = c.layout.size;
                                    ("undefined" == typeof g || ("undefined" != typeof t && "a13LogoLoaded" === t.type)) && (g = e),
                                        "undefined" != typeof t && "header-unsticked" === t.type && (e = g),
                                        v.length ? (i > b[2] || !a ? v.css({ "line-height": e + "px", height: e + "px" }) : v.css({ "line-height": "", height: "" })) : i > b[2] ? r.css("min-height", e) : r.css("min-height", "");
                                },
                                U = function (e) {
                                    "off" !== T &&
                                        ("sticky" === T && (e = "normal"),
                                        (L = S),
                                        (S = e),
                                        "undefined" == typeof S ? (o.hasClass("sticky-values") ? (S = M) : (S = A)) : "normal" === S && o.hasClass("sticky-values") && (S = M),
                                        L === S || (G(), Y()));
                                },
                                G = function () {
                                    o.removeClass(B), H.length && H.addClass(q), V(L, A);
                                },
                                Y = function () {
                                    o.addClass("a13-" + S + "-variant"), j[S].length ? j[S].removeClass(q) : e.removeClass(q), V(A, S);
                                },
                                X = function (e) {
                                    s.is(e.target) && "visibility" === e.originalEvent.propertyName && (s.off("transitionend", X), s.hide());
                                },
                                J = function (e) {
                                    s.is(e.target) && "opacity" === e.originalEvent.propertyName && (s.off("transitionend", J), s.css({ display: "", height: "" }));
                                },
                                K = 0;
                            K < D.length;
                            K++
                        )
                            (B += " a13-" + D[K] + "-variant"), (H = H.add(j[D[K]])), A === D[K] && (j[D[K]].length ? (e = j[D[K]]) : (e = j.normal));
                        !p &&
                            h &&
                            (f.on("a13LogoLoaded header-unsticked header-sticked", F),
                            o.find("a.logo").on("transitionend", function (t) {
                                "padding-top" === t.originalEvent.propertyName &&
                                    (o.hasClass("sticky-values")
                                        ? F()
                                        : setTimeout(function () {
                                              W({}, c.layout.size);
                                          }, 500));
                            }),
                            v.length &&
                                v.eq(0).on("transitionend", function (t) {
                                    v.eq(0).is(t.target) && "height" === t.originalEvent.propertyName && !o.hasClass("sticky-values") && W({}, c.layout.size);
                                })),
                            f.on("a13LogoLoaded", W),
                            c.layout.add(W),
                            W({}, c.layout.size),
                            O && m.scroll(c.throttle(N, 250)),
                            w.length && w.on("revolution.slide.onbeforeswap", N);
                    }
                },
                headerVertical: function () {
                    if (o.hasClass("vertical")) {
                        var e,
                            i,
                            l,
                            n,
                            p,
                            g,
                            u,
                            y,
                            k,
                            C,
                            x,
                            w,
                            z,
                            T,
                            A = o.find("div.head"),
                            M = 0,
                            S = 0,
                            L = !1,
                            D = f.hasClass("site-layout-bordered"),
                            q = D && !f.hasClass("no-border-top"),
                            O = D && !f.hasClass("no-border-bottom"),
                            P = t("div.theme-borders"),
                            j = P.find("div.top-border"),
                            E = P.find("div.bottom-border"),
                            H = !1,
                            B = function () {
                                (w = m.height()), (z = f.height()), (u = v ? parseInt(r.height(), 10) : 0), (y = q ? parseInt(j.height(), 10) : 0), (k = O ? parseInt(E.height(), 10) : 0), (C = y + k), (n = u + y), (g = u + C);
                            },
                            W = function () {
                                (S = h.scrollTop || a.pageYOffset || 0), I();
                            },
                            I = function () {
                                L ||
                                    requestAnimationFrame(function () {
                                        V();
                                    }),
                                    (L = !0);
                            },
                            R = function () {
                                (i = l = !1), o.css("top", "").removeClass("stick_to_top").removeClass("stick_to_bottom"), (M = -1);
                            },
                            V = function (t) {
                                "undefined" == typeof t && (t = !1),
                                    (L = !1),
                                    b[2] > e ||
                                        ((x = A.innerHeight()),
                                        t && R(),
                                        x > w - g
                                            ? S >= M
                                                ? i
                                                    ? ((i = !1), o.removeClass("stick_to_top"), (p = S + u), o.css("top", p))
                                                    : !l && S + w > x + o.offset().top + k && x + g < z && ((l = !0), o.css("top", "").addClass("stick_to_bottom").removeClass("stick_to_top"))
                                                : S < M &&
                                                  (l
                                                      ? ((l = !1), o.removeClass("stick_to_bottom"), (p = S - C + w - x), o.css("top", p))
                                                      : !i && S + n < o.offset().top && ((i = !0), o.css("top", "").addClass("stick_to_top").removeClass("stick_to_bottom")))
                                            : !i && ((i = !0), (l = !1), o.css("top", "").addClass("stick_to_top").removeClass("stick_to_bottom")),
                                        (M = S));
                            },
                            N = function () {
                                (e = m.width()), (S = h.scrollTop || a.pageYOffset || 0), V(!0);
                            },
                            F = function (e, a) {
                                B();
                                var i = o.find("nav.navigation-bar");
                                A.css("padding-bottom", ""), i.css("height", "");
                                var l = parseInt(A.css("padding-bottom"), 10);
                                if (a > b[2]) {
                                    if (H)
                                        return (
                                            (H = !1),
                                            clearTimeout(T),
                                            void (T = setTimeout(function () {
                                                F(e, a);
                                            }, 500))
                                        );
                                    d.css("padding-top", ""), s.length && (!t("#footer-was-here").length && (s.before('<div id="footer-was-here" />'), A.append(s)), A.css("padding-bottom", s.outerHeight(!0) + l));
                                    var n,
                                        r = parseInt(m.height(), 10);
                                    parseInt(o.height(), 10) <= r && ((n = parseInt(i.height(), 10) + (r - g - parseInt(A.innerHeight(), 10))), i.css("height", n)),
                                        "undefined" == typeof o.data("scrolling-events") &&
                                            (o.data("scrolling-events", !0),
                                            m
                                                .on("scroll.header", W)
                                                .on("mess_in_header", function () {
                                                    V();
                                                })
                                                .on("resize.header", function () {
                                                    clearTimeout(T), (T = setTimeout(N, 500));
                                                }),
                                            V());
                                } else
                                    R(),
                                        (H = !0),
                                        s.length && A.find(s).length && (t("#footer-was-here").after(s).remove(), A.css("padding-bottom", "")),
                                        "undefined" != typeof o.data("scrolling-events") &&
                                            (o.removeData("scrolling-events"), m.off("scroll.header mess_in_header resize.header"), clearTimeout(T), o.css("top", "").removeClass("stick_to_top").removeClass("stick_to_bottom")),
                                        a <= b[0] ? d.css("padding-top", "") : d.css("padding-top", o.height());
                            };
                        c.layout.add(F),
                            F({}, c.layout.size),
                            s.length &&
                                s.imagesLoaded(function () {
                                    F({}, c.layout.size);
                                });
                    }
                },
                headerSearch: function () {
                    var t = n.find("#search-button");
                    if (t.length) {
                        var a = o.find("div.search-container"),
                            i = a.find("form.search-form"),
                            e = i.find('input[name="s"]'),
                            l = i.next(),
                            s = function (t) {
                                "opacity" !== t.originalEvent.propertyName || (a.off("transitionend", s), e.focus());
                            },
                            d = function (e) {
                                "visibility" !== e.originalEvent.propertyName || (a.off("transitionend", d), a.removeClass("open"));
                            };
                        t.on("click", function () {
                            return a.hasClass("open")
                                ? void l.click()
                                : void (a.addClass("open"),
                                  y
                                      ? (a.on("transitionend", s),
                                        setTimeout(function () {
                                            a.addClass("show");
                                        }, 15))
                                      : (a.addClass("show"), e.focus()),
                                  t.addClass("active"));
                        }),
                            l.on("click", function (i) {
                                i.preventDefault(), y ? a.on("transitionend", d) : a.removeClass("open"), a.removeClass("show"), t.removeClass("active");
                            });
                    }
                },
                topMessage: function () {
                    var e = t("#top-closable-message");
                    if (e.length) {
                        var a = e.find("div.button").children(),
                            i = e.find("span.close-sidebar"),
                            l = function (t) {
                                "opacity" !== t.originalEvent.propertyName || (e.off("transitionend", l), e.remove());
                            };
                        a.add(i).one("click", function (t) {
                            t.stopPropagation(), t.preventDefault(), y ? (e.on("transitionend", l), e.addClass("hide")) : (e.addClass("hide"), e.remove()), c.cookieExpire("posterity_top_msg=closed", 168);
                        });
                    }
                },
                toolsLanguages: function () {
                    var e = t("#tools-lang-switcher");
                    if (e.length) {
                        var a = e.parent();
                        e.on("click", function () {
                            a.toggleClass("open");
                        });
                    }
                },
                toTop: function () {
                    var e = t("#to-top"),
                        a = function () {
                            100 < m.scrollTop() ? e.addClass("show") : e.removeClass("show");
                        };
                    e.length && (a(), m.scroll(c.debounce(a, 250)));
                },
                scrollToAnchor: function () {
                    var i = function (e, i) {
                            t("html,body").animate({ scrollTop: Math.round(e.offset().top) }, 1e3, function () {
                                "undefined" != typeof i && (a.location.hash = i);
                            });
                        },
                        o = function () {
                            var e = t(this);
                            return !(e.parent().hasClass("vc_pagination-item") || e.parents("li.vc_tta-tab").length || e.parents("h4.vc_tta-panel-title").length || e.hasClass("lae-tab-label"));
                        },
                        n = function () {
                            var e = t("a").filter('[href*="#"]').length ? t._data(l, "events") : null;
                            if (e && "undefined" != typeof e.click) for (var a, o = e.click.length - 1; 0 <= o; o--) (a = e.click[o]), a && 'a[href*="#"]' === a.selector && (a.selector = 'a[href*="#"]:not(a)');
                        };
                    if (a.location.hash.length) {
                        var s = decodeURIComponent(a.location.hash);
                        if (-1 === ["#", "#!", "#/"].indexOf(s) && -1 === s.indexOf("=") && -1 === s.indexOf("&")) {
                            var r = t(s),
                                c = t("div.vc_row[data-a13-one-page-pointer=" + s.slice(1) + "]");
                            (r = r.length ? r : t("[name=" + s.slice(1) + "]")),
                                (r = r.add(c)),
                                r.length &&
                                    setTimeout(function () {
                                        i(r, s);
                                    }, 1500);
                        }
                    }
                    var h = t("ul.top-menu"),
                        p = t("#menu-overlay"),
                        g = d.find("a").filter('[href*="#"]').not('[href="#"]').not('[href*="#!"]').not("[data-vc-container]").filter(o),
                        f = h.length ? h.find("a").filter('[href*="#"]').not('[href="#"]').not('[href*="#!"]') : [],
                        v = p.length ? p.find("a").filter('[href*="#"]').not('[href="#"]').not('[href*="#!"]') : [],
                        y = g.add(f).add(v).add("#to-top");
                    y.click(function (l) {
                        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
                            var e = decodeURIComponent(this.hash),
                                o = t(e),
                                n = t("div.vc_row[data-a13-one-page-pointer=" + e.slice(1) + "]");
                            (o = o.length ? o : t("[name=" + e.slice(1) + "]")),
                                (o = o.add(n)),
                                o.length && o.is(":visible") && (u.anchors_in_bar ? i(o, e) : (i(o), "undefined" != typeof history && history.pushState && history.pushState(null, null, a.location.pathname)), l.preventDefault());
                        }
                    }),
                        m.on("load", function () {
                            setTimeout(n, 300);
                        });
                },
                menuOverlay: function () {
                    var e = t("#menu-overlay-switch");
                    if (e.length) {
                        var a = t("#menu-overlay"),
                            i = t("span.close-menu"),
                            l = function () {
                                e.removeClass("active"), a.removeClass("open");
                            },
                            o = function (t) {
                                return (
                                    t.stopPropagation(),
                                    t.preventDefault(),
                                    a.hasClass("open") ? void s(t) : void (e.addClass("active"), a.addClass("open"), a.on("transitionend", n), a.children().height() > a.height() && a.addClass("big-content"))
                                );
                            },
                            n = function (e) {
                                "visibility" !== e.originalEvent.propertyName || (a.is(e.target) && (a.off("transitionend", n), a.removeClass("big-content")));
                            },
                            s = function (t) {
                                t.preventDefault(), l();
                            };
                        e.on("click", o),
                            i.on("click", s),
                            !parseInt(u.menu_overlay_on_click, 10) ||
                                a
                                    .find(".menu-item")
                                    .find("a")
                                    .on("click", function () {
                                        i.trigger("click");
                                    });
                    }
                },
                sideMenu: function () {
                    var e = t("#side-menu-switch");
                    if (e.length) {
                        var a,
                            i = t("span.close-sidebar"),
                            l = t("#content-overlay"),
                            o = function () {
                                e.removeClass("active"), f.removeClass(a + "-open");
                            },
                            n = function (e) {
                                e.preventDefault();
                                var a = t(e.target);
                                (a.is(i) || !a.parents().addBack().hasClass("side-widget-menu")) && (o(), l.off("click", n), i.off("click", n));
                            };
                        e.on("click", function (e) {
                            e.stopPropagation(), e.preventDefault();
                            var o = t(this),
                                s = o.attr("id");
                            o.hasClass("active") ? l.trigger("click") : (l.trigger("click"), o.addClass("active"), (a = s.slice(0, s.length - 7)), f.addClass(a + "-open"), l.on("click", n), i.on("click", n));
                        });
                    }
                },
                basketMenu: function () {
                    var e = t("#basket-menu-switch");
                    if (e.length) {
                        var a = t("span.close-sidebar"),
                            i = t("#basket-menu"),
                            l = o.hasClass("vertical"),
                            n = l && f.hasClass("header-side-right"),
                            s = function () {
                                var t,
                                    a,
                                    s = c.layout.size;
                                return (
                                    p(),
                                    n && s > b[2]
                                        ? ((t = parseInt(e.offset().top, 10)), (a = parseInt(o.offset().left, 10) - i.innerWidth()))
                                        : l && s > b[2]
                                        ? ((t = parseInt(e.offset().top, 10)), (a = parseInt(o.outerWidth(), 10) + parseInt(o.offset().left, 10)))
                                        : ((t = parseInt(o.offset().top, 10) + parseInt(o.outerHeight(), 10)), (a = parseInt(e.offset().left, 10) - 160 + parseInt(e.width() / 2)), a + 320 > m.width() && (a = m.width() - 320)),
                                    { display: "block", top: t, left: a }
                                );
                            },
                            d = function () {
                                e.removeClass("active"), f.removeClass("basket-menu-open");
                            },
                            r = function (e) {
                                var o = t(e.target),
                                    n = c.layout.size;
                                (o.is(a) || !o.parents().addBack().hasClass("basket-sidebar")) &&
                                    (d(),
                                    y ? (l && n > b[2] ? (i.css("transform", "translateY(100%)"), i.on("transitionend", h), i.removeClass("show")) : (i.on("transitionend", h), i.removeClass("show"))) : (i.removeClass("show"), p()),
                                    f.off("click", r),
                                    a.off("click", r));
                            },
                            h = function (e) {
                                i.is(e.target) && "visibility" === e.originalEvent.propertyName && p();
                            },
                            p = function () {
                                i.off("transitionend", h), i.hide().css("transform", "");
                            };
                        e.on("click", function (t) {
                            return (
                                t.stopPropagation(),
                                t.preventDefault(),
                                f.hasClass("basket-menu-open")
                                    ? void r({ target: a })
                                    : void (e.addClass("active"),
                                      f.addClass("basket-menu-open"),
                                      i.css(s()),
                                      setTimeout(function () {
                                          i.addClass("show");
                                      }, 15),
                                      f.on("click", r),
                                      a.on("click", r))
                            );
                        });
                    }
                },
                titleBar: function () {
                    var e = d.find("header.title-bar.has-effect");
                    e.length &&
                        (m.on("scroll resize a13_title_bar_trigger", function () {
                            var t = h.scrollTop || a.pageYOffset || 0,
                                i = parseInt(m.height(), 10),
                                l = parseInt(e.outerHeight(), 10),
                                o = parseInt(e.offset().top, 10) + 50,
                                n = (t - o) / l;
                            0 > n && (n = 0),
                                1 < n && (n = 1),
                                (t > o + l && t + i < o) ||
                                    e
                                        .children()
                                        .children()
                                        .css({ position: "relative", top: l * n, opacity: 1 - 2.5 * n });
                        }),
                        m.trigger("a13_title_bar_trigger"));
                },
                pageSlider: function () {
                    var e = t(".item-slider");
                    e.length &&
                        e
                            .filter(function () {
                                var e = t(this).find("img");
                                return 1 < e.length;
                            })
                            .slidesjs({
                                width: 940,
                                height: 528.75,
                                pagination: { active: !0 },
                                navigation: { active: !1, effect: "slide" },
                                play: { active: !1, effect: "slide", interval: 5e3, auto: !0, swap: !1, pauseOnHover: !1, restartDelay: 2500 },
                            });
                },
                footer: function () {
                    if (s.length && o.hasClass("a13-horizontal")) {
                        var e,
                            a = s.hasClass("unravel"),
                            i = function () {
                                var a = m.scrollTop(),
                                    i = t(l).height(),
                                    o = m.height();
                                i - o - a <= e ? s.removeClass("hide-it") : s.addClass("hide-it");
                            },
                            n = function (t, l) {
                                if (((e = s.outerHeight()), m.off("scroll.footer"), l <= b[2])) {
                                    var o = parseInt(d.offset().top, 10),
                                        n = parseInt(d.css("padding-top"), 10),
                                        r = m.height();
                                    d.css("min-height", r - (o + n + e)), a && (d.css("margin-bottom", ""), s.removeClass("hide-it"));
                                } else d.css("min-height", ""), a && (m.on("scroll.footer", c.throttle(i, 50)), d.css("margin-bottom", e), i());
                            };
                        c.layout.add(n), n({}, c.layout.size);
                    }
                },
                blogMasonry: function (e) {
                    e = "undefined" == typeof e ? f : e;
                    for (var t = e.find("div.posts-grid-container"), a = o.hasClass("vertical"), l = 0; l < t.length; l++) {
                        var n = t.eq(l),
                            s = n.parent().prev("ul.posts-filter");
                        n.data("isotope") || (a && (s = s.add(o.find("ul.blog-filter"))), c.elementsActions.lazyLoadBricks({ container: n, items: ".archive-item", filter: s, gutter: n.data("margin"), layoutMode: u.posts_layout_mode }));
                    }
                },
                shopMasonry: function () {
                    c.elementsActions.lazyLoadBricks({
                        container: d.find(".content-box").children(".formatter").children("ul.products"),
                        items: "li.product",
                        filter: "",
                        gutter: u.products_brick_margin,
                        layoutMode: u.products_layout_mode,
                    });
                },
                albumsListMasonry: function (e) {
                    e = "undefined" == typeof e ? f : e;
                    for (var t = e.find("div.albums-grid-container"), a = o.hasClass("vertical"), l = 0; l < t.length; l++) {
                        var n = t.eq(l),
                            s = n.parent().prev("ul.albums-filter");
                        n.data("isotope") ||
                            (a && (s = s.add(o.find("ul.albums-filter"))), c.elementsActions.lazyLoadBricks({ container: n, items: ".archive-item", filter: s, gutter: n.data("margin"), layoutMode: u.albums_list_layout_mode }));
                    }
                },
                worksListMasonry: function (e) {
                    e = "undefined" == typeof e ? f : e;
                    for (var t = e.find("div.works-grid-container"), a = o.hasClass("vertical"), l = 0; l < t.length; l++) {
                        var n = t.eq(l),
                            s = n.parent().prev("ul.works-filter");
                        n.data("isotope") ||
                            (a && (s = s.add(o.find("ul.works-filter"))), c.elementsActions.lazyLoadBricks({ container: n, items: ".archive-item", filter: s, gutter: n.data("margin"), layoutMode: u.works_list_layout_mode }));
                    }
                    m.on("grid:items:added", function () {
                        f.trigger("post-load");
                    });
                },
                peopleListMasonry: function (e) {
                    e = "undefined" == typeof e ? f : e;
                    for (var t, a = e.find("div.people-grid-container"), l = 0; l < a.length; l++)
                        ((t = a.eq(l)), !t.data("isotope")) &&
                            c.elementsActions.lazyLoadBricks({ container: t, items: ".archive-item", filter: t.parent().prev("ul.people-filter"), gutter: t.data("margin"), layoutMode: u.people_list_layout_mode });
                },
                A13PostLightbox: function () {
                    var i,
                        l,
                        o = "undefined" != typeof history && history.pushState,
                        n = function (e, i) {
                            "undefined" == typeof i && (i = !0), h();
                            var l = t("#a13-post-lightbox");
                            if (i) {
                                var o = a.location.href.split("#")[0],
                                    n = o + "#a13lightbox-" + e.parents().filter(".object-item").eq(0).attr("data-id");
                                d(n);
                            }
                            p.addClass("post-lightbox-active"),
                                l.children("div.a13-post-lightbox-content").load(e.attr("href"), "a13-ajax-get", function () {
                                    l.removeClass("loading"), r(e), f.trigger("post-load");
                                    var a = l.find(".gallery-media-collection");
                                    if (a.length) {
                                        var i = a.children();
                                        i.each(function () {
                                            var e = t(this),
                                                a = e.find("div.album-video");
                                            a.length && e.attr("data-html", "#" + a.attr("id"));
                                        });
                                    }
                                    c.elementsActions.useSlider(l.find(".a13-slider-stuff").attr("data-window_high", "off")), "function" == typeof vc_js && vc_js(), l.find("div.real-content").add(l.find("div.similar-works-frame"));
                                });
                        },
                        s = function (e) {
                            if (0 === e.indexOf("#a13lightbox-")) {
                                var a,
                                    i = e.slice("#a13lightbox-".length);
                                (a = t('div[data-id="' + i + '"]').children("a")), a.length && n(a, !1);
                            } else {
                                var l = t("#a13-post-lightbox");
                                l.length && l.is(":visible") && l.children("div.controls").find("span.close").trigger("click");
                            }
                        },
                        d = function (e) {
                            o && e !== a.location.href && history.pushState(null, null, e);
                        },
                        r = function (e) {
                            var a,
                                o = e.parents(),
                                n = t("#a13-post-lightbox").children("div.controls");
                            o.is("div.similar-works-frame") && ((a = t("#" + o.filter(".object-item").attr("id"))), a.length && (o = a.parents())),
                                o.is("div.bricks-frame")
                                    ? ((a = o.filter(".object-item")),
                                      (l = a.prevAll(".object-item").filter(":visible").eq(0)),
                                      (l = l.length ? l.children("a") : ""),
                                      (i = a.nextAll(".object-item").filter(":visible").eq(0)),
                                      (i = i.length ? i.children("a") : ""))
                                    : o.is("div.post-grid-bricks-frame")
                                    ? ((a = o.filter("div.vc_grid-item")),
                                      (l = a.prevAll("div.vc_grid-item").filter(":visible").eq(0)),
                                      (l = l.length ? l.find(".object-item").children("a") : ""),
                                      (i = a.nextAll("div.vc_grid-item").filter(":visible").eq(0)),
                                      (i = i.length ? i.find(".object-item").children("a") : ""))
                                    : ((l = ""), (i = "")),
                                i.length ? n.find("span.next").removeClass("inactive") : n.find("span.next").addClass("inactive"),
                                l.length ? n.find("span.prev").removeClass("inactive") : n.find("span.prev").addClass("inactive");
                        },
                        h = function () {
                            var o,
                                s = t("#a13-post-lightbox"),
                                r = !1,
                                c = function () {
                                    s.show(),
                                        setTimeout(function () {
                                            s.addClass("show");
                                        }, 15);
                                },
                                h = function () {
                                    o.find("span").not(".close").addClass("inactive");
                                },
                                g = function (e) {
                                    s.is(e.target) && "visibility" === e.originalEvent.propertyName && (s.off("transitionend", g), u());
                                },
                                u = function () {
                                    s.hide(), s.find(".a13-slider").trigger("a13-slider-destroy"), s.children("div.a13-post-lightbox-content").empty();
                                };
                            s.length ||
                                (t(
                                    '<div id="a13-post-lightbox" class="a13-post-lightbox"><div class="a13-post-lightbox-content"></div><div class="controls">\t<span class="close fa fa-times"></span>\t<span class="prev fa fa-chevron-' +
                                        (e ? "right" : "left") +
                                        ' inactive"></span>\t<span class="next fa fa-chevron-' +
                                        (e ? "left" : "right") +
                                        ' inactive"></span></div><div class="a13-post-lightbox-preloader"></div></div>'
                                ).appendTo(f),
                                (r = !0)),
                                (s = t("#a13-post-lightbox")),
                                (o = s.children("div.controls")),
                                s.find(".a13-slider").trigger("a13-slider-destroy"),
                                r
                                    ? (o
                                          .find("span.close")
                                          .on("click", function () {
                                              y ? (s.on("transitionend", g), s.removeClass("show")) : (s.removeClass("show"), u()), h(), m.off("scroll.a13-lightbox"), p.removeClass("post-lightbox-active"), d(a.location.href.split("#")[0]);
                                          })
                                          .end()
                                          .find("span.prev")
                                          .on("click", function () {
                                              !l.length || t(this).hasClass("inactive") || s.is(".loading") || n(l);
                                          })
                                          .end()
                                          .find("span.next")
                                          .on("click", function () {
                                              !i.length || t(this).hasClass("inactive") || s.is(".loading") || n(i);
                                          }),
                                      c())
                                    : s.is(":visible")
                                    ? h()
                                    : (h(), c()),
                                s.addClass("loading");
                        };
                    f.on("click", ".open-item-in-lightbox > a", function (e) {
                        e.preventDefault();
                        var a = t(e.target);
                        a.is("a") && n(a);
                    }),
                        m.on("popstate", function () {
                            s(a.location.hash);
                        }),
                        a.location.hash.length && s(a.location.hash);
                },
                lazyLoadBricks: function (a) {
                    var i = a.container instanceof jQuery ? a.container : t(a.container);
                    if (i.length) {
                        var l = a.items,
                            o = d.find("nav.navigation"),
                            n = t("#loadingSpace"),
                            s = a.filter instanceof jQuery ? a.filter : t(a.filter),
                            r = a.layoutMode,
                            h = parseInt(a.gutter, 10),
                            p = i.data("lazy-load"),
                            g = i.data("lazy-load-mode"),
                            v = p && "auto" === g,
                            y = p && !v,
                            b = function (e) {
                                var a = t("#lazyload-indicator");
                                a.length || (a = t('<div id="lazyload-indicator" class="idle" title="' + u.loading_items + '"><div class="ll-animation"></div></div>').appendTo("undefined" == typeof e ? f : e)), a.removeClass("idle");
                            },
                            k = function () {
                                t("#lazyload-indicator").addClass("idle");
                            },
                            C = function () {
                                var e = o.prev(".load-more-button");
                                if (!e.length) {
                                    o.before('<div class="load-more-button"><span class="text">' + u.load_more + '<i class="a13icon-plus"></i></span><span class="ll-animation"></span></div>');
                                    var a = t("span.result-count");
                                    a && t("div.load-more-button").append(a);
                                }
                            },
                            x = function () {
                                var e = o.prev(".load-more-button");
                                e.length && e.fadeOut();
                            },
                            w = function () {
                                var e = t(this);
                                if (o.length) {
                                    var a = o.find("a.next");
                                    if (!a.length) return void x();
                                    e.addClass("loading"),
                                        n.load(a.attr("href"), "a13-ajax-get", function () {
                                            var a = n.find(".navigation");
                                            if ((o.replaceWith(a), (o = a), y)) {
                                                var s = n.find("span.result-count"),
                                                    d = t("div.load-more-button").find("span.result-count");
                                                d && d.replaceWith(s);
                                            }
                                            a.find("a.next").length || x(),
                                                n.imagesLoaded(function () {
                                                    var a = n.find(l);
                                                    "undefined" != typeof t.fn.mediaelementplayer && n.find(".wp-video video").mediaelementplayer("undefined" == typeof mejs ? {} : mejs.MediaElementDefaults),
                                                        a.fitVids(),
                                                        a.appendTo(i),
                                                        c.elementsActions.pageSlider(),
                                                        c.elementsActions.parallax(),
                                                        i.isotope("appended", a),
                                                        e.removeClass("loading"),
                                                        0 === i.data("isotope").filteredItems.length && t("div.load-more-button").click();
                                                });
                                        });
                                }
                            },
                            z = function () {
                                var e = function () {
                                    m.off(".lazyload"), T();
                                };
                                m.on(
                                    "scroll.lazyload resize.lazyload",
                                    c.throttle(function () {
                                        var t = m.scrollTop() + m.height();
                                        250 > i.height() - t && e();
                                    }, 150)
                                );
                            },
                            T = function () {
                                if (o.length) {
                                    var e = o.find("a.next");
                                    if (!e.length) return void k();
                                    if (!(i.height() < 2 * m.height() + m.scrollTop() && e.length)) return z(), void k();
                                    b(),
                                        n.load(e.attr("href"), "a13-ajax-get", function () {
                                            var e = n.find(".navigation");
                                            o.replaceWith(e),
                                                (o = e),
                                                n.imagesLoaded(function () {
                                                    var e = n.find(l);
                                                    "undefined" != typeof t.fn.mediaelementplayer && n.find(".wp-video video").mediaelementplayer("undefined" == typeof mejs ? {} : mejs.MediaElementDefaults),
                                                        e.fitVids(),
                                                        e.appendTo(i),
                                                        c.elementsActions.pageSlider(),
                                                        i.isotope("appended", e),
                                                        T();
                                                });
                                        });
                                }
                            };
                        if (
                            (n.length || (n = t('<div id="loadingSpace"></div>').appendTo(f)),
                            (r = "undefined" != typeof r && r.length ? a.layoutMode : "packery"),
                            (r = "undefined" == typeof Isotope.LayoutMode.modes[r] ? "masonry" : r),
                            i
                                .isotope({
                                    itemSelector: l,
                                    transitionDuration: "0.6s",
                                    isOriginLeft: !e,
                                    layoutMode: r,
                                    packery: { columnWidth: ".grid-master", gutter: h },
                                    masonry: { columnWidth: ".grid-master", gutter: h },
                                    fitRows: { gutter: h },
                                })
                                .addClass("layout-" + r),
                            i.imagesLoaded(function () {
                                i.isotope("layout"), v ? T() : y && 0 === i.data("isotope").filteredItems.length && t("div.load-more-button").click();
                            }),
                            f.on("webfontsloaded", function () {
                                i.data("isotope") && i.isotope("layout");
                            }),
                            f.on("jetpack-lazy-loaded-image", function () {
                                i.data("isotope") &&
                                    setTimeout(function () {
                                        i.isotope("layout");
                                    }, 100);
                            }),
                            s.length)
                        ) {
                            var A = s.find("li");
                            A.on("click", function (e) {
                                e.stopPropagation(), e.preventDefault(), A.removeClass("selected");
                                var a = t(this).addClass("selected"),
                                    l = a.data("filter");
                                (l = "__all" === l ? "*" : "[data-category-" + l + "]"), i.isotope({ filter: l }), v ? m.trigger("scroll.lazyload") : y && 0 === i.data("isotope").filteredItems.length && t("div.load-more-button").click();
                            }),
                                A.filter(".selected").click();
                        }
                        y && (C(), t("div.load-more-button").on("click", w));
                    }
                },
                singleCptMasonry: function (a) {

                    var l = a.container instanceof jQuery ? a.container : t(a.container);
                    if (l.length) {
                        var o = l.prevAll(".gallery-media-collection"),
                            n = o.children(),
                            s = a.id ? a.id : 1,
                            d = t('<div id="loadingSpace-' + s + '" class="loadingSpace"></div>').appendTo(f),
                            h = a.filter ? (a.filter instanceof jQuery ? a.filter : t(a.filter)) : t([]),
                            p = a.proofing_filter ? t(a.proofing_filter) : t([]),
                            g = t("#done-with-proofing"),
                            y = l.data("cover-color"),
                            k = parseInt(l.data("desc"), 10),
                            C = parseInt(l.data("proofing"), 10),
                            x = parseInt(l.data("socials"), 10),
                            w = !!u.proofing_manual_ids,
                            z = 0,
                            T = n.length,
                            A = a.thumbs_video ? a.thumbs_video : "",
                            M = a.sticky_sidebar ? a.sticky_sidebar_el : "",
                            S = function (e) {
                                var a = t("#lazyload-indicator");
                                a.length || (a = t('<div id="lazyload-indicator" class="idle" title="' + u.loading_items + '"><div class="ll-animation"></div></div>').appendTo("undefined" == typeof e ? f : e)), a.removeClass("idle");
                            },
                            L = function () {
                                t("#lazyload-indicator").addClass("idle");
                            },
                            D = function () {
                                var e = function () {
                                    m.off(".lazyload" + s), B();
                                };
                                m.on(
                                    "scroll.lazyload" + s + " resize.lazyload" + s,
                                    c.throttle(function () {
                                        var t = m.scrollTop() + m.height();
                                        250 > l.height() + l.offset().top - t && e();
                                    }, 150)
                                ),
                                    m.on("filter.lazyload" + s, e);
                            },
                            q = function (e) {
                                var a = n.eq(e),
                                    l = "",
                                    o = a.find(".item-desc").find(".description"),
                                    s = a.find(".add_to_cart_inline"),
                                    d = a.children(".item__link"),
                                    r = d.text(),
                                    c = a.data("filter"),
                                    h = "",
                                    p = a.hasClass("type-video") ? "type-video" : "type-image",
                                    g = C ? a.find("div.proofing_comment").html() : "",
                                    f = function () {
                                        var e = "";
                                        if (C) {
                                            var t = a.data("proofing_id") + "",
                                                i = 1 == a.data("proofing_checked");
                                            w || a.hasClass("subtype-videolink") || (t = a.data("id") + ""),
                                                (e += '<div class="proofing">'),
                                                t.length && (e += '<span class="p-id">' + t + "</span>"),
                                                (e += '<i class="p-comment fa fa-commenting' + (g.length ? " filled" : "") + '" title="' + u.proofing_add_comment + '"></i>'),
                                                (e += '<i class="p-check fa fa-check' + (i ? " filled" : "") + '" title="' + (i ? u.proofing_uncheck_item : u.proofing_mark_item) + '"></i>'),
                                                (e += "</div>");
                                        }
                                        return e;
                                    };
                                if ("undefined" != typeof c && c.length) for (var m = c.split(","), v = 0; v < m.length; v++) m[v].length && (h += " data-category-" + m[v] + '="1"');
                                return (
                                    C && ((h += ' data-proofing_checked="' + a.data("proofing_checked") + '"'), (h += ' data-proofing_comment="' + a.data("proofing_comment") + '"')),
                                    (s = s.length ? t("<div />").append(s.clone()).html() : ""),
                                    A || "type-video" !== p
                                        ? ((l += '<div class="archive-item object-item w' + a.data("ratio_x") + " " + p + '"' + h + ">"),
                                          (l += '<img src="' + a.data("brick_image") + '" alt="' + a.data("alt_attr") + '" title="' + r + '" />'),
                                          (l += '<div class="cover" style="' + (y ? "background-color:" + y + ";" : "") + '"></div>'),
                                          (l += '<div class="covering-image"></div>'),
                                          (l += '<div class="icon a13icon-plus"></div>'),
                                          (l += '<div class="caption">'),
                                          k &&
                                              ((l += '<div class="texts_group">'),
                                              (l += '<h2 class="post-title">'),
                                              r.length && (l += r),
                                              (l += "</h2>"),
                                              (l += o.length ? '<div class="excerpt">' + o.html() + s + "</div>" : ""),
                                              (l += "</div>")),
                                          a.hasClass("link") && (l += '<a href="' + d.attr("href") + '"' + (1 === parseInt(a.data("link_target"), 10) ? ' target="_blank"' : "") + "></a>"),
                                          (l += "</div>"),
                                          x && (l += '<div class="social"></div>'),
                                          (l += f()),
                                          (l += "</div>"))
                                        : a.hasClass("subtype-videolink")
                                        ? ((l += '<div class="archive-item object-item w' + a.data("ratio_x") + " " + p + '"' + h + ">"), (l += '<iframe src="' + a.data("video_player") + '" allowfullscreen />'), (l += f()), (l += "</div>"))
                                        : ((l += '<div class="archive-item object-item w' + a.data("ratio_x") + " " + p + '"' + h + ">"), (l += t(a.data("html")).html()), (l += f()), (l += "</div>")),
                                    l
                                );
                            },
                            O = function (e) {
                                if (1 !== parseInt(l.data("lightbox_off"), 10) && !(c.layout.size <= b[0] && 1 === parseInt(l.data("lightbox_off_mobile"), 10))) {
                                    var a = l.find(".object-item").index(t(this)),
                                        i = n.eq(a),
                                        o = t(e.target);
                                    if (!o.is("a") && 0 === o.parents("a").length) {
                                        if (A || !i.hasClass("type-video")) return void i.click();
                                        if (i.hasClass("link")) return;
                                        e.stopPropagation(), e.preventDefault();
                                    }
                                }
                            },
                            P = function (e) {
                                var a = t(this),
                                    i = a.parents(".object-item").eq(0),
                                    o = a.parent(),
                                    s = l.find(".object-item").index(i),
                                    d = n.eq(s),
                                    r = u.album_id,
                                    c = d.data("id"),
                                    h = d.find("div.proofing_comment").text(),
                                    p = function () {
                                        f.css("opacity", 0),
                                            setTimeout(function () {
                                                f.remove(), a.removeClass("fa-floppy-o").addClass("fa-commenting");
                                            }, 315);
                                    };
                                if ((e.stopPropagation(), e.preventDefault(), !a.hasClass("loading"))) {
                                    if (o.find("textarea").length) return void o.find("textarea").blur();
                                    a.removeClass("fa-commenting").addClass("fa-floppy-o");
                                    var f = t('<textarea placeholder="' + u.proofing_comment_placeholder + '"></textarea>')
                                        .appendTo(o)
                                        .focus();
                                    f.val(h),
                                        d.hasClass("subtype-videolink") && (c = "external"),
                                        f
                                            .one("blur", function () {
                                                var e = t.trim(f.val());
                                                return e === h
                                                    ? void p()
                                                    : void (f.prop("readonly", !0),
                                                      a.addClass("loading"),
                                                      t
                                                          .ajax({
                                                              type: "post",
                                                              url: u.ajaxurl,
                                                              data: { action: "posterity_comment_album_item", security: u.proofing_nonce, album_id: r, item_id: c, link: "external" === c ? d.data("src") : "", comment: e },
                                                              dataType: "json",
                                                          })
                                                          .done(function (t) {
                                                              "undefined" != typeof t.comment && (e = t.comment),
                                                                  e.length ? a.addClass("filled") : a.removeClass("filled"),
                                                                  p(),
                                                                  d.find("div.proofing_comment").html(e),
                                                                  i.add(d).attr("data-proofing_comment", e.length ? 1 : 0),
                                                                  l.isotope(),
                                                                  g.removeClass("done idle"),
                                                                  I();
                                                          })
                                                          .fail(function (e) {
                                                              "undefined" != typeof e.status && 403 == e.status && alert("Site version is outdated. Please refresh page to make this function work."), f.prop("readonly", !1);
                                                          })
                                                          .always(function () {
                                                              a.removeClass("loading");
                                                          }));
                                            })
                                            .on("keydown", function (e) {
                                                27 === e.keyCode && p();
                                            })
                                            .on("click", function (e) {
                                                e.stopPropagation();
                                            });
                                }
                            },
                            j = function (e) {
                                var a = t(this),
                                    i = a.parents(".object-item").eq(0),
                                    o = l.find(".object-item").index(i),
                                    s = n.eq(o),
                                    d = u.album_id,
                                    r = s.data("id");
                                e.stopPropagation(), e.preventDefault();
                                a.hasClass("loading") ||
                                    (s.hasClass("subtype-videolink") && (r = "external"),
                                    a.addClass("loading"),
                                    t
                                        .ajax({
                                            type: "get",
                                            url: u.ajaxurl,
                                            data: { action: "posterity_mark_album_item", security: u.proofing_nonce, album_id: d, item_id: r, link: "external" === r ? s.data("src") : "", approve: a.hasClass("filled") ? 0 : 1 },
                                            dataType: "json",
                                        })
                                        .done(function (e) {
                                            e.approve ? a.addClass("filled").attr("title", u.proofing_uncheck_item) : a.removeClass("filled").attr("title", u.proofing_mark_item),
                                                i.add(s).attr("data-proofing_checked", e.approve),
                                                l.isotope(),
                                                g.removeClass("done idle"),
                                                I();
                                        })
                                        .fail(function (e) {
                                            "undefined" != typeof e.status && 403 == e.status && alert("Site version is outdated. Please refresh page to make this function work.");
                                        })
                                        .always(function () {
                                            a.removeClass("loading");
                                        }));
                            },
                            E = function (e) {
                                e.stopPropagation(), e.preventDefault();
                                g.hasClass("loading") ||
                                    g.hasClass("done") ||
                                    (g.addClass("loading"),
                                    g.find("span.counter").text(n.filter("[data-proofing_checked=1]").length + "/" + n.length),
                                    t
                                        .ajax({ type: "get", url: u.ajaxurl, data: { action: "posterity_album_finished_proofing", security: u.proofing_nonce, album_id: u.album_id }, dataType: "json" })
                                        .done(function (e) {
                                            e.done &&
                                                (g.addClass("done"),
                                                setTimeout(function () {
                                                    g.addClass("idle");
                                                }, 4e3));
                                        })
                                        .fail(function (e) {
                                            "undefined" != typeof e.status && 403 == e.status && alert("Site version is outdated. Please refresh page to make this function work.");
                                        })
                                        .always(function () {
                                            g.removeClass("loading");
                                        }));
                            },
                            H = function () {
                                var a = parseInt(l.data("margin"), 10),
                                    i = "undefined" == typeof Isotope.LayoutMode.modes.packery ? "masonry" : "packery";
                                l
                                    .isotope({
                                        itemSelector: ".archive-item",
                                        transitionDuration: "0.6s",
                                        isOriginLeft: !e,
                                        layoutMode: i,
                                        packery: { columnWidth: ".grid-master", gutter: a },
                                        masonry: { columnWidth: ".grid-master", gutter: a },
                                    })
                                    .addClass("layout-" + i),
                                    f.on("webfontsloaded", function () {
                                        l.data("isotope") && l.isotope("layout");
                                    }),
                                    f.on("jetpack-lazy-loaded-image", function () {
                                        l.data("isotope") &&
                                            setTimeout(function () {
                                                l.isotope("layout");
                                            }, 100);
                                    }),
                                    l
                                        .on("click", ".object-item", O)
                                        .on("click", "i.p-comment", P)
                                        .on("click", "i.p-check", j)
                                        .on("click", "span.p-id", function (e) {
                                            e.stopPropagation(), e.preventDefault();
                                        }),
                                    t("#done-with-proofing").on("click", E);
                            },
                            B = function () {
                                if (T) {
                                    if (z >= T) return void L();
                                    var e = parseInt(l.css("height"), 10),
                                        a = parseInt(l.css("min-height"), 10),
                                        i = l.offset().top;
                                    if ((e === a && (e = 0), !(e + i < 2 * m.height() + m.scrollTop()))) return D(), void L();
                                    S();
                                    var o = "",
                                        s = z,
                                        r = z + 2;
                                    for (r = r > T ? T : r; z < r; z++) o += q(z);
                                    d.append(o).fitVids(),
                                        (z = s),
                                        d.find(".archive-item").each(function () {
                                            if (x) {
                                                var e = t(this).find(".social"),
                                                    a = n.eq(z).find(".dot-irecommendthis");
                                                "undefined" != typeof a2a_config && e.append(n.eq(z).find(".a2a_kit")), a.length && e.append(a);
                                            }
                                            z++;
                                        }),
                                        "undefined" != typeof t.fn.mediaelementplayer && d.find(".wp-video video").mediaelementplayer("undefined" == typeof mejs ? {} : mejs.MediaElementDefaults),
                                        d.imagesLoaded(function () {
                                            var e = d.find(".archive-item").appendTo(l);
                                            0 === s ? H() : l.isotope("appended", e), B();
                                        });
                                }
                            },
                            W = function (e) {
                                e.stopPropagation(), e.preventDefault();
                                var a,
                                    i = t(this),
                                    n = "",
                                    d = i.closest("ul.category-filter");
                                h.length && (d.is(h) ? (h.find("li").removeClass("selected"), (a = i.addClass("selected").data("filter"))) : (a = h.find("li.selected").data("filter")), "__all" !== a && (n = "[data-category-" + a + "]")),
                                    p.length &&
                                        (d.is(p) ? (p.find("li").removeClass("selected"), (a = i.addClass("selected").data("filter"))) : (a = p.find("li.selected").data("filter")),
                                        "__all" !== a && (2 === a ? (n += "[data-proofing_comment=1]") : (n += "[data-proofing_checked=" + a + "]"))),
                                    "" == n && (n = "*"),
                                    l.isotope({ filter: n }),
                                    m.trigger("filter.lazyload" + s),
                                    m.trigger("a13_gallery_filtered", [n, o]);
                            },
                            I = function () {
                                if (p.length) {
                                    var e = n.filter("[data-proofing_checked=1]").length,
                                        t = n.length - e,
                                        a = n.filter("[data-proofing_comment=1]").length,
                                        i = p.find("li");
                                    i
                                        .filter('[data-filter="1"]')
                                        .find(".count")
                                        .text("(" + e + ")"),
                                        i
                                            .filter('[data-filter="0"]')
                                            .find(".count")
                                            .text("(" + t + ")"),
                                        i
                                            .filter('[data-filter="2"]')
                                            .find(".count")
                                            .text("(" + a + ")");
                                }
                            },
                            R = function (e, a) {
                                if (M.length && a > b[2]) {
                                    if ("undefined" == typeof M.data("sticky_kit")) {
                                        var i = 0;
                                        v && (i = r.height()),
                                            f.hasClass("site-layout-bordered") && !f.hasClass("no-border-top") && (i += parseInt(t("div.theme-borders").find("div.top-border").height(), 10)),
                                            M.parent().css("position", ""),
                                            M.stick_in_parent({ offset_top: i });
                                    }
                                    l.css("min-height", M.innerHeight());
                                } else M.length && (M.trigger("sticky_kit:detach"), l.css("min-height", ""));
                            };
                        c.layout.add(R), R({}, c.layout.size), B(), l.data("initialized", 1);
                        var V,
                            N,
                            F = getParameterByName("gallery_item");
                        if (F.length)
                            for (V = n.children("a"), N = 0; N < V.length; N++)
                                if (-1 < V.eq(N).attr("href").indexOf(F)) {
                                    V.eq(N).click();
                                    break;
                                }
                        h.length && h.find("li").on("click", W), p.length && (p.find("li").on("click", W), I());
                    }
                },
                singleWork: function () {
                    if (f.hasClass("single-work")) {
                        var e = d.find("div.meta-data"),
                            a = e.length ? e.parent() : "",
                            i = function (i, l) {
                                if (e.length && l > b[2]) {
                                    var o = e.innerHeight();
                                    if ((a.css("min-height", o + 1), "undefined" == typeof e.data("sticky_kit"))) {
                                        var n = 30;
                                        v && (n += r.height()),
                                            l > b[3] && f.hasClass("site-layout-bordered") && !f.hasClass("no-border-top") && (n += parseInt(t("div.theme-borders").find("div.top-border").height(), 10)),
                                            e.stick_in_parent({ offset_top: n });
                                    }
                                } else e.length && (e.trigger("sticky_kit:detach"), a.css("min-height", ""));
                            };
                        c.elementsActions.singleWorkMasonry(), c.layout.add(i), i({}, c.layout.size);
                    }
                },
                singleAlbumMasonry: function () {
                    c.elementsActions.singleCptMasonry({
                        container: t(".single-album-gallery").find(".a13-bricks-items"),
                        thumbs_video: parseInt(u.album_bricks_thumb_video, 10),
                        filter: "ul.single-album-filter",
                        proofing_filter: "ul.single-album-proofing-filter",
                        sticky_sidebar: !0,
                        sticky_sidebar_el: d.find("div.album-content").children(),
                    });
                },
                singleWorkMasonry: function () {
                    c.elementsActions.singleCptMasonry({ container: "#only-work-items-here", thumbs_video: parseInt(u.work_bricks_thumb_video, 10), sticky_sidebar: !1, sticky_sidebar_el: "" });
                },
                makeBricks: function (e) {
                    e = "undefined" == typeof e ? f : e;
                    for (var t, a = e.find(".a13-bricks-items"), l = 0; l < a.length; l++)
                        ((t = a.eq(l)), !t.data("initialized")) &&
                            c.elementsActions.singleCptMasonry({ container: t, thumbs_video: parseInt(u.album_bricks_thumb_video, 10), filter: t.parent().prevAll("ul.single-album-filter"), id: l + 1 });
                },
                makeSlider: function (e) {
                    e = "undefined" == typeof e ? f : e;
                    for (var t = e.find(".a13-slider-stuff"), a = 0; a < t.length; a++) c.elementsActions.useSlider(t.eq(a));
                },
                makeScroller: function (e) {
                    e = "undefined" == typeof e ? f : e;
                    for (var t = e.find(".a13-scroller-stuff"), a = 0; a < t.length; a++) c.elementsActions.useScroller(t.eq(a));
                },
                useSlider: function (e) {
                    var a = e instanceof jQuery ? e : t(e),
                        l = a.find(".gallery-media-collection");
                    if (a.length && l.length) {
                        if (a.find(".a13-slider").length) return;
                        var o,
                            n,
                            s,
                            d,
                            r,
                            c,
                            h,
                            p,
                            g,
                            f = l.children(),
                            m = [],
                            u = getParameterByName("gallery_item"),
                            v = 0;
                        for (n = 0; n < f.length; n++)
                            (s = f.eq(n)),
                                (d = s.hasClass("type-video") ? "video" : "image"),
                                (r = s.find("div.item-desc").find(".description")),
                                (r = r.length ? r.html() : s.find("div.item-desc").html()),
                                (h = s.find("p.add_to_cart_inline")),
                                (c = s.children(".item__link")),
                                (g = s.data("video_type")),
                                (p = "video" === d && "html5" === g),
                                (h = h.length ? t("<div />").append(h.clone()).html() : ""),
                                m.push({
                                    type: d,
                                    image: s.data("main-image"),
                                    thumb: s.data("thumb"),
                                    title: c.text(),
                                    alt_attr: s.data("alt_attr"),
                                    desc: r + h,
                                    autoplay: s.data("autoplay"),
                                    video_type: g,
                                    video_url: p ? s.data("html") : s.data("video_player"),
                                    bg_color: s.data("bg_color"),
                                    url: !!("image" === d && s.hasClass("link")) && c.attr("href"),
                                    url_target: s.data("link_target"),
                                });
                        if (u.length)
                            for (o = f.children(".item__link"), n = 0; n < o.length; n++)
                                if (-1 < o.eq(n).attr("href").indexOf(u)) {
                                    v = n;
                                    break;
                                }
                        a.a13slider({
                            parent: a,
                            extra_class: a.data("extra_class"),
                            main_slider: "on" === a.data("main_slider") ? 1 : 0,
                            window_high: "on" === a.data("window_high"),
                            ratio: a.data("ratio"),
                            autoplay: "on" === a.data("autoplay") ? 1 : 0,
                            slide_interval: parseInt(a.data("slide_interval"), 10),
                            transition: parseInt(a.data("transition"), 10),
                            transition_speed: parseInt(a.data("transition_time"), 10),
                            ken_burns_scale: parseInt(a.data("ken_burns_scale"), 10),
                            fit_variant: parseInt(a.data("fit_variant"), 10),
                            pattern: parseInt(a.data("pattern"), 10),
                            gradient: "on" === a.data("gradient") ? 1 : 0,
                            texts: "on" === a.data("texts") ? 1 : 0,
                            socials: "on" === a.data("socials") ? 1 : 0,
                            title_color: a.data("title_color"),
                            thumb_links: "on" === a.data("thumbs") ? 1 : 0,
                            show_thumbs_on_start: "on" === a.data("thumbs_on_load") ? 1 : 0,
                            start_slide: v,
                            original_items: f,
                            slides: m,
                        });
                    }
                },
                useScroller: function (a) {
                    var l = a instanceof jQuery ? a : t(a),
                        o = l.children(".a13-scroller"),
                        n = l.children(".gallery-media-collection");
                    if (o.length && n.length) {
                        if (o.data("flickity")) return;
                        var r,
                            p,
                            g,
                            u,
                            v,
                            y,
                            k = n.children(),
                            C = [],
                            x = JSON.parse(o.attr("data-scroller")),
                            w = x.a13ShowDesc,
                            z = x.a13Socials,
                            T = getParameterByName("gallery_item"),
                            A = 0,
                            M = 0,
                            S = !1,
                            L = 0,
                            D = 0,
                            q = x.a13MainSlider,
                            O = l.find(".scroll-below"),
                            P = [],
                            j = function () {
                                if (x.a13WindowHigh) {
                                    var e = c.windowVisibleAvailableHeight(q ? 2 : 0);
                                    150 < e ? l.css({ margin: 0, paddingTop: 0, height: e }) : l.css({ margin: "", paddingTop: E(), height: "" });
                                } else l.css({ paddingTop: E() });
                            },
                            E = function () {
                                var e = x.a13Ratio.split("/");
                                return 2 === e.length && ((e[0] = parseInt(e[0], 10)), (e[1] = parseInt(e[1], 10)), c.isInteger(e[0]) && c.isInteger(e[1]) && 0 < e[0] && 0 < e[1]) ? 100 * (e[1] / e[0]) + "%" : "";
                            },
                            H = function (e, t) {
                                var a = o.find("div.img"),
                                    i = M + 1;
                                (i = i > n.length ? 0 : i), (a.eq(M).is(t) || a.eq(i).is(t)) && A++, 2 === A && o.off("bgLazyLoad.flickity", H).flickity("playPlayer");
                            },
                            B = function () {
                                if (((P = l.next()), 0 === P.length))
                                    for (var e, t = l.parents(), a = 0; a < t.length; a++)
                                        if (((e = t.eq(a)), e.is(d))) {
                                            d.nextAll().is(s) && (P = s);
                                            break;
                                        } else if (((P = e.next()), P.length)) break;
                            },
                            W = function (e, t) {
                                var a = o.height(),
                                    i = o.offset().top,
                                    l = m.height(),
                                    n = m.scrollTop();
                                if (i + a <= l + n && i >= n) {
                                    var s = new Date();
                                    e.preventDefault(),
                                        200 < s - D &&
                                            (!S &&
                                                requestAnimationFrame(function () {
                                                    (S = !1), (D = s), 0 > t ? o.flickity("next") : o.flickity("previous");
                                                }),
                                            (S = !0)),
                                        0 > t &&
                                            P.length &&
                                            (5e3 < s - L &&
                                                (O.addClass("active"),
                                                setTimeout(function () {
                                                    O.removeClass("active");
                                                }, 500)),
                                            (L = s));
                                }
                            },
                            I = function (e, t) {
                                if ("undefined" != typeof x.a13Effect) {
                                    var a = x.a13Effect;
                                    "off" !== a && (t > b[2] ? o.addClass("effect-" + a) : o.removeClass("effect-" + a));
                                }
                                t <= b[0] ? o.removeClass("cells_" + x.a13CellWidth).addClass("cells_" + x.a13CellWidthMobile) : o.removeClass("cells_" + x.a13CellWidthMobile).addClass("cells_" + x.a13CellWidth),
                                    j(),
                                    o.flickity("resize"),
                                    B();
                            };
                        for (r = 0; r < k.length; r++)
                            ((p = k.eq(r)), (g = p.hasClass("type-video") ? "video" : "image"), "video" !== g) &&
                                ((u = p.find(".item-desc").find(".description")),
                                (u = u.length ? u.html() : p.find(".item-desc").html()),
                                (y = p.find(".add_to_cart_inline")),
                                (v = p.children(".item__link")),
                                T.length && -1 < v.attr("href").indexOf(T) && ((M = r), (x.initialIndex = r), (T = "")),
                                (y = y.length ? t("<div />").append(y.clone()).html() : ""),
                                C.push({
                                    image: p.data("main-image"),
                                    title: v.text(),
                                    desc: u + y,
                                    bg_color: p.data("bg_color"),
                                    url: !!("image" === g && p.hasClass("link")) && v.attr("href"),
                                    url_target: "image" === g && 1 === parseInt(p.data("link_target"), 10),
                                }));
                        for (var R = C.length, V = 0, N = ""; V <= R - 1; )
                            (N += '<div class="carousel-cell">'),
                                (N += '<div class="img" data-flickity-bg-lazyload="' + C[V].image + '"  />'),
                                w &&
                                    ((N += '<div class="texts_group">'),
                                    C[V].title.length && ((N += '<strong class="name">'), (N += C[V].title), (N += "</strong>")),
                                    (N += C[V].desc.length ? '<div class="excerpt">' + C[V].desc + "</div>" : ""),
                                    (N += "</div>")),
                                C[V].url.length && (N += '<a href="' + C[V].url + '"' + (C[V].url_target ? ' target="_blank"' : "") + "></a>"),
                                (N += z ? '<div class="social"></div>' : ""),
                                (N += "</div>"),
                                V++;
                        if (
                            (e && (x.rightToLeft = !0),
                            o
                                .append(N)
                                .flickity(x)
                                .on("staticClick.flickity", function (e, a, i, l) {
                                    var n = o.data("flickity"),
                                        s = l === n.selectedIndex;
                                    s ? !1 === C[l].url && (t(n.selectedElement).toggleClass("enlarge"), o.flickity("reposition")) : "number" == typeof l && o.flickity("selectCell", l);
                                })
                                .on("mousewheel", W),
                            O.on("click", function () {
                                P.length && t("html,body").animate({ scrollTop: Math.round(P.offset().top) }, 500);
                            }),
                            z &&
                                o.find(".carousel-cell").each(function (e) {
                                    var a = t(this).find(".social"),
                                        i = k.eq(e).find(".dot-irecommendthis");
                                    "undefined" != typeof a2a_config && a.append(k.eq(e).find(".a2a_kit")), i.length && a.append(i);
                                }),
                            "undefined" != typeof x.autoPlay && 0 < x.autoPlay && (o.flickity("stopPlayer"), o.on("bgLazyLoad.flickity", H)),
                            "undefined" != typeof x.a13Parallax && x.a13Parallax)
                        ) {
                            var F = o.find("div.img"),
                                U = o.data("flickity"),
                                G = h.style,
                                Y = "string" == typeof G.transform ? "transform" : "WebkitTransform",
                                X = "undefined" != typeof x.wrapAround && x.wrapAround;
                            o.on("scroll.flickity", function () {
                                if (X) {
                                    var t = U.slideableWidth,
                                        a = fizzyUIUtils.modulo(U.x, t);
                                    (a -= t),
                                        U.slides.forEach(function (l, o) {
                                            var i,
                                                n = F[o],
                                                s = l.cells[0].shift;
                                            (i = 0 === s ? l.target + a : 1 === s ? t + a + l.target : -(t - l.target) + a), (n.style[Y] = e ? "translateX( " + (1 * i) / 3 + "px)" : "translateX( " + (-1 * i) / 3 + "px)");
                                        });
                                } else
                                    U.slides.forEach(function (t, a) {
                                        var i = F[a],
                                            l = (-1 * (t.target + U.x)) / 3;
                                        i.style[Y] = e ? "translateX( " + -l + "px)" : "translateX( " + l + "px)";
                                    });
                            }),
                                U.resize();
                        }
                        c.layout.add(I),
                            I({}, c.layout.size),
                            f.on("a13LogoLoaded", function () {
                                I({}, c.layout.size);
                            });
                    }
                },
                widgetSlider: function () {
                    var e = s.add("#side-menu, #basket-menu, #secondary"),
                        a = e.find("div.widget_rss");
                    a.length &&
                        a.each(function () {
                            var e,
                                a,
                                i = t(this),
                                l = i.find("li").eq(0).show().end(),
                                o = function (e) {
                                    e.stopPropagation(), e.preventDefault();
                                    var t,
                                        a = e.data.dir,
                                        i = l.filter(":visible");
                                    "next" === a ? ((t = i.next()), !t.length && (t = l.eq(0))) : ((t = i.prev()), !t.length && (t = l.eq(l.length - 1))),
                                        i.fadeOut(200, function () {
                                            t.fadeIn(200);
                                        });
                                };
                            i.hasClass("slider-ctrls") ||
                                (1 < l.length &&
                                    (i.addClass("slider-ctrls").append('<div class="widget-slider-ctrls"><span class="prev-slide a13icon-chevron-thin-left"></span><span class="next-slide a13icon-chevron-thin-right"></span>'),
                                    (e = i.find("span.prev-slide")),
                                    (a = i.find("span.next-slide")),
                                    e.on("click", null, { dir: "prev" }, o),
                                    a.on("click", null, { dir: "next" }, o)));
                        });
                },
                lightbox: function () {
                    if ("undefined" != typeof t.fn.lightGallery) {
                        var e = {

                                hash: !!parseInt(u.lg_lightbox_share, 10),
                                share: !!parseInt(u.lg_lightbox_share, 10),
                                controls: !!parseInt(u.lg_lightbox_controls, 10),
                                download: !!parseInt(u.lg_lightbox_download, 10),
                                counter: !!parseInt(u.lg_lightbox_counter, 10),
                                thumbnail: !!parseInt(u.lg_lightbox_thumbnail, 10),
                                showThumbByDefault: !!parseInt(u.lg_lightbox_show_thumbs, 10),
                                autoplay: !!parseInt(u.lg_lightbox_autoplay_open, 10),
                                autoplayControls: !!parseInt(u.lg_lightbox_autoplay, 10),
                                progressBar: !!parseInt(u.lg_lightbox_progressbar, 10),
                                fullScreen: !!parseInt(u.lg_lightbox_full_screen, 10),
                                zoom: !!parseInt(u.lg_lightbox_zoom, 10),
                                mode: u.lg_lightbox_mode,
                                pause: parseInt(u.lg_lightbox_autoplay_pause, 10),
                                speed: parseInt(u.lg_lightbox_speed, 10),
                                preload: parseInt(u.lg_lightbox_preload, 10),
                                hideBarsDelay: parseInt(u.lg_lightbox_hide_delay, 10),
                            },
                            a = t(".gallery-media-collection"),
                            i = t("div.vc_media_grid, div.vc_masonry_media_grid"),
                            o = t("div.gallery");
                        if (a.length) {
                            var n = a.children(),
                                s = t.extend({ selector: n.not(".link"), exThumbImage: "data-thumb" }, e),
                                d = function (e, a, i) {
                                    var l;
                                    (l = "*" === a ? s : t.extend({}, s, { selector: n.not(".link").filter(a) })), i.data("lightGallery").destroy(!0), i.lightGallery(l);
                                };
                            a.parent().is("div.bricks-frame") &&
                                n.filter('[data-video_type="vimeo"]').length &&
                                (function () {
                                    var e = l.createElement("script");
                                    e.src = "https://f.vimeocdn.com/js/froogaloop2.min.js";
                                    var t = l.getElementsByTagName("script")[0];
                                    t.parentNode.insertBefore(e, t);
                                })(),
                                n.each(function () {
                                    var e,
                                        a = t(this),
                                        i = a.children("a.item__link"),
                                        l = a.find("div.item-desc"),
                                        o = a.find("div.album-video");
                                    l.length &&
                                        ((e = i.text()),
                                        a.attr("data-sub-html", "#" + l.attr("id")),
                                        l.wrapInner('<div class="description"></div>'),
                                        l.prepend("<h4>" + e + "</h4>"),
                                        l.wrapInner('<div class="customHtml"></div>'),
                                        a.attr("data-pinterest-text", e),
                                        a.attr("data-tweet-text", e)),
                                        o.length ? a.attr("data-html", "#" + o.attr("id")) : a.attr("data-src", i.attr("href"));
                                }),
                                a.lightGallery(s),
                                m.on("a13_gallery_filtered", d);
                        }
                        if (
                            (i.length &&
                                m.on("grid:items:added", function (a, l) {
                                    var o = t(l),
                                        n = o.find("a.a13-lightbox-added");
                                    i.is(o) &&
                                        n.length &&
                                        (o.lightGallery(t.extend({}, e, { selector: n, exThumbImage: "href", subHtmlSelectorRelative: !0, hash: !1 })),
                                        n.on("click", function () {
                                            return !1;
                                        }));
                                }),
                            o.length)
                        ) {
                            var r = o.find(".gallery-icon").children("a");
                            o.lightGallery(t.extend({ selector: r, exThumbImage: "href", getCaptionFromTitleOrAlt: !1 }, e));
                        }
                        if (u.lightbox_single_post && (f.hasClass("single-post") || f.hasClass("single-work") || (f.hasClass("page") && !f.hasClass("elementor-page")) || f.hasClass("single-album"))) {
                            var c = f.find(".real-content"),
                                h = c.find("a").children("img").parent();
                            c.lightGallery(t.extend({ selector: h, exThumbImage: "href", getCaptionFromTitleOrAlt: !1 }, e));
                        }
                        m.on("post-load", function () {
                            var a = t("#a13-post-lightbox");
                            if (u.lightbox_single_post && a.length && a.is(":visible")) {
                                var i = a.find(".real-content"),
                                    l = i.find("a").children("img").parent();
                                i.lightGallery(t.extend({ selector: l, exThumbImage: "href", getCaptionFromTitleOrAlt: !1 }, e));
                            }
                        });
                    }
                },
                demoFlyOut: function () {
                    var e = t("#a13-flyout-box");
                    e.length &&
                        e.find("span.drag-out").on("click", function () {
                            e.toggleClass("open");
                        });
                },
            },
        }),
            (c = a.A13FRAMEWORK),
            t(l).ready(c.onReady);
    })(jQuery, window, document);