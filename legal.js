// Centralised legal text — reused by ConsentModal and Profile overlays

export const PRIVACY_POLICY = {
  title: 'Privacy Policy',
  lastUpdated: 'Updated April 2026',
  heading: 'OUR COMMITMENT TO YOUR PRIVACY',
  intro: 'We strongly believe that travel should be freeing, not an opportunity to mine your data. Here is exactly how we handle your information in plain English.',
  sections: [
    {
      title: 'Minimal Data Collection',
      body: 'If you create an account, we simply store your email securely using Google Firebase so you can log in across devices. We do not sell your data.',
    },
    {
      title: 'Background Tasks & Location',
      body: 'To provide intelligent features like the Safety Net and Weather Nudges, the app may perform background checks to fetch the weather for your active destination. We never secretly track your live physical GPS coordinates.',
    },
    {
      title: 'Photos & Memory Storage',
      body: 'Any photos you take for your travel Journal are explicitly saved either locally to your device (for free users) or securely synced to your private Firebase envelope in the cloud (for Pro users) so you never lose them.',
    },
    {
      title: 'AI Processing & Third-Parties',
      body: 'Your itineraries are powered by Groq and TinyFish AI Agents. The destination preferences you enter are securely sent to these engines to generate your trips. They process these requests on their high-speed servers but do not use them to identify you personally.',
    },
    {
      title: 'Where Your Data Lives',
      body: 'Your saved trips and profile settings live on our secure Firebase database. If you use the app anonymously without logging in, your trips stay locally on your device.',
    },
    {
      title: 'Your Right to Be Forgotten',
      body: 'You have full control. At any point, you can navigate to the Profile screen and permanently delete your account, wiping all your associated trips and data from our servers instantly.',
    },
    {
      title: 'Contact Us',
      body: 'If you have any questions or concerns regarding how your data is handled, please reach out to us at yaoprox0@gmail.com.',
    },
  ],
};

export const TERMS_OF_SERVICE = {
  title: 'Terms of Service',
  lastUpdated: 'Updated April 2026',
  heading: 'RULES OF THE ROAD',
  intro: 'Welcome to ItinFinder. By using our app, you agree to these simple terms. Please read them before embarking on your journey.',
  sections: [
    {
      title: 'AI is Your Co-Pilot, Not Your Guide',
      body: 'Our AI is incredibly powerful, but it\'s still artificial. Opening hours change, restaurants close, and buses run late. ItinFinder provides travel inspiration and structure, but you must independently verify critical details before travelling.',
    },
    {
      title: 'Responsible Use',
      body: 'Our platform is designed to help people explore the world. You agree not to reverse engineer our generation pipelines, spam our AI engines, or use the app for illegal activities.',
    },
    {
      title: 'Pro Subscriptions',
      body: 'Pro lifetime access offers unlimited generations and access to live web-scraping agents. It is tied to your account and cannot be transferred. Abuse of our generation limits may result in account termination.',
    },
    {
      title: 'Intellectual Property',
      body: 'The design, code, and branding of ItinFinder belong to us. We’ve poured our hearts into building this, please don’t copy it or redistribute it without permission.',
    },
    {
      title: 'Limitation of Liability',
      body: 'To the maximum extent permitted by law, ItinFinder and its creators are not responsible for ruined vacations, missed flights, or any damages occurring from using our AI recommendations. Travel safely and at your own risk.',
    },
  ],
};
