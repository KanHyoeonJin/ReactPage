import React, { useState, useEffect } from "react";

function Clock(props) {
  const { timezone } = props;
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", { timeZone: timezone, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' });
      const formattedDate = formatter.format(date);
      setTimeString(formattedDate);
    }, 1000); // 1초마다 실행

    // cleanup 함수
    return () => clearInterval(intervalId);
  }, [timezone]);

  return (
    <span>{timeString}</span>
  );
}

function InfoList(props) {
  const { locations, countryId } = props;

  // 특정 국가의 정보만 필터링하여 출력합니다.
  const filteredLocations = locations.filter(location => location.id === parseInt(countryId));

  return (
    <div>
      {filteredLocations.map((location) => (
        <div key={location.id}>
          <fieldset className="Info">
            <span>국가 : &nbsp;&nbsp; {location.name}</span><br />
            <span>수도 : &nbsp;&nbsp; {location.capitalcity}</span><br />
            <span>추천 계절 : &nbsp;&nbsp; {location.season}</span><br />
            <span>현지 시간 : &nbsp;&nbsp; <Clock timezone={location.timezone} /></span>
          </fieldset>
        </div>
      ))}
    </div>
  );
}

export default InfoList;
