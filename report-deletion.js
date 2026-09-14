window.FI_REPORT = {
 "id": "deletion",
 "issue": "Issue 02",
 "period": "Q1 2027",
 "status": "Desk research on the public record: regulator decisions, court judgments, complaint filings and one peer-reviewed measurement study. Institute testing has not begun.",
 "title": "Deleted accounts that are still there a year later",
 "standfirst": "Sixteen documented cases show deletion failing at the level of architecture rather than intent: photos served from a content delivery network three years after removal, transcripts kept in residual data stores, a tenant archive built without a delete function. Every major legal regime sets a response clock and none of them names a backup. Erasure was 37 percent of French complaints in 2024 and appears in 133 of 3,228 tracked GDPR enforcement actions.",
 "stats": [
  {
   "v": "64.45%",
   "k": "apps with no delete option",
   "d": "Measured across 1,435 popular Google Play apps and 771 associated websites",
   "by": "Santhanam, Dang, Shan and Neamtiu, IEEE Symposium on Security and Privacy 2022",
   "src": "https://web.njit.edu/~ineamtiu/pubs/oakland22santhanam.pdf"
  },
  {
   "v": "37%",
   "k": "of CNIL complaints",
   "d": "Share of complaints received by the French authority in 2024 concerning the right to erasure",
   "by": "CNIL, published 17 March 2025",
   "src": "https://www.cnil.fr/fr/droit-leffacement-la-cnil-et-ses-homologues-europeens-effectuent-une-serie-de-controles"
  },
  {
   "v": "133 of 3,228",
   "k": "GDPR actions citing Article 17",
   "d": "Against 1,531 citing Article 5 and 232 citing the access right in Article 15",
   "by": "CMS GDPR Enforcement Tracker, figures refreshed 14 September 2026",
   "src": "https://www.enforcementtracker.com/statistics"
  }
 ],
 "findings": [
  "Deletion failures are architectural rather than accidental, and regulators now say so in their own filings: the FTC's Alexa complaint documents the same geolocation deletion failure recurring at eight distinct discovery points between February 2018 and early 2022, the signature of a system where the deletion path and the data path were never the same path.",
  "The right to erasure is among the most-exercised data rights in Europe and among the least-enforced: erasure was 37 percent of CNIL complaints in 2024 and 17 percent of Irish DPC complaints in 2025, yet Article 17 appears in only 133 of 3,228 tracked GDPR enforcement actions, and the largest erasure-grounded penalty in the EEA currently stands at 900,000 euros after appeal.",
  "Regulators have quietly conceded that backups are exempt in practice: the EDPB's 2026 report tells controllers it might not always be advisable to modify or delete information from back-ups, and asks only that they keep track of erasure requests and apply them as much as possible to restored systems, which converts a deletion obligation into deferred bookkeeping.",
  "The strongest deletion remedies on record come from consumer-protection regulators ordering model destruction, not from data-protection regulators enforcing an erasure right: the FTC in Everalbum, Kurbo and Ring, and South Korea's PIPC in 2025, have ordered algorithms destroyed, while the EDPB's Opinion 28/2024 expressly declines to make model deletion the default consequence of unlawful training.",
  "Most consumer software never offered deletion at all, which makes most of the deletion debate a debate about a minority of products: across 1,435 popular Android apps, 64.45 percent provided no means to delete an account, only 5 percent specified a retention period, and deletion that was offered failed to clear server-side data in a measurable fraction of cases."
 ],
 "sections": [
  {
   "n": "01",
   "kicker": "CASE LEDGER",
   "title": "Sixteen documented failures, and in most of them nothing happened to the company",
   "intro": "These are the cases where a deletion promise was tested against the system behind it and failed, from 2009 to 2026. They were found three ways: by journalists re-testing their own URLs, by security researchers reading their own data exports, and by regulators who inspected. Six produced a monetary penalty. Four produced no consequence at all beyond a software patch or a press statement.",
   "paras": [
    "The pattern that repeats is not a company refusing to delete. It is a company deleting from the store the user can see while copies persist in a content delivery network, a residual data store, a secondary geolocation store, an archive with no delete function, or a model trained on the data before the request arrived.",
    "Flags below mark what the case produced: a fine, an order with no penalty, nothing at all, or a matter still contested."
   ],
   "entries": [
    {
     "name": "Facebook",
     "meta": "Tested 2009 to 2012, United States",
     "flag": "none",
     "fields": [
      [
       "Told",
       "Photos deleted from an album are removed from the service."
      ],
      [
       "Actual",
       "Photos vanished from the visible interface but the underlying image files stayed reachable at their direct CDN URLs. The journalist's test images were still being served roughly two and a half to three years after deletion."
      ],
      [
       "Company account",
       "Spokesperson Frederic Wolens attributed this to legacy storage systems that did not always delete images from content delivery networks in a reasonable period of time even though they were immediately removed from the site."
      ],
      [
       "Found by",
       "Jacqui Cheng of Ars Technica, who kept re-testing her own deleted-photo URLs over successive years."
      ],
      [
       "Outcome",
       "No regulator action. Facebook committed to a new system deleting within 45 days and separately said it had instituted a CDN max-age of 30 days."
      ]
     ],
     "note": "Whether the fix worked rests on journalist spot-checks; no audit has been published.",
     "src": {
      "t": "'Deleted' Facebook photos survive online three years later",
      "u": "https://nakedsecurity.sophos.com/2012/02/08/deleted-facebook-photos-survive/"
     }
    },
    {
     "name": "Avid Life Media, Ashley Madison",
     "meta": "Breach July 2015; joint findings 22 August 2016, Canada and Australia; FTC settlement 14 December 2016",
     "flag": "fine",
     "fields": [
      [
       "Told",
       "For CAD 19, Full Delete would remove the profile from search results and the site, sent and received messages, photos, usage history and personally identifiable information. The policy disclosed only that some information would be retained for 6 to 12 months for legal and financial reasons. The price was not disclosed in the Privacy Policy or Terms of Service."
      ],
      [
       "Actual",
       "After a paid Full Delete, ALM retained user information for 12 months at the time of the breach, later cut to 6, to defend credit-card chargebacks. Photos from deleted accounts were retained beyond even that period because of a technical error, and the commissioners found those photos may have been accessed by the attacker."
      ],
      [
       "Also",
       "Deactivated accounts were retained indefinitely and inactive accounts had no maximum retention period at all, despite ALM's own data showing 99.9 percent of users who reactivated did so within 29 days."
      ],
      [
       "Found by",
       "Joint investigation by the Privacy Commissioner of Canada and the Australian Privacy Commissioner, triggered by the breach, with a parallel FTC action joined by 13 states and the District of Columbia."
      ],
      [
       "Outcome",
       "Compliance agreements with both commissioners requiring set retention periods and free full account deletion, with implementation by 31 March 2017. FTC and state settlement nominally 1.6 million dollars: 828,500 to the FTC against a partially suspended 8.75 million dollar judgment, and 828,500 to the states."
      ]
     ],
     "note": "No published verification report on compliance with the March 2017 undertakings has been located.",
     "src": {
      "t": "PIPEDA Report of Findings #2016-005: Joint investigation of Ashley Madison",
      "u": "https://www.priv.gc.ca/en/opc-actions-and-decisions/investigations/investigations-into-businesses/2016/pipeda-2016-005/"
     }
    },
    {
     "name": "Snapchat",
     "meta": "FTC complaint and settlement announced 8 May 2014, United States",
     "flag": "none",
     "fields": [
      [
       "Told",
       "Snaps would disappear forever after a sender-set timer."
      ],
      [
       "Actual",
       "The deletion behaviour existed only inside the official app. The FTC alleged that recipients can use widely available third-party apps to view and save snaps indefinitely, and that Snapchat stored video snaps unencrypted on the recipient's device in a location outside the app sandbox, so the videos remained accessible to recipients who connected the phone to a computer."
      ],
      [
       "Found by",
       "FTC, following researcher and press reporting on snap-recovery tools."
      ],
      [
       "Outcome",
       "No fine. Prohibition on misrepresenting privacy practices plus a comprehensive privacy programme under independent assessment for 20 years."
      ]
     ],
     "src": {
      "t": "Snapchat Settles FTC Charges That Promises of Disappearing Messages Were False",
      "u": "https://www.ftc.gov/news-events/news/press-releases/2014/05/snapchat-settles-ftc-charges-promises-disappearing-messages-were-false"
     }
    },
    {
     "name": "Cambridge Analytica and Facebook",
     "meta": "Certification dated 2015; reporting 28 March 2018, United Kingdom and United States",
     "flag": "nothing",
     "fields": [
      [
       "Told",
       "Facebook told the public the data had been destroyed. Paul Grewal of Facebook stated that Cambridge Analytica certified to us that they had destroyed the data in question in 2015."
      ],
      [
       "Actual",
       "Channel 4 News obtained copies of the harvested dataset still in circulation, including psychological profile records on roughly 136,000 Colorado residents dating from 2014, with equivalent Oregon data also identified."
      ],
      [
       "Why it could not be closed",
       "The data had moved through generic email accounts outside corporate servers, so the number of surviving copies was unknowable."
      ],
      [
       "Found by",
       "Channel 4 News, who obtained the files directly."
      ],
      [
       "Outcome",
       "Cambridge Analytica announced closure on 3 May 2018. Grewal conceded there was more that could have been done. No penalty attached to the failed certification itself."
      ]
     ],
     "note": "A Cambridge Analytica spokesperson denied passing data to external parties and maintained the company had deleted all GSR data after Facebook's 2015 contact and had taken appropriate measures, including action against former employees.",
     "src": {
      "t": "Revealed: Cambridge Analytica data on thousands of Facebook users still not deleted",
      "u": "https://www.channel4.com/news/revealed-cambridge-analytica-data-on-thousands-of-facebook-users-still-not-deleted"
     }
    },
    {
     "name": "Twitter",
     "meta": "15 February 2019, United States",
     "flag": "nothing",
     "fields": [
      [
       "Told",
       "Users can delete direct messages, and deleting an account removes its data."
      ],
      [
       "Actual",
       "Downloading his own Twitter archive, the researcher recovered direct messages he had deleted, including messages dating back to at least March 2016, and messages exchanged with accounts that had since been suspended or deleted."
      ],
      [
       "Also",
       "He documented a deprecated-API bug from roughly a year earlier that returned messages even after a message was deleted from both the sender and the recipient."
      ],
      [
       "Found by",
       "Security researcher Karan Saini, using the platform's own data-download feature."
      ],
      [
       "Outcome",
       "None documented. A Twitter spokesperson said the company was looking into this further to ensure we have considered the entire scope of the issue, and offered nothing further when asked whether deletion constituted withdrawal of consent."
      ]
     ],
     "note": "No regulator decision on this specific finding has been located.",
     "src": {
      "t": "Twitter kept your deleted DMs for years, even after you left the network",
      "u": "https://techcrunch.com/2019/02/15/twitter-direct-messages/"
     }
    },
    {
     "name": "Deutsche Wohnen SE",
     "meta": "Fine 30 October 2019; Berlin Regional Court judgment 9 June 2026, Germany",
     "flag": "open",
     "fields": [
      [
       "Told",
       "Tenants' documents were held for tenancy administration."
      ],
      [
       "Actual",
       "The company operated an archiving system that did not provide the possibility to delete data that was no longer required. Payslips, employment contracts, tax records, social and health insurance data, bank statements, educational background, household composition and prior addresses sat in it indefinitely with no check on whether retention was still lawful."
      ],
      [
       "Found by",
       "The Berlin Commissioner for Data Protection and Freedom of Information, on inspection."
      ],
      [
       "First outcome",
       "14.5 million euros, plus fifteen further fines of 6,000 to 17,000 euros relating to specific tenants."
      ],
      [
       "Litigation",
       "Annulled by the Berlin Regional Court on 18 February 2021 on the ground that German law required attributing the offence to a natural person. The Berlin Court of Appeal referred the question to the CJEU, which ruled on 5 December 2023 that a fine may be imposed on a legal entity without first identifying a responsible individual, but requires proof of intent or negligence."
      ],
      [
       "Where it stands",
       "On remand, on 9 June 2026 the Berlin Regional Court confirmed liability for failure to delete tenant data between May 2018 and March 2019 but cut the fine to 900,000 euros, citing the company's cooperation. After nearly seven years, a headline 14.5 million euro erasure-architecture fine stands at 900,000 euros."
      ]
     ],
     "note": "The judgment is not final; both sides may appeal.",
     "src": {
      "t": "LG: Deutsche Wohnen haftet fuer verspaetete Mieterdaten-Loeschung",
      "u": "https://www.lto.de/recht/nachrichten/n/lg-berlin-i-526owiglg120-dsgvo-verstoss-deutsche-wohnen-bussgeld-reduziert"
     }
    },
    {
     "name": "Google, delisting requests",
     "meta": "IMY decision 11 March 2020; Administrative Court of Stockholm ruling 23 November 2020, Sweden",
     "flag": "fine",
     "fields": [
      [
       "Told",
       "Search results can be delisted on request under the right to be forgotten."
      ],
      [
       "Actual",
       "On two delisting requests the authority found that Google has done a too narrow interpretation of what web addresses needed to be removed, and that Google has failed to remove the search result listing without undue delay."
      ],
      [
       "Also",
       "Google notified the site owners whose pages had been delisted, which the authority found undermined the right by enabling republication elsewhere, and gave misleading information in its request form about that notification."
      ],
      [
       "Found by",
       "The Swedish Authority for Privacy Protection, acting on complaints and a prior 2017 audit."
      ],
      [
       "Outcome",
       "75 million Swedish kronor plus an order to cease notifying site owners. Google appealed; the Administrative Court of Stockholm rejected the appeal on the substance but reduced the penalty."
      ]
     ],
     "note": "The reduced figure is reported inconsistently as both 52 million and 50 million kronor; the original amount and the fact of reduction are solid, the final number is not.",
     "src": {
      "t": "Swedish Authority for Privacy Protection imposes administrative fine on Google",
      "u": "https://www.imy.se/en/news/the-swedish-data-protection-authority-imposes-administrative-fine-on-google/"
     }
    },
    {
     "name": "Everalbum, the Ever app",
     "meta": "FTC settlement announced 11 January 2021; finalised May 2021, United States",
     "flag": "none",
     "fields": [
      [
       "Told",
       "Everalbum promised users that the company would delete the photos and videos of Ever users who deactivated their accounts."
      ],
      [
       "Actual",
       "The FTC alleges that until at least October 2019, Everalbum failed to delete the photos or videos of any users who had deactivated their accounts and instead retained them indefinitely. The retained images had also been used to build face-recognition models."
      ],
      [
       "Found by",
       "FTC."
      ],
      [
       "Outcome",
       "No monetary penalty. The order required deletion of the photos and videos of deactivated users, deletion of all face embeddings derived from photos of users who had not given express consent, and destruction of any facial recognition models or algorithms developed with Ever users' photos or videos."
      ],
      [
       "Significance",
       "The FTC's first algorithmic-disgorgement order."
      ]
     ],
     "src": {
      "t": "California Company Settles FTC Allegations It Deceived Consumers about use of Facial Recognition in Photo Storage App",
      "u": "https://www.ftc.gov/news-events/news/press-releases/2021/01/california-company-settles-ftc-allegations-it-deceived-consumers-about-use-facial-recognition-photo"
     }
    },
    {
     "name": "WW International and Kurbo",
     "meta": "4 March 2022, United States",
     "flag": "fine",
     "fields": [
      [
       "Told",
       "Kurbo was a healthy-eating app for children, with parental consent and deletion obligations under COPPA."
      ],
      [
       "Actual",
       "The FTC alleged the companies collected children's personal information without proper parental notice and consent and retained it indefinitely."
      ],
      [
       "Found by",
       "FTC, referred to the Department of Justice."
      ],
      [
       "Outcome",
       "1.5 million dollar penalty. Order to destroy all personal information previously collected that did not comply with the COPPA Rule's parental notice and consent requirements, to destroy any affected work product that used data illegally collected from children, and prospectively to hold children's data no more than one year after last app use."
      ],
      [
       "Significance",
       "First COPPA case requiring algorithm destruction."
      ]
     ],
     "src": {
      "t": "FTC Takes Action Against Company Formerly Known as Weight Watchers for Illegally Collecting Kids' Sensitive Health Data",
      "u": "https://www.ftc.gov/news-events/news/press-releases/2022/03/ftc-takes-action-against-company-formerly-known-weight-watchers-illegally-collecting-kids-sensitive"
     }
    },
    {
     "name": "Amazon, Alexa",
     "meta": "Complaint filed 31 May 2023; stipulated order entered 19 July 2023, United States",
     "flag": "fine",
     "fields": [
      [
       "Told",
       "Amazon prominently and repeatedly assured its users, including parents, that they could delete voice recordings and geolocation information."
      ],
      [
       "Actual, recordings",
       "The complaint alleges at paragraph 5 that Alexa's default settings still save children's and adults' voice recordings and transcripts forever, even when a child no longer uses his Alexa profile and it has been inactive for years."
      ],
      [
       "Actual, transcripts",
       "At paragraph 28, on deletion requests, Alexa deleted the voice recordings but retained written transcripts of those recordings in residual data stores, which remained available for Amazon's benefit and use for product improvement, and Amazon did not alert the user or parent that it was keeping the written transcripts."
      ],
      [
       "Actual, location",
       "At paragraph 31, Amazon retained Alexa App users' geolocation information in secondary data storage locations that were insulated from consumers' deletion requests, a failure the complaint says recurred across February 2018, October 2018, April 2019, September 2019, August 2020, September 2020, February 2021 and early 2022."
      ],
      [
       "Found by",
       "FTC, with the Department of Justice filing."
      ],
      [
       "Outcome",
       "25 million dollar civil penalty; order to delete inactive child profiles unused for 18 months or more, delete certain voice and geolocation records, honour deletion requests, stop using retained data to improve algorithms, and disclose retention and deletion practices."
      ]
     ],
     "note": "Amazon said the same day that while we disagree with the FTC's claims and deny violating the law, this settlement puts the matter behind us.",
     "src": {
      "t": "Complaint, United States v. Amazon.com, Inc. (Dkt. 1)",
      "u": "https://www.ftc.gov/system/files/ftc_gov/pdf/Amazon-Complaint-%28Dkt.1%29.pdf"
     }
    },
    {
     "name": "Ring",
     "meta": "Complaint 31 May 2023; stipulated order 16 June 2023, United States",
     "flag": "fine",
     "fields": [
      [
       "Told",
       "Customers' private video was theirs and was protected."
      ],
      [
       "Actual",
       "The FTC charged Ring with allowing any employee or contractor to access consumers' private videos and with failing to implement basic protections."
      ],
      [
       "Found by",
       "FTC."
      ],
      [
       "Outcome",
       "5.8 million dollars in consumer refunds."
      ],
      [
       "Deletion remedy",
       "Ring must delete any customer videos and face embeddings, data collected from an individual's face, that it obtained prior to 2018, and delete any work products it derived from these videos, including data products such as data, models, and algorithms derived from videos it unlawfully reviewed."
      ]
     ],
     "src": {
      "t": "FTC Says Ring Employees Illegally Surveilled Customers",
      "u": "https://www.ftc.gov/news-events/news/press-releases/2023/05/ftc-says-ring-employees-illegally-surveilled-customers-failed-stop-hackers-taking-control-users"
     }
    },
    {
     "name": "1,435 Android apps",
     "meta": "43rd IEEE Symposium on Security and Privacy, 2022",
     "flag": "nothing",
     "fields": [
      [
       "Told",
       "Varies by app. Most published a privacy policy; a minority published a retention period."
      ],
      [
       "Method",
       "A purpose-built toolchain tested whether account data survived deletion across 1,435 popular Google Play apps and 771 associated websites, 678 of which ran their own sign-up."
      ],
      [
       "Actual",
       "64.45 percent of apps do not offer any means for users to delete accounts. 2.5 percent of apps still keep account data on app servers even after accounts are deleted by users. Only 5 percent of apps specify a retention period."
      ],
      [
       "Named instances",
       "Discord, where even months after deletion the researchers could confirm leftover account information still remained on Discord servers; Pinterest, retaining name, age, gender, country, email and password against a stated 14-day policy; Fitbit, retaining email, password, names, birthday, height, weight and sex against a 7-day policy; Quora, against a 14-day period; and eBay, with the account still present after a stated 30-day retention period."
      ],
      [
       "Found by",
       "Preethi Santhanam, Hoang Dang, Zhiyong Shan and Iulian Neamtiu, of NJIT and Wichita State."
      ],
      [
       "Outcome",
       "Responsible disclosure only. Most companies agreed to remove the leftover account data; Fitbit informed the researchers it would like to keep a part of the user data. No regulator acted on the findings."
      ]
     ],
     "src": {
      "t": "Scraping Sticky Leftovers: App User Information Left on Servers After Account Deletion, IEEE S&P 2022",
      "u": "https://web.njit.edu/~ineamtiu/pubs/oakland22santhanam.pdf"
     }
    },
    {
     "name": "Blackbaud",
     "meta": "FTC action announced 1 February 2024, United States",
     "flag": "none",
     "fields": [
      [
       "Told",
       "The company promised it takes appropriate physical, electronic and procedural safeguards to protect your personal information."
      ],
      [
       "Actual",
       "The FTC alleged the company held onto data far longer than was necessary for the purpose for which it was maintained, including information belonging to former customers. That over-retained data was exposed in a 2020 ransomware incident that went undetected for three months."
      ],
      [
       "Found by",
       "FTC, after the breach. This and the InMarket action were the FTC's first standalone Section 5 unfairness claims for unreasonable data retention."
      ],
      [
       "Outcome",
       "No penalty in this order. Required to delete personal data it does not need, publish a retention schedule stating why data is kept and when it will be deleted, and stop misrepresenting retention practices."
      ]
     ],
     "src": {
      "t": "FTC Order Will Require Blackbaud to Delete Unnecessary Data",
      "u": "https://www.ftc.gov/news-events/news/press-releases/2024/02/ftc-order-will-require-blackbaud-delete-unnecessary-data-boost-safeguards-settle-charges-its-lax"
     }
    },
    {
     "name": "Apple, iOS 17.5",
     "meta": "Reports from 15 May 2024; patch 20 May 2024; explanation 24 May 2024",
     "flag": "nothing",
     "fields": [
      [
       "Told",
       "Photos deleted from the Photos app, and emptied from Recently Deleted, are gone."
      ],
      [
       "Actual",
       "After updating to iOS 17.5, users found long-deleted photos back in their libraries."
      ],
      [
       "Company account",
       "Apple attributed it to a corrupted database entry on affected devices, said iOS 17.5 inadvertently restored files from the corrupted data and repopulated the Photos app with the deleted images, and said the corrupted data may have been copied from one device to another when restoring a local backup, performing a device-to-device transfer, or restoring an iCloud device backup."
      ],
      [
       "Found by",
       "Users, then aggregated by the technology press."
      ],
      [
       "Outcome",
       "Software fix in iOS 17.5.1. The patch did not remove the resurfaced photos; users had to delete them again. No regulator action located."
      ]
     ],
     "note": "One widely circulated user report claimed photos reappeared on an iPad that had been wiped and sold; Apple's position is that the issue had nothing to do with iCloud Photos, that it never had access to the deleted photos and that the files never left those devices, and there is no published independent forensic confirmation either way.",
     "src": {
      "t": "Apple Sheds More Light on iOS 17.5 Bug That Resurfaced Deleted Photos",
      "u": "https://www.macrumors.com/2024/05/24/apple-explains-resurfaced-deleted-photos-bug/"
     }
    },
    {
     "name": "Hamburg debt-collection provider",
     "meta": "Announced 12 November 2024, violation identified from mid-November 2023, Germany",
     "flag": "fine",
     "fields": [
      [
       "Told",
       "Statutory deletion periods applied to debtor records."
      ],
      [
       "Actual",
       "The company retained a six-figure number of debtors' personal records with no legal basis, in some cases for up to five years beyond the applicable deletion deadline, in breach of Articles 5(1)(a) and 6(1) GDPR."
      ],
      [
       "Found by",
       "The Hamburg Commissioner for Data Protection and Freedom of Information, in a sector-wide audit of receivables-management firms."
      ],
      [
       "Outcome",
       "900,000 euros, legally binding. The company accepted the fine and cooperated. A second firm with comparable deficiencies remained under investigation."
      ]
     ],
     "src": {
      "t": "HmbBfDI press release, Branchenweite Schwerpunktpruefung im Forderungsmanagement",
      "u": "https://datenschutz-hamburg.de/fileadmin/user_upload/HmbBfDI/Pressemitteilungen/2024/2024-11-12_PM_Branchenweite_Schwerpunktpruefung_im_Forderungsmanagement.pdf"
     }
    },
    {
     "name": "Clearview AI",
     "meta": "CNIL order 17 October 2022; overdue penalty payment decision 13 April 2023, France",
     "flag": "fine",
     "fields": [
      [
       "Order",
       "The data subjects were never customers. The CNIL ordered the company not to collect and process data on individuals located in France without any legal basis, and to delete the data of these individuals."
      ],
      [
       "Actual",
       "Clearview AI did not send any proof of compliance within the time limit, and did not respond substantively to the order at all."
      ],
      [
       "Found by",
       "CNIL, on complaints and following coordinated European action."
      ],
      [
       "Outcome",
       "20 million euro fine, then a further 5,200,000 euro overdue penalty payment calculated at 100,000 euros per day for 52 days."
      ],
      [
       "Control case",
       "The UK ICO's parallel 7.5 million pound penalty and deletion enforcement notice were overturned by the First-tier Tribunal in October 2023 on jurisdictional grounds, with the ICO appealing to the Upper Tribunal; judgment was handed down in October 2025."
      ]
     ],
     "note": "Deletion orders against a foreign company with no EU or UK establishment have produced little verified deletion.",
     "src": {
      "t": "Facial recognition: the CNIL imposes a penalty payment on CLEARVIEW AI",
      "u": "https://www.cnil.fr/en/facial-recognition-cnil-imposes-penalty-payment-clearview-ai"
     }
    }
   ]
  },
  {
   "n": "02",
   "kicker": "THE LEGAL FLOOR",
   "title": "Every regime sets a clock and none of them names a backup",
   "intro": "Five major regimes govern most of the world's consumer data, and all five give an individual a right to have data deleted. Read against each other, they agree on a response deadline of one to three months and diverge on almost everything that determines whether deletion actually happens: what counts as a copy, whether replicas and backups are in scope, and whether anything derived from the data must go with it.",
   "paras": [
    "GDPR Article 17 obliges erasure without undue delay where one of six grounds applies: the data are no longer necessary for the purposes collected; consent is withdrawn with no other legal ground; the data subject objects successfully, or objects to direct marketing; the data were unlawfully processed; erasure is required by Union or Member State law; or the data were collected in relation to information society services offered to a child. Article 12(3) sets the operative clock: respond without undue delay and at the latest within one month, extendable by two further months for complex or numerous requests. The ICO states the time limit starts on receipt of the request or, if later, on receipt of any information requested to confirm the requester's identity.",
    "Article 17(3) disapplies the right where processing is necessary for freedom of expression and information; compliance with a legal obligation or a public-interest task; public-interest reasons in public health; archiving in the public interest, scientific or historical research or statistics under Article 89(2) where erasure would render the objectives impossible or seriously impair them; and the establishment, exercise or defence of legal claims. Requests that are manifestly unfounded or excessive may be refused or charged for.",
    "Nothing in Article 17 carves out backups. UK ICO guidance says the controller must put backup data beyond use even if it cannot be immediately overwritten, on the basis that the backup is simply held until it is replaced in line with an established schedule, and that a controller must be absolutely clear with individuals as to what will happen to their data when their erasure request is fulfilled, including in respect of backup systems. That is guidance, not statutory text. For copies that have already spread, Article 17(2) requires a controller that made the data public to take reasonable steps, accounting for available technology and cost, to inform other controllers so they erase links, copies or replications. Reasonable steps is the load-bearing phrase and it is not a guarantee of removal.",
    "Reach stops at the border. In Google LLC v CNIL (C-507/17, Grand Chamber, 24 September 2019) the Court held that an operator obliged to de-reference need not do so on all versions worldwide, but must do so across the domain versions corresponding to EU Member States and must put in place measures discouraging Internet users from gaining access from one of the EU Member States to the relevant links that appear on non-EU versions. A national authority may still order broader de-referencing after balancing.",
    "California's CCPA and CPRA, at Civil Code section 1798.105, lets consumers ask a business to delete personal information it collected from them and to tell their service providers to do the same, within 45 calendar days, extendable once by a further 45. The exceptions at sections 1798.105(d) and 1798.145 cover completing the transaction, detecting security incidents, debugging, exercising free speech, complying with the Electronic Communications Privacy Act, peer-reviewed research, internal uses reasonably aligned with consumer expectations, other legal obligations, and unverified requests. Publicly available data, medical information and consumer credit reporting information are carved out. There is no statutory reach into backups, and derived or inferred data is covered only insofar as it falls within personal information collected from the consumer.",
    "Brazil's LGPD bounds the right at the outset by legal basis. Article 18(VI) gives a right to deletion of personal data processed with the consent of the data subject, except in the cases provided for in Article 16, so data processed on a non-consent basis sit outside it. Article 16 permits retention for compliance with a legal or regulatory obligation, for study by a research body with anonymisation where possible, for transfer to a third party under the law, and for the controller's exclusive use with third-party access barred and the data anonymised. Article 18 paragraph 5 sets no fixed number of days; requests are met within the time limits provided for in the regulation. Paragraph 6 requires the controller to immediately inform the processing agents with whom it has shared the data, unless that is impossible or requires disproportionate effort.",
    "India's DPDP Rules 2025, notified on 14 November 2025 with an eighteen-month phased compliance period, give individuals a ninety-day maximum for answering requests including erasure, three times the GDPR baseline. Rule 8 adds something GDPR does not have: a mandatory erasure clock that runs without any user request. For classes of Data Fiduciary and purposes listed in the Third Schedule, reported to include e-commerce platforms above a user threshold, social media intermediaries and online gaming intermediaries, personal data must be erased after a set period of user inactivity, widely reported as three years from last interaction, unless retention is legally required or the individual re-engages. The fiduciary must notify the individual at least forty-eight hours before completion of the time period for erasure. Cutting the other way, Rule 8 also sets a retention floor: certain fiduciaries must preserve personal data, associated traffic data and processing logs for a minimum period of one year.",
    "China's PIPL Article 47 makes deletion both an individual right and a standing obligation on the handler, and then writes the engineering problem into the statute. Where a statutory retention period has not expired, or deletion proves technically impractical, the handler shall stop processing personal information other than storage and taking necessary security measures. The data may remain in existence provided it is frozen."
   ],
   "table": {
    "cols": [
     "Regime",
     "Response clock",
     "Backups named",
     "Downstream copies",
     "Derived or training data"
    ],
    "rows": [
     [
      "GDPR Article 17",
      "1 month, plus 2",
      "No, guidance only",
      "Article 17(2), reasonable steps",
      "Not named, contested"
     ],
     [
      "CCPA section 1798.105",
      "45 days, plus 45",
      "No",
      "Service providers must be told",
      "Not named"
     ],
     [
      "LGPD Article 18",
      "Set by regulation",
      "No",
      "Paragraph 6 notification duty",
      "Not named"
     ],
     [
      "DPDP Rules 2025",
      "90 days",
      "No",
      "Not named",
      "Not named"
     ],
     [
      "PIPL Article 47",
      "Not specified",
      "No",
      "Not named",
      "Technically impractical exit"
     ]
    ]
   }
  },
  {
   "n": "03",
   "kicker": "THE PLUMBING",
   "title": "The deletion path and the data path were never the same path",
   "intro": "When the EDPB actually asked controllers how erasure works in their systems, the answers were about infrastructure, not policy. Thirty-two supervisory authorities across the EEA contacted 7,943 controllers in 2025 and 764 responded: 431 public sector, 325 private and 8 other, with individual authorities processing between 3 and 155 answers. Almost two-thirds of participating authorities assessed compliance as average. Of the seven recurring issues the report lists, four are about plumbing.",
   "paras": [
    "On backups, half of the responding supervisory authorities raised concerns regarding the deletion of personal data in this context. Many controllers were found not to have specific procedures and measures in place to handle erasure requests in the context of back-ups, relying either on automatic deletion measures not specific to the erasure requests received, or on retention periods applicable to the concerned back-ups. Some said data in backups is only deleted when it is automatically overwritten by another back-up. Some said that in certain situations it may not be possible to simply change parts of the data, especially when the back-up must be preserved as a whole. Some face problems while deleting data in older information systems or large cloud solutions. One authority found a practice of deleting in increments over long periods and concluded that this creates difficulties to conclude whether deletion triggered by a data subject's erasure request takes place without undue delay.",
    "Two further findings undercut any downstream promise. Authorities identified controllers relying on inefficient anonymisation techniques to handle erasure requests as an alternative to deletion, and noted that controllers may be uncertain about what legally and technically constitutes anonymisation. Separately, controllers struggled to determine retention periods at all, which makes any deletion commitment built on top of them unverifiable.",
    "The reference standard for sanitisation does not cover the case. NIST SP 800-88 Revision 1, published December 2014, defined three levels: Clear, a logical overwrite via standard read and write commands that resists simple non-invasive recovery; Purge, physical or logical techniques rendering recovery infeasible against state-of-the-art laboratory methods; and Destroy, media rendered unusable. It flagged the distributed-systems problem directly: partial sanitization comes with some risk, as it may be difficult to verify that sensitive data stored on a portion of the media did not spill over into other areas, and advised that sanitization of the whole device is preferred to partial sanitization whenever possible. Revision 1 was withdrawn on 26 September 2025 and superseded the same day by SP 800-88r2, which shifts emphasis to running an enterprise media sanitization programme, expands cryptographic erase with more eligible key types and key sanitisation aligned to ISO/IEC 19790 zeroization, and defers specific techniques to IEEE 2883, NSA specifications or organisational standards.",
    "The gap that matters here: the standard governs media. A user account is not media. Nothing in SP 800-88 tells an operator how to remove one person's rows from a live, replicated, multi-region database with rolling backups, which is what almost every case in the ledger actually involves.",
    "No regulator has issued dedicated guidance on erasure from edge caches. The 2012 Facebook case remains the clearest documented instance, and the fix was a CDN max-age setting, not a deletion mechanism. The FTC's Alexa complaint supplies the general pattern in a regulator's own words: deletion requests that succeed against the primary store and fail against residual data stores and secondary data storage locations that were insulated from consumers' deletion requests. Amazon's geolocation failure recurring at eight separate discovery points between 2018 and 2022 is the strongest documented evidence that this is a class of architectural failure rather than a one-off bug.",
    "For machine learning, the most direct official statement on what erasure would technically require is the EDPB Support Pool of Experts report by Dr Kris Shrishak, March 2024. Deleting the model, removing the requested personal data and retraining is identified as the method that implements the rights in Articles 16 to 17 of the GDPR effectively, while being computationally expensive for large models. Exact machine unlearning via the SISA approach, sharded, isolated, sliced and aggregated, is described as currently the best-known approach, partitioning training data so each point sits in one shard and only affected shards need retraining. Approximate unlearning lacks strong guarantees. Output filtering is a mitigation, not a removal. The report concludes that only the use of completely anonymised data would avoid obligations related to the correction and deletion of personal data.",
    "Model destruction has in fact been ordered four times on the documented record, all by consumer-protection or data-protection regulators rather than courts applying an erasure right: Everalbum (FTC, January 2021), destruction of face embeddings and any facial recognition models or algorithms developed with Ever users' photos or videos; WW International and Kurbo (FTC, March 2022), destruction of any affected work product that used data illegally collected from children; Ring (FTC, June 2023), deletion of data products such as data, models, and algorithms derived from videos it unlawfully reviewed; and Kakao Pay, Apple and Alipay (South Korea's PIPC, 23 January 2025), where following the transfer of roughly 40 million Korean users' data to Alipay, which built a non-sufficient-funds scoring model for Apple Pay, the PIPC fined Kakao Pay KRW 5.968 billion and Apple Distribution International KRW 2.45 billion, KRW 8.375 billion in total, and per secondary reporting ordered Alipay to destroy the model. Brazil's ANPD also fined TikTok R$153.7 million on 25 August 2026 over processing of children's and adolescents' data across both its logged-out and registered feeds, with a determination to eliminate the irregularly collected data."
   ]
  },
  {
   "n": "04",
   "kicker": "ENFORCEMENT",
   "title": "Erasure is the most-exercised right in Europe and one of the least-fined",
   "intro": "As of 14 September 2026 the CMS GDPR Enforcement Tracker records 3,228 tracked enforcement actions across 32 countries totalling 6.31 billion euros. Article 17 is cited in 133 of them, tenth by frequency. For scale, Article 5 is cited 1,531 times, Article 6 1,052 times, Article 32 562 times and Article 13 539 times, and the access right at Article 15 is cited 232 times, nearly twice as often as erasure.",
   "paras": [
    "That is not because nobody asks. The share of complaints concerning erasure, as reported by each authority itself, runs from roughly 5 percent in Spain to 37 percent in France.",
    "The EDPB's Coordinated Enforcement Framework action on the right to erasure launched on 5 March 2025 and reported on 18 February 2026. Of the thirty-two participating authorities, nine launched or continued formal investigations (Austria, Denmark, some German authorities, Portugal, France, Slovenia, Lithuania and Cyprus) and twenty-three ran fact-finding exercises, fourteen of which said they would decide follow-up based on results. The report states that it does not constitute a definitive statement of the actions carried out within the CEF action, several investigations being open at publication.",
    "France gives the scale of the underlying caseload. The CNIL received a record 20,150 complaints in 2025, up 10 percent on 2024, carried out 323 investigations, and issued 259 corrective measures including 83 sanctions totalling nearly 487 million euros. Erasure was 37 percent of its complaints the previous year. Ireland's DPC received 16,160 new cases in 2025, of which 3,385 progressed to complaint-handling, a 27 percent increase on 2024, and concluded 2,569 complaints; erasure accounted for 17 percent of all complaints, second to subject access requests at 42 percent.",
    "The erasure-specific fines the CEF report could name are small. Finland fined a private parking-enforcement company 75,000 euros for, among other things, failing to delete personal data once no longer necessary; the Helsinki Administrative Court reduced it to 70,000 euros and the Supreme Administrative Court refused leave to appeal. The Netherlands fined a recruitment company 6,000 euros for ignoring removal requests and having no method in place for handling them. Hungary (video of an altercation) and Malta (a vehicle insurer ordered to erase the data of someone who had only requested a quote) issued compliance orders rather than fines.",
    "Article 83(5) exposes a controller to 20 million euros or 4 percent of worldwide turnover for failures on Articles 12 to 22. Against that ceiling, the largest identified erasure-grounded fine in the EEA is the Berlin action against Deutsche Wohnen, which after seven years of litigation stands at 900,000 euros and is not final. The Hamburg debt-collection fine of 900,000 euros, November 2024, is on the verified record the largest uncontested over-retention penalty in Germany. The ten largest GDPR fines on record, all 225 million euros and above, concern legal basis, transparency and international transfers. No erasure case is close."
   ],
   "table": {
    "cols": [
     "Authority",
     "Erasure share of complaints",
     "Period, as reported by the authority"
    ],
    "rows": [
     [
      "France, CNIL",
      "37%",
      "2024, published 17 March 2025"
     ],
     [
      "Netherlands",
      "around 19%",
      "Reported to the EDPB CEF action, 2025"
     ],
     [
      "Luxembourg",
      "around 19%",
      "Reported to the EDPB CEF action, 2025"
     ],
     [
      "Ireland, DPC",
      "17%",
      "2025 annual report"
     ],
     [
      "Denmark",
      "around 15%",
      "Reported to the EDPB CEF action, 2025; some cases also raise other issues"
     ],
     [
      "Hungary",
      "10% to 15%",
      "Within 40% to 45% of complaints concerning data subject rights generally"
     ],
     [
      "Liechtenstein",
      "around 10%",
      "Reported to the EDPB CEF action, 2025"
     ],
     [
      "Slovenia",
      "around 10%",
      "Reported to the EDPB CEF action, 2025"
     ],
     [
      "Spain",
      "around 5%",
      "To mid-2025"
     ]
    ]
   }
  },
  {
   "n": "05",
   "kicker": "CONCESSIONS",
   "title": "Regulators have written down that deletion often will not happen",
   "intro": "The most useful admissions in this file are not from companies. They are from the authorities that enforce the right, in documents published between December 2024 and February 2026, and they say in plain terms that erasure from backups may be inadvisable, that models trained on unlawful data need not be deleted, and that the meaning of without undue delay in this context is still to be worked out.",
   "paras": [
    "Read together, these say that the legal right to erasure currently stops at the boundary of the live production store, and that everything past that boundary, backups, replicas, derived features and trained weights, is governed by discretion, guidance and best effort rather than by an enforceable deadline."
   ],
   "entries": [
    {
     "name": "European Data Protection Board, on backups",
     "meta": "CEF report adopted 18 February 2026, EEA",
     "flag": "open",
     "fields": [
      [
       "What it says",
       "Depending on the technical settings and risks, it might not always be advisable to modify or delete information from back-ups. But, in that case, organisations should have appropriate procedures to keep track of erasure requests and comply with them on restored systems, as much as possible, in case of a data breach affecting the integrity of the organisation's system."
      ],
      [
       "What that converts",
       "A duty to delete now becomes a duty to remember to delete later, conditional on a restore that may never happen."
      ],
      [
       "Scale",
       "Half of the responding supervisory authorities raised concerns regarding the deletion of personal data in this context."
      ],
      [
       "Stated follow-up",
       "The Board will consider providing more guidance and recommendations to explain how controllers should practically deal with erasure in back-ups and what is meant by without undue delay in this context."
      ]
     ],
     "note": "Eight years after the GDPR became applicable, the Board's own position is that the question is unresolved.",
     "src": {
      "t": "Report on the CEF 2025, Implementation of the right to erasure by controllers (adopted 18 February 2026)",
      "u": "https://www.edpb.europa.eu/system/files/2026-02/edpb_cef-report_2025_right-to-erasure_en.pdf"
     }
    },
    {
     "name": "China, PIPL Article 47",
     "meta": "Statutory text, China",
     "flag": "open",
     "fields": [
      [
       "What it obliges",
       "The handler must proactively delete, and the individual may request deletion, where the purpose has been achieved, cannot be achieved or is no longer necessary; where the handler stops providing the product or service or the agreed storage period has expired; where consent is withdrawn; where processing violated law, regulation or agreement; or in other circumstances prescribed by law."
      ],
      [
       "The exit",
       "Where a statutory retention period has not expired, or deletion proves technically impractical, the handler shall stop processing personal information other than storage and taking necessary security measures."
      ],
      [
       "What that means",
       "The law permits the data to remain in existence provided it is frozen. This is the closest any major regime comes to writing the engineering reality into statute rather than into guidance."
      ]
     ],
     "src": {
      "t": "Article 47, Personal Information Protection Law (PIPL)",
      "u": "https://personalinformationprotectionlaw.com/PIPL/article-47/"
     }
    },
    {
     "name": "European Data Protection Board, on trained models",
     "meta": "Opinion 28/2024, adopted 17 December 2024",
     "flag": "open",
     "fields": [
      [
       "What it refuses",
       "AI models trained on personal data cannot, in all cases, be considered anonymous. Whether a model is anonymous must be assessed case by case against specific criteria."
      ],
      [
       "The threshold",
       "Both the likelihood of direct, including probabilistic, extraction of personal data regarding individuals whose data trained the model, and the likelihood of obtaining such data from queries, must be insignificant for any data subject, assessed against state-of-the-art attacks."
      ],
      [
       "What it declines to do",
       "On unlawfully developed models the Opinion does not mandate deletion. It leaves supervisory authorities their Article 58 discretion to choose appropriate, necessary, and proportionate measures."
      ]
     ],
     "src": {
      "t": "EDPB Opinion 28/2024 on certain data protection aspects related to the processing of personal data in the context of AI models",
      "u": "https://www.edpb.europa.eu/system/files/2024-12/edpb_opinion_202428_ai-models_en.pdf"
     }
    },
    {
     "name": "Information Commissioner's Office, on generative AI",
     "meta": "Fourth call for evidence and published response, United Kingdom",
     "flag": "open",
     "fields": [
      [
       "What it acknowledges",
       "Generative AI models present memorisation issues which reflect the fact that during training these models do not just parse personal data like traditional software but retain its imprints."
      ],
      [
       "What it rejects",
       "Industry's position that erasure can be handled at the application layer. Filters may not be sufficient, as they do not actually remove the data from the model."
      ],
      [
       "What it requires",
       "Organisations must therefore have mechanisms in place to fulfil information rights requests for both the training data and, if a model contains personal data, the trained model itself."
      ],
      [
       "What is still missing",
       "No controller anywhere is documented as having retrained or deleted a production model in response to an individual erasure request."
      ]
     ],
     "src": {
      "t": "ICO response, Engineering individual rights into generative AI models",
      "u": "https://ico.org.uk/about-the-ico/what-we-do/our-work-on-artificial-intelligence/response-to-the-consultation-series-on-generative-ai/engineering-individual-rights-into-generative-ai-models/"
     }
    }
   ]
  }
 ],
 "gaps": [
  "Compliance rates for erasure requests are unknown everywhere. Authorities publish complaint volumes; none publishes the proportion of erasure requests actually fulfilled, fulfilled late or refused, nor any independent verification that fulfilled requests resulted in deletion.",
  "The EDPB's 764-controller survey records what controllers said about their processes. It involved no technical testing of whether data was gone.",
  "Verification is almost never performed, including by regulators. The CEF report has to recommend that controllers verify that erasure has been carried out and be able to demonstrate such erasure, which implies it is not standard. Outside the Santhanam et al. study no systematic third-party testing of post-deletion server state has been published, and that study covered only apps its toolchain could instrument, so the 2.5 percent leftover figure is a floor, not a population estimate.",
  "The Alipay model-destruction order is reported but not confirmed from a primary source. IAPP and a specialist enforcement outlet state the PIPC ordered Alipay to destroy the scoring model; the English-language PIPC and aggregator pages reachable for this research confirm the 23 January 2025 decision and the KRW 8.375 billion in fines against Kakao Pay and Apple, but do not themselves state the model-destruction order or a separate Alipay fine. Treat that element as reported, not verified.",
  "The final Swedish fine against Google is reported inconsistently. IMY confirms the original SEK 75 million; reports of the 23 November 2020 ruling give the reduced figure as both SEK 52 million and SEK 50 million.",
  "No AI model is documented as having been retrained or deleted in response to an individual erasure request. The FTC and PIPC orders were regulatory disgorgement following unlawful collection, not responses to a data subject exercising a right, and the ICO's own consultation treats the question as open.",
  "Whether the fixes worked cannot be confirmed. Facebook's 2012 CDN change rests on journalist spot-checks rather than audit; Apple's account of the iOS 17.5 bug is the company's own and the contradicting user report has no published independent forensic examination either way; Ashley Madison's compliance with its March 2017 undertakings has no published verification report.",
  "Platform retention windows after account deletion could not be verified from primary sources. Meta's own policy text on the post-deletion period and backup copies was not retrievable because of robots restrictions, and widely repeated figures of 30 days to cancel and up to 90 days to delete are omitted here rather than cited to secondary sources. Enforcement counts are also a floor: the CMS tracker covers publicly known fines and penalties only, so confidential settlements and public-sector bodies exempt from fines under national law are invisible."
 ],
 "method": "This issue was assembled from primary regulator and court documents where they exist, company statements where the company is the only source, and one peer-reviewed measurement study. Each ledger entry pairs what the operator told users with what was later shown to be on its servers, and records who established the discrepancy and what followed. Where a claim rests only on a company's own account, or on secondary reporting, or is contested, that is marked in the entry note or in the limits above rather than smoothed away. Nothing here was tested by the Institute. What would change it is direct measurement: submitting deletion requests at scale, then testing server-side state afterwards the way Santhanam and colleagues did for Android, and publishing the per-controller results that no authority currently collects.",
 "sources": [
  {
   "t": "'Deleted' Facebook photos survive online three years later",
   "u": "https://nakedsecurity.sophos.com/2012/02/08/deleted-facebook-photos-survive/"
  },
  {
   "t": "Facebook stops hoarding your deleted photos",
   "u": "https://www.nbcnews.com/tech/tech-news/facebook-stops-hoarding-your-deleted-photos-flna949621"
  },
  {
   "t": "PIPEDA Report of Findings #2016-005: Joint investigation of Ashley Madison",
   "u": "https://www.priv.gc.ca/en/opc-actions-and-decisions/investigations/investigations-into-businesses/2016/pipeda-2016-005/"
  },
  {
   "t": "Operators of AshleyMadison.com Settle FTC, State Charges Resulting from 2015 Data Breach",
   "u": "https://www.ftc.gov/news-events/news/press-releases/2016/12/operators-ashleymadisoncom-settle-ftc-state-charges-resulting-2015-data-breach-exposed-36-million"
  },
  {
   "t": "Snapchat Settles FTC Charges That Promises of Disappearing Messages Were False",
   "u": "https://www.ftc.gov/news-events/news/press-releases/2014/05/snapchat-settles-ftc-charges-promises-disappearing-messages-were-false"
  },
  {
   "t": "Revealed: Cambridge Analytica data on thousands of Facebook users still not deleted",
   "u": "https://www.channel4.com/news/revealed-cambridge-analytica-data-on-thousands-of-facebook-users-still-not-deleted"
  },
  {
   "t": "Twitter kept your deleted DMs for years, even after you left the network",
   "u": "https://techcrunch.com/2019/02/15/twitter-direct-messages/"
  },
  {
   "t": "German real estate company fined 14.5 million EUR for storing all personal data of tenants indefinitely in an archive system",
   "u": "https://www.timelex.eu/en/blog/german-real-estate-company-fined-145-million-eur-storing-all-personal-data-tenants"
  },
  {
   "t": "LG: Deutsche Wohnen haftet fuer verspaetete Mieterdaten-Loeschung",
   "u": "https://www.lto.de/recht/nachrichten/n/lg-berlin-i-526owiglg120-dsgvo-verstoss-deutsche-wohnen-bussgeld-reduziert"
  },
  {
   "t": "Swedish Authority for Privacy Protection imposes administrative fine on Google",
   "u": "https://www.imy.se/en/news/the-swedish-data-protection-authority-imposes-administrative-fine-on-google/"
  },
  {
   "t": "Sweden court rejects Google's appeal in data privacy case",
   "u": "https://www.jurist.org/news/2020/11/sweden-court-rejects-googles-appeal-in-data-privacy-case/"
  },
  {
   "t": "California Company Settles FTC Allegations It Deceived Consumers about use of Facial Recognition in Photo Storage App",
   "u": "https://www.ftc.gov/news-events/news/press-releases/2021/01/california-company-settles-ftc-allegations-it-deceived-consumers-about-use-facial-recognition-photo"
  },
  {
   "t": "FTC Takes Action Against Company Formerly Known as Weight Watchers for Illegally Collecting Kids' Sensitive Health Data",
   "u": "https://www.ftc.gov/news-events/news/press-releases/2022/03/ftc-takes-action-against-company-formerly-known-weight-watchers-illegally-collecting-kids-sensitive"
  },
  {
   "t": "FTC and DOJ Charge Amazon with Violating Children's Privacy Law by Keeping Kids' Alexa Voice Recordings Forever",
   "u": "https://www.ftc.gov/news-events/news/press-releases/2023/05/ftc-doj-charge-amazon-violating-childrens-privacy-law-keeping-kids-alexa-voice-recordings-forever"
  },
  {
   "t": "Complaint, United States v. Amazon.com, Inc. (Dkt. 1)",
   "u": "https://www.ftc.gov/system/files/ftc_gov/pdf/Amazon-Complaint-%28Dkt.1%29.pdf"
  },
  {
   "t": "Amazon responds to FTC settlement regarding Alexa",
   "u": "https://www.aboutamazon.com/news/policy-news-views/amazon-response-to-ftc-settlement-regarding-alexa"
  },
  {
   "t": "FTC Says Ring Employees Illegally Surveilled Customers",
   "u": "https://www.ftc.gov/news-events/news/press-releases/2023/05/ftc-says-ring-employees-illegally-surveilled-customers-failed-stop-hackers-taking-control-users"
  },
  {
   "t": "Ring, LLC | Federal Trade Commission",
   "u": "https://www.ftc.gov/legal-library/browse/cases-proceedings/2023113-ring-llc"
  },
  {
   "t": "Scraping Sticky Leftovers: App User Information Left on Servers After Account Deletion, IEEE S&P 2022",
   "u": "https://web.njit.edu/~ineamtiu/pubs/oakland22santhanam.pdf"
  },
  {
   "t": "FTC Order Will Require Blackbaud to Delete Unnecessary Data",
   "u": "https://www.ftc.gov/news-events/news/press-releases/2024/02/ftc-order-will-require-blackbaud-delete-unnecessary-data-boost-safeguards-settle-charges-its-lax"
  },
  {
   "t": "Apple Sheds More Light on iOS 17.5 Bug That Resurfaced Deleted Photos",
   "u": "https://www.macrumors.com/2024/05/24/apple-explains-resurfaced-deleted-photos-bug/"
  },
  {
   "t": "HmbBfDI press release, Branchenweite Schwerpunktpruefung im Forderungsmanagement",
   "u": "https://datenschutz-hamburg.de/fileadmin/user_upload/HmbBfDI/Pressemitteilungen/2024/2024-11-12_PM_Branchenweite_Schwerpunktpruefung_im_Forderungsmanagement.pdf"
  },
  {
   "t": "Facial recognition: the CNIL imposes a penalty payment on CLEARVIEW AI",
   "u": "https://www.cnil.fr/en/facial-recognition-cnil-imposes-penalty-payment-clearview-ai"
  },
  {
   "t": "UK Upper Tribunal hands down judgment on Clearview AI Inc",
   "u": "https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2025/10/uk-upper-tribunal-hands-down-judgment-on-clearview-ai-inc/"
  },
  {
   "t": "Art. 17 GDPR, Right to erasure (right to be forgotten)",
   "u": "https://gdpr-info.eu/art-17-gdpr/"
  },
  {
   "t": "Right to erasure | ICO",
   "u": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-erasure/"
  },
  {
   "t": "CJEU Rules Right to be Forgotten on Google Limited to the EU",
   "u": "https://www.hunton.com/privacy-and-cybersecurity-law-blog/cjeu-rules-right-to-be-forgotten-on-google-limited-to-the-eu-in-landmark-case"
  },
  {
   "t": "California Consumer Privacy Act (CCPA) | State of California Department of Justice",
   "u": "https://oag.ca.gov/privacy/ccpa"
  },
  {
   "t": "Article 18: Personal Data Subject's Rights in Relation to the Controller (LGPD)",
   "u": "https://lgpd-brazil.info/chapter_03/article_18"
  },
  {
   "t": "PIB, DPDP Rules, 2025 Notified",
   "u": "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf"
  },
  {
   "t": "Rule 8 of Digital Personal Data Protection Act, 2023 DPDP Rules 2025",
   "u": "https://www.dpdpa.com/dpdparules/rule8.html"
  },
  {
   "t": "DPDP Rules 2025 Notified by MeitY: Complete guide",
   "u": "https://www.ey.com/en_in/insights/cybersecurity/transforming-data-privacy-digital-personal-data-protection-rules-2025"
  },
  {
   "t": "Article 47, Personal Information Protection Law (PIPL)",
   "u": "https://personalinformationprotectionlaw.com/PIPL/article-47/"
  },
  {
   "t": "Report on the CEF 2025, Implementation of the right to erasure by controllers (adopted 18 February 2026)",
   "u": "https://www.edpb.europa.eu/system/files/2026-02/edpb_cef-report_2025_right-to-erasure_en.pdf"
  },
  {
   "t": "NIST SP 800-88 Rev. 1, Guidelines for Media Sanitization",
   "u": "https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-88r1.pdf"
  },
  {
   "t": "Guidelines for Media Sanitization: NIST Publishes SP 800-88r2",
   "u": "https://www.nist.gov/news-events/news/2025/09/guidelines-media-sanitization-nist-publishes-sp-800-88r2"
  },
  {
   "t": "EDPB Opinion 28/2024 on certain data protection aspects related to the processing of personal data in the context of AI models",
   "u": "https://www.edpb.europa.eu/system/files/2024-12/edpb_opinion_202428_ai-models_en.pdf"
  },
  {
   "t": "EDPB Support Pool of Experts, AI: effective implementation of data subjects' rights",
   "u": "https://www.edpb.europa.eu/system/files/2025-01/d2-ai-effective-implementation-of-data-subjects-rights_en.pdf"
  },
  {
   "t": "Generative AI fourth call for evidence: engineering individual rights into generative AI models",
   "u": "https://ico.org.uk/about-the-ico/what-we-do/our-work-on-artificial-intelligence/generative-ai-fourth-call-for-evidence/"
  },
  {
   "t": "ICO response, Engineering individual rights into generative AI models",
   "u": "https://ico.org.uk/about-the-ico/what-we-do/our-work-on-artificial-intelligence/response-to-the-consultation-series-on-generative-ai/engineering-individual-rights-into-generative-ai-models/"
  },
  {
   "t": "South Korea's PIPC flexes its muscles: What to know about AI model deletion, cross-border transfers and more",
   "u": "https://iapp.org/news/a/south-korea-s-pipc-flexes-its-muscles-what-to-know-about-ai-model-deletion-cross-border-transfers-and-more"
  },
  {
   "t": "ANPD multa TikTok em R$ 153,7 milhoes por falhas na protecao de dados de criancas e adolescentes",
   "u": "https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-multa-tiktok-em-r-153-7-milhoes-por-falhas-na-protecao-de-dados-de-criancas-e-adolescentes"
  },
  {
   "t": "GDPR Fines, Statistics (CMS GDPR Enforcement Tracker)",
   "u": "https://www.enforcementtracker.com/statistics"
  },
  {
   "t": "Droit a l'effacement: la CNIL et ses homologues europeens effectuent une serie de controles",
   "u": "https://www.cnil.fr/fr/droit-leffacement-la-cnil-et-ses-homologues-europeens-effectuent-une-serie-de-controles"
  },
  {
   "t": "Data Protection Commission Annual Report 2025",
   "u": "https://www.dataprotection.ie/sites/default/files/uploads/2026-06/DPC-Annual-Report-2025-Digital-AW.pdf"
  },
  {
   "t": "Fine for recruitment company for ignoring requests for removal",
   "u": "https://www.autoriteitpersoonsgegevens.nl/en/current/fine-for-recruitment-company-for-ignoring-requests-for-removal"
  },
  {
   "t": "CNIL Annual Report 2025",
   "u": "https://www.cnil.fr/en/annual-report-2025"
  }
 ]
};
