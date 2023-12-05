import {somarHours,subtrairHours} from '../../src/app/utils/calculationsHours'

describe('CalculationsHours', () => {
  it('should add 1 hour to a specific time', () => {
    const response = somarHours('01:00:00' ,'01:00:00' );

    expect(response).toBe("02:00:00");
  });
  it('should subtract 1 hour from a specific time', async () => {
    const response = subtrairHours('10:00:00', '02:00:00');

    expect(response).toBe("08:00:00")
  });
})
