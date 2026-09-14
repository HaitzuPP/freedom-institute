window.FI_REPORT = {
  "id": "price",
  "issue": "Issue 03",
  "period": "Q2 2027",
  "status": "Vendor list prices fetched from the vendors' own pages on 14 September 2026, with published research and regulatory decisions for everything that is not a price. No institute testing.",
  "title": "The price of choosing the private option",
  "standfirst": "A minimum privacy basket costs EUR 107.88 a year, while refusing tracking consent on the 29 German top-100 sites that run pay-or-okay costs EUR 1,528.87. This report priced the private option across seven product categories, built three worked annual baskets from those prices, and set beside them the time cost and the function cost that no price tag shows. The dominant cash cost of privacy is not buying protection; it is paying each publisher separately not to be watched.",
  "stats": [
    {
      "v": "244 hours",
      "k": "To read the policies",
      "d": "One person, one year, reading the privacy policy of each site they visit once; a 2008 estimate that has never been re-run at the same scope",
      "by": "McDonald and Cranor, 2008",
      "src": "https://aleecia.com/authors-drafts/readingPolicyCost-AV.pdf"
    },
    {
      "v": "11.8%",
      "k": "Lawful consent pop-ups",
      "d": "Of 680 pop-ups scraped from the top 10,000 UK websites, the share meeting the minimal requirements the researchers derived from European law",
      "by": "Nouwens, Liccardi, Veale, Karger and Kagal, CHI 2020",
      "src": "https://arxiv.org/abs/2001.02479"
    },
    {
      "v": "EUR 1,528.87",
      "k": "The cost of saying no",
      "d": "A year of refusing consent across the 29 German top-100 sites running pay-or-okay, which noyb, an advocacy group, calculates as about 5% of average German net income",
      "by": "noyb, 24 July 2025",
      "src": "https://noyb.eu/sites/default/files/2025-07/Pay_or_Okay_Report_2025_web.pdf"
    }
  ],
  "findings": [
    "The tools are cheap and the tolls are not: a full minimum privacy basket costs EUR 107.88 a year, while refusing tracking on just the 29 German top-100 sites that run pay-or-okay costs EUR 1,528.87, roughly fourteen times more.",
    "Pay-or-consent is a consent-manufacturing device rather than a pricing model, because only about 0.1% of users take the paid option while consent rates rise from 65 to 85 per cent up to 99 per cent, and publisher income rises about 0.82% from the extra consent rather than from subscriptions.",
    "The free private options are financially dependent on the surveillance economy they are sold as an escape from: 86% of Mozilla's revenue from customers with contracts came from a single customer in 2024, and DuckDuckGo and Brave Search both monetise through ad networks.",
    "The most expensive part of the private option is function rather than money, because GrapheneOS documents national government identity apps in Italy, Brazil, Australia and Singapore refusing to run on the basis of a Google licensing check rather than any published security criterion.",
    "Privacy tooling is priced for the people who need it least, since every recurring price in this ladder is denominated in euros or dollars for high-income markets while ITU data shows subscribers in low-income economies already spend about 22 times more of their income on mobile broadband alone."
  ],
  "sections": [
    {
      "n": "01",
      "kicker": "PRICE LADDER",
      "title": "Every private option is either paid for by the user or paid for by someone selling ads",
      "intro": "Across seven categories where a mainstream default exists, the private alternative falls into three shapes: a subscription paid by the user, a free tier cross-subsidised by that vendor's own paying customers, or a free product funded by reselling someone else's advertising inventory. Only one category, password management, offers a private option that is genuinely free and independent. The table below is the full ladder as displayed to this session, with the date each price was checked.",
      "paras": [
        "The structural point in search is the clearest. Firefox, DuckDuckGo and Brave are free because search-default royalties and ad networks pay for them. Mozilla's audited financials for the year ended 31 December 2024 record total revenue of USD 680,409 thousand, of which USD 498,218 thousand, or 73.3%, was royalty revenue, with the concentration disclosure stating that approximately 86% and 85% of revenues from customers with contracts came from one customer in 2024 and 2023. Kagi is the only option in that row whose entire revenue comes from the user, and it is also the only one that charges.",
        "In storage the default provider is itself the clearest case of privacy sold as an upgrade: every paid iCloud+ tier includes iCloud Private Relay and Hide My Email, and the free 5 GB tier does not. At 2 TB, iCloud+ and Google One Premium both cost USD 9.99 a month against Proton Duo at EUR 19.99 a month, or EUR 14.99 a month annualised, so the end-to-end-encrypted option runs roughly 1.5 to 2 times the mainstream price at the same capacity, before any currency question.",
        "Handset cost is not a clean privacy premium. GrapheneOS software is free, but it runs only on recent Google Pixel hardware, and the counterfactual user buys a phone too. The marginal cost is the gap between the phone you must buy and the phone you would have bought, plus the exclusion of every cheaper handset the project does not support. For a user whose realistic alternative is a sub-USD-200 Android device, that marginal cost is roughly USD 300, not USD 0 and not USD 499."
      ],
      "entries": [
        {
          "name": "Tuta (Tutanota) Revolutionary and Legend",
          "meta": "Vendor announcement dated 6 June 2023; re-check attempted 14 September 2026",
          "flag": "open",
          "fields": [
            ["Price as published", "Revolutionary EUR 3 per month, 20 GB; Legend EUR 8 per month, 500 GB"],
            ["Date checked", "Announcement dated 6 June 2023; not verified as current on 14 September 2026"],
            ["Why unverified", "tuta.com/pricing renders prices in JavaScript and returned placeholders to automated fetch"],
            ["Funding model", "Subscriptions; the free tier is cross-subsidised by paying users, not by advertising"],
            ["Status for publication", "Treat as a 2023 figure and re-check manually before printing"]
          ],
          "note": "This price is stale rather than merely unconfirmed: it comes from a vendor announcement three years old, and the current vendor page could not be read.",
          "src": {
            "t": "Tuta, announcement of new prices",
            "u": "https://tuta.com/blog/announcement-new-prices"
          }
        },
        {
          "name": "Brave Search Premium",
          "meta": "Brave blog post dated 1 December 2022; re-check attempted 14 September 2026",
          "flag": "open",
          "fields": [
            ["Price as published", "USD 3 per month for ad-free results; the free tier is ad-supported"],
            ["Date checked", "Blog post dated 1 December 2022; price not confirmed current on 14 September 2026"],
            ["Why unverified", "search.brave.com/help/premium confirms ad-free results for subscribers but does not restate a price"],
            ["Funding model", "Brave's own advertising products and search ads fund the free tier"],
            ["Status for publication", "A 2022 figure, not a verified current list price"]
          ],
          "note": "The product is confirmed to exist at the checked date; only the price is a four-year-old figure.",
          "src": {
            "t": "Brave, private search and ads",
            "u": "https://brave.com/blog/private-search-ads/"
          }
        },
        {
          "name": "Threema",
          "meta": "threema.com pricing and cost FAQ, checked 14 September 2026",
          "flag": "open",
          "fields": [
            ["Consumer price", "One-time purchase displayed as \"6.00\" with no currency symbol"],
            ["Date checked", "14 September 2026"],
            ["Vendor's own qualification", "The price depends on the app store and country; \"once the app has been purchased, there are no recurring costs\""],
            ["Business tiers", "Threema Work Core 3.00 per user per month and Professional 5.00 per user per month, billed annually, currency likewise unstated"],
            ["Funding model", "One-time purchase and per-seat business subscriptions; no advertising"]
          ],
          "note": "The currency is genuinely indeterminate from the source, so this line cannot be added to any currency total.",
          "src": {
            "t": "Threema, cost FAQ",
            "u": "https://threema.com/en/faq/cost"
          }
        },
        {
          "name": "Proton VPN Plus",
          "meta": "Cybernews review page, updated 5 June 2026; vendor page checked 14 September 2026",
          "flag": "open",
          "fields": [
            ["Price as reported", "USD 9.99 per month; USD 47.88 per year, that is USD 3.99 per month; USD 71.76 for two years, that is USD 2.99 per month"],
            ["Date checked", "Secondary source updated 5 June 2026; vendor page checked and unreadable 14 September 2026"],
            ["Why unverified", "protonvpn.com/pricing renders prices in JavaScript and returned placeholders"],
            ["Rate type", "The annual and two-year rates are promotional first-term rates, not regular list prices"],
            ["Free tier", "Proton VPN Free at USD 0 gives one device, medium speed and randomly assigned servers in ten countries, checked 14 September 2026"]
          ],
          "note": "These figures come from a secondary source and are promotional rates; they should not be printed as vendor list prices without a manual check.",
          "src": {
            "t": "Cybernews, Proton VPN pricing",
            "u": "https://cybernews.com/best-vpn/protonvpn-review/pricing/"
          }
        },
        {
          "name": "Google One storage tiers and DuckDuckGo Privacy Pro",
          "meta": "one.google.com and duckduckgo.com/pro, checked 14 September 2026",
          "flag": "none",
          "fields": [
            ["Google One, what was verified", "The 15 GB free tier shared across Gmail, Drive and Photos, checked 14 September 2026"],
            ["Google One, what was not", "The 100 GB and 200 GB storage-only tier prices; one.google.com/about/plans renders prices in JavaScript"],
            ["Google One, secondary figures", "Premium 2 TB at USD 9.99 per month and AI Plus at USD 7.99 per month including 200 GB, reported by 9to5Google on 27 January 2026"],
            ["DuckDuckGo Privacy Pro", "Bundles VPN, personal information removal and identity theft restoration; price could not be verified because duckduckgo.com/pro is disallowed to automated fetch"],
            ["Date checked", "14 September 2026 for both"]
          ],
          "note": "Neither price could be obtained from a first-party page, and neither is used in the baskets in section 02.",
          "src": {
            "t": "Google One plans",
            "u": "https://one.google.com/about/plans"
          }
        },
        {
          "name": "Bitwarden Free",
          "meta": "bitwarden.com/pricing, checked 14 September 2026",
          "flag": "fine",
          "fields": [
            ["Price", "USD 0, unlimited devices, core password management"],
            ["Date checked", "14 September 2026"],
            ["Paid tiers", "Premium USD 1.65 per month billed annually at USD 19.80 per year; Families USD 3.99 per month billed annually at USD 47.88 per year for up to 6 users"],
            ["Vendor qualification", "\"Pricing shown in USD and based on an annual subscription. Taxes not included.\""],
            ["Funding model", "Premium, Families, Business and enterprise licensing"]
          ],
          "note": "This is the one category in the ladder where the private option genuinely costs nothing and is not funded by advertising.",
          "src": {
            "t": "Bitwarden pricing",
            "u": "https://bitwarden.com/pricing/"
          }
        },
        {
          "name": "1Password price increase",
          "meta": "1password.com/pricing/personal, checked 14 September 2026; MacRumors, 24 February 2026",
          "flag": "produced",
          "fields": [
            ["Current regular prices", "Individual USD 3.99 per month, that is USD 47.88 per year; Families USD 5.99 per month, that is USD 71.88 per year for up to 5 members"],
            ["Date checked", "14 September 2026"],
            ["Promotional rates", "USD 2.99 per month Individual and USD 4.49 per month Families, new customers, first year, annual billing only"],
            ["The increase", "Individual rose from USD 35.88 to USD 47.88 per year and Families from USD 59.88 to USD 71.88 per year, effective 27 March 2026"],
            ["Why it matters", "A category-leading private option raised its price by a third inside the last two years, which is the strongest available evidence that any basket total is perishable"]
          ],
          "note": "The increase is confirmed by an independent report as well as the vendor's current page.",
          "src": {
            "t": "MacRumors, 1Password March price increase",
            "u": "https://www.macrumors.com/2026/02/24/1password-march-price-increase/"
          }
        }
      ],
      "table": {
        "cols": ["Category", "Option", "Price and date checked", "What funds it"],
        "rows": [
          ["Email", "Gmail (default)", "Free, 15 GB shared across Gmail, Drive and Photos; checked 14 Sep 2026", "Advertising, plus the Google One upsell once the 15 GB fills"],
          ["Email", "Proton Mail Plus", "EUR 4.99 per month, or EUR 47.88 per year (EUR 3.99 per month effective), 15 GB; checked 14 Sep 2026", "User subscriptions"],
          ["Email", "Proton Unlimited", "EUR 12.99 per month, or EUR 119.88 per year (EUR 9.99 per month effective), 500 GB with Mail, Drive, VPN, Pass and Calendar; checked 14 Sep 2026", "User subscriptions"],
          ["Email", "Proton Free", "Free, 1 GB Mail plus 5 GB Drive; checked 14 Sep 2026", "Cross-subsidised by Proton's own paying subscribers, not by ads"],
          ["Email", "Tuta Revolutionary and Legend", "EUR 3 per month, 20 GB; EUR 8 per month, 500 GB; vendor announcement dated 6 Jun 2023, not verified current on 14 Sep 2026", "User subscriptions; free tier cross-subsidised"],
          ["Messaging", "WhatsApp (default)", "Free; checked 14 Sep 2026", "Meta's advertising business and business-messaging products"],
          ["Messaging", "iMessage and RCS (default)", "Free, bundled with the handset OS; checked 14 Sep 2026", "Hardware margin and platform services"],
          ["Messaging", "Signal", "USD 0; checked 14 Sep 2026", "Donations and an initial loan from Brian Acton; about USD 33m annual operating budget disclosed in Nov 2023, projected near USD 50m by 2025"],
          ["Messaging", "Threema", "One-time \"6.00\", currency not stated by the vendor; checked 14 Sep 2026", "One-time purchase, no recurring cost"],
          ["Messaging", "Threema Work", "Core 3.00 and Professional 5.00 per user per month, billed annually, currency not stated; checked 14 Sep 2026", "Per-seat business subscriptions"],
          ["Browser and search", "Chrome and Google Search (default)", "Free; checked 14 Sep 2026", "Advertising"],
          ["Browser and search", "Firefox", "Free; checked 14 Sep 2026", "Search-default royalties: USD 498.2m of USD 680.4m total revenue in 2024, with about 86% of contracted revenue from one customer"],
          ["Browser and search", "Brave", "Free; checked 14 Sep 2026", "Brave's own advertising products and search ads"],
          ["Browser and search", "DuckDuckGo", "Free; checked 14 Sep 2026", "Ad clicks handled mostly through Microsoft's ad network, with ads based on the results page rather than the person, plus a similar TripAdvisor arrangement"],
          ["Browser and search", "Brave Search Premium", "USD 3 per month, ad-free; from a blog post dated 1 Dec 2022, price not confirmed current on 14 Sep 2026", "User subscriptions"],
          ["Browser and search", "Kagi", "Starter USD 5 per month (300 searches); Professional USD 10; Ultimate USD 25; 100-search free trial; plus sales tax, 10% off annually; checked 14 Sep 2026", "Entirely user-paid, no advertising"],
          ["Storage and photos", "Google One Premium 2 TB (default)", "USD 9.99 per month, reported 27 Jan 2026", "Subscriptions alongside the advertising business"],
          ["Storage and photos", "Google AI Plus (default)", "USD 7.99 per month including 200 GB, reported 27 Jan 2026", "Subscriptions alongside the advertising business"],
          ["Storage and photos", "iCloud and iCloud+ (default)", "5 GB free; 50 GB USD 0.99, 200 GB USD 2.99, 2 TB USD 9.99, 6 TB USD 29.99, 12 TB USD 59.99 per month; checked 14 Sep 2026", "Hardware margin and subscriptions; Private Relay and Hide My Email are on paid tiers only"],
          ["Storage and photos", "Proton Duo", "EUR 19.99 per month or EUR 179.88 per year, 2 TB; checked 14 Sep 2026", "User subscriptions"],
          ["Storage and photos", "Proton Family", "EUR 29.99 per month or EUR 287.88 per year, 3 TB, up to 6 users; checked 14 Sep 2026", "User subscriptions"],
          ["Storage and photos", "Proton Visionary", "EUR 39.99 per month or EUR 359.88 per year, 6 TB; checked 14 Sep 2026", "User subscriptions"],
          ["Storage and photos", "Proton Drive Free", "Free, 5 GB; checked 14 Sep 2026", "Cross-subsidised by Proton's paying subscribers"],
          ["Storage and photos", "Ente Photos", "Free 10 GB; 50 GB USD 2.49 per month or USD 29.88 per year; 200 GB USD 4.99 or USD 59.88; 1000 GB USD 9.99 or USD 119.88; 2000 GB USD 19.99 or USD 239.88; checked 14 Sep 2026", "User subscriptions"],
          ["VPN", "No VPN (default)", "Free; checked 14 Sep 2026", "The ISP or carrier sees the traffic; carrier security bundles are the upsell"],
          ["VPN", "Mullvad", "EUR 5 per month flat, identical monthly or annually, up to 5 devices, 14-day refund except on cash payments; checked 14 Sep 2026", "User subscriptions, with no discount for longer commitment"],
          ["VPN", "IVPN", "Standard USD 2 per week, USD 6 per month, USD 60 per year, 5 devices; Pro Suite USD 4, USD 10, USD 100, 10 devices; no email at signup, 30-day refund; checked 14 Sep 2026", "User subscriptions"],
          ["VPN", "Proton VPN Free", "USD 0, 1 device, medium speed, servers in 10 countries randomly assigned; checked 14 Sep 2026", "Proton's paying subscribers; deliberately degraded as a funnel"],
          ["VPN", "Proton VPN Plus", "USD 9.99 per month; USD 47.88 per year; USD 71.76 for two years; secondary source updated 5 Jun 2026, promotional first-term rates, vendor page unreadable 14 Sep 2026", "User subscriptions"],
          ["Mobile OS", "Stock Android or iOS (default)", "No separate charge, bundled with the handset; checked 14 Sep 2026", "Advertising for Google services; hardware margin plus services for Apple"],
          ["Mobile OS", "GrapheneOS", "Software free and open source; requires recent Pixel hardware. Pixel 10a USD 499 regular, listed \"From $424\" on promotion, 128 or 256 GB; checked 14 Sep 2026", "Free software; the cost is the supported handset, with a minimum guarantee of 7 years of support from launch on recommended devices"],
          ["Mobile OS", "Murena Fairphone 6 with /e/OS", "EUR 649.99, 256 GB, shipping not included; checked 14 Sep 2026", "Hardware sale"],
          ["Password manager", "Browser-built-in saving (default)", "Free, bundled, tied to the platform account; checked 14 Sep 2026", "The platform"],
          ["Password manager", "Bitwarden Free", "USD 0, unlimited devices; checked 14 Sep 2026", "Premium, Families, Business and enterprise licensing"],
          ["Password manager", "Bitwarden Premium and Families", "USD 1.65 per month at USD 19.80 per year; Families USD 3.99 per month at USD 47.88 per year for 6 users, taxes excluded; checked 14 Sep 2026", "User subscriptions"],
          ["Password manager", "1Password Individual and Families", "Individual USD 3.99 per month (USD 47.88 per year); Families USD 5.99 per month (USD 71.88 per year), up to 5 members; checked 14 Sep 2026, after an increase effective 27 Mar 2026", "User subscriptions"],
          ["Password manager", "Proton Pass Free", "USD 0, unlimited logins and devices, 10 hide-my-email aliases; checked 14 Sep 2026. Pass Plus standalone price not verifiable; included in Proton Unlimited at EUR 12.99 per month", "Proton's paying subscribers"]
        ]
      }
    },
    {
      "n": "02",
      "kicker": "ANNUAL BILL",
      "title": "There is no single annual cost of privacy, and the honest baskets run from EUR 107.88 to EUR 347.88 plus USD 647.76",
      "intro": "Three worked baskets, built only from the prices in section 01. All figures are list prices on 14 September 2026. Prices are not converted between currencies, because vendors price by region rather than by conversion, so euro lines and dollar lines are totalled separately and cannot be collapsed into one headline number. Annual billing is used wherever a vendor offers it, promotional first-year rates are excluded in favour of regular rates, and taxes and VAT are excluded as the vendors exclude them.",
      "paras": [
        "Handset cost sits outside the recurring totals for the reason given in section 01. Amortised separately, the Murena Fairphone 6 at EUR 649.99 over a five-year life is EUR 130.00 per year, and the Pixel 10a at USD 499 over the same life is USD 99.80 per year. Against a EUR 200 mid-range Android over five years, the Fairphone premium is EUR 90 per year, and that marginal figure, not the sticker price, is the honest one.",
        "Per-publisher pay-or-okay subscriptions are also excluded here and handled in section 04, because they are unbounded in number. That exclusion is what makes these totals look modest.",
        "These are list prices as displayed to a request originating from one session on one date. Vendors price by region, run near-continuous promotions, and change prices without notice; 1Password raised its Individual plan by a third on 27 March 2026. Any reader's actual bill will differ."
      ],
      "entries": [
        {
          "name": "Basket 1: minimum viable privacy",
          "meta": "One adult; list prices of 14 September 2026",
          "flag": "",
          "fields": [
            ["Email", "Proton Mail Plus, annual: EUR 47.88"],
            ["VPN", "Mullvad at EUR 5.00 per month times 12: EUR 60.00"],
            ["Free lines", "Signal, Firefox, DuckDuckGo, Bitwarden Free, GrapheneOS software, and the 15 GB already inside Mail Plus: EUR 0.00 and USD 0.00"],
            ["Arithmetic", "47.88 + (5.00 x 12) = 47.88 + 60.00 = 107.88"],
            ["EUR total", "EUR 107.88 per year, which is EUR 8.99 per month equivalent"],
            ["USD total", "USD 0.00 per year"]
          ],
          "note": "This basket keeps a real mailbox off the ad-funded default, encrypts messaging, blocks network-level observation, and takes the free options everywhere they are genuinely free.",
          "src": {
            "t": "Proton plans",
            "u": "https://proton.me/support/proton-plans"
          }
        },
        {
          "name": "Basket 2: thorough",
          "meta": "One adult; list prices of 14 September 2026",
          "flag": "",
          "fields": [
            ["EUR lines", "Proton Unlimited annual, 500 GB with Mail, Drive, VPN, Pass and Calendar: EUR 119.88. Mullvad on a separate identity from the email account: EUR 60.00"],
            ["USD lines", "Kagi Professional at USD 10.00 times 12: USD 120.00. Ente 200 GB annual: USD 59.88. 1Password Individual at the regular rate: USD 47.88"],
            ["Arithmetic EUR", "119.88 + 60.00 = 179.88 per year"],
            ["Arithmetic USD", "120.00 + 59.88 + 47.88 = 227.76 per year"],
            ["Cheaper substitutions", "Bitwarden Free in place of 1Password takes the USD subtotal to 179.88; Kagi Starter at USD 5 per month for 300 searches in place of Professional takes it to 167.76"],
            ["Excluded from the totals", "Threema at a one-time 6.00 in an unstated currency, which cannot be added to either total"],
            ["Handset, amortised separately", "Murena Fairphone 6 at EUR 649.99 over five years is EUR 130.00 per year; Pixel 10a at USD 499 is USD 99.80 per year"]
          ],
          "note": "The Threema line is excluded because the vendor displays \"6.00\" with no currency and states the price depends on the app store and country.",
          "src": {
            "t": "Kagi pricing",
            "u": "https://kagi.com/pricing"
          }
        },
        {
          "name": "Basket 3: household of four",
          "meta": "Two adults, two children; list prices of 14 September 2026",
          "flag": "",
          "fields": [
            ["EUR lines", "Proton Family annual for up to 6 users, 3 TB: EUR 287.88. Mullvad at EUR 5.00 per month times 12, 5 devices: EUR 60.00"],
            ["USD lines", "Bitwarden Families annual, 6 users: USD 47.88. Kagi, no family plan verified, so four Professional seats at USD 120.00 each: USD 480.00. Ente 1000 GB Pro annual, shareable with up to 5 family members: USD 119.88"],
            ["Arithmetic EUR", "287.88 + 60.00 = 347.88 per year, or 407.88 with the second Mullvad account a genuinely multi-device household needs"],
            ["Arithmetic USD", "47.88 + 480.00 + 119.88 = 647.76 per year, or 407.76 on four Kagi Starter seats at USD 60.00 each"],
            ["What scales", "Proton Family covers six people for 2.4 times the price of one person's Unlimited at EUR 119.88, so suite and storage pricing scales sub-linearly"],
            ["What does not scale", "No Kagi family plan was verified, so search alone is the single largest USD line, larger than storage, password management and photos combined"],
            ["Alternative", "1Password Families at USD 71.88 in place of Bitwarden Families raises the USD total by USD 24.00"]
          ],
          "note": "Family plans are used wherever they exist, because per-seat pricing is the worst case and no household buys it.",
          "src": {
            "t": "Proton plans",
            "u": "https://proton.me/support/proton-plans"
          }
        }
      ]
    },
    {
      "n": "03",
      "kicker": "TIME COST",
      "title": "The 244-hour reading cost is a 2008 estimate, and the later work shows nobody is paying it",
      "intro": "The headline time figure in this field is McDonald and Cranor's finding that reading the privacy policy of every site a person visits once a year would take 244 hours. It is seventeen years old, rests on March 2008 browsing data and a 75-site policy sample, and has never been re-run at the same scope. The later literature measures something different and more damning: not what reading would cost, but that almost nobody reads, and that the interface design decides the outcome in about five seconds.",
      "paras": [
        "The one per-interaction time measurement that is both current and regulator-affiliated is the median 4.1 seconds a French participant spent on a neutral cookie banner, rising to 5.7 seconds where the banner carried behavioural levers. That is small individually and is precisely the mechanism by which the aggregate becomes large. Multiplying it into an annual total would require a banner-encounter rate this research could not verify from any credible source.",
        "On access and deletion rights, the time cost has moved rather than fallen. Large platforms now answer subject access requests fast and inside the legal deadline; Microsoft replied in under five minutes and Apple in under a week. What arrives is often incomplete, outdated or unreadable. The user receives a fast, legally timely, unusable archive, and the regulator that is supposed to backstop them answered only 30.0% of complaints within 90 days against an 80% target."
      ],
      "entries": [
        {
          "name": "McDonald and Cranor, The Cost of Reading Privacy Policies",
          "meta": "2008; I/S: A Journal of Law and Policy for the Information Society, volume 4, pages 543 to 568",
          "flag": "open",
          "fields": [
            ["Reading estimate", "244 hours per year per person to read the privacy policy of each site visited once"],
            ["Skimming estimate", "154 hours per year per person"],
            ["Value of the time", "USD 3,534 per year per person"],
            ["National opportunity cost", "On the order of USD 781 billion per year for the United States reading, USD 492 billion skimming"],
            ["Method", "75 most popular websites, 250 words per minute, average 10 minutes per policy; policy word counts of 2,071, 2,514 and 3,112 at the quartiles; March 2008 Nielsen data giving 1,462 unique sites per year as a point estimate, lower bound 119; leisure time valued at 25% of average hourly salary and work time at twice wages"],
            ["Separate measurement", "An online study of 212 participants, after removing 44 outliers, measured skimming time and comprehension"]
          ],
          "note": "The figure circulates as 201 hours, which is not the point estimate in the authors' own drafts; and because it rests on 2008 data and 2008 wages it should be presented as a ceiling-of-absurdity argument, not a current measurement.",
          "src": {
            "t": "McDonald and Cranor, authors' draft",
            "u": "https://aleecia.com/authors-drafts/readingPolicyCost-AV.pdf"
          }
        },
        {
          "name": "Obar and Oeldorf-Hirsch, The biggest lie on the Internet",
          "meta": "Information, Communication and Society, 2018; fictitious social network experiment",
          "flag": "produced",
          "fields": [
            ["Participants", "543, in an experimental survey using a fictitious social network"],
            ["Skipping", "74% skipped the privacy policy entirely by selecting a quick-join clickwrap"],
            ["Agreement", "97% agreed to the privacy policy; 93% agreed to the terms of service"],
            ["Time actually spent", "Mean 73 seconds on the privacy policy among those who did not skip, and 51 seconds on the terms of service"],
            ["Time required", "29 to 32 minutes for the privacy policy and 15 to 17 minutes for the terms at adult reading speeds of 250 to 280 words per minute, so actual time was roughly one twenty-fifth of that"],
            ["Comprehension", "98% missed planted clauses including data sharing with the NSA and with employers, and a clause requiring a first-born child as payment"]
          ],
          "note": "This inverts the premise of the 244-hour figure: the cost is not being paid, it is being evaded, and what users lose is the protection the hours were meant to buy.",
          "src": {
            "t": "Obar and Oeldorf-Hirsch, SSRN",
            "u": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2757465"
          }
        },
        {
          "name": "Nouwens, Liccardi, Veale, Karger and Kagal, Dark Patterns after the GDPR",
          "meta": "CHI 2020; scrape of UK consent pop-ups plus a field experiment",
          "flag": "produced",
          "fields": [
            ["Sample", "680 websites scraped from the top 10,000 in the UK, covering the five most popular consent management platforms"],
            ["Compliance", "Only 11.8% met the minimal legal requirements the researchers derived from European law"],
            ["Field experiment", "40 participants across eight design patterns"],
            ["Removing the opt-out", "Taking the opt-out button off the first page increased consent by 22 to 23 percentage points"],
            ["Granular controls", "Providing more granular controls on the first page decreased consent by 8 to 20 percentage points"],
            ["Notification style", "Banner versus barrier had no significant effect"]
          ],
          "note": "",
          "src": {
            "t": "Nouwens et al., arXiv",
            "u": "https://arxiv.org/abs/2001.02479"
          }
        },
        {
          "name": "Bielova, Litvine, Nguyen, Chammat, Toubiana and Hary",
          "meta": "33rd USENIX Security Symposium, 2024; authors at Inria, the UK Behavioural Insights Team, France's DITP, CNIL and RMIT",
          "flag": "produced",
          "fields": [
            ["Sample", "3,947 French participants, averaging 657 per banner variant"],
            ["Neutral control", "With accept and decline presented equally, only 17% refused or personalised"],
            ["Hiding rejection", "Putting refusal behind a second layer dropped refusal to 4%"],
            ["Design levers", "Emphasising the decline button raised refusal to 34%; text emphasising the consequences of tracking raised it to 47%; traffic-light colour coding raised it to 38%"],
            ["Decision time", "Median 4.1 seconds on control banners, rising to 5.7 seconds on the behavioural-lever banners"],
            ["Satisfaction", "Highest at 64% with the consequence and tricolour designs, against 54% for neutral banners"]
          ],
          "note": "This is a regulator-affiliated study rather than an advocacy one, and it is the only per-interaction time measurement in this research.",
          "src": {
            "t": "Bielova et al., USENIX Security 2024",
            "u": "https://www.usenix.org/system/files/usenixsecurity24-bielova.pdf"
          }
        },
        {
          "name": "CPC Network dark patterns sweep",
          "meta": "European Commission and the consumer authorities of 23 Member States plus Norway and Iceland; published 30 January 2023",
          "flag": "produced",
          "fields": [
            ["Sites screened", "399 online retail sites"],
            ["Sites with at least one dark pattern", "148, approximately 37%"],
            ["Fake urgency", "42 sites used fake countdown timers"],
            ["Manipulative steering", "54 sites used design or language steering users toward subscriptions, premium products or costlier delivery"],
            ["Hidden information", "70 sites hid delivery costs, product composition or cheaper alternatives, and 23 of those specifically hid subscription information"],
            ["Apps", "Of 102 apps tested from the same sites, 27 also used at least one dark pattern"]
          ],
          "note": "",
          "src": {
            "t": "European Commission, CPC sweep results",
            "u": "https://cyprus.representation.ec.europa.eu/news/consumer-protection-manipulative-online-practices-found-148-out-399-online-shops-screened-2023-01-30_en"
          }
        },
        {
          "name": "The legal deadline: GDPR Article 12(3)",
          "meta": "ICO right-of-access guidance, fetched 14 September 2026",
          "flag": "",
          "fields": [
            ["Standard deadline", "Controllers must comply without undue delay and at the latest within one month of receipt of the request"],
            ["Clock start", "Or within one month of receiving identity confirmation, authorisation proof or fees"],
            ["Extension", "Two further months, three in total, only where the request is complex or the same person has made a number of requests, and only if the requester is told within the first month"],
            ["Limit on the extension", "The ICO states explicitly that a request is not complex just because the controller needs to seek clarification"]
          ],
          "note": "",
          "src": {
            "t": "ICO, responding to a right of access request",
            "u": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/right-of-access/what-should-we-consider-when-responding-to-a-request/"
          }
        },
        {
          "name": "Kroeger, Lindemann and Herrmann, app vendor responses to subject access requests",
          "meta": "ARES 2020; three rounds in 2015, 2018 and 2019",
          "flag": "nothing",
          "fields": [
            ["Sample", "225 mobile apps, 120 Android and 105 iOS"],
            ["Response rates", "78% in 2015, 81% in 2018, 74% in 2019, so one in four vendors did not answer at all in the most recent round, after GDPR was in force"],
            ["Speed of those who did reply", "Most replied within five days: 82%, 76% and 83% by round"],
            ["Very late replies", "Only 2%, 0% and 2% by round replied after 31 or more days"],
            ["Identity verification", "Most vendors sending a copy of personal data did not verify identity at all: 84%, 85% and 76% by round"],
            ["Burden where verification was demanded", "Birth date, address and customer number in 13% of 2015 cases, or a copy of a utility bill, ID card or driving licence in 5% of 2018 and 2019 cases"]
          ],
          "note": "The failure to verify identity before sending personal data is a separate and serious finding in its own right.",
          "src": {
            "t": "Kroeger, Lindemann and Herrmann, ARES 2020",
            "u": "https://www.researchgate.net/publication/343330192_How_do_app_vendors_respond_to_subject_access_requests_A_longitudinal_privacy_study_on_iOS_and_Android_Apps"
          }
        },
        {
          "name": "Poehn and Gruschka, DSARs to seven major online services",
          "meta": "2023, arXiv 2503.04259; Amazon, Apple, Facebook, Google, LinkedIn, Microsoft and WhatsApp",
          "flag": "produced",
          "fields": [
            ["Response rate", "All seven responded and none exceeded the one-month deadline"],
            ["Speed", "Fastest Microsoft, under five minutes; slowest Apple, under one week; most under three days"],
            ["Completeness", "Microsoft's response was incomplete, missing account and activity information; Amazon and Apple returned outdated data; Facebook returned data about a page that had been deleted"],
            ["Comprehensibility", "Only WhatsApp, LinkedIn and Facebook produced comprehensible output; the Amazon, Apple and Microsoft responses were considered incomprehensible"],
            ["Conclusion", "The paper's own summary is that none fulfils all requirements completely"]
          ],
          "note": "Taken with the legal deadline, this says the time cost of a request has migrated from waiting to interpreting.",
          "src": {
            "t": "Poehn and Gruschka, arXiv",
            "u": "https://arxiv.org/html/2503.04259"
          }
        },
        {
          "name": "Information Commissioner's Office, Annual Report and Accounts 2024/25",
          "meta": "Published 2025; UK regulator's own performance figures",
          "flag": "nothing",
          "fields": [
            ["Complaints received", "42,315 data protection complaints in 2024/25, up from 39,721 in 2023/24"],
            ["Dominant category", "The ICO states that Article 15 complaints, about the right of access, account for most of its data protection complaints work"],
            ["90-day performance", "Only 30.0% of complaints were assessed and responded to within 90 days, against an 80% target"],
            ["Six-month performance", "98.4% within six months, against a 90% target"],
            ["Stated cause", "The ICO attributes the decline to rising demand and unfilled vacancies"]
          ],
          "note": "A user whose request is refused and who complains waits, in 70% of cases, more than 90 days for the regulator merely to respond.",
          "src": {
            "t": "ICO Annual Report and Accounts 2024/25",
            "u": "https://ico.org.uk/media2/1wyfliqp/annual-report-2025-ico-v4-1-complete.pdf"
          }
        }
      ]
    },
    {
      "n": "04",
      "kicker": "BROKEN FEATURES",
      "title": "Choosing the private option can cost access to the state's own digital front door",
      "intro": "The costs that do not appear on any invoice are the features that stop working. On GrapheneOS the mechanism is Google's Play Integrity API, and the apps that refuse to run include national government identity services in Italy, Brazil, Australia and Singapore. On the web the mechanism is the pay-or-consent wall, where declining tracking either costs money per publisher or produces a deliberately worse product. In both cases the penalty is designed, disclosed and priced by the party that benefits from it.",
      "paras": [
        "The chronology in the Meta case is the finding. Meta launched consent-or-pay in November 2023 at EUR 9.99 on web and EUR 12.99 on mobile. The European Data Protection Board said in April 2024 that such a binary generally cannot produce valid consent. Meta cut the price by roughly 40% and added a free third option in November 2024. The European Commission fined it EUR 200 million in April 2025 for the May to November 2024 period. The price of the private option fell only after two regulators moved, which means it was never set by the cost of serving a non-tracked user."
      ],
      "entries": [
        {
          "name": "GrapheneOS and Google's Play Integrity API",
          "meta": "grapheneos.org attestation compatibility guide and FAQ, fetched 14 September 2026",
          "flag": "nothing",
          "fields": [
            ["Government and civic identity apps that refuse", "myGov in Australia, gov.br in Brazil, IO in Italy, Singpass in Singapore"],
            ["Financial and payment apps", "Authy, mada Pay, PosteID"],
            ["Transport, mobility and automotive", "Strava, Dott, Volkswagen, My SEAT"],
            ["Dating and social", "Chyrpe Dating"],
            ["The project's stated reason", "GrapheneOS says the only reason Google does not permit it is that the project does not license Google Mobile Services, and argues the restriction is a licensing artefact rather than a security judgement"],
            ["Why the workaround does not help", "GrapheneOS ships a compatibility layer letting Play services run as ordinary unprivileged apps in a specific profile; many apps then work, but the layer does not defeat Play Integrity attestation, so these apps still refuse"]
          ],
          "note": "Attestation converts a user's operating-system choice into an access-control decision made by Google, with no appeal and no published criteria; this is the project's own account of the mechanism.",
          "src": {
            "t": "GrapheneOS attestation compatibility guide",
            "u": "https://grapheneos.org/articles/attestation-compatibility-guide"
          }
        },
        {
          "name": "Netflix and VPN traffic",
          "meta": "help.netflix.com, fetched 14 September 2026",
          "flag": "nothing",
          "fields": [
            ["Error shown", "\"You seem to be using a VPN or proxy. Please turn off any of these services and try again.\""],
            ["Live events", "VPNs are not supported for live events"],
            ["Ad-supported plans", "VPNs are not supported on ad-supported plans"],
            ["Consequence", "The cheapest Netflix tier and any VPN are mutually exclusive by policy, so the user who most needs to economise is the user forbidden to encrypt"]
          ],
          "note": "",
          "src": {
            "t": "Netflix help, VPN and proxy error",
            "u": "https://help.netflix.com/en/node/277"
          }
        },
        {
          "name": "Khattak, Fifield, Afroz and co-authors, Do You See What I See?",
          "meta": "NDSS 2016; measurement of differential treatment of anonymous users",
          "flag": "open",
          "fields": [
            ["Application-layer discrimination", "3.67% of the Alexa top 1,000 sites discriminate against Tor users, at p = 0.008"],
            ["Network-layer blocking", "At least 1.3 million IP addresses that normally accept TCP connections on port 80 refuse handshakes from Tor exit nodes"],
            ["Measured blocking rates", "13.01% to 16.14% under the paper's LAX measurement and 1.23% to 2.59% under its STRICT measurement, varying by exit node"],
            ["Heavily blocked sites", "About 69 websites block 10% to 50% of Tor exit nodes, predominantly hosted on CloudFlare, and a further 15 sites block over 60% of exits"],
            ["Top blocking networks", "CHINA169-BACKBONE and CHINANET-BACKBONE, plus Rackspace, DreamHost and MCCI-AS"]
          ],
          "note": "These are 2016 measurements and predate the consolidation of CDN-level bot management; they are the best rigorous public figures located, but the direction of change since is unknown.",
          "src": {
            "t": "Khattak et al., NDSS 2016",
            "u": "https://www.icir.org/vern/papers/tor-differential.NDSS16.pdf"
          }
        },
        {
          "name": "Meta's less personalised ads tier",
          "meta": "about.fb.com, November 2024, fetched 14 September 2026",
          "flag": "nothing",
          "fields": [
            ["What it is", "A free third option for EU users who neither consent to full personalisation nor pay"],
            ["What it serves, in Meta's words", "Ads based only on context, meaning what a person sees in a particular session on Facebook and Instagram, plus a minimal set of data points including age, location, gender and how the person engages with ads"],
            ["The penalty", "Meta's own announcement states this free non-tracking option includes unskippable ad breaks lasting several seconds"],
            ["Why that matters", "The user who declines tracking is not given the same product with worse targeting; they are given a product with a new friction that the consenting user does not experience"]
          ],
          "note": "This is a designed penalty for exercising a legal right, disclosed by the vendor itself.",
          "src": {
            "t": "Meta, subscription for no ads in Europe",
            "u": "https://about.fb.com/news/2024/11/facebook-and-instagram-to-offer-subscription-for-no-ads-in-europe/"
          }
        },
        {
          "name": "Meta's EU subscription prices",
          "meta": "about.fb.com, fetched 14 September 2026",
          "flag": "produced",
          "fields": [
            ["October 2023 launch", "EUR 9.99 per month on web and EUR 12.99 per month on iOS and Android"],
            ["Additional accounts at launch", "EUR 6 per month on web and EUR 8 per month on mobile"],
            ["From November 2024", "EUR 5.99 per month on web and EUR 7.99 per month on iOS and Android, a cut of roughly 40%"],
            ["Additional accounts from November 2024", "EUR 4 per month on web and EUR 5 per month on mobile"],
            ["Date checked", "14 September 2026, against Meta's own announcement"]
          ],
          "note": "Meta's own wording records the cut from EUR 9.99 to EUR 5.99 on the web and from EUR 12.99 to EUR 7.99 on iOS and Android.",
          "src": {
            "t": "Meta, subscription for no ads in Europe",
            "u": "https://about.fb.com/news/2024/11/facebook-and-instagram-to-offer-subscription-for-no-ads-in-europe/"
          }
        },
        {
          "name": "noyb, Pay or Okay report",
          "meta": "Published 24 July 2025; survey of the top 100 websites in five EU countries conducted March 2024",
          "flag": "produced",
          "fields": [
            ["Prevalence in the top 100", "Germany 29 sites, Spain 21, Austria 17, Italy 17, France 14, an average of 19.6"],
            ["Effect on consent", "Consent rates run 65% to 85% without pay-or-okay and reach 99% with it, and about 99.9% in some real-world settings"],
            ["Who actually pays", "Only about 0.1% of users choose the pay option"],
            ["Stated user preference for tracking", "Between 0.16% and 7% in the underlying studies, a gap of more than 90 percentage points against the recorded consent rate"],
            ["Average annual cost to refuse", "France EUR 119.54, Austria EUR 65.47, Germany EUR 59.28, Spain EUR 52.66, Italy EUR 12.25; named examples include Le Monde at EUR 132.89 a year, Sueddeutsche at EUR 132.88, El Pais at EUR 132.00, Der Standard at EUR 98.90 and La Repubblica at EUR 12.00"],
            ["Cumulative cost", "Refusing across all 29 German top-100 sites using the model costs EUR 1,528.87 per year, which noyb calculates as about 5% of average German net income"],
            ["Publisher economics", "About EUR 0.24 per month from a tracked user against EUR 3.24 from a paying user, a 13-fold difference; noyb calculates targeted advertising at about 5% of European press revenue and pay-or-okay as raising overall press income by about 0.82%, mainly from the increase in consent rather than from users paying"]
          ],
          "note": "noyb is an advocacy organisation and the figures should be attributed to it by name; separately, noyb references an Austrian court ruling that Der Standard's implementation is illegal, but the court, instance, date and finality of that ruling were not verified here.",
          "src": {
            "t": "noyb, Pay or Okay report 2025",
            "u": "https://noyb.eu/sites/default/files/2025-07/Pay_or_Okay_Report_2025_web.pdf"
          }
        },
        {
          "name": "European Data Protection Board, Opinion 08/2024",
          "meta": "Adopted 17 April 2024, on consent or pay models at large online platforms",
          "flag": "produced",
          "fields": [
            ["Who asked", "The Dutch, Norwegian and Hamburg data protection authorities, under Article 64(2) GDPR"],
            ["Core conclusion", "Where large online platforms offer users only the binary of consenting to behavioural advertising or paying a fee, in most cases it will not be possible for them to comply with the requirements for valid consent"],
            ["The remedy", "A third option: a free alternative without behavioural advertising, for example a form of advertising involving the processing of less or no personal data"],
            ["Weight given to that option", "The EDPB describes offering such a free alternative as a particularly important factor in assessing valid consent"],
            ["Additional tests", "Controllers must assess imbalance of power, detriment from refusing, and whether the user genuinely understands the value of what is being exchanged"]
          ],
          "note": "",
          "src": {
            "t": "EDPB Opinion 08/2024",
            "u": "https://www.edpb.europa.eu/system/files/2024-04/edpb_opinion_202408_consentorpay_en.pdf"
          }
        },
        {
          "name": "European Commission, Digital Markets Act decision against Meta",
          "meta": "Decision of 23 April 2025; press release reference IP/25/1085",
          "flag": "open",
          "fields": [
            ["Fine", "EUR 200 million on Meta; Apple was fined EUR 500 million in the same decision for a separate anti-steering breach"],
            ["Provision breached", "DMA Article 5(2)(b), the obligation to give users genuine choice over cross-service combination of their personal data"],
            ["Conduct", "The consent-or-pay model introduced in November 2023, requiring EU users to choose between consenting to data combination for personalised advertising or paying a monthly subscription"],
            ["The Commission's objection", "That the model lacked the required specific choice to opt for a service that uses less of the user's personal data"],
            ["Non-compliance period found", "May to November 2024"],
            ["Status of the fix", "Taylor Wessing records that Meta's November 2024 less personalised advertising option was under further investigation by the Commission, and records no formal approval"]
          ],
          "note": "Whether the Commission has since accepted the November 2024 model and whether periodic penalty payments have been imposed could not be resolved, because the Commission press release returned only metadata to automated fetch.",
          "src": {
            "t": "European Commission, Apple and Meta DMA breach",
            "u": "https://digital-strategy.ec.europa.eu/en/news/commission-finds-apple-and-meta-breach-digital-markets-act"
          }
        }
      ]
    },
    {
      "n": "05",
      "kicker": "WHO PAYS MOST",
      "title": "The distributional case rests on adjacent evidence, because nobody has measured privacy spending by income",
      "intro": "The one verified figure expressing the price of refusing tracking as a share of income is noyb's: EUR 1,528.87 a year to reject consent on 29 German sites, which noyb puts at about 5% of average German net income. Set against that, the EUR 107.88 minimum basket from section 02 is roughly 0.35% of the same income. The tools are cheap; the per-publisher tolls are not. Everything beyond that comparison is inference from adjacent evidence, and this report does not pretend otherwise.",
      "paras": [
        "What can be shown is that the population least able to pay is also the population least able to substitute. Every recurring price in section 01 is set in euros or dollars for high-income markets. The 16% of US adults who own a smartphone but have no home broadband cannot swap a mobile app for a desktop browser with an ad blocker, and mobile apps are exactly where attestation, SDK-based tracking and the absence of extension support bite hardest.",
        "The sharpest warning in this section is about awareness rather than price. A cheaper option, the UK broadband social tariff, existed and was designed for exactly the people who needed it; only 3% of eligible households took it up, and nearly 70% of eligible customers did not know it existed, forgoing average savings of around GBP 144 a year. Availability is not access, and the same failure mode applies to free privacy tooling.",
        "One inference that should be labelled as such: a VPN increases data consumption through encapsulation overhead, and Tor increases latency and consumption further, so every privacy-protective network technology costs data for the people most likely to run out of it. No study measuring that effect against data-cap exhaustion was found."
      ],
      "entries": [
        {
          "name": "noyb, cost of refusing consent as a share of income",
          "meta": "Pay or Okay report, published 24 July 2025; survey conducted March 2024",
          "flag": "produced",
          "fields": [
            ["The figure", "EUR 1,528.87 per year to reject consent across the 29 German top-100 sites that use pay-or-okay"],
            ["As a share of income", "About 5% of average German net income, on noyb's own calculation"],
            ["Comparison with tooling", "Basket 1 at EUR 107.88 a year is roughly 0.35% of an income where EUR 1,528.87 is 5%"],
            ["Limitation of the measure", "The calculation uses the average rather than a distribution, so 5% of the average is a considerably larger share of a below-average income"],
            ["Attribution", "noyb is an advocacy organisation and the figure should be attributed to it by name"]
          ],
          "note": "This is the only verified figure in the research expressing the price of refusing tracking as a share of income.",
          "src": {
            "t": "noyb, Pay or Okay report 2025",
            "u": "https://noyb.eu/sites/default/files/2025-07/Pay_or_Okay_Report_2025_web.pdf"
          }
        },
        {
          "name": "International Telecommunication Union, Facts and Figures 2025",
          "meta": "Affordability of ICT services, fetched 14 September 2026",
          "flag": "produced",
          "fields": [
            ["Global median mobile broadband basket", "1.4% of GNI per capita in 2025, down from 1.5% in 2024"],
            ["Global median fixed broadband basket", "2.5% of GNI per capita, unchanged"],
            ["Lower-middle-income economies", "Subscribers spend approximately 7 times more of their income on mobile broadband than those in high-income economies"],
            ["Low-income economies", "Subscribers spend approximately 22 times more, and fixed broadband costs more than a quarter of average income"],
            ["Target", "The Broadband Commission target is under 2% of GNI per capita by 2025"],
            ["Achievement", "130 of 205 economies meet it for mobile broadband, up 6 on 2024, and 88 of 195 for fixed broadband, up 10; among low- and middle-income economies only about 40% meet it for at least one basket"]
          ],
          "note": "Every price in section 01 is denominated for the markets where connectivity is already cheapest relative to income.",
          "src": {
            "t": "ITU, Affordability of ICT services 2025",
            "u": "https://www.itu.int/itu-d/reports/statistics/2025/10/15/ff25-affordability-of-ict-services/"
          }
        },
        {
          "name": "Ofcom, Communications Affordability Tracker",
          "meta": "Technical annex, October 2025, fetched 14 September 2026",
          "flag": "produced",
          "fields": [
            ["Households reporting an affordability issue", "24% of UK households, approximately 6.7 million with a margin of plus or minus 700,000, in the preceding month"],
            ["Fixed broadband", "6% of households, 1.6 million plus or minus 400,000"],
            ["Mobile", "5% of households, 1.5 million plus or minus 400,000"],
            ["Survey base", "1,090 respondents, weighted to the UK adult population"],
            ["Stated limitation", "Ofcom's own annex describes its income analysis as indicative only, because 36% of respondents did not answer the income question"]
          ],
          "note": "Because more than a third declined the income question, affordability problems among lower-income groups are likely understated in this source.",
          "src": {
            "t": "Ofcom Communications Affordability Tracker, technical annex",
            "u": "https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/multi-sector/affordability-of-communications-services/affordability/communications-affordability-tracker---technical-annex-october-2025.pdf"
          }
        },
        {
          "name": "Ofcom, affordability research of 29 September 2022",
          "meta": "UK households struggling with communications bills",
          "flag": "nothing",
          "fields": [
            ["Scale", "8 million UK households, about 29%, had problems affording communications services, double the 15% of April 2021"],
            ["Worst affected groups", "43% among 18 to 24 year olds, 40% among households with children, 39% among benefits recipients and 39% among people with a disability or limiting condition"],
            ["Trade-offs made", "14% had cut spending on food and clothing to pay communications bills"],
            ["Social tariff take-up", "Only 3% of eligible low-income households had taken up a broadband social tariff"],
            ["Why", "Nearly 70% of eligible customers were unaware such tariffs existed, forgoing average savings of around GBP 144 per year"]
          ],
          "note": "The awareness failure is the structurally important finding: a cheaper option existed, was designed for the people who needed it, and almost none of them used it.",
          "src": {
            "t": "Ofcom, record number of households struggle to pay bills",
            "u": "https://www.ofcom.org.uk/phones-and-broadband/saving-money/record-number-of-households-struggle-to-pay-bills"
          }
        },
        {
          "name": "Digital Poverty Alliance, Zero Rating Report",
          "meta": "When Data Decides Access, February 2026, fetched 14 September 2026",
          "flag": "produced",
          "fields": [
            ["Households at risk", "2 million UK households at risk of losing access to essential services when data runs out"],
            ["No access at all", "5% of the population, approximately 2.8 million people"],
            ["Mobile reliance", "31% of respondents rely primarily on mobile data for internet access, and 55% run out of mobile data frequently or occasionally"],
            ["Trade-offs", "43% reported choosing between data and essentials such as food or bills, rising to 52% among respondents unemployed, unable to work or caring, against 34% among others"],
            ["Share of income", "The poorest 10% of families spend nearly 19% of disposable income on broadband, against approximately 1.3% for average households"],
            ["Isolation", "73% of mobile-reliant respondents report feeling isolated, against 33% of others, a 40 percentage point gap"]
          ],
          "note": "The claim that VPN and Tor overhead materially accelerates data-cap exhaustion for these households is a plausible inference with no study behind it.",
          "src": {
            "t": "Digital Poverty Alliance, Zero Rating Report",
            "u": "https://digitalpovertyalliance.org/wp-content/uploads/2026/02/DPA-Zero-Rating-Report_February-2026.pdf"
          }
        },
        {
          "name": "Pew Research Center, Mobile Fact Sheet",
          "meta": "Survey fielded 5 February to 18 June 2025, fetched 14 September 2026",
          "flag": "open",
          "fields": [
            ["Smartphone ownership", "91% of US adults own a smartphone"],
            ["Smartphone-dependent users", "16% of US adults own a smartphone but have no home broadband"],
            ["Income pattern", "Pew states that reliance on smartphones for online access is especially common among Americans with lower household incomes"],
            ["What could not be verified", "The per-income-bracket figures sit behind an interactive tab that did not render to automated fetch, so the 16% is verified and the income breakdown is not"],
            ["Why it matters here", "A smartphone-dependent user cannot substitute a desktop browser with an ad blocker for a mobile app, and mobile apps are where attestation and SDK-based tracking bite hardest"]
          ],
          "note": "The overall figure is verified; the income breakdown that would carry the distributional argument is not.",
          "src": {
            "t": "Pew Research Center, Mobile Fact Sheet",
            "u": "https://www.pewresearch.org/internet/fact-sheet/mobile/"
          }
        },
        {
          "name": "Madden, Privacy, Security, and Digital Inequality",
          "meta": "Data and Society, 2015; nationally representative telephone survey of 3,000 US adults, fieldwork November to December 2015",
          "flag": "produced",
          "fields": [
            ["Households under USD 20,000 a year", "Acutely aware of a range of digital privacy harms, yet many say it would be difficult to access the tools and strategies that could help them protect their personal information online"],
            ["Foreign-born Hispanic adults", "Showed heightened privacy sensitivity and desire to learn more about safeguarding personal information"],
            ["Mobile reliance", "The report identifies substantial gaps in mobile-only reliance across racial and ethnic groups"],
            ["Method", "Conducted in English and Spanish, funded by the Digital Trust Foundation"]
          ],
          "note": "The companion law-review article, Madden, Gilman, Levy and Marwick (2017), was located but its full text was not fetched and none of its findings are relied on here.",
          "src": {
            "t": "Data and Society, Privacy, Security, and Digital Inequality",
            "u": "https://datasociety.net/library/privacy-security-and-digital-inequality/"
          }
        },
        {
          "name": "Pew Research Center, online privacy choices and knowledge",
          "meta": "Published 18 October 2023; American Trends Panel Wave 127",
          "flag": "open",
          "fields": [
            ["Knowledge", "21% of Americans can correctly answer at least four of five privacy and cybersecurity knowledge items"],
            ["Confidence", "53% say they are very confident in their tech abilities"],
            ["Concern", "35% say they are very concerned about how companies use the data they collect"],
            ["What is not quantified", "Pew states that levels of knowledge vary notably by age and education, but the article does not quantify by education or income"]
          ],
          "note": "The knowledge gradient by income, which is the variable the distributional argument needs, is not reported in this source.",
          "src": {
            "t": "Pew Research Center, a deep dive into online privacy choices",
            "u": "https://www.pewresearch.org/internet/2023/10/18/a-deep-dive-into-online-privacy-choices/"
          }
        }
      ]
    }
  ],
  "gaps": [
    "Several vendors render prices in JavaScript, which automated fetching cannot execute, so the following could not be verified from a first-party page on 14 September 2026: Proton VPN Plus, Proton Drive Plus and Proton Pass Plus standalone list prices, Google One's 100 GB and 200 GB storage-only tiers, DuckDuckGo Privacy Pro, and Tresorit personal plans. The Proton VPN Plus figures quoted come from Cybernews, updated 5 June 2026, and are promotional first-term rates rather than regular list prices.",
    "Two prices in the ladder are stale rather than unverified and should be re-checked before publication: Tuta Revolutionary at EUR 3 per month and Legend at EUR 8 per month come from a vendor announcement dated 6 June 2023, and Brave Search Premium at USD 3 per month comes from a Brave blog post dated 1 December 2022. Threema's consumer price displays as \"6.00\" with no currency symbol and the vendor states it depends on the app store and country, so the currency is indeterminate from the source.",
    "No currency conversion is possible without inventing an exchange rate, and the cross-currency comparison would not be meaningful anyway because vendors set regional prices rather than converting. The baskets therefore carry separate EUR and USD totals, and any single-figure annual cost of privacy headline would be fabricated.",
    "The distributional core of the argument is not directly evidenced. No representative survey measuring actual household expenditure on privacy-protective products by income decile was found, in any country. Section 05 is assembled from adjacent evidence on connectivity affordability, data poverty, smartphone dependency and knowledge gaps, and is an inference rather than a measurement.",
    "The headline time figure is seventeen years old and has never been replicated at scope. McDonald and Cranor's 244 hours and USD 781 billion rest on March 2008 browsing data, a 75-site policy sample and 2008 wage levels; Obar and Oeldorf-Hirsch measure a different thing, namely whether people read at all. Present 244 hours as a 2008 estimate, never as a current figure.",
    "The Tor and VPN blocking measurements are from 2016 and predate the consolidation of CDN-level bot management. Khattak et al.'s 3.67% of the Alexa top 1,000 and 1.3 million blocking IP addresses are the best rigorous public numbers located; the direction of change since is unknown, so treat them as stale rather than conservative.",
    "Two enforcement questions remain open. Whether the European Commission has accepted Meta's November 2024 less personalised ads model as DMA-compliant, and whether periodic penalty payments have followed the 23 April 2025 decision, could not be resolved because the Commission press release IP/25/1085 returned only metadata to automated fetch. Separately, the Austrian court ruling that Der Standard's pay-or-okay implementation is illegal is referenced by noyb, but the court, instance, date and finality were not verified.",
    "No study measures the total time an individual spends configuring privacy across their devices, accounts and services. The 4.1 to 5.7 second per-banner figure from Bielova et al. is solid but multiplying it into an annual total requires a banner-encounter rate that could not be verified, and the widely circulated claim that Europeans spend 575 million hours a year clicking cookie banners appears only on a commercial compliance vendor's blog with no visible methodology and is not used. Pew's per-income figures on smartphone dependency did not render, and the claim that VPN and Tor overhead accelerates data-cap exhaustion has no study behind it."
  ],
  "method": "Every price in section 01 was obtained by fetching the vendor's own page on 14 September 2026, except the four lines where a secondary source or an older vendor publication is named explicitly in the row. Where a vendor page rendered prices in JavaScript and returned placeholders, the price was left out and recorded in the gaps rather than filled from a price-comparison site, because several such sites returned figures for Proton and Tuta that could not be corroborated against the vendor. The baskets in section 02 are arithmetic on those prices only, with euro and dollar lines kept apart, annual billing used where offered, promotional rates excluded, taxes excluded and handset cost handled separately. The time, feature and distribution sections use published research, vendor announcements and regulatory decisions, each fetched at source on the same date. This report would change on three things: a manual check of the six unverifiable vendor prices, a replication of the 2008 reading-cost calculation against current browsing volumes and policy lengths, and a representative survey of privacy-tool expenditure by income decile, which does not appear to exist.",
  "sources": [
    { "t": "Proton, plans and pricing", "u": "https://proton.me/support/proton-plans" },
    { "t": "Tuta, announcement of new prices", "u": "https://tuta.com/blog/announcement-new-prices" },
    { "t": "Mullvad VPN pricing", "u": "https://mullvad.net/en/pricing" },
    { "t": "IVPN pricing", "u": "https://www.ivpn.net/en/pricing/" },
    { "t": "Kagi pricing", "u": "https://kagi.com/pricing" },
    { "t": "Bitwarden pricing", "u": "https://bitwarden.com/pricing/" },
    { "t": "1Password personal pricing", "u": "https://1password.com/pricing/personal" },
    { "t": "MacRumors, 1Password March price increase", "u": "https://www.macrumors.com/2026/02/24/1password-march-price-increase/" },
    { "t": "Apple, iCloud+ plans and pricing", "u": "https://support.apple.com/en-us/108047" },
    { "t": "Ente Photos", "u": "https://ente.com/" },
    { "t": "Google One plans", "u": "https://one.google.com/about/plans" },
    { "t": "9to5Google, Google AI Plus in the US", "u": "https://9to5google.com/2026/01/27/google-ai-plus-us/" },
    { "t": "Google Store, Pixel 10a", "u": "https://store.google.com/us/product/pixel_10a" },
    { "t": "Murena Fairphone 6", "u": "https://murena.com/shop/smartphones/brand-new/murena-fairphone-6/" },
    { "t": "Threema pricing", "u": "https://threema.com/en/pricing" },
    { "t": "Threema, cost FAQ", "u": "https://threema.com/en/faq/cost" },
    { "t": "Brave, private search and ads", "u": "https://brave.com/blog/private-search-ads/" },
    { "t": "Cybernews, Proton VPN pricing", "u": "https://cybernews.com/best-vpn/protonvpn-review/pricing/" },
    { "t": "Signal, Signal is expensive", "u": "https://signal.org/blog/signal-is-expensive/" },
    { "t": "Mozilla Foundation and Subsidiaries, audited financials 2024", "u": "https://stateof.mozilla.org/pdf/Mozilla%20Fdn%202024%20-%20AuditedFinancials.pdf" },
    { "t": "DuckDuckGo, how DuckDuckGo makes money", "u": "https://duckduckgo.com/duckduckgo-help-pages/company/how-duckduckgo-makes-money/" },
    { "t": "GrapheneOS FAQ", "u": "https://grapheneos.org/faq" },
    { "t": "McDonald and Cranor, The Cost of Reading Privacy Policies, authors' draft", "u": "https://aleecia.com/authors-drafts/readingPolicyCost-AV.pdf" },
    { "t": "McDonald and Cranor, author draft at Cranor's site", "u": "https://lorrie.cranor.org/pubs/readingPolicyCost-authorDraft.pdf" },
    { "t": "Obar and Oeldorf-Hirsch, The biggest lie on the Internet", "u": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2757465" },
    { "t": "Nouwens et al., Dark Patterns after the GDPR", "u": "https://arxiv.org/abs/2001.02479" },
    { "t": "Bielova et al., The Effect of Design Patterns on Cookie Consent Decisions", "u": "https://www.usenix.org/system/files/usenixsecurity24-bielova.pdf" },
    { "t": "European Commission, CPC network dark patterns sweep", "u": "https://cyprus.representation.ec.europa.eu/news/consumer-protection-manipulative-online-practices-found-148-out-399-online-shops-screened-2023-01-30_en" },
    { "t": "ICO, responding to a right of access request", "u": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/right-of-access/what-should-we-consider-when-responding-to-a-request/" },
    { "t": "Kroeger, Lindemann and Herrmann, app vendor responses to subject access requests", "u": "https://www.researchgate.net/publication/343330192_How_do_app_vendors_respond_to_subject_access_requests_A_longitudinal_privacy_study_on_iOS_and_Android_Apps" },
    { "t": "Poehn and Gruschka, qualitative analysis of GDPR data subject access requests", "u": "https://arxiv.org/html/2503.04259" },
    { "t": "ICO Annual Report and Accounts 2024/25", "u": "https://ico.org.uk/media2/1wyfliqp/annual-report-2025-ico-v4-1-complete.pdf" },
    { "t": "GrapheneOS attestation compatibility guide", "u": "https://grapheneos.org/articles/attestation-compatibility-guide" },
    { "t": "Khattak et al., Do You See What I See? Differential Treatment of Anonymous Users", "u": "https://www.icir.org/vern/papers/tor-differential.NDSS16.pdf" },
    { "t": "Netflix help, VPN and proxy error", "u": "https://help.netflix.com/en/node/277" },
    { "t": "Meta, Facebook and Instagram to offer subscription for no ads in Europe", "u": "https://about.fb.com/news/2024/11/facebook-and-instagram-to-offer-subscription-for-no-ads-in-europe/" },
    { "t": "noyb, Pay or Okay report 2025", "u": "https://noyb.eu/sites/default/files/2025-07/Pay_or_Okay_Report_2025_web.pdf" },
    { "t": "noyb, how companies make you pay for privacy", "u": "https://noyb.eu/en/noybs-pay-or-okay-report-how-companies-make-you-pay-privacy" },
    { "t": "EDPB, Opinion 08/2024 landing page", "u": "https://www.edpb.europa.eu/node/7488_en" },
    { "t": "EDPB, Opinion 08/2024 full text", "u": "https://www.edpb.europa.eu/system/files/2024-04/edpb_opinion_202408_consentorpay_en.pdf" },
    { "t": "European Commission, Apple and Meta breach the Digital Markets Act", "u": "https://digital-strategy.ec.europa.eu/en/news/commission-finds-apple-and-meta-breach-digital-markets-act" },
    { "t": "Taylor Wessing, Meta fined EUR 200 million under the DMA", "u": "https://www.taylorwessing.com/en/insights-and-events/insights/2025/04/meta-fined-200-million-euro-by-eu-under-digital-markets-act" },
    { "t": "ITU, Affordability of ICT services 2025", "u": "https://www.itu.int/itu-d/reports/statistics/2025/10/15/ff25-affordability-of-ict-services/" },
    { "t": "Ofcom, Communications Affordability Tracker technical annex, October 2025", "u": "https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/multi-sector/affordability-of-communications-services/affordability/communications-affordability-tracker---technical-annex-october-2025.pdf" },
    { "t": "Ofcom, record number of households struggle to pay bills", "u": "https://www.ofcom.org.uk/phones-and-broadband/saving-money/record-number-of-households-struggle-to-pay-bills" },
    { "t": "Digital Poverty Alliance, Zero Rating Report: When Data Decides Access", "u": "https://digitalpovertyalliance.org/wp-content/uploads/2026/02/DPA-Zero-Rating-Report_February-2026.pdf" },
    { "t": "Pew Research Center, Mobile Fact Sheet", "u": "https://www.pewresearch.org/internet/fact-sheet/mobile/" },
    { "t": "Pew Research Center, a deep dive into online privacy choices", "u": "https://www.pewresearch.org/internet/2023/10/18/a-deep-dive-into-online-privacy-choices/" },
    { "t": "Data and Society, Privacy, Security, and Digital Inequality", "u": "https://datasociety.net/library/privacy-security-and-digital-inequality/" }
  ]
};
