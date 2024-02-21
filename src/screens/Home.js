import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import SearchProduct from './SearchProduct';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const URLImage = `../../assets/images`;
const Tab = createBottomTabNavigator();

const Homes = () => {
  return (
    <View>
      <Text>Homes</Text>
    </View>
  );
};
const Stores = () => {
  return (
    <View>
      <Text>Stores</Text>
    </View>
  );
};
const Order = () => {
  return (
    <View>
      <Text>Order</Text>
    </View>
  );
};
const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

const tabScreenOptions = ({route}) => {
  return {
    headerShown: false,
    tabBarIcon: ({focused}) => {
      if (route.name == `Home`) {
        if (focused) {
          return <Image source={require(`${URLImage}/home_selected.png`)} />;
        }
        return <Image source={require(`${URLImage}/home.png`)} />;
      } else if (route.name == `Stores`) {
        if (focused) {
          return (
            <Image source={require(`${URLImage}/stores_selected.png`)} />
          );
        }
        return <Image source={require(`${URLImage}/stores.png`)} />;
      } else if (route.name == `Order`) {
        if (focused) {
          return <Image source={require(`${URLImage}/order_selected.png`)} />;
        }
        return <Image source={require(`${URLImage}/order.png`)} />;
      } else if (route.name == `Profile`) {
        if (focused) {
          return (
            <Image source={require(`${URLImage}/profile_selected.png`)} />
          );
        }
        return <Image source={require(`${URLImage}/profile.png`)} />;
      }
    },
    tabBarLabel: ({focused}) => {
      if (route.name == `Home`) {
        if (focused) {
          return <Text style={{color: `red`}}>Home</Text>;
        }
        return <Text style={{color: `blue`}}>Home</Text>;
      } else if (route.name == `Stores`) {
        if (focused) {
          return <Text style={{color: `red`}}>Stores</Text>;
        }
        return <Text style={{color: `blue`}}>Stores</Text>;
      } else if (route.name == `Order`) {
        if (focused) {
          return <Text style={{color: `red`}}>Order</Text>;
        }
        return <Text style={{color: `blue`}}>Order</Text>;
      } else if (route.name == `Profile`) {
        if (focused) {
          return <Text style={{color: `red`}}>Profile</Text>;
        }
        return <Text style={{color: `blue`}}>Profile</Text>;
      }
    },
  };
};

