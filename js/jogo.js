// Pesos da nota (cada conjunto soma 100). Casos com líquido pleural (têm "light") usam MAX;
// casos de semiologia, focados em exame físico e síndrome, usam MAX_SEMIO.
const MAX={q:12,ex:12,lab:12,proc:12,fl:12,cls:8,sind:4,dx:12,cond:16};
const MAX_SEMIO={q:16,ex:24,lab:10,sind:16,dx:16,cond:18};
const ehPleural=c=>!!c.light;
const pesos=c=>ehPleural(c)?MAX:MAX_SEMIO;
// correctSind pode ser uma síndrome ou uma lista de síndromes aceitas (a primeira é a principal)
const sindLista=c=>[].concat(c.correctSind),sindOk=(c,id)=>sindLista(c).includes(id);

/* ================= UTIL ================= */
const $=s=>document.querySelector(s);
const fmtT=m=>{const t=19*60+m;return String(Math.floor(t/60)%24).padStart(2,'0')+':'+String(t%60).padStart(2,'0');};
const nf=n=>String(n).replace('.',',');
function store(k,v){try{const d=JSON.parse(localStorage.getItem('plantao-pleural-2')||'{}');if(v===undefined)return d[k];d[k]=v;localStorage.setItem('plantao-pleural-2',JSON.stringify(d));}catch(e){return undefined;}}

/* ================= DESENHO ================= */
function drawPortrait(cnv,look,mood){
 const g=cnv.getContext('2d');cnv.width=24;cnv.height=24;g.imageSmoothingEnabled=false;
 const L=LOOKS[look],p=(x,y,w,h,c)=>{g.fillStyle=c;g.fillRect(x,y,w,h);};
 p(0,0,24,24,'#22394a');p(0,18,24,6,'#1b2f3d');
 p(4,19,16,5,L.top);p(10,17,4,3,L.skin);
 if(look==='doctor'){p(4,19,5,5,'#eef3f4');p(15,19,5,5,'#eef3f4');}
 p(6,5,12,13,L.skin);p(5,9,1,4,L.skin);p(18,9,1,4,L.skin);
 if(L.style==='short'){p(6,3,12,4,L.hair);p(5,5,2,5,L.hair);p(17,5,2,4,L.hair);}
 if(L.style==='bun'){p(6,3,12,4,L.hair);p(5,5,2,6,L.hair);p(17,5,2,6,L.hair);p(9,0,6,4,L.hair);}
 if(L.style==='curly'){p(5,2,14,5,L.hair);p(4,4,2,6,L.hair);p(18,4,2,6,L.hair);p(6,1,3,2,L.hair);p(12,1,4,2,L.hair);}
 if(L.style==='long'){p(6,3,12,4,L.hair);p(4,5,3,14,L.hair);p(17,5,3,14,L.hair);}
 if(L.style==='bald'){p(5,7,2,6,L.hair);p(17,7,2,6,L.hair);p(8,4,8,1,'rgba(255,255,255,.18)');}
 if(L.cap){p(6,2,12,3,'#e8f6f4');p(11,2,2,3,'#ef7d6d');}
 p(9,10,2,2,'#1a1a1a');p(13,10,2,2,'#1a1a1a');
 const sob=['#cfcac4','#d8d4cf'].includes(L.hair)?'#9b958e':L.hair;p(8,8,3,1,sob);p(13,8,3,1,sob);
 if(L.glasses){g.strokeStyle='#5b4a3a';g.lineWidth=1;g.strokeRect(8.5,9.5,3,3);g.strokeRect(12.5,9.5,3,3);}
 if(L.must)p(9,14,6,1,L.hair);
 const sick=mood==='sick';
 p(10,15,4,1,sick?'#8a4b45':'#9a4b40');
 if(sick){p(16,6,1,2,'#9fd3ec');}
 if(L.steth){p(8,19,1,3,'#2e8b85');p(15,19,1,3,'#2e8b85');p(11,22,2,2,'#2e8b85');}
}

const cv=$('#cv'),ctx=cv.getContext('2d');
const W=480,H=288;
const OBJ={
 bed:{r:[30,58,100,52],ip:{x:150,y:96},act:'patient',lbl:()=>'Atender '+G.c.pname},
 nurse:{r:[168,226,18,14],ip:{x:178,y:204},act:'nurse',lbl:()=>'Falar com a enfermeira Bia'},
 pc:{r:[322,54,82,34],ip:{x:362,y:108},act:'pc',lbl:()=>'Computador: exames'},
 xray:{r:[220,12,64,42],ip:{x:252,y:78},act:'xray',lbl:()=>'Negatoscópio'},
 desk:{r:[372,206,84,40],ip:{x:414,y:190},act:'close',lbl:()=>'Prontuário: fechar o caso'}
};
const BLOCK=[[0,0,480,54],[0,0,12,288],[468,0,12,288],[0,276,480,12],[30,58,100,52],[12,58,18,30],[322,54,82,34],[40,204,120,26],[168,226,18,14],[372,206,84,40],[438,56,28,30]];
function blocked(x,y){const b=[x-5,y-4,10,6];return BLOCK.some(r=>b[0]<r[0]+r[2]&&b[0]+b[2]>r[0]&&b[1]<r[1]+r[3]&&b[1]+b[3]>r[1]);}
function px(x,y,w,h,c){ctx.fillStyle=c;ctx.fillRect(Math.round(x),Math.round(y),w,h);}

function drawPerson(x,y,L,t,moving,dir){
 x=Math.round(x);y=Math.round(y);
 const f=moving?Math.floor(t*8)%2:0;
 ctx.fillStyle='rgba(0,0,0,.2)';ctx.beginPath();ctx.ellipse(x,y,7,3,0,0,7);ctx.fill();
 px(x-4,y-7,3,f?6:7,L.pants);px(x+1,y-7,3,f?7:6,L.pants);
 px(x-4,y-1+(f?-1:0),3,1,'#222');px(x+1,y-1+(f?0:-1),3,1,'#222');
 px(x-6,y-17,12,11,L.top);
 if(L.steth){px(x-1,y-17,2,11,'#cfd8dc');}
 px(x-8,y-16+(f?1:0),2,8,L.top);px(x+6,y-16+(f?0:1),2,8,L.top);
 px(x-8,y-8+(f?1:0),2,2,L.skin);px(x+6,y-8+(f?0:1),2,2,L.skin);
 px(x-5,y-27,10,10,L.skin);
 if(dir==='up'){px(x-5,y-28,10,9,L.hair);}
 else{px(x-5,y-28,10,4,L.hair);px(x-5,y-25,1,4,L.hair);px(x+4,y-25,1,4,L.hair);
  const o=dir==='left'?-1:dir==='right'?1:0;px(x-3+o,y-22,2,2,'#1a1a1a');px(x+1+o,y-22,2,2,'#1a1a1a');}
 if(L.style==='bun')px(x-2,y-31,4,3,L.hair);
 if(L.style==='long'&&dir!=='up'){px(x-6,y-26,2,10,L.hair);px(x+4,y-26,2,10,L.hair);}
 if(L.style==='bald'&&dir!=='up'){px(x-5,y-28,10,3,L.skin);}
 if(L.cap){px(x-5,y-30,10,3,'#e8f6f4');px(x-1,y-30,2,3,'#ef7d6d');}
 if(L.steth&&dir!=='up'){px(x-3,y-17,1,5,'#2e8b85');px(x+2,y-17,1,5,'#2e8b85');px(x-1,y-12,2,2,'#2e8b85');}
}

