export default class BetweenFilterNumber {
  constructor(
    gteName,//placeholder
    lteName,//placeholder
    title,
    gteField = "",
    lteField = "",
    active = false
  ) {
    this.lteName = lteName;
    this.gteName = gteName;
    this.title = title;
    this.lteField = lteField;
    this.gteField = gteField;
    this.active = active;
  }
}
