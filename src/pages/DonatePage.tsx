import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Users, Globe, Award, ChevronDown, ExternalLink, Send, Compass, HeartHandshake, Dumbbell, HandHeart, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/donate-hero.jpg";
import logo from "@/assets/zl-logo.webp";
import logoWhite from "@/assets/zl-logo-white.png";
import glomoAwardBanner from "@/assets/glomo-award-banner.png";
import awardPhoto from "@/assets/award.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const impactStats = [
  { icon: Users, label: "Children Reached", value: 100000, suffix: "+" },
  { icon: Globe, label: "Countries Impacted", value: 5, suffix: "" },
  { icon: Award, label: "Years of Impact", value: 21, suffix: "" },
  { icon: Heart, label: "Healthcare Workers Trained", value: 5000, suffix: "+" },
];

const reasons = [
  {
    amount: "$2",
    localAmount: "R35",
    headline: "Supports and equips one grandparent raising a vulnerable child",
    icon: HandHeart,
    outcome:
      "Provides guidance and support for a grandparent raising a vulnerable child, plus a nutritious meal for their grandchild.",
    urgency:
      "Nearly 8 million South African children are raised by grandparents (38% of all children), yet most caregivers, predominantly grandmothers, face financial hardship with little to no support.",
    color: "from-violet-500 to-purple-600",
  },
  {
    amount: "$25",
    localAmount: "R420",
    headline: "Enables one young person to discover their future",
    icon: Compass,
    outcome:
      "A career assessment and mentorship session that helps one learner uncover their strengths and chart a path out of unemployment.",
    urgency:
      "46% of South African youth are unemployed. For most, it starts with never being shown what's possible.",
    color: "from-amber-500 to-orange-600",
  },
  {
    amount: "$155",
    localAmount: "R2,500",
    headline: "Trains one healthcare worker to support 200 children",
    icon: HeartHandshake,
    outcome:
      "Full training for one healthcare worker to guide up to 200 HIV-positive children through age-appropriate disclosure — so they understand their diagnosis and stick with treatment.",
    urgency:
      "150,000 children in South Africa live with HIV. Fewer than half know their own status.",
    color: "from-rose-500 to-red-600",
  },
  {
    amount: "$200",
    localAmount: "R3,350",
    headline: "Equips 50 learners to make informed choices about their lives",
    icon: Dumbbell,
    outcome:
      "A full classroom transformed with health literacy and life skills — empowering 50 young people to recognise risk, resist pressure, and protect their futures.",
    urgency:
      "1 in 3 pregnant teenagers in South Africa never returns to school. Early intervention changes everything.",
    color: "from-emerald-500 to-teal-600",
  },
];

