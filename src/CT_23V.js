import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-23В
function CT_23V() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 12,
      lineHeight: 1,
    },
    generalText: {
      fontSize: 11,
    },
    topText: {
      padding: 1,
      fontSize: 10,
    },
    blankSpaces: {
      fontSize: 11,
    },
    rowStyle: {
      fontSize: 11,
    },
    leftText: {
      padding: 1,
      verticalAlign: "middle",
      fontSize: 11,
    },
    rightText: {
      textAlign: "right",
      padding: 1,
      verticalAlign: "middle",
      fontSize: 11,
    },
    centerText: {
      padding: 1,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 11,
    },
    flexContainerTop: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      fontSize: 11,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 11,
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 11,
      marginTop: 3,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 4,
      rotate: "180deg",
      maxHeight: 130,
      maxWidth: 40,
      lineHeight: 1,
      fontSize: 11,
      textAlign: "center",
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.flexContainer}>
            <div></div>
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
                  <span style={{ fontWeight: "bold", fontSize: 11 }}>
                    Эрүүл мэндийн бүртгэлийн маягт СТ-23В
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 13 }}>
              ХАЛДВАРТАЙ ӨВЧНИЙ ТУСГААРЛАЛТ ХАЛДВАРГҮЙТГЭЛИЙН ДУУДЛАГЫН ХУУДАС
            </span>
          </div>
          <div style={styles.rowStyle}>
            Дуудлага авсан <span style={{ marginLeft: 50 }}>он</span>
            <span style={{ marginLeft: 50 }}>сар</span>
            <span style={{ marginLeft: 50 }}>өдөр</span>
          </div>
          <div style={styles.flexRow}>
            <div style={styles.rowStyle}>
              Дуудлага хүлээн авсан хүний нэр
              ____________________________________________________________________________________________________
            </div>
          </div>
          <div style={styles.flexRow}>
            <div style={styles.rowStyle}>
              Дуудлага өгсөн хүний нэр ________________________________________
              Утас ______________________________№ _____________________________
            </div>
          </div>
          <div style={styles.rowStyle}>
            Ажлын газар, хаяг
            _____________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Өвчтөний овог _________________________________ Нэр
            ____________________________________нас_______________________ Хүйс:
            эр, эм (зур)
          </div>
          <div style={styles.rowStyle}>
            Өвчтөний гэрийн
            хаяг_________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            __________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Өвчтөний ажил, сургууль, цэцэрлэг
            __________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Өвчин эхэлсэн _______________ он _______________сар ___________ өдөр
            ______________ цаг
            <span style={{ marginLeft: 40 }}>
              Анхны шинж тэмдэг.______________
            </span>
          </div>
          <div style={styles.rowStyle}>
            __________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            __________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Эмчийн нэр ______________________________________________ Жолооч
            _________________________________________ км ______________________
          </div>
          <div style={styles.rowStyle}>
            Хаягийн тодруулга
            _____________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            __________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            _____________________________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.centerText}>
            <b>ХӨСҮТ-ийн хүлээн авахад</b>
          </div>
          <div style={styles.rowStyle}>
            __________________________________ Овогтой
            _________________________Нас _____________________ Хүйс: эр, эм
            (зур)
          </div>
          <div style={styles.rowStyle}>
            Онош
            ___________________________________________________________________________өвчтэй
            учир хэвтүүлэн эмчлүүлье.
          </div>
          <div style={styles.rowStyle}>
            Тусгаарлалт халдваргүйтгэлийн алба их, бага эмч (зур)
          </div>
          <div style={styles.rowStyle}>
            Нэр ________________________________________________ Хуудас №
            ____________________________________________________________
          </div>
          <div style={styles.rightText}>
            <b>АР ТАЛ</b>
          </div>
          <div style={styles.centerText}>
            <b> ГОЛОМТОНД АВСАН АНХНЫ АРГА ХЭМЖЭЭ </b>
          </div>
          <div style={styles.rowStyle}>1. Бодит үзлэг хийсэн, үгүй (зур)</div>
          <div style={styles.rowStyle}>2. Эмчилгээ хийсэн, үгүй (зур)</div>
          <div style={styles.rowStyle}>
            Эм тарианы нэр, тун хэмжээ
            ______________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            __________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Хэрэглэсэн зүү шиприц, бусад зүйл
            ___________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            3. Халдварын судалгаа хийсэн, үгүй (зур)
          </div>
          <div style={styles.rowStyle}>
            4.Зөвөлгөө яриа хийсэн хүний тоо
            ___________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            5. Шинжилгээ авбал зохих хүний тоо
            ______________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Үүнээс шинжилгээ авсан хүний тоо
            ___________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            6. Халдваргүйтгэл хийсэн, үгүй (зур)
          </div>
          <div style={styles.rowStyle}>
            <span style={{ marginLeft: 100 }}>
              Хийсэн бодисын нэр, тун хэмжээ
              ___________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ marginLeft: 100 }}>
              Хийгээгүй шалтгааныг тодорхой бич
              ________________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            9. Халдварын клиник эмнэлэгт тусгаарлагдсан, үгүй (зур)
          </div>
          <div style={styles.rowStyle}>
            Хэвтээгүй шалтгааныг тодорхой бич
            _____________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            __________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            10. Онош үгүйсгэсэн аль эмнэлэг
            ____________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Эмчийн нэр
            ___________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Буцаасан онош
            __________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            _____________________________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            <span style={{ marginLeft: 70 }}>
              <b>Та манай үйлчилгээний талаар санал хүсэлтээ бичнэ үү?</b>
            </span>
          </div>
          <div style={styles.rowStyle}>
            Хангалттай, хангалтгүй (зур). Тайлбар
            ________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            __________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            __________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Хүний нэр
            _____________________________________________________________________________________________________
          </div>
        </div>
      </div>
    </>
  );
}

export default CT_23V;
