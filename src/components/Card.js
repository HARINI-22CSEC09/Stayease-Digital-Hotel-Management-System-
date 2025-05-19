export function Card({ children, className }) {
    return <div className={`bg-white p-4 rounded-lg shadow-md ${className}`}>{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div className="mt-2">{children}</div>;
  }
  