export default function Avatar({ src, alt, className = '', height = 70, width = 70 }){
    return (
      <img
        className={`avatar rounded-circle ${className}`}
        src={src}
        alt={alt}
        width={height}
        height={width}
      />
    );
}
