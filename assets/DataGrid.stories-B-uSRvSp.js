import{ad as I}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./jsx-runtime-DiklIkkE.js";import"./index-DIvcuAjW.js";const O={title:"Data Display/DataGrid",component:I,parameters:{layout:"padded"},tags:["autodocs"]},e=[{key:"id",title:"ID",width:80},{key:"name",title:"Name",width:150},{key:"email",title:"Email",width:200},{key:"role",title:"Role",width:120},{key:"status",title:"Status",width:100}],t=Array.from({length:20}).map((p,a)=>({id:a+1,name:`User ${a+1}`,email:`user${a+1}@example.com`,role:a%3===0?"Admin":a%2===0?"Editor":"Viewer",status:a%4===0?"Inactive":"Active"})),r={args:{columns:e,data:t,style:{height:"400px"}}},s={args:{columns:e,data:t,selectable:!0,style:{height:"400px"}}},n={args:{columns:e.map(p=>({...p,sortable:!0})),data:t,style:{height:"400px"}}},o={args:{columns:e,data:t,striped:!0,style:{height:"400px"}}},i={args:{columns:e,data:t,pagination:{pageSize:5},style:{height:"300px"}}},c={args:{columns:e,data:[],loading:!0,style:{height:"400px"}}},l={args:{columns:e,data:[],emptyText:"No data available",style:{height:"400px"}}};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    style: {
      height: '400px'
    }
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,h,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    selectable: true,
    style: {
      height: '400px'
    }
  }
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,S,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    columns: columns.map(col => ({
      ...col,
      sortable: true
    })),
    data,
    style: {
      height: '400px'
    }
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var D,w,f;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    striped: true,
    style: {
      height: '400px'
    }
  }
}`,...(f=(w=o.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var k,E,v;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    pagination: {
      pageSize: 5
    },
    style: {
      height: '300px'
    }
  }
}`,...(v=(E=i.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var W,A,N;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    columns,
    data: [],
    loading: true,
    style: {
      height: '400px'
    }
  }
}`,...(N=(A=c.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var _,z,G;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    columns,
    data: [],
    emptyText: 'No data available',
    style: {
      height: '400px'
    }
  }
}`,...(G=(z=l.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const R=["Default","WithSelection","Sortable","Striped","WithPagination","Loading","Empty"];export{r as Default,l as Empty,c as Loading,n as Sortable,o as Striped,i as WithPagination,s as WithSelection,R as __namedExportsOrder,O as default};
