import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';

export default function TechGearsCatalog() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Header - FlexDirection Column & Centered */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>TechGears Store</Text>
          <Text style={styles.headerSubtitle}>Premium Gaming Gear</Text>
        </View>

        {/* Product Grid */}
        <View style={styles.gridContainer}>
          
          {/* Baris 1 - FlexDirection Row */}
          <View style={styles.row}>
            {/* Card 1 dengan Absolute Badge */}
            <View style={styles.card}>
              {/* Badge "OFF" Melayang (Absolute Positioning) */}
              <View style={styles.badge}>
                <Text style={styles.badgeText}>OFF</Text>
              </View>
              
              <Image 
                source={{ uri: 'https://down-id.img.susercontent.com/file/id-11134207-7ra0o-mb96k7sfbjvv8d' }} 
                style={styles.productImage} 
                resizeMode="cover" 
              />
              <Text style={styles.productName}>Ajazz Alux 60 HE</Text>
              <Text style={styles.productPrice}>Rp 1.500.000</Text>
            </View>

            {/* Card 2 - Pro Gaming Mouse */}
            <View style={styles.card}>
              <Image 
                source={{ uri: 'https://doran.id/wp-content/uploads/2023/03/Logitech-G-Pro-Wireless-Mouse-Gaming-12.jpg' }} 
                style={styles.productImage} 
                resizeMode="cover" 
              />
              <Text style={styles.productName}>Logitech G Pro Wireless Gaming Mouse</Text>
              <Text style={styles.productPrice}>Rp 850.000</Text>
            </View>
          </View>

          {/* Baris 2 - FlexDirection Row */}
          <View style={styles.row}>
            {/* Card 3 */}
            <View style={styles.card}>
              <Image 
                source={{ uri: 'https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/7/2/727A9AA-2_T1692688840.png' }} 
                style={styles.productImage} 
                resizeMode="cover" 
              />
              <Text style={styles.productName}>HyperX Cloud III</Text>
              <Text style={styles.productPrice}>Rp 1.250.000</Text>
            </View>

            {/* Card 4 */}
            <View style={styles.card}>
              <Image 
                source={{ uri: 'https://els.id/wp-content/uploads/2025/02/Gamen-Gaming-Mousepad-GP-XXL-6.png' }} 
                style={styles.productImage} 
                resizeMode="cover" 
              />
              <Text style={styles.productName}>Mousepad Gamen GP-XXL</Text>
              <Text style={styles.productPrice}>Rp 300.000</Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212', 
  },
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#888888',
    marginTop: 4,
  },
  gridContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#1E1E1E',
    width: '48%', 
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  productImage: {
    width: '100%',
    height: 120,
    backgroundColor: '#2C2C2C', 
    borderRadius: 8,
    marginBottom: 12,
  },
  productName: {
    color: '#E0E0E0',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  productPrice: {
    color: '#00E676', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  badge: {
    position: 'absolute', 
    top: -10,
    right: -10,
    backgroundColor: '#FF3D00',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    zIndex: 1, 
    elevation: 5, 
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});