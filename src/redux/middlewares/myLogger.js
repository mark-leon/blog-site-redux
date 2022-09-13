const myLogger = () => (next) => (action) => {
  return next(action);

  // pass action
};

export default myLogger;
