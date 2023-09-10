const CONFIG = new Config({
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Hong Kong',
    scale: 'C'
  },
  clock: {
    format: 'h:i p',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      b: ['https://baidu.com/s?ie=utf-8&wd=', 'Baidu'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar'
  },
  disabled: [],
  openLastVisitedTab: false,
  tabs: [
    {
      name: 'Dev',
      background_url: 'src/img/banners/bg-4.gif',
      categories: [
        {
          name: 'subreddits',
          links: [
            {
              name: 'r/programming/',
              url: 'https://www.reddit.com/r/programming/'
            },
            {
              name: 'r/archlinux/',
              url: 'https://www.reddit.com/r/archlinux/'
            },
            {
              name: 'r/linuxmasterrace/',
              url: 'https://www.reddit.com/r/linuxmasterrace/'
            },
            {
              name: 'r/unixporn/',
              url: 'https://www.reddit.com/r/unixporn/'
            },
            {
              name: 'r/mechkbds/',
              url: 'https://www.reddit.com/r/MechanicalKeyboards/',
              icon: 'keyboard',
              icon_color: '#a57685'
            }
          ]
        },
        {
          name: 'misc',
          links: [
            {
              name: 'post office',
              url: 'http://afternoon.dynu.com/letterbox.html',
              icon: 'mailbox'
            },
            {
              name: 'rust docs',
              url: 'https://doc.rust-lang.org/book/',
              icon: 'notebook',
              icon_color: '#977a3a'
            }
          ]
        }
      ]
    },
    {
      name: 'School',
      background_url: 'src/img/banners/bg-5.gif',
      categories: [{
        name: 'Portals',
        links: [
          {
            url: 'https://pronote.fis.edu.hk/eleve.html',
            name: 'Pronote'
          },
          {
            url: 'https://cditkohk.esidoc.fr/',
            name: 'Esidoc'
          }
        ]
      }],
      categories: [{
        name: 'Ressources',
        links: [
          {
            url: 'https://mail.google.com/mail/?authuser=0',
            name: 'Gmail'
          },
          {
            url: 'https://classroom.google.com/',
            name: 'Classroom'
          },
          {
            url: 'https://docs.google.com/document/?usp=docs_alc&authuser=0',
            name: 'Docs'
          },
          {
            url: 'https://drive.google.com/?authuser=0',
            name: 'Drive'
          }
        ]
      }]
    },
    {
      name: 'boards',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [{
        name: 'fun',
        links: [
          {
            url: 'https://4chan.org/wsg/',
            name: '/wsg/'
          },
          {
            name: '/out/',
            url: 'https://4chan.org/out',
            icon: 'leaf',
            icon_color: '#64876d'
          },
          {
            name: '/lit/',
            url: 'https://4chan.org/lit/',
            icon: 'book'
          },
          {
            name: '/v/',
            url: 'https://4chan.org/v/',
            icon: 'device-gamepad',
            icon_color: '#8b647b'
          },
          {
            name: '/p/',
            url: 'https://4chan.org/p/',
            icon: 'camera'
          }
        ]
      },
      {
        name: 'Comfy',
        links: [
          {
            name: '/lounge/',
            url: 'https://sushigirl.us/lounge/catalog.html'
          },
          {
            name: '/comfy/',
            url: 'https://anon.cafe/comfy/catalog.html'
          }
        ]
      },
      {
        name: 'Technology',
        links: [
          {
            name: '/g/',
            url: 'https://4chan.org/g/',
          },
          {
            name: '/Δ/',
            url: 'https://archive.arisuchan.jp/%CE%94/catalog.html'
          },
          {
            name: '/λ/',
            url: 'https://www.lainchan.org/%CE%BB/catalog.html'
          },
          {
            name: '/sec/',
            url: 'https://www.lainchan.org/sec/catalog.html'
          },
          {
            name: '/prog/',
            url: 'https://boards.420chan.org/prog/',
            icon: 'code'
          }
        ]
      }
      ]
    }]
});
