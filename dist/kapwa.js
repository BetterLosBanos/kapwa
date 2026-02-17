import t from "tailwindcss/plugin";
const o = t(function({ addUtilities: e }) {
  e({
    // HEADINGS
    ".kapwa-heading-xl": {
      fontSize: "2.5rem",
      // 40px
      fontWeight: "700",
      lineHeight: "1.4"
      // 140%
    },
    ".kapwa-heading-lg": {
      fontSize: "2rem",
      // 32px
      fontWeight: "700",
      lineHeight: "1.4"
    },
    ".kapwa-heading-md": {
      fontSize: "1.5rem",
      // 24px
      fontWeight: "700",
      lineHeight: "1.4"
    },
    ".kapwa-heading-sm": {
      fontSize: "1.25rem",
      // 20px
      fontWeight: "700",
      lineHeight: "1.4"
    },
    // BODY TEXT - Default (400 weight)
    ".kapwa-body-xl-default": {
      fontSize: "1.25rem",
      // 20px
      fontWeight: "400",
      lineHeight: "1.4"
    },
    ".kapwa-body-lg-default": {
      fontSize: "1.125rem",
      // 18px
      fontWeight: "400",
      lineHeight: "1.4"
    },
    ".kapwa-body-md-default": {
      fontSize: "1rem",
      // 16px
      fontWeight: "400",
      lineHeight: "1.4"
    },
    ".kapwa-body-sm-default": {
      fontSize: "0.875rem",
      // 14px
      fontWeight: "400",
      lineHeight: "1.4"
    },
    ".kapwa-body-xs-default": {
      fontSize: "0.75rem",
      // 12px
      fontWeight: "400",
      lineHeight: "1.4"
    },
    // BODY TEXT - Strong (700 weight)
    ".kapwa-body-xl-strong": {
      fontSize: "1.25rem",
      // 20px
      fontWeight: "700",
      lineHeight: "1.4"
    },
    ".kapwa-body-lg-strong": {
      fontSize: "1.125rem",
      // 18px
      fontWeight: "700",
      lineHeight: "1.4"
    },
    ".kapwa-body-md-strong": {
      fontSize: "1rem",
      // 16px
      fontWeight: "700",
      lineHeight: "1.4"
    },
    ".kapwa-body-sm-strong": {
      fontSize: "0.875rem",
      // 14px
      fontWeight: "700",
      lineHeight: "1.4"
    },
    ".kapwa-body-xs-strong": {
      fontSize: "0.75rem",
      // 12px
      fontWeight: "700",
      lineHeight: "1.4"
    },
    // LABELS (120% line-height, 700 weight)
    ".kapwa-label-lg": {
      fontSize: "1.125rem",
      // 18px
      fontWeight: "700",
      lineHeight: "1.2"
      // 120%
    },
    ".kapwa-label-md": {
      fontSize: "1rem",
      // 16px
      fontWeight: "700",
      lineHeight: "1.2"
    },
    ".kapwa-label-sm": {
      fontSize: "0.875rem",
      // 14px
      fontWeight: "700",
      lineHeight: "1.2"
    },
    ".kapwa-label-xs": {
      fontSize: "0.75rem",
      // 12px
      fontWeight: "700",
      lineHeight: "1.2"
    },
    // LINKS (underlined)
    ".kapwa-link-lg": {
      fontSize: "1.125rem",
      // 18px
      fontWeight: "400",
      lineHeight: "1.4",
      textDecoration: "underline"
    },
    ".kapwa-link-md": {
      fontSize: "1rem",
      // 16px
      fontWeight: "400",
      lineHeight: "1.4",
      textDecoration: "underline"
    },
    ".kapwa-link-sm": {
      fontSize: "0.875rem",
      // 14px
      fontWeight: "400",
      lineHeight: "1.4",
      textDecoration: "underline"
    },
    // CODE TEXT (monospace font)
    ".kapwa-code-lg": {
      fontSize: "1.125rem",
      // 18px
      fontWeight: "400",
      lineHeight: "1.4",
      fontFamily: "var(--font-mono)"
    },
    ".kapwa-code-md": {
      fontSize: "1rem",
      // 16px
      fontWeight: "400",
      lineHeight: "1.4",
      fontFamily: "var(--font-mono)"
    },
    ".kapwa-code-sm": {
      fontSize: "0.875rem",
      // 14px
      fontWeight: "400",
      lineHeight: "1.4",
      fontFamily: "var(--font-mono)"
    }
  }, ["responsive"]);
});
export {
  o as default,
  o as kapwaPlugin
};
//# sourceMappingURL=kapwa.js.map
