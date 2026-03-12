import { jsx, jsxs } from "react/jsx-runtime";
import { Navigation } from "../components/Navigation";
import { Link } from "react-router";
import { Trophy, Download, Shield, CheckCircle, ExternalLink, BarChart3 } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
const winner = {
  name: "Sarah Johnson",
  party: "Progressive Alliance",
  partySymbol: "\u{1F30A}",
  votes: 4523,
  percentage: 38.5,
  image: "https://images.unsplash.com/photo-1629145185588-9003cd881dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwb2xpdGljYWwlMjBsZWFkZXJ8ZW58MXx8fHwxNzczMzMyNjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
};
const allResults = [
  {
    name: "Sarah Johnson",
    party: "Progressive Alliance",
    votes: 4523,
    percentage: 38.5,
    color: "#3b82f6"
  },
  {
    name: "Michael Chen",
    party: "Unity Party",
    votes: 3891,
    percentage: 33.1,
    color: "#8b5cf6"
  },
  {
    name: "David Martinez",
    party: "Future Forward",
    votes: 3245,
    percentage: 28.4,
    color: "#14b8a6"
  }
];
const statistics = [
  { label: "Total Votes Cast", value: "11,659" },
  { label: "Voter Turnout", value: "67.8%" },
  { label: "Blockchain Blocks", value: "11,659" },
  { label: "Verification Rate", value: "100%" }
];
function FinalResultsPage() {
  const handleDownloadReport = () => {
    alert("Downloading official election report...");
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-950 via-purple-950 to-teal-950", children: [
    /* @__PURE__ */ jsx(Navigation, {}),
    /* @__PURE__ */ jsx("div", { className: "pt-32 pb-20 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm mb-4", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4" }),
          "Election Certified & Verified"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-white mb-2", children: "Official Election Results" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-lg", children: "Verified and recorded on blockchain" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-teal-500/20 backdrop-blur-md border border-white/10 p-12 shadow-2xl mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "text-center mb-8", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold text-lg mb-6", children: [
          /* @__PURE__ */ jsx(Trophy, { className: "w-6 h-6" }),
          "Winner Declared"
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full blur-xl opacity-50" }),
            /* @__PURE__ */ jsx("div", { className: "relative w-48 h-48 rounded-full overflow-hidden border-8 border-yellow-400 shadow-2xl", children: /* @__PURE__ */ jsx(
              ImageWithFallback,
              {
                src: winner.image,
                alt: winner.name,
                className: "w-full h-full object-cover"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center md:text-left flex-1", children: [
            /* @__PURE__ */ jsx("div", { className: "text-6xl mb-4", children: winner.partySymbol }),
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-white mb-2", children: winner.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 mb-4", children: winner.party }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 justify-center md:justify-start", children: [
              /* @__PURE__ */ jsxs("div", { className: "px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20", children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: "Total Votes" }),
                /* @__PURE__ */ jsx("p", { className: "text-white text-3xl font-bold", children: winner.votes.toLocaleString() })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20", children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: "Vote Share" }),
                /* @__PURE__ */ jsxs("p", { className: "text-white text-3xl font-bold", children: [
                  winner.percentage,
                  "%"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 mb-8", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-white font-semibold text-2xl mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(BarChart3, { className: "w-6 h-6" }),
          "Complete Vote Breakdown"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: allResults.map((candidate, index) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "flex items-center justify-center w-12 h-12 rounded-full font-bold text-white text-lg",
                  style: { backgroundColor: candidate.color },
                  children: index + 1
                }
              ),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold text-lg", children: candidate.name }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: candidate.party })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsx("p", { className: "text-white text-2xl font-bold", children: candidate.votes.toLocaleString() }),
              /* @__PURE__ */ jsxs("p", { className: "text-gray-400", children: [
                candidate.percentage,
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-3 bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "h-full transition-all duration-1000",
              style: {
                width: `${candidate.percentage}%`,
                backgroundColor: candidate.color
              }
            }
          ) })
        ] }, candidate.name)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-4 gap-6 mb-8", children: statistics.map((stat) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm mb-2", children: stat.label }),
        /* @__PURE__ */ jsx("p", { className: "text-white text-3xl font-bold", children: stat.value })
      ] }, stat.label)) }),
      /* @__PURE__ */ jsx("div", { className: "rounded-3xl bg-gradient-to-r from-green-500/10 to-teal-500/10 backdrop-blur-md border border-green-400/30 p-8 mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-6", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 text-white" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold text-xl mb-2", children: "Blockchain Verification" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4", children: "All votes have been verified and permanently recorded on the blockchain. This election is certified as tamper-proof and transparent." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/20 border border-green-400/30 text-green-300 text-sm", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4" }),
              "11,659 Blocks Verified"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/20 border border-green-400/30 text-green-300 text-sm", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4" }),
              "100% Consensus Reached"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/20 border border-green-400/30 text-green-300 text-sm", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4" }),
              "Zero Tampering Detected"
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            onClick: handleDownloadReport,
            className: "h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-lg",
            children: [
              /* @__PURE__ */ jsx(Download, { className: "w-5 h-5 mr-2" }),
              "Download Official Report"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            className: "h-16 border-white/20 bg-white/5 hover:bg-white/10 text-white text-lg",
            asChild: true,
            children: /* @__PURE__ */ jsxs("a", { href: "https://etherscan.io", target: "_blank", rel: "noopener noreferrer", className: "flex items-center justify-center", children: [
              /* @__PURE__ */ jsx(ExternalLink, { className: "w-5 h-5 mr-2" }),
              "View on Blockchain Explorer"
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm mb-2", children: "Election conducted on March 12, 2026 using BlockVote Secure E-Voting System" }),
        /* @__PURE__ */ jsx(Link, { to: "/dashboard", className: "text-blue-400 hover:text-blue-300 text-sm", children: "\u2190 Back to Dashboard" })
      ] })
    ] }) })
  ] });
}
export {
  FinalResultsPage
};
