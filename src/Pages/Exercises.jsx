import { Header } from "../components/Header";
import Image from "../Images/exercise.jpg";
import { useState, useEffect } from "react";
export const Exercises = () => {
  const [isMounted, setIsMounted] = useState(false);

  const containerStyle = {
    width: "80%",
    borderWidth: "2px",
    borderColor: "#FF7D23",
    borderStyle: "solid",
    borderRadius: "15px",
    padding: "20px",
    margin: "20px auto",
    fontFamily: "Georgia , sans-serif",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#FF7D23",
  };

  const contentWrapperStyle = {
    marginLeft: "10px",
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div>
      <Header
        backgroundImage={Image}
        title="Дасгал ажил"
        isMounted={isMounted}
      />
      <div style={{ width: "100%", height: "auto" }}>
        <div style={containerStyle}>
          <h2 style={headingStyle}>Дасгал 1</h2>
          <div style={contentWrapperStyle}>
            <p>
              Хүн бүр эх орондоо эзэн нь байхад зайлшгүй чухал нөхцөлүүд байдаг.
              Дараах нөхцөлүүдийг хангахын тулд юу хийдгээ бичээрэй.
            </p>
            <p>
              1. Бие, сэтгэл санааны хувьд эрүүл байх:
              .......................................
            </p>
            <p>
              2. Ёс суртахууны хүмүүжилтэй байх:
              ................................................
            </p>
            <p>
              3. Иргэний үүргээ ухамсарлах:
              .............................................. ............
            </p>
            <p>
              4. Бүтээлч, хариуцлагатай байх:
              .......................................... ............
            </p>
          </div>
        </div>
        <div style={containerStyle}>
          <h2 style={headingStyle}>Дасгал 2</h2>
          <div style={contentWrapperStyle}>
            <p>
              Яруу найрагч Ч.Чимид. “Би монгол хүн” шүлгийн утгыг эргэцүүлнэ үү.
            </p>
            <p>Энэ нутагтаа би эзэн нь юм</p>
            <p>Энхрийлэлд нь өссөн хүү нь юм</p>
            <p>Ирээдүйг нь түмэнтэйгээ босголцох</p>
            <p>Их үүрэг хүлээсэн юм.</p>
          </div>
        </div>
        <div style={containerStyle}>
          <h2 style={headingStyle}>Дасгал 3</h2>
          <div style={contentWrapperStyle}>
            <p>Хоёр нөхцөлд тохирох жишээ гаргаж бичээрэй.</p>
            <p>
              1. Иргэд бүтээлч, хариуцлагатай бол манай нийгэм тогтвортой
              хөгжинө.
            </p>
            <p>
              2. Иргэд хариуцлагагүй, бүтээлч бус бол хүний эрх зөрчигдөж,
              ядуурал нэмэгдэх болно.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
