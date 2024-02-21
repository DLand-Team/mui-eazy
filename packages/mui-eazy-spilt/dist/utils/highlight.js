import HighlightJS from '../node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/lib/index.js';

HighlightJS.configure({
  languages: ['javascript', 'sh', 'bash', 'html', 'scss', 'css', 'json']
});
if (typeof window !== 'undefined') {
  window.hljs = HighlightJS;
}
