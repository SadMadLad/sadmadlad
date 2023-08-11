import{r,a as W,L as R,u as N,b as G,c as T,d as h,B as Z,R as E}from"./react-e182c055.js";import{u as C,m as c,A as m,a as L,b as A,R as F,r as Y,c as H}from"./fancy-b3ef572f.js";import{S as v,_ as P}from"./syntax-930cf2fd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();var S={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M=r,J=Symbol.for("react.element"),V=Symbol.for("react.fragment"),X=Object.prototype.hasOwnProperty,O=M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U={key:!0,ref:!0,__self:!0,__source:!0};function B(s,t,n){var i,a={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(i in t)X.call(t,i)&&!U.hasOwnProperty(i)&&(a[i]=t[i]);if(s&&s.defaultProps)for(i in t=s.defaultProps,t)a[i]===void 0&&(a[i]=t[i]);return{$$typeof:J,type:s,key:o,ref:l,props:a,_owner:O.current}}f.Fragment=V;f.jsx=B;f.jsxs=B;S.exports=f;var e=S.exports,w={},I=W;w.createRoot=I.createRoot,w.hydrateRoot=I.hydrateRoot;function D(){const s=[{route:"/projects",name:"Projects"},{route:"/diary",name:"Diary"},{route:"/notes",name:"Notes"},{route:"/command-lines",name:"Command Lines"},{route:"/blogs",name:"Blogs"}];return e.jsxs("main",{className:"my-20 flex flex-col gap-10 items-center px-8",children:[e.jsx("h6",{className:"text-2xl font-black",children:"Hi! I am Saad"}),e.jsx("p",{className:"text-2xl sm:text-4xl font-extralight text-center w-full md:w-2/3",children:"I am a Software Developer with love for Machine Learning and Data Science."}),e.jsx("div",{className:"flex flex-row flex-wrap justify-center gap-2",children:s.map(t=>e.jsx(R,{to:t.route,className:"shadow-xl border border-opacity-25 border-lite font-serif bg-darklite text-2xl px-6 py-4 hover:bg-lite hover:text-darklite duration-300 transition-colors",children:t.name},t.route))})]})}const K="/sadmadlad/technologies/JavaScript.png",q="/sadmadlad/technologies/Python.png",Q="/sadmadlad/technologies/Html.png",$="/sadmadlad/technologies/Cpp.png",ee="/sadmadlad/technologies/Ruby.png",te="/sadmadlad/technologies/Css.png";function se(){return e.jsxs("section",{className:"px-8 bg-darklite min-w-full py-14 flex gap-10 lg:justify-center overflow-x-auto no-scrollbar",children:[e.jsx("img",{src:K}),e.jsx("img",{src:q}),e.jsx("img",{src:$}),e.jsx("img",{src:ee}),e.jsx("img",{src:Q}),e.jsx("img",{src:te})]})}function ae({heading:s,leadingIcon:t,description:n,techStacks:i}){return e.jsxs("li",{className:"bg-darklite border-b-4 border-b-black border-opacity-40 p-8 flex flex-col gap-8 justify-between",children:[e.jsxs("div",{className:"flex flex-col items-center gap-6 w-48",children:[e.jsx("h5",{className:"text-4xl font-serif",children:s}),e.jsx("img",{src:t}),e.jsx("p",{className:"text-center",children:n})]}),e.jsx("ul",{className:"flex justify-center gap-3",children:i.map(a=>e.jsx("img",{src:a},a))})]})}const ne="/sadmadlad/technologies/Frontend.png",oe="/sadmadlad/technologies/Backend.png",ie="/sadmadlad/technologies/ML.png",le="/sadmadlad/technologies/Miscellaneous.png",re="/sadmadlad/technologies/React.png",ce="/sadmadlad/technologies/Vite.png",de="/sadmadlad/technologies/Tailwind.png",he="/sadmadlad/technologies/Hotwired.png",pe="/sadmadlad/technologies/NodeJS.png",ue="/sadmadlad/technologies/PostgreSQL.png",me="/sadmadlad/technologies/MongoDB.png",ge="/sadmadlad/technologies/RubyOnRails.png",fe="/sadmadlad/technologies/TensorFlow.png",be="/sadmadlad/technologies/PyTorch.png",xe="/sadmadlad/technologies/Pandas.png",ye="/sadmadlad/technologies/Figma.png",we="/sadmadlad/technologies/Rust.png",ve="/sadmadlad/technologies/Unity.png",_e="/sadmadlad/technologies/BeautifulSoup4.png";function je(){const s=[{heading:"Frontend",leadingIcon:ne,description:"Experienced with many frontend technologies, ranging from CSS frameworks to JavaScript ones.",techStacks:[re,ce,de,he]},{heading:"Backend",leadingIcon:oe,description:"Have worked with different databases with different backend frameworks.",techStacks:[pe,ue,me,ge]},{heading:"ML",leadingIcon:ie,description:"Delved in the areas of machine learning and worked with related frameworks. Created NNs, Classifiers, GANs, Autoencoders etc.",techStacks:[fe,be,xe]},{heading:"Miscellaneous",leadingIcon:le,description:"Web Scraping as a hobby. Always enjoy and eager to learn new frameworks and programming languages.",techStacks:[ye,we,ve,_e]}];return e.jsxs(e.Fragment,{children:[e.jsx("h6",{className:"mt-20 text-2xl font-black text-center w-full md:w-2/3 px-4",children:"Versatile skill set in different domains, and always interested in expanding it even more."}),e.jsx("section",{className:"px-8 mb-20 mt-16 w-full flex justify-start lg:justify-center gap-8 overflow-x-auto no-scrollbar",children:s.map(({heading:t,leadingIcon:n,description:i,techStacks:a})=>e.jsx(ae,{heading:t,leadingIcon:n,description:i,techStacks:a},t))})]})}function b(){return e.jsxs("header",{className:"mt-4 sm:mt-10 w-full lg:w-3/4 flex justify-between font-serif items-end border-b border-b-lite pb-3 sm:pb-6 px-3",children:[e.jsx("h1",{className:"text-xl sm:text-2xl lg:text-4xl",children:"Muhammad Saad Azam"}),e.jsxs("nav",{className:"hidden sm:flex gap-6 lg:gap-10 text-xl lg:text-2xl",children:[e.jsx("a",{href:"https://www.linkedin.com/in/saad-azam-9113011b8/",children:"LinkedIn"}),e.jsx("a",{href:"https://github.com/SadMadLad",children:"GitHub"}),e.jsx("a",{href:"https://www.kaggle.com/sadmadlad",children:"Kaggle"})]})]})}function x(){const s=C();return e.jsx(c.div,{className:"fixed w-full h-full top-0 bottom-0 right-0 bg-white",initial:{scaleX:1},animate:{scaleX:0,transition:{duration:1,ease:"circOut"}},exit:{scaleX:1,transition:{duration:1,ease:"circIn"}},style:{originX:s?0:1}})}function ke(){return e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(b,{}),e.jsx(D,{}),e.jsx(se,{}),e.jsx(je,{}),e.jsx(x,{})]})}const z={"hljs-comment":{color:"#B6B18B"},"hljs-quote":{color:"#B6B18B"},"hljs-variable":{color:"#EB3C54"},"hljs-template-variable":{color:"#EB3C54"},"hljs-tag":{color:"#EB3C54"},"hljs-name":{color:"#EB3C54"},"hljs-selector-id":{color:"#EB3C54"},"hljs-selector-class":{color:"#EB3C54"},"hljs-regexp":{color:"#EB3C54"},"hljs-deletion":{color:"#EB3C54"},"hljs-number":{color:"#E7CE56"},"hljs-built_in":{color:"#E7CE56"},"hljs-builtin-name":{color:"#E7CE56"},"hljs-literal":{color:"#E7CE56"},"hljs-type":{color:"#E7CE56"},"hljs-params":{color:"#E7CE56"},"hljs-meta":{color:"#E7CE56"},"hljs-link":{color:"#E7CE56"},"hljs-attribute":{color:"#EE7C2B"},"hljs-string":{color:"#4FB4D7"},"hljs-symbol":{color:"#4FB4D7"},"hljs-bullet":{color:"#4FB4D7"},"hljs-addition":{color:"#4FB4D7"},"hljs-title":{color:"#78BB65"},"hljs-section":{color:"#78BB65"},"hljs-keyword":{color:"#B45EA4"},"hljs-selector-tag":{color:"#B45EA4"},hljs:{display:"block",overflowX:"auto",background:"#1C1D21",color:"#c0c5ce",padding:"0.5em"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}},Ie={hljs:{display:"block",overflowX:"auto",padding:"0.5em",color:"#abb2bf",background:"#282c34"},"hljs-keyword":{color:"#F92672"},"hljs-operator":{color:"#F92672"},"hljs-pattern-match":{color:"#F92672"},"hljs-pattern-match .hljs-constructor":{color:"#61aeee"},"hljs-function":{color:"#61aeee"},"hljs-function .hljs-params":{color:"#A6E22E"},"hljs-function .hljs-params .hljs-typing":{color:"#FD971F"},"hljs-module-access .hljs-module":{color:"#7e57c2"},"hljs-constructor":{color:"#e2b93d"},"hljs-constructor .hljs-string":{color:"#9CCC65"},"hljs-comment":{color:"#b18eb1",fontStyle:"italic"},"hljs-quote":{color:"#b18eb1",fontStyle:"italic"},"hljs-doctag":{color:"#c678dd"},"hljs-formula":{color:"#c678dd"},"hljs-section":{color:"#e06c75"},"hljs-name":{color:"#e06c75"},"hljs-selector-tag":{color:"#e06c75"},"hljs-deletion":{color:"#e06c75"},"hljs-subst":{color:"#e06c75"},"hljs-literal":{color:"#56b6c2"},"hljs-string":{color:"#98c379"},"hljs-regexp":{color:"#98c379"},"hljs-addition":{color:"#98c379"},"hljs-attribute":{color:"#98c379"},"hljs-meta-string":{color:"#98c379"},"hljs-built_in":{color:"#e6c07b"},"hljs-class .hljs-title":{color:"#e6c07b"},"hljs-attr":{color:"#d19a66"},"hljs-variable":{color:"#d19a66"},"hljs-template-variable":{color:"#d19a66"},"hljs-type":{color:"#d19a66"},"hljs-selector-class":{color:"#d19a66"},"hljs-selector-attr":{color:"#d19a66"},"hljs-selector-pseudo":{color:"#d19a66"},"hljs-number":{color:"#d19a66"},"hljs-symbol":{color:"#61aeee"},"hljs-bullet":{color:"#61aeee"},"hljs-link":{color:"#61aeee",textDecoration:"underline"},"hljs-meta":{color:"#61aeee"},"hljs-selector-id":{color:"#61aeee"},"hljs-title":{color:"#61aeee"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}};function Ce({codeSnippet:s}){return e.jsx("div",{className:"my-2.5",children:e.jsx(v,{wrapLines:!0,style:z,language:s.language,children:s.code})})}function u({paragraph:s}){const{has_code_snippet:t,text:n,code_snippet:i}=s;return e.jsxs("div",{children:[e.jsx("p",{dangerouslySetInnerHTML:{__html:n}}),t&&e.jsx(Ce,{codeSnippet:i})]})}function Se({solution:s}){const{has_intro:t,has_outro:n,steps:i}=s;return e.jsxs("div",{children:[t&&e.jsx(u,{paragraph:s.intro}),e.jsx("ul",{className:"list-decimal m-2",children:i.map((a,o)=>e.jsx("li",{children:e.jsx(u,{paragraph:a})},o))}),n&&e.jsx(u,{paragraph:s.outro})]})}function Be({title:s,titleId:t,...n},i){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},n),s?r.createElement("title",{id:t},s):null,r.createElement("path",{fillRule:"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",clipRule:"evenodd"}))}const ze=r.forwardRef(Be),y=ze;function We({title:s,type:t,updatedOn:n,description:i,solution:a}){const[o,l]=r.useState(!1),d=p=>{const g={Bug:"bg-red-600",Feature:"bg-green-600","Small Issue":"bg-yellow-600"};return e.jsx("button",{className:`${g[p]} px-1.5 py-0.5 rounded font-semibold`,children:p})};return e.jsxs(c.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"px-2",children:[e.jsxs("div",{className:"flex flex-row gap-2 items-center border-b border-b-lite",children:[e.jsx("h5",{className:"font-bold text-lg",children:s}),e.jsx(c.div,{animate:{rotate:o?180:0,cursor:"pointer"},onClick:()=>l(!o),children:e.jsx(y,{className:"w-6 h-6"})})]}),e.jsx(m,{children:o&&e.jsxs(c.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"flex flex-col gap-2.5 py-2",children:[e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsx("span",{children:d(t)}),e.jsxs("span",{children:[e.jsx("b",{children:"Updated On: "}),e.jsx("span",{children:n})]})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"font-semibold",children:"Description:"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:i}})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"font-semibold",children:"Solution: "}),a.has_steps?e.jsx(Se,{solution:a}):e.jsx(u,{paragraph:a})]})]})})]})}function Re({title:s,entries:t}){const n=t.sort((o,l)=>o.title>l.title),[i,a]=r.useState(!1);return e.jsxs("section",{className:"mt-2.5 px-2 md:px-0",children:[e.jsxs("div",{className:"flex flex-row gap-2 items-center border-b-2 border-b-lite",children:[e.jsx("h4",{className:"font-serif font-bold text-2xl",children:s}),e.jsx(c.div,{animate:{rotate:i?180:0,cursor:"pointer"},onClick:()=>a(!i),children:e.jsx(y,{className:"w-8 h-8"})})]}),e.jsx(m,{children:i&&n.map((o,l)=>e.jsx(We,{title:o.title,type:o.type,updatedOn:o.updated_on,description:o.description,solution:o.solution},l))})]})}const Ne=[{title:"React",entries:[{title:"Animated Page Transitions",type:"Feature",updated_on:"4th August, 2023.",description:'Wanted to have cook framer motion page transitions from one to the other. Like <a class="underline" href="https://codesandbox.io/s/framer-motion-screen-wipe-page-transitions-with-react-router-6-yo38bu?from-embed=&file=/src/template/Gallery.tsx:1296-1334">this</a>',solution:{has_steps:!0,has_intro:!0,has_outro:!1,intro:{has_code_snippet:!1,text:'The page transitions using framer motion requires use of <code class="bg-zinc-800">useLocation</code>, <code class="bg-zinc-800">AnimatePresence</code>, <code class="bg-zinc-800">useIsPresent</code> along with the <code class="bg-zinc-800">react-router-dom</code>'},steps:[{text:`Create a component which wraps all the <code class="bg-zinc-800">Routes</code> (and the <code class="bg-zinc-800">Switch</code> or <code class="bg-zinc-800">Router</code> alongwith.)
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
`}},{text:`Now, create a route, a method in your controller and a view to verify the token and set the password. You can check the <code class="bg-zinc-800">#update</code> action of Devise's <code class="bg-zinc-800">PasswordsController</code> to see how you can achieve this.</li>`,has_code_snippet:!1}]}},{title:"Link tags within Turbo frames that need to go to a new page",type:"Bug",updated_on:"17 July, 2023",description:'Faced this issue when I had a link to the activity page within a turbo frame. On clicking, "Content Missing" will pop up. The id of turbo frame was "activities"',solution:{has_steps:!1,has_code_snippet:!0,text:'On clicking the link within the frame, the frame expects to fetch a <code class="bg-zinc-800">turbo-frame</code> from the next ongoing link. In my case, clicking the link directly would expect the linked page to have a frame with the id of "activities". But I wanted to fetch the whole page, not just a frame of it. In order to make the link properly work, I needed to add the attribute <code class="bg-zinc-800">data-turbo-frame="_top"</code> to target the whole page. This made the link work properly.',code_snippet:{language:"erb",code:`<%= link_to "Checkout the Activity", activity_path(activity), data: { turbo_frame: '_top' } %>`}}}]},{title:"Elixir",entries:[{title:"Print list in Elixir",type:"Small Issue",updated_on:"23 July, 2023",description:'I could not find a good way to print a linked list. <code class="bg-zinc-800">IO.puts</code> could not do the deed.',solution:{has_steps:!1,has_code_snippet:!1,text:'<code class="bg-zinc-800">IO.inspect</code> was what I needed.'}}]},{title:"Ruby",entries:[{title:"Safe Navigation Operator (&.) on Hash.",type:"Small Issue",updated_on:"2 August, 2023",description:`I tried to use the &. operator on a hash for null check on key value pair to fetch the required value, but couldn't. I tried <code class="bg-zinc-800">my_hash['response']&.['call']</code> but this was not the way to go.`,solution:{has_steps:!1,has_code_snippet:!1,text:`The syntax needed to solve this was something like this: <code class="bg-zinc-800">my_hash&.[]('response')&.[]('call')</code>. Ugly syntax, but does the job.
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
`}}}]}];function _({title:s,heroCaption:t}){return e.jsxs("section",{className:"flex flex-col gap-4 items-center my-20",children:[e.jsx("h1",{className:"font-black font-serif text-4xl",children:s}),e.jsx("p",{className:"text-xl text-center font-light w-full md:w-2/3",children:t})]})}function Ge(){const s=Ne.sort((t,n)=>t.title>n.title);return e.jsxs("div",{className:"flex flex-col items-center pb-6",children:[e.jsx(b,{}),e.jsx(_,{title:"Diary",heroCaption:"This diary includes some errors and bugs I encountered and how I fixed them, along with some code snippets."}),e.jsx("div",{className:"w-full md:w-3/4",children:s.map((t,n)=>e.jsx(Re,{title:t.title,entries:t.entries},n))}),e.jsx(x,{})]})}const Te=[{command:"cat <path/to/filename>",description:"Open file in terminal."},{command:"sudo fuser -k <port>/<protocol>",description:'Kill a web process running on the specific port. Where port is the <code class="bg-zinc-800">port</code> on which the process is running, and the <code class="bg-zinc-800">protocol</code> is mostly <code class="bg-zinc-800">tcp</code> or <code class="bg-zinc-800">udp</code>.'},{command:"cargo new <project-name> --vcs=git",description:"Creates a new rust project with the given name. The --vcs flag allows to use Version Control System optionally."},{command:"chmod +x <file-name>",description:'<code class="bg-zinc-800">chmod</code> is short for Change Mode. It allows us to change the access of file permissions and directiories. The <code class="bg-zinc-800">+x</code> flag allows that file to be executable.'},{command:"man <command-name>",description:"Displays a manual related to the command in terminal."},{command:"script <file-name>",description:'Starts a script in terminal. Now whatever is written on the terminal, will be saved in the <code class="bg-zinc-800">file-name</code> after the <code class="bg-zinc-800">exit</code> command.'},{command:"mix new <project-name>",description:"Initializes a new mix project with the given project name."},{command:"mix deps.get",description:"Gets all out of date dependencies, i.e. dependencies that are not available or have an invalid lock."},{command:"mix compile",description:"The main entry point for the project. It runs the compilers in the project and returns a tuple with the compilation status and a list of diagnostics. Before compiling the code, it runs all the dependencies and performs a series of checks."},{command:"cargo build",description:'Builds the project, creates an executable file under <code class="bg-zinc-800">./target/debug/project-name</code>. Also, creates a <code span="bg-zinc-800">Cargo.toml</code> file to keep track of dependencies.'},{command:"cargo run",description:"Builds and executes the code in one go."},{command:"cargo check",description:"Does not execute the code but makes sure that the code compiles."},{command:"cargo build --release",description:"Compiles and optimizes the code and prepares to release the product."}];function Ze(){const s=Te.sort((t,n)=>t.command>n.command);return e.jsx("main",{className:"px-5",children:e.jsx("ul",{className:"list-disc flex flex-col gap-4",children:s.map((t,n)=>e.jsxs("li",{children:[e.jsx(v,{wrapLines:!0,style:Ie,language:"vim",children:t.command}),e.jsx("p",{className:"mt-1",dangerouslySetInnerHTML:{__html:t.description}})]},n))})})}function Ee(){return e.jsxs("div",{className:"flex flex-col items-center pb-6",children:[e.jsx(b,{}),e.jsx(_,{title:"Command Lines",heroCaption:"Some useful command lines that I learnt on the way"}),e.jsx("div",{className:"w-full md:w-3/4",children:e.jsx(Ze,{})}),e.jsx(x,{})]})}function Le({title:s,paragraphs:t}){const[n,i]=r.useState(!1);return e.jsxs(c.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"px-2",children:[e.jsxs("div",{className:"flex flex-row gap-2 items-center border-b border-b-lite",children:[e.jsx("h5",{className:"font-bold text-lg",children:s}),e.jsx(c.div,{animate:{rotate:n?180:0,cursor:"pointer"},onClick:()=>i(!n),children:e.jsx(y,{className:"w-6 h-6"})})]}),e.jsx(m,{children:n&&e.jsx(c.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"flex flex-col gap-2.5 py-2",children:t.map((a,o)=>e.jsx(u,{paragraph:a},o))})})]})}function Ae({title:s,notes:t}){const n=t.sort((o,l)=>o.title>l.title),[i,a]=r.useState(!1);return e.jsxs("section",{className:"px-2 md:px-0",children:[e.jsxs("div",{className:"flex flex-row gap-2 items-center border-b-2 border-b-lite",children:[e.jsx("h4",{className:"font-serif font-bold text-2xl",children:s}),e.jsx(c.div,{animate:{rotate:i?180:0,cursor:"pointer"},onClick:()=>a(!i),children:e.jsx(y,{className:"w-8 h-8"})})]}),e.jsx(m,{children:i&&n.map((o,l)=>e.jsx(Le,{title:o.title,paragraphs:o.paragraphs},l))})]})}const Fe=[{title:"C++",notes:[{title:"Preprocessors",paragraphs:[{text:"Preprocessors in a C++ file are basically commands or files executed before the file does. They start with a #.",has_code_snippet:!1}]},{title:"Header Guards",paragraphs:[{text:"Header Guards ensure us to include our file only once in our file and avoid redeclaration.",has_code_snippet:!1},{text:`There are two ways to define header guards. One is by using <code class="bg-zinc-800"><b>#pragma once</b></code> and the other is <code class="bg-zinc-800"><b>#ifndef, #define, #endif</b></code>. Both of these do the same thing and make sure to include the file only once.
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
`}}]}]},{title:"React",notes:[{title:"useLocation hook in react-router-dom",paragraphs:[{text:`<code class="bg-zinc-800">useLocation</code> is used to fetch the current 'location' of the user. The location of a user is entry in the history stack, which is analogous to page or screen. The location can be used to extensively the URL (like fetching the base path, search, state, key and hash of the page.)`,has_code_snippet:!1}]}]},{title:"Ruby on Rails",notes:[{title:"How do Turbo Frames work seemingly",updated_on:"17 July, 2023",paragraphs:[{text:'On a surface level, turbo frames allow to target certain frames from other or within the same pages. They do this by intercepting the link and targetting the <code class="bg-zinc-800">turbo-frame</code> by its id.',has_code_snippet:!1},{text:"As an example, let's have a search form for users. The forms fetches the users, targets the turbo frame with id of users and shows the users in that frame.",has_code_snippet:!0,code_snippet:{language:"erb",code:`<%= form_with url: users_path, class: 'flex-1', method: :get, data: { turbo_frame: 'users' } do |f| %>
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
`}},{text:'Now, when the search happens, the form targets the frame with the id of "users" and updates the frame accordingly. Quite cool. In a similar manner, we can have a frame on an entirely different page and the form can target that specific frame and fetch the results on the page on which you are staying.',has_code_snippet:!1},{text:`Furthermore, the links within a frame work differently. If a link is clicked with in a frame (let's say, the link takes you to a new page), turbo will intercept the link and try to fetch the frame of the same id from the newer page. The behavior of links can be controlled using different attributes like <code class="bg-zinc-800">data-turbo-frame</code> etc.`}]}]},{title:"Ruby",notes:[{title:"&. operator",paragraphs:[{text:'This operator is called safe navigation operator. It allows to us to have <code class="bg-zinc-800">nil</code> check on the variables before we execute any method (or check for an attribute) for the variable.',has_code_snippet:!0,code_snippet:{language:"ruby",code:`# Both the expressions below behave the same.
@person&.spouse&.name
@person.spouse.name if @person && @person.spouse
`}}]}]},{title:"Rust",notes:[{title:"What is a Macro in Rust?",paragraphs:[{text:'Macros are pieces of code that generate more code. There are usually highlighted with exclamation mark at the end (like <code class="bg-zinc-800">println!</code>). Macros are quite useful when it comes to metaprogramming.',has_code_snippet:!1}]},{title:"What is a cargo?",paragraphs:[{text:"Cargo is a build system and package manager for Rust. It has a TOML file (Tom's Obvious, Minimal Language) to keep track of configuration, version and dependencies. It also helps in debugging, optimizing, and releasing code packages. Checkout the Command Lines page to see some cargo commands.",has_code_snippet:!1}]},{title:"Variables, Constants, Mutability and Shadowing",paragraphs:[{text:'Variables in Rust are declared using <code class="bg-zinc-800">let</code> keyword. By default, all the variables are immutable in Rust, which means their value cannot be changed.',has_code_snippet:!1},{text:'To create a mutable value in Rust, we would need to use the <code class="bg-zinc-800">mut<code>keyword.',has_code_snippet:!1},{text:'Constants in Rust are declared using the <code class="bg-zinc-800">const</code> keyword. Declaration of Constant always requires a type. By convention, the variable name is always capitalized.',has_code_snippet:!1},{text:"Shadowing allows you to override the previous value of the same variable. Basically, it just creates a new variable. An example:",has_code_snippet:!0,code_snippet:{language:"rust",code:`fn main() {
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
`,has_code_snippet:!1}]},{title:"Port Numbers",paragraphs:[{text:"Port Numbers (are 16-bit numbers) are used to identify (along with the transport protocal, TCP and UDP) which process should receive the packet. Kind of like, IP (Internet Protocol) address is the address to the hotel but Port Numbers indicate the room number of the hotel.",has_code_snippet:!1}]}]},{title:"Operating Systems",notes:[{title:"Process",paragraphs:[{text:"A process is basically a program in execution. When a program is loaded into the memory, it becomes a process and has its own stack, heap, data and text.",has_code_snippet:!1}]},{title:"Routine",paragraphs:[{text:"A routine is a sequence of code that is meant to be called and run repeatedly during the execution of a program. It can be a part of many processes.",has_code_snippet:!1}]},{title:"Endianness",paragraphs:[{text:"(Came up with the concept when learning about processors and how they store data, when sockets communicate and bytes (packets) are coming in.)",has_code_snippet:!1},{text:"If we have a 32 bit-value in hexadecimal (0x00ffee2a) to store in 4 2-byte memory allocations, we can store it as 00|ff|ee||2a. This would be called Big Endian.",has_code_snippet:!1},{text:"On the other hand, if we store this value in the reverse order, that is |2a|ee|ff|00, this would be called little endian.",has_code_snippet:!1}]}]},{title:"Elixir",notes:[{title:"Basics",paragraphs:[{text:`<ul class="list-inside list-disc">
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
`,has_code_snippet:!1}]}]}];function Ye(){const s=Fe.sort((t,n)=>t.title>n.title);return e.jsxs("div",{className:"flex flex-col items-center pb-6",children:[e.jsx(b,{}),e.jsx(_,{title:"Notes",heroCaption:"This page has some notes, tips and some resources that I learnt about on my way."}),e.jsx("div",{className:"w-full md:w-3/4 flex flex-col gap-2.5",children:s.map((t,n)=>e.jsx(Ae,{title:t.title,notes:t.notes},n))}),e.jsx(x,{})]})}function He(){return e.jsx("div",{children:"Coming Soon."})}function Pe(){return e.jsx("article",{children:"Coming soon."})}const Me=[{identifier:"gen-stage-data-pipeline",tags:["Elixir","Data","Web Scraping"],category:"Data Science",date:"3rd August, 2023"}],Je=s=>Me.find(({identifier:t})=>t==s),Ve="data:text/markdown;base64,IyBBIGRlbW8gb2YgYHJlYWN0LW1hcmtkb3duYAoKIyMgVGFibGUgb2YgQ29udGVudHMKCiogW0JyYXZvXSgjYnJhdm8pCiogW0FscGhhIEJyYXZvXSgjYWxwaGFfYnJhdm8pCgpgcmVhY3QtbWFya2Rvd25gIGlzIGEgbWFya2Rvd24gY29tcG9uZW50IGZvciBSZWFjdC4KCvCfkYkgQ2hhbmdlcyBhcmUgcmUtcmVuZGVyZWQgYXMgeW91IHR5cGUuCgrwn5GIIFRyeSB3cml0aW5nIHNvbWUgbWFya2Rvd24gb24gdGhlIGxlZnQuCgojIyBPdmVydmlldwoKIVtJbWFnZV0oL3NhZG1hZGxhZC9zcmMvYXNzZXRzL2Jsb2dzL2ltYWdlLmpwZWcpCiogRm9sbG93cyBbQ29tbW9uTWFya10oaHR0cHM6Ly9jb21tb25tYXJrLm9yZykKKiBPcHRpb25hbGx5IGZvbGxvd3MgW0dpdEh1YiBGbGF2b3JlZCBNYXJrZG93bl0oaHR0cHM6Ly9naXRodWIuZ2l0aHViLmNvbS9nZm0vKQoqIFJlbmRlcnMgYWN0dWFsIFJlYWN0IGVsZW1lbnRzIGluc3RlYWQgb2YgdXNpbmcgYGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MYAoqIExldHMgeW91IGRlZmluZSB5b3VyIG93biBjb21wb25lbnRzICh0byByZW5kZXIgYE15SGVhZGluZ2AgaW5zdGVhZCBvZiBgaDFgKQoqIEhhcyBhIGxvdCBvZiBwbHVnaW5zCgojIyBUYWJsZSBvZiBjb250ZW50cwoKSGVyZSBpcyBhbiBleGFtcGxlIG9mIGEgcGx1Z2luIGluIGFjdGlvbgooW2ByZW1hcmstdG9jYF0oaHR0cHM6Ly9naXRodWIuY29tL3JlbWFya2pzL3JlbWFyay10b2MpKS4KVGhpcyBzZWN0aW9uIGlzIHJlcGxhY2VkIGJ5IGFuIGFjdHVhbCB0YWJsZSBvZiBjb250ZW50cy4KCiMgQnJhdm8KCiMjIFN5bnRheCBoaWdobGlnaHRpbmcKCkhlcmUgaXMgYW4gZXhhbXBsZSBvZiBhIHBsdWdpbiB0byBoaWdobGlnaHQgY29kZToKW2ByZWh5cGUtaGlnaGxpZ2h0YF0oaHR0cHM6Ly9naXRodWIuY29tL3JlaHlwZWpzL3JlaHlwZS1oaWdobGlnaHQpLgoKYGBganN4CmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCcKaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbScKaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nCmltcG9ydCByZWh5cGVIaWdobGlnaHQgZnJvbSAncmVoeXBlLWhpZ2hsaWdodCcKClJlYWN0RE9NLnJlbmRlcigKICA8UmVhY3RNYXJrZG93biByZWh5cGVQbHVnaW5zPXtbcmVoeXBlSGlnaGxpZ2h0XX0+eycjIFlvdXIgbWFya2Rvd24gaGVyZSd9PC9SZWFjdE1hcmtkb3duPiwKICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpCikKYGBgCiMgQWxwaGEgQnJhdm8KCmBgYHJ1YnkKY2xhc3MgSGVsbG8gPCBBcHBsaWNhdGlvblJlY29yZAogIGRlZiBpbml0aWFsaXplKHN0cmluZzopCiAgICBAc3RyaW5nID0gc3RyaW5nCiAgZW5kCmVuZApgYGAKCmBgYHJ1YnkKY2xhc3MgSGVsbG8gPCBBcHBsaWNhdGlvblJlY29yZAogIGRlZiBpbml0aWFsaXplKHN0cmluZzopCiAgICBAc3RyaW5nID0gc3RyaW5nCiAgZW5kCmVuZApgYGAKClByZXR0eSBuZWF0LCBlaD8KCiMjIEdpdEh1YiBmbGF2b3JlZCBtYXJrZG93biAoR0ZNKQoKRm9yIEdGTSwgeW91IGNhbiAqYWxzbyogdXNlIGEgcGx1Z2luOgpbYHJlbWFyay1nZm1gXShodHRwczovL2dpdGh1Yi5jb20vcmVtYXJranMvcmVhY3QtbWFya2Rvd24jdXNlKS4KSXQgYWRkcyBzdXBwb3J0IGZvciBHaXRIdWItc3BlY2lmaWMgZXh0ZW5zaW9ucyB0byB0aGUgbGFuZ3VhZ2U6CnRhYmxlcywgc3RyaWtldGhyb3VnaCwgdGFza2xpc3RzLCBhbmQgbGl0ZXJhbCBVUkxzLgoKVGhlc2UgZmVhdHVyZXMgKipkbyBub3Qgd29yayBieSBkZWZhdWx0KiouCvCfkYYgVXNlIHRoZSB0b2dnbGUgYWJvdmUgdG8gYWRkIHRoZSBwbHVnaW4uCgp8IEZlYXR1cmUgICAgfCBTdXBwb3J0ICAgICAgICAgICAgICB8CnwgLS0tLS0tLS0tOiB8IDotLS0tLS0tLS0tLS0tLS0tLS0tIHwKfCBDb21tb25NYXJrIHwgMTAwJSAgICAgICAgICAgICAgICAgfAp8IEdGTSAgICAgICAgfCAxMDAlIHcvIGByZW1hcmstZ2ZtYCB8Cgp+fnN0cmlrZXRocm91Z2h+fgoKKiBbIF0gdGFzayBsaXN0CiogW3hdIGNoZWNrZWQgaXRlbQoKaHR0cHM6Ly9leGFtcGxlLmNvbQoKIyMgSFRNTCBpbiBtYXJrZG93bgoK4pqg77iPIEhUTUwgaW4gbWFya2Rvd24gaXMgcXVpdGUgdW5zYWZlLCBidXQgaWYgeW91IHdhbnQgdG8gc3VwcG9ydCBpdCwgeW91IGNhbgp1c2UgW2ByZWh5cGUtcmF3YF0oaHR0cHM6Ly9naXRodWIuY29tL3JlaHlwZWpzL3JlaHlwZS1yYXcpLgpZb3Ugc2hvdWxkIHByb2JhYmx5IGNvbWJpbmUgaXQgd2l0aApbYHJlaHlwZS1zYW5pdGl6ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWh5cGVqcy9yZWh5cGUtc2FuaXRpemUpLgoKIyMgQ29tcG9uZW50cwoKWW91IGNhbiBwYXNzIGNvbXBvbmVudHMgdG8gY2hhbmdlIHRoaW5nczoKCiMjIE1vcmUgaW5mbz8KCk11Y2ggbW9yZSBpbmZvIGlzIGF2YWlsYWJsZSBpbiB0aGUKW3JlYWRtZSBvbiBHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9yZW1hcmtqcy9yZWFjdC1tYXJrZG93bikhCgoqKioKCkEgY29tcG9uZW50IGJ5IFtFc3BlbiBIb3ZsYW5kc2RhbF0oaHR0cHM6Ly9lc3Blbi5jb2Rlcy8pCg==";function Xe(){const{scrollYProgress:s}=L(),t=A(s,{stiffness:100,damping:30,restDelta:.001});C();const{identifier:n}=N(),[i,a]=r.useState("");return Je(n)===void 0?e.jsx("div",{children:"Not Found"}):(P(()=>import(Ve),[]).then(l=>{fetch(l.default).then(d=>d.text()).then(d=>a(d))}),e.jsxs("article",{className:"markdown",children:[e.jsx(F,{rehypePlugins:[Y],remarkPlugins:[H],children:i,components:{code({node:l,inline:d,className:p,children:g,...j}){const k=/language-(\w+)/.exec(p||"");return!d&&k?e.jsx(v,{...j,children:String(g).replace(/\n$/,""),style:z,language:k[1]}):e.jsx("code",{...j,className:p,children:g})}}}),e.jsx(c.div,{className:"bg-accent h-2 w-full fixed bottom-20 text-center",style:{scaleX:t}})]}))}function Oe(){const s=G();return e.jsx(m,{mode:"wait",initial:!1,children:e.jsxs(T,{location:s,children:[e.jsx(h,{path:"/",element:e.jsx(ke,{})}),e.jsx(h,{path:"/diary",element:e.jsx(Ge,{})}),e.jsx(h,{path:"/command-lines",element:e.jsx(Ee,{})}),e.jsx(h,{path:"/notes",element:e.jsx(Ye,{})}),e.jsx(h,{path:"/projects",element:e.jsx(He,{})}),e.jsx(h,{path:"/blogs",element:e.jsx(Pe,{})}),e.jsx(h,{path:"/blog/:identifier",element:e.jsx(Xe,{})})]},s.pathname)})}function Ue(){return e.jsx(Z,{basename:"/sadmadlad",children:e.jsx(Oe,{})})}w.createRoot(document.getElementById("root")).render(e.jsx(E.StrictMode,{children:e.jsx(Ue,{})}));
