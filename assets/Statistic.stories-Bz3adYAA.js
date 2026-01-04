import{j as e}from"./jsx-runtime-DiklIkkE.js";import{cs as t,ct as P}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const K={title:"Components/Statistic",component:t,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{title:"Active Users",value:112893}},s={args:{title:"Account Balance",value:112893.64,precision:2}},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"3rem"},children:[e.jsx(t,{title:"Sales",value:1128,prefix:"$"}),e.jsx(t,{title:"Growth",value:93,suffix:"%"}),e.jsx(t,{title:"Likes",value:2048,prefix:e.jsx("span",{children:"👍"})})]})},o={args:{title:"Revenue",value:5e4,prefix:"$",valueStyle:{color:"#3f8600",fontWeight:"bold"}}},n={args:{title:"Loading Data",value:0,loading:!0}},l={render:()=>e.jsxs(P,{children:[e.jsx(t,{title:"Users",value:1234}),e.jsx(t,{title:"Orders",value:567}),e.jsx(t,{title:"Revenue",value:89012,prefix:"$"})]})},u={render:()=>e.jsx("div",{style:{padding:"1.5rem",border:"1px solid #e8e8e8",borderRadius:"8px"},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"1rem"},children:[e.jsx(t,{title:"Total Users",value:24890}),e.jsx(t,{title:"Active Now",value:342,valueStyle:{color:"#52c41a"}}),e.jsx(t,{title:"Revenue",value:52430,prefix:"$",precision:0}),e.jsx(t,{title:"Growth",value:12.5,suffix:"%",valueStyle:{color:"#cf1322"}})]})})},c={args:{title:"Large Number",value:1234567890,formatter:d=>{const r=Number(d);return r>=1e9?`${(r/1e9).toFixed(1)}B`:r>=1e6?`${(r/1e6).toFixed(1)}M`:r>=1e3?`${(r/1e3).toFixed(1)}K`:String(d)}}};var p,m,v;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Active Users',
    value: 112893
  }
}`,...(v=(m=a.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var x,f,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Account Balance',
    value: 112893.64,
    precision: 2
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var S,y,h;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '3rem'
  }}>
      <Statistic title="Sales" value={1128} prefix="$" />
      <Statistic title="Growth" value={93} suffix="%" />
      <Statistic title="Likes" value={2048} prefix={<span>👍</span>} />
    </div>
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var j,$,b;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Revenue',
    value: 50000,
    prefix: '$',
    valueStyle: {
      color: '#3f8600',
      fontWeight: 'bold'
    }
  }
}`,...(b=($=o.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};var G,R,F;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'Loading Data',
    value: 0,
    loading: true
  }
}`,...(F=(R=n.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var L,C,w;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <StatisticGroup>
      <Statistic title="Users" value={1234} />
      <Statistic title="Orders" value={567} />
      <Statistic title="Revenue" value={89012} prefix="$" />
    </StatisticGroup>
}`,...(w=(C=l.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var A,D,N;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '1.5rem',
    border: '1px solid #e8e8e8',
    borderRadius: '8px'
  }}>
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1rem'
    }}>
        <Statistic title="Total Users" value={24890} />
        <Statistic title="Active Now" value={342} valueStyle={{
        color: '#52c41a'
      }} />
        <Statistic title="Revenue" value={52430} prefix="$" precision={0} />
        <Statistic title="Growth" value={12.5} suffix="%" valueStyle={{
        color: '#cf1322'
      }} />
      </div>
    </div>
}`,...(N=(D=u.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var U,W,B;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: 'Large Number',
    value: 1234567890,
    formatter: val => {
      const num = Number(val);
      if (num >= 1e9) return \`\${(num / 1e9).toFixed(1)}B\`;
      if (num >= 1e6) return \`\${(num / 1e6).toFixed(1)}M\`;
      if (num >= 1e3) return \`\${(num / 1e3).toFixed(1)}K\`;
      return String(val);
    }
  }
}`,...(B=(W=c.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const M=["Default","WithPrecision","WithPrefixSuffix","CustomStyle","Loading","Group","Dashboard","CustomFormatter"];export{c as CustomFormatter,o as CustomStyle,u as Dashboard,a as Default,l as Group,n as Loading,s as WithPrecision,i as WithPrefixSuffix,M as __namedExportsOrder,K as default};
