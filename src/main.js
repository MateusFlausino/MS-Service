const STORAGE_KEY = 'ev-masterclass-guide-v2';

const slideList = (folder, count) => Array.from({ length: count }, (_, index) => `./public/slides/${folder}/${index + 1}.png`);

const modules = [
  {
    id: 'modulo-1',
    title: 'Elétrica básica para veículos',
    shortTitle: 'Elétrica básica',
    icon: 'EV',
    accent: '#38bdf8',
    duration: '4 aulas',
    level: 'Base técnica',
    slides: slideList('modulo-1', 25),
    objectives: ['Criar uma linguagem comum sobre tensão, corrente, resistência e potência.', 'Relacionar grandezas elétricas com sintomas reais em motos elétricas.', 'Treinar o uso seguro do multímetro antes dos diagnósticos avançados.'],
    lessons: [
      ['O idioma da elétrica', '35 min', 'Apresente tensão como pressão elétrica, corrente como fluxo e resistência como oposição. Use analogias rápidas, mas sempre volte para medições reais no veículo.'],
      ['Instrumentos e segurança', '45 min', 'Demonstre escalas do multímetro, polaridade, continuidade e cuidados com curto-circuito.'],
      ['Leitura aplicada', '50 min', 'Conecte os conceitos aos conectores, chicotes, fusíveis, conversores DC-DC e bateria.']
    ],
    writtenMaterial: 'A elétrica da moto deve ser ensinada como uma linguagem de diagnóstico. Primeiro o aluno entende o que cada grandeza representa, depois aprende a medir e por fim interpreta o valor medido dentro do sistema.',
    practice: ['Medir tensão de uma fonte DC.', 'Testar continuidade em cabos.', 'Calcular potência com valores reais.'],
    checklist: ['Seleciona escala correta no multímetro.', 'Explica tensão e corrente.', 'Registra valor esperado e medido.']
  },
  {
    id: 'modulo-2',
    title: 'Chicotes elétricos e conectores',
    shortTitle: 'Chicotes',
    icon: 'CH',
    accent: '#22c55e',
    duration: '3 aulas',
    level: 'Diagnóstico guiado',
    slides: [],
    objectives: ['Mapear conectores, alimentação, terra, sinais e cargas.', 'Identificar padrões de tensão e sintomas de mau contato.', 'Criar documentação técnica de um chicote real.'],
    lessons: [['Mapa do chicote', '40 min', 'Separe alimentação principal, iluminação, comandos, periféricos e comunicação com o controlador.'], ['Pontos de medição', '50 min', 'Defina entrada, saída, terra e sinal para cada conector.'], ['Documento técnico', '60 min', 'Fotografe conectores, numere pinos, registre cores, função e tensão esperada.']],
    writtenMaterial: 'O chicote elétrico organiza a distribuição de energia e sinais da moto. Um bom diagnóstico começa reconhecendo o papel de cada conector.',
    practice: ['Montar tabela de pinos.', 'Medir alimentação, terra e sinal.', 'Simular mau contato.'],
    checklist: ['Conectores principais identificados.', 'Tabela contém pino, fio, função e tensão.', 'Diferencia falta de alimentação, terra e sinal.']
  },
  {
    id: 'modulo-3',
    title: 'Controladores: pinagem, testes e substituição',
    shortTitle: 'Controladores',
    icon: 'CT',
    accent: '#a78bfa',
    duration: '4 aulas',
    level: 'Sistema de potência',
    slides: slideList('modulo-3', 12),
    objectives: ['Entender o controlador como ponte entre bateria, comandos e motor.', 'Interpretar alimentação, acelerador, Hall, fases e periféricos.', 'Definir critérios para testar, substituir e validar.'],
    lessons: [['Arquitetura do controlador', '45 min', 'Mostre entradas, saídas e proteções.'], ['Pinagem e medições', '70 min', 'Passe por alimentação principal, pós-chave, acelerador, Hall e fases.'], ['Substituição controlada', '50 min', 'Valide tensão, potência, tipo de sensor, conectores e lógica dos sinais.']],
    writtenMaterial: 'O controlador recebe energia da bateria e comanda o motor de acordo com acelerador, sensores Hall, freios, proteções e periféricos.',
    practice: ['Identificar conectores.', 'Medir alimentação principal e pós-chave.', 'Criar checklist de substituição.'],
    checklist: ['Reconhece alimentação, fases, Hall e acelerador.', 'Mede sem energizar conectores de forma perigosa.', 'Documenta compatibilidade antes da troca.']
  },
  {
    id: 'modulo-4',
    title: 'Motores brushless: fases e sensores Hall',
    shortTitle: 'Motores BLDC',
    icon: 'MB',
    accent: '#f59e0b',
    duration: '3 aulas',
    level: 'Teste eletromecânico',
    slides: slideList('modulo-4', 12),
    objectives: ['Compreender fases e sensores Hall.', 'Testar continuidade, isolamento e sinais.', 'Diferenciar falha de motor, controlador e chicote.'],
    lessons: [['Motor BLDC na prática', '40 min', 'Explique campos magnéticos e comutação sem excesso de teoria.'], ['Testes de fase', '55 min', 'Demonstre continuidade entre fases e isolamento com carcaça.'], ['Sensores Hall', '55 min', 'Mostre alimentação de 5 V, terra e sinais alternando com a rotação.']],
    writtenMaterial: 'Motores brushless dependem da comutação correta entre fases e da leitura de posição fornecida pelos sensores Hall.',
    practice: ['Medir continuidade entre fases.', 'Verificar isolamento.', 'Observar alternância Hall.'],
    checklist: ['Separa teste de fase de teste Hall.', 'Reconhece Hall travado alto ou baixo.', 'Relatório indica hipótese e próximo teste.']
  },
  {
    id: 'modulo-5',
    title: 'Baterias e BMS: análise técnica e diagnóstico',
    shortTitle: 'Baterias e BMS',
    icon: 'BT',
    accent: '#10b981',
    duration: '5 aulas',
    level: 'Alta responsabilidade',
    slides: slideList('modulo-5', 19),
    objectives: ['Ler etiquetas, tensão nominal, tensão máxima, Ah, Wh e corrente.', 'Diagnosticar desbalanceamento, células mortas e falhas de BMS.', 'Ensinar abertura e montagem com segurança.'],
    lessons: [['Leitura da bateria', '50 min', 'Relacione etiqueta, séries, tensão máxima e capacidade.'], ['Diagnóstico por grupos', '80 min', 'Meça grupos em série, compare tensões e decida a tratativa.'], ['BMS e proteção', '60 min', 'Explique balanceamento e cortes de proteção.'], ['Montagem e solda ponto', '90 min', 'Cubra isolamento, níquel, sequência do BMS e validação final.']],
    writtenMaterial: 'A bateria é o componente de maior energia armazenada no veículo e deve ser tratada com método, EPI e procedimento escrito.',
    practice: ['Interpretar etiquetas.', 'Medir grupos de células.', 'Decidir entre equalizar, trocar grupo, trocar BMS ou descartar.'],
    checklist: ['Calcula tensão máxima de pack 16S como 67,2 V.', 'Identifica grupo desbalanceado.', 'Não abre bateria sem procedimento de segurança.']
  }
];

