/* Sons de ausculta sintetizados no navegador (Web Audio), sem gravações.
   O som sai do texto do achado: o que o caso descreve é o que se ouve.
   somDoAchado(texto, zona, caso) → descrição do som (ou null); tocarSom(som) toca uns segundos. */
const SOM={ctx:null,ruido:null,saida:null};

function somCtx(){
 if(!SOM.ctx){
  const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return null;
  SOM.ctx=new AC();
  const n=SOM.ctx.sampleRate*2,b=SOM.ctx.createBuffer(1,n,SOM.ctx.sampleRate),d=b.getChannelData(0);
  for(let i=0;i<n;i++)d[i]=Math.random()*2-1;
  SOM.ruido=b;
 }
 if(SOM.ctx.state==='suspended')SOM.ctx.resume();
 return SOM.ctx;
}

/* ---------- peças do som ---------- */
// batida grave (bulhas): seno que cai de frequência + um pouco de ruído grave
function batida(a,out,t,f,dur,amp){
 if(amp<=0)return;
 const o=a.createOscillator(),g=a.createGain();
 o.frequency.setValueAtTime(f*1.4,t);o.frequency.exponentialRampToValueAtTime(f,t+dur*.6);
 g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(.55*amp,t+.008);g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
 o.connect(g).connect(out);o.start(t);o.stop(t+dur+.02);
 ruido(a,out,t,dur*.7,{tipo:'lowpass',f:160,q:.7},[[0,0],[.1,1],[1,0]],.35*amp);
}
// ruído filtrado com envelope (sopros, murmúrio, atritos). env = [[fração do tempo, nível 0..1], ...]
function ruido(a,out,t,dur,filtro,env,amp){
 if(amp<=0||dur<=0)return;
 const s=a.createBufferSource();s.buffer=SOM.ruido;s.loop=true;
 const fl=a.createBiquadFilter();fl.type=filtro.tipo||'bandpass';fl.frequency.value=filtro.f;fl.Q.value=filtro.q||1;
 const g=a.createGain();g.gain.setValueAtTime(0,t);
 env.forEach(([x,v])=>g.gain.linearRampToValueAtTime(v*amp,t+x*dur));
 let n=s.connect(fl);
 if(filtro.f2){const f2=a.createBiquadFilter();f2.type='bandpass';f2.frequency.value=filtro.f2;f2.Q.value=filtro.q2||8;n=n.connect(f2);}
 n.connect(g).connect(out);
 s.start(t,Math.random()*1.5);s.stop(t+dur+.02);
}
// estalo curto (clique, estalido, crepitantes)
function estalo(a,out,t,f,dur,amp){ruido(a,out,t,dur,{tipo:'bandpass',f,q:1.2},[[0,0],[.15,1],[1,0]],amp);}
// tom (sibilos, roncos, tilintar)
function tom(a,out,t,dur,f,amp,forma){
 const o=a.createOscillator(),g=a.createGain();o.type=forma||'sine';o.frequency.value=f;
 o.frequency.linearRampToValueAtTime(f*0.94,t+dur);
 g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(amp,t+dur*.2);g.gain.linearRampToValueAtTime(amp*.8,t+dur*.8);g.gain.linearRampToValueAtTime(0,t+dur);
 let n=o;if(forma==='sawtooth'){const fl=a.createBiquadFilter();fl.type='lowpass';fl.frequency.value=380;n=o.connect(fl);}
 n.connect(g).connect(out);o.start(t);o.stop(t+dur+.02);
}
// borbulho intestinal: ruído com frequência subindo e tremor
function borbulho(a,out,t,dur,amp,agudo){
 const s=a.createBufferSource();s.buffer=SOM.ruido;s.loop=true;
 const fl=a.createBiquadFilter();fl.type='bandpass';fl.Q.value=6;
 const f0=agudo?500:220;fl.frequency.setValueAtTime(f0,t);fl.frequency.linearRampToValueAtTime(f0*2.4,t+dur);
 const g=a.createGain();g.gain.setValueAtTime(0,t);
 const lfo=a.createOscillator(),lg=a.createGain();lfo.frequency.value=14;lg.gain.value=amp*.5;lfo.connect(lg).connect(g.gain);
 g.gain.linearRampToValueAtTime(amp*.5,t+dur*.2);g.gain.linearRampToValueAtTime(0,t+dur);
 s.connect(fl).connect(g).connect(out);s.start(t,Math.random());s.stop(t+dur+.02);lfo.start(t);lfo.stop(t+dur+.02);
}

