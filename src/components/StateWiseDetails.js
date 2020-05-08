import React, { useState, useEffect } from "react";
import { ScrollView, Text, StatusBar, View, StyleSheet } from "react-native";
import Header from "../common/Header";
import LoadingIndicator from "../common/LoadingIndicator";
import { DataTable } from "react-native-paper";
import GridDetail from "../common/GridDetail";

const StateWiseDetails = (props) => {
  const [districtWiseData, setDistrictWiseData] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [stateCode, setStateCode] = useState("");
  const [districtArray, setDistrictArray] = useState([]);
  const [zoneArray, setZoneArray] = useState([]);
  const [activeFlag, setActiveFlag] = useState(0);
  const [confirmFlag, setConfirmFlag] = useState(0);
  const [recoverFlag, setRecoverFlag] = useState(0);
  const [deathFlag, setDeathFlag] = useState(0);

  if (props.route.params === undefined) {
    props.navigation.navigate("State");
  }

  useEffect(() => {
    if (props.route.params !== undefined) {
      setStateCode(props.route.params.state.statecode);
      setDistrictWiseData(props.route.params.districtWiseData[0]);
      setZoneArray(props.route.params.zoneData);
      setIsReady(true);
      setActiveFlag(0);
      setConfirmFlag(0);
      setRecoverFlag(0);
      setDeathFlag(0);
    } else {
      setIsReady(true);
      alert("Kindly select any one state to see district wise details");
    }
  }, [
    props.route.params.districtWiseData[0],
    props.route.params.zoneData,
    props.route.params.state.statecode,
  ]);

  const clickActiveHandler = async (event) => {
    let sortedActiveData = [];
    setConfirmFlag(0);
    setRecoverFlag(0);
    setDeathFlag(0);
    sortedActiveData = districtWiseData.sort((a, b) => {
      return parseFloat(a.confirmed) - parseFloat(b.confirmed);
    });

    if (activeFlag === 2) {
      sortedActiveData = districtWiseData.sort((a, b) => {
        return parseFloat(b.confirmed) - parseFloat(a.confirmed);
      });
    }
    await setActiveFlag(activeFlag == 0 ? 1 : activeFlag === 1 ? 2 : 1);
   
    setDistrictWiseData(sortedActiveData);
  };

  const clickConfirmHandler = async (event) => {
    let sortedActiveData = [];
    setActiveFlag(0);
    setRecoverFlag(0);
    setDeathFlag(0);
    sortedActiveData = districtWiseData.sort((a, b) => {
      return parseFloat(a.active) - parseFloat(b.active);
    });

    if (confirmFlag === 2) {
      sortedActiveData = districtWiseData.sort((a, b) => {
        return parseFloat(b.active) - parseFloat(a.active);
      });
    }
    await setConfirmFlag(confirmFlag == 0 ? 1 : confirmFlag === 1 ? 2 : 1);
   
    setDistrictWiseData(sortedActiveData);
  };

  const clickRecoverHandler = async (event) => {
    let sortedActiveData = [];
    setConfirmFlag(0);
    setActiveFlag(0);
    setDeathFlag(0);
    sortedActiveData = districtWiseData.sort((a, b) => {
      return parseFloat(a.recovered) - parseFloat(b.recovered);
    });

    if (recoverFlag === 2) {
      sortedActiveData = districtWiseData.sort((a, b) => {
        return parseFloat(b.recovered) - parseFloat(a.recovered);
      });
    }
    await setRecoverFlag(recoverFlag == 0 ? 1 : recoverFlag === 1 ? 2 : 1);
    
    setDistrictWiseData(sortedActiveData);
  };

  const clickDeathHandler = async (event) => {
    let sortedActiveData = [];
    setConfirmFlag(0);
    setRecoverFlag(0);
    setActiveFlag(0);
    sortedActiveData = districtWiseData.sort((a, b) => {
      return parseFloat(a.deceased) - parseFloat(b.deceased);
    });

    if (deathFlag === 2) {
      sortedActiveData = districtWiseData.sort((a, b) => {
        return parseFloat(b.deceased) - parseFloat(a.deceased);
      });
    }
    await setDeathFlag(deathFlag == 0 ? 1 : deathFlag === 1 ? 2 : 1);

    setDistrictWiseData(sortedActiveData);
  };

  gotoWorldDetail = () =>{
    props.navigation.navigate("World");
  }

  let wholeview = [];
  if (props.route.params !== undefined) {
    if (isReady) {
      wholeview.push(
        <ScrollView>
          <StatusBar backgroundColor="#f3f2f5" barStyle="dark-content" />
          <Header
            navigation={props.navigation}
            headerDetails={
              <Text>
                District -{" "}
                {props.route.params !== undefined
                  ? props.route.params.state.state
                  : ""}
              </Text>
            }
            handler ={() => {gotoWorldDetail()}}
            type="world"
          />
          <View style={{ margin: 15 }}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title
                  style={{ alignItems: "center" }}
                  numberOfLines={2}
                >
                  District
                </DataTable.Title>
                <DataTable.Title
                  numeric
                  style={{ alignItems: "center" }}
                  sortDirection={
                    activeFlag === 0
                      ? ""
                      : activeFlag === 1
                      ? "ascending"
                      : activeFlag === 2
                      ? "descending"
                      : ""
                  }
                  onPress={(event) => clickActiveHandler(event)}
                >
                  A
                </DataTable.Title>
                <DataTable.Title
                  numeric
                  style={{ alignItems: "center" }}
                  sortDirection={
                    confirmFlag === 0
                      ? ""
                      : confirmFlag === 1
                      ? "ascending"
                      : confirmFlag === 2
                      ? "descending"
                      : ""
                  }
                  onPress={(event) => clickConfirmHandler(event)}
                >
                  C
                </DataTable.Title>
                <DataTable.Title numeric style={{ alignItems: "center" }} sortDirection={
                    recoverFlag === 0
                      ? ""
                      : recoverFlag === 1
                      ? "ascending"
                      : recoverFlag === 2
                      ? "descending"
                      : ""
                  }
                  onPress={(event) => clickRecoverHandler(event)}>
                  R
                </DataTable.Title>
                <DataTable.Title numeric style={{ alignItems: "center" }} sortDirection={
                    deathFlag === 0
                      ? ""
                      : deathFlag === 1
                      ? "ascending"
                      : deathFlag === 2
                      ? "descending"
                      : ""
                  }
                  onPress={(event) => clickDeathHandler(event)}>
                  D
                </DataTable.Title>
              </DataTable.Header>
              <GridDetail
                districtWiseData={districtWiseData}
                zoneData={zoneArray}
                stateCode={stateCode}
              />
            </DataTable>
          </View>
        </ScrollView>
      );
    } else {
      wholeview.push(<LoadingIndicator />);
    }
  }

  return <View>{wholeview}</View>;
};

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

export default StateWiseDetails;
