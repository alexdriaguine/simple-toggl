import { formatDuration, getDurationFromStart } from "./duration";

test("formatDuration", () => {
  const data = [
    { input: 6480, expected: "01:48:00" },
    { input: 6060, expected: "01:41:00" },
    { input: 494, expected: "00:08:14" },
    { input: 797, expected: "00:13:17" },
  ];

  data.forEach(({ input, expected }) =>
    expect(formatDuration(input)).toBe(expected)
  );
});

test("getDurationFromStart", () => {
  const now = new Date("2021-06-12T10:52:07.876Z");
  const data = [
    { input: "2021-06-12T07:00:10+00:00", expected: 13918 },
    { input: "2021-06-12T07:00:50+00:00", expected: 13878 },
    { input: "2021-06-12T10:21:43+00:00", expected: 1825 },
    { input: "2021-06-12T10:29:58+00:00", expected: 1330 },
  ];

  data.forEach(({ input, expected }) =>
    expect(getDurationFromStart(input, now)).toBe(expected)
  );
});
