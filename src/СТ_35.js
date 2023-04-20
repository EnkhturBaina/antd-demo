import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-35
function СТ_35() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 12,
      lineHeight: 1,
    },
    generalText: {
      fontSize: 10,
    },
    rowStyle: {
      fontSize: 10,
      marginTop: 5,
    },
    leftText: {
      padding: 1,
      verticalAlign: "middle",
      fontSize: 10,
    },
    centerText: {
      padding: 1,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 10,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 10,
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    topText: {
      padding: 1,
      fontSize: 10,
    },
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 10,
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
      fontSize: 10,
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.flexContainer}>
            <div style={{ display: "flex" }}></div>
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
                  <span style={{ fontWeight: "bold", fontSize: 10 }}>
                    Эрүүл мэндийн бүртгэлийн маягт СТ-35
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 10 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ГЭРИЙН ТӨРӨЛТИЙГ МЭДЭЭЛЭХ ХУУДАС
            </span>
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ display: "flex", flexDirection: "row" },
            }}
          >
            1. Эцэг /эх/-ийн нэр: _______________ 2. Нэр: ___________________
            <div style={{ display: "flex", marginTop: 5 }}>
              <span style={styles.generalText}>РД:</span>
              <div style={{ display: "flex", marginLeft: 15 }}>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default СТ_35;
