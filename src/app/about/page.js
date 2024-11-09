import Image from "next/image";
export default function About() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // border: "1px solid #fff",
        }}
      >
        <Image
          src="https://www.wildnatureimages.com/images/xl/130726-063-Denali-National-Park.webp"
          alt={"mountain"}
          width={1920}
          height={100}
          priority={true}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        style={{
          height: "100vh",
          background: "red",
        }}
      >
        asd
      </div>
    </>
  );
}
