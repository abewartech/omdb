import{u as d,j as t,a as e,H as u}from"./app-d782202e.js";import{G as c}from"./GuestLayout-b62180e2.js";import{T as p,I as w}from"./TextInput-484499e3.js";import{P as f}from"./PrimaryButton-87d86c02.js";import"./ApplicationLogo-fe5c3822.js";function v({status:s}){const{data:o,setData:r,post:m,processing:l,errors:i}=d({email:""}),n=a=>{r(a.target.name,a.target.value)};return t(c,{children:[e(u,{title:"Forgot Password"}),e("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),s&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:s}),t("form",{onSubmit:a=>{a.preventDefault(),m(route("password.email"))},children:[e(p,{id:"password",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",isFocused:!0,handleChange:n}),e(w,{message:i.email,className:"mt-2"}),e("div",{className:"flex items-center justify-end mt-4",children:e(f,{className:"ml-4",processing:l,children:"Email Password Reset Link"})})]})]})}export{v as default};