function drawRoom(t){
 for(let y=54;y<H;y+=24)for(let x=0;x<W;x+=24)px(x,y,24,24,((x+y)/24)%2?'#cfd8db':'#c4ced2');
 px(0,0,W,54,'#2d3e4a');px(0,50,W,4,'#3d5262');
 px(0,0,12,H,'#2d3e4a');px(W-12,0,12,H,'#2d3e4a');px(0,H-12,W,12,'#2d3e4a');
 px(96,8,84,34,'#3d5262');px(100,12,76,26,'#0b1726');
 [[108,16],[130,30],[150,18],[118,28],[164,32]].forEach(s=>px(s[0],s[1],1,1,'#cfe3ff'));
 px(158,15,7,7,'#f3e9b5');px(160,15,5,5,'#0b1726');
 ctx.fillStyle='#8fb2c4';ctx.font='bold 8px monospace';ctx.textAlign='left';ctx.fillText('EMERGÊNCIA · SALA 2',300,24);
 px(410,10,30,16,'#14222c');ctx.fillStyle='#f2b45a';ctx.font='bold 9px monospace';ctx.fillText(fmtT(G.clock),412,22);
 // negatoscópio
 px(220,12,64,40,'#9fb2bc');const lit=G&&ready('rx');
 px(223,15,58,34,lit?'#eef6fa':'#56656d');
 if(lit){px(232,18,40,28,'#111');px(236,22,14,20,'#333');px(254,22,14,20,'#333');px(250,22,4,22,'#bbb');}
 // monitor
 px(12,58,18,16,'#1b2630');px(14,60,14,10,'#06120f');
 ctx.strokeStyle='#4be08f';ctx.lineWidth=1;ctx.beginPath();
 for(let i=0;i<14;i++){const ph=(i+t*14)%14;const yy=65-(ph>6&&ph<8?4:0);i?ctx.lineTo(14+i,yy):ctx.moveTo(14,yy);}ctx.stroke();
 px(16,74,2,14,'#6a7c86');
 // cama
 px(30,58,100,52,'#8fa3ad');px(32,60,96,48,'#f2f5f6');px(34,64,22,40,'#ffffff');px(34,64,22,1,'#d7dee1');
 const L=LOOKS[G.c.look];
 px(38,76,14,16,L.skin);
 if(L.style==='curly'){px(36,74,7,20,L.hair);}else{px(36,75,5,18,L.hair);}
 if(L.style==='bun')px(33,80,4,6,L.hair);
 px(47,79,2,2,'#1a1a1a');px(47,86,2,2,'#1a1a1a');
 const br=Math.sin(t*2.4)*1;
 px(56,64,70,40+br,'#7fa6c9');px(56,64,70,4,'#9fbfdc');px(60,88,30,4,L.skin);
 px(128,62,2,40,'#6a7c86');
 px(134,40,2,60,'#9aa9b1');px(130,40,10,10,'#cfe9f5');
 // posto
 px(40,204,120,26,'#5d7787');px(40,204,120,6,'#7e9aa9');px(60,206,16,4,'#f4f1e6');px(118,200,20,10,'#1b2630');px(120,202,16,6,'#3fd0c0');
 // computador
 px(322,54,82,34,'#6b4f3a');px(322,54,82,5,'#8a6a51');px(344,36,38,24,'#1b2630');px(346,38,34,18,'#173a40');
 for(let i=0;i<4;i++)px(349,41+i*4,20+((i*7)%10),2,'#5ad1c3');
 px(358,60,10,3,'#1b2630');px(346,64,30,6,'#2d3e4a');px(354,94,18,10,'#2d3e4a');
 // mesa prontuário
 px(372,206,84,40,'#6b4f3a');px(372,206,84,5,'#8a6a51');px(396,214,26,22,'#e3c66a');px(398,216,22,2,'#b89a3f');px(426,214,2,18,'#1b2630');
 // planta
 px(444,74,18,12,'#9c5d3c');px(440,58,8,16,'#3f8f55');px(452,54,10,20,'#4fa565');px(446,62,10,12,'#2f7a45');
 // porta
 px(468,118,12,56,'#5a7384');px(470,144,2,4,'#f2b45a');
}

function drawBang(x,y,t){const b=Math.sin(t*6)*2;px(x-4,y-14+b,8,12,'#f2b45a');px(x-1,y-12+b,2,5,'#2a1a00');px(x-1,y-6+b,2,2,'#2a1a00');}

function drawPrompt(o){
 const txt=o.lbl();ctx.font='bold 8px monospace';const w=ctx.measureText(txt).width+12;
 let x=Math.min(Math.max(o.ip.x-w/2,14),W-14-w),y=o.ip.y-48;
 if(y<4)y=4;
 px(x,y,w,14,'rgba(10,20,26,.9)');ctx.strokeStyle='#f2b45a';ctx.strokeRect(x+.5,y+.5,w-1,13);
 ctx.fillStyle='#ffe2b0';ctx.textAlign='left';ctx.fillText(txt,x+6,y+10);
}

// rx: eff {D,E} derrame (0 a 0,5) · cardio · consol 'D'/'E' · consolAp 'D'/'E' (no ápice) · ptx {lado,tam 0 a 1}
//     hiper (hiperinsuflação) · atel 'D'/'E' (base colabada) · shift 'D'/'E' (mediastino desviado para esse lado)
//     congest (congestão bilateral) · cav 'D'/'E' (caverna no ápice) · bronq (trilhos nas bases)
function drawRX(cnv,rx){
 cnv.width=300;cnv.height=340;const g=cnv.getContext('2d');
 const sideX={D:92,E:208},dx=rx.shift==='D'?-24:rx.shift==='E'?24:0,dia=rx.hiper?318:300,ry=rx.hiper?128:118;
 g.fillStyle='#030405';g.fillRect(0,0,300,340);
 g.filter='blur(3px)';
 g.fillStyle='#4a4e52';g.beginPath();g.ellipse(150,200,140,175,0,0,7);g.fill();
 g.fillStyle='#5a5e62';g.fillRect(40,20,220,40);
 const lungs=[[92,175+(rx.hiper?8:0),56,ry],[208,175+(rx.hiper?8:0),56,ry]];
 g.fillStyle=rx.hiper?'#070809':'#0d0f11';lungs.forEach(l=>{g.beginPath();g.ellipse(l[0],l[1],l[2],l[3],0,0,7);g.fill();});
 g.fillStyle='#b9bec2';g.fillRect(138+dx,40,24,280);
 g.fillStyle='rgba(205,210,214,.92)';g.beginPath();
 if(rx.cardio)g.ellipse(170+dx,232,82,56,0,0,7);else g.ellipse(162+dx,228,rx.hiper?40:52,rx.hiper?42:46,0,0,7);g.fill();
 g.fillStyle='#a6aaad';g.beginPath();g.ellipse(92,dia,64,rx.hiper?12:26,0,Math.PI,0);g.fill();g.beginPath();g.ellipse(208,dia+6,64,rx.hiper?12:24,0,Math.PI,0);g.fill();
 g.fillRect(28,dia,244,340-dia);
 g.filter='blur(1.5px)';
 g.strokeStyle=`rgba(225,228,230,${rx.hiper?.2:.33})`;g.lineWidth=5;
 for(let i=0;i<8;i++){const y=78+i*26;
  g.beginPath();g.moveTo(140+dx,y);g.quadraticCurveTo(70,y-10,40,y+24);g.stroke();
  g.beginPath();g.moveTo(160+dx,y);g.quadraticCurveTo(230,y-10,260,y+24);g.stroke();}
 g.lineWidth=7;g.strokeStyle='rgba(225,228,230,.5)';
 g.beginPath();g.moveTo(140+dx,62);g.lineTo(60,52);g.stroke();g.beginPath();g.moveTo(160+dx,62);g.lineTo(240,52);g.stroke();
 if(rx.congest){g.filter='blur(9px)';g.fillStyle='rgba(200,204,208,.42)';
  [[110,170,40,46],[190,170,40,46],[92,250,46,30],[208,252,46,30]].forEach(b=>{g.beginPath();g.ellipse(b[0]+dx,b[1],b[2],b[3],0,0,7);g.fill();});}
 if(rx.bronq){g.filter='blur(.8px)';g.strokeStyle='rgba(225,228,230,.55)';g.lineWidth=2;
  [[78,236],[96,252],[196,240],[214,256]].forEach(([x,y])=>{[0,6].forEach(o=>{g.beginPath();g.moveTo(x+o,y);g.lineTo(x+o-14,y+30);g.stroke();});});}
 g.filter='blur(4px)';
 Object.entries(rx.eff||{}).forEach(([s,sz])=>{
  const cx=sideX[s],lat=s==='D'?-1:1;const top=300-sz*230;
  g.save();g.beginPath();g.ellipse(150,200,132,168,0,0,7);g.clip();g.beginPath();g.rect(s==='D'?0:158,0,142,308);g.clip();
  const gr=g.createLinearGradient(0,top-30,0,top+60);gr.addColorStop(0,'rgba(178,182,186,.6)');gr.addColorStop(1,'rgba(170,174,178,1)');
  g.fillStyle=gr;g.beginPath();
  g.moveTo(cx-lat*70,340);g.lineTo(cx-lat*70,top+18);
  g.bezierCurveTo(cx-lat*20,top+20,cx+lat*30,top+8,cx+lat*70,top-44);g.lineTo(cx+lat*70,340);g.closePath();g.fill();g.restore();
 });
 if(rx.consol){const cx=sideX[rx.consol];g.fillStyle='rgba(200,204,208,.45)';
  [[0,190,24,18],[-14,206,16,12],[12,176,14,12]].forEach(b=>{g.beginPath();g.ellipse(cx+b[0],b[1],b[2],b[3],0,0,7);g.fill();});}
 if(rx.consolAp){const cx=sideX[rx.consolAp];g.fillStyle='rgba(200,204,208,.5)';
  [[0,104,30,22],[-10,122,18,14],[14,92,16,12]].forEach(b=>{g.beginPath();g.ellipse(cx+b[0],b[1],b[2],b[3],0,0,7);g.fill();});}
 if(rx.atel){const cx=sideX[rx.atel];g.save();g.beginPath();g.ellipse(cx,175,58,ry+4,0,0,7);g.clip();
  const gr=g.createLinearGradient(0,190,0,250);gr.addColorStop(0,'rgba(190,194,198,0)');gr.addColorStop(1,'rgba(190,194,198,.92)');
  g.fillStyle=gr;g.fillRect(cx-70,190,140,dia-190);g.restore();}
 if(rx.cav){const cx=sideX[rx.cav];g.filter='blur(2px)';g.fillStyle='rgba(200,204,208,.55)';g.beginPath();g.ellipse(cx,100,30,26,0,0,7);g.fill();
  g.fillStyle='#050607';g.beginPath();g.ellipse(cx,98,16,13,0,0,7);g.fill();}
 if(rx.pneumop){g.filter='blur(1px)';g.fillStyle='#040505';g.beginPath();g.ellipse(92,dia+6,50,11,0,Math.PI,0);g.fill();
  g.fillStyle='#a6aaad';g.beginPath();g.ellipse(92,dia+14,48,9,0,Math.PI,0);g.fill();}
 if(rx.ptx){const s=rx.ptx.lado,cx=sideX[s],lat=s==='D'?-1:1,tam=rx.ptx.tam||.3,w=56*tam*1.6;
  g.filter='blur(1px)';g.save();g.beginPath();g.ellipse(cx,175,58,ry+4,0,0,7);g.clip();
  g.fillStyle='#020303';g.beginPath();g.ellipse(cx+lat*56,175,w,ry+10,0,0,7);g.fill();
  g.strokeStyle='rgba(235,238,240,.75)';g.lineWidth=1.5;g.beginPath();g.ellipse(cx+lat*56,175,w,ry+10,0,0,7);g.stroke();g.restore();}
 g.filter='none';
 g.fillStyle='#e9eef0';g.fillRect(14,14,22,24);g.fillStyle='#030405';g.font='bold 18px monospace';g.textAlign='center';g.fillText('D',25,32);
 g.fillStyle='#8a9aa3';g.font='10px monospace';g.textAlign='right';g.fillText('PA · '+G.c.pname.toUpperCase(),290,330);
}

