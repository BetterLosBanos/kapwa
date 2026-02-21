import { j as e } from "../../jsx-runtime-DdAyboqB.js";
import { a as n } from "../../index-CRZxS9UL.js";
import { Button as v } from "../button/index.tsx.js";
const y = ({
  title: o,
  description: d,
  type: g = "default",
  icon: h = !1,
  cta: i,
  className: c,
  onDismiss: s,
  titleSize: u = "lg"
}) => {
  const m = {
    success: {
      container: "bg-green-50 border border-green-200",
      icon: "text-green-600",
      title: "text-green-800",
      description: "text-green-700",
      iconSvg: /* @__PURE__ */ e.jsx(
        "svg",
        {
          className: "h-6 w-6",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ e.jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            }
          )
        }
      )
    },
    error: {
      container: "bg-red-50 border border-red-200",
      icon: "text-red-600",
      title: "text-red-800",
      description: "text-red-700",
      iconSvg: /* @__PURE__ */ e.jsx(
        "svg",
        {
          className: "h-6 w-6",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ e.jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            }
          )
        }
      )
    },
    warning: {
      container: "bg-yellow-50 border border-yellow-200",
      icon: "text-yellow-600",
      title: "text-yellow-800",
      description: "text-yellow-700",
      iconSvg: /* @__PURE__ */ e.jsx(
        "svg",
        {
          className: "h-6 w-6",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ e.jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            }
          )
        }
      )
    },
    info: {
      container: "bg-blue-50 border border-blue-200",
      icon: "text-blue-600",
      title: "text-blue-800",
      description: "text-blue-700",
      iconSvg: /* @__PURE__ */ e.jsx(
        "svg",
        {
          className: "h-6 w-6",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ e.jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            }
          )
        }
      )
    },
    default: {
      container: "bg-gray-50 border border-gray-200",
      icon: "text-gray-600",
      title: "text-gray-900",
      description: "text-gray-800",
      iconSvg: /* @__PURE__ */ e.jsx(
        "svg",
        {
          className: "h-6 w-6",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ e.jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            }
          )
        }
      )
    }
  }, x = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl"
  }, p = (r = "primary", a = "lg") => {
    const l = {
      primary: "bg-kapwa-blue-600 text-kapwa-neutral-50 hover:bg-kapwa-blue-700 focus:ring-kapwa-blue-500",
      secondary: "bg-kapwa-orange-600 text-kapwa-neutral-50 hover:bg-kapwa-orange-700 focus:ring-kapwa-orange-500",
      outline: "bg-transparent border border-kapwa-gray-300 text-kapwa-gray-700 hover:bg-kapwa-gray-50 focus:ring-kapwa-blue-500",
      ghost: "bg-transparent text-kapwa-gray-700 hover:bg-kapwa-gray-100 focus:ring-kapwa-gray-500"
    }, b = {
      sm: "text-sm px-3 py-1.5 h-8",
      md: "text-base px-4 py-2 h-10",
      lg: "text-lg px-6 py-3 h-12"
    };
    return n(
      "inline-flex items-center justify-center rounded-md font-medium transition-colors",
      "focus:outline-hidden focus:ring-2 focus:ring-offset-2",
      l[r],
      b[a],
      "shadow-xs"
    );
  }, t = m[g], f = (r, a) => r.href ? /* @__PURE__ */ e.jsx(
    "a",
    {
      href: r.href,
      className: p(r.variant, r.size),
      children: r.label
    },
    a
  ) : /* @__PURE__ */ e.jsx(
    v,
    {
      onClick: r.onClick,
      variant: r.variant || "primary",
      size: r.size || "md",
      children: r.label
    },
    a
  );
  if (i) {
    const r = Array.isArray(i) ? i : [i];
    return /* @__PURE__ */ e.jsx(
      "div",
      {
        className: n(
          "relative rounded-lg p-4",
          t.container,
          c
        ),
        children: /* @__PURE__ */ e.jsxs("div", { className: "md:flex items-center", children: [
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: n(
                "mb-6 md:mb-0 md:w-2/3 md:pr-8",
                s ? "pr-10 md:pr-8" : ""
              ),
              children: [
                o && /* @__PURE__ */ e.jsx(
                  "h3",
                  {
                    className: n(
                      "font-semibold mb-2",
                      t.title,
                      x[u]
                    ),
                    children: o
                  }
                ),
                /* @__PURE__ */ e.jsx("p", { className: t.description, children: d })
              ]
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: "md:w-1/3 flex justify-center md:justify-end", children: /* @__PURE__ */ e.jsxs("div", { className: "flex space-x-2 items-center", children: [
            r.map(
              (a, l) => f(a, l)
            ),
            s && /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: s,
                className: "absolute top-2 right-2 md:relative md:top-auto md:right-auto rounded-md p-2 transition-colors hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-offset-2",
                "aria-label": "Dismiss banner",
                children: /* @__PURE__ */ e.jsx(
                  "svg",
                  {
                    className: "w-4 h-4 opacity-60",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    children: /* @__PURE__ */ e.jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                )
              }
            )
          ] }) })
        ] })
      }
    );
  }
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: n(
        "relative flex justify-between rounded-lg p-4",
        t.container,
        c
      ),
      children: [
        s && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: s,
            className: "absolute top-2 right-2 md:relative md:top-auto md:right-auto md:flex md:items-center md:justify-end md:ml-3 flex-shrink-0 rounded-md p-2 transition-colors hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-offset-2",
            "aria-label": "Dismiss banner",
            children: /* @__PURE__ */ e.jsx(
              "svg",
              {
                className: "w-4 h-4 opacity-60",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                children: /* @__PURE__ */ e.jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                    clipRule: "evenodd"
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: n(
              "flex items-center",
              o ? "items-start" : "items-center",
              s ? "pr-10 md:pr-0" : ""
            ),
            children: [
              h && /* @__PURE__ */ e.jsx("div", { className: n("mr-3", o ? "mt-1" : "", t.icon), children: t.iconSvg }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
                o && /* @__PURE__ */ e.jsx(
                  "h3",
                  {
                    className: n(
                      "font-semibold",
                      t.title,
                      x[u]
                    ),
                    children: o
                  }
                ),
                /* @__PURE__ */ e.jsx("p", { className: n(t.description, "text-sm"), children: d })
              ] })
            ]
          }
        )
      ]
    }
  );
};
export {
  y as Banner
};
//# sourceMappingURL=index.tsx.js.map
