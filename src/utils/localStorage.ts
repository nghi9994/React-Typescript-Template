const LOCAL_STORAGE_KEY = {
  accessToken: 'ac',
};

const setStorage = async (key, value) => {
  await localStorage.set({
    key: key,
    value: value + '',
  });
};
const getStorage = async key => {
  // const { value } = await localStorage.getItem({ key: key });

  return '';
};

const clearStorage = async () => {
  await localStorage.clear();
};

export const localStorageUtil = {
  setAccessToken: async (token: string) => {
    await setStorage(LOCAL_STORAGE_KEY.accessToken, token);
  },
  getAccessToken: async () => {
    return await getStorage(LOCAL_STORAGE_KEY.accessToken);
  },

  logoutClear: async () => {
    // const firstTimeSelectWorkspace = await getStorage(
    //   LOCAL_STORAGE_KEY.firstTimeSelectWorkspace,
    // );

    await clearStorage();

    // if (firstTimeSelectWorkspace) {
    //   await setStorage(
    //     LOCAL_STORAGE_KEY.firstTimeSelectWorkspace,
    //     firstTimeSelectWorkspace,
    //   );
    // }
  },
};
