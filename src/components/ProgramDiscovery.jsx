import { useState, useEffect, useRef, useCallback } from "react";

const PROGS = {
  S: {
    key:'S', slug:'sleep', name:'Sleep Architecture', icon:'🌙',
    color:'#A5B4FC', glow:'rgba(165,180,252,0.35)',
    line:'Rest that actually restores you.',
    gentle:'Sleep is where the body quietly repairs itself. When that is disturbed, everything else — energy, mood, patience, clarity — follows. Soma works with the nervous system patterns beneath the surface, not just the hours in bed.',
    what:['Understanding what is specifically disrupting your sleep','Breathwork that prepares the nervous system for rest','A self-sustaining evening practice you keep long after'],
    feel:'Most people notice something shift around week three. Nothing dramatic — just a quieter night.',
    duration:'6 sessions · 8 weeks · Online or Pune',
    cta:'Have a conversation with Soma about sleep',
    url:'/programs/sleep',
  },
  C: {
    key:'C', slug:'cognitive', name:'Cognitive Wellness', icon:'🧠',
    color:'#6EE7B7', glow:'rgba(110,231,183,0.35)',
    line:'The clarity you used to have — it can come back.',
    gentle:'Mental fog, difficulty concentrating, that feeling of operating just below your best — these are signs of a nervous system that has been under sustained pressure without enough recovery. Soma works with that pattern directly.',
    what:['Identifying whether your fog is cortisol, sleep, or inflammation-driven','Breathing and meditation practices for cognitive restoration','Simple daily tools that protect clarity going forward'],
    feel:'People often describe the shift as remembering who they were before things got heavy.',
    duration:'8 sessions · 10 weeks · Online or Pune',
    cta:'Talk to Soma about cognitive wellness',
    url:'/programs/cognitive',
  },
  D: {
    key:'D', slug:'digital', name:'Digital Wellness', icon:'💻',
    color:'#FCD34D', glow:'rgba(252,211,77,0.35)',
    line:'Your body was not built for this — but it can adapt.',
    gentle:"The aches, the wrist strain, the neck that never quite loosens — these are not inevitable. They are the body's honest response to how modern work is structured. Soma has worked inside tech companies for over 22 years. She understands this specific kind of physical cost.",
    what:['Desk-based sequences that fit inside a real working day','RSI and posture correction specific to screen workers','Eye and neck relief practices you can do without leaving your chair'],
    feel:'Small changes in how you sit, breathe, and move through the day add up to something significant over weeks.',
    duration:'6 sessions · 8 weeks · Online or on-site Pune',
    cta:'Ask Soma about desk wellness',
    url:'/programs/digital',
  },
  M: {
    key:'M', slug:'metabolic', name:'Metabolic Health', icon:'🌿',
    color:'#FCA5A5', glow:'rgba(252,165,165,0.35)',
    line:'There is a reason your body is not responding — and it is not your fault.',
    gentle:'Metabolism is not just about weight. It is about how your body produces energy, processes food, manages stress, and recovers. When this system is under strain — from lifestyle, hormones, or years of pushing through — it needs support, not more effort.',
    what:['Understanding your specific metabolic pattern — not a generic plan','Yoga therapy that works with your endocrine and digestive systems','Gradual, sustainable shifts that compound quietly over 12 weeks'],
    feel:'The goal is not a number. It is a body that feels like yours again.',
    duration:'12 sessions · 12 weeks · Online or Pune',
    cta:'Have a quiet conversation about this with Soma',
    url:'/programs/metabolic',
  },
};

