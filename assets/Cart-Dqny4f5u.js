import{d as c,u as i,r,j as e,e as n,L as l}from"./index-BIeo-L0G.js";import{c as o}from"./index-Bl828_7u.js";import"./iconBase-BlC_lJom.js";function p(){const a=c(),t=i(s=>s.cart);return r.useEffect(()=>{console.log(t),console.log(t.finalPrice)},[]),e.jsxs("div",{className:"w-[97%] m-auto mt-6 min-h-[100vh]",children:[e.jsx("h1",{className:"mb-7 text-center m-auto pb-2 capitalize text-4xl border-transparent border-2 border-b-cyan-600 w-96",children:"my cart"}),e.jsx("ul",{className:"",children:t.product.map(s=>e.jsxs("li",{className:"flex justify-center items-center lg:flex-row flex-col ",children:[e.jsx("span",{className:"lg:w-[50%] w-full h-fit",children:e.jsx("img",{src:s.image,title:s.title,className:"lg:w-[50%] w-full m-auto hover:scale-95 duration-150 transition-all"})}),e.jsxs("span",{className:"lg:w-[50%] w-full",children:[e.jsx("p",{className:"text-xl font-bold capitalize",children:s.title}),e.jsx("hr",{className:"text-gray-200 my-2"}),e.jsxs("span",{className:"flex justify-between items-center mb-2",children:[e.jsx("p",{className:"text-xl font-bold capitalize",children:"price"}),e.jsxs("p",{className:"text-xl capitalize",children:[s.price,"$"]})]}),e.jsxs("button",{onClick:()=>a(n(s)),className:"bg-red-500 flex gap-1 hover:bg-red-600 transition-all duration-200 text-white p-2  rounded-md hover:cursor-pointer",children:[e.jsx(o,{size:25}),"delete"]})]})]},s.id))}),t.product.length==0?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex gap-2 capitalize flex-col justify-center items-center w-full h-screen",children:["empty list ...",e.jsx(l,{to:"/ecommerce-app/",children:e.jsx("button",{className:"cursor-pointer bg-cyan-600  m-auto text-white p-2 rounded-md capitalize",children:"go back shopping"})})]})}):e.jsxs("div",{className:"w-full gap-3 flex flex-col items-center justify-center  p-5 rounded-md",children:[e.jsxs("span",{className:"flex items-center text-xl gap-3",children:[e.jsx("p",{className:" capitalize font-bold ",children:"total amount"}),e.jsx("p",{children:t.totalAmount})]}),e.jsxs("span",{className:"flex items-center text-xl gap-3",children:[e.jsx("p",{className:" capitalize font-bold ",children:"final price"}),e.jsxs("p",{children:[t.finalPrice,"$"]})]}),e.jsxs("span",{className:"flex flex-col justify-center items-center gap-3",children:[e.jsx("button",{className:"bg-green-400 w-full  text-white p-2 rounded-md capitalize",children:"proceed to pay"}),e.jsx(l,{to:"/",children:e.jsx("button",{className:" bg-cyan-600 w-full  text-white p-2 rounded-md capitalize",children:"continue shopping"})})]})]})]})}export{p as default};