const defaultPops = [
  {
    id: 'pop-acelerador',
    title: 'POP - Verificação e Manutenção de Acelerador de Veículos Elétricos',
    area: 'Diagnóstico eletrônico e reparação',
    status: 'Modelo base',
    sections: [
      ['1. Objetivo', 'Garantir que o acelerador seja inspecionado, testado e mantido de acordo com parâmetros técnicos e de segurança.'],
      ['2. Campo de Aplicação', 'Oficina de manutenção MS Elétric, setor de diagnóstico eletrônico e reparação.'],
      ['3. Recursos Necessários', 'Multímetro digital, chaves, limpa-contatos, fita isoladora, manga termorretrátil, acelerador de teste e EPI.'],
      ['4. Passo a Passo', 'Desligar disjuntor, suspender roda, inspecionar punho e cabo, medir 5 V de entrada, medir sinal Hall de 0,8 V a 4,2 V e finalizar isolamento.'],
      ['5. Anomalias', 'Motor arrancando sozinho indica possível curto no sinal ou mola sem retorno. Ausência de 5 V indica falha de chicote ou controlador.'],
      ['6. Registros', 'Anotar tensão em repouso, tensão máxima, troca de peça e observações na OS.']
    ]
  }
];

const osAccessoryItems = ['Chave', 'Controle', 'Start Stop', 'Painel Digital', 'Setas Dianteiras', 'Setas Traseiras', 'Pisca Alerta', 'Lanterna Traseira', 'Farolete', 'Farol', 'Luz Alta e Baixa', 'Botão Ré', 'NFC', 'Piloto Automático', 'Alarme', 'Buzina', 'Baú / Trava do Baú', 'Trava Guidão', 'Descanso Lateral', 'Tripe Central', 'Retrovisor Direito', 'Retrovisor Esquerdo', 'Suporte Celular', 'Carregador'];

