import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Navigation } from "../components/Navigation";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Fingerprint, Scan, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";
function BiometricVerificationPage() {
  const navigate = useNavigate();
  const [verificationStep, setVerificationStep] = useState("idle");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (verificationStep === "scanning") {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setVerificationStep("complete");
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [verificationStep]);
  const startVerification = () => {
    setVerificationStep("scanning");
    setProgress(0);
  };
  const handleContinue = () => {
    navigate("/vote");
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-950 via-purple-950 to-teal-950", children: [
    /* @__PURE__ */ jsx(Navigation, {}),
    /* @__PURE__ */ jsx("div", { className: "pt-32 pb-20 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-white mb-2", children: "Biometric Verification" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Verify your identity to proceed with voting" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-12 shadow-2xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm mb-4", children: [
              /* @__PURE__ */ jsx(Fingerprint, { className: "w-4 h-4" }),
              "Fingerprint Scan"
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: `w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-4 flex items-center justify-center transition-all ${verificationStep === "scanning" ? "border-blue-500 animate-pulse" : verificationStep === "complete" ? "border-green-500" : "border-white/20"}`, children: verificationStep === "complete" ? /* @__PURE__ */ jsx(CheckCircle, { className: "w-24 h-24 text-green-400" }) : verificationStep === "scanning" ? /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx(Fingerprint, { className: "w-24 h-24 text-blue-400 animate-pulse" }),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-32 h-32 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" }) })
              ] }) : /* @__PURE__ */ jsx(Fingerprint, { className: "w-24 h-24 text-gray-400" }) }),
              verificationStep === "scanning" && /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
                /* @__PURE__ */ jsx("div", { className: "h-2 bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-100",
                    style: { width: `${progress}%` }
                  }
                ) }),
                /* @__PURE__ */ jsxs("p", { className: "text-center text-sm text-gray-400 mt-2", children: [
                  progress,
                  "%"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("p", { className: "text-white font-semibold mb-1", children: verificationStep === "complete" ? "Verified Successfully" : verificationStep === "scanning" ? "Scanning Fingerprint..." : "Place Your Finger" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: verificationStep === "complete" ? "Identity confirmed" : verificationStep === "scanning" ? "Please hold still" : "On the scanner to begin" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm mb-4", children: [
              /* @__PURE__ */ jsx(Scan, { className: "w-4 h-4" }),
              "Face Recognition"
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: `w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-purple-500/20 to-teal-500/20 border-4 flex items-center justify-center overflow-hidden transition-all ${verificationStep === "scanning" ? "border-purple-500" : verificationStep === "complete" ? "border-green-500" : "border-white/20"}`, children: verificationStep === "complete" ? /* @__PURE__ */ jsx(CheckCircle, { className: "w-24 h-24 text-green-400" }) : /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-500/30 to-teal-500/30 flex items-center justify-center", children: /* @__PURE__ */ jsx(Scan, { className: "w-24 h-24 text-purple-400" }) }),
              verificationStep === "scanning" && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 h-1 bg-purple-400 animate-scan-line" }),
                /* @__PURE__ */ jsx("div", { className: "absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-purple-400" }),
                /* @__PURE__ */ jsx("div", { className: "absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-purple-400" }),
                /* @__PURE__ */ jsx("div", { className: "absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-purple-400" }),
                /* @__PURE__ */ jsx("div", { className: "absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-purple-400" })
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("p", { className: "text-white font-semibold mb-1", children: verificationStep === "complete" ? "Face Matched" : verificationStep === "scanning" ? "Analyzing Features..." : "Position Your Face" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: verificationStep === "complete" ? "Biometric data verified" : verificationStep === "scanning" ? "Multi-factor verification" : "Within the frame" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-6", children: [
            verificationStep === "scanning" && /* @__PURE__ */ jsx(Loader2, { className: "w-5 h-5 text-blue-400 animate-spin" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold text-white", children: verificationStep === "complete" ? "Identity Verified \u2713" : verificationStep === "scanning" ? "Verifying Identity..." : "Ready to Verify" })
          ] }),
          verificationStep === "idle" && /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: startVerification,
              className: "w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white h-12",
              children: [
                /* @__PURE__ */ jsx(Fingerprint, { className: "w-5 h-5 mr-2" }),
                "Start Verification"
              ]
            }
          ),
          verificationStep === "complete" && /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: handleContinue,
              className: "w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 text-white h-12",
              children: [
                /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 mr-2" }),
                "Continue to Vote"
              ]
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes scan-line {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan-line {
          animation: scan-line 2s linear infinite;
        }
      ` })
  ] });
}
export {
  BiometricVerificationPage
};
