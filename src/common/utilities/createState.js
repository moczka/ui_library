import rawData from '_data/rawData';

const data = {...rawData};

export const createState = () => {
  if (!process.title === "browser") {
    const promise = Promise.resolve(window.__PRELOADED_STATE__);
    delete window.__PRELOADED_STATE__;
    return promise;
  } else {
    return Promise.all([
      // Nothing to Async fetch
    ]).then(() => {
      return data;
    });
  }
};


