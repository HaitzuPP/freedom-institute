window.FI_REPORT = {
 "id": "nologs",
 "issue": "Issue 01",
 "period": "Q4 2026",
 "status": "Desk research on the public record: court judgments, prosecutor press releases, police takedown notices, published audit reports, primary legislation and provider statements. Institute testing has not begun.",
 "title": "What no logs survives a subpoena",
 "standfirst": "In seventeen documented confrontations between a VPN provider's logging claim and a legal demand, a seizure or a breach, eight produced data and nine did not, and the split tracks how each provider defined the word logs rather than where it was incorporated. The two mainstream providers that handed over user-identifying data, PureVPN and IPVanish, both advertised zero logs and both relied on an internal distinction between connection metadata and activity logs. Every published no-logs audit is scoped to a window, a subset of servers and a guided walkthrough, and says so in its own text.",
 "stats": [
  {
   "v": "1,083,997,361",
   "k": "log records left exposed",
   "d": "1.207 TB on a shared server used by seven VPN apps that advertised zero-logs policies, including plain-text passwords, user IP addresses and connection timestamps",
   "by": "vpnMentor research team",
   "src": "https://www.vpnmentor.com/blog/cybersecurity/report-free-vpns-leak/"
  },
  {
   "v": "506",
   "k": "users identified from one seized database",
   "d": "Users of First VPN identified after investigators obtained a copy of its user database, with more than 80 intelligence packages shared with partner countries",
   "by": "Europol and Dutch and French police, Operation Saffron, May 2026",
   "src": "https://www.computerweekly.com/news/366643536/Police-op-targets-VPN-service-favoured-by-ransomware-gangs"
  },
  {
   "v": "5 years",
   "k": "mandatory retention for VPNs in India",
   "d": "Subscriber names, addresses, contact numbers and allocated IP addresses, kept even after the cancellation or withdrawal of such subscription",
   "by": "CERT-In Direction No. 20(3)/2022, in force from end of June 2022",
   "src": "https://www.internetsociety.org/resources/doc/2022/internet-impact-brief-india-cert-in-cybersecurity-directions-2022/"
  }
 ],
 "findings": [
  "The phrase no logs has never had a fixed referent, and both cases where a mainstream provider produced data turned on the provider's own distinction between connection metadata and activity logs: PureVPN supplied two source IP addresses tied to one account while insisting it kept no browsing logs, and IPVanish supplied a name, email address, source IP and connect and disconnect times while advertising a strict zero-logs policy.",
  "Server seizure has been a more reliable test of the claim than a subpoena, because a subpoena tests only what a provider chooses to answer while a seizure tests what is on the disk, and the seizure that produced the most damaging finding, Windscribe's two Ukrainian servers in June 2021, found no logs but an unencrypted OpenVPN private key.",
  "No-logs marketing is enforceable as consumer-protection law and effectively unenforceable as privacy law: the Australian Federal Court fined Meta's subsidiaries 20 million Australian dollars over Onavo Protect's privacy representations and the FTC took 16.5 million dollars from Avast for deceptive privacy claims, while no provider in this ledger has faced a penalty for producing data after promising it held none.",
  "The provider's stated corporate jurisdiction determined the outcome in none of the seventeen cases, while hosting arrangements determined it repeatedly: Dutch police served Perfect Privacy's host I3D rather than Perfect Privacy, NordVPN's Finnish datacentre created an unauthorised admin account without telling NordVPN, and a Finnish server put a Canadian founder in an Athens criminal court for nearly two years.",
  "Independent audits and adversarial events test different propositions and the audits test the weaker one: Securitum's own Proton VPN report distinguishes its guided review process, as demonstrated by Proton's senior engineers, from an unsupervised, direct forensic investigation, and states it did not encompass every server in Proton's global fleet, which is exactly what the Turkish seizure of an ExpressVPN server and the Swedish search of Mullvad's office did do."
 ],
 "sections": [
  {
   "n": "01",
   "kicker": "WHAT WAS HANDED OVER",
   "title": "Two mainstream providers advertising zero logs produced user-identifying data",
   "intro": "These are the occasions where a logging claim met a legal demand, a seizure or a breach and something came out. Two patterns run through them. In the consumer cases, the provider kept connection metadata it did not count as logs, and that metadata was enough: an account, two source IP addresses, a set of connect and disconnect times. In the criminal-market cases, law enforcement did not ask at all; it took the servers and the customer database with them.",
   "paras": [
    "The distinction PureVPN drew in 2017, between activity logs it says it does not keep and network logs it does, is the single most load-bearing sentence in this section. IPVanish's 2016 disclosure is the more complete one: a name, an email address, a real originating IP and connection timing, supplied against a homepage promising a strict zero-logs policy.",
    "The 2020 exposure of 1,083,997,361 records across seven white-labelled apps is the only entry here with no legal process at all. It is also the only one where the logs themselves are public, which is why it is the most direct evidence in the report that zero-logs marketing and extensive logging coexist."
   ],
   "entries": [
    {
     "name": "HideMyAss",
     "meta": "Arrest 22 September 2011; company response week of 26 September 2011. United Kingdom, with prosecution in the Central District of California.",
     "flag": "produced",
     "fields": [
      [
       "Instrument",
       "A UK court order sought in connection with LulzSec intrusions including Sony Pictures Entertainment, the UK Serious Organised Crime Agency and NATO."
      ],
      [
       "Produced",
       "Connection records. The company said it logged only when specific users connected and disconnected from its servers, and stored none of the traffic they sent."
      ],
      [
       "Reported capability",
       "The time a customer logs onto and disconnects from the service, and the IP addresses he or she connects to."
      ],
      [
       "Outcome",
       "Cody Kretsinger pleaded guilty to conspiracy and unauthorised impairment of a protected computer. Sentenced 18 April 2013 to one year and one day in federal prison, one year home detention, 1,000 hours community service and 605,663 dollars restitution."
      ],
      [
       "Marketing verified",
       "No no-logs claim verified for 2011. The company pointed to its terms: our service is not to be used for illegal activity."
      ]
     ],
     "note": "This is a privacy-branded proxy and VPN that never claimed zero logs; the public reaction was to the brand rather than to a broken promise.",
     "src": {
      "t": "HideMyAss defends role in LulzSec hack arrest",
      "u": "https://www.theregister.com/2011/09/26/hidemyass_lulzsec_controversy/"
     }
    },
    {
     "name": "IPVanish, then owned by Highwinds Network Group",
     "meta": "Summonses 26 May and 9 June 2016, response supplied 21 June 2016; surfaced publicly May 2018. United States.",
     "flag": "produced",
     "fields": [
      [
       "Instrument",
       "A Department of Homeland Security summons. The first returned a no-logs answer; a second, narrower summons demanded any data associated with IRC traffic on a specified IP and port 6667."
      ],
      [
       "Produced",
       "The user name, email address, VPN subscription details, the real originating Comcast IP address, and the dates and times he connected to and disconnected from the IRC network."
      ],
      [
       "Outcome",
       "The suspect was located in Indiana and, per the reporting, admitted the conduct on the IRC channel and to having shared abuse imagery for at least seven years."
      ],
      [
       "Marketing verified",
       "IPVanish does not collect or log any traffic or use of its Virtual Private Network service."
      ],
      [
       "Marketing verified",
       "The June 2016 homepage promoted a strict zero-logs policy."
      ],
      [
       "Significance",
       "The most complete disclosure by a mainstream zero-logs consumer VPN in the public record."
      ]
     ],
     "note": "IPVanish does not dispute that the data was supplied but attributes it to the pre-acquisition legal and executive team; StackPath said the court documents did not come up in diligence, and chief executive Lance Crosby stated that IPVanish does not, has not, and will not log or store logs of our users as a StackPath company.",
     "src": {
      "t": "IPVanish No-Logging VPN Led Homeland Security to Comcast User",
      "u": "https://torrentfreak.com/ipvanish-no-logging-vpn-led-homeland-security-to-comcast-user-180505/"
     }
    },
    {
     "name": "PureVPN (GZ Systems)",
     "meta": "FBI affidavit and criminal complaint October 2017; conduct May 2016 to October 2017. District of Massachusetts.",
     "flag": "produced",
     "fields": [
      [
       "Instrument",
       "FBI legal process in the cyberstalking investigation of Ryan S. Lin."
      ],
      [
       "Produced",
       "Evidence that the same PureVPN customer account was accessed from two originating IP addresses: the RCN address at Lin's home and the address of the software company where he worked. In effect, source IP addresses tied to an account, plus connection timing."
      ],
      [
       "Outcome",
       "Lin pleaded guilty and was sentenced on 3 October 2018 to 210 months, about 17.5 years, plus five years supervised release, on seven counts of cyberstalking, five of distributing child pornography, nine hoax bomb threat counts, three computer fraud counts and one aggravated identity theft count."
      ],
      [
       "Marketing verified",
       "NO browsing logs, browsing habits or anything else was, or ever will be shared."
      ],
      [
       "Policy at the time",
       "We do not keep any records of anything that could associate any specific activity to a specific user, alongside: Our servers automatically record the time at which you connect to any of our servers."
      ]
     ],
     "note": "PureVPN disputes that it broke its policy, drawing a distinction between activity logs, which it says it does not keep, and network or connection logs, which it does; critics regard that distinction as the whole problem.",
     "src": {
      "t": "PureVPN Logs Helped FBI Net Alleged Cyberstalker",
      "u": "https://torrentfreak.com/purevpn-logs-helped-fbi-net-alleged-cyberstalker-171009/"
     }
    },
    {
     "name": "UFO VPN, FAST VPN, Free VPN, Super VPN, Flash VPN, Secure VPN, Rabbit VPN",
     "meta": "Indexed by Shodan 27 June 2020; found 1 and 5 July 2020; secured 15 July 2020. Hong Kong, on shared white-label infrastructure.",
     "flag": "produced",
     "fields": [
      [
       "Instrument",
       "No legal demand. An unsecured Elasticsearch cluster, publicly reachable."
      ],
      [
       "Found",
       "1,083,997,361 records totalling 1.207 TB, including internet activity logs, account passwords in plain text, VPN session secrets and tokens, user IP addresses, connection timestamps, geo-tags, device and operating system details, names, email addresses, home addresses, Bitcoin and PayPal payment references and support messages."
      ],
      [
       "Infrastructure",
       "The seven services shared a common white-label provider, with payments processed by Dreamfii HK Limited."
      ],
      [
       "Outcome",
       "No prosecution documented. Comparitech reports re-exposure at a different IP address on 20 July 2020."
      ],
      [
       "Marketing verified",
       "UFO VPN advertised zero logs policies; FAST VPN displayed Strict Zero Logs."
      ],
      [
       "Policy at the time",
       "We do not track user activities outside of our Site, nor do we track the website browsing or connection activities of users."
      ]
     ],
     "note": "UFO VPN said all the collected information is anonymous and only be used for analyzing the user's network performance and problems, and blamed personnel changes caused by COVID-19; Comparitech's researchers dispute the anonymity claim on the basis of the exposed data itself.",
     "src": {
      "t": "Report: No-Log VPNs Reveal Users Personal Data and Logs",
      "u": "https://www.vpnmentor.com/blog/cybersecurity/report-free-vpns-leak/"
     }
    },
    {
     "name": "Proton Mail (Proton AG)",
     "meta": "French activist IP logging ordered 2021, disclosed 5 to 6 September 2021; Spanish Guardia Civil matter reported May 2024. Switzerland, acting on foreign requests.",
     "flag": "produced",
     "fields": [
      [
       "Instrument",
       "A legally binding Swiss order requiring prospective IP logging of a named account, routed from French police via Europol; and a Swiss-approved Spanish request in a terrorism investigation."
      ],
      [
       "Produced 2021",
       "The account creation date and the IP address used to create the account. The French police report noted that the data transmitted by the company is limited to that due to the privacy policy of PROTONMAIL TECHNOLOGIES."
      ],
      [
       "Produced 2024",
       "A single item of metadata, the recovery email address, which was an Apple iCloud address. Apple then supplied the user's full name, two residential addresses and a linked Gmail account."
      ],
      [
       "Outcome",
       "French police obtained the activist's IP in an investigation near Place Sainte Marthe in Paris; an arrest followed in Spain. Neither disposition is documented in the sources reviewed."
      ],
      [
       "Marketing verified",
       "On 6 September 2021 the policy was amended to read: If you are breaking Swiss law, ProtonMail can be legally compelled to log your IP address."
      ]
     ],
     "note": "Proton VPN, a separate service, was not the subject of either order, and Proton maintains that Swiss law treats VPN services differently from email; Proton also says content remained encrypted and that Proton has minimal user information.",
     "src": {
      "t": "ProtonMail logged IP address of French activist after order by Swiss authorities",
      "u": "https://techcrunch.com/2021/09/06/protonmail-logged-ip-address-of-french-activist-after-order-by-swiss-authorities"
     }
    },
    {
     "name": "DoubleVPN",
     "meta": "29 June 2021. Netherlands-led, with Germany, the United States, the United Kingdom, Canada, Switzerland, Bulgaria, Sweden, Europol and Eurojust.",
     "flag": "produced",
     "fields": [
      [
       "Instrument",
       "Coordinated seizure of infrastructure and domains."
      ],
      [
       "Seized",
       "The takedown notice stated that law enforcement gained access to the servers of DoubleVPN and seized personal information, logs and statistics kept by DoubleVPN about all of its customers."
      ],
      [
       "Outcome",
       "Service dismantled and customer data passed to investigators. No individual outcome documented in the sources reviewed."
      ],
      [
       "Marketing verified",
       "Advertised single, double, triple and even quadruple VPN-connections to conceal location and identity; promoted on cybercrime forums."
      ]
     ],
     "note": "",
     "src": {
      "t": "DoubleVPN servers, logs, and account info seized by law enforcement",
      "u": "https://www.bleepingcomputer.com/news/security/doublevpn-servers-logs-and-account-info-seized-by-law-enforcement/"
     }
    },
    {
     "name": "VPNLab.net",
     "meta": "17 January 2022. Europol-coordinated across Germany, the Netherlands, Canada, the Czech Republic, France, Hungary, Latvia, Ukraine, the United States and the United Kingdom.",
     "flag": "produced",
     "fields": [
      [
       "Instrument",
       "Disruption operation; servers confiscated and the main website taken offline."
      ],
      [
       "Seized",
       "15 servers, plus the customer data stored within them, which police said would let them identify more ransomware affiliates."
      ],
      [
       "Outcome",
       "Ukrainian cybercrime police linked the service to at least 150 ransomware attacks with minimum damages of 60 million euros. No individual dispositions documented in the source reviewed."
      ],
      [
       "Marketing verified",
       "Operating since 2008, advertised OpenVPN with 2048-bit encryption at roughly 60 dollars a year. No no-logs wording verified."
      ]
     ],
     "note": "",
     "src": {
      "t": "Europol shuts down VPN service used by ransomware groups",
      "u": "https://www.bleepingcomputer.com/news/security/europol-shuts-down-vpn-service-used-by-ransomware-groups/"
     }
    },
    {
     "name": "First VPN (1vpns.com), Operation Saffron",
     "meta": "Investigation opened December 2021; takedown executed 19 to 20 May 2026. France and the Netherlands leading, with 18 nations participating.",
     "flag": "produced",
     "fields": [
      [
       "Instrument",
       "Coordinated infrastructure seizure. Investigators obtained access to the service and a copy of its user database."
      ],
      [
       "Seized",
       "33 servers across 27 countries, plus the .com, .net, .org and .onion domains."
      ],
      [
       "Found",
       "Over 5,000 accounts identified in total; 506 users identified and reported on, via more than 80 intelligence packages shared with partner countries. The work has already fed 21 other investigations."
      ],
      [
       "Outcome",
       "The administrator, based in Ukraine, was arrested and interviewed and his home searched."
      ],
      [
       "Marketing verified",
       "Advertised itself as not cooperating with any judicial authority and that it would not be subject to any jurisdiction. Sold on cybercriminal forums, tiered by relay depth."
      ],
      [
       "Quoted",
       "Europol's Edvardas Sileris: For years, cyber criminals saw this VPN service as a gateway to anonymity. They believed it would keep them beyond the reach of law enforcement. This operation proves them wrong."
      ]
     ],
     "note": "No explicit no-logs wording is verified for this service, and no resulting convictions are yet in the public record.",
     "src": {
      "t": "Police op targets VPN service favoured by ransomware gangs",
      "u": "https://www.computerweekly.com/news/366643536/Police-op-targets-VPN-service-favoured-by-ransomware-gangs"
     }
    }
   ]
  },
  {
   "n": "02",
   "kicker": "WHAT SURVIVED",
   "title": "Nine confrontations produced nothing usable, and none of them turned on where the company was incorporated",
   "intro": "In these cases the demand was made and the provider had nothing to give, or the court refused to make it give anything. They are the strongest available evidence for the no-logs claim, and they are weaker evidence than they appear. Several rest entirely on the provider's own account of what investigators found, and one, the Swedish court ruling on OVPN, decided only that the claimants had failed to prove data existed.",
   "paras": [
    "The structural lesson sits in Perfect Privacy and NordVPN. In Rotterdam the police went to the hosting company and never contacted the provider. In Finland the datacentre created an administrative account the provider did not know about. Neither outcome had anything to do with the company's stated jurisdiction.",
    "Windscribe appears three times in this section, which is instructive. Its Ukrainian servers held no logs but did hold an unencrypted private key. Its founder spent nearly two years as a criminal defendant in Athens because his name was on a hosting account in Finland. And its account of a February 2026 Dutch seizure is uncorroborated."
   ],
   "entries": [
    {
     "name": "Perfect Privacy",
     "meta": "Reported 2 September 2016; seizure a few days earlier. Rotterdam, Netherlands.",
     "flag": "nothing",
     "fields": [
      [
       "Instrument",
       "Dutch police obtained a subpoena and went directly to the hosting provider I3D rather than to Perfect Privacy, which learned of it from the host."
      ],
      [
       "Produced",
       "Nothing by the provider. Two servers were physically taken."
      ],
      [
       "Company statement",
       "Since we are not logging any data there is currently no reason to believe that any user data was compromised."
      ],
      [
       "Outcome",
       "No reason was ever given and no prosecution is documented; at the time of reporting it remained unclear why the servers were taken."
      ],
      [
       "Structural point",
       "The provider was never the party served."
      ]
     ],
     "note": "",
     "src": {
      "t": "Police Seize Two Perfect Privacy VPN Servers",
      "u": "https://torrentfreak.com/police-seize-two-perfect-privacy-vpn-servers-160902/"
     }
    },
    {
     "name": "Private Internet Access (London Trust Media)",
     "meta": "FBI affidavit February 2016 and complaint March 2016, Southern District of Florida; trial testimony June 2018, Northern District of California.",
     "flag": "nothing",
     "fields": [
      [
       "Instrument",
       "A subpoena in the Preston McWaters bomb threat and harassment investigation; then a subpoena plus live testimony from the general counsel in the prosecution of Ross Colby over the Embarcadero Media hack."
      ],
      [
       "Produced 2016",
       "Only that the cluster of IP addresses being used was from the east coast of the United States. The FBI could not tie McWaters to any payment; the service accepted cards, PayPal and Bitcoin."
      ],
      [
       "Produced 2018",
       "Nothing linking the defendant. The company testified it does not retain logs of customers' internet activities and there was no record of Ross Colby signing up with his two known email addresses."
      ],
      [
       "Outcome",
       "McWaters was charged with providing false or misleading information regarding an explosive device; the FBI had sufficient independent evidence for an arrest warrant."
      ],
      [
       "Marketing verified",
       "None. No short marketing line was verified for either date."
      ]
     ],
     "note": "The verdict in the Ross Colby trial is not reported in the source reviewed.",
     "src": {
      "t": "VPN Providers No-Logging Claims Tested in FBI Case",
      "u": "https://torrentfreak.com/vpn-providers-no-logging-claims-tested-in-fbi-case-160312/"
     }
    },
    {
     "name": "ExpressVPN",
     "meta": "Assassination of Ambassador Andrey Karlov 19 December 2016; server seized January 2017. Turkey; company incorporated in the British Virgin Islands.",
     "flag": "nothing",
     "fields": [
      [
       "Instrument",
       "Turkish investigators physically seized a server, seeking to trace who had remotely wiped the suspect's Gmail and Facebook accounts over the VPN."
      ],
      [
       "Produced",
       "Nothing. The company states the investigators' seizure and inspection of the VPN server in question confirmed that no logs existed."
      ],
      [
       "Company statement",
       "ExpressVPN does not and has never possessed any customer connection logs that would enable us to know which customer was using the specific IPs cited by the investigators."
      ],
      [
       "Outcome",
       "That investigative avenue closed. No user was identified through the server."
      ],
      [
       "Marketing verified",
       "We do not keep activity logs."
      ],
      [
       "Marketing verified",
       "The British Virgin Islands described as an offshore jurisdiction with strong privacy legislation and no data retention requirements."
      ]
     ],
     "note": "The only account of what was found on the server is ExpressVPN's own; no Turkish judicial document setting out the contents has been published.",
     "src": {
      "t": "ExpressVPN statement on Andrey Karlov investigation",
      "u": "https://www.expressvpn.com/blog/expressvpn-statement-andrey-karlov-investigation/"
     }
    },
    {
     "name": "NordVPN",
     "meta": "Server online 31 January 2018; intrusion about 5 March 2018; notified 13 April 2019; disclosed 21 October 2019. Finnish datacentre; company then presenting as Panama-based.",
     "flag": "nothing",
     "fields": [
      [
       "Instrument",
       "No legal demand. A third-party datacentre created an insecure remote management account without the company's knowledge and an intruder used it."
      ],
      [
       "Found",
       "An expired TLS key, usable only in narrow targeted man-in-the-middle scenarios. No credentials, usernames or passwords were affected."
      ],
      [
       "Company statement",
       "The intruder did not find any user activity logs because they do not exist."
      ],
      [
       "Outcome",
       "The datacentre contract was terminated. No user harm is documented."
      ],
      [
       "Reading",
       "Evidence for the no-logs claim and, at the same time, evidence of weak key management and a slow disclosure."
      ]
     ],
     "note": "",
     "src": {
      "t": "NordVPN safe after a third-party provider breach",
      "u": "https://nordvpn.com/blog/official-response-datacenter-breach/"
     }
    },
    {
     "name": "OVPN",
     "meta": "Injunction application July 2020; decision 11 September 2020. Patent and Market Court, Stockholm, Sweden.",
     "flag": "nothing",
     "fields": [
      [
       "Instrument",
       "Svensk Filmindustri, Nordisk Film and Rights Alliance sought an information injunction compelling disclosure of customer data connecting a subscriber to The Pirate Bay."
      ],
      [
       "Produced",
       "Nothing. The court rejected the application."
      ],
      [
       "Court reasoning",
       "It is not possible on the basis of the statements, which contain a number of uncertainties, to draw any definite conclusions about OVPN's access to the information."
      ],
      [
       "Outcome",
       "OVPN won; claimants were ordered to pay roughly 12,300 dollars in costs."
      ],
      [
       "Limit of the ruling",
       "The court did not find affirmatively that no logs exist; it found the claimants had not proved that they did."
      ]
     ],
     "note": "",
     "src": {
      "t": "OVPN Wins Court Battle After Pirate Bay Data Demands Rejected",
      "u": "https://torrentfreak.com/ovpn-wins-court-battle-after-pirate-bay-data-demands-rejected-200911/"
     }
    },
    {
     "name": "Windscribe, Ukraine server seizure",
     "meta": "24 June 2021. Ukraine, reported as Cyber Police; the company had no direct confirmation.",
     "flag": "nothing",
     "fields": [
      [
       "Instrument",
       "Two servers seized without notice to the company."
      ],
      [
       "Found",
       "No logs, but an OpenVPN server certificate and its private key, stored unencrypted on disk."
      ],
      [
       "Company statement",
       "Although we have encrypted servers in high sensitivity regions, the servers in question were running a legacy stack and were not encrypted."
      ],
      [
       "Company statement",
       "The simple truth is that these safeguards were not in place when the server seizure occurred."
      ],
      [
       "Risk",
       "Possession of the key would permit server impersonation and traffic capture, under a narrow set of four conditions the company says must hold simultaneously."
      ],
      [
       "Marketing verified",
       "As we do not log VPN traffic, no customer data from those servers while in operation are at any risk."
      ],
      [
       "Significance",
       "The clearest documented case that no logs and no exposure are different propositions."
      ]
     ],
     "note": "No prosecution is documented, and whether the seized key was ever used is not in the public record.",
     "src": {
      "t": "OpenVPN Security Improvements and Changes",
      "u": "https://windscribe.com/blog/openvpn-security-improvements-and-changes-7b04ea49222/"
     }
    },
    {
     "name": "Mullvad",
     "meta": "Search authorised by prosecutor 17 February 2023, executed 18 April 2023. Gothenburg, Sweden, on a German request.",
     "flag": "nothing",
     "fields": [
      [
       "Instrument",
       "A search warrant executed by the National Operations Department of the Swedish Police, which intended to seize computers with customer data."
      ],
      [
       "Produced",
       "Nothing. The company demonstrated the data did not exist and, after the officers consulted the prosecutor, they left empty-handed."
      ],
      [
       "Company statement",
       "In line with our policies such customer data did not exist."
      ],
      [
       "Company statement",
       "Even if computers had been taken, that would not have given them access to any customer information."
      ],
      [
       "Outcome",
       "German prosecutor Paul Pfeiffer of Rostock: During the investigations, which are still ongoing, an IP address was found that led to the VPN service Mullvad. The investigation is not directed towards the VPN service."
      ],
      [
       "Transparency",
       "Swedish prosecutors refused to release the search protocol, citing confidentiality in international judicial cooperation."
      ]
     ],
     "note": "",
     "src": {
      "t": "Mullvad VPN was subject to a search warrant. Customer data not compromised",
      "u": "https://mullvad.net/en/blog/2023/4/20/mullvad-vpn-was-subject-to-a-search-warrant-customer-data-not-compromised"
     }
    },
    {
     "name": "Windscribe, criminal prosecution of its founder in Greece",
     "meta": "Charges notified June 2023; dismissed 11 April 2025. Court of Athens; server in Finland; company Canadian.",
     "flag": "nothing",
     "fields": [
      [
       "Instrument",
       "Yegor Sak was charged personally with illegal access to information system because his name appeared on the hosting account for the Finnish server used in the alleged intrusion, notified via mutual legal assistance through the Canadian Department of Justice."
      ],
      [
       "Produced",
       "Nothing. Sak's position: As we do not log user activity, we cannot hand over what we do not have."
      ],
      [
       "Outcome",
       "All charges dismissed on 11 April 2025 after hearings in December 2023, March 2024 and April 2025."
      ],
      [
       "Reading",
       "A no-logs posture did not create criminal liability for the operator in this EU jurisdiction, but it cost him a nearly two-year proceeding."
      ]
     ],
     "note": "",
     "src": {
      "t": "Windscribe Wins Legal Battle in Greece Due to No-Logs Policy",
      "u": "https://windscribe.com/blog/windscribe-greek-court-case/"
     }
    },
    {
     "name": "Windscribe, Netherlands server seizure",
     "meta": "5 February 2026. Netherlands.",
     "flag": "open",
     "fields": [
      [
       "Instrument",
       "The company states Dutch authorities seized a server without a warrant or formal legal process, and said it would be returned after a full analysis."
      ],
      [
       "Company statement",
       "Windscribe uses RAM disk servers, so the only thing the authorities will find is a stock Ubuntu install."
      ],
      [
       "Corroboration",
       "None. Dutch police have made no public statement and no warrant has been referenced."
      ],
      [
       "Status",
       "Reported here as a company allegation, not an established fact."
      ]
     ],
     "note": "The only account of this event is the company's own.",
     "src": {
      "t": "Windscribe alleges warrantless seizure of VPN server by Dutch authorities",
      "u": "https://cyberinsider.com/windscribe-alleges-warrantless-seizure-of-vpn-server-by-dutch-authorities/"
     }
    }
   ]
  },
  {
   "n": "03",
   "kicker": "THE AUDIT LANDSCAPE",
   "title": "Every published no-logs audit states its own limits, and those limits are the finding",
   "intro": "Five audits are verifiable in full: Securitum on Proton VPN, Deloitte on Surfshark and on NordVPN, KPMG on ExpressVPN and Assured AB on Mullvad. Read the scope sections rather than the headlines. Each report is bounded by a date or a window, by a subset of servers, and by what the auditors were shown. Each says so in its own text.",
   "paras": [
    "What a point-in-time audit can establish: that on specific dates, on specific inspected machines, the configurations examined were not writing the categories of data the auditors looked for; that documented deployment and change processes exist and were described consistently by staff; and that a named, accountable third party with professional liability put its name to that observation.",
    "What it cannot establish, first, is what happens on any other day. Surfshark's report states that it is solely regarding the system and infrastructure at the time of the audit, and that any later modification may change the conclusion. NordVPN describes its engagement as covering its systems exactly as they operated during that period.",
    "Second, it cannot establish what happens on servers nobody inspected. Securitum states plainly that its work did not encompass every server in Proton's global fleet. No published consumer VPN no-logs audit inspects a whole fleet.",
    "Third, it cannot establish what the software actually does. Securitum excluded source code review, binary analysis and the CI/CD pipeline. An ISAE 3000 configuration review reads settings; it does not prove the compiled binary honours them.",
    "Fourth, it cannot establish whether the provider is under a secret order. No audit firm has access to sealed legal process, gag orders or national security directions, and no published report claims otherwise.",
    "Fifth, it cannot establish whether the auditors were shown a representative system. Securitum's own disclaimer separates a guided review process, as demonstrated by Proton's senior engineers, from an unsupervised, direct forensic investigation.",
    "Sixth, it cannot establish whether data is exposed by other means. Mullvad's own audit found privilege escalation and firewall issues, and Windscribe's Ukraine seizure found no logs but an unencrypted private key. A clean logging result and poor key handling coexist comfortably.",
    "Seventh, it cannot establish what upstream parties hold. Perfect Privacy was never served; its host was. No provider audit covers a datacentre's own records, which is precisely what the NordVPN Finland breach involved."
   ],
   "entries": [
    {
     "name": "Proton VPN, audited by Securitum",
     "meta": "Fieldwork 18 to 20 August 2025; report finalised 19 September 2025. Fourth consecutive annual no-logs audit.",
     "flag": "",
     "fields": [
      [
       "Scope",
       "Production bare-metal VPN servers owned by Proton AG: system configurations, running processes and storage; change and deployment processes; inspection of server storage and memory for evidence of data persistence; configuration files for core VPN services."
      ],
      [
       "Excluded",
       "The CI/CD pipeline, source code review of the VPN software, binary analysis of client or server software, and ancillary systems including accounting and account management."
      ],
      [
       "Stated limitation",
       "The findings are based on a guided review process, where Securitum auditors observed live systems as demonstrated by Proton's senior engineers. While this provides a high degree of assurance, it is distinct from an unsupervised, direct forensic investigation."
      ],
      [
       "Stated limitation",
       "Described as a point-in-time validation that did not encompass every server in Proton's global fleet."
      ]
     ],
     "note": "",
     "src": {
      "t": "Security report: Proton VPN no-logs policy audit",
      "u": "https://www.securitum.com/public-reports/securitum-protonvpn-nologs-2025.pdf"
     }
    },
    {
     "name": "Surfshark, audited by Deloitte Lietuva UAB",
     "meta": "ISAE 3000 (Revised) Independent Reasonable Assurance Report dated 10 June 2025.",
     "flag": "",
     "fields": [
      [
       "Scope",
       "Configuration of IT systems and supporting IT operations for standard VPN servers, Static IP servers, Multihop servers, server configuration and deployment processes, privacy-relevant configuration settings, configuration management roles, API infrastructure and SDN systems."
      ],
      [
       "Excluded, verbatim",
       "Data transfer security and security measures in place for the protection of data and systems of Surfshark, Streaming infrastructure (Haproxy servers, Sni proxy servers) and Captcha solution run on the same infrastructure, Web/API infrastructure except specific parts that connected to VPN infrastructure, Internal control environment for the maintenance and operation of the system environment of Surfshark, Physical security testing of IT infrastructure, Access rights testing related to VPN and IT infrastructure."
      ],
      [
       "Stated limitation",
       "This report is solely regarding the system and infrastructure at the time of the audit, any later modification of the system or infrastructure may change our conclusion."
      ]
     ],
     "note": "",
     "src": {
      "t": "Surfshark B.V. ISAE 3000 Independent Reasonable Assurance Report",
      "u": "https://surfshark.com/wp-content/uploads/2025/06/ISAE_3000-_Report-Surfshark_No_Log_VPN.pdf"
     }
    },
    {
     "name": "NordVPN, audited by Deloitte Lithuania",
     "meta": "Sixth no-logs assurance engagement; fieldwork 10 November to 12 December 2025, under ISAE 3000 (Revised).",
     "flag": "",
     "fields": [
      [
       "Scope",
       "Server infrastructure, configurations and deployment processes, covering standard VPN, Double VPN, obfuscated and Onion Over VPN servers, with attention to privacy-related settings and no-log configurations."
      ],
      [
       "Stated limitation",
       "The assurance engagement took place between November 10 and December 12, 2025, with Deloitte assessing our systems exactly as they operated during that period."
      ],
      [
       "Stated limitation",
       "Described by the company as a point-in-time assessment."
      ],
      [
       "History",
       "Prior engagements were conducted by PwC AG in 2018 and 2020, and by Deloitte since."
      ]
     ],
     "note": "",
     "src": {
      "t": "NordVPN passes sixth no-logs assurance engagement",
      "u": "https://nordvpn.com/blog/nordvpn-no-logs-assurance-engagement-2025/"
     }
    },
    {
     "name": "ExpressVPN, audited by KPMG",
     "meta": "ISAE 3000 Type I; conclusion expressed as of 28 February 2025.",
     "flag": "",
     "fields": [
      [
       "Method",
       "Documentation review, observing the system in operation, and interviewing ExpressVPN personnel."
      ],
      [
       "Finding",
       "Controls provide reasonable assurance that the ExpressVPN TrustedServer does not collect logs of users' activity."
      ],
      [
       "Stated limitation",
       "A Type I engagement tests the design and implementation of controls at a point in time, not operating effectiveness over a period."
      ],
      [
       "Excluded",
       "The engagement did not include stress-testing the system or a full security analysis of the company."
      ]
     ],
     "note": "",
     "src": {
      "t": "ExpressVPNs external auditors confirm no-logs policy as of February",
      "u": "https://www.engadget.com/cybersecurity/vpn/expressvpns-external-auditors-confirm-no-logs-policy-as-of-february-171957335.html"
     }
    },
    {
     "name": "Mullvad, audited by Assured AB",
     "meta": "Concluded May 2022; fixes deployed early June 2022. Full report published.",
     "flag": "",
     "fields": [
      [
       "Scope",
       "Three freshly installed servers: two WireGuard, one of them diskless, and one OpenVPN, with full SSH access granted to the auditors, examining internal and external security, server configuration and customer logging."
      ],
      [
       "Finding",
       "No information leakage or customer data logging. The auditors concluded that the configuration is sound and did not display signs of any direct customer information."
      ],
      [
       "Weaknesses found",
       "21 issues of low to medium severity, no critical or high findings. User-writable root scripts permitting privilege escalation, permissive firewall policies, and shared API credentials lacking entropy."
      ],
      [
       "Reading",
       "A clean logging result and real security weaknesses can appear in the same report."
      ]
     ],
     "note": "",
     "src": {
      "t": "Report: Mullvad VPN relay audit",
      "u": "https://www.assured.se/publications/Assured_Mullvad_relay_server_audit_report_2022.pdf"
     }
    }
   ]
  },
  {
   "n": "04",
   "kicker": "WHAT THE LAW COMPELS",
   "title": "Stated jurisdiction is a marketing variable; hosting and legal assistance treaties are the operative ones",
   "intro": "Seven regimes bear directly on whether a VPN provider can keep its promise. They differ less on whether retention is possible than on whether it is imposed by default, imposed on notice, or triggered by a single letter. India imposes it by default and is being ignored. The United Kingdom imposes it on notice and does not publish the notices. The United States imposes nothing until a government asks, at which point everything in the provider's possession freezes for ninety days.",
   "paras": [
    "On jurisdiction as marketing: ExpressVPN tells customers there are no data retention laws in the BVI, and that an order for a BVI company to produce records must come from the BVI High Court, with foreign governments required to petition that court and satisfy dual criminality. The absence of a retention law is accurate. It is not the same as the absence of a route in.",
    "The US Department of Justice's own list of Mutual Legal Assistance Treaties records a treaty with the British Virgin Islands dated 9 November 1990, with Panama dated 6 September 1995, and with Switzerland dated 23 January 1977. The three jurisdictions most often advertised as privacy havens by consumer VPNs each have a bilateral assistance treaty with the United States.",
    "The behavioural evidence is stronger than the doctrinal evidence. Windscribe is Canadian, the server was in Finland, and its founder was prosecuted in Greece. Mullvad is Swedish and was searched on a German request. Perfect Privacy's host in Rotterdam was served instead of Perfect Privacy. Corporate jurisdiction determined none of these outcomes; server location and hosting relationships did."
   ],
   "entries": [
    {
     "name": "India",
     "meta": "CERT-In Direction No. 20(3)/2022 under section 70B(6) of the Information Technology Act, issued 28 April 2022, effective end of June 2022.",
     "flag": "",
     "fields": [
      [
       "Obligation",
       "VPN providers must register and maintain, for five years and even after the cancellation or withdrawal of such subscription: names of customers and subscribers, period of hire, IP addresses allotted to or used by customers, email address and IP address and timestamp at registration, purpose of hiring the service, validated address and contact numbers, and ownership pattern of subscribers."
      ],
      [
       "Character",
       "An affirmative retention mandate, the strictest in this set."
      ],
      [
       "Compliance",
       "Proton VPN, NordVPN, ExpressVPN, Surfshark, Windscribe and Mullvad removed physical infrastructure from India and continued serving Indian users from overseas servers."
      ],
      [
       "Official assessment, July 2026",
       "The 2022 Cert-In directives requiring VPN providers to store certain usage data have failed to rein in these companies, as they have simply refused to comply."
      ],
      [
       "Next step",
       "India is drafting a law requiring local offices, local compliance officers and criminal liability for local employees, modelled on the 2021 IT Rules."
      ]
     ],
     "note": "",
     "src": {
      "t": "Internet Impact Brief: India CERT-In Cybersecurity Directions 2022",
      "u": "https://www.internetsociety.org/resources/doc/2022/internet-impact-brief-india-cert-in-cybersecurity-directions-2022/"
     }
    },
    {
     "name": "United Kingdom",
     "meta": "Investigatory Powers Act 2016, section 87.",
     "flag": "",
     "fields": [
      [
       "Obligation",
       "The Secretary of State may require a telecommunications operator, which may be a particular operator or any description of operators, to retain relevant communications data including internet connection records."
      ],
      [
       "Ceiling",
       "A maximum of 12 months."
      ],
      [
       "Test",
       "Necessary and proportionate for national security, crime prevention, public safety, preventing injury or investigating miscarriages of justice."
      ],
      [
       "Safeguard",
       "The decision must be approved by a Judicial Commissioner."
      ],
      [
       "Character",
       "No general default retention duty; a standing power to impose one on a named operator. Retention notices are not public."
      ]
     ],
     "note": "",
     "src": {
      "t": "Section 87, Investigatory Powers Act 2016",
      "u": "https://www.legislation.gov.uk/ukpga/2016/25/section/87"
     }
    },
    {
     "name": "United States",
     "meta": "18 U.S.C. section 2703, subsection (f).",
     "flag": "",
     "fields": [
      [
       "No creation mandate",
       "Section 2703 contains no general obligation on a provider to create or retain records."
      ],
      [
       "Preservation trigger",
       "A provider, upon the request of a governmental entity, shall take all necessary steps to preserve records and other evidence in its possession pending the issuance of a court order or other process."
      ],
      [
       "Duration",
       "Such records shall be retained for a period of 90 days, which shall be extended for an additional 90-day period upon a renewed request by the governmental entity."
      ],
      [
       "Consequence",
       "A preservation letter requires no judicial approval, freezes whatever exists from the moment of receipt, and is typically accompanied by non-disclosure. A US-facing provider cannot promise that nothing will be retained going forward once it has been asked."
      ]
     ],
     "note": "",
     "src": {
      "t": "18 U.S. Code 2703",
      "u": "https://www.law.cornell.edu/uscode/text/18/2703"
     }
    },
    {
     "name": "European Union",
     "meta": "CJEU Grand Chamber, sitting as the full Court, Case C-470/21 La Quadrature du Net and Others, judgment 30 April 2024.",
     "flag": "",
     "fields": [
      [
       "Holding",
       "General and indiscriminate retention of IP addresses is permissible where national legislation imposes retention arrangements that ensure a genuinely watertight separation of the different categories of personal data."
      ],
      [
       "Purpose of the test",
       "So that precise conclusions about private life cannot be drawn."
      ],
      [
       "Effect",
       "A material softening of Tele2 and Watson era doctrine for the single category most relevant to unmasking a VPN user."
      ]
     ],
     "note": "",
     "src": {
      "t": "CJEU Press Release No 75/24, Case C-470/21 La Quadrature du Net and Others",
      "u": "https://curia.europa.eu/site/upload/docs/application/pdf/2024-04/cp240075en.pdf"
     }
    },
    {
     "name": "Switzerland",
     "meta": "Proposed revision of the VUPF and OSCPT surveillance ordinances; public consultation closed 6 May 2025.",
     "flag": "open",
     "fields": [
      [
       "Proposal",
       "Extend identification and retention obligations to derived communication services and mandate six-month metadata retention."
      ],
      [
       "Contested provision",
       "Opponents say it would require providers to build in backdoors or otherwise weaken encryption."
      ],
      [
       "Relevance",
       "This is the jurisdiction several providers cite as their protection."
      ],
      [
       "Status",
       "No outcome recorded in the sources reviewed."
      ]
     ],
     "note": "The characterisation of the encryption provision comes from opponents of the revision rather than from the ordinance text.",
     "src": {
      "t": "Switzerlands Privacy and Encryption Under Attack",
      "u": "https://www.isoc.ch/swiss-surveillance-ordinance-encryption-threat-vupf-oscpt/"
     }
    },
    {
     "name": "Australia",
     "meta": "Mandatory data retention scheme; position stated by the Attorney-General's Department on 5 May 2017.",
     "flag": "open",
     "fields": [
      [
       "Period",
       "Retention runs up to two years."
      ],
      [
       "Coverage",
       "Whether Australian VPN providers are covered has never been resolved."
      ],
      [
       "Official position",
       "A VPN provider falls under the obligations if it meets all three criteria of relevant services. The department declined to clarify further and directed providers to the Office of the Communications Access Co-ordinator."
      ],
      [
       "Evidence of the ambiguity",
       "Two Australian VPN operators reached opposite conclusions about their own obligations."
      ]
     ],
     "note": "",
     "src": {
      "t": "Confusion reigns over whether Aussie VPNs must keep user metadata",
      "u": "https://www.itnews.com.au/news/confusion-reigns-over-whether-aussie-vpns-must-keep-user-metadata-459657"
     }
    },
    {
     "name": "Russia",
     "meta": "Roskomnadzor demand of 28 March 2019.",
     "flag": "",
     "fields": [
      [
       "Demand",
       "Ten VPN providers were required to connect to the FGIS state registry so as to block blacklisted sites for their users: NordVPN, HideMyAss!, Hola VPN, OpenVPN, VyprVPN, ExpressVPN, TorGuard, IPVanish, VPN Unlimited and Kaspersky Secure Connection."
      ],
      [
       "Complied",
       "Kaspersky Secure Connection only."
      ],
      [
       "Refused",
       "NordVPN said compliance is not something that we will consider. TorGuard and HideMyAss! withdrew from Russia."
      ],
      [
       "Character",
       "Compliance demanded, refusal near-universal."
      ]
     ],
     "note": "",
     "src": {
      "t": "Nine Major VPNs Could Get Blocked by Russia in 30 Days",
      "u": "https://www.bleepingcomputer.com/news/security/nine-major-vpns-could-get-blocked-by-russia-in-30-days/"
     }
    }
   ]
  },
  {
   "n": "05",
   "kicker": "ADVERTISING ENFORCEMENT",
   "title": "Regulators punish the privacy claim, not the disclosure, which is why the incentives point the way they do",
   "intro": "These three cases are included because they show where legal consequence actually lands. None of them is a logging case in the sense used in sections 01 and 02: no court or regulator here penalised a provider for handing data to police after promising it held none. All three penalise or allege a misleading privacy representation to consumers. That is the only enforcement route with a documented financial outcome in this report.",
   "paras": [
    "Two of the three produced penalties. The third, the 2017 complaint against Hotspot Shield, has no documented regulatory outcome at all, and is listed here as an allegation rather than a finding."
   ],
   "entries": [
    {
     "name": "Meta and Onavo, Federal Court of Australia",
     "meta": "Judgment 26 July 2023. Australia.",
     "flag": "fine",
     "fields": [
      [
       "Penalty",
       "Facebook Israel Ltd and Onavo Inc penalised 10 million Australian dollars each for conduct liable to mislead."
      ],
      [
       "Marketing verified",
       "Use a free, fast and secure VPN to protect personal information."
      ],
      [
       "Marketing verified",
       "Helps Keep You and Your Data Safe."
      ],
      [
       "Actual collection",
       "Records of every app accessed and time spent using those apps, shared with Meta for commercial purposes including market research and as a business intelligence tool."
      ],
      [
       "Reach",
       "Downloaded over 270,000 times by Australian users between February 2016 and October 2017."
      ],
      [
       "Category",
       "Advertising enforcement, not logging enforcement. The finding is that the privacy representation misled consumers, not that a logging promise was broken under legal process."
      ]
     ],
     "note": "",
     "src": {
      "t": "20m penalty for Meta companies for conduct liable to mislead consumers about use of their data",
      "u": "https://www.accc.gov.au/media-release/20m-penalty-for-meta-companies-for-conduct-liable-to-mislead-consumers-about-use-of-their-data"
     }
    },
    {
     "name": "Avast, US Federal Trade Commission",
     "meta": "Order of 22 February 2024. United States.",
     "flag": "fine",
     "fields": [
      [
       "Penalty",
       "16.5 million dollars and a ban on selling browsing data for advertising purposes."
      ],
      [
       "Conduct",
       "Browsing data collected since at least 2014 and sold via the Jumpshot subsidiary to over 100 third parties between 2014 and 2020."
      ],
      [
       "Deceptive claim identified by the FTC",
       "Block annoying tracking cookies that collect data on your browsing activities, and: shield your privacy. Stop anyone and everyone from getting to your computer."
      ],
      [
       "Scope limit",
       "The FTC press release names browser extensions and antivirus software as the collection mechanisms and does not name a VPN product."
      ],
      [
       "Category",
       "Advertising enforcement, not logging enforcement."
      ]
     ],
     "note": "Avast owned HideMyAss at the time, but no link between the two is verified in the sources reviewed, so this is not treated as a VPN logging case.",
     "src": {
      "t": "FTC Order Will Ban Avast from Selling Browsing Data for Advertising Purposes",
      "u": "https://www.ftc.gov/news-events/news/press-releases/2024/02/ftc-order-will-ban-avast-selling-browsing-data-advertising-purposes-require-it-pay-165-million-over"
     }
    },
    {
     "name": "Hotspot Shield and AnchorFree, complaint to the FTC",
     "meta": "Complaint filed by the Center for Democracy and Technology on 7 August 2017. United States.",
     "flag": "open",
     "fields": [
      [
       "Allegation",
       "Undisclosed data collection, ad injection, JavaScript injection and the use of five or more tracking libraries; collection said to include location data, IP addresses, device identifiers, SSID and BSSID names, MAC addresses and IMEI numbers."
      ],
      [
       "Marketing cited in the complaint",
       "Do not let ISPs monetize your web history: Use Hotspot Shield."
      ],
      [
       "Company response",
       "The Register reported that it could not reach AnchorFree for comment and no formal response is documented in that article."
      ],
      [
       "Status",
       "No FTC enforcement outcome is documented in the sources reviewed. This remains an allegation."
      ],
      [
       "Category",
       "Advertising enforcement, not logging enforcement."
      ]
     ],
     "note": "Unlike the Onavo and Avast entries, no regulator has adjudicated this complaint in the public record reviewed.",
     "src": {
      "t": "Hotspot Shield deceives with false privacy promises, complaint claims",
      "u": "https://www.theregister.com/2017/08/07/hotspot_shield_deceives_with_false_privacy_promises_complaint_claims/"
     }
    }
   ]
  }
 ],
 "gaps": [
  "Whether any provider is currently under a secret order cannot be established. Section 87 retention notices under the UK Investigatory Powers Act are not published, and 18 U.S.C. 2703(f) preservation requests carry no judicial approval and routinely carry non-disclosure; no audit firm has access to sealed process. Every no-logs claim in this report is a claim about the unsealed record only.",
  "Independent confirmation of what was found on seized servers does not exist for ExpressVPN in Turkey, Windscribe in Ukraine, or the February 2026 Dutch seizure. In each case the only account is the provider's own, and no Turkish, Ukrainian or Dutch judicial document setting out the contents has been published. ExpressVPN's statement that the seizure confirmed its no-logs claim is a company assertion about a foreign investigation it was not party to.",
  "There is no verified public figure for how many law enforcement requests consumer VPN providers receive annually, how many are answered with data, or how many are answered with nothing. Some providers publish transparency reports, but they are self-reported, non-uniform and not independently audited, so no industry-wide compliance percentage is quoted anywhere in this report.",
  "Verbatim historical marketing copy could not be verified for several providers: HideMyAss's homepage wording in September 2011, Proton's pre-September 2021 IP logging language, Private Internet Access's marketing wording in 2016, and Mullvad's marketing wording in April 2023. A widely repeated claim that Proton previously stated it does not keep any IP logs appears in secondary commentary but could not be confirmed against a dated original, so it is not quoted.",
  "Outcomes for the individuals concerned are missing from most seizure and takedown cases. The Perfect Privacy Rotterdam seizure was never explained, no individual dispositions are documented for DoubleVPN or VPNLab, the 506 users identified in Operation Saffron have produced no convictions yet in the public record, and the verdict in the Ross Colby trial is not reported in the source reviewed.",
  "Whether the Avast and Jumpshot data collection extended to a VPN product cannot be established. The FTC's February 2024 press release names browser extensions and antivirus software as the collection mechanisms and does not mention a VPN. Avast owned HideMyAss at the time, but no link is verified, so it is not treated here as a VPN logging case.",
  "The status of the February 2026 Dutch seizure of a Windscribe server is unresolved. Dutch police have issued no statement, no warrant has been referenced, and the only account is the company's. It appears in this report as an allegation, not an established fact.",
  "Whether unencrypted private keys of the kind seized from Windscribe's Ukrainian servers were ever used is not in the public record. Windscribe describes four conditions that would have to hold simultaneously for the key to be exploited; whether any of that occurred is unknown."
 ],
 "method": "Assembled from primary and near-primary documents wherever one exists: Department of Justice and Europol press releases, the text of 18 U.S.C. 2703 and section 87 of the Investigatory Powers Act 2016, the CJEU press release for Case C-470/21, published audit reports from Securitum, Deloitte and Assured AB, and providers' own blog statements. Where no primary document is public, contemporaneous reporting from TorrentFreak, The Register, BleepingComputer and Computer Weekly is used and identified as such. Every date, figure and quoted line was checked against the source that carries it, and any figure that could not be verified was dropped and recorded in the gaps rather than softened. This would change if a judicial record of the Turkish, Ukrainian or Dutch seizures were published, if any provider released an audit covering a full server fleet rather than a sample, or if a regulator brought the first enforcement action against a provider for producing data it had promised not to hold.",
 "sources": [
  {
   "t": "HideMyAss defends role in LulzSec hack arrest",
   "u": "https://www.theregister.com/2011/09/26/hidemyass_lulzsec_controversy/"
  },
  {
   "t": "LulzSec Suspect Learns Even HideMyAss.com Has Limits",
   "u": "https://www.darkreading.com/cyber-risk/lulzsec-suspect-learns-even-hidemyass-com-has-limits"
  },
  {
   "t": "Member of LulzSec Hacking Group Sentenced to More Than One Year in Federal Prison",
   "u": "https://www.justice.gov/usao-cdca/pr/member-lulzsec-hacking-group-sentenced-over-year-federal-prison-2011-intrusion-sony"
  },
  {
   "t": "IPVanish No-Logging VPN Led Homeland Security to Comcast User",
   "u": "https://torrentfreak.com/ipvanish-no-logging-vpn-led-homeland-security-to-comcast-user-180505/"
  },
  {
   "t": "No Logs IPVanish Embroiled in Logging Scandal",
   "u": "https://cyberinsider.com/ipvanish-provides-logs-to-authorities/"
  },
  {
   "t": "IPVanish comes clean about no-logging accusations",
   "u": "https://www.techradar.com/vpn/this-vpn-company-comes-clean-about-no-logging-accusations"
  },
  {
   "t": "PureVPN Logs Helped FBI Net Alleged Cyberstalker",
   "u": "https://torrentfreak.com/purevpn-logs-helped-fbi-net-alleged-cyberstalker-171009/"
  },
  {
   "t": "PureVPN Explains How it Helped the FBI Catch a Cyberstalker",
   "u": "https://torrentfreak.com/purevpn-explains-how-it-helped-the-fbi-catch-a-cyberstalker-171016/"
  },
  {
   "t": "Newton Man Sentenced to Over 17 Years in Prison for Extensive Cyberstalking Campaign",
   "u": "https://www.justice.gov/usao-ma/pr/newton-man-sentenced-over-17-years-prison-extensive-cyberstalking-campaign"
  },
  {
   "t": "Report: No-Log VPNs Reveal Users Personal Data and Logs",
   "u": "https://www.vpnmentor.com/blog/cybersecurity/report-free-vpns-leak/"
  },
  {
   "t": "Zero logs VPN exposes millions of logs including user passwords",
   "u": "https://www.comparitech.com/blog/vpn-privacy/ufo-vpn-data-exposure/"
  },
  {
   "t": "Seven no log VPN providers accused of leaking 1.2TB of user logs onto the internet",
   "u": "https://www.theregister.com/2020/07/17/ufo_vpn_database/"
  },
  {
   "t": "ProtonMail logged IP address of French activist after order by Swiss authorities",
   "u": "https://techcrunch.com/2021/09/06/protonmail-logged-ip-address-of-french-activist-after-order-by-swiss-authorities"
  },
  {
   "t": "Proton Mail recovery email leads to arrest of Catalan activist",
   "u": "https://www.techradar.com/computing/cyber-security/proton-mail-hands-data-to-police-again-is-it-still-safe-for-activists"
  },
  {
   "t": "DoubleVPN servers, logs, and account info seized by law enforcement",
   "u": "https://www.bleepingcomputer.com/news/security/doublevpn-servers-logs-and-account-info-seized-by-law-enforcement/"
  },
  {
   "t": "Coordinated action cuts off access to VPN service used by ransomware groups",
   "u": "https://www.europol.europa.eu/media-press/newsroom/news/coordinated-action-cuts-access-to-vpn-service-used-ransomware-groups"
  },
  {
   "t": "Europol shuts down VPN service used by ransomware groups",
   "u": "https://www.bleepingcomputer.com/news/security/europol-shuts-down-vpn-service-used-by-ransomware-groups/"
  },
  {
   "t": "Police op targets VPN service favoured by ransomware gangs",
   "u": "https://www.computerweekly.com/news/366643536/Police-op-targets-VPN-service-favoured-by-ransomware-gangs"
  },
  {
   "t": "Authorities dismantle First VPN, used by ransomware actors",
   "u": "https://www.helpnetsecurity.com/2026/05/21/operation-saffron-first-vpn-takedown/"
  },
  {
   "t": "Europols Operation Saffron takes down First VPN service over ransomware attacks",
   "u": "https://www.tomshardware.com/tech-industry/cyber-security/europols-operation-saffron-takes-down-first-vpn-service-over-ransomware-attacks-33-servers-and-multiple-domains-seized"
  },
  {
   "t": "Police Seize Two Perfect Privacy VPN Servers",
   "u": "https://torrentfreak.com/police-seize-two-perfect-privacy-vpn-servers-160902/"
  },
  {
   "t": "VPN Providers No-Logging Claims Tested in FBI Case",
   "u": "https://torrentfreak.com/vpn-providers-no-logging-claims-tested-in-fbi-case-160312/"
  },
  {
   "t": "Private Internet Access No-Logging Claims Proven True Again in Court",
   "u": "https://torrentfreak.com/private-internet-access-no-logging-claims-proven-true-again-in-court-180606/"
  },
  {
   "t": "ExpressVPN statement on Andrey Karlov investigation",
   "u": "https://www.expressvpn.com/blog/expressvpn-statement-andrey-karlov-investigation/"
  },
  {
   "t": "VPN Server Seized to Investigate Russian Ambassadors Assassination",
   "u": "https://torrentfreak.com/vpn-server-seized-to-investigate-russian-ambassadors-assassination-1171219/"
  },
  {
   "t": "NordVPN safe after a third-party provider breach",
   "u": "https://nordvpn.com/blog/official-response-datacenter-breach/"
  },
  {
   "t": "OVPN Wins Court Battle After Pirate Bay Data Demands Rejected",
   "u": "https://torrentfreak.com/ovpn-wins-court-battle-after-pirate-bay-data-demands-rejected-200911/"
  },
  {
   "t": "OpenVPN Security Improvements and Changes",
   "u": "https://windscribe.com/blog/openvpn-security-improvements-and-changes-7b04ea49222/"
  },
  {
   "t": "Ukrainian authorities seize unencrypted Windscribe VPN servers",
   "u": "https://en.ain.ua/2021/07/28/ukrainian-authorities-seize-windscribe-vpn-servers/"
  },
  {
   "t": "Mullvad VPN was subject to a search warrant. Customer data not compromised",
   "u": "https://mullvad.net/en/blog/2023/4/20/mullvad-vpn-was-subject-to-a-search-warrant-customer-data-not-compromised"
  },
  {
   "t": "Update: The Swedish authorities answered our protocol request",
   "u": "https://mullvad.net/en/blog/2023/5/2/update-the-swedish-authorities-answered-our-protocol-request"
  },
  {
   "t": "Windscribe Wins Legal Battle in Greece Due to No-Logs Policy",
   "u": "https://windscribe.com/blog/windscribe-greek-court-case/"
  },
  {
   "t": "Court Dismisses Criminal Charges Against VPN Executive, Affirms No-Log Policy",
   "u": "https://securityledger.com/2025/04/court-dismisses-criminal-charges-against-vpn-executive-affirms-no-log-policy/"
  },
  {
   "t": "Windscribe alleges warrantless seizure of VPN server by Dutch authorities",
   "u": "https://cyberinsider.com/windscribe-alleges-warrantless-seizure-of-vpn-server-by-dutch-authorities/"
  },
  {
   "t": "Security report: Proton VPN no-logs policy audit",
   "u": "https://www.securitum.com/public-reports/securitum-protonvpn-nologs-2025.pdf"
  },
  {
   "t": "Surfshark B.V. ISAE 3000 Independent Reasonable Assurance Report",
   "u": "https://surfshark.com/wp-content/uploads/2025/06/ISAE_3000-_Report-Surfshark_No_Log_VPN.pdf"
  },
  {
   "t": "NordVPN passes sixth no-logs assurance engagement",
   "u": "https://nordvpn.com/blog/nordvpn-no-logs-assurance-engagement-2025/"
  },
  {
   "t": "ExpressVPNs external auditors confirm no-logs policy as of February",
   "u": "https://www.engadget.com/cybersecurity/vpn/expressvpns-external-auditors-confirm-no-logs-policy-as-of-february-171957335.html"
  },
  {
   "t": "Report: Mullvad VPN relay audit",
   "u": "https://www.assured.se/publications/Assured_Mullvad_relay_server_audit_report_2022.pdf"
  },
  {
   "t": "VPN server audit found no information leakage or logging of customer data",
   "u": "https://mullvad.net/en/blog/2022/6/22/vpn-server-audit-found-no-information-leakage-or-logging-of-customer-data"
  },
  {
   "t": "Internet Impact Brief: India CERT-In Cybersecurity Directions 2022",
   "u": "https://www.internetsociety.org/resources/doc/2022/internet-impact-brief-india-cert-in-cybersecurity-directions-2022/"
  },
  {
   "t": "India plans new VPN law after 2022 rules failed",
   "u": "https://www.medianama.com/2026/07/223-india-new-law-regulate-vpn-providers-2022-rules-failed-report/"
  },
  {
   "t": "Section 87, Investigatory Powers Act 2016",
   "u": "https://www.legislation.gov.uk/ukpga/2016/25/section/87"
  },
  {
   "t": "18 U.S. Code 2703",
   "u": "https://www.law.cornell.edu/uscode/text/18/2703"
  },
  {
   "t": "CJEU Press Release No 75/24, Case C-470/21 La Quadrature du Net and Others",
   "u": "https://curia.europa.eu/site/upload/docs/application/pdf/2024-04/cp240075en.pdf"
  },
  {
   "t": "Switzerlands Privacy and Encryption Under Attack",
   "u": "https://www.isoc.ch/swiss-surveillance-ordinance-encryption-threat-vupf-oscpt/"
  },
  {
   "t": "Confusion reigns over whether Aussie VPNs must keep user metadata",
   "u": "https://www.itnews.com.au/news/confusion-reigns-over-whether-aussie-vpns-must-keep-user-metadata-459657"
  },
  {
   "t": "Nine Major VPNs Could Get Blocked by Russia in 30 Days",
   "u": "https://www.bleepingcomputer.com/news/security/nine-major-vpns-could-get-blocked-by-russia-in-30-days/"
  },
  {
   "t": "BVI Jurisdiction: Why It Matters",
   "u": "https://www.expressvpn.com/blog/bvi-privacy-legislation/"
  },
  {
   "t": "Mutual Legal Assistance Treaties of the United States (April 2022)",
   "u": "https://www.justice.gov/d9/pages/attachments/2022/05/04/mutual-legal-assistance-treaties-of-the-united-states.pdf"
  },
  {
   "t": "20m penalty for Meta companies for conduct liable to mislead consumers about use of their data",
   "u": "https://www.accc.gov.au/media-release/20m-penalty-for-meta-companies-for-conduct-liable-to-mislead-consumers-about-use-of-their-data"
  },
  {
   "t": "FTC Order Will Ban Avast from Selling Browsing Data for Advertising Purposes",
   "u": "https://www.ftc.gov/news-events/news/press-releases/2024/02/ftc-order-will-ban-avast-selling-browsing-data-advertising-purposes-require-it-pay-165-million-over"
  },
  {
   "t": "Hotspot Shield deceives with false privacy promises, complaint claims",
   "u": "https://www.theregister.com/2017/08/07/hotspot_shield_deceives_with_false_privacy_promises_complaint_claims/"
  }
 ]
};
