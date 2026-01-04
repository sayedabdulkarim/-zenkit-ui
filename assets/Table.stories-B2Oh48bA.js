import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as S}from"./index-DRjF_FHU.js";import{cz as o,cA as i,cB as n,cC as a,cD as t,cE as r}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const Y={title:"Components/Table",component:o,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["default","striped","bordered"]}}},c=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"Editor"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"User"}],b={render:()=>e.jsxs(o,{children:[e.jsx(i,{children:e.jsxs(n,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Email"}),e.jsx(a,{children:"Role"})]})}),e.jsx(t,{children:c.map(l=>e.jsxs(n,{children:[e.jsx(r,{children:l.name}),e.jsx(r,{children:l.email}),e.jsx(r,{children:l.role})]},l.id))})]})},T={render:()=>e.jsxs(o,{variant:"striped",children:[e.jsx(i,{children:e.jsxs(n,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Email"}),e.jsx(a,{children:"Role"})]})}),e.jsx(t,{children:c.map(l=>e.jsxs(n,{children:[e.jsx(r,{children:l.name}),e.jsx(r,{children:l.email}),e.jsx(r,{children:l.role})]},l.id))})]})},m={render:()=>e.jsxs(o,{variant:"bordered",children:[e.jsx(i,{children:e.jsxs(n,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Email"}),e.jsx(a,{children:"Role"})]})}),e.jsx(t,{children:c.map(l=>e.jsxs(n,{children:[e.jsx(r,{children:l.name}),e.jsx(r,{children:l.email}),e.jsx(r,{children:l.role})]},l.id))})]})},h={render:()=>e.jsxs(o,{hoverable:!0,children:[e.jsx(i,{children:e.jsxs(n,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Email"}),e.jsx(a,{children:"Role"})]})}),e.jsx(t,{children:c.map(l=>e.jsxs(n,{children:[e.jsx(r,{children:l.name}),e.jsx(r,{children:l.email}),e.jsx(r,{children:l.role})]},l.id))})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Small"}),e.jsxs(o,{size:"sm",children:[e.jsx(i,{children:e.jsxs(n,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Email"})]})}),e.jsx(t,{children:e.jsxs(n,{children:[e.jsx(r,{children:"John Doe"}),e.jsx(r,{children:"john@example.com"})]})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Large"}),e.jsxs(o,{size:"lg",children:[e.jsx(i,{children:e.jsxs(n,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Email"})]})}),e.jsx(t,{children:e.jsxs(n,{children:[e.jsx(r,{children:"John Doe"}),e.jsx(r,{children:"john@example.com"})]})})]})]})]})},j={render:()=>{const[l,u]=S.useState(null),[d,C]=S.useState(null),H=s=>{l===s?(C(d==="asc"?"desc":d==="desc"?null:"asc"),d==="desc"&&u(null)):(u(s),C("asc"))},I=[...c].sort((s,K)=>{if(!l||!d)return 0;const w=s[l],R=K[l];return d==="asc"?w>R?1:-1:w<R?1:-1});return e.jsxs(o,{children:[e.jsx(i,{children:e.jsxs(n,{children:[e.jsx(a,{sortable:!0,sortDirection:l==="name"?d:null,onSort:()=>H("name"),children:"Name"}),e.jsx(a,{sortable:!0,sortDirection:l==="email"?d:null,onSort:()=>H("email"),children:"Email"}),e.jsx(a,{sortable:!0,sortDirection:l==="role"?d:null,onSort:()=>H("role"),children:"Role"})]})}),e.jsx(t,{children:I.map(s=>e.jsxs(n,{children:[e.jsx(r,{children:s.name}),e.jsx(r,{children:s.email}),e.jsx(r,{children:s.role})]},s.id))})]})}},p={render:()=>e.jsxs(o,{caption:"List of team members",captionSide:"top",children:[e.jsx(i,{children:e.jsxs(n,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Email"}),e.jsx(a,{children:"Role"})]})}),e.jsx(t,{children:c.map(l=>e.jsxs(n,{children:[e.jsx(r,{children:l.name}),e.jsx(r,{children:l.email}),e.jsx(r,{children:l.role})]},l.id))})]})};var D,y,f;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.map(row => <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(f=(y=b.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var B,E,g;T.parameters={...T.parameters,docs:{...(B=T.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Table variant="striped">
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.map(row => <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(g=(E=T.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};var v,N,F;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Table variant="bordered">
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.map(row => <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(F=(N=m.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var k,z,V;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Table hoverable>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.map(row => <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(V=(z=h.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var J,L,A;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div>
        <h4>Small</h4>
        <Table size="sm">
          <TableHead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Email</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div>
        <h4>Large</h4>
        <Table size="lg">
          <TableHead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Email</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
}`,...(A=(L=x.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var U,W,_;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [sortField, setSortField] = useState<string | null>(null);
    const [sortDir, setSortDir] = useState<'asc' | 'desc' | null>(null);
    const handleSort = (field: string) => {
      if (sortField === field) {
        setSortDir(sortDir === 'asc' ? 'desc' : sortDir === 'desc' ? null : 'asc');
        if (sortDir === 'desc') setSortField(null);
      } else {
        setSortField(field);
        setSortDir('asc');
      }
    };
    const sortedData = [...sampleData].sort((a, b) => {
      if (!sortField || !sortDir) return 0;
      const aVal = a[sortField as keyof typeof a];
      const bVal = b[sortField as keyof typeof b];
      if (sortDir === 'asc') return aVal > bVal ? 1 : -1;
      return aVal < bVal ? 1 : -1;
    });
    return <Table>
        <TableHead>
          <TableRow>
            <TableHeader sortable sortDirection={sortField === 'name' ? sortDir : null} onSort={() => handleSort('name')}>
              Name
            </TableHeader>
            <TableHeader sortable sortDirection={sortField === 'email' ? sortDir : null} onSort={() => handleSort('email')}>
              Email
            </TableHeader>
            <TableHeader sortable sortDirection={sortField === 'role' ? sortDir : null} onSort={() => handleSort('role')}>
              Role
            </TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map(row => <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...(_=(W=j.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var O,q,G;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Table caption="List of team members" captionSide="top">
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.map(row => <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(G=(q=p.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const Z=["Default","Striped","Bordered","Hoverable","Sizes","Sortable","WithCaption"];export{m as Bordered,b as Default,h as Hoverable,x as Sizes,j as Sortable,T as Striped,p as WithCaption,Z as __namedExportsOrder,Y as default};
