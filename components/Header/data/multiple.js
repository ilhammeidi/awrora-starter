import sample from './sample-pages'

const defaultChild = [
  {
    name: '1Vivamus Condimentum',
    link: '#'
  },
  {
    name: '2Lorem',
    child: [
      {
        name: '1Vivamus Condimentum',
        link: '#'
      },
      {
        name: '1Vivamus Condimentum',
        link: '#'
      }
    ]
  },
  {
    name: '3Eu Rhoncus Odio',
    link: '#'
  },
  {
    name: '4Praesent Tristique',
    link: '#'
  }
]

const multiple = [
  {
    name: 'First Menu',
    link: '#'
  },
  {
    name: 'Second Menu',
    child: [
      {
        name: 'Eu Rhoncus Odio',
        link: '#'
      },
      {
        name: 'In Lorem',
        child: defaultChild
      },
      {
        name: 'Eu Rhoncus Odio',
        child: defaultChild
      },
      {
        name: 'Praesent Tristique',
        child: defaultChild
      }
    ]
  },
  {
    name: 'Third Menu',
    child: [
      {
        name: 'Eu Rhoncus Odio',
        link: '#'
      },
      {
        name: 'In Lorem',
        child: defaultChild
      },
      {
        name: 'Eu Rhoncus Odio',
        child: defaultChild
      },
      {
        name: 'Praesent Tristique',
        child: defaultChild
      }
    ]
  },
  {
    name: 'Fourth Menu',
    child: [
      {
        name: 'Eu Rhoncus Odio',
        link: '#'
      },
      {
        name: 'In Lorem',
        child: defaultChild
      },
      {
        name: 'Eu Rhoncus Odio',
        child: defaultChild
      },
      {
        name: 'Praesent Tristique',
        child: defaultChild
      }
    ]
  },
  {
    name: 'inner Pages',
    child: sample
  }
]

export default multiple
