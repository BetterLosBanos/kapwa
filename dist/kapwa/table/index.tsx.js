import { j as e } from "../../jsx-runtime-DdAyboqB.js";
import { Card as r, CardHeader as x, CardContent as d } from "../card/index.tsx.js";
import { Button as l } from "../button/index.tsx.js";
const p = ({
  title: s,
  subtitle: a,
  tableData: i
}) => /* @__PURE__ */ e.jsxs(r, { className: "mb-8", children: [
  /* @__PURE__ */ e.jsxs(x, { children: [
    /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: s }),
    /* @__PURE__ */ e.jsx("p", { className: "text-gray-800", children: a })
  ] }),
  /* @__PURE__ */ e.jsx(d, { children: /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto space-y-8", children: /* @__PURE__ */ e.jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [
    /* @__PURE__ */ e.jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ e.jsxs("tr", { children: [
      /* @__PURE__ */ e.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider", children: "Name" }),
      /* @__PURE__ */ e.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider", children: "Email" }),
      /* @__PURE__ */ e.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider", children: "Status" }),
      /* @__PURE__ */ e.jsx("th", { className: "px-6 py-3 text-right text-xs font-medium text-gray-800 uppercase tracking-wider", children: "Actions" })
    ] }) }),
    /* @__PURE__ */ e.jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: i.map((t) => /* @__PURE__ */ e.jsxs("tr", { className: "hover:bg-gray-50", children: [
      /* @__PURE__ */ e.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ e.jsx("div", { className: "text-sm font-medium text-gray-900", children: t.name }) }),
      /* @__PURE__ */ e.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ e.jsx("div", { className: "text-sm text-gray-800", children: t.email }) }),
      /* @__PURE__ */ e.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ e.jsx(
        "span",
        {
          className: `inline-flex px-2 py-1 text-xs font-medium rounded-full ${t.status === "Active" ? "bg-green-100 text-green-800" : t.status === "Pending" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`,
          children: t.status
        }
      ) }),
      /* @__PURE__ */ e.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium", children: /* @__PURE__ */ e.jsx(l, { variant: "ghost", size: "sm", children: "Edit" }) })
    ] }, t.id)) })
  ] }) }) })
] });
export {
  p as Table
};
//# sourceMappingURL=index.tsx.js.map
