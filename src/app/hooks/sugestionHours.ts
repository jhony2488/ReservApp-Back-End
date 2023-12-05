import { ReservationRepository } from '../repositories/Reservations';
import { somarHours, subtrairHours } from '../utils/calculationsHours';
import { somarOneDay, subtrairOneDay } from '../utils/calculationsDate';

export async function useSugestionHours(date:string, hour:string) {
  const reservation = new ReservationRepository();
  let reservationOne: { date: string; hour: string } = { date: '', hour: '' };
  let reservationTwo: { date: string; hour: string } = { date: '', hour: '' };
  let reservationThree: { date: string; hour: string } = { date: '', hour: '' };
  let reservationFour: { date: string; hour: string } = { date: '', hour: '' };
  let reservationFive: { date: string; hour: string } = { date: '', hour: '' };
  let reservationSix: { date: string; hour: string } = { date: '', hour: '' };
  let isFoundFreeTime = true;
  let isFoundFreeTimeTwo = true;
  let isFoundFreeTimeThree = true;
  let isFoundFreeTimeFour = true;
  let isFoundFreeTimeFive = true;
  let isFoundFreeTimeSix = true;



  await reservation.findByQuery({ date, hour }).then(async (reservationItems) => {
    if (typeof reservationItems === 'object' && reservationItems && reservationItems !== null) {
      reservationItems = [reservationItems];
    }

    if (reservationItems.length > 0) {
      let hourGet = hour;
      let dateGet = date;
      while (isFoundFreeTime) {
        dateGet = await  hourGet === '23:00:00' || hourGet === '23:00:00' ? somarOneDay(dateGet) : dateGet;
        hourGet = await hourGet === '22:00:00' || hourGet === '23:00:00' ? '08:00:00' : somarHours(hourGet, '01:00:00');


        await reservation.findByQuery({ date: dateGet, hour: hourGet }).then((reservation) => {
          if (typeof reservation === 'object' && reservation && reservation!== null) {
            reservation = [reservation];
          }
          if (reservation.length === 0) {
            isFoundFreeTime = false;
            reservationOne = { date: dateGet, hour: hourGet };
            hourGet = somarHours(hourGet, '01:00:00');
          }
        });
      }

      while (isFoundFreeTimeTwo) {
        dateGet = await hourGet === '23:00:00' || hourGet === '23:00:00' ? somarOneDay(dateGet) : dateGet;
        hourGet = await hourGet === '22:00:00' || hourGet === '23:00:00' ? '08:00:00' : somarHours(hourGet, '01:00:00');


        await reservation.findByQuery({ date: dateGet, hour: hourGet }).then((reservation) => {
          if (typeof reservation === 'object' && reservation && reservation!== null) {
            reservation = [reservation];
          }
          if (reservation.length === 0) {
            isFoundFreeTimeTwo = false;
            reservationTwo = { date: dateGet, hour: hourGet };
            hourGet = somarHours(hourGet, '01:00:00');
          }
        });
      }

      while (isFoundFreeTimeThree) {
        dateGet = await hourGet === '23:00:00' || hourGet === '23:00:00' ? somarOneDay(dateGet) : dateGet;
        hourGet = await hourGet === '22:00:00' || hourGet === '23:00:00' ? '08:00:00' : somarHours(hourGet, '01:00:00');


        await reservation.findByQuery({ date: dateGet, hour: hourGet }).then((reservation) => {
          if (typeof reservation === 'object' && reservation && reservation!== null) {
            reservation = [reservation];
          }
          if (reservation.length === 0) {
            isFoundFreeTimeThree = false;
            reservationThree = { date: dateGet, hour: hourGet };
            hourGet = somarHours(hourGet, '01:00:00');
          }
        });
      }
      let countSearch=0

      while (isFoundFreeTimeFour) {
        dateGet = await countSearch ===0 && hourGet === '08:00:00' || hourGet === '07:00:00' ? subtrairOneDay(reservationOne.date)  : hourGet === '08:00:00' || hourGet === '07:00:00' ? subtrairOneDay(dateGet) : dateGet;
        hourGet = await countSearch ===0 ?  subtrairHours(reservationOne.hour, '01:00:00') : hourGet === '08:00:00' || hourGet === '07:00:00' ? '22:00:00' : subtrairHours(hourGet, '01:00:00');


        countSearch=1

        await reservation.findByQuery({ date: dateGet, hour: hourGet }).then((reservation) => {
          if (typeof reservation === 'object' && reservation && reservation!== null) {
            reservation = [reservation];
          }
          if (reservation.length === 0) {
            isFoundFreeTimeFour = false;
            reservationFour = { date: dateGet, hour: hourGet };
            hourGet = subtrairHours(hourGet, '01:00:00');
          }
        });
      }

      while (isFoundFreeTimeFive) {
        dateGet = await hourGet === '08:00:00' || hourGet === '07:00:00' ? subtrairOneDay(dateGet) : dateGet;
        hourGet = await  hourGet === '08:00:00' || hourGet === '07:00:00' ? '22:00:00' : subtrairHours(hourGet, '01:00:00');


        await reservation.findByQuery({ date: dateGet, hour: hourGet }).then((reservation) => {
          if (typeof reservation === 'object' && reservation && reservation!== null) {
            reservation = [reservation];
          }
          if (reservation.length === 0) {
            isFoundFreeTimeFive = false;
            reservationFive = { date: dateGet, hour: hourGet };
            hourGet = subtrairHours(hourGet, '01:00:00');
          }
        });
      }

      while (isFoundFreeTimeSix) {
        dateGet = await hourGet === '08:00:00' || hourGet === '07:00:00' ? subtrairOneDay(dateGet) : dateGet;
        hourGet = await hourGet === '08:00:00' || hourGet === '07:00:00' ? '22:00:00' : subtrairHours(hourGet, '01:00:00');


        await reservation.findByQuery({ date: dateGet, hour: hourGet }).then((reservation) => {
          if (typeof reservation === 'object' && reservation && reservation!== null) {
            reservation = [reservation];
          }
          if (reservation.length === 0) {
            isFoundFreeTimeSix = false;
            reservationSix = { date: dateGet, hour: hourGet };
            hourGet = subtrairHours(hourGet, '01:00:00');
          }
        });
      }
    }
  });

  return [reservationOne, reservationTwo, reservationThree, reservationFour, reservationFive, reservationSix];
}