const app = {
  activeModuleId: 'dashboard',
  activeTab: 'roteiro',
  activePopId: 'pop-acelerador',
  activeOsId: null,
  isSidebarOpen: false,
  query: '',
  slideIndexByModule: {},
  state: readSavedState()
};

function readSavedState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(app.state));
}

function escapeHtml(value) {
  return String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}

function moduleProgress(module) {
  const done = app.state.checklist?.[module.id] || {};
  const total = module.checklist.length;
  const completed = module.checklist.filter((_, index) => done[index]).length;
  return { total, completed, percentage: total ? Math.round((completed / total) * 100) : 0 };
}

function overallProgress() {
  const total = modules.reduce((sum, module) => sum + module.checklist.length, 0);
  const completed = modules.reduce((sum, module) => sum + moduleProgress(module).completed, 0);
  return total ? Math.round((completed / total) * 100) : 0;
}

function allPops() {
  return [...defaultPops, ...(app.state.customPops || [])];
}

function allOrders() {
  return app.state.orders || [];
}

function render() {
  const root = document.getElementById('root');
  const activeModule = modules.find((module) => module.id === app.activeModuleId);
  const sectionTitle = app.activeModuleId === 'dashboard' ? 'Guia de ensino para motos eletricas' : app.activeModuleId === 'pops' ? 'Procedimentos Operacionais Padrão' : app.activeModuleId === 'orders' ? 'Ordens de Serviço' : activeModule.title;
  const sectionSubtitle = app.activeModuleId === 'dashboard' ? 'Painel do instrutor' : app.activeModuleId === 'pops' ? 'Biblioteca da oficina' : app.activeModuleId === 'orders' ? 'Operação da oficina' : activeModule.level;
  root.innerHTML = `
    <div class="app-shell">
      ${app.isSidebarOpen ? '<button aria-label="Fechar menu" class="mobile-scrim" data-action="close-menu"></button>' : ''}
      ${renderSidebar()}
      <main class="main">
        <header class="topbar">
          <button class="icon-button menu-button" data-action="open-menu" aria-label="Abrir menu">☰</button>
          <div><p>${escapeHtml(sectionSubtitle)}</p><h2>${escapeHtml(sectionTitle)}</h2></div>
        </header>
        ${app.activeModuleId === 'dashboard' ? renderDashboard() : app.activeModuleId === 'pops' ? renderPopsPage() : app.activeModuleId === 'orders' ? renderOrdersPage() : renderModule(activeModule)}
      </main>
      ${renderMobileNav()}
    </div>
  `;
  bindEvents();
}

