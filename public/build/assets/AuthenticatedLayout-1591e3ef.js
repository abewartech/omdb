import{r as s,a as e,j as o,F as x,L as d}from"./app-d782202e.js";import{A as b}from"./ApplicationLogo-fe5c3822.js";import{J as v}from"./transition-7962fc4c.js";const f=s.createContext(),c=({children:r})=>{const[t,n]=s.useState(!1),i=()=>{n(a=>!a)};return e(f.Provider,{value:{open:t,setOpen:n,toggleOpen:i},children:e("div",{className:"relative",children:r})})},y=({children:r})=>{const{open:t,setOpen:n,toggleOpen:i}=s.useContext(f);return o(x,{children:[e("div",{onClick:i,children:r}),t&&e("div",{className:"fixed inset-0 z-40",onClick:()=>n(!1)})]})},N=({align:r="right",width:t="48",contentClasses:n="py-1 bg-white",children:i})=>{const{open:a,setOpen:u}=s.useContext(f);let m="origin-top";r==="left"?m="origin-top-left left-0":r==="right"&&(m="origin-top-right right-0");let p="";return t==="48"&&(p="w-48"),e(x,{children:e(v,{as:s.Fragment,show:a,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${m} ${p}`,onClick:()=>u(!1),children:e("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+n,children:i})})})})},w=({href:r,method:t,as:n,children:i})=>e(d,{href:r,method:t,as:n,className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",children:i});c.Trigger=y;c.Content=N;c.Link=w;const l=c;function h({href:r,active:t,children:n}){return e(d,{href:r,className:t?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out",children:n})}function g({method:r="get",as:t="a",href:n,active:i=!1,children:a}){return e(d,{method:r,as:t,href:n,className:`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${i?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out`,children:a})}function D({auth:r,header:t,children:n}){const[i,a]=s.useState(!1);return o("div",{className:"min-h-screen bg-gray-100",children:[o("nav",{className:"bg-white border-b border-gray-100",children:[e("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o("div",{className:"flex justify-between h-16",children:[o("div",{className:"flex",children:[e("div",{className:"shrink-0 flex items-center",children:e(d,{href:"/",children:e(b,{className:"block h-9 w-auto fill-current text-gray-800"})})}),o("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",children:[e(h,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"}),e(h,{href:route("produk"),active:route().current("produk"),children:"Produk"}),e(h,{href:route("kategori"),active:route().current("kategori"),children:"Kategori"})]})]}),e("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:e("div",{className:"ml-3 relative",children:o(l,{children:[e(l.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:o("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[r.user.name,e("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),o(l.Content,{children:[e(l.Link,{href:route("profile.edit"),children:"Profile"}),e(l.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),e("div",{className:"-mr-2 flex items-center sm:hidden",children:e("button",{onClick:()=>a(u=>!u),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:o("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e("path",{className:i?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e("path",{className:i?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),o("div",{className:(i?"block":"hidden")+" sm:hidden",children:[e("div",{className:"pt-2 pb-3 space-y-1",children:e(g,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})}),o("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[o("div",{className:"px-4",children:[e("div",{className:"font-medium text-base text-gray-800",children:r.user.name}),e("div",{className:"font-medium text-sm text-gray-500",children:r.user.email})]}),o("div",{className:"mt-3 space-y-1",children:[e(g,{href:route("profile.edit"),children:"Profile"}),e(g,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),t&&e("header",{className:"bg-white shadow",children:e("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:t})}),e("main",{children:n})]})}export{D as A};
