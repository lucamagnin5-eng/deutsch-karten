"""Builds index.html and cartes-allemand.csv from src/app.html and src/parts/*.tsv."""
import csv, glob, json, pathlib
root = pathlib.Path(__file__).parent
# Columns: fr, de, tags (comma separated), pluriel, participe, exemple, traduction
rows = []
for f in sorted(glob.glob(str(root / "src/parts/*.tsv"))):
    rows += list(csv.reader(open(f, encoding="utf-8"), delimiter="\t", quoting=csv.QUOTE_NONE))
cards = [[r[0], r[1], [t.strip() for t in r[2].split(",") if t.strip()], r[3], r[4], r[5], r[6]] for r in rows]
html = (root / "src/app.html").read_text(encoding="utf-8").replace("__CARDS__", json.dumps(cards, ensure_ascii=False))
(root / "index.html").write_text(html, encoding="utf-8")
with open(root / "cartes-allemand.csv", "w", encoding="utf-8", newline="") as f:
    w = csv.writer(f)
    w.writerow(["fr", "de", "tags", "pluriel", "participe", "exemple", "traduction"])
    for c in cards:
        w.writerow([c[0], c[1], ", ".join(c[2]), c[3], c[4], c[5], c[6]])
print(len(cards), "cartes")
