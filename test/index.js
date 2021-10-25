const { generate, getRgbStr, getPresetColors } = require('../src');

const presetColors = getPresetColors();

it('generate single color', () => {
  expect(generate('#F53F3F', { index: 1 })).toBe('#FFECE8');
  expect(generate('#F53F3F', { index: 1, dark: true })).toBe('#4D000A');
  expect(generate('#F53F3F', { index: 10 })).toBe('#4D000A');
  expect(generate('#F53F3F', { index: 10, dark: true })).toBe('#FFF0EC');
});

it('get Rgb String', () => {
  expect(getRgbStr('#F53F3F')).toBe('245,63,63');
});

it('red', () => {
  expect(generate('#F53F3F', { list: true })).toEqual(presetColors.red.light);
  expect(generate('#F53F3F', { list: true, dark: true })).toEqual(presetColors.red.dark);
  expect(generate('#F53F3F', { list: true })).toEqual([
    '#FFECE8', '#FDCDC5',
    '#FBACA3', '#F98981',
    '#F76560', '#F53F3F',
    '#CB272D', '#A1151E',
    '#770813', '#4D000A'
  ]);

  expect(generate('#F53F3F', { list: true, dark: true })).toEqual([
    '#4D000A', '#770611',
    '#A1161F', '#CB2E34',
    '#F54E4E', '#F76965',
    '#F98D86', '#FBB0A7',
    '#FDD1CA', '#FFF0EC'
  ]);
});

it('orangered', () => {
  expect(generate('#F77234', { list: true })).toEqual(presetColors.orangered.light);
  expect(generate('#F77234', { list: true, dark: true })).toEqual(presetColors.orangered.dark);
  expect(generate('#F77234', { list: true })).toEqual([
    '#FFF3E8', '#FDDDC3',
    '#FCC59F', '#FAAC7B',
    '#F99057', '#F77234',
    '#CC5120', '#A23511',
    '#771F06', '#4D0E00'
  ]);

  expect(generate('#F77234', { list: true, dark: true })).toEqual([
    '#4D0E00', '#771E05',
    '#A23714', '#CC5729',
    '#F77E45', '#F9925A',
    '#FAAD7D', '#FCC6A1',
    '#FDDEC5', '#FFF4EB'
  ]);
});

it('orange', () => {
  expect(generate('#FF7D00', { list: true })).toEqual(presetColors.orange.light);
  expect(generate('#FF7D00', { list: true, dark: true })).toEqual(presetColors.orange.dark);
  expect(generate('#FF7D00', { list: true })).toEqual([
    '#FFF7E8', '#FFE4BA',
    '#FFCF8B', '#FFB65D',
    '#FF9A2E', '#FF7D00',
    '#D25F00', '#A64500',
    '#792E00', '#4D1B00'
  ]);

  expect(generate('#FF7D00', { list: true, dark: true })).toEqual([
    '#4D1B00', '#793004',
    '#A64B0A', '#D26913',
    '#FF8D1F', '#FF9626',
    '#FFB357', '#FFCD87',
    '#FFE3B8', '#FFF7E8'
  ]);
});

it('gold', () => {
  expect(generate('#F7BA1E', { list: true })).toEqual(presetColors.gold.light);
  expect(generate('#F7BA1E', { list: true, dark: true })).toEqual(presetColors.gold.dark);
  expect(generate('#F7BA1E', { list: true })).toEqual([
    '#FFFCE8', '#FDF4BF',
    '#FCE996', '#FADC6D',
    '#F9CC45', '#F7BA1E',
    '#CC9213', '#A26D0A',
    '#774B04', '#4D2D00'
  ]);

  expect(generate('#F7BA1E', { list: true, dark: true })).toEqual([
    '#4D2D00', '#774B04',
    '#A26F0F', '#CC961F',
    '#F7C034', '#F9CC44',
    '#FADC6C', '#FCE995',
    '#FDF4BE', '#FFFCE8'
  ]);
});

it('yellow', () => {
  expect(generate('#FADC19', { list: true })).toEqual(presetColors.yellow.light);
  expect(generate('#FADC19', { list: true, dark: true })).toEqual(presetColors.yellow.dark);
  expect(generate('#FADC19', { list: true })).toEqual([
    '#FEFFE8', '#FEFEBE',
    '#FDFA94', '#FCF26B',
    '#FBE842', '#FADC19',
    '#CFAF0F', '#A38408',
    '#785D03', '#4D3800'
  ]);

  expect(generate('#FADC19', { list: true, dark: true })).toEqual([
    '#4D3800', '#785E07',
    '#A38614', '#CFB325',
    '#FAE13C', '#FBE94B',
    '#FCF374', '#FDFA9D',
    '#FEFEC6', '#FEFFF0'
  ]);
});

it('lime', () => {
  expect(generate('#9FDB1D', { list: true })).toEqual(presetColors.lime.light);
  expect(generate('#9FDB1D', { list: true, dark: true })).toEqual(presetColors.lime.dark);
  expect(generate('#9FDB1D', { list: true })).toEqual([
    '#FCFFE8', '#EDF8BB',
    '#DCF190', '#C9E968',
    '#B5E241', '#9FDB1D',
    '#7EB712', '#5F940A',
    '#437004', '#2A4D00'
  ]);

  expect(generate('#9FDB1D', { list: true, dark: true })).toEqual([
    '#2A4D00', '#447006',
    '#629412', '#84B723',
    '#A8DB39', '#B8E24B',
    '#CBE970', '#DEF198',
    '#EEF8C2', '#FDFFEE'
  ]);
});