const Qs = [
  { id:1, q:'If you could give this season of your life a name, what would it be?', sub:'No right answer. Just what feels true.',
    opts:[
      {t:'The Exhausted Season', s:'Sleep and rest have stopped doing what they used to do', icon:'🌙', sc:{S:4,C:1,D:0,M:2}},
      {t:'The Foggy Season', s:'Something in my thinking has quietly changed', icon:'☁️', sc:{S:1,C:4,D:0,M:1}},
      {t:'The Aching Season', s:'My body carries the weight of how I work', icon:'🪑', sc:{S:0,C:1,D:4,M:1}},
      {t:'The Resistant Season', s:'I am trying — and my body is not responding', icon:'🌿', sc:{S:1,C:1,D:0,M:4}},
    ]},
  { id:2, q:'When in the day do you feel most unlike yourself?', sub:'Take a moment. It is usually very specific.',
    opts:[
      {t:'In the morning, before I have even begun', s:'The day starts with a deficit', icon:'🌅', sc:{S:3,C:2,D:0,M:2}},
      {t:'In the afternoon, when everything slows', s:'A wall that arrives at the same time every day', icon:'🌤️', sc:{S:1,C:3,D:2,M:2}},
      {t:'At my desk, when the pain becomes noise', s:'Physical discomfort that makes focus impossible', icon:'💺', sc:{S:0,C:1,D:4,M:1}},
      {t:'At night, when I should be recovering', s:'The time meant for rest becomes its own difficulty', icon:'🌙', sc:{S:4,C:2,D:0,M:2}},
    ]},
  { id:3, q:'Which of these feels most like something you have stopped telling people?', sub:'The quiet ones. The things said only to yourself.',
    opts:[
      {t:'"I cannot remember the last time I woke up rested"', s:'', icon:'😔', sc:{S:4,C:1,D:0,M:1}},
      {t:'"I used to be sharper than this"', s:'', icon:'💭', sc:{S:1,C:4,D:0,M:1}},
      {t:'"I am in some kind of pain almost every day"', s:'', icon:'🌿', sc:{S:0,C:0,D:4,M:2}},
      {t:'"I do not recognise my body anymore"', s:'', icon:'🪞', sc:{S:1,C:1,D:1,M:4}},
    ]},
  { id:4, q:'What has this taken from you that you miss most?', sub:'Be gentle with yourself answering this one.',
    opts:[
      {t:'Presence — being fully here with the people I love', s:'', icon:'🤍', sc:{S:2,C:3,D:1,M:2}},
      {t:'Ease — moving through the day without the body being a problem', s:'', icon:'🕊️', sc:{S:1,C:1,D:4,M:2}},
      {t:'Confidence — in my own thinking and decisions', s:'', icon:'🌱', sc:{S:2,C:4,D:1,M:1}},
      {t:'Vitality — the sense of being fully alive in this body', s:'', icon:'✨', sc:{S:2,C:1,D:1,M:4}},
    ]},
  { id:5, q:'If things were different — really different — what would that feel like?', sub:'Not a goal. Just an image. Let it come.',
    opts:[
      {t:'Waking up and feeling like the day is already okay', s:'', icon:'🌄', sc:{S:4,C:1,D:0,M:1}},
      {t:'Thinking clearly, without fighting myself to get there', s:'', icon:'💡', sc:{S:1,C:4,D:1,M:1}},
      {t:'A body that cooperates — quiet, flexible, without complaint', s:'', icon:'🍃', sc:{S:0,C:1,D:4,M:2}},
      {t:'Energy and weight that finally feel like mine again', s:'', icon:'🌸', sc:{S:1,C:1,D:0,M:4}},
    ]},
];