function renderSidebar() {
  return `
    <aside class="sidebar ${app.isSidebarOpen ? 'is-open' : ''}">
      <div class="brand">
        <div class="brand-mark">EV</div>
        <div><h1>EV MasterClass</h1><p>Guia de ensino tecnico</p></div>
        <button class="icon-button close-button" data-action="close-menu" aria-label="Fechar menu">×</button>
      </div>
      <div class="progress-card">
        <div class="between"><span>Progresso geral</span><strong>${overallProgress()}%</strong></div>
        <div class="progress-track"><span style="width:${overallProgress()}%"></span></div>
      </div>
      <button class="nav-item ${app.activeModuleId === 'dashboard' ? 'active' : ''}" data-module="dashboard"><span>▦</span><span>Visao geral</span></button>
      <button class="nav-item ${app.activeModuleId === 'orders' ? 'active' : ''}" data-module="orders"><span>OS</span><span>Ordens de Serviço</span><small>${allOrders().length}</small></button>
      <button class="nav-item ${app.activeModuleId === 'pops' ? 'active' : ''}" data-module="pops"><span>POP</span><span>Procedimentos</span><small>${allPops().length}</small></button>
      <div class="nav-label">Modulos</div>
      <nav class="module-nav">
        ${modules.map((module) => {
          const progress = moduleProgress(module);
          return `<button class="nav-item ${app.activeModuleId === module.id ? 'active' : ''}" data-module="${module.id}"><span style="color:${module.accent};font-weight:900">${module.icon}</span><span>${escapeHtml(module.shortTitle)}</span><small>${progress.percentage}%</small></button>`;
        }).join('')}
      </nav>
    </aside>
  `;
}

function renderMobileNav() {
  return `
    <nav class="mobile-nav" aria-label="Navegação principal">
      <button class="${app.activeModuleId === 'dashboard' ? 'active' : ''}" data-module="dashboard"><span>▦</span><small>Início</small></button>
      <button class="${app.activeModuleId === 'orders' ? 'active' : ''}" data-module="orders"><span>OS</span><small>OS</small></button>
      <button class="${app.activeModuleId === 'pops' ? 'active' : ''}" data-module="pops"><span>POP</span><small>POPs</small></button>
      <button class="${modules.some((module) => module.id === app.activeModuleId) ? 'active' : ''}" data-action="open-menu"><span>☰</span><small>Módulos</small></button>
    </nav>
  `;
}

function renderDashboard() {
  return `
    <section class="content dashboard">
      <div class="hero-panel">
        <div class="hero-copy">
          <span class="eyebrow">Trilha editavel de treinamento</span>
          <h3>Ensine pelo mesmo caminho que o tecnico usa para diagnosticar.</h3>
          <p>Cada módulo combina slides, roteiro, material escrito, prática, POPs e agora Ordens de Serviço para a operação real da oficina.</p>
        </div>
        <div class="hero-metrics"><strong>${overallProgress()}%</strong><span>checklists concluídos</span></div>
      </div>
      <div class="toolbar"><label class="search-box"><span>⌕</span><input id="searchInput" value="${escapeHtml(app.query)}" placeholder="Buscar por tema, diagnostico ou componente" /></label></div>
      <button class="pop-callout os-callout" data-module="orders"><span>OS</span><div><strong>Check-list de entrada e ordem de serviço</strong><p>Registre cliente, veículo, acessórios, avarias, manutenção a realizar e gere resumo para WhatsApp.</p></div></button>
      <button class="pop-callout" data-module="pops"><span>POP</span><div><strong>Biblioteca de procedimentos da oficina</strong><p>Guarde passo a passo, recursos, anomalias, registros e anexos.</p></div></button>
      <div class="module-grid">
        ${modules.map((module) => {
          const progress = moduleProgress(module);
          return `<button class="module-card" data-module="${module.id}"><div class="card-top"><span class="module-icon" style="background:${module.accent}18;color:${module.accent}">${module.icon}</span><span class="badge">${module.duration}</span></div><h4>${escapeHtml(module.title)}</h4><p>${escapeHtml(module.objectives[0])}</p><div class="card-footer"><div class="progress-track"><span style="width:${progress.percentage}%;background:${module.accent}"></span></div><strong>${progress.percentage}%</strong></div><small>${module.slides.length ? `${module.slides.length} slides vinculados` : 'Aguardando slides'}</small></button>`;
        }).join('')}
      </div>
    </section>
  `;
}

