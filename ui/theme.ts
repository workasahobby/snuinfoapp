import {extendTheme} from 'native-base';

export const theme = extendTheme({
  fontConfig: {
    NotoSansKR: {
      100: 'NotoSansKR-Thin',
      200: 'NotoSansKR-Light',
      300: 'NotoSansKR-Regular',
      400: 'NotoSansKR-Medium',
      500: 'NotoSansKR-Bold',
      600: 'NotoSansKR-Black',
    },
  },
  fonts: {
    heading: 'NotoSansKR',
    body: 'NotoSansKR',
    mono: 'NotoSansKR',
  },

  colors: {
    brown: {
      100: '#E9E7CE', //Favorite Place Background
      200: '#DDD9A5', //Favorite Place Outline
      300: '#A17C2F', //Favorite Place Name
      400: '#8B7A55', //Favorite Menu Price
      500: '#59584E', //Favorite Menu Name
    },
    gray: {
      100: '#F8F8F8', //Normal Place Background
      200: '#EBEBEB', //Closed Favorite Place Background
      300: '#DCDCDC', //Closed Favorite Place, Normal Place Outline
      400: '#ABABAB', //Closed Normal Place Name
      500: '#929292', //Sub Info
      600: '#888888', //Favorite Place Time
      700: '#636363', //Normal Place Name
      800: '#505050', //Sub Content
    },
    blue: '#0C146B', //Page Title
  },

  components: {
    Text: {
      baseStyle: {
        fontFamily: 'body',
      },
      variants: {
        pageTitle: {
          color: 'blue',
          fontSize: '50px',
          fontWeight: '500',
        },
        favoritePlaceNameBig: {
          // For Meal, Bus
          color: 'brown.300',
          fontSize: '25px',
          fontWeight: '500',
        },
        favoritePlaceNameSmall: {
          // For Cafe, Mart
          color: 'brown.300',
          fontSize: '20px',
          fontWeight: '500',
        },
        favoritePlaceTime: {
          color: 'gray.600',
          fontSize: '15px',
          fontWeight: '400',
        },
        favoriteMenuName: {
          color: 'brown.500',
          fontSize: '15px',
          fontWeight: '400',
        },
        favoriteMenuPrice: {
          color: 'brown.400',
          fontSize: '15px',
          fontWeight: '400',
        },
        normalOpenPlaceBig: {
          // For Bus, Etc
          color: 'gray.700',
          fontSize: '25px',
          fontWeight: '400',
        },
        normalOpenPlaceSmall: {
          // For Else
          color: 'gray.700',
          fontSize: '20px',
          fontWeight: '400',
        },
        normalClosedPlaceBig: {
          // For Bus
          color: 'gray.400',
          fontSize: '25px',
          fontWeight: '400',
        },
        normalClosedPlaceSmall: {
          // For Else
          color: 'gray.400',
          fontSize: '20px',
          fontWeight: '400',
        },
        modalTitle: {
          color: 'blue',
          fontSize: '25px',
          fontWeight: '500',
        },
        modalSubInfo: {
          color: 'gray.500',
          fontSize: '15px',
          fontWeight: '400',
        },
      },
    },
    Button: {
      variants: {
        favoriteOpenPlace: {
          bg: 'brown.100',
          borderColor: 'brown.200',
          borderWidth: '1px',
          rounded: '10px',
        },
        favoriteClosedPlace: {
          bg: 'gray.200',
          borderColor: 'gray.300',
          borderWidth: '1px',
          rounded: '10px',
        },
        place: {
          bg: 'gray.100',
          borderColor: 'gray.300',
          borderWidth: '1px',
          rounded: '10px',
        },
      },
    },
  },
});