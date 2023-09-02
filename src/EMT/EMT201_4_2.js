import React from "react";
import { Table } from "react-bootstrap";

//маягт ЭМТ - 201.4.2
function EMT201_4_2() {
  const styles = {
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      maxHeight: 130,
      maxWidth: 50,
      lineHeight: 1,
      fontSize: 14,
    },
    leftText: {
      padding: 1,
      verticalAlign: "middle",
      fontSize: 13,
    },
    centerText: {
      padding: 1,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
    },
  };

  return (
    <div className="page-landscape">
      <div className="subpage-landscape">
        <div style={{ textAlign: "center" }}>
          <span style={{ fontWeight: "bold", fontSize: 14 }}>
            ЭМТ- 201.4.2. Амбулаторын үзлэгт хамрагдсан хүний тоо насны бүлэг,
            хүйсээр
          </span>
        </div>
        <Table bordered className="document" style={{ marginBottom: 0 }}>
          <tbody>
            <tr>
              <td rowSpan={4} style={styles.centerText}>
                Үзлэгийн кабинетын нэр
              </td>
              <td rowSpan={4} style={styles.centerText}>
                м/д
              </td>
              <td colSpan={33} style={styles.centerText}>
                Үзлэгт хамрагдсан хүний тоо
              </td>
            </tr>
            <tr>
              <td rowSpan={3} style={styles.verticalText}>
                Бүгд
              </td>
              <td rowSpan={3} style={styles.verticalText}>
                Эрэгтэй
              </td>
              <td rowSpan={3} style={styles.verticalText}>
                Эмэгтэй
              </td>
              <td colSpan={30} style={styles.centerText}>
                Насны бүлгээр
              </td>
            </tr>
            <tr>
              <td colSpan={2} style={styles.centerText}>
                1<div>хүртэлх</div>
              </td>
              <td colSpan={2} style={styles.centerText}>
                1-4
              </td>
              <td colSpan={2} style={styles.centerText}>
                5-9
              </td>
              <td colSpan={2} style={styles.centerText}>
                10-14
              </td>
              <td colSpan={2} style={styles.centerText}>
                15-19
              </td>
              <td colSpan={2} style={styles.centerText}>
                20-24
              </td>
              <td colSpan={2} style={styles.centerText}>
                25-29
              </td>
              <td colSpan={2} style={styles.centerText}>
                30-34
              </td>
              <td colSpan={2} style={styles.centerText}>
                35-39
              </td>
              <td colSpan={2} style={styles.centerText}>
                40-44
              </td>
              <td colSpan={2} style={styles.centerText}>
                45-49
              </td>
              <td colSpan={2} style={styles.centerText}>
                50-54
              </td>
              <td colSpan={2} style={styles.centerText}>
                55-59
              </td>
              <td colSpan={2} style={styles.centerText}>
                60-64
              </td>
              <td colSpan={2} style={styles.centerText}>
                65+
              </td>
            </tr>
            <tr>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эрэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эмэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эрэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эмэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эрэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эмэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эрэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эмэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эрэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эмэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эрэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эмэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эрэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эмэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эрэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эмэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эрэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эмэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эрэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эмэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эрэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эмэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эрэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эмэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эрэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эмэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эрэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эмэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эрэгтэй
              </td>
              <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                Эмэгтэй
              </td>
            </tr>
            <tr>
              <td style={styles.centerText}>А</td>
              <td style={styles.centerText}>Б</td>
              <td style={styles.centerText}>1</td>
              <td style={styles.centerText}>2</td>
              <td style={styles.centerText}>3</td>
              <td style={styles.centerText}>4</td>
              <td style={styles.centerText}>5</td>
              <td style={styles.centerText}>6</td>
              <td style={styles.centerText}>7</td>
              <td style={styles.centerText}>8</td>
              <td style={styles.centerText}>9</td>
              <td style={styles.centerText}>10</td>
              <td style={styles.centerText}>11</td>
              <td style={styles.centerText}>12</td>
              <td style={styles.centerText}>13</td>
              <td style={styles.centerText}>14</td>
              <td style={styles.centerText}>15</td>
              <td style={styles.centerText}>16</td>
              <td style={styles.centerText}>17</td>
              <td style={styles.centerText}>18</td>
              <td style={styles.centerText}>19</td>
              <td style={styles.centerText}>20</td>
              <td style={styles.centerText}>21</td>
              <td style={styles.centerText}>22</td>
              <td style={styles.centerText}>23</td>
              <td style={styles.centerText}>24</td>
              <td style={styles.centerText}>25</td>
              <td style={styles.centerText}>26</td>
              <td style={styles.centerText}>27</td>
              <td style={styles.centerText}>28</td>
              <td style={styles.centerText}>29</td>
              <td style={styles.centerText}>30</td>
              <td style={styles.centerText}>31</td>
              <td style={styles.centerText}>32</td>
              <td style={styles.centerText}>33</td>
            </tr>
            <tr>
              <td style={styles.leftText}>Дотор</td>
              <td style={styles.centerText}>1</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.leftText}>Дотоод шүүрэл</td>
              <td style={styles.centerText}>2</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.leftText}>Хүүхэд</td>
              <td style={styles.centerText}>3</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.leftText}>Мэс засал</td>
              <td style={styles.centerText}>4</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.leftText}>Чих, хамар хоолой</td>
              <td style={styles.centerText}>5</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.leftText}>Гэмтэл</td>
              <td style={styles.centerText}>6</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.leftText}>Нүд</td>
              <td style={styles.centerText}>7</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.leftText}>Шүд</td>
              <td style={styles.centerText}>8</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.leftText}>Эрүү нүүр</td>
              <td style={styles.centerText}>9</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.leftText}>Хавдар</td>
              <td style={styles.centerText}>10</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.leftText}>Нефролог</td>
              <td style={styles.centerText}>11</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.leftText}>Уролог</td>
              <td style={styles.centerText}>12</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.leftText}>Мэдрэл</td>
              <td style={styles.centerText}>13</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.leftText}>Сэтгэц эмгэг</td>
              <td style={styles.centerText}>14</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.leftText}>Халдварт</td>
              <td style={styles.centerText}>15</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.leftText}>Эмэгтэйчүүд</td>
              <td style={styles.centerText}>16</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.leftText}>Арьс, харшил</td>
              <td style={styles.centerText}>17</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.leftText}>Сүрьеэ</td>
              <td style={styles.centerText}>18</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.leftText}>Уламжлалт</td>
              <td style={styles.centerText}>19</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.leftText}>БЗДХ/ДОХ</td>
              <td style={styles.centerText}>20</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.leftText}>Настны</td>
              <td style={styles.centerText}>21</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.leftText}>Бусад</td>
              <td style={styles.centerText}>22</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
            <tr>
              <td style={styles.centerText}>
                <b>Бүгд</b>
              </td>
              <td style={styles.centerText}>23</td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
              <td style={styles.centerText}></td>
            </tr>
          </tbody>
        </Table>
        <div style={styles.leftText}>
          <b>Баганы дагуу:</b> 1=(2+3);
          2=(4+6+8+10+12+14+16+18+20+22+24+26+28+30+32);
          3=(5+7+9+11+13+15+17+19+21+23+25+27+29+31+33)
        </div>
        <div style={styles.leftText}>
          <b>Мөрийн дагуу:</b> 23=(1+...+22)
        </div>
      </div>
    </div>
  );
}

export default EMT201_4_2;
