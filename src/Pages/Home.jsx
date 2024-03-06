import React from "react";
import PeopleImage from "../Images/Mongolian.jpg";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";

export const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const paragraphStyle = {
    width: "40%",
    marginLeft: "40px",
    fontSize: "18px",
    fontFamily: "Georgia, sans-serif",
    fontWeight: 400,
    lineHeight: 1.6,
    color: "#333",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    borderRadius: "15px",
    background: "linear-gradient(to left,  #008EDC ,#618CFF )",
    lineHeight: "1.4",
  };
  const containerStyle = {
    width: "100%",
    height: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f9fa",
  };

  const paragraphStyle2 = {
    width: "60%",
    fontSize: "1.2rem",
    lineHeight: "1.6",
    fontFamily: "Georgia , sans-serif",
  };

  const imageStyle = {
    width: "30%",
    borderRadius: "15px",
    marginLeft: "20px",
    marginRight: "40px",
  };
  const creativity = {
    width: "100%",
    height: "110vh",
    backgroundImage: `url(${require("../Images/buteelc.jpg")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div>
      <Header
        backgroundImage={PeopleImage}
        title="Эх орондоо эзэн нь байх эрх, үүргээ ухамсарлаж, хариуцлагатай, бүтээлч иргэн болж хүмүүжихийг
          ухаарах"
        isMounted={isMounted}
      />
      <div
        style={{
          width: "100%",
          height: "100vh",
          fontFamily: "Georgia, sans-serif",
          background: "linear-gradient(to left, #181818 ,#ccc)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "100%",
            width: "90%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            borderRadius: "15px",
            background: "linear-gradient(to right, #000, #ccc)",
            color: "#fff",
            margin: "0 auto",
          }}
        >
          <img
            src={require("../Images/MongolianMan.jpg")}
            style={{
              width: "40%",
              height: "auto",
              borderRadius: "15px 0 0 15px",
              objectFit: "cover",
            }}
            alt="Mongolian Man"
          />
          <div
            style={{
              padding: "30px",
              fontFamily: "Georgia, sans-serif",
              fontSize: "18px",
              color: "#fff",
            }}
          >
            <h2
              style={{
                marginBottom: "20px",
                color: "#fff",
                fontSize: "24px",
                fontWeight: "bold",
                lineHeight: "1.3",
              }}
            >
              Иргэн бүр эх орныхоо эзэн нь юм.
            </h2>
            <p style={{ marginBottom: "20px", lineHeight: "1.6" }}>
              Хэрвээ иргэд эрх, үүргээ ухамсарлахгүй, хөдөлмөрлөхгүй бол улс
              орон эзэнгүй айл мэт болно. Үндсэн хуульд “Монгол Улсын иргэн
              шударга, хүнлэг ёсыг эрхэмлэн дараах үндсэн үүргийг ёсчлон
              биелүүлнэ” гэж заасан.
            </p>
            <ul style={{ padding: 0, listStyle: "none", marginLeft: "20px" }}>
              <li style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: "bold" }}>
                  1. Үндсэн хууль, бусад хуулийг дээдлэн хүндэтгэж, сахин
                  биелүүлэх;
                </span>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: "bold" }}>
                  2. Хүний нэр төр, алдар хүнд, эрх, хууль ёсны ашиг сонирхлыг
                  хүндэтгэх;
                </span>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: "bold" }}>
                  3. Хуулиар ногдуулсан албан татвар төлөх;
                </span>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: "bold" }}>
                  4. Эх орноо хамгаалах, хуулийн дагуу цэргийн алба хаах.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to right, #ccc ,#fff)",
        }}
      >
        <div
          style={{
            maxWidth: "90%",
            width: "1200px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            src={require("../Images/Oilgolt.png")}
            style={{
              marginLeft: "30px",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#FF7D23",
            }}
          />
          <div style={paragraphStyle}>
            <p style={{ padding: "10px", color: "#fff" }}>
              Иргэний үүрэг нь ёс суртахууны зарчмуудыг дагаж мөрдөхийг
              шаарддаг. Үүрэг хүлээх, үүрэг биелүүлэх гэсэн хоёр үе шат байна.
              Ёс суртахууны үүрэг нь үнэнч шударга, хатуужил тэвчээртэй, эвсэг
              хамтач, нинжин сэтгэл нь үйлдэл болж илрэх нөхцөл юм. Хүлээсэн
              үүрэг, хариуцлагыг бусдад бүрмөсөн даатгах нь хариуцлагагүй үйлдэл
              болно. Иймд үүргээ хэрхэн биелүүлдгээр нь тухайн хүний ёс
              суртахууны төлөвшлийг тодорхойлж болно. Хариуцлагатай, бүтээлч
              иргэдийн хөдөлмөр, зүтгэлээр эх орон хөгжинө.
            </p>
          </div>
        </div>
      </div>
      <div style={creativity}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "40px",
            color: "#fff",
            fontFamily: "Georgia , sans-seif",
          }}
        >
          Бүтээлч иргэн
        </h2>
        <p
          style={{
            color: "#fff",
            fontFamily: "Georgia , sans-seif",
            width: "70%",
            textAlign: "center",
            fontSize: "30px",
          }}
        >
          Хариуцлагатай иргэдийн хүч, бүтээлч хөдөлмөрийн үр шимээр эх орон
          оршиж буй. Бүтээлч хүн үр ашигтай зүйл сэдэх бүтээлч санаа дэвшүүлдэг.
          Өөрөөр хэлбэл, мэдлэг, авьяас, чадвар, нөөц боломжоо ашиглан хүнд
          хэрэгтэй зүйлийг хийж бүтээх чадвартай хүнийг бүтээлч иргэн гэнэ.
        </p>
      </div>
      <div style={containerStyle}>
        <p style={paragraphStyle2}>
          Бүтээлч хөдөлмөрийн явцад хувь хүнд хөдөлмөрийн үнэ цэнийг ойлгодог,
          хөдөлмөрийг хүндэтгэдэг, ажилч хичээнгүй, ажилд хариуцлагатай хандах,
          арвич, хямгач, үнэнч шударга байдал зэрэг ёс суртахууны үнэт чанар
          бүрэлдэн тогтдог. 31 Хариуцлага хүлээснээр хүн өөрийгөө хөгжүүлдэг.
        </p>
        <img
          src={require("../Images/Zurag.png")}
          alt="Зураг"
          style={imageStyle}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "70vh",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "70%",
            borderWidth: "2px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderStyle: "solid",
            borderRadius: "20px",
            borderColor: "#FF7D23",
          }}
        >
          <h2 style={{ marginLeft: "20px", color: "#FF7D23" }}>
            Бүтээлч чанарыг төлөвшүүлэх арга
          </h2>
          <p
            style={{
              fontSize: "20px",
              fontFamily: "Georgia , sans-serif",
              padding: "40px",
              marginTop: "-20px",
            }}
          >
            Ардын зүйр цэцэн үгэнд бүтээлч, хариуцлагатай байхыг “Амьдралын эх
            ажил, Ажлын эх санаачилга” буюу Бүтээлч; “Ажил хийвэл дуустал Давс
            хийвэл уустал” буюу Хариуцлага гэж сургажээ. Бүтээлч чанар: Байнга
            шинэ зүйлийг сурч мэдэх, цагийг үр бүтээлтэй өнгөрүүлэх, хийж байгаа
            зүйлдээ хариуцлагатай байх, урам зоригоо нэмэгдүүлэх, зорилгынхоо
            төлөө тууштай байх зэрэг юм.
          </p>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "70vh",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "70%",
            borderWidth: "2px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderStyle: "solid",
            borderRadius: "20px",
            borderColor: "#FF7D23",
          }}
        >
          <h2 style={{ marginLeft: "20px", color: "#FF7D23" }}>
            Эх орныхоо нэр хүндийг эрхэмлэхийн учир
          </h2>
          <p
            style={{
              fontSize: "20px",
              fontFamily: "Georgia , sans-serif",
              padding: "40px",
              marginTop: "-20px",
            }}
          >
            {" "}
            Иргэн бүр эх орон, тусгаар тогтнолын үнэ цэнийг эрхэмлэж, үнэт
            зүйлийг бүтээж, ирээдүй хойч үедээ өвлүүлэх үүрэгтэй. Мөн
            үндэснийхээ биет ба биет бус соёлын өв, үнэт зүйлс, уламжлалт зан
            заншлыг өвлөх, хадгалах, хамгаалах, танин мэдэх нь даяаршлын үед эх
            орноо таниулахад чухал ач холбогдолтой Нэг монгол хүн гадаад оронд
            биеэ хэрхэн авч явж байгаагаар нь Монгол Улс, монголчуудыг дүгнэдэг.
            Иймд хаана ч аялж, ажиллаж, амьдарч явсан улсынхаа нэр хүндийг
            эрхэмлэж явах ёстой. Олон улсын тавцанд Монгол Улсын нэр хүнд ямар
            байх нь бидний ёс суртахууны төлөвшил, дэлхийд нэр алдраа дуурсгасан
            амжилт, ололтоос хамаарна.
          </p>
        </div>
      </div>
    </div>
  );
};
