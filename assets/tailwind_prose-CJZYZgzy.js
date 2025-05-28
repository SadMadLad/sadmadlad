const e=`# **Rendering Markdown with Tailwind CSS**

#### A Small Problem I Faced

Tailwind is my go-to CSS framework. However, since it resets the default browser styles, the native styling for header tags, lists, and other elements gets overridden.

At one point, I needed to render Markdown content directly from a \`.md\` file. I was using [\`markedjs\`](https://github.com/markedjs/marked) to parse and render the Markdown. Due to Tailwind's reset, the default styles for headings, paragraphs, and lists weren’t displaying correctly.

#### The Solution

The simplest solution was to use the [\`tailwindcss-typography\`](https://github.com/tailwindlabs/tailwindcss-typography) plugin. By wrapping the rendered Markdown in an HTML element with the \`prose\` class, I was able to restore proper styling.

The \`prose\` class provides sensible defaults for typographic content, which works well with most Markdown. If certain styles like margins, padding, or font sizes don’t quite fit your needs, [you can easily customize them](https://github.com/tailwindlabs/tailwindcss-typography?tab=readme-ov-file#customizing-the-css).

Here’s a small example using Vue 3:


<pre data-controller="code-highlight" data-code-highlight-language-value="html" data-code-highlight-code-value='
<article class="prose-sm lg:prose" v-html="markdownHtml"></article>
'></pre>

This note itself is being rendered using that approach.
`;export{e as default};
