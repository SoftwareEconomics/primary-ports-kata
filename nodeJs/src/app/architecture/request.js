class Request {
  constructor(rawData) {
    this.rawData = rawData;
  }

  getList() {
    return this.rawData.split(",")
      .map(s => s.trim())
      .map(s => s.match(/\d/) ? parseInt(s, 10) : s);
  }

  get() {
    return this.rawData;
  }
}

module.exports = Request;
