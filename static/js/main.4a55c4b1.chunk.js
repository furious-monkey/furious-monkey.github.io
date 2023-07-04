(this["webpackJsonpdeveloper-portfolio"] =
  this["webpackJsonpdeveloper-portfolio"] || []).push([
  [0],
  {
    103: function (e, t, a) {},
    109: function (e, t, a) {},
    116: function (e, t, a) {},
    117: function (e, t, a) {},
    118: function (e, t, a) {},
    119: function (e, t, a) {},
    139: function (e, t, a) {},
    143: function (e, t, a) {},
    144: function (e, t, a) {},
    145: function (e, t, a) {},
    146: function (e, t, a) {},
    147: function (e, t, a) {},
    148: function (e, t, a) {},
    149: function (e, t, a) {},
    152: function (e, t, a) {
      "use strict";
      a.r(t);
      var r = a(1),
        c = a.n(r),
        s = a(10),
        i = a.n(s),
        n = (a(103), a(27)),
        o = a(9),
        l = a(16),
        d = a.p + "static/media/blueTheme-girl.645cdd7e.svg",
        j = a.p + "static/media/blueTheme-boy.b2f186cb.svg",
        m =
          (a.p,
          a.p,
          a.p,
          a.p,
          a.p,
          a.p,
          a.p,
          a.p,
          a.p,
          a.p,
          a.p,
          a.p,
          a.p,
          a.p,
          a.p + "static/media/eduBlue.e5287488.svg"),
        p =
          (a.p,
          a.p,
          a.p,
          a.p,
          a.p,
          a.p,
          a.p,
          a.p + "static/media/expBlue.fc91e37c.svg"),
        b =
          (a.p,
          a.p,
          a.p,
          a.p,
          a.p,
          a.p,
          a.p,
          a.p + "static/media/contactsBlue.08a9dafd.svg"),
        u =
          (a.p,
          a.p,
          a.p,
          a.p,
          a.p,
          a.p,
          a.p,
          {
            theme: {
              type: "dark",
              primary: "#545fc4",
              primary400: "#6e76c7",
              primary600: "#3644c9",
              primary80: "#545fc4cc",
              primary50: "#545fc480",
              primary30: "#545fc44d",
              secondary: "#212121",
              secondary70: "#212121b3",
              secondary50: "#21212180",
              tertiary: "#eaeaea",
              tertiary80: "#eaeaeacc",
              tertiary70: "#eaeaeab3",
              tertiary50: "#eaeaea80",
              aboutimg1: j,
              aboutimg2: d,
              eduimg: m,
              expimg: p,
              contactsimg: b,
            },
          }),
        h = a(2),
        x = Object(r.createContext)();
      var g = function (e) {
          var t = Object(r.useState)(u.theme),
            a = Object(l.a)(t, 2),
            c = a[0],
            s = (a[1], Object(r.useState)(!1)),
            i = Object(l.a)(s, 2),
            n = i[0],
            o = i[1],
            d = {
              theme: c,
              drawerOpen: n,
              setHandleDrawer: function () {
                o(!n);
              },
            };
          return Object(h.jsx)(x.Provider, { value: d, children: e.children });
        },
        y = a(51),
        v = a(21),
        f = a(37),
        O = a(23),
        k = a.n(O),
        N = a(62),
        w = a(56),
        C = a(88),
        S = a(28),
        I = a(178),
        F = a(185),
        D = a(55),
        z = a.n(D),
        T = (a(109), a.p + "static/media/resume.bc382d73.pdf"),
        L = {
          name: "Daniel Hahn",
          title: "Lead Front End Developer",
          desciption:
            "Lead front end developer with a passion for developing scalable web applications and working across the full stack. I am looking to join forces to continue to grow my skill set while contributing to the positive outcome of making people <richer, smarter, and happier>.",
          image: a.p + "static/media/1.288e043f.jpg",
          resumePdf: T,
        };
      var B = function () {
        var e,
          t = Object(r.useContext)(x),
          a = t.theme,
          c = t.setHandleDrawer,
          s = Object(r.useState)(!1),
          i = Object(l.a)(s, 2),
          n = i[0],
          o = i[1],
          d = function () {
            o(!1), c();
          },
          j = Object(I.a)(function (e) {
            var t;
            return {
              navMenu:
                ((t = {
                  fontSize: "2.5rem",
                  color: a.tertiary,
                  cursor: "pointer",
                  transform: "translateY(-10px)",
                  transition: "color 0.3s",
                  "&:hover": { color: a.primary },
                }),
                Object(v.a)(t, e.breakpoints.down("sm"), {
                  fontSize: "2.5rem",
                }),
                Object(v.a)(t, e.breakpoints.down("xs"), { fontSize: "2rem" }),
                t),
              MuiDrawer: Object(v.a)(
                {
                  padding: "0em 1.8em",
                  width: "14em",
                  fontFamily: " var(--primaryFont)",
                  fontStyle: " normal",
                  fontWeight: " normal",
                  fontSize: " 24px",
                  background: a.secondary,
                  overflow: "hidden",
                  borderTopRightRadius: "40px",
                  borderBottomRightRadius: "40px",
                },
                e.breakpoints.down("sm"),
                { width: "12em" }
              ),
              closebtnIcon: Object(v.a)(
                {
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  color: a.primary,
                  position: "absolute",
                  right: 40,
                  top: 40,
                  transition: "color 0.2s",
                  "&:hover": { color: a.tertiary },
                },
                e.breakpoints.down("sm"),
                { right: 20, top: 20 }
              ),
              drawerItem: Object(v.a)(
                {
                  margin: "2rem auto",
                  borderRadius: "78.8418px",
                  background: a.secondary,
                  color: a.primary,
                  width: "85%",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  padding: "0 30px",
                  boxSizing: "border-box",
                  border: "2px solid",
                  borderColor: a.primary,
                  transition: "background-color 0.2s, color 0.2s",
                  "&:hover": { background: a.primary, color: a.secondary },
                },
                e.breakpoints.down("sm"),
                { width: "100%", padding: "0 25px", height: "55px" }
              ),
              drawerLinks: Object(v.a)(
                {
                  fontFamily: "var(--primaryFont)",
                  width: "50%",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                },
                e.breakpoints.down("sm"),
                { fontSize: "1.125rem" }
              ),
              drawerIcon: Object(v.a)(
                { fontSize: "1.6rem" },
                e.breakpoints.down("sm"),
                { fontSize: "1.385rem" }
              ),
            };
          })();
        return Object(h.jsxs)("div", {
          className: "navbar",
          children: [
            Object(h.jsxs)("div", {
              className: "navbar--container",
              children: [
                Object(h.jsx)("h1", {
                  style: { color: a.secondary },
                  children: ((e = L.name), e.length > 12 ? e.split(" ")[0] : e),
                }),
                Object(h.jsx)(N.b, {
                  className: j.navMenu,
                  onClick: function () {
                    o(!0), c();
                  },
                  "aria-label": "Menu",
                }),
              ],
            }),
            Object(h.jsxs)(F.a, {
              variant: "temporary",
              onClose: function (e, t) {
                ("backdropClick" !== t || "escapeKeyDown" !== t) && d();
              },
              anchor: "left",
              open: n,
              classes: { paper: j.MuiDrawer },
              className: "drawer",
              disableScrollLock: !0,
              children: [
                Object(h.jsx)("div", {
                  className: "div-closebtn",
                  children: Object(h.jsx)(z.a, {
                    onClick: d,
                    onKeyDown: function (e) {
                      (" " !== e.key && "Enter" !== e.key) ||
                        (e.preventDefault(), d());
                    },
                    className: j.closebtnIcon,
                    role: "button",
                    tabIndex: "0",
                    "aria-label": "Close",
                  }),
                }),
                Object(h.jsx)("br", {}),
                Object(h.jsx)("div", {
                  onClick: d,
                  children: Object(h.jsxs)("div", {
                    className: "navLink--container",
                    children: [
                      Object(h.jsx)(k.a, {
                        left: !0,
                        children: Object(h.jsx)(f.a, {
                          to: "/",
                          smooth: !0,
                          spy: "true",
                          duration: 2e3,
                          children: Object(h.jsxs)("div", {
                            className: j.drawerItem,
                            children: [
                              Object(h.jsx)(N.a, { className: j.drawerIcon }),
                              Object(h.jsx)("span", {
                                className: j.drawerLinks,
                                children: "Home",
                              }),
                            ],
                          }),
                        }),
                      }),
                      Object(h.jsx)(k.a, {
                        left: !0,
                        children: Object(h.jsx)(f.a, {
                          to: "/#about",
                          smooth: !0,
                          spy: "true",
                          duration: 2e3,
                          children: Object(h.jsxs)("div", {
                            className: j.drawerItem,
                            children: [
                              Object(h.jsx)(S.e, { className: j.drawerIcon }),
                              Object(h.jsx)("span", {
                                className: j.drawerLinks,
                                children: "About",
                              }),
                            ],
                          }),
                        }),
                      }),
                      Object(h.jsx)(k.a, {
                        left: !0,
                        children: Object(h.jsx)(f.a, {
                          to: "/#services",
                          smooth: !0,
                          spy: "true",
                          duration: 2e3,
                          children: Object(h.jsxs)("div", {
                            className: j.drawerItem,
                            children: [
                              Object(h.jsx)(w.b, { className: j.drawerIcon }),
                              Object(h.jsx)("span", {
                                className: j.drawerLinks,
                                children: "Services",
                              }),
                            ],
                          }),
                        }),
                      }),
                      Object(h.jsx)(k.a, {
                        left: !0,
                        children: Object(h.jsx)(f.a, {
                          to: "/#contacts",
                          smooth: !0,
                          spy: "true",
                          duration: 2e3,
                          children: Object(h.jsxs)("div", {
                            className: j.drawerItem,
                            children: [
                              Object(h.jsx)(C.a, { className: j.drawerIcon }),
                              Object(h.jsx)("span", {
                                className: j.drawerLinks,
                                children: "Contact",
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
      a(116);
      var Y = function () {
          var e,
            t = Object(r.useContext)(x).theme;
          return Object(h.jsx)("div", {
            className: "footer",
            style: { backgroundColor: t.secondary },
            children: Object(h.jsxs)("p", {
              style: { color: t.tertiary },
              children: [
                "Made with",
                Object(h.jsx)("span", {
                  style: { color: t.primary, margin: "0 0.5rem -1rem 0.5rem" },
                  children: "\u2764",
                }),
                "by ",
                ((e = L.name), e.length > 10 ? e.split(" ")[0] : e),
              ],
            }),
          });
        },
        R = a(181),
        W = (a(117), "https://github.com/furious-monkey/");
      var P = function () {
          var e = Object(r.useContext)(x),
            t = e.theme,
            a = e.drawerOpen,
            c = Object(I.a)(function (e) {
              return {
                resumeBtn: Object(v.a)(
                  {
                    color: t.primary,
                    borderRadius: "30px",
                    textTransform: "inherit",
                    textDecoration: "none",
                    width: "150px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    height: "50px",
                    fontFamily: "var(--primaryFont)",
                    border: "3px solid ".concat(t.primary),
                    transition: "100ms ease-out",
                    "&:hover": {
                      backgroundColor: t.tertiary,
                      color: t.secondary,
                      border: "3px solid ".concat(t.tertiary),
                    },
                  },
                  e.breakpoints.down("sm"),
                  { width: "180px" }
                ),
                contactBtn: Object(v.a)(
                  {
                    backgroundColor: t.primary,
                    color: t.secondary,
                    borderRadius: "30px",
                    textTransform: "inherit",
                    textDecoration: "none",
                    width: "150px",
                    height: "50px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    fontFamily: "var(--primaryFont)",
                    border: "3px solid ".concat(t.primary),
                    transition: "100ms ease-out",
                    "&:hover": {
                      backgroundColor: t.secondary,
                      color: t.tertiary,
                      border: "3px solid ".concat(t.tertiary),
                    },
                  },
                  e.breakpoints.down("sm"),
                  { display: "none" }
                ),
              };
            })();
          return Object(h.jsx)("div", {
            className: "landing",
            children: Object(h.jsxs)("div", {
              className: "landing--container",
              children: [
                Object(h.jsx)("div", {
                  className: "landing--container-left",
                  style: { backgroundColor: t.primary },
                  children: Object(h.jsx)("div", {
                    className: "lcl--content",
                    children:
                      W &&
                      Object(h.jsx)("a", {
                        href: W,
                        target: "_blank",
                        rel: "noreferrer",
                        children: Object(h.jsx)(S.c, {
                          className: "landing--social",
                          style: { color: t.secondary },
                          "aria-label": "GitHub",
                        }),
                      }),
                  }),
                }),
                Object(h.jsx)("img", {
                  src: L.image,
                  alt: "",
                  className: "landing--img",
                  style: {
                    opacity: "".concat(a ? "0" : "1"),
                    borderColor: t.secondary,
                  },
                }),
                Object(h.jsx)("div", {
                  className: "landing--container-right",
                  style: { backgroundColor: t.secondary },
                  children: Object(h.jsxs)("div", {
                    className: "lcr--content",
                    style: { color: t.tertiary },
                    children: [
                      Object(h.jsx)("h6", { children: L.title }),
                      Object(h.jsx)("h1", { children: L.name }),
                      Object(h.jsx)("p", { children: L.desciption }),
                      Object(h.jsx)("div", {
                        className: "lcr-buttonContainer",
                        children: Object(h.jsx)(f.a, {
                          to: "/#contacts",
                          smooth: !0,
                          spy: "true",
                          duration: 2e3,
                          children: Object(h.jsx)(R.a, {
                            className: c.contactBtn,
                            children: "Contact",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        A = (a(118), "Who I am"),
        E =
          "My name's Daniel Hahn. I'm a senior front end engineer with passion.",
        M =
          "During the day I work as a lead engineer and in the evening I work on freelance projects and utilize the time to build my own products. I spent my leisure hours doing exercise. Right now I'm also trying a hand at machine learning and AI. I love to learn and explore new arenas.",
        H = 1;
      var q = function () {
          var e = Object(r.useContext)(x).theme;
          return Object(h.jsxs)("div", {
            className: "about",
            id: "about",
            style: { backgroundColor: e.secondary },
            children: [
              Object(h.jsxs)("div", {
                className: "line-styling",
                children: [
                  Object(h.jsx)("div", {
                    className: "style-circle",
                    style: { backgroundColor: e.primary },
                  }),
                  Object(h.jsx)("div", {
                    className: "style-circle",
                    style: { backgroundColor: e.primary },
                  }),
                  Object(h.jsx)("div", {
                    className: "style-line",
                    style: { backgroundColor: e.primary },
                  }),
                ],
              }),
              Object(h.jsxs)("div", {
                className: "about-body",
                children: [
                  Object(h.jsxs)("div", {
                    className: "about-description",
                    children: [
                      Object(h.jsx)("h2", {
                        style: { color: e.primary },
                        children: A,
                      }),
                      Object(h.jsxs)("p", {
                        style: { color: e.tertiary80 },
                        children: [
                          E,
                          Object(h.jsx)("br", {}),
                          Object(h.jsx)("br", {}),
                          M,
                        ],
                      }),
                    ],
                  }),
                  Object(h.jsx)("div", {
                    className: "about-img",
                    children: Object(h.jsx)("img", {
                      src: 1 === H ? e.aboutimg1 : e.aboutimg2,
                      alt: "",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        G = a(89),
        J = a.n(G),
        K =
          (a(119),
          [
            "Angular",
            "React",
            "Vue",
            "Typescript",
            "JS",
            "Java",
            "Node JS",
            "Go",
            "Ruby",
            "Django",
            "C#",
            "Swift",
            "Kotlin",
            "Flutter",
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Docker",
            "AWS",
          ]),
        V = a.p + "static/media/gcp.89993b8e.svg",
        _ = a.p + "static/media/html.75bdf0b0.svg",
        Q = a.p + "static/media/photoshop.6576d308.svg",
        U = a.p + "static/media/illustrator.956c8630.svg",
        X = a.p + "static/media/docker.26ada6e4.svg",
        Z = a.p + "static/media/adobe-xd.fa7a22d2.svg",
        $ = a.p + "static/media/after-effects.16f048ca.svg",
        ee = a.p + "static/media/css.afb434f6.svg",
        te = a.p + "static/media/angular.8f069a35.svg",
        ae = a.p + "static/media/javascript.f84ec710.svg",
        re = a.p + "static/media/nextJS.330fb71c.svg",
        ce = a.p + "static/media/nuxtJS.6dcfb7a9.svg",
        se = a.p + "static/media/react.c3a0b34a.svg",
        ie = a.p + "static/media/svelte.47c35757.svg",
        ne = a.p + "static/media/typescript.f66836b8.svg",
        oe = a.p + "static/media/vue.5f5d1689.svg",
        le = a.p + "static/media/bootstrap.3b3ab2cf.svg",
        de = a.p + "static/media/bulma.12ecb794.svg",
        je = a.p + "static/media/capacitorjs.8fb886a5.svg",
        me = a.p + "static/media/coffeescript.51d09441.svg",
        pe = a.p + "static/media/memsql.6bfaf0ce.svg",
        be = a.p + "static/media/mongoDB.4428e2ce.svg",
        ue = a.p + "static/media/mysql.61d16d64.svg",
        he = a.p + "static/media/postgresql.f0f3d0b9.svg",
        xe = a.p + "static/media/tailwind.01daca9b.svg",
        ge = a.p + "static/media/vitejs.11f3d899.svg",
        ye = a.p + "static/media/vuetifyjs.3848fcff.svg",
        ve = a.p + "static/media/c.e580cb17.svg",
        fe = a.p + "static/media/cplusplus.3b0d7340.svg",
        Oe = a.p + "static/media/csharp.c7c6fad1.svg",
        ke = a.p + "static/media/dart.8b2ac340.svg",
        Ne = a.p + "static/media/go.6608613a.svg",
        we = a.p + "static/media/java.e9ccff93.svg",
        Ce = a.p + "static/media/julia.2f794baf.svg",
        Se = a.p + "static/media/kotlin.bf3c189f.svg",
        Ie = a.p + "static/media/matlab.98ad4951.svg",
        Fe = a.p + "static/media/php.808faf65.svg",
        De = a.p + "static/media/python.09347921.svg",
        ze = a.p + "static/media/ruby.775cc228.svg",
        Te = a.p + "static/media/swift.8a92ca47.svg",
        Le = a.p + "static/media/adobeaudition.dd56aeda.svg",
        Be = a.p + "static/media/aws.ef6fb669.svg",
        Ye = a.p + "static/media/deno.04aa2c4d.svg",
        Re = a.p + "static/media/django.497d37be.svg",
        We = a.p + "static/media/firebase.1aa395c8.svg",
        Pe = a.p + "static/media/gimp.e90f970a.svg",
        Ae = a.p + "static/media/git.2d7df16e.svg",
        Ee = a.p + "static/media/graphql.9e11f395.svg",
        Me = a.p + "static/media/lightroom.424c8312.svg",
        He = a.p + "static/media/materialui.d7f5c38f.svg",
        qe = a.p + "static/media/nginx.63e0789f.svg",
        Ge = a.p + "static/media/numpy.91d932ca.svg",
        Je = a.p + "static/media/opencv.36d7c202.svg",
        Ke = a.p + "static/media/premierepro.9211e4a7.svg",
        Ve = a.p + "static/media/pytorch.e6c50599.svg",
        _e = a.p + "static/media/selenium.f0d42a91.svg",
        Qe = a.p + "static/media/strapi.74cc583e.svg",
        Ue = a.p + "static/media/tensorflow.04d29a7b.svg",
        Xe = a.p + "static/media/webix.dc98a7d7.svg",
        Ze = a.p + "static/media/wordpress.f39aa81e.svg",
        $e = a.p + "static/media/azure.4993a0d8.svg",
        et = a.p + "static/media/blender.5c8d639d.svg",
        tt = a.p + "static/media/fastify.6b82b37a.svg",
        at = a.p + "static/media/figma.cc8e1116.svg",
        rt = a.p + "static/media/flutter.a87a000d.svg",
        ct = a.p + "static/media/haxe.ff91c1f3.svg",
        st = a.p + "static/media/ionic.711c6d3d.svg",
        it = a.p + "static/media/markdown.6fca45ee.svg",
        nt = a.p + "static/media/microsoftoffice.75a83b98.svg",
        ot = a.p + "static/media/picsart.e849dc91.svg",
        lt = a.p + "static/media/sketch.fa6d7eb5.svg",
        dt = a.p + "static/media/unity.5103c8d1.svg",
        jt = a.p + "static/media/wolframalpha.e6299b2d.svg",
        mt = a.p + "static/media/canva.f1bf26da.svg",
        pt = function (e) {
          switch (e.toLowerCase()) {
            case "gcp":
              return V;
            case "html":
              return _;
            case "photoshop":
              return Q;
            case "docker":
              return X;
            case "illustrator":
              return U;
            case "adobe xd":
              return Z;
            case "after effects":
              return $;
            case "css":
              return ee;
            case "angular":
              return te;
            case "javascript":
              return ae;
            case "next js":
              return re;
            case "nuxt js":
              return ce;
            case "react":
              return se;
            case "svelte":
              return ie;
            case "typescript":
              return ne;
            case "vue":
              return oe;
            case "bootstrap":
              return le;
            case "bulma":
              return de;
            case "capacitorjs":
              return je;
            case "coffeescript":
              return me;
            case "memsql":
              return pe;
            case "mongodb":
              return be;
            case "mysql":
              return ue;
            case "postgresql":
              return he;
            case "tailwind":
              return xe;
            case "vitejs":
              return ge;
            case "vuetifyjs":
              return ye;
            case "c":
              return ve;
            case "c++":
              return fe;
            case "c#":
              return Oe;
            case "dart":
              return ke;
            case "go":
              return Ne;
            case "java":
              return we;
            case "kotlin":
              return Se;
            case "julia":
              return Ce;
            case "matlab":
              return Ie;
            case "php":
              return Fe;
            case "python":
              return De;
            case "ruby":
              return ze;
            case "swift":
              return Te;
            case "adobe audition":
              return Le;
            case "aws":
              return Be;
            case "deno":
              return Ye;
            case "django":
              return Re;
            case "firebase":
              return We;
            case "gimp":
              return Pe;
            case "git":
              return Ae;
            case "graphql":
              return Ee;
            case "lightroom":
              return Me;
            case "materialui":
              return He;
            case "nginx":
              return qe;
            case "numpy":
              return Ge;
            case "opencv":
              return Je;
            case "premiere pro":
              return Ke;
            case "pytorch":
              return Ve;
            case "selenium":
              return _e;
            case "strapi":
              return Qe;
            case "tensorflow":
              return Ue;
            case "webix":
              return Xe;
            case "wordpress":
              return Ze;
            case "azure":
              return $e;
            case "blender":
              return et;
            case "fastify":
              return tt;
            case "figma":
              return at;
            case "flutter":
              return rt;
            case "haxe":
              return ct;
            case "ionic":
              return st;
            case "markdown":
              return it;
            case "microsoft office":
              return nt;
            case "picsart":
              return ot;
            case "sketch":
              return lt;
            case "unity":
              return dt;
            case "wolframalpha":
              return jt;
            case "canva":
              return mt;
          }
        };
      var bt = function () {
          var e = Object(r.useContext)(x).theme,
            t = {
              backgroundColor: e.secondary,
              boxShadow: "0px 0px 30px ".concat(e.primary30),
            };
          return Object(h.jsxs)("div", {
            className: "skills",
            style: { backgroundColor: e.secondary },
            children: [
              Object(h.jsx)("div", {
                className: "skillsHeader",
                children: Object(h.jsx)("h2", {
                  style: { color: e.primary },
                  children: "Skills",
                }),
              }),
              Object(h.jsx)("div", {
                className: "skillsContainer",
                children: Object(h.jsx)("div", {
                  className: "skill--scroll",
                  children: Object(h.jsx)(J.a, {
                    gradient: !1,
                    speed: 80,
                    pauseOnHover: !0,
                    pauseOnClick: !0,
                    delay: 0,
                    play: !0,
                    direction: "left",
                    children: K.map(function (a, r) {
                      return Object(h.jsxs)(
                        "div",
                        {
                          className: "skill--box",
                          style: t,
                          children: [
                            Object(h.jsx)("img", { src: pt(a), alt: a }),
                            Object(h.jsx)("h3", {
                              style: { color: e.tertiary },
                              children: a,
                            }),
                          ],
                        },
                        r
                      );
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        ut = (a(71), a.p + "static/media/eduImgWhite.433f9250.svg"),
        ht = a.p + "static/media/eduImgBlack.8ee2e691.svg";
      var xt = function (e) {
          var t = e.id,
            a = e.institution,
            c = e.course,
            s = e.startYear,
            i = e.endYear,
            n = Object(r.useContext)(x).theme,
            o = Object(I.a)(function (e) {
              return {
                educationCard: {
                  backgroundColor: n.primary30,
                  "&:hover": { backgroundColor: n.primary50 },
                },
              };
            })();
          return Object(h.jsx)(k.a, {
            bottom: !0,
            children: Object(h.jsxs)(
              "div",
              {
                className: "education-card ".concat(o.educationCard),
                children: [
                  Object(h.jsx)("div", {
                    className: "educard-img",
                    style: { backgroundColor: n.primary },
                    children: Object(h.jsx)("img", {
                      src: "light" === n.type ? ht : ut,
                      alt: "",
                    }),
                  }),
                  Object(h.jsxs)("div", {
                    className: "education-details",
                    children: [
                      Object(h.jsxs)("h6", {
                        style: { color: n.primary },
                        children: [s, "-", i],
                      }),
                      Object(h.jsx)("h4", {
                        style: { color: n.tertiary },
                        children: c,
                      }),
                      Object(h.jsx)("h5", {
                        style: { color: n.tertiary80 },
                        children: a,
                      }),
                    ],
                  }),
                ],
              },
              t
            ),
          });
        },
        gt = [
          {
            id: 1,
            institution: "Tokyo Institute of Technology",
            course: "Computer Science",
            startYear: "2010.9",
            endYear: "2014.9",
          },
        ];
      var yt = function () {
          var e = Object(r.useContext)(x).theme;
          return Object(h.jsx)("div", {
            className: "education",
            id: "resume",
            style: { backgroundColor: e.secondary },
            children: Object(h.jsxs)("div", {
              className: "education-body",
              children: [
                Object(h.jsxs)("div", {
                  className: "education-description",
                  children: [
                    Object(h.jsx)("h1", {
                      style: { color: e.primary },
                      children: "Education",
                    }),
                    gt.map(function (e) {
                      return Object(h.jsx)(
                        xt,
                        {
                          id: e.id,
                          institution: e.institution,
                          course: e.course,
                          startYear: e.startYear,
                          endYear: e.endYear,
                        },
                        e.id
                      );
                    }),
                  ],
                }),
                Object(h.jsx)("div", {
                  className: "education-image",
                  children: Object(h.jsx)("img", { src: e.eduimg, alt: "" }),
                }),
              ],
            }),
          });
        },
        vt =
          (a(72),
          [
            {
              id: 1,
              company: "Appier",
              jobtitle: "Junior Developer",
              startYear: "2014.11",
              endYear: "2015.12",
            },
            {
              id: 2,
              company: "Intersog",
              jobtitle: "Front End Engineer",
              startYear: "2016.2",
              endYear: "2018.2",
            },
            {
              id: 3,
              company: "Mbicycle",
              jobtitle: "Lead Front End Developer",
              startYear: "2018.3",
              endYear: "2022.11",
            },
          ]),
        ft = a.p + "static/media/expImgWhite.b9923db4.svg",
        Ot = a.p + "static/media/expImgBlack.01d2dd8e.svg";
      var kt = function (e) {
        var t = e.id,
          a = e.company,
          c = e.jobtitle,
          s = e.startYear,
          i = e.endYear,
          n = Object(r.useContext)(x).theme,
          o = Object(I.a)(function (e) {
            return {
              experienceCard: {
                backgroundColor: n.primary30,
                "&:hover": { backgroundColor: n.primary50 },
              },
            };
          })();
        return Object(h.jsx)(k.a, {
          bottom: !0,
          children: Object(h.jsxs)(
            "div",
            {
              className: "experience-card ".concat(o.experienceCard),
              children: [
                Object(h.jsx)("div", {
                  className: "expcard-img",
                  style: { backgroundColor: n.primary },
                  children: Object(h.jsx)("img", {
                    src: "light" === n.type ? Ot : ft,
                    alt: "",
                  }),
                }),
                Object(h.jsxs)("div", {
                  className: "experience-details",
                  children: [
                    Object(h.jsxs)("h6", {
                      style: { color: n.primary },
                      children: [s, "-", i],
                    }),
                    Object(h.jsx)("h4", {
                      style: { color: n.tertiary },
                      children: c,
                    }),
                    Object(h.jsx)("h5", {
                      style: { color: n.tertiary80 },
                      children: a,
                    }),
                  ],
                }),
              ],
            },
            t
          ),
        });
      };
      var Nt = function () {
          var e = Object(r.useContext)(x).theme;
          return Object(h.jsx)("div", {
            className: "experience",
            id: "experience",
            style: { backgroundColor: e.secondary },
            children: Object(h.jsxs)("div", {
              className: "experience-body",
              children: [
                Object(h.jsx)("div", {
                  className: "experience-image",
                  children: Object(h.jsx)("img", { src: e.expimg, alt: "" }),
                }),
                Object(h.jsxs)("div", {
                  className: "experience-description",
                  children: [
                    Object(h.jsx)("h1", {
                      style: { color: e.primary },
                      children: "Experience",
                    }),
                    vt.map(function (e) {
                      return Object(h.jsx)(
                        kt,
                        {
                          id: e.id,
                          jobtitle: e.jobtitle,
                          company: e.company,
                          startYear: e.startYear,
                          endYear: e.endYear,
                        },
                        e.id
                      );
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        wt = a(186),
        Ct = a(182),
        St = a(183),
        It = a(90),
        Ft = a.n(It),
        Dt = a(91),
        zt = a.n(Dt),
        Tt = a(36),
        Lt = a(65),
        Bt = a(38),
        Yt = "daniel.j.hahn1105@gmail.com",
        Rt = "+1 615 745 9069",
        Wt = "Worldwide",
        Pt = "";
      a(139);
      var At = function () {
          var e = Object(r.useState)(!1),
            t = Object(l.a)(e, 2),
            a = t[0],
            s = t[1],
            i = Object(r.useState)(""),
            n = Object(l.a)(i, 2),
            o = n[0],
            d = n[1],
            j = Object(r.useState)(""),
            m = Object(l.a)(j, 2),
            p = m[0],
            b = m[1],
            u = Object(r.useState)(""),
            g = Object(l.a)(u, 2),
            y = g[0],
            v = g[1],
            f = Object(r.useState)(!1),
            O = Object(l.a)(f, 2),
            k = O[0],
            N = O[1],
            w = Object(r.useState)(""),
            C = Object(l.a)(w, 2),
            F = C[0],
            D = C[1],
            T = Object(r.useContext)(x).theme,
            L = function (e, t) {
              "clickaway" !== t && s(!1);
            },
            B = Object(I.a)(function (e) {
              return {
                input: {
                  border: "4px solid ".concat(T.primary80),
                  backgroundColor: "".concat(T.secondary),
                  color: "".concat(T.tertiary),
                  fontFamily: "var(--primaryFont)",
                  fontWeight: 500,
                  transition: "border 0.2s ease-in-out",
                  "&:focus": { border: "4px solid ".concat(T.primary600) },
                },
                message: {
                  border: "4px solid ".concat(T.primary80),
                  backgroundColor: "".concat(T.secondary),
                  color: "".concat(T.tertiary),
                  fontFamily: "var(--primaryFont)",
                  fontWeight: 500,
                  transition: "border 0.2s ease-in-out",
                  "&:focus": { border: "4px solid ".concat(T.primary600) },
                },
                label: {
                  backgroundColor: "".concat(T.secondary),
                  color: "".concat(T.primary),
                  fontFamily: "var(--primaryFont)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  padding: "0 5px",
                  transform: "translate(25px,50%)",
                  display: "inline-flex",
                },
                socialIcon: {
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "21px",
                  backgroundColor: T.primary,
                  color: T.secondary,
                  transition: "250ms ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                    color: T.secondary,
                    backgroundColor: T.tertiary,
                  },
                },
                detailsIcon: {
                  backgroundColor: T.primary,
                  color: T.secondary,
                  borderRadius: "50%",
                  width: "45px",
                  height: "45px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "23px",
                  transition: "250ms ease-in-out",
                  flexShrink: 0,
                  "&:hover": {
                    transform: "scale(1.1)",
                    color: T.secondary,
                    backgroundColor: T.tertiary,
                  },
                },
                submitBtn: {
                  backgroundColor: T.primary,
                  color: T.secondary,
                  transition: "250ms ease-in-out",
                  "&:hover": {
                    transform: "scale(1.08)",
                    color: T.secondary,
                    backgroundColor: T.tertiary,
                  },
                },
              };
            })();
          return Object(h.jsxs)("div", {
            className: "contacts",
            id: "contacts",
            style: { backgroundColor: T.secondary },
            children: [
              Object(h.jsxs)("div", {
                className: "contacts--container",
                children: [
                  Object(h.jsx)("h1", {
                    style: { color: T.primary },
                    children: "Contacts",
                  }),
                  Object(h.jsxs)("div", {
                    className: "contacts-body",
                    children: [
                      Object(h.jsxs)("div", {
                        className: "contacts-form",
                        children: [
                          Object(h.jsxs)("form", {
                            onSubmit: function (e) {
                              if ((e.preventDefault(), o && p && y))
                                if (zt()(p)) {
                                  var t = { name: o, email: p, message: y };
                                  Ft.a.post(Pt, t).then(function (e) {
                                    console.log("success"),
                                      N(!0),
                                      D(""),
                                      d(""),
                                      b(""),
                                      v(""),
                                      s(!1);
                                  });
                                } else D("Invalid email"), s(!0);
                              else D("Enter all the fields"), s(!0);
                            },
                            children: [
                              Object(h.jsxs)("div", {
                                className: "input-container",
                                children: [
                                  Object(h.jsx)("label", {
                                    htmlFor: "Name",
                                    className: B.label,
                                    children: "Name",
                                  }),
                                  Object(h.jsx)("input", {
                                    placeholder: "Daniel Hahn",
                                    value: o,
                                    onChange: function (e) {
                                      return d(e.target.value);
                                    },
                                    type: "text",
                                    name: "Name",
                                    className: "form-input ".concat(B.input),
                                  }),
                                ],
                              }),
                              Object(h.jsxs)("div", {
                                className: "input-container",
                                children: [
                                  Object(h.jsx)("label", {
                                    htmlFor: "Email",
                                    className: B.label,
                                    children: "Email",
                                  }),
                                  Object(h.jsx)("input", {
                                    placeholder: "xxx@yyy.com",
                                    value: p,
                                    onChange: function (e) {
                                      return b(e.target.value);
                                    },
                                    type: "email",
                                    name: "Email",
                                    className: "form-input ".concat(B.input),
                                  }),
                                ],
                              }),
                              Object(h.jsxs)("div", {
                                className: "input-container",
                                children: [
                                  Object(h.jsx)("label", {
                                    htmlFor: "Message",
                                    className: B.label,
                                    children: "Message",
                                  }),
                                  Object(h.jsx)("textarea", {
                                    placeholder: "Type your message....",
                                    value: y,
                                    onChange: function (e) {
                                      return v(e.target.value);
                                    },
                                    type: "text",
                                    name: "Message",
                                    className: "form-message ".concat(
                                      B.message
                                    ),
                                  }),
                                ],
                              }),
                              Object(h.jsx)("div", {
                                className: "submit-btn",
                                children: Object(h.jsxs)("button", {
                                  type: "submit",
                                  className: B.submitBtn,
                                  children: [
                                    Object(h.jsx)("p", {
                                      children: k ? "Sent" : "Send",
                                    }),
                                    Object(h.jsxs)("div", {
                                      className: "submit-icon",
                                      children: [
                                        Object(h.jsx)(Tt.d, {
                                          className: "send-icon",
                                          style: {
                                            animation: k
                                              ? "fly 0.8s linear both"
                                              : "initial",
                                            position: k
                                              ? "absolute"
                                              : "initial",
                                          },
                                        }),
                                        Object(h.jsx)(Tt.a, {
                                          className: "success-icon",
                                          style: {
                                            display: k ? "inline-flex" : "none",
                                            opacity: k ? "1" : "0",
                                          },
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          Object(h.jsx)(wt.a, {
                            anchorOrigin: {
                              vertical: "top",
                              horizontal: "center",
                            },
                            open: a,
                            autoHideDuration: 4e3,
                            onClose: L,
                            children: Object(h.jsx)(Ct.a, {
                              action: Object(h.jsx)(c.a.Fragment, {
                                children: Object(h.jsx)(St.a, {
                                  size: "small",
                                  "aria-label": "close",
                                  color: "inherit",
                                  onClick: L,
                                  children: Object(h.jsx)(z.a, {
                                    fontSize: "small",
                                  }),
                                }),
                              }),
                              style: {
                                backgroundColor: T.primary,
                                color: T.secondary,
                                fontFamily: "var(--primaryFont)",
                              },
                              message: F,
                            }),
                          }),
                        ],
                      }),
                      Object(h.jsxs)("div", {
                        className: "contacts-details",
                        children: [
                          Object(h.jsxs)("a", {
                            href: "mailto:".concat(Yt),
                            className: "personal-details",
                            children: [
                              Object(h.jsx)("div", {
                                className: B.detailsIcon,
                                children: Object(h.jsx)(Lt.a, {}),
                              }),
                              Object(h.jsx)("p", {
                                style: { color: T.tertiary },
                                children: Yt,
                              }),
                            ],
                          }),
                          Object(h.jsxs)("a", {
                            href: "tel:".concat(Rt),
                            className: "personal-details",
                            children: [
                              Object(h.jsx)("div", {
                                className: B.detailsIcon,
                                children: Object(h.jsx)(Lt.b, {}),
                              }),
                              Object(h.jsx)("p", {
                                style: { color: T.tertiary },
                                children: Rt,
                              }),
                            ],
                          }),
                          Object(h.jsxs)("div", {
                            className: "personal-details",
                            children: [
                              Object(h.jsx)("div", {
                                className: B.detailsIcon,
                                children: Object(h.jsx)(Bt.c, {}),
                              }),
                              Object(h.jsx)("p", {
                                style: { color: T.tertiary },
                                children: Wt,
                              }),
                            ],
                          }),
                          Object(h.jsx)("div", {
                            className: "socialmedia-icons",
                            children:
                              W &&
                              Object(h.jsx)("a", {
                                href: W,
                                target: "_blank",
                                rel: "noreferrer",
                                className: B.socialIcon,
                                children: Object(h.jsx)(S.c, {
                                  "aria-label": "GitHub",
                                }),
                              }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(h.jsx)("img", {
                src: T.contactsimg,
                alt: "contacts",
                className: "contacts--img",
              }),
            ],
          });
        },
        Et = [
          {
            id: 1,
            projectName: "Kitchen Configurator",
            projectDesc:
              "This project aims to build a WebGL service that users can design their own kitchen.",
            tags: ["React.js", "three.js", "Node.js"],
            demo: "https://kitchen.planner.ikea.com/",
            image: a.p + "static/media/kitchen planner2.1f39006f.jpg",
          },
          {
            id: 2,
            projectName: "Kitchen Visualization",
            projectDesc:
              "This project is a continued version of Kitchen Configurator and provides users to design their kitchen, completely 2D.",
            tags: ["React.js", "Node.js", "Tailwind CSS"],
            demo: "https://kraftmaid.renoworks.com/",
            image: a.p + "static/media/kitchen Visualization.f6ec6ae9.jpg",
          },
          {
            id: 3,
            projectName: "Yaga Games",
            projectDesc:
              "This project is a NFT marketing game - provides ERC-721.",
            tags: ["Vue.js", "Spring Boot"],
            demo: "https://yagagames.com/",
            image: a.p + "static/media/yagagames.9c71b715.png",
          },
          {
            id: 4,
            projectName: "SellerCrowd",
            projectDesc:
              "Let customers to find data and insights about national advertisers and their agencies.",
            tags: ["React.js", "Flask"],
            demo: "https://sellercrowd.com/",
            image: a.p + "static/media/SellerCrowd.e790fb7b.jpg",
          },
          {
            id: 5,
            projectName: "Apple snore App",
            projectDesc:
              "When you snore the watch sends a light pulse to your arm which won't wake you or you're partner if you haven't woke them already!",
            tags: ["Flutter"],
            demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
            image: a.p + "static/media/app.apple.com.snore-stop.9f2c2520.png",
          },
        ],
        Mt = (a(143), a.p + "static/media/placeholder.3fcbbdcd.png");
      a(144);
      var Ht = function (e) {
        var t = e.id,
          a = e.name,
          r = e.desc,
          c = e.tags,
          s = e.demo,
          i = e.image,
          n = e.theme,
          o = Object(I.a)(function (e) {
            return {
              iconBtn: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: 50,
                border: "2px solid ".concat(n.tertiary),
                color: n.tertiary,
                transition: "all 0.2s",
                "&:hover": {
                  backgroundColor: n.secondary,
                  color: n.primary,
                  transform: "scale(1.1)",
                  border: "2px solid ".concat(n.secondary),
                },
              },
              icon: {
                fontSize: "1.1rem",
                transition: "all 0.2s",
                "&:hover": {},
              },
            };
          })();
        return Object(h.jsx)(k.a, {
          bottom: !0,
          children: Object(h.jsxs)(
            "div",
            {
              className: "singleProject",
              style: { backgroundColor: n.primary400 },
              children: [
                Object(h.jsxs)("div", {
                  className: "projectContent",
                  children: [
                    Object(h.jsx)("h2", {
                      id: a.replace(" ", "-").toLowerCase(),
                      style: { color: n.tertiary },
                      children: a,
                    }),
                    Object(h.jsx)("img", { src: i || Mt, alt: a }),
                    Object(h.jsx)("div", {
                      className: "project--showcaseBtn",
                      children: Object(h.jsx)("a", {
                        href: s,
                        target: "_blank",
                        rel: "noreferrer",
                        className: o.iconBtn,
                        "aria-labelledby": ""
                          .concat(a.replace(" ", "-").toLowerCase(), " ")
                          .concat(a.replace(" ", "-").toLowerCase(), "-demo"),
                        children: Object(h.jsx)(S.d, {
                          id: "".concat(
                            a.replace(" ", "-").toLowerCase(),
                            "-demo"
                          ),
                          className: o.icon,
                          "aria-label": "Demo",
                        }),
                      }),
                    }),
                  ],
                }),
                Object(h.jsx)("p", {
                  className: "project--desc",
                  style: { background: n.secondary, color: n.tertiary },
                  children: r,
                }),
                Object(h.jsx)("div", {
                  className: "project--lang",
                  style: { background: n.secondary, color: n.tertiary80 },
                  children: c.map(function (e, t) {
                    return Object(h.jsx)("span", { children: e }, t);
                  }),
                }),
              ],
            },
            t
          ),
        });
      };
      var qt = function () {
          var e = Object(r.useContext)(x).theme,
            t = Object(I.a)(function () {
              return {
                viewAllBtn: {
                  color: e.tertiary,
                  backgroundColor: e.primary,
                  transition: "color 0.2s",
                  "&:hover": { color: e.secondary, backgroundColor: e.primary },
                },
                viewArr: {
                  color: e.tertiary,
                  backgroundColor: e.secondary70,
                  width: "40px",
                  height: "40px",
                  padding: "0.5rem",
                  fontSize: "1.05rem",
                  borderRadius: "50%",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                  "&:hover": {
                    color: e.tertiary,
                    backgroundColor: e.secondary,
                  },
                },
              };
            })();
          return Object(h.jsx)(h.Fragment, {
            children:
              Et.length > 0 &&
              Object(h.jsxs)("div", {
                className: "projects",
                id: "projects",
                style: { backgroundColor: e.secondary },
                children: [
                  Object(h.jsx)("div", {
                    className: "projects--header",
                    children: Object(h.jsx)("h1", {
                      style: { color: e.primary },
                      children: "Projects",
                    }),
                  }),
                  Object(h.jsxs)("div", {
                    className: "projects--body",
                    children: [
                      Object(h.jsx)("div", {
                        className: "projects--bodyContainer",
                        children: Et.slice(0, 3).map(function (t) {
                          return Object(h.jsx)(
                            Ht,
                            {
                              theme: e,
                              id: t.id,
                              name: t.projectName,
                              desc: t.projectDesc,
                              tags: t.tags,
                              code: t.code,
                              demo: t.demo,
                              image: t.image,
                            },
                            t.id
                          );
                        }),
                      }),
                      Et.length > 3 &&
                        Object(h.jsx)("div", {
                          className: "projects--viewAll",
                          children: Object(h.jsx)(n.b, {
                            to: "/projects",
                            children: Object(h.jsxs)("button", {
                              className: t.viewAllBtn,
                              children: [
                                "View All",
                                Object(h.jsx)(Bt.a, { className: t.viewArr }),
                              ],
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
          });
        },
        Gt = a(66),
        Jt = a(92),
        Kt = a(57),
        Vt = [
          { id: 1, title: "WebGL (three.js)", icon: Object(h.jsx)(Gt.b, {}) },
          { id: 2, title: "BlockChain", icon: Object(h.jsx)(Jt.a, {}) },
          { id: 3, title: "CryptoCurrency", icon: Object(h.jsx)(Bt.b, {}) },
          { id: 4, title: "NFT Marketing", icon: Object(h.jsx)(Kt.c, {}) },
          { id: 5, title: "Web Design", icon: Object(h.jsx)(w.a, {}) },
          { id: 6, title: "Android & iOS", icon: Object(h.jsx)(Kt.a, {}) },
          { id: 7, title: "Game Development", icon: Object(h.jsx)(S.b, {}) },
          {
            id: 8,
            title: "Microservices Architecture",
            icon: Object(h.jsx)(Kt.b, {}),
          },
          { id: 9, title: "Docker", icon: Object(h.jsx)(S.a, {}) },
          { id: 10, title: "Kubernetes", icon: Object(h.jsx)(Gt.a, {}) },
          {
            id: 11,
            title: "Cloud Service (AWS,GCP,Azure)",
            icon: Object(h.jsx)(Tt.b, {}),
          },
        ];
      a(145), a(146);
      var _t = function (e) {
        var t = e.id,
          a = e.title,
          c = e.icon,
          s = Object(r.useContext)(x).theme;
        return Object(h.jsx)(k.a, {
          bottom: !0,
          children: Object(h.jsx)(
            "div",
            {
              className: "single-service",
              style: { backgroundColor: s.primary400 },
              children: Object(h.jsxs)("div", {
                className: "service-content",
                style: { color: s.tertiary },
                children: [
                  Object(h.jsx)("i", {
                    className: "service-icon",
                    children: c,
                  }),
                  Object(h.jsx)("h4", {
                    style: { color: s.tertiary },
                    children: a,
                  }),
                ],
              }),
            },
            t
          ),
        });
      };
      var Qt = function () {
          var e = Object(r.useContext)(x).theme;
          return Object(h.jsx)(h.Fragment, {
            children:
              Vt.length > 0 &&
              Object(h.jsxs)("div", {
                className: "services",
                id: "services",
                style: { backgroundColor: e.secondary },
                children: [
                  Object(h.jsx)("div", {
                    className: "services-header",
                    children: Object(h.jsx)("h1", {
                      style: { color: e.primary },
                      children: "Services",
                    }),
                  }),
                  Object(h.jsxs)("div", {
                    className: "services-body",
                    children: [
                      Object(h.jsx)("p", {
                        style: { color: e.tertiary80 },
                        children:
                          "These are some of the services I offer. Reach out to me if I can help you with any!",
                      }),
                      Object(h.jsx)("div", {
                        className: "services-bodycontainer",
                        children: Vt.map(function (e) {
                          return Object(h.jsx)(
                            _t,
                            { id: e.id, title: e.title, icon: e.icon },
                            e.id
                          );
                        }),
                      }),
                    ],
                  }),
                ],
              }),
          });
        },
        Ut = a(93);
      a(147);
      var Xt = function () {
        var e = Object(r.useState)(!1),
          t = Object(l.a)(e, 2),
          a = t[0],
          c = t[1],
          s = Object(r.useContext)(x).theme;
        window.addEventListener("scroll", function () {
          var e = document.documentElement.scrollTop;
          e > 300 ? c(!0) : e <= 300 && c(!1);
        });
        var i = Object(I.a)(function () {
          return { icon: { fontSize: "3rem", color: s.tertiary } };
        })();
        return Object(h.jsx)("div", {
          style: { display: a ? "inline" : "none" },
          className: "backToTop",
          children: Object(h.jsx)("button", {
            onClick: function () {
              window.scrollTo({ top: 0, behavior: "smooth" });
            },
            "aria-label": "Back to top",
            children: Object(h.jsx)(Ut.a, { className: i.icon }),
          }),
        });
      };
      var Zt = function () {
          return Object(h.jsxs)("div", {
            children: [
              Object(h.jsx)(y.a, {
                children: Object(h.jsxs)("title", {
                  children: [L.name, " - Porfolio"],
                }),
              }),
              Object(h.jsx)(B, {}),
              Object(h.jsx)(P, {}),
              Object(h.jsx)(q, {}),
              Object(h.jsx)(yt, {}),
              Object(h.jsx)(bt, {}),
              Object(h.jsx)(Nt, {}),
              Object(h.jsx)(qt, {}),
              Object(h.jsx)(Qt, {}),
              Object(h.jsx)(At, {}),
              Object(h.jsx)(Y, {}),
            ],
          });
        },
        $t = a(184);
      a(148);
      var ea = function () {
        var e = Object(r.useState)(""),
          t = Object(l.a)(e, 2),
          a = t[0],
          c = t[1],
          s = Object(r.useContext)(x).theme,
          i = Et.filter(function (e) {
            return (e.projectName + e.projectDesc + e.tags)
              .toLowerCase()
              .includes(a.toLowerCase());
          }),
          o = Object(I.a)(function (e) {
            return {
              search: Object(v.a)(
                {
                  color: s.tertiary,
                  width: "40%",
                  height: "2.75rem",
                  outline: "none",
                  border: "none",
                  borderRadius: "20px",
                  padding: "0.95rem 1rem",
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  backgroundColor: s.secondary,
                  boxShadow:
                    "dark" === s.type
                      ? "inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060"
                      : "inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030",
                  "&::placeholder": { color: s.tertiary80 },
                },
                e.breakpoints.down("sm"),
                { width: "350px" }
              ),
              home: Object(v.a)(
                {
                  color: s.secondary,
                  position: "absolute",
                  top: 25,
                  left: 25,
                  padding: "7px",
                  borderRadius: "50%",
                  boxSizing: "content-box",
                  fontSize: "2rem",
                  cursor: "pointer",
                  boxShadow:
                    (s.type, "3px 3px 6px #ffffff40, -3px -3px 6px #00000050"),
                  transition: "all 0.3s ease-in-out",
                  "&:hover": { color: s.tertiary, transform: "scale(1.1)" },
                },
                e.breakpoints.down("sm"),
                { fontSize: "1.8rem" }
              ),
            };
          })();
        return Object(h.jsxs)("div", {
          className: "projectPage",
          style: { backgroundColor: s.secondary },
          children: [
            Object(h.jsx)(y.a, {
              children: Object(h.jsxs)("title", {
                children: [L.name, " | Projects"],
              }),
            }),
            Object(h.jsxs)("div", {
              className: "projectPage-header",
              style: { backgroundColor: s.primary },
              children: [
                Object(h.jsx)(n.b, {
                  to: "/",
                  children: Object(h.jsx)(Tt.c, { className: o.home }),
                }),
                Object(h.jsx)("h1", {
                  style: { color: s.secondary },
                  children: "Projects",
                }),
              ],
            }),
            Object(h.jsxs)("div", {
              className: "projectPage-container",
              children: [
                Object(h.jsx)("div", {
                  className: "projectPage-search",
                  children: Object(h.jsx)("input", {
                    type: "text",
                    value: a,
                    onChange: function (e) {
                      return c(e.target.value);
                    },
                    placeholder: "Search project...",
                    className: o.search,
                  }),
                }),
                Object(h.jsx)("div", {
                  className: "project-container",
                  children: Object(h.jsx)($t.a, {
                    className: "project-grid",
                    container: !0,
                    direction: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    children: i.map(function (e) {
                      return Object(h.jsx)(
                        Ht,
                        {
                          theme: s,
                          id: e.id,
                          name: e.projectName,
                          desc: e.projectDesc,
                          tags: e.tags,
                          code: e.code,
                          demo: e.demo,
                          image: e.image,
                        },
                        e.id
                      );
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var ta = Object(o.g)(function (e) {
        var t = e.history;
        return (
          Object(r.useEffect)(function () {
            var e = t.listen(function () {
              window.scrollTo(0, 0);
            });
            return function () {
              e();
            };
          }),
          null
        );
      });
      a(149);
      var aa = function () {
          var e = Object(r.useContext)(x).theme;
          return (
            console.log(
              "%cMY PORTFOLIO",
              "color:".concat(e.primary, "; font-size:50px")
            ),
            Object(h.jsxs)("div", {
              className: "app",
              children: [
                Object(h.jsxs)(n.a, {
                  children: [
                    Object(h.jsx)(ta, {}),
                    Object(h.jsxs)(o.d, {
                      children: [
                        Object(h.jsx)(o.b, {
                          path: "/",
                          exact: !0,
                          component: Zt,
                        }),
                        Object(h.jsx)(o.b, {
                          path: "/projects",
                          exact: !0,
                          component: ea,
                        }),
                        Object(h.jsx)(o.a, { to: "/" }),
                      ],
                    }),
                  ],
                }),
                Object(h.jsx)(Xt, {}),
              ],
            })
          );
        },
        ra = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 188))
              .then(function (t) {
                var a = t.getCLS,
                  r = t.getFID,
                  c = t.getFCP,
                  s = t.getLCP,
                  i = t.getTTFB;
                a(e), r(e), c(e), s(e), i(e);
              });
        };
      a(150), a(151);
      i.a.render(
        Object(h.jsx)(g, { children: Object(h.jsx)(aa, {}) }),
        document.getElementById("root")
      ),
        ra();
    },
    71: function (e, t, a) {},
    72: function (e, t, a) {},
  },
  [[152, 1, 2]],
]);
//# sourceMappingURL=main.4a55c4b1.chunk.js.map
