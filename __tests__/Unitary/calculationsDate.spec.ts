import {somarOneDay,subtrairOneDay} from '../../src/app/utils/calculationsDate'

describe('CalculationsDate', () => {
  it('should add + 1 day to a date', () => {
    const response = somarOneDay('03/12/2023');

    expect(response).toBe("04/12/2023");
  });
  it('should subtract 1 day from a date', () => {
    const response = subtrairOneDay('03/12/2023');

    expect(response).toBe("02/12/2023");
  });
})
