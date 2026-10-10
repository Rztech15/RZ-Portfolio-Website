/* Portfolio assistant: answers questions about Muhammad Ramzan from the content below.
   No server, no API key. To change an answer, edit the text in KB. */
(function () {
  var L = {
    agent: ["Live demo", "https://rz-data-analytics-ai-agent.vercel.app/"],
    skill: ["Live demo", "https://ai-skillbridge.vercel.app/"],
    comm: ["Live store", "https://rztech15.github.io/RZ-Commerce/"],
    gh: ["GitHub profile", "https://github.com/Rztech15"],
    li: ["LinkedIn", "https://www.linkedin.com/in/muhammad-ramzan-a91510423"],
    wa: ["WhatsApp", "https://wa.me/923207895540"],
    mail: ["Email", "mailto:ramzanbalochmrbaloch@gmail.com"],
    cv: ["Download CV (PDF)", "Muhammad_Ramzan_CV.pdf"]
  };
  var KB = {
    hello: { t: "Hi! I can answer questions about Muhammad Ramzan's projects, skills, experience, education, and how to contact him. Pick a topic below or type a question." },
    about: { t: "Muhammad Ramzan is a data analyst and developer with a mathematics foundation. He is studying BS Mathematics (2024-2028) at CASPAM, Bahauddin Zakariya University, Multan, and leads the Future Builders group.", l: [["About section", "#about"]] },
    projects: { t: "Main projects: RZ Data Analytics AI Agent (live), AI SkillBridge (live, team project), RZ Commerce (live store), Pakistani Companies Analysis (Excel dashboard), Student Performance Analysis (Python), a Linear Regression model built from scratch, and StockFlow (in progress). Aegis-AI is coming soon. Ask about any of them by name.", l: [["See all projects", "#projects"]] },
    agent: { t: "RZ Data Analytics AI Agent: upload a CSV, Excel, or JSON file and get instant dashboards, anomaly detection, and an AI analyst that computes exact answers across the whole dataset. Built with Gemini, Supabase, Vercel, and JavaScript, and installable as a PWA.", l: [L.agent, ["GitHub", "https://github.com/Rztech15/RZ-DATA-ANALYTICS-AI-AGENT"]] },
    skillbridge: { t: "AI SkillBridge is an AI-powered career platform that analyzes a user's education, skills, interests, and goals to build a personalized career roadmap. It was built by the Future Builders team, and Ramzan was the Backend Lead.", l: [L.skill] },
    commerce: { t: "RZ Commerce is Ramzan's own online skincare store, with a dark-gold luxury design, product slider, cart, and WhatsApp checkout. He designs, builds, and runs it.", l: [L.comm, ["GitHub", "https://github.com/Rztech15/RZ-Commerce"]] },
    stockflow: { t: "StockFlow is an inventory and stock management system for small businesses, currently in progress. It has a MySQL schema with triggers that update stock automatically and block overselling, plus a responsive dashboard with low-stock alerts. The backend API is still planned.", l: [["GitHub", "https://github.com/Rztech15/StockFlow"]] },
    aegis: { t: "Aegis-AI is an upcoming secure messaging app with a safety layer that detects scams and threats in chats and warns users. It also brings multiple AI models into one place. Stack: Next.js, Supabase, OpenRouter.", l: [["GitHub", "https://github.com/Rztech15/Aegis-AI/tree/main/aegis-ai-build-fix/safechat"]] },
    regression: { t: "The Linear Regression project predicts student marks. It was built from scratch in Python and NumPy using multivariate linear regression and gradient descent, without scikit-learn.", l: [["GitHub", "https://github.com/Rztech15/Linear-Regression-Student-Marks"]] },
    student: { t: "Student Performance Analysis looks for patterns between study habits, attendance, and grades using Python, pandas, matplotlib, and numpy, with 4 key visualizations.", l: [["GitHub", "https://github.com/Rztech15/Student-Performance-Analysis"]] },
    conference: { t: "Ramzan analyzed the financial data of Pakistan's top companies (PSO, OGDCL, HBL, UBL, Meezan Bank, Lucky Cement) in an Excel dashboard and presented the research as a poster at the international conference FICPFSIT-2026.", l: [["GitHub", "https://github.com/Rztech15/Pakistan_Companies_Data_Analysis"]] },
    skills: { t: "Programming and web: Python, JavaScript, HTML/CSS, React, Next.js, SQL. Data and AI: Excel dashboards, Pivot Tables and Power Query, pandas, NumPy, Matplotlib, Scikit-learn, machine learning, data visualization. Tools: Git and GitHub, Supabase, Jupyter, Maple, Vercel. Mathematics: statistics and numerical analysis.", l: [["Skills section", "#skills"]] },
    experience: { t: "Group Lead at Future Builders (2026 - present). Founder and E-Commerce Manager at RZ Commerce (2025 - present). E-commerce seller on Walmart Marketplace through dropshipping (2026). Data Analyst and Python Developer (2024 - present).", l: [["Experience section", "#experience"]] },
    education: { t: "BS Mathematics at CASPAM, Bahauddin Zakariya University, Multan (2024-2028). Intermediate in Pre-Engineering / General Science (2024) and Matriculation (2022). Research interests include complex analysis, operator theory, topological dynamics, abstract algebra, and computational modeling.", l: [["Education", "#about"]] },
    certs: { t: "Conference: FICPFSIT-2026 research poster and participation, plus the Code Meet seminar. Courses: HarvardX CS50 Introduction to Computer Science, Alison Business Analytics, and HarvardX Remote Work Revolution. The course cards on the site are personal learning milestones, not official certificates.", l: [["Certificates section", "#certificates"]] },
    cv: { t: "You can download Ramzan's CV as a PDF.", l: [L.cv] },
    contact: { t: "Email: ramzanbalochmrbaloch@gmail.com. Phone and WhatsApp: 0320-7895540. Based in Multan, Pakistan. You can also use the contact form on this page.", l: [L.mail, L.wa, L.li, L.gh, ["Contact form", "#contact"]] },
    open: { t: "Ramzan is open to internships, work opportunities, freelance projects, and collaborations. He plans to continue his studies abroad after graduation.", l: [L.mail, ["Contact form", "#contact"]] },
    fallback: { t: "I can only answer questions about Muhammad Ramzan's portfolio: projects, skills, experience, education, certificates, CV, and contact. Try one of the topics below, or use the contact form for anything else.", l: [["Contact form", "#contact"]] }
  };
  var RULES = [
    [/^(hi|hello|hey|salam|assalam)/, "hello"],
    [/skillbridge|skill bridge|career platform/, "skillbridge"],
    [/commerce|store|shop|skincare|glutawol/, "commerce"],
    [/stockflow|inventory|dbms/, "stockflow"],
    [/aegis|messaging|safechat|scam/, "aegis"],
    [/agent|analytics ai|gemini|dashboard/, "agent"],
    [/regression|gradient|from scratch/, "regression"],
    [/student performance/, "student"],
    [/pakistan|compan|conference|poster|ficpf/, "conference"],
    [/project|built|build|demo|portfolio/, "projects"],
    [/skill|tech|stack|language|tool|python|javascript|react|sql|excel|next/, "skills"],
    [/experience|worked|role|lead|future builders|dropship|walmart|job history/, "experience"],
    [/educat|study|degree|universit|bzu|math|school|qualif|research/, "education"],
    [/certif|course|cs50|alison|harvard|code meet/, "certs"],
    [/\bcv\b|resume/, "cv"],
    [/contact|email|phone|whatsapp|linkedin|github|reach|call|hire|hiring/, "contact"],
    [/open to|available|internship|opportunit|freelance|abroad|job/, "open"],
    [/who|about|introduce|ramzan/, "about"]
  ];
  function reply(q) {
    var s = String(q).toLowerCase().trim();
    for (var i = 0; i < RULES.length; i++) if (RULES[i][0].test(s)) return KB[RULES[i][1]];
    return KB.fallback;
  }
  var api = { reply: reply, KB: KB };
  if (typeof module !== "undefined") module.exports = api;
  if (typeof document === "undefined") return;

  var CHIPS = [["Projects", "projects"], ["Skills", "skills"], ["Experience", "experience"], ["Education", "education"], ["Certificates", "certs"], ["Open to work?", "open"], ["CV", "cv"], ["Contact", "contact"]];
  var css = ".rza-btn{position:fixed;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:150;background:linear-gradient(135deg,#e040fb,#7c3aed,#6366f1);color:#fff;border:0;border-radius:50px;padding:12px 18px;font:600 .9rem Inter,sans-serif;cursor:pointer}" +
    ".rza-panel{position:fixed;right:16px;bottom:calc(72px + env(safe-area-inset-bottom,0px));z-index:150;width:340px;max-width:calc(100vw - 32px);height:460px;max-height:calc(100vh - 110px);display:flex;flex-direction:column;background:#13132b;color:#e2e8f0;border:1px solid rgba(124,58,237,.35);border-radius:16px;overflow:hidden;font:400 .88rem/1.5 Inter,sans-serif}" +
    ".rza-panel[hidden]{display:none}.rza-head{padding:12px 14px;border-bottom:1px solid rgba(124,58,237,.2);display:flex;justify-content:space-between;align-items:center;font-weight:700;color:#fff}" +
    ".rza-x{background:none;border:0;color:#e2e8f0;font-size:1.2rem;cursor:pointer;padding:2px 8px}" +
    ".rza-msgs{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px}" +
    ".rza-m{max-width:88%;padding:8px 12px;border-radius:12px;word-wrap:break-word}.rza-bot{background:rgba(124,58,237,.18);align-self:flex-start}.rza-me{background:#6366f1;color:#fff;align-self:flex-end}" +
    ".rza-m a{display:inline-block;margin:6px 8px 0 0;color:#a5b4fc;font-weight:600}" +
    ".rza-chips{display:flex;flex-wrap:wrap;gap:6px;padding:8px 12px;border-top:1px solid rgba(124,58,237,.15)}" +
    ".rza-chips button{background:transparent;color:#e2e8f0;border:1px solid rgba(124,58,237,.4);border-radius:50px;padding:5px 11px;font:500 .78rem Inter,sans-serif;cursor:pointer}" +
    ".rza-form{display:flex;gap:6px;padding:10px 12px;border-top:1px solid rgba(124,58,237,.2)}" +
    ".rza-form input{flex:1;min-width:0;background:#0a0a1a;color:#e2e8f0;border:1px solid rgba(124,58,237,.3);border-radius:10px;padding:9px 11px;font:inherit}" +
    ".rza-form button{background:#7c3aed;color:#fff;border:0;border-radius:10px;padding:0 14px;font:600 .85rem Inter,sans-serif;cursor:pointer}" +
    ".rza-note{padding:0 12px 8px;color:#8892a4;font-size:.7rem}";

  function init() {
    var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    var btn = document.createElement("button");
    btn.className = "rza-btn"; btn.type = "button"; btn.textContent = "\uD83D\uDCAC Ask about Ramzan";
    btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-controls", "rza-panel");
    var p = document.createElement("div");
    p.className = "rza-panel"; p.id = "rza-panel"; p.hidden = true; p.setAttribute("role", "dialog"); p.setAttribute("aria-label", "Portfolio assistant");
    p.innerHTML = '<div class="rza-head"><span>Portfolio Assistant</span><button class="rza-x" type="button" aria-label="Close assistant">\u00D7</button></div><div class="rza-msgs" aria-live="polite"></div><div class="rza-chips"></div><form class="rza-form"><input type="text" placeholder="Ask about projects, skills..." aria-label="Your question" maxlength="200"><button type="submit">Send</button></form><div class="rza-note">Answers come from the content of this portfolio.</div>';
    document.body.appendChild(btn); document.body.appendChild(p);
    var msgs = p.querySelector(".rza-msgs"), input = p.querySelector("input"), chips = p.querySelector(".rza-chips");
    function add(text, who, links) {
      var m = document.createElement("div"); m.className = "rza-m " + (who === "me" ? "rza-me" : "rza-bot");
      m.appendChild(document.createTextNode(text));
      (links || []).forEach(function (x) {
        var a = document.createElement("a"); a.textContent = x[0]; a.href = x[1];
        if (/^https?:/.test(x[1])) { a.target = "_blank"; a.rel = "noopener"; }
        else if (x[1].charAt(0) === "#") a.addEventListener("click", close);
        m.appendChild(document.createElement("br")); m.appendChild(a);
      });
      msgs.appendChild(m); msgs.scrollTop = msgs.scrollHeight;
    }
    function answer(a) { add(a.t, "bot", a.l); }
    function open() { p.hidden = false; btn.setAttribute("aria-expanded", "true"); if (!msgs.children.length) answer(KB.hello); input.focus(); }
    function close() { p.hidden = true; btn.setAttribute("aria-expanded", "false"); btn.focus(); }
    btn.addEventListener("click", function () { p.hidden ? open() : close(); });
    p.querySelector(".rza-x").addEventListener("click", close);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !p.hidden) close(); });
    CHIPS.forEach(function (c) {
      var b = document.createElement("button"); b.type = "button"; b.textContent = c[0];
      b.addEventListener("click", function () { add(c[0], "me"); answer(KB[c[1]]); });
      chips.appendChild(b);
    });
    p.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault(); var q = input.value.trim(); if (!q) return;
      add(q, "me"); answer(reply(q)); input.value = "";
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
