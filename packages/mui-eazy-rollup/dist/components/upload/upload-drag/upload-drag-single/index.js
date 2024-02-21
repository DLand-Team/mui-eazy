import { j as jsxRuntimeExports } from '../../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { useState, useEffect } from 'react';
import { useDropzone } from '../../../../node_modules/.pnpm/react-dropzone@14.2.3_react@18.2.0/node_modules/react-dropzone/dist/es/index.js';
import { Iconify } from '../../../iconify/iconify.js';
import SingleFilePreview from './preview-single-file.js';
import img from '../../ic-eva_cloud-upload-fill.svg.js';
import { CircularProgress } from '@mui/material';
import { useBoolean } from '../../../../hooks/use-boolean.js';
import Stack from '../../../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Stack/Stack.js';
import Box from '../../../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js';
import Typography from '../../../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Typography/Typography.js';
import IconButton from '../../../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/IconButton/IconButton.js';
import { alpha } from '@mui/system';

function UploadDragSingle({
  disabled,
  multiple = false,
  error,
  placeholder,
  helperText,
  onDel,
  onDelete,
  files,
  thumbnail,
  onUpload,
  onRemove,
  onAdd,
  onRemoveAll,
  sx,
  uploadAction,
  uploadLoabel,
  ...other
}) {
  const showLoading = useBoolean(false);
  const [fileNameList, setFilenameList] = useState(files || []);
  const [fileList, setFileList] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject
  } = useDropzone({
    multiple,
    disabled,
    onDropAccepted: () => {
      document.body.focus();
    },
    onDrop: async acceptedFiles => {
      onDel?.(fileNameList?.[0]);
      showLoading.onTrue();
      if (acceptedFiles[0]) {
        const newFile = await uploadAction?.(acceptedFiles[0]).finally(() => {
          showLoading.onFalse();
        });
        if (newFile) {
          onAdd?.(newFile);
          setFileList([...fileList, ...acceptedFiles]);
        }
      }
    },
    ...other
  });
  useEffect(() => {
    files && setFilenameList(files);
  }, [files]);
  // 单文件模式：存在文件
  const hasFile = fileNameList.length > 0;
  // 存在错误
  const hasError = isDragReject || !!error;
  // Placeholder
  const renderPlaceholder = jsxRuntimeExports.jsxs(Stack, {
    spacing: 3,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    children: [jsxRuntimeExports.jsx(Box, {
      component: "img",
      src: img,
      sx: {
        width: 52,
        height: 52,
        flexShrink: 0,
        ...sx
      }
    }), jsxRuntimeExports.jsx(Stack, {
      spacing: 1,
      sx: {
        textAlign: 'center'
      },
      children: placeholder || uploadLoabel ? jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
        children: uploadLoabel
      }) : jsxRuntimeExports.jsx(Typography, {
        sx: {
          color: '#919EAB',
          fontSize: '14px'
        },
        children: 'Drag and drop or click to choose files'
      })
    })]
  });
  // 显示单文件
  const renderSinglePreview = !multiple && jsxRuntimeExports.jsx(SingleFilePreview, {
    type: fileList?.[0]?.type,
    imgUrl: typeof fileNameList?.[0] == 'string' ? fileNameList?.[0] : ''
  });
  // 去除单文件按钮
  const removeSinglePreview = hasFile && onDel && jsxRuntimeExports.jsx(IconButton, {
    size: "small",
    onClick: () => {
      onDel?.(fileNameList?.[0]);
    },
    sx: {
      top: 16,
      right: 16,
      zIndex: 9,
      position: 'absolute',
      color: theme => alpha(theme.palette.common.white, 0.8),
      bgcolor: theme => alpha(theme.palette.grey[900], 0.72),
      '&:hover': {
        bgcolor: theme => alpha(theme.palette.grey[900], 0.48)
      }
    },
    children: jsxRuntimeExports.jsx(Iconify, {
      icon: "mingcute:close-line",
      width: 18
    })
  });
  return jsxRuntimeExports.jsxs(Box, {
    sx: {
      width: 1,
      position: 'relative',
      ...sx
    },
    children: [jsxRuntimeExports.jsxs(Box, {
      ...getRootProps(),
      sx: {
        p: 5,
        outline: 'none',
        borderRadius: `var(--radius-15, 12px)`,
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'relative',
        background: 'var(--grey-8, rgba(145, 158, 171, 0.08))',
        border: `1px dashed var(--Scaling-Grey2, #696969)`,
        // border: (theme) => `1px dashed ${alpha(theme.palette.grey[500], 0.2)}`,
        transition: theme => theme.transitions.create(['opacity', 'padding']),
        '&:hover': {
          opacity: 0.72
        },
        ...(isDragActive && {
          opacity: 0.72
        }),
        ...(disabled && {
          opacity: 0.48,
          pointerEvents: 'none'
        }),
        ...(hasError && {
          color: 'error.main',
          borderColor: 'error.main',
          bgcolor: theme => alpha(theme.palette.error.main, 0.08)
        }),
        ...(hasFile && {
          padding: '24% 0'
        })
      },
      children: [jsxRuntimeExports.jsx("input", {
        ...getInputProps()
      }), hasFile ? renderSinglePreview : renderPlaceholder, showLoading.value && jsxRuntimeExports.jsx(Box, {
        sx: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          /*设置背景样式*/
          background: 'rgba(255,255,255,0.1)',
          /*让透过card的底部元素模糊化,达到毛玻璃效果*/
          backdropFilter: 'blur(5px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        children: jsxRuntimeExports.jsx(CircularProgress, {
          color: "inherit"
        })
      })]
    }), removeSinglePreview, helperText && helperText]
  });
}

export { UploadDragSingle };
