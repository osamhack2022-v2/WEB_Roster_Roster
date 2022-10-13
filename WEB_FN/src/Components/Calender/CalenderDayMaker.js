function CalenderDayMaker() {
  const date = new Date();

  //년도, 월, 일 변수
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  //월의 첫번째 요일 구하기
  const firstDate = new Date(year, date.getMonth(), 1);
  const firstDay = firstDate.getDay();

  //월의 마지막 일 구하기
  const lastDate = new Date(year, month, 0);
  const lastDateDay = lastDate.getDate();

  //달력의 주 수(행의 값) 구하기
  const calenderWeekCount = Math.ceil((firstDay + lastDateDay) / 7);
  let week = [];
  let calenderDay = 0;
  let calenderPos = 0;

  for (let row = 0; row < calenderWeekCount; row++) {
    const dayList= [];

    for (let col = 0; col < 7; col++) {
      if (firstDay <= calenderPos) {
        calenderDay++;
          if (calenderDay > 31) {
            dayList.push({
              id: calenderPos,
              day: ' ',
            });
          }else{
            dayList.push({
              id: calenderPos,
              day: calenderDay,
            })
          }
      }else{
        dayList.push({
          id: calenderPos,
          day: ' ',
        });
      }
    calenderPos++;
  }
  week.push({
    weekCount: row,
    dayList
  });
}
  return week
}



const week = CalenderDayMaker();
console.log(week)

export default week