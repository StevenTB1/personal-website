const fs = require('fs');
const path = require('path');

const UI_COMPONENTS_DIR = path.join(__dirname, '../src/components/ui');

// Get all JSX files in the UI components directory
const files = fs.readdirSync(UI_COMPONENTS_DIR).filter((file) => file.endsWith('.jsx'));

// Function to add 'use client' directive if not present
function ensureUseClientDirective(content) {
  if (!content.trim().startsWith("'use client'") && !content.trim().startsWith('"use client"')) {
    return "'use client';\n\n" + content;
  }
  return content;
}

// Function to convert standard function declarations to arrow functions
function convertToArrowFunctions(content) {
  // Pattern 1: Regular function declarations
  // function ComponentName({ prop1, prop2, ...props }) { ... }
  let modifiedContent = content.replace(
    /function\s+([A-Za-z0-9_]+)\s*\(\s*({[^}]*}|\{[^}]*\}|\([^)]*\)|[^,)]*)\s*(,\s*[^)]*)*\s*\)\s*{/g,
    'const $1 = ($2$3) => {',
  );

  // Pattern 2: React.forwardRef with function declarations inside
  // const ComponentName = React.forwardRef(function ComponentName({ ... }, ref) { ... });
  modifiedContent = modifiedContent.replace(
    /React\.forwardRef\(\s*function\s+([A-Za-z0-9_]+)\s*\(\s*({[^}]*}|\{[^}]*\}|\([^)]*\)|[^,)]*)\s*(,\s*[^)]*)*\s*\)\s*{/g,
    'React.forwardRef(($2$3) => {',
  );

  return modifiedContent;
}

// Process each file
let transformedCount = 0;
files.forEach((file) => {
  const filePath = path.join(UI_COMPONENTS_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip files that have already been transformed (like accordion.jsx)
  if (content.includes('const') && !content.includes('function ')) {
    console.log(`Skipping already transformed file: ${file}`);
    return;
  }

  // Add 'use client' directive if not present
  content = ensureUseClientDirective(content);

  // Transform function declarations to arrow functions
  const transformedContent = convertToArrowFunctions(content);

  // Only write to file if actual changes were made
  if (content !== transformedContent) {
    fs.writeFileSync(filePath, transformedContent, 'utf8');
    transformedCount++;
    console.log(`Transformed ${file}`);
  } else {
    console.log(`No changes needed for ${file}`);
  }
});

console.log(`\nTransformation complete. Modified ${transformedCount} files.`);