/* ---------- coração ---------- */
function tocarCoracao(a,out,s,t0,total){
 const fc=Math.min(150,Math.max(45,s.fc||80)),T=60/fc,sis=Math.min(.34,.36*T+.04);
 for(let c=t0+.15;c<t0+total-T*.2;c+=T){
  const dia=T-sis;
  if(s.pulso){batida(a,out,c+.08,s.tiro?140:45,s.tiro?.05:.09,s.tiro?.9:.35);continue;}
  if(s.b4)batida(a,out,c-.09,32,.08,.5);
  batida(a,out,c,52,.1,s.b1);
  if(s.clique)estalo(a,out,c+.065,2600,.018,.35);
  batida(a,out,c+sis,72,.075,s.b2);
  if(s.estalido)estalo(a,out,c+sis+.08,2200,.02,.4);
  if(s.b3)batida(a,out,c+sis+.15,34,.09,.65);
  (s.sopros||[]).forEach(p=>{
   const k=.06*p.i;
   if(p.t==='ejetivo')ruido(a,out,c+.075,sis-.1,{f:320,q:.9},[[0,0],[.5,1],[1,0]],k);
   if(p.t==='meso')ruido(a,out,c+.1,sis*.45,{f:280,q:1.4},[[0,0],[.5,1],[1,0]],k*.8);
   if(p.t==='holo')ruido(a,out,c+.025,sis-.02,{f:620,q:1.1},[[0,.8],[.1,1],[.9,1],[1,0]],k);
   if(p.t==='diastAsp')ruido(a,out,c+sis+.015,dia*.55,{tipo:'highpass',f:700,q:.6},[[0,1],[1,0]],k*.9);
   if(p.t==='ruflar'){ruido(a,out,c+sis+.12,dia*.45,{f:90,q:2.5},[[0,.9],[1,.2]],k*1.6);
    if(p.pres)ruido(a,out,c+T-.16,.15,{f:100,q:2.5},[[0,.2],[1,1]],k*1.8);}
  });
  if(s.atrito)[[c+sis*.45,.08],[c+sis+.1,.07],[c+T-.12,.07]].forEach(([x,d])=>ruido(a,out,x,d,{f:1400,q:.6},[[0,0],[.2,1],[.6,.5],[1,0]],.07));
 }
}

/* ---------- pulmão ---------- */
function tocarPulmao(a,out,s,t0,total){
 const ins=1.1,exp=s.expProl?2.4:1.4,ciclo=ins+exp+.3;
 for(let c=t0+.1;c+ins<t0+total;c+=ciclo){
  const fim=c+ins;
  if(s.mv>0&&!s.tubario)ruido(a,out,c,ins,{f:260,q:.6},[[0,0],[.8,1],[1,0]],.13*s.mv);
  if(s.mv>0&&!s.tubario)ruido(a,out,fim,exp*.35,{f:240,q:.6},[[0,.6],[1,0]],.05*s.mv);
  if(s.tubario||s.anforico){const fl=s.anforico?{f:500,q:.8,f2:380,q2:10}:{f:950,q:.7};
   const v=s.anforico?.22:.05;ruido(a,out,c,ins,fl,[[0,0],[.3,.8],[.9,.9],[1,0]],v);ruido(a,out,fim+.05,exp*.8,fl,[[0,0],[.2,1],[1,0]],v*1.2);}
  if(s.sib)[460,610,770].forEach((f,i)=>tom(a,out,fim+.05+i*.04,exp*.85,f,.022));
  if(s.ronco){tom(a,out,fim+.05,exp*.8,118,.05,'sawtooth');tom(a,out,c+.2,ins*.6,105,.025,'sawtooth');}
  if(s.finos)for(let i=0;i<9;i++)estalo(a,out,c+ins*(.55+i*.045),1900,.009,.1);
  if(s.grossos){for(let i=0;i<6;i++)estalo(a,out,c+ins*(.1+i*.11),420,.03,.12);for(let i=0;i<4;i++)estalo(a,out,fim+.1+i*.18,380,.03,.1);}
  if(s.atrito)[c+.3,c+.6,c+.85,fim+.25,fim+.55].forEach(x=>ruido(a,out,x,.12,{f:700,q:.8},[[0,0],[.2,1],[.5,.4],[.7,.9],[1,0]],.09));
 }
 if(s.mv===0&&!s.tubario)ruido(a,out,t0,total,{f:200,q:.5},[[0,.2],[1,.2]],.01);
}

/* ---------- abdome ---------- */
function tocarAbdome(a,out,s,t0,total){
 const r=s.rha;
 ruido(a,out,t0,total,{f:200,q:.5},[[0,.2],[1,.2]],.01);
 const n={normal:2,diminuido:1,aumentado:7,metalico:6,borbor:3,ausente:0}[r]||0;
 for(let i=0;i<n;i++){const t=t0+.3+(total-1)*(i+Math.random()*.6)/Math.max(1,n);
  borbulho(a,out,t,r==='borbor'?1.2:.5+Math.random()*.4,r==='diminuido'?.05:.14,r==='metalico');
  if(r==='metalico')tom(a,out,t+.2,.25,1700+Math.random()*500,.03);}
}

