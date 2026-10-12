// Leçons B1.
GRAMMAR.push(
{
  id: "b1-praeteritum", level: "B1",
  title: "Le prétérit de tous les verbes",
  sub: "ich machte, ich ging : le passé écrit",
  body: `
<p>Le <b>Präteritum</b> est le passé des récits, des journaux et des e-mails formels. À l'oral, on préfère le Perfekt (sauf sein, haben, modaux).</p>
<p><b>Verbes réguliers</b> : radical + <b>-te</b> + terminaison.</p>
<table><tr><th></th><th>machen</th><th>arbeiten</th><th>gehen (irrég.)</th></tr>
<tr><td>ich</td><td>mach<b>te</b></td><td>arbeit<b>ete</b></td><td>ging</td></tr>
<tr><td>du</td><td>mach<b>test</b></td><td>arbeit<b>etest</b></td><td>ging<b>st</b></td></tr>
<tr><td>er / sie</td><td>mach<b>te</b></td><td>arbeit<b>ete</b></td><td>ging</td></tr>
<tr><td>wir / sie</td><td>mach<b>ten</b></td><td>arbeit<b>eten</b></td><td>ging<b>en</b></td></tr>
<tr><td>ihr</td><td>mach<b>tet</b></td><td>arbeit<b>etet</b></td><td>ging<b>t</b></td></tr></table>
<p><b>Irréguliers</b> courants : gehen → ging, kommen → kam, sehen → sah, geben → gab, nehmen → nahm, finden → fand, fahren → fuhr, schreiben → schrieb, bleiben → blieb, sprechen → sprach, wissen → wusste, denken → dachte, bringen → brachte.</p>
<p>ich et er ont toujours la même forme.</p>`,
  ex: [
    {q: "Gestern ___ ich lange im Büro. (bleiben)", a: ["blieb"], fr: "Hier je suis resté longtemps au bureau.", why: "bleiben → blieb."},
    {q: "Er ___ die Tür und ging hinaus. (öffnen)", a: ["öffnete"], fr: "Il ouvrit la porte et sortit.", why: "Régulier en -n : öffn-e-te."},
    {q: "Wir ___ mit dem Zug nach Paris. (fahren)", a: ["fuhren"], fr: "Nous allâmes à Paris en train.", why: "fahren → fuhr, wir fuhren."},
    {q: "Sie ___ einen langen Brief. (schreiben)", a: ["schrieb"], fr: "Elle écrivit une longue lettre.", why: "schreiben → schrieb."},
    {q: "Ich ___ nicht, dass du hier warst. (wissen)", a: ["wusste"], fr: "Je ne savais pas que tu étais ici.", why: "wissen → wusste."},
    {q: "Plötzlich ___ ein Mann ins Zimmer. (kommen)", a: ["kam"], fr: "Soudain, un homme entra dans la pièce.", why: "kommen → kam."},
    {q: "Die Firma ___ 2010 mit fünf Mitarbeitern. (beginnen)", a: ["begann"], fr: "L'entreprise a commencé en 2010 avec cinq employés.", why: "beginnen → begann."},
    {q: "Ich ___ an dich. (denken)", a: ["dachte"], fr: "Je pensais à toi.", why: "denken → dachte (mixte : changement + -te)."}
  ]
},
{
  id: "b1-plusquamperfekt", level: "B1",
  title: "Le plus-que-parfait",
  sub: "ich hatte gemacht, ich war gegangen",
  body: `
<p>Le <b>Plusquamperfekt</b> exprime une action <b>antérieure</b> à une autre action passée.</p>
<p>Formation : <b>hatte / war</b> (prétérit de haben / sein) + <b>participe passé</b>. Même choix haben/sein qu'au Perfekt.</p>
<p><i>Als ich ankam, <b>war</b> der Zug schon <b>abgefahren</b>.</i> (le train était déjà parti)</p>
<p><i>Ich <b>hatte</b> die Präsentation gut <b>vorbereitet</b>, deshalb lief alles gut.</i></p>
<p>Souvent avec <b>nachdem</b> : <i>Nachdem ich gegessen <b>hatte</b>, ging ich spazieren.</i></p>`,
  ex: [
    {q: "Als wir ankamen, ___ der Film schon begonnen.", a: ["hatte"], c: ["hatte", "war", "hat"], fr: "Quand nous sommes arrivés, le film avait déjà commencé.", why: "beginnen → haben ; antériorité → hatte."},
    {q: "Der Zug ___ schon abgefahren.", a: ["war"], c: ["hatte", "war", "ist"], fr: "Le train était déjà parti.", why: "abfahren → sein ; Plusquamperfekt → war."},
    {q: "Nachdem ich die E-Mail ___ hatte, rief ich den Kunden an. (schreiben)", a: ["geschrieben"], fr: "Après avoir écrit l'e-mail, j'ai appelé le client.", why: "hatte + participe passé."},
    {q: "Sie war müde, weil sie schlecht ___ hatte. (schlafen)", a: ["geschlafen"], fr: "Elle était fatiguée parce qu'elle avait mal dormi.", why: "schlafen → geschlafen."},
    {q: "Ich ___ meinen Schlüssel vergessen und konnte nicht rein.", a: ["hatte"], c: ["hatte", "war", "habe"], fr: "J'avais oublié ma clé et je ne pouvais pas entrer.", why: "vergessen → haben."},
    {q: "Nachdem er in Berlin ___ war, suchte er eine Wohnung. (ankommen)", a: ["angekommen"], fr: "Après être arrivé à Berlin, il chercha un appartement.", why: "ankommen → angekommen (avec sein)."}
  ]
},
{
  id: "b1-relatives", level: "B1",
  title: "Les propositions relatives",
  sub: "der Mann, der… / den… / dem…",
  body: `
<p>Le pronom relatif a le <b>genre et le nombre</b> du nom qu'il remplace, et le <b>cas</b> de sa fonction dans la relative. Le verbe va à la fin.</p>
<table><tr><th></th><th>masc.</th><th>fém.</th><th>neutre</th><th>pluriel</th></tr>
<tr><td>nom.</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>acc.</td><td>den</td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>dat.</td><td>dem</td><td>der</td><td>dem</td><td><b>denen</b></td></tr>
<tr><td>gén.</td><td>dessen</td><td>deren</td><td>dessen</td><td>deren</td></tr></table>
<p><i>Der Kollege, <b>der</b> neben mir sitzt, …</i> (sujet) · <i>Der Kollege, <b>den</b> ich gestern getroffen habe, …</i> (COD) · <i>Der Kollege, <b>dem</b> ich geholfen habe, …</i> (datif)</p>
<p>Avec préposition : la préposition vient d'abord. <i>Die Firma, <b>bei der</b> ich arbeite, …</i></p>`,
  ex: [
    {q: "Das ist der Kollege, ___ mir immer hilft.", a: ["der"], c: ["der", "den", "dem"], fr: "C'est le collègue qui m'aide toujours.", why: "Sujet de hilft, masculin → der."},
    {q: "Der Film, ___ wir gesehen haben, war super.", a: ["den"], c: ["der", "den", "dem"], fr: "Le film que nous avons vu était super.", why: "COD de gesehen, masculin → den."},
    {q: "Die Frau, ___ ich das Buch gegeben habe, ist meine Nachbarin.", a: ["der"], c: ["die", "der", "denen"], fr: "La femme à qui j'ai donné le livre est ma voisine.", why: "geben + datif (à qui), féminin → der."},
    {q: "Die Firma, bei ___ ich arbeite, ist klein.", a: ["der"], c: ["die", "der", "dem"], fr: "L'entreprise pour laquelle je travaille est petite.", why: "bei + datif, féminin → der."},
    {q: "Das Hotel, ___ wir gebucht haben, liegt am Meer.", a: ["das"], c: ["das", "dem", "den"], fr: "L'hôtel que nous avons réservé est au bord de la mer.", why: "COD, neutre → das."},
    {q: "Die Kunden, mit ___ ich telefoniert habe, sind zufrieden.", a: ["denen"], c: ["die", "denen", "deren"], fr: "Les clients avec qui j'ai téléphoné sont satisfaits.", why: "mit + datif pluriel → denen."},
    {q: "Der Mann, ___ Auto vor der Tür steht, ist mein Chef.", a: ["dessen"], c: ["dessen", "deren", "dem"], fr: "L'homme dont la voiture est devant la porte est mon chef.", why: "Possession (dont), masculin → dessen."}
  ]
},
{
  id: "b1-passif", level: "B1",
  title: "Le passif",
  sub: "werden + participe passé",
  body: `
<p>Le passif met l'accent sur l'<b>action</b>, pas sur qui la fait. Formation : <b>werden</b> conjugué + <b>participe passé</b> à la fin.</p>
<table><tr><th>temps</th><th>exemple</th></tr>
<tr><td>présent</td><td>Das Büro <b>wird</b> jeden Tag <b>geputzt</b>.</td></tr>
<tr><td>prétérit</td><td>Das Haus <b>wurde</b> 1900 <b>gebaut</b>.</td></tr>
<tr><td>Perfekt</td><td>Der Vertrag <b>ist</b> <b>unterschrieben worden</b>.</td></tr></table>
<p>Au Perfekt passif, on écrit <b>worden</b> (pas geworden) et l'auxiliaire est <b>sein</b>.</p>
<p>Celui qui fait l'action : <b>von</b> + datif (<i>Die E-Mail wurde <b>vom</b> Chef geschrieben</i>).</p>
<p>Prétérit de werden : ich wurde, du wurdest, er wurde, wir wurden.</p>`,
  ex: [
    {q: "Hier ___ Deutsch gesprochen.", a: ["wird"], c: ["wird", "ist", "hat"], fr: "Ici on parle allemand.", why: "Passif présent : wird + participe."},
    {q: "Das Haus wurde 1950 ___. (bauen)", a: ["gebaut"], fr: "La maison a été construite en 1950.", why: "Participe passé à la fin."},
    {q: "Die Pakete ___ morgen geliefert.", a: ["werden"], c: ["wird", "werden", "wurden"], fr: "Les colis seront livrés demain.", why: "Sujet pluriel → werden."},
    {q: "Der Vertrag ist gestern unterschrieben ___.", a: ["worden"], c: ["geworden", "worden", "gewesen"], fr: "Le contrat a été signé hier.", why: "Perfekt passif → worden."},
    {q: "Die Präsentation wurde ___ Chef gehalten.", a: ["vom"], c: ["vom", "durch", "mit"], fr: "La présentation a été faite par le chef.", why: "L'agent → von + datif (vom)."},
    {q: "Gestern ___ das Meeting abgesagt.", a: ["wurde"], c: ["wird", "wurde", "ist"], fr: "Hier la réunion a été annulée.", why: "Passé → wurde."},
    {q: "Die Rechnung muss bis Freitag bezahlt ___.", a: ["werden"], c: ["werden", "worden", "wird"], fr: "La facture doit être payée d'ici vendredi.", why: "Modal + participe + werden (infinitif)."}
  ]
},
{
  id: "b1-konj2", level: "B1",
  title: "Le conditionnel (Konjunktiv II)",
  sub: "Wenn ich Zeit hätte, würde ich…",
  body: `
<p>Pour parler de situations <b>imaginaires</b> ou de <b>souhaits</b>.</p>
<p>Formes à connaître : <b>wäre</b> (sein), <b>hätte</b> (haben), <b>könnte, müsste, dürfte, sollte, wollte</b>, et pour les autres verbes <b>würde + infinitif</b>.</p>
<table><tr><th></th><th>sein</th><th>haben</th><th>werden</th></tr>
<tr><td>ich</td><td>wäre</td><td>hätte</td><td>würde</td></tr>
<tr><td>du</td><td>wär(e)st</td><td>hättest</td><td>würdest</td></tr>
<tr><td>er / sie</td><td>wäre</td><td>hätte</td><td>würde</td></tr>
<tr><td>wir / sie</td><td>wären</td><td>hätten</td><td>würden</td></tr></table>
<p><b>Condition irréelle</b> : <i>Wenn ich mehr Zeit <b>hätte</b>, <b>würde</b> ich mehr Sport <b>machen</b>.</i></p>
<p><b>Souhait</b> : <i>Wenn ich doch nur Urlaub <b>hätte</b>!</i> · <i>Ich <b>wäre</b> gern am Meer.</i></p>
<p>Quelques verbes fréquents ont leur propre forme : käme (kommen), ginge (gehen), wüsste (wissen), bräuchte (brauchen).</p>`,
  ex: [
    {q: "Wenn ich reich ___, würde ich um die Welt reisen.", a: ["wäre"], c: ["wäre", "hätte", "würde"], fr: "Si j'étais riche, je voyagerais autour du monde.", why: "sein → wäre."},
    {q: "Wenn ich Zeit ___, würde ich mitkommen.", a: ["hätte"], c: ["wäre", "hätte", "habe"], fr: "Si j'avais le temps, je viendrais.", why: "haben → hätte."},
    {q: "Was ___ du an meiner Stelle machen?", a: ["würdest"], c: ["würde", "würdest", "wirst"], fr: "Que ferais-tu à ma place ?", why: "du → würdest."},
    {q: "Wenn es nicht regnen ___, würden wir spazieren gehen.", a: ["würde"], c: ["würde", "wird", "wäre"], fr: "S'il ne pleuvait pas, nous irions nous promener.", why: "würde + infinitif."},
    {q: "Ich ___ gern länger schlafen. (pouvoir)", a: ["könnte"], fr: "J'aimerais pouvoir dormir plus longtemps.", why: "können → könnte."},
    {q: "Wenn ich das ___, würde ich es dir sagen. (wissen)", a: ["wüsste"], fr: "Si je le savais, je te le dirais.", why: "wissen → wüsste."},
    {q: "Du ___ mehr Wasser trinken. (conseil)", a: ["solltest"], c: ["solltest", "sollst", "würdest"], fr: "Tu devrais boire plus d'eau.", why: "Conseil → solltest."}
  ]
},
{
  id: "b1-genitiv", level: "B1",
  title: "Le génitif",
  sub: "das Auto des Chefs, wegen des Wetters",
  body: `
<p>Le génitif exprime la <b>possession</b> (« de ») et suit certaines prépositions.</p>
<table><tr><th></th><th>défini</th><th>indéfini</th></tr>
<tr><td>masculin</td><td><b>des</b> Mann<b>es</b></td><td><b>eines</b> Mann<b>es</b></td></tr>
<tr><td>féminin</td><td><b>der</b> Frau</td><td><b>einer</b> Frau</td></tr>
<tr><td>neutre</td><td><b>des</b> Kind<b>es</b></td><td><b>eines</b> Kind<b>es</b></td></tr>
<tr><td>pluriel</td><td><b>der</b> Kinder</td><td>–</td></tr></table>
<p>Au masculin et au neutre, le nom prend <b>-s</b> ou <b>-es</b> (mots d'une syllabe : souvent -es : des Tages, des Buches).</p>
<p>Noms propres : <b>Annas</b> Auto, <b>Pauls</b> Büro (sans apostrophe).</p>
<p>Prépositions + génitif : <b>wegen</b> (à cause de), <b>während</b> (pendant), <b>trotz</b> (malgré), <b>statt</b> (au lieu de), <b>innerhalb / außerhalb</b>.</p>
<p>À l'oral, on remplace souvent par <b>von</b> + datif : das Auto <b>von meinem</b> Bruder.</p>`,
  ex: [
    {q: "Das ist das Büro ___ Chefs.", a: ["des"], c: ["der", "des", "dem"], fr: "C'est le bureau du chef.", why: "der Chef → génitif des Chefs."},
    {q: "Die Farbe ___ Wand gefällt mir nicht.", a: ["der"], c: ["der", "des", "die"], fr: "La couleur du mur ne me plaît pas.", why: "die Wand → génitif der."},
    {q: "Wegen ___ Wetters bleiben wir zu Hause.", a: ["des"], c: ["des", "dem", "das"], fr: "À cause du temps, nous restons à la maison.", why: "wegen + génitif, das Wetter → des Wetters."},
    {q: "Während ___ Meetings war mein Handy aus.", a: ["des"], c: ["des", "dem", "der"], fr: "Pendant la réunion, mon portable était éteint.", why: "während + génitif, das Meeting → des Meetings."},
    {q: "Trotz ___ Regens gingen wir spazieren.", a: ["des"], c: ["des", "dem", "den"], fr: "Malgré la pluie, nous sommes allés nous promener.", why: "trotz + génitif, der Regen → des Regens."},
    {q: "Das ist ___ Fahrrad. (le vélo d'Anna)", a: ["Annas"], fr: "C'est le vélo d'Anna.", why: "Nom propre + s, sans apostrophe."},
    {q: "Die Wohnung meiner Eltern ist groß. → Die Wohnung ___ meinen Eltern…", a: ["von"], fr: "L'appartement de mes parents est grand.", why: "À l'oral : von + datif."}
  ]
},
{
  id: "b1-praepverben", level: "B1",
  title: "Verbes à préposition et da- / wo-",
  sub: "warten auf → darauf, worauf?",
  body: `
<p>Beaucoup de verbes ont une préposition fixe : <b>warten auf</b> + acc., <b>denken an</b> + acc., <b>sprechen über</b> + acc., <b>sich freuen auf / über</b>, <b>teilnehmen an</b> + dat., <b>bitten um</b>, <b>träumen von</b>, <b>Angst haben vor</b> + dat.</p>
<p>Pour une <b>chose</b>, on remplace « préposition + pronom » par <b>da(r)- + préposition</b> ; pour une question, <b>wo(r)- + préposition</b>.</p>
<table><tr><th>personne</th><th>chose</th><th>question (chose)</th></tr>
<tr><td>auf ihn</td><td><b>darauf</b></td><td><b>worauf</b>?</td></tr>
<tr><td>an sie</td><td><b>daran</b></td><td><b>woran</b>?</td></tr>
<tr><td>über ihn</td><td><b>darüber</b></td><td><b>worüber</b>?</td></tr>
<tr><td>mit ihr</td><td><b>damit</b></td><td><b>womit</b>?</td></tr></table>
<p>Le <b>r</b> s'ajoute quand la préposition commence par une voyelle (dar-auf, wor-an). Pour une personne : <i>Auf <b>wen</b> wartest du?</i></p>`,
  ex: [
    {q: "Ich warte ___ den Bus.", a: ["auf"], c: ["auf", "für", "an"], fr: "J'attends le bus.", why: "warten auf + accusatif."},
    {q: "Denkst du an den Termin? – Ja, ich denke ___.", a: ["daran"], c: ["daran", "an ihn", "woran"], fr: "Tu penses au rendez-vous ? – Oui, j'y pense.", why: "Chose → da + r + an."},
    {q: "___ freust du dich? – Auf den Urlaub.", a: ["Worauf"], c: ["Worauf", "Auf was", "Darauf"], fr: "De quoi te réjouis-tu ? – Des vacances.", why: "Question sur une chose → worauf."},
    {q: "Wir haben lange ___ gesprochen. (de cela)", a: ["darüber"], c: ["darüber", "davon", "worüber"], fr: "Nous en avons parlé longtemps.", why: "sprechen über → darüber."},
    {q: "___ wartest du? – Auf meine Freundin.", a: ["Auf wen"], c: ["Worauf", "Auf wen", "Wem"], fr: "Qui attends-tu ? – Ma copine.", why: "Personne → préposition + wen."},
    {q: "Ich nehme ___ Kurs teil.", a: ["am"], c: ["am", "an den", "im"], fr: "Je participe au cours.", why: "teilnehmen an + datif → am."},
    {q: "Sie hat Angst ___ der Prüfung.", a: ["vor"], c: ["vor", "für", "von"], fr: "Elle a peur de l'examen.", why: "Angst haben vor + datif."}
  ]
},
{
  id: "b1-zu", level: "B1",
  title: "L'infinitif avec zu",
  sub: "Ich habe vor, … zu …, um … zu, ohne … zu",
  body: `
<p>Après beaucoup de verbes et d'expressions, l'infinitif est précédé de <b>zu</b> et va à la fin : <i>Ich habe keine Lust, heute <b>zu kochen</b>.</i></p>
<p>Déclencheurs fréquents : vorhaben, versuchen, vergessen, anfangen, aufhören, beschließen, Lust haben, Zeit haben, es ist wichtig / schwer / schön…</p>
<p>Verbe à particule : <b>zu</b> entre la particule et le verbe : an<b>zu</b>rufen, ein<b>zu</b>kaufen.</p>
<p><b>Pas de zu</b> après les modaux, werden, et lassen, gehen, sehen, hören.</p>
<table><tr><th>construction</th><th>sens</th><th>exemple</th></tr>
<tr><td>um … zu</td><td>pour (but)</td><td>Ich lerne Deutsch, um in Berlin zu arbeiten.</td></tr>
<tr><td>ohne … zu</td><td>sans</td><td>Er ging, ohne etwas zu sagen.</td></tr>
<tr><td>(an)statt … zu</td><td>au lieu de</td><td>Statt zu arbeiten, schläft er.</td></tr></table>
<p>Avec um…zu, le sujet doit être le même ; sinon on utilise <b>damit</b>.</p>`,
  ex: [
    {q: "Ich habe vor, nächstes Jahr in Wien ___. (arbeiten)", a: ["zu arbeiten"], fr: "J'ai l'intention de travailler à Vienne l'an prochain.", why: "vorhaben → zu + infinitif à la fin."},
    {q: "Vergiss nicht, deine Mutter ___! (anrufen)", a: ["anzurufen"], fr: "N'oublie pas d'appeler ta mère !", why: "Verbe à particule : an-zu-rufen."},
    {q: "Ich spare Geld, ___ ein Auto zu kaufen.", a: ["um"], c: ["um", "ohne", "damit"], fr: "J'économise pour acheter une voiture.", why: "But, même sujet → um … zu."},
    {q: "Er ist gegangen, ___ tschüss zu sagen.", a: ["ohne"], c: ["um", "ohne", "statt"], fr: "Il est parti sans dire au revoir.", why: "sans → ohne … zu."},
    {q: "Ich muss heute länger ___. (arbeiten)", a: ["arbeiten"], c: ["arbeiten", "zu arbeiten"], fr: "Je dois travailler plus tard aujourd'hui.", why: "Après un modal : pas de zu."},
    {q: "Ich erkläre es dir, ___ du es verstehst.", a: ["damit"], c: ["um", "damit", "ohne"], fr: "Je te l'explique pour que tu le comprennes.", why: "Sujets différents → damit."},
    {q: "Es ist wichtig, regelmäßig Sport ___. (machen)", a: ["zu machen"], fr: "C'est important de faire du sport régulièrement.", why: "es ist wichtig → zu + infinitif."}
  ]
},
{
  id: "b1-doppel", level: "B1",
  title: "Les connecteurs doubles",
  sub: "entweder… oder, je… desto…",
  body: `
<table><tr><th>connecteur</th><th>sens</th><th>exemple</th></tr>
<tr><td>sowohl … als auch</td><td>aussi bien… que</td><td>Ich spreche sowohl Englisch als auch Deutsch.</td></tr>
<tr><td>weder … noch</td><td>ni… ni</td><td>Er trinkt weder Kaffee noch Tee.</td></tr>
<tr><td>entweder … oder</td><td>soit… soit</td><td>Entweder wir fahren heute oder morgen.</td></tr>
<tr><td>nicht nur … sondern auch</td><td>non seulement… mais aussi</td><td>Sie ist nicht nur nett, sondern auch kompetent.</td></tr>
<tr><td>zwar … aber</td><td>certes… mais</td><td>Die Wohnung ist zwar klein, aber schön.</td></tr>
<tr><td>je … desto</td><td>plus… plus</td><td>Je mehr ich lerne, desto besser spreche ich.</td></tr></table>
<p><b>je … desto</b> : <i>je</i> + comparatif … verbe à la fin, puis <i>desto</i> + comparatif + verbe + sujet.</p>`,
  ex: [
    {q: "Ich trinke ___ Alkohol noch Kaffee.", a: ["weder"], c: ["weder", "entweder", "sowohl"], fr: "Je ne bois ni alcool ni café.", why: "ni… ni → weder … noch."},
    {q: "Wir können ___ ins Kino oder ins Theater gehen.", a: ["entweder"], c: ["weder", "entweder", "sowohl"], fr: "On peut aller soit au cinéma soit au théâtre.", why: "soit… soit → entweder … oder."},
    {q: "Sie spricht sowohl Spanisch ___ Italienisch.", a: ["als auch"], c: ["als auch", "noch", "oder"], fr: "Elle parle aussi bien espagnol qu'italien.", why: "sowohl … als auch."},
    {q: "Je früher wir anfangen, ___ früher sind wir fertig.", a: ["desto"], c: ["desto", "je", "so"], fr: "Plus tôt nous commençons, plus tôt nous avons fini.", why: "je … desto."},
    {q: "Das Hotel ist ___ teuer, aber sehr schön.", a: ["zwar"], c: ["zwar", "nicht nur", "weder"], fr: "L'hôtel est certes cher, mais très beau.", why: "certes… mais → zwar … aber."},
    {q: "Er ist nicht nur mein Kollege, ___ auch mein Freund.", a: ["sondern"], c: ["aber", "sondern", "oder"], fr: "Ce n'est pas seulement mon collègue, mais aussi mon ami.", why: "nicht nur … sondern auch."},
    {q: "Je mehr ich übe, desto besser ___.", a: ["spreche ich"], c: ["ich spreche", "spreche ich"], fr: "Plus je m'entraîne, mieux je parle.", why: "Après desto + comparatif : verbe puis sujet."}
  ]
},
{
  id: "b1-alswenn", level: "B1",
  title: "als, wenn ou wann ?",
  sub: "Trois façons de dire « quand »",
  body: `
<ul>
<li><b>als</b> : une seule fois dans le <b>passé</b>. <i><b>Als</b> ich in Berlin wohnte, …</i></li>
<li><b>wenn</b> : au <b>présent / futur</b>, ou une action <b>répétée</b> dans le passé (chaque fois que). <i><b>Wenn</b> ich Zeit habe, … · Immer <b>wenn</b> ich ihn besuchte, …</i></li>
<li><b>wann</b> : <b>question</b> (directe ou indirecte). <i><b>Wann</b> kommst du? · Ich weiß nicht, <b>wann</b> er kommt.</i></li></ul>
<p>als et wenn envoient le verbe à la fin ; wann aussi dans une question indirecte.</p>
<p>Rappel : <b>wenn</b> = aussi « si » (condition).</p>`,
  ex: [
    {q: "___ ich ein Kind war, wohnte ich in Lyon.", a: ["Als"], c: ["Als", "Wenn", "Wann"], fr: "Quand j'étais enfant, j'habitais à Lyon.", why: "Une période unique dans le passé → als."},
    {q: "___ ich nach Hause komme, koche ich.", a: ["Wenn"], c: ["Als", "Wenn", "Wann"], fr: "Quand je rentre à la maison, je cuisine.", why: "Présent / habitude → wenn."},
    {q: "Weißt du, ___ der Zug kommt?", a: ["wann"], c: ["als", "wenn", "wann"], fr: "Tu sais quand arrive le train ?", why: "Question indirecte → wann."},
    {q: "Immer ___ ich sie besuchte, backte sie einen Kuchen.", a: ["wenn"], c: ["als", "wenn", "wann"], fr: "Chaque fois que je lui rendais visite, elle faisait un gâteau.", why: "Répétition dans le passé → wenn."},
    {q: "___ ich gestern ankam, regnete es.", a: ["Als"], c: ["Als", "Wenn", "Wann"], fr: "Quand je suis arrivé hier, il pleuvait.", why: "Une fois dans le passé → als."},
    {q: "___ fängt das Konzert an?", a: ["Wann"], c: ["Als", "Wenn", "Wann"], fr: "Quand commence le concert ?", why: "Question → wann."}
  ]
},
{
  id: "b1-indirekt", level: "B1",
  title: "Les questions indirectes",
  sub: "Können Sie mir sagen, wo …?",
  body: `
<p>Une question indirecte commence par le <b>mot interrogatif</b> (ou <b>ob</b> pour oui/non) et le verbe va <b>à la fin</b>.</p>
<p><i>Wo ist der Bahnhof? → Können Sie mir sagen, wo der Bahnhof <b>ist</b>?</i></p>
<p><i>Kommt er morgen? → Weißt du, <b>ob</b> er morgen <b>kommt</b>?</i></p>
<p>C'est la façon la plus <b>polie</b> de demander une information : <i>Wissen Sie, … · Können Sie mir sagen, … · Ich möchte wissen, … · Ich frage mich, …</i></p>`,
  ex: [
    {q: "Können Sie mir sagen, wo der Bahnhof ___?", a: ["ist"], fr: "Pouvez-vous me dire où est la gare ?", why: "Verbe à la fin."},
    {q: "Weißt du, ___ das Geschäft heute geöffnet ist?", a: ["ob"], c: ["ob", "wenn", "dass"], fr: "Tu sais si le magasin est ouvert aujourd'hui ?", why: "Question oui/non → ob."},
    {q: "Ich möchte wissen, wie viel das ___.", a: ["kostet"], fr: "Je voudrais savoir combien ça coûte.", why: "Verbe à la fin."},
    {q: "Wissen Sie, wann ___?", a: ["der Zug abfährt"], c: ["fährt der Zug ab", "der Zug abfährt"], fr: "Savez-vous quand le train part ?", why: "Verbe (particule collée) à la fin."},
    {q: "Ich frage mich, ___ er so spät kommt.", a: ["warum"], c: ["warum", "ob", "dass"], fr: "Je me demande pourquoi il arrive si tard.", why: "Question en W → mot interrogatif."},
    {q: "Kannst du mir sagen, wer das gemacht ___?", a: ["hat"], fr: "Tu peux me dire qui a fait ça ?", why: "Perfekt : auxiliaire tout à la fin."}
  ]
},
{
  id: "b1-lassen", level: "B1",
  title: "Le verbe lassen",
  sub: "faire faire, laisser",
  body: `
<p><b>lassen</b> fonctionne comme un modal : infinitif à la fin, sans zu.</p>
<ul><li><b>faire faire</b> : <i>Ich <b>lasse</b> mein Auto <b>reparieren</b>.</i> (je fais réparer ma voiture)</li>
<li><b>laisser, permettre</b> : <i><b>Lass</b> mich das <b>machen</b>!</i></li>
<li><b>laisser quelque part</b> : <i>Ich habe den Schlüssel im Büro <b>gelassen</b>.</i></li></ul>
<p>Présent : ich lasse, du <b>lässt</b>, er <b>lässt</b>, wir lassen. Prétérit : ließ.</p>
<p>Perfekt avec un autre verbe : double infinitif. <i>Ich <b>habe</b> mir die Haare <b>schneiden lassen</b>.</i></p>
<p><b>sich lassen</b> = pouvoir être fait : <i>Das Fenster <b>lässt sich</b> nicht <b>öffnen</b>.</i></p>`,
  ex: [
    {q: "Ich ___ mein Fahrrad reparieren.", a: ["lasse"], fr: "Je fais réparer mon vélo.", why: "ich lasse."},
    {q: "Er ___ sich die Haare schneiden.", a: ["lässt"], fr: "Il se fait couper les cheveux.", why: "er lässt (avec Umlaut)."},
    {q: "___ mich bitte in Ruhe!", a: ["Lass"], c: ["Lass", "Lässt", "Lasse"], fr: "Laisse-moi tranquille, s'il te plaît !", why: "Impératif du → lass."},
    {q: "Ich habe mein Handy zu Hause ___.", a: ["gelassen"], fr: "J'ai laissé mon portable à la maison.", why: "Seul (sans autre verbe) → gelassen."},
    {q: "Wir haben das Dach reparieren ___.", a: ["lassen"], c: ["lassen", "gelassen"], fr: "Nous avons fait réparer le toit.", why: "Avec un autre verbe → double infinitif."},
    {q: "Das Problem lässt ___ leicht lösen.", a: ["sich"], c: ["sich", "es", "man"], fr: "Le problème se résout facilement.", why: "sich lassen + infinitif = peut être fait."}
  ]
},
{
  id: "b1-ndekl", level: "B1",
  title: "Les noms masculins en -n",
  sub: "der Kollege → den Kollegen",
  body: `
<p>Certains noms masculins prennent <b>-n / -en</b> à tous les cas sauf au nominatif singulier (N-Deklination).</p>
<table><tr><th>cas</th><th>exemple</th></tr>
<tr><td>nominatif</td><td>der Kollege</td></tr>
<tr><td>accusatif</td><td>den Kollege<b>n</b></td></tr>
<tr><td>datif</td><td>dem Kollege<b>n</b></td></tr>
<tr><td>génitif</td><td>des Kollege<b>n</b></td></tr></table>
<p>Qui est concerné ?</p>
<ul><li>masculins en <b>-e</b> pour une personne ou un animal : der Kunde, der Junge, der Franzose, der Name*</li>
<li>masculins en <b>-ent, -ant, -ist, -at, -oge</b> : der Student, der Praktikant, der Journalist, der Kandidat, der Psychologe</li>
<li>quelques autres : der Mensch, der Herr (Herr<b>n</b>), der Nachbar, der Bauer</li></ul>
<p>*der Name, der Gedanke : génitif des Namen<b>s</b>.</p>`,
  ex: [
    {q: "Ich habe gestern den neuen Kolleg___ getroffen.", a: ["en"], c: ["e", "en", "es"], fr: "J'ai rencontré hier le nouveau collègue.", why: "Accusatif → Kollegen."},
    {q: "Wir schicken dem Kund___ ein Angebot.", a: ["en"], c: ["e", "en", "s"], fr: "Nous envoyons un devis au client.", why: "Datif → Kunden."},
    {q: "Sehr geehrter Herr Müller → Ich schreibe Herr___ Müller.", a: ["n"], fr: "J'écris à Monsieur Müller.", why: "Datif → Herrn."},
    {q: "Kennst du den Student___ aus Spanien?", a: ["en"], c: ["", "en", "es"], fr: "Tu connais l'étudiant espagnol ?", why: "-ent → Studenten à l'accusatif."},
    {q: "Der Praktikant___ kommt aus Lyon.", a: [""], c: ["(rien)", "en"], fr: "Le stagiaire vient de Lyon.", why: "Nominatif singulier : pas de -en."},
    {q: "Ich helfe meinem Nachbar___.", a: ["n"], fr: "J'aide mon voisin.", why: "der Nachbar → dem Nachbarn."}
  ]
}
);
