import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from "react-native";
import Axios from "axios";
import Datatable from "../common/Datatable";
import { Grid, Col, Row } from "react-native-easy-grid";
import Header from "../common/Header";
import { ActivityIndicator, Colors, Searchbar } from "react-native-paper";
import { List } from "react-native-paper";
import BootstrapStyleSheet from "react-native-bootstrap-styles";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import CountryDataTable from "../common/CountryDataTable";

const World = (props) => {
  const [GlobalData, setGlobalData] = useState([]);
  const [CountryData, setCountryData] = useState([]);
  const [CountryActualData, setCountryActualData] = useState([]);
  const [SearchQuery, setSearchQuery] = useState("");

  let dataValues = [];
  const BODY_COLOR = "#000022",
    TEXT_MUTED = "#888888";

  // custom constants
  const constants = {
    BODY_COLOR,
    TEXT_MUTED,
  };

  // custom classes
  const classes = {
    title: {
      color: "red",
    },
  };

  const bootstrapStyleSheet = new BootstrapStyleSheet(constants, classes);
  const s = (styless = bootstrapStyleSheet.create());
  const c = (constantss = bootstrapStyleSheet.constants);

  getData = async (sort) => {
    await Axios.get("https://api.covid19api.com/summary")
      .then((res) => {
        if (res.data !== undefined && res.data !== null) {
          setGlobalData(res.data.Global);
          setCountryData(res.data.Countries);
          setCountryActualData(res.data.Countries);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const onChangedTextHandler = (text) => {
    setSearchQuery(text);
    let countrySearchedData = [];
    let countryActual = CountryActualData;
    if (text !== "") {
      countryActual.map((data) => {
        if (data.Country.toString().startsWith(text)) {
          countrySearchedData.push(data);
        }
      });
    } else {
        countrySearchedData = countryActual;
    }
    setCountryData(countrySearchedData);
  };

  useEffect(async () => {
    await getData("");
    let dataValues = [];
    CountryData.map((data) => {
      console.log("Hitted");
      dataValues.push(
        <List.Accordion title={data.Country} id={data.CountryCode}>
          <View style={[s.card]}>
            <View style={[s.cardBody]}>
              <View>
                <Grid>
                  <Row>
                    <Col
                      style={{
                        borderColor: "black",
                        borderStyle: "solid",
                        borderWidth: 1,
                        padding: 10,
                        margin: 10,
                      }}
                    >
                      <Grid>
                        <Row style={{ padding: 0 }}>
                          <Col>
                            <Text
                              style={{
                                fontSize: 12,
                                alignSelf: "center",
                                color: "blue",
                              }}
                            >
                              Confirmed
                            </Text>
                          </Col>
                        </Row>
                        <Row style={{ padding: 0 }}>
                          <Col>
                            <Text style={{ fontSize: 16 }}>
                              {data.TotalConfirmed}
                            </Text>
                          </Col>
                          <Col>
                            <Text style={{ fontSize: 10, lineHeight: 22 }}>
                              {data.NewConfirmed}{" "}
                              <FontAwesome5
                                name="arrow-up"
                                fontSize={10}
                                color="red"
                              />
                            </Text>
                          </Col>
                        </Row>
                      </Grid>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      style={{
                        borderColor: "black",
                        borderStyle: "solid",
                        borderWidth: 1,
                        padding: 10,
                        margin: 10,
                      }}
                    >
                      <Grid>
                        <Row style={{ padding: 0 }}>
                          <Col>
                            <Text
                              style={{
                                fontSize: 12,
                                alignSelf: "center",
                                color: "gray",
                              }}
                            >
                              Death
                            </Text>
                          </Col>
                        </Row>
                        <Row style={{ padding: 0 }}>
                          <Col>
                            <Text style={{ fontSize: 16 }}>
                              {data.TotalDeaths}
                            </Text>
                          </Col>
                          <Col>
                            <Text style={{ fontSize: 10, lineHeight: 22 }}>
                              {data.NewDeaths}{" "}
                              <FontAwesome5
                                name="arrow-up"
                                fontSize={10}
                                color="gray"
                              />
                            </Text>
                          </Col>
                        </Row>
                      </Grid>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      style={{
                        borderColor: "black",
                        borderStyle: "solid",
                        borderWidth: 1,
                        padding: 10,
                        margin: 10,
                      }}
                    >
                      <Grid>
                        <Row style={{ padding: 0 }}>
                          <Col>
                            <Text
                              style={{
                                fontSize: 12,
                                alignSelf: "center",
                                color: "green",
                              }}
                            >
                              Recovered
                            </Text>
                          </Col>
                        </Row>
                        <Row style={{ padding: 0 }}>
                          <Col>
                            <Text style={{ fontSize: 14 }}>
                              {data.TotalRecovered}
                            </Text>
                          </Col>
                          <Col>
                            <Text style={{ fontSize: 10, lineHeight: 22 }}>
                              {data.NewRecovered}{" "}
                              <FontAwesome5
                                name="arrow-up"
                                fontSize={10}
                                color="green"
                              />
                            </Text>
                          </Col>
                        </Row>
                      </Grid>
                    </Col>
                  </Row>
                </Grid>
              </View>
            </View>
          </View>
        </List.Accordion>
      );
    });
  }, []);

  gotoIndiaDetail = () =>{
    props.navigation.navigate("State");
  }

  return (
    <View>
      <ScrollView style={{ backgroundColor: "#fff5fd" }}>
        <StatusBar backgroundColor="#fff5fd" barStyle="dark-content" />
        <Header
          navigation={props.navigation}
          headerDetails="Country Wise Details - World"
          handler ={() => {gotoIndiaDetail()}}
          type="india"
        />
        <View style={[s.card]}>
          <View style={[s.cardBody]}>
            <View>
              <Grid>
                <Row>
                  <Col
                    style={{
                      borderColor: "black",
                      borderStyle: "solid",
                      borderWidth: 1,
                      padding: 10,
                      margin: 10,
                    }}
                  >
                    <Grid>
                      <Row style={{ padding: 0 }}>
                        <Col>
                          <Text
                            style={{
                              fontSize: 12,
                              alignSelf: "center",
                              color: "blue",
                            }}
                          >
                            Confirmed
                          </Text>
                        </Col>
                      </Row>
                      <Row style={{ padding: 0 }}>
                        <Col>
                          <Text style={{ fontSize: 16 }}>
                            {GlobalData.TotalConfirmed}
                          </Text>
                        </Col>
                        <Col>
                          <Text style={{ fontSize: 10, lineHeight: 22 }}>
                            {GlobalData.NewConfirmed}{" "}
                            <FontAwesome5
                              name="arrow-up"
                              fontSize={10}
                              color="red"
                            />
                          </Text>
                        </Col>
                      </Row>
                    </Grid>
                  </Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      borderColor: "black",
                      borderStyle: "solid",
                      borderWidth: 1,
                      padding: 10,
                      margin: 10,
                    }}
                  >
                    <Grid>
                      <Row style={{ padding: 0 }}>
                        <Col>
                          <Text
                            style={{
                              fontSize: 12,
                              alignSelf: "center",
                              color: "gray",
                            }}
                          >
                            Death
                          </Text>
                        </Col>
                      </Row>
                      <Row style={{ padding: 0 }}>
                        <Col>
                          <Text style={{ fontSize: 16 }}>
                            {GlobalData.TotalDeaths}
                          </Text>
                        </Col>
                        <Col>
                          <Text style={{ fontSize: 10, lineHeight: 22 }}>
                            {GlobalData.NewDeaths}{" "}
                            <FontAwesome5
                              name="arrow-up"
                              fontSize={10}
                              color="gray"
                            />
                          </Text>
                        </Col>
                      </Row>
                    </Grid>
                  </Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      borderColor: "black",
                      borderStyle: "solid",
                      borderWidth: 1,
                      padding: 10,
                      margin: 10,
                    }}
                  >
                    <Grid>
                      <Row style={{ padding: 0 }}>
                        <Col>
                          <Text
                            style={{
                              fontSize: 12,
                              alignSelf: "center",
                              color: "green",
                            }}
                          >
                            Recovered
                          </Text>
                        </Col>
                      </Row>
                      <Row style={{ padding: 0 }}>
                        <Col>
                          <Text style={{ fontSize: 14 }}>
                            {GlobalData.TotalRecovered}
                          </Text>
                        </Col>
                        <Col>
                          <Text style={{ fontSize: 10, lineHeight: 22 }}>
                            {GlobalData.NewRecovered}{" "}
                            <FontAwesome5
                              name="arrow-up"
                              fontSize={10}
                              color="green"
                            />
                          </Text>
                        </Col>
                      </Row>
                    </Grid>
                  </Col>
                </Row>
              </Grid>
            </View>
          </View>
        </View>
        <View>
          <Searchbar
            placeholder="Search"
            onChangeText={(text) => onChangedTextHandler(text)}
            value={SearchQuery}
          />
          <CountryDataTable countryData={CountryData} />
        </View>
      </ScrollView>
    </View>
  );
};

export default World;
