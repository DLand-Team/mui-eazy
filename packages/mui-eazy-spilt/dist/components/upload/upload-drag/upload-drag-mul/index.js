import { j as jsxRuntimeExports } from '../../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import CropModal from '../cropModal.js';
import { useDropzone } from '../../../../node_modules/.pnpm/react-dropzone@14.2.3_react@18.2.0/node_modules/react-dropzone/dist/es/index.js';
import { useBoolean } from '../../../../hooks/use-boolean.js';
import img from '../../ic-eva_cloud-upload-fill.svg.js';
import MultiFilePreview from './preview-multi-file.js';
import Stack from '../../../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Stack/Stack.js';
import Box from '../../../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js';
import Typography from '../../../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Typography/Typography.js';
import Button from '../../../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Button/Button.js';
import { alpha } from '@mui/system';

// ----------------------------------------------------------------------
function file2DataUrl(file, callback) {
  var reader = new FileReader();
  reader.onload = function () {
    callback(reader.result);
  };
  reader.readAsDataURL(file); //FileReader对象的方法，可以读取Blob或者File对象的数据，转化为dataURL格式
}
function UploadDragMul({
  onDel,
  onDelete,
  onUpload,
  onRemove,
  onAdd,
  onRemoveAll,
  uploadAction,
  onOrder,
  validateFunc,
  disabled,
  multiple = false,
  error,
  placeholder,
  helperText,
  sx,
  files,
  thumbnail,
  isCrop,
  uploadLoabel,
  ...other
}) {
  // crop
  // crop 临时本地预览
  const [previewUrl, setPreviewUrl] = useState('');
  // cropModal
  const [isCropModalOpen, setIsCropModalOpen] = useState(false);
  const [fileName, setFileName] = useState('');
  const showLoading = useBoolean(false);
  // file类型的数组
  const [fileList, setFileList] = useState([]);
  // 文件名数组
  const [fileNameList, setFilenameList] = useState(files || []);
  useEffect(() => {
    files && setFilenameList(files);
  }, [files]);
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
      if (isCrop) {
        file2DataUrl(acceptedFiles[0], res => {
          setPreviewUrl(res);
          setFileName(acceptedFiles[0].name);
          setIsCropModalOpen(true);
        });
      } else {
        showLoading.onTrue();
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
  // 多文件模式：存在文件
  const hasFiles = fileNameList.length;
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
  // 移动文件
  const moveCard = (dragIndex, hoverIndex) => {
    // 调整顺序
    const fileNameListTemp = [...fileNameList];
    let temp = fileNameListTemp[dragIndex];
    fileNameListTemp[dragIndex] = fileNameListTemp[hoverIndex];
    fileNameListTemp[hoverIndex] = temp;
    // 设置外部驱动的数据源头
    onOrder?.(fileNameListTemp);
  };
  const renderMultiPreview = (hasFiles || fileNameList.length > 0) && jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Box, {
      sx: {
        my: 3
      },
      children: jsxRuntimeExports.jsx(MultiFilePreview, {
        moveCard: moveCard,
        onRemove: (fileName, index) => {
          if (typeof fileName == 'string') {
            debugger;
            onDel?.(fileName);
            if (typeof index == 'number') {
              fileNameList.splice(index, 1);
              fileList.splice(index, 1);
              setFilenameList([...fileNameList]);
              setFileList([...fileList]);
            }
          }
        },
        files: fileList,
        fileNameList: fileNameList
      })
    }), jsxRuntimeExports.jsx(Stack, {
      direction: "row",
      justifyContent: "flex-end",
      spacing: 1.5,
      children: onRemoveAll && jsxRuntimeExports.jsx(Button, {
        color: "inherit",
        variant: "outlined",
        size: "small",
        onClick: onRemoveAll,
        children: "Remove All"
      })
    })]
  });
  const handleOpenChange = () => {
    if (isCropModalOpen) {
      setIsCropModalOpen(false);
      setPreviewUrl('');
      setFileName('');
    }
  };
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
        bgcolor: theme => alpha(theme.palette.grey[500], 0.08),
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
        })
      },
      children: [jsxRuntimeExports.jsx("input", {
        ...getInputProps()
      }), renderPlaceholder]
    }), showLoading.value && jsxRuntimeExports.jsx(Box, {
      sx: {
        position: 'absolute',
        top: -10,
        bottom: -10,
        left: -10,
        right: -10,
        /*设置背景样式*/
        background: 'rgba(255,255,255,0.1)',
        /*让透过card的底部元素模糊化,达到毛玻璃效果*/
        backdropFilter: 'blur(5px)',
        boxShadow: 'inset 0 0 6px rgba(255, 255, 255, 0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10
      },
      children: jsxRuntimeExports.jsx(CircularProgress, {
        color: "inherit"
      })
    }), jsxRuntimeExports.jsx(CropModal, {
      name: fileName,
      onComplete: async file => {
        showLoading.onTrue();
        const newFile = await uploadAction?.(file).finally(() => {
          showLoading.onFalse();
        });
        if (newFile) {
          onAdd?.(newFile);
          setFileList([...fileList, file]);
        }
      },
      src: previewUrl,
      open: isCropModalOpen,
      setOpen: handleOpenChange,
      validateFunc: validateFunc
    }), helperText && helperText, renderMultiPreview]
  });
}

export { UploadDragMul };
