const insuranceDatabase = {
  products: [
    {
      id: 1,
      name: "Expat Health Plus",
      type: "Health Insurance",
      target: "Expats in Thailand",
      coverage: ["Hospital care", "Outpatient treatment", "Emergency evacuation"],
      monthlyPrice: 1800,
      currency: "THB",
      description: "A flexible health plan for professionals and families living in Thailand."
    },
    {
      id: 2,
      name: "Travel Safe Expat",
      type: "Travel Insurance",
      target: "Frequent travelers and short-term expats",
      coverage: ["Trip cancellation", "Medical emergencies", "Lost baggage"],
      monthlyPrice: 900,
      currency: "THB",
      description: "Ideal for expats who travel often between Thailand and overseas."
    },
    {
      id: 3,
      name: "Family Secure Plan",
      type: "Family Protection",
      target: "Expat families",
      coverage: ["Family health", "Dental care", "Accident protection"],
      monthlyPrice: 2600,
      currency: "THB",
      description: "A family-focused plan with wider protection for dependents."
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Sarah M.",
      nationality: "British",
      city: "Bangkok",
      message: "The process was simple, and the coverage was easy to understand."
    },
    {
      id: 2,
      name: "Daniel K.",
      nationality: "German",
      city: "Chiang Mai",
      message: "I felt secure knowing I had support during medical emergencies."
    }
  ],

  faqs: [
    {
      id: 1,
      question: "Can expats buy this insurance in Thailand?",
      answer: "Yes, the plan is designed for expatriates living and working in Thailand."
    },
    {
      id: 2,
      question: "Does the plan cover emergency treatment?",
      answer: "Yes, emergency medical care and evacuation are included in selected plans."
    }
  ],

  contactInfo: {
    email: "support@expatinsurance.co.th",
    phone: "+66 81 234 5678",
    address: "Bangkok, Thailand"
  }
};

console.log("Insurance database ready:", insuranceDatabase);

module.exports = insuranceDatabase;
