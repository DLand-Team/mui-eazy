import { Stack } from '@mui/material';
import { DividerNode, TypographyNode } from '../styles';

export const FromWrapper = ({
  name,
  children,
  isShowDivider = true,
}: {
  name?: string;
  tipInfo?: string;
  children: React.ReactNode;
  isShowDivider?: boolean;
}) => {
  return (
    <>
      {name && (
        <Stack alignItems={'center'} direction="row" spacing={2}>
          <TypographyNode>
            {name}
          </TypographyNode>
        </Stack>
      )}
      {children}
      {isShowDivider && <DividerNode />}
    </>
  );
};
