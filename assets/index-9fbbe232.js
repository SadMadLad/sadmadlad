import{r as l,a as R,L as I,u as A,b as N,c as B,d as h,B as M,R as L}from"./react-e182c055.js";import{u as O,m as c,A as m,a as D,b as F,R as U,r as q,c as H}from"./fancy-b3ef572f.js";import{S as k,_ as V}from"./syntax-930cf2fd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();var C={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $=l,W=Symbol.for("react.element"),G=Symbol.for("react.fragment"),J=Object.prototype.hasOwnProperty,X=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y={key:!0,ref:!0,__self:!0,__source:!0};function E(s,t,a){var o,n={},i=null,r=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(r=t.ref);for(o in t)J.call(t,o)&&!Y.hasOwnProperty(o)&&(n[o]=t[o]);if(s&&s.defaultProps)for(o in t=s.defaultProps,t)n[o]===void 0&&(n[o]=t[o]);return{$$typeof:W,type:s,key:i,ref:r,props:n,_owner:X.current}}f.Fragment=G;f.jsx=E;f.jsxs=E;C.exports=f;var e=C.exports,_={},T=R;_.createRoot=T.createRoot,_.hydrateRoot=T.hydrateRoot;function K(){const s=[{route:"/projects",name:"Projects"},{route:"/diary",name:"Diary"},{route:"/notes",name:"Notes"},{route:"/command-lines",name:"Command Lines"},{route:"/blogs",name:"Blogs"}];return e.jsxs("main",{className:"my-20 flex flex-col gap-10 items-center px-8",children:[e.jsx("h6",{className:"text-2xl font-black",children:"Hi! I am Saad"}),e.jsx("p",{className:"text-2xl sm:text-4xl font-extralight text-center w-full md:w-2/3",children:"I am a Software Developer with love for Machine Learning and Data Science."}),e.jsx("div",{className:"flex flex-row flex-wrap justify-center gap-2",children:s.map(t=>e.jsx(I,{to:t.route,className:"shadow-xl border border-opacity-25 border-lite font-serif bg-darklite text-2xl px-6 py-4 hover:bg-lite hover:text-darklite duration-300 transition-colors",children:t.name},t.route))})]})}const Q="/sadmadlad/technologies/JavaScript.png",Z="/sadmadlad/technologies/Python.png",ee="/sadmadlad/technologies/Html.png",te="/sadmadlad/technologies/Cpp.png",se="/sadmadlad/technologies/Ruby.png",ae="/sadmadlad/technologies/Css.png";function ne(){return e.jsxs("section",{className:"px-8 bg-darklite min-w-full py-14 flex gap-10 lg:justify-center overflow-x-auto no-scrollbar",children:[e.jsx("img",{src:Q}),e.jsx("img",{src:Z}),e.jsx("img",{src:te}),e.jsx("img",{src:se}),e.jsx("img",{src:ee}),e.jsx("img",{src:ae})]})}function ie({heading:s,leadingIcon:t,description:a,techStacks:o}){return e.jsxs("li",{className:"bg-darklite border-b-4 border-b-black border-opacity-40 p-8 flex flex-col gap-8 justify-between",children:[e.jsxs("div",{className:"flex flex-col items-center gap-6 w-48",children:[e.jsx("h5",{className:"text-4xl font-serif",children:s}),e.jsx("img",{src:t}),e.jsx("p",{className:"text-center",children:a})]}),e.jsx("ul",{className:"flex justify-center gap-3",children:o.map(n=>e.jsx("img",{src:n},n))})]})}const oe="/sadmadlad/technologies/Frontend.png",re="/sadmadlad/technologies/Backend.png",le="/sadmadlad/technologies/ML.png",ce="/sadmadlad/technologies/Miscellaneous.png",de="/sadmadlad/technologies/React.png",he="/sadmadlad/technologies/Vite.png",pe="/sadmadlad/technologies/Tailwind.png",ue="/sadmadlad/technologies/Hotwired.png",me="/sadmadlad/technologies/NodeJS.png",ge="/sadmadlad/technologies/PostgreSQL.png",fe="/sadmadlad/technologies/MongoDB.png",be="/sadmadlad/technologies/RubyOnRails.png",ye="/sadmadlad/technologies/TensorFlow.png",we="/sadmadlad/technologies/PyTorch.png",xe="/sadmadlad/technologies/Pandas.png",_e="/sadmadlad/technologies/Figma.png",ve="/sadmadlad/technologies/Rust.png",ke="/sadmadlad/technologies/Unity.png",je="/sadmadlad/technologies/BeautifulSoup4.png";function Se(){const s=[{heading:"Frontend",leadingIcon:oe,description:"Experienced with many frontend technologies, ranging from CSS frameworks to JavaScript ones.",techStacks:[de,he,pe,ue]},{heading:"Backend",leadingIcon:re,description:"Have worked with different databases with different backend frameworks.",techStacks:[me,ge,fe,be]},{heading:"ML",leadingIcon:le,description:"Delved in the areas of machine learning and worked with related frameworks. Created NNs, Classifiers, GANs, Autoencoders etc.",techStacks:[ye,we,xe]},{heading:"Miscellaneous",leadingIcon:ce,description:"Web Scraping as a hobby. Always enjoy and eager to learn new frameworks and programming languages.",techStacks:[_e,ve,ke,je]}];return e.jsxs(e.Fragment,{children:[e.jsx("h6",{className:"mt-20 text-2xl font-black text-center w-full md:w-2/3 px-4",children:"Versatile skill set in different domains, and always interested in expanding it even more."}),e.jsx("section",{className:"px-8 mb-20 mt-16 w-full flex justify-start lg:justify-center gap-8 overflow-x-auto no-scrollbar",children:s.map(({heading:t,leadingIcon:a,description:o,techStacks:n})=>e.jsx(ie,{heading:t,leadingIcon:a,description:o,techStacks:n},t))})]})}function b(){return e.jsxs("header",{className:"mt-4 sm:mt-10 w-full lg:w-3/4 flex justify-between font-serif items-end border-b border-b-lite pb-3 sm:pb-6 px-3",children:[e.jsx("h1",{className:"text-xl sm:text-2xl lg:text-4xl",children:"Muhammad Saad Azam"}),e.jsxs("nav",{className:"hidden sm:flex gap-6 lg:gap-10 text-xl lg:text-2xl",children:[e.jsx("a",{href:"https://www.linkedin.com/in/saad-azam-9113011b8/",children:"LinkedIn"}),e.jsx("a",{href:"https://github.com/SadMadLad",children:"GitHub"}),e.jsx("a",{href:"https://www.kaggle.com/sadmadlad",children:"Kaggle"})]})]})}function y(){const s=O();return e.jsx(c.div,{className:"fixed w-full h-full top-0 bottom-0 right-0 bg-white",initial:{scaleX:1},animate:{scaleX:0,transition:{duration:.33,ease:"circOut"}},exit:{scaleX:1,transition:{duration:.33,ease:"circIn"}},style:{originX:s?0:1}})}function ze(){return e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(b,{}),e.jsx(K,{}),e.jsx(ne,{}),e.jsx(Se,{}),e.jsx(y,{})]})}const P={"hljs-comment":{color:"#B6B18B"},"hljs-quote":{color:"#B6B18B"},"hljs-variable":{color:"#EB3C54"},"hljs-template-variable":{color:"#EB3C54"},"hljs-tag":{color:"#EB3C54"},"hljs-name":{color:"#EB3C54"},"hljs-selector-id":{color:"#EB3C54"},"hljs-selector-class":{color:"#EB3C54"},"hljs-regexp":{color:"#EB3C54"},"hljs-deletion":{color:"#EB3C54"},"hljs-number":{color:"#E7CE56"},"hljs-built_in":{color:"#E7CE56"},"hljs-builtin-name":{color:"#E7CE56"},"hljs-literal":{color:"#E7CE56"},"hljs-type":{color:"#E7CE56"},"hljs-params":{color:"#E7CE56"},"hljs-meta":{color:"#E7CE56"},"hljs-link":{color:"#E7CE56"},"hljs-attribute":{color:"#EE7C2B"},"hljs-string":{color:"#4FB4D7"},"hljs-symbol":{color:"#4FB4D7"},"hljs-bullet":{color:"#4FB4D7"},"hljs-addition":{color:"#4FB4D7"},"hljs-title":{color:"#78BB65"},"hljs-section":{color:"#78BB65"},"hljs-keyword":{color:"#B45EA4"},"hljs-selector-tag":{color:"#B45EA4"},hljs:{display:"block",overflowX:"auto",background:"#1C1D21",color:"#c0c5ce",padding:"0.5em"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}},Te={hljs:{display:"block",overflowX:"auto",padding:"0.5em",color:"#abb2bf",background:"#282c34"},"hljs-keyword":{color:"#F92672"},"hljs-operator":{color:"#F92672"},"hljs-pattern-match":{color:"#F92672"},"hljs-pattern-match .hljs-constructor":{color:"#61aeee"},"hljs-function":{color:"#61aeee"},"hljs-function .hljs-params":{color:"#A6E22E"},"hljs-function .hljs-params .hljs-typing":{color:"#FD971F"},"hljs-module-access .hljs-module":{color:"#7e57c2"},"hljs-constructor":{color:"#e2b93d"},"hljs-constructor .hljs-string":{color:"#9CCC65"},"hljs-comment":{color:"#b18eb1",fontStyle:"italic"},"hljs-quote":{color:"#b18eb1",fontStyle:"italic"},"hljs-doctag":{color:"#c678dd"},"hljs-formula":{color:"#c678dd"},"hljs-section":{color:"#e06c75"},"hljs-name":{color:"#e06c75"},"hljs-selector-tag":{color:"#e06c75"},"hljs-deletion":{color:"#e06c75"},"hljs-subst":{color:"#e06c75"},"hljs-literal":{color:"#56b6c2"},"hljs-string":{color:"#98c379"},"hljs-regexp":{color:"#98c379"},"hljs-addition":{color:"#98c379"},"hljs-attribute":{color:"#98c379"},"hljs-meta-string":{color:"#98c379"},"hljs-built_in":{color:"#e6c07b"},"hljs-class .hljs-title":{color:"#e6c07b"},"hljs-attr":{color:"#d19a66"},"hljs-variable":{color:"#d19a66"},"hljs-template-variable":{color:"#d19a66"},"hljs-type":{color:"#d19a66"},"hljs-selector-class":{color:"#d19a66"},"hljs-selector-attr":{color:"#d19a66"},"hljs-selector-pseudo":{color:"#d19a66"},"hljs-number":{color:"#d19a66"},"hljs-symbol":{color:"#61aeee"},"hljs-bullet":{color:"#61aeee"},"hljs-link":{color:"#61aeee",textDecoration:"underline"},"hljs-meta":{color:"#61aeee"},"hljs-selector-id":{color:"#61aeee"},"hljs-title":{color:"#61aeee"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}};function Ie({codeSnippet:s}){return e.jsx("div",{className:"my-2.5",children:e.jsx(k,{wrapLines:!0,style:P,language:s.language,children:s.code})})}function u({paragraph:s}){const{has_code_snippet:t,text:a,code_snippet:o}=s;return e.jsxs("div",{children:[e.jsx("p",{dangerouslySetInnerHTML:{__html:a}}),t&&e.jsx(Ie,{codeSnippet:o})]})}function Ce({solution:s}){const{has_intro:t,has_outro:a,steps:o}=s;return e.jsxs("div",{children:[t&&e.jsx(u,{paragraph:s.intro}),e.jsx("ul",{className:"list-decimal m-2",children:o.map((n,i)=>e.jsx("li",{children:e.jsx(u,{paragraph:n})},i))}),a&&e.jsx(u,{paragraph:s.outro})]})}function Ee({title:s,titleId:t,...a},o){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},a),s?l.createElement("title",{id:t},s):null,l.createElement("path",{fillRule:"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",clipRule:"evenodd"}))}const Pe=l.forwardRef(Ee),w=Pe;function Re({title:s,type:t,updatedOn:a,description:o,solution:n}){const[i,r]=l.useState(!1),x=p=>{const d={Bug:"bg-red-600",Feature:"bg-green-600","Small Issue":"bg-yellow-600"};return e.jsx("button",{className:`${d[p]} px-1.5 py-0.5 rounded font-semibold`,children:p})};return e.jsxs(c.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"px-2",children:[e.jsxs("div",{className:"flex flex-row gap-2 items-center border-b border-b-lite",children:[e.jsx("h5",{className:"font-bold text-lg",children:s}),e.jsx(c.div,{animate:{rotate:i?180:0,cursor:"pointer"},onClick:()=>r(!i),children:e.jsx(w,{className:"w-6 h-6"})})]}),e.jsx(m,{children:i&&e.jsxs(c.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"flex flex-col gap-2.5 py-2",children:[e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsx("span",{children:x(t)}),e.jsxs("span",{children:[e.jsx("b",{children:"Updated On: "}),e.jsx("span",{children:a})]})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"font-semibold",children:"Description:"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:o}})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"font-semibold",children:"Solution: "}),n.has_steps?e.jsx(Ce,{solution:n}):e.jsx(u,{paragraph:n})]})]})})]})}function Ae({title:s,entries:t}){const a=t.sort((i,r)=>i.title>r.title),[o,n]=l.useState(!1);return e.jsxs("section",{className:"mt-2.5 px-2 md:px-0",children:[e.jsxs("div",{className:"flex flex-row gap-2 items-center border-b-2 border-b-lite",children:[e.jsx("h4",{className:"font-serif font-bold text-2xl",children:s}),e.jsx(c.div,{animate:{rotate:o?180:0,cursor:"pointer"},onClick:()=>n(!o),children:e.jsx(w,{className:"w-8 h-8"})})]}),e.jsx(m,{children:o&&a.map((i,r)=>e.jsx(Re,{title:i.title,type:i.type,updatedOn:i.updated_on,description:i.description,solution:i.solution},r))})]})}const Ne=[{title:"React",entries:[{title:"Animated Page Transitions",type:"Feature",updated_on:"4th August, 2023.",description:'Wanted to have a framer motion page transition from one to the other. Like <a class="underline" href="https://codesandbox.io/s/framer-motion-screen-wipe-page-transitions-with-react-router-6-yo38bu?from-embed=&file=/src/template/Gallery.tsx:1296-1334">this</a>',solution:{has_steps:!0,has_intro:!0,has_outro:!1,intro:{has_code_snippet:!1,text:'The page transitions using framer motion requires use of <code class="bg-zinc-800">useLocation</code>, <code class="bg-zinc-800">AnimatePresence</code>, <code class="bg-zinc-800">useIsPresent</code> along with the <code class="bg-zinc-800">react-router-dom</code>'},steps:[{text:`Create a component which wraps all the <code class="bg-zinc-800">Routes</code> (and the <code class="bg-zinc-800">Switch</code> or <code class="bg-zinc-800">Router</code> alongwith.)
  The component that wraps all of this is <code class="bg-zinc-800">AnimatePresence</code>, provided by framer motion. Use the <code class="bg-zinc-800">useLocation</code> to get the pathname, and pass
  the <code class="bg-zinc-800">location</code> to the <code class="bg-zinc-800">Router</code> (or <code class="bg-zinc-800">Switch</code>, whichever you are using.) as the <code class="bg-zinc-800">key</code> prop.
  <code class="bg-zinc-800">AnimatePresence</code> is for the animation when the new prop is selected. The <code class="bg-zinc-800">location</code> helps us to uniquely identify each route and is important for triggering
  exit animations. My <code class="bg-zinc-800">AnimatedRoutes</code> looked like these:
