export default class SelectFilter {
  constructor(
    names, //[]
    title,
    values = [],
    field = "",
    active = false
  ) {
    this.names = names;
    this.title = title;
    this.values = values;
    this.field = field;
    this.active = active;
  }
}
