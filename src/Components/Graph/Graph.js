import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Graph.module.scss";
import { connect } from "react-redux";

const Graph = (props) =>{
  
  const [graph, setGraph] = useState("")
  const arr = [];
  const costSum = (()=>{
    props.costList.map((item) =>(
        arr.push(props.payments.filter(x => x.costType === item.title).reduce((a,b) => a = a + parseInt(b.cost), 0))
    ))
  })
  useEffect(() => {
    costSum()
        axios
          .get(
            `https://quickchart.io/chart?chart={
                  type: 'bar',
                  data: {
                    labels: ['Food', 'Entertainment', 'Accessories' , 'Subscription', 'Bill', 'Other'],
                    datasets: [{
                      label: 'Costs',
                      data: [${arr}]
                    }]
                  }
                }&backgroundColor=white&width=500&height=300&devicePixelRatio=1.0&format=png&version=2.9.3`,
            { responseType: "arraybuffer" }
          )
          .then((response) => {
            setGraph(`data:${response.headers[
              "content-type"
            ].toLowerCase()};base64,${btoa(
              new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              )
            )}`)
          });
      });
  return(
    <div><img src={graph} alt={'graph of costs'} className={styles.wrapper}/></div>
  )
};
const mapStateToProps = (state) => {
  const { payments, costList } = state;
  return { payments, costList };
};
export default connect(mapStateToProps)(Graph)