// 因为已经配置了babel，所以可以使用 es6 的方式进行引入
import { ZcyZooTeam, happyDay } from './index';

test("测试ZcyZooTeam", () => {
  expect(ZcyZooTeam("Zero")).toBe("ZcyZooTeam");
});

test("测试happy day", () => {
  expect(happyDay(30, 12)).toBe("happy 360 days!");
});