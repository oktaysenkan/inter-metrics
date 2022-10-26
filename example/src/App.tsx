import * as React from 'react';

import { StyleSheet, Text, ScrollView, SafeAreaView, View } from 'react-native';
import { textStyle } from 'inter-metrics';

const starting = 8;

export default function App() {
  console.log(textStyle(16));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {new Array(17).fill(0).map((_, index) => (
          <View key={index}>
            <Text style={[textStyle(starting + index), styles.fontSize]}>
              {starting + index}px
            </Text>

            <Text style={[textStyle(starting + index), styles.text]}>
              Such a riot of sea and wind strews the whole extent of beach with
              whatever has been lost or thrown overboard, or torn out of sunken
              ships. Many a man has made a good week’s work in a single day by
              what he has found while walking along the Beach when the surf was
              down.
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  text: {
    fontFamily: 'Inter-Regular',
    marginBottom: 50,
  },
  fontSize: {
    fontFamily: 'Inter-SemiBold',
  },
  fontSizeWrapper: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    backgroundColor: 'black',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
});
