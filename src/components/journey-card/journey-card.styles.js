import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  presentText: { fontSize: 19 },
  presentEmoji: { fontSize: 21 },
  currentProjects: {
    display: 'flex',
    marginRight: 30,
    paddingTop: 5,
    paddingLeft: 27,
    flex: 1,
    paddingBottom: 5,
    borderBottom: '1px solid #f4f4f4',
    justifyContent: 'space-between',
    '@media (max-width: 736px)': {
      marginRight: 0
    }
  },
  productsTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    paddingLeft: 27,
  },
  flexSecondItem: {
    display: 'flex',
    flex: 1,
    marginBottom: 20,
    justifyContent: 'space-between'
  },
  itemImage: {
    borderRadius: 4,
    minWidth: 75,
    maxWidth: 75,
    width: 75,
    height: 75,
    objectFit: 'cover',
    marginTop: -10,
    marginLeft: 15,
    '&:hover': {
      opacity: 0.9
    }
  },
  item: {
    marginTop: -40,
    [`@media screen and (max-width: 960px)`]: {
      marginTop: -20,
    },
    [`@media screen and (max-width: 600px)`]: {
      marginTop: 0,
    },
  }
})

export default useStyles