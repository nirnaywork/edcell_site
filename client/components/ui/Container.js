export function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-[92rem] px-6 md:px-12 xl:px-24 ${className}`}>
      {children}
    </div>
  );
}
