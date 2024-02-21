import useTheme from '../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/useTheme.js';
import useMediaQuery from '../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/useMediaQuery/useMediaQuery.js';

function useResponsive(query, start, end) {
  const theme = useTheme();
  const mediaUp = useMediaQuery(theme.breakpoints.up(start));
  const mediaDown = useMediaQuery(theme.breakpoints.down(start));
  const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));
  const mediaOnly = useMediaQuery(theme.breakpoints.only(start));
  if (query === 'up') {
    return mediaUp;
  }
  if (query === 'down') {
    return mediaDown;
  }
  if (query === 'between') {
    return mediaBetween;
  }
  return mediaOnly;
}

export { useResponsive };
