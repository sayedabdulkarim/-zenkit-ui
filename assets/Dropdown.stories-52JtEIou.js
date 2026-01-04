import{j as e}from"./jsx-runtime-DiklIkkE.js";import{ap as n,aq as r,ar as d,as as o,at as c,au as v}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const y={title:"Components/Dropdown",component:n,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsxs(n,{children:[e.jsx(r,{children:"Open Menu"}),e.jsxs(d,{children:[e.jsx(o,{onSelect:()=>console.log("Edit"),children:"Edit"}),e.jsx(o,{onSelect:()=>console.log("Duplicate"),children:"Duplicate"}),e.jsx(c,{}),e.jsx(o,{onSelect:()=>console.log("Delete"),danger:!0,children:"Delete"})]})]})},t={render:()=>e.jsxs(n,{children:[e.jsx(r,{children:"Actions"}),e.jsxs(d,{children:[e.jsx(v,{children:"User Actions"}),e.jsx(o,{children:"View Profile"}),e.jsx(o,{children:"Settings"}),e.jsx(c,{}),e.jsx(o,{children:"Sign Out"})]})]})},p={render:()=>e.jsxs(n,{children:[e.jsx(r,{children:"File"}),e.jsxs(d,{children:[e.jsx(o,{icon:e.jsx("span",{children:"📄"}),children:"New"}),e.jsx(o,{icon:e.jsx("span",{children:"📂"}),children:"Open"}),e.jsx(o,{icon:e.jsx("span",{children:"💾"}),children:"Save"}),e.jsx(c,{}),e.jsx(o,{icon:e.jsx("span",{children:"🗑️"}),danger:!0,children:"Delete"})]})]})},i={render:()=>e.jsxs(n,{children:[e.jsx(r,{children:"Options"}),e.jsxs(d,{children:[e.jsx(o,{children:"Available"}),e.jsx(o,{disabled:!0,children:"Disabled"}),e.jsx(o,{children:"Another Option"})]})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",padding:"2rem"},children:[e.jsxs(n,{placement:"bottom-start",children:[e.jsx(r,{children:"Bottom Start"}),e.jsxs(d,{children:[e.jsx(o,{children:"Option 1"}),e.jsx(o,{children:"Option 2"})]})]}),e.jsxs(n,{placement:"bottom-end",children:[e.jsx(r,{children:"Bottom End"}),e.jsxs(d,{children:[e.jsx(o,{children:"Option 1"}),e.jsx(o,{children:"Option 2"})]})]})]})};var l,D,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Dropdown>
      <DropdownTrigger>Open Menu</DropdownTrigger>
      <DropdownMenu>
        <DropdownItem onSelect={() => console.log('Edit')}>Edit</DropdownItem>
        <DropdownItem onSelect={() => console.log('Duplicate')}>Duplicate</DropdownItem>
        <DropdownDivider />
        <DropdownItem onSelect={() => console.log('Delete')} danger>Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
}`,...(m=(D=s.parameters)==null?void 0:D.docs)==null?void 0:m.source}}};var w,g,x;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Dropdown>
      <DropdownTrigger>Actions</DropdownTrigger>
      <DropdownMenu>
        <DropdownHeader>User Actions</DropdownHeader>
        <DropdownItem>View Profile</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Sign Out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,j,u;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Dropdown>
      <DropdownTrigger>File</DropdownTrigger>
      <DropdownMenu>
        <DropdownItem icon={<span>📄</span>}>New</DropdownItem>
        <DropdownItem icon={<span>📂</span>}>Open</DropdownItem>
        <DropdownItem icon={<span>💾</span>}>Save</DropdownItem>
        <DropdownDivider />
        <DropdownItem icon={<span>🗑️</span>} danger>Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
}`,...(u=(j=p.parameters)==null?void 0:j.docs)==null?void 0:u.source}}};var I,O,S;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Dropdown>
      <DropdownTrigger>Options</DropdownTrigger>
      <DropdownMenu>
        <DropdownItem>Available</DropdownItem>
        <DropdownItem disabled>Disabled</DropdownItem>
        <DropdownItem>Another Option</DropdownItem>
      </DropdownMenu>
    </Dropdown>
}`,...(S=(O=i.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var M,T,b;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    padding: '2rem'
  }}>
      <Dropdown placement="bottom-start">
        <DropdownTrigger>Bottom Start</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown placement="bottom-end">
        <DropdownTrigger>Bottom End</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
}`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const H=["Default","WithHeader","WithIcons","WithDisabledItems","Placements"];export{s as Default,a as Placements,i as WithDisabledItems,t as WithHeader,p as WithIcons,H as __namedExportsOrder,y as default};
