import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Graph.module.scss";

const Graph = () =>{

  const [graph, setGraph] = useState("")

  useEffect(() => {
        axios
          .get(
            `https://quickchart.io/chart?chart={
                  type: 'bar',
                  data: {
                    labels: ['Food', 'Entertainment', 'Accessories' , 'Subscription', 'Bill', 'Other'],
                    datasets: [{
                      label: 'Costs',
                      data: [1,2,3,4,5,6]
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

export default Graph;