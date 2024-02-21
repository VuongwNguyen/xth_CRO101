import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const URLImage = `../../assets/images/`
const SearchProduct = () => {
  const [dataPopularProducts, setDataPopularProducts] =
    useState(popularProducts);

  // định dạng đơn vị tiền tệ

  const options = {
    style: `currency`,
    currency: `VND`,
    minimumFractionDigits: 0,
    useGrouping: true,
  };

  const renderItem = ({item}) => {
    const {id, name, price, image} = item;
    const formattedPrice = Intl.NumberFormat(`vi-VN`, options).format(price);
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={image} resizeMode="cover" />
        <View style={styles.infContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{formattedPrice}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <View style={styles.searchTitle}>
          <Image source={require(`${URLImage}back.png`)} />
          <Text style={styles.search}>Search</Text>
        </View>
        <View style={styles.menuButton}>
          <Image source={require(`${URLImage}iconMore.png`)} />
          <Image source={require(`${URLImage}divider.png`)} />
          <Image source={require(`${URLImage}close_icon.png`)} />
        </View>
      </View>
      <View style={styles.addressContainer}>
        <Image source={require(`${URLImage}storeIcon.png`)} />
        <Text style={styles.address}>
          SB Han Thuyen, 113 Han Thuyen, D.1, H...
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="What are you craving for?"
          placeholderTextColor={`#808089`}
          style={styles.input}
        />
        <Image
          source={require(`${URLImage}search.png`)}
          style={styles.searchIcon}
          resizeMode="cover"
        />
      </View>
      <View style={styles.popularContainer}>
        <Text style={styles.popularTitle}>Popular drinks and food</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.flatlist}
        data={dataPopularProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SearchProduct;

const styles = StyleSheet.create({
  flatlist: {
    marginTop: 12,
  },
  price: {
    fontFamily: `Inter-Bold`,
    fontSize: 14,
    lineHeight: 21,
    color: `#27272A`,
  },
  name: {
    fontFamily: `Inter-Regular`,
    fontSize: 14,
    lineHeight: 21,
    color: `#27272A`,
  },
  infContainer: {
    gap: 4,
  },
  image: {
    width: 68,
    height: 68,
  },
  itemContainer: {
    flexDirection: `row`,
    gap: 16,
    marginBottom: 16,
  },
  popularTitle: {
    fontFamily: `Inter-Bold`,
    fontSize: 16,
    lineHeight: 24,
    color: `#27272A`,
  },
  popularContainer: {
    marginTop: 32,
  },
  searchIcon: {
    width: 20,
    height: 20,
    position: `absolute`,
    top: 10,
    left: 16,
  },
  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: `#808089`,
    width: `100%`,
    height: `100%`,
    paddingVertical: 8,
    paddingLeft: 48,
    fontFamily: `Inter-Regular`,
    fontSize: 14,
    lineHeight: 21,
  },
  searchContainer: {
    marginTop: 16,
    width: `100%`,
    height: 40,
  },
  address: {
    fontFamily: `Inter-Regular`,
    fontSize: 14,
    lineHeight: 21,
    color: `#27272A`,
  },
  addressContainer: {
    marginTop: 15,
    flexDirection: `row`,
    gap: 8,
    alignItems: `center`,
  },
  menuButton: {
    width: 64,
    height: 24,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    gap: 8,
    backgroundColor: `#0000000D`,
    borderRadius: 20,
  },
  search: {
    fontFamily: `Inter-Bold`,
    fontSize: 18,
    lineHeight: 27,
    color: `#27272A`,
  },
  searchTitle: {
    flexDirection: `row`,
    gap: 8,
    alignItems: `center`,
  },
  searchBar: {
    flexDirection: `row`,
    justifyContent: `space-between`,
  },
  container: {
    // flex: 1,
    width: `100%`,
    height: `100%`,
    padding: 16,
    // backgroundColor: `#F5F5FA`,
  },
});

var popularProducts = [
  {
    id: `pp1`,
    name: `Pure black`,
    price: 59000,
    image: require(`${URLImage}c1.png`),
  },
  {
    id: `pp2`,
    name: `Lattte`,
    price: 59000,
    image: require(`${URLImage}c2.png`),
  },
  {
    id: `pp3`,
    name: `Campuccino`,
    price: 69000,
    image: require(`${URLImage}c3.png`),
  },
  {
    id: `pp4`,
    name: `Arabica 1kg`,
    price: 69000,
    image: require(`${URLImage}c4.png`),
  },
  {
    id: `pp5`,
    name: `Smoky burger`,
    price: 96000,
    image: require(`${URLImage}c5.png`),
  },
];
