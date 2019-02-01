
const objectFilter = (blacklist, data) => {
  const newData = Object.keys(data)
    .reduce((accum, item) => {
      if (!blacklist.includes(item)) {
        Object.assign(accum, { [item]: data[item] });
      }
      return accum;
    }, {});
  return newData;
};

module.exports = {
  objectFilter,
};
