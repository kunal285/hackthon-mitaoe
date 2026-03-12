import { jsx, jsxs } from "react/jsx-runtime";
import { Shield, Lock } from "lucide-react";
import { Link } from "react-router";
function Navigation() {
  return /* @__PURE__ */ jsx("nav", { className: "fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-950/90 via-purple-950/90 to-teal-950/90 backdrop-blur-md border-b border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center", children: /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6 text-white" }) }),
      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold text-lg", children: "DelhiVote.net" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
      /* @__PURE__ */ jsx(Link, { to: "/dashboard", className: "text-gray-300 hover:text-white transition-colors text-sm", children: "Results Dashboard" }),
      /* @__PURE__ */ jsxs(Link, { to: "/login", className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium hover:from-blue-500 hover:to-purple-500 transition-all", children: [
        /* @__PURE__ */ jsx(Lock, { className: "w-4 h-4" }),
        "Login to Vote"
      ] })
    ] })
  ] }) });
}
export {
  Navigation
};
