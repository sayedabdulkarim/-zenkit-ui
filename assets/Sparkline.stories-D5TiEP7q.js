import{j as e}from"./jsx-runtime-DiklIkkE.js";import{ci as t,K as a}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const te={title:"Data Display/Sparkline",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["line","bar","area"],description:"The type of sparkline"},width:{control:"number",description:"Width of the sparkline"},height:{control:"number",description:"Height of the sparkline"},stroke:{control:"color",description:"Stroke color"},fill:{control:"color",description:"Fill color"},curved:{control:"boolean",description:"Use curved lines"},showDots:{control:"boolean",description:"Show dots on data points"}}},i=[5,10,5,20,8,15,12,18,14,22,18,25],r=[10,5,15,8,20,12,25,15,30,18,22,28],g=[5,8,6,10,12,15,14,18,20,22,25,28],Q=[28,25,22,20,18,14,15,12,10,6,8,5],s={args:{data:i,width:120,height:30}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{style:{width:60},children:"Line:"}),e.jsx(t,{data:i,type:"line",width:150,height:40,stroke:"#3b82f6"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{style:{width:60},children:"Area:"}),e.jsx(t,{data:i,type:"area",width:150,height:40,stroke:"#3b82f6",fill:"#3b82f6"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{style:{width:60},children:"Bar:"}),e.jsx(t,{data:i,type:"bar",width:150,height:40,fill:"#3b82f6"})]})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{style:{width:80},children:"Straight:"}),e.jsx(t,{data:r,type:"line",width:150,height:40,stroke:"#8b5cf6",curved:!1})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{style:{width:80},children:"Curved:"}),e.jsx(t,{data:r,type:"line",width:150,height:40,stroke:"#8b5cf6",curved:!0})]})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(t,{data:i,type:"line",width:200,height:50,stroke:"#22c55e",showDots:!0,dotRadius:3}),e.jsx(t,{data:i,type:"area",width:200,height:50,stroke:"#22c55e",fill:"#22c55e",showDots:!0,dotRadius:2,curved:!0})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{style:{width:60},children:"Line:"}),e.jsx(t,{data:r,type:"line",width:200,height:50,stroke:"#64748b",showDots:!0,highlightMinMax:!0,minColor:"#ef4444",maxColor:"#22c55e"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{style:{width:60},children:"Bar:"}),e.jsx(t,{data:r,type:"bar",width:200,height:50,fill:"#64748b",highlightMinMax:!0,minColor:"#ef4444",maxColor:"#22c55e"})]})]})},p={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Average line at 15:"}),e.jsx(t,{data:r,type:"area",width:200,height:60,stroke:"#3b82f6",fill:"#3b82f6",curved:!0,referenceLine:15,referenceLineColor:"#dc2626"})]})})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(t,{data:g,type:"line",width:150,height:40,stroke:"#22c55e",curved:!0}),e.jsx(t,{data:Q,type:"line",width:150,height:40,stroke:"#ef4444",curved:!0}),e.jsx(t,{data:i,type:"line",width:150,height:40,stroke:"#f59e0b",curved:!0}),e.jsx(t,{data:r,type:"line",width:150,height:40,stroke:"#8b5cf6",curved:!0})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{style:{width:100},children:"Default gap:"}),e.jsx(t,{data:i,type:"bar",width:150,height:40,fill:"#3b82f6"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{style:{width:100},children:"No gap:"}),e.jsx(t,{data:i,type:"bar",width:150,height:40,fill:"#3b82f6",barGap:0})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{style:{width:100},children:"Large gap:"}),e.jsx(t,{data:i,type:"bar",width:150,height:40,fill:"#3b82f6",barGap:.5})]})]})},y={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem",width:500},children:[e.jsx(a,{style:{padding:"1rem"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Revenue"}),e.jsx("div",{style:{fontSize:"1.5rem",fontWeight:600},children:"$12,450"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#22c55e"},children:"+12.5%"})]}),e.jsx(t,{data:g,type:"area",width:80,height:40,stroke:"#22c55e",fill:"#22c55e",curved:!0})]})}),e.jsx(a,{style:{padding:"1rem"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Users"}),e.jsx("div",{style:{fontSize:"1.5rem",fontWeight:600},children:"8,234"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#ef4444"},children:"-3.2%"})]}),e.jsx(t,{data:Q,type:"area",width:80,height:40,stroke:"#ef4444",fill:"#ef4444",curved:!0})]})}),e.jsx(a,{style:{padding:"1rem"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Orders"}),e.jsx("div",{style:{fontSize:"1.5rem",fontWeight:600},children:"1,429"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"+0.5%"})]}),e.jsx(t,{data:i,type:"bar",width:80,height:40,fill:"#3b82f6"})]})}),e.jsx(a,{style:{padding:"1rem"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Sessions"}),e.jsx("div",{style:{fontSize:"1.5rem",fontWeight:600},children:"24.5K"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#22c55e"},children:"+8.1%"})]}),e.jsx(t,{data:r,type:"line",width:80,height:40,stroke:"#8b5cf6",curved:!0,showDots:!0,dotRadius:1.5})]})})]})},m={render:()=>e.jsxs("div",{style:{maxWidth:400},children:[e.jsxs("p",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:["Stock price today: $142.50",e.jsx(t,{data:g,type:"line",width:60,height:20,stroke:"#22c55e",curved:!0}),e.jsx("span",{style:{color:"#22c55e",fontSize:"0.875rem"},children:"↑ 2.3%"})]}),e.jsxs("p",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginTop:"0.5rem"},children:["CPU Usage: 45%",e.jsx(t,{data:r,type:"area",width:60,height:20,stroke:"#f59e0b",fill:"#f59e0b"})]}),e.jsxs("p",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginTop:"0.5rem"},children:["Memory: 2.4GB",e.jsx(t,{data:i,type:"bar",width:60,height:20,fill:"#8b5cf6"})]})]})},f={args:{data:[],width:150,height:40}};var x,v,u;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    width: 120,
    height: 30
  }
}`,...(u=(v=s.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var w,j,b;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
        <span style={{
        width: 60
      }}>Line:</span>
        <Sparkline data={sampleData} type="line" width={150} height={40} stroke="#3b82f6" />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
        <span style={{
        width: 60
      }}>Area:</span>
        <Sparkline data={sampleData} type="area" width={150} height={40} stroke="#3b82f6" fill="#3b82f6" />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
        <span style={{
        width: 60
      }}>Bar:</span>
        <Sparkline data={sampleData} type="bar" width={150} height={40} fill="#3b82f6" />
      </div>
    </div>
}`,...(b=(j=l.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var S,k,D;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
        <span style={{
        width: 80
      }}>Straight:</span>
        <Sparkline data={volatileData} type="line" width={150} height={40} stroke="#8b5cf6" curved={false} />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
        <span style={{
        width: 80
      }}>Curved:</span>
        <Sparkline data={volatileData} type="line" width={150} height={40} stroke="#8b5cf6" curved />
      </div>
    </div>
}`,...(D=(k=d.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var C,I,z;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Sparkline data={sampleData} type="line" width={200} height={50} stroke="#22c55e" showDots dotRadius={3} />
      <Sparkline data={sampleData} type="area" width={200} height={50} stroke="#22c55e" fill="#22c55e" showDots dotRadius={2} curved />
    </div>
}`,...(z=(I=n.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var W,L,M;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
        <span style={{
        width: 60
      }}>Line:</span>
        <Sparkline data={volatileData} type="line" width={200} height={50} stroke="#64748b" showDots highlightMinMax minColor="#ef4444" maxColor="#22c55e" />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
        <span style={{
        width: 60
      }}>Bar:</span>
        <Sparkline data={volatileData} type="bar" width={200} height={50} fill="#64748b" highlightMinMax minColor="#ef4444" maxColor="#22c55e" />
      </div>
    </div>
}`,...(M=(L=o.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var T,R,U;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <div>
        <span style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>Average line at 15:</span>
        <Sparkline data={volatileData} type="area" width={200} height={60} stroke="#3b82f6" fill="#3b82f6" curved referenceLine={15} referenceLineColor="#dc2626" />
      </div>
    </div>
}`,...(U=(R=p.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var B,G,A;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Sparkline data={trendingUp} type="line" width={150} height={40} stroke="#22c55e" curved />
      <Sparkline data={trendingDown} type="line" width={150} height={40} stroke="#ef4444" curved />
      <Sparkline data={sampleData} type="line" width={150} height={40} stroke="#f59e0b" curved />
      <Sparkline data={volatileData} type="line" width={150} height={40} stroke="#8b5cf6" curved />
    </div>
}`,...(A=(G=c.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var E,$,H;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
        <span style={{
        width: 100
      }}>Default gap:</span>
        <Sparkline data={sampleData} type="bar" width={150} height={40} fill="#3b82f6" />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
        <span style={{
        width: 100
      }}>No gap:</span>
        <Sparkline data={sampleData} type="bar" width={150} height={40} fill="#3b82f6" barGap={0} />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
        <span style={{
        width: 100
      }}>Large gap:</span>
        <Sparkline data={sampleData} type="bar" width={150} height={40} fill="#3b82f6" barGap={0.5} />
      </div>
    </div>
}`,...(H=($=h.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var K,O,N;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    width: 500
  }}>
      <Card style={{
      padding: '1rem'
    }}>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}>
          <div>
            <div style={{
            fontSize: '0.875rem',
            color: '#64748b'
          }}>Revenue</div>
            <div style={{
            fontSize: '1.5rem',
            fontWeight: 600
          }}>$12,450</div>
            <div style={{
            fontSize: '0.75rem',
            color: '#22c55e'
          }}>+12.5%</div>
          </div>
          <Sparkline data={trendingUp} type="area" width={80} height={40} stroke="#22c55e" fill="#22c55e" curved />
        </div>
      </Card>
      <Card style={{
      padding: '1rem'
    }}>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}>
          <div>
            <div style={{
            fontSize: '0.875rem',
            color: '#64748b'
          }}>Users</div>
            <div style={{
            fontSize: '1.5rem',
            fontWeight: 600
          }}>8,234</div>
            <div style={{
            fontSize: '0.75rem',
            color: '#ef4444'
          }}>-3.2%</div>
          </div>
          <Sparkline data={trendingDown} type="area" width={80} height={40} stroke="#ef4444" fill="#ef4444" curved />
        </div>
      </Card>
      <Card style={{
      padding: '1rem'
    }}>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}>
          <div>
            <div style={{
            fontSize: '0.875rem',
            color: '#64748b'
          }}>Orders</div>
            <div style={{
            fontSize: '1.5rem',
            fontWeight: 600
          }}>1,429</div>
            <div style={{
            fontSize: '0.75rem',
            color: '#64748b'
          }}>+0.5%</div>
          </div>
          <Sparkline data={sampleData} type="bar" width={80} height={40} fill="#3b82f6" />
        </div>
      </Card>
      <Card style={{
      padding: '1rem'
    }}>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}>
          <div>
            <div style={{
            fontSize: '0.875rem',
            color: '#64748b'
          }}>Sessions</div>
            <div style={{
            fontSize: '1.5rem',
            fontWeight: 600
          }}>24.5K</div>
            <div style={{
            fontSize: '0.75rem',
            color: '#22c55e'
          }}>+8.1%</div>
          </div>
          <Sparkline data={volatileData} type="line" width={80} height={40} stroke="#8b5cf6" curved showDots dotRadius={1.5} />
        </div>
      </Card>
    </div>
}`,...(N=(O=y.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var P,V,_;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 400
  }}>
      <p style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
        Stock price today: $142.50
        <Sparkline data={trendingUp} type="line" width={60} height={20} stroke="#22c55e" curved />
        <span style={{
        color: '#22c55e',
        fontSize: '0.875rem'
      }}>↑ 2.3%</span>
      </p>
      <p style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginTop: '0.5rem'
    }}>
        CPU Usage: 45%
        <Sparkline data={volatileData} type="area" width={60} height={20} stroke="#f59e0b" fill="#f59e0b" />
      </p>
      <p style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginTop: '0.5rem'
    }}>
        Memory: 2.4GB
        <Sparkline data={sampleData} type="bar" width={60} height={20} fill="#8b5cf6" />
      </p>
    </div>
}`,...(_=(V=m.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var F,q,J;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data: [],
    width: 150,
    height: 40
  }
}`,...(J=(q=f.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};const ie=["Default","LineTypes","CurvedLine","WithDots","HighlightMinMax","WithReferenceLine","ColorVariations","BarStyles","InDashboardCards","InlineWithText","EmptyData"];export{h as BarStyles,c as ColorVariations,d as CurvedLine,s as Default,f as EmptyData,o as HighlightMinMax,y as InDashboardCards,m as InlineWithText,l as LineTypes,n as WithDots,p as WithReferenceLine,ie as __namedExportsOrder,te as default};
