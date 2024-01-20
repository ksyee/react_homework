import taing_logo from '../../assets/taing_logo.svg';

export default function Header() {
  return (
    <header className="px-16pxr py-12pxr tablet:px-40pxr tablet:py-14pxr desktop:px-70pxr desktop:py-30pxr">
      <h1>
        <img
          src={taing_logo}
          alt="logo"
          className="h-16pxr w-46pxr tablet:h-24pxr tablet:w-76pxr desktop:h-42pxr desktop:w-132pxr"
        />
      </h1>
    </header>
  );
}
