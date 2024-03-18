import { Box, Collapse, IconButton } from '@mui/material';
import { useRef, useState } from 'react';
import { Iconify } from '../iconify';
import { uuidv4 } from '../../utils/uuidv4';
import { TreeItem } from './tree-item';
import { TreeItemProps, TreeProps } from './types';

const RenderTreeItemLoop = (
  props: TreeItemProps & {
    update?: () => void;
    record: { [key: string]: TreeItemProps };
    parentSections?: TreeItemProps[] | null;
    currentId?: string;
  }
) => {
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
    isRoot,
    onSwitch,
    ...rest
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  if (judeShow && !judeShow()) {
    return <></>;
  }
  return (
    <>
      {!isRoot && (
        <TreeItem
          onClick={() => {
            if (props.formConfig) {
              for (let i in record) {
                record[i].active = false;
                record[i].isCurrent = false;
              }
              debugger;
              record[props.id!].active = true;
              record[props.id!].isCurrent = true;
              let idStrs = props.id?.split('_').slice(0, -1) || [];
              if (idStrs?.length! > 1) {
                idStrs.forEach((_, index) => {
                  let idTemp = props.id
                    ?.split('_')
                    .slice(0, index + 1)
                    .join('_');
                  idTemp && idTemp != '0' && (record[idTemp!].active = true);
                });
              }
              update!?.();
            } else {
              if (onSwitch) {
                for (let i in record) {
                  record[i].active = false;
                  record[i].isCurrent = false;
                }
                const target = record[props.id!];
                target.active = true;
                if (target.parentId) {
                  record[target.parentId].active = true;
                }
                record[props.id!].isCurrent = true;
                onSwitch(props.id!);
              }
            }

            !!sections && setIsOpen(!isOpen);
          }}
          {...rest}
        >
          {isAdd && (
            <IconButton
              style={{
                zIndex: 10,
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (!props.active) {
                  setIsOpen(true);
                }
                sections && onAdd!(sections);
                update!?.();
              }}
              sx={{ position: 'absolute', right: '40px' }}
            >
              <Iconify width={16} icon={'icon-park-outline:add'} />
            </IconButton>
          )}
          {record[props.id?.split('_').slice(0, -1).join('_')!]?.type == 'array' && (
            <IconButton
              style={{
                zIndex: 10,
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (record[props.id!].active) {
                  for (let i in record) {
                    record[i].active = false;
                  }
                  record[0].active = true;
                }
                onDelete!(props.id!, parentSections!);
                update!?.();
              }}
              sx={{ position: 'absolute', right: '40px' }}
            >
              <Iconify width={16} icon={'icon-park-outline:delete'} />
            </IconButton>
          )}
          {!!sections && props.id !== '0' && (
            <Iconify
              width={16}
              icon={isOpen ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
              sx={{ position: 'absolute', right: '20px' }}
            />
          )}
        </TreeItem>
      )}
      {!!sections && (
        <Collapse in={isOpen || isRoot}>
          {sections?.map((item, index) => {
            const { label, parentId, onDelete, ...rest } = item;
            return (
              <div key={item.id}>
                <RenderTreeItemLoop
                  onSwitch={onSwitch}
                  onDelete={onDelete}
                  parentSections={onDelete ? sections : null}
                  update={update}
                  record={record}
                  {...rest}
                  label={record[parentId!]?.type == 'array' ? `${label}-${index}` : label}
                ></RenderTreeItemLoop>
              </div>
            );
          })}
        </Collapse>
      )}
    </>
  );
};

export const processRecordLoop = (
  data: TreeItemProps,
  id: string,
  record: { [key: string]: TreeItemProps }
) => {
  if (!id) {
    id = uuidv4();
  } else {
    if (!(id in record)) {
      record[id] = data;
    }
  }
  data.id = id;
  const { sections } = data;
  if (!!sections) {
    sections.map((item) => {
      item.parentId = id;
      let uuid = item.id || `${id}_${uuidv4()}`;
      processRecordLoop(item, uuid, record);
      record[uuid] = item;
    });
  }
};

export const Tree = (props: TreeProps) => {
  const { treeConfig, update, record, onSwitch, ...rest } = props;
  let ref = useRef({});
  const [_, setFreshFlag] = useState(Date.now());
  let treeRoot: TreeItemProps = {
    depth: 0,
    label: 'root',
    active: true,
    isCurrent: true,
    isRoot: true,
    judeShow: () => {
      return true;
    },
    sections: treeConfig,
  };
  let recordTemp = record;
  let temp = treeRoot;
  if (!record) {
    recordTemp = ref.current;
    processRecordLoop(treeRoot, '0', recordTemp);
  }
  return (
    <Box {...rest}>
      <RenderTreeItemLoop
        onSwitch={(id) => {
          onSwitch?.(id, recordTemp);
          setFreshFlag(Date.now());
        }}
        update={update}
        record={recordTemp!}
        {...temp}
      ></RenderTreeItemLoop>
    </Box>
  );
};
