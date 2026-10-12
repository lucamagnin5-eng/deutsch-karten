// Leçons A1 et A2 complémentaires.
GRAMMAR.push(
{
  id: "questions", level: "A1",
  title: "Poser des questions",
  sub: "W-Fragen et questions oui / non",
  body: `
<p><b>Question avec mot interrogatif</b> : mot interrogatif + verbe + sujet.</p>
<p><i><b>Wo</b> wohnst du? · <b>Was</b> machst du? · <b>Wann</b> kommt der Zug?</i></p>
<table><tr><th>mot</th><th>sens</th></tr>
<tr><td>wer / wen / wem</td><td>qui (sujet / COD / à qui)</td></tr>
<tr><td>was</td><td>quoi, que</td></tr>
<tr><td>wo / wohin / woher</td><td>où / vers où / d'où</td></tr>
<tr><td>wann · wie lange · wie oft</td><td>quand · combien de temps · combien de fois</td></tr>
<tr><td>warum</td><td>pourquoi</td></tr>
<tr><td>wie · wie viel · wie viele</td><td>comment · combien (quantité) · combien (nombre)</td></tr>
<tr><td>welcher / welche / welches</td><td>quel / quelle</td></tr></table>
<p><b>Question oui / non</b> : le verbe commence la phrase. <i><b>Hast</b> du Zeit?</i></p>`,
  ex: [
    {q: "___ wohnst du? – In Hamburg.", a: ["Wo"], c: ["Wo", "Wohin", "Woher"], fr: "Où habites-tu ? – À Hambourg.", why: "Lieu sans déplacement → wo."},
    {q: "___ kommst du? – Aus Frankreich.", a: ["Woher"], c: ["Wo", "Wohin", "Woher"], fr: "D'où viens-tu ? – De France.", why: "Origine → woher."},
    {q: "___ fährst du am Wochenende? – Nach Wien.", a: ["Wohin"], c: ["Wo", "Wohin", "Woher"], fr: "Où vas-tu ce week-end ? – À Vienne.", why: "Destination → wohin."},
    {q: "___ Geschwister hast du?", a: ["Wie viele"], c: ["Wie viel", "Wie viele", "Wie lange"], fr: "Combien de frères et sœurs as-tu ?", why: "Nombre (pluriel) → wie viele."},
    {q: "___ dauert der Kurs? – Zwei Stunden.", a: ["Wie lange"], c: ["Wann", "Wie lange", "Wie oft"], fr: "Combien de temps dure le cours ? – Deux heures.", why: "Durée → wie lange."},
    {q: "___ Bus fährt zum Bahnhof?", a: ["Welcher"], c: ["Welcher", "Welche", "Welches"], fr: "Quel bus va à la gare ?", why: "der Bus → welcher."},
    {q: "___ ist das? – Das ist mein Kollege.", a: ["Wer"], c: ["Wer", "Was", "Wen"], fr: "Qui est-ce ? – C'est mon collègue.", why: "Personne, sujet → wer."}
  ]
},
{
  id: "pluriel", level: "A1",
  title: "Le pluriel des noms",
  sub: "-e, -er, -n, -s… et les Umlaut",
  body: `
<p>Il n'y a pas une seule règle : apprends le pluriel avec le nom. Mais il y a des tendances fortes.</p>
<table><tr><th>terminaison</th><th>souvent pour</th><th>exemples</th></tr>
<tr><td>-n / -en</td><td>la plupart des féminins</td><td>die Frau → Frauen, die Lampe → Lampen</td></tr>
<tr><td>-nen</td><td>féminins en -in</td><td>die Kollegin → Kolleginnen</td></tr>
<tr><td>-e (¨)</td><td>beaucoup de masculins</td><td>der Tag → Tage, der Zug → Züge</td></tr>
<tr><td>-er (¨)</td><td>beaucoup de neutres courts</td><td>das Kind → Kinder, das Buch → Bücher</td></tr>
<tr><td>– (¨)</td><td>masc./neutres en -er, -el, -en, -chen</td><td>der Lehrer → Lehrer, der Apfel → Äpfel</td></tr>
<tr><td>-s</td><td>mots étrangers, mots en -a, -o, -i</td><td>das Auto → Autos, das Handy → Handys</td></tr></table>
<p>Au pluriel l'article est toujours <b>die</b> (et <b>den</b> + -n au datif).</p>`,
  ex: [
    {q: "eine Frau, zwei ___", a: ["Frauen"], fr: "une femme, deux femmes", why: "Féminin → -en."},
    {q: "eine Kollegin, zwei ___", a: ["Kolleginnen"], fr: "une collègue, deux collègues", why: "-in → -innen."},
    {q: "ein Kind, drei ___", a: ["Kinder"], fr: "un enfant, trois enfants", why: "Neutre court → -er."},
    {q: "ein Zug, zwei ___", a: ["Züge"], fr: "un train, deux trains", why: "Masculin → -e avec Umlaut."},
    {q: "ein Auto, zwei ___", a: ["Autos"], fr: "une voiture, deux voitures", why: "Mot en -o → -s."},
    {q: "ein Lehrer, zwei ___", a: ["Lehrer"], fr: "un professeur, deux professeurs", why: "Masculin en -er → pas de terminaison."},
    {q: "ein Buch, viele ___", a: ["Bücher"], fr: "un livre, beaucoup de livres", why: "Neutre → -er avec Umlaut."}
  ]
},
{
  id: "temps", level: "A1",
  title: "Dire quand : am, um, im…",
  sub: "Les prépositions de temps",
  body: `
<table><tr><th>préposition</th><th>pour</th><th>exemple</th></tr>
<tr><td><b>um</b></td><td>l'heure</td><td>um 8 Uhr</td></tr>
<tr><td><b>am</b></td><td>jours, dates, parties du jour</td><td>am Montag, am 3. Mai, am Abend</td></tr>
<tr><td><b>im</b></td><td>mois, saisons</td><td>im Juli, im Winter</td></tr>
<tr><td>– (rien)</td><td>années</td><td>2024 (ou: im Jahr 2024)</td></tr>
<tr><td><b>von … bis</b></td><td>de … à</td><td>von 9 bis 17 Uhr</td></tr>
<tr><td><b>seit</b> + datif</td><td>depuis (encore vrai)</td><td>seit drei Jahren</td></tr>
<tr><td><b>vor</b> + datif</td><td>il y a</td><td>vor zwei Tagen</td></tr>
<tr><td><b>in</b> + datif</td><td>dans (futur)</td><td>in einer Woche</td></tr>
<tr><td><b>nach / vor</b></td><td>après / avant</td><td>nach der Arbeit, vor dem Essen</td></tr></table>
<p>Attention : <b>in der Nacht</b> (la nuit), mais <b>am</b> Morgen / Abend.</p>`,
  ex: [
    {q: "Das Meeting ist ___ 10 Uhr.", a: ["um"], c: ["um", "am", "im"], fr: "La réunion est à 10 heures.", why: "Heure → um."},
    {q: "Ich habe ___ Freitag frei.", a: ["am"], c: ["um", "am", "im"], fr: "Je suis libre vendredi.", why: "Jour → am."},
    {q: "___ August fahren wir in den Urlaub.", a: ["Im"], c: ["Am", "Im", "Um"], fr: "En août nous partons en vacances.", why: "Mois → im."},
    {q: "Ich wohne ___ zwei Jahren in Berlin.", a: ["seit"], c: ["seit", "vor", "in"], fr: "J'habite à Berlin depuis deux ans.", why: "Toujours vrai aujourd'hui → seit."},
    {q: "Ich bin ___ drei Tagen angekommen.", a: ["vor"], c: ["seit", "vor", "in"], fr: "Je suis arrivé il y a trois jours.", why: "« il y a » → vor."},
    {q: "Der Zug kommt ___ zehn Minuten.", a: ["in"], c: ["seit", "vor", "in"], fr: "Le train arrive dans dix minutes.", why: "« dans » (futur) → in."},
    {q: "Ich arbeite von 9 ___ 17 Uhr.", a: ["bis"], fr: "Je travaille de 9 h à 17 h.", why: "von … bis."}
  ]
},
{
  id: "pronoms", level: "A2",
  title: "Les pronoms personnels",
  sub: "ich, mich, mir…",
  body: `
<table><tr><th>nominatif</th><th>accusatif</th><th>datif</th></tr>
<tr><td>ich</td><td>mich</td><td>mir</td></tr>
<tr><td>du</td><td>dich</td><td>dir</td></tr>
<tr><td>er</td><td>ihn</td><td>ihm</td></tr>
<tr><td>sie</td><td>sie</td><td>ihr</td></tr>
<tr><td>es</td><td>es</td><td>ihm</td></tr>
<tr><td>wir</td><td>uns</td><td>uns</td></tr>
<tr><td>ihr</td><td>euch</td><td>euch</td></tr>
<tr><td>sie / Sie</td><td>sie / Sie</td><td>ihnen / Ihnen</td></tr></table>
<p>Le pronom remplace le nom avec son genre : <i>der Computer → <b>er</b> ist kaputt</i> (pas « es » !).</p>
<p>Avec deux compléments : nom datif avant nom accusatif (<i>Ich gebe <b>dem Chef</b> <b>den Bericht</b></i>), mais pronom accusatif avant pronom datif (<i>Ich gebe <b>ihn ihm</b></i>).</p>`,
  ex: [
    {q: "Wo ist der Drucker? – ___ steht im Flur.", a: ["Er"], c: ["Er", "Es", "Sie"], fr: "Où est l'imprimante ? – Elle est dans le couloir.", why: "der Drucker → er."},
    {q: "Ich rufe ___ morgen an. (toi)", a: ["dich"], c: ["dich", "dir", "du"], fr: "Je t'appelle demain.", why: "anrufen + accusatif → dich."},
    {q: "Ich helfe ___. (lui)", a: ["ihm"], c: ["ihn", "ihm", "er"], fr: "Je l'aide.", why: "helfen + datif → ihm."},
    {q: "Kannst du ___ das erklären? (nous)", a: ["uns"], c: ["uns", "euch", "wir"], fr: "Tu peux nous expliquer ça ?", why: "erklären + datif (à qui) → uns."},
    {q: "Die Wohnung? Ich finde ___ sehr schön.", a: ["sie"], c: ["sie", "ihr", "es"], fr: "L'appartement ? Je le trouve très beau.", why: "die Wohnung, accusatif → sie."},
    {q: "Das Buch? Ich gebe ___ dir morgen.", a: ["es"], c: ["es", "ihm", "ihn"], fr: "Le livre ? Je te le donne demain.", why: "das Buch → es ; pronom accusatif avant pronom datif."},
    {q: "Gefällt ___ die Stadt? (vous, poli)", a: ["Ihnen"], c: ["Sie", "Ihnen", "Ihr"], fr: "La ville vous plaît ?", why: "gefallen + datif → Ihnen."}
  ]
},
{
  id: "adjectifs", level: "A2",
  title: "La terminaison des adjectifs",
  sub: "ein guter Kaffee, der gute Kaffee",
  body: `
<p>Un adjectif <b>devant</b> un nom prend une terminaison. Après le verbe (Der Kaffee ist gut), il n'en prend pas.</p>
<p><b>Après der / die / das</b> : presque toujours <b>-e</b> ou <b>-en</b>.</p>
<table><tr><th></th><th>masc.</th><th>fém.</th><th>neutre</th><th>pluriel</th></tr>
<tr><td>nom.</td><td>der gut<b>e</b></td><td>die gut<b>e</b></td><td>das gut<b>e</b></td><td>die gut<b>en</b></td></tr>
<tr><td>acc.</td><td>den gut<b>en</b></td><td>die gut<b>e</b></td><td>das gut<b>e</b></td><td>die gut<b>en</b></td></tr>
<tr><td>dat.</td><td>dem gut<b>en</b></td><td>der gut<b>en</b></td><td>dem gut<b>en</b></td><td>den gut<b>en</b></td></tr></table>
<p><b>Après ein / kein / mein</b> : l'adjectif montre le genre quand l'article ne le fait pas.</p>
<table><tr><th></th><th>masc.</th><th>fém.</th><th>neutre</th><th>pluriel (kein/mein)</th></tr>
<tr><td>nom.</td><td>ein gut<b>er</b></td><td>eine gut<b>e</b></td><td>ein gut<b>es</b></td><td>meine gut<b>en</b></td></tr>
<tr><td>acc.</td><td>einen gut<b>en</b></td><td>eine gut<b>e</b></td><td>ein gut<b>es</b></td><td>meine gut<b>en</b></td></tr>
<tr><td>dat.</td><td>einem gut<b>en</b></td><td>einer gut<b>en</b></td><td>einem gut<b>en</b></td><td>meinen gut<b>en</b></td></tr></table>
<p><b>Sans article</b> : l'adjectif prend la terminaison de der/die/das (heiß<b>er</b> Kaffee, kalt<b>es</b> Wasser, mit frisch<b>em</b> Brot).</p>`,
  ex: [
    {q: "Das ist ein gut___ Restaurant.", a: ["es"], c: ["e", "es", "er"], fr: "C'est un bon restaurant.", why: "ein + neutre nominatif → -es."},
    {q: "Der neu___ Kollege ist nett.", a: ["e"], c: ["e", "en", "er"], fr: "Le nouveau collègue est sympa.", why: "Après der, nominatif → -e."},
    {q: "Ich habe einen neu___ Laptop.", a: ["en"], c: ["e", "en", "er"], fr: "J'ai un nouvel ordinateur portable.", why: "Masculin accusatif → -en."},
    {q: "Sie wohnt in einer klein___ Wohnung.", a: ["en"], c: ["e", "en", "er"], fr: "Elle habite dans un petit appartement.", why: "Datif → toujours -en."},
    {q: "Ein groß___ Kaffee, bitte!", a: ["er"], c: ["e", "en", "er"], fr: "Un grand café, s'il vous plaît !", why: "ein + masculin nominatif → -er (l'adjectif montre le genre)."},
    {q: "Ich trinke gern kalt___ Wasser.", a: ["es"], c: ["e", "es", "en"], fr: "J'aime boire de l'eau froide.", why: "Sans article, das Wasser → -es."},
    {q: "Die alt___ Häuser sind schön.", a: ["en"], c: ["e", "en", "er"], fr: "Les vieilles maisons sont belles.", why: "Pluriel après die → -en."},
    {q: "Das ist eine gut___ Idee.", a: ["e"], c: ["e", "en", "es"], fr: "C'est une bonne idée.", why: "eine + féminin → -e."}
  ]
},
{
  id: "futur", level: "A2",
  title: "Le futur avec werden",
  sub: "Ich werde … + infinitif",
  body: `
<p>En allemand, on utilise souvent le <b>présent</b> pour le futur, avec un mot de temps : <i>Morgen <b>fahre</b> ich nach Berlin.</i></p>
<p>Le <b>Futur I</b> sert pour les promesses, les prévisions et les suppositions : <b>werden</b> conjugué + <b>infinitif à la fin</b>.</p>
<table><tr><th></th><th>werden</th></tr>
<tr><td>ich</td><td>werde</td></tr><tr><td>du</td><td>wirst</td></tr><tr><td>er / sie</td><td>wird</td></tr>
<tr><td>wir / sie / Sie</td><td>werden</td></tr><tr><td>ihr</td><td>werdet</td></tr></table>
<p><i>Ich <b>werde</b> dich <b>anrufen</b>.</i> · <i>Es <b>wird</b> morgen <b>regnen</b>.</i> · <i>Er <b>wird</b> wohl krank <b>sein</b>.</i> (supposition)</p>
<p>werden seul = devenir : <i>Ich <b>werde</b> Lehrer.</i> (je deviens professeur)</p>`,
  ex: [
    {q: "Ich ___ dich morgen anrufen.", a: ["werde"], c: ["werde", "wird", "werden"], fr: "Je t'appellerai demain.", why: "ich werde."},
    {q: "Es ___ morgen regnen.", a: ["wird"], c: ["werde", "wird", "wirst"], fr: "Il pleuvra demain.", why: "es wird."},
    {q: "___ du nächstes Jahr in Deutschland arbeiten?", a: ["Wirst"], c: ["Wirst", "Wird", "Werdest"], fr: "Travailleras-tu en Allemagne l'an prochain ?", why: "du wirst."},
    {q: "Wir werden das Projekt im Mai ___. (beenden)", a: ["beenden"], fr: "Nous terminerons le projet en mai.", why: "Infinitif à la fin."},
    {q: "Er ist nicht da. Er ___ wohl krank sein.", a: ["wird"], c: ["wird", "ist", "hat"], fr: "Il n'est pas là. Il doit être malade.", why: "Supposition → werden + wohl."},
    {q: "Meine Schwester ___ Ärztin. (devient)", a: ["wird"], c: ["wird", "ist", "werdet"], fr: "Ma sœur devient médecin.", why: "werden seul = devenir."}
  ]
},
{
  id: "adverbes-liens", level: "A2",
  title: "Relier deux phrases : deshalb, trotzdem…",
  sub: "Connecteurs qui prennent la 1re place",
  body: `
<p>Trois familles de connecteurs :</p>
<ul>
<li><b>und, aber, oder, denn, sondern</b> : ne comptent pas, ordre normal. <i>…, <b>aber</b> ich <b>habe</b> keine Zeit.</i></li>
<li><b>deshalb, trotzdem, dann, danach, außerdem, sonst</b> : prennent la 1re place, le verbe suit. <i>…, <b>deshalb bleibe</b> ich zu Hause.</i></li>
<li><b>weil, dass, obwohl, wenn</b>… : verbe à la fin. <i>…, <b>weil</b> ich krank <b>bin</b>.</i></li></ul>
<table><tr><th>mot</th><th>sens</th></tr>
<tr><td>deshalb / deswegen</td><td>c'est pourquoi</td></tr>
<tr><td>trotzdem</td><td>quand même</td></tr>
<tr><td>außerdem</td><td>en plus</td></tr>
<tr><td>sonst</td><td>sinon</td></tr>
<tr><td>sondern</td><td>mais (après une négation)</td></tr></table>`,
  ex: [
    {q: "Ich bin krank, deshalb ___ zu Hause.", a: ["bleibe ich"], c: ["ich bleibe", "bleibe ich"], fr: "Je suis malade, c'est pourquoi je reste à la maison.", why: "deshalb prend la 1re place → verbe, puis sujet."},
    {q: "Es regnet, ___ gehen wir spazieren.", a: ["trotzdem"], c: ["deshalb", "trotzdem", "sonst"], fr: "Il pleut, nous allons quand même nous promener.", why: "Opposition → trotzdem."},
    {q: "Ich trinke keinen Kaffee, ___ Tee.", a: ["sondern"], c: ["aber", "sondern", "oder"], fr: "Je ne bois pas de café, mais du thé.", why: "Après une négation, « mais » de correction → sondern."},
    {q: "Beeil dich, ___ verpasst du den Zug!", a: ["sonst"], c: ["sonst", "deshalb", "dann"], fr: "Dépêche-toi, sinon tu vas rater le train !", why: "sinon → sonst."},
    {q: "Ich habe Hunger, aber ich ___ keine Zeit.", a: ["habe"], c: ["habe", "ich habe"], fr: "J'ai faim, mais je n'ai pas le temps.", why: "aber ne compte pas : ordre normal (ich habe)."},
    {q: "Die Wohnung ist groß. ___ ist sie billig.", a: ["Außerdem"], c: ["Außerdem", "Sondern", "Denn"], fr: "L'appartement est grand. En plus, il n'est pas cher.", why: "En plus → außerdem (verbe ensuite)."}
  ]
}
);
