#!/usr/bin/env python3
"""Assembles the Freedom Institute site from shared chrome plus per-page bodies."""
import json, os, re, sys

ROOT = os.path.dirname(os.path.abspath(__file__))

NAV = [
    ("index.html",    "Home",     "Freedom Institute"),
    ("grades.html",   "Grades",   "Country grades"),
    ("products.html", "Index",    "Privacy Product Index"),
    ("history.html",  "History",  "A history of information freedom"),
    ("research.html", "Research", "Research programme"),
    ("about.html",    "About",    "Independence and funding"),
]

MARK = ('<svg class="mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">'
        '<circle cx="20" cy="20" r="19" stroke="currentColor" stroke-width="1.4"/>'
        '<path d="M7 24c0-9 5.8-14 13-14s13 5 13 14" stroke="currentColor" stroke-width="1.4"/>'
        '<path d="M20 6v28M9.5 13.5h21M9.5 30.5h21" stroke="currentColor" stroke-width="1.4" opacity=".35"/></svg>')

FOOT_MARK = ('<svg width="60" height="60" viewBox="0 0 40 40" fill="none" aria-hidden="true">'
             '<circle cx="20" cy="20" r="19" stroke="currentColor" stroke-width="1.2"/>'
             '<path d="M7 24c0-9 5.8-14 13-14s13 5 13 14" stroke="currentColor" stroke-width="1.2"/>'
             '<path d="M20 6v28M9.5 13.5h21M9.5 30.5h21" stroke="currentColor" stroke-width="1.2" opacity=".35"/></svg>')

BASE = "https://haitzupp.github.io/freedom-institute/"


def head(page, title, desc, extra_css=""):
    links = ""
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta name="color-scheme" content="light dark">
<meta property="og:type" content="website">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{BASE}{page}">
<meta property="og:image" content="{BASE}img/patch-panel.jpg">
<meta name="twitter:card" content="summary_large_image">
<script>(function(){{try{{var t=localStorage.getItem("fi-theme")||((window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)?"dark":"light");if(t==="dark")document.documentElement.setAttribute("data-theme","dark")}}catch(e){{}}}})();</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..500;1,6..72,200..400&family=Geist:wght@300;400;500&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="shared.css">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23011614'/%3E%3Cpath d='M8 22c0-8 3-12 8-12s8 4 8 12' stroke='%2397FCE4' stroke-width='2' fill='none'/%3E%3C/svg%3E">
{extra_css}</head>
<body>
<a class="skip mono" href="#top">Skip to content</a>
<div id="progress"></div>
"""


def header(page):
    links = "\n".join(
        '      <a class="mono{on}" href="{h}"{cur}>{label}</a>'.format(
            h=h, label=label,
            on=(" on" if h == page else ""),
            cur=(' aria-current="page"' if h == page else ""))
        for h, label, _ in NAV)
    return f"""<header>
  <div class="wrap nav">
    <a class="brand" href="index.html">
      {MARK}
      <span class="brand-name">Freedom<br><em>Institute</em></span>
    </a>
    <button class="burger mono" id="burger" type="button" aria-controls="menu" aria-expanded="false" aria-label="Menu">Menu</button>
    <nav class="nav-links" id="menu" aria-label="Primary">
{links}
    </nav>
    <div class="nav-meta mono">
      <div><span class="dot"></span>Concept build</div>
      <div><span id="clock">00:00 UTC</span></div>
    </div>
    <button class="themebtn mono" id="theme" type="button" aria-pressed="false" aria-label="Switch to the dark theme">
      <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M8 1.8a6.2 6.2 0 0 0 0 12.4z" fill="currentColor"/></svg>
      <span id="themeLabel">Dark</span>
    </button>
  </div>
</header>
"""


def rail(items, right=""):
    if not items:
        return ""
    body = "\n".join('    <a class="mono" href="{h}"{spy}>{t}</a>'.format(
        h=h, t=t, spy=(' data-spy="%s"' % h[1:] if h.startswith("#") else "")) for h, t in items)
    return f"""<div class="rail">
  <div class="wrap">
{body}
{right}
  </div>
</div>
"""


def footer(scripts=""):
    return f"""<footer>
  <div class="wrap">
    {FOOT_MARK}
    <p class="vision">People deserve to know which tools keep their promises, and which governments break theirs.</p>
    <div class="foot-grid">
      <div><div class="k mono">Institute</div><a href="grades.html">Country grades</a><a href="products.html">Privacy Product Index</a><a href="history.html">History of information freedom</a><a href="research.html">Research programme</a></div>
      <div><div class="k mono">Open source</div><a href="#">Testing harness</a><a href="#">Measurement data</a><a href="#">Scoring methodology</a><a href="#">Changelog</a></div>
      <div><div class="k mono">Contact</div><a href="mailto:research@freedominstitute.org">research@freedominstitute.org</a><a href="mailto:media@freedominstitute.org">media@freedominstitute.org</a><a href="about.html">Funding and governance</a><a href="#">Open roles</a></div>
      <div>
        <div class="k mono">Get the findings first</div>
        <p style="color:rgba(255,255,255,.6);font-size:14px;margin:0">One email when a grade changes or a report lands. Nothing else.</p>
        <form class="signup" id="signup"><input type="email" placeholder="you@domain.com" aria-label="Email address" required><button type="submit">Join</button></form>
      </div>
    </div>
    <div class="colophon mono">
      <span>&copy; 2026 Freedom Institute &middot; Concept</span>
      <span style="display:inline-flex;align-items:center;gap:9px">Organised by <a href="https://ur.xyz" target="_blank" rel="noopener" style="display:inline-flex"><img src="img/ur-network-white.png" alt="URnetwork" width="400" height="58" style="height:11px;width:auto;display:block;opacity:.85"></a> &middot; Independence policy published in full</span>
    </div>
  </div>
</footer>
<div class="toast" id="toast" role="status" aria-live="polite"></div>
<script src="shared.js"></script>
{scripts}</body>
</html>
"""


def build(page, title, desc, body, rail_items=None, rail_right="", scripts="", extra_css=""):
    html = head(page, title, desc, extra_css) + header(page) + rail(rail_items or [], rail_right) \
         + '<main id="top">\n' + body + '\n</main>\n' + footer(scripts)
    open(os.path.join(ROOT, page), "w").write(html)
    return len(html)


if __name__ == "__main__":
    import pages
    pages.run(build)
