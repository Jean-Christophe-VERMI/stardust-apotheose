export const FETCH_THREADS = 'FETCH_THREADS';
export const SAVE_THREADS = 'SAVE_THREADS';
export const NEW_THREAD = 'NEW_THREAD';
export const CHANGE_FIELD = 'CHANGE_FIELD';

export const fetchThreads = () => ({
  type: FETCH_THREADS,
});

export const saveThreads = (thread) => ({
  type: SAVE_THREADS,
  thread,
});

export const newThread = (value) => ({
  type: NEW_THREAD,
  value,
});

export const changeField = (value) => ({
  type: CHANGE_FIELD,
  value,
});
