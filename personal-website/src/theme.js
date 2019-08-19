export default {
  colors: {
    text: 'black',
    background: 'black',
    cardBackground: '#f2f3f7',
    primary: 'tomato',
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, 0.2)',
  },
  fonts: {
    body: 'helvetica',
    heading: 'helvetica'
  },
  variants: {

    resumecard: {
      my: 3,
      //bg: 'cardBackground',
      bg: 'white',
      borderRadius: 6,
      borderColor: 'black',
      boxShadow: 'card',
      p: 3
    },
    resumecontainer: {
      mx: 7,
      my: 4
    }
  },
  text: {
    itemdetails: {

    },
    pageHeader: {
      p: 3,
      textAlign: 'left',
      fontSize: [ 5, 6, 7 ],
      bg: 'black',
      color: 'white'
    },
    description: {
      p: 3,
      fontSize: [2,3,4]
    }
  }
}