function renderModule(module) {
  const progress = moduleProgress(module);
  const tabs = [['roteiro', 'Roteiro'], ['slides', 'Slides'], ['material', 'Material escrito'], ['pratica', 'Pratica'], ['checklist', 'Checklist']];
  return `
    <section class="content module-view">
      <div class="module-hero" style="--accent:${module.accent}"><div><span class="eyebrow">${module.duration} · ${module.level}</span><h3>${escapeHtml(module.title)}</h3><p>${module.objectives.map(escapeHtml).join(' ')}</p></div><div class="completion-ring"><strong>${progress.percentage}%</strong><span>${progress.completed}/${progress.total}</span></div></div>
      <div class="tabs">${tabs.map(([id, label]) => `<button class="${app.activeTab === id ? 'active' : ''}" data-tab="${id}">${label}</button>`).join('')}</div>
      ${renderModuleTab(module)}
    </section>
  `;
}

function renderModuleTab(module) {
  if (app.activeTab === 'slides') return renderSlides(module);
  if (app.activeTab === 'material') return `<div class="panel reading-panel"><h4>Texto base para apostila</h4><p>${escapeHtml(module.writtenMaterial)}</p><textarea id="notesInput" placeholder="Suas anotações">${escapeHtml(app.state.notes?.[module.id] || '')}</textarea></div>`;
  if (app.activeTab === 'pratica') return `<div class="panel"><h4>Atividades de bancada</h4><div class="practice-grid">${module.practice.map((item, index) => `<article class="practice-card"><span>${index + 1}</span><p>${escapeHtml(item)}</p></article>`).join('')}</div></div>`;
  if (app.activeTab === 'checklist') return `<div class="panel"><h4>Checklist de domínio</h4><div class="checklist">${module.checklist.map((item, index) => `<button class="${app.state.checklist?.[module.id]?.[index] ? 'checked' : ''}" data-check="${index}"><span>${app.state.checklist?.[module.id]?.[index] ? '✓' : '○'}</span><span>${escapeHtml(item)}</span></button>`).join('')}</div></div>`;
  return `<div class="two-column"><div class="panel"><h4>Sequência sugerida de aula</h4><div class="lesson-list">${module.lessons.map((lesson, index) => `<article class="lesson-item"><span>${String(index + 1).padStart(2, '0')}</span><div><div class="between"><h5>${escapeHtml(lesson[0])}</h5><small>${escapeHtml(lesson[1])}</small></div><p>${escapeHtml(lesson[2])}</p></div></article>`).join('')}</div></div><div class="panel"><h4>Objetivos</h4><ul class="clean-list">${module.objectives.map((item) => `<li><span>✓</span>${escapeHtml(item)}</li>`).join('')}</ul></div></div>`;
}

function renderSlides(module) {
  const slideIndex = app.slideIndexByModule[module.id] || 0;
  if (!module.slides.length) return '<div class="panel"><div class="empty-state"><h4>Slides ainda não vinculados</h4><p>Adicione PNGs em public/slides para este módulo.</p></div></div>';
  return `<div class="panel slide-panel"><div class="slide-stage"><img src="${module.slides[slideIndex]}" alt="Slide ${slideIndex + 1}" /></div><div class="slide-controls"><button class="icon-text-button" data-action="prev-slide">‹ Anterior</button><span>Slide ${slideIndex + 1} de ${module.slides.length}</span><button class="icon-text-button" data-action="next-slide">Próximo ›</button></div><div class="thumb-strip">${module.slides.map((slide, index) => `<button class="${index === slideIndex ? 'active' : ''}" data-slide="${index}"><img src="${slide}" alt="" /></button>`).join('')}</div></div>`;
}

