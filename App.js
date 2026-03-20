import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, ImageBackground, TextInput, 
  TouchableOpacity, ScrollView, Image, Alert, BlurView 
} from 'react-native';

export default function App() {
  // ڈیفالٹ بیک گراؤنڈ (گلیکسی اول)
  const [bgImage, setBgImage] = useState('https://images.unsplash.com/photo-1464802686167-b939a6910659');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      Alert.alert("Input Needed", "Please enter a country or city name.");
      return;
    }
    // اصلی ایپ میں یہاں Unsplash API کا استعمال ہوگا
    const newBg = `https://source.unsplash.com/featured/?${searchQuery}`;
    setBgImage(newBg);
    Alert.alert("Success", `Background updated to ${searchQuery}`);
  };

  return (
    <ImageBackground source={{ uri: bgImage }} style={styles.container}>
      <View style={styles.overlay}>
        
        {/* Header */}
        <Text style={styles.header}>HUSSAIN DIGITAL STUDIO</Text>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Dynamic Background Section */}
          <View style={styles.inputCard}>
            <TextInput 
              style={styles.input}
              placeholder="ENTER COUNTRY/STATE"
              placeholderTextColor="#ccc"
              onChangeText={(text) => setSearchQuery(text)}
            />
            <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
              <Text style={styles.btnText}>SEARCH & APPLY</Text>
            </TouchableOpacity>
          </View>

          {/* Glassmorphic Cards */}
          <View style={styles.glassCard}>
            <Text style={styles.cardTitle}>🎬 AI VIDEO GENERATOR</Text>
            <TouchableOpacity style={styles.downloadBtn} onPress={() => Alert.alert("HDS", "Preparing Video Tool...")}>
              <Text style={styles.btnText}>DOWNLOAD</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.glassCard}>
            <Text style={styles.cardTitle}>🎮 GAME HUB</Text>
            <TouchableOpacity style={styles.downloadBtn} onPress={() => Alert.alert("HDS", "Fetching Games...")}>
              <Text style={styles.btnText}>DOWNLOAD</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.glassCard}>
            <Text style={styles.cardTitle}>💬 STUDIO SUPPORT</Text>
            <TouchableOpacity style={styles.downloadBtn} onPress={() => Alert.alert("HDS", "Connecting to 03461785207...")}>
              <Text style={styles.btnText}>WHATSAPP</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Footer Profile */}
        <View style={styles.footer}>
           <Image 
             source={{ uri: 'https://via.placeholder.com/50' }} 
             style={styles.avatar} 
           />
           <View>
             <Text style={styles.welcomeText}>Welcome, Hussain</Text>
             <Text style={styles.hashtags}>#HussainDigitalStudio #OwlDigital</Text>
           </View>
        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, resizeMode: 'cover' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', paddingTop: 50 },
  header: {
    fontSize: 24, fontWeight: 'bold', color: '#00f2ff', textAlign: 'center',
    textShadowColor: '#00f2ff', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 10,
    marginBottom: 20
  },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 100 },
  inputCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: 15, padding: 15, marginBottom: 20,
    borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.2)'
  },
  input: {
    height: 50, borderColor: '#00f2ff', borderWidth: 1, borderRadius: 10,
    paddingHorizontal: 15, color: '#fff', marginBottom: 10
  },
  searchBtn: { backgroundColor: '#00f2ff', padding: 12, borderRadius: 10, alignItems: 'center' },
  glassCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: 20, padding: 25, marginBottom: 15,
    borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.3)', alignItems: 'center'
  },
  cardTitle: { color: '#fff', fontSize: 18, fontWeight: '600', marginBottom: 15 },
  downloadBtn: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#00f2ff', paddingVertical: 8, paddingHorizontal: 20, borderRadius: 20 },
  btnText: { color: '#fff', fontWeight: 'bold' },
  footer: {
    position: 'absolute', bottom: 0, width: '100%', flexDirection: 'row',
    padding: 20, backgroundColor: 'rgba(0,0,0,0.6)', alignItems: 'center'
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 15, borderWidth: 2, borderColor: '#00f2ff' },
  welcomeText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  hashtags: { color: '#00f2ff', fontSize: 12 }
});
    
