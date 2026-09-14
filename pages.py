import os
ROOT = os.path.dirname(os.path.abspath(__file__))
def frag(n): return open(os.path.join(ROOT, "src", n + ".html")).read()

def phead(eyebrow, title, lede, flag=False):
    f = ' <span class="flagnote mono" style="margin-left:4px">Illustrative data &middot; concept</span>' if flag else ''
    return f"""<section class="rv" style="padding-bottom:0">
  <div class="wrap">
    <div class="eyebrow mono">{eyebrow}{f}</div>
    <h2>{title}</h2>
    <p class="dim" style="max-width:64ch;margin-top:18px">{lede}</p>
  </div>
</section>
"""

TEASERS = """<section class="rv">
  <div class="wrap">
    <div class="eyebrow mono">Where to go next</div>
    <h2>Four places to start, depending on what you came for</h2>
    <div class="navcards">
      <a class="navcard" href="grades.html">
        <span class="navcard__n mono">01 / Grades</span>
        <span class="navcard__t">How free is the network where you are</span>
        <span class="navcard__d">Twenty-three countries scored on blocking, shutdowns, circumvention and punishment for speech. Move the weights and every grade recomputes.</span>
        <span class="navcard__a mono">Open the explorer &rarr;</span>
      </a>
      <a class="navcard" href="products.html">
        <span class="navcard__n mono">02 / Index</span>
        <span class="navcard__t">What your privacy tools actually do</span>
        <span class="navcard__d">Twelve entries compared on collection, retention, provider access, tracking, defaults and control, with each cell labelled claimed, observed, audited or unknown.</span>
        <span class="navcard__a mono">Open the index &rarr;</span>
      </a>
      <a class="navcard" href="history.html">
        <span class="navcard__n mono">03 / History</span>
        <span class="navcard__t">Eighty years of shutting people up</span>
        <span class="navcard__d">Fifty-nine sourced events from the jamming towers of 1948 to the national blackouts of 2026, read through information freedom rather than politics.</span>
        <span class="navcard__a mono">Open the timeline &rarr;</span>
      </a>
      <a class="navcard" href="research.html">
        <span class="navcard__n mono">04 / Research</span>
        <span class="navcard__t">The promises we are testing first</span>
        <span class="navcard__d">Privacy Claims vs Reality takes no logs, anonymous and deleted, and tests each against what the software and the servers do.</span>
        <span class="navcard__a mono">See the programme &rarr;</span>
      </a>
    </div>
  </div>
</section>
"""

HISTORY_TOP = """<div class="hero">
  <div class="wrap">
    <div class="eyebrow mono">A history of information freedom</div>
    <h1>Every blackout was <span class="soft">rehearsed.</span></h1>
    <p class="lede">Eighty years of censorship, jamming, wiretapping, filtering and network shutdowns, from the transmitter war of 1948 to the national blackouts running now. Fifty-nine entries, each one carrying the source it came from.</p>
    <div class="hero-cta">
      <a class="btn mono" href="#era1">Start in 1945 <span>&rarr;</span></a>
      <button class="chip" type="button" id="keyOnly" aria-pressed="false">Pivotal entries only</button>
    </div>
  </div>
</div>

<section class="rv" style="padding-top:clamp(40px,5vw,64px)">
  <div class="wrap">
    <div class="eyebrow mono">Where it stands now</div>
    <h2>The trend line of the last decade points one way</h2>
    <div class="hstat" id="hstats" data-countgroup></div>

    <div class="chart">
      <div class="chart__head">
        <div><span class="mono" style="font-size:13px;letter-spacing:.06em">Documented internet shutdowns per year</span>
          <div class="mono dim" style="font-size:10px;margin-top:5px">Access Now #KeepItOn, as first reported each year</div></div>
        <a class="hstat__s" href="https://www.accessnow.org/keepiton/" target="_blank" rel="noopener">Access Now &#8599;</a>
      </div>
      <div class="chart__b" id="chart"></div>
      <div class="panel-foot"><span>Counts are revised upward as incidents are confirmed, so later reports cite higher figures for the same years.</span></div>
    </div>

    <div class="eranav" id="eranav"></div>
  </div>
</section>

<div id="eras"></div>

<section class="rv">
  <div class="wrap">
    <div class="eyebrow mono">How this was built</div>
    <h2>Every entry names the source that carries it</h2>
    <p class="dim" style="max-width:64ch;margin-top:18px">Dates and figures were verified against institutional sources rather than secondary summaries, and where a figure could not be verified it was left out instead of approximated. Where a claim is contested the entry says so rather than picking a side, and casualty figures reported during a blackout are attributed to whoever reported them.</p>
    <p class="dim" style="max-width:64ch">This is a reading of the period through one lens. Events appear because of what they changed about the control of information, which means some of the century's gravest crimes sit here only where censorship was the instrument or the cover.</p>
  </div>
</section>
"""


