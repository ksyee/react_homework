import { useEffect } from 'react';
import SearchButton from '../Button/SearchButton';

function SearchInput() {
  useEffect(() => {
    function handleSearchPlaceholder() {
      const searchInput = document.querySelector('input[type=search]');

      if (window.innerWidth < 768) {
        searchInput.placeholder = '검색';
      } else {
        searchInput.placeholder =
          'TV 프로그램, 영화 제목 및 출연진으로 검색해보세요';
      }

      window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
          searchInput.placeholder = '검색';
        } else {
          searchInput.placeholder =
            'TV 프로그램, 영화 제목 및 출연진으로 검색해보세요';
        }
      });
    }

    handleSearchPlaceholder();
  }, []);

  return (
    <div className="w-full">
      <h2 className="sr-only">검색</h2>
      <form className="relative min-w-224pxr">
        <label className="sr-only">검색</label>
        <input
          className="relative w-full border-b-2 bg-transparent px-4pxr py-6pxr text-16pxr font-semibold leading-none text-white placeholder:font-semibold placeholder:text-[#404040] tablet:text-20pxr desktop:px-8pxr desktop:py-16pxr desktop:text-38pxr"
          type="search"
          placeholder="검색"
        />
        <SearchButton buttonClass="absolute top-1/2 right-0 -translate-y-[60%]" />
      </form>
    </div>
  );
}

export default SearchInput;