function ParticleField({ phase, resultColor }) {
  const cvs = useRef(null);
  const st = useRef({ pts:[], phase:'init', t:0, col:[0.08,0.55,0.42], tCol:[0.08,0.55,0.42] });

  useEffect(() => {
    const c = cvs.current; if(!c) return;
    const ctx = c.getContext('2d');
    let raf, W, H;

    const resize = () => { W=c.width=c.offsetWidth; H=c.height=c.offsetHeight; init(); };
    window.addEventListener('resize', resize);

    const makePt = (W,H) => {
      const cx=W/2, cy=H*0.44, sc=Math.min(W,H)*0.32;
      const regions=[
        {cx:0,cy:-.72,rx:.18,ry:.19,w:9},{cx:0,cy:-.5,rx:.1,ry:.08,w:2},
        {cx:0,cy:-.22,rx:.26,ry:.29,w:19},{cx:0,cy:.12,rx:.24,ry:.18,w:12},
        {cx:0,cy:.27,rx:.24,ry:.12,w:8},{cx:-.34,cy:-.28,rx:.07,ry:.28,w:7},
        {cx:.34,cy:-.28,rx:.07,ry:.28,w:7},{cx:-.14,cy:.56,rx:.09,ry:.28,w:7},
        {cx:.14,cy:.56,rx:.09,ry:.28,w:7},{cx:-.14,cy:.88,rx:.07,ry:.22,w:6},
        {cx:.14,cy:.88,rx:.07,ry:.22,w:6},
      ];
      const tw=regions.reduce((a,r)=>a+r.w,0);
      let pick=Math.random()*tw,acc=0,r=regions[0];
      for(const reg of regions){acc+=reg.w;if(pick<=acc){r=reg;break;}}
      let x,y,t=0;
      do{x=(Math.random()*2-1)*r.rx;y=(Math.random()*2-1)*r.ry;t++;}
      while(t<20&&x*x/(r.rx*r.rx)+y*y/(r.ry*r.ry)>1);
      return {x:cx+(r.cx+x)*sc,y:cy+(r.cy+y)*sc};
    };

    const init = () => {
      st.current.pts = Array.from({length:200},(_,i) => {
        const body = makePt(W,H);
        const a=Math.random()*Math.PI*2, d=0.3+Math.random()*0.7;
        return { bx:body.x,by:body.y, x:W/2+Math.cos(a)*W*d, y:H/2+Math.sin(a)*H*d,
          vx:0,vy:0, sz:Math.random()*1.6+0.7, spd:0.014+Math.random()*0.01,
          ph:Math.random()*Math.PI*2, fr:0.35+Math.random()*0.6 };
      });
    };

    const lerp=(a,b,t)=>a+(b-a)*t;

    const tick = () => {
      raf=requestAnimationFrame(tick); st.current.t+=0.016;
      const {pts,t,col,tCol} = st.current;
      const ph = st.current.phase;
      for(let i=0;i<3;i++) col[i]=lerp(col[i],tCol[i],0.015);
      ctx.clearRect(0,0,W,H);
      pts.forEach((p,i) => {
        const breath=Math.sin(t*p.fr+p.ph)*0.006;
        let alpha=0.72;
        if(ph==='init'||ph==='gathering'){
          p.x=lerp(p.x,p.bx,p.spd); p.y=lerp(p.y,p.by,p.spd); alpha=0.4+Math.random()*0.35;
        } else if(ph==='quiz'||ph==='idle'){
          const sw=Math.sin(t*0.28+i*0.05)*2.8;
          p.x=lerp(p.x,p.bx+sw*0.1,0.04); p.y=lerp(p.y,p.by+breath*H*0.4,0.04); alpha=0.72;
        } else if(ph==='scatter'){
          if(!p.sx){const a=Math.random()*Math.PI*2,d=0.35+Math.random()*0.5;p.sx=Math.cos(a)*d;p.sy=Math.sin(a)*d;}
          p.vx=(p.vx+p.sx*W*0.004)*0.86; p.vy=(p.vy+p.sy*H*0.004-0.2)*0.86;
          p.x+=p.vx; p.y+=p.vy; alpha=Math.max(0,0.6-t*0.12);
        } else if(ph==='reform'){
          p.sx=undefined; p.x=lerp(p.x,p.bx,0.038); p.y=lerp(p.y,p.by,0.038);
          alpha=lerp(0.05,0.75,Math.min(1,t*0.15));
        } else if(ph==='result'){
          const sw=Math.sin(t*0.35+i*0.07)*3.5;
          p.x=lerp(p.x,p.bx+sw*0.08,0.038); p.y=lerp(p.y,p.by+breath*H*0.55,0.038);
          alpha=0.72+Math.sin(t*0.7+i*0.09)*0.1;
        }
        const [r,g,b]=col;
        const grd=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.sz*2.8);
        grd.addColorStop(0,`rgba(${Math.floor(r*255)},${Math.floor(g*255)},${Math.floor(b*255)},${alpha})`);
        grd.addColorStop(1,'rgba(0,0,0,0)');
        ctx.beginPath(); ctx.arc(p.x,p.y,p.sz*2.8,0,Math.PI*2);
        ctx.fillStyle=grd; ctx.fill();
      });
    };

    resize();
    setTimeout(()=>{st.current.phase='gathering';},300);
    setTimeout(()=>{st.current.phase='idle';},2800);
    tick();
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize',resize); };
  },[]);

  useEffect(()=>{
    const s=st.current;
    if(phase==='quiz') s.phase='quiz';
    else if(phase==='scatter'){s.phase='scatter';s.t=0;}
    else if(phase==='reform'){s.phase='reform';s.t=0;}
    else if(phase==='result') s.phase='result';
  },[phase]);

  useEffect(()=>{
    if(!resultColor||resultColor.length<7) return;
    const r=parseInt(resultColor.slice(1,3),16)/255;
    const g=parseInt(resultColor.slice(3,5),16)/255;
    const b=parseInt(resultColor.slice(5,7),16)/255;
    st.current.tCol=[r*0.85,g*0.85,b*0.85];
  },[resultColor]);

  return <canvas ref={cvs} style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none'}} />;
}

