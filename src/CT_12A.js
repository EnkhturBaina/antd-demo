import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-12А
function CT_12A() {
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
                    Эрүүл мэндийн бүртгэлийн маягт СТ-12А
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
              ...styles.rowStyle,
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
          <div style={styles.rowStyle}>
            2. Эцэг /эх/-ийн нэр: _______________________________________
            <span style={{ marginLeft: 30 }}>
              Нэр _______________________________________
            </span>
          </div>
          <div
            style={{
              ...styles.rowStyle,
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
          <div style={styles.rowStyle}>
            4. Оршин суугаа хаяг:
            <span style={{ marginLeft: 30 }}>
              Аймаг/хот ______________________________
            </span>
            <span style={{ marginLeft: 30 }}>
              Сум/дүүрэг ______________________________
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 145 }}>
              Баг/хороо
              __________________________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>5. Ам бүл:</div>
          <div style={styles.rowStyle}>
            6. Боловсрол:
            <span style={{ marginLeft: 30 }}>1. Боловсролгүй</span>
            <span style={{ marginLeft: 30 }}>3. Дунд</span>
            <span style={{ marginLeft: 180 }}>5. Дээд</span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ marginLeft: 105 }}>2. Бага</span>
            <span style={{ marginLeft: 82 }}>
              4. Мэргэжлийн болон техникийн
            </span>
            <span style={{ marginLeft: 40 }}>6. Тодорхойгүй</span>
          </div>
          <div style={styles.rowStyle}>
            7. Ажил эрхлэлт:
            <span style={{ marginLeft: 40 }}>1. Ажилтай</span>
            <span style={{ marginLeft: 30 }}>3. Малчин</span>
            <span style={{ marginLeft: 30 }}>5. Сурагч</span>
            <span style={{ marginLeft: 30 }}>
              7. Бусад ___________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ marginLeft: 130 }}>2. Ажилгүй</span>
            <span style={{ marginLeft: 30 }}>4. Оюутан</span>
            <span style={{ marginLeft: 30 }}>
              6. Хувиараа ажил эрхэлж байгаа
            </span>
          </div>
          <div
            style={{
              ...styles.rowStyle,
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
              ...styles.rowStyle,
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
          <div style={styles.rowStyle}>
            10. Жирэмсний хяналтанд байсан эсэх:
            <span style={{ marginLeft: 30 }}>1. Тийм </span>
            <span style={{ marginLeft: 30 }}>2. Үгүй </span>
            <span span style={{ marginLeft: 30 }}>
              3. Мэдээлэлгүй
            </span>
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
            }}
          >
            11. Жирэмсний хяналтанд орсон хугацаа:
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 50 }}
            >
              долоо хоног
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
            </div>
          </div>
          <div style={styles.rowStyle}>
            12. Нийт хэдэн удаа үзүүлсэн: __________________________________
          </div>
          <div style={styles.rowStyle}>
            13. Жирэмсний хяналтын эмчийн мэргэжлийн түвшин:
          </div>
          <div style={styles.rowStyle}>
            <span style={{ marginLeft: 80 }}>1. Эх барих эмэгтэйчүүд</span>
            <span style={{ marginLeft: 130 }}>3. Эх баригч</span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ marginLeft: 80 }}>
              2. Өөр мэргэжлийн их эмч (өрх)
            </span>
            <span style={{ marginLeft: 85 }}>4. Бага эмч</span>
          </div>
          <div style={styles.rowStyle}>
            14. Жирэмсэн үеийн хүндрэлтэй эсэх:
            <span style={{ marginLeft: 30 }}>1. Тийм </span>
            <span style={{ marginLeft: 30 }}>2. Үгүй </span>
          </div>
          <div style={styles.rowStyle}>
            15. Тийм бол жирэмсний хүндрэлийг сонгоно уу:
          </div>
          <div style={styles.rowStyle}>
            <span style={{ marginLeft: 80 }}>1. Эрт үеийн хордлого</span>
            <span style={{ marginLeft: 190 }}>
              8. Ураг орчмын шингэний ихдэлт
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 80 }}>2. Манас таталтын урьдал</span>
            <span style={{ marginLeft: 170 }}>
              9. Ураг орчмын шингэний багадалт
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 80 }}>3. Манас таталт </span>
            <span style={{ marginLeft: 220 }}>
              10. Ураг орчмын шингэний эрт гаралт
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 80 }}>4. Цус алдалт </span>
            <span style={{ marginLeft: 235 }}>11. Хавсарсан өвчин</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 80 }}>
              5. Судсанд цус түгээмлээр бүлэгнэх хам шинж
            </span>
            <span style={{ marginLeft: 58 }}>12. Хориоамнионит</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 80 }}>6. Ихэс түрүүлэлт</span>
            <span style={{ marginLeft: 215 }}>13. Дутуу төрөхийг завдах</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 80 }}>
              7. Хэвийн байрласан ихсийн цагаас урьтаж ховхрох
            </span>
            <span style={{ marginLeft: 25 }}>
              14. Бусад __________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            16. Жирэмсэн үед хавсарсан эмгэг байсан эсэх:
            <span style={{ marginLeft: 30 }}>1. Тийм </span>
            <span style={{ marginLeft: 30 }}>2. Үгүй </span>
          </div>
          <div style={styles.leftText}>
            17. Тийм бол эхийн эмгэгийг сонгоно уу:
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 80 }}>
              1. Халдварт ба шимэгчит зарим өвчин (тэмбүү,
            </span>
            <span style={{ marginLeft: 80 }}>
              6. Цусны эргэлтийн тогтолцооны өвчин
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 90 }}>
              улаанбурхан,элэгний вирүсийн үрэвсэл, бусад)
            </span>
            <span style={{ marginLeft: 70 }}>
              7. Амьсгалын тогтолцооны өвчин
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 80 }}>2. Хавдар </span>
            <span style={{ marginLeft: 280 }}>
              8. Хоол шингээх эрхтний өвчин
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 80 }}>
              3. Цус, цус бүтээх эрхтний өвчин
            </span>
            <span style={{ marginLeft: 155 }}>
              9. Шээс, бэлгэсийн тогтолцооны өвчин
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 90 }}>бодисын солилцооны өвчин</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 80 }}>
              5. Мэдрэлийн тогтолцооны өвчин
            </span>
          </div>
          <div style={styles.rowStyle}>
            18 . Антенаталь үеийн эмийн хэрэглээ:
            <span style={{ marginLeft: 30 }}>1. Дексаметазон </span>
            <span style={{ marginLeft: 30 }}>
              2. Бусад ________________________
            </span>
          </div>
          <div style={styles.rowStyle}></div>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.rowStyle}>
            19. Төрсөн газар :<span style={{ marginLeft: 30 }}>1. ЭХЭМҮТ </span>
            <span style={{ marginLeft: 200 }}>6. Хувийн эмнэлэг </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 126 }}>2. Хотын амаржих газрууд</span>
            <span style={{ marginLeft: 118 }}>7. Гэрт</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 126 }}>
              3. Аймгийн нэгдсэн эмнэлэг, БОЭТ
            </span>
            <span style={{ marginLeft: 75 }}>8. Тээвэрлэх үед</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 126 }}>
              4. Дүүргийн эрүүл мэндийн төв
            </span>
            <span style={{ marginLeft: 91 }}>9. Бусад _______________</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 126 }}>5. Сумын эрүүл мэндийн төв</span>
          </div>
          <div style={styles.rowStyle}>
            20. Төрөлтийн хэлбэр:
            <span style={{ marginLeft: 30 }}>1. Төрөх замаар: </span>
            <span style={{ marginLeft: 240 }}>2. Хагалгаа</span>
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
          <div style={styles.rowStyle}>21 . Хагалгаа хийсэн заалт:</div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 126 }}>1. Манас таталтын урьдал</span>
            <span style={{ marginLeft: 118 }}>6. Ихэс ховхрох</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 126 }}>2. Манас таталт</span>
            <span style={{ marginLeft: 171 }}> 7. Ургийн талын заалт</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 126 }}>3. Давтан кесеров хагалгаа</span>
            <span style={{ marginLeft: 112 }}>8. Эхийн хавсарсан өвчин</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 126 }}>4. Төрөх замын саатал</span>
            <span style={{ marginLeft: 138 }}>
              9. Бусад _______________________
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 126 }}>5. Ихэс түрүүлэлт</span>
          </div>
          <div style={styles.leftText}>
            22 . Түрүүлсэн хэсэг:
            <span style={{ marginLeft: 30 }}> 1. Толгой</span>
            <span style={{ marginLeft: 30 }}> 2. Өгзөг</span>
            <span style={{ marginLeft: 30 }}> 3. Хөл</span>
            <span style={{ marginLeft: 30 }}>4. Хөндлөн</span>
            <span style={{ marginLeft: 30 }}>
              5. Бусад ______________________
            </span>
          </div>
          <div style={styles.leftText}>23 . Төрөлтийн үеийн хүндрэл:</div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 126 }}>1. Төрөлтийн саатал </span>
            <span style={{ marginLeft: 180 }}>
              3. Төрөх хүчний 2-р үеийн сулрал
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 126 }}>
              2. Төрөх хүчний 1-р үеийн сулрал
            </span>
            <span style={{ marginLeft: 108 }}>4. Бусад __________________</span>
          </div>
          <div style={styles.leftText}>
            24 . Ургийн хүндрэл:
            <span style={{ marginLeft: 15 }}>1. Дутуу төрөлт</span>
            <span style={{ marginLeft: 185 }}>
              5. Төрөлхийн хөгжлийн гажиг:
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 126 }}>2. Зунгагаар хахах хам шинж</span>
            <span style={{ marginLeft: 110 }}>
              онош _________________________________
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 126 }}>3. Өсөлт хөгжлийн саатал</span>
            <span style={{ marginLeft: 128 }}>
              ________________________________________
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 126 }}>4. Ургийн бүтэлт</span>
            <span style={{ marginLeft: 178 }}>
              6. Бусад _______________________________
            </span>
          </div>
          <div style={styles.leftText}>
            <b>В. НЯРАЙН ТАЛААРХ МЭДЭЭЛЭЛ</b>
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
            1. Нярайн регистрийн дугаар:
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
            2 . Нярайн төрсөн
            <span style={{ marginLeft: 20 }}>
              _____он ___сар ___өдөр ___цаг ___минут
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
            3 . Энэ төрөлтөөр төрүүлсэн хүүхдийн тоо (амьд амьгүй хүүхдийн тоо)
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 50 }}
            >
              <div style={styles.rowCells}></div>
            </div>
          </div>
          <div style={styles.leftText}>
            4 . Энэ нярай ихэр хүүхдийн хэд дэх хүүхэд вэ?
            ______________________________
          </div>
          <div style={styles.leftText}>
            5 . Нас баралтын ангилал:
            <span style={{ marginLeft: 100 }}>
              1.Эрт нярайн эндэгдэл / 0-6х 23ц 59мин/
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 240 }}>
              2.Хожуу нярайн эндэгдэл / 7-28хоног/
            </span>
          </div>
          <div style={styles.leftText}>
            12. Хүйс: <span style={{ marginLeft: 30 }}>1. Эр </span>
            <span style={{ marginLeft: 30 }}>2. Эм </span>
            <span span style={{ marginLeft: 30 }}>
              3. Хүйс тодорхойгүй
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
            7 . Биеийн жин:
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 10 }}
            >
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>(гр)
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
            8 . Өндөр:
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 10 }}
            >
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>(см)
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
            9 . Төрөх үеийн тээлтийн нас
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 100 }}
            >
              долоо хоног<span style={{ marginLeft: 10 }}></span>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 100 }}
            >
              хоног<span style={{ marginLeft: 10 }}></span>
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
            10 . Хэрэв амьд төрсөн бол Апгарын үнэлгээ:
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 48 }}
            >
              1 мин<span style={{ marginLeft: 10 }}></span>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 100 }}
            >
              5 мин<span style={{ marginLeft: 10 }}></span>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
            </div>
          </div>
          <div style={styles.leftText}>
            11 . Нярайн нэн шаардлагатай тусламж хэрэгжүүлсэн эсэх :
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>1. Хуурайшуулсан: </span>
            <span style={{ marginLeft: 200 }}>1. Тийм</span>
            <span style={{ marginLeft: 40 }}>2. Үгүй</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>2. Арьс арьсаар шүргэлцсэн:</span>
            <span style={{ marginLeft: 147 }}>1. Тийм</span>
            <span style={{ marginLeft: 40 }}>2. Үгүй</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>3. Эрт амлуулсан:</span>
            <span style={{ marginLeft: 208 }}>1. Тийм</span>
            <span style={{ marginLeft: 40 }}>2. Үгүй</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>
              4. Нүдний урьдчилан сэргийлэлт :
            </span>
            <span style={{ marginLeft: 118 }}>1. Тийм</span>
            <span style={{ marginLeft: 40 }}>2. Үгүй</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>5. Витамин К:</span>
            <span style={{ marginLeft: 230 }}>1. Тийм</span>
            <span style={{ marginLeft: 40 }}>2. Үгүй</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>6. Дархлаажуулалт:</span>
            <span style={{ marginLeft: 198 }}>1. Тийм</span>
            <span style={{ marginLeft: 40 }}>2. Үгүй</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй </span>
          </div>
          <div style={styles.leftText}>
            12 . Сэхээн амьдруулалт хийгдсэн эсэх:
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>
              1. Амьсгалын замыг чөлөөлсөн:
            </span>
            <span style={{ marginLeft: 130 }}>1. Тийм</span>
            <span style={{ marginLeft: 40 }}>2. Үгүй</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>2. Цочроосон:</span>
            <span style={{ marginLeft: 227 }}>1. Тийм</span>
            <span style={{ marginLeft: 40 }}>2. Үгүй</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>
              3. Цусан дахь хүчилтөрөгчийн ханамж үзсэн эсэх:
            </span>
            <span style={{ marginLeft: 35 }}>1. Тийм</span>
            <span style={{ marginLeft: 40 }}>2. Үгүй</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>4. Хүчилтөрөгч өгсөн эсэх:</span>
            <span style={{ marginLeft: 161 }}>1. Тийм</span>
            <span style={{ marginLeft: 40 }}>2. Үгүй</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй </span>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>
              5. Амбу маскаар амьсгалыг удирдсан эсэх:
            </span>
            <span style={{ marginLeft: 80 }}>1. Тийм</span>
            <span style={{ marginLeft: 40 }}>2. Үгүй</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>
              6. Зүрхний иллэг ,эерэг даралтат
            </span>
            <span style={{ marginLeft: 135 }}>1. Тийм</span>
            <span style={{ marginLeft: 40 }}>2. Үгүй</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 115 }}>
              хиймэл амьсгал хавсарч хийсэн эсэх:
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>
              7. Мөгөөрсөн хоолойд гуурс тавьсан эсэх:
            </span>
            <span style={{ marginLeft: 81 }}>1. Тийм</span>
            <span style={{ marginLeft: 40 }}>2. Үгүй</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>
              8. Эмийн эмчилгээ хийсэн эсэх:
            </span>
            <span style={{ marginLeft: 140 }}>1. Тийм</span>
            <span style={{ marginLeft: 40 }}>2. Үгүй</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй </span>
          </div>
          <div style={styles.leftText}>13 . Сэхээн амьдруулалтыг үзүүлсэн:</div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>1. Нярайн эмч</span>
            <span style={{ marginLeft: 165 }}>5. Эх баригч</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>
              2. Эх барих эмэгтэйчүүдийн эмч
            </span>
            <span style={{ marginLeft: 68 }}>6. Сувилагч</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>3. Хүүхдийн эмч</span>
            <span style={{ marginLeft: 155 }}>
              7. Бусад ______________________
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>4. Ерөнхий мэргэжлийн эмч</span>
          </div>
          <div style={styles.leftText}>
            14 . Нярайн өвчний улмаас эмнэлэгт хэвтсэн:
            <span style={{ marginLeft: 30 }}>
              _____он ___сар ___өдөр ___цаг ___минут
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
            15 . Хэвтэх үеийн нярайн нас:
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 100 }}
            >
              <span style={{ marginLeft: 10 }}></span>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div> &nbsp;хоног
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 30 }}
            >
              <span style={{ marginLeft: 10 }}></span>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div> &nbsp;цаг
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 30 }}
            >
              <span style={{ marginLeft: 10 }}></span>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div> &nbsp;минут
            </div>
          </div>
          <div style={styles.leftText}>
            16. Нярайг энэ өвчний үед нэг эмнэлгээс нөгөө эмнэлэг рүү шилжүүлсэн
            эсэх:
            <span style={{ marginLeft: 30 }}>1. Тийм 2. Үгүй</span>
          </div>
          <div style={styles.leftText}>
            17. Нярай аль эмнэлэгт шилжиж, эмчлэгдсэн бэ?
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>
              1. 1-р шатлал (сум/өрх) — 2-р шатлал (аймаг, дүүрэг, хувийн
              эмнэлэг)
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>2. 1-р шатлал — 3-р шатлал</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>3. 2-р шатлал — 3-р шатлал</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>
              4. 3-р шатлал — 1-р шатлал/ 2-р шатлал
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>
              5. Хувийн эмнэлэг— Улсын эмнэлэг
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>
              6. Бусад _________________________
            </span>
          </div>
          <div style={styles.leftText}>
            18. Нярай шилжиж ирэх үеийн биеийн байдал:
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>1. Дунд</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>2. Хүндэвтэр</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>3. Хүнд</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>4. Маш хүнд</span>
          </div>
          <div style={styles.leftText}>
            19. Эмнэлэгт байх үед эмчилгээ хийгдсэн эсэх:
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>1. Хүчилтөрөгч өгсөн:</span>
            <span style={{ marginLeft: 150 }}>1. Тийм</span>
            <span style={{ marginLeft: 50 }}>2. Үгүй</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>
              2. Мөгөөрсөн хоолойд гуурс тавьсан:
            </span>
            <span style={{ marginLeft: 65 }}>1. Тийм</span>
            <span style={{ marginLeft: 50 }}>2. Үгүй</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>
              3. Амьсгал зүрхний сэхээн амьдруулалт:
            </span>
            <span style={{ marginLeft: 52 }}>1. Тийм</span>
            <span style={{ marginLeft: 50 }}>2. Үгүй</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>
              4. Зүрх судасны үйл ажиллагааг:
            </span>
            <span style={{ marginLeft: 95 }}>1. Тийм</span>
            <span style={{ marginLeft: 50 }}>2. Үгүй</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 110 }}>дэмжих эм хэрэглэсэн:</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>5. Сурфактант эмчилгээ:</span>
            <span style={{ marginLeft: 140 }}>1. Тийм</span>
            <span style={{ marginLeft: 50 }}>2. Үгүй</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>6. Антибиотик эмчилгээ:</span>
            <span style={{ marginLeft: 138 }}>1. Тийм</span>
            <span style={{ marginLeft: 50 }}>2. Үгүй</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>
              7. Судсаар дусал шингэн залгасан
            </span>
            <span style={{ marginLeft: 87 }}>1. Тийм</span>
            <span style={{ marginLeft: 50 }}>2. Үгүй</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>8. Ямар нэгэн мэс ажилбар:</span>
            <span style={{ marginLeft: 120 }}>1. Тийм</span>
            <span style={{ marginLeft: 50 }}>2. Үгүй</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>9. Цус цусан бүтээгдэхүүн:</span>
            <span style={{ marginLeft: 130 }}>1. Тийм</span>
            <span style={{ marginLeft: 50 }}>2. Үгүй</span>
          </div>
          <div style={styles.leftText}>
            20 . Гипогликеми илэрсэн эсэх:
            <span style={{ marginLeft: 30 }}>1. Тийм </span>
            <span style={{ marginLeft: 30 }}>2. Үгүй </span>
            <span span style={{ marginLeft: 30 }}>
              3. Мэдээлэлгүй
            </span>
          </div>
          <div style={styles.leftText}>
            21 . Тийм бол эмчилгээ хийсэн эсэх:
            <span style={{ marginLeft: 30 }}>1. Тийм </span>
            <span style={{ marginLeft: 30 }}>2. Үгүй </span>
            <span span style={{ marginLeft: 30 }}>
              3. Мэдээлэлгүй
            </span>
          </div>
          <div style={styles.leftText}>
            22 . Эмнэл зүйн онош: /ӨОУА-10 кодлоно уу/
          </div>
          <div style={{ marginLeft: 80 }}>
            <div style={styles.leftText}>
              <span style={{ marginLeft: 20 }}>&nbsp;</span>Үндсэн онош:
              ____________________________________________________________________________
            </div>
            <div style={styles.leftText}>
              <span style={{ marginLeft: 20 }}>&nbsp;</span>
              ___________________________________________________________________________________________
            </div>
            <div style={styles.leftText}>
              <span style={{ marginLeft: 20 }}>&nbsp;</span>Хүндрэл:
              __________________________________________________________________________________
            </div>
            <div style={styles.leftText}>
              <span style={{ marginLeft: 20 }}>&nbsp;</span>
              ___________________________________________________________________________________________
            </div>
            <div style={styles.leftText}>
              <span style={{ marginLeft: 20 }}>&nbsp;</span>Дагалдах онош:
              __________________________________________________________________________
            </div>
            <div style={styles.leftText}>
              <span style={{ marginLeft: 20 }}>&nbsp;</span>
              ___________________________________________________________________________________________
            </div>
          </div>
          <div style={styles.leftText}>
            23 . Нярайн эндсэн газар:
            <span style={{ marginLeft: 70 }}>1. ЭХЭМҮТ</span>
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
            24 . Нас барах үеийн нярайн нас:
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 100 }}
            >
              <span style={{ marginLeft: 10 }}></span>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div> &nbsp;хоног
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 30 }}
            >
              <span style={{ marginLeft: 10 }}></span>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div> &nbsp;цаг
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 30 }}
            >
              <span style={{ marginLeft: 10 }}></span>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div> &nbsp;минут
            </div>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
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
            25 . Ор хоног:
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 100 }}
            >
              <span style={{ marginLeft: 10 }}></span>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div> &nbsp;хоног
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 30 }}
            >
              <span style={{ marginLeft: 10 }}></span>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div> &nbsp;цаг
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 30 }}
            >
              <span style={{ marginLeft: 10 }}></span>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div> &nbsp;минут
            </div>
          </div>
          <div style={styles.leftText}>
            Нярайн нас барсан
            <span style={{ marginLeft: 30 }}>
              _____он ___сар ___өдөр ___цаг ___минут
            </span>
          </div>
          <div style={styles.leftText}>
            27 . Эмгэг судлалын шинжилгээнд орсон эсэх:
            <span style={{ marginLeft: 30 }}>1. Тийм </span>
            <span style={{ marginLeft: 30 }}>2. Үгүй </span>
          </div>
          <div style={styles.leftText}>
            28 . Эмгэг судлалын онош: /ӨОУА-10 кодлоно уу/
          </div>
          <div style={{ marginLeft: 80 }}>
            <div style={styles.leftText}>
              <span style={{ marginLeft: 20 }}>&nbsp;</span>Үндсэн онош:
              ____________________________________________________________________________
            </div>
            <div style={styles.leftText}>
              <span style={{ marginLeft: 20 }}>&nbsp;</span>
              ___________________________________________________________________________________________
            </div>
            <div style={styles.leftText}>
              <span style={{ marginLeft: 20 }}>&nbsp;</span>Хүндрэл:
              __________________________________________________________________________________
            </div>
            <div style={styles.leftText}>
              <span style={{ marginLeft: 20 }}>&nbsp;</span>
              ___________________________________________________________________________________________
            </div>
            <div style={styles.leftText}>
              <span style={{ marginLeft: 20 }}>&nbsp;</span>Дагалдах онош:
              __________________________________________________________________________
            </div>
            <div style={styles.leftText}>
              <span style={{ marginLeft: 20 }}>&nbsp;</span>
              ___________________________________________________________________________________________
            </div>
          </div>
          <div style={styles.leftText}>
            29 . Онош тохирсон эсэх:
            <span style={{ marginLeft: 30 }}>1. Тийм </span>
            <span style={{ marginLeft: 30 }}>2. Үгүй </span>
          </div>
          <div style={styles.leftText}>
            30 . Тохироогүй бол:
            <span style={{ marginLeft: 30 }}>1. Үндсэн оношоор</span>
            <span style={{ marginLeft: 30 }}>2. Хүндрэлээр</span>
            <span style={{ marginLeft: 30 }}>3. Дагалдах оношоор</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CT_12A;
