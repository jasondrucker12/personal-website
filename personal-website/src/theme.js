export default {
  colors: {
    text: 'black',
    background: 'black',
    cardBackground: '#f2f3f7',
    primary: '#bd4444',
    secondary: 'white',//'#f2f0e9'
    cardbg: '#D6D5D3'
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, 0.3)',
    insetcard: '0 0 4px rgba(0, 0, 0, 0.4) inset'
  },
  fonts: {
    body: 'helvetica',
    heading: 'helvetica'
  },
  variants: {
    descriptioncard: {
      bg: 'secondary',
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
    },
    contactinfo: {
      display: 'inline-block',
      p: 1,
      mx: 1
    }
  },
  text: {
    itemdetails: {

    },
    pageHeader: {
      p: 3,
      textAlign: 'left',
      fontSize: [ 5, 6, 7 ],
      color: 'white'
    },
    description: {
      p: 3,
      fontSize: [1,2,3]
    }
  }
}
