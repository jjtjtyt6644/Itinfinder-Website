# 🌍 ItinFinder - Intelligent Travel Planning

![ItinFinder Banner](https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1200)

ItinFinder is an AI-powered travel ecosystem designed to transform vague travel desires into highly detailed, actionable itineraries. Combining advanced LLMs with real-time web scraping, it offers a dual-mode experience tailored to every traveler's needs.

##  Features

###  Dual Generation Modes
- **Simple Mode (~10s)**: High-speed itinerary generation using Groq LLaMA 3.3 70B knowledge. Ideal for quick brainstorming and foundational planning.
- **Deep Mode (~30s)**: Powered by TinyFish AI web agents that scrape real-time attraction hours, restaurant availability, and local events for unmatched accuracy.

###  Complete Ecosystem
- **Budget Finder**: Intelligent destination recommendations based on your budget and timeframe.
- **Alternative Suggestions**: Instant AI-generated alternatives for any activity in your plan.
- **Travel Journaling**: Log daily memories directly within your trip.
- **Community Explore**: Browse and share trending itineraries from travelers worldwide.

###  Smart & Secure
- **Rate Limiting**: Fair usage with 5 free daily requests.
- **Multi-language**: Fully localized support for English, Spanish, French, German, and Japanese.

##  Technology Stack

- **Frontend**: React Native & Expo (Mobile App), HTML5 & Tailwind CSS (Presentation/Web)
- **AI Core**: Groq (LLaMA 3.3 70B), TinyFish (Autonomous Web Agents)
- **Backend/Services**: Firebase (Auth & Database), Open-Meteo (Weather Data), Stripe (Payments)

##  Project Structure

```text
├── index.html          # Main presentation and project overview
├── downloads.html      # Mobile application download portal
├── privacy.html        # Privacy policy and terms of service
├── apkfile/            # Contains latest application builds
│   └── ItinFinder.apk  # Latest Android build
└── push.bat            # Automated deployment script
```

##  Getting Started

1. Visit the [Download Page](downloads.html) to get the latest APK.
2. Ensure "Install from Unknown Sources" is enabled on your Android device.
3. Launch ItinFinder and start planning your next adventure!

##  License & Privacy

ItinFinder is built with privacy at its core. Your data is stored securely via Firebase. For full details, see our [Privacy Policy](privacy.html).

---

*Made for ItinFinder Travelers.*
