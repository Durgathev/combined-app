"use strict";(self.webpackChunkpos=self.webpackChunkpos||[]).push([[671],{2671:(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});var a=t(5043),r=t(3003),l=t(1296),o=t(3216),n=t(184),c=t(9428),i=t(1353),d=t(579);const p=()=>{const e=(0,r.d4)(i.z7),s=(0,r.d4)(c.ld),t=(0,o.Zp)(),p=[];(0,a.useMemo)((()=>{const t=new Map;e.forEach((e=>{t.set(e.id,e.Group)})),s.forEach((e=>{t.has(e.gpid)&&p.push({...e,Group:t.get(e.gpid)})}))}),[e,s]);const x=p.map((e=>({id:e.id,Group:e.Group,item:e.item,price:e.price,inactive:1===e.inactive?"Yes":"No"}))),u=(0,a.useMemo)((()=>[{Header:"Item",accessor:"item"},{Header:"Item Group",accessor:"Group"},{Header:"Price",accessor:"price"},{Header:"Inactive",accessor:"inactive"},{Header:"Edit",accessor:"id",Cell:e=>{let{row:s}=e;return(0,d.jsx)("button",{onClick:()=>{t("../",{state:{itemid:s.original.id}})},children:(0,d.jsx)(n.uO9,{className:"hover:text-orange-500"})})}}]),[]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"px-7 py-1 overflow-auto flex flex-col   h-[calc(100vh-70px)]",children:[(0,d.jsxs)("div",{className:"inline-flex items-center",children:[(0,d.jsx)("span",{className:" inline-block p-2  text-slate-500 cursor-pointer hover:bg-slate-700 hover:text-slate-300 hover:rounded-lg ",onClick:()=>t("../"),children:(0,d.jsx)(n.Tsg,{})}),(0,d.jsx)("span",{className:" text-slate-300 text-sm",children:"Back"})]}),p.length>0?(0,d.jsx)(l.A,{columns:u,data:x}):(0,d.jsx)("p",{children:"No Items Found"})]})})}},1296:(e,s,t)=>{t.d(s,{A:()=>o});t(5043);var a=t(1094),r=t(9804),l=t(579);const o=function(e){let{columns:s,data:t}=e;const{getTableProps:o,getTableBodyProps:n,headerGroups:c,page:i,prepareRow:d,state:{pageIndex:p,globalFilter:x},setGlobalFilter:u,canPreviousPage:h,canNextPage:m,nextPage:g,previousPage:j,pageOptions:b}=(0,a.useTable)({columns:s,data:t,initialState:{pageIndex:0,pageSize:10}},a.useGlobalFilter,a.useSortBy,a.usePagination);return(0,l.jsxs)("div",{className:"table-wrapper",children:[(0,l.jsx)("input",{className:" float-end outline outline-1 text-gray-400 ps-2 outline-orange-500 focus:text-orange-500 ",value:x||"",onChange:e=>u(e.target.value),placeholder:"Search..."}),(0,l.jsxs)("table",{...o(),className:"custom-table",children:[(0,l.jsx)("thead",{children:c.map(((e,s)=>(0,l.jsx)("tr",{...e.getHeaderGroupProps(),children:e.headers.map(((e,s)=>{const{key:t,...a}=e.getHeaderProps(e.getSortByToggleProps());return(0,l.jsxs)("th",{...a,className:"custom-header",children:[e.render("Header"),(0,l.jsx)("span",{children:e.isSorted?e.isSortedDesc?(0,l.jsx)(r.o9,{className:" inline-block text-white ps-2 text-2xl"}):(0,l.jsx)(r.lvq,{className:" inline-block text-white ps-2 text-2xl"}):""})]},s)}))},s)))}),(0,l.jsx)("tbody",{...n(),children:i.map(((e,s)=>(d(e),(0,l.jsx)("tr",{...e.getRowProps(),className:"custom-row",children:e.cells.map((e=>{const{key:s,...t}=e.getCellProps();return(0,l.jsx)("td",{...t,className:"custom-cell",children:e.render("Cell")},s)}))},s))))})]}),(0,l.jsxs)("div",{className:"flex justify-between items-center mt-3",children:[(0,l.jsxs)("div",{className:"flex gap-3",children:[(0,l.jsx)("button",{onClick:()=>j(),disabled:!h,className:" bg-orange-500 w-20 h-8 rounded-md text-white font-semibold hover:bg-orange-400 ",children:"Previous"}),(0,l.jsx)("button",{onClick:()=>g(),disabled:!m,className:" bg-orange-500 w-20 h-8 rounded-md text-white font-semibold hover:bg-orange-400",children:"Next"})]}),(0,l.jsxs)("div",{className:" text-gray-400 text-md font-mono",children:["Page"," ",(0,l.jsxs)("em",{className:"text-orange-500",children:[p+1," of ",b.length]})]})]})]})}}}]);
//# sourceMappingURL=671.d9fa946d.chunk.js.map