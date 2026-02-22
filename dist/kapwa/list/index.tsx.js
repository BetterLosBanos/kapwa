import { j as s } from "../../jsx-runtime-DdAyboqB.js";
import { Button as j } from "../button/index.tsx.js";
import { Card as g, CardHeader as f, CardContent as y } from "../card/index.tsx.js";
import { forwardRef as d, createElement as i } from "react";
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), w = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, a) => a ? a.toUpperCase() : t.toLowerCase()
), l = (r) => {
  const e = w(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, m = (...r) => r.filter((e, t, a) => !!e && e.trim() !== "" && a.indexOf(e) === t).join(" ").trim(), b = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var v = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N = d(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: a,
    className: n = "",
    children: o,
    iconNode: h,
    ...c
  }, p) => i(
    "svg",
    {
      ref: p,
      ...v,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: a ? Number(t) * 24 / Number(e) : t,
      className: m("lucide", n),
      ...!o && !b(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...h.map(([x, u]) => i(x, u)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k = (r, e) => {
  const t = d(
    ({ className: a, ...n }, o) => i(N, {
      ref: o,
      iconNode: e,
      className: m(
        `lucide-${C(l(r))}`,
        `lucide-${r}`,
        a
      ),
      ...n
    })
  );
  return t.displayName = l(r), t;
};
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], L = k("external-link", A), M = ({
  headerTitle: r,
  headerSubtitle: e,
  externalLinkText: t,
  listItems: a,
  title: n
}) => /* @__PURE__ */ s.jsxs(g, { className: "mb-8", children: [
  /* @__PURE__ */ s.jsxs(f, { children: [
    /* @__PURE__ */ s.jsx("h2", { className: "text-2xl font-semibold", children: r }),
    e && /* @__PURE__ */ s.jsx("p", { className: "text-gray-800", children: e })
  ] }),
  /* @__PURE__ */ s.jsx(y, { children: /* @__PURE__ */ s.jsx("div", { className: "space-y-8", children: /* @__PURE__ */ s.jsxs("div", { children: [
    /* @__PURE__ */ s.jsx("h3", { className: "font-medium mb-4", children: n }),
    /* @__PURE__ */ s.jsx("div", { className: "space-y-4", children: a.map((o) => /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "p-4 bg-white border border-gray-200 rounded-lg hover:border-primary-500 transition-colors",
        children: /* @__PURE__ */ s.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("h4", { className: "text-lg font-medium text-gray-900", children: o.title }),
            /* @__PURE__ */ s.jsx("span", { className: "inline-block px-2 py-1 mt-2 text-xs font-medium rounded-sm bg-gray-100 text-gray-800", children: o.category })
          ] }),
          t && /* @__PURE__ */ s.jsxs(j, { variant: "ghost", size: "sm", children: [
            t,
            /* @__PURE__ */ s.jsx(L, { className: "ml-2 h-4 w-4" })
          ] })
        ] })
      },
      o.id
    )) })
  ] }) }) })
] });
export {
  M as List
};
//# sourceMappingURL=index.tsx.js.map
