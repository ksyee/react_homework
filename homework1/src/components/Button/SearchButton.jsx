import { useState, useEffect } from 'react';

function SearchButton({ buttonClass }) {
  const [buttonSize, setButtonSize] = useState('22');

  useEffect(() => {
    function updateSize() {
      if (window.innerWidth < 768) {
        setButtonSize('22');
      } else if (window.innerWidth < 1280) {
        setButtonSize('28');
      } else {
        setButtonSize('50');
      }
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <button type="submit" className={buttonClass}>
      <svg
        width={buttonSize}
        height={buttonSize}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Header / Icon / Search" clipPath="url(#clip0_3252_7342)">
          <g id="Group" opacity="0.997">
            <path
              id="Vector"
              d="M18.6885 19.574L23.5015 24.464"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              id="Vector_2"
              d="M13 21.25C17.5563 21.25 21.25 17.5563 21.25 13C21.25 8.44365 17.5563 4.75 13 4.75C8.44365 4.75 4.75 8.44365 4.75 13C4.75 17.5563 8.44365 21.25 13 21.25Z"
              stroke="white"
              strokeWidth="1.5"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_3252_7342">
            <rect width="28" height="28" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

export default SearchButton;