export default function DonatePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToForm = () => {
    document.getElementById("donate-form")?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navItems = ["Who We Are", "What We Do", "KidzAlive", "YouThrive", "Grandparents", "Get Involved"];

  const socialLinks = [
    { label: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
    { label: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
    { label: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
    { label: "TikTok", icon: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
    { label: "YouTube", icon: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z M9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="bg-background/95 backdrop-blur-md border-b border-border relative z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <a href="https://www.zoe-life.org/" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="Zoë-Life" className="h-16 md:h-20 lg:h-28" />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="https://www.zoe-life.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="https://www.zoe-life.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
                  aria-label={social.label}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
            <Button
              onClick={scrollToForm}
              className="bg-primary text-primary-foreground hover:bg-zl-green-dark font-semibold rounded-full px-6 py-2 text-sm md:px-10 md:py-4 md:text-lg"
            >
              Donate
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="https://www.zoe-life.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-border/50"
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href="https://www.zoe-life.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
                    aria-label={social.label}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-28">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Children smiling and playing together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight"
          >
            21 Years of Building
            <br />
            <span className="text-zl-yellow">Resilient Futures</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 font-light"
          >
            From community clinics to national policy, Zoë-Life has proven what works.
            Your donation helps sustain programmes that protect, heal, and empower the next generation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-primary text-primary-foreground hover:bg-zl-green-dark text-lg px-10 py-6 rounded-full font-bold shadow-lg animate-pulse-gentle"
            >
              <Heart className="w-5 h-5 mr-2" />
              Make a Donation
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <button onClick={scrollToForm} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <ChevronDown className="w-8 h-8 mx-auto animate-bounce" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary-foreground/80" />
                <div className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-primary-foreground/80 mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Form + Why Give */}
      <section id="donate-form" className="py-20 bg-zl-warm scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Your Gift Changes Lives
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every donation directly supports children, youth, and families across Southern Africa.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[auto_1fr] gap-12 items-start max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-6">
            {/* Donorbox Embed */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border max-w-md"
            >
              <div className="bg-primary px-6 py-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-primary-foreground">
                  Choose amount
                </h3>
                <div className="flex items-center gap-2 text-primary-foreground/70">
                  <span className="text-primary-foreground">🔒</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-foreground/50" />
                  <span className="w-2.5 h-2.5 rounded-full border border-primary-foreground/50" />
                  <span className="w-2.5 h-2.5 rounded-full border border-primary-foreground/50" />
                  <span className="ml-1">→</span>
                </div>
              </div>
              <div className="p-4 text-sm text-muted-foreground border-b border-border">
                Donate by Card, PayPal or Google/Apple Pay here. All donations from South African residents are <strong className="text-foreground">tax-deductible</strong>. Donating from the UK or Germany? <a href="#tax-deductible-abroad" className="underline text-primary hover:text-primary/80">Click here</a>.
              </div>
              <div className="p-6 space-y-6">
                {/* Frequency Toggle */}
                <div className="flex justify-center">
                  <div className="inline-flex rounded-lg border border-border overflow-hidden">
                    {["One-time", "Monthly", "Quarterly"].map((freq) => (
                      <button
                        key={freq}
                        className={`px-5 py-2.5 text-sm font-medium transition-colors ${
                          freq === "Monthly"
                            ? "border-2 border-primary text-primary bg-card"
                            : "bg-card text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        {freq === "Monthly" && "❤️ "}
                        {freq}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                  You can log in to edit your recurring donation any time <span className="inline-block w-4 h-4 rounded-full border border-muted-foreground text-xs text-center leading-4 align-middle">?</span>
                </p>

                {/* Currency Selector */}
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Currency</label>
                  <select className="w-full rounded-xl border border-border bg-card px-4 py-3.5 text-sm text-foreground" defaultValue="USD">
                    <option value="USD">US Dollar (USD)</option>
                    <option value="ZAR">South African Rand (ZAR)</option>
                    <option value="EUR">Euro (EUR)</option>
                  </select>
                </div>

                {/* Amount Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "USD", amount: "200" },
                    { label: "USD", amount: "500" },
                    { label: "USD", amount: "800" },
                    { label: "USD", amount: "2,000" },
                    { label: "USD", amount: "8,000" },
                    { label: "USD", amount: "20,000" },
                  ].map((item) => (
                    <button
                      key={item.amount}
                      className="py-5 rounded-xl border border-border bg-card text-foreground hover:border-primary/50 transition-colors flex flex-col items-center justify-center gap-0.5"
                    >
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{item.label}</span>
                      <span className="text-lg font-bold">{item.amount}</span>
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-medium text-muted-foreground uppercase tracking-wider">USD</span>
                  <input
                    type="text"
                    placeholder="Custom Amount"
                    className="w-full rounded-xl border border-border bg-card pl-14 pr-4 py-4 text-lg text-foreground placeholder:text-muted-foreground/40"
                  />
                </div>

                {/* Next Button */}
                <button className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-xl text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Next <span>→</span>
                </button>
              </div>

            </motion.div>

            {/* Bank Transfer Info - below donation form in left column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 border border-border max-w-md shadow-md"
            >
              <h4 className="font-bold text-foreground mb-3 flex items-center gap-2 text-lg">
                🏦 Avoid Fees — Donate by Bank Transfer
              </h4>
              <p className="text-sm text-muted-foreground mb-6">
                Bank transfers from South Africa incur no fees. Submit this form then check your email for instructions to complete the donation.
              </p>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); }}>
                <Input
                  type="email"
                  placeholder="EMAIL"
                  className="bg-card border-border/60 placeholder:text-muted-foreground/50 placeholder:font-medium placeholder:tracking-wider"
                />
                <Input
                  type="text"
                  placeholder="AMOUNT"
                  className="bg-card border-border/60 placeholder:text-muted-foreground/50 placeholder:font-medium placeholder:tracking-wider"
                />
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 text-base font-bold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send me the details
                </Button>
              </form>

            </motion.div>

            </div>

            {/* Why Give */}
            <div className="space-y-6">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-foreground"
              >
                The Impact Your Donation Can Have
              </motion.h3>

              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.headline}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group relative bg-card rounded-2xl overflow-hidden shadow-md border border-border hover:shadow-xl transition-all duration-300"
                >
                  {/* Colored accent bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${reason.color}`} />
                  
                  <div className="p-6">
                    {/* Amount badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-3xl font-black bg-gradient-to-r ${reason.color} bg-clip-text text-transparent`}>
                        {reason.amount}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                        {reason.localAmount}
                      </span>
                    </div>

                    {/* Headline */}
                    <h4 className="text-lg font-bold text-foreground leading-snug mb-3">
                      {reason.headline}
                    </h4>

                    {/* Outcome */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {reason.outcome}
                    </p>

                    {/* Urgency callout */}
                    <div className="bg-muted/60 rounded-lg px-4 py-3 border-l-4 border-current" style={{ borderColor: 'hsl(var(--primary))' }}>
                      <p className="text-sm font-semibold text-foreground leading-relaxed">
                        ⚡ <span className="text-primary">Why this matters:</span> {reason.urgency}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Tax-Deductible Donations from Abroad */}
              <motion.div
                id="tax-deductible-abroad"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-primary/10 rounded-xl p-6 border border-primary/20"
              >
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2 text-lg">
                  🌍 Tax-Deductible Donations from Abroad
                </h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://www.ukfundforcharities.org/donate/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-3 border border-border hover:shadow-md hover:border-primary/40 transition-all text-sm font-medium text-foreground"
                  >
                    <span className="text-xl leading-none">🇬🇧</span>
                    Donate from the UK
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                  </a>
                  <a
                    href="http://dsz-internationalgiving.org/spendenabwicklung/fuer-spender/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-3 border border-border hover:shadow-md hover:border-primary/40 transition-all text-sm font-medium text-foreground"
                  >
                    <span className="text-xl leading-none">🇩🇪</span>
                    Donate from Germany
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-3 italic">
                  These links direct you to partner organisations that enable tax-deductible giving.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Highlights */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-zl-yellow font-bold tracking-widest text-sm uppercase">Our Impact</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-4 mb-4">
              Over 1 Million Lives Touched
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              From community clinics to global policy, Zoë-Life's programmes create lasting change for children, youth, and families.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "KidzAlive",
                stat: "110,000+",
                desc: "Children & caregivers reached with child-centred HIV care, disclosure support, and the award-winning TalkTool app across South Africa and 5 countries.",
              },
              {
                title: "Career Guidance",
                stat: "13,500+",
                desc: "Learners reached across 120 schools with career exploration and mentorship, equipping young people for their futures.",
              },
              {
                title: "YouThrive",
                stat: "3,000+",
                desc: "Youth reached with health education, GBV prevention, life skills, career guidance, and mental health support since 2022.",
              },
            ].map((prog, i) => (
              <motion.div
                key={prog.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 text-center"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-zl-yellow mb-2">{prog.stat}</div>
                <h3 className="text-lg font-bold text-primary-foreground mb-2">{prog.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{prog.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-zl-yellow text-secondary-foreground hover:bg-zl-yellow/90 rounded-full px-10 py-6 font-bold text-lg shadow-lg"
            >
              Support These Programmes
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Talk Tool Award Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 bg-zl-yellow/20 text-zl-yellow-dark px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Award className="w-4 h-4" />
              Global Recognition
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              Award-Winning Innovation
              <br />
              <span className="text-primary">for Children Living with HIV</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Award Image & Badge */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                <img
                  src={glomoAwardBanner}
                  alt="KidzAlive Talk Tool App wins GLOMO Award at Mobile World Congress Barcelona 2024"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                  <p className="text-primary-foreground text-sm font-medium">
                    Mobile World Congress, Barcelona — February 2024
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-zl-yellow text-secondary-foreground rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg transform rotate-12">
                <Award className="w-6 h-6" />
                <span className="text-[10px] font-bold leading-tight text-center">GLOMO<br/>Winner</span>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border mt-6">
                <img
                  src={awardPhoto}
                  alt="Zoë-Life team receiving the GLOMO Award at Mobile World Congress 2024"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  The KidzAlive Talk Tool App
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Winner of the inaugural <strong className="text-foreground">GLOMO Award for Tech4Good — Best Mobile Innovation for Enhancing The Lives of Children and Young People</strong>, presented by the GSMA at Mobile World Congress 2024.
                </p>
              </div>

              <blockquote className="border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg">
                <p className="text-foreground italic text-sm leading-relaxed">
                  "A brilliant example of using technology to improve the lives of people deeply affected by HIV — not only improving their chances but giving care workers and others involved the proper tools to assist."
                </p>
                <cite className="text-xs text-muted-foreground mt-2 block not-italic">— GLOMO Award Judges</cite>
              </blockquote>

              <div className="space-y-3">
                {[
                  "Empowers healthcare workers with digital counselling tools for HIV disclosure to children",
                  "Uses gamification and storytelling to make HIV education engaging and memorable",
                  "Available in multiple languages, breaking barriers across diverse communities",
                  "Integrated into national and international health initiatives for global impact",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="w-3 h-3 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
                <p className="text-foreground font-semibold mb-1">
                  Your donation keeps this award-winning technology in the hands of those who need it most.
                </p>
                <p className="text-sm text-muted-foreground">
                  150,000 children in South Africa live with HIV. The Talk Tool app helps healthcare workers guide them through understanding their diagnosis — giving them the knowledge and confidence to stay on treatment and thrive.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  onClick={scrollToForm}
                  className="bg-primary text-primary-foreground hover:bg-zl-green-dark rounded-full px-8 font-bold shadow-lg"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Fund This Innovation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="rounded-full px-8 font-semibold"
                >
                  <a href="https://www.kidzalive.co.za/stories/global-mobile-award-winner" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read the Full Story
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your Gift, Responsibly Spent */}
      <section className="py-20" style={{ backgroundColor: 'hsl(150, 35%, 92.2%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
                Your gift,
                <br />
                responsibly
                <br />
                spent
              </h2>
              <Button
                onClick={scrollToForm}
                className="mt-6 bg-primary text-primary-foreground hover:bg-zl-green-dark text-lg px-8 py-6 rounded-full font-bold shadow-lg"
              >
                <Heart className="w-5 h-5 mr-2" />
                Give Today
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-muted-foreground">
                Every donation makes a real impact.{" "}
                <strong className="text-foreground">
                  We're proud to say 80% of every donation goes directly to delivering
                  life-changing programmes.
                </strong>{" "}
                The rest supports essential fundraising and operations to keep our work going.
              </p>

              {/* Donut Chart */}
              <div className="flex justify-center">
                <div className="relative w-56 h-56">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    {/* Background fill to match section */}
                    <circle cx="50" cy="50" r="29" style={{ fill: 'hsl(150, 35%, 92.2%)' }} />
                    {/* Programmes 80% */}
                    <circle
                      cx="50" cy="50" r="38"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="18"
                      strokeDasharray={`${80 * 2.388} ${100 * 2.388}`}
                      strokeDashoffset="0"
                    />
                    {/* Fundraising 14.5% */}
                    <circle
                      cx="50" cy="50" r="38"
                      fill="none"
                      stroke="hsl(var(--zl-teal))"
                      strokeWidth="18"
                      strokeDasharray={`${14.5 * 2.388} ${100 * 2.388}`}
                      strokeDashoffset={`${-80 * 2.388}`}
                    />
                    {/* Admin 5.5% */}
                    <circle
                      cx="50" cy="50" r="38"
                      fill="none"
                      stroke="hsl(var(--zl-yellow))"
                      strokeWidth="18"
                      strokeDasharray={`${5.5 * 2.388} ${100 * 2.388}`}
                      strokeDashoffset={`${-(80 + 14.5) * 2.388}`}
                    />
                  </svg>
                </div>
              </div>

              {/* Legend */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-extrabold text-primary">80%</div>
                  <div className="text-xs font-semibold text-primary mt-1">
                    Programmes &<br />Community Impact
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-zl-teal">14.5%</div>
                  <div className="text-xs font-semibold text-zl-teal mt-1">
                    Fundraising
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-secondary">5.5%</div>
                  <div className="text-xs font-semibold text-secondary mt-1">
                    Admin Cost
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5a5a5a] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo & Social */}
            <div className="lg:col-span-2">
              <a href="https://www.zoe-life.org/" target="_blank" rel="noopener noreferrer">
                <img src={logoWhite} alt="Zoë-Life" className="h-14 mb-2" />
              </a>
              <p className="text-white/70 text-sm mb-4">building resilient futures</p>
              <div className="flex gap-3 mb-6">
                {[
                  { href: "https://www.facebook.com/zaboralife", label: "Facebook", icon: "f" },
                  { href: "https://www.instagram.com/zaboralife", label: "Instagram", icon: "○" },
                  { href: "https://www.linkedin.com/company/zoe-life", label: "LinkedIn", icon: "in" },
                  { href: "https://www.tiktok.com/@zoelife", label: "TikTok", icon: "♪" },
                  { href: "https://www.youtube.com/@zoe-life", label: "YouTube", icon: "▶" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white text-xs font-bold transition-colors" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
              <div className="text-white/50 text-xs space-y-1">
                <p>© {new Date().getFullYear()} Zoë-Life Innovative Solutions NPC</p>
                <p>All rights reserved.</p>
                <p className="italic">Unauthorised use and/or duplication of any material without express and written permission from this site's author and/or owner is strictly prohibited.</p>
                <p className="mt-2">NPC 2012/109367/08</p>
              </div>
            </div>

            {/* Organisation + Get Involved */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Organisation</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="https://www.zoe-life.org/who-we-are" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">Who We Are</a></li>
                <li><a href="https://www.zoe-life.org/what-we-do" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">What We Do</a></li>
                <li><a href="https://www.zoe-life.org/zoe-life-learning" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">Zoë-Life Learning</a></li>
                <li><a href="https://www.zoe-life.org/research-and-evidence" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">Research and Evidence</a></li>
              </ul>
              <h4 className="text-white font-bold text-lg mt-8 mb-4">Get Involved</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="https://www.zoe-life.org/sustainability" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">Sustainability</a></li>
                <li><a href="https://www.zoe-life.org/fund" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">Fund</a></li>
                <li><a href="https://www.zoe-life.org/donate" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">Donate</a></li>
              </ul>
              <ul className="space-y-2 text-white/70 text-sm mt-4">
                <li><a href="https://www.zoe-life.org/contact-us" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">Contact Us</a></li>
                <li><a href="https://www.zoe-life.org/vacancies" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">Vacancies</a></li>
              </ul>
            </div>

            {/* Projects + YouThrive */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Projects</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="https://www.zoe-life.org/projects-kidzalive-at-home" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">KidzAlive@home</a></li>
                <li><a href="https://www.zoe-life.org/projects-kidzalive-mobilised" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">KidzAlive Mobilised</a></li>
                <li><a href="https://www.zoe-life.org/projects-kidzalive-mozambique" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">KidzAlive Mozambique</a></li>
                <li><a href="https://www.zoe-life.org/projects-youthrive-life-skills" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">YouThrive Life Skills</a></li>
                <li><a href="https://www.zoe-life.org/projects-youthrive-together" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">YouThrive Together</a></li>
              </ul>
              <h4 className="text-white font-bold text-lg mt-8 mb-4">YouThrive</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="https://www.zoe-life.org/youthrive-model" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">YouThrive Model</a></li>
              </ul>
            </div>

            {/* KidzAlive + Policies and Terms */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">KidzAlive</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="https://www.zoe-life.org/kidzalive-model" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">KidzAlive Model</a></li>
                <li><a href="https://www.zoe-life.org/kidzalive-talk-tool-app" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">KidzAlive Talk Tool App</a></li>
                <li><a href="https://www.zoe-life.org/kidzalive-caregiver-connect" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">KidzAlive Caregiver Connect</a></li>
                <li><a href="https://www.zoe-life.org/kidzalive-courses" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">KidzAlive Courses</a></li>
              </ul>
              <h4 className="text-white font-bold text-lg mt-8 mb-4">Policies and Terms</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="https://www.zoe-life.org/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">Privacy Policy</a></li>
                <li><a href="https://www.zoe-life.org/social-media-terms-of-use" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">Social Media Terms of Use</a></li>
              </ul>
              <p className="text-white/70 text-xs mt-6 font-bold">Unless expressly specified, the presence of individuals on this website does not imply any information about their HIV status.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
