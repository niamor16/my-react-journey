export default function Card({children, className})
{
  return (
    <div className={`card ${className}`}>
      {/* <div className="card-header"></div> */}
      <div className="card-body">{children}</div>
    </div>
  );
}