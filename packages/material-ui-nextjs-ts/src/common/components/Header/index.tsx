import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Cloud from "@mui/icons-material/Cloud";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentPaste from "@mui/icons-material/ContentPaste";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Router from "next/router";
import { MouseEvent, useState } from "react";

type HeaderPropsType = {
  className?: string;
  loginClick?: () => void;
  registerClick?: () => void;
};

const Header = styled((props: HeaderPropsType) => {
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const userMenuOpen = Boolean(userMenuAnchorEl);
  const userButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    setUserMenuAnchorEl(event.currentTarget);
  };
  const userMenuClose = () => {
    setUserMenuAnchorEl(null);
  };

  return (
    <Box className={props.className}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div style={{ cursor: "pointer" }} onClick={() => Router.push("/")}>
              Dland
            </div>
          </Typography>
          <IconButton
            id="user-button"
            size="large"
            color="inherit"
            aria-controls={userMenuOpen ? "user-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={userMenuOpen ? "true" : undefined}
            onClick={userButtonClick}>
            <AccountCircleIcon fontSize="inherit" />
          </IconButton>
          <Menu
            id="user-menu"
            anchorEl={userMenuAnchorEl}
            open={userMenuOpen}
            onClose={userMenuClose}
            MenuListProps={{ "aria-labelledby": "user-button" }}
            sx={{ width: 300 }}>
            <MenuList sx={{ width: 320 }}>
              <MenuItem onClick={() => Router.push("/account")}>账号</MenuItem>
              <MenuItem onClick={() => Router.push("/login")}>登录</MenuItem>
              <MenuItem onClick={() => Router.push("/management")}>
                后台管理
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘X
                </Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘C
                </Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘V
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Cloud fontSize="small" />
                </ListItemIcon>
                <ListItemText>Web Clipboard</ListItemText>
              </MenuItem>
            </MenuList>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
})((theme) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "64px",
  zIndex: "100",
}));

export default Header;
