import { jsx, jsxs } from "react/jsx-runtime";
import { Navigation } from "../components/Navigation";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Lock, Radio, CheckCircle2, Database, Loader2 } from "lucide-react";
const processingSteps = [
  {
    id: 1,
    title: "Encrypting Vote",
    description: "Applying AES-256 encryption to your vote",
    icon: Lock,
    duration: 2e3
  },
  {
    id: 2,
    title: "Broadcasting Transaction",
    description: "Sending encrypted vote to blockchain network",
    icon: Radio,
    duration: 2500
  },
  {
    id: 3,
    title: "Smart Contract Validation",
    description: "Verifying vote through consensus mechanism",
    icon: CheckCircle2,
    duration: 3e3
  },
  {
    id: 4,
    title: "Storing Vote on Blockchain",
    description: "Adding vote to immutable distributed ledger",
    icon: Database,
    duration: 2500
  }
];
function BlockchainProcessingPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  useEffect(() => {
    if (currentStep < processingSteps.length) {
      const timer = setTimeout(() => {
        setCompletedSteps([...completedSteps, currentStep]);
        setCurrentStep(currentStep + 1);
      }, processingSteps[currentStep].duration);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentStep, completedSteps, navigate]);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-950 via-purple-950 to-teal-950", children: [
    /* @__PURE__ */ jsx(Navigation, {}),
    /* @__PURE__ */ jsx("div", { className: "pt-32 pb-20 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-white mb-2", children: "Processing Your Vote" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Securing your vote on the blockchain network" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6 mb-12", children: processingSteps.map((step, index) => {
        const isActive = currentStep === index;
        const isCompleted = completedSteps.includes(index);
        const Icon = step.icon;
        return /* @__PURE__ */ jsx(
          "div",
          {
            className: `rounded-2xl bg-white/5 backdrop-blur-md border transition-all ${isActive ? "border-blue-500 bg-blue-500/10" : isCompleted ? "border-green-500 bg-green-500/5" : "border-white/10"}`,
            children: /* @__PURE__ */ jsxs("div", { className: "p-6 flex items-center gap-6", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${isCompleted ? "bg-gradient-to-br from-green-500 to-teal-500" : isActive ? "bg-gradient-to-br from-blue-500 to-purple-500 animate-pulse" : "bg-white/10"}`,
                  children: isCompleted ? /* @__PURE__ */ jsx(CheckCircle2, { className: "w-8 h-8 text-white" }) : isActive ? /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8 text-white animate-pulse" }) : /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8 text-gray-400" })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx(
                  "h3",
                  {
                    className: `text-lg font-semibold mb-1 ${isActive || isCompleted ? "text-white" : "text-gray-400"}`,
                    children: step.title
                  }
                ),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: `text-sm ${isActive || isCompleted ? "text-gray-300" : "text-gray-500"}`,
                    children: step.description
                  }
                ),
                isActive && /* @__PURE__ */ jsx("div", { className: "mt-3 h-1 bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-gradient-to-r from-blue-500 to-purple-600 animate-progress" }) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: isCompleted ? /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-green-500 flex items-center justify-center", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-white" }) }) : isActive ? /* @__PURE__ */ jsx(Loader2, { className: "w-8 h-8 text-blue-400 animate-spin" }) : /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-white/10" }) })
            ] })
          },
          step.id
        );
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 shadow-2xl", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold text-lg mb-6 text-center", children: "Blockchain Network Activity" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-4 mb-6", children: [...Array(8)].map((_, i) => /* @__PURE__ */ jsx(
          "div",
          {
            className: `aspect-square rounded-xl bg-gradient-to-br flex items-center justify-center transition-all ${i < currentStep * 2 ? "from-blue-500 to-purple-600 animate-pulse" : "from-white/10 to-white/5"}`,
            children: /* @__PURE__ */ jsx(
              Database,
              {
                className: `w-8 h-8 ${i < currentStep * 2 ? "text-white" : "text-gray-600"}`
              }
            )
          },
          i
        )) }),
        /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: currentStep === processingSteps.length ? "Vote successfully recorded on blockchain!" : `Connected to ${Math.min(currentStep * 2 + 1, 8)} nodes` }) })
      ] }),
      currentStep === processingSteps.length && /* @__PURE__ */ jsx("div", { className: "mt-8 rounded-2xl bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-400/30 p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-7 h-7 text-white" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold text-lg mb-1", children: "Vote Cast Successfully!" }),
          /* @__PURE__ */ jsx("p", { className: "text-green-200 text-sm", children: "Your vote has been securely recorded on the blockchain. Redirecting to results dashboard..." })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 2s ease-in-out;
        }
      ` })
  ] });
}
export {
  BlockchainProcessingPage
};
