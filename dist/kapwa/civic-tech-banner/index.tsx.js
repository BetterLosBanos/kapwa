import { j as e } from "../../jsx-runtime-DdAyboqB.js";
const o = ({
  fullBannerTitle: s,
  fullBanner: t
}) => /* @__PURE__ */ e.jsxs("div", { children: [
  /* @__PURE__ */ e.jsx("h3", { className: "font-medium mb-4", children: s }),
  /* @__PURE__ */ e.jsx("div", { className: "relative overflow-hidden bg-linear-to-br from-orange-500 via-red-500 to-pink-600 text-white py-12 rounded-lg", children: /* @__PURE__ */ e.jsxs("div", { className: "container mx-auto px-4 text-center", children: [
    /* @__PURE__ */ e.jsxs("h2", { className: "text-2xl md:text-3xl font-bold mb-4", children: [
      t.title,
      " ",
      /* @__PURE__ */ e.jsx("span", { className: "text-yellow-200", children: t.highlightedWord }),
      " ",
      "Revolution"
    ] }),
    /* @__PURE__ */ e.jsxs("p", { className: "text-lg mb-6 text-orange-100 max-w-2xl mx-auto", children: [
      t.description,
      /* @__PURE__ */ e.jsxs("strong", { className: "text-yellow-200", children: [
        " ",
        t.highlightedPhrase
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
      /* @__PURE__ */ e.jsx(
        "a",
        {
          className: t.primaryButton.className || "bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100",
          href: t.primaryButton.href,
          children: t.primaryButton.text
        }
      ),
      /* @__PURE__ */ e.jsx(
        "a",
        {
          className: t.secondaryButton.className || "border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900",
          href: t.secondaryButton.href,
          children: t.secondaryButton.text
        }
      )
    ] })
  ] }) })
] });
export {
  o as CivicTechBanner
};
//# sourceMappingURL=index.tsx.js.map