export async function useGapFilling(date: string, hour:string) {
  const reservation = new ReservationRepository();

  let reservationOne: { date: string; hour: string } = { date: '', hour: '' };
  let reservationTwo: { date: string; hour: string } = { date: '', hour: '' };
  let reservationThree: { date: string; hour: string } = { date: '', hour: '' };
  let isFoundFreeTime = true;

  let hourGet = hour;
  let dateGet = date;

  while (isFoundFreeTime) {
    reservationOne = { date: '', hour: '' };
    reservationTwo = { date: '', hour: '' };
    reservationThree = { date: '', hour: '' };

    hourGet = hourGet === '22:00:00' || hourGet === '23:00:00' ? '08:00:00' : somarHours(hourGet, '01:00:00');
    dateGet = hourGet === '23:00:00' || hourGet === '23:00:00' ? somarOneDay(dateGet) : dateGet;

    const hourAfter =
      hourGet === '22:00:00' || hourGet === '23:00:00'
        ? '21:00:00'
        : hourGet === '08:00:00'
        ? '22:00:00'
        : subtrairHours(hourGet, '01:00:00');
    const hourMeio =
      hourAfter === '22:00:00' ? '08:00:00' : hourAfter === '08:00:00' ? '09:00:00' : somarHours(hourAfter, '01:00:00');
    const hourBefore =
      hourMeio === '22:00:00' ? '08:00:00' : hourAfter === '08:00:00' ? '09:00:00' : somarHours(hourMeio, '01:00:00');

    let dateAfter: string = dateGet;
    let dateMeio: string = dateGet;
    let dateBefore: string = dateGet;

    dateAfter = hourGet === '22:00:00' || hourGet === '23:00:00' ? somarOneDay(dateGet) : dateGet;
    dateMeio = hourAfter === '22:00:00' || hourAfter === '23:00:00' ? somarOneDay(dateGet) : dateGet;
    dateBefore = hourBefore === '22:00:00' || hourBefore === '23:00:00' ? somarOneDay(dateGet) : dateGet;

    await reservation.findByQuery({ date: dateAfter, hour: hourAfter }).then((reservation) => {
      if (typeof reservation === 'object' && reservation && reservation!== null) {
        reservation = [reservation];
      }
      if (reservation.length > 0) {
        reservationOne = { date: dateAfter, hour: hourAfter };
      }
    });

    await reservation.findByQuery({ date: dateMeio, hour: hourMeio }).then((reservation) => {
      if (typeof reservation === 'object' && reservation && reservation!== null) {
        reservation = [reservation];
      }
      if (reservation.length === 0) {
        reservationTwo = { date: dateMeio, hour: hourMeio };
      }
    });

    await reservation.findByQuery({ date: dateBefore, hour: hourBefore }).then((reservation) => {
      if (typeof reservation === 'object' && reservation && reservation!== null) {
        reservation = [reservation];
      }
      if (reservation.length > 0) {
        reservationThree = { date: dateBefore, hour: hourBefore };
      }
    });

    hourGet = somarHours(hourGet, '01:00:00');

    if (reservationOne.date != '' && reservationTwo.date != '' && reservationThree.date != '') {
      isFoundFreeTime = false;
    }
  }

  return [reservationOne, reservationTwo, reservationThree];
}
