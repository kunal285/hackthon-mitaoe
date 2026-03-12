import { jsx, jsxs } from "react/jsx-runtime";
import { Navigation } from "../components/Navigation";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Vote, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { RadioGroup } from "../components/ui/radio-group";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../components/ui/dialog";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
const candidates = [
  {
    id: "1",
    name: "Sarah Johnson",
    party: "Progressive Alliance",
    partySymbol: "\u{1F30A}",
    image: "https://images.unsplash.com/photo-1629145185588-9003cd881dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwb2xpdGljYWwlMjBsZWFkZXJ8ZW58MXx8fHwxNzczMzMyNjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-blue-500 to-teal-500"
  },
  {
    id: "2",
    name: "Michael Chen",
    party: "Unity Party",
    partySymbol: "\u2B50",
    image: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHN1aXR8ZW58MXx8fHwxNzczMzMyNjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-purple-500 to-blue-500"
  },
  {
    id: "3",
    name: "David Martinez",
    party: "Future Forward",
    partySymbol: "\u{1F680}",
    image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBidXNpbmVzcyUyMGxlYWRlcnxlbnwxfHx8fDE3NzMyNTI0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-teal-500 to-purple-500"
  }
];
function VoteCastingPage() {
  const navigate = useNavigate();
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleCastVote = () => {
    if (selectedCandidate) {
      setShowConfirmation(true);
    }
  };
  const handleConfirmVote = () => {
    setShowConfirmation(false);
    navigate("/processing");
  };
  const selectedCandidateData = candidates.find((c) => c.id === selectedCandidate);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-950 via-purple-950 to-teal-950", children: [
    /* @__PURE__ */ jsx(Navigation, {}),
    /* @__PURE__ */ jsx("div", { className: "pt-32 pb-20 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm mb-4", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4" }),
          "Identity Verified - Ready to Vote"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-white mb-2", children: "Cast Your Vote" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Select your preferred candidate below" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 shadow-2xl mb-6", children: [
        /* @__PURE__ */ jsx(RadioGroup, { value: selectedCandidate, onValueChange: setSelectedCandidate, children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: candidates.map((candidate) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "radio",
              id: candidate.id,
              name: "candidate",
              value: candidate.id,
              checked: selectedCandidate === candidate.id,
              onChange: (e) => setSelectedCandidate(e.target.value),
              className: "peer sr-only"
            }
          ),
          /* @__PURE__ */ jsxs(
            "label",
            {
              htmlFor: candidate.id,
              className: `block cursor-pointer rounded-2xl bg-white/5 border-2 transition-all hover:bg-white/10 overflow-hidden ${selectedCandidate === candidate.id ? "border-blue-500 ring-4 ring-blue-500/20" : "border-white/10"}`,
              children: [
                /* @__PURE__ */ jsxs("div", { className: "relative h-64 overflow-hidden", children: [
                  /* @__PURE__ */ jsx(
                    ImageWithFallback,
                    {
                      src: candidate.image,
                      alt: candidate.name,
                      className: "w-full h-full object-cover"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-t ${candidate.color} opacity-20` }),
                  selectedCandidate === candidate.id && /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6 text-white" }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-4xl mb-2", children: candidate.partySymbol }),
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-1", children: candidate.name }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: candidate.party })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: `w-full py-2 rounded-lg text-center font-semibold transition-all ${selectedCandidate === candidate.id ? `bg-gradient-to-r ${candidate.color} text-white` : "bg-white/10 text-gray-400"}`, children: selectedCandidate === candidate.id ? "Selected" : "Select" })
                ] })
              ]
            }
          )
        ] }, candidate.id)) }) }),
        !selectedCandidate && /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center gap-2 px-4 py-3 rounded-lg bg-yellow-500/20 border border-yellow-400/30 text-yellow-300", children: [
          /* @__PURE__ */ jsx(AlertCircle, { className: "w-5 h-5 flex-shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Please select a candidate to proceed" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          onClick: handleCastVote,
          disabled: !selectedCandidate,
          className: "w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white h-14 text-lg disabled:opacity-50 disabled:cursor-not-allowed",
          children: [
            /* @__PURE__ */ jsx(Vote, { className: "w-5 h-5 mr-2" }),
            "Cast Vote"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(Dialog, { open: showConfirmation, onOpenChange: setShowConfirmation, children: /* @__PURE__ */ jsxs(DialogContent, { className: "bg-gradient-to-br from-blue-950 to-purple-950 border-white/20 text-white", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxs(DialogTitle, { className: "text-2xl flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(AlertCircle, { className: "w-6 h-6 text-yellow-400" }),
          "Confirm Your Vote"
        ] }),
        /* @__PURE__ */ jsx(DialogDescription, { className: "text-gray-300 text-base", children: "Please review your selection carefully. Once submitted, your vote cannot be changed." })
      ] }),
      selectedCandidateData && /* @__PURE__ */ jsx("div", { className: "my-6", children: /* @__PURE__ */ jsx("div", { className: "rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-full overflow-hidden border-4 border-blue-500", children: /* @__PURE__ */ jsx(
          ImageWithFallback,
          {
            src: selectedCandidateData.image,
            alt: selectedCandidateData.name,
            className: "w-full h-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl mb-1", children: selectedCandidateData.partySymbol }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: selectedCandidateData.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: selectedCandidateData.party })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-3", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setShowConfirmation(false),
            className: "border-white/20 bg-white/5 hover:bg-white/10 text-white",
            children: "Review Selection"
          }
        ),
        /* @__PURE__ */ jsxs(
          Button,
          {
            onClick: handleConfirmVote,
            className: "bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 text-white",
            children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 mr-2" }),
              "Confirm & Submit"
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  VoteCastingPage
};
