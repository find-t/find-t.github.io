import requests
from bs4 import BeautifulSoup
from datetime import datetime
import re
import pandas as pd
import time
 
BASE = "https://www.herzogdemeuron.com"
START = f"{BASE}/recordings/"
 
def get_links():
    links = set()
    page = 1
 
    while True:
        url = f"{START}?page={page}"
        r = requests.get(url)
        soup = BeautifulSoup(r.text, "html.parser")
 
        new_found = False
 
        for a in soup.select("a[href*='/recordings/']"):
            href = a.get("href")
            if href and href != "/recordings/":
                full = BASE + href
                if full not in links:
                    links.add(full)
                    new_found = True
 
        if not new_found:
            break
 
        page += 1
 
    return list(links)
 
 
def parse_date(text):
    text = text.strip()
 
    # exact date
    try:
        return datetime.strptime(text, "%d %B %Y")
    except:
        pass
 
    # range: June – September 2025
    m = re.search(r"([A-Za-z]+)\s*–\s*([A-Za-z]+)\s*(\d{4})", text)
    if m:
        end_month = m.group(2)
        year = m.group(3)
        return datetime.strptime(f"28 {end_month} {year}", "%d %B %Y")
 
    return None
 
 
def scrape():
    rows = []
    links = get_links()
 
    for url in links:
        r = requests.get(url)
        soup = BeautifulSoup(r.text, "html.parser")
 
        title = soup.find("h1").get_text(strip=True)
 
        date_el = soup.find("time") or soup.find("p")
        if not date_el:
            continue
 
        raw = date_el.get_text(strip=True)
        parsed = parse_date(raw)
 
        if parsed:
            rows.append({
                "Title": title,
                "Date Raw": raw,
                "Date Sortable": parsed.strftime("%Y-%m-%d"),
                "URL": url
            })
 
        time.sleep(0.3)
 
    df = pd.DataFrame(rows)
    df = df.sort_values(by="Date Sortable", ascending=False)
 
    df.to_csv("herzogdemeuron_recordings.csv", index=False)
    return df
 
 
df = scrape()
df
