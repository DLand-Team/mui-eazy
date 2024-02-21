import { j as jsxRuntimeExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js';
import { Box, IconButton, Collapse } from '@mui/material';
import { useRef, useState } from 'react';
import { Iconify } from '../iconify/iconify.js';
import { uuidv4 } from '../../utils/uuidv4.js';
import { TreeItem } from './tree-item.js';

const RenderTreeItemLoop = props => {
  const {
    isAdd,
    formConfig,
    parentSections,
    isCurrent,
    record,
    sections,
    update,
    onDelete,
    onAdd,
    judeShow,
    ...rest
  } = props;
  const [isOpen, setIsOpen] = useState(true);
  if (judeShow && !judeShow()) {
    return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
  }
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsxs(TreeItem, {
      onClick: () => {
        if (props.formConfig) {
          for (let i in record) {
            record[i].active = false;
            record[i].isCurrent = false;
          }
          record[props.id].active = true;
          record[props.id].isCurrent = true;
          let idStrs = props.id?.split('_').slice(0, -1) || [];
          if (idStrs?.length > 1) {
            idStrs.forEach((_, index) => {
              let idTemp = props.id?.split('_').slice(0, index + 1).join('_');
              idTemp && idTemp != '0' && (record[idTemp].active = true);
            });
          }
          update?.();
        } else {
          if (props.onSwitch) {
            for (let i in record) {
              record[i].active = false;
              record[i].isCurrent = false;
            }
            record[props.id].active = true;
            record[props.id].isCurrent = true;
            props.onSwitch(props.id);
          }
        }
        if (props.id == '0') {
          setIsOpen(true);
        } else {
          !!sections && setIsOpen(!isOpen);
        }
      },
      ...rest,
      children: [isAdd && jsxRuntimeExports.jsx(IconButton, {
        style: {
          zIndex: 10
        },
        onClick: e => {
          e.stopPropagation();
          if (!props.active) {
            setIsOpen(true);
          }
          sections && onAdd(sections);
          update?.();
        },
        sx: {
          position: 'absolute',
          right: '40px'
        },
        children: jsxRuntimeExports.jsx(Iconify, {
          width: 16,
          icon: 'icon-park-outline:add'
        })
      }), record[props.id?.split('_').slice(0, -1).join('_')]?.type == 'array' && jsxRuntimeExports.jsx(IconButton, {
        style: {
          zIndex: 10
        },
        onClick: e => {
          e.stopPropagation();
          if (record[props.id].active) {
            for (let i in record) {
              record[i].active = false;
            }
            record[0].active = true;
          }
          onDelete(props.id, parentSections);
          update?.();
        },
        sx: {
          position: 'absolute',
          right: '40px'
        },
        children: jsxRuntimeExports.jsx(Iconify, {
          width: 16,
          icon: 'icon-park-outline:delete'
        })
      }), !!sections && props.id !== '0' && jsxRuntimeExports.jsx(Iconify, {
        width: 16,
        icon: isOpen ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill',
        sx: {
          position: 'absolute',
          right: '20px'
        }
      })]
    }), !!sections && jsxRuntimeExports.jsx(Collapse, {
      in: isOpen,
      children: sections?.map((item, index) => {
        const {
          label,
          parentId,
          onDelete,
          ...rest
        } = item;
        return jsxRuntimeExports.jsx("div", {
          children: jsxRuntimeExports.jsx(RenderTreeItemLoop, {
            onSwitch: props.onSwitch,
            onDelete: onDelete,
            parentSections: onDelete ? sections : null,
            update: update,
            record: record,
            ...rest,
            label: record[parentId]?.type == 'array' ? `${label}-${index}` : label
          })
        }, item.id);
      })
    })]
  });
};
const processRecordLoop = (data, id, record) => {
  if (!id) {
    id = uuidv4();
  }
  if (id == '0') {
    record[id] = data;
  }
  data.id = id;
  const {
    sections
  } = data;
  if (!!sections) {
    sections.map(item => {
      item.parentId = id;
      let uuid = item.id || `${id}_${uuidv4()}`;
      processRecordLoop(item, uuid, record);
      record[uuid] = item;
    });
  }
};
const Tree = props => {
  const {
    treeRoot,
    update,
    record,
    onSwitch,
    ...rest
  } = props;
  let temp = treeRoot;
  let recordTemp = record;
  let ref = useRef({});
  const [_, setFreshFlag] = useState(Date.now());
  if (!record) {
    recordTemp = ref.current;
    processRecordLoop(temp, '0', recordTemp);
  }
  return jsxRuntimeExports.jsx(Box, {
    ...rest,
    children: jsxRuntimeExports.jsx(RenderTreeItemLoop, {
      onSwitch: id => {
        onSwitch?.(id, recordTemp);
        setFreshFlag(Date.now());
      },
      update: update,
      record: recordTemp,
      ...temp
    })
  });
};

export { Tree, processRecordLoop };