/* ================= ESTADO ================= */
let G=null;
function newGame(ci){
 G={ci,c:CASES[ci],clock:0,asked:[],examined:[],vitals:false,orders:{},fluid:{},seen:{},tapped:false,tapEv:[],tapAttempts:0,
  tool:'percutir',abdTocado:false,examLog:[],talkLog:[],lastAns:null,qcat:null,fig:null,pos:{x:250,y:170},dir:'down',moving:false,target:null,pending:null,
  modal:null,tap:{space:null,pos:null,vol:null,msg:null},final:{cls:null,sind:null,dx:null,cond:[]},near:null,keys:{}};
}
const ready=id=>G.orders[id]!==undefined&&G.orders[id]<=G.clock;
const fready=id=>G.fluid[id]!==undefined&&G.fluid[id]<=G.clock;
const exName=id=>EXAMS.find(e=>e.id===id).t;
const flName=id=>FLUID_TESTS.find(e=>e.id===id).t;
function examResult(id){
 const c=G.c,L=c.light;
 if(!L)return c.res[id]||DEF_RES[id];
 if(id==='sprot')return `Proteínas totais ${nf(L.protS)} g/dL · Albumina ${nf(L.albS)} g/dL`;
 if(id==='sdhl')return `DHL ${L.ldhS} UI/L (ref. até 200)`;
 return c.res[id]||DEF_RES[id];
}
const fluidResult=id=>G.c.fluid[id]||FLUID_DEF[id]||'Sem alterações';

function toast(msg){const box=$('#toast');while(box.children.length>=2)box.firstChild.remove();const d=document.createElement('div');d.textContent=msg;box.appendChild(d);setTimeout(()=>d.remove(),3200);}
function advance(min){
 const b=G.clock;G.clock+=min;
 const done=Object.entries(G.orders).filter(([id,r])=>r>b&&r<=G.clock).map(([id])=>id);
 if(done.length)toast(done.length===1?'Resultado pronto: '+exName(done[0]):done.length+' resultados prontos no computador');
 const fl=Object.entries(G.fluid).filter(([id,r])=>r>b&&r<=G.clock);
 if(fl.length)toast('Chegou o laudo do líquido pleural');
 $('#hudClock').textContent=fmtT(G.clock);
}
function nextPending(){const all=[...Object.values(G.orders),...Object.values(G.fluid)].filter(r=>r>G.clock);return all.length?Math.min(...all):null;}

/* ================= MODAL ================= */
const modal=$('#modal'),mBody=$('#mBody');
let typer=null;
function openM(kind,extra){G.modal=Object.assign({kind},extra||{});renderM(true);modal.hidden=false;}
function closeM(){G.modal=null;modal.hidden=true;if(typer)clearInterval(typer);}
function renderM(top){
 const m=G.modal;if(!m)return;const st=mBody.scrollTop;
 const R={patient:mPatient,nurse:mNurse,pc:mPc,xray:mXray,close:mClose,notes:mNotes,help:mHelp}[m.kind];
 const [title,html,after]=R(m);
 $('#mTitle').textContent=title;mBody.innerHTML=html;
 if(after)after();
 mBody.scrollTop=top?0:st;
 document.querySelectorAll('.qtabs,.figtabs').forEach(t=>{const o=t.querySelector('.on');if(o)t.scrollLeft=o.offsetLeft-t.offsetLeft-(t.clientWidth-o.offsetWidth)/2;});
}
const tabs=(list,cur)=>`<div class="tabs">${list.map(([k,t])=>`<button class="${k===cur?'on':''}" data-m="tab" data-v="${k}">${t}</button>`).join('')}</div>`;

