import { j as e } from "../../jsx-runtime-DdAyboqB.js";
import { Card as r, CardImage as n, CardContent as i } from "../card/index.tsx.js";
import { Button as d } from "../button/index.tsx.js";
const h = ({ article: s }) => /* @__PURE__ */ e.jsx(r, { children: s.hasOverlay ? /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
  /* @__PURE__ */ e.jsx(n, { src: s.image, alt: s.imageAlt }),
  /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/75 to-transparent flex items-end p-6", children: /* @__PURE__ */ e.jsxs("div", { className: "text-white", children: [
    /* @__PURE__ */ e.jsx("span", { className: "inline-block px-2 py-1 text-xs font-medium rounded-sm bg-white/20 mb-2", children: s.category }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-semibold mb-2", children: s.title }),
    /* @__PURE__ */ e.jsx("p", { className: "text-white/80", children: s.description })
  ] }) })
] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
  /* @__PURE__ */ e.jsx(n, { src: s.image, alt: s.imageAlt }),
  /* @__PURE__ */ e.jsxs(i, { children: [
    /* @__PURE__ */ e.jsx("span", { className: "inline-block px-2 py-1 text-xs font-medium rounded-sm bg-primary-100 text-primary-800 mb-2", children: s.category }),
    /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-semibold mb-2", children: s.title }),
    /* @__PURE__ */ e.jsx("p", { className: "text-gray-800 mb-4", children: s.description }),
    /* @__PURE__ */ e.jsx(d, { variant: "link", children: "Read More" })
  ] })
] }) }), p = ({
  articleContentTitle: s,
  articleContent: l
}) => /* @__PURE__ */ e.jsxs("div", { children: [
  /* @__PURE__ */ e.jsx("h3", { className: "font-medium mb-4", children: s }),
  /* @__PURE__ */ e.jsx("div", { className: "prose max-w-none", children: l.map((t) => {
    if (t.type === "heading") {
      const a = `h${t.level}`, m = t.level === 1 ? "text-3xl font-bold mb-4" : t.level === 2 ? "text-2xl font-semibold mb-3" : "text-xl font-semibold mb-2";
      return /* @__PURE__ */ e.jsx(a, { className: m, children: t.content }, t.id);
    }
    return /* @__PURE__ */ e.jsx("p", { className: "text-gray-800 mb-4", children: t.content }, t.id);
  }) })
] });
export {
  h as ArticleCard,
  p as ArticleContent
};
//# sourceMappingURL=index.tsx.js.map
