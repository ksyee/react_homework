import React from 'react';
import SearchInput from '../../Input/SearchInput';

function SearchModal({ data, searchList, date, time }) {
  return (
    <>
      <section className="flex w-full max-w-522pxr flex-col items-center desktop:w-10/12 desktop:max-w-input-desktop">
        <SearchInput />
        <div className="mt-40pxr flex w-full">
          <div className="hidden tablet:block tablet:flex-1">
            <h3 className="font-semibold text-[#c4c4c4] desktop:text-28pxr">
              최근 검색어
            </h3>
            {searchList.length < 1 ? (
              <p className="mt-12pxr text-12pxr text-[#a6a6a6] desktop:mt-20pxr desktop:text-22pxr">
                검색 결과가 없습니다.
              </p>
            ) : (
              searchList.map((item) => {
                return (
                  <ul
                    className="text-[#a6a6a6] desktop:text-22pxr"
                    key={item.id}
                  >
                    <li>{item.title}</li>
                  </ul>
                );
              })
            )}
          </div>
          <div className="mx-35pxr hidden h-full w-1pxr bg-[#2b2b2b] tablet:block"></div>
          <div className="tablet:flex-1">
            <h3 className="text-16pxr font-semibold text-[#c4c4c4] desktop:text-28pxr">
              실시간 인기 검색어
            </h3>
            <ul className="mt-20pxr flex flex-col gap-8pxr desktop:mt-36pxr desktop:gap-16pxr">
              {data
                .sort((a, b) => a.rank - b.rank)
                .map((item) => (
                  <li
                    key={item.rank}
                    className="relative text-12pxr desktop:text-22pxr"
                  >
                    <span className="absolute left-0 top-0 h-10 w-10 text-red-500">
                      {item.rank}
                    </span>
                    <span className="ms-18pxr text-[#a6a6a6]">
                      {item.title}
                    </span>
                  </li>
                ))}
            </ul>
            <time className="mt-16pxr block text-12pxr text-[#6b6b6b] desktop:text-22pxr">
              {`${date} ${time}`} 기준
            </time>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchModal;
