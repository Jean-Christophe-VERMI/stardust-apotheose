export const FETCH_THREADS = 'FETCH_THREADS';
export const SAVE_THREADS = 'SAVE_THREADS';

export const fetchThreads = () => ({
  type: FETCH_THREADS,
});

export const saveThreads = (thread) => ({
  type: SAVE_THREADS,
  thread,
});
