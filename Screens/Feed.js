import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  Platform,
  StatusBar,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import PostCard from "../Screens/PostCard";

const posts = require("../temp_posts.json");

export default class Feed extends Component {

  constructor(props) {
    super(props);
  }

  renderItem = ({ item: post }) => {
    return <PostCard post={post} navigation={this.props.navigation} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.iconImage}
            ></Image>
          </View>
          <View style={styles.appTitleTextContaienr}>
            <Text style={styles.appTitleText}>Spectogram</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={posts}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

// keyExtractor = (item, index) => index.toString();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.15,
    flexDirection: "row",
  },
  appIcon: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    width: 15,
    height: 75,
  },
  iconImage: {
    width: 60,
    height: 60,
  },
  appTitleTextContaienr: {
    flex: 0.8,
    justifyContent: "center",
    marginBottom: 30,
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(20),
  },
  cardContainer: {
    flex: 0.85,
  },
});
