(async function(){
function load(src){return new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=reject;document.body.appendChild(s);});}
try{await load('js/custom.js');await load('js/config.js');await load('js/engine.js');}
catch(e){console.error(e);document.body.innerHTML='<p style="padding:24px;text-align:center">Não foi possível carregar a página. Atualize para tentar novamente.</p>';}
})();