const Home = () => {
  const [dataPromotion, setDataPromotion] = useState(promotion);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerInf}>
          <Image
            source={require(`${URLImage}/avt.jpg`)}
            style={styles.avtImage}
            resizeMode="cover"
          />
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcome}>Welcome to</Text>
            <Text style={styles.nameRestaurant}>Sample restaurant</Text>
          </View>
        </View>
        <View style={styles.menuButton}>
          <Image source={require(`${URLImage}/iconMore.png`)} />
          <Image source={require(`${URLImage}/divider.png`)} />
          <Image source={require(`${URLImage}/close_icon.png`)} />
        </View>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.scrollViewContainer}>
        <View style={styles.cardContainer}>
          <Image
            source={require(`${URLImage}/bg.png`)}
            resizeMode="cover"
            style={styles.card}
          />
          <Text style={styles.hello}>Hello</Text>
          <Text style={styles.userName}>Username</Text>
          <Text style={styles.dayJoin}>Join date: 20/04/2020</Text>
          <Text style={styles.points}>420 Points</Text>
        </View>
        <View style={styles.sloganContainer}>
          <View style={styles.factorContainer}>
            <Image source={require(`${URLImage}/store.png`)} />
            <Text style={styles.factorName}>Store Pickup</Text>
            <Text style={styles.factorDes}>Best quality</Text>
          </View>
          <View style={styles.dividerBar}></View>
          <View style={styles.factorContainer}>
            <Image source={require(`${URLImage}/delivery.png`)} />
            <Text style={styles.factorName}>Delivery</Text>
            <Text style={styles.factorDes}>Always on time</Text>
          </View>
        </View>
        <View style={styles.reservationContainer}>
          <View style={styles.reservationDes}>
            <View style={styles.reservationInf}>
              <Text style={styles.reservationType}>Only Reservation</Text>
              <Text style={styles.booking}>Table booking</Text>
            </View>
            <Image
              source={require(`${URLImage}/reservation.png`)}
              style={styles.reservationImg}
              resizeMode="cover"
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Image source={require(`${URLImage}/calendar.png`)} />
              <Text style={styles.buttonLabel}>Reserve a table</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonLabel}>My reservations</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.promotionContainer}>
          <Text style={styles.promotionHeading}>Promotion Campaign</Text>
        </View>

        <View style={styles.promotionList}>
          {dataPromotion.map((item, index) => {
            return (
              <View key={index} style={styles.itemContainer}>
                <Image
                  style={styles.imgPhoto}
                  source={item.photo}
                  resizeMode="cover"
                />
                <View style={styles.infContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.time}>
                    {item.startDay} - {item.endDay}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      {/* <NavigationContainer>
        <Tab.Navigator screenOptions={tabScreenOptions}>
          <Tab.Screen name="Home" component={Homes} />
          <Tab.Screen name="Stores" component={Stores} />
          <Tab.Screen name="Order" component={Order} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  // bottomTabContainer: {
  //   width: `100%`,
  //   height: 100,
  // },
  scrollViewContainer: {
    flex: 1,
  },
  promotionList: {
    flexDirection: `row`,
    flexWrap: `wrap`,
    justifyContent: `center`,
  },
  flatlist: {
    justifyContent: `center`,
    alignItems: `center`,
  },
  time: {
    fontFamily: `Inter-Regular`,
    fontSize: 10,
    lineHeight: 15,
    color: `#808089`,
  },
  name: {
    fontFamily: `Inter-Medium`,
    fontSize: 14,
    lineHeight: 21,
    color: `#27272A`,
  },
  imgPhoto: {
    width: 140,
    height: 140,
    borderRadius: 8,
  },
  itemContainer: {
    gap: 8,
    width: 140,
    height: 205,
    marginRight: 25,
    marginTop: 16,
  },
  promotionHeading: {
    fontSize: 16,
    fontFamily: `Inter-Bold`,
    lineHeight: 24,
    color: `#27272A`,
  },
  promotionContainer: {
    marginTop: 16,
  },
  buttonLabel: {
    fontFamily: `Inter-Regular`,
    fontSize: 14,
    lineHeight: 21,
    color: `#1A94FF`,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 5.5,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: `#1A94FF`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
    gap: 8,
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: `row`,
    gap: 8,
    justifyContent: `center`,
  },
  reservationImg: {
    width: 108,
    height: 72,
  },
  booking: {
    fontFamily: `Inter-Regular`,
    fontSize: 12,
    lineHeight: 18,
    color: `#808089`,
  },
  reservationType: {
    fontFamily: `Inter-Medium`,
    fontSize: 16,
    // fontWeight: `500`,
    lineHeight: 24,
    color: `#27272A`,
  },
  reservationInf: {
    width: 180,
  },
  reservationDes: {
    flexDirection: `row`,
    gap: 8,
    alignItems: `center`,
  },
  reservationContainer: {
    marginTop: 12,
    width: `100%`,
    height: 144,
    borderRadius: 8,
    padding: 16,
    backgroundColor: `#fff`,
  },
  dividerBar: {
    height: 48,
    width: 1,
    backgroundColor: `#EBEBF0`,
  },
  factorDes: {
    fontSize: 12,
    lineHeight: 18,
    color: `#808089`,
  },
  factorName: {
    fontFamily: `Inter-Medium`,
    marginTop: 8,
    fontSize: 16,
    lineHeight: 24,
    // fontWeight: `500`,
    color: `#27272A`,
  },
  factorContainer: {
    width: 132,
    height: `100%`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  sloganContainer: {
    marginTop: 16,
    width: `100%`,
    height: 144,
    backgroundColor: `#fff`,
    flexDirection: `row`,
    justifyContent: `space-evenly`,
    alignItems: `center`,
    borderRadius: 8,
  },
  points: {
    fontFamily: `Inter-Bold`,
    position: `absolute`,
    bottom: 16,
    right: 24,
    color: `#fff`,
    fontSize: 20,
    // fontWeight: `700`,
    lineHeight: 30,
  },
  dayJoin: {
    fontFamily: `Inter-Regular`,
    position: `absolute`,
    bottom: 20,
    left: 24,
    color: `#fff`,
    fontSize: 12,
    lineHeight: 18,
  },
  userName: {
    fontFamily: `Inter-Regular`,
    position: `absolute`,
    top: 45,
    left: 24,
    color: `#fff`,
    fontSize: 18,
    lineHeight: 27,
  },
  hello: {
    fontFamily: `Inter-Regular`,
    position: `absolute`,
    top: 24,
    left: 24,
    color: `#fff`,
    fontSize: 14,
    lineHeight: 21,
  },
  card: {
    width: `100%`,
    height: `100%`,
    borderRadius: 8,
  },
  cardContainer: {
    width: `100%`,
    height: 164,
    marginTop: 24,
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
  nameRestaurant: {
    fontFamily: `Inter-Bold`,
    fontSize: 14,
    lineHeight: 21,
    color: `#000`,
  },
  welcome: {
    fontFamily: `Inter-Regular`,
    color: `#000`,
    fontSize: 12,
    lineHeight: 18,
  },
  welcomeContainer: {
    flexDirection: `column`,
    marginLeft: 12,
  },
  avtImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerInf: {
    flexDirection: `row`,
    gap: 12,
  },
  headerContainer: {
    flexDirection: `row`,
    justifyContent: `space-between`,
  },
  container: {
    // flex: 1,
    width: `100%`,
    height: `100%`,
    padding: 16,
    backgroundColor: `#F5F5FA`,
  },
});

var promotion = [
  {
    id: `pr01`,
    name: ` Discount all Excelsa 20% in all stores`,
    startDay: `20/04/20`,
    endDay: `06/09/2020`,
    photo: require(`${URLImage}/sp1.png`),
  },
  {
    id: `pr02`,
    name: ` Discount all Liberica 20% in all stores`,
    startDay: `20/04/20`,
    endDay: `06/09/2020`,
    photo: require(`${URLImage}/sp2.png`),
  },
  {
    id: `pr03`,
    name: ` Discount all Excelsa 20% in all stores`,
    startDay: `20/04/20`,
    endDay: `06/09/2020`,
    photo: require(`${URLImage}/sp3.png`),
  },
  {
    id: `pr04`,
    name: ` Discount all Excelsa 20% in all stores`,
    startDay: `20/04/20`,
    endDay: `06/09/2020`,
    photo: require(`${URLImage}/sp4.png`),
  },
];