it('green', () => {
  expect(generate('#00B42A', { list: true })).toEqual(presetColors.green.light);
  expect(generate('#00B42A', { list: true, dark: true })).toEqual(presetColors.green.dark);
  expect(generate('#00B42A', { list: true })).toEqual([
    '#E8FFEA', '#AFF0B5',
    '#7BE188', '#4CD263',
    '#23C343', '#00B42A',
    '#009A29', '#008026',
    '#006622', '#004D1C'
  ]);

  expect(generate('#00B42A', { list: true, dark: true })).toEqual([
    '#004D1C', '#046625',
    '#0A802D', '#129A37',
    '#1DB440', '#27C346',
    '#50D266', '#7EE18B',
    '#B2F0B7', '#EBFFEC'
  ]);
});

it('cyan', () => {
  expect(generate('#14C9C9', { list: true })).toEqual(presetColors.cyan.light);
  expect(generate('#14C9C9', { list: true, dark: true })).toEqual(presetColors.cyan.dark);
  expect(generate('#14C9C9', { list: true })).toEqual([
    '#E8FFFB', '#B7F4EC',
    '#89E9E0', '#5EDFD6',
    '#37D4CF', '#14C9C9',
    '#0DA5AA', '#07828B',
    '#03616C', '#00424D'
  ]);

  expect(generate('#14C9C9', { list: true, dark: true })).toEqual([
    '#00424D', '#06616C',
    '#11838B', '#1FA6AA',
    '#30C9C9', '#3FD4CF',
    '#66DFD7', '#90E9E1',
    '#BEF4ED', '#F0FFFC'
  ]);
});

it('blue', () => {
  expect(generate('#3491FA', { list: true })).toEqual(presetColors.blue.light);
  expect(generate('#3491FA', { list: true, dark: true })).toEqual(presetColors.blue.dark);
  expect(generate('#3491FA', { list: true })).toEqual([
    '#E8F7FF', '#C3E7FE',
    '#9FD4FD', '#7BC0FC',
    '#57A9FB', '#3491FA',
    '#206CCF', '#114BA3',
    '#063078', '#001A4D'
  ]);

  expect(generate('#3491FA', { list: true, dark: true })).toEqual([
    '#001A4D', '#052F78',
    '#134CA3', '#2971CF',
    '#469AFA', '#5AAAFB',
    '#7DC1FC', '#A1D5FD',
    '#C6E8FE', '#EAF8FF'
  ]);
});

it('arcoblue', () => {
  expect(generate('#165DFF', { list: true })).toEqual(presetColors.arcoblue.light);
  expect(generate('#165DFF', { list: true, dark: true })).toEqual(presetColors.arcoblue.dark);
  expect(generate('#165DFF', { list: true })).toEqual([
    '#E8F3FF', '#BEDAFF',
    '#94BFFF', '#6AA1FF',
    '#4080FF', '#165DFF',
    '#0E42D2', '#072CA6',
    '#031A79', '#000D4D'
  ]);

  expect(generate('#165DFF', { list: true, dark: true })).toEqual([
    '#000D4D', '#041B79',
    '#0E32A6', '#1D4DD2',
    '#306FFF', '#3C7EFF',
    '#689FFF', '#93BEFF',
    '#BEDAFF', '#EAF4FF'
  ]);
});

it('purple', () => {
  expect(generate('#722ED1', { list: true })).toEqual(presetColors.purple.light);
  expect(generate('#722ED1', { list: true, dark: true })).toEqual(presetColors.purple.dark);
  expect(generate('#722ED1', { list: true })).toEqual([
    '#F5E8FF', '#DDBEF6',
    '#C396ED', '#A871E3',
    '#8D4EDA', '#722ED1',
    '#551DB0', '#3C108F',
    '#27066E', '#16004D'
  ]);

  expect(generate('#722ED1', { list: true, dark: true })).toEqual([
    '#16004D', '#27066E',
    '#3E138F', '#5A25B0',
    '#7B3DD1', '#8E51DA',
    '#A974E3', '#C59AED',
    '#DFC2F6', '#F7EDFF'
  ]);
});

it('pinkpurple', () => {
  expect(generate('#D91AD9', { list: true })).toEqual(presetColors.pinkpurple.light);
  expect(generate('#D91AD9', { list: true, dark: true })).toEqual(presetColors.pinkpurple.dark);
  expect(generate('#D91AD9', { list: true })).toEqual([
    '#FFE8FB', '#F7BAEF',
    '#F08EE6', '#E865DF',
    '#E13EDB', '#D91AD9',
    '#B010B6', '#8A0993',
    '#650370', '#42004D'
  ]);

  expect(generate('#D91AD9', { list: true, dark: true })).toEqual([
    '#42004D', '#650370',
    '#8A0D93', '#B01BB6',
    '#D92ED9', '#E13DDB',
    '#E866DF', '#F092E6',
    '#F7C1F0', '#FFF2FD'
  ]);
});

it('magenta', () => {
  expect(generate('#F5319D', { list: true })).toEqual(presetColors.magenta.light);
  expect(generate('#F5319D', { list: true, dark: true })).toEqual(presetColors.magenta.dark);
  expect(generate('#F5319D', { list: true })).toEqual([
    '#FFE8F1', '#FDC2DB',
    '#FB9DC7', '#F979B7',
    '#F754A8', '#F5319D',
    '#CB1E83', '#A11069',
    '#77064F', '#4D0034'
  ]);

  expect(generate('#F5319D', { list: true, dark: true })).toEqual([
    '#4D0034', '#770850',
    '#A1176C', '#CB2B88',
    '#F545A6', '#F756A9',
    '#F97AB8', '#FB9EC8',
    '#FDC3DB', '#FFE8F1'
  ]);
});
