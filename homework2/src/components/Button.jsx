function Button({ type, moreItem, children }) {
  return (
    <button
      onClick={moreItem}
      type={type}
      className="mx-auto mt-16pxr block rounded border border-zinc-500 px-8pxr py-4pxr"
    >
      {children}
    </button>
  );
}

export default Button;
