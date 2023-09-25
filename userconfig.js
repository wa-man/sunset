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
      h: ['https://'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'] ,
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
          name: 'Repository',
          links: [
            {
              name: 'github',
              url: 'https://github.com/',
              icon: 'brand-github',
              icon_color: '#c0caf5'
            },
            {
              name: 'gitlab',
              url: 'https://gitlab.com/',
              icon: 'brand-gitlab',
              icon_color: '#ff9e64'
            }
          ]
        },
        {
          name: 'Online Judge',
          links: [
            {
              name: 'codeforces',
              url: 'https://codeforces.com/',
              icon: 'chart-bar',
              icon_color: '#7aa2f7'
            },
            {
              name: 'luogu',
              url: 'https://luogu.com.cn/',
              icon: 'ribbon-health',
              icon_color: '#7dcfff'
            },
            {
              name: 'atcoder',
              url: 'https://atcoder.jp/',
              icon: 'shield',
              icon_color: '#000000'
            }
          ]
        },
        {
          name: 'Ressources',
          links: [
            {
              name: 'cppreference',
              url: 'https://en.cppreference.com/w/',
              icon: 'brand-cpp',
              icon_color: '#565f89'
            },
            {
              name: 'phind',
              url: 'https://www.phind.com/',
              icon: 'brand-openai',
              icon_color: '#9ece6a'
            },
            {
              name: 'pydoc',
              url: 'https://www.python.org/doc/',
              icon: 'brand-python',
              icon_color: '#f0ca73'
            },
            {
              name: 'rust docs',
              url: 'https://doc.rust-lang.org/book/',
              icon: 'notebook',
              icon_color: '#ff9e64'
            },
            {
              name: 'hacktricks',
              url: 'https://book.hacktricks.xyz/welcome/readme',
              icon: 'biohazard',
              icon_color: '#f24458'
            },
            {
              name: 'Arch Wiki',
              url: 'https://wiki.archlinux.org/',
              icon: 'building-arch',
              icon_color: '#2ac3de'
            },
            {
              name: 'Hypr Wiki',
              url: 'https://wiki.hyprland.org/',
              icon: 'droplet',
              icon_color: '#73daca'
            }
          ]
        },
      ]
    },
    {
      name: 'Chi ll',
      background_url: 'src/img/banners/bg-6.gif',
      categories: [{
        name: 'Social Media',
        links: [
            {
              name: 'whatsapp',
              url: 'https://web.whatsapp.com/',
              icon: 'brand-whatsapp',
              icon_color: '#9ece6a'
            },
            {
              name: 'discord',
              url: 'https://discord.com/channels/@me',
              icon: 'brand-discord',
              icon_color: '#7aa2f7'
            },
            {
              name: 'twitter',
              url: 'https://twitter.com/home',
              icon: 'brand-twitter-filled',
              icon_color: '#2ac3de'
            },
            {
              name: 'reddit',
              url: 'https://www.reddit.com/',
              icon: 'brand-reddit',
              icon_color: '#ff9e64',
            },
            {
            name: 'youtube',
            url: 'https://www.youtube.com/"',
            icon: 'brand-youtube-filled',
            icon_color: '#f05656',
          }
        ]
      },
      {
        name: 'Fun',
        links: [
          {
            name: 'chess',
            url: 'https://www.chess.com/home',
            icon: 'chess-queen-filled',
            icon_color: '#9ece6a',
          },
          {
            name: 'monkeytype',
            url: 'https://monkeytype.com/',
            icon: 'keyboard',
            icon_color: '#73daca',
          },
          {
            name: 'tetris',
            url: 'https://tetris.com/',
            icon: 'brand-apple-arcade',
            icon_color: '#ea6962',
          }
        ]
      },
    {
      name: 'Weeb',
      links: [
        {
          name: 'mangadex',
          url: 'https://mangadex.org/',
          icon: 'book',
          icon_color: '#f05656'
        },
        {
          name: 'manga updates',
          url: 'https://www.mangaupdates.com/',
          icon: 'list-search',
          icon_color: '#e0af68'
        },
        {
          name: 'mangakakalot',
          url: 'https://ww6.mangakakalot.tv/',
          icon: 'circle-letter-k',
          icon_color: '#fc8556'
        }
      ]
    }]
    },
    {
      name: 'Boards',
      background_url: 'src/img/banners/bg-7.gif',
      categories: [
      {
        name: 'Chill',
        links: [
          {
            name: '/lounge/',
            url: 'https://sushigirl.us/lounge/catalog.html'
          },
          {
            name: '/comfy/',
            url: 'https://anon.cafe/comfy/catalog.html'
          },
          {
            name: '/a/',
            url: 'https://boards.4channel.org/a/'
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
          }
        ]
      },
      {
      name: 'Subreddits',
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
          }
        ]
      }]
    }]
});
