const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.setAttribute('aria-expanded','false'); nav.classList.remove('open'); }));
document.addEventListener('keydown', e => { if(e.key==='Escape' && nav.classList.contains('open')) { menu.click(); menu.focus(); } });
const content = {
 song1:['Daheim · Song-Demo','Dieser Titel und das Thema sind frei gewählte Beispiele für die Präsentation. Es liegt keine echte Gradseläd-Aufnahme vor. Für V0.2 brauchen wir einen ausgewählten eigenen Song, eine Hörprobe und zwei persönliche Sätze über seine Entstehung.'],
 song2:['Noch e bissl bleiben · Song-Demo','Ein illustrativer Titel, kein bestätigter Gradseläd-Song. Hier würde später eine echte Hörprobe starten. Die Demo spielt bewusst keine fremde oder künstlich erzeugte Musik ab.'],
 song3:['Mittendrin · Song-Demo','Ein Beispiel für eine dritte Song-Karte. Titel, Thema und Cover-Zuordnung sind Platzhalter. Eine echte Aufnahme, der freigegebene Titel und die Geschichte dazu fehlen noch.'],
 video:['Hier wird’s später live.','Das gezeigte Bild stammt von der bestehenden Gradseläd-Website. Ein verwendbares Live-Video liegt uns noch nicht vor. Für V0.2 bietet sich eine kurze, authentische Session mit einem eigenen Song an – mit gut verständlichem Ton.'],
 event:['Ein Termin als Beispiel','Diese Karte zeigt nur das künftige Layout. Es gibt keine bestätigte Veranstaltung, kein Datum, keinen Ort und keine Ticketbuchung. Später passen hier die echten Veranstaltungsdetails und ein verifizierter Veranstalter-Link hinein.'],
 instagram:['Instagram · Verbindung offen','Auf der bestehenden Website war kein verifizierbarer Instagram-Link zu finden. Für V0.2 benötigen wir die bestätigte Profiladresse. Dieser Button öffnet kein erfundenes Konto.'],
 youtube:['YouTube · Verbindung offen','Ein offizieller YouTube-Kanal ist noch zu bestätigen. Hier könnten später Live-Sessions und eigene Songs erreichbar sein. Es wurde kein Kanal angelegt oder verbunden.'],
 spotify:['Spotify · Verbindung offen','Ein offizielles Künstlerprofil und verfügbare Veröffentlichungen müssen erst bestätigt werden. Diese Demo behauptet keine bestehenden Streaming-Veröffentlichungen.'],
 social:['Bleib in Verbindung','Instagram, YouTube und Spotify sind in V0.1 sichtbar als Demo angelegt. Offizielle Profile müssen von Gradseläd bestätigt werden. Der öffentliche Booking-Kontakt ist bereits im Kontaktbereich enthalten.'],
 impressum:['Impressum · Platzhalter','Dies ist ein lokaler, unveröffentlichter Demonstrator. Verbindliche Betreiberangaben wurden nicht erfunden. Für eine spätere Veröffentlichung müssen die verantwortliche Person, die freigegebenen Kontaktdaten und das vollständige Impressum vorliegen.'],
 datenschutz:['Datenschutz · Demo-Hinweis','Der Prototyp enthält keine Analyse-Dienste, Cookies, Formulare oder eingebetteten Streaming-Player. Bilder, Gestaltung und Programmcode werden lokal geladen. E-Mail- und Telefonlinks öffnen die entsprechende Anwendung; diese Website versendet nichts automatisch. Eine vollständige Datenschutzerklärung für eine spätere Live-Version ist noch zu erstellen.']
};
const dialog=document.querySelector('#demo-dialog');
let lastTrigger;
document.querySelectorAll('[data-demo]').forEach(button=>button.addEventListener('click',()=>{lastTrigger=button;const [title,copy]=content[button.dataset.demo];document.querySelector('#dialog-title').textContent=title;document.querySelector('#dialog-copy').textContent=copy;dialog.showModal();}));
document.querySelectorAll('.dialog-close,.dialog-done').forEach(button=>button.addEventListener('click',()=>dialog.close()));
dialog.addEventListener('close',()=>lastTrigger?.focus());
dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.target===dialog&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))dialog.close();});
