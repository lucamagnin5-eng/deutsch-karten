// Leçons de grammaire A2. Chaque exercice : q (phrase avec ___), a (réponses acceptées),
// c (choix proposés, facultatif : sinon l'élève écrit), fr (traduction), why (explication).
const GRAMMAR = [
{
  id: "genre",
  title: "Le genre : der, die, das",
  sub: "Masculin, féminin, neutre et pluriel",
  body: `
<p>Chaque nom allemand a un genre. Apprends toujours le nom <b>avec son article</b>.</p>
<table><tr><th></th><th>défini</th><th>indéfini</th></tr>
<tr><td>masculin</td><td>der Tisch</td><td>ein Tisch</td></tr>
<tr><td>féminin</td><td>die Lampe</td><td>eine Lampe</td></tr>
<tr><td>neutre</td><td>das Buch</td><td>ein Buch</td></tr>
<tr><td>pluriel</td><td>die Bücher</td><td>– Bücher</td></tr></table>
<p><b>Astuces fiables :</b></p>
<ul>
<li><b>die</b> : mots en -ung, -heit, -keit, -schaft, -ion, -tät, -ie (die Zeitung, die Information)</li>
<li><b>das</b> : mots en -chen, -lein, -ment, -um, et les infinitifs (das Mädchen, das Dokument, das Essen)</li>
<li><b>der</b> : jours, mois, saisons, mots en -er pour une personne, -ismus, -ling (der Montag, der Lehrer)</li>
<li>Mot composé : c'est le <b>dernier</b> mot qui décide (das Haus + die Tür → <b>die</b> Haustür)</li>
<li>Au pluriel, l'article est toujours <b>die</b>.</li>
</ul>`,
  ex: [
    {q: "___ Zeitung liegt auf dem Tisch.", a: ["Die"], c: ["Der", "Die", "Das"], fr: "Le journal est sur la table.", why: "-ung → toujours féminin."},
    {q: "___ Mädchen spielt im Garten.", a: ["Das"], c: ["Der", "Die", "Das"], fr: "La fille joue dans le jardin.", why: "-chen → toujours neutre, même pour une personne."},
    {q: "___ Montag ist mein Lieblingstag.", a: ["Der"], c: ["Der", "Die", "Das"], fr: "Lundi est mon jour préféré.", why: "Les jours de la semaine sont masculins."},
    {q: "___ Information ist wichtig.", a: ["Die"], c: ["Der", "Die", "Das"], fr: "L'information est importante.", why: "-ion → féminin."},
    {q: "___ Dokument ist im Anhang.", a: ["Das"], c: ["Der", "Die", "Das"], fr: "Le document est en pièce jointe.", why: "-ment → neutre."},
    {q: "___ Haustür ist offen.", a: ["Die"], c: ["Der", "Die", "Das"], fr: "La porte d'entrée est ouverte.", why: "Mot composé : c'est le dernier mot (die Tür) qui donne le genre."},
    {q: "___ Kollegen sind sehr nett.", a: ["Die"], c: ["Der", "Die", "Das"], fr: "Les collègues sont très sympas.", why: "Au pluriel, l'article est toujours die."},
    {q: "Ich habe ___ Frage.", a: ["eine"], c: ["ein", "eine", "einen"], fr: "J'ai une question.", why: "die Frage → eine Frage (accusatif féminin = nominatif)."}
  ]
},
{
  id: "present",
  title: "Le présent",
  sub: "Conjuguer les verbes réguliers et irréguliers",
  body: `
<p>On enlève <b>-en</b> de l'infinitif et on ajoute la terminaison.</p>
<table><tr><th></th><th>machen</th><th>arbeiten</th><th>sein</th><th>haben</th></tr>
<tr><td>ich</td><td>mach<b>e</b></td><td>arbeit<b>e</b></td><td>bin</td><td>habe</td></tr>
<tr><td>du</td><td>mach<b>st</b></td><td>arbeit<b>est</b></td><td>bist</td><td>hast</td></tr>
<tr><td>er / sie / es</td><td>mach<b>t</b></td><td>arbeit<b>et</b></td><td>ist</td><td>hat</td></tr>
<tr><td>wir</td><td>mach<b>en</b></td><td>arbeit<b>en</b></td><td>sind</td><td>haben</td></tr>
<tr><td>ihr</td><td>mach<b>t</b></td><td>arbeit<b>et</b></td><td>seid</td><td>habt</td></tr>
<tr><td>sie / Sie</td><td>mach<b>en</b></td><td>arbeit<b>en</b></td><td>sind</td><td>haben</td></tr></table>
<p>Les verbes en -ten / -den ajoutent un <b>e</b> (du arbeit<b>e</b>st, er find<b>e</b>t).</p>
<p><b>Verbes irréguliers</b> : la voyelle change seulement avec <b>du</b> et <b>er/sie/es</b>.</p>
<ul><li>a → ä : fahren → du fährst, er fährt · schlafen → er schläft</li>
<li>e → i : sprechen → du sprichst, er spricht · geben → er gibt · essen → er isst · nehmen → er nimmt</li>
<li>e → ie : lesen → er liest · sehen → er sieht</li></ul>`,
  ex: [
    {q: "Ich ___ (arbeiten) seit drei Jahren hier.", a: ["arbeite"], fr: "Je travaille ici depuis trois ans.", why: "ich → -e."},
    {q: "Du ___ (arbeiten) zu viel!", a: ["arbeitest"], fr: "Tu travailles trop !", why: "Verbe en -ten : on ajoute un e → arbeitest."},
    {q: "Er ___ (fahren) jeden Tag mit dem Bus.", a: ["fährt"], fr: "Il prend le bus tous les jours.", why: "fahren : a → ä avec er."},
    {q: "Sprichst du Deutsch? – Ja, ich ___ ein bisschen Deutsch.", a: ["spreche"], fr: "Tu parles allemand ? – Oui, je parle un peu allemand.", why: "Le changement e → i ne concerne pas ich."},
    {q: "Was ___ (essen) du gern?", a: ["isst"], fr: "Qu'est-ce que tu aimes manger ?", why: "essen : e → i avec du → isst."},
    {q: "Wir ___ (sein) heute im Büro.", a: ["sind"], c: ["sind", "seid", "ist"], fr: "Nous sommes au bureau aujourd'hui.", why: "sein : wir sind."},
    {q: "___ ihr am Wochenende Zeit?", a: ["Habt"], c: ["Habt", "Hat", "Haben"], fr: "Vous avez le temps ce week-end ?", why: "haben : ihr habt."},
    {q: "Sie ___ (lesen) gern Romane.", a: ["liest", "lesen"], fr: "Elle aime lire des romans. / Ils aiment lire des romans.", why: "sie (elle) liest · sie (ils) lesen : les deux sont justes."},
    {q: "Der Chef ___ (nehmen) einen Kaffee.", a: ["nimmt"], fr: "Le chef prend un café.", why: "nehmen → er nimmt (irrégulier)."}
  ]
},
{
  id: "ordre",
  title: "La place du verbe",
  sub: "Le verbe conjugué en 2e position",
  body: `
<p>Dans une phrase principale, le verbe conjugué est <b>toujours en 2e position</b>. Le sujet peut passer après le verbe.</p>
<table><tr><th>1</th><th>2 (verbe)</th><th>reste</th></tr>
<tr><td>Ich</td><td><b>arbeite</b></td><td>heute im Büro.</td></tr>
<tr><td>Heute</td><td><b>arbeite</b></td><td>ich im Büro.</td></tr>
<tr><td>Im Büro</td><td><b>arbeite</b></td><td>ich heute.</td></tr></table>
<p><b>Questions</b> : avec un mot interrogatif, le verbe est 2e (<i>Wann <b>kommst</b> du?</i>). Sans mot interrogatif, le verbe est <b>1er</b> (<i><b>Kommst</b> du morgen?</i>).</p>
<p>Ordre habituel du reste : <b>temps – manière – lieu</b> (Ich fahre <i>morgen</i> <i>mit dem Zug</i> <i>nach Berlin</i>).</p>`,
  ex: [
    {q: "Morgen ___ nach Berlin.", a: ["fahre ich"], c: ["ich fahre", "fahre ich"], fr: "Demain je vais à Berlin.", why: "Morgen est en 1re position, donc le verbe vient juste après, puis le sujet."},
    {q: "Am Montag ___ ein Meeting.", a: ["habe ich"], c: ["ich habe", "habe ich"], fr: "Lundi j'ai une réunion.", why: "Verbe en 2e position : Am Montag | habe | ich."},
    {q: "___ du morgen Zeit?", a: ["Hast"], c: ["Hast", "Du hast"], fr: "Tu as le temps demain ?", why: "Question sans mot interrogatif : le verbe commence la phrase."},
    {q: "Wann ___?", a: ["beginnt das Meeting"], c: ["das Meeting beginnt", "beginnt das Meeting"], fr: "Quand commence la réunion ?", why: "Mot interrogatif + verbe + sujet."},
    {q: "Ich fahre ___ nach Hamburg.", a: ["morgen mit dem Zug"], c: ["mit dem Zug morgen", "morgen mit dem Zug"], fr: "Je vais à Hambourg en train demain.", why: "Temps (morgen) – manière (mit dem Zug) – lieu (nach Hamburg)."},
    {q: "Leider ___ heute nicht kommen.", a: ["kann ich"], c: ["ich kann", "kann ich"], fr: "Malheureusement je ne peux pas venir aujourd'hui.", why: "Leider occupe la 1re place, le verbe kann suit."},
    {q: "Im Sommer ___ wir ans Meer.", a: ["fahren"], c: ["fahren", "wir fahren"], fr: "L'été, nous allons à la mer.", why: "Im Sommer | fahren | wir …"}
  ]
},
{
  id: "akkusativ",
  title: "L'accusatif",
  sub: "Le complément direct : der → den",
  body: `
<p>Le <b>nominatif</b> est le sujet. L'<b>accusatif</b> est le complément d'objet direct (qui ? quoi ? après le verbe).</p>
<table><tr><th></th><th>nominatif</th><th>accusatif</th></tr>
<tr><td>masculin</td><td>der / ein / kein</td><td><b>den / einen / keinen</b></td></tr>
<tr><td>féminin</td><td>die / eine</td><td>die / eine</td></tr>
<tr><td>neutre</td><td>das / ein</td><td>das / ein</td></tr>
<tr><td>pluriel</td><td>die</td><td>die</td></tr></table>
<p>Bonne nouvelle : <b>seul le masculin change</b>.</p>
<p>Verbes + accusatif très courants : haben, brauchen, sehen, kaufen, suchen, finden, nehmen, besuchen, es gibt.</p>
<p>Prépositions toujours suivies de l'accusatif : <b>durch, für, gegen, ohne, um</b> (für den Kunden, ohne meinen Laptop).</p>
<p>Pronoms : ich → mich, du → dich, er → ihn, sie → sie, wir → uns, ihr → euch, Sie → Sie.</p>`,
  ex: [
    {q: "Ich brauche ___ Computer.", a: ["einen"], c: ["ein", "einen", "einem"], fr: "J'ai besoin d'un ordinateur.", why: "der Computer, complément direct → einen."},
    {q: "Siehst du ___ Bus da?", a: ["den"], c: ["der", "den", "dem"], fr: "Tu vois le bus là-bas ?", why: "der Bus → accusatif den."},
    {q: "Wir suchen ___ Wohnung.", a: ["eine"], c: ["ein", "eine", "einen"], fr: "Nous cherchons un appartement.", why: "die Wohnung : le féminin ne change pas."},
    {q: "Hast du ___ Zeit? (aucun)", a: ["keine"], c: ["kein", "keine", "keinen"], fr: "Tu n'as pas le temps ?", why: "die Zeit → keine."},
    {q: "Ich habe ___ Hunger.", a: ["keinen"], c: ["kein", "keine", "keinen"], fr: "Je n'ai pas faim.", why: "der Hunger → accusatif keinen."},
    {q: "Das Geschenk ist für ___ Chef.", a: ["den"], c: ["der", "den", "dem"], fr: "Le cadeau est pour le chef.", why: "für + accusatif : der → den."},
    {q: "Kennst du Paul? – Ja, ich kenne ___ gut.", a: ["ihn"], c: ["er", "ihn", "ihm"], fr: "Tu connais Paul ? – Oui, je le connais bien.", why: "er → ihn à l'accusatif."},
    {q: "Es gibt hier ___ guten Bäcker.", a: ["einen"], c: ["ein", "einen", "einem"], fr: "Il y a un bon boulanger ici.", why: "es gibt + accusatif, der Bäcker → einen."}
  ]
},
{
  id: "dativ",
  title: "Le datif",
  sub: "Le complément indirect et les prépositions mit, bei, zu…",
  body: `
<p>Le <b>datif</b> répond à « à qui ? » et suit certaines prépositions.</p>
<table><tr><th></th><th>datif défini</th><th>datif indéfini</th></tr>
<tr><td>masculin</td><td><b>dem</b> Mann</td><td><b>einem</b> Mann</td></tr>
<tr><td>féminin</td><td><b>der</b> Frau</td><td><b>einer</b> Frau</td></tr>
<tr><td>neutre</td><td><b>dem</b> Kind</td><td><b>einem</b> Kind</td></tr>
<tr><td>pluriel</td><td><b>den</b> Kollegen<b>n</b></td><td>– Kindern</td></tr></table>
<p>Au pluriel datif, le nom prend un <b>-n</b> (mit den Kinder<b>n</b>), sauf s'il finit déjà par -n ou -s.</p>
<p>Prépositions toujours + datif : <b>aus, bei, mit, nach, seit, von, zu</b> (+ gegenüber).</p>
<p>Contractions : zu dem = <b>zum</b>, zu der = <b>zur</b>, bei dem = <b>beim</b>, von dem = <b>vom</b>.</p>
<p>Verbes + datif : helfen, danken, gefallen, gehören, antworten, schmecken, passen. Pronoms : mir, dir, ihm, ihr, uns, euch, Ihnen.</p>`,
  ex: [
    {q: "Ich fahre mit ___ Zug.", a: ["dem"], c: ["der", "den", "dem"], fr: "Je prends le train.", why: "mit + datif, der Zug → dem."},
    {q: "Ich arbeite bei ___ kleinen Firma.", a: ["einer"], c: ["eine", "einer", "einem"], fr: "Je travaille dans une petite entreprise.", why: "bei + datif, die Firma → einer."},
    {q: "Ich gehe heute ___ Arzt.", a: ["zum"], c: ["zum", "zur", "zu"], fr: "Je vais chez le médecin aujourd'hui.", why: "zu + dem Arzt = zum."},
    {q: "Wie komme ich ___ Bahnhof?", a: ["zum"], c: ["zum", "zur"], fr: "Comment je vais à la gare ?", why: "der Bahnhof → zu dem = zum."},
    {q: "Kannst du ___ helfen? (moi)", a: ["mir"], c: ["mich", "mir"], fr: "Tu peux m'aider ?", why: "helfen + datif → mir."},
    {q: "Die Wohnung gefällt ___ sehr. (à nous)", a: ["uns"], c: ["uns", "unser"], fr: "L'appartement nous plaît beaucoup.", why: "gefallen + datif → uns."},
    {q: "Ich spreche mit den Kunde___.", a: ["n"], fr: "Je parle avec les clients.", why: "Pluriel datif : le nom prend -n (den Kunden)."},
    {q: "Seit ___ Jahr lerne ich Deutsch.", a: ["einem"], c: ["ein", "einem", "einen"], fr: "J'apprends l'allemand depuis un an.", why: "seit + datif, das Jahr → einem."},
    {q: "Ich danke ___ für Ihre Hilfe. (vous, poli)", a: ["Ihnen"], c: ["Sie", "Ihnen", "Ihr"], fr: "Je vous remercie pour votre aide.", why: "danken + datif, Sie → Ihnen."}
  ]
},
{
  id: "wechsel",
  title: "Où ? ou Vers où ?",
  sub: "in, an, auf… + datif ou accusatif",
  body: `
<p>Neuf prépositions changent de cas : <b>in, an, auf, über, unter, vor, hinter, neben, zwischen</b>.</p>
<ul><li><b>Wo?</b> (où, sans déplacement) → <b>datif</b> : Ich bin <b>im</b> Büro. Das Buch liegt <b>auf dem</b> Tisch.</li>
<li><b>Wohin?</b> (vers où, avec déplacement) → <b>accusatif</b> : Ich gehe <b>ins</b> Büro. Ich lege das Buch <b>auf den</b> Tisch.</li></ul>
<p>Contractions : in dem = <b>im</b>, in das = <b>ins</b>, an dem = <b>am</b>, an das = <b>ans</b>.</p>
<p>Verbes qui vont ensemble : <b>liegen / legen</b>, <b>stehen / stellen</b>, <b>sein / gehen</b>. Le premier = Wo? (datif), le second = Wohin? (accusatif).</p>
<p>Pour les villes et pays sans article : <b>nach</b> (Ich fahre nach Berlin) ; pour être dedans : <b>in</b> (Ich wohne in Berlin).</p>`,
  ex: [
    {q: "Ich bin heute ___ Büro.", a: ["im"], c: ["im", "ins"], fr: "Je suis au bureau aujourd'hui.", why: "Wo? → datif : in dem = im."},
    {q: "Morgen gehe ich ___ Büro.", a: ["ins"], c: ["im", "ins"], fr: "Demain je vais au bureau.", why: "Wohin? → accusatif : in das = ins."},
    {q: "Der Schlüssel liegt auf ___ Tisch.", a: ["dem"], c: ["dem", "den"], fr: "La clé est sur la table.", why: "liegen = Wo? → datif."},
    {q: "Ich lege den Schlüssel auf ___ Tisch.", a: ["den"], c: ["dem", "den"], fr: "Je pose la clé sur la table.", why: "legen = Wohin? → accusatif."},
    {q: "Wir fahren am Wochenende ___ Meer.", a: ["ans"], c: ["am", "ans"], fr: "Ce week-end nous allons à la mer.", why: "Déplacement → accusatif : an das = ans."},
    {q: "Das Auto steht vor ___ Haus.", a: ["dem"], c: ["dem", "das"], fr: "La voiture est devant la maison.", why: "stehen = Wo? → datif."},
    {q: "Ich fahre im Sommer ___ Österreich.", a: ["nach"], c: ["nach", "in"], fr: "Cet été je vais en Autriche.", why: "Pays sans article + déplacement → nach."},
    {q: "Hängst du das Bild an ___ Wand?", a: ["die"], c: ["die", "der"], fr: "Tu accroches le tableau au mur ?", why: "Déplacement → accusatif, die Wand reste die."}
  ]
},
{
  id: "modaux",
  title: "Les verbes de modalité",
  sub: "können, müssen, wollen, dürfen, sollen, möchten",
  body: `
<p>Le verbe de modalité est conjugué en 2e position, l'autre verbe va <b>à la fin, à l'infinitif</b>.</p>
<p><i>Ich <b>muss</b> heute länger <b>arbeiten</b>.</i></p>
<table><tr><th></th><th>können</th><th>müssen</th><th>wollen</th><th>dürfen</th><th>sollen</th><th>möchten</th></tr>
<tr><td>ich</td><td>kann</td><td>muss</td><td>will</td><td>darf</td><td>soll</td><td>möchte</td></tr>
<tr><td>du</td><td>kannst</td><td>musst</td><td>willst</td><td>darfst</td><td>sollst</td><td>möchtest</td></tr>
<tr><td>er/sie</td><td>kann</td><td>muss</td><td>will</td><td>darf</td><td>soll</td><td>möchte</td></tr>
<tr><td>wir/sie</td><td>können</td><td>müssen</td><td>wollen</td><td>dürfen</td><td>sollen</td><td>möchten</td></tr></table>
<p>Attention : <b>ich</b> et <b>er</b> ont la même forme, sans -t.</p>
<ul><li>können = pouvoir / savoir faire · müssen = devoir (obligation)</li>
<li>wollen = vouloir · möchten = voudrais (poli)</li>
<li>dürfen = avoir le droit · sollen = devoir (conseil, on me dit de)</li>
<li><b>nicht müssen</b> = ne pas être obligé ; <b>nicht dürfen</b> = ne pas avoir le droit.</li></ul>`,
  ex: [
    {q: "Ich ___ heute nicht kommen. (pouvoir)", a: ["kann"], fr: "Je ne peux pas venir aujourd'hui.", why: "können : ich kann (sans -t)."},
    {q: "Er ___ morgen früh aufstehen. (devoir)", a: ["muss"], fr: "Il doit se lever tôt demain.", why: "müssen : er muss."},
    {q: "Hier ___ man nicht rauchen.", a: ["darf"], c: ["muss", "darf", "will"], fr: "Ici on n'a pas le droit de fumer.", why: "Interdiction → nicht dürfen."},
    {q: "Du ___ nicht kommen, das Meeting ist online.", a: ["musst"], c: ["musst", "darfst"], fr: "Tu n'es pas obligé de venir, la réunion est en ligne.", why: "Pas d'obligation → nicht müssen."},
    {q: "Ich möchte einen Kaffee ___.", a: ["trinken"], c: ["trinken", "trinke", "getrunken"], fr: "Je voudrais boire un café.", why: "L'autre verbe va à la fin, à l'infinitif."},
    {q: "___ du Deutsch sprechen? – Ja, ein bisschen.", a: ["Kannst"], c: ["Kannst", "Kann", "Könnt"], fr: "Tu sais parler allemand ? – Oui, un peu.", why: "können : du kannst."},
    {q: "Der Arzt sagt, ich ___ mehr Sport machen.", a: ["soll"], c: ["soll", "will", "darf"], fr: "Le médecin dit que je devrais faire plus de sport.", why: "Conseil de quelqu'un d'autre → sollen."},
    {q: "Wir ___ im Sommer nach Italien fahren. (vouloir)", a: ["wollen"], fr: "Nous voulons aller en Italie cet été.", why: "wollen : wir wollen."}
  ]
},
{
  id: "trennbar",
  title: "Les verbes à particule",
  sub: "anrufen → Ich rufe dich an",
  body: `
<p>Beaucoup de verbes ont une particule séparable : <b>an</b>rufen, <b>auf</b>stehen, <b>ein</b>kaufen, <b>mit</b>kommen, <b>an</b>fangen, <b>aus</b>füllen…</p>
<p>Au présent, la particule part <b>à la fin de la phrase</b> :</p>
<p><i>Ich <b>rufe</b> dich morgen <b>an</b>.</i> · <i>Wann <b>fängt</b> der Kurs <b>an</b>?</i></p>
<p>Avec un verbe de modalité, le verbe reste entier à la fin : <i>Ich muss dich morgen <b>anrufen</b>.</i></p>
<p>Au participe passé, <b>ge</b> se met entre la particule et le verbe : an<b>ge</b>rufen, auf<b>ge</b>standen, ein<b>ge</b>kauft.</p>
<p>Particules <b>inséparables</b> (pas de séparation, pas de ge-) : be-, ver-, er-, ent-, ge-, zer-, emp-. Ex. : bezahlen → bezahlt, verstehen → verstanden.</p>`,
  ex: [
    {q: "Ich ___ dich heute Abend ___. (anrufen)", a: ["rufe an", "rufe ... an"], c: ["rufe … an", "anrufe …", "rufe … anrufen"], fr: "Je t'appelle ce soir.", why: "Verbe conjugué en 2e position, particule à la fin."},
    {q: "Wann ___ du morgen ___? (aufstehen)", a: ["stehst auf"], c: ["stehst … auf", "aufstehst …"], fr: "À quelle heure tu te lèves demain ?", why: "stehen en 2e position, auf à la fin."},
    {q: "Kommst du heute Abend ___?", a: ["mit"], fr: "Tu viens avec nous ce soir ?", why: "mitkommen → particule mit à la fin."},
    {q: "Ich muss noch ___. (einkaufen)", a: ["einkaufen"], c: ["einkaufen", "kaufen ein"], fr: "Je dois encore faire les courses.", why: "Avec müssen, le verbe reste entier à la fin."},
    {q: "Ich habe dich gestern ___. (anrufen)", a: ["angerufen"], fr: "Je t'ai appelé hier.", why: "Participe : an + ge + rufen."},
    {q: "Wir haben schon ___. (bezahlen)", a: ["bezahlt"], c: ["bezahlt", "gebezahlt", "begezahlt"], fr: "Nous avons déjà payé.", why: "be- est inséparable : pas de ge-."},
    {q: "Der Kurs fängt um 18 Uhr ___.", a: ["an"], fr: "Le cours commence à 18 heures.", why: "anfangen → an à la fin."},
    {q: "Bitte füllen Sie das Formular ___.", a: ["aus"], fr: "Veuillez remplir le formulaire.", why: "ausfüllen → aus à la fin."}
  ]
},
{
  id: "perfekt",
  title: "Le passé composé (Perfekt)",
  sub: "haben ou sein + participe passé",
  body: `
<p>À l'oral, on raconte le passé avec le <b>Perfekt</b> : <b>haben</b> ou <b>sein</b> conjugué en 2e position + <b>participe passé à la fin</b>.</p>
<p><i>Ich <b>habe</b> gestern lange <b>gearbeitet</b>.</i> · <i>Wir <b>sind</b> nach Wien <b>gefahren</b>.</i></p>
<p><b>sein</b> pour : les déplacements (gehen, fahren, fliegen, kommen) et les changements d'état (aufstehen, einschlafen), plus <b>sein</b> et <b>bleiben</b>. Tout le reste : <b>haben</b>.</p>
<table><tr><th>type</th><th>forme</th><th>exemples</th></tr>
<tr><td>régulier</td><td>ge…t</td><td>machen → gemacht, kaufen → gekauft, arbeiten → gearbeitet</td></tr>
<tr><td>irrégulier</td><td>ge…en</td><td>sehen → gesehen, fahren → gefahren, trinken → getrunken</td></tr>
<tr><td>-ieren</td><td>…t (sans ge)</td><td>telefonieren → telefoniert</td></tr>
<tr><td>inséparable</td><td>sans ge</td><td>besuchen → besucht, vergessen → vergessen</td></tr></table>`,
  ex: [
    {q: "Gestern ___ ich lange gearbeitet.", a: ["habe"], c: ["habe", "bin"], fr: "Hier j'ai travaillé longtemps.", why: "arbeiten → haben."},
    {q: "Wir ___ am Wochenende nach München gefahren.", a: ["sind"], c: ["haben", "sind"], fr: "Ce week-end nous sommes allés à Munich.", why: "fahren = déplacement → sein."},
    {q: "Hast du den Film ___? (sehen)", a: ["gesehen"], fr: "Tu as vu le film ?", why: "sehen est irrégulier → gesehen."},
    {q: "Ich habe ein neues Handy ___. (kaufen)", a: ["gekauft"], fr: "J'ai acheté un nouveau portable.", why: "Régulier : ge-kauf-t."},
    {q: "Er ___ heute um sechs aufgestanden.", a: ["ist"], c: ["hat", "ist"], fr: "Il s'est levé à six heures aujourd'hui.", why: "aufstehen = changement d'état → sein."},
    {q: "Wir haben mit dem Kunden ___. (telefonieren)", a: ["telefoniert"], c: ["telefoniert", "getelefoniert"], fr: "Nous avons téléphoné au client.", why: "-ieren : pas de ge-."},
    {q: "Ich habe meinen Schlüssel ___. (vergessen)", a: ["vergessen"], fr: "J'ai oublié ma clé.", why: "ver- est inséparable : vergessen, sans ge-."},
    {q: "Was ___ du am Wochenende gemacht?", a: ["hast"], c: ["hast", "bist"], fr: "Qu'est-ce que tu as fait ce week-end ?", why: "machen → haben."},
    {q: "Sie ist zwei Wochen in Spanien ___. (bleiben)", a: ["geblieben"], fr: "Elle est restée deux semaines en Espagne.", why: "bleiben → ist geblieben."}
  ]
},
{
  id: "praeteritum",
  title: "Le passé de sein, haben et des modaux",
  sub: "ich war, ich hatte, ich konnte…",
  body: `
<p>Pour <b>sein</b>, <b>haben</b> et les <b>verbes de modalité</b>, on utilise surtout le prétérit, même à l'oral.</p>
<table><tr><th></th><th>sein</th><th>haben</th><th>können</th><th>müssen</th><th>wollen</th></tr>
<tr><td>ich</td><td>war</td><td>hatte</td><td>konnte</td><td>musste</td><td>wollte</td></tr>
<tr><td>du</td><td>warst</td><td>hattest</td><td>konntest</td><td>musstest</td><td>wolltest</td></tr>
<tr><td>er/sie</td><td>war</td><td>hatte</td><td>konnte</td><td>musste</td><td>wollte</td></tr>
<tr><td>wir/sie</td><td>waren</td><td>hatten</td><td>konnten</td><td>mussten</td><td>wollten</td></tr>
<tr><td>ihr</td><td>wart</td><td>hattet</td><td>konntet</td><td>musstet</td><td>wolltet</td></tr></table>
<p>Comme au présent des modaux, <b>ich</b> et <b>er</b> ont la même forme. Il n'y a pas d'Umlaut au prétérit des modaux (können → konnte).</p>
<p>Expression utile : <b>es gab</b> = il y avait.</p>`,
  ex: [
    {q: "Gestern ___ ich sehr müde.", a: ["war"], c: ["war", "hatte", "bin"], fr: "Hier j'étais très fatigué.", why: "sein → ich war."},
    {q: "Wir ___ keine Zeit.", a: ["hatten"], c: ["hatten", "waren", "hattet"], fr: "Nous n'avions pas le temps.", why: "haben → wir hatten."},
    {q: "Ich ___ nicht kommen, ich war krank. (pouvoir)", a: ["konnte"], fr: "Je n'ai pas pu venir, j'étais malade.", why: "können → ich konnte (pas d'Umlaut)."},
    {q: "Er ___ gestern länger arbeiten. (devoir)", a: ["musste"], fr: "Hier il a dû travailler plus tard.", why: "müssen → er musste."},
    {q: "Wo ___ du im Urlaub?", a: ["warst"], c: ["war", "warst", "wart"], fr: "Où étais-tu en vacances ?", why: "sein → du warst."},
    {q: "___ ihr gestern im Kino?", a: ["Wart"], c: ["War", "Wart", "Waren"], fr: "Vous étiez au cinéma hier ?", why: "sein → ihr wart."},
    {q: "Im Hotel ___ es kein WLAN.", a: ["gab"], c: ["gab", "war", "hatte"], fr: "À l'hôtel il n'y avait pas de wifi.", why: "es gibt → es gab."},
    {q: "Sie ___ eigentlich Ärztin werden. (vouloir)", a: ["wollte"], fr: "En fait, elle voulait devenir médecin.", why: "wollen → sie wollte."}
  ]
},
{
  id: "nebensatz",
  title: "Les subordonnées",
  sub: "weil, dass, wenn, ob : le verbe à la fin",
  body: `
<p>Après <b>weil, dass, wenn, ob, als, obwohl, damit, bevor</b>…, le verbe conjugué va <b>à la fin</b> de la subordonnée.</p>
<p><i>Ich komme nicht, <b>weil</b> ich krank <b>bin</b>.</i></p>
<p><i>Ich glaube, <b>dass</b> er heute im Büro <b>ist</b>.</i></p>
<p>Avec un modal ou au Perfekt, le verbe conjugué est tout à la fin : <i>…, weil ich arbeiten <b>muss</b>.</i> · <i>…, dass er angerufen <b>hat</b>.</i></p>
<p>Si la subordonnée vient <b>en premier</b>, la principale commence par le verbe : <i>Wenn ich Zeit habe, <b>komme</b> ich.</i></p>
<p>Ne confonds pas : <b>weil</b> (verbe à la fin) et <b>denn</b> (ordre normal) veulent dire « parce que / car ».</p>`,
  ex: [
    {q: "Ich komme nicht, weil ich ___.", a: ["krank bin"], c: ["bin krank", "krank bin"], fr: "Je ne viens pas parce que je suis malade.", why: "Après weil, verbe à la fin."},
    {q: "Ich glaube, dass der Zug ___.", a: ["Verspätung hat"], c: ["hat Verspätung", "Verspätung hat"], fr: "Je crois que le train a du retard.", why: "dass → verbe à la fin."},
    {q: "Wenn ich Zeit habe, ___ dich an.", a: ["rufe ich"], c: ["ich rufe", "rufe ich"], fr: "Si j'ai le temps, je t'appelle.", why: "Subordonnée en premier → la principale commence par le verbe."},
    {q: "Weißt du, ___ das Büro morgen offen ist?", a: ["ob"], c: ["ob", "wenn", "dass"], fr: "Tu sais si le bureau est ouvert demain ?", why: "« si » dans une question indirecte → ob."},
    {q: "Ich bleibe zu Hause, weil ich arbeiten ___.", a: ["muss"], fr: "Je reste à la maison parce que je dois travailler.", why: "Le modal conjugué va tout à la fin."},
    {q: "Er sagt, dass er die E-Mail geschickt ___.", a: ["hat"], fr: "Il dit qu'il a envoyé l'e-mail.", why: "Perfekt en subordonnée : l'auxiliaire va tout à la fin."},
    {q: "Ich nehme ein Taxi, ___ es ist schon spät.", a: ["denn"], c: ["weil", "denn"], fr: "Je prends un taxi, car il est déjà tard.", why: "Ordre normal après la virgule (es ist) → denn."},
    {q: "___ es regnet, gehen wir spazieren.", a: ["Obwohl"], c: ["Weil", "Obwohl", "Wenn"], fr: "Bien qu'il pleuve, nous allons nous promener.", why: "Opposition → obwohl."}
  ]
},
{
  id: "negation",
  title: "La négation : nicht ou kein",
  sub: "Dire non correctement",
  body: `
<p><b>kein</b> remplace <b>ein</b> ou l'absence d'article devant un nom. Il se décline comme ein (kein, keine, keinen, keinem).</p>
<p><i>Ich habe <b>kein</b> Auto. · Ich habe <b>keine</b> Zeit. · Ich trinke <b>keinen</b> Kaffee.</i></p>
<p><b>nicht</b> nie tout le reste : un verbe, un adjectif, un nom avec der/die/das ou un possessif, un adverbe.</p>
<p><i>Ich arbeite heute <b>nicht</b>. · Das ist <b>nicht</b> teuer. · Das ist <b>nicht</b> mein Handy.</i></p>
<p>Place de nicht : à la fin pour nier toute la phrase, ou juste avant l'élément nié (adjectif, lieu, infinitif, particule).</p>
<p>Pour répondre « si » à une question négative : <b>Doch!</b> (Kommst du nicht? – Doch!)</p>`,
  ex: [
    {q: "Ich habe ___ Auto.", a: ["kein"], c: ["nicht", "kein", "keine"], fr: "Je n'ai pas de voiture.", why: "ein Auto → kein Auto."},
    {q: "Ich habe heute ___ Zeit.", a: ["keine"], c: ["nicht", "kein", "keine"], fr: "Je n'ai pas le temps aujourd'hui.", why: "Zeit (die, sans article) → keine."},
    {q: "Das Hotel ist ___ teuer.", a: ["nicht"], c: ["nicht", "kein"], fr: "L'hôtel n'est pas cher.", why: "Adjectif → nicht."},
    {q: "Das ist ___ mein Schlüssel.", a: ["nicht"], c: ["nicht", "kein"], fr: "Ce n'est pas ma clé.", why: "Nom avec possessif → nicht."},
    {q: "Ich trinke ___ Kaffee.", a: ["keinen"], c: ["kein", "keinen", "nicht"], fr: "Je ne bois pas de café.", why: "der Kaffee, accusatif → keinen."},
    {q: "Er kommt heute ___.", a: ["nicht"], c: ["nicht", "kein"], fr: "Il ne vient pas aujourd'hui.", why: "On nie le verbe → nicht à la fin."},
    {q: "Hast du keinen Hunger? – ___, ich habe großen Hunger!", a: ["Doch"], c: ["Ja", "Doch", "Nein"], fr: "Tu n'as pas faim ? – Si, j'ai très faim !", why: "« Si » après une question négative → Doch."},
    {q: "Wir haben ___ Kinder.", a: ["keine"], c: ["kein", "keine", "nicht"], fr: "Nous n'avons pas d'enfants.", why: "Pluriel sans article → keine."}
  ]
},
{
  id: "possessifs",
  title: "Les possessifs",
  sub: "mein, dein, sein, ihr, unser, Ihr",
  body: `
<table><tr><th>personne</th><th>possessif</th><th>exemple</th></tr>
<tr><td>ich</td><td>mein</td><td>mein Chef</td></tr>
<tr><td>du</td><td>dein</td><td>dein Büro</td></tr>
<tr><td>er / es</td><td>sein</td><td>sein Auto (son auto, à lui)</td></tr>
<tr><td>sie (elle)</td><td>ihr</td><td>ihr Auto (son auto, à elle)</td></tr>
<tr><td>wir</td><td>unser</td><td>unser Team</td></tr>
<tr><td>ihr</td><td>euer</td><td>eure Wohnung</td></tr>
<tr><td>sie (ils) / Sie</td><td>ihr / Ihr</td><td>ihr Haus / Ihr Termin</td></tr></table>
<p>Ils prennent les mêmes terminaisons que <b>ein</b> : mein Chef, mein<b>e</b> Chefin, mein<b>en</b> Chef (accusatif), mein<b>em</b> Chef (datif), mein<b>e</b> Kollegen (pluriel).</p>
<p>Attention : « son / sa » dépend du <b>possesseur</b> : sein (à lui), ihr (à elle).</p>`,
  ex: [
    {q: "Das ist ___ Kollegin Anna. (ma)", a: ["meine"], c: ["mein", "meine", "meinen"], fr: "Voici ma collègue Anna.", why: "die Kollegin → meine."},
    {q: "Paul sucht ___ Schlüssel. (son, à lui)", a: ["seinen"], c: ["sein", "seinen", "ihren"], fr: "Paul cherche sa clé.", why: "À lui → sein ; der Schlüssel à l'accusatif → seinen."},
    {q: "Anna ruft ___ Mutter an. (sa, à elle)", a: ["ihre"], c: ["seine", "ihre", "ihr"], fr: "Anna appelle sa mère.", why: "À elle → ihr ; die Mutter → ihre."},
    {q: "___ Team ist sehr klein. (notre)", a: ["Unser"], c: ["Unser", "Unsere", "Euer"], fr: "Notre équipe est très petite.", why: "das Team → unser."},
    {q: "Wie ist ___ Name? (votre, poli)", a: ["Ihr"], c: ["Ihr", "Ihre", "dein"], fr: "Quel est votre nom ?", why: "Poli → Ihr ; der Name → Ihr."},
    {q: "Ich fahre mit ___ Auto. (mon)", a: ["meinem"], c: ["mein", "meinen", "meinem"], fr: "Je prends ma voiture.", why: "mit + datif, das Auto → meinem."},
    {q: "Wo sind ___ Kinder? (tes)", a: ["deine"], c: ["dein", "deine", "deinen"], fr: "Où sont tes enfants ?", why: "Pluriel → deine."}
  ]
},
{
  id: "comparatif",
  title: "Comparer",
  sub: "größer als, so groß wie, am größten",
  body: `
<ul><li><b>Égalité</b> : so + adjectif + <b>wie</b> → Berlin ist <i>so groß wie</i> Paris.</li>
<li><b>Comparatif</b> : adjectif + <b>-er</b> + <b>als</b> → Der Zug ist <i>schneller als</i> der Bus.</li>
<li><b>Superlatif</b> : <b>am</b> + adjectif + <b>-sten</b> → Das Flugzeug ist <i>am schnellsten</i>.</li></ul>
<p>Les adjectifs courts prennent souvent un Umlaut : alt → <b>ä</b>lter, groß → gr<b>ö</b>ßer, jung → j<b>ü</b>nger, warm → w<b>ä</b>rmer.</p>
<table><tr><th>adjectif</th><th>comparatif</th><th>superlatif</th></tr>
<tr><td>gut</td><td>besser</td><td>am besten</td></tr>
<tr><td>viel</td><td>mehr</td><td>am meisten</td></tr>
<tr><td>gern</td><td>lieber</td><td>am liebsten</td></tr>
<tr><td>hoch</td><td>höher</td><td>am höchsten</td></tr></table>
<p>Adjectifs en -t, -d, -z, -ß : am ält<b>e</b>sten, am heiß<b>e</b>sten.</p>`,
  ex: [
    {q: "Der Zug ist schneller ___ der Bus.", a: ["als"], c: ["als", "wie"], fr: "Le train est plus rapide que le bus.", why: "Comparatif + als."},
    {q: "Mein Bruder ist so alt ___ ich.", a: ["wie"], c: ["als", "wie"], fr: "Mon frère a le même âge que moi.", why: "so … wie = aussi … que."},
    {q: "Heute geht es mir ___ als gestern. (gut)", a: ["besser"], fr: "Aujourd'hui je vais mieux qu'hier.", why: "gut → besser (irrégulier)."},
    {q: "Ich trinke ___ Tee als Kaffee. (gern)", a: ["lieber"], fr: "Je préfère le thé au café.", why: "gern → lieber."},
    {q: "Meine Schwester ist ___ als ich. (jung)", a: ["jünger"], fr: "Ma sœur est plus jeune que moi.", why: "jung → jünger (avec Umlaut)."},
    {q: "Im August ist es am ___. (heiß)", a: ["heißesten"], fr: "C'est en août qu'il fait le plus chaud.", why: "heiß → am heißesten (-esten après ß)."},
    {q: "Was machst du am ___? (gern)", a: ["liebsten"], fr: "Qu'est-ce que tu préfères faire ?", why: "gern → am liebsten."},
    {q: "München ist ___ als Köln. (teuer)", a: ["teurer"], fr: "Munich est plus cher que Cologne.", why: "teuer → teurer (le e de -er tombe)."}
  ]
},
{
  id: "reflexifs",
  title: "Les verbes réfléchis",
  sub: "sich freuen, sich treffen, sich interessieren für…",
  body: `
<p>Un verbe réfléchi s'utilise avec un pronom réfléchi :</p>
<table><tr><th>sujet</th><th>pronom</th><th>exemple</th></tr>
<tr><td>ich</td><td>mich</td><td>Ich freue <b>mich</b>.</td></tr>
<tr><td>du</td><td>dich</td><td>Du freust <b>dich</b>.</td></tr>
<tr><td>er / sie / es</td><td>sich</td><td>Er freut <b>sich</b>.</td></tr>
<tr><td>wir</td><td>uns</td><td>Wir freuen <b>uns</b>.</td></tr>
<tr><td>ihr</td><td>euch</td><td>Ihr freut <b>euch</b>.</td></tr>
<tr><td>sie / Sie</td><td>sich</td><td>Sie freuen <b>sich</b>.</td></tr></table>
<p>Beaucoup ont une <b>préposition fixe</b> à apprendre avec le verbe :</p>
<ul><li>sich freuen <b>auf</b> + acc. (à l'avance) / <b>über</b> + acc. (ce qu'on a)</li>
<li>sich interessieren <b>für</b> · sich erinnern <b>an</b> · sich kümmern <b>um</b> · sich bewerben <b>um / bei</b> · sich ärgern <b>über</b></li></ul>
<p>Au Perfekt, ils prennent <b>haben</b> : Ich habe mich gefreut.</p>`,
  ex: [
    {q: "Ich freue ___ auf das Wochenende.", a: ["mich"], c: ["mich", "mir", "sich"], fr: "J'ai hâte d'être au week-end.", why: "ich → mich."},
    {q: "Wir treffen ___ um acht vor dem Kino.", a: ["uns"], c: ["uns", "sich", "euch"], fr: "On se retrouve à huit heures devant le cinéma.", why: "wir → uns."},
    {q: "Interessierst du ___ für Fußball?", a: ["dich"], c: ["dich", "dir", "sich"], fr: "Tu t'intéresses au foot ?", why: "du → dich."},
    {q: "Er hat ___ bei Siemens beworben.", a: ["sich"], c: ["sich", "ihn", "ihm"], fr: "Il a postulé chez Siemens.", why: "er → sich."},
    {q: "Ich interessiere mich ___ Geschichte.", a: ["für"], c: ["für", "an", "auf"], fr: "Je m'intéresse à l'histoire.", why: "sich interessieren für."},
    {q: "Erinnerst du dich ___ unseren ersten Tag?", a: ["an"], c: ["an", "auf", "über"], fr: "Tu te souviens de notre premier jour ?", why: "sich erinnern an."},
    {q: "Ich kümmere mich ___ den Kunden.", a: ["um"], c: ["um", "für", "an"], fr: "Je m'occupe du client.", why: "sich kümmern um."},
    {q: "Freut ihr ___ auf den Urlaub?", a: ["euch"], c: ["euch", "sich", "uns"], fr: "Vous avez hâte d'être en vacances ?", why: "ihr → euch."}
  ]
},
{
  id: "politesse",
  title: "Demander poliment",
  sub: "Könnten Sie…? Ich hätte gern… Ich würde gern…",
  body: `
<p>Pour être poli (au travail, au restaurant), on utilise le <b>Konjunktiv II</b> :</p>
<table><tr><th>forme</th><th>sens</th><th>exemple</th></tr>
<tr><td>Könnten Sie …?</td><td>Pourriez-vous… ?</td><td>Könnten Sie mir helfen?</td></tr>
<tr><td>Ich hätte gern …</td><td>Je voudrais (avoir)…</td><td>Ich hätte gern ein Wasser.</td></tr>
<tr><td>Ich würde gern …</td><td>J'aimerais (faire)…</td><td>Ich würde gern früher gehen.</td></tr>
<tr><td>Wäre es möglich, …?</td><td>Serait-il possible… ?</td><td>Wäre es möglich, den Termin zu verschieben?</td></tr>
<tr><td>Du solltest …</td><td>Tu devrais…</td><td>Du solltest zum Arzt gehen.</td></tr></table>
<p><b>würde</b> + infinitif à la fin : Ich <b>würde</b> gern mit Ihnen <b>sprechen</b>.</p>
<p>Conjugaison : ich würde, du würdest, er würde, wir würden · ich könnte, du könntest, Sie könnten · ich hätte, du hättest, wir hätten.</p>`,
  ex: [
    {q: "___ Sie mir bitte die Datei schicken?", a: ["Könnten"], c: ["Könnten", "Hätten", "Würden"], fr: "Pourriez-vous m'envoyer le fichier ?", why: "Pourriez-vous → Könnten Sie."},
    {q: "Ich ___ gern einen Tee, bitte.", a: ["hätte"], c: ["hätte", "würde", "könnte"], fr: "Je voudrais un thé, s'il vous plaît.", why: "Commander quelque chose → Ich hätte gern."},
    {q: "Ich würde gern mit Ihnen ___. (sprechen)", a: ["sprechen"], fr: "J'aimerais parler avec vous.", why: "würde + infinitif à la fin."},
    {q: "Du ___ mehr schlafen. (conseil)", a: ["solltest"], c: ["solltest", "würdest", "hättest"], fr: "Tu devrais dormir plus.", why: "Conseil → du solltest."},
    {q: "___ es möglich, morgen anzufangen?", a: ["Wäre"], c: ["Wäre", "Würde", "Hätte"], fr: "Serait-il possible de commencer demain ?", why: "Wäre es möglich… = serait-il possible."},
    {q: "Wir ___ gern einen Tisch für vier.", a: ["hätten"], c: ["hätte", "hätten", "hättet"], fr: "Nous voudrions une table pour quatre.", why: "wir → hätten."},
    {q: "Was ___ du an meiner Stelle machen?", a: ["würdest"], c: ["würde", "würdest", "würden"], fr: "Qu'est-ce que tu ferais à ma place ?", why: "du → würdest."}
  ]
},
{
  id: "imperatif",
  title: "L'impératif",
  sub: "Donner une consigne : Komm! Kommen Sie!",
  body: `
<table><tr><th>pour qui</th><th>forme</th><th>exemple</th></tr>
<tr><td>du</td><td>radical du verbe (sans -st, sans du)</td><td><b>Komm</b> mit! · <b>Ruf</b> mich an!</td></tr>
<tr><td>ihr</td><td>forme de ihr (sans ihr)</td><td><b>Kommt</b> mit!</td></tr>
<tr><td>Sie</td><td>verbe + Sie</td><td><b>Kommen Sie</b> bitte mit!</td></tr></table>
<p>Pour <b>du</b> : on part de « du kommst » et on enlève <b>du</b> et <b>-st</b> → komm. Les verbes e → i gardent le i (du nimmst → <b>nimm</b>, du sprichst → <b>sprich</b>), mais a → ä perd l'Umlaut (du fährst → <b>fahr</b>).</p>
<p>sein : <b>Sei</b> ruhig! · <b>Seid</b> pünktlich! · <b>Seien Sie</b> bitte pünktlich!</p>
<p>Ajoute <b>bitte</b> ou <b>mal</b> pour adoucir : Komm mal her! Warten Sie bitte!</p>`,
  ex: [
    {q: "___ mich morgen an! (anrufen, du)", a: ["Ruf"], c: ["Ruf", "Rufst", "Rufen"], fr: "Appelle-moi demain !", why: "du rufst → ruf."},
    {q: "___ Sie bitte Platz! (nehmen, Sie)", a: ["Nehmen"], fr: "Asseyez-vous, je vous prie !", why: "Forme Sie : Nehmen Sie."},
    {q: "___ langsamer, bitte! (sprechen, du)", a: ["Sprich"], c: ["Sprech", "Sprich", "Sprichst"], fr: "Parle plus lentement, s'il te plaît !", why: "e → i reste : sprich."},
    {q: "___ vorsichtig! (fahren, du)", a: ["Fahr"], c: ["Fahr", "Fähr", "Fährst"], fr: "Conduis prudemment !", why: "a → ä disparaît à l'impératif : fahr."},
    {q: "___ pünktlich, Kinder! (sein, ihr)", a: ["Seid"], c: ["Sei", "Seid", "Seien"], fr: "Soyez à l'heure, les enfants !", why: "sein, ihr → seid."},
    {q: "Warten ___ bitte einen Moment!", a: ["Sie"], fr: "Attendez un instant, s'il vous plaît !", why: "Impératif poli : verbe + Sie."},
    {q: "___ mal her! (kommen, du)", a: ["Komm"], fr: "Viens par ici !", why: "du kommst → komm."}
  ]
}
];
