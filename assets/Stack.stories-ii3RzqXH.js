import{j as e}from"./jsx-runtime-DiklIkkE.js";import{cp as m,cq as v,cr as a}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const L={title:"Layout/Stack",component:m,parameters:{layout:"padded"},tags:["autodocs"]},r=({children:i})=>e.jsx("div",{style:{padding:"1rem",background:"#e3e3e3",borderRadius:"4px"},children:i}),t={render:()=>e.jsxs(m,{direction:"horizontal",gap:"md",children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},s={render:()=>e.jsxs(m,{direction:"vertical",gap:"md",children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},c={render:()=>e.jsxs(v,{gap:"md",children:[e.jsx(r,{children:"VStack Item 1"}),e.jsx(r,{children:"VStack Item 2"}),e.jsx(r,{children:"VStack Item 3"})]})},o={render:()=>e.jsxs(a,{gap:"md",children:[e.jsx(r,{children:"HStack Item 1"}),e.jsx(r,{children:"HStack Item 2"}),e.jsx(r,{children:"HStack Item 3"})]})},n={render:()=>e.jsxs(v,{gap:"lg",children:[e.jsxs(a,{gap:"xs",children:[e.jsx(r,{children:"xs"}),e.jsx(r,{children:"gap"})]}),e.jsxs(a,{gap:"sm",children:[e.jsx(r,{children:"sm"}),e.jsx(r,{children:"gap"})]}),e.jsxs(a,{gap:"md",children:[e.jsx(r,{children:"md"}),e.jsx(r,{children:"gap"})]}),e.jsxs(a,{gap:"lg",children:[e.jsx(r,{children:"lg"}),e.jsx(r,{children:"gap"})]}),e.jsxs(a,{gap:"xl",children:[e.jsx(r,{children:"xl"}),e.jsx(r,{children:"gap"})]})]})},d={render:()=>e.jsxs(a,{gap:"md",align:"center",justify:"space-between",style:{width:"100%"},children:[e.jsx(r,{children:"Start"}),e.jsx(r,{children:"Middle"}),e.jsx(r,{children:"End"})]})},x={render:()=>e.jsx(a,{gap:"md",wrap:!0,style:{maxWidth:"300px"},children:Array.from({length:10}).map((i,p)=>e.jsxs(r,{children:["Item ",p+1]},p))})};var l,g,B;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" gap="md">
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Stack>
}`,...(B=(g=t.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var S,h,k;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Stack direction="vertical" gap="md">
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Stack>
}`,...(k=(h=s.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var j,u,H;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <VStack gap="md">
      <Box>VStack Item 1</Box>
      <Box>VStack Item 2</Box>
      <Box>VStack Item 3</Box>
    </VStack>
}`,...(H=(u=c.parameters)==null?void 0:u.docs)==null?void 0:H.source}}};var I,V,y;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <HStack gap="md">
      <Box>HStack Item 1</Box>
      <Box>HStack Item 2</Box>
      <Box>HStack Item 3</Box>
    </HStack>
}`,...(y=(V=o.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};var f,w,W;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <VStack gap="lg">
      <HStack gap="xs"><Box>xs</Box><Box>gap</Box></HStack>
      <HStack gap="sm"><Box>sm</Box><Box>gap</Box></HStack>
      <HStack gap="md"><Box>md</Box><Box>gap</Box></HStack>
      <HStack gap="lg"><Box>lg</Box><Box>gap</Box></HStack>
      <HStack gap="xl"><Box>xl</Box><Box>gap</Box></HStack>
    </VStack>
}`,...(W=(w=n.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var b,z,A;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <HStack gap="md" align="center" justify="space-between" style={{
    width: '100%'
  }}>
      <Box>Start</Box>
      <Box>Middle</Box>
      <Box>End</Box>
    </HStack>
}`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var C,E,_;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <HStack gap="md" wrap style={{
    maxWidth: '300px'
  }}>
      {Array.from({
      length: 10
    }).map((_, i) => <Box key={i}>Item {i + 1}</Box>)}
    </HStack>
}`,...(_=(E=x.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};const O=["Horizontal","Vertical","VStackComponent","HStackComponent","Gaps","WithAlignment","Wrap"];export{n as Gaps,o as HStackComponent,t as Horizontal,c as VStackComponent,s as Vertical,d as WithAlignment,x as Wrap,O as __namedExportsOrder,L as default};
