import { View, Text, Image, StyleSheet } from 'react-native';

export default function TabIndex() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        
        <Image
          source={require('../../assets/images/Marchel.jpeg')}
          style={styles.profileImage}
        />
        
        {/* DATA CLARITY */}
        <Text style={styles.name}>Livelihood Marchel Samuel Simangunsong</Text>
        <Text style={styles.nim}>NIM: 243303621257</Text>
        <Text style={styles.major}>Jurusan: Sistem Informasi</Text>

        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>
            "One Day or Day One"
          </Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF', 
    borderRadius: 20,           
    padding: 30,
    alignItems: 'center',
    width: '100%',
    maxWidth: 350,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, 
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, 
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#3B82F6', 
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 5,
  },
  nim: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 2,
  },
  major: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 20,
  },
  quoteContainer: {
    backgroundColor: '#DBEAFE',
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  quoteText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#1E3A8A',
    textAlign: 'center',
  },
});