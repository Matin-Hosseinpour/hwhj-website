const $ = (q, el=document) => el.querySelector(q);
const $$ = (q, el=document) => [...el.querySelectorAll(q)];

const yt = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
const google = (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}`;

const data = {
  library: [
    ['کتاب نمونه ۱: تاریخ اجتماعی هزارستان','کتاب','۱۴۰۵','PDF','📚'],
    ['کتاب نمونه ۲: فرهنگ شفاهی و روایت‌ها','کتاب','۱۴۰۴','PDF','📖'],
    ['کتاب نمونه ۳: جغرافیای فرهنگی هزارستان','کتاب','۱۴۰۳','PDF','🗺️'],
    ['کتاب نمونه ۴: ادبیات معاصر هزاره','کتاب','۱۴۰۲','EPUB','✒️'],
    ['مقاله نمونه ۵: مهاجرت و شبکه‌های اجتماعی','مقاله','۱۴۰۱','Web','⌁'],
    ['مقاله نمونه ۶: موسیقی و حافظه جمعی','مقاله','۱۴۰۰','Web','🎵'],
    ['منبع نمونه ۷: آرشیو تصویری بامیان','آرشیو','۱۳۹۹','ZIP','▦'],
    ['منبع نمونه ۸: واژه‌نامه اصطلاحات','مرجع','۱۴۰۵','Web','Aa'],
    ['کتاب نمونه ۹: چهره‌های فرهنگی','کتاب','۱۴۰۳','PDF','👤'],
    ['مقاله نمونه ۱۰: رسانه‌های دیجیتال','مقاله','۱۴۰۵','Web','◎']
  ],
  news: [
    ['نمونه خبر ۱: راه‌اندازی بخش دانشنامه پرتال','اطلاعیه','۱۴۰۵/۰۷/۱۲'],
    ['نمونه خبر ۲: انتشار نسخه آزمایشی کتابخانه','کتابخانه','۱۴۰۵/۰۷/۰۹'],
    ['نمونه خبر ۳: گفت‌وگوی ویدیویی درباره تاریخ شفاهی','رسانه','۱۴۰۵/۰۷/۰۶'],
    ['نمونه خبر ۴: معرفی یک مجموعه آرشیوی جدید','آرشیو','۱۴۰۵/۰۷/۰۳'],
    ['نمونه خبر ۵: گزارش رویداد فرهنگی جوانان','رویداد','۱۴۰۵/۰۶/۲۹'],
    ['نمونه خبر ۶: آغاز فهرست ورزشکاران نمونه','ورزش','۱۴۰۵/۰۶/۲۵'],
    ['نمونه خبر ۷: اضافه‌شدن دسته بلاگران','رسانه','۱۴۰۵/۰۶/۲۱'],
    ['نمونه خبر ۸: بروزرسانی خط زمانی','دانشنامه','۱۴۰۵/۰۶/۱۸'],
    ['نمونه خبر ۹: انتشار اسناد منتخب','اسناد','۱۴۰۵/۰۶/۱۴'],
    ['نمونه خبر ۱۰: تست جستجوی یکپارچه','محصول','۱۴۰۵/۰۶/۱۰']
  ],
  explore: [
    ['ادیت نمونه ۱: پوستر شهری','پوستر', '🎨'], ['ادیت نمونه ۲: تایپوگرافی','گرافیک','✦'], ['ادیت نمونه ۳: موشن کوتاه','موشن','▶'], ['ادیت نمونه ۴: تصویر تاریخی','تصویر','▣'], ['ادیت نمونه ۵: ویدیو عمودی','Shorts','▤'],
    ['ادیت نمونه ۶: پوستر ورزشی','ورزش','⚽'], ['ادیت نمونه ۷: جلد کتاب','کتاب','▤'], ['ادیت نمونه ۸: اینفوگرافیک','اطلاعات','◫'], ['ادیت نمونه ۹: کلیپ رسانه‌ای','ویدیو','▶'], ['ادیت نمونه ۱۰: اثر هنری','هنر','✦']
  ],
  people: [
    ['چهره نمونه ۱','پژوهشگر تاریخ','ح. ر.'],['چهره نمونه ۲','نویسنده','م. ن.'],['چهره نمونه ۳','هنرمند','ف. ک.'],['چهره نمونه ۴','روزنامه‌نگار','س. د.'],['چهره نمونه ۵','فعال فرهنگی','ا. م.'],
    ['چهره نمونه ۶','دانش‌آموخته','ر. ه.'],['چهره نمونه ۷','موسیقی‌دان','ک. س.'],['چهره نمونه ۸','عکاس','ن. ی.'],['چهره نمونه ۹','مترجم','ح. ف.'],['چهره نمونه ۱۰','پژوهشگر اجتماعی','ع. ز.']
  ],
  media: [
    ['رسانه نمونه ۱','کانال خبری','به‌روزرسانی روزانه','TG','Telegram'],['رسانه نمونه ۲','صفحه ویدیویی','مصاحبه و مستند','YT','YouTube'],['رسانه نمونه ۳','وبلاگ','یادداشت و مقاله','WEB','Website'],['رسانه نمونه ۴','صفحه تصویری','عکس و گرافیک','IG','Instagram'],['رسانه نمونه ۵','پادکست','گفت‌وگو و روایت','POD','Podcast'],
    ['رسانه نمونه ۶','کانال ورزشی','گزارش مسابقه','TG','Telegram'],['رسانه نمونه ۷','صفحه پژوهشی','منابع و مقاله','WEB','Website'],['رسانه نمونه ۸','کانال فرهنگی','ادبیات و فرهنگ','YT','YouTube'],['رسانه نمونه ۹','استودیو مستقل','ویدیو و موشن','YT','YouTube'],['رسانه نمونه ۱۰','مجله آنلاین','مطالب تحلیلی','WEB','Website']
  ],
  athletes: [
    ['ورزشکار نمونه ۱','فوتسال','دروازه‌بان','⚽'],['ورزشکار نمونه ۲','فوتبال','مهاجم','⚽'],['ورزشکار نمونه ۳','کاراته','کومیته','🥋'],['ورزشکار نمونه ۴','بوکس','وزن متوسط','🥊'],['ورزشکار نمونه ۵','دوومیدانی','۴۰۰ متر','🏃'],
    ['ورزشکار نمونه ۶','کشتی','آزاد','🤼'],['ورزشکار نمونه ۷','والیبال','پاسور','🏐'],['ورزشکار نمونه ۸','بسکتبال','گارد','🏀'],['ورزشکار نمونه ۹','کوهنوردی','صعود','⛰️'],['ورزشکار نمونه ۱۰','تکواندو','کیوروگی','🥋']
  ],
  documents: [
    ['سند نمونه ۱: معرفی ساختار پرتال','معرفی','۱۴۰۵','PDF'],['سند نمونه ۲: شیوه‌نامه آرشیو دیجیتال','آرشیو','۱۴۰۵','PDF'],['سند نمونه ۳: بیانیه نمونه فرهنگی','بیانیه','۱۴۰۴','PDF'],['سند نمونه ۴: صورت‌جلسه نمونه','جلسه','۱۴۰۴','PDF'],['سند نمونه ۵: گزارش فعالیت رسانه‌ای','گزارش','۱۴۰۴','PDF'],['سند نمونه ۶: فهرست کتاب‌های دیجیتال','کتابخانه','۱۴۰۵','XLSX'],['سند نمونه ۷: راهنمای ثبت صفحه اشخاص','دانشنامه','۱۴۰۵','PDF'],['سند نمونه ۸: راهنمای ثبت رسانه‌ها','رسانه','۱۴۰۵','PDF'],['سند نمونه ۹: فرم پیشنهاد محتوا','محتوا','۱۴۰۵','DOCX'],['سند نمونه ۱۰: آرشیو تصاویر انتخابی','تصاویر','۱۴۰۳','ZIP']
  ]
};

function cardHTML(item, index){
  return `<article class="content-card reveal is-visible" data-index="${index}">
    <div class="thumb"><span class="symbol">${item[4] || item[2] || '✦'}</span></div>
    <div class="card-body"><span class="meta">${item[1]} • ${item[2]}</span><h3>${item[0]}</h3><p>محتوای آزمایشی برای نمایش ساختار و طراحی کارت.</p><div class="card-actions"><button class="link-chip detail-btn" data-title="${item[0]}">جزئیات</button><a class="link-chip" target="_blank" href="${yt(item[0])}">YouTube ↗</a></div></div>
  </article>`;
}

function renderLibrary(filter='library'){
  const root=$('#libraryGrid');
  const items=data.library.filter(x=>filter==='library' || x[1].toLowerCase()===filter);
  root.innerHTML=items.map((x,i)=>cardHTML(x,i)).join('');
  bindDetails(root);
}

function renderNews(){
  const lead=data.news[0];
  $('#leadNews').innerHTML=`<span class="badge">${lead[1]}</span><h3>${lead[0]}</h3><p>این متن آزمایشی است تا جایگاه یک خبر اصلی، متادیتا و لینک منبع را در نسخه نهایی مشخص کند.</p><div style="position:absolute;bottom:28px;right:28px;color:#8fa7d0;font-size:10px">${lead[2]}</div><a target="_blank" class="btn btn-ghost" href="${yt(lead[0])}">باز کردن منبع ↗</a>`;
  $('#newsList').innerHTML=data.news.slice(1).map(x=>`<article class="news-item"><div><span class="badge">${x[1]}</span><h4>${x[0]}</h4><p>خلاصه آزمایشی خبر</p></div><span class="narrow-date">${x[2]}</span></article>`).join('');
}
function renderExplore(){
  $('#exploreGrid').innerHTML=data.explore.map((x,i)=>`<article class="explore-item reveal is-visible" data-title="${x[0]}"><div class="media-bg" style="transform:translate(${(i%3)*4}px,${(i%4)*-2}px)"></div><div class="play">▶</div><div class="content"><span>${x[1]}</span><h3>${x[0]}</h3><a target="_blank" href="${yt(x[0])}" style="font-size:9px;color:#e8eefc">مشاهده در YouTube ↗</a></div></article>`).join('');
}
function renderPeople(){
  $('#peopleGrid').innerHTML=data.people.map(x=>`<article class="person-card detail-btn" data-title="${x[0]}"><div class="avatar">${x[2]}</div><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join('');
}
function renderMedia(){
  $('#mediaGrid').innerHTML=data.media.map(x=>`<article class="media-item"><div class="media-logo">${x[3]}</div><div style="flex:1"><span class="badge">${x[1]}</span><h3>${x[0]}</h3><p>${x[2]}</p><a class="social-link" target="_blank" href="${x[4]==='YouTube'?yt(x[0]):google(x[0])}">باز کردن لینک نمونه ↗</a></div></article>`).join('');
}
function renderAthletes(){
  $('#athleteGrid').innerHTML=data.athletes.map(x=>`<article class="athlete detail-btn" data-title="${x[0]}"><div class="sport-img">${x[3]}</div><div class="body"><h3>${x[0]}</h3><p>${x[1]} • ${x[2]}</p></div></article>`).join('');
}
function renderDocs(q=''){
  const rows=data.documents.filter(x=>x.join(' ').includes(q));
  $('#documentRows').innerHTML=rows.map(x=>`<tr><td><strong>${x[0]}</strong></td><td>${x[1]}</td><td>${x[2]}</td><td><span class="doc-type">${x[3]}</span></td><td><a class="doc-link" target="_blank" href="${google(x[0])}">مشاهده ↗</a></td></tr>`).join('');
}
function bindDetails(root=document){
  $$('.detail-btn',root).forEach(btn=>btn.addEventListener('click',()=>openDetail(btn.dataset.title)));
}
function openDetail(title){
  $('#detailTitle').textContent=title;
  $('#detailBody').innerHTML=`<p>این صفحه محتوای آزمایشی است. در نسخه واقعی می‌تواند شامل:</p><ul><li>شرح کامل و خلاصه</li><li>منابع و ارجاعات</li><li>تصاویر و ویدیوها</li><li>لینک‌های مرتبط و تاریخچه ویرایش</li></ul><a class="btn btn-primary" target="_blank" href="${yt(title)}">لینک نمونه YouTube ↗</a>`;
  $('#detailModal').showModal();
}

