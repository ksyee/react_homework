import { useEffect, useState } from 'react';
import pb from './utils/pb';
import Button from './components/Button';
import ContentCard from './components/ContentCard';

function App() {
  const [contentData, setContentData] = useState(null);
  const [renderCount, setRenderCount] = useState(3);

  function moreItem() {
    setRenderCount(renderCount + 3);
  }

  useEffect(() => {
    (async () => {
      try {
        const data = await pb.collection('original_contents').getFullList();

        setContentData(data);

        console.log('데이터 가져오기 성공');
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!contentData) {
    return (
      <main className="flow-root h-screen bg-black text-white">
        <p className="mt-20pxr text-center text-20pxr">로딩중...</p>
      </main>
    );
  }

  return (
    <main className="h-screen bg-black p-16pxr text-white">
      <ul className="grid grid-cols-3 gap-x-8pxr">
        {contentData.map((content, index) => {
          if (index < renderCount) {
            return <ContentCard key={content.id} content={content} />;
          }
        })}
      </ul>
      {renderCount > contentData.length ? null : (
        <Button moreItem={moreItem}>더 보기</Button>
      )}
    </main>
  );
}

export default App;
