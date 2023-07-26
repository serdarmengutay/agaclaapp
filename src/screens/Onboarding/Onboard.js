import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useState, useRef } from "react";

const { width, height } = Dimensions.get("window");

const slider = [
  {
    id: 1,
    title: "Ağaçla",
    desc: "Geleceği yeşillendirmeye hazır mısın? Haydi başlayalım!",
    image: require("../../assets/onboardImg/onboardImageOne.png"),
  },
  {
    id: 2,
    title: "Fidanını dik",
    desc: "Seçili bölgelerden birini seç ve fidanını dik",
    image: require("../../assets/onboardImg/onboardImageTwo.png"),
  },
  {
    id: 3,
    title: "Bağlan",
    desc: "Sosyal medyasını ekleyen kişiler ile bağlantı kur",
    image: require("../../assets/onboardImg/onboardImageThree.png"),
  },
];

const Onboard = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const ref = useRef(null);

  const updateCurrentIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setSelectedIndex(currentIndex);
  };

  const goNextButton = () => {
    const nextSlideIndex = selectedIndex + 1;
    if (nextSlideIndex != slider.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setSelectedIndex(nextSlideIndex);
    }
    const lastSlidesIndex = slider.length - 1;
    if (selectedIndex === lastSlidesIndex) {
      navigation.navigate("AuthStackPages");
    }
  };

  const Skip = () => {
    const lastSlidesIndex = slider.length - 1;
    const offset = lastSlidesIndex * width;
    ref?.current.scrollToOffset({ offset });
    setSelectedIndex(lastSlidesIndex);
  };

  const renderSlider = ({ item }) => {
    return (
      <View style={styles.slideCont}>
        <View style={styles.cont}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={Skip}>
          <Text style={styles.skip}>ATLA</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.innerBody}>
          <FlatList
            ref={ref}
            pagingEnabled
            overScrollMode="never"
            onMomentumScrollEnd={updateCurrentIndex}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={slider}
            renderItem={renderSlider}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {slider.map((_, index) => (
              <View
                key={index}
                style={[
                  selectedIndex === index
                    ? styles.activeIndicator
                    : styles.indicator,
                ]}
              />
            ))}
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={goNextButton}
            activeOpacity={0.8}
            style={styles.nextBtn}
          >
            <Text style={styles.btnText}>İlerle</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 0.15,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  skip: {
    color: "#898989",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
  },
  body: {
    flex: 1,
  },
  innerBody: {
    flex: 0.8,
  },
  slideCont: {
    flex: 1,
    width,
    alignItems: "center",
  },
  cont: {
    alignItems: "center",
    flex: 1,
  },
  title: {
    color: "#34670c",
    fontSize: 48,
    fontFamily: "Montserrat-SemiBold",
  },
  desc: {
    color: "#898989",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    paddingHorizontal: 50,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 25,
  },
  image: {
    width,
    height: 410,
  },
  activeIndicator: {
    borderRadius: 13,
    width: 110,
    height: 13,
    backgroundColor: "#8FBD4F",
  },
  indicator: {
    borderRadius: 13,
    width: 13,
    height: 13,
    backgroundColor: "#8FBD4F",
    marginHorizontal: 7,
  },
  footer: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  nextBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#34670c",
    height: 40,
    width: 115,
    borderRadius: 20,
  },
  btnText: {
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    color: "#fff",
  },
});