def run(build):
    home = (frag("hero") + frag("mission") + frag("readers") + frag("metrics")
            + frag("tool") + frag("problem") + frag("activities") + TEASERS)
    home = home.replace('<a class="link-q mono" href="#grades">Open the Grade Explorer</a>',
                        '<a class="link-q mono" href="grades.html">Open the Grade Explorer</a>')
    home = home.replace('<a class="featured" href="#index">', '<a class="featured" href="products.html">')
    home = home.replace('<a class="btn mono" href="#grades">See the methodology <span>&rarr;</span></a>', '')
    build("index.html", "Freedom Institute: grades for censorship, tests for privacy products",
          "The Freedom Institute grades country censorship, tests what privacy products actually do, and builds open tools so anyone can repeat the measurement.",
          home,
          rail_items=[("#assess", "Start here"), ("#activities", "What we do"),
                      ("grades.html", "Grade Explorer"), ("products.html", "Product Index"),
                      ("history.html", "History"), ("about.html", "Independence")],
          scripts='<script src="tool.js"></script>')

    grades = phead("Country censorship grades",
                   "A grade is worthless unless you can see what it was built from",
                   "Each country is scored on four axes. A scoring choice is an argument, so move the weights and every grade recomputes. Open any row for the axis detail, the shutdown history, and the evidence log behind it.",
                   flag=True) + frag("grades").replace('<section id="grades" class="rv">', '<section id="grades" class="rv" style="padding-top:36px">')
    grades += """
<div class="scrim" id="scrim"></div>
<aside class="drawer" id="drawer" role="dialog" aria-modal="true" aria-label="Country detail"><div id="drawerInner"></div></aside>
"""
    build("grades.html", "Country grades | Freedom Institute",
          "Country censorship grades scored on blocking, shutdowns, restrictions on circumvention and punishment for online expression.",
          grades, scripts='<script src="grades.js"></script>')

    prods = phead("Privacy Product Index",
                  "Provider claims and observed behaviour are scored separately",
                  "Tools are compared inside a category on data collection, retention, provider access, tracking, privacy defaults and user control. Every cell is labelled claimed, observed, audited or unknown, and the unknowns are printed rather than rounded away.",
                  flag=True) + frag("products").replace('style="padding-top:0"', 'style="padding-top:36px"')
    prods += """
<div class="tray" id="tray">
  <span class="mono" style="color:rgba(255,255,255,.55)">Compare</span>
  <div class="slots" id="slots"></div>
  <button class="go" id="cmpGo" disabled>Open</button>
  <button class="clr" id="cmpClear">Clear</button>
</div>
<div class="cmp" id="cmp" role="dialog" aria-modal="true" aria-label="Compare index entries"><div class="cmp-inner" id="cmpInner"></div></div>
"""
    build("products.html", "Privacy Product Index | Freedom Institute",
          "Privacy tools compared on collection, retention, provider access, tracking, defaults and user control, with every claim labelled by how it was verified.",
          prods, scripts='<script src="products.js"></script>')

    build("history.html", "A history of information freedom, 1945 to now | Freedom Institute",
          "Fifty-nine sourced events in the control of information, from the radio jamming of 1948 to the national internet blackouts running now.",
          HISTORY_TOP,
          scripts='<script src="history-data.js"></script>\n<script src="history.js"></script>')

    research = frag("research").replace('<section id="research" class="rv" style="padding-top:0">',
                                        '<section id="research" class="rv">')
    build("research.html", "Research programme | Freedom Institute",
          "Privacy Claims vs Reality and the reports that follow it: what no logs survives, what deleted means, and what privacy costs a household.",
          research)

    about = frag("independence") + frag("ur") + frag("priors") + frag("photo")
    build("about.html", "Independence and funding | Freedom Institute",
          "How the Freedom Institute is funded, who controls what publishes, and the prior art it builds on.",
          about)

    print("built:", ", ".join(p for p, _, _ in __import__("build").NAV))
