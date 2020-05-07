import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  View,
  StyleSheet
} from "react-native";
import Axios from "axios";
import Datatable from "../common/Datatable";
import { Grid, Col, Row } from "react-native-easy-grid";
import Header from "../common/Header";
import LoadingIndicator from '../common/LoadingIndicator';

const Dashboard = (props) => {
  const [isReady, setIsReady] = useState(false);
  const [caseTimeSeries, setCaseTimeSeries] = useState([]);
  const [stateWise, setStateWise] = useState([]);
  const [tested, setTested] = useState([]);
  const [sort, setSort] = useState("count");

  getData = async (sort) => {
    await Axios.get("https://api.covid19india.org/data.json")
      .then((res) => {
        setSort(sort);
        setCaseTimeSeries(res.data.cases_time_series);
        setStateWise(res.data.statewise);
        setTested(res.data.tested);
        setIsReady(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(async() => {
    await getData("count");
    setIsReady(true);
  }, []);

  clickHandler = (event, item) => {
    props.navigation.navigate("StateDetails", {
      state: item,
      navigation: props.navigation,
    });
  };

  refreshHandler = async () => {
    await getData("count");
    setIsReady(false);
  };

  moreInfoHandler = async (item) => {
    let districtData = [];
    let zoneData = [];
    await Axios.get("https://api.covid19india.org/v2/state_district_wise.json")
      .then((res) => {
        if(res.data !== null && res.data !== undefined){
          res.data.map((data) => {
          if(item.statecode === data.statecode){
            districtData.push(data.districtData);
          }
        });
      }
      })
      .catch((err) => {
        console.log(err.message);
      });
      await Axios.get("https://api.covid19india.org/zones.json")
      .then((res) => {
        if(res.data !== null && res.data !== undefined){
          res.data.zones.map((data) => {
          if(item.statecode === data.statecode){
            zoneData.push({statecode:data.statecode, zone:data.zone, district: data.district});
          }
        });
      }
      })
      .catch((err) => {
        console.log(err.message);
      });
    props.navigation.navigate("District", {
      state: item,
      navigation: props.navigation,
      districtWiseData: districtData,
      zoneData: zoneData
    });
  };

  const wholeView = [];
  if(isReady){
    wholeView.push(<ScrollView style={{backgroundColor:'#fff5fd'}}>
      <StatusBar backgroundColor="#fff5fd" barStyle="dark-content" />
      <Header navigation={props.navigation} headerDetails="State Wise Details - India" />
      <TouchableWithoutFeedback onPress={() => getData("count")}>
              <View
                style={{padding: 10,
                  marginTop:10,
                  marginLeft:15,
                  marginRight:15,
                  alignItems: "center",
                  backgroundColor: "#d2c9ff"}}
              >
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  Refresh
                </Text>
              </View>
            </TouchableWithoutFeedback>
      <Grid>
        <Row>
          <Col>
            <TouchableWithoutFeedback onPress={() => getData("date")}>
              <View
                style={sort === "date" ? styles.greenStyle : styles.orangeStyle}
              >
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  Sort By Date
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </Col>
          <Col>
            <TouchableWithoutFeedback onPress={() => getData("count")}>
              <View
                style={
                  sort === "count" ? styles.greenStyle : styles.orangeStyle
                }
              >
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  Sort by count
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </Col>
        </Row>
      </Grid>
      <Datatable
        handler={(event, item) => clickHandler(event, item)}
        stateData={stateWise}
        sortType={sort}
        moreInfoHandler={(item) => moreInfoHandler(item)}
      />
      
    </ScrollView>);
  }
  else{
    wholeView.push(<LoadingIndicator />)
  }

  return (
    <View>
      {wholeView}
    </View>
  );
};

const styles = StyleSheet.create({
  orangeStyle: {
    padding: 10,
    marginTop:10,
    marginLeft:15,
    alignItems: "center",
    backgroundColor: "#fab0ac",
  },
  greenStyle: {
    padding: 10,
    marginTop:10,
    marginLeft:10,
    marginRight:15,
    alignItems: "center",
    backgroundColor: "#b0f7bc",
  },
  spinnerTextStyle: {
    color: "red",
  },
});

export default Dashboard;
