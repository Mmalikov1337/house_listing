export default class MultipleChoise {
  constructor(
    names, //placeholder []
    title,
    value = "",
    fields = [],
    active = false
  ) {
    this.names = names;
    this.title = title;
    this.fields = fields;
    this.value = value;
    this.active = active;
  }
}
