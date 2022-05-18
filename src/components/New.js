import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";

import urlParse from "url-parse";
import moment from "moment";
import es from "moment/locale/es";

const New = ({ data }) => {
  const { title, url, createdAt } = data;

  const openUrl = () => WebBrowser.openBrowserAsync(url);

  return (
    <TouchableOpacity onPress={openUrl}>
      <View style={styles.new}>
        <Text style={styles.url}>{urlParse(url).host}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>
          {moment(createdAt).local(es).startOf().fromNow()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default New;

const styles = StyleSheet.create({
  new: {
    padding: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  url: {
    paddingBottom: 5,
    color: "grey",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  time: {
    paddingTop: 10,
    color: "grey",
  },
});
