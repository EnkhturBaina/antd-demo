import React from "react";
import { Table } from "react-bootstrap";

//маягт  СТ-3 Хавсралт 1

function CT3_1() {
  const styles = {
    generalText: {
      fontSize: 12,
    },
    leftText: {
      verticalAlign: "middle",
      fontSize: 12,
      padding: 0,
      paddingLeft: 5,
      marginTop: 5,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 0,
    },
    leftBold: {
      fontWeight: "bold",
      fontSize: 12,
      marginTop: 10,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 4,
      rotate: "180deg",
      lineHeight: 1,
      fontSize: 12,
      textAlign: "center",
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <span
            style={{
              ...styles.generalText,
              ...{ textAlign: "right", display: "block" },
            }}
          >
            Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={styles.leftBold}></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "right",
              }}
            >
              <span style={styles.generalText}>
                A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
              </span>
              <span style={{ fontWeight: "bold", fontSize: 12 }}>
                Эрүүл мэндийн бүртгэлийн маягт СТ-3 Хавсралт 1
              </span>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: 15,
              marginBottom: 15,
              lineHeight: 1,
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              КЕСАР МЭС ЗАСЛЫН ТЭМДЭГЛЭЛ
            </span>
          </div>
          <div style={styles.leftText}>
            Мэс засал эхэлсэн ______ сар _______ өдөр ______ цаг _______ минут
          </div>
          <div style={styles.leftText}>
            Эхийн түүхийн № ____________________________________________ Тасаг
            ______________________________________________________
          </div>
          <div style={styles.leftText}>
            Эхийн овог ________________________________ нэр
            ____________________________ нас _________ цусны бүлэг
            _________________________
          </div>
          <div style={styles.leftText}>
            Мэс засал эхэлсэн цаг __________ минут __________ , дууссан цаг
            _________ минут _________
          </div>
          <div style={styles.leftText}>
            Мэс заслын үргэлжилсэн хугацаа _________цаг ________ минут
          </div>
          <div style={styles.leftText}>
            <b>
              Мэс заслын нэр
              ___________________________________________________________________________________________
            </b>
          </div>
          <div style={styles.leftText}>
            <b>Мэс заслын давтамж: </b>/зур/ анхных, хоёрдахь, гуравдахь. Мэс
            засал төлөвлөгөөт, яаралтай /зур/
          </div>
          <div style={styles.leftText}>
            <b>Кесар мэс заслын заалт: </b>
            ______________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            __________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            __________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            Мэдээ алдуулагч /зур/ ерөнхий: эндотрахеал, хошуувч, төвөнхийн
            хошуувч
          </div>
          <div style={styles.leftText}>
            <span style={{ marginLeft: 100 }}>
              бүсчилсэн: нугасны хөндийн, нугасны гадна хөндийн, нугасны гадна
              хөндийн гуурс
            </span>
          </div>
          <div style={styles.leftText}>
            <b>Нэг. Мэс заслын явц</b>{" "}
            ______________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            __________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            __________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            дагуу, хөндлөн /пфанненштил/ , зүсэлт, /хуучин сорвийг өөлж/ хийв.{" "}
          </div>
          <div style={styles.leftText}>
            Умайн доод таславчинд: /зур/ хөндлөн, дагуу, их биеийн дагуу зүсэлт
          </div>
          <div style={styles.leftText}>
            1-р хүүхэд _______ минутанд ________эр, эм, ______ грамм жинтэй,
            _______см урттай, Апгарын __________ балл
          </div>
          <div style={styles.leftText}>
            2-р хүүхэд _______ минутанд ________эр, эм, ______ грамм жинтэй,
            _______см урттай, Апгарын __________ балл
          </div>
          <div style={styles.leftText}>
            3-р хүүхэд _______ минутанд ________эр, эм, ______ грамм жинтэй,
            _______см урттай, Апгарын __________ балл
          </div>
          <div style={styles.leftText}>үнэлэв.</div>
          <div style={styles.leftText}>
            Ихэс умайн ард, урд, хажуу хананд бэхлэгдсэнийг гаргаж, умайн шархыг
            ___________________________________
          </div>
          <div style={styles.leftText}>утсаар хөвөрдөж оёлоо</div>
          <div style={styles.leftText}>
            Умайн агшилт /зур/ сайн, муу Умайн дайврууд, бусад эрхтнийг шалгахад
            өөрчлөлт /зур/ байсан, үгүй
          </div>
          <div style={styles.leftText}>
            Байсан өөрчлөлт
            ___________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            Үрийн хоолойг /зур/ боосон, боогоогүй
          </div>
          <div style={styles.leftText}>
            Мэс заслын үед гарсан цус ______________ мл, шээс _____________ мл,
            Ихэсийн жин _______________ диаметр_____________
          </div>
          <div style={styles.leftText}>
            зузаан _______________ , хүйн урт __________________ байрлал
            ________________________
          </div>
          <div style={styles.leftText}>
            <b>Хоёр. Мэс засал өргөтгөсөн тухайн тэмдэглэл</b>
          </div>
          <div style={styles.leftText}>
            __________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            __________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            {" "}
            Мэс заслаар авсан эдийн тухай тэмдэглэл
            ____________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            __________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            Мэс заслын дараах онош
            _____________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            __________________________________________________________________________________________________________________________________
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={styles.leftText}>Мэс засал хийсэн эмч</div>
              <div style={styles.leftText}>
                1.__________________________________
              </div>
              <div style={styles.leftText}>
                2.__________________________________
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 250,
              }}
            >
              <div style={styles.leftText}>Мэдээгүйжүүлсэн эмч</div>
              <div style={styles.leftText}>
                Эмч _______________________________
              </div>
              <div style={styles.leftText}>
                Сувилагч __________________________
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CT3_1;
