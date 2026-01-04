import{j as e}from"./jsx-runtime-DiklIkkE.js";import{T as u}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const K={title:"Components/Chart",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["bar","line","pie","donut"]}}},a=[{label:"Jan",value:45},{label:"Feb",value:52},{label:"Mar",value:38},{label:"Apr",value:65},{label:"May",value:78},{label:"Jun",value:56}],r={args:{type:"bar",data:a,height:300,width:500,showLabels:!0}},t={args:{type:"line",data:a,height:300,width:500}},s={args:{type:"pie",data:[{label:"Desktop",value:45},{label:"Mobile",value:35},{label:"Tablet",value:20}],height:300,width:300,showLegend:!0}},n={args:{type:"donut",data:[{label:"React",value:40},{label:"Vue",value:30},{label:"Angular",value:20},{label:"Other",value:10}],height:300,width:300}},o={args:{type:"bar",data:a,height:300,width:500,colors:["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#ffeaa7","#dfe6e9"]}},l={args:{type:"bar",data:a,height:300,width:500,showValues:!0,showLabels:!0}},d={args:{type:"bar",data:a,height:300,width:500,showGrid:!0}},i={args:{type:"bar",data:[],height:300,width:500,loading:!0}},h={args:{type:"bar",data:[],height:300,width:500,emptyMessage:"No data to display"}},c={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Revenue"}),e.jsx(u,{type:"bar",data:a,height:200,width:300})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Traffic Sources"}),e.jsx(u,{type:"donut",data:[{label:"Organic",value:45},{label:"Direct",value:30},{label:"Referral",value:25}],height:200,width:200})]})]})};var p,g,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    data: salesData,
    height: 300,
    width: 500,
    showLabels: true
  }
}`,...(m=(g=r.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var b,v,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'line',
    data: salesData,
    height: 300,
    width: 500
  }
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var w,f,C;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    type: 'pie',
    data: [{
      label: 'Desktop',
      value: 45
    }, {
      label: 'Mobile',
      value: 35
    }, {
      label: 'Tablet',
      value: 20
    }],
    height: 300,
    width: 300,
    showLegend: true
  }
}`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var D,S,x;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: 'donut',
    data: [{
      label: 'React',
      value: 40
    }, {
      label: 'Vue',
      value: 30
    }, {
      label: 'Angular',
      value: 20
    }, {
      label: 'Other',
      value: 10
    }],
    height: 300,
    width: 300
  }
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var L,j,T;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    data: salesData,
    height: 300,
    width: 500,
    colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dfe6e9']
  }
}`,...(T=(j=o.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var R,M,V;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    data: salesData,
    height: 300,
    width: 500,
    showValues: true,
    showLabels: true
  }
}`,...(V=(M=l.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var W,O,E;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    data: salesData,
    height: 300,
    width: 500,
    showGrid: true
  }
}`,...(E=(O=d.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var G,A,k;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    data: [],
    height: 300,
    width: 500,
    loading: true
  }
}`,...(k=(A=i.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var B,J,N;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    data: [],
    height: 300,
    width: 500,
    emptyMessage: 'No data to display'
  }
}`,...(N=(J=h.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};var P,_,F;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem'
  }}>
      <div>
        <h3>Revenue</h3>
        <Chart type="bar" data={salesData} height={200} width={300} />
      </div>
      <div>
        <h3>Traffic Sources</h3>
        <Chart type="donut" data={[{
        label: 'Organic',
        value: 45
      }, {
        label: 'Direct',
        value: 30
      }, {
        label: 'Referral',
        value: 25
      }]} height={200} width={200} />
      </div>
    </div>
}`,...(F=(_=c.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};const Q=["BarChart","LineChart","PieChart","DonutChart","WithCustomColors","WithValues","WithGrid","Loading","Empty","Dashboard"];export{r as BarChart,c as Dashboard,n as DonutChart,h as Empty,t as LineChart,i as Loading,s as PieChart,o as WithCustomColors,d as WithGrid,l as WithValues,Q as __namedExportsOrder,K as default};