`,has_code_snippet:!0,code_snippet:{language:"javascript",code:`export default function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/command-lines" element={<CommandLinesPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:identifier" element={<BlogPage />} />
      </Routes>
    </AnimatePresence>
  )
}
`}},{text:`The important part is done. Now, it is your choice how you want to animate the transitions. You can wrap the pages in <code class="bg-zinc-800">motion.div</code> and apply the
initial, animate and exit props to your div with the CSS of your choice. In my case, there was a div which would take the whole screen and scale down during animation. The transition div
was something like this:
`,has_code_snippet:!0,code_snippet:{language:"javascript",code:`export default function TransitionDiv() {
  const isPresent = useIsPresent()

  return (
    <motion.div
      className="fixed w-full h-full top-0 bottom-0 right-0 bg-white"
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
      exit={{ scaleX: 1, transition: { duration: 1, ease: "circIn" } }}
      style={{ originX: isPresent ? 0 : 1 }}
    />
  )
}
`}}]}}]},{title:"Ruby on Rails",entries:[{title:"Complex Validation for Password in Devise",type:"Bug",updated_on:"28th June, 2023",description:'I had to apply complex validation (like presence of a special character and a number) for password. I initially did it like this <code class="bg-zinc-800">validates :password, ..validations</code>. And on the app, I also had to update other info (like name) for the user. With this implementation, the password was coming out to be <code class="bg-zinc-800">nil</code>. At first, I thought that updating user required password, but that was not the case.',solution:{has_steps:!1,has_code_snippet:!0,text:`In a typical devise model (which in my case was <code class="bg-zinc-800">User</code>), there is no field/attribute named password. Instead, the encrypted password is stored in the database. So, how does Devise takes the input password? Actually, it stores the input password temporarily as <b>instance variable</b>, and I was unable to apply validations on the password field because on update, there was no instance variable of password being passed. This snippet basically checks if the instance of password variable is present, and allows it to be blank if the user is being updated. Otherwise, it checks for the specified regex expression. When it comes to creating new user, the presence of password can be checked by the length which is specified in devise's initializer file. The keypoint is understanding how devise manages passwords.`,code_snippet:{language:"ruby",code:`validate :password_regex

def password_regex
  if password.blank? || password =~ /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*]/
    return
  end

  errors.add :password, :bad_password
end
`}}},{title:"Send invitation links to newly added users (Devise)",type:"Feature",updated_on:"30th June, 2023",description:"In an ongoing project, I was asked to implement a feature where an admin creates a user, and an invitation link is sent to the user on the specified email address. The invited user sets the password and can sign in successfully.",solution:{has_steps:!0,has_intro:!0,intro:{has_code_snippet:!1,text:"This feature seemed daunting at first. I assumed I had to use a lot of gems like web tokens and had to do a lot of stuff for this. As I was using devise, I came up with a simpler solution. I looked at the source code of Devise and inspected how it sends links to reset passwords. I decided to leverage this approach to send invitation links. If I had to summarize the procedure, it would look like this: "},has_outro:!1,steps:[{text:'Set a mailer for Devise. The new mailer can be set in <code class="bg-zinc-800">initializers/devise.rb</code>file. Our custom mailer should be a child of <code class="bg-zinc-800">Devise::Mailer</code>. Include the <code>UrlHelpers</code> and set the template path. You can create your custom mailer with something like this: ',has_code_snippet:!0,code_snippet:{language:"ruby",code:`class ExtendedDeviseMailer < Devise::Mailer
  include Devise::Controllers::UrlHelpers

  helper :application
  default template_path: 'devise/mailer'
end
`}},{text:'Add these two methods in your <code class="bg-zinc-800">User</code> model. These methods use the reset password token and then send an email notification. If you do not want to use the reset password token, you can add a new token field in the table of users, and generate the token accordingly. This might be a better way to achieve this, but will require more code. (You can write these methods as a single method, but I kept on copying the way devise sends reset password tokens.)',has_code_snippet:!0,code_snippet:{language:"ruby",code:`def send_set_password_instructions
  return if admin?

  token = set_reset_password_token
  send_set_password_instructions_notification(token)

  token
