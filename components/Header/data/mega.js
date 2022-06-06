import sample from './sample-pages'
import imgAPI from '~/static/images/imgAPI'

const grandChild = [
  {
    name: 'Vivamus Condimentum',
    link: '#'
  },
  {
    name: 'Lorem',
    link: '#'
  },
  {
    name: 'Eu Rhoncus Odio',
    link: '#'
  },
  {
    name: 'Praesent Tristique',
    link: '#'
  }
]

const mega = [
  {
    name: 'First Menu',
    child: [
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[0],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.photo[1],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[2],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.photo[3],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[4],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.photo[5],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[6],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.photo[7],
        child: grandChild
      }
    ]
  },
  {
    name: 'Second Menu',
    child: [
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[8],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.photo[9],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[10],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.photo[0],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[1],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.photo[2],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[3],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.photo[4],
        child: grandChild
      }
    ]
  },
  {
    name: 'Third Menu',
    child: [
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[5],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.photo[6],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[7],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.photo[8],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[9],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.photo[10],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[0],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.photo[1],
        child: grandChild
      }
    ]
  },
  {
    name: 'Fourth Menu',
    child: [
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[0],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.photo[1],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[2],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.photo[3],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[4],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.photo[5],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.photo[6],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.photo[7],
        child: grandChild
      }
    ]
  },
  {
    name: 'Sample Pages',
    child: sample
  }
]

export default mega
