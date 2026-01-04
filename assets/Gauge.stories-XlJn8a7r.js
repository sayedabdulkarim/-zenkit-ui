import{j as e}from"./jsx-runtime-DiklIkkE.js";import{aJ as r,K as b}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const ie={title:"Data Display/Gauge",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Current value"},min:{control:"number",description:"Minimum value"},max:{control:"number",description:"Maximum value"},size:{control:{type:"range",min:100,max:300,step:10},description:"Size of the gauge"},strokeWidth:{control:{type:"range",min:4,max:20,step:1},description:"Stroke width"},showValue:{control:"boolean",description:"Show value in center"},animated:{control:"boolean",description:"Animate the gauge"}}},l={args:{value:75,size:150}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:[e.jsx(r,{value:0,size:120,label:"0%"}),e.jsx(r,{value:25,size:120,label:"25%"}),e.jsx(r,{value:50,size:120,label:"50%"}),e.jsx(r,{value:75,size:120,label:"75%"}),e.jsx(r,{value:100,size:120,label:"100%"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[e.jsx(r,{value:65,size:80,label:"Small"}),e.jsx(r,{value:65,size:120,label:"Medium"}),e.jsx(r,{value:65,size:180,label:"Large"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[e.jsx(r,{value:70,size:120,strokeWidth:4,label:"Thin"}),e.jsx(r,{value:70,size:120,strokeWidth:10,label:"Medium"}),e.jsx(r,{value:70,size:120,strokeWidth:16,label:"Thick"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:[e.jsx(r,{value:60,size:120,color:"#3b82f6",label:"Blue"}),e.jsx(r,{value:60,size:120,color:"#22c55e",label:"Green"}),e.jsx(r,{value:60,size:120,color:"#f59e0b",label:"Orange"}),e.jsx(r,{value:60,size:120,color:"#ef4444",label:"Red"}),e.jsx(r,{value:60,size:120,color:"#8b5cf6",label:"Purple"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:[e.jsx(r,{value:85,size:150,gradientColors:["#3b82f6","#8b5cf6"],label:"Blue → Purple"}),e.jsx(r,{value:85,size:150,gradientColors:["#22c55e","#eab308"],label:"Green → Yellow"}),e.jsx(r,{value:85,size:150,gradientColors:["#f59e0b","#ef4444"],label:"Orange → Red"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[e.jsx(r,{value:30,size:150,segments:[{start:0,end:33,color:"#22c55e"},{start:33,end:66,color:"#f59e0b"},{start:66,end:100,color:"#ef4444"}],label:"Low"}),e.jsx(r,{value:55,size:150,segments:[{start:0,end:33,color:"#22c55e"},{start:33,end:66,color:"#f59e0b"},{start:66,end:100,color:"#ef4444"}],label:"Medium"}),e.jsx(r,{value:85,size:150,segments:[{start:0,end:33,color:"#22c55e"},{start:33,end:66,color:"#f59e0b"},{start:66,end:100,color:"#ef4444"}],label:"High"})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[e.jsx(r,{value:750,min:0,max:1e3,size:150,label:"Score",valueFormatter:a=>`${a}/1000`}),e.jsx(r,{value:-5,min:-20,max:40,size:150,label:"Temperature",valueFormatter:a=>`${a}°C`})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[e.jsx(r,{value:45,size:120,showValue:!1,label:"Progress"}),e.jsx(r,{value:80,size:120,showValue:!1,label:"Complete",color:"#22c55e"})]})},m={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1.5rem",width:600},children:[e.jsx(b,{style:{padding:"1.5rem",textAlign:"center"},children:e.jsx(r,{value:92,size:120,color:"#22c55e",label:"Uptime",valueFormatter:a=>`${a}%`})}),e.jsx(b,{style:{padding:"1.5rem",textAlign:"center"},children:e.jsx(r,{value:67,size:120,segments:[{start:0,end:50,color:"#22c55e"},{start:50,end:80,color:"#f59e0b"},{start:80,end:100,color:"#ef4444"}],label:"CPU Usage",valueFormatter:a=>`${a}%`})}),e.jsx(b,{style:{padding:"1.5rem",textAlign:"center"},children:e.jsx(r,{value:45,size:120,gradientColors:["#3b82f6","#8b5cf6"],label:"Memory",valueFormatter:a=>`${a}%`})})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[e.jsx(r,{value:45,min:0,max:160,size:180,strokeWidth:12,startAngle:-135,endAngle:135,segments:[{start:0,end:60,color:"#22c55e"},{start:60,end:100,color:"#f59e0b"},{start:100,end:160,color:"#ef4444"}],label:"Speed",valueFormatter:a=>`${a} km/h`}),e.jsx(r,{value:6500,min:0,max:8e3,size:180,strokeWidth:12,startAngle:-135,endAngle:135,segments:[{start:0,end:3e3,color:"#22c55e"},{start:3e3,end:6e3,color:"#f59e0b"},{start:6e3,end:8e3,color:"#ef4444"}],label:"RPM",valueFormatter:a=>a.toLocaleString()})]})},p={render:()=>{const le=x=>"#f59e0b";return e.jsxs(b,{style:{padding:"2rem",textAlign:"center",width:300},children:[e.jsx("h3",{style:{margin:"0 0 1rem"},children:"Health Score"}),e.jsx(r,{value:78,size:180,strokeWidth:14,color:le(),valueFormatter:x=>`${x}`}),e.jsx("p",{style:{margin:"1rem 0 0",color:"#64748b"},children:"Good"})]})}},v={args:{value:85,size:180,animated:!0,animationDuration:1500,gradientColors:["#3b82f6","#8b5cf6"],label:"Loading..."}};var f,z,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: 75,
    size: 150
  }
}`,...(h=(z=l.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};var y,j,G;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap'
  }}>
      <Gauge value={0} size={120} label="0%" />
      <Gauge value={25} size={120} label="25%" />
      <Gauge value={50} size={120} label="50%" />
      <Gauge value={75} size={120} label="75%" />
      <Gauge value={100} size={120} label="100%" />
    </div>
}`,...(G=(j=s.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var S,C,W;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  }}>
      <Gauge value={65} size={80} label="Small" />
      <Gauge value={65} size={120} label="Medium" />
      <Gauge value={65} size={180} label="Large" />
    </div>
}`,...(W=(C=t.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var w,k,A;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  }}>
      <Gauge value={70} size={120} strokeWidth={4} label="Thin" />
      <Gauge value={70} size={120} strokeWidth={10} label="Medium" />
      <Gauge value={70} size={120} strokeWidth={16} label="Thick" />
    </div>
}`,...(A=(k=o.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var F,$,M;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap'
  }}>
      <Gauge value={60} size={120} color="#3b82f6" label="Blue" />
      <Gauge value={60} size={120} color="#22c55e" label="Green" />
      <Gauge value={60} size={120} color="#f59e0b" label="Orange" />
      <Gauge value={60} size={120} color="#ef4444" label="Red" />
      <Gauge value={60} size={120} color="#8b5cf6" label="Purple" />
    </div>
}`,...(M=($=n.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var P,R,T;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap'
  }}>
      <Gauge value={85} size={150} gradientColors={['#3b82f6', '#8b5cf6']} label="Blue → Purple" />
      <Gauge value={85} size={150} gradientColors={['#22c55e', '#eab308']} label="Green → Yellow" />
      <Gauge value={85} size={150} gradientColors={['#f59e0b', '#ef4444']} label="Orange → Red" />
    </div>
}`,...(T=(R=i.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var V,D,L;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <Gauge value={30} size={150} segments={[{
      start: 0,
      end: 33,
      color: '#22c55e'
    }, {
      start: 33,
      end: 66,
      color: '#f59e0b'
    }, {
      start: 66,
      end: 100,
      color: '#ef4444'
    }]} label="Low" />
      <Gauge value={55} size={150} segments={[{
      start: 0,
      end: 33,
      color: '#22c55e'
    }, {
      start: 33,
      end: 66,
      color: '#f59e0b'
    }, {
      start: 66,
      end: 100,
      color: '#ef4444'
    }]} label="Medium" />
      <Gauge value={85} size={150} segments={[{
      start: 0,
      end: 33,
      color: '#22c55e'
    }, {
      start: 33,
      end: 66,
      color: '#f59e0b'
    }, {
      start: 66,
      end: 100,
      color: '#ef4444'
    }]} label="High" />
    </div>
}`,...(L=(D=d.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var H,U,E;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <Gauge value={750} min={0} max={1000} size={150} label="Score" valueFormatter={v => \`\${v}/1000\`} />
      <Gauge value={-5} min={-20} max={40} size={150} label="Temperature" valueFormatter={v => \`\${v}°C\`} />
    </div>
}`,...(E=(U=c.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var I,O,B;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <Gauge value={45} size={120} showValue={false} label="Progress" />
      <Gauge value={80} size={120} showValue={false} label="Complete" color="#22c55e" />
    </div>
}`,...(B=(O=u.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var Y,_,J;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
    width: 600
  }}>
      <Card style={{
      padding: '1.5rem',
      textAlign: 'center'
    }}>
        <Gauge value={92} size={120} color="#22c55e" label="Uptime" valueFormatter={v => \`\${v}%\`} />
      </Card>
      <Card style={{
      padding: '1.5rem',
      textAlign: 'center'
    }}>
        <Gauge value={67} size={120} segments={[{
        start: 0,
        end: 50,
        color: '#22c55e'
      }, {
        start: 50,
        end: 80,
        color: '#f59e0b'
      }, {
        start: 80,
        end: 100,
        color: '#ef4444'
      }]} label="CPU Usage" valueFormatter={v => \`\${v}%\`} />
      </Card>
      <Card style={{
      padding: '1.5rem',
      textAlign: 'center'
    }}>
        <Gauge value={45} size={120} gradientColors={['#3b82f6', '#8b5cf6']} label="Memory" valueFormatter={v => \`\${v}%\`} />
      </Card>
    </div>
}`,...(J=(_=m.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var K,N,q;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <Gauge value={45} min={0} max={160} size={180} strokeWidth={12} startAngle={-135} endAngle={135} segments={[{
      start: 0,
      end: 60,
      color: '#22c55e'
    }, {
      start: 60,
      end: 100,
      color: '#f59e0b'
    }, {
      start: 100,
      end: 160,
      color: '#ef4444'
    }]} label="Speed" valueFormatter={v => \`\${v} km/h\`} />
      <Gauge value={6500} min={0} max={8000} size={180} strokeWidth={12} startAngle={-135} endAngle={135} segments={[{
      start: 0,
      end: 3000,
      color: '#22c55e'
    }, {
      start: 3000,
      end: 6000,
      color: '#f59e0b'
    }, {
      start: 6000,
      end: 8000,
      color: '#ef4444'
    }]} label="RPM" valueFormatter={v => v.toLocaleString()} />
    </div>
}`,...(q=(N=g.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var Q,X,Z;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const score = 78;
    const getColor = (value: number) => {
      if (value >= 80) return '#22c55e';
      if (value >= 60) return '#f59e0b';
      return '#ef4444';
    };
    return <Card style={{
      padding: '2rem',
      textAlign: 'center',
      width: 300
    }}>
        <h3 style={{
        margin: '0 0 1rem'
      }}>Health Score</h3>
        <Gauge value={score} size={180} strokeWidth={14} color={getColor(score)} valueFormatter={v => \`\${v}\`} />
        <p style={{
        margin: '1rem 0 0',
        color: '#64748b'
      }}>
          {score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : 'Needs Improvement'}
        </p>
      </Card>;
  }
}`,...(Z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,re,ae;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    value: 85,
    size: 180,
    animated: true,
    animationDuration: 1500,
    gradientColors: ['#3b82f6', '#8b5cf6'],
    label: 'Loading...'
  }
}`,...(ae=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const de=["Default","Values","Sizes","StrokeWidths","Colors","GradientColors","WithSegments","CustomRange","WithoutValue","DashboardExample","SpeedometerStyle","HealthScore","Animated"];export{v as Animated,n as Colors,c as CustomRange,m as DashboardExample,l as Default,i as GradientColors,p as HealthScore,t as Sizes,g as SpeedometerStyle,o as StrokeWidths,s as Values,d as WithSegments,u as WithoutValue,de as __namedExportsOrder,ie as default};
