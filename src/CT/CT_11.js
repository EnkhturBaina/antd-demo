import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-11
function CT_11() {
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
              НЯРАЙН ТӨРӨЛХИЙН ХӨГЖЛИЙН ГАЖГИЙГ МЭДЭЭЛЭХ ХУУДАС
            </span>
          </div>
          <div style={styles.rowStyle}>
            <b>А. ЕРӨНХИЙ МЭДЭЭЛЭЛ</b>
          </div>
          <div style={styles.rowStyle}>
            1. Мэдээлсэн:
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
              Эмнэлгийн нэр:
              _________________________________________________________________________
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 135 }}>
              Мэдээлсэн эмчийн нэр:
              _________________________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <b>Б. ЭХИЙН ТАЛААРХ МЭДЭЭЛЭЛ</b>
          </div>
          <div style={styles.rowStyle}>
            1. Эцэг /эх/-ийн нэр:
            ________________________________________________________________
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
            2. Эхийн регистрийн дугаар:
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
            3. Төрөх үеийн эхийн нас:
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 24 }}
            >
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
            </div>
          </div>
          <div style={styles.rowStyle}>
            4. Байнгын оршин суудаг хаяг:
            <span style={{ marginLeft: 30 }}>
              Аймаг/хот ______________________________
            </span>
            <span style={{ marginLeft: 30 }}>
              Сум/дүүрэг ______________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ marginLeft: 195 }}>
              Баг/хороо ______________________________
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
            5. Жирэмслэлтийн тоо: (одоогийн жирэмслэлтийг оролцуулна)
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
            6. Өмнөх төрөлтийн тоо: (одоогийн жирэмсний төгсгөл оролцуулахгүй)
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 10 }}
            >
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
            </div>
          </div>
          <div style={styles.rowStyle}>
            7. Өмнөх жирэмслэлтүүдийн төгсгөл: (тоогоор бичих)
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 30,
              },
            }}
          >
            <div style={{ width: 200 }}>1. Зулбалт</div>
            <div style={{ width: 50 }}>
              <div style={styles.rowCells}></div>
            </div>
            <div style={{ width: 200 }}>4. Умайн гаднах жирэмсэн</div>
            <div style={{ width: 50 }}>
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
                marginLeft: 30,
              },
            }}
          >
            <div style={{ width: 200 }}>2. Үр хөндөлт</div>
            <div style={{ width: 50 }}>
              <div style={styles.rowCells}></div>
            </div>
            <div style={{ width: 200 }}>5. Амьгүй төрөлт</div>
            <div style={{ width: 50 }}>
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
                marginLeft: 30,
              },
            }}
          >
            <div style={{ width: 200 }}>3. Өсөлтгүй жирэмсэн </div>
            <div style={{ width: 50 }}>
              <div style={styles.rowCells}></div>
            </div>
            <div style={{ width: 200 }}>6. Амьд төрөлт</div>
            <div style={{ width: 50 }}>
              <div style={styles.rowCells}></div>
            </div>
          </div>
          <div style={styles.rowStyle}>
            <b>В. НЯРАЙН ТАЛААРХ МЭДЭЭЛЭЛ</b>
          </div>
          <div style={styles.rowStyle}>
            1. Хүүхдийн төрсөн
            <span style={{ marginLeft: 20 }}>
              _____он ___сар ___өдөр ___цаг ___минут
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
            2. Хүүхдийн регистрийн дугаар:
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
            3 . Төрөх үеийн тээлтийн нас
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
          <div style={styles.rowStyle}>
            4. Төрөх үеийн жин: ______________ (гр)
          </div>
          <div style={styles.rowStyle}>
            5. Хүйс: <span style={{ marginLeft: 30 }}>1. Эр </span>
            <span style={{ marginLeft: 30 }}>2. Эм </span>
            <span span style={{ marginLeft: 30 }}>
              3. Тодорхойгүй
            </span>
          </div>
          <div style={styles.rowStyle}>
            6. Хүүхэд ихэр эсэх:
            <span style={{ marginLeft: 30 }}>1. Тийм </span>
            <span style={{ marginLeft: 30 }}>2. Үгүй </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ marginLeft: 18 }}>хэрэв тийм бол:</span>
            <span style={{ marginLeft: 30 }}>1. 2 ихэр</span>
            <span style={{ marginLeft: 30 }}>2. 3 ба түүнээс дээш</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй</span>
          </div>
          <div style={styles.rowStyle}>
            7. Ихэр хүүхэд бол хэдэн хүүхдэд нь гажиг илэрсэн бэ?
          </div>
          <div style={styles.rowStyle}>
            <span style={{ marginLeft: 18 }}>1. Нэг</span>
            <span style={{ marginLeft: 30 }}>2. Хоёр</span>
            <span style={{ marginLeft: 30 }}>3. Гурав ба түүнээс дээш</span>
            <span style={{ marginLeft: 30 }}>4. Мэдээлэлгүй</span>
          </div>
          <div style={styles.rowStyle}>
            8. Хүүхэд амьдарсан эсэх
            <span style={{ marginLeft: 30 }}>1. Тийм </span>
            <span style={{ marginLeft: 30 }}>2. Үгүй </span>
            <span style={{ marginLeft: 30 }}>3. Амьгүй </span>
          </div>
          <div style={styles.rowStyle}>
            9. Үгүй бол хүүхэд эндсэн
            <span style={{ marginLeft: 20 }}>
              _____он ___сар ___өдөр ___цаг ___минут
            </span>
          </div>
          <div style={styles.rowStyle}>
            <b>Г. ОНОШИЛГОО</b>
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
            <div style={{ width: 160 }}>1. Оношлогдсон хугацаа:</div>
            <div style={{ width: 280 }}>
              1. Эхийн умайд пренаталь оношилгоогоор
            </div>
            <div style={{ width: 200 }}>3. Төрсний дараах эхний 7 хоногт</div>
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 30,
              },
            }}
          >
            <div style={{ width: 130 }}></div>
            <div style={{ width: 280 }}>2. Төрөх үед</div>
            <div style={{ width: 200 }}>4. 8-28 хоногтойд</div>
          </div>
          <div style={styles.rowStyle}>
            2. Пренаталь оношилгоогоор хөгжлийн гажиг оношлогдох үеийн ургийн
            нас:
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
          <div style={styles.rowStyle}>
            3. Пренаталь оношилгооны шинжилгээгээр анх илэрсэн бол:
          </div>
          <div style={{ ...styles.rowStyle, ...{ marginLeft: 30 } }}>
            1. Жирэмсний 14 долоо хоногтойгоос бага хугацаанд Эхо-гоор
          </div>
          <div style={{ ...styles.rowStyle, ...{ marginLeft: 30 } }}>
            2. 14-21 долоо хоногтойд Эхо-гоор
          </div>
          <div style={{ ...styles.rowStyle, ...{ marginLeft: 30 } }}>
            3. 22 долоо хоног ба түүнээс дээш хугацаанд Эхо-гоор
          </div>
          <div style={{ ...styles.rowStyle, ...{ marginLeft: 30 } }}>
            4. Эхо-гоор оношлогдсон боловч хугацаа мэдээлэлгүй
          </div>
          <div style={{ ...styles.rowStyle, ...{ marginLeft: 30 } }}>
            5. Бусад ______________________________________
          </div>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={{ ...styles.rowStyle, ...{ marginLeft: 30 } }}>
            6. Эхо ба бусад шинжилгээ хийгдээгүй
          </div>
          <div style={styles.rowStyle}>
            4. Задлан шинжилгээгээр оношлогдсон эсэх:
            <span style={{ marginLeft: 30 }}>1. Тийм </span>
            <span style={{ marginLeft: 30 }}>2. Үгүй </span>
          </div>
          <div style={styles.rowStyle}>
            5. Оношлогдсон гажиг мэс заслын аргаар эмчлэгдэх боломжтой эсэх:
            <span style={{ marginLeft: 30 }}>1. Тийм </span>
            <span style={{ marginLeft: 30 }}>2. Үгүй </span>
          </div>
          <div style={styles.rowStyle}>
            6. Нярайд илэрсэн төрөлхийн хөгжлийн гажгийн хэлбэрийг эрхтэн,
            тогтолцоогоор нэг бүрчлэн оношийг бичнэ үү?
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 30 } }}>
            1. Мэдрэлийн тогтолцооны төрөлхийн гажиг
            _____________________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 60 } }}>
            _________________________________________________________________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 30 } }}>
            2. Нүд, чих, нүүр ба хүзүүний төрөлхийн гажиг
            ____________________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 60 } }}>
            _________________________________________________________________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 30 } }}>
            3. Цусны эргэлтийн тогтолцооны төрөлхийн гажиг
            _______________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 60 } }}>
            _________________________________________________________________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 30 } }}>
            4. Амьсгалын тогтолцооны төрөлхийн гажиг
            _____________________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 60 } }}>
            _________________________________________________________________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 30 } }}>
            5. Сэтэрхий уруул ба тагнай
            ________________________________________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 60 } }}>
            _________________________________________________________________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 30 } }}>
            6. Хоол боловсруулах тогтолцооны төрөлхийн гажиг
            ___________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 60 } }}>
            _________________________________________________________________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 30 } }}>
            7. Бэлэг эрхтний төрөлхийн гажиг
            ________________________________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 60 } }}>
            _________________________________________________________________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 30 } }}>
            8. Шээс ялгаруулах тогтолцооны төрөлхийн гажиг
            _______________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 60 } }}>
            _________________________________________________________________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 30 } }}>
            9. Яс-булчингийн тогтолцооны төрөлхийн гажиг
            ________________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 60 } }}>
            _________________________________________________________________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 30 } }}>
            10. Бусад төрөлхийн гажиг
            ________________________________________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 60 } }}>
            _________________________________________________________________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 30 } }}>
            11. Хромосомын гажиг
            _____________________________________________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 60 } }}>
            _________________________________________________________________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 30 } }}>
            12. Олон эрхтний хавсарсан гажиг
            _________________________________________________________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 60 } }}>
            _________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            7. Хүүхдийн зураг, лабораторийн ба дүрс оношилгооны нэмэлт материал
            дагалдсан эсэх:
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>1. Тийм</span>
            <span style={{ marginLeft: 30 }}>2. Үгүй</span>
          </div>
          <div style={styles.leftText}>
            8. Нярай ба ургийн кариотип тодорхойлох шинжилгээ хийсэн эсэх:
            <span style={{ marginLeft: 30 }}>1. Тийм </span>
            <span style={{ marginLeft: 30 }}>2. Үгүй </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>
              Тийм бол кариотипийг нь бичнэ үү
              ________________________________________________________________________________
            </span>
          </div>
          <div style={styles.leftText}>
            <b> Д. НӨЛӨӨЛӨХ ХҮЧИН ЗҮЙЛ</b>
          </div>
          <div style={styles.leftText}>
            1. Цусан төрлийн гэрлэлт:
            <span style={{ marginLeft: 30 }}>1. Тийм</span>
            <span style={{ marginLeft: 30 }}>2. Үгүй</span>
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
            2. Эцгийн нас:
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
            <div style={{ width: 160 }}>3. Эцгийн эрхэлсэн ажил:</div>
            <div style={{ width: 250 }}>1. Ажилгүй</div>
            <div style={{ width: 300 }}>5. Мансууруулах бодистой ажилладаг</div>
          </div>
          <div
            style={{
              ...styles.leftText,
              ...{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 30,
              },
            }}
          >
            <div style={{ width: 130 }}></div>
            <div style={{ width: 250 }}>2. Компьютер ашигладаг мэргэжил</div>
            <div style={{ width: 300 }}>6. Дархан</div>
          </div>
          <div
            style={{
              ...styles.leftText,
              ...{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 30,
              },
            }}
          >
            <div style={{ width: 130 }}></div>
            <div style={{ width: 250 }}>3. Химийн бодистой ажилладаг</div>
            <div style={{ width: 300 }}>7. Бусад</div>
          </div>
          <div
            style={{
              ...styles.leftText,
              ...{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 30,
              },
            }}
          >
            <div style={{ width: 130 }}></div>
            <div style={{ width: 250 }}>
              4. Цацраг идэвхит бодистой ажилладаг
            </div>
            <div style={{ width: 300 }}></div>
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
            <div style={{ width: 160 }}>4. Эхийн боловсрол</div>
            <div style={{ width: 150 }}>1. Боловсролгүй</div>
            <div style={{ width: 300 }}>4. Мэргэжлийн ба техникийн</div>
          </div>
          <div
            style={{
              ...styles.leftText,
              ...{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 30,
              },
            }}
          >
            <div style={{ width: 130 }}></div>
            <div style={{ width: 150 }}>2. Бага</div>
            <div style={{ width: 300 }}>5. Дээд</div>
          </div>
          <div
            style={{
              ...styles.leftText,
              ...{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 30,
              },
            }}
          >
            <div style={{ width: 130 }}></div>
            <div style={{ width: 150 }}>3. Дунд</div>
            <div style={{ width: 300 }}>6. Мэдээлэлгүй</div>
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
            <div style={{ width: 160 }}>3. Эцгийн эрхэлсэн ажил:</div>
            <div style={{ width: 250 }}>1. Ажилгүй</div>
            <div style={{ width: 300 }}>5. Мансууруулах бодистой ажилладаг</div>
          </div>
          <div
            style={{
              ...styles.leftText,
              ...{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 30,
              },
            }}
          >
            <div style={{ width: 130 }}></div>
            <div style={{ width: 250 }}>2. Компьютер ашигладаг мэргэжил</div>
            <div style={{ width: 300 }}>6. Дархан</div>
          </div>
          <div
            style={{
              ...styles.leftText,
              ...{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 30,
              },
            }}
          >
            <div style={{ width: 130 }}></div>
            <div style={{ width: 250 }}>3. Химийн бодистой ажилладаг</div>
            <div style={{ width: 300 }}>7. Бусад</div>
          </div>
          <div
            style={{
              ...styles.leftText,
              ...{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 30,
              },
            }}
          >
            <div style={{ width: 130 }}></div>
            <div style={{ width: 250 }}>
              4. Цацраг идэвхит бодистой ажилладаг
            </div>
            <div style={{ width: 300 }}></div>
          </div>
          <div style={styles.leftText}>
            6. Эх нь жирэмсний эхний 16 долоо хоногийн дотор тамхи татсан эсэх:
            <span style={{ marginLeft: 30 }}>1. Тийм </span>
            <span style={{ marginLeft: 30 }}>2. Үгүй </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>Хэрэв тийм бол:</span>
            <span style={{ marginLeft: 30 }}>1. Өдөрт 1-20 ширхэг</span>
            <span style={{ marginLeft: 30 }}>2. Өдөрт 21 ширхэгээс их</span>
          </div>
          <div style={styles.leftText}>
            7. Ойр дотны хамт амьдардаг хүмүүс нь эхийн жирэмсний эхний 16 долоо
            хоногийн дотор
          </div>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>дэргэд нь тамхи татсан эсэх:</span>
            <span style={{ marginLeft: 30 }}>1. Тийм</span>
            <span style={{ marginLeft: 30 }}>2. Үгүй</span>
            <span style={{ marginLeft: 30 }}>3. Мэдэхгүй</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>Хэрэв тийм бол:</span>
            <span style={{ marginLeft: 30 }}>1. Өдөрт 1-20 ширхэг</span>
            <span style={{ marginLeft: 30 }}>2. Өдөрт 21 ширхэгээс их</span>
          </div>
          <div style={styles.leftText}>
            8. Эх нь жирэмсний эхний 16 долоо хоногийн дотор архи уусан эсэх:
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>1. Тийм</span>
            <span style={{ marginLeft: 30 }}>2. Үгүй</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>Хэрэв тийм бол:</span>
            <span style={{ marginLeft: 30 }}>1. Бага зэрэг</span>
            <span style={{ marginLeft: 30 }}>2. Дунд зэрэг</span>
            <span style={{ marginLeft: 30 }}>3. Их</span>
          </div>
          <div style={styles.leftText}>
            9. Эх нь архаг эмгэгтэй эсэх:
            <span style={{ marginLeft: 30 }}>1. Тийм </span>
            <span style={{ marginLeft: 30 }}>2. Үгүй </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>Хэрэв тийм бол:</span>
            <span style={{ marginLeft: 30 }}>1. Чихрийн шижин</span>
            <span style={{ marginLeft: 30 }}>2. Эпилепси</span>
            <span style={{ marginLeft: 30 }}>2. Бамбай булчирхайн эмгэг</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 150 }}>4. Системийн өвчин</span>
            <span style={{ marginLeft: 30 }}>
              5. Бусад ____________________
            </span>
          </div>
          <div style={styles.leftText}>
            10. Хэрэв дээрх өвчний улмаас эмчилгээ хийлгэсэн бол эмийг бичнэ үү
            _________________________________
          </div>
          <div style={{ ...styles.leftText, ...{ marginLeft: 20 } }}>
            _________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            11. Жирэмсний эхний 16 долоо хоног дотор эх нь халуурсан эсэх:
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>1. Тийм</span>
            <span style={{ marginLeft: 30 }}>2. Үгүй</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй</span>
          </div>
          <div style={styles.leftText}>
            12. Жирэмсний эхний 16 долоо хоногт 38°С-аас дээш халуурсан эсэх:
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>1. Тийм</span>
            <span style={{ marginLeft: 30 }}>2. Үгүй</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй</span>
          </div>
          <div style={styles.leftText}>
            13. Жирэмсний эхний 16 долоо хоногт халдварт өвчин туссан эсэх:
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>1. Тийм</span>
            <span style={{ marginLeft: 30 }}>2. Үгүй</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>Тийм бол шалтгаан нь:</span>
            <span style={{ marginLeft: 30 }}>
              1. Вирүсийн гаралтай (зур) (улаанууд, цитомегаловирус,
              улаанбурхан,
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 185 }}>бусад __________________)</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 185 }}>
              2. Вирүсийн бус гаралтай (зур) (тэмбүү, бусад ______________)
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 185 }}>3. Мэдээлэлгүй</span>
          </div>
          <div style={styles.leftText}>
            14. Жирэмсний эхний 16 долоо хоногт архаг эмгэгээс бусад өвчний үед
            эм хэрэглэсэн эсэх:
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>1. Тийм</span>
            <span style={{ marginLeft: 30 }}>2. Үгүй</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>
              Тийм бол нэрлэнэ үү
              ___________________________________________________________________________
            </span>
          </div>
          <div style={styles.leftText}>
            15. Жирэмсний эхний 16 долоо хоногт дархлаажуулалтанд хамрагдсан
            эсэх:
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>1. Тийм</span>
            <span style={{ marginLeft: 30 }}>2. Үгүй</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>
              Хэрэв тийм бол бичнэ үү
              ________________________________________________________________________
            </span>
          </div>
          <div style={styles.leftText}>
            16. Жирэмсний эхний 16 долоо хоногт цус алдсан эсэх:
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>1. Тийм</span>
            <span style={{ marginLeft: 30 }}>2. Үгүй</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>17. Жирэмсэлсэн хэлбэр:</span>
            <span style={{ marginLeft: 30 }}>1. Жамаараа</span>
            <span style={{ marginLeft: 30 }}>2. Үр суулгасан</span>
            <span style={{ marginLeft: 30 }}>3. Мэдээлэлгүй</span>
          </div>
          <div style={styles.leftText}>
            18. Жирэмсний эхний 12 долоо хоногийн дотор фолийн хүчил уусан эсэх:
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>
              1. Дор хаяж 0.4мг фолийн хүчил тогтмол уусан
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>
              2. Тогтмол биш уусан, тун мэдэгдэхгүй
            </span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>3. Уугаагүй</span>
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>
              4. Фолийн хүчил уусан эсэх талаар мэдээлэлгүй
            </span>
          </div>
          <div style={styles.leftText}>
            <b>Е. УДАМШИЛ</b>
          </div>
          <div style={styles.leftText}>
            1. Хүүхдэд төрөлхийн хөгжлийн гажигтай ах, эгч, дүү байгаа эсэх:
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>1. Ижил гажиг</span>
            <span style={{ marginLeft: 30 }}>2. Өөр гажиг</span>
            <span style={{ marginLeft: 30 }}>3. Ижил болон өөр гажиг</span>
            <span style={{ marginLeft: 30 }}>4. Үгүй</span>
            <span style={{ marginLeft: 30 }}>4. Тодорхойгүй</span>
          </div>
          <div style={styles.leftText}>
            2. Эхийн төрөл садан дотор төрөлхийн хөгжлийн гажигтай хүн байсан
            эсэх:
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>1. Ижил гажиг</span>
            <span style={{ marginLeft: 30 }}>2. Өөр гажиг</span>
            <span style={{ marginLeft: 30 }}>3. Ижил болон өөр гажиг</span>
            <span style={{ marginLeft: 30 }}>4. Үгүй</span>
            <span style={{ marginLeft: 30 }}>4. Тодорхойгүй</span>
          </div>
          <div style={styles.leftText}>
            1. Эцгийн төрөл садан дотор төрөлхийн хөгжлийн гажиг тодорхойлогдож
            байсан эсэх:
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 30 }}>1. Ижил гажиг</span>
            <span style={{ marginLeft: 30 }}>2. Өөр гажиг</span>
            <span style={{ marginLeft: 30 }}>3. Ижил болон өөр гажиг</span>
            <span style={{ marginLeft: 30 }}>4. Үгүй</span>
            <span style={{ marginLeft: 30 }}>4. Тодорхойгүй</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CT_11;
