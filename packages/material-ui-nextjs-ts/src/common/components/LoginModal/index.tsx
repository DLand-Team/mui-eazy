import React from "react";
import styles from "./index.module.scss";
import { Button, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

type LoginModalPropsType = {
  className?: string;
  open: boolean;
  onClose?: () => void;
};

const LoginModalComponent: React.ComponentType<LoginModalPropsType> = (
  props
) => {
  return (
    <div
      className={
        styles.container + " " + (props.className ? props.className : "")
      }
      style={{
        width: props.open ? "100%" : "0",
        height: props.open ? "100%" : "0",
      }}>
      <div
        className={styles.modal}
        style={{
          top: props.open ? "10%" : "100%",
        }}>
        <div className={styles.title}>
          <div className={styles.closeButton}>
            <IconButton
              type="button"
              size="large"
              onClick={() => props.onClose && props.onClose()}>
              <CancelOutlinedIcon />
            </IconButton>
          </div>
          <div className={styles.centerText}>登录或注册</div>
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.main}>欢迎您</div>
            <div className={styles.sub}>
              未注册的手机号或微信号验证后将自动创建新账号
            </div>
          </div>
          <div className={styles.input}>
            <TextField label="手机号" sx={{ flex: 1 }} />
            <TextField label="验证码" sx={{ flex: 1 }} />
          </div>
          <Button variant="contained">登录</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginModalComponent;
