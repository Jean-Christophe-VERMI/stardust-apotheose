export const FETCH_THREADS = 'FETCH_THREADS';
export const SAVE_THREADS = 'SAVE_THREADS';
export const NEW_THREAD = 'NEW_THREAD';
export const CHANGE_VALUE = 'CHANGE_VALUE';

export const fetchThreads = () => ({
  type: FETCH_THREADS,
});

export const saveThreads = (thread) => ({
  type: SAVE_THREADS,
  thread,
});

export const newThread = (value, key) => ({
  type: NEW_THREAD,
  value,
  key,
});

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  name,
  value,
});
