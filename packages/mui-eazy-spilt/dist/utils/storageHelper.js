const storageHelper = {
  setItem: (key, data, type = 'session') => {
    let flag = typeof window !== 'undefined';
    let sg = flag ? {
      session: window.sessionStorage,
      local: window.localStorage
    }[type] : null;
    sg && sg.setItem(key, JSON.stringify(data));
  },
  clear: (type = 'session') => {
    let flag = typeof window !== 'undefined';
    let sg = flag ? {
      session: window.sessionStorage,
      local: window.localStorage
    }[type] : null;
    sg?.clear();
  },
  removeItem: (key, type = 'session') => {
    let flag = typeof window !== 'undefined';
    let sg = flag ? {
      session: window.sessionStorage,
      local: window.localStorage
    }[type] : null;
    sg?.removeItem(key);
  },
  getItem: (key, type = 'session') => {
    let flag = typeof window !== 'undefined';
    let sg = flag ? {
      session: window.sessionStorage,
      local: window.localStorage
    }[type] : null;
    let value = sg ? sg.getItem(key) || '' : '';
    return value;
  }
};

export { storageHelper };
