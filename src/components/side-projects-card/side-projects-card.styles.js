import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  flexContainer: {
    display: 'flex',
    marginTop: 10,
    justifyContent: 'space-evenly',
    '@media (max-width: 736px)': {
      display: 'block'
    }
  },
  flexFirstItem: {
    display: 'flex',
    marginRight: 30,
    marginBottom: 20,
    flex: 1,
    justifyContent: 'space-between',
    '@media (max-width: 736px)': {
      marginRight: 0
    }
  },
  flexSecondItem: {
    display: 'flex',
    flex: 1,
    marginBottom: 20,
    justifyContent: 'space-between'
  },
  imagePlaceholder: {
    borderRadius: 4,
    minWidth: 100,
    width: 100,
    height: 62,
    backgroundColor: '#f4f4f4',
    marginTop: 5,
    marginLeft: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#666',
    fontSize: 24,
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.9
    }
  },
  itemImage: {
    borderRadius: 4,
    minWidth: 100,
    width: 100,
    height: 62,
    objectFit: 'cover',
    marginTop: 5,
    marginLeft: 15,
    '&:hover': {
      opacity: 0.9
    }
  },
  presentEmoji: {
    fontSize: 21
  }
})

export default useStyles