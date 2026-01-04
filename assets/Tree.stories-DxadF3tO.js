import{j as w}from"./jsx-runtime-DiklIkkE.js";import{r as I}from"./index-DRjF_FHU.js";import{d2 as d}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const W={title:"Data Display/Tree",component:d,parameters:{layout:"centered"},tags:["autodocs"]},e=[{key:"src",title:"src",children:[{key:"components",title:"components",children:[{key:"Button.tsx",title:"Button.tsx"},{key:"Input.tsx",title:"Input.tsx"},{key:"Modal.tsx",title:"Modal.tsx"}]},{key:"hooks",title:"hooks",children:[{key:"useToggle.ts",title:"useToggle.ts"},{key:"useDebounce.ts",title:"useDebounce.ts"}]},{key:"index.ts",title:"index.ts"}]},{key:"package.json",title:"package.json"},{key:"tsconfig.json",title:"tsconfig.json"}],t={args:{treeData:e,defaultExpandAll:!0}},r={render:()=>{const[c,l]=I.useState([]);return w.jsx(d,{treeData:e,checkable:!0,checkedKeys:c,onCheck:l,defaultExpandAll:!0})}},s={render:()=>{const[c,l]=I.useState([]);return w.jsx(d,{treeData:e,selectedKeys:c,onSelect:l,defaultExpandAll:!0})}},a={args:{treeData:e,showIcon:!0,defaultExpandAll:!0}},n={args:{treeData:e,draggable:!0,defaultExpandAll:!0}},o={args:{treeData:e,showLine:!0,defaultExpandAll:!0}};var u,p,i;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    treeData,
    defaultExpandAll: true
  }
}`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,g,k;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [checkedKeys, setCheckedKeys] = useState<string[]>([]);
    return <Tree treeData={treeData} checkable checkedKeys={checkedKeys} onCheck={setCheckedKeys} defaultExpandAll />;
  }
}`,...(k=(g=r.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var x,y,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    return <Tree treeData={treeData} selectedKeys={selectedKeys} onSelect={setSelectedKeys} defaultExpandAll />;
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var f,S,D;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    treeData,
    showIcon: true,
    defaultExpandAll: true
  }
}`,...(D=(S=a.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var E,K,b;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    treeData,
    draggable: true,
    defaultExpandAll: true
  }
}`,...(b=(K=n.parameters)==null?void 0:K.docs)==null?void 0:b.source}}};var A,j,C;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    treeData,
    showLine: true,
    defaultExpandAll: true
  }
}`,...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const _=["Default","Checkable","Selectable","WithIcons","Draggable","ShowLines"];export{r as Checkable,t as Default,n as Draggable,s as Selectable,o as ShowLines,a as WithIcons,_ as __namedExportsOrder,W as default};
