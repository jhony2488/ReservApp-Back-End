import { getHourAbsents } from '../../src/app/utils/getHourAbsents';

describe('GetHourAbsents', () => {
  it('should return the times that do not have reservations', () => {
    const response = getHourAbsents([
      { date: '02/01/202', hour: '10:00:00' },
      { date: '02/01/202', hour: '10:00:00' },
    ]);

    expect(response).toEqual(["08:00:00", "09:00:00", "11:00:00", "12:00:00", "13:00:00", "14:00:00", "15:00:00", "16:00:00", "17:00:00", "18:00:00", "19:00:00", "20:00:00", "21:00:00", "22:00:00"]);
  });
});
