import React, { useState } from 'react';
import { StyleSheet,Text } from 'react-native';
import { DataTable } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";

const GridDetail = (props) => {
    let districtWiseDataArray = [];

    props.districtWiseData.map((data) => {
        let zoneValue = [];
        props.zoneData.map((zone) => {
          if (
            zone.district === data.district &&
            zone.statecode === props.stateCode
          ) {
            zoneValue.push(zone);
          }
        });
        districtWiseDataArray.push(
          <DataTable.Row
            style={
              zoneValue.length > 0
                ? zoneValue[0].zone.toString().toLowerCase() === "green"
                  ? styles.greenStyle
                  : zoneValue[0].zone.toString().toLowerCase() === "orange"
                  ? styles.orangeStyle
                  : styles.redStyle
                : ""
            }
          >
            <DataTable.Cell style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 8 }}>{data.district}</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 11 }}>{data.confirmed}</Text>
              {data.delta.confirmed === 0 ? (
                ""
              ) : (
                <Text style={{ fontSize: 5 }}>
                  {"  "}
                  {data.delta.confirmed}
                  <FontAwesome5 name="arrow-up" size={8} color="red" />
                </Text>
              )}
            </DataTable.Cell>
            <DataTable.Cell numeric style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 12 }}>{data.active}</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 11 }}>{data.recovered}</Text>
              {data.delta.recovered === 0 ? (
                ""
              ) : (
                <Text style={{ fontSize: 5 }}>
                  {"  "}
                  {data.delta.recovered}
                  <FontAwesome5 name="arrow-up" size={8} color="green" />
                </Text>
              )}
            </DataTable.Cell>
            <DataTable.Cell numeric style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 11 }}>{data.deceased}</Text>
              {data.delta.deceased === 0 ? (
                ""
              ) : (
                <Text style={{ fontSize: 5 }}>
                  {"  "}
                  {data.delta.deceased}
                  <FontAwesome5 name="arrow-up" size={8} color="gray" />
                </Text>
              )}
            </DataTable.Cell>
          </DataTable.Row>
        );
      });
      return(<>{districtWiseDataArray}</>)
} 


const styles = StyleSheet.create({
    redStyle: {
      backgroundColor: "#fad1cf",
    },
    greenStyle: {
      backgroundColor: "#cffacf",
    },
    orangeStyle: {
      backgroundColor: "#faefc5",
    },
  });
  

export default GridDetail;