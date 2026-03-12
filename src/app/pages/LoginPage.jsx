import { jsx, jsxs } from "react/jsx-runtime";
import { Navigation } from "../components/Navigation";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Shield, User, Lock, AlertCircle, Fingerprint } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
function LoginPage() {
  const navigate = useNavigate();
  const [voterId, setVoterId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    if (!voterId || !password) {
      setError("Please enter both Voter ID and Password");
      return;
    }
    if (voterId.length < 6 || password.length < 6) {
      setError("Invalid Login - Please check your credentials");
      return;
    }
    navigate("/biometric-verification");
  };
  const handleBiometricLogin = () => {
    navigate("/biometric-verification");
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-950 via-purple-950 to-teal-950", children: [
    /* @__PURE__ */ jsx(Navigation, {}),
    /* @__PURE__ */ jsx("div", { className: "pt-32 pb-20 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm mb-4", children: [
          /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4" }),
          "Secure Authentication Portal"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-white mb-2", children: "Voter Login" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Enter your credentials to access the voting system" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 shadow-2xl", children: [
        /* @__PURE__ */ jsxs("form", { onSubmit: handleLogin, className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "voterId", className: "text-white", children: "Voter ID" }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(User, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "voterId",
                  type: "text",
                  placeholder: "Enter your Voter ID",
                  value: voterId,
                  onChange: (e) => {
                    setVoterId(e.target.value);
                    setError("");
                  },
                  className: "pl-11 bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-500"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "password", className: "text-white", children: "Password" }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "password",
                  type: "password",
                  placeholder: "Enter your password",
                  value: password,
                  onChange: (e) => {
                    setPassword(e.target.value);
                    setError("");
                  },
                  className: "pl-11 bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-500"
                }
              )
            ] })
          ] }),
          error && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-4 py-3 rounded-lg bg-red-500/20 border border-red-400/30 text-red-300", children: [
            /* @__PURE__ */ jsx(AlertCircle, { className: "w-5 h-5 flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: error })
          ] }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              type: "submit",
              className: "w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white h-12",
              children: [
                /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 mr-2" }),
                "Secure Login"
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsx("div", { className: "w-full border-t border-white/10" }) }),
            /* @__PURE__ */ jsx("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ jsx("span", { className: "px-4 bg-transparent text-gray-400", children: "OR" }) })
          ] }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              type: "button",
              onClick: handleBiometricLogin,
              variant: "outline",
              className: "w-full border-white/20 bg-white/5 hover:bg-white/10 text-white h-12",
              children: [
                /* @__PURE__ */ jsx(Fingerprint, { className: "w-5 h-5 mr-2" }),
                "Biometric Authentication"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 pt-6 border-t border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-300 font-semibold mb-1", children: "Your data is protected" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400", children: "All credentials are encrypted using AES-256 encryption and stored securely on the blockchain" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "Need help? Contact your local election office for support" }) })
    ] }) })
  ] });
}
export {
  LoginPage
};