function mPatient(m){
 const c=G.c,tab=m.tab||'talk';
 let h=tabs([['talk','Conversar'],['exam','Examinar']],tab),after=null;
 if(tab==='talk'){
  const cats=[...new Set(QUESTIONS.map(q=>q.cat))],qc=G.qcat||cats[0];
  const conta=cat=>{const l=QUESTIONS.filter(q=>q.cat===cat);return l.filter(q=>G.asked.includes(q.id)).length+'/'+l.length;};
  h+=`<div class="talktop"><div class="talk"><canvas id="por"></canvas><div class="bubble"><span class="nm">${c.pname}</span><span id="say"></span></div></div>
  <div class="qtabs">${cats.map(cat=>`<button class="${qc===cat?'on':''}" data-m="qcat" data-v="${cat}">${cat} <small>${conta(cat)}</small></button>`).join('')}<button class="${qc==='hist'?'on':''}" data-m="qcat" data-v="hist">Conversa <small>${G.talkLog.length}</small></button></div></div>`;
  h+=qc==='hist'?(G.talkLog.length?`<div class="flog">${G.talkLog.map(e=>`<div><b>${e.q}</b>${e.a}</div>`).join('')}</div>`:'<p class="muted">Nada conversado ainda.</p>')
   :`<div class="chips qlist">${QUESTIONS.filter(q=>q.cat===qc).map(q=>`<button class="chip ${G.asked.includes(q.id)?'done':''}" data-m="ask" data-v="${q.id}">${q.t}</button>`).join('')}</div>`;
  after=()=>{drawPortrait($('#por'),c.look,'sick');
   const txt=G.lastAns?c.answers[G.lastAns]:'(olha para você, esperando a primeira pergunta)';
   const el=$('#say');if(typer)clearInterval(typer);
   if(m.typeNow&&G.lastAns){let i=0;typer=setInterval(()=>{i+=2;el.textContent=txt.slice(0,i);if(i>=txt.length)clearInterval(typer);},18);m.typeNow=false;}
   else el.textContent=txt;};
 }
 if(tab==='exam'){
  const fig=G.fig||'costas';
  const z=(id,x,y,w,hh)=>`<rect class="zone ${G.examined.includes(G.tool+':'+id)?'hit':''}" data-m="ex" data-v="${id}" x="${x}" y="${y}" width="${w}" height="${hh}" rx="6"><title>${ZNAME[id]}</title></rect>`;
  h+=`<div class="figtabs">${FIGS.map(([k,t])=>`<button class="${fig===k?'on':''}" data-m="fig" data-v="${k}">${t}${k==='log'?` <small>${G.examLog.length}</small>`:''}</button>`).join('')}</div>`;
  if(fig==='log')h+=(G.vitals?`<div class="res" style="margin:12px 0 8px"><b>Sinais vitais</b><span class="v">${c.vitals}</span></div>`:'')+(G.examLog.length?`<div class="flog" style="margin-top:12px">${G.examLog.map((e,i)=>logItem(e,i)).reverse().join('')}</div>`:'<p class="muted">Nenhum achado ainda.</p>');
  else h+=`${fig==='man'?'':`<p class="muted" style="font-size:.9rem;margin-top:10px">Escolha a manobra e toque na região. Cada uma leva 1 minuto. Na ausculta e na percussão, toque em ▶ Ouvir (melhor com fone).</p>
  <div class="chips" style="margin-top:8px">${TOOLS.map(t=>`<button class="chip ${G.tool===t.id?'on':''}" data-m="tool" data-v="${t.id}">${t.t}</button>`).join('')}
  <button class="chip" data-m="ex" data-v="geral">Inspeção geral do paciente</button></div>`}
  <div class="examgrid">
   <div class="fig ${fig==="costas"?"fig-on":""}" data-fig="costas"><h4>Costas</h4><svg viewBox="0 0 200 220">
    <circle cx="100" cy="24" r="18" fill="#c99a76"/><path d="M40 50 Q100 38 160 50 L166 200 Q100 212 34 200 Z" fill="#d8ad88"/>
    <line x1="100" y1="50" x2="100" y2="200" stroke="#b88a66" stroke-width="2"/>
    <text x="40" y="47" fill="#94aab3" font-size="11" font-family="monospace">E</text><text x="154" y="47" fill="#94aab3" font-size="11" font-family="monospace">D</text>
    ${z('apiceE',44,56,52,44)}${z('apiceD',104,56,52,44)}${z('medioE',42,104,54,44)}${z('medioD',104,104,54,44)}${z('baseE',40,152,56,44)}${z('baseD',104,152,56,44)}
   </svg></div>
   <div class="fig ${fig==="frente"?"fig-on":""}" data-fig="frente"><h4>Frente</h4><svg viewBox="0 0 200 220">
    <circle cx="100" cy="22" r="16" fill="#c99a76"/><rect x="88" y="36" width="24" height="12" fill="#c99a76"/>
    <path d="M52 48 Q100 40 148 48 L150 140 L50 140 Z" fill="#d8ad88"/><rect x="66" y="140" width="68" height="16" fill="#d8ad88"/>
    <rect x="70" y="156" width="26" height="60" fill="#c99a76"/><rect x="104" y="156" width="26" height="60" fill="#c99a76"/>
    <rect x="34" y="52" width="16" height="78" rx="6" fill="#c99a76"/><rect x="150" y="52" width="16" height="78" rx="6" fill="#c99a76"/>
    ${z('boca',88,20,24,14)}${z('pescoco',80,36,40,14)}${z('coracao',96,62,44,40)}${z('abdome',62,108,76,46)}${z('pernas',66,160,68,54)}${z('maos',28,128,26,22)}${z('maos',146,128,26,22)}
   </svg></div>
   <div class="fig ${fig==="cor"?"fig-on":""}" data-fig="cor"><h4>Coração e pulsos</h4><svg viewBox="0 0 200 220">
    <circle cx="100" cy="18" r="13" fill="#c99a76"/><rect x="92" y="30" width="16" height="10" fill="#c99a76"/>
    <path d="M58 40 Q100 34 142 40 L144 128 L56 128 Z" fill="#d8ad88"/><rect x="62" y="128" width="76" height="22" fill="#d8ad88"/>
    <rect x="40" y="42" width="14" height="90" rx="6" fill="#c99a76"/><rect x="146" y="42" width="14" height="90" rx="6" fill="#c99a76"/>
    <rect x="66" y="150" width="28" height="56" fill="#c99a76"/><rect x="106" y="150" width="28" height="56" fill="#c99a76"/>
    <rect x="62" y="204" width="34" height="10" rx="4" fill="#c99a76"/><rect x="104" y="204" width="34" height="10" rx="4" fill="#c99a76"/>
    <path d="M70 58 H130 M68 70 H132 M68 82 H132 M70 94 H130" stroke="#b88a66" stroke-width="1.5"/><line x1="100" y1="44" x2="100" y2="108" stroke="#b88a66" stroke-width="3"/>
    <text x="22" y="66" fill="#94aab3" font-size="10" font-family="monospace">D</text><text x="170" y="66" fill="#94aab3" font-size="10" font-family="monospace">E</text>
    ${z('focoAo',78,50,18,14)}${z('focoP',104,50,18,14)}${z('focoAc',104,64,18,14)}${z('focoT',104,86,18,14)}${z('focoM',124,90,18,14)}
    ${z('pulsoCar',84,30,14,12)}${z('pulsoRad',150,120,16,14)}${z('pulsoFem',76,136,16,14)}${z('pulsoPed',66,200,22,14)}
    <g class="zlbl">${[['Ao',87,60],['P',113,60],["Ao'",113,74],['T',113,96],['M',133,100],['carótida',126,30,1],['radial',176,118,1],['femoral',44,146,1],['pedioso',42,212,1]].map(([t,x,y,o])=>`<text x="${x}" y="${y}" text-anchor="middle"${o?' class="out"':''}>${t}</text>`).join('')}</g>
   </svg></div>
   <div class="fig ${fig==="abd"?"fig-on":""}" data-fig="abd"><h4>Abdome e lombar</h4><svg viewBox="0 0 200 220">
    <path d="M44 10 Q100 0 156 10 L162 150 Q100 166 38 150 Z" fill="#d8ad88"/><circle cx="100" cy="80" r="3" fill="#b88a66"/>
    <path d="M44 10 Q100 34 156 10" stroke="#b88a66" stroke-width="2" fill="none"/>
    ${[['hcd',48,22],['epi',82,22],['hce',116,22],['fld',48,62],['meso',82,62],['fle',116,62],['fid',48,102],['hipo',82,102],['fie',116,102]].map(([id,x,y])=>z(id,x,y,34,38)).join('')}
    <text x="20" y="90" fill="#94aab3" font-size="10" font-family="monospace">D</text><text x="172" y="90" fill="#94aab3" font-size="10" font-family="monospace">E</text>
    <text x="100" y="180" fill="#94aab3" font-size="9" font-family="monospace" text-anchor="middle">costas</text>
    <rect x="50" y="186" width="100" height="30" rx="6" fill="#d8ad88"/><line x1="100" y1="186" x2="100" y2="216" stroke="#b88a66" stroke-width="2"/>
    ${z('lombE',54,189,42,24)}${z('lombD',104,189,42,24)}
    <text x="40" y="206" fill="#94aab3" font-size="10" font-family="monospace">E</text><text x="154" y="206" fill="#94aab3" font-size="10" font-family="monospace">D</text>
   </svg></div></div>
  <div class="manobras ${fig==='man'?'fig-on':''}" data-fig="man">${[['cor','Manobras: coração e pressão'],['abd','Manobras: abdome']].map(([g,t])=>`<h4 class="mtit">${t}</h4>
  <div class="chips">${MANOBRAS.filter(x=>x.g===g).map(x=>`<button class="chip ${G.examined.includes('manobra:'+x.id)?'done':''}" data-m="manobra" data-v="${x.id}">${x.t}</button>`).join('')}</div>`).join('')}</div>
  <div class="ultimo" aria-live="polite">${G.examLog.length?logItem(G.examLog[G.examLog.length-1],G.examLog.length-1):'<p class="muted">Toque numa região: o achado aparece aqui.</p>'}</div>`;
 }
 return [c.pname+' · leito 3',h,after];
}
function tapHtml(c){
 let h='';
  if(G.tapped){
   const ids=Object.keys(G.fluid);
   h+=`<div class="okmsg">Líquido colhido: ${c.fluidLook}</div>${syringe()}`;
   if(ids.length)h+=`<h4 class="mtit">Análises do líquido</h4><div class="list">${ids.map(id=>{const r=fready(id);if(r)G.seen['f_'+id]=1;return `<div class="res ${r?'':'wait'}"><b>${flName(id)}</b><span class="v">${r?fluidResult(id):'Aguardando · pronto às '+fmtT(G.fluid[id])}</span></div>`;}).join('')}</div>`;
   h+=fluidForm();
  }else{
   const t=G.tap;
   let ribs='',sp='';
   for(let i=0;i<10;i++){const y=34+i*24;
    ribs+=`<path d="M138 ${y} Q90 ${y-8} 52 ${y+16}" stroke="#a9855f" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M162 ${y} Q210 ${y-8} 248 ${y+16}" stroke="#a9855f" stroke-width="7" fill="none" stroke-linecap="round"/>`;}
   for(let i=1;i<=9;i++){const y=34+(i-1)*24+6;
    ['E','D'].forEach(s=>{const x=s==='E'?56:162;sp+=`<rect class="space ${t.space&&t.space.s===s&&t.space.i===i?'sel':''}" data-m="space" data-s="${s}" data-i="${i}" x="${x}" y="${y}" width="82" height="16" rx="4"><title>${i}º espaço visível, lado ${s}</title></rect>`;});}
   h+=`<p class="muted" style="font-size:.9rem">No leito 3: paciente sentado, inclinado para a frente, e você atrás dele. Escolha o espaço intercostal, a posição da agulha e o volume.</p>
   <div class="tapwrap" style="margin-top:10px">
    <svg viewBox="0 0 300 280"><rect x="40" y="10" width="220" height="262" rx="40" fill="#d8b896"/>
     <path d="M70 40 L120 46 L112 190 Z" fill="#cfa983" opacity=".8"/><path d="M230 40 L180 46 L188 190 Z" fill="#cfa983" opacity=".8"/>
     ${ribs}<rect x="144" y="14" width="12" height="258" rx="4" fill="#b08a64"/>${sp}
     <text x="48" y="28" font-size="13" font-family="monospace" fill="#5a3d24">E</text><text x="242" y="28" font-size="13" font-family="monospace" fill="#5a3d24">D</text></svg>
    <div>
     <b>Espaço escolhido:</b> <span class="mono">${t.space?t.space.i+'º espaço, lado '+(t.space.s==='D'?'direito':'esquerdo'):'nenhum'}</span>
     <div class="opts">
      ${[['sup','Rente à borda superior da costela de baixo'],['meio','No meio do espaço intercostal'],['inf','Rente à borda inferior da costela de cima']].map(o=>`<label><input type="radio" name="pos" data-m="tpos" value="${o[0]}" ${t.pos===o[0]?'checked':''}>${o[1]}</label>`).join('')}
     </div>
     <div class="opts">
      ${[['60','Diagnóstica: cerca de 60 mL'],['1000','Alívio: cerca de 1.000 mL'],['2000','Esvaziar: cerca de 2.000 mL']].map(o=>`<label><input type="radio" name="vol" data-m="tvol" value="${o[0]}" ${t.vol===o[0]?'checked':''}>${o[1]}</label>`).join('')}
     </div>
     <div class="row"><button class="btn" data-m="punct" ${t.space&&t.pos&&t.vol?'':'disabled'}>Puncionar (20 min)</button></div>
    </div></div>`;
  }
  if(G.tap.msg)h+=G.tap.msg;
  return h;
}
const FIGS=[['costas','Costas'],['frente','Frente'],['cor','Coração'],['abd','Abdome'],['man','Manobras'],['log','Achados']];
const logItem=(e,i)=>`<div><b>${e.k}</b>${e.v}${e.som?`<button class="ouvir" data-m="som" data-i="${i}">▶ Ouvir</button>`:''}</div>`;
function syringe(){const col=G.c.fluidColor;return `<svg viewBox="0 0 240 50" style="width:100%;max-width:300px;margin-top:10px"><rect x="20" y="14" width="160" height="22" rx="4" fill="#e9f1f4" stroke="#9fb2bc"/><rect x="24" y="17" width="120" height="16" fill="${col}"/><rect x="180" y="21" width="44" height="8" fill="#9fb2bc"/><rect x="4" y="10" width="18" height="30" rx="3" fill="#6a7c86"/></svg>`;}
function fluidForm(){
 const left=FLUID_TESTS.filter(f=>G.fluid[f.id]===undefined);
 if(!left.length)return '<p class="muted" style="margin-top:10px">Todas as análises possíveis já foram pedidas.</p>';
 return `<h3 class="sec">O que mandar para o laboratório?</h3><div class="list">${left.map(f=>`<label class="check"><input type="checkbox" data-fl="${f.id}">${f.t}</label>`).join('')}</div>
 <div class="row"><button class="btn" data-m="sendfl">Enviar amostra (resultado em 40 min)</button></div>`;
}