function renderPopsPage() {
  const pops = allPops();
  const selected = pops.find((pop) => pop.id === app.activePopId) || pops[0];
  app.activePopId = selected.id;
  return `
    <section class="content pops-page">
      <div class="module-hero pop-hero" style="--accent:#f8fafc"><div><span class="eyebrow">Procedimentos da oficina</span><h3>Um lugar para guardar e treinar POPs.</h3><p>Transforme processos de manutenção em documentos repetíveis para a equipe.</p></div><div class="completion-ring"><strong>${pops.length}</strong><span>POPs</span></div></div>
      <div class="pops-layout">
        <aside class="panel pop-list"><div class="section-title"><h4>Biblioteca</h4><span>${pops.length} item(ns)</span></div>${pops.map((pop) => `<button class="${selected.id === pop.id ? 'active' : ''}" data-pop="${pop.id}"><strong>${escapeHtml(pop.title)}</strong><small>${escapeHtml(pop.area)} · ${escapeHtml(pop.status)}</small></button>`).join('')}</aside>
        <article class="panel pop-document"><div class="pop-document-header"><span class="badge">${escapeHtml(selected.status)}</span><h4>${escapeHtml(selected.title)}</h4><div class="pop-meta"><span>Área: ${escapeHtml(selected.area)}</span></div></div><div class="pop-sections">${selected.sections.map((section) => `<section class="pop-section"><h5>${escapeHtml(section[0])}</h5><p>${escapeHtml(section[1])}</p></section>`).join('')}</div></article>
      </div>
      <div class="panel pop-editor"><div class="section-title"><h4>Criar novo POP</h4><span>salvo localmente</span></div><div class="pop-form-grid"><label>Título<input id="popTitleInput" placeholder="Ex: POP - Teste de carregador" /></label><label>Área<input id="popAreaInput" placeholder="Ex: Bancada" /></label></div><label class="pop-body-label">Conteúdo<textarea id="popBodyInput" placeholder="Cole o POP aqui. Separe blocos por linhas em branco."></textarea></label><button class="ghost-button" data-action="save-pop">Salvar POP</button></div>
    </section>
  `;
}

function renderOrdersPage() {
  const orders = allOrders();
  const selected = app.activeOsId ? orders.find((order) => order.id === app.activeOsId) : orders[0];
  return `
    <section class="content orders-page">
      <div class="module-hero os-hero" style="--accent:#38bdf8"><div><span class="eyebrow">OS digital</span><h3>Check-list de entrada da oficina.</h3><p>Baseado na ficha impressa: cliente, WhatsApp, veículo, acessórios, avarias e manutenção a realizar.</p></div><div class="completion-ring"><strong>${orders.length}</strong><span>OS salvas</span></div></div>
      <div class="os-layout">
        <aside class="panel os-list"><div class="section-title"><h4>OS salvas</h4><span>${orders.length}</span></div>${orders.length ? orders.map((order) => `<button class="${selected?.id === order.id ? 'active' : ''}" data-os="${order.id}"><strong>${escapeHtml(order.owner || 'Sem proprietário')}</strong><small>${escapeHtml(order.vehicle || 'Veículo não informado')} · ${new Date(order.createdAt).toLocaleDateString('pt-BR')}</small></button>`).join('') : '<p class="muted">Nenhuma OS salva ainda.</p>'}</aside>
        <div class="panel os-preview">${selected ? renderOrderPreview(selected) : '<div class="empty-state"><h4>Nenhuma OS selecionada</h4><p>Preencha o formulário abaixo para criar a primeira ordem de serviço.</p></div>'}</div>
      </div>
      ${renderOrderForm()}
    </section>
  `;
}

