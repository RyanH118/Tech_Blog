module.exports = {
  formatDate: (date) => {
    if (date) {
      return new Date(date).toLocaleDateString();
    } else {
      return "";
    }
  },
};