renderLibrary(); renderNews(); renderExplore(); renderPeople(); renderMedia(); renderAthletes(); renderDocs();

$('#searchBtn').addEventListener('click',()=>$('#searchModal').showModal());
$('#themeBtn').addEventListener('click',()=>document.body.classList.toggle('light'));
$('#menuBtn').addEventListener('click',()=>$('#mainNav').classList.toggle('open'));
$$('.nav-links a').forEach(a=>a.addEventListener('click',()=>$('#mainNav').classList.remove('open')));
$$('[data-close]').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
$('#openContact').addEventListener('click',()=>$('#contactModal').showModal());
$('#footerContact').addEventListener('click',(e)=>{e.preventDefault();$('#contactModal').showModal()});
$('#contactForm').addEventListener('submit',(e)=>{e.preventDefault();e.target.reset();alert('ثبت آزمایشی انجام شد. در نسخه واقعی این فرم به API متصل می‌شود.');e.target.closest('dialog').close();});
$('#docSearch').addEventListener('input',e=>renderDocs(e.target.value.trim()));

$$('.filter').forEach(btn=>btn.addEventListener('click',()=>{$$('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderLibrary(btn.dataset.filter)}));
$$('[data-scroll]').forEach(btn=>btn.addEventListener('click',()=>document.querySelector(btn.dataset.scroll)?.scrollIntoView({behavior:'smooth'})));

const searchable=[...data.library.map(x=>({t:x[0],d:'کتابخانه'})),...data.news.map(x=>({t:x[0],d:'اخبار'})),...data.people.map(x=>({t:x[0],d:'چهره‌ها'})),...data.media.map(x=>({t:x[0],d:'رسانه'})),...data.athletes.map(x=>({t:x[0],d:'ورزش'})),...data.documents.map(x=>({t:x[0],d:'اسناد'})),...data.explore.map(x=>({t:x[0],d:'اکسپلور'}))];
$('#globalSearch').addEventListener('input',(e)=>{
  const q=e.target.value.trim().toLowerCase(); if(!q){$('#searchResults').innerHTML='<p class="muted">عبارت جستجو را وارد کنید.</p>';return;}
  const hits=searchable.filter(x=>x.t.toLowerCase().includes(q));
  $('#searchResults').innerHTML=hits.length?hits.slice(0,30).map(x=>`<div class="result detail-btn" data-title="${x.t}"><h4>${x.t}</h4><p>${x.d}</p></div>`).join(''):`<p class="muted">نتیجه‌ای پیدا نشد.</p>`;
  bindDetails($('#searchResults'));
});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('is-visible')}),{threshold:.08});
$$('.reveal').forEach(el=>observer.observe(el));

const sections=$$('section[id]'); const nav=$$('.nav-links a');
const activeObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){nav.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>activeObserver.observe(s));

// small parallax interaction for the hero artwork
window.addEventListener('mousemove',e=>{const a=$('.hero-art');if(!a||innerWidth<900)return;const x=(e.clientX/innerWidth-.5)*8;const y=(e.clientY/innerHeight-.5)*6;a.style.transform=`translate(${x}px,${y}px)`});