function mNurse(){
 const h=`<div class="talk"><canvas id="por"></canvas><div class="bubble"><span class="nm">Enfermeira Bia</span><span id="say">${G.nurseSay||G.c.briefing}</span></div></div>
 <div class="row"><button class="btn" data-m="vitals">Me passa os sinais vitais?</button><button class="btn ghost" data-m="wait15">Esperar 15 min</button>
 <button class="btn ghost" data-m="waitnext" ${nextPending()===null?'disabled':''}>Esperar o próximo resultado</button>
 <button class="btn ghost" data-m="brief">Repetir o caso</button></div>`;
 return ['Posto de enfermagem',h,()=>drawPortrait($('#por'),'nurse')];
}

function mPc(m){
 if(m.tab==='tap'||m.tab==='fluid'){m.tab='order';m.sub='tap';}
 const tab=m.tab||'order',c=G.c;
 let h=tabs([['order','Pedir exames'],['res','Resultados']],tab);
 if(tab==='order'&&m.sub==='tap'){
  h+=`<button class="chip" data-m="tapback">← Voltar aos exames</button><h4 class="mtit">Toracocentese</h4>`+tapHtml(c);
 }else if(tab==='order'){
  const left=EXAMS.filter(e=>G.orders[e.id]===undefined);
  h+=`<p class="muted" style="font-size:.9rem">Exames pedidos sem necessidade custam pontos. O tempo indica quando o resultado chega.</p>
  <div class="list" style="margin-top:8px">${left.map(e=>`<label class="check"><input type="checkbox" data-ex="${e.id}">${e.t}<span class="tm">${e.d} min</span></label>`).join('')||'<p class="muted">Tudo já foi pedido.</p>'}</div>
  <div class="row"><button class="btn" data-m="order">Solicitar</button></div>
  <h4 class="mtit">Procedimento no leito</h4>
  ${G.tapped?`<div class="okmsg">Toracocentese feita. Líquido colhido: ${c.fluidLook}</div>${fluidForm()}`
   :`<button class="check tapbtn" data-m="tapopen">Toracocentese<span class="tm">20 min ›</span></button>`}`;
 }
 if(tab==='res'){
  const ids=Object.keys(G.orders),fl=Object.keys(G.fluid);
  h+=ids.length||fl.length?`<div class="list">${ids.map(id=>{const r=ready(id);if(r&&id!=='rx')G.seen[id]=1;return `<div class="res ${r?'':'wait'}"><b>${exName(id)}</b><span class="v">${r?examResult(id):'Aguardando · pronto às '+fmtT(G.orders[id])}</span></div>`;}).join('')}</div>`:'<p class="muted">Nenhum exame pedido ainda.</p>';
  if(fl.length)h+=`<h4 class="mtit">Líquido pleural</h4><div class="list">${fl.map(id=>{const r=fready(id);if(r)G.seen['f_'+id]=1;return `<div class="res ${r?'':'wait'}"><b>${flName(id)}</b><span class="v">${r?fluidResult(id):'Aguardando · pronto às '+fmtT(G.fluid[id])}</span></div>`;}).join('')}</div>`;
 }
 return ['Computador do plantão',h];
}

function mXray(){
 if(!ready('rx'))return ['Negatoscópio','<p class="muted">Nenhuma radiografia disponível. Peça no computador.</p>'];
 G.seen.rx=1;
 return ['Negatoscópio','<div class="rxbox"><canvas id="rxc"></canvas></div><p class="muted" style="margin-top:10px;font-size:.9rem">Radiografia de tórax em PA. Sem laudo.</p>',()=>drawRX($('#rxc'),G.c.rx)];
}

function mClose(){
 const f=G.final,c=G.c,liq=G.tapped;
 const h=`<p class="muted" style="font-size:.9rem">Quando assinar, o caso acaba. Ainda dá para voltar e investigar mais.</p>
 <h3 class="sec">Síndrome principal</h3><div class="opts">${SINDROMES.map(d=>`<label><input type="radio" name="sind" data-m="fsind" value="${d.id}" ${f.sind===d.id?'checked':''}>${d.t}</label>`).join('')}</div>
 ${liq?`<h3 class="sec">O líquido pleural é</h3><div class="opts">${['transudato','exsudato'].map(v=>`<label><input type="radio" name="cls" data-m="fcls" value="${v}" ${f.cls===v?'checked':''}>${v[0].toUpperCase()+v.slice(1)}</label>`).join('')}</div>`:''}
 <h3 class="sec">Diagnóstico</h3><div class="opts">${DX.map(d=>`<label><input type="radio" name="dx" data-m="fdx" value="${d.id}" ${f.dx===d.id?'checked':''}>${d.t}</label>`).join('')}</div>
 <h3 class="sec">Conduta (marque todas as corretas)</h3><div class="opts">${c.conduta.map(x=>`<label><input type="checkbox" data-m="fcond" value="${x.id}" ${f.cond.includes(x.id)?'checked':''}>${x.t}</label>`).join('')}</div>
 <div class="row"><button class="btn" data-m="sign" ${(f.cls||!liq)&&f.sind&&f.dx&&f.cond.length?'':'disabled'}>Assinar e encerrar o caso</button></div>`;
 return ['Prontuário',h];
}

function mNotes(m){
 const tab=m.tab||'talk';
 let h=tabs([['talk','Conversa'],['exam','Exame'],['res','Resultados'],['calc','Calculadora']],tab);
 if(tab==='talk')h+=G.talkLog.length?`<div class="flog">${G.talkLog.map(e=>`<div><b>${e.q}</b>${e.a}</div>`).join('')}</div>`:'<p class="muted">Nada conversado ainda.</p>';
 if(tab==='exam')h+=(G.vitals?`<div class="res" style="margin-bottom:8px"><b>Sinais vitais</b><span class="v">${G.c.vitals}</span></div>`:'')+(G.examLog.length?`<div class="flog">${G.examLog.map((e,i)=>logItem(e,i)).join('')}</div>`:'<p class="muted">Nenhum achado de exame físico.</p>');
 if(tab==='res'){
  const ex=Object.keys(G.orders).filter(ready),fl=Object.keys(G.fluid).filter(fready);
  h+=(ex.length||fl.length)?`<div class="list">${ex.map(id=>`<div class="res"><b>${exName(id)}</b><span class="v">${examResult(id)}</span></div>`).join('')}${fl.map(id=>`<div class="res"><b>Líquido pleural · ${flName(id)}</b><span class="v">${fluidResult(id)}</span></div>`).join('')}</div>`:'<p class="muted">Nenhum resultado chegou ainda.</p>';
 }
 if(tab==='calc')h+=`<p class="muted" style="font-size:.9rem">Digite uma conta. Ex.: 5,2 / 6,8</p><div class="calc" style="margin-top:8px"><input id="calcIn" inputmode="decimal" placeholder="ex.: 2400 / 190" value="${G.calcExpr||''}"><button class="btn" data-m="calc">=</button></div><div class="calcout" id="calcOut"></div>`;
 return ['Caderneta',h];
}

function mHelp(){
 return ['Como jogar',`<div class="list">
 <div class="res"><b>Objetivo</b>Descobrir o que o paciente tem e decidir a conduta. Ninguém vai te dizer o que é importante.</div>
 <div class="res"><b>Paciente (leito 3)</b>Converse e examine: tórax por região, boca, mãos, pescoço, coração, abdome e pernas. Se achar que tem líquido na pleura, faça a toracocentese (no computador do plantão, em Pedir exames).</div>
 <div class="res"><b>Sons</b>Toda ausculta e toda percussão têm o botão ▶ Ouvir. Os sons são gerados pelo jogo a partir do achado: servem para treinar ritmo e tipo de ruído, não imitam um paciente real. Use fone de ouvido.</div>
 <div class="res"><b>Enfermeira Bia</b>Sinais vitais e esperar o tempo passar.</div>
 <div class="res"><b>Computador</b>Pedir exames e ver resultados. Os resultados vêm crus, sem destaque do que está alterado.</div>
 <div class="res"><b>Negatoscópio</b>A radiografia aparece sem laudo.</div>
 <div class="res"><b>Prontuário (mesa)</b>Dizer a síndrome, classificar o líquido (se colheu), dar o diagnóstico e a conduta. Isso encerra o caso.</div>
 <div class="res"><b>Pontuação</b>Anamnese, exame físico, exames, síndrome, diagnóstico e conduta (e, nos casos com derrame, toracocentese e análise do líquido). Exames desnecessários e punções erradas descontam.</div></div>`];
}

