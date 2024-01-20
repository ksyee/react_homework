import SearchModal from './components/Modal/Search/SearchModal';
import Header from './components/Header/Header';

function App() {
  const data = [
    {
      rank: 2,
      title: '미스터 트롯2: 새로운 전설의 시작',
    },
    {
      rank: 3,
      title: '유 퀴즈 온더 블럭',
    },
    {
      rank: 4,
      title: '대행사',
    },
    {
      rank: 5,
      title: 'SHOW ME THE MONEY 11',
    },
    {
      rank: 1,
      title: '재벌집 막내아들',
    },
    {
      rank: 10,
      title: '술꾼도시여자들',
    },
    {
      rank: 6,
      title: '미씽: 그들이 있었다2',
    },
    {
      rank: 7,
      title: '술꾼도시여자들2',
    },
    {
      rank: 8,
      title: '캐나다 체크인',
    },
    {
      rank: 9,
      title: '미씽: 그들이 있었다 - 그들을 다 만나다',
    },
  ];

  const searchList = [];

  const date = new Date().toLocaleDateString('ko-KR');
  const time = new Date().toLocaleTimeString('ko-KR');

  return (
    <div className="bg-black">
      <Header />
      <main className="flex justify-center px-38pxr py-20pxr">
        <SearchModal
          data={data}
          searchList={searchList}
          date={date}
          time={time}
        />
      </main>
    </div>
  );
}

export default App;
