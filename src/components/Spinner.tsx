interface SpinnerProps {
  text?: string
  className?: string
}

export default function Spinner({ text = 'Loading...', className = '' }: SpinnerProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="w-12 h-12 border-3 border-gray-200 dark:border-gray-700 border-t-[#732154] rounded-full animate-spin mx-auto mb-4"></div>
      <span className="text-sm text-gray-800 dark:text-gray-200">{text}</span>
    </div>
  )
}
