export default {
  colors: {
    text: 'black',
    background: 'black',
    cardBackground: '#f2f3f7',
    primary: 'tomato',
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, 0.3)',
  },
  fonts: {
    body: 'helvetica',
    heading: 'helvetica'
  },
  variants: {
    descriptioncard: {
      bg: 'white',
      borderRadius: 6,
      boxShadow: 'card',
      m:5,
    //  maxHeight: 600
    },
    resumecard: {
      my: 3,
      bg: 'white',
      borderRadius: 6,
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
      fontSize: [1,2,3]
    }
  }
}
