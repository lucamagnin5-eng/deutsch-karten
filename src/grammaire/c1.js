// Leçons C1.
GRAMMAR.push(
{
  id: "c1-modal-subj", level: "C1",
  title: "Les modaux pour exprimer une supposition",
  sub: "Er muss krank sein. Sie soll reich sein.",
  body: `
<p>Les modaux peuvent exprimer le <b>degré de certitude</b> du locuteur :</p>
<table><tr><th>modal</th><th>certitude</th><th>exemple</th></tr>
<tr><td>muss</td><td>presque sûr (doit)</td><td>Er <b>muss</b> krank sein.</td></tr>
<tr><td>dürfte</td><td>probable</td><td>Das <b>dürfte</b> etwa 50 Euro kosten.</td></tr>
<tr><td>kann / könnte</td><td>possible</td><td>Sie <b>könnte</b> im Stau stehen.</td></tr>
<tr><td>kann nicht</td><td>impossible</td><td>Das <b>kann</b> nicht stimmen.</td></tr>
<tr><td>soll</td><td>on dit que (ouï-dire)</td><td>Er <b>soll</b> sehr reich sein.</td></tr>
<tr><td>will</td><td>il prétend que (lui-même)</td><td>Er <b>will</b> das nicht gewusst haben.</td></tr></table>
<p><b>Sur le passé</b> : modal + participe + <b>haben / sein</b> (infinitif passé). <i>Er <b>muss</b> den Zug <b>verpasst haben</b>.</i> · <i>Sie <b>soll</b> früher in Paris <b>gewohnt haben</b>.</i></p>`,
  ex: [
    {q: "Das Licht ist an. Er ___ zu Hause sein. (presque sûr)", a: ["muss"], c: ["muss", "soll", "will"], fr: "La lumière est allumée. Il doit être à la maison.", why: "Déduction quasi certaine → muss."},
    {q: "Der neue Chef ___ sehr streng sein. (on dit)", a: ["soll"], c: ["muss", "soll", "will"], fr: "Le nouveau chef serait très strict.", why: "Ouï-dire → soll."},
    {q: "Er ___ den Unfall nicht gesehen haben. (il le prétend)", a: ["will"], c: ["muss", "soll", "will"], fr: "Il prétend ne pas avoir vu l'accident.", why: "Affirmation du sujet lui-même → will."},
    {q: "Das ___ nicht stimmen, ich war doch dabei!", a: ["kann"], c: ["kann", "muss", "soll"], fr: "Ça ne peut pas être vrai, j'étais là !", why: "Impossibilité → kann nicht."},
    {q: "Die Reparatur ___ etwa 200 Euro kosten. (probable)", a: ["dürfte"], c: ["dürfte", "will", "muss"], fr: "La réparation devrait coûter environ 200 euros.", why: "Probabilité → dürfte."},
    {q: "Sie ist nicht da. Sie muss den Termin vergessen ___.", a: ["haben"], c: ["haben", "sein", "werden"], fr: "Elle n'est pas là. Elle a dû oublier le rendez-vous.", why: "Passé : participe + haben."},
    {q: "Er soll gestern nach Paris geflogen ___.", a: ["sein"], c: ["haben", "sein"], fr: "Il serait parti hier en avion pour Paris.", why: "fliegen → sein."}
  ]
},
{
  id: "c1-passiversatz", level: "C1",
  title: "Les alternatives au passif",
  sub: "ist zu machen, lässt sich machen, -bar",
  body: `
<p>Pour exprimer une <b>possibilité</b> ou une <b>nécessité</b> passive sans werden :</p>
<table><tr><th>forme</th><th>sens</th><th>exemple</th></tr>
<tr><td>sein + zu + infinitif</td><td>doit / peut être fait</td><td>Die Rechnung <b>ist</b> bis Freitag <b>zu bezahlen</b>.</td></tr>
<tr><td>sich lassen + infinitif</td><td>peut être fait</td><td>Das Problem <b>lässt sich</b> leicht <b>lösen</b>.</td></tr>
<tr><td>adjectif en -bar / -lich</td><td>qu'on peut</td><td>Das ist <b>machbar</b>. Das ist <b>unverständlich</b>.</td></tr>
<tr><td>man + actif</td><td>on</td><td><b>Man</b> muss das prüfen.</td></tr>
<tr><td>bekommen + participe</td><td>passif du datif</td><td>Ich <b>bekomme</b> das Paket <b>geschickt</b>.</td></tr></table>
<p>Au sens de « doit » ou « peut », <b>sein + zu</b> dépend du contexte : <i>Das Formular ist auszufüllen</i> (doit) · <i>Das ist nicht zu ändern</i> (ne peut pas).</p>`,
  ex: [
    {q: "Die Rechnung ist innerhalb von 14 Tagen ___ bezahlen.", a: ["zu"], fr: "La facture doit être payée sous 14 jours.", why: "sein + zu + infinitif."},
    {q: "Das Fenster ___ sich nicht öffnen.", a: ["lässt"], c: ["lässt", "ist", "wird"], fr: "La fenêtre ne s'ouvre pas.", why: "sich lassen + infinitif."},
    {q: "Diese Aufgabe ist in einer Woche mach___.", a: ["bar"], c: ["bar", "lich", "sam"], fr: "Cette tâche est faisable en une semaine.", why: "machen → machbar."},
    {q: "Der Fehler kann nicht repariert werden. → Der Fehler ist nicht ___.", a: ["zu reparieren"], fr: "L'erreur ne peut pas être réparée.", why: "nicht + zu + infinitif = ne peut pas être…"},
    {q: "Das Formular ist vollständig ___. (ausfüllen)", a: ["auszufüllen"], fr: "Le formulaire doit être rempli entièrement.", why: "Verbe à particule : aus-zu-füllen."},
    {q: "Seine Schrift ist kaum les___.", a: ["bar"], c: ["bar", "lich"], fr: "Son écriture est à peine lisible.", why: "lesen → lesbar."}
  ]
},
{
  id: "c1-partizip-erw", level: "C1",
  title: "Les groupes participiaux longs",
  sub: "die von uns entwickelte Lösung",
  body: `
<p>À l'écrit, on place devant le nom un participe <b>accompagné de ses compléments</b>. Cela remplace une relative.</p>
<table><tr><th>relative</th><th>groupe participial</th></tr>
<tr><td>die Lösung, die von uns entwickelt wurde</td><td>die <b>von uns entwickelte</b> Lösung</td></tr>
<tr><td>der Zug, der um 8 Uhr abfährt</td><td>der <b>um 8 Uhr abfahrende</b> Zug</td></tr>
<tr><td>die Kosten, die ständig steigen</td><td>die <b>ständig steigenden</b> Kosten</td></tr>
<tr><td>das Problem, das gelöst werden muss</td><td>das <b>zu lösende</b> Problem</td></tr></table>
<p>Lecture : article → saute au nom → reviens au participe et à ses compléments.</p>
<p><b>zu + Partizip I</b> (das zu lösende Problem) = qui doit être…</p>`,
  ex: [
    {q: "die Firma, die 1990 gegründet wurde → die 1990 ___ Firma", a: ["gegründete"], fr: "l'entreprise fondée en 1990", why: "Passif terminé → Partizip II + terminaison."},
    {q: "der Kollege, der seit Jahren hier arbeitet → der seit Jahren hier ___ Kollege", a: ["arbeitende"], fr: "le collègue qui travaille ici depuis des années", why: "Actif en cours → Partizip I + e."},
    {q: "die Aufgaben, die erledigt werden müssen → die zu ___ Aufgaben", a: ["erledigenden"], fr: "les tâches à accomplir", why: "zu + Partizip I + terminaison (pluriel → -en)."},
    {q: "Wir sprechen über die von Ihnen vorgeschlagen___ Lösung.", a: ["e"], c: ["e", "en", "er"], fr: "Nous parlons de la solution que vous avez proposée.", why: "Accusatif féminin après die → -e."},
    {q: "Wegen der ständig ___ Preise… (steigen)", a: ["steigenden"], fr: "À cause des prix qui augmentent sans cesse…", why: "Partizip I, génitif pluriel → -en."},
    {q: "der im letzten Jahr ___ Bericht (veröffentlichen)", a: ["veröffentlichte"], fr: "le rapport publié l'année dernière", why: "veröffentlichen → veröffentlicht + e."}
  ]
},
{
  id: "c1-alsob", level: "C1",
  title: "Comparaisons irréelles",
  sub: "als ob, als wenn, als + verbe",
  body: `
<p>Pour dire « comme si » : <b>als ob / als wenn</b> + Konjunktiv II (verbe à la fin), ou <b>als</b> + verbe directement après.</p>
<p><i>Er tut, <b>als ob</b> er nichts <b>wüsste</b>.</i> = <i>Er tut, <b>als wüsste</b> er nichts.</i></p>
<p>Au passé : <i>Sie sieht aus, <b>als ob</b> sie nicht <b>geschlafen hätte</b>.</i></p>
<p>Verbes typiques : so tun, aussehen, sich anhören, klingen, sich fühlen, wirken.</p>
<p>À l'oral, on entend aussi le Konjunktiv I ou l'indicatif (als ob er krank ist), mais l'écrit soutenu préfère le Konjunktiv II.</p>`,
  ex: [
    {q: "Er tut so, als ob er alles ___. (wissen)", a: ["wüsste"], fr: "Il fait comme s'il savait tout.", why: "als ob + Konjunktiv II."},
    {q: "Du siehst aus, als ___ du krank.", a: ["wärst"], c: ["wärst", "bist", "wäre"], fr: "Tu as l'air malade.", why: "als + verbe directement : als wärst du…"},
    {q: "Es klingt, als ob es draußen ___. (regnen)", a: ["regnen würde", "regnete"], fr: "On dirait qu'il pleut dehors.", why: "als ob + würde + infinitif (ou regnete)."},
    {q: "Sie wirkt, als ob sie nicht geschlafen ___.", a: ["hätte"], c: ["hätte", "wäre", "hat"], fr: "Elle a l'air de ne pas avoir dormi.", why: "Passé : hätte + participe."},
    {q: "Er redet, als ___ er der Chef.", a: ["wäre"], c: ["wäre", "ist", "sei"], fr: "Il parle comme s'il était le chef.", why: "als + Konjunktiv II directement."}
  ]
},
{
  id: "c1-partikeln", level: "C1",
  title: "Les particules de l'oral",
  sub: "doch, ja, mal, eben, halt, eigentlich, wohl",
  body: `
<p>Ces petits mots ne se traduisent pas toujours, mais ils donnent le <b>ton</b> de la phrase.</p>
<table><tr><th>particule</th><th>effet</th><th>exemple</th></tr>
<tr><td>doch</td><td>insistance, reproche, « voyons »</td><td>Komm <b>doch</b> mit! · Das weißt du <b>doch</b>!</td></tr>
<tr><td>ja</td><td>évidence partagée, surprise</td><td>Das ist <b>ja</b> toll!</td></tr>
<tr><td>mal</td><td>adoucit une demande</td><td>Kannst du <b>mal</b> kommen?</td></tr>
<tr><td>eben / halt</td><td>c'est comme ça (résignation)</td><td>Das ist <b>halt</b> so.</td></tr>
<tr><td>eigentlich</td><td>au fait, en fait</td><td>Wie heißt du <b>eigentlich</b>?</td></tr>
<tr><td>wohl</td><td>probablement</td><td>Er ist <b>wohl</b> krank.</td></tr>
<tr><td>denn</td><td>question plus naturelle, curiosité</td><td>Was ist <b>denn</b> los?</td></tr>
<tr><td>schon</td><td>rassurer</td><td>Das klappt <b>schon</b>.</td></tr></table>`,
  ex: [
    {q: "Komm ___ mit, das wird lustig!", a: ["doch"], c: ["doch", "denn", "eben"], fr: "Viens donc avec nous, ça va être sympa !", why: "Invitation insistante → doch."},
    {q: "Was ist ___ los? Du siehst traurig aus.", a: ["denn"], c: ["denn", "halt", "mal"], fr: "Qu'est-ce qui se passe ? Tu as l'air triste.", why: "Question curieuse → denn."},
    {q: "Kannst du ___ kurz das Fenster zumachen?", a: ["mal"], c: ["mal", "ja", "doch"], fr: "Tu peux fermer la fenêtre deux secondes ?", why: "Adoucir une demande → mal."},
    {q: "Das ist ___ eine tolle Überraschung!", a: ["ja"], c: ["ja", "mal", "eben"], fr: "Mais quelle belle surprise !", why: "Surprise → ja."},
    {q: "Ich verstehe es auch nicht, das ist ___ so.", a: ["halt"], c: ["halt", "denn", "mal"], fr: "Je ne comprends pas non plus, c'est comme ça.", why: "Résignation → halt / eben."},
    {q: "Keine Sorge, das klappt ___!", a: ["schon"], c: ["schon", "denn", "mal"], fr: "Ne t'inquiète pas, ça va marcher !", why: "Rassurer → schon."},
    {q: "Woher kommst du ___? (au fait)", a: ["eigentlich"], c: ["eigentlich", "halt", "ja"], fr: "Au fait, tu viens d'où ?", why: "au fait → eigentlich."}
  ]
},
{
  id: "c1-fvg", level: "C1",
  title: "Expressions verbo-nominales",
  sub: "zur Verfügung stellen, in Kraft treten…",
  body: `
<p>Dans la langue administrative et professionnelle, un verbe simple est souvent remplacé par <b>nom + verbe « vide »</b> (Funktionsverbgefüge).</p>
<table><tr><th>expression</th><th>= verbe simple</th><th>sens</th></tr>
<tr><td>zur Verfügung stellen</td><td>bereitstellen</td><td>mettre à disposition</td></tr>
<tr><td>in Frage stellen</td><td>bezweifeln</td><td>remettre en question</td></tr>
<tr><td>eine Entscheidung treffen</td><td>entscheiden</td><td>prendre une décision</td></tr>
<tr><td>in Kraft treten</td><td>gültig werden</td><td>entrer en vigueur</td></tr>
<tr><td>zum Ausdruck bringen</td><td>ausdrücken</td><td>exprimer</td></tr>
<tr><td>Kritik üben an</td><td>kritisieren</td><td>critiquer</td></tr>
<tr><td>in Betracht ziehen</td><td>berücksichtigen</td><td>envisager</td></tr>
<tr><td>Bescheid geben / sagen</td><td>informieren</td><td>prévenir</td></tr>
<tr><td>eine Rolle spielen</td><td>wichtig sein</td><td>jouer un rôle</td></tr>
<tr><td>zur Sprache bringen</td><td>ansprechen</td><td>aborder (un sujet)</td></tr></table>`,
  ex: [
    {q: "Wir müssen bis morgen eine Entscheidung ___.", a: ["treffen"], c: ["treffen", "machen", "nehmen"], fr: "Nous devons prendre une décision d'ici demain.", why: "eine Entscheidung treffen."},
    {q: "Das neue Gesetz tritt im Januar in ___.", a: ["Kraft"], fr: "La nouvelle loi entre en vigueur en janvier.", why: "in Kraft treten."},
    {q: "Die Firma stellt uns einen Laptop zur ___.", a: ["Verfügung"], fr: "L'entreprise nous met un ordinateur à disposition.", why: "zur Verfügung stellen."},
    {q: "Können Sie mir bis Freitag Bescheid ___?", a: ["geben", "sagen"], c: ["geben", "machen", "stellen"], fr: "Pouvez-vous me prévenir d'ici vendredi ?", why: "Bescheid geben / sagen."},
    {q: "Der Preis spielt für uns keine große ___.", a: ["Rolle"], fr: "Le prix ne joue pas un grand rôle pour nous.", why: "eine Rolle spielen."},
    {q: "Diese Option sollten wir auch in Betracht ___.", a: ["ziehen"], c: ["ziehen", "stellen", "nehmen"], fr: "Nous devrions aussi envisager cette option.", why: "in Betracht ziehen."},
    {q: "Ich möchte heute ein Problem zur Sprache ___.", a: ["bringen"], c: ["bringen", "stellen", "geben"], fr: "Je voudrais aborder un problème aujourd'hui.", why: "zur Sprache bringen."}
  ]
},
{
  id: "c1-konzessiv", level: "C1",
  title: "Nuancer une opposition",
  sub: "wenngleich, zwar… dennoch, so… auch, ungeachtet",
  body: `
<table><tr><th>forme</th><th>registre</th><th>exemple</th></tr>
<tr><td>obwohl / obgleich / wenngleich</td><td>courant → soutenu</td><td>Wenngleich das Projekt teuer war, hat es sich gelohnt.</td></tr>
<tr><td>zwar …, dennoch / jedoch</td><td>soutenu</td><td>Das Angebot ist zwar gut, dennoch lehnen wir ab.</td></tr>
<tr><td>so + adj. + auch</td><td>si… que</td><td>So schwer es auch ist, wir schaffen es.</td></tr>
<tr><td>wie … auch immer</td><td>quel que soit</td><td>Wie du dich auch entscheidest, ich unterstütze dich.</td></tr>
<tr><td>selbst wenn / auch wenn</td><td>même si</td><td>Auch wenn es regnet, gehen wir.</td></tr>
<tr><td>ungeachtet + gén.</td><td>très soutenu</td><td>Ungeachtet der Kritik hielt er an seinem Plan fest.</td></tr></table>
<p>Après <b>so … auch</b> et <b>wie … auch</b>, la principale garde souvent l'ordre normal : <i>So teuer es auch ist, <b>ich kaufe</b> es.</i></p>`,
  ex: [
    {q: "___ das Wetter schlecht war, fand das Fest statt. (soutenu)", a: ["Wenngleich"], c: ["Wenngleich", "Zwar", "Dennoch"], fr: "Bien que le temps fût mauvais, la fête a eu lieu.", why: "Subordonnant soutenu → wenngleich."},
    {q: "Das Angebot ist zwar attraktiv, ___ müssen wir ablehnen.", a: ["dennoch"], c: ["dennoch", "obwohl", "wenn"], fr: "L'offre est certes attrayante, nous devons pourtant refuser.", why: "zwar … dennoch (verbe en 2e position)."},
    {q: "So schwierig es ___ ist, wir geben nicht auf.", a: ["auch"], fr: "Aussi difficile que ce soit, nous n'abandonnons pas.", why: "so … auch."},
    {q: "___ wenn ich müde bin, gehe ich joggen.", a: ["Auch", "Selbst"], c: ["Auch", "So", "Wie"], fr: "Même si je suis fatigué, je vais courir.", why: "même si → auch / selbst wenn."},
    {q: "___ der hohen Kosten wurde das Projekt fortgesetzt.", a: ["Ungeachtet"], c: ["Ungeachtet", "Obwohl", "Zwar"], fr: "Malgré les coûts élevés, le projet a été poursuivi.", why: "Préposition + génitif → ungeachtet."},
    {q: "Wie du dich ___ immer entscheidest, ich helfe dir.", a: ["auch"], fr: "Quelle que soit ta décision, je t'aiderai.", why: "wie … auch immer."}
  ]
},
{
  id: "c1-inf-passe", level: "C1",
  title: "Infinitif passé et passif",
  sub: "gemacht haben, gemacht worden sein",
  body: `
<table><tr><th>forme</th><th>exemple</th></tr>
<tr><td>infinitif présent actif</td><td>machen</td></tr>
<tr><td>infinitif passé actif</td><td>gemacht <b>haben</b> / gegangen <b>sein</b></td></tr>
<tr><td>infinitif présent passif</td><td>gemacht <b>werden</b></td></tr>
<tr><td>infinitif passé passif</td><td>gemacht <b>worden sein</b></td></tr></table>
<p>Utilisé avec <b>zu</b>, les modaux subjectifs et le futur :</p>
<ul><li><i>Ich bin froh, die Prüfung <b>bestanden zu haben</b>.</i> (d'avoir réussi)</li>
<li><i>Er bedauert, so früh <b>gegangen zu sein</b>.</i></li>
<li><i>Das Bild soll im 16. Jahrhundert <b>gemalt worden sein</b>.</i></li>
<li><i>Ich hoffe, <b>eingeladen zu werden</b>.</i> (d'être invité)</li></ul>`,
  ex: [
    {q: "Ich freue mich, Sie kennengelernt zu ___.", a: ["haben"], c: ["haben", "sein", "werden"], fr: "Je suis ravi de vous avoir rencontré.", why: "kennenlernen → haben."},
    {q: "Er bedauert, nicht mitgekommen zu ___.", a: ["sein"], c: ["haben", "sein", "werden"], fr: "Il regrette de ne pas être venu.", why: "mitkommen → sein."},
    {q: "Ich hoffe, zum Vorstellungsgespräch eingeladen zu ___.", a: ["werden"], c: ["haben", "sein", "werden"], fr: "J'espère être invité à l'entretien.", why: "Passif présent → werden."},
    {q: "Die Kirche soll im Mittelalter gebaut worden ___.", a: ["sein"], c: ["haben", "sein", "werden"], fr: "L'église aurait été construite au Moyen Âge.", why: "Infinitif passé passif → worden sein."},
    {q: "Sie behauptet, den Brief nie bekommen zu ___.", a: ["haben"], c: ["haben", "sein"], fr: "Elle affirme ne jamais avoir reçu la lettre.", why: "bekommen → haben."},
    {q: "Er gibt zu, einen Fehler gemacht zu ___.", a: ["haben"], c: ["haben", "sein", "werden"], fr: "Il admet avoir fait une erreur.", why: "machen → haben : gemacht zu haben."}
  ]
}
);
