"use strict";(self.webpackChunkpos=self.webpackChunkpos||[]).push([[195],{2195:(e,s,t)=>{t.r(s),t.d(s,{default:()=>x});var a=t(5043),r=t(3003),o=t(1296),l=t(3216),n=t(184),c=t(4851),i=t(1353),d=t(579);const x=()=>{const e=(0,r.d4)(i.z7),s=(0,r.d4)(c.L1),t=(0,r.wA)(),x=(0,l.Zp)(),g=[];(0,a.useEffect)((()=>{0===e.length&&t((0,i.GX)())}),[]),(0,a.useMemo)((()=>{const t=new Map;s.forEach((e=>{t.set(e.id,e.Category)})),e.forEach((e=>{t.has(e.CategoryId)&&g.push({...e,Category:t.get(e.CategoryId)})}))}),[e,s]);const u=g.map((e=>({id:e.id,Group:e.Group,Category:e.Category,inactive:1===e.inactive?"Yes":"No"}))),h=(0,a.useMemo)((()=>[{Header:"Item Group",accessor:"Group"},{Header:"Category",accessor:"Category"},{Header:"Inactive",accessor:"inactive"},{Header:"Edit",accessor:"id",Cell:e=>{let{row:s}=e;return(0,d.jsx)("button",{onClick:()=>{x("../",{state:{itemgroupId:s.original.id}})},children:(0,d.jsx)(n.uO9,{className:"hover:text-orange-500"})})}}]),[]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"px-7 py-1 overflow-auto flex flex-col   h-[calc(100vh-70px)]",children:[(0,d.jsxs)("div",{className:"inline-flex items-center",children:[(0,d.jsx)("span",{className:" inline-block p-2  text-slate-500 cursor-pointer hover:bg-slate-700 hover:text-slate-300 hover:rounded-lg ",onClick:()=>x("../"),children:(0,d.jsx)(n.Tsg,{})}),(0,d.jsx)("span",{className:" text-slate-300 text-sm",children:"Back"})]}),g.length>0?(0,d.jsx)(o.A,{columns:h,data:u}):(0,d.jsx)("p",{children:"No Item Group Found"})]})})}},1296:(e,s,t)=>{t.d(s,{A:()=>l});t(5043);var a=t(1094),r=t(9804),o=t(579);const l=function(e){let{columns:s,data:t}=e;const{getTableProps:l,getTableBodyProps:n,headerGroups:c,page:i,prepareRow:d,state:{pageIndex:x,globalFilter:g},setGlobalFilter:u,canPreviousPage:h,canNextPage:p,nextPage:m,previousPage:j,pageOptions:b}=(0,a.useTable)({columns:s,data:t,initialState:{pageIndex:0,pageSize:10}},a.useGlobalFilter,a.useSortBy,a.usePagination);return(0,o.jsxs)("div",{className:"table-wrapper",children:[(0,o.jsx)("input",{className:" float-end outline outline-1 text-gray-400 ps-2 outline-orange-500 focus:text-orange-500 ",value:g||"",onChange:e=>u(e.target.value),placeholder:"Search..."}),(0,o.jsxs)("table",{...l(),className:"custom-table",children:[(0,o.jsx)("thead",{children:c.map(((e,s)=>(0,o.jsx)("tr",{...e.getHeaderGroupProps(),children:e.headers.map(((e,s)=>{const{key:t,...a}=e.getHeaderProps(e.getSortByToggleProps());return(0,o.jsxs)("th",{...a,className:"custom-header",children:[e.render("Header"),(0,o.jsx)("span",{children:e.isSorted?e.isSortedDesc?(0,o.jsx)(r.o9,{className:" inline-block text-white ps-2 text-2xl"}):(0,o.jsx)(r.lvq,{className:" inline-block text-white ps-2 text-2xl"}):""})]},s)}))},s)))}),(0,o.jsx)("tbody",{...n(),children:i.map(((e,s)=>(d(e),(0,o.jsx)("tr",{...e.getRowProps(),className:"custom-row",children:e.cells.map((e=>{const{key:s,...t}=e.getCellProps();return(0,o.jsx)("td",{...t,className:"custom-cell",children:e.render("Cell")},s)}))},s))))})]}),(0,o.jsxs)("div",{className:"flex justify-between items-center mt-3",children:[(0,o.jsxs)("div",{className:"flex gap-3",children:[(0,o.jsx)("button",{onClick:()=>j(),disabled:!h,className:" bg-orange-500 w-20 h-8 rounded-md text-white font-semibold hover:bg-orange-400 ",children:"Previous"}),(0,o.jsx)("button",{onClick:()=>m(),disabled:!p,className:" bg-orange-500 w-20 h-8 rounded-md text-white font-semibold hover:bg-orange-400",children:"Next"})]}),(0,o.jsxs)("div",{className:" text-gray-400 text-md font-mono",children:["Page"," ",(0,o.jsxs)("em",{className:"text-orange-500",children:[x+1," of ",b.length]})]})]})]})}}}]);
//# sourceMappingURL=195.71b692c9.chunk.js.map