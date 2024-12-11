import React from "react";
import { useParams } from "react-router-dom";
import InfoList from "./InfoList";
import Commentm from "./Commentm";

function CountryInfo(props) {
    const { countryId } = useParams();

    const locations = [
        {
          id: 1,
          name: "한국",
          locale: "ko-KR",
          timezone: "Asia/Seoul",
          season: "사계절",
          capitalcity: "서울",
		  postimg:"/Tripimg/koreatrip.jpg",
		  imageSrc: "/FlagImg/korea.jpg",
          posting: `경복궁은 조선 왕조 제일의 법궁이다.
            북으로 북악산을 기대어 자리 잡았고 정문인 광화문 앞으로는 넓은 육조거리(지금의 세종로)가 펼쳐져, 왕도인 한양(서울) 도시 계획의 중심이기도 하다.\n\n
            
            궁궐 안에는 왕과 관리들의 정무 시설, 왕족들의 생활 공간, 휴식을 위한 후원 공간이 조성되었다.
            또한 왕비의 중궁, 세자의 동궁, 고종이 만든 건청궁 등 궁궐안에 다시 여러 작은 궁들이 복잡하게 모인 곳이기도 하다.\n\n
            
            일제 강점기에는 대부분의 건물들을 철거하여 근정전 등 극히 일부 중심 건물만 남았고, 조선 총독부 청사를 지어 궁궐 자체를 가려버렸다.
            1990년부터 본격적인 복원 사업이 추진되어 총독부 건물을 철거하고 흥례문 일원을 복원하였으며, 왕과 왕비의 침전, 동궁, 건청궁, 태원전 일원의 모습을 되찾고 있다.\n\n
            
            광화문 - 흥례문 - 근정문 - 근정전 - 사정전 - 강녕전 - 교태전을 잇는 중심 부분은 궁궐의 핵심 공간이며, 기하학적 질서에 따라 대칭적으로 건축 되었다.
            그러나 중심부를 제외한 건축물들은 비대칭적으로 배치되어 변화와 통일의 아름다움을 함께 갖추었다.
            경복궁의 명칭은 조선 왕조가 세워지고 3년 지난 후 완공되었다.
            개국공신 정도전은 태조의명에 따라 경복궁이라는 궁궐 이름을 비롯해 강녕전, 교태전, 연생전, 경성전, 사정전, 근정전 등 주요 전각의 이름을 지었다.
            이 이름은 ‘새 왕조가 큰 복을 누려 번영할 것’이라는 의미를 담고 있다.`,
        },
        {
          id: 2,
          name: "중국",
          locale: "zh-CN",
          timezone: "Asia/Shanghai",
          season: "사계절",
          capitalcity: "베이징",
		  postimg:"/Tripimg/chinatrip.jpg",
		  imageSrc: "/FlagImg/China.jpg",
          posting:`중국 하얼빈 빙설제\n\n

            하얼빈은 영하 30도에 육박하는 극강의 추위에도 최성수기를 맞이하는 유명한 대표적 겨울 관광지이다. 
            매년 1월 5일 전후로 시작돼 한 달간 개최되는 눈과 얼음의 축제인 국제 빙설제가 열리면서 도시 전체가 축제 분위기를 자아내기 때문이다. \n\n
            
            국제 빙설제는 12월 말부터 일부 장소들을 개방하고 2월 중하순까지 관광객을 받는다.
            크게 얼음과 눈, 조명 3가지의 테마로 이루어지며, 각각의 전시장이 따로 마련돼 있다. \n\n
            
            빙설대세계는 36년의 역사를 자랑하는 하얼빈 국제빙서제의 주요 행사장이다. 
            개막행사가 열리며 다양한 공연과 불꽃놀이도 감상할 수 있다. 
            전시장은 2천여 개 이상의 얼음조각과 얼음성, 놀이기구와 다양한 테마의 무대쇼 등으로 구성되며, 야간에는 조명도 밝힌다.\n\n
            
			운영 : 11:00~21:00 (축제 기간 중에만)\n
            위치 : 송화강 북쪽\n
            입장료 : 330CNY\n`,
        },
        {
          id: 3,
          name: "일본",
          locale: "ja-JP",
          timezone: "Asia/Tokyo",
          season: "사계절",
          capitalcity: "도쿄",
		  postimg:"/Tripimg/japantrip.jpg",
		  imageSrc: "/FlagImg/Japan.jpg",
          posting:`팜 도미타(ファーム富田)\n\n

            주소 : １５号 Kisenkita, Nakafurano, Sorachi District, Hokkaido 071-0704\n\n
            
            삿포로에서 약 2시간 거리에 위치한 도시, 후라노는 보랏빛을 가진 라벤더를 실컷 볼 수 있기로 유명하다. 
            그 중 팜 도미타는 후라노를 대표하는 곳이다.\n\n
            
            팜 도미타는 햇빛이 많이 들어오고 환기가 잘 되는 넓은 평원에 위치해 있어 라벤더를 재배하기에 적합한 환경을 갖추고 있다. 
            지금은 5헥타르의 라벤더 밭을 비롯해 양귀비, 유채꽃, 안개꽃 등 다채로운 꽃들과 보라색 융단이 펼쳐지는 언덕의 광경을 보기 위해 한 해 100만 명의 관광객들이 방문하는 후라노를 대표하는 라벤더 명소가 되었다. 
            또한 더움을 식힐 수 있는 팜 도미타의 대표적인 라벤더 추출물을 사용하여 만든 라벤더 소프트 아이스크림도 있으니 맛보길 추천한다.\n\n
            
            라벤더는 6월 말을 시작으로 라벤더가 피기 시작해 7월 중순부터 7월 말까지 보랏빛 라벤더 물결의 장관을 이루는 모습을 볼 수 있다. 
            7월 말이 되면 라벤더를 수확하는 시기라서 늦어도 8월 초까지는 후라노를 방문하는 것을 권한다.
            물론 품종에 따라 8월 중순까지도 라벤더를 볼 수는 있지만 위와 같은 사진 속 풍경을 원한다면 7월 중순을 추천한다.`,
        },
        {
          id: 4,
          name: "이집트",
          locale: "ar-EG",
          timezone: "Africa/Cairo",
          season: "여름",
          capitalcity: "카이로",
          imageSrc: "",
		  postimg:"",
        },
        {
          id: 5,
          name: "싱가폴",
          locale: "en-SG",
          timezone: "Asia/Singapore",
          season: "사계절",
          capitalcity: "싱가폴",
          imageSrc: "",
		  postimg:"",
        },
        {
          id: 6,
          name: "몰디브",
          locale: "dv-MV",
          timezone: "Indian/Maldives",
          season: "여름",
          capitalcity: "말레",
          imageSrc: "",
		  postimg:"",
        },
        {
          id: 7,
          name: "스페인",
          locale: "es-ES",
          timezone: "Europe/Madrid",
          season: "사계절",
          capitalcity: "마드리드",
          imageSrc: "",
		  postimg:"",
        },
        {
          id: 8,
          name: "베트남",
          locale: "vi-VN",
          timezone: "Asia/Ho_Chi_Minh",
          season: "여름",
          capitalcity: "하노이",
          imageSrc: "",
		  postimg:"",
        },
      ];

    const selectedCountry = locations.find(country => country.id === parseInt(countryId));

    return (
        <div className='contentsArea'>
          	<div className="topbg">
				<div className="top">
					<div className='Infolist'>
						<InfoList locations={locations} countryId={parseInt(countryId)} />
					</div>
					<div className="imgfile">
						{selectedCountry && <img src={selectedCountry.imageSrc} alt={selectedCountry.name} />}
					</div>
				</div>
            </div>
            <div className='post'>
				<div className="postimg">
				{selectedCountry && <img className="img" src={selectedCountry.postimg} alt={selectedCountry.name} />}
				</div>
                <fieldset>
                    {selectedCountry && selectedCountry.posting.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                    ))}
                </fieldset>
            </div>
            <div className='comment'>
                <Commentm />
            </div>
        </div>
    );
}


export default CountryInfo;