import React, { useEffect, useRef } from 'react';
import { 
  ArrowUpRight, Play, CheckCircle2, Bot, Layers, BarChart, 
  ShieldAlert, Cpu, Database, Fingerprint, GitPullRequest, 
  Workflow, Zap, Link2, MessageSquare, TerminalSquare, Search,
  Menu, X, Box, ArrowRight
} from 'lucide-react';
import './App.css';



const BrandLogo = ({ size = "normal" }) => (
  <div className={`matte-logo ${size === 'small' ? 'small' : ''}`}>
    <div className="matte-m">m</div>
    <div className="matte-arrow"><ArrowUpRight strokeWidth={4} /></div>
    <div className="matte-tte">tte</div>
  </div>
);

const Nav = () => (
  <nav className="nav">
    <BrandLogo />
    <div className="nav-links">
      <a href="#solucoes">Soluções</a>
      <a href="#como-funciona">Como funciona</a>
      <a href="#plataforma">Plataforma</a>
      <a href="#contato">Contato</a>
    </div>
    <div className="nav-actions">
      <a href="#" className="login-link">Login</a>
      <button className="btn btn-primary">Começar <ArrowRight size={16}/></button>
    </div>
  </nav>
);

const DashboardMockup = () => (
  <div className="db-mockup">
    <div className="db-header bg-darker">
      <div className="db-dots">
        <div className="db-dot" style={{background: '#EF4444'}}></div>
        <div className="db-dot" style={{background: '#EAB308'}}></div>
        <div className="db-dot" style={{background: '#22C55E'}}></div>
      </div>
      <div className="db-tabs">
        <div className="db-tab active">Overview</div>
        <div className="db-tab">Workflows</div>
        <div className="db-tab">Agents</div>
      </div>
    </div>
    <div className="db-body bg-dark">
      <div className="db-sidebar">
        <div className="db-sidebar-icon"></div>
        <div className="db-sidebar-icon"></div>
        <div className="db-sidebar-icon"></div>
      </div>
      <div className="db-content">
        <div className="wf-node primary absolute" style={{ top: '20%', left: '10%' }}>
          <Database size={14}/> <span>Stripe Webhook</span>
        </div>
        <div className="wf-node ai absolute" style={{ top: '50%', left: '40%', transform: 'translateY(-50%)' }}>
          <Bot size={14}/> <span>AI Extraction</span>
        </div>
        <div className="wf-node action absolute" style={{ top: '20%', right: '10%' }}>
          <Box size={14}/> <span>Update CRM</span>
        </div>
        <div className="wf-node action absolute" style={{ top: '80%', right: '10%' }}>
          <MessageSquare size={14}/> <span>Slack Alert</span>
        </div>
        <svg style={{position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:0}}>
           <path d="M 120 120 Q 200 120 200 250 T 260 250" stroke="var(--border-highlight)" fill="none" strokeWidth="2"/>
           <path d="M 380 250 Q 450 250 450 120 T 520 120" stroke="var(--border-highlight)" fill="none" strokeWidth="2"/>
           <path d="M 380 250 Q 450 250 450 380 T 520 380" stroke="var(--border-highlight)" fill="none" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="hero-section wrapper container">
      <div className="hero-grid">
        <div className="hero-content reveal">
          <h1 className="hero-title">Automação inteligente <br/><span className="text-gradient">para empresas modernas.</span></h1>
          <p className="hero-subtitle">Automatize processos, conecte ferramentas e deixe a inteligência artificial otimizar seu negócio.</p>
          <div className="hero-actions">
            <button className="btn btn-primary pulse-hover">Começar agora <ArrowRight size={16}/></button>
            <button className="btn btn-phantom"><Play size={16}/> Ver demonstração</button>
          </div>
        </div>
        <div className="hero-visual reveal delay-200">
          <div className="hero-mockup-wrapper">
            <div className="glow-orb magenta" style={{top: '10%', right: '20%'}}></div>
            <div className="glow-orb indigo" style={{bottom: '-10%', left: '10%'}}></div>
            <div className="mockup-3d-pane">
               <DashboardMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => (
  <div className="social-proof">
    <div className="container">
      <p className="social-proof-title">Empresas inovadoras já estão automatizando com a MATTE.</p>
      <div className="logos-flex reveal">
        <div className="logo-placeholder"><Layers size={20}/> ACME Corp</div>
        <div className="logo-placeholder"><Zap size={20}/> NovaTech</div>
        <div className="logo-placeholder"><Box size={20}/> Vertex</div>
        <div className="logo-placeholder"><Workflow size={20}/> Lumina</div>
        <div className="logo-placeholder"><Database size={20}/> Synthetica</div>
      </div>
    </div>
  </div>
);

const RealProductSection = () => {
  return (
    <section className="section" id="plataforma">
      <div className="container">
        <div className="section-header center reveal">
          <h2 className="section-title">Veja a MATTE em ação.</h2>
          <p className="section-subtitle">Uma interface projetada para velocidade. Construa fluxos complexos, visualize dados em tempo real e gerencie integrações no mesmo ambiente.</p>
        </div>
        
        <div className="editorial-grid">
          <div className="ed-col left">
            <div className="ed-card big reveal">
              <div className="ed-card-inner">
                 <div className="ed-card-header">
                   <h3>Automation Builder</h3>
                   <p>Ambiente drag-and-drop avançado para engenheiros e operadores.</p>
                 </div>
                 <div className="ed-mockup-wrapper" style={{background: 'var(--surface-mid)'}}>
                    <div style={{padding:'24px', opacity: 0.5}}>
                       <div style={{width:'80%', height:'8px', background: 'var(--border-highlight)', borderRadius:'4px', marginBottom:'16px'}}></div>
                       <div style={{width:'60%', height:'8px', background: 'var(--border-highlight)', borderRadius:'4px', marginBottom:'32px'}}></div>
                       {/* abstract nodes */}
                       <div className="wf-node" style={{marginBottom:'16px'}}><CheckCircle2 size={14}/> Acionador: Cron Schedule</div>
                       <div className="wf-edge" style={{height:'24px', margin:'0 0 0 24px'}}></div>
                       <div className="wf-node ai"><Bot size={14}/> Ação: Gerar Relatório IA</div>
                    </div>
                 </div>
              </div>
            </div>
            <div className="ed-card small reveal delay-100">
              <div className="ed-card-inner">
                 <div className="ed-card-header">
                   <h3>Agent Logging</h3>
                   <p>Acompanhe todos os prompts e decisões da IA em tempo real.</p>
                 </div>
                 <div className="ed-mockup-wrapper">
                    <div style={{padding:'24px', fontSize:'12px', fontFamily:'monospace', color:'var(--text-secondary)'}}>
                       [10:42:01] INFO  Agent started extraction<br/>
                       [10:42:03] <span style={{color:'var(--tech-accent)'}}>EXEC</span> Parsed 14 entities from PDF<br/>
                       [10:42:04] INFO  Sending payload to CRM API...<br/>
                       [10:42:05] <span style={{color:'#22C55E'}}>SUCCESS</span> Operation completed.
                    </div>
                 </div>
              </div>
            </div>
          </div>
          <div className="ed-col right">
            <div className="ed-card small reveal">
              <div className="ed-card-inner">
                 <div className="ed-card-header">
                   <h3>Integrações Nativas</h3>
                   <p>Conecte as ferramentas que sua equipe já usa em segundos.</p>
                 </div>
                 <div className="ed-mockup-wrapper" style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'16px'}}>
                    <div className="wf-node"><MessageSquare size={16}/> Slack</div>
                    <div className="wf-node"><Box size={16}/> Notion</div>
                    <div className="wf-node"><Database size={16}/> Postgres</div>
                 </div>
              </div>
            </div>
            <div className="ed-card big reveal delay-100">
              <div className="ed-card-inner">
                 <div className="ed-card-header">
                   <h3>Insights</h3>
                   <p>Métricas consolidadas do impacto da automação no seu negócio.</p>
                 </div>
                 <div className="ed-mockup-wrapper" style={{position:'relative'}}>
                    <div style={{position:'absolute', bottom:0, width:'100%', height:'60%', background:'linear-gradient(to top, var(--primary-accent), transparent)', opacity: 0.1}}></div>
                    <div style={{padding:'32px'}}>
                       <p style={{color:'var(--text-tertiary)', fontSize:'0.85rem'}}>Horas economizadas (7d)</p>
                       <h4 style={{fontSize:'3rem', letterSpacing:'-2px', color:'var(--text-primary)'}}>342.5h <span style={{fontSize:'1rem', color:'#22C55E'}}>+12%</span></h4>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const UseCases = () => {
  return (
    <section className="section" id="solucoes">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Como empresas usam a MATTE.</h2>
          <p className="section-subtitle dec-width">Casos de uso desenhados para impacto imediato em diferentes áreas da sua operação.</p>
        </div>
        
        <div className="bento-grid">
           <div className="bento-card large reveal">
             <div className="bento-icon accent"><BarChart size={24}/></div>
             <div className="bento-text">
               <h3>Automação de vendas</h3>
               <p>Qualifique leads automaticamente, enriqueça dados de CRM em tempo real e crie rascunhos de e-mails de prospecção hiper-personalizados baseados no histórico do cliente usando IA.</p>
             </div>
             <div className="bento-large-visual">
                <div style={{padding:'8px', background:'var(--surface-light)', borderRadius:'6px', fontSize:'0.75rem', color:'var(--text-secondary)'}}>
                  Lead MQL detectado no Stripe
                </div>
                <div style={{padding:'8px', background:'var(--surface-mid)', border:'1px solid var(--primary-accent)', borderRadius:'6px', fontSize:'0.75rem', color:'var(--text-primary)'}}>
                  <Bot size={12} style={{display:'inline', marginRight:'4px'}}/>
                  IA gerando briefing executivo...
                </div>
                <div style={{padding:'8px', background:'var(--surface-light)', borderRadius:'6px', fontSize:'0.75rem', color:'var(--text-secondary)'}}>
                  Enviado para Slack #vendas
                </div>
             </div>
           </div>
           
           <div className="bento-card reveal delay-100">
             <div className="bento-icon tech"><MessageSquare size={24}/></div>
             <div className="bento-text">
               <h3>Atendimento inteligente</h3>
               <p>Responda chamados de suporte instantaneamente usando agentes treinados na sua base de conhecimento corporativa.</p>
             </div>
           </div>
           
           <div className="bento-card reveal delay-200">
             <div className="bento-icon"><Workflow size={24}/></div>
             <div className="bento-text">
               <h3>Processos internos</h3>
               <p>Desde o onboarding automatizado de novos colaboradores até complexas aprovações financeiras multietapa.</p>
             </div>
           </div>
        </div>
      </div>
    </section>
  )
};

const FounderSection = () => (
  <section className="section">
    <div className="container">
      <div className="founder-grid">
        <div className="founder-photo-area reveal">
           <div className="founder-frame">
             <img src="/image.png" alt="Pedro Soares" loading="lazy" className="founder-img" />
           </div>
           <div className="glow-orb magenta" style={{top: '50%', right: '-20%'}}></div>
        </div>
        <div className="founder-text-area reveal delay-100">
          <h2 className="section-title">Criada para empresas que querem escalar com inteligência.</h2>
          <div className="founder-quote">
            "A inovação genuína não trata de substituir humanos, mas de elevar sua capacidade. Criamos a MATTE para ser o motor invisível das empresas mais eficientes do mundo."
          </div>
          <div className="founder-meta">
            <div>
              <div className="founder-name">Pedro Soares</div>
              <div className="founder-role">CEO & Founder, MATTE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const IntegrationsSection = () => (
  <section className="section" style={{overflow:'hidden', paddingBottom:'200px'}}>
    <div className="container text-center reveal">
        <h2 className="section-title">Conectado ao seu ecossistema.</h2>
        <p className="section-subtitle" style={{margin:'0 auto 80px', maxWidth:'500px'}}>Centenas de integrações nativas mais suporte direto a Webhooks e chamadas REST API.</p>
      <div className="integrations-wrapper">
         <div className="integ-center">
            <BrandLogo size="small" />
         </div>
         <svg className="integ-lines" viewBox="0 0 800 400">
            {/* abstract connection lines radiating out */}
            <path d="M 400 200 L 250 50" stroke="var(--border-highlight)" fill="none" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M 400 200 L 200 280" stroke="var(--border-highlight)" fill="none" strokeWidth="2" strokeDasharray="4 4"/>
            <path d="M 400 200 L 600 80" stroke="var(--border-highlight)" fill="none" strokeWidth="2" strokeDasharray="4 4"/>
            <path d="M 400 200 L 550 350" stroke="var(--border-highlight)" fill="none" strokeWidth="2" strokeDasharray="4 4"/>
         </svg>
         <div className="integ-node n1"><MessageSquare size={20}/></div>
         <div className="integ-node n2"><Database size={20}/></div>
         <div className="integ-node n3"><Cpu size={20}/></div>
         <div className="integ-node n4"><TerminalSquare size={20}/></div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
     <div className="container">
        <div className="footer-top">
           <div className="footer-brand">
             <BrandLogo />
             <p className="footer-tagline">Onde automação encontra inteligência.</p>
           </div>
           <div className="footer-links-grid">
             <div className="ft-col">
               <h4>Produto</h4>
               <a href="#">Workflow Builder</a>
               <a href="#">AI Agents</a>
               <a href="#">Analytics</a>
               <a href="#">Integrations</a>
               <a href="#">Preços</a>
             </div>
             <div className="ft-col">
               <h4>Company</h4>
               <a href="#">Sobre nós</a>
               <a href="#">Clientes</a>
               <a href="#">Carreiras</a>
               <a href="#">Blog</a>
             </div>
             <div className="ft-col">
               <h4>Recursos</h4>
               <a href="#">Documentação</a>
               <a href="#">API Reference</a>
               <a href="#">Comunidade</a>
               <a href="#">Help Center</a>
             </div>
             <div className="ft-col">
               <h4>Contato</h4>
               <a href="#">Vendas</a>
               <a href="#">Suporte</a>
               <a href="#">Twitter</a>
               <a href="#">LinkedIn</a>
             </div>
           </div>
        </div>
        <div className="footer-bottom">
           <p>© {new Date().getFullYear()} MATTE Inc. Todos direitos reservados.</p>
           <div className="legal-links">
             <a href="#">Política de Privacidade</a>
             <a href="#">Termos de Uso</a>
           </div>
        </div>
     </div>
  </footer>
);

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <RealProductSection />
        <UseCases />
        <FounderSection />
        <IntegrationsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
