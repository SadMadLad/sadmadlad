const n=`# **Command Lines**

Collection of command lines that I learnt along the way.

### **Shell Commands**
- **Making Script Executable**
  <pre data-controller="code-highlight" data-code-highlight-language-value="bash" data-code-highlight-code-value='
    chmod +x filename.sh
  '></pre>
  and then file is executable like \`./filename.sh\`.

### **Ruby**
- **Uninstalling all gems with confirmations for all**
  <pre data-controller="code-highlight" data-code-highlight-language-value="bash" data-code-highlight-code-value='
    gem uninstall -aIx
  '></pre>
  where \`-aIx\` is concise for:
    - \`-a\`: Uninstall all versions
    - \`-I\`: Ignore dependency requirements when uninstalling
    - \`-x\`: Uninstall executables without confirmation
`;export{n as default};
