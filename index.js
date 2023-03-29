// 如果想用es6的形式导出，需要使用babel插件进行转换
// @babel/core@7.4.5  @babel/preset-env@7.4.5
export function ZcyZooTeam(str) {
  return 'Zcy' + str;
}

export function happyDay(day, mounth) {
  return 'happy ' + (day * mounth) + ' days!';
}