import { filterObjectsBeforeCurrentDateTime } from '../../src/app/utils/currentFormDateTimeAndFilter';

describe('CurrentFormDateTimeAndFilter', () => {
  it('should filter objects with a date and time less than the current date and time', () => {
    const response = filterObjectsBeforeCurrentDateTime([
      { date: '02/01/202', hour: '10:00:00' },
      { date: '02/01/202', hour: '10:00:00' },
    ]);

    expect(response).toEqual([{"date": "02/01/202", "hour": "10:00:00"}, {"date": "02/01/202", "hour": "10:00:00"}]);
  });
});
