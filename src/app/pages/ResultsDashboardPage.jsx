import { jsx, jsxs } from "react/jsx-runtime";
import { Navigation } from "../components/Navigation";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { TrendingUp, Users, Shield, Eye, Activity, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
const candidateData = [
  { name: "Sarah Johnson", votes: 4523, color: "#3b82f6", party: "Progressive Alliance" },
  { name: "Michael Chen", votes: 3891, color: "#8b5cf6", party: "Unity Party" },
  { name: "David Martinez", votes: 3245, color: "#14b8a6", party: "Future Forward" }
];
const auditLog = [
  { time: "14:32:45", action: "Vote recorded", hash: "0x7f9a...3b2c", status: "verified" },
  { time: "14:32:43", action: "Smart contract executed", hash: "0x6e8b...2a1d", status: "verified" },
  { time: "14:32:41", action: "Transaction broadcast", hash: "0x5d7c...1e9f", status: "verified" },
  { time: "14:32:39", action: "Vote encrypted", hash: "0x4c6d...0d8e", status: "verified" },
  { time: "14:32:12", action: "Vote recorded", hash: "0x3b5e...9c7d", status: "verified" },
  { time: "14:32:08", action: "Vote recorded", hash: "0x2a4f...8b6c", status: "verified" }
];
function ResultsDashboardPage() {
  const navigate = useNavigate();
  const [totalVotes, setTotalVotes] = useState(0);
  const [liveUpdate, setLiveUpdate] = useState(false);
  useEffect(() => {
    const total = candidateData.reduce((sum, c) => sum + c.votes, 0);
    let current = 0;
    const increment = Math.ceil(total / 50);
    const timer = setInterval(() => {
      current += increment;
      if (current >= total) {
        setTotalVotes(total);
        clearInterval(timer);
      } else {
        setTotalVotes(current);
      }
    }, 30);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveUpdate(true);
      setTimeout(() => setLiveUpdate(false), 500);
    }, 3e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-950 via-purple-950 to-teal-950", children: [
    /* @__PURE__ */ jsx(Navigation, {}),
    /* @__PURE__ */ jsx("div", { className: "pt-32 pb-20 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-white mb-2", children: "Live Results Dashboard" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Real-time vote counting and blockchain verification" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/20 border border-green-400/30 transition-all ${liveUpdate ? "ring-2 ring-green-400" : ""}`, children: [
            /* @__PURE__ */ jsx(Activity, { className: `w-4 h-4 text-green-400 ${liveUpdate ? "animate-pulse" : ""}` }),
            /* @__PURE__ */ jsx("span", { className: "text-green-300 text-sm font-medium", children: "Live Updates" })
          ] }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: () => navigate("/results"),
              className: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white",
              children: [
                /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4 mr-2" }),
                "View Final Results"
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center", children: /* @__PURE__ */ jsx(Users, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: "Total Votes Cast" }),
            /* @__PURE__ */ jsx("p", { className: "text-white text-2xl font-bold", children: totalVotes.toLocaleString() })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center", children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: "Turnout Rate" }),
            /* @__PURE__ */ jsx("p", { className: "text-white text-2xl font-bold", children: "67.8%" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center", children: /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: "Verified on Blockchain" }),
            /* @__PURE__ */ jsx("p", { className: "text-white text-2xl font-bold", children: "100%" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold text-lg mb-6", children: "Vote Distribution" }),
          /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: 300, children: /* @__PURE__ */ jsxs(BarChart, { data: candidateData, children: [
            /* @__PURE__ */ jsx(XAxis, { dataKey: "name", stroke: "#9ca3af", tick: { fill: "#9ca3af", fontSize: 12 } }),
            /* @__PURE__ */ jsx(YAxis, { stroke: "#9ca3af", tick: { fill: "#9ca3af", fontSize: 12 } }),
            /* @__PURE__ */ jsx(
              Tooltip,
              {
                contentStyle: {
                  backgroundColor: "rgba(17, 24, 39, 0.9)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  color: "#fff"
                }
              }
            ),
            /* @__PURE__ */ jsx(Bar, { dataKey: "votes", radius: [8, 8, 0, 0], children: candidateData.map((entry, index) => /* @__PURE__ */ jsx(Cell, { fill: entry.color }, `cell-${index}`)) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold text-lg mb-6", children: "Vote Percentage" }),
          /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: 300, children: /* @__PURE__ */ jsxs(PieChart, { children: [
            /* @__PURE__ */ jsx(
              Pie,
              {
                data: candidateData,
                cx: "50%",
                cy: "50%",
                labelLine: false,
                label: ({ name, percent }) => `${name.split(" ")[0]} ${(percent * 100).toFixed(1)}%`,
                outerRadius: 100,
                fill: "#8884d8",
                dataKey: "votes",
                children: candidateData.map((entry, index) => /* @__PURE__ */ jsx(Cell, { fill: entry.color }, `cell-${index}`))
              }
            ),
            /* @__PURE__ */ jsx(
              Tooltip,
              {
                contentStyle: {
                  backgroundColor: "rgba(17, 24, 39, 0.9)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  color: "#fff"
                }
              }
            )
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 mb-8", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold text-lg mb-6", children: "Current Standings" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: candidateData.map((candidate, index) => {
          const percentage = totalVotes > 0 ? candidate.votes / totalVotes * 100 : 0;
          return /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-white/5 border border-white/10 p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold", children: index + 1 }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold text-lg", children: candidate.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: candidate.party })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsx("p", { className: "text-white text-2xl font-bold", children: candidate.votes.toLocaleString() }),
                /* @__PURE__ */ jsxs("p", { className: "text-gray-400 text-sm", children: [
                  percentage.toFixed(1),
                  "% of votes"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-2 bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "h-full transition-all duration-1000 ease-out",
                style: {
                  width: `${percentage}%`,
                  backgroundColor: candidate.color
                }
              }
            ) })
          ] }, candidate.name);
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold text-lg", children: "Transparent Audit Log" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/20 border border-green-400/30", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-400" }),
            /* @__PURE__ */ jsx("span", { className: "text-green-300 text-sm", children: "All Verified" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3", children: auditLog.map((log, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-400" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-white font-medium", children: log.action }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm font-mono", children: log.hash })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: log.time }),
                /* @__PURE__ */ jsx("p", { className: "text-green-400 text-xs", children: "Verified" })
              ] })
            ]
          },
          index
        )) })
      ] })
    ] }) })
  ] });
}
export {
  ResultsDashboardPage
};
