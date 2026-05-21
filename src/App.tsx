import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  BookOpen, 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Info, 
  ArrowRight, 
  Search, 
  Copy, 
  ExternalLink, 
  Menu, 
  X,
  ChevronRight,
  HelpCircle,
  Mail,
  Phone,
  ArrowLeft,
  Library,
  GraduationCap,
  LifeBuoy,
  Printer,
  SlidersHorizontal,
  Wand2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ACR_DATA, PROGRAM_DATA, FAQ_DATA, PHILOSOPHY_DATA, type ACR, type Program } from './data';

// --- Types ---
type ViewState = 'home' | 'resources' | 'learn' | 'tool';

// --- Components ---

const Card = ({ children, className = "", variant = "default" }: { children: React.ReactNode, className?: string, variant?: 'default' | 'do' | 'dont' | 'info' | 'warn' | 'purple', key?: React.Key }) => {
  const variants = {
    default: "bg-white border-gray-200",
    do: "bg-success-bg border-success-border",
    dont: "bg-danger-bg border-danger-border",
    info: "bg-info-bg border-info-border",
    warn: "bg-warning-bg border-warning-border",
    purple: "bg-purple-bg border-purple-border"
  };
  
  return (
    <div className={`p-6 rounded-2xl border shadow-sm ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

const Section = ({ title, id, children, lead }: { title: string, id: string, children: React.ReactNode, lead?: string }) => (
  <section id={id} className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm mb-8 scroll-mt-6">
    <h2 className="text-2xl mb-2 text-gray-900">{title}</h2>
    {lead && <p className="text-gray-500 mb-6 text-lg">{lead}</p>}
    {children}
  </section>
);

const Button = ({ children, onClick, variant = "secondary", className = "", icon: Icon }: { children: React.ReactNode, onClick?: () => void, variant?: 'primary' | 'secondary' | 'purple', className?: string, icon?: any }) => {
  const baseStyles = "inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold transition-all duration-200 shadow-sm active:scale-95 animate-transition";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover border-transparent",
    secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50",
    purple: "bg-purple-600 text-white hover:bg-purple-700 border-transparent focus:ring-2 focus:ring-purple-500/20"
  };
  
  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </button>
  );
};

const NavCard = ({ title, description, icon: Icon, onClick, color = "primary" }: { title: string, description: string, icon: any, onClick: () => void, color?: string }) => (
  <button 
    onClick={onClick}
    className="group text-left p-6 rounded-3xl border border-gray-200 bg-white hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col h-full"
  >
    <div className={`w-12 h-12 rounded-2xl bg-${color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
      <Icon className={`w-6 h-6 text-${color}`} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>
    <div className="mt-4 flex items-center text-primary font-semibold text-sm">
      Explore <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
    </div>
  </button>
);

// --- Views ---

const HomeView = ({ setView }: { setView: (v: ViewState) => void }) => (
  <div className="space-y-12">
    <header className="bg-gradient-to-br from-primary to-primary-hover text-white rounded-3xl p-10 shadow-lg">
      <h1 className="text-4xl mb-3">Accessibility Resources Hub</h1>
      <p className="text-lg text-white/90 max-w-3xl leading-relaxed">
        Supporting customer-facing teams with accurate, consistent, and low-risk responses to accessibility inquiries from districts, schools, and partners.
      </p>
      <div className="mt-6 bg-white/10 border border-white/20 p-4 rounded-xl flex items-center gap-3">
        <ShieldCheck className="w-6 h-6 text-white/80" />
        <span className="font-semibold text-sm sm:text-base">Important: Always use approved language and documentation. Do not interpret or summarize accessibility compliance.</span>
      </div>
    </header>

    <Section title="Start Here" id="guardrails" lead="Use these guardrails whenever responding to accessibility-related customer inquiries.">
      <div className="grid md:grid-cols-2 gap-6">
        <Card variant="do">
          <h3 className="flex items-center gap-2 text-green-800 mb-4">
            <CheckCircle2 className="w-5 h-5" /> Always Do
          </h3>
          <ul className="space-y-3 text-green-900/80">
            <li className="flex gap-2"><span>•</span> Share the latest ACR for the relevant product.</li>
            <li className="flex gap-2"><span>•</span> Use approved response language.</li>
            <li className="flex gap-2"><span>•</span> Refer customers to documentation rather than summarizing it.</li>
            <li className="flex gap-2"><span>•</span> Offer follow-up on specific questions.</li>
          </ul>
        </Card>
        <Card variant="dont">
          <h3 className="flex items-center gap-2 text-red-800 mb-4">
            <XCircle className="w-5 h-5" /> Do NOT
          </h3>
          <ul className="space-y-3 text-red-900/80">
            <li className="flex gap-2"><span>•</span> State that a product is “fully compliant” unless explicitly documented.</li>
            <li className="flex gap-2"><span>•</span> Interpret ACR findings as “mostly compliant” or similar shorthand.</li>
            <li className="flex gap-2"><span>•</span> Commit to timelines such as April 2026.</li>
            <li className="flex gap-2"><span>•</span> Make guarantees or compare products casually.</li>
          </ul>
        </Card>
      </div>
    </Section>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { step: 1, title: "Identify Scope", color: "info", text: "Confirm product, program, and format (digital/print)." },
        { step: 2, title: "Gather Docs", color: "purple", text: "Locate latest ACRs and check NIMAS availability." },
        { step: 3, title: "Respond", color: "warn", text: "Use approved templates and link documentation." },
        { step: 4, title: "Escalate", color: "do", text: "Ask for help if legal or interpretation is needed." }
      ].map((s) => (
        <Card key={s.step} variant={s.color as any} className="flex flex-col h-full">
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
            {s.step}
          </div>
          <h3 className="text-lg mb-2">{s.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{s.text}</p>
        </Card>
      ))}
    </div>

    <button 
      onClick={() => setView('tool')}
      className="w-full text-left bg-gradient-to-br from-primary to-primary-hover text-white rounded-3xl p-10 shadow-lg hover:shadow-xl hover:scale-[1.005] transition-all duration-300 relative overflow-hidden group block cursor-pointer"
    >
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">Accessibility by Program</h2>
          <p className="text-lg text-white/90 leading-relaxed">
            This tool automates <strong>Steps 1, 2, and 3</strong> of the response process. Select a program to automatically identify its scope, gather documentation, and generate a draft email.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-xl shadow-md transition-all duration-300 hover:bg-slate-50 group-hover:translate-x-1 shrink-0 self-start md:self-auto">
          Start Program Tool <ArrowRight className="w-5 h-5" />
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-white/5 rounded-full -mr-20 -mb-28 blur-3xl group-hover:bg-white/10 transition-colors duration-300" />
    </button>

    <div className="grid md:grid-cols-2 gap-6">
      <NavCard 
        title="Resource Library" 
        description="Access approved email templates, the full ACR library, and NIMAS documentation."
        icon={Library}
        onClick={() => setView('resources')}
        color="primary"
      />
      <NavCard 
        title="Learn More" 
        description="Deep dive into our accessibility philosophy, product overviews, and approved FAQs."
        icon={GraduationCap}
        onClick={() => setView('learn')}
        color="purple"
      />
    </div>
  </div>
);

const ResourcesView = ({ onBack }: { onBack: () => void }) => {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
      <div className="flex items-center gap-4">
        <Button onClick={onBack} icon={ArrowLeft}>Back to Hub</Button>
        <h1 className="text-3xl font-display font-bold">Resource Library</h1>
      </div>

      <Section title="Print / NIMAS" id="print" lead="Resources, alternative formatting services, and platform integrations.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card variant="info">
            <h3 className="text-base font-bold mb-3 flex items-center gap-2 text-slate-800"><Library className="w-5 h-5 text-sky-600" /> Platforms</h3>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>• Digital Readers (such as Clear Reader) are integrated directly within Clear Learning Center.</li>
              <li>• Course delivery shells manage specific user accesses and configurations.</li>
              <li>• Platform adjustments let administrators align interfaces with learner accessibility profiles.</li>
            </ul>
          </Card>
          <Card variant="purple">
            <h3 className="text-base font-bold mb-3 flex items-center gap-2 text-slate-800"><BookOpen className="w-5 h-5 text-purple-600" /> Digital Tools</h3>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>• Interactive math/literacy tools are launched contextually from the student dashboard.</li>
              <li>• Individual applications (such as MATHia or assessment players) maintain separate dedicated ACR documents.</li>
              <li>• Accessible designs provide built-in text-to-speech, custom text controls, and screen-readable workflows.</li>
            </ul>
          </Card>
          <Card variant="warn">
            <h3 className="text-base font-bold mb-3 flex items-center gap-2 text-slate-800"><Printer className="w-5 h-5 text-amber-600" /> Print / NIMAS</h3>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>• NIMAS source files are available for all print textbook materials.</li>
              <li>• NIMAS supports requested conversions to Braille, large print, and other formats via authorized institutions (e.g. Bookshare).</li>
              <li>• Student Edition and Teacher Edition accessible PDFs can be prepared and made available for offline workflows.</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section title="ACR Library" id="documentation" lead="Authoritative source for communicating accessibility support to customers.">
        <div className="space-y-8">
          {(["Platforms", "Digital Tools", "Print/NIMAS"] as const).map(category => {
            const items = ACR_DATA.filter(acr => acr.category === category);
            if (items.length === 0) return null;
            return (
              <div key={category} className="space-y-3">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2 border-b border-gray-100 pb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  {category}
                </h3>
                <div className="overflow-hidden border border-gray-200 rounded-2xl bg-white shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Product</th>
                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Documentation</th>
                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Updated</th>
                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Type</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {items.map((acr, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-gray-900">
                            <div>
                              <p className="text-gray-900 font-semibold">{acr.product}</p>
                              {acr.notes && <p className="text-xs text-gray-500 font-normal mt-0.5">{acr.notes}</p>}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            {acr.url === "#" ? (
                              <span className="text-gray-400 text-sm italic">ACR attached to response email</span>
                            ) : (
                              <a href={acr.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1 font-medium">
                                View ACR <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </td>
                          <td className="px-6 py-4 text-gray-500 text-sm">{acr.updated}</td>
                          <td className="px-6 py-4">
                            <span className="px-2.5 py-1 rounded-full bg-info-bg text-primary text-xs font-bold">
                              {acr.type}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </motion.div>
  );
};

const LearnMoreView = ({ onBack }: { onBack: () => void }) => (
  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
    <div className="flex items-center gap-4">
      <Button onClick={onBack} icon={ArrowLeft}>Back to Hub</Button>
      <h1 className="text-3xl font-display font-bold">Learn More</h1>
    </div>

    {/* 1. Accessibility Philosophy & Policy */}
    <Section title="Accessibility Philosophy & Policy" id="approach">
      <div className="grid md:grid-cols-2 gap-6">
        <Card variant="info">
          <h3 className="text-lg mb-4">Our Principles</h3>
          <ul className="space-y-4">
            {PHILOSOPHY_DATA.principles.map((p, i) => (
              <li key={i}>
                <p className="font-bold text-gray-900 text-sm">{p.title}</p>
                <p className="text-gray-600 text-xs mt-1">{p.text}</p>
              </li>
            ))}
          </ul>
        </Card>
        <Card variant="purple">
          <h3 className="text-lg mb-4">Our Policy</h3>
          <ul className="space-y-4">
            {PHILOSOPHY_DATA.policy.map((p, i) => (
              <li key={i}>
                <p className="font-bold text-gray-900 text-sm">{p.title}</p>
                <p className="text-gray-600 text-xs mt-1">{p.text}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>

    {/* 2. Accessibility Components */}
    <Section title="Accessibility Components" id="components" lead="To understand accessibility for a program, you must consider all three layers of the 'accessibility story'.">
      <div className="space-y-12">
        {/* Layer 1: Platforms */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Library className="w-6 h-6 text-primary" /> 1. Delivery Platforms
          </h3>
          <p className="text-gray-600 mb-6">The foundational software used to deliver content and manage the learning experience.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card variant="info">
              <h4 className="font-bold mb-2">Clear Learning Center</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Learning platform (LMS)</li>
                <li>• Third-party audited</li>
                <li>• Tested with assistive technologies</li>
                <li>• Supports content delivery</li>
              </ul>
            </Card>
            <Card variant="purple">
              <h4 className="font-bold mb-2">ClearMath Elementary Platform</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Learning platform (LMS)</li>
                <li>• Third-party audited</li>
                <li>• Tested with assistive technologies</li>
                <li>• Supports elementary math</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Layer 2: Digital Tools */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Search className="w-6 h-6 text-purple" /> 2. Digital Tools
          </h3>
          <p className="text-gray-600 mb-6">Specific interactive tools and applications embedded within the program.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="info">
              <h4 className="font-bold mb-2">MATHia</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Web-based learning platform</li>
                <li>• Third-party audited</li>
                <li>• Tested with assistive technologies</li>
              </ul>
            </Card>
            <Card variant="purple">
              <h4 className="font-bold mb-2">MATHstream</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Web-based platform</li>
                <li>• Evaluated at component level</li>
                <li>• Includes accessibility testing</li>
              </ul>
            </Card>
            <Card variant="info">
              <h4 className="font-bold mb-2">ClearTalk</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Web-based platform</li>
                <li>• Evaluated at component level</li>
                <li>• Includes accessibility testing</li>
              </ul>
            </Card>
            <Card variant="purple">
              <h4 className="font-bold mb-2">Clear Assessment Player</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Assessment delivery platform</li>
                <li>• Documented via Learnosity ACR</li>
                <li>• Interactive experiences</li>
              </ul>
            </Card>
            <Card variant="info">
              <h4 className="font-bold mb-2">CL Reader</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Digital book delivery platform</li>
                <li>• Documented via KITABOO 6 ACR</li>
                <li>• Delivers accessible PDFs</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Layer 3: Print & Alternative Formats */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Printer className="w-6 h-6 text-warn" /> 3. Print & Alternative Formats
          </h3>
          <p className="text-gray-600 mb-6">Addressing accessibility for physical materials and non-web digital content.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card variant="warn">
              <h4 className="font-bold mb-2">NIMAS Files</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Available for applicable print titles</li>
                <li>• Enables creation of braille, large print, and audio</li>
                <li>• Distributed via NIMAC for K-12</li>
              </ul>
            </Card>
            <Card variant="info">
              <h4 className="font-bold mb-2">Accessible Digital Books</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• High-quality, tagged PDFs</li>
                <li>• Optimized for screen readers</li>
                <li>• Available for select programs</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      <Card variant="warn" className="mt-12">
        <h3 className="text-sm font-bold text-warning uppercase tracking-wider mb-2 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" /> Internal Context (For Staff Only)
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          Some Carnegie Learning platforms, including MATHia, have evolved over a long period of time, with origins predating current accessibility standards such as WCAG 2.1. As a result, accessibility improvements are being implemented incrementally as part of ongoing platform updates and modernization efforts.
        </p>
      </Card>
    </Section>

    {/* 3. What to Say / What Not to Say */}
    <Section title="What to Say / What Not to Say" id="faq" lead="Use these examples to respond consistently and reduce risk.">
      <div className="grid md:grid-cols-2 gap-6">
        {FAQ_DATA.map((item, idx) => (
          <div key={idx} className="border border-gray-200 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-gray-900">{item.q}</h3>
            <div className="bg-success-bg border border-success-border p-4 rounded-xl">
              <p className="text-xs font-bold text-green-800 mb-1 uppercase tracking-widest">Say:</p>
              <p className="text-green-900 text-sm">“{item.say}”</p>
            </div>
            <div className="bg-danger-bg border border-danger-border p-4 rounded-xl">
              <p className="text-xs font-bold text-red-800 mb-1 uppercase tracking-widest">Do NOT say:</p>
              <p className="text-red-900 text-sm">“{item.dont}”</p>
            </div>
          </div>
        ))}
      </div>
    </Section>

    <div className="grid md:grid-cols-2 gap-6">
      <Section title="When to Escalate" id="escalate">
        <div className="space-y-4">
          <Card variant="warn">
            <h3 className="text-sm font-bold text-warning uppercase mb-2">Escalate if customer asks for:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• A formal compliance statement</li>
              <li>• Contract or legal language</li>
              <li>• Interpretation of ACR results</li>
              <li>• Product-specific guarantees</li>
            </ul>
          </Card>
          <Card variant="info">
            <h3 className="text-sm font-bold text-primary uppercase mb-2">Also escalate if:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• You are unsure how to respond</li>
              <li>• Request includes procurement/audit language</li>
              <li>• Inquiry spans multiple products</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section title="Contact & Support" id="contact">
        <div className="space-y-4">
          <Card className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-bold text-gray-900">Accessibility Team</p>
              <p className="text-sm text-gray-500">Kevin Allard / Dennis Geary</p>
            </div>
          </Card>
          <Card className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center">
              <LifeBuoy className="w-5 h-5 text-purple" />
            </div>
            <div>
              <p className="font-bold text-gray-900">Page Maintenance</p>
              <p className="text-sm text-gray-500">Last Updated: April 2026</p>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  </motion.div>
);

const ProgramToolView = ({ onBack }: { onBack: () => void }) => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState(false);

  const [checkedPlatforms, setCheckedPlatforms] = useState<string[]>([]);
  const [checkedTools, setCheckedTools] = useState<string[]>([]);
  const [checkedPrint, setCheckedPrint] = useState<string[]>([]);
  const [checkedDigitalBooks, setCheckedDigitalBooks] = useState<boolean>(true);
  const [emailText, setEmailText] = useState("");

  const filteredPrograms = PROGRAM_DATA.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  // Helper to normalize strings for alphabetical sorting (handling '¡', '', etc.)
  const getSortKey = (name: string) => {
    return name.replace(/^[^a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿA-Z_]+/gi, "").toLowerCase();
  };

  // Group and sort programs by category
  const groupedPrograms = filteredPrograms.reduce((acc, program) => {
    const category = program.category || "ClearMath";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(program);
    return acc;
  }, {} as Record<string, Program[]>);

  // Sort categories alphabetically
  const sortedCategories = Object.keys(groupedPrograms).sort((a, b) => a.localeCompare(b));

  // Sort programs alphabetically within each category
  sortedCategories.forEach(category => {
    groupedPrograms[category].sort((a, b) => {
      return getSortKey(a.name).localeCompare(getSortKey(b.name));
    });
  });

  const isCustomizable = !!selectedProgram;

  const getMappedProgramName = (name: string) => {
    if (name === "Middle & High School Math Solutions, 4th Edition") {
      return "Carnegie Learning Middle & High School Math Solutions, 4th Edition";
    }
    if (name === "California ClearMath Secondary") {
      return "Carnegie Learning California ClearMath Secondary";
    }
    if (name === "California ClearMath Elementary") {
      return "Carnegie Learning California ClearMath Elementary";
    }
    if (name === "¡Qué chévere!, 3rd Edition") {
      return "Carnegie Learning ¡Qué chévere!, 3rd Edition";
    }
    if (name === "T’es branché?, 3rd Edition" || name === "T'es branché?, 3rd Edition" || name === "T’es branché?") {
      return "Carnegie Learning T’es branché?, 3rd Edition";
    }
    if (name === "Lenses on Literature") {
      return "Carnegie Learning Lenses on Literature";
    }
    return name;
  };

  useEffect(() => {
    if (selectedProgram) {
      setCheckedPlatforms(selectedProgram.platforms || []);
      setCheckedTools(selectedProgram.tools || []);
      setCheckedPrint(selectedProgram.printNimas || []);
      setCheckedDigitalBooks(true);

      const mappedName = getMappedProgramName(selectedProgram.name);
      
      const pText = (selectedProgram.platforms && selectedProgram.platforms.length > 0)
        ? `Platforms\n${selectedProgram.platforms.map(p => `- ${p}: [link to ACR]`).join('\n')}\n\n`
        : '';

      const tText = (selectedProgram.tools && selectedProgram.tools.length > 0)
        ? `Digital Tools\n${selectedProgram.tools.map(t => `- ${t}: [link to ACR]`).join('\n')}\n\n`
        : '';

      const isWL = selectedProgram.category === 'ClearLanguages';
      const digitalBooksLine = selectedProgram.digitalBooks 
        ? `- ${selectedProgram.digitalBooks}${isWL ? ': [link to ACR]' : ''}\n` 
        : '';
      const printSelection = (selectedProgram.printNimas || []).map(n => `- ${n}: [confirm availability]`).join('\n');
      const prText = (selectedProgram.digitalBooks || (selectedProgram.printNimas && selectedProgram.printNimas.length > 0))
        ? `Print Components / Digital Books\n${digitalBooksLine}${printSelection}\n\n`
        : '';

      const body = `Thank you for reaching out regarding accessibility and WCAG 2.1 AA for ${mappedName}.

Below are the relevant accessibility resources based on the components used in this program.

${pText}${tText}${prText}The ACRs provide detailed, criterion-level information regarding accessibility support for each platform or tool. We recommend reviewing these documents for the most current and complete information.

Please feel free to reach out with any specific questions as you review the materials.`;

      setEmailText(body);
    } else {
      setEmailText("");
    }
  }, [selectedProgram]);

  const handleGenerateEmail = () => {
    if (!selectedProgram) return;

    const mappedName = getMappedProgramName(selectedProgram.name);
    
    // platforms section
    const platformsSelection = checkedPlatforms.map(p => `- ${p}: [link to ACR]`).join('\n');
    const platformsText = checkedPlatforms.length > 0 
      ? `Platforms\n${platformsSelection}\n\n`
      : '';

    // tools section
    const toolsSelection = checkedTools.map(t => `- ${t}: [link to ACR]`).join('\n');
    const toolsText = checkedTools.length > 0 
      ? `Digital Tools\n${toolsSelection}\n\n`
      : '';

    // print / digital books section
    const isWL = selectedProgram.category === 'ClearLanguages';
    const digitalBooksLine = checkedDigitalBooks && selectedProgram.digitalBooks 
      ? `- ${selectedProgram.digitalBooks}${isWL ? ': [link to ACR]' : ''}\n` 
      : '';
    const printSelection = checkedPrint.map(n => `- ${n}: [confirm availability]`).join('\n');
    const printText = (checkedDigitalBooks || checkedPrint.length > 0)
      ? `Print Components / Digital Books\n${digitalBooksLine}${printSelection}\n\n`
      : '';

    const body = `Thank you for reaching out regarding accessibility and WCAG 2.1 AA for ${mappedName}.

Below are the relevant accessibility resources based on the components used in this program.

${platformsText}${toolsText}${printText}The ACRs provide detailed, criterion-level information regarding accessibility support for each platform or tool. We recommend reviewing these documents for the most current and complete information.

Please feel free to reach out with any specific questions as you review the materials.`;

    setEmailText(body);
  };

  const togglePlatform = (p: string) => {
    setCheckedPlatforms(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]);
  };

  const toggleTool = (t: string) => {
    setCheckedTools(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  };

  const togglePrint = (n: string) => {
    setCheckedPrint(prev => prev.includes(n) ? prev.filter(x => x !== n) : [...prev, n]);
  };

  const handleCopyEmail = () => {
    if (emailText) {
      navigator.clipboard.writeText(emailText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <header className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-3xl p-8 shadow-md">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 rounded-full bg-white/10 hover:bg-white/25 transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Program Tool</h1>
            <p className="text-slate-300 text-sm mt-1">Select a program to automatically identify its scope, gather documentation, and generate a custom email response.</p>
          </div>
        </div>
      </header>

      <div className="grid lg:grid-cols-[350px_1fr] gap-8">
        <div className="space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="Search programs..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Available Programs</h2>
            </div>
            <div className="max-h-[500px] overflow-y-auto divide-y divide-gray-100">
              {sortedCategories.map(category => (
                <div key={category} className="flex flex-col">
                  <div className="px-4 py-2 bg-slate-50 border-y border-gray-100 flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500 tracking-wide uppercase">{category}</span>
                    <span className="ml-[auto] text-[10px] font-semibold bg-slate-200/60 text-slate-600 px-2 py-0.5 rounded-full">
                      {groupedPrograms[category].length}
                    </span>
                  </div>
                  <div className="divide-y divide-gray-50 bg-white">
                    {groupedPrograms[category].map(p => (
                      <button 
                        key={p.id} 
                        onClick={() => setSelectedProgram(p)} 
                        className={`w-full text-left p-4 hover:bg-gray-50 transition-colors flex items-center justify-between group ${selectedProgram?.id === p.id ? 'bg-primary/5' : ''}`}
                      >
                        <div>
                          <p className={`font-semibold ${selectedProgram?.id === p.id ? 'text-primary' : 'text-gray-900'}`}>{p.name}</p>
                          <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{p.description}</p>
                        </div>
                        <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${selectedProgram?.id === p.id ? 'text-primary translate-x-1' : 'text-gray-300 group-hover:translate-x-1'}`} />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              {sortedCategories.length === 0 && (
                <div className="p-8 text-center text-sm text-gray-400">
                  No programs match your search.
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {selectedProgram ? (
            <AnimatePresence mode="wait">
              <motion.div key={selectedProgram.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <Card variant="info">
                  <h2 className="text-2xl mb-2">{selectedProgram.name}</h2>
                  <p className="text-gray-600">{selectedProgram.description}</p>
                </Card>
                
                {isCustomizable && (
                  <Card variant="purple" className="flex flex-col md:flex-row md:items-center justify-between gap-4 border border-purple-200 bg-purple-50/50">
                    <div>
                      <h3 className="font-bold text-purple-900 mb-1 flex items-center gap-2">
                        <SlidersHorizontal className="w-5 h-5 text-purple" /> Customize Email Content
                      </h3>
                      <p className="text-sm text-purple-850">Toggle checkboxes in the components grid below to select which parts the customer has, then click generate.</p>
                    </div>
                    <Button 
                      variant="purple" 
                      onClick={handleGenerateEmail}
                      icon={Wand2}
                      className="md:self-center shrink-0 shadow-sm"
                    >
                      Generate Custom Email
                    </Button>
                  </Card>
                )}

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="flex flex-col">
                    <h3 className="text-xs font-bold text-gray-400 uppercase mb-3 text-left">Platforms</h3>
                    <ul className="space-y-2 text-left">
                      {selectedProgram.platforms.map(p => {
                        const isChecked = checkedPlatforms.includes(p);
                        return (
                          <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                            {isCustomizable ? (
                              <label className="flex items-center gap-2 cursor-pointer select-none">
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => togglePlatform(p)}
                                  className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 border-gray-300 transition-colors"
                                />
                                <span>{p}</span>
                              </label>
                            ) : (
                              <>
                                <CheckCircle2 className="w-4 h-4 shrink-0 text-green-500 mt-0.5" />
                                <span>{p}</span>
                              </>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </Card>

                  <Card className="flex flex-col">
                    <h3 className="text-xs font-bold text-gray-400 uppercase mb-3 text-left">Digital Tools</h3>
                    <ul className="space-y-2 text-left">
                      {selectedProgram.tools.map(t => {
                        const isChecked = checkedTools.includes(t);
                        return (
                          <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                            {isCustomizable ? (
                              <label className="flex items-center gap-2 cursor-pointer select-none">
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => toggleTool(t)}
                                  className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 border-gray-300 transition-colors"
                                />
                                <span>{t}</span>
                              </label>
                            ) : (
                              <>
                                <CheckCircle2 className="w-4 h-4 shrink-0 text-green-500 mt-0.5" />
                                <span>{t}</span>
                              </>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </Card>

                  <Card className="flex flex-col">
                    <h3 className="text-xs font-bold text-gray-400 uppercase mb-3 text-left">Print / NIMAS</h3>
                    <ul className="space-y-2 text-left">
                      {selectedProgram.printNimas.map(n => {
                        const isChecked = checkedPrint.includes(n);
                        return (
                          <li key={n} className="flex items-start gap-2 text-sm text-gray-700">
                            {isCustomizable ? (
                              <label className="flex items-center gap-2 cursor-pointer select-none">
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => togglePrint(n)}
                                  className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 border-gray-300 transition-colors"
                                />
                                <span>{n}</span>
                              </label>
                            ) : (
                              <>
                                <CheckCircle2 className="w-4 h-4 shrink-0 text-green-500 mt-0.5" />
                                <span>{n}</span>
                              </>
                            )}
                          </li>
                        );
                      })}
                      {selectedProgram.digitalBooks && (
                        <li className="flex items-start gap-2 text-sm text-gray-700 pt-1 border-t border-gray-100">
                          {isCustomizable ? (
                            <label className="flex items-center gap-2 cursor-pointer select-none">
                              <input
                                  type="checkbox"
                                  checked={checkedDigitalBooks}
                                  onChange={() => setCheckedDigitalBooks(!checkedDigitalBooks)}
                                  className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 border-gray-300 transition-colors"
                              />
                              <span>{selectedProgram.digitalBooks}</span>
                            </label>
                          ) : (
                            <>
                              <CheckCircle2 className="w-4 h-4 shrink-0 text-green-500 mt-0.5" />
                              <span>{selectedProgram.digitalBooks}</span>
                            </>
                          )}
                        </li>
                      )}
                    </ul>
                  </Card>
                </div>

                <Section title="Generated Email Response" id="email-draft">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-sm text-gray-500 italic">Approved language for {getMappedProgramName(selectedProgram.name)}</p>
                    <Button variant="primary" onClick={handleCopyEmail} icon={copied ? CheckCircle2 : Copy}>{copied ? "Copied!" : "Copy Email"}</Button>
                  </div>
                  <div id="generated-email" className="bg-slate-900 text-slate-200 p-6 rounded-2xl font-mono text-sm leading-relaxed whitespace-pre-wrap border border-slate-800 text-left">
                    {emailText}
                  </div>
                </Section>
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50/50">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4"><Search className="w-8 h-8 text-gray-300" /></div>
              <h3 className="text-xl text-gray-900 mb-2">Select a Program</h3>
              <p className="text-gray-500 max-w-xs">Choose a program from the list on the left to generate its specific accessibility resources and email draft.</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState<ViewState>('home');

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <AnimatePresence mode="wait">
          {view === 'home' && <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><HomeView setView={setView} /></motion.div>}
          {view === 'resources' && <motion.div key="resources" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><ResourcesView onBack={() => setView('home')} /></motion.div>}
          {view === 'learn' && <motion.div key="learn" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><LearnMoreView onBack={() => setView('home')} /></motion.div>}
          {view === 'tool' && <motion.div key="tool" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><ProgramToolView onBack={() => setView('home')} /></motion.div>}
        </AnimatePresence>

        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Carnegie Learning Accessibility Team. For internal use only.</p>
        </footer>
      </div>
    </div>
  );
}