function renderOrderPreview(order) {
  const present = Object.entries(order.accessories || {}).filter(([, value]) => value === 'sim').map(([key]) => key);
  const missing = Object.entries(order.accessories || {}).filter(([, value]) => value === 'nao').map(([key]) => key);
  return `<div class="os-preview-header"><div><span class="badge">${escapeHtml(order.status || 'Entrada')}</span><h4>OS - ${escapeHtml(order.owner || 'Cliente')}</h4></div><div class="os-actions"><button class="ghost-button" data-action="send-whatsapp">Enviar WhatsApp</button><button class="ghost-button danger-button" data-action="delete-os">Excluir OS</button></div></div><div class="os-summary-grid"><span>Telefone: ${escapeHtml(order.phone)}</span><span>WhatsApp: ${escapeHtml(order.whatsapp)}</span><span>Veículo: ${escapeHtml(order.vehicle)}</span><span>Cor: ${escapeHtml(order.color)}</span><span>KM: ${escapeHtml(order.km)}</span><span>Chassi: ${escapeHtml(order.chassis)}</span><span>Capacete: ${escapeHtml(order.helmet)}</span><span>Pneus: ${escapeHtml(order.tires)}</span></div><h5>Acessórios presentes</h5><p>${present.length ? present.map(escapeHtml).join(', ') : 'Não informado'}</p><h5>Acessórios ausentes / avariados</h5><p>${missing.length ? missing.map(escapeHtml).join(', ') : 'Não informado'}</p><h5>Avarias relatadas</h5><p>${escapeHtml(order.damage || 'Sem avarias registradas')}</p><h5>Manutenção a realizar</h5><p>${escapeHtml(order.maintenance || 'Sem itens registrados')}</p><h5>Especificações</h5><p>${escapeHtml(order.specs || 'Sem especificações')}</p>`;
}

function renderOrderForm() {
  return `
    <form class="panel os-form" id="orderForm">
      <div class="section-title"><h4>Nova OS / check-list de entrada</h4><span>salvo localmente</span></div>
      <div class="os-form-grid">
        <label>Proprietário<input name="owner" required /></label>
        <label>Telefone<input name="phone" /></label>
        <label>WhatsApp<input name="whatsapp" /></label>
        <label>Veículo elétrico<input name="vehicle" /></label>
        <label>Cor<input name="color" /></label>
        <label>KM<input name="km" /></label>
        <label>Local da vistoria<input name="inspectionLocation" /></label>
        <label>Chassi<input name="chassis" /></label>
        <label>Capacete<select name="helmet"><option>Não informado</option><option>Sim</option><option>Não</option></select></label>
        <label>Pneus<select name="tires"><option>Não informado</option><option>Novos</option><option>Usados</option><option>Ruins</option></select></label>
      </div>
      <h4>Acessórios / equipamentos existentes</h4>
      <div class="accessory-grid">${osAccessoryItems.map((item) => `<fieldset><legend>${escapeHtml(item)}</legend><label><input type="radio" name="acc-${escapeHtml(item)}" value="sim" /> Sim</label><label><input type="radio" name="acc-${escapeHtml(item)}" value="nao" /> Não</label></fieldset>`).join('')}</div>
      <label>Avarias e/ou danos<textarea name="damage"></textarea></label>
      <div class="os-form-grid"><label>Manutenção a ser realizada<textarea name="maintenance"></textarea></label><label>Especificações<textarea name="specs"></textarea></label></div>
      <button class="ghost-button" type="submit">Salvar OS</button>
    </form>
  `;
}

function bindEvents() {
  document.querySelectorAll('[data-module]').forEach((button) => button.addEventListener('click', () => {
    app.activeModuleId = button.dataset.module;
    app.activeTab = 'roteiro';
    app.isSidebarOpen = false;
    render();
  }));
  document.querySelectorAll('[data-tab]').forEach((button) => button.addEventListener('click', () => {
    app.activeTab = button.dataset.tab;
    render();
  }));
  document.querySelectorAll('[data-action]').forEach((button) => button.addEventListener('click', () => handleAction(button.dataset.action)));
  document.querySelectorAll('[data-slide]').forEach((button) => button.addEventListener('click', () => {
    app.slideIndexByModule[app.activeModuleId] = Number(button.dataset.slide);
    render();
  }));
  document.querySelectorAll('[data-check]').forEach((button) => button.addEventListener('click', () => {
    const moduleId = app.activeModuleId;
    const index = button.dataset.check;
    app.state.checklist = app.state.checklist || {};
    app.state.checklist[moduleId] = app.state.checklist[moduleId] || {};
    app.state.checklist[moduleId][index] = !app.state.checklist[moduleId][index];
    saveState();
    render();
  }));
  document.querySelectorAll('[data-pop]').forEach((button) => button.addEventListener('click', () => {
    app.activePopId = button.dataset.pop;
    render();
  }));
  document.querySelectorAll('[data-os]').forEach((button) => button.addEventListener('click', () => {
    app.activeOsId = button.dataset.os;
    render();
  }));
  document.getElementById('notesInput')?.addEventListener('input', (event) => {
    app.state.notes = app.state.notes || {};
    app.state.notes[app.activeModuleId] = event.target.value;
    saveState();
  });
  document.getElementById('orderForm')?.addEventListener('submit', saveOrder);
}

