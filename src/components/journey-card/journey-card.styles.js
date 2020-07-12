import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  presentText: { fontSize: 19 },
  presentEmoji: { fontSize: 21 },
  itemImage: {
    borderRadius: 4,
    minWidth: 100,
    maxWidth: 100,
    width: 100,
    height: 62,
    objectFit: 'cover',
    marginTop: 5,
    marginLeft: 10,
    '&:hover': {
      opacity: 0.9
    }
  },
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
  }
})

export default useStyles