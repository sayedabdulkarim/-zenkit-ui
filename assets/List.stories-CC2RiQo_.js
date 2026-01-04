import{j as e}from"./jsx-runtime-DiklIkkE.js";import{b0 as i,b1 as t,b2 as L,u as h}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const G={title:"Components/List",component:i,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},I=[{title:"Ant Design Title 1",description:"Ant Design, a design language for background applications"},{title:"Ant Design Title 2",description:"Ant Design, a design language for background applications"},{title:"Ant Design Title 3",description:"Ant Design, a design language for background applications"},{title:"Ant Design Title 4",description:"Ant Design, a design language for background applications"}],a={render:()=>e.jsx(i,{children:I.map((r,s)=>e.jsx(t,{children:e.jsx(L,{title:r.title,description:r.description})},s))})},n={render:()=>e.jsx(i,{children:I.map((r,s)=>e.jsx(t,{children:e.jsx(L,{avatar:e.jsx(h,{src:`https://i.pravatar.cc/150?img=${s+1}`}),title:r.title,description:r.description})},s))})},d={render:()=>e.jsxs(i,{bordered:!0,header:"Header",footer:"Footer",children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"}),e.jsx(t,{children:"Item 4"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs(i,{size:"sm",bordered:!0,header:"Small",children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"})]}),e.jsxs(i,{size:"md",bordered:!0,header:"Medium",children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"})]}),e.jsxs(i,{size:"lg",bordered:!0,header:"Large",children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"})]})]})},c={render:()=>e.jsx(i,{children:I.map((r,s)=>e.jsx(t,{actions:[e.jsx("a",{href:"#",children:"Edit"},"edit"),e.jsx("a",{href:"#",children:"More"},"more")],children:e.jsx(L,{avatar:e.jsx(h,{src:`https://i.pravatar.cc/150?img=${s+1}`}),title:r.title,description:r.description})},s))})},m={render:()=>e.jsx(i,{children:I.slice(0,2).map((r,s)=>e.jsxs(t,{extra:e.jsx("img",{width:"200",alt:"logo",src:`https://picsum.photos/200/100?random=${s}`}),children:[e.jsx(L,{avatar:e.jsx(h,{src:`https://i.pravatar.cc/150?img=${s+1}`}),title:r.title,description:r.description}),e.jsx("div",{children:"Additional content can go here..."})]},s))})},p={render:()=>e.jsx(i,{bordered:!0,emptyText:"No items to display"})},l={render:()=>e.jsxs(i,{bordered:!0,loading:!0,children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"})]})};var x,g,u;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <List>
      {data.map((item, index) => <ListItem key={index}>
          <ListItemMeta title={item.title} description={item.description} />
        </ListItem>)}
    </List>
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var j,v,b;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <List>
      {data.map((item, index) => <ListItem key={index}>
          <ListItemMeta avatar={<Avatar src={\`https://i.pravatar.cc/150?img=\${index + 1}\`} />} title={item.title} description={item.description} />
        </ListItem>)}
    </List>
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,y,A;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <List bordered header="Header" footer="Footer">
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
      <ListItem>Item 4</ListItem>
    </List>
}`,...(A=(y=d.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var D,S,k;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <List size="sm" bordered header="Small">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>
      <List size="md" bordered header="Medium">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>
      <List size="lg" bordered header="Large">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>
    </div>
}`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var z,M,E;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <List>
      {data.map((item, index) => <ListItem key={index} actions={[<a key="edit" href="#">Edit</a>, <a key="more" href="#">More</a>]}>
          <ListItemMeta avatar={<Avatar src={\`https://i.pravatar.cc/150?img=\${index + 1}\`} />} title={item.title} description={item.description} />
        </ListItem>)}
    </List>
}`,...(E=(M=c.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var $,T,W;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <List>
      {data.slice(0, 2).map((item, index) => <ListItem key={index} extra={<img width="200" alt="logo" src={\`https://picsum.photos/200/100?random=\${index}\`} />}>
          <ListItemMeta avatar={<Avatar src={\`https://i.pravatar.cc/150?img=\${index + 1}\`} />} title={item.title} description={item.description} />
          <div>Additional content can go here...</div>
        </ListItem>)}
    </List>
}`,...(W=(T=m.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var w,B,F;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <List bordered emptyText="No items to display" />
}`,...(F=(B=p.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var H,N,_;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <List bordered loading>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
    </List>
}`,...(_=(N=l.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const J=["Default","WithAvatar","Bordered","Sizes","WithActions","WithExtra","Empty","Loading"];export{d as Bordered,a as Default,p as Empty,l as Loading,o as Sizes,c as WithActions,n as WithAvatar,m as WithExtra,J as __namedExportsOrder,G as default};