/* ---------- tocar ---------- */
function tocarSom(s){
 const a=somCtx();if(!a||!s)return false;
 if(SOM.saida){const g=SOM.saida;g.gain.setTargetAtTime(0,a.currentTime,.03);setTimeout(()=>g.disconnect(),300);}
 // limitador: nenhum som passa do volume seguro do fone
 const lim=a.createDynamicsCompressor();lim.threshold.value=-8;lim.knee.value=6;lim.ratio.value=12;lim.attack.value=.003;lim.release.value=.1;
 if(!SOM.curva){SOM.curva=new Float32Array(1024);for(let i=0;i<1024;i++){const x=i/511.5-1;SOM.curva[i]=.9*Math.tanh(1.5*x)/Math.tanh(1.5);}}
 const teto=a.createWaveShaper();teto.curve=SOM.curva;lim.connect(teto).connect(a.destination);
 const out=a.createGain();out.gain.value=s.tipo==='cor'?.9:s.tipo==='pulm'?6:5;out.connect(lim);SOM.saida=out;
 const t0=a.currentTime+.05,total=s.tipo==='pulm'?6.5:6;
 if(s.tipo==='cor')tocarCoracao(a,out,s,t0,total);
 if(s.tipo==='pulm')tocarPulmao(a,out,s,t0,total);
 if(s.tipo==='abd')tocarAbdome(a,out,s,t0,total);
 return true;
}

/* ---------- do texto ao som ---------- */
function somCoracao(t,fc){
 const s={tipo:'cor',fc,b1:1,b2:.85,sopros:[]};
 if(/b1 forte|b1 hiperfon/.test(t))s.b1=1.6;
 if(/b1 abafada|b1 hipofon/.test(t))s.b1=.4;
 if(/b2 quase inaudível|b2 apagada/.test(t))s.b2=.15;
 if(/b2 forte|b2 mais forte|b2 hiperfon/.test(t))s.b2=1.4;
 if(/clique/.test(t))s.clique=1;
 if(/estalido/.test(t))s.estalido=1;
 if(/\bb3\b|tum-ta-tu|terceiro som|galope|grave logo depois de b2/.test(t))s.b3=1;
 if(/som grave logo antes de b1/.test(t))s.b4=1;
 if(/áspero|couro novo|neve/.test(t))s.atrito=1;
 const m=t.match(/(\d)\+\/6/),i=m?+m[1]:/discret|suave|fraco|transmitido/.test(t)?2:3;
 if(/sopro/.test(t)&&!/sem sopro/.test(t)||/ruflar/.test(t)){
  if(/ruflar/.test(t))s.sopros.push({t:'ruflar',i:/bem audível/.test(t)?4:i,pres:/reforç|antes de b1|pré-sistólico/.test(t)});
  if(/sopro diastólico|diastólico aspirativo/.test(t))s.sopros.push({t:'diastAsp',i});
  if(/holossistólico|platô/.test(t))s.sopros.push({t:'holo',i});
  else if(/sopro sistólico/.test(t)){
   const curto=/meio da sístole|curto/.test(t)&&!/crescendo/.test(t);
   s.sopros.push({t:curto?'meso':'ejetivo',i:/sopro sistólico suave/.test(t)&&/diastólico/.test(t)?2:i});
  }
 }
 return s;
}
function somDoAchado(texto,zona,c){
 const t=(texto||'').toLowerCase(),fc=+(((c&&c.vitals)||'').match(/FC (\d+)/)||[])[1]||80;
 if(/^manobra:/.test(zona)){ // só quando a manobra descreve o que se ouve
  const s=somCoracao(t,fc);
  return s.sopros.length||s.b3||s.atrito?s:null;
 }
 if(FOCOS.includes(zona)||zona==='coracao')return somCoracao(t,fc);
 if(PULSOS.includes(zona)){
  if(/tiro de pistola/.test(t))return {tipo:'cor',fc,pulso:1,tiro:1};
  if(/sopro/.test(t)&&!/sem sopro/.test(t))return {tipo:'cor',fc,b1:.2,b2:.2,sopros:[{t:'ejetivo',i:2}]};
  return {tipo:'cor',fc,pulso:1};
 }
 if(/^(apice|medio|base)[DE]$/.test(zona))return {tipo:'pulm',
  mv:/abolid/.test(t)?0:/diminuíd/.test(t)?.45:1,
  sib:/sibil/.test(t),ronco:/ronco/.test(t),finos:/estertores finos|crepitantes/.test(t),grossos:/grossos|bolhos/.test(t),
  tubario:/sopro tubárico|respiração brônquica|timbre oco/.test(t),anforico:/timbre oco|gargalo|anfóric/.test(t),
  atrito:/atrito|couro novo|áspero/.test(t),expProl:/expiração prolongada/.test(t)};
 if(REGIOES.includes(zona)||zona==='abdome'){
  const rha=/nenhum ruído|silêncio|ausentes/.test(t)?'ausente':/metálic|em salvas/.test(t)?'metalico':/já tinha sido palpado/.test(t)?'aumentado':
   /aumentad/.test(t)?(/borborigmo/.test(t)?'borbor':'aumentado'):/diminuíd/.test(t)?'diminuido':'normal';
  return {tipo:'abd',rha};
 }
 return null;
}
