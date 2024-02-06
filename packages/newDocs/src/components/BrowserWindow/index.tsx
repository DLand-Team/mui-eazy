/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { type CSSProperties, type ReactNode } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Iconify } from '@site/src/theme/ReactLiveScope/components';

interface Props {
  children: ReactNode;
  minHeight?: number;
  url: string;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
  handleCodeClick?: () => void
}

export default function BrowserWindow({
  children,
  minHeight,
  url = 'http://localhost:3000',
  style,
  bodyStyle,
  handleCodeClick
}: Props): JSX.Element {
  return (
    <div className={styles.browserWindow} style={{ ...style, minHeight }}>
      <div className={styles.browserWindowHeader} >
        <div className={styles.buttons}>
          <span className={styles.dot} style={{ background: '#f25f58' }} />
          <span className={styles.dot} style={{ background: '#fbbe3c' }} />
          <span className={styles.dot} style={{ background: '#58cb42' }} />
        </div>
        <div className={clsx(styles.browserWindowAddressBar, 'text--truncate')}>
          {url}
        </div>
        <div onClick={() => {
          handleCodeClick?.()
        }} className={styles.browserWindowMenuIcon}>
          <Iconify width={'30px'} icon={'ant-design:code-filled'} color={'#0d5ae7'} />
        </div>
      </div>

      <div className={styles.browserWindowBody} style={bodyStyle}>
        {children}
      </div>
    </div>
  );
}
