import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "./style";
import { Header } from "../../components/Header";

export function Home() {
  return (
    <ScrollView>
      <Header />
      <View>
        <Image
          source={require("../../assets/natureza.jpg")}
          resizeMode="cover"
          style={styles.ImageBG}
        />

        <View style={styles.containerText}>
          <Text style={styles.subTitle}>Oque é ?</Text>
          <Text style={styles.text}>
            EcoTech é um aplicativo voltado para a educação ambiental que
            fornece informações sobre diversos ecossistemas do mundo. Ele
            apresenta conteúdos sobre a flora e fauna de cada região, bem como a
            importância dos ecossistemas para o equilíbrio do planeta.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
