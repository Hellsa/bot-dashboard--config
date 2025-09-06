"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, Check, Star, Shield, Zap, Users, BarChart3, Cog, Lock, RefreshCw, Webhook, ArrowRight, CheckCircle } from "lucide-react";

export default function PremiumPage() {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const freeFeatures = [
    "Basic commands",
    "Level system",
    "Basic moderation",
    "Music commands",
    "Standard support",
    "5 custom commands"
  ];

  const premiumFeatures = [
    "Custom level rewards",
    "Economy system",
    "AI auto-moderation",
    "Custom welcome cards",
    "Priority support",
    "Server analytics",
    "Custom bot status",
    "No command cooldowns",
    "Custom prefixes",
    "50 custom commands",
    "Webhook integrations"
  ];

  const premiumPlusFeatures = [
    "All Premium features",
    "Advanced role management",
    "Backup & restore",
    "API access",
    "White-label options",
    "Custom branding",
    "Unlimited custom commands",
    "Multi-server management",
    "Advanced analytics",
    "24/7 priority support"
  ];

  const faqs = [
    {
      question: "What happens if I cancel my subscription?",
      answer: "You'll retain access to premium features until the end of your billing period. After that, your server will revert to the free tier with all data preserved."
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: "Yes! You can change your plan at any time. Upgrades take effect immediately, while downgrades apply at the next billing cycle."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 14-day money-back guarantee. If you're not satisfied, contact our support team for a full refund."
    },
    {
      question: "Do premium features work across multiple servers?",
      answer: "Premium features are tied to your Discord account and work on any server where you have administrator permissions and Shinaky is installed."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and various regional payment methods through our secure payment processor."
    }
  ];

  const getPricing = (monthly: number, yearly: number) => ({
    monthly,
    yearly,
    yearlySavings: Math.round(((monthly * 12 - yearly) / (monthly * 12)) * 100)
  });

  const premiumPricing = getPricing(4.99, 49.99);
  const premiumPlusPricing = getPricing(9.99, 99.99);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#33a65b]/10 to-transparent" />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#33a65b]/20 to-[#37b764]/20 px-4 py-2 rounded-full border border-[#33a65b]/30 mb-6">
              <Crown className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Premium Features</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Unlock Shinaky's
              <span className="bg-gradient-to-r from-[#33a65b] to-[#37b764] bg-clip-text text-transparent"> Full Potential</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Take your Discord server to the next level with advanced features, AI-powered moderation, and priority support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-[#33a65b] to-[#37b764] hover:from-[#2d8a4f] hover:to-[#2d8a4f] text-white px-8 py-3 text-lg font-semibold">
                <Crown className="w-5 h-5 mr-2" />
                Try Premium Free
              </Button>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-[#33a65b]" />
                14-day money-back guarantee
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>10,000+ Premium Servers</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-[#1a1a1a] rounded-lg p-1 border border-[#333333]">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-md transition-all ${!isYearly ? 'bg-[#33a65b] text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-md transition-all relative ${isYearly ? 'bg-[#33a65b] text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Yearly
              <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs">
                Save 17%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Tier */}
          <Card className="bg-[#1a1a1a] border-[#333333] relative">
            <CardHeader>
              <CardTitle className="text-2xl">Free</CardTitle>
              <CardDescription>Perfect for getting started</CardDescription>
              <div className="text-4xl font-bold mt-4">$0</div>
              <div className="text-gray-400">Forever</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {freeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#33a65b] flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full mt-6">
                Current Plan
              </Button>
            </CardContent>
          </Card>

          {/* Premium Tier */}
          <Card className="bg-gradient-to-b from-[#33a65b]/10 to-[#1a1a1a] border-[#33a65b] relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-[#33a65b] to-[#37b764] text-white px-4 py-1">
                Most Popular
              </Badge>
            </div>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Crown className="w-6 h-6 text-yellow-400" />
                <CardTitle className="text-2xl">Premium</CardTitle>
              </div>
              <CardDescription>For growing Discord communities</CardDescription>
              <div className="text-4xl font-bold mt-4">
                ${isYearly ? premiumPricing.yearly : premiumPricing.monthly}
                {isYearly && <span className="text-lg text-gray-400">/year</span>}
                {!isYearly && <span className="text-lg text-gray-400">/month</span>}
              </div>
              {isYearly && (
                <div className="text-sm text-[#33a65b]">
                  Save ${(premiumPricing.monthly * 12 - premiumPricing.yearly).toFixed(2)} per year
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#33a65b] flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-6 bg-gradient-to-r from-[#33a65b] to-[#37b764] hover:from-[#2d8a4f] hover:to-[#2d8a4f]">
                <Crown className="w-4 h-4 mr-2" />
                Upgrade to Premium
              </Button>
            </CardContent>
          </Card>

          {/* Premium+ Tier */}
          <Card className="bg-[#1a1a1a] border-[#333333] relative">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Crown className="w-6 h-6 text-yellow-400" />
                <CardTitle className="text-2xl">Premium+</CardTitle>
              </div>
              <CardDescription>For large servers and organizations</CardDescription>
              <div className="text-4xl font-bold mt-4">
                ${isYearly ? premiumPlusPricing.yearly : premiumPlusPricing.monthly}
                {isYearly && <span className="text-lg text-gray-400">/year</span>}
                {!isYearly && <span className="text-lg text-gray-400">/month</span>}
              </div>
              {isYearly && (
                <div className="text-sm text-[#33a65b]">
                  Save ${(premiumPlusPricing.monthly * 12 - premiumPlusPricing.yearly).toFixed(2)} per year
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {premiumPlusFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#33a65b] flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full mt-6 border-[#33a65b] text-[#33a65b] hover:bg-[#33a65b] hover:text-white">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Premium Features</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the powerful features that make Shinaky Premium the ultimate Discord bot solution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "AI Auto-Moderation",
              description: "Advanced AI detection for spam, toxicity, and inappropriate content with customizable sensitivity levels."
            },
            {
              icon: BarChart3,
              title: "Server Analytics",
              description: "Detailed insights into your server activity, member engagement, and growth trends."
            },
            {
              icon: Shield,
              title: "Advanced Security",
              description: "Protect your server with intelligent raid protection, anti-spam filters, and security alerts."
            },
            {
              icon: Users,
              title: "Custom Welcome Cards",
              description: "Create stunning welcome messages with custom backgrounds, fonts, and personalized member information."
            },
            {
              icon: Cog,
              title: "Custom Commands",
              description: "Build unlimited custom commands with advanced scripting capabilities and user variables."
            },
            {
              icon: Webhook,
              title: "Webhook Integrations",
              description: "Connect with external services and automate workflows with powerful webhook integrations."
            }
          ].map((feature, index) => (
            <Card key={index} className="bg-[#1a1a1a] border-[#333333] hover:border-[#33a65b]/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-[#33a65b]/20 to-[#37b764]/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-[#33a65b]/30 group-hover:to-[#37b764]/30 transition-all">
                  <feature.icon className="w-6 h-6 text-[#33a65b]" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions about Shinaky Premium? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-[#1a1a1a] border-[#333333]">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-6 text-left hover:bg-[#222222] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <ArrowRight className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-90' : ''}`} />
                </div>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-[#33a65b]/10 to-[#37b764]/10 rounded-3xl p-12 text-center border border-[#33a65b]/20">
          <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Ready to Go Premium?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of Discord servers that have upgraded their community experience with Shinaky Premium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-[#33a65b] to-[#37b764] hover:from-[#2d8a4f] hover:to-[#2d8a4f] text-white px-8 py-3 text-lg">
              <Crown className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-[#33a65b] text-[#33a65b] hover:bg-[#33a65b] hover:text-white px-8 py-3 text-lg">
              View Demo Server
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#33a65b]" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#33a65b]" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#33a65b]" />
              <span>Money-back guarantee</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}