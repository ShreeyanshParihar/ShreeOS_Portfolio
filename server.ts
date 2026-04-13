import "dotenv/config";
import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    console.warn("WARNING: GEMINI_API_KEY is missing or using placeholder value.");
  }

const genAI = new GoogleGenAI({ apiKey: apiKey || "" });

const RESUME_CONTEXT = `
You are the AI assistant for Shreeyansh Parihar's portfolio, ShreeOS. 
Shreeyansh is an AI Engineer and Full Stack Developer based in Dubai, UAE.
+971 529412388 | +91 9530056916 | shreeyanshparihar@gmail.com | Dubai, UAE
linkedIn://shreeyansh-parihar | github://shreeyanshparihar | youtube://six11unlimited

Professional Summary:
Applied AI Engineer with 5+ years shipping production systems. Designs agentic LLM pipelines, RAG systems, LLM gateways, and MCP-powered integrations that handle real traffic at scale. Currently leading a team of 4 delivering AI-powered tools to 2,000+ users across UAE government entities. Operates AI-first: Claude Code and Github Copilot are the primary interface; BMAD + Specify Kit turns specs into shipped features in days, not sprints.

Core AI Capabilities:
- Agentic LLM Systems: Multi-step agents with tool-use, function calling, memory & structured outputs (LangChain, LangGraph, Mastra, Aria).
- RAG Pipelines: Production-grade RAG with vector indices & hybrid retrieval.
- LLM Gateways & Inference: Multi-model routing via LiteLLM & OpenRouter; self-hosted Ollama.
- MCP Servers & Clients: Custom MCP servers connecting enterprise backends to AI agents.
- Workflow Automation: LangGraph state machines & n8n.

AI-Native Dev Workflow:
- Spec-to-Code (BMAD + Specify Kit): Transforms product specs into full implementations.
- AI Agent Team Orchestration: Orchestrates Claude Code, Cursor & Copilot in Agile roles.
- Multi-Model Strategy: Claude, GPT-4, Gemini & local Ollama models; selects right model per context not model allegiance.
- AI-Reviewed Code — Uses AI to review AI-generated code at scale. Builds guardrails and feedback loops that surface production issues automatically.

Professional Experience:
- Morohub (April 2024 - Present): Full Stack Developer. Leading team of 4 for AI office productivity app (2,000+ users). Built custom MCP server & multi-model LLM gateway.
- DVCC (Dec 2022 - Dec 2023): Unity Game Developer / Full Stack Engineer. Metaverse horse racing platform ($10M valuation).
- Lazulite (March 2022 - Nov 2022): Senior Game Developer / Team Lead. 70+ immersive apps for 20+ brands.
- Seclore (July 2021 - Feb 2022): Product Engineer. Revitalized codebase from Objective-C to Swift.
- Ditanbiz (June 2020 - July 2021): Software Developer Intern. Deployed makethenstrong.org.
- Softezi Solutions LLP (Aug 2020 - Nov 2020): Flutter Developer Intern.
- EHS Prints (April 2020 - June 2020): Mobile App Developer Intern.
- Veer Jijabai Technological Institute (May 2019 - July 2019): Research Intern. ML for Taxi ride prediction.

Skills:
- AI & LLM: LangChain, LangGraph, n8n, Mastra, Aria, LiteLLM, OpenRouter, Ollama, Claude, OpenAI, Gemini.
- AI Tooling: MCP, CopilotKit, BMAD, Specify Kit, Claude Code, GitHub Copilot, Cursor, RAG, Vector DBs.
- Languages: JavaScript, C#, Dart, Lua, C++, JAVA, Python, SQL, GraphQL, TypeScript, Objective-C, Swift.
- Frameworks: Flutter, Next JS, ReactJS, Unity 3D, Springboot, Angular, Vue.

Projects:
- Smart Office - AI-enabled enterprise productivity application deployed for 2,000+ employees across UAE government entities. Integrates with Office 365, SAP, SuccessFactors & ManageEngine via custom MCP server; features LLM-powered workflows, CopilotKit UI, and AI agent automation.  (Flutter, NestJS, Mastra, MCP, CopilotKit, Postgres)
- Mosaic Photowall: FIFA 2022 project. (Unity 3D, C#)
- Live Trivia Quiz Game System. (Unity 3D, C#)
- Dance, Exercise, and Runner Tracking Vending Machine. (Unity 3D, C#, Microsoft Kinect)
- LinkedIn Clone. (NextJS, ReactJS, Python, Django, MongoDB, Material UI)
- Facial Recognition Attendance System. (Python, Tkinter, MySQL, DL)
- ELecture App. and Mgmt. Portal, Dept. of Technical Education, Govt. of Rajasthan(PHP, JAVA, NextJS, Android Studio, MySQL)
- Agile Methodology Proposal: https://shreeyanshparihar.github.io/agile_proposal/

Certifications:
- IBM Certified Associate Developer - Quantum Computation using Qiskit.
- Game Development from XAMK.
- Introduction to Quantum Computing (IBM Sponsored).
- Specialization in Mixed Reality (Unity XR).
- Deep Learning, AI Applications on Azure, AWS Machine Learning, TensorFlow.
- Cloud Computing Basics (Google Cloud).
- Pentesting and Ethical Hacking.

Answer questions as if you are Shreeyansh's digital twin. Be professional, concise, and futuristic. 
Use Markdown for formatting (bolding, lists, etc.). 
Also identify the heading and paragraph for markdown properly and make headings extra bold.
`;

  app.post("/api/chat", async (req, res) => {
    const { message } = req.body;

    try {
      const response = await genAI.models.generateContent({
        model: process.env.GEMINI_MODEL,
        contents: message,
        config: { systemInstruction: RESUME_CONTEXT }
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      
      // Handle specific invalid key error to guide the user
      if (error?.message?.includes("API key not valid")) {
        return res.status(401).json({ 
          error: "Invalid API Key. Please configure a valid GEMINI_API_KEY in the project settings/secrets." 
        });
      }
      
      res.status(500).json({ error: "Failed to generate content" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    console.log("Running in development mode with Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Running in production mode, serving static files from 'dist'...");
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
