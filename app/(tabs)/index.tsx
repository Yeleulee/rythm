
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Welcome</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recently Played</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {/* Placeholder for recently played items */}
            <View style={styles.card}>
              <Image source={{ uri: 'https://placehold.co/150x150' }} style={styles.cardImage} />
              <Text style={styles.cardText}>Song Title</Text>
            </View>
            <View style={styles.card}>
              <Image source={{ uri: 'https://placehold.co/150x150' }} style={styles.cardImage} />
              <Text style={styles.cardText}>Another Song</Text>
            </View>
            <View style={styles.card}>
              <Image source={{ uri: 'https://placehold.co/150x150' }} style={styles.cardImage} />
              <Text style={styles.cardText}>Playlist Name</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Playlists</Text>
          {/* Placeholder for featured playlists */}
          <View style={styles.playlistCard}>
            <Image source={{ uri: 'https://placehold.co/80x80' }} style={styles.playlistImage} />
            <View style={styles.playlistTextContainer}>
              <Text style={styles.playlistTitle}>Top Hits</Text>
              <Text style={styles.playlistSubtitle}>Updated Weekly</Text>
            </View>
          </View>
          <View style={styles.playlistCard}>
            <Image source={{ uri: 'https://placehold.co/80x80' }} style={styles.playlistImage} />
            <View style={styles.playlistTextContainer}>
              <Text style={styles.playlistTitle}>Chill Vibes</Text>
              <Text style={styles.playlistSubtitle}>For relaxing</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },
  container: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  horizontalScroll: {
    flexDirection: 'row',
  },
  card: {
    marginRight: 16,
    width: 150,
  },
  cardImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    backgroundColor: '#333',
  },
  cardText: {
    color: '#FFFFFF',
    marginTop: 8,
    textAlign: 'center',
  },
  playlistCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  playlistImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#333',
  },
  playlistTextContainer: {
    marginLeft: 16,
  },
  playlistTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  playlistSubtitle: {
    fontSize: 14,
    color: '#B3B3B3',
  },
});

export default HomeScreen;
