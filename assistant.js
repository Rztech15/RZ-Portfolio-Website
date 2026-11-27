/* Portfolio assistant: answers questions about Muhammad Ramzan from the content below.
   No server, no API key. To change an answer, edit the text in KB. */
(function () {
  var L = {
    agent: ["Live demo", "https://rz-data-analytics-ai-agent.vercel.app/"],
    fin: ["Live demo", "https://finsight-ai-mrzb.vercel.app/"],
    stock: ["Live demo", "https://stock-flow-api-iota.vercel.app/"],
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
    about: { t: "Muhammad Ramzan is a mathematician, data analyst and software developer from Multan, Pakistan, with a mathematics degree in progress at Bahauddin Zakariya University. He leads the Future Builders group and is an executive member of the Zakariyan Google Developer Club (ZGDC). His tagline: Where Mathematics Meets Technology.", l: [["About section", "#about"]] },
    projects: { t: "Main projects: FinSight AI (FinTech, live), RZ Data Analytics AI Agent (live), StockFlow (inventory software, live), AI SkillBridge (live, team project), RZ Commerce (live store), a Linear Regression model built from scratch, and a Pakistani Companies Analysis dashboard. Ask about any of them by name.", l: [["See all projects", "#projects"]] },
    finsight: { t: "FinSight AI is an AI-powered financial intelligence platform that turns financial data into meaningful business insights and supports better financial decisions. It is one of Ramzan's featured FinTech projects.", l: [L.fin, ["GitHub", "https://github.com/Rztech15/FinSight-AI"]] },
    agent: { t: "RZ Data Analytics AI Agent: upload a CSV, Excel, or JSON file and get instant dashboards, anomaly detection, and an AI analyst that computes exact answers across the whole dataset, with SQL and report generation. Built with Gemini, Supabase, Vercel, and JavaScript, and installable as a PWA.", l: [L.agent, ["GitHub", "https://github.com/Rztech15/RZ-DATA-ANALYTICS-AI-AGENT"]] },
    stockflow: { t: "StockFlow is inventory and stock management software for small businesses. It helps manage products, stock movement and business records. The MySQL schema uses triggers that update stock automatically and block overselling, and the dashboard shows low-stock alerts.", l: [L.stock, ["GitHub", "https://github.com/Rztech15/StockFlow"]] },
    skillbridge: { t: "AI SkillBridge is an AI-powered career platform that analyzes a user's education, skills, interests, and goals to build a personalized career roadmap. It was built by the Future Builders team, and Ramzan was the Backend Lead.", l: [L.skill] },
    commerce: { t: "RZ Commerce is Ramzan's own online skincare store, with a product slider, cart, and WhatsApp checkout. He designs, builds, and runs it.", l: [L.comm, ["GitHub", "https://github.com/Rztech15/RZ-Commerce"]] },
    regression: { t: "The Linear Regression project predicts student marks. It was built from scratch in Python and NumPy using multivariate linear regression and gradient descent, without scikit-learn.", l: [["GitHub", "https://github.com/Rztech15/Linear-Regression-Student-Marks"]] },
    student: { t: "Student Performance Analysis looks for patterns between study habits, attendance, and grades using Python, pandas, matplotlib, and numpy, with 4 key visualizations.", l: [["GitHub", "https://github.com/Rztech15/Student-Performance-Analysis"]] },
    conference: { t: "Ramzan analyzed the financial data of Pakistan's top companies (PSO, OGDCL, HBL, UBL, Meezan Bank, Lucky Cement) in an Excel dashboard and presented the research as a poster at the international conference FICPFSIT-2026.", l: [["GitHub", "https://github.com/Rztech15/Pakistan_Companies_Data_Analysis"]] },
    zgdc: { t: "Ramzan is currently an executive member of the Zakariyan Google Developer Club (ZGDC), working in recruitment.", l: [["Experience section", "#experience"]] },
    skills: { t: "Programming and backend: Python, JavaScript, SQL and MySQL, Supabase. Data analytics: pandas, NumPy, Matplotlib, Excel dashboards, Pivot Tables and Power Query. AI: machine learning, Scikit-learn, Gemini API, gradient descent from scratch. Web: HTML/CSS, React, Next.js, PWA. Tools: Git and GitHub, Jupyter, Maple, Vercel. Mathematics: statistics, linear algebra and numerical analysis.", l: [["Skills section", "#skills"]] },
    experience: { t: "Executive Member at the Zakariyan Google Developer Club (ZGDC), currently, in recruitment. Group Lead at Future Builders (2026 - present). Founder and E-Commerce Manager at RZ Commerce (2025 - present). Data Analyst and Python Developer (2024 - present).", l: [["Experience section", "#experience"]] },
    education: { t: "BS Mathematics at CASPAM, Department of Mathematics, Bahauddin Zakariya University, Multan (2024-2028). Intermediate in Pre-Engineering (2024) and Matriculation (2022). Research interests include complex analysis, operator theory, topological dynamics, abstract algebra, and computational modeling.", l: [["Education section", "#education"]] },
    certs: { t: "Conference: FICPFSIT-2026 research poster and participation, a Certificate of Appreciation from the Department of Mathematics, BZU Multan, and the Code Meet seminar. Courses: HarvardX CS50 Introduction to Computer Science and Alison Business Analytics, which are personal learning milestones, not official certificates.", l: [["Achievements section", "#achievements"]] },
    cv: { t: "You can download Ramzan's CV as a PDF.", l: [L.cv] },
    contact: { t: "Email: ramzanbalochmrbaloch@gmail.com. Phone and WhatsApp: 0320-7895540. Based in Multan, Pakistan. You can also use the contact form on this page.", l: [L.mail, L.wa, L.li, L.gh, ["Contact form", "#contact"]] },
    open: { t: "Ramzan is currently building AI and data products with Future Builders and welcomes collaborations and project discussions.", l: [L.mail, ["Contact form", "#contact"]] },
    fallback: { t: "I can only answer questions about Muhammad Ramzan's portfolio: projects, skills, experience, education, certificates, CV, and contact. Try one of the topics below, or use the contact form for anything else.", l: [["Contact form", "#contact"]] }
  };
  var RULES = [
    [/^(hi|hello|hey|salam|assalam)\b/, "hello"],
    [/finsight|fintech|financial intelligence/, "finsight"],
    [/skillbridge|skill bridge|career platform/, "skillbridge"],
    [/commerce|store|shop|skincare|glutawol/, "commerce"],
    [/stockflow|inventory|stock/, "stockflow"],
    [/agent|analytics ai|gemini|dashboard/, "agent"],
    [/regression|gradient|from scratch/, "regression"],
    [/student performance/, "student"],
    [/zgdc|zakriyan|zakariyan|developer club|google developer|recruit/, "zgdc"],
    [/pakistan|compan|conference|poster|ficpf/, "conference"],
    [/project|built|build|demo|portfolio/, "projects"],
    [/skill|tech|stack|language|tool|python|javascript|react|sql|excel|next/, "skills"],
    [/experience|worked|role|lead|future builders|job history/, "experience"],
    [/educat|study|degree|universit|bzu|math|school|qualif|research/, "education"],
    [/certif|course|cs50|alison|harvard|code meet|award|appreciation/, "certs"],
    [/\bcv\b|resume/, "cv"],
    [/contact|email|phone|whatsapp|linkedin|github|reach|call|hire|hiring/, "contact"],
    [/open to|available|internship|opportunit|freelance|job/, "open"],
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

  var CHIPS = [["Projects", "projects"], ["Skills", "skills"], ["Experience", "experience"], ["Education", "education"], ["Certificates", "certs"], ["Collaborate", "open"], ["CV", "cv"], ["Contact", "contact"]];
  var METAL = "linear-gradient(135deg,#E1E5E9,#AEB6BD 55%,#8A9299)";
  var css = ".rza-btn{position:fixed;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:150;background:rgba(31,31,35,.92);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);color:#E1E5E9;border:0;border-radius:12px;padding:12px 20px;font:600 .9rem Inter,sans-serif;letter-spacing:.02em;cursor:pointer;box-shadow:0 10px 28px rgba(0,0,0,.5)}" +
    ".rza-panel{position:fixed;right:16px;bottom:calc(72px + env(safe-area-inset-bottom,0px));z-index:150;width:340px;max-width:calc(100vw - 32px);height:460px;max-height:calc(100vh - 110px);display:flex;flex-direction:column;background:rgba(31,31,35,.94);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);color:#F8FAFC;border:1px solid #41454B;border-radius:14px;overflow:hidden;box-shadow:0 18px 44px rgba(0,0,0,.55);font:400 .88rem/1.5 Inter,sans-serif}" +
    ".rza-panel[hidden]{display:none}.rza-head{padding:12px 14px;border-bottom:1px solid #41454B;display:flex;justify-content:space-between;align-items:center;font-weight:700;color:#E1E5E9}" +
    ".rza-x{background:none;border:0;color:#E1E5E9;font-size:1.2rem;cursor:pointer;padding:2px 8px}" +
    ".rza-msgs{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px}" +
    ".rza-m{max-width:88%;padding:8px 12px;border-radius:12px;word-wrap:break-word}.rza-bot{background:#292B30;border:1px solid #41454B;align-self:flex-start}.rza-me{background:#AEB6BD;color:#0D0D0F;align-self:flex-end}" +
    ".rza-m a{display:inline-block;margin:6px 8px 0 0;color:#E1E5E9;font-weight:600;text-underline-offset:3px}" +
    ".rza-chips{display:flex;flex-wrap:wrap;gap:6px;padding:8px 12px;border-top:1px solid #41454B}" +
    ".rza-chips button{background:transparent;color:#E1E5E9;border:1px solid #41454B;border-radius:8px;padding:5px 11px;font:500 .78rem Inter,sans-serif;cursor:pointer;transition:border-color .2s}.rza-chips button:hover{border-color:#AEB6BD}" +
    ".rza-form{display:flex;gap:6px;padding:10px 12px;border-top:1px solid #41454B}" +
    ".rza-form input{flex:1;min-width:0;background:#0D0D0F;color:#F8FAFC;border:1px solid #41454B;border-radius:8px;padding:9px 11px;font:inherit}.rza-form input:focus{outline:none;border-color:#AEB6BD}" +
    ".rza-form button{background:" + METAL + ";color:#0D0D0F;border:0;border-radius:8px;padding:0 14px;font:600 .85rem Inter,sans-serif;cursor:pointer}" +
    ".rza-btn:focus-visible,.rza-x:focus-visible,.rza-chips button:focus-visible,.rza-form button:focus-visible{outline:2px solid #E1E5E9;outline-offset:2px}" +
    ".rza-note{padding:0 12px 8px;color:#71717A;font-size:.7rem}" +
    ".rza-btn::after,.rza-panel::after{content:\"\";position:absolute;inset:0;border-radius:inherit;padding:1.5px;pointer-events:none;background:linear-gradient(105deg,transparent 40%,#fff 50%,transparent 60%) 0 0/250% 100% no-repeat,linear-gradient(135deg,#8A9299,#41454B 50%,#8A9299);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude;animation:rzashine 16s linear infinite}" +
    "@keyframes rzashine{from{background-position:150% 0,0 0}to{background-position:-50% 0,0 0}}@media(prefers-reduced-motion:reduce){.rza-btn::after,.rza-panel::after{animation:none}}";

  function init() {
    var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    var btn = document.createElement("button");
    btn.className = "rza-btn"; btn.type = "button"; btn.textContent = "\u2726 Ask My Assistant";
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
