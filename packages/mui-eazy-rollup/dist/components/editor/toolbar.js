import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { StyledEditorToolbar } from './styles.js';

// ----------------------------------------------------------------------
const HEADINGS = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4', 'Heading 5', 'Heading 6'];
const formats = ['align', 'background', 'blockquote', 'bold', 'bullet', 'code', 'code-block', 'color', 'direction', 'font', 'formula', 'header', 'image', 'indent', 'italic', 'link', 'list', 'script', 'size', 'strike', 'table', 'underline', 'video'];
function Toolbar({
  id,
  isSimple,
  ...other
}) {
  return jsxRuntimeExports.jsx(StyledEditorToolbar, {
    ...other,
    children: jsxRuntimeExports.jsxs("div", {
      id: id,
      children: [jsxRuntimeExports.jsx("div", {
        className: "ql-formats",
        children: jsxRuntimeExports.jsxs("select", {
          className: "ql-header",
          defaultValue: "",
          children: [HEADINGS.map((heading, index) => jsxRuntimeExports.jsx("option", {
            value: index + 1,
            children: heading
          }, heading)), jsxRuntimeExports.jsx("option", {
            value: "",
            children: "Normal"
          })]
        })
      }), jsxRuntimeExports.jsxs("div", {
        className: "ql-formats",
        children: [jsxRuntimeExports.jsx("button", {
          type: "button",
          className: "ql-bold"
        }), jsxRuntimeExports.jsx("button", {
          type: "button",
          className: "ql-italic"
        })]
      }), !isSimple && jsxRuntimeExports.jsxs("div", {
        className: "ql-formats",
        children: [jsxRuntimeExports.jsx("select", {
          className: "ql-color"
        }), jsxRuntimeExports.jsx("select", {
          className: "ql-background"
        })]
      }), jsxRuntimeExports.jsxs("div", {
        className: "ql-formats",
        children: [jsxRuntimeExports.jsx("button", {
          type: "button",
          className: "ql-list",
          value: "ordered"
        }), jsxRuntimeExports.jsx("button", {
          type: "button",
          className: "ql-list",
          value: "bullet"
        }), !isSimple && jsxRuntimeExports.jsx("button", {
          type: "button",
          className: "ql-indent",
          value: "-1"
        }), !isSimple && jsxRuntimeExports.jsx("button", {
          type: "button",
          className: "ql-indent",
          value: "+1"
        })]
      }), !isSimple && jsxRuntimeExports.jsxs("div", {
        className: "ql-formats",
        children: [jsxRuntimeExports.jsx("button", {
          type: "button",
          className: "ql-script",
          value: "super"
        }), jsxRuntimeExports.jsx("button", {
          type: "button",
          className: "ql-script",
          value: "sub"
        })]
      })]
    })
  });
}

export { Toolbar as default, formats };