export default function ProgramDiscovery() {
  const [phase, setPhase] = useState('welcome');
  const [qIdx, setQIdx] = useState(0);
  const [scores, setScores] = useState({S:0,C:0,D:0,M:0});
  const [selected, setSelected] = useState(null);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState(null);
  const [pPhase, setPPhase] = useState('init');
  const [shown, setShown] = useState(false);
  const [transMsg, setTransMsg] = useState('');

  const TRANS_MSGS = ['Taking a moment with your answers…','Something is becoming clearer…','Almost there…'];

  const pick = useCallback((opt) => {
    if(busy||selected) return;
    setSelected(opt); setBusy(true);
    const ns={S:scores.S+opt.sc.S,C:scores.C+opt.sc.C,D:scores.D+opt.sc.D,M:scores.M+opt.sc.M};
    setTimeout(()=>{
      if(qIdx<Qs.length-1){
        setQIdx(q=>q+1); setScores(ns); setSelected(null); setBusy(false);
      } else {
        const w=Object.keys(ns).reduce((a,b)=>ns[a]>=ns[b]?a:b);
        setResult(PROGS[w]); setScores(ns);
        setPhase('transitioning'); setPPhase('scatter');
        let mi=0; setTransMsg(TRANS_MSGS[0]);
        const iv=setInterval(()=>{ mi++; if(mi<TRANS_MSGS.length) setTransMsg(TRANS_MSGS[mi]); else clearInterval(iv); },1000);
        setTimeout(()=>{ setPPhase('reform'); },900);
        setTimeout(()=>{ setPhase('result'); setPPhase('result'); setShown(false); setTimeout(()=>setShown(true),300); },3200);
      }
    },520);
  },[busy,selected,qIdx,scores]);

  const restart = () => {
    setShown(false);
    setTimeout(()=>{
      setPhase('welcome'); setQIdx(0); setScores({S:0,C:0,D:0,M:0});
      setSelected(null); setBusy(false); setResult(null); setPPhase('idle');
    },300);
  };

  const g={backdropFilter:'blur(22px)',WebkitBackdropFilter:'blur(22px)',background:'rgba(4,10,6,0.68)',border:'1px solid rgba(255,255,255,0.06)'};

  return (
    <div style={{position:'relative',minHeight:'80vh',background:'#030806',fontFamily:"'Inter',system-ui,sans-serif",color:'#fff',overflow:'hidden',borderRadius:'40px'}}>
      <ParticleField phase={pPhase} resultColor={result?.color} />

      <div style={{position:'relative',zIndex:10,minHeight:'80vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'40px 18px 60px'}}>
        <div style={{width:'100%',maxWidth:440}}>

          {/* WELCOME */}
          {phase==='welcome' && (
            <div style={{textAlign:'center'}}>
              <p style={{fontSize:14,letterSpacing:'0.18em',textTransform:'uppercase',color:'rgba(160,220,180,0.5)',marginBottom:22}}>
                Soma Mukherjee · Programme Discovery
              </p>
              <h2 style={{fontSize:30,fontWeight:700,lineHeight:1.25,margin:'0 0 16px',letterSpacing:'-0.02em',color:'rgba(255,255,255,0.92)'}}>
                Something in your body<br/>has been asking for attention.<br/>
                <span style={{color:'rgba(255,255,255,0.28)'}}>Let's find out what.</span>
              </h2>
              <p style={{fontSize:17,color:'rgba(255,255,255,0.38)',lineHeight:1.82,margin:'0 0 30px',maxWidth:360,marginLeft:'auto',marginRight:'auto'}}>
                Five gentle questions — no typing, no forms.<br/>At the end, a quiet suggestion of where to begin.
              </p>
              <button onClick={()=>{setPhase('quiz');setPPhase('quiz');}}
                style={{width:'100%',...g,borderRadius:18,padding:'17px',fontSize:17,fontWeight:600,color:'rgba(255,255,255,0.82)',cursor:'pointer',letterSpacing:'0.01em',border:'1px solid rgba(255,255,255,0.1)',marginBottom:18,transition:'all .2s'}}>
                I'd like to try this
              </button>
              <p style={{fontSize:14,color:'rgba(255,255,255,0.13)'}}>Nothing is stored · Completely private</p>
            </div>
          )}

          {/* QUIZ */}
          {phase==='quiz' && (
            <div>
              <div style={{marginBottom:22}}>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:14,color:'rgba(255,255,255,0.2)',marginBottom:7,letterSpacing:'0.05em'}}>
                  <span style={{textTransform:'uppercase',fontStyle:'italic'}}>{Qs[qIdx].sub}</span>
                  <span>{qIdx+1} of {Qs.length}</span>
                </div>
                <div style={{height:1,background:'rgba(255,255,255,0.05)',borderRadius:1}}>
                  <div style={{height:'100%',width:`${(qIdx/Qs.length)*100}%`,background:'rgba(160,220,180,0.35)',borderRadius:1,transition:'width .5s ease'}} />
                </div>
              </div>
              <h3 style={{fontSize:22,fontWeight:600,lineHeight:1.4,margin:'0 0 24px',textAlign:'center',color:'rgba(255,255,255,0.88)'}}>
                {Qs[qIdx].q}
              </h3>
              <div style={{display:'flex',flexDirection:'column',gap:8}}>
                {Qs[qIdx].opts.map((o,i)=>{
                  const isSel=selected===o;
                  return(
                    <button key={i} onClick={()=>pick(o)} style={{
                      ...g,borderRadius:16,padding:'14px 16px',display:'flex',alignItems:'center',gap:12,
                      cursor:'pointer',textAlign:'left',
                      border:`1px solid ${isSel?'rgba(160,220,180,0.45)':'rgba(255,255,255,0.05)'}`,
                      background:isSel?'rgba(80,160,100,0.1)':'rgba(4,10,6,0.55)',
                      transition:'all .2s ease',opacity:selected&&!isSel?0.4:1,
                    }}>
                      <span style={{fontSize:24,flexShrink:0}}>{o.icon}</span>
                      <div style={{flex:1}}>
                        <div style={{fontSize:16,fontWeight:isSel?500:400,color:isSel?'rgba(160,230,180,0.95)':'rgba(255,255,255,0.72)',lineHeight:1.4}}>{o.t}</div>
                        {o.s && <div style={{fontSize:14,color:'rgba(255,255,255,0.25)',lineHeight:1.4,marginTop:2}}>{o.s}</div>}
                      </div>
                      {isSel && <div style={{width:7,height:7,borderRadius:'50%',background:'rgba(160,230,180,0.8)',flexShrink:0,boxShadow:'0 0 10px rgba(160,230,180,0.5)'}} />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* TRANSITIONING */}
          {phase==='transitioning' && (
            <div style={{textAlign:'center',padding:'0 20px'}}>
              <p style={{fontSize:16,color:'rgba(255,255,255,0.45)',lineHeight:1.7,fontStyle:'italic'}}>{transMsg}</p>
            </div>
          )}

          {/* RESULT */}
          {phase==='result' && result && (
            <div style={{opacity:shown?1:0,transform:shown?'translateY(0)':'translateY(16px)',transition:'all 1s ease'}}>
              <div style={{textAlign:'center',marginBottom:20}}>
                <div style={{fontSize:32,marginBottom:10}}>{result.icon}</div>
                <p style={{fontSize:13,letterSpacing:'0.15em',textTransform:'uppercase',color:result.color,marginBottom:8,opacity:.7}}>A gentle suggestion</p>
                <p style={{fontSize:26,fontWeight:700,color:'rgba(255,255,255,0.9)',margin:'0 0 8px'}}>{result.name}</p>
                <p style={{fontSize:16,color:'rgba(255,255,255,0.38)',margin:0,fontStyle:'italic',lineHeight:1.5}}>{result.line}</p>
              </div>

              <div style={{...g,borderRadius:20,padding:'16px 18px',marginBottom:10,borderColor:`${result.color}18`}}>
                <div style={{fontSize:13,letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(255,255,255,0.2)',marginBottom:8}}>What your answers suggest</div>
                <p style={{fontSize:16,color:'rgba(255,255,255,0.62)',lineHeight:1.82,margin:0}}>{result.gentle}</p>
              </div>

              <div style={{...g,borderRadius:20,padding:'16px 18px',marginBottom:10}}>
                <div style={{fontSize:13,letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(255,255,255,0.2)',marginBottom:10}}>Sessions would explore</div>
                {result.what.map((w,i)=>(
                  <div key={i} style={{display:'flex',gap:10,marginBottom:i<result.what.length-1?8:0,alignItems:'flex-start'}}>
                    <div style={{width:4,height:4,borderRadius:'50%',background:'rgba(255,255,255,0.2)',flexShrink:0,marginTop:9}} />
                    <span style={{fontSize:16,color:'rgba(255,255,255,0.55)',lineHeight:1.6}}>{w}</span>
                  </div>
                ))}
              </div>

              <p style={{fontSize:16,color:'rgba(255,255,255,0.28)',lineHeight:1.75,margin:'0 4px 16px',fontStyle:'italic'}}>{result.feel}</p>
              <p style={{textAlign:'center',fontSize:14,color:'rgba(255,255,255,0.18)',marginBottom:16,letterSpacing:'0.05em'}}>{result.duration}</p>

              <a href={result.url}
                style={{display:'block',width:'100%',...g,borderRadius:18,padding:'15px',textAlign:'center',color:'rgba(255,255,255,0.75)',fontSize:17,fontWeight:500,textDecoration:'none',marginBottom:8,border:`1px solid ${result.color}30`,letterSpacing:'0.01em'}}>
                {result.cta} →
              </a>
              <a href={result.url}
                style={{display:'block',width:'100%',padding:'10px',textAlign:'center',color:'rgba(255,255,255,0.22)',fontSize:15,textDecoration:'none',marginBottom:20}}>
                Read more about this programme
              </a>

              <div style={{marginBottom:16}}>
                <p style={{fontSize:13,color:'rgba(255,255,255,0.15)',textAlign:'center',marginBottom:10,letterSpacing:'0.06em',textTransform:'uppercase'}}>Other programmes</p>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6}}>
                  {Object.values(PROGS).filter(p=>p.key!==result.key).map(p=>(
                    <a key={p.key} href={p.url}
                      style={{...g,borderRadius:12,padding:'10px 12px',textDecoration:'none',display:'flex',gap:8,alignItems:'center',border:'1px solid rgba(255,255,255,0.04)'}}>
                      <span style={{fontSize:18,opacity:.5}}>{p.icon}</span>
                      <div>
                        <div style={{fontSize:14,color:'rgba(255,255,255,0.4)',marginBottom:1}}>{p.name}</div>
                        <div style={{fontSize:12,color:'rgba(255,255,255,0.18)',lineHeight:1.3}}>{p.line.split('—')[0].trim()}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <button onClick={restart}
                style={{display:'block',width:'100%',background:'none',border:'none',color:'rgba(255,255,255,0.15)',fontSize:15,cursor:'pointer',textDecoration:'underline',textAlign:'center',padding:'8px'}}>
                Go back and explore differently
              </button>
            </div>
          )}
        </div>
      </div>
      <style>{`* { box-sizing:border-box; }`}</style>
    </div>
  );
}
