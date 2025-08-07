const e=`### **Cool trick with \`object_class\` while using \`JSON.parse\`**

If you want to access items like \`data.id\` instead of \`data[:id]\`, you can use \`OpenStruct\` as object class while parsing:


<pre data-controller="code-highlight" data-code-highlight-language-value="ruby" data-code-highlight-code-value='
data = JSON.parse(response, object_class: OpenStruct)
'></pre>

Be careful though. This consumes a lot of memory.

And if you know what the schema of data being parsed is going to look like, you can use \`Struct\` there. This consumes a lot less enemy than \`OpenStruct\` does.

<pre data-controller="code-highlight" data-code-highlight-language-value="ruby" data-code-highlight-code-value='
ResponseStruct = Struct.new(:id, :name)

data = JSON.parse(response, object_class: ResponseStruct)
# You can access data.id, or data.name
'></pre>

The \`object_class\` param works for array of objects as well.
`;export{e as default};
