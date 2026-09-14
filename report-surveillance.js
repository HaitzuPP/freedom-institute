window.FI_REPORT = {
 "id": "surveillance",
 "issue": "Standing",
 "period": "Updated Sep 2026",
 "status": "Desk research on the public record: forensic laboratory reports, court filings and judgments, sanctions notices, parliamentary inquiries and company transparency reports. Institute testing has not begun.",
 "title": "State surveillance and AI, tracked as it changes",
 "standfirst": "Thirteen vendors sit in this ledger and only three measures in seven years have demonstrably changed how any of them behaves: one Entity List delisting, one permanent injunction, and commercial self-policing triggered by forensic publication rather than by law. The confirmed-infection count across the entire published laboratory literature is in the low hundreds, against an Apple notification footprint of more than 150 countries. This is a standing tracker rather than a dated issue; it is maintained and revised as findings, listings, judgments and denials land, not published once.",
 "stats": [
  {
   "v": "over 150",
   "k": "countries with Apple alerts",
   "d": "Users Apple believes were individually targeted by mercenary spyware, cumulative since the programme began in late 2021; the round on 14 August 2026 reached 110 countries",
   "by": "Apple threat notification support documentation, current 2026",
   "src": "https://support.apple.com/en-us/102174"
  },
  {
   "v": "309",
   "k": "US government requests to OpenAI",
   "d": "Received in the second half of 2025, up from 37 in the first half of 2024 and 146 in the first half of 2025",
   "by": "OpenAI, government requests for user data, July to December 2025",
   "src": "https://cdn.openai.com/trust-and-transparency/report-2025h2-government-requests-for-user-data.pdf"
  },
  {
   "v": "half",
   "k": "of known zero-days against Google products",
   "d": "Share Google attributes to commercial surveillance vendors, of which it actively tracks around 40",
   "by": "Google Threat Analysis Group, Buying Spying, 6 February 2024",
   "src": "https://blog.google/threat-analysis-group/commercial-surveillance-vendors-google-tag-report/"
  }
 ],
 "findings": [
  "Sanctions have reshaped the industry's corporate topology without cutting its output: Intellexa was added to the Entity List in July 2023 and designated by OFAC twice in 2024, yet Recorded Future identified Mozambique as a new Predator customer on 12 June 2025, Amnesty confirmed a Predator infection against a Pakistani human rights lawyer in summer 2025, and OFAC removed three of the sanctioned individuals from the SDN list on 30 December 2025.",
  "Criminal courts, not export controls, produced the first personal consequence for spyware executives: the Athens convictions of 26 February 2026 put four vendor-side defendants in the dock for misdemeanour breaches of communications confidentiality, while no Greek state official faced charges and the Greek government continued to deny buying or using Predator.",
  "The only documented case of an export-control action changing a vendor's behaviour cuts against the usual argument for listing: Sandvine exited 32 non-democratic markets, added human rights specialists and a Business Ethics Committee, and was delisted within eight months, which suggests listing works as a lever on firms with ordinary commercial futures and not on firms whose entire product is deniable.",
  "The Entity List now functions as a bargaining position rather than a finding of fact: NSO remained listed as of Rep. Summer Lee's 6 May 2026 letter to Commerce, having changed the nationality of its ownership in October 2025, installed a former US ambassador as executive chairman, and dropped from its 2025 transparency report the customer-termination figures it published in 2021, 2023 and 2024.",
  "Every published forensic count is a count of people who were checked, and checking is triggered by platform notifications and civil society referral, which makes Apple's figure of over 150 countries notified since 2021 a better proxy for the scale of mercenary spyware use than the low hundreds of individually confirmed infections in the laboratory literature."
 ],
 "sections": [
  {
   "n": "01",
   "kicker": "VENDOR LEDGER",
   "title": "Three of thirteen vendors have stopped shipping, and none of them stopped because of a sanction",
   "intro": "Thirteen companies appear here because their products have been documented in use against journalists, lawyers, activists or legislators, or because a government named them in an enforcement action. Each entry separates what has been forensically confirmed from what has been inferred from infrastructure, and records what the company said in its own defence. The three that are no longer shipping stopped for three different reasons, and none of them is an export control: FinFisher was raided by German police and went insolvent, QuaDream closed days after Citizen Lab and Microsoft published on its iOS zero-click, and Variston lost its staff after Google TAG mapped its exploit frameworks.",
   "paras": [
    "The listed firms tell a different story. NSO has been on the Entity List since November 2021 and is still selling; Candiru has been listed for the same period with no litigation against it anywhere in the public record; Intellexa was listed in 2023 and sanctioned twice in 2024 and had new customers identified in 2025. What listing has reliably produced is corporate rearrangement: a change of owner and chairman at NSO, a dispersal of Intellexa across six jurisdictions, and five successive company names at Candiru.",
    "Two vendors in this ledger sell tools that are not remote implants at all. Cellebrite extracts data from a phone the operator already physically holds, and First Wap queries the signalling network without touching the handset. Both show up in the same confirmed cases as the implant vendors, because the workflow documented in Serbia ran a Cellebrite unlock and a NoviSpy installation through the same police custody. Neither has been sanctioned, and Amnesty's argument after the First Wap leak is that SS7 location vendors sit outside export-control regimes entirely.",
    "The flags on these entries record whether any legal consequence has actually landed on the company or its executives, not whether allegations exist. On that test nine of the thirteen have faced nothing at all."
   ],
   "entries": [
    {
     "name": "NSO Group / Q Cyber Technologies",
     "meta": "Herzliya, Israel; US-controlled since October 2025",
     "flag": "fine",
     "fields": [
      [
       "Product",
       "Pegasus, a zero-click implant for iOS and Android. Circles, an SS7 location and interception product, sits inside the same group after a 2014 merger."
      ],
      [
       "Ownership",
       "Controlled by Novalpina Capital from 2019, then managed by Berkeley Research Group after Novalpina collapsed. On 10 October 2025 NSO confirmed an American investor group led by Hollywood producer Robert Simonds had invested tens of millions of dollars and acquired controlling ownership. Former US ambassador David Friedman became executive chairman; spokesman Oded Hershowitz said headquarters and core operations remain in Israel and Israeli-regulated; by early January 2026 all founders had departed."
      ],
      [
       "Confirmed deployments",
       "Citizen Lab counted over 100 abusive targeting cases in at least 20 countries on 29 October 2019. Amnesty confirmed infection or attempted infection in 37 cases for the Pegasus Project on 18 July 2021. Citizen Lab confirmed 51 infections among 63 Pegasus targets in CatalanGate on 18 April 2022. Amnesty documented Pegasus alongside domestically built NoviSpy in Serbia on 16 December 2024. Citizen Lab confirmed former MEP Stelios Kouloglou infected on 21 October 2022, 6 March 2023 and 7 March 2023, published 3 July 2026, and confirmed a Serbian student protest member infected between December 2025 and January 2026, published 2 September 2026."
      ],
      [
       "Sanctions",
       "US Entity List effective 4 November 2021 with a licence review policy of presumption of denial, on the ground that NSO and Candiru supplied spyware used to maliciously target government officials, journalists, businesspeople, activists, academics and embassy workers. Still listed as of a 6 May 2026 letter from Rep. Summer Lee to Commerce Secretary Lutnick."
      ],
      [
       "Litigation",
       "WhatsApp v. NSO, N.D. Cal. No. 4:19-cv-07123: summary judgment for WhatsApp on 20 December 2024 under the CFAA, California's CDAFA and breach of contract; jury award of $444,719 compensatory and $167,254,000 punitive on 6 May 2025; punitive damages cut to $4,000,000 and a permanent injunction entered on 17 October 2025. On appeal, Ninth Circuit No. 25-7380. Apple moved to dismiss its own 2021 suit on 13 September 2024. El Faro, Khashoggi and Thai activist matters dismissed or pending per Citizen Lab's litigation tracker."
      ]
     ],
     "note": "NSO denies wrongdoing and says it sells only to vetted state agencies; its 2025 transparency report dropped the customer-termination figures it had published previously, and in CatalanGate Citizen Lab did not conclusively attribute the operation while the Spanish prime minister's office said it was not aware of it.",
     "src": {
      "t": "NSO ordered to stop hacking WhatsApp, but damages cut to $4 million",
      "u": "https://www.securityweek.com/nso-ordered-to-stop-hacking-whatsapp-but-damages-cut-to-4-million/"
     }
    },
    {
     "name": "Intellexa Consortium / Cytrox",
     "meta": "Greece, Ireland, North Macedonia, Hungary and the British Virgin Islands; founded by Tal Dilian",
     "flag": "fine",
     "fields": [
      [
       "Product",
       "Predator for mobile devices, plus the Aladdin advertising-network infection vector and Nova and Jupiter branded components documented in the Intellexa Leaks."
      ],
      [
       "Structure",
       "A deliberately dispersed group rather than a single company. OFAC designations name Intellexa S.A. in Greece, Intellexa Limited and Thalestris Limited in Ireland, Cytrox AD in North Macedonia, Cytrox Holdings Zrt. in Hungary and Aliada Group Inc. in the British Virgin Islands. On 12 June 2025 Recorded Future linked live Predator infrastructure to FoxITech s.r.o. in Czechia, the first technical link between Predator infrastructure and an Intellexa-associated corporate entity."
      ],
      [
       "Confirmed deployments",
       "The Predator Files, published October 2023 by European Investigative Collaborations with Amnesty, found Intellexa Alliance products sold or found in at least 25 countries including Egypt, Libya, Madagascar, Saudi Arabia and Vietnam. Recorded Future identified the DRC and Angola on 5 September 2024 and Mozambique on 12 June 2025, with more than half of identified customers in Africa. The Intellexa Leaks published by Amnesty in December 2025 confirmed Predator use against a human rights lawyer in Pakistan in summer 2025, named Kazakhstan as an operator, showed at least ten active customer systems in one training video, and found evidence Intellexa retained TeamViewer remote access to customer systems."
      ],
      [
       "Alleged but unconfirmed",
       "Citizen Lab corroborated on 9 October 2023 that a Predator-linked account called REPLYSPY targeted US and EU officials and journalists through replies on X, including Senators Chris Murphy, Gary Peters and John Hoeven, Rep. Michael McCaul, Taiwan's President Tsai Ing-wen and Albania's justice minister. Citizen Lab assessed with high confidence that the links would have delivered Predator; no infection from that campaign was confirmed."
      ],
      [
       "Sanctions",
       "US Entity List on 18 July 2023 for trafficking in cyber exploits. OFAC designations on 5 March 2024 of Tal Jonathan Dilian and Sara Aleksandra Fayssal Hamou plus five entities, and on 16 September 2024 of Felix Bitzios, Andrea Gambazzi, Merom Harpaz, Panagiota Karaoli, Artemis Artemiou and Aliada Group Inc. On 30 December 2025 OFAC removed Harpaz, Gambazzi and Hamou, calling it part of the normal administrative process in response to a petition request for reconsideration and saying they had demonstrated measures to separate themselves from the consortium."
      ],
      [
       "Litigation",
       "Athens court verdict of 26 February 2026 convicting Dilian, Hamou, Bitzios and Yiannis Lavranos of misdemeanours of breaching the confidentiality of telephone communications and unlawfully accessing personal data and information systems. Reported cumulative sentences of 126 years and 8 months each, capped at 8 years under Greek misdemeanour rules, all suspended pending appeal. Koukakis v. Intellexa and Cytrox has proceeded in Greece since 2022 with trial opening in April 2025. Dilian was acquitted in the separate Cyprus spy van case in 2021."
      ]
     ],
     "note": "Dilian says he will appeal and called the verdict fundamentally irreconcilable with the evidentiary record; former Nexa executives said the alliance has ceased to exist and that relationships were in full compliance with applicable regulations or never occurred; the Greek government has consistently denied buying or using Predator, and no Greek state official was in the dock.",
     "src": {
      "t": "Greek court convicts Intellexa founder Tal Dilian, three others in wiretapping scandal",
      "u": "https://www.icij.org/investigations/cyprus-confidential/greek-court-convicts-intellexa-founder-tal-dilian-three-others-in-wiretapping-scandal/"
     }
    },
    {
     "name": "Candiru / Saito Tech Ltd",
     "meta": "Tel Aviv, Israel; renamed five times since 2014",
     "flag": "none",
     "fields": [
      [
       "Product",
       "Windows and mobile spyware, tracked by Microsoft as DevilsTongue."
      ],
      [
       "Renaming history",
       "Citizen Lab documented the sequence: Candiru Ltd. in 2014, DF Associates Ltd. in 2017, Grindavik Solutions Ltd. in 2018, Taveta Ltd. in 2019 and Saito Tech Ltd. in 2020."
      ],
      [
       "Confirmed deployments",
       "Citizen Lab and Microsoft MSTIC on 15 July 2021: Microsoft identified at least 100 victims in Palestine, Israel, Iran, Lebanon, Yemen, Spain, the United Kingdom, Turkey, Armenia and Singapore, delivered with two Windows privilege-escalation zero-days, CVE-2021-31979 and CVE-2021-33771, patched on 13 July 2021. Citizen Lab's CatalanGate report of 18 April 2022 found four Catalan targets hit with Candiru, of whom one infection was forensically confirmed."
      ],
      [
       "Alleged but unconfirmed",
       "Recorded Future on 5 August 2025 mapped eight distinct DevilsTongue infrastructure clusters, five assessed highly likely active, with suspected operators or customers in Hungary, Saudi Arabia, Indonesia through November 2024 and possibly Azerbaijan. This is infrastructure assessment, not per-victim forensics."
      ],
      [
       "Sanctions",
       "US Entity List effective 4 November 2021 with presumption of denial, in the same action as NSO Group. No public Treasury designation of Candiru."
      ],
      [
       "Litigation",
       "No concluded case against Candiru was identified in the public record reviewed."
      ]
     ],
     "note": "No response or denial from Candiru appears in the record reviewed, which is itself notable given that it is the only Entity Listed vendor here with no litigation history at all.",
     "src": {
      "t": "Hooking Candiru: another mercenary spyware vendor comes into focus",
      "u": "https://citizenlab.ca/2021/07/hooking-candiru-another-mercenary-spyware-vendor-comes-into-focus/"
     }
    },
    {
     "name": "Paragon Solutions",
     "meta": "Israel; owned by US private equity firm AE Industrial Partners since late 2024",
     "flag": "open",
     "fields": [
      [
       "Product",
       "Graphite. In late 2024 AE Industrial Partners acquired Paragon and merged it with REDLattice, a cybersecurity company under the same ownership."
      ],
      [
       "Confirmed deployments",
       "In late January 2025 WhatsApp and Meta notified roughly 90 users across more than 20 countries that they had been targeted. Italy's parliamentary intelligence committee COPASIR reported on 4 June 2025 that the Italian services AISI and AISE had purchased Graphite from Paragon beginning in 2023 and had targeted activists Luca Casarini and Giuseppe Caccia of Mediterranea Saving Humans and David Yambio of Refugees in Libya. Citizen Lab published the first forensic confirmation of Graphite on iOS on 12 June 2025: two journalists confirmed infected, Ciro Pellegrino of Fanpage.it and an unnamed prominent European journalist, both linked to a single operator through one iMessage account, via zero-click CVE-2025-43200 mitigated in iOS 18.3.1."
      ],
      [
       "Sanctions",
       "None. No Entity List addition and no Treasury designation."
      ],
      [
       "US procurement",
       "ICE contracted Paragon's US subsidiary on 27 September 2024 for $2m; a stop-work order followed on 8 October 2024 pending review against Executive Order 14093; ICE reactivated the contract on 30 August 2025; DHS said the contract was closed out on 20 January 2026 and stated on 22 May 2026 that ICE has no relationship with Paragon Solutions, Inc. or with the company that acquired them."
      ],
      [
       "Litigation",
       "Italian legal action announced by the FNSI and the Order of Journalists in 2025, recorded as ongoing in Citizen Lab's spyware litigation tracker."
      ]
     ],
     "note": "Paragon said on 9 June 2025 that it terminated its Italian contracts because the authorities refused a technical procedure that would have clarified the Cancellato case, an account Italy's DIS publicly rejected on 10 June 2025; COPASIR said the operations it examined were authorised and within legal limits and that journalist Francesco Cancellato was not among those targeted by the services; Paragon had not responded to Citizen Lab by publication.",
     "src": {
      "t": "First forensic confirmation of Paragon's iOS mercenary spyware finds journalists targeted",
      "u": "https://citizenlab.ca/research/first-forensic-confirmation-of-paragons-ios-mercenary-spyware-finds-journalists-targeted/"
     }
    },
    {
     "name": "Memento Labs (formerly Hacking Team)",
     "meta": "Milan, Italy; bought by Paolo Lezzi in 2019",
     "flag": "none",
     "fields": [
      [
       "Product",
       "Dante, the successor to Hacking Team's RCS, publicly presented at ISS World MEA in 2023."
      ],
      [
       "Ownership",
       "Paolo Lezzi acquired the defunct Hacking Team in 2019, reportedly for one euro, and rebranded it Memento Labs."
      ],
      [
       "Confirmed deployments",
       "Kaspersky GReAT published Operation ForumTroll on 27 October 2025: a Chrome sandbox escape, CVE-2025-2783, used against media outlets, universities, research centres, government bodies and financial institutions in Russia and Belarus. Kaspersky attributed the tooling to Memento Labs' Dante on shared code, persistence mechanisms and infrastructure."
      ],
      [
       "Sanctions",
       "None identified. No Entity List addition and no OFAC designation."
      ],
      [
       "Litigation",
       "None identified."
      ]
     ],
     "note": "CEO Paolo Lezzi told TechCrunch on 28 October 2025 that a government customer had been caught using an outdated component, saying clearly they used an agent that was already dead, and said Memento has fewer than 100 customers, down from more than 40 at Hacking Team's 2015 peak and only three when he bought it, figures he did not substantiate.",
     "src": {
      "t": "ForumTroll APT and the Hacking Team Dante spyware",
      "u": "https://securelist.com/forumtroll-apt-hacking-team-dante-spyware/117851/"
     }
    },
    {
     "name": "FinFisher / Gamma Group",
     "meta": "Munich, Germany; wound up after a March 2022 insolvency",
     "flag": "open",
     "fields": [
      [
       "Product",
       "FinSpy and FinFisher, historically linked to the Anglo-German Gamma Group."
      ],
      [
       "Documented deployments",
       "Long-running Citizen Lab reporting on FinFisher deployments. The German criminal case concerns export of the software to Turkey without a licence."
      ],
      [
       "Enforcement",
       "Criminal complaint by Reporters Without Borders, ECCHR, netzpolitik.org and GFF; investigation opened July 2019; October 2020 searches of FinFisher offices in Germany and Romania with seizure of accounts; insolvency declared March 2022; in May 2023 the Munich Public Prosecutor's Office filed charges against four managers of the FinFisher group for intentionally violating licensing requirements for dual-use goods."
      ],
      [
       "Sanctions",
       "None. The German case is a criminal export-control prosecution, not a listing."
      ],
      [
       "Litigation",
       "The May 2023 charges remain the live matter; no verdict was identified in the record reviewed."
      ]
     ],
     "note": "No verdict in the Munich case was identified in the record reviewed, and the group was wound up before the charges were filed, which limits what a conviction could now change.",
     "src": {
      "t": "Surveillance software from Germany used against opposition in Turkey",
      "u": "https://www.ecchr.eu/en/case/surveillance-software-germany-turkey-finfisher/"
     }
    },
    {
     "name": "Cellebrite DI Ltd",
     "meta": "Tysons Corner, Virginia and Petah Tikva, Israel; Nasdaq CLBT",
     "flag": "none",
     "fields": [
      [
       "Product",
       "UFED, UFED 4PC and Physical Analyzer, mobile forensic extraction rather than remote spyware. The company states that more than 7,000 agencies and enterprises use its products and that it supports more than 1.5 million legally sanctioned investigations annually."
      ],
      [
       "Confirmed deployments",
       "Amnesty's A Digital Prison, 16 December 2024, documented Serbian police using Cellebrite UFED to unlock the phones of journalist Slaviša Milanov and activist Nikola Ristić, followed by covert installation of NoviSpy. Amnesty documented a Cellebrite zero-day chain used against a Serbian student activist's device in February 2025. Citizen Lab reported on 25 June 2026 that Russian authorities used UFED Physical Analyzer and UFED 4PC to extract data from activist Andrey Pivovarov's iPhone 12 around 17 June 2021 while he was in custody, per official Russian forensic expert reports."
      ],
      [
       "Sanctions",
       "None. No Entity List addition and no OFAC designation."
      ],
      [
       "Corporate",
       "Acquisition of Corellium announced 5 June 2025 and completed 2 December 2025 at $170m enterprise value, comprising $150m cash, $20m converted to equity and up to $30m earnout."
      ],
      [
       "Litigation",
       "None identified arising from these findings."
      ]
     ],
     "note": "Cellebrite said on 25 February 2025 that after reviewing the December 2024 Amnesty report it found it appropriate to stop the use of our products by the relevant customers at this time, widely reported as suspending Serbia, and says any use of legacy Cellebrite hardware in Russia after March 2021 is entirely unauthorized.",
     "src": {
      "t": "Serbia: Cellebrite halts product use in Serbia following Amnesty surveillance report",
      "u": "https://securitylab.amnesty.org/latest/2025/02/serbia-cellebrite-halts-product-use-in-serbia-following-amnesty-surveillance-report/"
     }
    },
    {
     "name": "Cognyte Software",
     "meta": "Herzliya, Israel; Nasdaq CGNT, spun out of Verint Systems in February 2021",
     "flag": "none",
     "fields": [
      [
       "Product",
       "Lawful-interception and open-source or social-media intelligence platforms, not remote implant spyware."
      ],
      [
       "Documented deployments",
       "Reuters reported in January 2021 that Cognyte won a tender to supply intercept technology to Myanmar's state-owned telecoms operator roughly a month before the February 2021 military coup, with the purchase order issued by the end of December 2020. In December 2021 Meta removed around 100 accounts attributed to Cognyte and said its tools could be used to operate networks of fake accounts targeting journalists and politicians."
      ],
      [
       "Sanctions",
       "None. Norway's sovereign wealth fund excluded Cognyte from its portfolio in December 2022, citing risk of contributing to serious human rights violations."
      ],
      [
       "Litigation",
       "In January 2023 the lawyer Eitay Mack filed a complaint with Israel's attorney general on behalf of more than 60 Israeli citizens seeking a criminal investigation. No charges were identified."
      ]
     ],
     "note": "No response or denial from Cognyte to the Myanmar tender or the Meta takedown appears in the record reviewed, and no charges followed the 2023 complaint.",
     "src": {
      "t": "Israeli surveillance firm Cognyte's business in Myanmar exposed",
      "u": "https://www.justiceformyanmar.org/stories/israeli-surveillance-firm-cognytes-business-in-myanmar-exposed"
     }
    },
    {
     "name": "Circles (NSO Group)",
     "meta": "Israel; merged into NSO Group in 2014",
     "flag": "none",
     "fields": [
      [
       "Product",
       "SS7-based location tracking and interception, exploiting signalling-network weaknesses rather than the handset. Founded by Tal Dilian and merged with NSO under Francisco Partners ownership."
      ],
      [
       "Alleged deployments",
       "Citizen Lab's Running in Circles, 1 December 2020, used internet scanning to fingerprint Circles deployments and identified likely government customers in 25 countries, including Mexico, Australia, Belgium, Botswana, Chile, Denmark, Ecuador, El Salvador, Estonia, Equatorial Guinea, Guatemala, Honduras, Indonesia, Israel, Kenya, Malaysia, Morocco, Nigeria, Peru, Serbia, Thailand, the UAE, Vietnam, Zambia and Zimbabwe."
      ],
      [
       "Evidence type",
       "Infrastructure fingerprinting, not per-victim forensic confirmation. No individual Circles victim has been forensically confirmed in the published record."
      ],
      [
       "Sanctions",
       "Not separately listed; parent NSO Group was Entity Listed on 4 November 2021."
      ],
      [
       "Litigation",
       "None identified specific to Circles."
      ]
     ],
     "note": "The 25-country figure identifies probable customers from internet scanning and establishes neither a contract nor a single confirmed victim.",
     "src": {
      "t": "Running in Circles: uncovering the clients of cyberespionage firm Circles",
      "u": "https://citizenlab.ca/research/running-in-circles-uncovering-the-clients-of-cyberespionage-firm-circles/"
     }
    },
    {
     "name": "QuaDream",
     "meta": "Ramat Gan, Israel; reported shutting down in April 2023",
     "flag": "none",
     "fields": [
      [
       "Product",
       "REIGN, delivered by an iOS zero-click called ENDOFDAYS that exploited invisible iCloud calendar invites."
      ],
      [
       "Confirmed deployments",
       "Citizen Lab with Microsoft Threat Intelligence, April 2023: at least five civil society victims, comprising journalists, political opposition figures and an NGO worker, across North America, Central Asia, Southeast Asia, Europe and the Middle East."
      ],
      [
       "Alleged but unconfirmed",
       "Suspected operator locations included Bulgaria, Czechia, Hungary, Ghana, Israel, Mexico, Romania, Singapore, the UAE and Uzbekistan."
      ],
      [
       "Sanctions",
       "None identified before closure."
      ],
      [
       "Litigation",
       "None identified."
      ],
      [
       "Outcome",
       "Reported to be shutting down days after the joint Citizen Lab and Microsoft publication."
      ]
     ],
     "note": "The closure is reported rather than confirmed by the company, and no sanction, prosecution or civil case preceded it.",
     "src": {
      "t": "Israeli spyware vendor QuaDream to shut down",
      "u": "https://thehackernews.com/2023/04/israeli-spyware-vendor-quadream-to-shut.html"
     }
    },
    {
     "name": "Variston IT",
     "meta": "Barcelona, Spain; reported closing from February 2024",
     "flag": "none",
     "fields": [
      [
       "Product",
       "Exploitation frameworks. Google TAG documented the Heliconia frameworks for Chrome, Firefox and Windows Defender in November 2022."
      ],
      [
       "Documented activity",
       "Google TAG attributed multiple exploitation frameworks and zero-days to Variston, including work with partners on Android and iOS chains."
      ],
      [
       "Evidence type",
       "Exploit attribution. No named individual civil-society victim with forensic confirmation attributable specifically to Variston was published."
      ],
      [
       "Sanctions",
       "None identified."
      ],
      [
       "Litigation",
       "None identified."
      ],
      [
       "Outcome",
       "TechCrunch reported on 15 February 2024 that the company was losing staff and, per multiple sources, closing; subsequent filings reported a wind-down."
      ]
     ],
     "note": "Variston's place in this ledger rests on exploit attribution rather than on victim forensics, and its closure is reported rather than company-confirmed.",
     "src": {
      "t": "Spyware startup Variston is losing staff, some say it is closing",
      "u": "https://techcrunch.com/2024/02/15/variston-spyware-losing-staff-some-say-closing/"
     }
    },
    {
     "name": "First Wap",
     "meta": "Austrian-founded, operating from Jakarta, Indonesia",
     "flag": "none",
     "fields": [
      [
       "Product",
       "Altamides, SS7-based global phone location tracking, later extended to SMS interception and call monitoring. Founded by Josef Fuchs, a former Siemens engineer."
      ],
      [
       "Documented deployments",
       "Lighthouse Reports and partners published Surveillance Secrets on 14 October 2025, based on a leak of about 1.5 million records covering tracking of more than 14,000 unique phone numbers across more than 160 countries. Clients included governments and private corporate investigations firms, among them the British firm KCS Group. Targets identified in the data included journalists Gianluigi Nuzzi and Ali Nur Yasin, a former Qatari prime minister and business figures."
      ],
      [
       "Evidence type",
       "Company logs, not device forensics. A tracking query is not an infection, and the leak covers one company's records over an unstated period."
      ],
      [
       "Sanctions",
       "None. Amnesty used the investigation on 14 October 2025 to argue that SS7-based location vendors sit outside existing export-control regimes entirely."
      ],
      [
       "Litigation",
       "None identified."
      ]
     ],
     "note": "First Wap denied illegal activity or human rights violations and said it cannot control how customers use the system after installation.",
     "src": {
      "t": "Surveillance Secrets",
      "u": "https://www.lighthousereports.com/investigation/surveillance-secrets/"
     }
    },
    {
     "name": "Sandvine / AppLogic Networks",
     "meta": "Waterloo, Ontario, Canada; rebranded AppLogic Networks in 2025",
     "flag": "fine",
     "fields": [
      [
       "Product",
       "Deep packet inspection sold for network traffic management, documented as repurposed for censorship and, in Egypt, for spyware injection."
      ],
      [
       "Sanctions",
       "Added to the US Entity List on 27 February 2024 for supplying technology used to mass-monitor and censor networks."
      ],
      [
       "Reforms",
       "Exited 32 non-democratic markets with 24 more in transition, added human rights specialists and created a Business Ethics Committee."
      ],
      [
       "Delisting",
       "Removed from the Entity List on 21 October 2024. BIS framed the removal as showing that recognizing when a company has changed its behavior to protect national security and human rights is just as critical as restricting trade with parties of concern."
      ],
      [
       "Litigation",
       "None identified."
      ]
     ],
     "note": "This is the only vendor here whose delisting was granted on documented corporate reform, and the reform is evidenced by the company's own account as accepted by BIS rather than by independent audit.",
     "src": {
      "t": "Commerce removes Sandvine from Entity List following significant corporate reforms",
      "u": "https://www.bis.gov/press-release/commerce-removes-sandvine-entity-list-following-significant-corporate-reforms-protect-human-rights"
     }
    }
   ]
  },
  {
   "n": "02",
   "kicker": "CONFIRMED VERSUS ALLEGED",
   "title": "Seven years of laboratory work has confirmed a few hundred infections, and that is a floor, not an estimate",
   "intro": "Four organisations produce most of the forensic record in this field: Citizen Lab at the University of Toronto, Amnesty International's Security Lab, Microsoft Threat Intelligence and Google's threat teams, with Recorded Future's Insikt Group supplying infrastructure analysis. The distinction that matters throughout is between a device examined and found infected, an operator location inferred from scanning a vendor's servers, and a name appearing on a leaked target list. Only the first is a confirmed infection. The table below lists what each report actually established.",
   "paras": [
    "The largest single number in the field is not a forensic count at all. The Pegasus Project's leaked list of more than 50,000 phone numbers, published on 18 July 2021, is a target-selection artefact; Amnesty examined a subset of the phones and confirmed an infection or attempted infection in 85 percent of cases, which is 37 devices in total. Those two figures are routinely conflated. The same distinction applies to Citizen Lab's 25 countries for Circles, which comes from fingerprinting internet-facing infrastructure, and to Recorded Future's eight DevilsTongue clusters and its identification of Mozambique as a Predator customer, which come from mapping servers rather than examining phones.",
    "Alleged and unconfirmed is not the same as disproved. Citizen Lab assessed with high confidence that the REPLYSPY links aimed at US senators, a US representative, Taiwan's president and Albania's justice minister would have delivered Predator, and no infection from that campaign was ever confirmed. That is a real finding about a real campaign; it is simply not a victim count.",
    "Against the confirmed totals sit two cross-vendor figures. Google's Threat Analysis Group said on 6 February 2024 that it actively tracks around 40 commercial surveillance vendors and that those vendors are behind half of known zero-day exploits targeting Google products and Android ecosystem devices. Google Threat Intelligence Group's review on 29 April 2025 found 75 zero-days exploited in the wild in 2024, down from 98 in 2023 and up from 63 in 2022; only 34 could be attributed, and 8 of those, about 24 percent, went to commercial surveillance vendors, with those vendors plus government-backed groups accounting for more than half of attributed exploitation.",
    "Apple's threat notifications are not laboratory findings but they are the trigger for most of them. Apple says it has notified users in over 150 countries in total since 2021 and sends notifications multiple times a year; the round on 14 August 2026 reached users in 110 countries. Because forensic examination usually begins when a notified person contacts a lab or an NGO, the notification footprint is the upper bound of what could have been checked and the confirmed counts are a small fraction of it.",
    "The same categories of people recur in every confirmed case: journalists and newsroom staff, human rights lawyers, opposition politicians and sitting legislators including MEPs, activists in migration, environmental and pro-democracy movements, academics, NGO staff and family members of all of these. Countries with confirmed infections across the reports below include Spain, Italy, Greece, Serbia, Hungary, Poland, Russia, Egypt, Pakistan, Israel and Palestine, Iran, Lebanon, Yemen, the United Kingdom, Turkey, Armenia, Singapore and Mexico."
   ],
   "table": {
    "cols": [
     "Lab and report",
     "Date",
     "What was confirmed",
     "Evidence type"
    ],
    "rows": [
     [
      "Citizen Lab, NSO abuse cases",
      "29 Oct 2019",
      "Over 100 cases of abusive targeting of human rights defenders and journalists in at least 20 countries",
      "Device forensics"
     ],
     [
      "Citizen Lab and Microsoft MSTIC, Candiru DevilsTongue",
      "15 Jul 2021",
      "At least 100 victims across ten countries; two Windows zero-days patched 13 July 2021",
      "Victim identification by Microsoft plus exploit analysis"
     ],
     [
      "Amnesty Security Lab and Forbidden Stories, Pegasus Project",
      "18 Jul 2021",
      "37 phones showing infection or attempted infection, 85 percent of cases examined",
      "Device forensics on a subset of a leaked list of more than 50,000 numbers"
     ],
     [
      "Citizen Lab, CatalanGate",
      "18 Apr 2022",
      "51 confirmed Pegasus infections among 63 Pegasus targets; 1 confirmed Candiru infection among 4 targets; at least 2 people hit by both",
      "Device forensics; no conclusive attribution to an operator"
     ],
     [
      "Citizen Lab with Microsoft, QuaDream REIGN",
      "Apr 2023",
      "At least 5 civil society victims",
      "Device forensics plus the ENDOFDAYS iOS zero-click"
     ],
     [
      "Amnesty Security Lab, A Digital Prison, Serbia",
      "16 Dec 2024",
      "Named confirmed cases including journalist Slaviša Milanov and activist Nikola Ristić",
      "Device forensics on Cellebrite unlocking followed by NoviSpy installation"
     ],
     [
      "Citizen Lab, Paragon Graphite",
      "12 Jun 2025",
      "2 journalists confirmed infected, both traced to one operator",
      "First forensic confirmation of Graphite on iOS, CVE-2025-43200"
     ],
     [
      "Recorded Future Insikt Group, Predator",
      "12 Jun 2025",
      "Mozambique newly identified as a customer; over half of identified customers in Africa",
      "Infrastructure analysis, not victim forensics"
     ],
     [
      "Recorded Future Insikt Group, Candiru",
      "5 Aug 2025",
      "8 DevilsTongue infrastructure clusters, 5 assessed highly likely active",
      "Infrastructure analysis, not victim forensics"
     ],
     [
      "Amnesty Security Lab, Intellexa Leaks",
      "Dec 2025",
      "1 confirmed Predator infection of a Pakistani human rights lawyer; at least 10 active customer systems visible in one training video",
      "Leaked internal documents, sales material, training videos and system logs plus device forensics"
     ],
     [
      "Citizen Lab, Cellebrite in Russia",
      "25 Jun 2026",
      "1 confirmed extraction, activist Andrey Pivovarov's iPhone 12",
      "Official Russian forensic expert reports"
     ],
     [
      "Citizen Lab, Pegasus in the European Parliament",
      "3 Jul 2026",
      "1 confirmed case, former MEP Stelios Kouloglou, infected on three dates",
      "Device forensics"
     ],
     [
      "Citizen Lab with SHARE Foundation, Serbia",
      "2 Sep 2026",
      "1 confirmed Pegasus infection; at least 14 people received Apple threat notifications; a new NoviSpy variant on a second device",
      "Device forensics; iMessage zero-click patched in iOS 18.4.1"
     ]
    ]
   }
  },
  {
   "n": "03",
   "kicker": "LEGAL TIMELINE",
   "title": "Seven years of listings, inquiries and codes, and only three measures moved a vendor",
   "intro": "This is the chronological record of what states, courts and parliaments have actually done about commercial spyware since 2019, in order. Read end to end it is mostly instruments that bind nobody: a parliamentary inquiry whose recommendation produced no regulation, a visa policy whose application cannot be checked, a code of practice that is explicitly voluntary, and an executive order that governs federal purchasing and was set aside in one case without a published rule change.",
   "paras": [
    "Three measures in the whole record demonstrably changed a vendor's behaviour. The Entity List did it once, when Sandvine exited 32 non-democratic markets, restructured its governance and was delisted on 21 October 2024 explicitly on that basis. A court did it once, when Judge Hamilton entered the permanent injunction of 17 October 2025 ordering NSO to stop targeting WhatsApp and to give up its source code. The third is not law at all: Cellebrite suspended its implicated Serbian customers on 25 February 2025 and Paragon terminated its Italian contracts on 9 June 2025, both after forensic publication rather than after any legal compulsion.",
    "The direction of travel in 2025 and 2026 runs the other way from 2021 to 2024. OFAC removed three sanctioned Intellexa individuals on 30 December 2025; ICE reactivated its Paragon contract on 30 August 2025 without a published change to the executive order that had stopped it; punitive damages against NSO fell from $167,254,000 to $4,000,000; and the EU postponed its high-risk AI obligations by more than a year. The single countervailing event is the Athens verdict, and it came from a criminal court in a member state, not from an export authority."
   ],
   "entries": [
    {
     "name": "Germany opens the FinFisher investigation",
     "meta": "July 2019 to October 2020, Munich",
     "flag": "open",
     "fields": [
      [
       "Trigger",
       "Criminal complaint by Reporters Without Borders, ECCHR, netzpolitik.org and GFF over export of surveillance software to Turkey without a licence."
      ],
      [
       "Action",
       "Investigation opened July 2019; in October 2020 police searched FinFisher offices in Germany and Romania and seized accounts."
      ],
      [
       "Effect",
       "FinFisher declared insolvency in March 2022 and the group was wound up; the Munich Public Prosecutor's Office filed charges against four managers in May 2023."
      ]
     ],
     "note": "No verdict has been identified in the record reviewed.",
     "src": {
      "t": "Surveillance software from Germany used against opposition in Turkey",
      "u": "https://www.ecchr.eu/en/case/surveillance-software-germany-turkey-finfisher/"
     }
    },
    {
     "name": "WhatsApp sues NSO Group",
     "meta": "October 2019, Northern District of California",
     "flag": "open",
     "fields": [
      [
       "Case",
       "WhatsApp Inc. v. NSO Group, No. 4:19-cv-07123."
      ],
      [
       "Claims",
       "Computer Fraud and Abuse Act, California's Comprehensive Computer Data Access and Fraud Act, and breach of contract."
      ],
      [
       "Outcome",
       "Summary judgment for WhatsApp on all three on 20 December 2024, with trial limited to damages."
      ]
     ],
     "src": {
      "t": "Landmark summary judgment decision for Meta and WhatsApp",
      "u": "https://www.davispolk.com/experience/landmark-summary-judgment-decision-meta-and-whatsapp"
     }
    },
    {
     "name": "The US Entity List adds NSO Group and Candiru",
     "meta": "Effective 4 November 2021, Washington",
     "flag": "fine",
     "fields": [
      [
       "Instrument",
       "Entity List addition published in the Federal Register."
      ],
      [
       "Parties",
       "NSO Group and Candiru in Israel, Positive Technologies in Russia, and Computer Security Initiative Consultancy in Singapore."
      ],
      [
       "Ground",
       "Developing and supplying spyware to foreign governments that used it to maliciously target government officials, journalists, businesspeople, activists, academics and embassy workers."
      ],
      [
       "Licence policy",
       "Presumption of denial."
      ],
      [
       "Status",
       "NSO remained listed as of 6 May 2026."
      ]
     ],
     "src": {
      "t": "Addition of certain entities to the Entity List",
      "u": "https://www.federalregister.gov/documents/2021/11/04/2021-24123/addition-of-certain-entities-to-the-entity-list"
     }
    },
    {
     "name": "Apple sues NSO and then withdraws",
     "meta": "November 2021 to 13 September 2024, Northern District of California",
     "flag": "nothing",
     "fields": [
      [
       "Filed",
       "Apple Inc. v. NSO Group, N.D. Cal., November 2021."
      ],
      [
       "Withdrawn",
       "Apple moved to dismiss its own case on 13 September 2024, citing the risk of exposing vital security information and the proliferation of other vendors."
      ],
      [
       "Effect",
       "No ruling, and no precedent from the largest affected platform other than WhatsApp."
      ]
     ],
     "src": {
      "t": "Spyware litigation tracker",
      "u": "https://citizenlab.ca/spyware-litigation-tracker-legal-challenges-and-formal-complaints-related-to-mercenary-spyware/"
     }
    },
    {
     "name": "The European Parliament runs the PEGA inquiry and gets nothing binding",
     "meta": "10 March 2022 to 15 June 2023, Brussels",
     "flag": "nothing",
     "fields": [
      [
       "Mandate",
       "Committee of Inquiry into the use of Pegasus and equivalent surveillance spyware, established 10 March 2022."
      ],
      [
       "Findings",
       "Parliament found that Greek and, in particular, Polish and Hungarian legal frameworks and practices violated Union law, with further concerns about Spain and Cyprus."
      ],
      [
       "Recommendation",
       "Common EU standards and a regulation on commercial spyware, adopted 15 June 2023 after a 145-page report in March 2023."
      ],
      [
       "Outcome",
       "The committee terminated on 9 June 2023. No binding EU spyware regulation has followed."
      ]
     ],
     "src": {
      "t": "Pegasus in the Parliament: the EU must act now",
      "u": "https://securitylab.amnesty.org/latest/2026/07/joint-statement-pegasus-in-the-parliament-the-eu-must-act-now/"
     }
    },
    {
     "name": "Executive Order 14093 restricts US federal use, not sale",
     "meta": "Signed 27 March 2023, published 30 March 2023, Washington",
     "flag": "open",
     "fields": [
      [
       "Instrument",
       "Executive Order 14093, Prohibition on Use by the United States Government of Commercial Spyware That Poses Risks to National Security."
      ],
      [
       "Scope",
       "Restricts US federal operational use of commercial spyware. It does not restrict sale or export."
      ],
      [
       "Test case",
       "An ICE contract with Paragon was stopped on 8 October 2024 pending review against the order, then reactivated on 30 August 2025 without any published rule change."
      ],
      [
       "Status",
       "The operative status of the order under the current administration is not publicly documented."
      ]
     ],
     "src": {
      "t": "ICE reinstated spyware contract with Paragon",
      "u": "https://www.infosecurity-magazine.com/news/ice-reinstated-spyware-paragon/"
     }
    },
    {
     "name": "The Entity List adds the Intellexa entities",
     "meta": "18 July 2023, Washington",
     "flag": "fine",
     "fields": [
      [
       "Parties",
       "Intellexa S.A. in Greece, Cytrox Holdings Crt in Hungary, Intellexa Limited in Ireland and Cytrox AD in North Macedonia."
      ],
      [
       "Ground",
       "Trafficking in cyber exploits."
      ],
      [
       "Effect",
       "Recorded Future found on 5 September 2024 that Predator infrastructure had resurfaced after sanctions, with operators adding an extra delivery tier to obscure customers."
      ]
     ],
     "src": {
      "t": "Commerce adds four entities to the Entity List for trafficking in cyber exploits",
      "u": "https://www.bis.gov/press-release/commerce-adds-four-entities-entity-list-trafficking-cyber-exploits"
     }
    },
    {
     "name": "Poland opens a parliamentary commission of inquiry into Pegasus",
     "meta": "17 January 2024, Warsaw",
     "flag": "open",
     "fields": [
      [
       "Instrument",
       "Commission of inquiry established by the Sejm."
      ],
      [
       "Period covered",
       "16 November 2015 to 20 November 2023."
      ],
      [
       "Outcome",
       "No conclusion from the commission appears in the record reviewed."
      ]
     ],
     "src": {
      "t": "Spyware litigation tracker",
      "u": "https://citizenlab.ca/spyware-litigation-tracker-legal-challenges-and-formal-complaints-related-to-mercenary-spyware/"
     }
    },
    {
     "name": "The State Department adopts a visa restriction policy nobody can audit",
     "meta": "5 February 2024, Washington",
     "flag": "nothing",
     "fields": [
      [
       "Scope",
       "Visa restrictions for individuals believed to have misused commercial spyware against journalists, activists, dissidents and marginalised communities, and for those who facilitate or profit from such misuse."
      ],
      [
       "Transparency",
       "Names are not published, because visa records are confidential."
      ],
      [
       "Verifiability",
       "There is no public way to establish whether the policy has been applied to anyone."
      ]
     ],
     "src": {
      "t": "Spyware litigation tracker",
      "u": "https://citizenlab.ca/spyware-litigation-tracker-legal-challenges-and-formal-complaints-related-to-mercenary-spyware/"
     }
    },
    {
     "name": "Sandvine is listed, reforms, and is delisted in eight months",
     "meta": "27 February 2024 to 21 October 2024, Washington",
     "flag": "fine",
     "fields": [
      [
       "Listed",
       "Added to the Entity List on 27 February 2024 for supplying technology used to mass-monitor and censor networks."
      ],
      [
       "Reforms",
       "Exited 32 non-democratic markets with 24 more in transition, added human rights specialists and created a Business Ethics Committee."
      ],
      [
       "Delisted",
       "Removed on 21 October 2024, explicitly on the basis of those reforms."
      ],
      [
       "BIS framing",
       "Recognizing when a company has changed its behavior to protect national security and human rights is just as critical as restricting trade with parties of concern."
      ]
     ],
     "note": "This is the clearest case in the record of an export-control action changing a vendor's conduct, and the reform is evidenced by the company's own account as accepted by BIS.",
     "src": {
      "t": "Commerce removes Sandvine from Entity List following significant corporate reforms",
      "u": "https://www.bis.gov/press-release/commerce-removes-sandvine-entity-list-following-significant-corporate-reforms-protect-human-rights"
     }
    },
    {
     "name": "OFAC designates the Intellexa network",
     "meta": "5 March 2024 and 16 September 2024, Washington",
     "flag": "fine",
     "fields": [
      [
       "March action",
       "Tal Jonathan Dilian and Sara Aleksandra Fayssal Hamou, plus Cytrox AD, Cytrox Holdings Zrt., Intellexa Limited, Intellexa S.A. and Thalestris Limited."
      ],
      [
       "September action",
       "Felix Bitzios, Andrea Nicola Costantino Hermes Gambazzi, Merom Harpaz, Panagiota Karaoli, Artemis Artemiou and Aliada Group Inc."
      ],
      [
       "Authority",
       "Executive Orders 13694 and 13757, the cyber sanctions authority."
      ]
     ],
     "src": {
      "t": "OFAC recent actions, 5 March 2024",
      "u": "https://ofac.treasury.gov/recent-actions/20240305"
     }
    },
    {
     "name": "The EU AI Act enters into force",
     "meta": "1 August 2024, Brussels",
     "flag": "",
     "fields": [
      [
       "Milestones",
       "Article 5 prohibitions and AI literacy obligations became applicable on 2 February 2025; governance, notified-body and general-purpose AI model obligations on 2 August 2025."
      ],
      [
       "Scope",
       "It binds EU public authorities and the EU market."
      ],
      [
       "Scope limit",
       "It has no purchase on the export or the use of commercial spyware, which remains unregulated at EU level despite PEGA's 2023 recommendation."
      ]
     ],
     "src": {
      "t": "EU AI Act implementation timeline",
      "u": "https://artificialintelligenceact.eu/implementation-timeline/"
     }
    },
    {
     "name": "WhatsApp wins summary judgment against NSO",
     "meta": "20 December 2024, Northern District of California",
     "flag": "fine",
     "fields": [
      [
       "Ruling",
       "Judge Phyllis J. Hamilton found NSO liable under the CFAA, California's CDAFA and for breach of contract."
      ],
      [
       "Trial scope",
       "Limited to damages."
      ],
      [
       "Significance",
       "The first merits liability finding against a mercenary spyware vendor in a US court."
      ]
     ],
     "src": {
      "t": "Landmark summary judgment decision for Meta and WhatsApp",
      "u": "https://www.davispolk.com/experience/landmark-summary-judgment-decision-meta-and-whatsapp"
     }
    },
    {
     "name": "Cellebrite suspends the implicated Serbian customers",
     "meta": "25 February 2025, Petah Tikva and Tysons Corner",
     "flag": "nothing",
     "fields": [
      [
       "Trigger",
       "Amnesty's A Digital Prison report of 16 December 2024 documenting UFED unlocking of journalists' and activists' phones followed by NoviSpy installation."
      ],
      [
       "Action",
       "Cellebrite said it found it appropriate to stop the use of our products by the relevant customers at this time, widely reported as suspending Serbia."
      ],
      [
       "Instrument",
       "Commercial self-policing. No regulator, court or export authority required it."
      ]
     ],
     "src": {
      "t": "Serbia: Cellebrite halts product use in Serbia following Amnesty surveillance report",
      "u": "https://securitylab.amnesty.org/latest/2025/02/serbia-cellebrite-halts-product-use-in-serbia-following-amnesty-surveillance-report/"
     }
    },
    {
     "name": "The Pall Mall Process agrees a code that binds nobody",
     "meta": "3 to 4 April 2025, Paris",
     "flag": "nothing",
     "fields": [
      [
       "Instrument",
       "Code of Practice for States, led by France and the United Kingdom."
      ],
      [
       "Signatories",
       "21 initial state signatories."
      ],
      [
       "Binding force",
       "Explicitly voluntary and non-binding."
      ]
     ],
     "src": {
      "t": "Spyware litigation tracker",
      "u": "https://citizenlab.ca/spyware-litigation-tracker-legal-challenges-and-formal-complaints-related-to-mercenary-spyware/"
     }
    },
    {
     "name": "A jury awards $167m against NSO and a judge cuts it to $4m",
     "meta": "6 May 2025 and 17 October 2025, Northern District of California",
     "flag": "fine",
     "fields": [
      [
       "Verdict",
       "Jury award of $444,719 compensatory and $167,254,000 punitive on 6 May 2025."
      ],
      [
       "Reduction",
       "Judge Hamilton cut punitive damages to $4,000,000 on 17 October 2025."
      ],
      [
       "Injunction",
       "A permanent injunction bars NSO from hacking WhatsApp users, reverse engineering WhatsApp, creating WhatsApp accounts and possessing WhatsApp source code. It binds only in respect of WhatsApp, not Instagram or Facebook."
      ],
      [
       "Appeal",
       "Ninth Circuit No. 25-7380. Access Now and ten other organisations filed an amicus brief on 20 May 2026 urging the court to uphold the injunction; briefing is ongoing."
      ]
     ],
     "note": "There is no public evidence either way on compliance with the source-code destruction order.",
     "src": {
      "t": "NSO ordered to stop hacking WhatsApp, but damages cut to $4 million",
      "u": "https://www.securityweek.com/nso-ordered-to-stop-hacking-whatsapp-but-damages-cut-to-4-million/"
     }
    },
    {
     "name": "Italy's COPASIR confirms a state purchase of Graphite",
     "meta": "4 June 2025 to 10 June 2025, Rome",
     "flag": "open",
     "fields": [
      [
       "Finding",
       "The intelligence committee confirmed that AISI and AISE purchased Graphite from Paragon beginning in 2023 and targeted activists Luca Casarini, Giuseppe Caccia and David Yambio."
      ],
      [
       "Committee position",
       "All operations were authorised and within legal limits, and journalist Francesco Cancellato was not among those targeted by the services."
      ],
      [
       "Sequel",
       "Paragon said on 9 June 2025 that it had terminated its Italian contracts because the authorities refused a clarifying technical procedure; Italy's DIS publicly rejected that account on 10 June 2025."
      ]
     ],
     "note": "The committee's own finding and the vendor's account of why the relationship ended are in direct conflict, and both are in the public record.",
     "src": {
      "t": "Why the Paragon case will not go away",
      "u": "https://conflicts.digital/p/why-the-paragon-case-wont-go-away"
     }
    },
    {
     "name": "A DHS warrant compels OpenAI to identify a ChatGPT user",
     "meta": "October 2025, unsealed in Maine",
     "flag": "open",
     "fields": [
      [
       "Instrument",
       "Federal search warrant in a child sexual abuse investigation, seeking to identify a user from prompt history."
      ],
      [
       "Significance",
       "Described by Forbes and Gizmodo as the first publicly known federal search warrant for ChatGPT user data."
      ],
      [
       "Limit",
       "Neither report establishes what OpenAI produced in response."
      ]
     ],
     "src": {
      "t": "DHS asks OpenAI to unmask user behind ChatGPT prompts",
      "u": "https://gizmodo.com/dhs-asks-openai-to-unmask-user-behind-chatgpt-prompts-possibly-the-first-such-case-2000674472"
     }
    },
    {
     "name": "OFAC delists three Intellexa-linked individuals",
     "meta": "30 December 2025, Washington",
     "flag": "nothing",
     "fields": [
      [
       "Action",
       "Merom Harpaz, Andrea Gambazzi and Sara Hamou removed from the SDN list."
      ],
      [
       "Reason given",
       "Part of the normal administrative process in response to a petition request for reconsideration, on the basis that they had demonstrated measures to separate themselves from the Intellexa Consortium."
      ],
      [
       "Significance",
       "The first substantive US rollback of spyware sanctions."
      ]
     ],
     "note": "Hamou was convicted in Athens two months later, on 26 February 2026.",
     "src": {
      "t": "US Treasury lifts sanctions on three Intellexa-linked individuals",
      "u": "https://thehackernews.com/2025/12/us-treasury-lifts-sanctions-on-three.html"
     }
    },
    {
     "name": "An Athens court convicts four spyware executives",
     "meta": "26 February 2026, Athens",
     "flag": "fine",
     "fields": [
      [
       "Defendants",
       "Tal Dilian, Sara Hamou, Felix Bitzios and Yiannis Lavranos, owner of the Greek procurement firm."
      ],
      [
       "Offences",
       "Misdemeanours of breaching the confidentiality of telephone communications and unlawfully accessing personal data and information systems."
      ],
      [
       "Sentences",
       "Reported cumulative sentences of 126 years and 8 months each, which under Greek misdemeanour rules cap at 8 years served, all suspended pending appeal."
      ],
      [
       "Absent",
       "No Greek state official was in the dock."
      ],
      [
       "Significance",
       "The first criminal convictions of commercial spyware executives for the use of their product."
      ]
     ],
     "note": "Dilian said he would appeal and that the verdict was fundamentally irreconcilable with the evidentiary record, and the Greek government has consistently denied buying or using Predator.",
     "src": {
      "t": "Tal Dilian convicted in Greece over Predator spyware scandal",
      "u": "https://cyprus-mail.com/2026/02/27/tal-dilian-convicted-in-greece-over-predator-spyware-scandal"
     }
    },
    {
     "name": "The Digital Omnibus postpones the AI Act's high-risk deadlines",
     "meta": "6 to 13 May 2026, Brussels",
     "flag": "open",
     "fields": [
      [
       "Agreement",
       "Provisional political agreement on the EU Digital Omnibus on AI, confirmed by member state representatives."
      ],
      [
       "Delays",
       "Annex III high-risk obligations postponed to 2 December 2027 and Annex I to 2 August 2028."
      ],
      [
       "Addition",
       "A new Article 5 prohibition on generating non-consensual intimate imagery and child sexual abuse material, with a transitional period to 2 December 2026."
      ],
      [
       "Status",
       "A political agreement only. It was not adopted or published in the Official Journal as of the reporting reviewed, and takes legal effect only on publication."
      ]
     ],
     "src": {
      "t": "EU AI Act omnibus agreement: postponed high-risk deadlines and other key changes",
      "u": "https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/"
     }
    },
    {
     "name": "DHS says ICE has no relationship with Paragon",
     "meta": "22 May 2026, Washington",
     "flag": "nothing",
     "fields": [
      [
       "Statement",
       "ICE has no relationship with Paragon Solutions, Inc. or with the company that acquired them."
      ],
      [
       "Contract history",
       "Contracted 27 September 2024 for $2m, stop-work order 8 October 2024, reactivated 30 August 2025, closed out 20 January 2026."
      ],
      [
       "Unanswered",
       "DHS declined to say whether ICE reaches Paragon tooling through a third party or has switched to a different vendor."
      ]
     ],
     "note": "The statement is about a corporate relationship, not about capability, and DHS declined to clarify either point.",
     "src": {
      "t": "DHS says ICE has no relationship with spyware maker Paragon Solutions",
      "u": "https://www.wypr.org/2026-05-22/dhs-says-ice-has-no-relationship-with-spyware-maker-paragon-solutions"
     }
    }
   ]
  },
  {
   "n": "04",
   "kicker": "AI AND BIOMETRICS",
   "title": "The AI Act bans the systems Europe is not building and leaves the spyware trade untouched",
   "intro": "Article 5 of the EU AI Act has prohibited eight practices since 2 February 2025, including untargeted scraping to build facial recognition databases, predictive policing based solely on profiling, emotion recognition at work and in schools, and real-time remote biometric identification in public for law enforcement outside three narrow purposes. Those prohibitions bind EU public authorities and the EU market. They have no purchase on the export or the use of commercial spyware, which remains unregulated at EU level despite PEGA's 2023 recommendation, and they sit alongside an EU border system that records the facial image and fingerprints of every non-EU short-stay traveller.",
   "paras": [
    "Where facial recognition has actually been stopped, it has been stopped locally or by a data protection regulator rather than by AI law. San Francisco barred its own agencies in May 2019. The ICO fined Clearview AI in May 2022 and the Dutch DPA fined it again in September 2024, and the database, stated at more than 30 billion photos, still exists. Britain is moving the other way: the Home Office white paper of 26 January 2026 funds 40 live facial recognition vans and a National Centre for AI in Policing, with the regulatory framework and the public register of police AI systems promised rather than legislated.",
    "Predictive policing in the United States was retired by audit, not by rule. LAPD ended LASER in 2019 after its own inspector general found inconsistencies in how individuals were selected for and retained in the system, and subsequently discontinued PredPol; Chicago shelved the Strategic Subject List in January 2020 after a RAND analysis found it ineffective and the city's Office of Inspector General found it inferred risk from arrest records even where arrests produced no conviction. The EU prohibition at Article 5(1)(d) now covers the same practice prospectively, with a carve-out for systems that support a human assessment grounded in objective, verifiable facts directly linked to a criminal activity.",
    "At national scale the two documented systems are of different kinds and should not be equated. Xinjiang's Integrated Joint Operations Platform, reverse-engineered by Human Rights Watch with Cure53, collects religious and political affiliation alongside biometric, vehicle, phone, banking and family data and flags people for investigation, in a context where HRW cites credible estimates of up to one million people held in political education camps. The EU Entry/Exit System collects a facial image and fingerprints from non-EU short-stay travellers under published law and had registered over 45 million crossings during its phased rollout. The point of listing them together is that the second demonstrates how quickly a lawful population-scale biometric register can be stood up, not that the two serve the same purpose."
   ],
   "entries": [
    {
     "name": "San Francisco bans city facial recognition",
     "meta": "14 May 2019, San Francisco",
     "flag": "",
     "fields": [
      [
       "Measure",
       "The Board of Supervisors voted to bar city agencies, including the police, from using facial recognition."
      ],
      [
       "Significance",
       "The first such municipal ban in the United States."
      ],
      [
       "Scope",
       "City agencies only. It reaches neither state nor federal use, nor private deployment."
      ]
     ],
     "src": {
      "t": "San Francisco is first in nation to ban facial recognition software",
      "u": "https://venturebeat.com/2019/05/14/san-francisco-first-in-nation-to-ban-facial-recognition-software/"
     }
    },
    {
     "name": "China's IJOP turns a population into a flag list",
     "meta": "Reverse-engineered January 2018 to February 2019, published 1 May 2019, Xinjiang",
     "flag": "open",
     "fields": [
      [
       "Method",
       "Human Rights Watch reverse-engineered the Integrated Joint Operations Platform app with Cure53."
      ],
      [
       "Collected",
       "Physical characteristics, religious and political affiliation, vehicle and phone data, bank information and family relationships, with movement tracked through checkpoints."
      ],
      [
       "Use",
       "The system flags individuals for investigation."
      ],
      [
       "Context",
       "HRW cites credible estimates of up to one million people held in political education camps."
      ]
     ],
     "src": {
      "t": "China's Algorithms of Repression",
      "u": "https://www.hrw.org/report/2019/05/01/chinas-algorithms-repression/reverse-engineering-xinjiang-police-mass"
     }
    },
    {
     "name": "LAPD ends LASER and PredPol after its own inspector general",
     "meta": "2019, Los Angeles",
     "flag": "nothing",
     "fields": [
      [
       "Audit finding",
       "The department's inspector general found significant problems, including inconsistencies in how individuals were selected for and retained in the system."
      ],
      [
       "Action",
       "LASER was ended and the PredPol deployment was subsequently discontinued."
      ],
      [
       "Driver",
       "An internal audit. No statute, regulator or lawsuit compelled it."
      ]
     ],
     "src": {
      "t": "Predictive policing explained",
      "u": "https://www.brennancenter.org/our-work/research-reports/predictive-policing-explained"
     }
    },
    {
     "name": "Chicago shelves the Strategic Subject List",
     "meta": "January 2020, Chicago",
     "flag": "nothing",
     "fields": [
      [
       "Evidence",
       "A RAND analysis found the list ineffective."
      ],
      [
       "Oversight finding",
       "The city's Office of Inspector General found it over-relied on arrest records to infer risk, even where arrests led to no conviction."
      ],
      [
       "Action",
       "The list was shelved."
      ]
     ],
     "src": {
      "t": "Predictive policing explained",
      "u": "https://www.brennancenter.org/our-work/research-reports/predictive-policing-explained"
     }
    },
    {
     "name": "Clearview AI is fined twice and keeps the database",
     "meta": "26 May 2022, London; September 2024, The Hague",
     "flag": "fine",
     "fields": [
      [
       "United Kingdom",
       "The ICO issued a monetary penalty notice of GBP 7.5m and ordered deletion of UK residents' data."
      ],
      [
       "Netherlands",
       "The Dutch Data Protection Authority fined Clearview EUR 30.5m, with penalty payments up to EUR 5.1m for continued non-compliance."
      ],
      [
       "Database",
       "Stated at more than 30 billion photos, built by scraping without consent."
      ],
      [
       "Posture",
       "The Dutch DPA said Clearview did not stop the violations after the investigation, did not object and therefore cannot appeal, and said it would investigate whether directors could be held personally liable."
      ],
      [
       "Article 5(1)(e) overlap",
       "Building facial recognition databases through untargeted scraping of facial images from the internet or CCTV has been prohibited in the EU since 2 February 2025."
      ]
     ],
     "note": "The appellate history of the UK penalty could not be confirmed against a primary source in this pass, and secondary reporting places an Upper Tribunal ruling in the ICO's favour in October 2025.",
     "src": {
      "t": "Dutch DPA imposes a fine on Clearview because of illegal data collection for facial recognition",
      "u": "https://www.autoriteitpersoonsgegevens.nl/en/current/dutch-dpa-imposes-a-fine-on-clearview-because-of-illegal-data-collection-for-facial-recognition"
     }
    },
    {
     "name": "The AI Act's Article 5 bans eight practices",
     "meta": "Applicable from 2 February 2025, European Union",
     "flag": "",
     "fields": [
      [
       "Applicable from",
       "2 February 2025. The Act itself entered into force on 1 August 2024."
      ],
      [
       "Manipulation and exploitation",
       "5(1)(a) subliminal or manipulative techniques that materially distort behaviour and cause significant harm; 5(1)(b) exploitation of vulnerabilities based on age, disability or socioeconomic status."
      ],
      [
       "Scoring and prediction",
       "5(1)(c) social scoring producing detrimental treatment in unrelated contexts or disproportionate to the behaviour; 5(1)(d) assessing the risk of a person committing a criminal offence based solely on profiling or personality traits, with a carve-out for systems supporting a human assessment grounded in objective, verifiable facts directly linked to a criminal activity."
      ],
      [
       "Biometric database building",
       "5(1)(e) building facial recognition databases through untargeted scraping of facial images from the internet or CCTV; 5(1)(g) biometric categorisation inferring race, political opinions, trade union membership, religious beliefs, sex life or sexual orientation, with an exception for lawful labelling of datasets in law enforcement."
      ],
      [
       "Emotion recognition",
       "5(1)(f) emotion recognition in workplaces and educational institutions, except for medical or safety reasons."
      ],
      [
       "Live biometric identification",
       "5(1)(h) real-time remote biometric identification in publicly accessible spaces for law enforcement is prohibited unless strictly necessary for searching for victims of trafficking, abduction or missing persons; preventing a specific, substantial and imminent threat to life or safety or a genuine and present terrorist threat; or locating a suspect in an offence punishable by at least four years' custody under Annex II."
      ],
      [
       "Conditions on that exception",
       "Prior judicial or independent administrative authorisation, with up to 24 hours of emergency use before authorisation, a fundamental rights impact assessment, registration in the EU database, and no adverse legal decision resting solely on the system's output."
      ]
     ],
     "note": "Two further prohibitions covering the generation of non-consensual intimate imagery and child sexual abuse material were added by the May 2026 Digital Omnibus agreement with a transitional period to 2 December 2026, and that agreement had not been published in the Official Journal as of the reporting reviewed.",
     "src": {
      "t": "EU AI Act, Article 5",
      "u": "https://artificialintelligenceact.eu/article/5/"
     }
    },
    {
     "name": "The EU builds its own biometric border database",
     "meta": "12 October 2025 to 10 April 2026, 29 European countries",
     "flag": "",
     "fields": [
      [
       "System",
       "The Entry/Exit System, replacing passport stamping for non-EU short-stay travellers."
      ],
      [
       "Data recorded",
       "Travellers' facial image, fingerprints and personal data from the travel document."
      ],
      [
       "Scale",
       "The Commission reported over 45 million border crossings registered during the phased rollout."
      ],
      [
       "Status",
       "Progressive rollout began 12 October 2025; the Commission confirmed on 30 March 2026 that the system became fully operational on 10 April 2026."
      ]
     ],
     "note": "This is lawful biometric collection at population scale built by the same institution whose AI Act prohibits untargeted facial database building by others.",
     "src": {
      "t": "Entry/Exit System will become fully operational on 10 April 2026",
      "u": "https://home-affairs.ec.europa.eu/news/entryexit-system-will-become-fully-operational-10-april-2026-2026-03-30_en"
     }
    },
    {
     "name": "Britain funds 40 facial recognition vans before writing the rules",
     "meta": "26 January 2026, London",
     "flag": "open",
     "fields": [
      [
       "Instrument",
       "Home Office white paper, From Local to National: A New Model for Policing."
      ],
      [
       "Funding",
       "40 new live facial recognition vans for town centres in England and Wales, and GBP 115m over three years for a National Centre for AI in Policing, known as Police.AI."
      ],
      [
       "Promised",
       "A regulatory framework and a public register of police AI systems, neither yet legislated."
      ],
      [
       "Sequence",
       "Deployment is running ahead of the statutory basis."
      ]
     ],
     "src": {
      "t": "UK announces largest ever facial recognition rollout as part of policing reforms",
      "u": "https://www.biometricupdate.com/202601/uk-announces-largest-ever-facial-recognition-rollout-as-part-of-policing-reforms"
     }
    }
   ]
  },
  {
   "n": "05",
   "kicker": "MODEL PROVIDERS",
   "title": "Requests to OpenAI grew eightfold in eighteen months and the most sensitive category is reportable only in bands",
   "intro": "Two AI model providers publish request counts. OpenAI received 37 US government requests for user data in the first half of 2024, 146 in the first half of 2025 and 309 in the second half of 2025, with 209 of that last batch producing disclosure across 392 accounts. Anthropic's numbers are far smaller: one non-content request in the second half of 2024 with no data provided, and 22 requests plus 7 preservation requests in the second half of 2025. Both report national security process only in bands, which means the category most likely to matter is unknowable from the reports by construction.",
   "paras": [
    "The band rule is the structural point. OpenAI reports FISA orders and National Security Letters in the permitted range of 0 to 249 requests affecting 0 to 249 accounts, and has reported that same band in every period. Anthropic reports calendar 2024 as 0 to 99 National Security Letters, orders and directives targeting 0 to 99 accounts. A reader cannot distinguish zero from the ceiling in either case, and the reporting rules, not the companies, set that floor.",
    "Neither provider breaks out requests from governments outside the United States, so the entire non-US picture is missing from both series. There is no comparable public reporting broken out for AI assistant products from Google, Meta, Microsoft or xAI, which means there is nothing to compare the OpenAI trajectory against.",
    "The one documented compulsion event in the record is the DHS search warrant unsealed in Maine in October 2025, which sought to identify a ChatGPT user from prompt history in a child exploitation investigation. Forbes and Gizmodo describe it as the first publicly known federal search warrant for ChatGPT user data. What OpenAI produced in response is not established by either report."
   ],
   "entries": [
    {
     "name": "OpenAI",
     "meta": "Reporting periods from January 2024 to December 2025, United States",
     "flag": "produced",
     "fields": [
      [
       "Scope of the report",
       "US government requests for user data, excluding national security process."
      ],
      [
       "Trend",
       "37 requests in the first half of 2024, 146 in the first half of 2025 and 309 in the second half of 2025."
      ],
      [
       "Disclosure",
       "24 of 37 requests produced disclosure in the first period, 105 of 146 in the second and 209 of 309 in the third, affecting 60, 190 and 392 accounts respectively."
      ],
      [
       "Emergency requests",
       "0 in the first half of 2024, 1 in the first half of 2025 and 10 in the second half of 2025."
      ],
      [
       "National security process",
       "FISA orders and National Security Letters are reported separately, in the permitted band of 0 to 249 requests affecting 0 to 249 accounts, in every period."
      ],
      [
       "Not broken out",
       "Requests from governments outside the United States."
      ]
     ],
     "note": "Band reporting means the figure for the most sensitive category is unknowable from the report by design, not by omission.",
     "src": {
      "t": "OpenAI government requests for user data, July to December 2025",
      "u": "https://cdn.openai.com/trust-and-transparency/report-2025h2-government-requests-for-user-data.pdf"
     }
    },
    {
     "name": "Anthropic",
     "meta": "Reporting periods July to December 2024 and July to December 2025, United States",
     "flag": "produced",
     "fields": [
      [
       "Scope of the report",
       "Government requests for user data."
      ],
      [
       "July to December 2024",
       "1 non-content request covering 1 account, with no data provided; no content requests and no emergency requests."
      ],
      [
       "July to December 2025",
       "2 content requests covering 8 accounts, with data provided in 2; 20 non-content requests covering 55 accounts, with data provided in 7; no emergency requests; 7 preservation requests covering 29 accounts."
      ],
      [
       "National security process",
       "Calendar 2024 reported as 0 to 99 National Security Letters, orders and directives, targeting 0 to 99 accounts."
      ],
      [
       "Not broken out",
       "Requests from governments outside the United States."
      ]
     ],
     "note": "The absolute numbers are two orders of magnitude below OpenAI's, which may reflect product scale rather than a difference in government appetite; nothing in either report settles that.",
     "src": {
      "t": "Anthropic transparency report on government requests",
      "u": "https://www-cdn.anthropic.com/5d453bc3285b8e0c101b7193b5765419920cee24.pdf"
     }
    },
    {
     "name": "DHS search warrant to OpenAI",
     "meta": "October 2025, unsealed in Maine",
     "flag": "open",
     "fields": [
      [
       "Instrument",
       "A federal search warrant compelling OpenAI to disclose the identity of a ChatGPT user based on prompt history."
      ],
      [
       "Investigation",
       "A DHS unit investigating child sexual abuse."
      ],
      [
       "Significance",
       "Described by Forbes and Gizmodo as the first publicly known federal search warrant for ChatGPT user data."
      ],
      [
       "Limit",
       "Neither report establishes what OpenAI produced in response."
      ]
     ],
     "note": "The warrant establishes that prompt history is treated as identifying material by at least one federal investigator; it does not establish what was handed over.",
     "src": {
      "t": "DHS asks OpenAI to unmask user behind ChatGPT prompts",
      "u": "https://gizmodo.com/dhs-asks-openai-to-unmask-user-behind-chatgpt-prompts-possibly-the-first-such-case-2000674472"
     }
    },
    {
     "name": "Google, Meta, Microsoft and xAI",
     "meta": "Position as of September 2026",
     "flag": "nothing",
     "fields": [
      [
       "Reporting",
       "No public transparency reporting broken out for their AI assistant products specifically was identified."
      ],
      [
       "Effect",
       "Only two series in this market are visible, and they are the two smallest disclosures by company size."
      ],
      [
       "Consequence",
       "The eightfold growth in requests visible in OpenAI's numbers over eighteen months cannot be checked against the rest of the market."
      ]
     ],
     "note": "The absence is of product-level breakout, not necessarily of any reporting at all; these companies publish general transparency reports that do not separate AI assistant products.",
     "src": {
      "t": "OpenAI government requests for user data, January to June 2024",
      "u": "https://cdn.openai.com/trust-and-transparency/report-2024h1-government-requests-for-user-data.pdf"
     }
    }
   ],
   "table": {
    "cols": [
     "Provider and period",
     "Requests received",
     "Breakdown",
     "Disclosure",
     "Accounts affected"
    ],
    "rows": [
     [
      "OpenAI, January to June 2024",
      "37",
      "29 non-content, 8 content, 0 emergency",
      "24 produced disclosure",
      "60"
     ],
     [
      "OpenAI, January to June 2025",
      "146",
      "119 non-content, 26 content, 1 emergency",
      "105 produced disclosure",
      "190"
     ],
     [
      "OpenAI, July to December 2025",
      "309",
      "224 non-content, 75 content, 10 emergency",
      "209 produced disclosure",
      "392"
     ],
     [
      "OpenAI, national security process, all periods",
      "0 to 249 band",
      "FISA orders and National Security Letters",
      "Not stated",
      "0 to 249 band"
     ],
     [
      "Anthropic, July to December 2024",
      "1",
      "1 non-content, 0 content, 0 emergency",
      "No data provided",
      "1"
     ],
     [
      "Anthropic, July to December 2025",
      "22, plus 7 preservation requests",
      "20 non-content, 2 content, 0 emergency",
      "Data provided in 2 of 2 content and 7 of 20 non-content",
      "8 content, 55 non-content, 29 preservation"
     ],
     [
      "Anthropic, national security process, calendar 2024",
      "0 to 99 band",
      "National Security Letters, orders and directives",
      "Not stated",
      "0 to 99 band"
     ]
    ]
   }
  }
 ],
 "gaps": [
  "Every forensic count in this report is a count of devices that a lab obtained, was permitted to examine, and could still recover evidence from. Selection is driven by Apple and WhatsApp threat notifications and by civil society referral networks, so the denominator is unknown and skewed toward people with lawyers, NGOs and iPhones; Android forensics is materially weaker than iOS, so Android-heavy deployments are systematically under-counted, and traces can be unrecoverable once a device is wiped or replaced. A figure such as 51 confirmed Pegasus infections in Catalonia is a floor for one investigation, not an estimate of infections.",
  "Total market size, revenue and the number of active vendors cannot be established. Google TAG says it tracks around 40 commercial surveillance vendors; there is no verified full list, no revenue figures and no customer counts. Memento Labs' chief executive said fewer than 100 customers without disclosing a number, and NSO's 2025 transparency report omitted the customer-termination figures it had previously published. None of these is auditable.",
  "In most cases it is not established which governments are customers of which vendor. Infrastructure fingerprinting, such as Citizen Lab's 25 countries for Circles or Insikt's eight DevilsTongue clusters, establishes probable operator locations rather than contracts, and several Intellexa customer codenames in the December 2025 leak, including Dragon, Falcon, Flamingo, Fox, Lion, Phoenix and Rhino, remain unmatched to countries.",
  "Whether US government agencies currently use commercial spyware is unresolved. DHS's statement of 22 May 2026 that ICE has no relationship with Paragon Solutions or its acquirer does not say whether ICE reaches Paragon tooling through a third party or has a different vendor, and DHS declined to clarify. The operative status of Executive Order 14093 under the current administration is not publicly documented, and the ICE contract was reactivated on 30 August 2025 without any published rule change.",
  "Three legal outcomes in this report are unsettled in the available reporting. The appellate history of the ICO's GBP 7.5m Clearview penalty could not be confirmed against a primary source, with secondary reporting placing an Upper Tribunal ruling in the ICO's favour in October 2025. The operative sentence in the Athens Predator convictions is reported variously as 126 years and 8 months, as 8 years under the misdemeanour cap, and simply as eight years, with all reports agreeing the sentences are suspended pending appeal. There is no public evidence either way on compliance with the WhatsApp source-code destruction order, which is under appeal at the Ninth Circuit with briefing ongoing as of May 2026.",
  "Government demands on AI providers outside the United States are invisible. Neither OpenAI nor Anthropic breaks out non-US government requests, national security process is reportable only in bands of 0 to 249 or 0 to 99, and there is no comparable public reporting from Google, Meta, Microsoft or xAI broken out for their AI assistant products specifically.",
  "Victim totals for SS7-based tracking vendors cannot be derived from the First Wap leak. The records cover more than 14,000 unique phone numbers across more than 160 countries, but a tracking query is not an infection, the leak covers one company's logs over an unstated period, and First Wap denies illegality and says it cannot control post-sale use.",
  "The Digital Omnibus amendments to the EU AI Act may not be law. As of the reporting reviewed, the May 2026 political agreement had not been formally adopted or published in the Official Journal, and the source states explicitly that the changes take legal effect only on publication. Dates given here for the postponed high-risk obligations and the new Article 5 prohibitions are therefore provisional."
 ],
 "method": "This tracker was assembled from primary documents where they exist: Federal Register and BIS notices, OFAC designation and delisting actions, court filings and judgments, parliamentary committee reports, regulator penalty notices, and the published transparency reports of AI model providers. Forensic claims are taken from the laboratories that made them, with each entry marked for whether the evidence is device forensics, infrastructure analysis, leaked internal records or exploit attribution, because those are not interchangeable. Company statements are attributed to the company and every vendor denial in the record is carried into the relevant entry note rather than summarised away. Nothing here was tested by the Institute. What would change it is new forensic publication, a merits ruling in the Ninth Circuit appeal or the Greek appeal, formal adoption of the Digital Omnibus, or transparency reporting from AI providers that breaks out non-US requests; each of those would be added to the relevant section as it lands.",
 "sources": [
  {
   "t": "Addition of certain entities to the Entity List, Federal Register",
   "u": "https://www.federalregister.gov/documents/2021/11/04/2021-24123/addition-of-certain-entities-to-the-entity-list"
  },
  {
   "t": "Spyware maker NSO Group confirms acquisition by US investors",
   "u": "https://techcrunch.com/2025/10/10/spyware-maker-nso-group-confirms-acquisition-by-us-investors/"
  },
  {
   "t": "Landmark summary judgment decision for Meta and WhatsApp",
   "u": "https://www.davispolk.com/experience/landmark-summary-judgment-decision-meta-and-whatsapp"
  },
  {
   "t": "NSO ordered to stop hacking WhatsApp, but damages cut to $4 million",
   "u": "https://www.securityweek.com/nso-ordered-to-stop-hacking-whatsapp-but-damages-cut-to-4-million/"
  },
  {
   "t": "NSO Q Cyber Technologies: 100 new abuse cases",
   "u": "https://citizenlab.ca/research/nso-q-cyber-technologies-100-new-abuse-cases/"
  },
  {
   "t": "CatalanGate: extensive mercenary spyware operation against Catalans using Pegasus and Candiru",
   "u": "https://citizenlab.ca/research/catalangate-extensive-mercenary-spyware-operation-against-catalans-using-pegasus-candiru/"
  },
  {
   "t": "Pegasus spyware infection of a Serbian activist",
   "u": "https://citizenlab.ca/research/pegasus-spyware-infection-of-serbian-activist/"
  },
  {
   "t": "Pegasus in the Parliament: the EU must act now",
   "u": "https://securitylab.amnesty.org/latest/2026/07/joint-statement-pegasus-in-the-parliament-the-eu-must-act-now/"
  },
  {
   "t": "About the Pegasus Project",
   "u": "https://forbiddenstories.org/about-the-pegasus-project/"
  },
  {
   "t": "Critics pan spyware maker NSO's transparency claims amid its push to enter the US market",
   "u": "https://techcrunch.com/2026/01/08/critics-pan-spyware-maker-nsos-transparency-claims-amid-its-push-to-enter-us-market/"
  },
  {
   "t": "Rep. Summer Lee letter to Commerce on NSO Group, 6 May 2026",
   "u": "https://summerlee.house.gov/sites/evo-subsites/summerlee.house.gov/files/evo-media-document/2026-05-06.lee-letter-to-commerce-re-nso-group.pdf"
  },
  {
   "t": "Commerce adds four entities to the Entity List for trafficking in cyber exploits",
   "u": "https://www.bis.gov/press-release/commerce-adds-four-entities-entity-list-trafficking-cyber-exploits"
  },
  {
   "t": "OFAC recent actions, 5 March 2024",
   "u": "https://ofac.treasury.gov/recent-actions/20240305"
  },
  {
   "t": "OFAC recent actions, 16 September 2024",
   "u": "https://ofac.treasury.gov/recent-actions/20240916"
  },
  {
   "t": "Treasury press release on Intellexa Consortium designations",
   "u": "https://home.treasury.gov/news/press-releases/jy2581"
  },
  {
   "t": "US Treasury lifts sanctions on three Intellexa-linked individuals",
   "u": "https://thehackernews.com/2025/12/us-treasury-lifts-sanctions-on-three.html"
  },
  {
   "t": "Case study: the Predator Files",
   "u": "https://securitylab.amnesty.org/case-study-the-predator-files/"
  },
  {
   "t": "Intellexa Leaks: Predator spyware operations exposed",
   "u": "https://securitylab.amnesty.org/latest/2025/12/intellexa-leaks-predator-spyware-operations-exposed/"
  },
  {
   "t": "Predator spyware targets US and EU lawmakers and journalists",
   "u": "https://citizenlab.ca/research/predator-spyware-targets-us-eu-lawmakers-journalists/"
  },
  {
   "t": "Predator still active: new links identified",
   "u": "https://www.recordedfuture.com/research/predator-still-active-new-links-identified"
  },
  {
   "t": "Predator spyware infrastructure returns following exposure and sanctions",
   "u": "https://www.recordedfuture.com/research/predator-spyware-infrastructure-returns-following-exposure-sanctions"
  },
  {
   "t": "Greek court convicts Intellexa founder Tal Dilian, three others in wiretapping scandal",
   "u": "https://www.icij.org/investigations/cyprus-confidential/greek-court-convicts-intellexa-founder-tal-dilian-three-others-in-wiretapping-scandal/"
  },
  {
   "t": "Tal Dilian convicted in Greece over Predator spyware scandal",
   "u": "https://cyprus-mail.com/2026/02/27/tal-dilian-convicted-in-greece-over-predator-spyware-scandal"
  },
  {
   "t": "Hooking Candiru: another mercenary spyware vendor comes into focus",
   "u": "https://citizenlab.ca/2021/07/hooking-candiru-another-mercenary-spyware-vendor-comes-into-focus/"
  },
  {
   "t": "Tracking Candiru's DevilsTongue spyware",
   "u": "https://www.recordedfuture.com/research/tracking-candirus-devilstongue-spyware"
  },
  {
   "t": "First forensic confirmation of Paragon's iOS mercenary spyware finds journalists targeted",
   "u": "https://citizenlab.ca/research/first-forensic-confirmation-of-paragons-ios-mercenary-spyware-finds-journalists-targeted/"
  },
  {
   "t": "Why the Paragon case will not go away",
   "u": "https://conflicts.digital/p/why-the-paragon-case-wont-go-away"
  },
  {
   "t": "ICE reinstated spyware contract with Paragon",
   "u": "https://www.infosecurity-magazine.com/news/ice-reinstated-spyware-paragon/"
  },
  {
   "t": "DHS says ICE has no relationship with spyware maker Paragon Solutions",
   "u": "https://www.wypr.org/2026-05-22/dhs-says-ice-has-no-relationship-with-spyware-maker-paragon-solutions"
  },
  {
   "t": "Citizen Lab spyware litigation tracker",
   "u": "https://citizenlab.ca/spyware-litigation-tracker-legal-challenges-and-formal-complaints-related-to-mercenary-spyware/"
  },
  {
   "t": "ForumTroll APT and the Hacking Team Dante spyware",
   "u": "https://securelist.com/forumtroll-apt-hacking-team-dante-spyware/117851/"
  },
  {
   "t": "CEO of spyware maker Memento Labs confirms one of its government customers was caught using its malware",
   "u": "https://techcrunch.com/2025/10/28/ceo-of-spyware-maker-memento-labs-confirms-one-of-its-government-customers-was-caught-using-its-malware/"
  },
  {
   "t": "Surveillance software from Germany used against opposition in Turkey",
   "u": "https://www.ecchr.eu/en/case/surveillance-software-germany-turkey-finfisher/"
  },
  {
   "t": "Surveillance software firm FinFisher declares insolvency",
   "u": "https://therecord.media/surveillance-software-firm-finfisher-declares-insolvency"
  },
  {
   "t": "Serbia: Cellebrite halts product use in Serbia following Amnesty surveillance report",
   "u": "https://securitylab.amnesty.org/latest/2025/02/serbia-cellebrite-halts-product-use-in-serbia-following-amnesty-surveillance-report/"
  },
  {
   "t": "Russia breaks into a human rights activist's phone with Cellebrite",
   "u": "https://citizenlab.ca/research/russia-breaks-into-human-rights-activists-phone-with-cellebrite/"
  },
  {
   "t": "Cellebrite completes acquisition of Corellium",
   "u": "https://www.globenewswire.com/news-release/2025/12/02/3197887/0/en/Cellebrite-Completes-Acquisition-of-Corellium-Extending-the-Industry-s-Most-Advanced-AI-Powered-Digital-Investigation-Platform.html"
  },
  {
   "t": "A Digital Prison: surveillance and the suppression of civil society in Serbia",
   "u": "https://www.amnesty.org/en/documents/eur70/8813/2024/en/"
  },
  {
   "t": "Israeli surveillance firm Cognyte's business in Myanmar exposed",
   "u": "https://www.justiceformyanmar.org/stories/israeli-surveillance-firm-cognytes-business-in-myanmar-exposed"
  },
  {
   "t": "Cognyte Software company record",
   "u": "https://en.wikipedia.org/wiki/Cognyte"
  },
  {
   "t": "Verint announces record date and distribution date for spin-off of Cognyte Software Ltd.",
   "u": "https://www.businesswire.com/news/home/20210115005107/en/Verint-Announces-Record-Date-and-Distribution-Date-for-Spin-Off-of-Cognyte-Software-Ltd.-Verints-Cyber-Intelligence-Solutions-Business"
  },
  {
   "t": "Running in Circles: uncovering the clients of cyberespionage firm Circles",
   "u": "https://citizenlab.ca/research/running-in-circles-uncovering-the-clients-of-cyberespionage-firm-circles/"
  },
  {
   "t": "Israeli spyware vendor QuaDream to shut down",
   "u": "https://thehackernews.com/2023/04/israeli-spyware-vendor-quadream-to-shut.html"
  },
  {
   "t": "QuaDream reportedly shutting down after company is linked to abuse of spyware",
   "u": "https://www.business-humanrights.org/en/latest-news/quadream-reportedly-shutting-down-after-company-is-liked-to-abuse-of-spyware/"
  },
  {
   "t": "Spyware startup Variston is losing staff, some say it is closing",
   "u": "https://techcrunch.com/2024/02/15/variston-spyware-losing-staff-some-say-closing/"
  },
  {
   "t": "Spyware startup Variston reportedly shuts down",
   "u": "https://sifted.eu/articles/spyware-startup-variston-reportedly-shuts-down"
  },
  {
   "t": "Surveillance Secrets",
   "u": "https://www.lighthousereports.com/investigation/surveillance-secrets/"
  },
  {
   "t": "Amnesty International on the Surveillance Secrets investigation",
   "u": "https://www.amnesty.org/en/latest/news/2025/10/surveillance/"
  },
  {
   "t": "Addition of Sandvine to the Entity List, Federal Register",
   "u": "https://www.govinfo.gov/content/pkg/FR-2024-02-27/html/2024-03674.htm"
  },
  {
   "t": "Commerce removes Sandvine from Entity List following significant corporate reforms",
   "u": "https://www.bis.gov/press-release/commerce-removes-sandvine-entity-list-following-significant-corporate-reforms-protect-human-rights"
  },
  {
   "t": "Buying Spying: commercial surveillance vendors, Google TAG report",
   "u": "https://blog.google/threat-analysis-group/commercial-surveillance-vendors-google-tag-report/"
  },
  {
   "t": "Google Threat Intelligence Group, 2024 zero-day trends",
   "u": "https://cloud.google.com/blog/topics/threat-intelligence/2024-zero-day-trends"
  },
  {
   "t": "About Apple threat notifications and protecting against mercenary spyware",
   "u": "https://support.apple.com/en-us/102174"
  },
  {
   "t": "EU AI Act, Article 5",
   "u": "https://artificialintelligenceact.eu/article/5/"
  },
  {
   "t": "EU AI Act implementation timeline",
   "u": "https://artificialintelligenceact.eu/implementation-timeline/"
  },
  {
   "t": "EU AI Act omnibus agreement: postponed high-risk deadlines and other key changes",
   "u": "https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/"
  },
  {
   "t": "Entry/Exit System will become fully operational on 10 April 2026",
   "u": "https://home-affairs.ec.europa.eu/news/entryexit-system-will-become-fully-operational-10-april-2026-2026-03-30_en"
  },
  {
   "t": "China's Algorithms of Repression",
   "u": "https://www.hrw.org/report/2019/05/01/chinas-algorithms-repression/reverse-engineering-xinjiang-police-mass"
  },
  {
   "t": "Dutch DPA imposes a fine on Clearview because of illegal data collection for facial recognition",
   "u": "https://www.autoriteitpersoonsgegevens.nl/en/current/dutch-dpa-imposes-a-fine-on-clearview-because-of-illegal-data-collection-for-facial-recognition"
  },
  {
   "t": "ICO enforcement action: Clearview AI Inc.",
   "u": "https://ico.org.uk/action-weve-taken/enforcement/clearview-ai-inc-mpn/"
  },
  {
   "t": "UK announces largest ever facial recognition rollout as part of policing reforms",
   "u": "https://www.biometricupdate.com/202601/uk-announces-largest-ever-facial-recognition-rollout-as-part-of-policing-reforms"
  },
  {
   "t": "Predictive policing explained",
   "u": "https://www.brennancenter.org/our-work/research-reports/predictive-policing-explained"
  },
  {
   "t": "San Francisco is first in nation to ban facial recognition software",
   "u": "https://venturebeat.com/2019/05/14/san-francisco-first-in-nation-to-ban-facial-recognition-software/"
  },
  {
   "t": "OpenAI government requests for user data, January to June 2024",
   "u": "https://cdn.openai.com/trust-and-transparency/report-2024h1-government-requests-for-user-data.pdf"
  },
  {
   "t": "OpenAI government requests for user data, January to June 2025",
   "u": "https://cdn.openai.com/trust-and-transparency/report-2025h1-government-requests-for-user-data.pdf"
  },
  {
   "t": "OpenAI government requests for user data, July to December 2025",
   "u": "https://cdn.openai.com/trust-and-transparency/report-2025h2-government-requests-for-user-data.pdf"
  },
  {
   "t": "Anthropic transparency report on government requests",
   "u": "https://www-cdn.anthropic.com/5d453bc3285b8e0c101b7193b5765419920cee24.pdf"
  },
  {
   "t": "DHS asks OpenAI to unmask user behind ChatGPT prompts",
   "u": "https://gizmodo.com/dhs-asks-openai-to-unmask-user-behind-chatgpt-prompts-possibly-the-first-such-case-2000674472"
  }
 ]
};