end

def send_set_password_instructions_notification(token)
  send_devise_notification(:set_password_instructions, token, {})
end
`}},{text:'Add a method in your mailer that will send the email to the user, and create the view for the body of the email. Pass the token in the URL. With this, by using something like <code class="bg-zinc-800">@user.send_set_password_instructions</code> in your controller, this will send the URL to set the password.',has_code_snippet:!0,code_snippet:{language:"ruby",code:`def set_password_instructions(record, token, opts = {})
  @token = token
  devise_mail(record, :set_password_instructions, opts)
end
`}},{text:`Now, create a route, a method in your controller and a view to verify the token and set the password. You can check the <code class="bg-zinc-800">#update</code> action of Devise's <code class="bg-zinc-800">PasswordsController</code> to see how you can achieve this.</li>`,has_code_snippet:!1}]}},{title:"Link tags within Turbo frames that need to go to a new page",type:"Bug",updated_on:"17 July, 2023",description:'Faced this issue when I had a link to the activity page within a turbo frame. On clicking, "Content Missing" will pop up. The id of turbo frame was "activities"',solution:{has_steps:!1,has_code_snippet:!0,text:'On clicking the link within the frame, the frame expects to fetch a <code class="bg-zinc-800">turbo-frame</code> from the next ongoing link. In my case, clicking the link directly would expect the linked page to have a frame with the id of "activities". But I wanted to fetch the whole page, not just a frame of it. In order to make the link properly work, I needed to add the attribute <code class="bg-zinc-800">data-turbo-frame="_top"</code> to target the whole page. This made the link work properly.',code_snippet:{language:"erb",code:`<%= link_to "Checkout the Activity", activity_path(activity), data: { turbo_frame: '_top' } %>`}}},{title:"Nested Attributes, Params and Other Stuff",type:"Bug",updated_on:"24 August, 2023",description:'Trying to get comfortable with <code class="bg-zinc-800">accepts_nested_attributes_for</code>.',solution:{has_intro:!1,has_outro:!1,has_steps:!0,steps:[{has_code_snippet:!0,text:`The first problem was to build new records using nested attributes. For that, the form's <code class="bg-zinc-800">fields_for :associated_records</code> field should have the <code class="bg-zinc-800">@parent_record.associated_records.build</code> option
so that new associated records can be created (if the association is <code class="bg-zinc-800">:has_many</code>). The params should permit like <code class="bg-zinc-800">params.require(:parent_record).permit(associated_record_attributes: [...attributes])</code>.
`,code_snippet:{language:"ruby",code:`# Form

<%= form_with model: [@activity, @activity_registration] do |form| %>
  <%# <%= form.check_box :units_ids, {multiple: true}, account_user.id, nil %>
  <% @account_users.each do |account_user| %>
    <%= form.fields_for :activity_registration_units, @activity_registration.activity_registration_units.build do |unit| %>
        <%= unit.check_box :account_user_id, {}, account_user.id, nil %> <%= account_user.user.name %>
      <br />
    <% end %>
  <% end %>

  <%= form.submit %>
<% end %>

# Controller
UNIT_PARAMS = %i[id activity_registration_id account_user_id participant_age
       participant_grade].freeze

params.require(:activity_registration).permit(
  :payment,
  activity_registration_units_attributes: UNIT_PARAMS
)
`}},{has_code_snippet:!0,text:`For some reason, in my case, the validations were not working properly. The validations would apply when associated records were getting created but not
when they were being updated. The solution was simpler than I thought as I then had to simply use <code class="bg-zinc-800">validates_associated</code>.
`,code_snippet:{language:"ruby",code:`validates_associated :activity_registration_units
`}}]}},{title:"JSONB, Forms and Params",type:"Feature",updated_on:"24 August, 2023",description:"I was not sure how can I fill in my JSONB field using forms and params.",solution:{has_steps:!1,has_code_snippet:!0,text:`Initially, it looked hard, but it was fairly simple. <code class="bg-zinc-800">form.fields_for</code> are the way to go.
The attributes within <code class="bg-zinc-800">fields_for</code> are sent back as nested params and can be used as such.
`,code_snippet:{language:"ruby",code:`# Form
<%= form_with model: @activity_registration do |form| %>
  <%= form.fields_for :equipment do |e| %>
    <%= e.text_field :data, value: 'Value' %> # Will be passed in params as equipment: { data: 'Value' }
  <% end %>

  <%= form.submit %>
<% end %>

