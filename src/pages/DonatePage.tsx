import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Users, Globe, Award, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/donate-hero.jpg";
import logo from "@/assets/zl-logo.png";

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
    title: "Child-Centred HIV Care",
    description:
      "KidzAlive provides groundbreaking chronic care tailored for children navigating HIV, TB, and childhood trauma.",
  },
  {
    title: "Award-Winning Innovation",
    description:
      "Winner of the 2024 Global Mobile Award for Best Mobile Innovation enhancing the lives of children and young people.",
  },
  {
    title: "Youth Empowerment",
    description:
      "YouThrive equips young people aged 13-24 with holistic health education, career guidance, and psychosocial support.",
  },
  {
    title: "Tax-Deductible Impact",
    description:
      "Bank transfers and PayPal donations from South African residents are tax-deductible. Every rand makes a difference.",
  },
];

export default function DonatePage() {
  const scrollToForm = () => {
    document.getElementById("donate-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <a href="https://www.zoe-life.org/" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="Zoë-Life" className="h-12" />
          </a>
          <Button
            onClick={scrollToForm}
            className="bg-primary text-primary-foreground hover:bg-zl-green-dark font-semibold rounded-full px-6"
          >
            <Heart className="w-4 h-4 mr-2" />
            Donate Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16">
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
            Now it needs your help to protect what's been built and power the next chapter of impact.
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

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Donorbox Embed */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border"
            >
              <div className="bg-primary px-6 py-4">
                <h3 className="text-xl font-bold text-primary-foreground flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Donate to Zoë-Life
                </h3>
              </div>
              <div className="p-4 text-sm text-muted-foreground border-b border-border">
                Donate here by card, PayPal or Google/Apple Pay (when available). Or donate by Bank Transfer below to avoid fees.
                <br />
                Bank transfers and PayPal donations from South African residents are <strong className="text-foreground">tax-deductible</strong>.
              </div>
              <div className="p-2">
                <iframe
                  src="https://donorbox.org/embed/zoe-life-operations-funding-gap?default_interval=m&enable_auto_scroll=true"
                  name="donorbox"
                  allowPaymentRequest
                  seamless
                  frameBorder="0"
                  scrolling="no"
                  height="900"
                  width="100%"
                  style={{
                    maxWidth: "500px",
                    minWidth: "250px",
                    maxHeight: "none !important" as any,
                  }}
                  allow="payment"
                  title="Donate to Zoë-Life"
                />
              </div>
            </motion.div>

            {/* Why Give */}
            <div className="space-y-6">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-foreground"
              >
                Why Your Support Matters
              </motion.h3>

              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-foreground mb-2 text-lg">{reason.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                </motion.div>
              ))}

              {/* Bank Transfer Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-primary/10 rounded-xl p-6 border border-primary/20"
              >
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  🏦 Bank Transfer (EFT)
                </h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p><strong className="text-foreground">Account:</strong> Zoë-Life iNPC</p>
                  <p><strong className="text-foreground">Bank:</strong> First National Bank (FNB)</p>
                  <p><strong className="text-foreground">Account No:</strong> 62785888605</p>
                  <p><strong className="text-foreground">Branch Code:</strong> 250655</p>
                  <p><strong className="text-foreground">Reference:</strong> Your Name + Donation</p>
                  <p className="mt-2 text-xs italic">
                    Email proof of payment to{" "}
                    <a href="mailto:donate@zoe-life.org" className="text-primary font-medium hover:underline">
                      donate@zoe-life.org
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency / What's at Stake */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-zl-yellow font-bold tracking-widest text-sm uppercase">What's at Stake</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-4 mb-6">
              A Critical Moment: The Impact of Funding Cuts
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
              Recent funding cuts have left Zoë-Life's operational budget critically underfunded.
              Without bridging support, initiatives that reach{" "}
              <strong className="text-primary-foreground">tens of thousands of children, caregivers, and community health workers</strong>{" "}
              will be forced to close.
            </p>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Among these is the <strong className="text-zl-yellow">KidzAlive TalkTool app</strong>, winner of the
              2024 GSMA Global Mobile Award — an innovation that's transforming paediatric HIV care across Africa.
            </p>
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-zl-yellow text-secondary-foreground hover:bg-zl-yellow/90 rounded-full px-10 py-6 font-bold text-lg shadow-lg"
            >
              Help Keep the Momentum Alive
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonial / Trust */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl italic text-foreground font-light leading-relaxed"
          >
            "Zoë-Life is focused on bringing wholeness to children, youth and families.
            From its beginnings as a responder to the HIV crisis, it has grown into a vibrant
            social innovation consultancy creating impactful solutions with a global reach."
          </motion.blockquote>
          <p className="mt-6 text-muted-foreground font-semibold">— Zoë-Life Organisation</p>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Our Children • Our Future
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Join thousands of supporters building resilient futures for children across Southern Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8 font-bold"
            >
              <Heart className="w-4 h-4 mr-2" />
              Donate Now
            </Button>
            <a href="https://www.zoe-life.org/" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 font-bold"
              >
                Visit Zoë-Life
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
          <p className="text-primary-foreground/50 text-xs mt-8">
            © {new Date().getFullYear()} Zoë-Life iNPC · Building Resilient Futures Since 2004
          </p>
        </div>
      </footer>
    </div>
  );
}
