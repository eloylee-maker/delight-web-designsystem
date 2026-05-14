// Pattern renderers — each takes a config object, returns HTML string
// for the inner content of a .mock-canvas. The wrapper is added by render().
window.MOCK_PATTERNS = {

  stack(cfg = {}) {
    const cards = cfg.cards || [
      { tag: 'CONCEPT', title: 'Memory that learns', body: 'Understands the customer better with every conversation.' },
      { tag: 'APPLY',   title: 'Personal context',  body: 'Auto-links order history, preferences, and the prior ticket.' },
      { tag: 'OUTCOME', title: '+34% resolution',   body: 'Share of issues resolved without a follow-up.' }
    ];
    return `<div class="p-stack">${cards.map((c, i) => `
      <div class="p-stack-card">
        <span class="m-pill">${c.tag}</span>
        <h3>${c.title}</h3>
        <p>${c.body}</p>
        ${c.list ? `<hr/><ul>${c.list.map(l => `<li>${l}</li>`).join('')}</ul>` : ''}
      </div>
      ${i < cards.length - 1 ? '<div class="m-conn"></div>' : ''}
    `).join('')}</div>`;
  },

  numlist(cfg = {}) {
    const items = cfg.items || [
      { title: 'Identify the customer',  body: 'Unify account, session, and device into one profile.' },
      { title: 'Recall recent context',  body: 'Surface behavior and tickets from the last 24 hours first.' },
      { title: 'Apply intent',           body: 'Combine current message intent with unresolved past intent.' },
      { title: 'Generate response',      body: 'Reply on brand voice and inside policy guardrails.' }
    ];
    return `<div class="p-numlist">${items.map((it, i) => `
      <div class="p-numlist-row">
        <span class="m-num">${i + 1}</span>
        <div>
          <h4>${it.title}</h4>
          <p>${it.body}</p>
        </div>
      </div>
    `).join('')}</div>`;
  },

  stepbar(cfg = {}) {
    const steps = cfg.steps || [
      { title: 'Map the workflow',          body: 'Define the 5-step flow the agent will run.' },
      { title: 'Connect the source of truth', body: 'Wire CRM, order DB, and policy docs through RAG.' },
      { title: 'Tune the policy',           body: 'Iterate on exceptions, escalation, and tone.' },
      { title: 'Watch quality drift',       body: 'Watchtower QA auto-grades a 1% sample every day.' }
    ];
    const iters = cfg.iters || [
      { label: 'Iteration 01', pct: 100, done: true },
      { label: 'Iteration 02', pct: 100, done: true },
      { label: 'Iteration 03', pct: 72,  done: false },
    ];
    return `
      <div class="p-stepbar">
        <h3>${cfg.title || 'How it ships'}</h3>
        <div class="p-stepbar-list">
          ${steps.map((s, i) => `
            <div class="p-stepbar-row">
              <span class="m-num">${i + 1}</span>
              <div><h5>${s.title}</h5><p>${s.body}</p></div>
            </div>`).join('')}
        </div>
        <div class="p-stepbar-inner">
          <h6>${cfg.innerTitle || 'Quality benchmark'}</h6>
          ${iters.map(it => `
            <div class="p-stepbar-iter ${it.done ? 'done' : ''}">
              <span class="dot"></span>
              <span class="label">${it.label}</span>
              <span class="bar"><i style="--pct:${it.pct}%"></i></span>
              <span class="pct">${it.pct}%</span>
            </div>`).join('')}
        </div>
        <div class="p-stepbar-cta">${cfg.cta || 'Ship to production →'}</div>
      </div>`;
  },

  stats(cfg = {}) {
    const items = cfg.items || [
      { num: '7B+',   caption: 'Messages handled / yr' },
      { num: '300M+', caption: 'Monthly active users' },
      { num: '99.9%', caption: 'Enterprise uptime' }
    ];
    const cols = cfg.cols || items.length;
    return `<div class="p-stats" data-cols="${cols}">
      ${items.map(it => `
        <div class="p-stat-card">
          <div class="p-stat-num">${it.num}</div>
          <div>
            <hr/>
            <p>${it.caption}</p>
          </div>
        </div>`).join('')}
    </div>`;
  },

  quote(cfg = {}) {
    const c = Object.assign({
      pill: 'CUSTOMER STORY',
      quote: '“After the AI concierge launched, we started — for the first time — to remember every customer.”',
      author: 'Hannah Park',
      role: 'VP of CX, Match Group',
      img: ''
    }, cfg);
    return `<div class="p-quote">
      <div class="p-quote-img ${c.img ? '' : 'placeholder'}" style="${c.img ? `background-image:url('${c.img}')` : ''}"></div>
      <div class="p-quote-body">
        <span class="m-pill">${c.pill}</span>
        <blockquote>${c.quote}</blockquote>
        <div class="p-quote-author">${c.author}<span class="role">${c.role}</span></div>
      </div>
    </div>`;
  },

  iflow(cfg = {}) {
    const c = Object.assign({
      title: 'Trigger → Reason → Resolve',
      steps: [
        { icon: '◐', title: 'Listen',  body: 'Decompose each message into intent, sentiment, and urgency.' },
        { icon: '◇', title: 'Reason',  body: 'Combine memory, policy, and tools to plan an action.' },
        { icon: '▷', title: 'Act',     body: 'Generate the reply and call external systems in the same turn.' }
      ],
      triggerPill: 'EXAMPLE TRIGGER',
      triggerBody: '“When will my refund be processed?” — payment lookup + policy answer + a follow-up reminder, all in one turn.'
    }, cfg);
    return `<div class="p-iflow">
      <h3 class="p-iflow-title">${c.title}</h3>
      <div class="p-iflow-steps">
        ${c.steps.map(s => `
          <div class="p-iflow-step">
            <div class="p-iflow-icon">${s.icon}</div>
            <div><h4>${s.title}</h4><p>${s.body}</p></div>
          </div>`).join('')}
      </div>
      <div class="p-iflow-trigger">
        <span class="m-pill lime">${c.triggerPill}</span>
        <p>${c.triggerBody}</p>
      </div>
    </div>`;
  },

  cmp(cfg = {}) {
    const c = Object.assign({
      title: 'Before delight.ai vs. Now',
      rows: [
        { label: 'First response', before: 'avg 4 min, 30+ at night', now: '< 5 sec, 24/7' },
        { label: 'Resolution rate', before: '57% — many follow-ups', now: '89% — closed in one turn' },
        { label: 'Personalization', before: 'templated reply', now: 'memory-driven, tailored' }
      ]
    }, cfg);
    return `<div class="p-cmp">
      <h3 class="p-cmp-title">${c.title}</h3>
      <div class="p-cmp-table">
        <div class="p-cmp-head">
          <div></div>
          <div><span class="m-pill">BEFORE</span></div>
          <div><span class="m-pill lime">NOW</span></div>
        </div>
        ${c.rows.map(r => `
          <div class="p-cmp-row">
            <div class="label">${r.label}</div>
            <div class="before">${r.before}</div>
            <div class="now">${r.now}</div>
          </div>`).join('')}
      </div>
    </div>`;
  },

  panels(cfg = {}) {
    const items = cfg.items || [
      { tag: 'PANEL 1', title: 'See the customer', body: 'Pull every signal stored in memory into one screen.' },
      { tag: 'PANEL 2', title: 'Decide together',  body: 'AI suggests, the human approves — a co-pilot model.' },
      { tag: 'PANEL 3', title: 'Learn from each turn', body: 'Each outcome flows back into memory.' }
    ];
    let html = '<div class="p-panels">';
    items.forEach((it, i) => {
      html += `<div class="p-panel">
        <span class="m-pill">${it.tag}</span>
        <h3>${it.title}</h3>
        <p>${it.body}</p>
      </div>`;
      if (i < items.length - 1) html += '<div class="m-conn-h"></div>';
    });
    return html + '</div>';
  },

  window(cfg = {}) {
    const c = Object.assign({
      title: 'app.delight.ai',
      body: `<div style="font:500 96px/1 'Serrif',serif;text-align:center;padding:80px 0 32px;letter-spacing:-0.04em;">+34%</div>
             <p style="text-align:center;margin:0;font:400 22px/1.4 'Helvetica Now Text',sans-serif;color:#6B6258;">resolution rate after switching to memory-aware agents</p>`
    }, cfg);
    return `<div class="p-window">
      <div class="p-window-bar">
        <div class="lights"><span></span><span></span><span></span></div>
        <div class="title">${c.title}</div>
      </div>
      <div class="p-window-body">${c.body}</div>
    </div>`;
  }
};

// Public render fn
window.renderMock = function(patternId, cfg) {
  const fn = window.MOCK_PATTERNS[patternId];
  if (!fn) return `<div style="padding:80px;text-align:center;color:#9E9890">No renderer for "${patternId}"</div>`;
  return fn(cfg || {});
};
