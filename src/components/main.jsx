export default function Main(props) {
  const { data } = props;
  const isImage = data.url.split(".").pop() ==='jpg';
  
  return (
    <div className="imgContainer">
      
      {isImage ? <img src={data.hdurl} />
      :  <iframe width={960} height={540} src={data.url}
      allowFullScreen 
      >
      </iframe>}
      
      {/* <img src={data.hdurl} alt={data.title || "bg-img"} 
      className="bgImage" />; */}
      
    </div>
  );
}
