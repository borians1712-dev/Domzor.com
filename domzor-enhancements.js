(function(){
  "use strict";
  if (window.__DOMZOR_ADDITIVE_ENHANCEMENTS__) return;
  window.__DOMZOR_ADDITIVE_ENHANCEMENTS__ = true;

  var PHONE_DISPLAY = "(312) 778-4975";
  var PHONE_TEL = "+13127784975";
  var WA = "https://wa.me/13127784975";

  function qs(s, root){ return (root || document).querySelector(s); }
  function qsa(s, root){ return Array.prototype.slice.call((root || document).querySelectorAll(s)); }
  function beforeFooter(node){
    var footer = qs("footer");
    if(footer && footer.parentNode){ footer.parentNode.insertBefore(node, footer); }
    else { document.body.appendChild(node); }
  }
  function section(html){
    var d=document.createElement("div"); d.innerHTML=html.trim(); return d.firstElementChild;
  }
  function track(name, data){
    try{
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(Object.assign({event:name}, data || {}));
    }catch(e){}
  }

  function addSeo(){
    var metas = [
      ["description","DOMZOR provides commercial and residential cleaning, recurring janitorial service, post-construction cleanup, move-in/move-out cleaning, and restoration cleanup across Chicago's south suburbs."],
      ["robots","index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"]
    ];
    metas.forEach(function(m){
      if(!qs('meta[name="'+m[0]+'"]')){
        var el=document.createElement("meta"); el.name=m[0]; el.content=m[1]; document.head.appendChild(el);
      }
    });
    if(!qs('link[rel="canonical"]')){
      var c=document.createElement("link"); c.rel="canonical"; c.href="https://domzor.com/"; document.head.appendChild(c);
    }
    var og = {
      "og:title":"DOMZOR Cleaning & Restoration | Chicago South Suburbs",
      "og:description":"Commercial and residential cleaning, recurring janitorial service, post-construction cleanup and restoration cleanup. Request a free quote.",
      "og:type":"website",
      "og:url":"https://domzor.com/"
    };
    Object.keys(og).forEach(function(p){
      if(!qs('meta[property="'+p+'"]')){
        var el=document.createElement("meta"); el.setAttribute("property",p); el.content=og[p]; document.head.appendChild(el);
      }
    });
    if(!qs('meta[name="theme-color"]')){
      var t=document.createElement("meta"); t.name="theme-color"; t.content="#111827"; document.head.appendChild(t);
    }

    if(!qs('script[data-domzor-schema]')){
      var schema = {
        "@context":"https://schema.org",
        "@graph":[
          {
            "@type":"LocalBusiness",
            "@id":"https://domzor.com/#business",
            "name":"DOMZOR Cleaning & Restoration",
            "url":"https://domzor.com/",
            "telephone":"+1-312-778-4975",
            "email":"info@domzor.com",
            "areaServed":[
              "Park Forest, Illinois","Matteson, Illinois","Chicago Heights, Illinois",
              "Homewood, Illinois","Flossmoor, Illinois","Harvey, Illinois",
              "South Holland, Illinois","Tinley Park, Illinois","Orland Park, Illinois",
              "Chicago South Suburbs"
            ],
            "priceRange":"$$",
            "description":"Commercial and residential cleaning, recurring janitorial service, post-construction cleanup, move-in/move-out cleaning, and restoration cleanup."
          },
          {
            "@type":"FAQPage",
            "mainEntity":[
              {"@type":"Question","name":"Does DOMZOR provide recurring commercial cleaning?","acceptedAnswer":{"@type":"Answer","text":"Yes. DOMZOR can provide recurring cleaning schedules based on the property, requested scope, and frequency."}},
              {"@type":"Question","name":"What types of properties can DOMZOR clean?","acceptedAnswer":{"@type":"Answer","text":"DOMZOR can provide cleaning for offices, warehouses, restaurants, churches, schools, residential properties, move-outs, post-construction projects, and other facilities based on the requested scope."}},
              {"@type":"Question","name":"Can I request a free estimate?","acceptedAnswer":{"@type":"Answer","text":"Yes. Call DOMZOR or use the website contact or estimate form to request a no-obligation quote."}}
            ]
          }
        ]
      };
      var s=document.createElement("script"); s.type="application/ld+json"; s.dataset.domzorSchema="1"; s.textContent=JSON.stringify(schema); document.head.appendChild(s);
    }
  }

  function addIndustries(){
    if(qs("#dzx-industries")) return;
    var n = section(`
      <section class="dzx-section dzx-section--white" id="dzx-industries" aria-labelledby="dzx-industries-title">
        <div class="dzx-wrap">
          <p class="dzx-kicker">Commercial Cleaning</p>
          <h2 class="dzx-title" id="dzx-industries-title">Cleaning support for the places that keep business moving</h2>
          <p class="dzx-lead">DOMZOR can build a cleaning scope around the property, schedule, traffic level, and priorities of each client.</p>
          <div class="dzx-grid">
            <article class="dzx-card"><h3>Offices & Workplaces</h3><p>Routine cleaning, restrooms, common areas, trash removal, floors, touchpoints, and customized recurring service.</p></article>
            <article class="dzx-card"><h3>Warehouses & Facilities</h3><p>Facility cleaning support for operational areas, employee spaces, restrooms, and scheduled maintenance needs.</p></article>
            <article class="dzx-card"><h3>Restaurants & Food Service</h3><p>Cleaning support for front-of-house, dining areas, restrooms, and other agreed non-food-preparation areas.</p></article>
            <article class="dzx-card"><h3>Churches & Community Spaces</h3><p>Flexible cleaning for worship spaces, meeting rooms, common areas, restrooms, and special events.</p></article>
            <article class="dzx-card"><h3>Schools & Education</h3><p>Cleaning support for classrooms, offices, common areas, restrooms, and scheduled projects based on scope.</p></article>
            <article class="dzx-card"><h3>Post-Construction & Restoration</h3><p>Detailed cleanup after construction, renovation, repair, or restoration work to prepare spaces for use.</p></article>
          </div>
        </div>
      </section>`);
    beforeFooter(n);
  }

  function addProcess(){
    if(qs("#dzx-process")) return;
    var n=section(`
      <section class="dzx-section" id="dzx-process" aria-labelledby="dzx-process-title">
        <div class="dzx-wrap">
          <p class="dzx-kicker">Simple Quote Process</p>
          <h2 class="dzx-title" id="dzx-process-title">From first contact to a clear cleaning plan</h2>
          <div class="dzx-grid">
            <article class="dzx-card dzx-step"><span class="dzx-stepnum">1</span><div><h3>Tell us what you need</h3><p>Share the property type, location, preferred frequency, and the areas that need attention.</p></div></article>
            <article class="dzx-card dzx-step"><span class="dzx-stepnum">2</span><div><h3>Confirm the scope</h3><p>DOMZOR reviews the details and may follow up for measurements, photos, or a site visit when necessary.</p></div></article>
            <article class="dzx-card dzx-step"><span class="dzx-stepnum">3</span><div><h3>Receive your quote</h3><p>You receive the proposed scope, schedule, and pricing so you can decide how to proceed.</p></div></article>
          </div>
        </div>
      </section>`);
    beforeFooter(n);
  }

  function addFaq(){
    if(qs("#dzx-faq")) return;
    var n=section(`
      <section class="dzx-section dzx-section--white" id="dzx-faq" aria-labelledby="dzx-faq-title">
        <div class="dzx-wrap">
          <p class="dzx-kicker">Frequently Asked Questions</p>
          <h2 class="dzx-title" id="dzx-faq-title">Before you request a quote</h2>
          <div class="dzx-faq">
            <details><summary>Does DOMZOR provide recurring commercial cleaning?</summary><p>Yes. Cleaning schedules can be customized around the facility, requested scope, and preferred frequency.</p></details>
            <details><summary>What kinds of properties can DOMZOR clean?</summary><p>Offices, warehouses, restaurants, churches, schools, residential properties, move-outs, post-construction projects, and other facilities can be considered based on the requested scope.</p></details>
            <details><summary>Can I request a free estimate?</summary><p>Yes. Call DOMZOR or use the website contact or estimate form to request a no-obligation quote.</p></details>
            <details><summary>What information helps prepare a faster quote?</summary><p>The property location, approximate square footage, number of restrooms or key areas, type of service, frequency, and a short description of the work are especially helpful.</p></details>
          </div>
        </div>
      </section>`);
    beforeFooter(n);
  }

  function addCta(){
    if(qs("#dzx-cta")) return;
    var n=section(`
      <section class="dzx-cta" id="dzx-cta" aria-label="Request a DOMZOR quote">
        <div class="dzx-cta-inner">
          <div><h2>Need dependable cleaning for a property or facility?</h2><p>Tell DOMZOR what needs to be cleaned and how often.</p></div>
          <div class="dzx-actions">
            <a class="dzx-btn" href="#estimate" data-dzx="quote">Request a Free Quote</a>
            <a class="dzx-btn dzx-btn--ghost" href="tel:+13127784975" data-dzx="call">Call ${PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>`);
    beforeFooter(n);
  }

  function addFloating(){
    if(qs(".dzx-floating")) return;
    var n=section(`
      <div class="dzx-floating" aria-label="Quick contact">
        <a class="dzx-float" href="tel:+13127784975" aria-label="Call DOMZOR" data-dzx="call">☎</a>
        <a class="dzx-float" href="${WA}" target="_blank" rel="noopener" aria-label="Message DOMZOR on WhatsApp" data-dzx="whatsapp">✆</a>
      </div>`);
    document.body.appendChild(n);
  }

  function enhanceForms(){
    var params = new URLSearchParams(location.search);
    var fields = ["utm_source","utm_medium","utm_campaign","utm_term","utm_content"];
    qsa("form").forEach(function(form){
      if(form.dataset.dzxEnhanced) return;
      form.dataset.dzxEnhanced="1";
      fields.concat(["landing_page","referrer"]).forEach(function(name){
        if(!qs('[name="'+name+'"]', form)){
          var i=document.createElement("input"); i.type="hidden"; i.name=name; form.appendChild(i);
        }
      });
      fields.forEach(function(n){ var i=qs('[name="'+n+'"]',form); if(i) i.value=params.get(n)||""; });
      var lp=qs('[name="landing_page"]',form); if(lp) lp.value=location.href;
      var ref=qs('[name="referrer"]',form); if(ref) ref.value=document.referrer || "";
      form.addEventListener("submit",function(){ track("domzor_form_submit",{form_name:form.getAttribute("name")||form.id||"website_form"}); });
    });
  }

  function events(){
    document.addEventListener("click",function(e){
      var a=e.target.closest && e.target.closest("a");
      if(!a) return;
      var h=a.getAttribute("href")||"";
      if(h.indexOf("tel:")===0) track("domzor_phone_click",{phone:PHONE_TEL});
      if(h.indexOf("wa.me")>-1 || h.indexOf("whatsapp")>-1) track("domzor_whatsapp_click");
      if(a.dataset && a.dataset.dzx==="quote") track("domzor_quote_cta_click");
    });
  }

  document.addEventListener("DOMContentLoaded",function(){
    addSeo();
    addIndustries();
    addProcess();
    addFaq();
    addCta();
    addFloating();
    enhanceForms();
    events();
  });
})();
