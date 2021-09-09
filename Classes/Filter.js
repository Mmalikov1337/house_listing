export default class Filter {
  constructor(field, title, name, value = "", active = false) {
    this.field = field;
    this.title = title;
    this.name = name;
    this.value = value;
    this.active = active;
  }
}
