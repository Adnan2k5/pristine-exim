import { cn } from "../Lib/utils";


export function AnimatedGradientText({
  children,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "group relative flex max-w-fit flex-row items-center rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40",
        className,
      )}
      {...props}
    >
      <div
        className={`absolute inset-0 block h-full w-full gradient-animation bg-gradient-to-r from-[#0d0b09] via-[#4d4b50] to-[#fdfcfb] bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
      />

      {children}
    </div>
  );
}
