import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-15
function CT_15() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 18,
      height: 18,
    },
    generalText: {
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 12,
      marginTop: 10,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      marginTop: 10,
    },
  };
  return (
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
            justifyContent: "flex-end",
          }}
        >
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
            <span style={{ fontWeight: "bold", fontSize: 14 }}>
              Эрүүл мэндийн бүртгэлийн маягт СТ-15
            </span>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 15, marginBottom: 15 }}>
          <span style={{ fontWeight: "bold", fontSize: 16 }}>
            ЭМЧ ДУУДАХ ХУУДАС
          </span>
        </div>
        <div style={styles.rowStyle}>_______он_________сар______өдөр</div>
        <div style={styles.rowStyle}>
          __________________________________________________________-р
          тасагт________________________________________________________________________
        </div>
        <div style={styles.rowStyle}>
          ____________________________________________________________________________________________________________________________________________
        </div>
        <div style={styles.rowStyle}>
          оноштой эмчлэгдэж байгаа эмчлүүлэгчийн
          нэр________________________________________________________________________________________
        </div>
        <div style={styles.rowStyle}>
          Нас ________Хүйс: эрэгтэй, эмэгтэй-г үзүүлэхээр
          _________________________________________________________________________________________
        </div>
        <div style={styles.rowStyle}>
          __________________________________________________________мэргэжлийн
          эмч_______________________________________________________ дуудав.
        </div>
        <div style={styles.centerText}>
          Эмчлэгч эмч __________________________________
        </div>
        <div style={styles.centerText}>
          Дуудлагыг шийдвэрлэсэн хүний нэр
          _____________________________________________
        </div>
        <div style={styles.centerText}>
          Албан тушаал ________________________________________________
        </div>
        <div style={styles.centerText}>
          Батлав. Ерөхний эмч _________________________________
        </div>
        <div style={styles.rowStyle}>
          Ирсэн ___________он_________сар________өдөр_______цаг________минут
        </div>
        <div style={styles.rowStyle}>
          Буцсан ___________он_________сар________өдөр_______цаг________минут
          <span style={{ marginLeft: 150 }}>
            Дуудлагад зарцуулсан цаг __________
          </span>
        </div>
        <div style={styles.centerText}>
          Зөвлөгөө өгсөн эмч __________________________
        </div>
        <div style={styles.centerText}>
          Зөвлөгөө авсан эмч __________________________
        </div>
      </div>
    </div>
  );
}

export default CT_15;