modal.addEventListener('click',e=>{
 const el=e.target.closest('[data-m]');if(!el||el.disabled)return;
 const a=el.dataset.m,m=G.modal,c=G.c;
 if(a==='close'){closeM();return;}
 if(a==='tab'){m.tab=el.dataset.v;m.sub=null;G.tap.msg=null;renderM(true);return;}
 if(a==='tapopen'){m.sub='tap';renderM(true);return;}
 if(a==='tapback'){m.sub=null;G.tap.msg=null;renderM(true);return;}
 if(a==='qcat'){G.qcat=el.dataset.v;renderM();return;}
 if(a==='ask'){const id=el.dataset.v;if(!G.asked.includes(id)){G.asked.push(id);G.talkLog.push({q:QUESTIONS.find(q=>q.id===id).t,a:c.answers[id]});}advance(2);G.lastAns=id;m.typeNow=true;renderM();return;}
 if(a==='tool'){G.tool=el.dataset.v;renderM();return;}
 if(a==='fig'){G.fig=el.dataset.v;renderM();return;}
 if(a==='ex'){const z=el.dataset.v,tool=z==='geral'?'inspecionar':G.tool,key=tool+':'+z;
  if(!G.examined.includes(key))G.examined.push(key);
  let v=findExam(tool,z);
  if(REGIOES.includes(z)){ // abdome: auscultar antes de palpar e percutir
   if(tool==='auscultar'){if(!G.abdTocado){if(!G.examined.includes('ordem:abdome'))G.examined.push('ordem:abdome');}
    else v+=' (O abdome já tinha sido palpado ou percutido: a manipulação mexe no peristaltismo e altera os ruídos.)';}
   if(tool==='palpar'||tool==='percutir')G.abdTocado=true;}
  G.examLog.push({k:(z==='geral'?'Inspeção geral':TOOLS.find(t=>t.id===tool).t+' · '+ZNAME[z]),v,som:tool==='auscultar'?somDoAchado(v,z,c):tool==='percutir'?somPercussao(v,z):null});advance(1);renderM();return;}
 if(a==='manobra'){const id=el.dataset.v,key='manobra:'+id;if(!G.examined.includes(key))G.examined.push(key);
  if(MANOBRAS.find(x=>x.id===id).g==='abd')G.abdTocado=true;
  const v=findExam('manobra',id);G.examLog.push({k:'Manobra · '+MANOBRAS.find(x=>x.id===id).t,v,som:somPercussao(v,key)||somDoAchado(v,key,c)});advance(1);renderM();return;}
 if(a==='som'){const e=G.examLog[+el.dataset.i];if(e&&e.som&&!tocarSom(e.som))toast('Este navegador não toca sons.');return;}
 if(a==='space'){G.tap.space={s:el.dataset.s,i:+el.dataset.i};G.tap.msg=null;renderM();return;}
 if(a==='tpos'){G.tap.pos=el.value;renderM();return;}
 if(a==='tvol'){G.tap.vol=el.value;renderM();return;}
 if(a==='punct'){doTap();renderM();return;}
 if(a==='sendfl'){const ids=[...mBody.querySelectorAll('[data-fl]:checked')].map(i=>i.dataset.fl);if(!ids.length){toast('Marque ao menos uma análise.');return;}
  advance(3);ids.forEach(id=>G.fluid[id]=G.clock+40);G.tap.msg=`<div class="okmsg">Amostra enviada. Resultado às ${fmtT(G.clock+40)}.</div>`;renderM();return;}
 if(a==='vitals'){G.vitals=true;if(!G.examined.includes('vitals'))G.examined.push('vitals');advance(3);G.nurseSay='Sinais vitais: '+c.vitals;renderM();return;}
 if(a==='wait15'){advance(15);G.nurseSay='Pronto, passaram 15 minutos.';renderM();return;}
 if(a==='waitnext'){const n=nextPending();if(n!==null){advance(n-G.clock);G.nurseSay='Chegou resultado, doutor. Dá uma olhada no computador.';}renderM();return;}
 if(a==='brief'){G.nurseSay=c.briefing;renderM();return;}
 if(a==='order'){const ids=[...mBody.querySelectorAll('[data-ex]:checked')].map(i=>i.dataset.ex);if(!ids.length){toast('Marque ao menos um exame.');return;}
  advance(2);ids.forEach(id=>G.orders[id]=G.clock+EXAMS.find(x=>x.id===id).d);toast(ids.length+' exame(s) solicitado(s)');renderM();return;}
 if(a==='fcls'){G.final.cls=el.value;renderM();return;}
 if(a==='fdx'){G.final.dx=el.value;renderM();return;}
 if(a==='fsind'){G.final.sind=el.value;renderM();return;}
 if(a==='fcond'){const v=el.value,i=G.final.cond.indexOf(v);if(el.checked&&i<0)G.final.cond.push(v);if(!el.checked&&i>=0)G.final.cond.splice(i,1);renderM();return;}
 if(a==='sign'){closeM();finish();return;}
 if(a==='calc'){runCalc();return;}
});
modal.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.id==='calcIn'){e.preventDefault();runCalc();}});
modal.addEventListener('click',e=>{if(e.target===modal)closeM();});
function runCalc(){const inp=$('#calcIn'),out=$('#calcOut');if(!inp)return;G.calcExpr=inp.value;
 const s=inp.value.replace(/,/g,'.').replace(/\s/g,'');
 if(!/^[0-9.+\-*/()]+$/.test(s)){out.textContent='Use só números e + - * / ( )';return;}
 try{const v=Function('"use strict";return ('+s+')')();out.textContent=Number.isFinite(v)?'= '+nf(Math.round(v*1000)/1000):'Conta inválida';}catch(err){out.textContent='Conta inválida';}}

function findExam(tool,z){
 const c=G.c;
 if(z==='geral')return c.geral;
 const k=tool+':'+z;if(c.exam[k])return c.exam[k];
 if(REGIOES.includes(z))return {inspecionar:'Plano, simétrico, sem cicatrizes, abaulamentos ou veias visíveis.',
  palpar:z==='hcd'?'Indolor, sem resistência. Fígado não palpável abaixo do rebordo.':z==='hce'?'Indolor, sem resistência. Baço não palpável.':'Indolor, sem resistência e sem massas.',
  percutir:z==='hcd'?'Som maciço.':'Som timpânico.',auscultar:'Ruídos hidroaéreos presentes e normoaudíveis.'}[tool];
 if(LOMBAR.includes(z))return {inspecionar:'Sem alterações.',palpar:'Rim não palpável, indolor.',percutir:'Punho-percussão sem dor.',auscultar:'Não se aplica.'}[tool];
 if(tool==='manobra'){const ab={murphy:'Inspiração completa, sem dor.',blumberg:'Descompressão sem dor.',rovsing:'Sem dor na fossa ilíaca direita.',psoas:'Sem dor.',obturador:'Sem dor.',
  lemos:'Borda do fígado fina, lisa, indolor, no rebordo costal.',hepatimetria:'Lobo direito 10 cm na linha hemiclavicular. Lobo esquerdo 6 cm.',schuster:'Baço não palpável.',
  traube:'Espaço de Traube timpânico.',skoda:'Timpanismo em todo o abdome, sem semicírculo de macicez.',macicezmovel:'A transição de som não muda com o decúbito.',piparote:'Sem onda líquida.',
  rechaco:'Nada rechaça.',jobert:'Som maciço na loja hepática.',vascolejo:'Sem ruído de chacoalhar.',gersuny:'Sem crepitação.',doisdedos:'Não há veias visíveis no abdome.'};if(ab[z])return ab[z];}
 if(tool==='manobra')return {ortostase:'Deitado e depois de 3 minutos em pé: PA e frequência praticamente iguais, sem sintomas.',
  pa3:'Depois de 5 minutos de repouso, três medidas nos dois braços: valores iguais aos dos sinais vitais. Diferença entre os braços menor que 15 mmHg.'}[z]||'Nenhuma mudança na ausculta.';
 if(FOCOS.includes(z))return {inspecionar:'Sem pulsações visíveis.',palpar:'Sem frêmito.',percutir:'A percussão não faz parte do exame do coração.',
  auscultar:'Bulhas rítmicas, normofonéticas, em 2 tempos, sem sopros.'}[tool];
 if(PULSOS.includes(z))return {inspecionar:'Sem pulsação visível.',palpar:'Pulso presente, simétrico com o outro lado, amplitude normal (++).',percutir:'Não se aplica.',auscultar:'Sem sopros.'}[tool];
 if(/^(apice|medio|base)[DE]$/.test(z)){
  const side=z.slice(-1),eff=z.startsWith('base')&&c.effSides.includes(side);
  return {inspecionar:eff?'Expansibilidade reduzida deste lado.':'Expansibilidade simétrica, sem abaulamentos, retrações ou tiragem.',
   palpar:eff?'Expansibilidade reduzida. Frêmito toracovocal abolido.':'Expansibilidade preservada. Frêmito toracovocal presente e normal.',
   percutir:eff?'Som maciço.':'Som claro pulmonar.',
   auscultar:eff?'Murmúrio vesicular abolido. Ressonância vocal diminuída.':'Murmúrio vesicular presente, sem ruídos adventícios. Ressonância vocal normal.'}[tool];
 }
 const D={
  pescoco:{inspecionar:'Jugulares sem turgência a 45°.',palpar:'Sem linfonodos palpáveis. Refluxo hepatojugular negativo.',percutir:'Não ajuda aqui.',auscultar:'Sem sopros carotídeos.'},
  coracao:{inspecionar:'Ictus não visível.',palpar:'Ictus no 5º espaço intercostal, linha hemiclavicular.',percutir:'Não ajuda muito aqui.',auscultar:'Ritmo regular em 2 tempos, bulhas normofonéticas, sem sopros.'},
  abdome:{inspecionar:'Abdome plano.',palpar:'Flácido, indolor, sem visceromegalias.',percutir:'Timpânico, sem macicez móvel.',auscultar:'Ruídos hidroaéreos presentes.'},
  pernas:{inspecionar:'Sem edema.',palpar:'Sem edema, panturrilhas livres.',percutir:'Não se aplica.',auscultar:'Não se aplica.'},
  boca:{inspecionar:'Mucosas coradas e úmidas. Língua rósea.',palpar:'Não se aplica.',percutir:'Não se aplica.',auscultar:'Não se aplica.'},
  maos:{inspecionar:'Unhas com ângulo normal. Extremidades sem cianose.',palpar:'Mãos aquecidas, enchimento capilar normal.',percutir:'Não se aplica.',auscultar:'Não se aplica.'}
 };
 return D[z][tool];
}

