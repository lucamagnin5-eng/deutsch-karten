"""Builds index.html and cartes-allemand.csv from src/app.html and src/cartes.tsv."""
import csv, json, pathlib
root = pathlib.Path(__file__).parent
rows = list(csv.DictReader(open(root / "src/cartes.tsv", encoding="utf-8"), delimiter="\t"))
cards = [[r["fr"], r["de"], [t.strip() for t in r["tags"].split(",") if t.strip()], r["pluriel"], r["participe"]] for r in rows]
html = (root / "src/app.html").read_text(encoding="utf-8").replace("__CARDS__", json.dumps(cards, ensure_ascii=False))
(root / "index.html").write_text(html, encoding="utf-8")
with open(root / "cartes-allemand.csv", "w", encoding="utf-8", newline="") as f:
    w = csv.writer(f)
    w.writerow(["fr", "de", "tags", "pluriel", "participe"])
    for c in cards:
        w.writerow([c[0], c[1], ", ".join(c[2]), c[3], c[4]])
print(len(cards), "cartes")
