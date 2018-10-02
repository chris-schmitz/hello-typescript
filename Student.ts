class SuperStudent {
  fullName: string

  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`
  }
}

export default SuperStudent
