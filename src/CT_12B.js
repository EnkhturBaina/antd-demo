import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-12Б
function CT_12B() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 20,
      height: 20,
      lineHeight: 1,
    },
    generalText: {
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 12,
      marginTop: 5,
    },
    leftText: {
      padding: 1,
      verticalAlign: "middle",
      fontSize: 12,
    },
    centerText: {
      padding: 1,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 12,
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    topText: {
      padding: 1,
      fontSize: 12,
    },
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 12,
      padding: 0,
      lineHeight: 1,
      marginTop: 2,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      maxHeight: 100,
      maxWidth: 50,
      lineHeight: 1,
      fontSize: 12,
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.flexContainer}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            ></div>
            <div>
              <span
                style={{
                  ...styles.generalText,
                  ...{ textAlign: "right", display: "block" },
                }}
              >
                Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
              </span>
              <div style={styles.flexRow}>
                <span style={styles.generalText}>&nbsp;</span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={styles.generalText}>
                    A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: 12 }}>
                    Эрүүл мэндийн бүртгэлийн маягт СТ-12Б
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 10 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              НЯРАЙН ЭНДЭГДЛИЙГ МЭДЭЭЛЭХ ХУУДАС
            </span>
          </div>
          <div style={styles.rowStyle}>
            <b>А. ЕРӨНХИЙ МЭДЭЭЛЭЛ</b>
          </div>
          <div style={styles.rowStyle}>
            1. Мэдээлсэн огноо:
            <span style={{ marginLeft: 30 }}>
              _____он ___сар ___өдөр ___цаг ___минут
            </span>
          </div>
          <div style={styles.rowStyle}>
            2. Мэдээлсэн газар:
            <span style={{ marginLeft: 30 }}>
              Аймаг/хот ______________________________
            </span>
            <span style={{ marginLeft: 30 }}>
              Сум/дүүрэг ______________________________
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 135 }}>
              Эмнэлгийн нэр
              __________________________________________________________________
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 135 }}>
              Эмчийн овог, нэр
              __________________________________________________________________
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 135 }}>
              Албан тушаал
              __________________________________________________________________
            </span>
          </div>
          <div style={styles.leftText}>
            <b>Б. ЭХИЙН ТАЛААРХ МЭДЭЭЛЭЛ</b>
          </div>
          <div
            style={{
              ...styles.leftText,
              ...{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
            }}
          >
            1. Эхийн регистрийн дугаар:
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 10 }}
            >
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
            </div>
          </div>
          <div style={styles.leftText}>
            2. Эцэг /эх/-ийн нэр: _______________________________________
            <span style={{ marginLeft: 30 }}>
              Нэр _______________________________________
            </span>
          </div>
          <div
            style={{
              ...styles.leftText,
              ...{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
            }}
          >
            3. Эхийн нас:
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 10 }}
            >
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
            </div>
          </div>
          <div style={styles.leftText}>
            4. Оршин суугаа хаяг:
            <span style={{ marginLeft: 30 }}>
              Аймаг/хот ______________________________
            </span>
            <span style={{ marginLeft: 30 }}>
              Сум/дүүрэг ______________________________
            </span>
          </div>
          <div style={styles.leftText}>5. Ам бүл:</div>
          <div style={styles.leftText}>
            6. Боловсрол:
            <span style={{ marginLeft: 30 }}>1. Боловсролгүй</span>
            <span style={{ marginLeft: 30 }}>3. Дунд</span>
            <span style={{ marginLeft: 180 }}>5. Дээд</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 105 }}>2. Бага</span>
            <span style={{ marginLeft: 82 }}>
              4. Мэргэжлийн болон техникийн
            </span>
            <span style={{ marginLeft: 40 }}>6. Тодорхойгүй</span>
          </div>
          <div style={styles.leftText}>
            7. Ажил эрхлэлт:
            <span style={{ marginLeft: 40 }}>1. Ажилтай</span>
            <span style={{ marginLeft: 30 }}>3. Малчин</span>
            <span style={{ marginLeft: 30 }}>5. Сурагч</span>
            <span style={{ marginLeft: 30 }}>
              7. Бусад ___________________________
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 130 }}>2. Ажилгүй</span>
            <span style={{ marginLeft: 30 }}>4. Оюутан</span>
            <span style={{ marginLeft: 30 }}>
              6. Хувиараа ажил эрхэлж байгаа
            </span>
          </div>
          <div
            style={{
              ...styles.leftText,
              ...{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
            }}
          >
            8. Жирэмслэлтийн тоо: (одоогийн жирэмслэлтийг оролцуулна)
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 10 }}
            >
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
            </div>
          </div>
          <div
            style={{
              ...styles.leftText,
              ...{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
            }}
          >
            9. Өмнөх төрөлтийн тоо: (одоогийн жирэмсний төгсгөл оролцуулахгүй)
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 10 }}
            >
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
            </div>
          </div>
          <div style={styles.leftText}>
            10. Өмнө нь амьгүй ураг төрүүлж байсан эсэх
            <span style={{ marginLeft: 30 }}>1. Тийм </span>
            <span style={{ marginLeft: 30 }}>2. Үгүй </span>
          </div>
          <div
            style={{
              ...styles.leftText,
              ...{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
            }}
          >
            11. Тийм бол хэдэн удаа
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 50 }}
            >
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
            </div>
          </div>
          <div style={styles.leftText}>
            12 . Жирэмсэн үед тамхи татсан эсэх
            <span style={{ marginLeft: 30 }}>1. Тийм </span>
            <span style={{ marginLeft: 30 }}>2. Үгүй </span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй</span>
          </div>
          <div style={styles.leftText}>
            13 . Хэрэв тийм бол
            <span style={{ marginLeft: 30 }}>
              Өдөрт хэдэн ширхэг _______________{" "}
            </span>
          </div>
          <div style={styles.leftText}>
            14 . Тамхи татдаг хүнтэй хамт байдаг эсэх
            <span style={{ marginLeft: 30 }}>1. Тийм </span>
            <span style={{ marginLeft: 30 }}>2. Үгүй </span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй</span>
          </div>
          <div style={styles.leftText}>
            15 . Жирэмсний хяналтанд байсан эсэх:
            <span style={{ marginLeft: 30 }}>1. Тийм </span>
            <span style={{ marginLeft: 30 }}>2. Үгүй </span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй</span>
          </div>
          <div
            style={{
              ...styles.leftText,
              ...{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
            }}
          >
            16. Жирэмсний хяналтанд орсон хугацаа:
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 50 }}
            >
              долоо хоног
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
            </div>
          </div>
          <div
            style={{
              ...styles.leftText,
              ...{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
            }}
          >
            17. Нийт хэдэн удаа үзүүлсэн
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 50 }}
            >
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
            </div>
          </div>
          <div style={styles.leftText}>
            18. Жирэмсний хяналтанд байсан газар:
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>1 ЭХЭМҮТ</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>2 Дүүргийн эрүүл мэндийн төв</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>3 Сумын эрүүл мэндийн төв</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>4 Аймгийн эмнэлэг/БОЭТ</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>
              5 Аймаг нийслэлийн Өрхийн Эрүүл мэндийн төв
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>6 Хувийн эмнэлэгт</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>7 Багт</span>
          </div>
          <div style={styles.leftText}>
            19 . Жирэмсний хяналтын эмчийн мэргэжлийн түвшин:
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 50 }}>1. Эх барих эмэгтэйчүүд</span>
            <span style={{ marginLeft: 118 }}>3. Эх баригч</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 50 }}>
              2. Өөр мэргэжлийн их эмч (өрх)
            </span>
            <span style={{ marginLeft: 73 }}>4. Бага эмч</span>
          </div>
          <div style={styles.leftText}>
            20 . Жирэмсэн үеийн хүндрэлтэй эсэх:
            <span style={{ marginLeft: 30 }}>1. Тийм </span>
            <span style={{ marginLeft: 30 }}>2. Үгүй </span>
          </div>
          <div style={styles.leftText}>
            21 . Тийм бол жирэмсэн үеийн хүндрэлийг сонгоно уу.
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 50 }}>1. Эрт үеийн хордлого</span>
            <span style={{ marginLeft: 160 }}>
              8. Ураг орчмын шингэний ихдэлт
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 50 }}>2. Манас таталтын урьдал</span>
            <span style={{ marginLeft: 141 }}>
              9. Ураг орчмын шингэний багадалт
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 50 }}>3. Манас таталт</span>
            <span style={{ marginLeft: 190 }}>
              10. Ураг орчмын шингэний эрт гаралт
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 50 }}>4. Цус алдалт</span>
            <span style={{ marginLeft: 203 }}>11. Хавсарсан өвчин</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 50 }}>
              5. Судсанд цус түгмэл бүлэгнэх хам шинж
            </span>
            <span style={{ marginLeft: 48 }}>12. Хорионамнионит</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 50 }}>6. Ихэс түрүүлэлт</span>
            <span style={{ marginLeft: 181 }}>13. Дутуу төрөхийг завдах</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 50 }}>
              7. Хэвийн байрласан ихэс цагаас
            </span>
            <span style={{ marginLeft: 96 }}>
              14. Бусад ________________________________
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 65 }}>урьтаж ховхрох</span>
          </div>
          <div style={styles.leftText}>
            22 . Жирэмсэн үед эхийн хавсарсан эмгэг байсан эсэх:
            <span style={{ marginLeft: 30 }}>1. Тийм </span>
            <span style={{ marginLeft: 30 }}>2. Үгүй </span>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.leftText}>
            23 . Тийм бол эхийн хавсарсан эмгэгийг сонгоно уу:
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 50 }}>
              1. Халдварт ба шимэгчит зарим өвчин (зур){" "}
            </span>
            <span style={{ marginLeft: 96 }}>
              5. Мэдрэлийн тогтолцооны өвчин
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 65 }}>
              {" "}
              (улаанбурхан, элэгний вирүсийн үрэвсэл, бусад)
            </span>
            <span style={{ marginLeft: 60 }}>
              6. Цусны эргэлтийн тогтолцооны өвчин
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 50 }}>2. Хавдар</span>
            <span style={{ marginLeft: 288 }}>
              7. Амьсгалын тогтолцооны өвчин
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 50 }}>
              3. Цус, цус бүтээх эрхтний өвчин
            </span>
            <span style={{ marginLeft: 160 }}>
              8. Хоол шингээх эрхтний өвчин
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 50 }}>
              4. Дотоод шүүрэл, тэжээлийн ба
            </span>
            <span style={{ marginLeft: 161 }}>
              9. Шээс, бэлгэсийн тогтолцооны өвчин
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 65 }}>бодисын солилцооны өвчин</span>
            <span style={{ marginLeft: 160 }}>
              10. Бусад ____________________________
            </span>
          </div>
          <div style={styles.leftText}>
            24 . Антенаталь үеийн эмийн хэрэглээ:
            <span style={{ marginLeft: 50 }}>1. Дексаметазон </span>
            <span style={{ marginLeft: 50 }}>
              10. Бусад ____________________________
            </span>
          </div>
          <div style={styles.leftText}>
            25 . Төрсөн газар :
            <span style={{ marginLeft: 110 }}>1. ЭХЭМҮТ</span>
            <span style={{ marginLeft: 180 }}>6. Хувийн эмнэлэг</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 210 }}>2. Хотын амаржих газрууд</span>
            <span style={{ marginLeft: 95 }}>7. Гэрт</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 210 }}>
              3. Аймгийн нэгдсэн эмнэлэг, БОЭТ
            </span>
            <span style={{ marginLeft: 52 }}>8. Тээвэрлэх үед</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 210 }}>2. Хотын амаржих газрууд</span>
            <span style={{ marginLeft: 95 }}>
              9. Бусад _________________________
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 210 }}>5. Сумын эрүүл мэндийн төв</span>
          </div>
          <div style={styles.leftText}>
            26 . Төрөлтийн хэлбэр:
            <span style={{ marginLeft: 30 }}>1. Төрөх замаар: </span>
            <span style={{ marginLeft: 150 }}>2. Хагалгаа</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 180 }}>a. Хэвийн</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 180 }}>
              b. Сэдээсэн: окситоцин, мезопростол
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 180 }}>c. Төрөлтийг эрчимжүүлсэн</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 180 }}>d. Вакуум</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 180 }}>e. Хавчуур</span>
          </div>
          <div style={styles.leftText}>27 Төрөлт удирдсан хүн:</div>
        </div>
      </div>
    </>
  );
}

export default CT_12B;
