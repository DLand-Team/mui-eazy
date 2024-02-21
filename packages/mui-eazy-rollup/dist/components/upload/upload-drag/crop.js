import { j as jsxRuntimeExports } from '../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import '../../../node_modules/.pnpm/cropperjs@1.6.1/node_modules/cropperjs/dist/cropper.min.css.js';
import { useState, useEffect, createRef } from 'react';
import { Cropper as l } from '../../../node_modules/.pnpm/react-cropper@2.3.3_react@18.2.0/node_modules/react-cropper/dist/react-cropper.es.js';
import '../../../utils/highlight.js';
import '../../../node_modules/.pnpm/numeral@2.0.6/node_modules/numeral/numeral.js';
import '../../../utils/myDay.js';
import '@mui/material';
import '../../../hooks/use-fields.js';
import '../../../node_modules/.pnpm/@iconify_react@4.1.1_react@18.2.0/node_modules/@iconify/react/dist/iconify.js';
import '../../../node_modules/.pnpm/react-lazy-load-image-component@1.6.0_react-dom@18.2.0_react@18.2.0/node_modules/react-lazy-load-image-component/build/index.js';
import './cropModal.js';
import '../../../node_modules/.pnpm/react-quill@2.0.0_react-dom@18.2.0_react@18.2.0/node_modules/react-quill/dist/quill.snow.css.js';
import '../../../node_modules/.pnpm/react-quill@2.0.0_react-dom@18.2.0_react@18.2.0/node_modules/react-quill/lib/index.js';
import '../../editor/styles.js';
import '../../../node_modules/.pnpm/react-google-autocomplete@2.7.3_react@18.2.0/node_modules/react-google-autocomplete/lib/usePlacesAutocompleteService.js';
import { dataURLToBlob } from '../../../utils/dataURLToBlob.js';

const Demo = ({
  name,
  src,
  callRef,
  onComplete,
  validateFunc
}) => {
  const [image] = useState(src);
  const cropperRef = /*#__PURE__*/createRef();
  const onCrop = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      let dataUrl = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
      let blob = dataURLToBlob(dataUrl);
      const fileName = name || 'hello.txt';
      const file = new File([blob], fileName, {
        type: blob.type
      });
      const [flag = true, info] = validateFunc?.(file) || [];
      flag && onComplete(file);
      return [flag, info];
    }
  };
  useEffect(() => {
    callRef.current = onCrop;
  }, [callRef]);
  return jsxRuntimeExports.jsxs("div", {
    children: [jsxRuntimeExports.jsx("div", {
      style: {
        width: '100%'
      },
      children: jsxRuntimeExports.jsx(l, {
        ref: cropperRef,
        style: {
          height: 400,
          width: '100%'
        },
        zoomTo: 0.5,
        initialAspectRatio: 1,
        // preview=".img-preview"
        src: image,
        viewMode: 1,
        minCropBoxHeight: 10,
        minCropBoxWidth: 10,
        background: false,
        responsive: true,
        autoCropArea: 1,
        checkOrientation: false,
        guides: true,
        aspectRatio: 16 / 9
      })
    }), jsxRuntimeExports.jsx("br", {
      style: {
        clear: 'both'
      }
    })]
  });
};

export { Demo, Demo as default };
