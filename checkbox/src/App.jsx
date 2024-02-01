import InputRadio from './components/InputRadio';
import { useState, useEffect } from 'react';

const itemList = ['오늘', '내일', '내일 모레'];

function App() {
  const [obj, setObj] = useState({
    activeButton: 0,
    chicken: '',
    chickenColor: '',
    activeStyle: 'font-bold border border-black rounded-full p-4pxr',
  });

  useEffect(() => {
    // if (obj.activeButton === 0) {
    //   setObj((obj) => ({
    //     ...obj,
    //     chicken: '후라이드',
    //     chickenColor: 'text-orange-400',
    //   }));
    // } else if (obj.activeButton === 1) {
    //   setObj((obj) => ({
    //     ...obj,
    //     chicken: '양념',
    //     chickenColor: 'text-red-400',
    //   }));
    // } else if (obj.activeButton === 2) {
    //   setObj((obj) => ({
    //     ...obj,
    //     chicken: '빅맥',
    //     chickenColor: 'text-yellow-300 bg-black rounded-full p-8pxr',
    //   }));
    // }

    const options = [
      { chicken: '후라이드', chickenColor: 'text-orange-400' },
      { chicken: '양념', chickenColor: 'text-red-500' },
      {
        chicken: '빅맥',
        chickenColor: 'text-yellow-300 bg-black rounded-full p-8pxr',
      },
    ];

    const newValue = options[obj.activeButton] || options[0];

    setObj((obj) => ({
      ...obj,
      ...newValue,
    }));
  }, [obj.activeButton]);

  return (
    <section className="text-center">
      <h1 className="text-32pxr font-bold">치킨 추천</h1>
      {itemList.map((item, index) => {
        return (
          <InputRadio
            key={index}
            index={index}
            styleProps="ms-8pxr me-4pxr"
            labelName={item}
            name="radio"
            obj={obj}
            setObj={setObj}
          />
        );
      })}

      <div className="mt-16pxr">
        <h2 className="text-18pxr font-bold mb-16pxr">뭐 먹을거임</h2>
        <span className={`${obj.chickenColor} text-22pxr font-black`}>
          {obj.chicken}
        </span>
      </div>
    </section>
  );
}

export default App;