function doTap(){
 const c=G.c,t=G.tap,{s,i}=t.space;advance(20);G.tapAttempts++;
 const imaging=ready('laurell')||ready('usg');
 if(!imaging&&!G.tapEv.some(e=>e.k==='noimg'))G.tapEv.push({k:'noimg',t:'Puncionou sem confirmar líquido livre por Laurell ou USG.',p:4});
 if(i===9){G.tapEv.push({k:'low',t:'Punção baixa demais: risco de atingir fígado, baço ou diafragma. Procedimento interrompido.',p:5});
  t.msg='<div class="event">Muito baixo. Você sentiu resistência e recuou. Abaixo do diafragma ficam fígado e baço. Nenhum líquido.</div>';return;}
 if(!c.tap.sides.includes(s)||!c.tap.spaces.includes(i)){G.tapEv.push({k:'dry'+G.tapAttempts,t:'Punção seca ('+i+'º espaço, lado '+(s==='D'?'direito':'esquerdo')+').',p:3});
  t.msg='<div class="event">Punção seca. Nenhum líquido veio, e o paciente reclamou da dor. Onde está o derrame?</div>';return;}
 let msg='';
 if(t.pos==='inf'){G.tapEv.push({k:'bleed',t:'Agulha rente à borda inferior da costela de cima: sangramento do feixe vasculonervoso.',p:5});msg+='<div class="event">Veio sangue vivo antes do líquido. A agulha passou junto ao feixe vasculonervoso intercostal.</div>';}
 if(t.pos==='meio'){G.tapEv.push({k:'mid',t:'Agulha no meio do espaço: funcionou, mas o mais seguro é rente à borda superior da costela de baixo.',p:2});}
 if(t.vol==='2000'){G.tapEv.push({k:'reexp',t:'Retirou cerca de 2.000 mL: edema de reexpansão (tosse e queda da saturação).',p:5});msg+='<div class="event">Perto dos 2 litros o paciente começou a tossir sem parar e a saturação caiu. Edema de reexpansão.</div>';}
 G.tapped=true;t.msg=msg;
}

/* ================= PONTUAÇÃO ================= */
function score(){
 const c=G.c,f=G.final;
 const hit=(groups,arr)=>groups.filter(g=>g.ids.some(id=>arr.includes(id)));
 const qH=hit(c.keyQ,G.asked),eH=hit(c.keyExam,G.examined),xH=hit(c.keyEx,Object.keys(G.orders)),fH=hit(c.keyFluid||[],Object.keys(G.fluid));
 const keyIds=c.keyEx.flatMap(g=>g.ids);
 const extra=Object.keys(G.orders).filter(id=>!keyIds.includes(id)&&!c.neutral.includes(id));
 const pen=G.tapEv.reduce((s,e)=>s+e.p,0);
 const okT=c.conduta.filter(x=>x.ok).length,okH=c.conduta.filter(x=>x.ok&&f.cond.includes(x.id)).length,wr=c.conduta.filter(x=>!x.ok&&f.cond.includes(x.id)).length;
 const P=pesos(c),s={
  q:Math.round(P.q*qH.length/c.keyQ.length),
  ex:Math.round(P.ex*eH.length/c.keyExam.length),
  lab:Math.max(0,Math.round(P.lab*(c.keyEx.length?xH.length/c.keyEx.length:1))-2*extra.length), // sem exame-chave: nota cheia se não pedir nada à toa
  sind:sindOk(c,f.sind)?P.sind:0,
  dx:f.dx===c.correctDx?P.dx:0,
  cond:Math.max(0,Math.round(P.cond*okH/okT)-4*wr)
 };
 if(ehPleural(c)){
  s.proc=G.tapped?Math.max(0,P.proc-pen):0;
  s.fl=Math.round(P.fl*fH.length/c.keyFluid.length);
  s.cls=f.cls===c.correctClass?P.cls:0;
 }
 s.total=Object.values(s).reduce((a,b)=>a+b,0);
 if(!ehPleural(c)){s.pen=pen;s.total=Math.max(0,s.total-pen);} // punção onde não há líquido também custa
 s.miss={q:c.keyQ.filter(g=>!qH.includes(g)),ex:c.keyExam.filter(g=>!eH.includes(g)),lab:c.keyEx.filter(g=>!xH.includes(g)),fl:ehPleural(c)?c.keyFluid.filter(g=>!fH.includes(g)):[]};
 s.extra=extra;return s;
}
function lightText(){
 const L=G.c.light,rp=L.protL/L.protS,rl=L.ldhL/L.ldhS;
 return `Proteína ${nf(L.protL)}/${nf(L.protS)} = ${nf(rp.toFixed(2))} (${rp>.5?'> 0,5':'≤ 0,5'}) · DHL ${L.ldhL}/${L.ldhS} = ${nf(rl.toFixed(2))} (${rl>.6?'> 0,6':'≤ 0,6'}) · DHL do líquido ${L.ldhL} ${L.ldhL>133?'>':'≤'} 133 (2/3 de 200).`;
}
function finish(){
 const c=G.c,s=score(),f=G.final;
 const prev=store('best-'+c.id);if(prev===undefined||s.total>prev)store('best-'+c.id,s.total);
 const verdict=s.total>=90?'Plantonista exemplar':s.total>=70?'Bom plantão':s.total>=50?'Dá para melhorar':'Vale revisar o resumo';
 const P=pesos(c),pl=ehPleural(c),NOME={q:'Anamnese',ex:'Exame físico',lab:'Exames',proc:'Toracocentese',fl:'Análise do líquido',cls:'Classificação',sind:'Síndrome',dx:'Diagnóstico',cond:'Conduta'};
 const bars=Object.keys(P).map(k=>[NOME[k],s[k],P[k]]);
 const nomeSind=id=>(SINDROMES.find(x=>x.id===id)||{t:'(não marcou)'}).t;
 const missList=(arr,title)=>arr.length?`<h3 class="sec">${title}</h3><ul class="miss">${arr.map(g=>`<li>${g.l}</li>`).join('')}</ul>`:'';
 const next=(G.ci+1)%CASES.length;
 const d=$('#debrief');
 d.innerHTML=`<div class="deb">
  <p class="mono muted">${c.n.toUpperCase()} · ${c.title.toUpperCase()} · ENCERRADO ÀS ${fmtT(G.clock)}</p>
  <div class="score"><span class="big">${s.total}</span><span class="mono muted">/ 100</span></div>
  <h2 style="font-size:1.6rem;margin-top:4px">${verdict}</h2>
  <div class="bars">${bars.map(b=>`<div class="bar"><span>${b[0]}</span><div class="tr"><i style="width:${Math.round(100*b[1]/b[2])}%"></i></div><span class="nm">${b[1]}/${b[2]}</span></div>`).join('')}</div>

  <h3 class="sec">Síndrome: ${sindLista(c).map(nomeSind).join(' ou ')}</h3>
  <p style="font-size:.92rem">${sindOk(c,f.sind)?'Você acertou. ':'Você marcou: '+nomeSind(f.sind)+'. '}${c.sindWhy||''}</p>
  ${pl?`<h3 class="sec">Classificação: ${f.cls===c.correctClass?'acertou':f.cls?'errou':'não classificou'} (${c.correctClass})</h3>
  <p class="muted" style="font-size:.92rem">${lightText()}</p>${c.clsNote?`<p style="font-size:.92rem;margin-top:6px">${c.clsNote}</p>`:''}`:''}
  <h3 class="sec">Diagnóstico: ${DX.find(x=>x.id===c.correctDx).t}</h3>
  <p style="font-size:.92rem">${f.dx===c.correctDx?'Você acertou. ':'Você marcou: '+DX.find(x=>x.id===f.dx).t+'. '}${c.dxWhy}</p>

  ${missList(s.miss.q,'Perguntas que fariam diferença')}
  ${missList(s.miss.ex,'Exame físico que faltou')}
  ${missList(s.miss.lab,'Exames que faltaram')}
  ${s.extra.length?`<h3 class="sec">Exames desnecessários (−2 cada)</h3><ul class="miss">${s.extra.map(id=>`<li>${exName(id)}</li>`).join('')}</ul>`:''}
  ${pl?(G.tapped?missList(s.miss.fl,'Análises do líquido que faltaram'):'<h3 class="sec">Você não colheu o líquido pleural</h3>'):''}
  ${G.tapEv.length?`<h3 class="sec">Intercorrências no procedimento${pl?'':' (descontadas da nota)'}</h3><ul class="miss">${G.tapEv.map(e=>`<li>${e.t} (−${e.p})</li>`).join('')}</ul>`:''}

  <h3 class="sec">Revisão da conduta</h3>
  <div class="cond">${c.conduta.map(x=>{const p=f.cond.includes(x.id);const k=x.ok&&p?'ok':!x.ok&&p?'no':x.ok?'mi':'';const lab=x.ok&&p?'Acertou':!x.ok&&p?'Conduta errada':x.ok?'Faltou marcar':'Bem ignorada';return `<div class="${k}">${x.t}<small><b>${lab}.</b> ${x.why}</small></div>`;}).join('')}</div>

  <h3 class="sec">O que levar deste caso</h3>
  <div class="learn">${c.teaching.map(t=>`<div><b>${t.t}</b><p>${t.p}</p></div>`).join('')}</div>
  <div class="row" style="margin-top:20px">
   <button class="btn" data-go="start" data-i="${next}">Próximo caso</button>
   <button class="btn ghost" data-go="start" data-i="${G.ci}">Repetir este caso</button>
   <button class="btn ghost" data-go="home">Início</button></div>
  <p class="foot">${c.ia?'Paciente fictício criado pela IA a partir de: '+c.fonte+'. A IA pode errar: confira com o seu material e com as diretrizes atuais.':'Paciente fictício. Referência: '+c.fonte+'. Confira com o seu material e com as diretrizes atuais.'}</p></div>`;
 show('debrief');
}

