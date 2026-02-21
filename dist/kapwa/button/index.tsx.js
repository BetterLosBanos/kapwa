import { j as a } from "../../jsx-runtime-DdAyboqB.js";
import { a as x } from "../../index-CRZxS9UL.js";
const d = ({
  children: o,
  className: l,
  variant: r = "primary",
  size: p = "md",
  fullWidth: c = !1,
  isLoading: e = !1,
  leftIcon: s,
  rightIcon: t,
  disabled: i,
  ...u
}) => {
  const m = {
    primary: "bg-kapwa-blue-600 text-kapwa-neutral-50 hover:bg-kapwa-blue-700 focus:ring-kapwa-blue-500",
    secondary: "bg-kapwa-orange-600 text-kapwa-neutral-50 hover:bg-kapwa-orange-700 focus:ring-kapwa-orange-500",
    outline: "bg-transparent border border-kapwa-gray-300 text-kapwa-gray-700 hover:bg-kapwa-gray-50 focus:ring-kapwa-blue-500",
    ghost: "bg-transparent text-kapwa-gray-700 hover:bg-kapwa-gray-100 focus:ring-kapwa-gray-500",
    link: "bg-transparent text-kapwa-blue-600 hover:underline p-0 h-auto focus:ring-0"
  }, g = {
    sm: "text-sm px-3 py-1.5 h-8",
    md: "text-base px-4 py-2 h-10",
    lg: "text-lg px-6 py-3 h-12"
  }, n = i || e;
  return /* @__PURE__ */ a.jsxs(
    "button",
    {
      className: x(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",
        "focus:outline-hidden focus:ring-2 focus:ring-offset-2",
        m[r],
        g[p],
        c ? "w-full" : "",
        n ? "opacity-60 cursor-not-allowed" : "",
        r !== "link" && "shadow-xs",
        l
      ),
      disabled: n,
      ...u,
      children: [
        e && /* @__PURE__ */ a.jsxs(
          "svg",
          {
            className: "animate-spin -ml-1 mr-2 h-4 w-4 text-current",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
              /* @__PURE__ */ a.jsx(
                "circle",
                {
                  className: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  strokeWidth: "4"
                }
              ),
              /* @__PURE__ */ a.jsx(
                "path",
                {
                  className: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }
              )
            ]
          }
        ),
        !e && s && /* @__PURE__ */ a.jsx("span", { className: "mr-2", children: s }),
        o,
        !e && t && /* @__PURE__ */ a.jsx("span", { className: "ml-2", children: t })
      ]
    }
  );
};
export {
  d as Button
};
//# sourceMappingURL=index.tsx.js.map
