// Leçons B2.
GRAMMAR.push(
{
  id: "b2-passif-plus", level: "B2",
  title: "Le passif à tous les temps",
  sub: "avec modaux, au Perfekt, au Plusquamperfekt",
  body: `
<table><tr><th>temps</th><th>exemple</th></tr>
<tr><td>présent</td><td>Der Bericht <b>wird</b> geschrieben.</td></tr>
<tr><td>prétérit</td><td>Der Bericht <b>wurde</b> geschrieben.</td></tr>
<tr><td>Perfekt</td><td>Der Bericht <b>ist</b> geschrieben <b>worden</b>.</td></tr>
<tr><td>Plusquamperfekt</td><td>Der Bericht <b>war</b> geschrieben <b>worden</b>.</td></tr>
<tr><td>futur</td><td>Der Bericht <b>wird</b> geschrieben <b>werden</b>.</td></tr>
<tr><td>avec modal</td><td>Der Bericht <b>muss</b> geschrieben <b>werden</b>.</td></tr>
<tr><td>modal au passé</td><td>Der Bericht <b>musste</b> geschrieben <b>werden</b>.</td></tr></table>
<p>En subordonnée, le verbe conjugué va tout à la fin : <i>…, dass der Bericht geschrieben werden <b>muss</b>.</i></p>
<p>Passif sans sujet (avec verbes sans COD) : <i>Hier <b>wird</b> nicht <b>geraucht</b>. · Dem Kunden <b>wurde</b> sofort <b>geholfen</b>.</i></p>`,
  ex: [
    {q: "Das Problem muss sofort gelöst ___.", a: ["werden"], c: ["werden", "worden", "wird"], fr: "Le problème doit être résolu immédiatement.", why: "Modal + participe + werden."},
    {q: "Die Daten sind gestern gelöscht ___.", a: ["worden"], c: ["werden", "worden", "geworden"], fr: "Les données ont été effacées hier.", why: "Perfekt passif → worden."},
    {q: "Als ich ankam, ___ das Meeting schon beendet worden.", a: ["war"], c: ["war", "ist", "wurde"], fr: "Quand je suis arrivé, la réunion avait déjà été terminée.", why: "Plusquamperfekt passif → war … worden."},
    {q: "Dem Kunden ___ sofort geholfen.", a: ["wurde"], c: ["wurde", "wurden", "hat"], fr: "Le client a été aidé immédiatement.", why: "Sans sujet → verbe au singulier."},
    {q: "Die Dokumente konnten nicht gefunden ___.", a: ["werden"], c: ["werden", "worden", "sein"], fr: "Les documents n'ont pas pu être trouvés.", why: "Modal au passé + participe + werden."},
    {q: "Ich glaube, dass das Projekt verschoben werden ___.", a: ["muss"], fr: "Je crois que le projet doit être reporté.", why: "Subordonnée : modal tout à la fin."},
    {q: "Die neue Software wird nächste Woche installiert ___.", a: ["werden"], c: ["werden", "worden", "sein"], fr: "Le nouveau logiciel sera installé la semaine prochaine.", why: "Futur passif → wird … werden."}
  ]
},
{
  id: "b2-zustand", level: "B2",
  title: "Passif d'action ou d'état",
  sub: "wird geöffnet / ist geöffnet",
  body: `
<p><b>Vorgangspassiv</b> (werden + participe) : l'action en train de se faire. <i>Die Tür <b>wird</b> geöffnet.</i> (on ouvre la porte)</p>
<p><b>Zustandspassiv</b> (sein + participe) : le <b>résultat</b>, l'état. <i>Die Tür <b>ist</b> geöffnet.</i> (la porte est ouverte)</p>
<table><tr><th>action</th><th>résultat</th></tr>
<tr><td>Das Geschäft wird um 9 geöffnet.</td><td>Das Geschäft ist bis 20 Uhr geöffnet.</td></tr>
<tr><td>Der Tisch wurde reserviert.</td><td>Der Tisch ist reserviert.</td></tr>
<tr><td>Die Rechnung wird bezahlt.</td><td>Die Rechnung ist schon bezahlt.</td></tr></table>
<p>Au passé, l'état : <i>Der Tisch <b>war</b> reserviert.</i></p>`,
  ex: [
    {q: "Keine Sorge, der Tisch ___ schon reserviert.", a: ["ist"], c: ["ist", "wird"], fr: "Pas d'inquiétude, la table est déjà réservée.", why: "Résultat → sein."},
    {q: "Das Museum ___ um 10 Uhr geöffnet. (on l'ouvre)", a: ["wird"], c: ["ist", "wird"], fr: "Le musée ouvre à 10 heures.", why: "Action → werden."},
    {q: "Die Bank ___ heute geschlossen.", a: ["ist"], c: ["ist", "wird"], fr: "La banque est fermée aujourd'hui.", why: "État → sein."},
    {q: "Als wir kamen, ___ alles schon vorbereitet.", a: ["war"], c: ["war", "wurde"], fr: "Quand nous sommes arrivés, tout était déjà prêt.", why: "État au passé → war."},
    {q: "Gerade ___ das Büro renoviert.", a: ["wird"], c: ["ist", "wird"], fr: "Le bureau est en cours de rénovation.", why: "Action en cours → werden."},
    {q: "Die Rechnung ___ seit Montag bezahlt.", a: ["ist"], c: ["ist", "wird"], fr: "La facture est payée depuis lundi.", why: "État → sein."}
  ]
},
{
  id: "b2-konj1", level: "B2",
  title: "Le discours indirect (Konjunktiv I)",
  sub: "Er sagt, er sei krank",
  body: `
<p>Les journaux et la langue formelle rapportent les paroles de quelqu'un avec le <b>Konjunktiv I</b>.</p>
<p>Formation : radical + <b>-e</b>. La forme la plus utilisée est la 3e personne : er hab<b>e</b>, er komm<b>e</b>, er könn<b>e</b>, er werd<b>e</b>.</p>
<table><tr><th></th><th>sein</th><th>haben</th><th>können</th></tr>
<tr><td>ich</td><td>sei</td><td>(hätte)</td><td>könne</td></tr>
<tr><td>er / sie</td><td>sei</td><td>habe</td><td>könne</td></tr>
<tr><td>wir / sie</td><td>seien</td><td>(hätten)</td><td>(könnten)</td></tr></table>
<p>Quand le Konjunktiv I ressemble au présent normal, on prend le <b>Konjunktiv II</b> (sie haben → sie <b>hätten</b>).</p>
<p><b>Passé</b> : habe / sei + participe. <i>Er sagte, er <b>habe</b> nichts <b>gewusst</b>.</i></p>
<p><b>Futur</b> : werde + infinitif. <i>Sie sagte, sie <b>werde</b> morgen <b>kommen</b>.</i></p>`,
  ex: [
    {q: "Der Minister sagte, er ___ zufrieden. (sein)", a: ["sei"], c: ["sei", "ist", "wäre"], fr: "Le ministre a dit qu'il était satisfait.", why: "sein → er sei."},
    {q: "Sie erklärte, sie ___ keine Zeit. (haben)", a: ["habe"], c: ["habe", "hat", "hätte"], fr: "Elle a expliqué qu'elle n'avait pas le temps.", why: "haben → sie habe."},
    {q: "Er behauptet, er ___ das nicht gewusst.", a: ["habe"], c: ["habe", "sei", "hat"], fr: "Il prétend qu'il ne le savait pas.", why: "Passé : habe + participe."},
    {q: "Die Zeugen sagten, sie ___ nichts gesehen.", a: ["hätten"], c: ["haben", "hätten", "habe"], fr: "Les témoins ont dit qu'ils n'avaient rien vu.", why: "sie haben = présent → on prend le Konj. II hätten."},
    {q: "Der Chef meinte, das Projekt ___ bald fertig. (sein)", a: ["sei"], fr: "Le chef a dit que le projet serait bientôt fini.", why: "sein → sei."},
    {q: "Sie sagte, sie ___ morgen anrufen.", a: ["werde"], c: ["werde", "wird", "würde"], fr: "Elle a dit qu'elle appellerait demain.", why: "Futur au discours indirect → werde."},
    {q: "Laut Polizei ___ der Fahrer zu schnell gefahren.", a: ["sei"], c: ["sei", "habe", "ist"], fr: "Selon la police, le conducteur aurait roulé trop vite.", why: "fahren → sein : sei gefahren."}
  ]
},
{
  id: "b2-konj2-passe", level: "B2",
  title: "Le conditionnel passé",
  sub: "Wenn ich das gewusst hätte…",
  body: `
<p>Pour des regrets ou des hypothèses sur le <b>passé</b> : <b>hätte / wäre</b> + participe passé.</p>
<p><i>Wenn ich das <b>gewusst hätte</b>, <b>wäre</b> ich früher <b>gekommen</b>.</i> (si j'avais su, je serais venu plus tôt)</p>
<p>Même choix haben / sein qu'au Perfekt.</p>
<p><b>Avec un modal</b> : double infinitif. <i>Du <b>hättest</b> mich <b>anrufen sollen</b>.</i> (tu aurais dû m'appeler) · <i>Ich <b>hätte</b> das <b>machen können</b>.</i></p>
<p><b>Sans wenn</b> : le verbe commence la phrase. <i><b>Hätte</b> ich das gewusst, wäre ich gekommen.</i></p>
<p>Souhait irréel : <i>Wenn ich doch nur mehr gelernt <b>hätte</b>!</i></p>`,
  ex: [
    {q: "Wenn ich das gewusst ___, hätte ich dir geholfen.", a: ["hätte"], c: ["hätte", "wäre", "würde"], fr: "Si j'avais su, je t'aurais aidé.", why: "wissen → haben : hätte gewusst."},
    {q: "Wenn der Zug pünktlich gewesen wäre, ___ wir nicht zu spät gekommen.", a: ["wären"], c: ["hätten", "wären", "würden"], fr: "Si le train avait été à l'heure, nous ne serions pas arrivés en retard.", why: "kommen → sein : wären gekommen."},
    {q: "Du hättest mich anrufen ___.", a: ["sollen"], c: ["sollen", "gesollt", "sollten"], fr: "Tu aurais dû m'appeler.", why: "Modal → double infinitif."},
    {q: "___ ich mehr Zeit gehabt, hätte ich das Buch gelesen.", a: ["Hätte"], c: ["Hätte", "Wenn", "Wäre"], fr: "Si j'avais eu plus de temps, j'aurais lu le livre.", why: "Sans wenn → le verbe commence."},
    {q: "Ich ___ gern mitgekommen, aber ich war krank.", a: ["wäre"], c: ["hätte", "wäre", "würde"], fr: "Je serais bien venu, mais j'étais malade.", why: "mitkommen → sein."},
    {q: "Wir hätten früher losfahren ___. (devoir)", a: ["müssen"], fr: "Nous aurions dû partir plus tôt.", why: "Double infinitif : losfahren müssen."}
  ]
},
{
  id: "b2-partizip", level: "B2",
  title: "Les participes comme adjectifs",
  sub: "die lachende Frau, das gekaufte Auto",
  body: `
<p><b>Partizip I</b> (infinitif + <b>d</b>) : action <b>en cours</b>, sens actif. <i>das schlafen<b>d</b>e Kind</i> (l'enfant qui dort)</p>
<p><b>Partizip II</b> (participe passé) : action <b>terminée</b> ou sens passif. <i>das reparier<b>t</b>e Auto</i> (la voiture réparée)</p>
<p>Comme les adjectifs, ils prennent les terminaisons : <i>mit dem steigend<b>en</b> Umsatz, ein gut vorbereitet<b>er</b> Vortrag</i>.</p>
<table><tr><th>relative</th><th>participe</th></tr>
<tr><td>der Preis, der steigt</td><td>der steigende Preis</td></tr>
<tr><td>die Wohnung, die renoviert wurde</td><td>die renovierte Wohnung</td></tr>
<tr><td>die Gäste, die ankommen</td><td>die ankommenden Gäste</td></tr></table>`,
  ex: [
    {q: "Das ___ Kind darf man nicht wecken. (schlafen)", a: ["schlafende"], fr: "Il ne faut pas réveiller l'enfant qui dort.", why: "En cours → Partizip I : schlafend + e."},
    {q: "Die ___ Wohnung ist sehr hell. (renovieren)", a: ["renovierte"], fr: "L'appartement rénové est très lumineux.", why: "Passif, terminé → Partizip II + e."},
    {q: "Wegen der ___ Preise kaufen die Leute weniger. (steigen)", a: ["steigenden"], fr: "À cause des prix qui augmentent, les gens achètent moins.", why: "Partizip I, génitif pluriel → -en."},
    {q: "Ich habe die ___ E-Mail noch nicht gelesen. (schicken)", a: ["geschickte"], fr: "Je n'ai pas encore lu l'e-mail envoyé.", why: "Partizip II, accusatif féminin → -e."},
    {q: "Wir begrüßen die ___ Gäste. (ankommen)", a: ["ankommenden"], fr: "Nous accueillons les invités qui arrivent.", why: "Partizip I, pluriel → -en."},
    {q: "Das ist ein gut ___ Plan. (durchdenken)", a: ["durchdachter"], fr: "C'est un plan bien réfléchi.", why: "durchdenken → durchdacht ; ein + masculin nominatif → -er."}
  ]
},
{
  id: "b2-praep-gen", level: "B2",
  title: "Prépositions formelles + génitif",
  sub: "aufgrund, innerhalb, bezüglich…",
  body: `
<p>Langue écrite et professionnelle :</p>
<table><tr><th>préposition</th><th>sens</th><th>exemple</th></tr>
<tr><td>aufgrund</td><td>en raison de</td><td>aufgrund des Streiks</td></tr>
<tr><td>innerhalb / außerhalb</td><td>dans un délai de / en dehors de</td><td>innerhalb einer Woche</td></tr>
<tr><td>während</td><td>pendant</td><td>während der Sitzung</td></tr>
<tr><td>trotz</td><td>malgré</td><td>trotz des schlechten Wetters</td></tr>
<tr><td>statt / anstelle</td><td>au lieu de</td><td>statt eines Briefes</td></tr>
<tr><td>bezüglich</td><td>concernant</td><td>bezüglich Ihrer Anfrage</td></tr>
<tr><td>infolge</td><td>à la suite de</td><td>infolge des Unfalls</td></tr>
<tr><td>mithilfe</td><td>à l'aide de</td><td>mithilfe eines Programms</td></tr>
<tr><td>laut</td><td>selon</td><td>laut des Berichts / laut Bericht</td></tr></table>
<p>Adjectif après article au génitif → <b>-en</b> : <i>wegen des schlecht<b>en</b> Wetters</i>.</p>`,
  ex: [
    {q: "Aufgrund ___ Streiks fallen viele Züge aus.", a: ["des"], c: ["des", "dem", "den"], fr: "En raison de la grève, beaucoup de trains sont annulés.", why: "aufgrund + génitif, der Streik → des Streiks."},
    {q: "Bitte antworten Sie innerhalb ___ Woche.", a: ["einer"], c: ["eine", "einer", "einem"], fr: "Veuillez répondre dans un délai d'une semaine.", why: "innerhalb + génitif, die Woche → einer."},
    {q: "Bezüglich ___ Anfrage melde ich mich morgen.", a: ["Ihrer"], c: ["Ihre", "Ihrer", "Ihren"], fr: "Concernant votre demande, je reviens vers vous demain.", why: "bezüglich + génitif féminin → Ihrer."},
    {q: "Trotz des schlecht___ Wetters fand das Fest statt.", a: ["en"], c: ["e", "en", "es"], fr: "Malgré le mauvais temps, la fête a eu lieu.", why: "Adjectif au génitif après des → -en."},
    {q: "Statt ___ Anrufs schickte er eine E-Mail.", a: ["eines"], c: ["ein", "eines", "einem"], fr: "Au lieu d'appeler, il a envoyé un e-mail.", why: "statt + génitif, der Anruf → eines Anrufs."},
    {q: "Infolge ___ Unfalls war die Straße gesperrt.", a: ["des"], c: ["des", "dem", "der"], fr: "À la suite de l'accident, la route était fermée.", why: "infolge + génitif."}
  ]
},
{
  id: "b2-konnektoren", level: "B2",
  title: "Connecteurs avancés",
  sub: "indem, sodass, falls, obwohl, sobald…",
  body: `
<p>Tous ces connecteurs envoient le verbe <b>à la fin</b> :</p>
<table><tr><th>connecteur</th><th>sens</th><th>exemple</th></tr>
<tr><td>indem</td><td>en (+ ant), moyen</td><td>Man lernt, indem man übt.</td></tr>
<tr><td>sodass / so …, dass</td><td>si bien que</td><td>Es regnete, sodass wir zu Hause blieben.</td></tr>
<tr><td>falls / sofern</td><td>au cas où / dans la mesure où</td><td>Falls du Fragen hast, ruf an.</td></tr>
<tr><td>sobald</td><td>dès que</td><td>Sobald ich fertig bin, komme ich.</td></tr>
<tr><td>solange</td><td>tant que</td><td>Solange es regnet, bleiben wir drin.</td></tr>
<tr><td>seitdem</td><td>depuis que</td><td>Seitdem er hier wohnt, …</td></tr>
<tr><td>bis</td><td>jusqu'à ce que</td><td>Warte, bis ich komme.</td></tr>
<tr><td>während</td><td>tandis que (opposition)</td><td>Er arbeitet viel, während sie …</td></tr>
<tr><td>anstatt dass / ohne dass</td><td>au lieu que / sans que</td><td>Er ging, ohne dass ich es merkte.</td></tr></table>`,
  ex: [
    {q: "Man verbessert sein Deutsch, ___ man viel spricht.", a: ["indem"], c: ["indem", "sodass", "falls"], fr: "On améliore son allemand en parlant beaucoup.", why: "Moyen → indem."},
    {q: "___ du Hilfe brauchst, ruf mich an.", a: ["Falls"], c: ["Falls", "Indem", "Seitdem"], fr: "Au cas où tu aurais besoin d'aide, appelle-moi.", why: "Condition éventuelle → falls."},
    {q: "Der Zug hatte Verspätung, ___ ich das Meeting verpasst habe.", a: ["sodass"], c: ["sodass", "indem", "solange"], fr: "Le train avait du retard, si bien que j'ai raté la réunion.", why: "Conséquence → sodass."},
    {q: "Ich rufe dich an, ___ ich angekommen bin.", a: ["sobald"], c: ["sobald", "solange", "bis"], fr: "Je t'appelle dès que je suis arrivé.", why: "dès que → sobald."},
    {q: "___ er in Berlin wohnt, spricht er besser Deutsch.", a: ["Seitdem"], c: ["Seitdem", "Sobald", "Falls"], fr: "Depuis qu'il habite à Berlin, il parle mieux allemand.", why: "depuis que → seitdem."},
    {q: "Warte hier, ___ ich zurückkomme.", a: ["bis"], c: ["bis", "solange", "sobald"], fr: "Attends ici jusqu'à ce que je revienne.", why: "jusqu'à ce que → bis."},
    {q: "Sie hat das Büro verlassen, ohne dass es jemand ___.", a: ["bemerkt hat"], c: ["hat bemerkt", "bemerkt hat"], fr: "Elle a quitté le bureau sans que personne ne le remarque.", why: "Verbe conjugué à la fin."}
  ]
},
{
  id: "b2-relatives-plus", level: "B2",
  title: "Relatives avec was, wo, wer",
  sub: "alles, was… · die Stadt, wo… · Wer…, der…",
  body: `
<ul>
<li><b>was</b> après <b>alles, nichts, etwas, vieles, das</b> et un superlatif neutre : <i>Das ist alles, <b>was</b> ich weiß. · Das Beste, <b>was</b> ich je gegessen habe.</i></li>
<li><b>was</b> pour reprendre toute une phrase : <i>Er kam zu spät, <b>was</b> mich ärgerte.</i></li>
<li><b>wo</b> pour un lieu (oral) : <i>die Stadt, <b>wo</b> ich wohne</i> (= in der ich wohne).</li>
<li><b>wer …, (der)</b> : celui qui (général). <i><b>Wer</b> viel arbeitet, <b>(der)</b> braucht Pausen.</i></li>
<li><b>wo(r)- + préposition</b> pour une chose vague : <i>Das ist etwas, <b>worüber</b> ich nicht sprechen möchte.</i></li></ul>`,
  ex: [
    {q: "Das ist alles, ___ ich weiß.", a: ["was"], c: ["was", "das", "die"], fr: "C'est tout ce que je sais.", why: "Après alles → was."},
    {q: "Er hat die Prüfung bestanden, ___ mich sehr freut.", a: ["was"], c: ["was", "das", "der"], fr: "Il a réussi l'examen, ce qui me fait très plaisir.", why: "Reprend toute la phrase → was."},
    {q: "Das ist das Café, ___ wir uns kennengelernt haben.", a: ["wo"], c: ["wo", "was", "wohin"], fr: "C'est le café où nous nous sommes rencontrés.", why: "Lieu → wo."},
    {q: "___ zu spät kommt, muss draußen warten.", a: ["Wer"], c: ["Wer", "Der", "Was"], fr: "Celui qui arrive en retard doit attendre dehors.", why: "Celui qui (général) → wer."},
    {q: "Das ist das Schönste, ___ ich je gesehen habe.", a: ["was"], c: ["was", "das", "wo"], fr: "C'est la plus belle chose que j'aie jamais vue.", why: "Superlatif neutre → was."},
    {q: "Es gibt etwas, ___ ich mit dir sprechen muss.", a: ["worüber"], c: ["worüber", "darüber", "was"], fr: "Il y a quelque chose dont je dois parler avec toi.", why: "sprechen über + chose vague → worüber."}
  ]
},
{
  id: "b2-nominal", level: "B2",
  title: "Nominaliser",
  sub: "weil es regnet → wegen des Regens",
  body: `
<p>À l'écrit professionnel, on transforme souvent une subordonnée en <b>groupe nominal</b>.</p>
<table><tr><th>verbal</th><th>nominal</th></tr>
<tr><td>weil es regnet</td><td>wegen des Regens</td></tr>
<tr><td>obwohl er krank war</td><td>trotz seiner Krankheit</td></tr>
<tr><td>wenn man bestellt</td><td>bei einer Bestellung</td></tr>
<tr><td>nachdem er angekommen war</td><td>nach seiner Ankunft</td></tr>
<tr><td>bevor das Meeting beginnt</td><td>vor Beginn des Meetings</td></tr>
<tr><td>während sie studierte</td><td>während ihres Studiums</td></tr>
<tr><td>um Kosten zu sparen</td><td>zur Einsparung von Kosten</td></tr></table>
<p>Formation des noms : infinitif neutre (<b>das</b> Lesen), -ung (<b>die</b> Lösung), radical (<b>der</b> Beginn, <b>der</b> Anruf).</p>`,
  ex: [
    {q: "Weil es stark regnete → ___ des starken Regens", a: ["Wegen"], c: ["Wegen", "Trotz", "Bei"], fr: "À cause de la forte pluie", why: "weil → wegen."},
    {q: "Obwohl sie krank war → ___ ihrer Krankheit", a: ["Trotz"], c: ["Wegen", "Trotz", "Nach"], fr: "Malgré sa maladie", why: "obwohl → trotz."},
    {q: "Nachdem er angekommen war → nach seiner ___", a: ["Ankunft"], fr: "Après son arrivée", why: "ankommen → die Ankunft."},
    {q: "Wenn man Fragen hat → ___ Fragen", a: ["Bei"], c: ["Bei", "Mit", "Vor"], fr: "En cas de questions", why: "wenn → bei."},
    {q: "Bevor die Sitzung beginnt → vor ___ der Sitzung", a: ["Beginn"], fr: "Avant le début de la séance", why: "beginnen → der Beginn."},
    {q: "Um das Problem zu lösen → zur ___ des Problems", a: ["Lösung"], fr: "Pour résoudre le problème", why: "lösen → die Lösung ; zu + der = zur."}
  ]
},
{
  id: "b2-futur2", level: "B2",
  title: "Le futur antérieur et la supposition",
  sub: "Er wird es vergessen haben",
  body: `
<p><b>Futur II</b> : werden + participe passé + <b>haben / sein</b>.</p>
<ul><li>Action terminée dans le futur : <i>Bis Freitag <b>werde</b> ich den Bericht <b>geschrieben haben</b>.</i></li>
<li>Surtout : <b>supposition sur le passé</b> (avec wohl, sicher, bestimmt) : <i>Er ist nicht da. Er <b>wird</b> den Termin wohl <b>vergessen haben</b>.</i> (il a dû oublier)</li></ul>
<p><b>Futur I + wohl</b> = supposition sur le présent : <i>Sie <b>wird</b> wohl im Stau <b>stehen</b>.</i></p>`,
  ex: [
    {q: "Bis Montag werde ich das Projekt beendet ___.", a: ["haben"], c: ["haben", "sein", "werden"], fr: "D'ici lundi, j'aurai terminé le projet.", why: "beenden → haben."},
    {q: "Er ist noch nicht da. Er wird den Zug verpasst ___.", a: ["haben"], c: ["haben", "sein"], fr: "Il n'est pas encore là. Il a dû rater le train.", why: "Supposition sur le passé → Futur II."},
    {q: "Sie werden schon nach Hause gegangen ___.", a: ["sein"], c: ["haben", "sein"], fr: "Ils doivent déjà être rentrés à la maison.", why: "gehen → sein."},
    {q: "Wo ist Anna? – Sie ___ wohl noch im Meeting sein.", a: ["wird"], c: ["wird", "ist", "hat"], fr: "Où est Anna ? – Elle doit être encore en réunion.", why: "Supposition sur le présent → wird … sein."},
    {q: "In zwei Jahren ___ ich mein Studium abgeschlossen haben.", a: ["werde"], c: ["werde", "habe", "würde"], fr: "Dans deux ans, j'aurai terminé mes études.", why: "Futur II → werde … haben."}
  ]
}
);
