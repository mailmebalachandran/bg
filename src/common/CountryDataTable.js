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
import { ActivityIndicator, Colors } from "react-native-paper";
import { List } from "react-native-paper";
import BootstrapStyleSheet from "react-native-bootstrap-styles";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const CountryDataTable = (props) => {
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

  let dataValues = [];
  props.countryData.map((data) => {
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

  return <List.AccordionGroup>{dataValues}</List.AccordionGroup>;
};

export default CountryDataTable;
