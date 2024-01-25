function Button({ type = 'button', moreItem, children }) {
  return (
    <button
      type={type}
      className="mx-auto mt-16pxr block rounded border border-zinc-500 px-8pxr py-4pxr"
      onClick={moreItem}
    >
      {children}
    </button>
  );
}

export default Button;