function saveOrder(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const accessories = {};
  osAccessoryItems.forEach((item) => {
    accessories[item] = data.get(`acc-${item}`) || 'nao-informado';
  });
  const order = {
    id: `os-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: 'Entrada',
    owner: data.get('owner'),
    phone: data.get('phone'),
    whatsapp: data.get('whatsapp'),
    vehicle: data.get('vehicle'),
    color: data.get('color'),
    km: data.get('km'),
    inspectionLocation: data.get('inspectionLocation'),
    chassis: data.get('chassis'),
    helmet: data.get('helmet'),
    tires: data.get('tires'),
    damage: data.get('damage'),
    maintenance: data.get('maintenance'),
    specs: data.get('specs'),
    accessories
  };
  app.state.orders = [order, ...(app.state.orders || [])];
  app.activeOsId = order.id;
  saveState();
  render();
}

function selectedOrder() {
  return allOrders().find((order) => order.id === app.activeOsId) || allOrders()[0];
}

function whatsappText(order) {
  return `Olá! Segue resumo da OS de entrada MS Elétric.\n\nCliente: ${order.owner || '-'}\nVeículo: ${order.vehicle || '-'}\nCor: ${order.color || '-'}\nKM: ${order.km || '-'}\nChassi: ${order.chassis || '-'}\nPneus: ${order.tires || '-'}\nCapacete: ${order.helmet || '-'}\n\nAvarias: ${order.damage || 'sem registro'}\nManutenção solicitada: ${order.maintenance || 'sem registro'}\nEspecificações: ${order.specs || 'sem registro'}\n\nStatus: ${order.status || 'Entrada'}`;
}

function handleAction(action) {
  if (action === 'open-menu') app.isSidebarOpen = true;
  if (action === 'close-menu') app.isSidebarOpen = false;
  if (action === 'prev-slide' || action === 'next-slide') {
    const module = modules.find((item) => item.id === app.activeModuleId);
    const current = app.slideIndexByModule[module.id] || 0;
    const direction = action === 'next-slide' ? 1 : -1;
    app.slideIndexByModule[module.id] = (current + direction + module.slides.length) % module.slides.length;
  }
  if (action === 'save-pop') {
    const title = document.getElementById('popTitleInput')?.value.trim();
    const area = document.getElementById('popAreaInput')?.value.trim();
    const body = document.getElementById('popBodyInput')?.value.trim();
    if (title && body) {
      const pop = { id: `pop-${Date.now()}`, title, area: area || 'Área não informada', status: 'Rascunho', sections: body.split(/\n\s*\n/).map((block, index) => [`Bloco ${index + 1}`, block]) };
      app.state.customPops = [...(app.state.customPops || []), pop];
      app.activePopId = pop.id;
      saveState();
    }
  }
  if (action === 'send-whatsapp') {
    const order = selectedOrder();
    if (order) window.open(`https://wa.me/?text=${encodeURIComponent(whatsappText(order))}`, '_blank');
  }
  if (action === 'delete-os') {
    const order = selectedOrder();
    if (order) {
      app.state.orders = allOrders().filter((item) => item.id !== order.id);
      app.activeOsId = app.state.orders[0]?.id || null;
      saveState();
    }
  }
  render();
}

render();
