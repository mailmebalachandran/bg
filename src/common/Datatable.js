import React, { useState } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { Grid, Col, Row } from "react-native-easy-grid";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import BootstrapStyleSheet from "react-native-bootstrap-styles";
import { List } from 'react-native-paper';

const Datatable = (props) => {
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
  if (props.stateData.length > 0) {
    if (props.sortType === "date") {
      const stateDatas = props.stateData.sort(function (a, b) {
        return (
          new Date(
            b.lastupdatedtime.split(" ")[0].split("/")[2],
            b.lastupdatedtime.split(" ")[0].split("/")[1],
            b.lastupdatedtime.split(" ")[0].split("/")[0],
            parseInt(b.lastupdatedtime.split(" ")[1].split(":")[0]),
            parseInt(b.lastupdatedtime.split(" ")[1].split(":")[1]),
            parseInt(b.lastupdatedtime.split(" ")[1].split(":")[2]),
            0
          ) -
          new Date(
            a.lastupdatedtime.split(" ")[0].split("/")[2],
            a.lastupdatedtime.split(" ")[0].split("/")[1],
            a.lastupdatedtime.split(" ")[0].split("/")[0],
            parseInt(a.lastupdatedtime.split(" ")[1].split(":")[0]),
            parseInt(a.lastupdatedtime.split(" ")[1].split(":")[1]),
            parseInt(a.lastupdatedtime.split(" ")[1].split(":")[2]),
            0
          )
        );
      });
      stateDatas
        .map((data) => {
          if (data.statecode !== "TT") {
            dataValues.push(
              <List.Accordion title={data.state} id={data.statecode}>
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
                                  {data.confirmed}
                                </Text>
                              </Col>
                              <Col>
                                <Text style={{ fontSize: 10, lineHeight: 22 }}>
                                  {data.deltaconfirmed}{" "}
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
                                    color: "red",
                                  }}
                                >
                                  Active
                                </Text>
                              </Col>
                            </Row>
                            <Row style={{ padding: 0 }}>
                              <Col>
                                <Text
                                  style={{ fontSize: 16, alignSelf: "center" }}
                                >
                                  {data.active}
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
                                  {data.deaths}
                                </Text>
                              </Col>
                              <Col>
                                <Text style={{ fontSize: 10, lineHeight: 22 }}>
                                  {data.deltadeaths}{" "}
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
                                <Text style={{ fontSize: 16 }}>
                                  {data.recovered}
                                </Text>
                              </Col>
                              <Col>
                                <Text style={{ fontSize: 10, lineHeight: 22 }}>
                                  {data.deltarecovered}{" "}
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
                      <Row>
                        <Col>
                          <TouchableWithoutFeedback
                            onPress={() => props.moreInfoHandler(data)}
                          >
                            <View style={{padding:10,paddingLeft:0,margin:10}}>
                                <Text>
                                  Details{"    "}
                                  <FontAwesome5
                                    name="arrow-right"
                                    fontSize={15}
                                  />
                                </Text>
                              </View>
                          </TouchableWithoutFeedback>
                        </Col>
                      </Row>
                    </Grid>
                  </View>
                </View>
              </View>
              </List.Accordion>
            );
          }
        })
        .reverse();
    } else if (props.sortType === "count") {
      props.stateData.map((data) => {
        if (data.statecode !== "TT") {
          dataValues.push(
              <List.Accordion title={data.state} id={data.statecode}>
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
                                  {data.confirmed}
                                </Text>
                              </Col>
                              <Col>
                                <Text style={{ fontSize: 10, lineHeight: 22 }}>
                                  {data.deltaconfirmed}{" "}
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
                                    color: "red",
                                  }}
                                >
                                  Active
                                </Text>
                              </Col>
                            </Row>
                            <Row style={{ padding: 0 }}>
                              <Col>
                                <Text
                                  style={{ fontSize: 16, alignSelf: "center" }}
                                >
                                  {data.active}
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
                                  {data.deaths}
                                </Text>
                              </Col>
                              <Col>
                                <Text style={{ fontSize: 10, lineHeight: 22 }}>
                                  {data.deltadeaths}{" "}
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
                                <Text style={{ fontSize: 16 }}>
                                  {data.recovered}
                                </Text>
                              </Col>
                              <Col>
                                <Text style={{ fontSize: 10, lineHeight: 22 }}>
                                  {data.deltarecovered}{" "}
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
                      <Row>
                        <Col>
                          <TouchableWithoutFeedback
                            onPress={() => props.moreInfoHandler(data)}
                          >
                            <View style={{padding:10,paddingLeft:0,margin:10}}>
                                <Text>
                                  Details{"    "}
                                  <FontAwesome5
                                    name="arrow-right"
                                    fontSize={15}
                                  />
                                </Text>
                              </View>
                          </TouchableWithoutFeedback>
                        </Col>
                      </Row>
                    </Grid>
                  </View>
                </View>
              </View>
              </List.Accordion>
          );
        }
      });
    }
  }
  return <List.AccordionGroup style={{ margin: 15 }}>{dataValues}</List.AccordionGroup>;
};

export default Datatable;
