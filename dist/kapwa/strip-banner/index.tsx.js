import { j as e } from "../../jsx-runtime-DdAyboqB.js";
const l = ({
  stripBannerTitle: t,
  stripBanner: s
}) => /* @__PURE__ */ e.jsxs("div", { children: [
  /* @__PURE__ */ e.jsx("h3", { className: "font-medium mb-4", children: t }),
  /* @__PURE__ */ e.jsx("div", { className: "relative overflow-hidden bg-linear-to-r from-orange-500 via-red-500 to-pink-500 text-white py-3 rounded-lg", children: /* @__PURE__ */ e.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-2", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ e.jsxs("span", { className: "font-bold text-sm", children: [
        s.emoji,
        " ",
        s.mainText
      ] }),
      /* @__PURE__ */ e.jsx("span", { className: "hidden md:inline text-sm text-orange-100", children: s.subText })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ e.jsx(
        "a",
        {
          className: s.primaryButton.className || "bg-gray-100 text-gray-800 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-200",
          href: s.primaryButton.href,
          children: s.primaryButton.text
        }
      ),
      /* @__PURE__ */ e.jsx(
        "a",
        {
          className: s.secondaryLink.className || "text-xs text-orange-200 underline",
          href: s.secondaryLink.href,
          children: s.secondaryLink.text
        }
      )
    ] })
  ] }) }) })
] });
export {
  l as StripBanner
};
//# sourceMappingURL=index.tsx.js.map
