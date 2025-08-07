const t=`## **Count how many objects were allocated by Ruby**

You can count the number of allocations done using \`GC.stat(:total_allocated_objects)\` like this:

<pre data-controller="code-highlight" data-code-highlight-language-value="ruby" data-code-highlight-code-value='
starting = GC.stat(:total_allocated_objects)
...stuff doing allocations
allocations_count = GC.stat(:total_allocated_objects) - starting
'></pre>

*The source of this note is [Aaron's Patterson keynote at Rails World 2024](https://www.youtube.com/watch?v=ZE6F3drGhA8&t=1811s)*
`;export{t as default};
