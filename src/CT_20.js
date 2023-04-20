import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-20
function CT_20() {
  const styles = {
    headerText: {
      fontSize: 12,
      lineHeight: 1.1,
    },
    boldText: {
      fontWeight: "bold",
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 12,
      lineHeight: 1.2,
    },
    leftText: {
      textAlign: "left",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 2,
      lineHeight: 1.1,
      paddingLeft: 5,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 2,
      lineHeight: 1.1,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 4,
      rotate: "180deg",
      maxHeight: 130,
      maxWidth: 40,
      lineHeight: 1,
      fontSize: 12,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "right",
            }}
          >
            <div style={styles.headerText}>
              Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны
            </div>
            <div style={styles.headerText}>
              өдрийн A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
            </div>
            <div style={{ ...styles.headerText, ...{ fontWeight: "bold" } }}>
              Эрүүл мэндийн бүртгэлийн маягт СТ-20
            </div>
            <div style={styles.headerText}>(өвчний түүхэнд хавсаргана)</div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              ЦУС ЦУСАН БҮТЭЭГДЭХҮҮН СЭЛБЭХ ЗӨВШӨӨРӨЛ АВАХ МАЯГТ
            </span>
          </div>
          <div style={styles.rowStyle}>
            <b>Эцэг/эх/-ийн нэр:</b> ____________________________________
            <b>Өөрийн нэр:</b> ____________________________________
          </div>
          <div style={styles.rowStyle}>
            <b>Хүйс: /зур/:</b>эрэгтэй, эмэгтэй <b>Нас </b>
            ______<b>Тасгийн нэр </b>
            ________________
          </div>
          <div style={styles.rowStyle}>
            <b>А. Өгсөн мэдээлэл:</b>
          </div>
          <div style={styles.rowStyle}>
            <b>Онош, заалт:</b>
          </div>
          <div style={styles.rowStyle}>
            __________________________________________________________________
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ marginTop: 10, marginBottom: 10 },
            }}
          >
            <b>Өвчтөнд сэлбэх цус, цусан бүтээгдэхүүний нэр төрөл</b>
            ___________________
          </div>
          <div style={styles.rowStyle}>
            <b>
              (Цус, цусан бүтээгдэхүүн сэлбэх эмчилгээний ач холбогдол, сөрөг үр
              дагавар, урвал хүндрэл, эмчилгээний бусад аргуудын талаар өвчтөнд
              энгийн ойлгомжтой хэллэгээр, дэлгэрэнгүй тайлбарлана)
            </b>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td rowSpan={3} style={styles.leftText}>
                  <b>Ач холбогдол, давуу тал:</b>
                </td>
                <td style={styles.leftText}>
                  □ Улаан эсийн бүтээгдэхүүнийг сэлбэснээр цус багадалтыг
                  эмчилнэ, хүчилтөрөгчийн тээвэрлэлтийг нэмэгдүүлнэ, толгой
                  эргэх, ядрах, амьсгал давхцах зовиурыг багасгана.
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  □ Ялтаст эсийн өтгөрүүлгийг сэлбэснээр цус алдалтаас сэргийлж,
                  цус тогтоолтонд оролцдог эсийн тоо нэмэгдэнэ.
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  □ Шинэ хөлдүү сийвэн болон сийвэнгийн бусад бүтээгдэхүүнүүдийг
                  /криопреципитат/ сэлбэснээр цус алдалтаас сэргийлж, цусны
                  бүлэгнэлтэнд оролцдог уургийн хэмжээг нэмэгдүүлнэ.
                </td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            <b>Гарч болох урвал, эрсдэл, хүндрэл:</b>
          </div>
          <div style={{ ...styles.rowStyle, ...{ marginTop: 10 } }}>
            <b>Улаан эсийн бүтээгдэхүүн сэлбэлт:</b>
          </div>
          <div style={styles.rowStyle}>
            • Цус задралын урвал /эрт болон хожуу үеийн/: 35000-д 1 тохиолдох
            бөгөөд бөөрний дутагдал, судсанд цус түгмэл бүлэгнэх хам шинжээр
            хүндэрч нас баралтад хүргэж болно.
          </div>
          <div style={styles.rowStyle}>
            • Цус задралын бус халууралт: 200-д 1 тохиолдоно.
          </div>
          <div style={styles.rowStyle}>
            • Харшлын урвалууд: арьсны тууралт 100-д 1, харшлын гаралтай шок
            50000-д 1 тохиолдоно.
          </div>
          <div style={styles.rowStyle}>
            • Уушгины цочмог гэмтэл: 12000-д 1 тохиолдох эрсдэлтэй. Цус
            сэлбэснээс хойш 2-8 цагийн дараа уушгины хаван, цусны хүчилтөрөгчийн
            хэмжээ буурдаг. Үүссэн тохиолдолд нас баралт 5-25% байна.
          </div>
          <div style={styles.rowStyle}>
            • Халдварын эрсдэл: нянгийн халдвар 500000-д 1, элэгний В вирусын
            халдвар 220000-д 1, элэгний С вирусын халдвар 1,6 саяд 1, ХДХВ-ын
            халдвар 1,6 саяд 1 тохиолдоно.
          </div>
          <div style={styles.rowStyle}>
            • Цусны бүлэгнэлтийн алдагдал үүсэх: Их хэмжээний цус сэлбэснээс
            цусны бүлэгнэлтийн хүчин зүйлүүдийн харьцаанд өөрчлөлт ордог
          </div>
          <div style={styles.rowStyle}>
            • Бусад хүндрэл: биед шингэний хэмжээ ихсэх, цусны калийн хэмжээ
            ихсэх, цитратын хордлого, цусны кальци, магнийн хэмжээ буурах,
            биеийн халуун буурах.
          </div>
          <div style={{ ...styles.rowStyle, ...{ marginTop: 10 } }}>
            <b>Ялтаст эсийн өтгөрүүлэг сэлбэлт:</b>
          </div>
          <div style={styles.rowStyle}>
            • Халдварын эрсдэл: Улаан эсийн бүтээгдэхүүнтэй харьцуулахад
            халдварын эрсдэл 2000-3000-д 1 тохиолдоно. Үжил үүсгэх эрсдэл 5000-д
            1 гэж бүртгэгдсэн.
          </div>
          <div style={styles.rowStyle}>
            • Цус задралын бус халууралт: 200-д 60 тохиолдол буюу 30% хүртэл
            тохиолдож болно.
          </div>
          <div style={styles.rowStyle}>
            • Харшлын урвалууд: Улаан эсийн бүтээгдэхүүнүүдтэй харьцуулахад их
            буюу 0,09-21% тохиолддог.
          </div>
          <div style={styles.rowStyle}>
            • Уушгины цочмог гэмтэл: Улаан эсийн бүтээгдэхүүнтэй харьцуулахад
            тохиолдын хувь бага, 60000-д 1 тохиолддог.
          </div>
          <div style={styles.rowStyle}>
            <b>Сийвэнгийн бүтээгдэхүүн сэлбэлт:</b>
          </div>
          <div style={styles.rowStyle}>
            • Цус задралын урвал /эрт болон хожуу үеийн/: Цусны бүлгийн
            тохирооноос хамаарч цус задрах урвал үүснэ. 35000-д 1 тохиолдоно.
          </div>
          <div style={styles.rowStyle}>
            • Халдварын эрсдэл: харьцангуй бага, элэгний В вирусын халдвар
            900000-д 1, элэгний С вирусын халдвар 3 саяд 1, ХДХВ-ын халдвар 8
            саяд 1 тохиолдоно.
          </div>
          <div style={styles.rowStyle}>
            • Харшлын урвалууд: харьцангуй тохиолдол их буюу 17000 сэлбэлтэнд 1
            тохиолддог.
          </div>
          <div style={styles.rowStyle}>
            • Уушгины цочмог гэмтэл: 12000 нэгж сэлбэлтэнд 6,9 тохиолдож болох
            эрсдэлтэй судалгааны үр дүн байдаг.
          </div>
          <div style={{ ...styles.rowStyle, ...{ marginTop: 10 } }}>
            <b>Өвчтөнд холбогдох мэдээллийг өгсөн эмчийн нэр, гарын үсэг</b>
            .....................................
          </div>
          <div style={styles.rowStyle}>
            <b>Огноо:</b>________ он_____сар_____өдөр
          </div>
          <div style={styles.rowStyle}>
            <b>Б. Өвчтөний зөвшөөрөл:</b>
          </div>
          <div style={styles.rowStyle}>
            Би эмчилгээний ач холбогдол, гарч болзошгүй сөрөг үр дагаврын талаар
            тодорхой ойлгосон тул
          </div>
          <div style={styles.rowStyle}>
            Надад хийсэн шинжилгээ, эмнэл зүйн тоо баримтыг судалгаа
            шинжилгээний материалд нэргүйгээр
          </div>
          <div style={styles.rowStyle}>
            <b>Өвчтөний эцэг/эх/-ийн нэр, өөрийн нэр, гарын үсэг </b>
            ____________________________________
          </div>
          <div style={styles.rowStyle}>
            <b>Огноо:</b> ________ он_____сар_____өдөр
          </div>
          <div style={styles.rowStyle}>
            <b> ________ он_____сар_____өдөр</b>
          </div>
          <div style={styles.rowStyle}>
            <b>Өвчтөн эрх зүйн чадамжгүй байгаа бол:</b>
          </div>
          <div style={styles.rowStyle}>
            Насанд хүрээгүй, ухаангүй, сэтгэцийн эмгэгтэй (доогуур зур)
          </div>
          <div style={styles.rowStyle}>
            Бусад ___________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            <b>
              Зөвшөөрсөн асран хамгаалагчийн эцэг/эх/-ийн нэр, өөрийн нэр /гарын
              үсэг/
            </b>
            20 _________________ /_____________/
          </div>
          <div style={styles.rowStyle}>
            <b>Өвчтөнтэй ямар холбоотой болох: </b>_____________________________
          </div>
          <div style={styles.rowStyle}>
            <b>Огноо: </b>________ он_____сар_____өдөр
          </div>
          <div style={styles.rowStyle}>
            <b>
              Хэрэв өвчтөн болон асран хамгаалагч нь зөвшөөрөөгүй тохиолдолд:
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>
              Цус, цусан бүтээгдэхүүн сэлбүүлэхээс татгалзсан шалтгаан (
              дэлгэрэнгүй бичих ):
            </b>
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            <b>Татгалзсан хүний эцэг/эх/-ийн нэр, өөрийн нэр, гарын үсэг </b>
            _______________________________________
          </div>
          <div style={styles.rowStyle}>
            <b>Огноо:</b> ________ он_____сар_____өдөр
          </div>
          <div style={styles.rowStyle}>
            <b>Тайлбар: Сэлбэлт хийх эмч бөглөнө</b>
          </div>
        </div>
      </div>
    </>
  );
}

export default CT_20;
