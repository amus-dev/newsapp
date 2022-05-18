import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import { getNewsApi } from "./src/api/news";
import New from "./src/components/New";

const App = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    getNewsApi().then((response) => setNews(response.data));
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <Text style={styles.title}>Últimas noticias</Text>
      <ScrollView style={styles.scrollView}>
        <Text>Lista de noticias</Text>
        {news &&
          news.map((item) => <New key={item.id} data={item.attributes} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    paddingVertical: 10,
  },
  scrollView: {
    height: "100%",
  },
});
