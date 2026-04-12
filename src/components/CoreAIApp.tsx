import React from 'react';
import { Brain, Cpu, Workflow, Network, ShieldCheck } from 'lucide-react';

const sections = [
  {
    title: 'AI APPLICATIONS I BUILD',
    items: [
      {
        name: 'Agentic LLM Systems',
        desc: 'Multi-step agents with tool-use, function calling, memory & structured outputs. Frameworks: LangChain, LangGraph, Masta, Aria.',
        icon: Brain
      },
      {
        name: 'RAG Pipelines',
        desc: 'RAG with vector indices, embedding lifecycle management & hybrid retrieval for production LLM apps.',
        icon: Network
      },
      {
        name: 'LLM Gateways & Inference',
        desc: 'Multi-model routing via LiteLLM & OpenRouter; self-hosted Ollama for on-premise inference. Fallback, caching & cost control built-in.',
        icon: Cpu
      },
      {
        name: 'MCP Servers & Clients',
        desc: 'Custom MCP servers connecting enterprise backends to AI agents. CopilotKit MCP clients with dynamic UI rendering.',
        icon: ShieldCheck
      },
      {
        name: 'Workflow Automation',
        desc: 'End-to-end agentic pipelines using LangGraph state machines & n8n for business process execution against external APIs.',
        icon: Workflow
      }
    ]
  },
  {
    title: 'AI-NATIVE DEV WORKFLOW',
    items: [
      {
        name: 'Spec-to-Code (BMAD + Specify Kit)',
        desc: 'Transforms product specs into full implementations — Spec-to-PR compatible. Ships feature in days, not sprints.',
        icon: Cpu
      },
      {
        name: 'AI Agent Team Orchestration',
        desc: 'Orchestrates Claude Code, Cursor & Copilot in Agile roles (planner, dev, reviewer, tester) under human PM oversight.',
        icon: Users
      },
      {
        name: 'Multi-Model Strategy',
        desc: 'Claude, GPT-4, Gemini & local Ollama models; selects right model per context — not model allegiance.',
        icon: Network
      },
      {
        name: 'AI-Reviewed Code',
        desc: 'Uses AI to review AI-generated code at scale. Builds guardrails and feedback loops that surface production issues automatically.',
        icon: ShieldCheck
      }
    ]
  }
];

import { Users } from 'lucide-react';

export default function CoreAIApp() {
  return (
    <div className="p-6 space-y-8 overflow-y-auto h-full scrollbar-hide">
      {sections.map((section, i) => (
        <div key={i} className="space-y-4">
          <h3 className="text-[10px] font-bold text-green-400 uppercase tracking-[0.3em] border-l-2 border-green-500 pl-3">
            {section.title}
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {section.items.map((item, j) => (
              <div key={j} className="futuristic-card rounded-lg p-4 flex gap-4 group hover:border-green-500/30 transition-all">
                <div className="hud-corner hud-corner-tl w-1! h-1!" />
                <div className="hud-corner hud-corner-br w-1! h-1! opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-10 h-10 rounded bg-green-500/5 flex items-center justify-center shrink-0 group-hover:bg-green-500/10 transition-colors">
                  <item.icon size={20} className="text-green-400" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white group-hover:text-green-400 transition-colors">{item.name}</h4>
                  <p className="text-[10px] text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