# Controller
# Equipment field is JSONB
params.require(:activity_registration).permit(equipment: {})
`}}}]},{title:"Elixir",entries:[{title:"Print list in Elixir",type:"Small Issue",updated_on:"23 July, 2023",description:'I could not find a good way to print a linked list. <code class="bg-zinc-800">IO.puts</code> could not do the deed.',solution:{has_steps:!1,has_code_snippet:!1,text:'<code class="bg-zinc-800">IO.inspect</code> was what I needed.'}}]},{title:"Ruby",entries:[{title:"Safe Navigation Operator (&.) on Hash.",type:"Small Issue",updated_on:"2 August, 2023",description:`I tried to use the &. operator on a hash for null check on key value pair to fetch the required value, but couldn't. I tried <code class="bg-zinc-800">my_hash['response']&.['call']</code> but this was not the way to go.`,solution:{has_steps:!1,has_code_snippet:!1,text:`The syntax needed to solve this was something like this: <code class="bg-zinc-800">my_hash&.[]('response')&.[]('call')</code>. Ugly syntax, but does the job.
<b>Reference:</b> <a class="underline" href="https://stackoverflow.com/questions/47018206/safe-navigation-operator-lonely-operator-not-working-for-hash">Stackoverflow Question.</a>
`}}]},{title:"Tailwind",entries:[{title:"String interpolation classes",type:"Bug",updated_on:"23 July, 2023",description:`"I was trying to use Tailwind classes conditionally using interpolation like
<code class="bg-zinc-800"><%= "bg-#{activity.good? ? 'yellow' : 'purple'}-500" %></code>"
`,solution:{has_steps:!1,has_code_snippet:!1,text:`Tailwind does not really allow interpolation in its classes for safety purposes. There
are two ways to go about this: Use Tailwind classes a whole conditionally, like <code class="bg-zinc-800"><%= 'bg-red-500' if true %></code>.
Other method would be to add the classes in safelist under tailwind.config.js'
`}}]},{title:"Miscellaneous",entries:[{title:"Open AI Function Calling - Array parameters",type:"Small Issue",updated_on:"24 July, 2023",description:`When working on remark's comms-api, I found an error where OpenAI was called for function calling.
The error had description with something like: <b>Invalid Schema for function <function-name></b>.
The error was for the parameters that had array in them.
`,solution:{has_steps:!1,has_code_snippet:!0,text:"The error was a minute one. Basically, for the array parameter, you would also need to send in type of array parameters (i.e. either they are strings or numbers etc.)",code_snippet:{language:"json",code:`"service_data": {
  "type": "array",
  "description": "the comma separated list of required service slugs",
  "items": {
    "type": "string"
  }
`}}}]}];function j({title:s,heroCaption:t}){return e.jsxs("section",{className:"flex flex-col gap-4 items-center my-20",children:[e.jsx("h1",{className:"font-black font-serif text-4xl",children:s}),e.jsx("p",{className:"text-xl text-center font-light w-full md:w-2/3",children:t})]})}function Be(){const s=Ne.sort((t,a)=>t.title>a.title);return e.jsxs("div",{className:"flex flex-col items-center pb-6",children:[e.jsx(b,{}),e.jsx(j,{title:"Diary",heroCaption:"This diary includes some errors and bugs I encountered and how I fixed them, along with some code snippets."}),e.jsx("div",{className:"w-full md:w-3/4",children:s.map((t,a)=>e.jsx(Ae,{title:t.title,entries:t.entries},a))}),e.jsx(y,{})]})}const Me=[{command:"cat <path/to/filename>",description:"Open file in terminal."},{command:"sudo fuser -k <port>/<protocol>",description:'Kill a web process running on the specific port. Where port is the <code class="bg-zinc-800">port</code> on which the process is running, and the <code class="bg-zinc-800">protocol</code> is mostly <code class="bg-zinc-800">tcp</code> or <code class="bg-zinc-800">udp</code>.'},{command:"cargo new <project-name> --vcs=git",description:"Creates a new rust project with the given name. The --vcs flag allows to use Version Control System optionally."},{command:"chmod +x <file-name>",description:'<code class="bg-zinc-800">chmod</code> is short for Change Mode. It allows us to change the access of file permissions and directiories. The <code class="bg-zinc-800">+x</code> flag allows that file to be executable.'},{command:"man <command-name>",description:"Displays a manual related to the command in terminal."},{command:"script <file-name>",description:'Starts a script in terminal. Now whatever is written on the terminal, will be saved in the <code class="bg-zinc-800">file-name</code> after the <code class="bg-zinc-800">exit</code> command.'},{command:"lsb_release -a",description:"Get Ubuntu's version and other details"},{command:"git remote add <name> <link>",description:"Add a remote link to the repo. Can be github, bitbucket, heroku etc."},{command:"git push -u <remote-branch-name> <local-branch-name>",description:"Push a local branch to remote one. The -u flag is used to set the upstream branch for the current branch you are pushing."},{command:"mix new <project-name>",description:"Initializes a new mix project with the given project name."},{command:"mix deps.get",description:"Gets all out of date dependencies, i.e. dependencies that are not available or have an invalid lock."},{command:"mix compile",description:"The main entry point for the project. It runs the compilers in the project and returns a tuple with the compilation status and a list of diagnostics. Before compiling the code, it runs all the dependencies and performs a series of checks."},{command:"npm create vite@latest project-name -- --template <react | vue | svelte>",description:"Initialize a project using vite with the provided template."},{command:"npm install -D package-name",description:"Install a package as dev dependency."},{command:"cargo build",description:'Builds the project, creates an executable file under <code class="bg-zinc-800">./target/debug/project-name</code>. Also, creates a <code span="bg-zinc-800">Cargo.toml</code> file to keep track of dependencies.'},{command:"cargo run",description:"Builds and executes the code in one go."},{command:"cargo check",description:"Does not execute the code but makes sure that the code compiles."},{command:"cargo build --release",description:"Compiles and optimizes the code and prepares to release the product."},{command:"django-admin startproject <project-name>",description:"Start a new Django project"},{command:"django-admin startapp <app-name>",description:"Create an app in the Django project"}];function Le(){const s=Me.sort((t,a)=>t.command.localeCompare(a.command));return e.jsx("main",{className:"px-5",children:e.jsx("ul",{className:"list-disc flex flex-col gap-4",children:s.map((t,a)=>e.jsxs("li",{children:[e.jsx(k,{wrapLines:!0,style:Te,language:"vim",children:t.command}),e.jsx("p",{className:"mt-1",dangerouslySetInnerHTML:{__html:t.description}})]},a))})})}function Oe(){return e.jsxs("div",{className:"flex flex-col items-center pb-6",children:[e.jsx(b,{}),e.jsx(j,{title:"Command Lines",heroCaption:"Some useful command lines that I learnt on the way"}),e.jsx("div",{className:"w-full md:w-3/4",children:e.jsx(Le,{})}),e.jsx(y,{})]})}function De({title:s,paragraphs:t}){const[a,o]=l.useState(!1);return e.jsxs(c.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"px-2",children:[e.jsxs("div",{className:"flex flex-row gap-2 items-center border-b border-b-lite",children:[e.jsx("h5",{className:"font-bold text-lg",children:s}),e.jsx(c.div,{animate:{rotate:a?180:0,cursor:"pointer"},onClick:()=>o(!a),children:e.jsx(w,{className:"w-6 h-6"})})]}),e.jsx(m,{children:a&&e.jsx(c.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"flex flex-col gap-2.5 py-2",children:t.map((n,i)=>e.jsx(u,{paragraph:n},i))})})]})}function Fe({title:s,notes:t}){const a=t.sort((i,r)=>i.title>r.title),[o,n]=l.useState(!1);return e.jsxs("section",{className:"px-2 md:px-0",children:[e.jsxs("div",{className:"flex flex-row gap-2 items-center border-b-2 border-b-lite",children:[e.jsx("h4",{className:"font-serif font-bold text-2xl",children:s}),e.jsx(c.div,{animate:{rotate:o?180:0,cursor:"pointer"},onClick:()=>n(!o),children:e.jsx(w,{className:"w-8 h-8"})})]}),e.jsx(m,{children:o&&a.map((i,r)=>e.jsx(De,{title:i.title,paragraphs:i.paragraphs},r))})]})}const Ue=[{title:"C++",notes:[{title:"Preprocessors",paragraphs:[{text:"Preprocessors in a C++ file are basically commands or files executed before the file does. They start with a #.",has_code_snippet:!1}]},{title:"Header Guards",paragraphs:[{text:"Header Guards ensure us to include our file only once in our file and avoid redeclaration.",has_code_snippet:!1},{text:`There are two ways to define header guards. One is by using <code class="bg-zinc-800"><b>#pragma once</b></code> and the other is <code class="bg-zinc-800"><b>#ifndef, #define, #endif</b></code>. Both of these do the same thing and make sure to include the file only once.
The <code class="bg-zinc-800">#ifndef</code> method allows us to create a tag for file and make sure it is defined once. <code class="bg-zinc-800">#pragma once</code> is a shorthand for this.
`,has_code_snippet:!1}]},{title:"Static in C++",paragraphs:[{text:`The <code class="bg-zinc-800">static</code> keyword works different in different contexts.
<ul class="list-inside list-disc">
  <li>In separate files, if a function or a variable is declared <code class="bg-zinc-800">static</code>, it remains private for that file.</li>
  <li>Class methods or instance variables if declared <code class="bg-zinc-800">static</code>, are shared among all the instance among that specific class. If we draw similarity with Ruby classes, the <code class="bg-zinc-800">static</code> method will be a class method (using <code class="bg-zinc-800">self.method_name</code>) and static variable will be declared using <code class="bg-zinc-800">@@</code>.</li>
  <li><code class="bg-zinc-800">static</code> method cannot access non-static class methods or variables.</li>
  <li><code class="bg-zinc-800">static</code> methods and variables of a class are accessed using <code class="bg-zinc-800>ClassName::MethodOrVariableName</code></li>
</ul>
`},{has_code_snippet:!1}]},{title:"Enums",paragraphs:[{text:'Enums are declared using the <code class="bg-zinc-800">enum</code> keyword. They can also be declared as Enum classes for more verbosity. On their own, enums behave exactly like array of integers. When declared with class, they are more verbose and need to be namespaced if they need to be accessed.',has_code_snippet:!0,code_snippet:{language:"cpp",code:`enum Size {
  Small, Medium, Large
};

enum class SizeClass {
  Small, Medium, Large
};

int main() {
  if (SizeClass::Large > SizeClass::Medium) {
    std::cout << "Nice" << std::endl;
  }

  if (Large > Medium) {
    std::cout << "Nice" << std::endl;
  }
}
`}}]},{title:"Abstract Method",paragraphs:[{text:"Abstract Methods in C++ can be declared with something like this:",has_code_snippet:!0,code_snippet:{language:"cpp",code_snippet:`virtual function_type function_name(function_args) = 0;
`}}]},{title:"Namespaces",paragraphs:[{text:'Namespaces in C++ allow us to group up methods under a single namespace, and use them. The keyword <code class="bg-zinc-800">using</code> allows us to use and scope certain namespaces (like <code class="bg-zinc-800">using namespace std</code> allows us to use <code class="bg-zinc-800">std</code> methods like <code class="bg-zinc-800">cout</code>). In comparison to Ruby, they feel like modules.',has_code_snippet:!1}]}]},{title:"React",notes:[{title:"useLocation hook in react-router-dom",paragraphs:[{text:`<code class="bg-zinc-800">useLocation</code> is used to fetch the current 'location' of the user. The location of a user is entry in the history stack, which is analogous to page or screen. The location can be used to extensively the URL (like fetching the base path, search, state, key and hash of the page.)`,has_code_snippet:!1}]},{title:"Default Props",paragraphs:[{text:"Default props can be declared for a component in order to avoid repetition. Say, we have a button like this:",has_code_snippet:!0,code_snippet:{language:"javascript",code:`function Button({ text, color, fontSize }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return <button style={buttonStyle}>{text}</button>;
}

Button.defaultProps = {
  text: "Click Me!",
  color: "blue",
  fontSize: 12
};
`}},{text:"The default props have been declared for the button and can be custom ones can be passed accordingly.",has_code_snippet:!0,code_snippet:{language:"javascript",code:`<Button />
<Button text="Don't Click Me!" color="red" />
<Button fontSize={20} />
`}},{text:"A better way to achieve this would be:",has_code_snippet:!0,code_snippet:{language:"javascript",code:`function Button({ text = "Click Me!", color = "blue", fontSize = 12 }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return <button style={buttonStyle}>{text}</button>;
}
`}}]}]},{title:"Ruby on Rails",notes:[{title:"How do Turbo Frames work seemingly",paragraphs:[{text:'On a surface level, turbo frames allow to target certain frames from other or within the same pages. They do this by intercepting the link and targetting the <code class="bg-zinc-800">turbo-frame</code> by its id.',has_code_snippet:!1},{text:"As an example, let's have a search form for users. The forms fetches the users, targets the turbo frame with id of users and shows the users in that frame.",has_code_snippet:!0,code_snippet:{language:"erb",code:`<%= form_with url: users_path, class: 'flex-1', method: :get, data: { turbo_frame: 'users' } do |f| %>
    <%= f.text_field :query %>
<% end %>
`}},{text:"The form on the page looks like this:",has_code_snippet:!0,code_snippet:{language:"erb",code:`<%= turbo_frame_tag 'users' do %>
  <%= render(partial: 'user', collection: @users) %>
<% end %>
`}},{text:"And the controller this form hits looks like this:",has_code_snippet:!0,code_snippet:{language:"ruby",code:`class UsersController < ApplicationController  
  def index
    @users = current_company.users.active.search(params)
  end
end
`}},{text:'Now, when the search happens, the form targets the frame with the id of "users" and updates the frame accordingly. Quite cool. In a similar manner, we can have a frame on an entirely different page and the form can target that specific frame and fetch the results on the page on which you are staying.',has_code_snippet:!1},{text:`Furthermore, the links within a frame work differently. If a link is clicked with in a frame (let's say, the link takes you to a new page), turbo will intercept the link and try to fetch the frame of the same id from the newer page. The behavior of links can be controlled using different attributes like <code class="bg-zinc-800">data-turbo-frame</code> etc.`}]},{title:"accepts_nested_attributes_for for creates and updates",paragraphs:[{text:`<code class="bg-zinc-800">accepts_nested_attributes_for</code> is used for easier creation and updates of associated
  records. Let's say we have model named <code class="bg-zinc-800">ActivityRegistration</code> which has many <code class="bg-zinc-800">:activity_registration_units</code>.
  so, the models look like these:
`,has_code_snippet:!0,code_snippet:{language:"ruby",code:`class ActivityRegistration < ApplicationRecord
  has_many :activity_registration_units
  accepts_nested_attributes_for :activity_registration_units
end

class ActivityRegistrationUnit < ApplicationRecord
  belongs_to :activity_registration
end
`}},{text:"The params in controller would like this to accept the nested attributes:",has_code_snippet:!0,code_snippet:{language:"ruby",code:`def activity_registration_params
  params.require(:activity_registration).permit(
    :payment,
    activity_registration_units_attributes: %i[activity_registration_id]
  )
  # Passing the id is necessary.
end
`}},{text:'In the forms, updates to associated records are easier using <code class="bg-zinc-800">form.fields_for</code>. Creation of new records is different, as it requires another attribute too.',has_code_snippet:!0,code_snippet:{language:"ruby",code:`# Creation of new activity_registration_units

<%= form_with model: [@activity, @activity_registration] do |form| %>
  <% @account_users.each do |account_user| %>
    <%= form.fields_for :activity_registration_units, @activity_registration.activity_registration_units.build do |unit| %>
      <%= unit.check_box :account_user_id, value: account_user.id %> <%= account_user.user.name %>
      <br />
    <% end %>
  <% end %>

  <%= form.submit %>
<% end %>

# Loop over associated models (when they are created or need to be updated)

<%= form_with model: [@activity, @activity_registration] do |form| %>

  <%= form.fields_for :activity_registration_units do |unit| %>
    <%= unit.object.account_user_id %>
    <br />
  <% end %>

  <%= form.submit %>
<% end %>
`}}]}]},{title:"Ruby",notes:[{title:"&. operator",paragraphs:[{text:'This operator is called safe navigation operator. It allows to us to have <code class="bg-zinc-800">nil</code> check on the variables before we execute any method (or check for an attribute) for the variable.',has_code_snippet:!0,code_snippet:{language:"ruby",code:`# Both the expressions below behave the same.
@person&.spouse&.name
@person.spouse.name if @person && @person.spouse
`}}]},{title:"Get terminal size",paragraphs:[{text:'We can get the terminal size with <code class="bg-zinc-800">io/console</code> gem in Ruby (<code class="bg-zinc-800">$stdin.winsize</code>).',has_code_snippet:!1}]},{title:"Readline.line_buffer",paragraphs:[{text:'<code class="bg-zinc-800">Readline.line_buffer</code> represents the current input line in the Readline library. It retrieves the text entered by the user up to the current cursor position.',has_code_snippet:!1}]}]},{title:"Rust",notes:[{title:"What is a Macro in Rust?",paragraphs:[{text:'Macros are pieces of code that generate more code. There are usually highlighted with exclamation mark at the end (like <code class="bg-zinc-800">println!</code>). Macros are quite useful when it comes to metaprogramming.',has_code_snippet:!1}]},{title:"What is a cargo?",paragraphs:[{text:"Cargo is a build system and package manager for Rust. It has a TOML file (Tom's Obvious, Minimal Language) to keep track of configuration, version and dependencies. It also helps in debugging, optimizing, and releasing code packages. Checkout the Command Lines page to see some cargo commands.",has_code_snippet:!1}]},{title:"Variables, Constants, Mutability and Shadowing",paragraphs:[{text:'Variables in Rust are declared using <code class="bg-zinc-800">let</code> keyword. By default, all the variables are immutable in Rust, which means their value cannot be changed.',has_code_snippet:!1},{text:'To create a mutable value in Rust, we would need to use the <code class="bg-zinc-800">mut<code>keyword.',has_code_snippet:!1},{text:'Constants in Rust are declared using the <code class="bg-zinc-800">const</code> keyword. Declaration of Constant always requires a type. By convention, the variable name is always capitalized.',has_code_snippet:!1},{text:"Shadowing allows you to override the previous value of the same variable. Basically, it just creates a new variable. An example:",has_code_snippet:!0,code_snippet:{language:"rust",code:`fn main() {
    let x = 10;
    let x = x + 1; // Shadowing
    println!("x's value: {x}");
}
`}}]},{title:"Shadowing vs Mutable Variable",paragraphs:[{text:'Shadowing allows to override the type of the previous variable while <code class="bg-zinc-800">mut</code> does not allow you to change the type of the variable. As an example:',has_code_snippet:!0,code_snippet:{language:"rust",code:`fn main() {
    let x = "123";
    let x = x.len(); // Valid because of shadowing.

    let mut y = "123";
    y = y.len(); // Not Valid
}
`}}]},{title:"Data Types",paragraphs:[{text:'Rust is statically typed, which means it needs to know the types of the variable before compilation. For example, this will render an error because we have not defined the type of the <code class="bg-zinc-800>guess</code>.',has_code_snippet:!0,code_snippet:{language:"rust",code:`let guess = "42".parse().expect("Not a number!");
`}},{text:"There are two types of data in Rust: Scalar and Compound. Scalar types represent a single value, like boolean, integer, character and floating point number. Compound Types have multiple values in them, like tuples and arrays.",has_code_snippet:!1},{text:`Integers can be created using different data types like <code class="bg-zinc-800">i8, u8, i16, i32, i64</code> and their unsigned versions. There are many ways to represent the integer too like <code class="bg-zinc-800">92_000, 0xff, 0o33, 0b1111_0000, b'A'</code> which represent decimal, hexadecimal, octadecimal, binary and bytes.`,has_code_snippet:!1},{text:"Arrays can be declared in different ways, like this:",has_code_snippet:!0,code_snippet:{language:"rust",code:`let list_one: [i32; 3] = [3, 3, 3];
let list_two = [3; 5]; // list_two = [3, 3, 3, 3, 3]
`}}]},{title:"Statements vs Expressions",paragraphs:[{text:"Statements are lines of codes that perform some action but do not give a resultant value. Statements usually end with a semicolon. Expressions always result a value, and do not end with a semicolon. If a function returns something, it should always end in an expression. Some examples:",has_code_snippet:!0,code_snippet:{language:"rust",code:`fn main() {
    let y = (let x = 10); // Will cause an error because let is always a statement, and 'y' is not being bound to anything.
    let z = {
        let x = 10;
        10 + 1
    }; // Valid and 'z' will be 11 because the code block has returned it in the expression. If we put semicolon after 10 + 1, it will not work as it will become a statement then.
}

fn five() -> i32 {
    5 // Function returns an expression
}
`}}]},{title:"Heap vs Stack",paragraphs:[{text:"Rust requires you to understand the difference between Heap and Stack to understand how does ownership works. In stack, the data stored at the top, and fetch first (Last In First Out) Accessing and pushing data to a stack is easier. Rust uses stack to store variables whenever the size is known.",has_code_snippet:!1},{text:"On the other hand, storing data in a heap is a lot more random. Heap needs a pointer to achieve this, to know how much space is required. Heap is used to variables that do not have fixed known size. Accessing and pushing to heap is slower. Rust uses heap to store strings. Whenever a value that is stored in a heap goes out of scope, the memory becomes free.",has_code_snippet:!1}]}]},{title:"Git",notes:[{title:"Different version controls (CVS, SVN, Git)",paragraphs:[{text:"CVS and SVN are fairly similar to each other in a sense that; both are centralized version control systems, both have linear workflow (i.e. commits are to the main trunk only), both need their developers to have connection in order to commit, both are somewhat similar in speed.",has_code_snippet:!1},{text:"On the other hand, Git has a decentralized approach where each develop can have a copy of the codebase, do his/her tasks offline and commit. Git uses branching and a powerful merging algorithm to merge branches, commits and resolve conflicts, and is faster than CVS and SVN.",has_code_snippet:!1}]}]},{title:"Miscellaneous",notes:[{title:"Makefile?",paragraphs:[{text:"Makefiles allow us to build files where re-build is needed. Makefiles are intelligent enough to detect if build is needed or not. They consist of variables, dependencies and commands in their files. Headers are not included generally in the makefile. A typical makefile looks like this:",has_code_snippet:!0,code_snippet:{language:"makefile",code:`CC=g++ # Variable for type of compile
CFLAGS=-g -Wall # Variable for flags to use

CFILES=main.cpp	# Files to build
OBJECTS=main.o	# Object files to be created from files

BINARY=bin	# Variable for command

# A convention for makefiles to include an all: directive, which typically compiles all the files.
# Here, it runs the 'bin' command. But then it looks for, how can I build 'bin', for which it moves to next command.
all: $(BINARY)

# The next directive creates the object files (as mentioned in OBJECTS variable). So far, to compile the bin directive, it has to create object files.
# The command for creating those files is $(CC) -o $@ $^. Here, CC is the compile, -o is the flag for creating object files. $@ means what is on the left side of the directive (bin). $^ means what is on the right side of the directive (here it is main.o)
# But now it needs to look for how to create those object files from the cpp files, and the command below tells it that.
$(BINARY): $(OBJECTS)
  $(CC) -o $@ $^

# Very similar to the directive above. One new thing here is the wildcard %.
# The directive can be read as: For creating a x.o file from each x.cpp file, run the command below.
%.o: %.cpp
  $(CC) $(FLAGS) -c -o $@ $^

# A clean directive to remove binary and object files.
clean:
  rm -rf $(BINARY) $(OBJECTS)
`}}]},{title:"UTF-8?",paragraphs:[{text:"First came ASCII. It was simple enough to store english alphabets. Then the number of bytes was increased for internationalization which created a whole lot of mess when exchanging information via emails and stuff. But the management of bytes was atrocious and was never viable for many characters. Then came Unicode, which consisted of <i>code point</i> (U+0639) where U+ was Unicode while +0639 was the hexadecimal number. This added support for more characters. But this system had a lot of unused bytes (with lots of 00s like U+0066, U+0041 etc.), which was incovenient for English alphabets. Then came UTF-8 for using less bytes for English characters. When the character code goes beyond 127, all bets are off and we would need to know which encoding was it, either it was ASCII, UTF-8, UTF-16, Latin etc. (The information is not completely true and ambiguous and I would need to read it a little more.) That's why we have charset=UTF-8 in our HTML to ensure that the encoding is in UTF-8.",has_code_snippet:!1}]},{title:"Unix, Linux and everything is a file.",paragraphs:[{text:"Both Unix and Linux are very similar OS, there are differences in licensing, foundations and being closed-source and open source respectively.",has_code_snippet:!1},{text:"Now, on 'everything is a file'. A <b>file descriptor</b> is an unsigned integer used by a process to identify which file is open. Unix does any sort of I/O operation using the file descriptor. This file can be anything, a real on-disk file, a network connection, a terminal etc. So yes, everything on Unix is a file.",has_code_snippet:!1}]}]},{title:"Networking",notes:[{title:"Socket and Types",paragraphs:[{text:`Socket is a 'way to speak with other programs using Unix file descriptors'. We can use the <code class="bg-zinc-800">socket()</code> system routing using calls like <code class="bg-zinc-800">send</code> and <code class="bg-zinc-800">recv</code>. There are two types of sockets - <b>SOCK_STREAM</b> (Stream Sockets) and <b>SOCK_DGRAM</b> (Datagram Sockets, also connectionless sockets). Stream Sockets use TCP protocol while Datagram Sockets use UDP protocol.`}]},{title:"Subnetting",paragraphs:[{text:"Subnetting allows us to divide our into smaller networks. Lets say, our internet address is something like 200.10.20.32. We can use the last octet to host a lot hosts. The last octet can have its Most Significant fixed, divided into two subnets. The first subnet can have available addresses from 200.10.20.0 to 200.10.20.127. The second subnet will have the addresses from 200.10.32.128 to 200.10.32.255. Each subnet has 126 usable addresses.",has_code_snippet:!1}]},{title:"Layered Network Model",paragraphs:[{text:`In layered network model, the peer layers of the hosts are responsible for the similar encapsulation / decapsulation. The main layers are:
<ol class="list-inside list-decimal">
  <li>Application Layer</li>
  <li>Presentation Layer</li>
  <li>Session Layer</li>
  <li>Transport Layer</li>
  <li>Network Layer</li>
  <li>Data Link Layer</li>
  <li>Physical Layer</li>
</ol>
`,has_code_snippet:!1}]},{title:"Port Numbers",paragraphs:[{text:"Port Numbers (are 16-bit numbers) are used to identify (along with the transport protocal, TCP and UDP) which process should receive the packet. Kind of like, IP (Internet Protocol) address is the address to the hotel but Port Numbers indicate the room number of the hotel.",has_code_snippet:!1}]}]},{title:"Cybersecurity",notes:[{title:"PII",paragraphs:[{text:`PII stands for Personally Identifiable Information. It is "any information used to identify a person's identity". SPII is Sensitive PII which involves stuff like security numbers, bank accounts and biometric data.`,has_code_snippet:!1}]},{title:"SIEM Tools",paragraphs:[{text:"SIEM stands for Security Information and Event Management. These tools are used for auditing."}]},{title:"CERTs",paragraphs:[{text:"CERTs stands for Computer Emergency and Response Teams.",has_code_snippet:!1}]},{title:"Brain Virus",paragraphs:[{text:"Developed in Lahore, Pakistan in 1986 by Alvi Brothers, the virus was meant to track the illegal copies of floppy disk and not meant for malicious reasons. But in actuality, the infected floppy disk would infect the computer and any floppy disk insert would get infected.",has_code_snippet:!1}]},{title:"Morris Virus",paragraphs:[{text:"Robert Morris in 1988 developed a 'software' to keep track of how many computers were connected to the internet. The software would get installed in the computer, re-installing till the memory crashed, and crawled through the internet to affect the computers.",has_code_snippet:!1}]},{title:"Social Engineering",paragraphs:[{text:"Social Engineering is a manipulative technique that requires human error in order to get access to the private information. An example would be the LoveLetter malware by Onel De Guzman in 2000. Attacks related to social engineering fall under <b>Security and Risk Management Domain</b>. Some common techinques of social engineering are:",has_code_snippet:!1},{text:`<ul class="list-inside list-disc">
  <li><b>Social Media Phishing:</b> The threat actor collects detailed information of the victim and initiates an attack.</li>
  <li><b>Watering Hole Attack:</b> Frequent attacks from the threat actor to target specific group of users.</li>
  <li><b>USB Baiting:</b> Use USB stick as bait to install malicious software.</li>
  <li><b>Physical Social Engineering:</b> Impersonate a customer, employee to obtain unauthorized access to location.</li>
</ul>
`}]},{title:"Phishing",paragraphs:[{text:"Phishing is the use of digital software to trick people into deploying malicious software and exposing their sensitive data.",has_code_snippet:!1},{text:"Some types of fishing attacks are:",has_code_snippet:!1},{text:`<ul class="list-inside list-disc">
  <li><b>Business Email Compromise:</b> A threat actor sends a malicious email that invokes the user to send information, in order to get financial benefit. The email seems from a known source.</li>
  <li><b>Spear Phishing:</b> The threat actor sends malicious email to a specific user or groups of users. The email seems to be appear from a trusted source.</li>
  <li><b>Whaling:</b> Type of SPear Phishing to target company executives.</li>
  <li><b>Vishing:</b> Exploitation of Electronic Voice communication to impersonate a known source and obtain information.</li>
  <li><b>Smishing:</b> Use of text messages for phishing.</li>
</ul>
`,has_code_snippet:!1}]},{title:"ILOVEYOU Malware",paragraphs:[{text:"A Phillipine Hacker, Onel De Guzman developed a malware named ILOVEYOU in 2000 to send malicious email to the victims. On opening the attached file, the malware would inspect the victim's address and steal the login credentials and other sensitive data."}]},{title:"The Equifax Breach",paragraphs:[{text:"Over 143 million records were stolen in Equifax Breach in 2017, because of multiple vulnerabilities that Equifax had."}]},{title:"Malware and some of its types",paragraphs:[{text:"A malware is software to harm devices and networks. Some of the types are:",has_code_snippet:!1},{text:`<ul class="list-disc list-inside">
  <li><b>Virus:</b> Malicious code that once initiated, destroys or damages data.</li>
  <li><b>Worms:</b> Self-replicating software that spreads from one infected system to the other.</li>
  <li><b>Ransomware:</b> The threat actor encrypts data and asks for payment to decrypt it.</li>
  <li><b>Spyware:</b> The act of stealing and selling user's sensitive information without consent through a malicious software installed on user's computer.</li>
</ul>
`}]},{title:"CISSP and the security domains.",paragraphs:[{text:"CISSP stands for Certified Information Systems Security Professional. It's eight domains are:",has_code_snippet:!1},{text:`<ul class="list-inside list-disc">
  <li><b>Security and Risk Management: </b>Defines security risks and objectives, risk mitigation, compliance. business continuity and the law, like updating policies of company etc.</li>          
  <li><b>Asset Security: </b>Securing digital and physical assets. Also related to storage, maintenance, retention and destruction of data.</li>
  <li><b>Security Architecture and Engineering: </b>Focus on optimizing security by ensuring effective tools, processes and software, like configuring a firewall.</li>
  <li><b>Communication and Network Security: </b>Manage and secure physical networks and wireless communications, like making sure that the users connect to secure hotspots.</li>
  <li><b>Identity and Acces Management: </b>Keeps data secure by making sure that the members of organization follow specific policies to use assets, like setting keycard access for employees.</li>
  <li><b>Security Assessment and Testing: </b>Conducting security threats, auditing softwares, and looking for vulnerabilities, like regularly auditing payroll.</li>
  <li><b>Security Operations: </b>Conducting security investigations and implementing preventative measures.</li>
  <li><b>Software Development Security: </b>Making sure that the development team is following secure coding practices for the software.</li>
</ul>
`}]},{title:"Password Attack",paragraphs:[{text:"Attempt to access password-secured devices. Two types of such attacks are the <b>Brute Force</b> and the <b>Rainbow Table</b>. Such attacks fall under <b>Communication and Network Security Domain</b>",has_code_snippet:!1}]},{title:"Physical Attack",paragraphs:[{text:"Attacks that not only impact the digital software, but also the physical hard-drive. Like Malicious USB stick. Such attacks come under <b>Asset Security Domain</b>.",has_code_snippet:!1}]},{title:"Supply-Chain Attack",paragraphs:[{text:"Such an attack targets different aspects of a whole system where vulnerability can be exploited, ranging from devices, to third party softwares to applications. Such an attack falls under many domains.",has_code_snippet:!1}]},{title:"Cryptographic Attacks",paragraphs:[{text:"Cryptographic Attacks affect the forms of communications between sender and intended recipient. Some types are <b>Birthday</b>, <b>Collision</b> and <b>Downgrade</b>. These Attacks come under the domain of <b>Communication and Network Security</b>.",has_code_snippet:!1}]},{title:"Threat Actors and their types",paragraphs:[{text:"Any person or group that presents a security risk is a Threat actors. Some of the types are:",has_code_snippet:!1},{text:`<ul class="list-inside list-disc">
  <li><b>Advanced Persistent Threats</b> are those threat actors that have a lot of expertise in their domain and stay for longer periods of time for more benefit.</li>
  <li><b>Insider Threats</b> usually use their personal authorized roles for their own benefit and corruption.</li>
  <li><b>Hacktivists</b> are usually driven by a political agenda and use it for their own purpose.</li>
</ul>
`,has_code_snippet:!1}]},{title:"Hackers and Types",paragraphs:[{text:"Hacker is someone that uses computer to access the networks and other assets. Types of hackers are:",has_code_snippet:!1},{text:`<ul class="list-inside list-disc">
  <li><b>Authorized Hackers</b> are ethical hackers that are allowed to track and fix vulnerabilities.</li>
  <li><b>Semiauthorized Hackers</b> are meant to only diagnose the vulnerabilities and not fix them.</li>
  <li><b>Unauthorized Hackers</b> use their expertise to exploit vulnerabilities</li>
</ul>
`}]},{title:"CIA Triad",paragraphs:[{text:"The CIA (Confidentiality, Integrity and Availability) Triad is the model that helps inform organizations consider risk when setting up system and security policies.",has_code_snippet:!1}]},{title:"Security Frameworks",paragraphs:[{text:"Security frameworks are guidelines for data protection and privacy. Frameworks involve setting up guidelines and security goals, implementing security goals",has_code_snippet:!1},{text:"The National University of Standards and Technology (NIST) has produced some frameworks like NIST-CSF (Cybersecurity Framework) and NIST-RMF (Risk Management Framework) and many others.",has_code_snippet:!1},{text:"Some other regulations and controls are",has_code_snippet:!1},{text:`<ul class="list-inside list-disc">
  <li>Federal Energy Regulatory Comission - North American Reliability Corporation (FERC-NARC)</li>
  <li>Center of Information Security (CIS)</li>
  <li>General Data Protection Regulation (GDPR)</li>
  <li>Payment Card Industry Data Security Standard (PCI DSS)</li>
  and many more.. 
</ul>
`},{title:"SIEM tools",has_code_snippet:!1,text:"SIEM stands for Security Information and Event Management. The SIEM tool are used to capture evidences and logs during an cyber attack."},{title:"Packet Sniffer",has_code_snippet:!1,text:"Packet Sniffer is used to visualize the traffic of data through a medium (like modem)."},{title:"Playbook",has_code_snippet:!1,text:"Playbook is a manual that guides you about the operational action during a cyber attack, like how to respond to an attack. The first type of playbook you might consult is playbook of <b>chain of custody</b>. It is the process of documenting the possession of evidence and control during the lifecycle of an attack. The other major playbook can be <b>protecting and preserving evidence</b>."}]},{title:"Playbook",paragraphs:[{text:"A manual to guide through how to respond in case of an attack. Usually contains the chain of custody to document the evidence during an attack. Playbook can also contain the order of volatility and the procedure to preserve evidence and logs."},{has_code_snippet:!1}]},{title:"Basic Cryptographic Terms",paragraphs:[{text:"<b>Plaintext</b> is unencrypted information. <b>Ciphertext</b> is the result of encryption. <b>Encoding is the process of converting plaintext to ciphertext.</b>"},{has_code_snippet:!1}]},{title:"Penetration Testing",paragraphs:[{text:"The act of participating in a simulated attack that helps identify vulnerabilities in systems, networks, websites, applications and processes."}]},{title:"URI Encode vs URI Encode Component",paragraphs:[{text:"URI Encode assumes that the input is a complete URI that might have some characters that need encoding.",has_code_snippet:!1},{text:"URI will encode everything with special meaning, so you use it for components of URIs",has_code_snippet:!1}]},{title:"SAML",paragraphs:[{text:"SAML stands for Security Assertion Markup Language. It is an XML-based open standard for authentication and authorization data between parties, typically between identity provider (IdP) and server provider (SP).",has_code_snippet:!1}]}]},{title:"Operating Systems",notes:[{title:"Process",paragraphs:[{text:"A process is basically a program in execution. When a program is loaded into the memory, it becomes a process and has its own stack, heap, data and text.",has_code_snippet:!1}]},{title:"Routine",paragraphs:[{text:"A routine is a sequence of code that is meant to be called and run repeatedly during the execution of a program. It can be a part of many processes.",has_code_snippet:!1}]},{title:"Endianness",paragraphs:[{text:"(Came up with the concept when learning about processors and how they store data, when sockets communicate and bytes (packets) are coming in.)",has_code_snippet:!1},{text:"If we have a 32 bit-value in hexadecimal (0x00ffee2a) to store in 4 2-byte memory allocations, we can store it as 00|ff|ee||2a. This would be called Big Endian.",has_code_snippet:!1},{text:"On the other hand, if we store this value in the reverse order, that is |2a|ee|ff|00, this would be called little endian.",has_code_snippet:!1}]},{title:"System Bus",paragraphs:[{text:"System Bus provides for communication between processors, main memory and I/O modules.",has_code_snippet:!1}]}]},{title:"Elixir",notes:[{title:"Basics",paragraphs:[{text:`<ul class="list-inside list-disc">
  <li>Elixir is a functional programming language</li>
  <li>The notation for represent a functions is like this <code class="bg-zinc-800">foo/4</code>. The notation means there is a <code class="bg-zinc-800">foo</code> function with 4 arguments.</li>
  <li>Numbers can be written in binary, octal or hex form, like <code class="bg-zinc-800">0x0110, 0o231, 0x1F</code></li>
  <li>Atoms are similar to Ruby symbols. In elixir, the module names (either from erlang or custom) are atoms, so are booleans.</li>
  <li>Integer divison can be done by <code class="bg-zinc-800">div/2</code>, and modulos can be calculated using <code class="bg-zinc-800">rem/2</code> method.</li>
  <li><code class="bg-zinc-800">==</code> compares values, <code class="bg-zinc-800">===</code> compares value and the type.</li>
  <li><code class="bg-zinc-800"><></code> is a concatenation operator.
</ul>
`,has_code_snippet:!1}]},{title:"Collections",paragraphs:[{text:`<ul class="list-inside list-disc">
  <li>Lists in Elixir are linked lists.</li>
  <li><code class="bg-zinc-800">++/2</code> is an operator for list concatenation.</li>
  <li><code class="bg-zinc-800">hd/1</code> method extracts the head of the list.</li>
  <li><code class="bg-zinc-800">tl/1</code> method extracts the tail of the list.</li>
  <li>Tuples are declared like this: <code class="bg-zinc-800">{item1, item2}</code>. Tuples are quite useful when it comes to pattern matching.</li>
  <li>Maps are declared like this: <code class="bg-zinc-800">%{key: value}</code> or <code class="bg-zinc-800">%{key => value}</code></li>
  <li><code class="bg-zinc-800">Map.put/3</code> is used to add a new key-value pair to a map.</li>
</ul>
`,has_code_snippet:!1}]},{title:"Enum",paragraphs:[{text:'Some of the methods provided by <code class="bg-zinc-800">Enum</code> module are as following:',has_code_snippet:!0,code_snippet:{language:"elixir",code:`_map = Enum.map([1, 2, 3], fn(n) -> n + 3 end)
_filter = Enum.filter([1, 2, 3], fn(n) -> n - 1 == 0 end)
_map_two = Enum.map([1, 2, 3], &(&1 + 10))
_reduce = Enum.reduce([1, 2, 3], 6, &(&1 + &2))
`}}]},{title:"Pattern Matching",paragraphs:[{text:'The <code class="bg-zinc-800">=</code> is more of a match operator than an assignment operator. The following code snippet show cases what pattern matching looks like. The pin operator makes the reassignment impossible for a variable.',has_code_snippet:!0,code_snippet:{language:"elixir",code:`{:ok, value} = {:ok, "Successful"} # value = "Successful"
x = 1
1 = x
2 = x # Invalid
^x = 2 # Invalid because of pin operator
`}}]},{title:"Control Structures",paragraphs:[{text:"There are many ways for writing control structures in Elixir.",has_code_snippet:!1},{text:'<code class="bg-zinc-800">if do; else</code> are the if-else statements for elixir. There is <code class="bg-zinc-800">unless</code> too like in Ruby.',has_code_snippet:!0,code_snippet:{language:"elixir",code:`if 1 < 2 do
  x = 30
else
  x = 40
end

x = if 1 < 2, do: 2, else: 2 # Ternary-like one liner for Elixir
`}},{text:'<code class="bg-zinc-800">case</code> allows us to match against multiple patterns. A <code class="bg-zinc-800">case</code> always requires a default (_) case.',has_code_snippet:!0,code_snippet:{language:"elixir",code:`result = 30

x = case {1, 2} do
  {1, ^result} -> result
  _ -> 3
end

IO.puts x # 3
`}},{text:'<code class="bg-zinc-800">cond</code> is a more verbose way to return value based on the given conditions. It is different from <code class="bg-zinc-800">case</code> because <code class="bg-zinc-800">case</code> uses pattern matching while <code class="bg-zinc-800">cond</code> checks multiple conditions (like if, else if, ... else).',has_code_snippet:!0,code_snippet:{language:"elixir",code:`x = cond do
  1 < 2 -> 3
  true -> 4
end
`}}]},{title:"Functions",paragraphs:[{text:"Elixir has anonymous functions. They can be declared with something like this:",has_code_snippet:!0,code_snippet:{language:"elixir",code:`sum = &(&1 + &2)
sum.(1, 2) # 3

diff = fn(a, b) -> a - b end
diff.(1, 2) # -1
`}},{text:`<ul class="list-disc list-inside">
  <li>Named functions are declared using the <code class="bg-zinc-800">def</code> keyword with a <code class="bg-zinc-800">do</code> block.</li>
  <li>To create a private function for a module, <code class="bg-zinc-800">defp</code> keyword is for the module.</li>
  <li>
    Pattern matching happens for the arity (arguments) of the functions too. Functions can be polymorphic too based on the number of arguments,
    and using the guards (with the <code class="bg-zinc-800">when</code> keyword.)
  </li>
  <li>Default arguments can be passed using <code class="bg-zinc-800">//</code></li>
</ul>
`,has_code_snippet:!0,code_snippet:{language:"elixir",code:`defmodule Foos do

  # Named argument
  def hello() do
    IO.puts "Hello"
  end

  # Pattern Matching on arguments
  def pattern_boi(%{name: person_name}) do
    person_name
  end

  # One-Liner
  def hello_two(), do: 0

  # Polymorphic
  def poly() do
    1
  end

  def poly(one) do
    2
  end

  # With Guards
  def poly_guard(n) when is_integer(n) do
    n
  end

  def poly_guard(n) when is_float(n) do
    n + 1.0
  end

  # Default Arguments
  def poly_default(n \\\\ 10) do
    n + 32
  end

  # Private Function
  defp hello_private() do
    IO.puts "Private Hello"
  end
end
`}}]},{title:"Pipe Operator",paragraphs:[{text:'The pipe operator <code class="bg-zinc-800">|></code> allows to link multiple functions step-by-step cleanly.',has_code_snippet:!0,code_snippet:{language:"elixir",code:`x = [1, 2, 3, 4, 5, 6]
      |> Enum.filter(&(rem(&1, 2) == 0))
      |> Enum.map(fn(n) -> n*2 end)
`}}]},{title:"Modules",paragraphs:[{text:`<ul class="list-disc list-inside">
  Elixir has modules that allow you to group functions within a module cleanly. Modules are declared using the <code class="bg-zinc-800">defmodule</code> keyword.
  <li><code class="bg-zinc-800">defstruct</code> allows us to create structures in a module. These structures are special maps and are mainly used within modules (same or the other).</li>
  <li><code class="bg-zinc-800">@derive</code> feature allows to hide certain keys of a structure to keep it private.</li>
  <li>Module attributes are declared using <code class="bg-zinc-800">@attribute</code>. These are basically constants.</li>
</ul>
`,has_code_snippet:!0,code_snippet:{language:"elixir",code:`defmodule Person.Head do
  # Now, we can use Person.Employee as Employee only.
  @greeting "Hello Boy"

  # Structure for modules
  @derive {Inspect, only: [:name]}
  defstruct name: "Edgar Kalou", age: 32

  def say, do: Person.Employee.say_hello
  def say_greeting, do: "#{@greeting} World!"

  def lumps_boy, do: %Person.Head{name: "Phelps"}
end
`}},{text:`<ul class="list-disc list-inside">
  <li>The <code class="bg-zinc-800">alias</code> keyword allows us to namespace modules</li>
  <li><code class="bg-zinc-800">require</code> allows to use macros from a module.</li>
  <li>With the use of <code class="bg-zinc-800">use</code>, <code class="bg-zinc-800">quote</code> and <code class="bg-zinc-800">unquote</code>, we can extend and generate cool modules via meta-programming.</li>
</ul>
`,has_code_snippet:!0,code_snippet:{language:"elixir",code:`import List, only: [last: 1]
require List

defmodule BigBrain do
  defmacro __using__(opts) do
    attributes = Keyword.get(opts, :attributes, [])

    quote do
      def enlist_attributes, do: Enum.each(unquote(attributes), &(IO.puts &1))
    end
  end
end

defmodule MyAttribute do
  use BigBrain, attributes: [:name, :age]
end
`}}]},{title:"Sigils",paragraphs:[{text:`<ul class="list-disc list-inside">
  Sigils allow us to display or store data in a more verbose way. The capital ones do not allow string interpolation while smaller ones do.
  <li><code class="bg-zinc-800">~c</code> are used for character list.</li>
  <li><code class="bg-zinc-800">~r</code> is for regular expressions.</li>
  <li><code class="bg-zinc-800">~s</code> is for strings.</li>
  <li><code class="bg-zinc-800">~W</code> is for word lists.</li>
</ul>
`,has_code_snippet:!1}]},{title:"Documentation",paragraphs:[{text:'<code class="bg-zinc-800">#</code> is for inline comments. <code class="bg-zinc-800">@doc</code> is for functional level documentation. <code class="bg-zinc-800">@moduledoc</code> is for module level documentation.',has_code_snippet:!1}]},{title:"Comprehension",paragraphs:[{text:'The <code class="bg-zinc-800">for</code> keyword with <code class="bg-zinc-800"><-</code> is used for list comprehension.',has_code_snippet:!0,code_snippet:{language:"elixir",code:`list = for x <- [1, 2, 3], do: x*x

d = %{"a" => "b", "c" => "d"}
d = for {k, v} <- d, do: {k, v}
`}}]},{title:"Strings and Characters",paragraphs:[{text:`<ul class="list-inside list-disc">
  <li>Anything between <<>> shows that it is a sequence of bytes.</li>
  <li>String is declared with double quotes while char list uses single quotes.</li>
  <li>Strings are represented with a sequence of bytes while char list is array of characters.</li>
  <li>Each character in char is Unicode code point of a character while in binary, the codepoints are encoded as UTF-8.</li>
  <li>Primarily, strings should be used. Charlists are needed for support for erlang modules mainly.</li>
  <li><code class="bg-zinc-800">?</code> can give us the code point of a character</li>
</ul>
`,has_code_snippet:!0,code_snippet:{language:"elixir",code:`string = "hełło" # <<104, 101, 197, 130, 197, 130, 111>>
# Because string is UTF-8, the 255+ characters are translated with two separate bytes.
# This has happened for ł

charlist = 'hełło' #[104, 101, 322, 322, 111]
# Meanwhile for charlist, this is not needed, as they are unicodes with two or more than two bytes designated.

# 322 is ł. For string, it is encoded in two different UTF-8 bytes, but not in charlist.

?Z # 90
`}},{text:`<ul class="list-inside list-disc">
  <li>Codepoints are characters that take one or more bytes. <code class="bg-zinc-800">String.codepoints</code> will split a 'heavy' character (that uses multiple bytes) into its composite bytes.</li>
  <li>Graphemes combine the bytes into a single character. <code class="bg-zinc-800">String.graphemes</code> is for this job.</li>
  <li>The unicode characters can be written in a string using <code class="bg-zinc-800">\\uXXXX</code> keyword.</li>
</ul>
`,has_code_snippet:!0,code_snippet:{language:"elixir",code:`string = "\\u0061\\u0301"

IO.inspect String.codepoints(string) # ["a", "́"]
IO.inspect String.graphemes(string) # ["á"]
`}}]}]},{title:"PostgreSQL",notes:[{title:"Interpret database links",paragraphs:[{text:`A database can look like this:
<code class="bg-zinc-800">DATABASE_URL=postgresql://username:password@host/database-name</code>
`,has_code_snippet:!1}]}]},{title:"Node",notes:[{title:"npm vs npx",paragraphs:[{text:'<code class="bg-zinc-800">npm</code> is used to install packages.',has_code_snippet:!1},{text:'<code class="bg-zinc-800">npx</code> is used to execute packages.',has_code_snippet:!1}]}]}];function qe(){const s=Ue.sort((t,a)=>t.title>a.title);return e.jsxs("div",{className:"flex flex-col items-center pb-6",children:[e.jsx(b,{}),e.jsx(j,{title:"Notes",heroCaption:"This page has some notes, tips and some resources that I learnt about on my way."}),e.jsx("div",{className:"w-full md:w-3/4 flex flex-col gap-2.5",children:s.map((t,a)=>e.jsx(Fe,{title:t.title,notes:t.notes},a))}),e.jsx(y,{})]})}function He(){return e.jsx("div",{children:"Coming Soon."})}const v=[{identifier:"os-william-stallings",tags:["Operating Systems","Book Review","Computer Science"],categories:["Operating Systems","Book Reviews"],title:"Book Review: Operating Systems by William Stallings",date:"23rd June, 2023.",cover:!1}];function Ve(){return console.log(v),e.jsx("ul",{children:v.map(({identifier:s,date:t,title:a})=>e.jsx("li",{children:e.jsxs(I,{to:`/blog/${s}`,children:[a,", ",t]})},s))})}const $e=async s=>v.find(({identifier:t})=>t===s),We=async s=>{const t=`/sadmadlad/src/assets/blogs/${s}.md`,a=await V(()=>import(t),[]);return await(await fetch(a.default)).text()},Ge=async s=>await $e(s)===void 0?{blogFound:!1,blog:void 0}:{blogFound:!0,blog:await We(s)};function Je(){const{scrollYProgress:s}=D(),t=F(s,{stiffness:100,damping:30,restDelta:.001}),{identifier:a}=A(),[o,n]=l.useState(!1),[i,r]=l.useState("");return l.useEffect(()=>{(async p=>{const{blogFound:d,blog:g}=await Ge(p);d&&r(g),n(d)})(a)},[a]),e.jsx(e.Fragment,{children:o?e.jsxs("article",{className:"markdown",children:[e.jsx(U,{rehypePlugins:[q],remarkPlugins:[H],children:i,components:{code({node:x,inline:p,className:d,children:g,...S}){const z=/language-(\w+)/.exec(d||"");return!p&&z?e.jsx(k,{...S,children:String(g).replace(/\n$/,""),style:P,language:z[1]}):e.jsx("code",{...S,className:d,children:g})}}}),e.jsx(c.div,{className:"bg-accent h-2 w-full fixed bottom-20 text-center",style:{scaleX:t}})]}):e.jsx("div",{children:"Not Found"})})}function Xe(){const s=N();return e.jsx(m,{mode:"wait",initial:!1,children:e.jsxs(B,{location:s,children:[e.jsx(h,{path:"/",element:e.jsx(ze,{})}),e.jsx(h,{path:"/diary",element:e.jsx(Be,{})}),e.jsx(h,{path:"/command-lines",element:e.jsx(Oe,{})}),e.jsx(h,{path:"/notes",element:e.jsx(qe,{})}),e.jsx(h,{path:"/projects",element:e.jsx(He,{})}),e.jsx(h,{path:"/blogs",element:e.jsx(Ve,{})}),e.jsx(h,{path:"/blog/:identifier",element:e.jsx(Je,{})})]},s.pathname)})}function Ye(){return e.jsx(M,{basename:"/sadmadlad",children:e.jsx(Xe,{})})}_.createRoot(document.getElementById("root")).render(e.jsx(L.StrictMode,{children:e.jsx(Ye,{})}));