/* ================= TELAS ================= */
function show(id){['home','game','debrief'].forEach(s=>$('#'+s).hidden=s!==id);window.scrollTo(0,0);}
function renderHome(){
 $('#home').innerHTML=`<div class="hero"><h1>Plantão Pleural</h1>
  <p>Noite de plantão na emergência. Você conversa, examina, pede exames, lê a radiografia sem laudo, punciona quando precisa e decide. Ninguém vai te dizer o que é importante.</p></div>
 ${[...new Set(CASES.map(c=>c.modulo))].map(mod=>`<h2 class="modh">${mod}</h2><div class="cases">${CASES.map((c,i)=>{if(c.modulo!==mod)return '';const b=store('best-'+c.id);return `<button class="ccard" data-go="start" data-i="${i}"><canvas data-por="${c.look}"></canvas><div><span class="n">${c.n.toUpperCase()}${c.ia?' · FEITO PELA IA':''}</span><h3>${c.title}</h3><p>${c.card}</p><span class="best">${b!==undefined?'Recorde: '+b+'/100':'Ainda não atendido'}</span></div></button>`;}).join('')}</div>`).join('')}
 <section class="iabox" id="iaBox"></section>
 <div class="how"><div><b>Ande pela sala</b>WASD ou setas no computador. No celular, toque onde quer ir.</div>
  <div><b>Investigue</b>Perguntas, manobras e exames gastam tempo. Pedir tudo tira pontos.</div>
  <div><b>Interprete</b>Resultados vêm crus. A radiografia vem sem laudo. Light é com você.</div></div>
 <p class="foot">Casos fictícios construídos a partir do material de estudo do André (a referência de cada caso aparece no resultado). Material de estudo. Não substitui o julgamento clínico.</p>`;
 document.querySelectorAll('[data-por]').forEach(c=>drawPortrait(c,c.dataset.por,'sick'));
 if(typeof iaHome==='function')iaHome();
}
function startCase(i){newGame(i);$('#hudCase').textContent=G.c.n+' · '+G.c.title;$('#hudClock').textContent=fmtT(0);show('game');
 setTimeout(()=>{openM('nurse');},250);}
document.addEventListener('click',e=>{const el=e.target.closest('[data-go]');if(!el)return;
 if(el.dataset.go==='start')startCase(+el.dataset.i);else{G=null;renderHome();show('home');}});
document.querySelectorAll('[data-hud]').forEach(b=>b.addEventListener('click',()=>{
 const a=b.dataset.hud;if(!G)return;
 if(a==='notes')openM('notes',{tab:'talk'});
 if(a==='wait'){advance(15);toast('15 minutos depois...');}
 if(a==='help')openM('help');
 if(a==='quit'){closeM();G=null;renderHome();show('home');}
}));

/* ================= LOOP ================= */
function interact(o){G.target=null;G.pending=null;
 const k=o.act;if(k==='patient')openM('patient',{tab:'talk'});else if(k==='pc')openM('pc',{tab:Object.keys(G.orders).some(ready)?'res':'order'});else if(k==='close')openM('close');else openM(k);}
const KEYMAP={arrowup:'u',w:'u',arrowdown:'d',s:'d',arrowleft:'l',a:'l',arrowright:'r',d:'r'};
window.addEventListener('keydown',e=>{
 if(!G||$('#game').hidden)return;
 const k=e.key.toLowerCase();
 if(G.modal){if(k==='escape')closeM();return;}
 if(KEYMAP[k]){G.keys[KEYMAP[k]]=1;G.target=null;e.preventDefault();}
 if((k==='e'||k===' '||k==='enter')&&G.near){e.preventDefault();interact(G.near);}
 if(k==='n')openM('notes',{tab:'talk'});
});
window.addEventListener('keyup',e=>{if(!G)return;const k=KEYMAP[e.key.toLowerCase()];if(k)G.keys[k]=0;});
window.addEventListener('blur',()=>{if(G)G.keys={};});
cv.addEventListener('click',e=>{
 if(!G||G.modal)return;const r=cv.getBoundingClientRect();
 const x=(e.clientX-r.left)*W/r.width,y=(e.clientY-r.top)*H/r.height;
 const hit=Object.values(OBJ).find(o=>{const q=o.r;return x>=q[0]-10&&x<=q[0]+q[2]+10&&y>=q[1]-24&&y<=q[1]+q[3]+10;});
 if(hit){G.target={...hit.ip};G.pending=hit;}else{G.target={x,y};G.pending=null;}
 G.stuck=0;
});
$('#actBtn').addEventListener('click',()=>{if(G&&G.near&&!G.modal)interact(G.near);});

let last=performance.now();
function loop(now){
 const dt=Math.min(.05,(now-last)/1000);last=now;const t=now/1000;
 if(G&&!$('#game').hidden){
  let vx=0,vy=0;
  if(!G.modal){
   if(G.keys.u)vy-=1;if(G.keys.d)vy+=1;if(G.keys.l)vx-=1;if(G.keys.r)vx+=1;
   if(!vx&&!vy&&G.target){const dx=G.target.x-G.pos.x,dy=G.target.y-G.pos.y,dist=Math.hypot(dx,dy);
    if(dist<3){const p=G.pending;G.target=null;if(p){interact(p);}}else{vx=dx/dist;vy=dy/dist;}}
  }
  const mv=vx||vy;
  if(mv){const n=Math.hypot(vx,vy)||1,sp=78*dt;const nx=G.pos.x+vx/n*sp,ny=G.pos.y+vy/n*sp;let moved=false;
   if(!blocked(nx,G.pos.y)){G.pos.x=nx;moved=true;}if(!blocked(G.pos.x,ny)){G.pos.y=ny;moved=true;}
   if(Math.abs(vx)>Math.abs(vy))G.dir=vx<0?'left':'right';else G.dir=vy<0?'up':'down';
   if(!moved&&G.target){G.stuck=(G.stuck||0)+dt;if(G.stuck>.4){G.target=null;G.pending=null;}}}
  G.moving=!!mv;
  let near=null,best=30;Object.values(OBJ).forEach(o=>{const d=Math.hypot(o.ip.x-G.pos.x,o.ip.y-G.pos.y);if(d<best){best=d;near=o;}});
  G.near=near;
  const ab=$('#actBtn');if(near&&!G.modal){ab.hidden=false;ab.textContent=near.lbl();}else ab.hidden=true;
  ctx.imageSmoothingEnabled=false;
  drawRoom(t);
  const ents=[{y:G.pos.y,d:()=>drawPerson(G.pos.x,G.pos.y,LOOKS.doctor,t,G.moving,G.dir)},{y:238,d:()=>drawPerson(176,238,LOOKS.nurse,t,false,'up')}].sort((a,b)=>a.y-b.y);
  ents.forEach(e=>e.d());
  const unseenLab=Object.keys(G.orders).some(id=>id!=='rx'&&ready(id)&&!G.seen[id])||Object.keys(G.fluid).some(id=>fready(id)&&!G.seen['f_'+id]);
  if(unseenLab)drawBang(363,40,t);
  if(ready('rx')&&!G.seen.rx)drawBang(252,10+12,t);
  if(near&&!G.modal)drawPrompt(near);
 }
 requestAnimationFrame(loop);
}
renderHome();requestAnimationFrame(loop);
