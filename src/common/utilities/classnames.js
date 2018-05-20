const cx = (mainClass, options = {}) => {
  const cssClasses = Object.keys(options).reduce((acc, cssClass) => {
    return options[cssClass] ? `${acc} ${cssClass}` : acc;
  }, '');
  return (`${mainClass} ${cssClasses}`).trim();
};

export default cx;