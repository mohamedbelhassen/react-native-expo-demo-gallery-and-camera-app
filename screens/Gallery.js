import React, {useState, useEffect} from 'react';
import {Text, Image, FlatList, StyleSheet} from 'react-native';

import Parse from 'parse/react-native.js';
const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      let query = new Parse.Query('Gallery');
      const results = await query.find();
      setImages(results);
    };

    fetchImages();
  }, []);

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.listContent}
      data={images}
      horizontal={false}
      numColumns={3}
      ListEmptyComponent={() => <Text>You don't have images uploaded.</Text>}
      renderItem={({item}) => (
        <Image
          source={{uri: item.get('picture').url()}}
          style={styles.imageItem}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageItem: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginHorizontal: 5,
    marginVertical: 5,
  },
});
export default Gallery;
