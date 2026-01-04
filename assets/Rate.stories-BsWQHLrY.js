import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as J}from"./index-DRjF_FHU.js";import{bP as a}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const U={title:"Components/Rate",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},r={args:{defaultValue:3}},s={render:()=>{const[m,I]=J.useState(2.5);return e.jsxs("div",{children:[e.jsx(a,{value:m,onChange:I,allowHalf:!0}),e.jsxs("p",{style:{marginTop:"0.5rem"},children:["Rating: ",m]})]})}},t={args:{defaultValue:2.5,allowHalf:!0}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(a,{size:"sm",defaultValue:3}),e.jsx(a,{size:"md",defaultValue:3}),e.jsx(a,{size:"lg",defaultValue:3})]})},l={args:{value:4,readOnly:!0}},n={args:{value:3,disabled:!0}},u={args:{count:10,defaultValue:7}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(a,{defaultValue:3,character:"❤️"}),e.jsx(a,{defaultValue:3,character:"👍"}),e.jsx(a,{defaultValue:3,character:"A"})]})},d={args:{defaultValue:3,tooltips:["Terrible","Bad","Normal","Good","Excellent"]}},i={args:{defaultValue:3,allowClear:!1}};var p,f,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    defaultValue: 3
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var x,V,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(2.5);
    return <div>
        <Rate value={value} onChange={setValue} allowHalf />
        <p style={{
        marginTop: '0.5rem'
      }}>Rating: {value}</p>
      </div>;
  }
}`,...(v=(V=s.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var C,h,y;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    defaultValue: 2.5,
    allowHalf: true
  }
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var S,R,j;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Rate size="sm" defaultValue={3} />
      <Rate size="md" defaultValue={3} />
      <Rate size="lg" defaultValue={3} />
    </div>
}`,...(j=(R=o.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var z,D,b;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    value: 4,
    readOnly: true
  }
}`,...(b=(D=l.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var T,w,H;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: 3,
    disabled: true
  }
}`,...(H=(w=n.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var E,O,N;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    count: 10,
    defaultValue: 7
  }
}`,...(N=(O=u.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var A,B,G;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Rate defaultValue={3} character="❤️" />
      <Rate defaultValue={3} character="👍" />
      <Rate defaultValue={3} character="A" />
    </div>
}`,...(G=(B=c.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var W,_,P;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    defaultValue: 3,
    tooltips: ['Terrible', 'Bad', 'Normal', 'Good', 'Excellent']
  }
}`,...(P=(_=d.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var k,q,F;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    defaultValue: 3,
    allowClear: false
  }
}`,...(F=(q=i.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};const X=["Default","Controlled","HalfStars","Sizes","ReadOnly","Disabled","CustomCount","CustomCharacter","WithTooltips","NoClear"];export{s as Controlled,c as CustomCharacter,u as CustomCount,r as Default,n as Disabled,t as HalfStars,i as NoClear,l as ReadOnly,o as Sizes,d as WithTooltips,X as __namedExportsOrder,U as default};
