
const useTokenMetadata = [
  {
    "name": "Vitality",
    "description": "Vitality (VITA) is a decentralized token for the IoTeX community.",
    "logo": "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw.png",
    "type": "xrc20",
    "symbol": "VITA",
    "decimals": 18
  },
  {
    "name": "Elk Token",
    "description": "ELK is a utility token built for cross-chain value transfer using the ElkNet at Elk.Finance",
    "logo": "io1u88pcraz9mrf8wk2dag8d0xuf5qc8hsuxt9s9a.png",
    "type": "xrc20",
    "symbol": "ELK",
    "decimals": 18
  },
  {
    "name": "IotexPad",
    "description": "IotexPad (TEX) is the first launchpad and incubator built on IoTeX for the IoTex Community.",
    "logo": "io1qjv68myk2ymtagq7gdgpzw3pq4ey0pwuu8z7pj.png",
    "type": "xrc20",
    "symbol": "TEX",
    "decimals": 18
  },
  {
    "name": "IoTexShiba",
    "description": "The first and fairest meme token on IoTex with great passive income rewards for holders.",
    "logo": "io186ngxd2tlrf4nnv7cmsgkkhv9ywhrkyq8rejue.png",
    "type": "xrc20",
    "symbol": "IoShib",
    "decimals": 9
  },
  {
    "name": "Shibex",
    "description": "A Decentralized Meme Token that Evolved into the amazing IoTex Ecosystem.",
    "logo": "io1swzq8crn57t3ngyj0gtxgt98mnwxg274knr566.png",
    "type": "xrc20",
    "symbol": "SHIBX",
    "decimals": 18,
    "image_urls": [
      "https://ipfs.io/ipfs/QmVrp6adhptZfNhkLazfkyPLwMnL8EVULHPsfhGXcnPEJC"
    ]
  },
  {
    "name": "Ucam Pioneer",
    "description": "Ucam Pioneer is a limited edition NFT denoting owners' first adoption of Ucam.",
    "logo": "io1xpvzahnl4h46f9ea6u03ec2hkusrzu020th8xx.png",
    "type": "xrc721",
    "symbol": "UPT",
    "image_urls": ["https://cdn.iotex.io/ucam/ucam_badge.png"]
  },
  {
    "name": "LongZ Card",
    "description": "LongZ Card is a limited edition NFT denoting owners' LongZ community.",
    "logo": "io1343t63p68pc9h76hmy0azvzy0l9msfetp2at70.png",
    "type": "xrc721",
    "symbol": "LongZ",
    "image_urls": ["https://i.ibb.co/Yj0594B/logo.png"]
  },
  {
    "name": "Burn-Drop Ignite",
    "description": "Burn-Drop Ignite is a limited edition NFT denoting Burn-Drop Ignite participants.",
    "logo": "io1350aa78f2h4czfn67e7dajdh7trg3749rp40ne.png",
    "type": "xrc721",
    "symbol": "BDI",
    "image_urls": ["https://cdn.iotex.io/burndrop/burndrop_badge.png"]
  },
  {
    "name": "I voted",
    "description": "I voted NFT for governance proposal and all voters.",
    "logo": "io1d4xnudyemu8f7tjtqt8vpzyj3lmc4kvx7fszpn.png",
    "type": "xrc721",
    "symbol": "IVOTED",
    "image_urls": [
      "https://ipfs.io/ipfs/bafkreig5d2el7kz45w5yyuscflyjsxnm5pveadqs5rzfpttm7swnyeapua?filename=ivoted.png"
    ]
  },
  {
    "name": "Wrapped Ether",
    "description": "",
    "logo": "io1qfvgvmk6lpxkpqwlzanqx4atyzs86ryqjnfuad.png",
    "type": "xrc20",
    "symbol": "ETH",
    "image_urls": [],
    "decimals": 18
  },
  {
    "name": "Paxos Gold",
    "description": "",
    "logo": "io19fsq8e9krrlng4ay5gyq6q5tqfym28yq9ly0fz.png",
    "type": "xrc20",
    "symbol": "PAXG",
    "image_urls": [],
    "decimals": 18
  },
  {
    "name": "Binance USD",
    "description": "",
    "logo": "io14nhfkywdfvl40evgsqnh43ev33q6he8yez8c8a.png",
    "type": "xrc20",
    "symbol": "BUSD",
    "image_urls": [],
    "decimals": 18
  },
  {
    "name": "Wrapped Bitcoin",
    "description": "",
    "logo": "io1c7unwg8h8vph89xwqru4f7zfa4yy5002wxvlrm.png",
    "type": "xrc20",
    "symbol": "WBTC",
    "image_urls": [],
    "decimals": 8
  },
  {
    "name": "UNISWAP",
    "description": "",
    "logo": "io1ahh04jn2zkqlug6feh7rpq75a75p3rj42hp4ch.png",
    "type": "xrc20",
    "symbol": "UNI",
    "image_urls": [],
    "decimals": 18
  },
  {
    "name": "Hacking Token",
    "description": "These tokens can be obtained by visiting and playing the hacking game on JRPC.pl / JRPC.io",
    "logo": "io1m43dzu4q5klmhu9yffperyrugu8dag58kq9syu.png",
    "type": "xrc20",
    "symbol": "JRPC",
    "decimals": 4
  },
  {
    "name": "Metanyx",
    "description": "Metanyx is leading Staking Validator",
    "logo": "io1gafy2msqmmmqyhrhk4dg3ghc59cplyhekyyu26.png",
    "type": "xrc20",
    "symbol": "METX",
    "decimals": 18
  },
  {
    "name": "SonicDiamond",
    "description": "The fast and extremely rare XRC20 ",
    "logo": "io13z9y0kqcgsmke00xwdalcup2zz3pwhuhexd22e.png",
    "type": "xrc20",
    "symbol": "SDI",
    "decimals": 8
  },
  {
    "name": "PrivacyMatters",
    "description": "",
    "logo": "io1d7zv3k2t2ty3236mup52fv6pvnqu9rwpdkcde6.png",
    "type": "xrc721",
    "symbol": "PMT",
    "image_urls": ["https://cdn.iotex.io/tokens/privacyMatters.png"]
  },
  {
    "name": "GameFantasyCat",
    "description": "enjoy the game!",
    "logo": "io14ky4h2u6ahq9vprrrt9u62fszzkwu2tz04mf03.png",
    "type": "xrc721",
    "symbol": "GFC",
    "image_urls": [
      "https://s3-ap-northeast-1.amazonaws.com/cat.gamefantasy.com/cat.png"
    ]
  },
  {
    "name": "Cyclone Protocol",
    "description": "Cyclone is a protocol that applies zkSNARKs to enable transactional privacy by breaking the on-chain link between depositor and recipient addresses.",
    "logo": "io1f4acssp65t6s90egjkzpvrdsrjjyysnvxgqjrh.png",
    "type": "xrc20",
    "symbol": "CYC",
    "decimals": 18
  },
  {
    "name": "Wrapped IoTeX",
    "description": "",
    "logo": "io15qr5fzpxsnp7garl4m7k355rafzqn8grrm0grz.png",
    "type": "xrc20",
    "symbol": "WIOTX",
    "decimals": 18
  },
  {
    "name": "Idea-Thon Winner",
    "description": "",
    "logo": "io1xge7h37n7xhrvjakutc476amn030fdcucyvu4r.png",
    "type": "xrc721",
    "symbol": "ITW",
    "image_urls": ["https://cdn.iotex.io/tokens/nft_ideathon_winner.png"]
  },
{
    "name": "Idea-Thon",
    "description": "",
    "logo": "io1qqhzumd747f39f7zfen4f6ulyxhl774tknf778.png",
    "type": "xrc721",
    "symbol": "ITP",
    "image_urls": ["https://cdn.iotex.io/tokens/nft_ideathon.png"]
  },
  {
    "name": "UP",
    "description": "UP token is the liquidity farming token of Unifi Protocol. UP is minted and distributed in direct proportion to the fees and other revenue generated by the entire Unifi Protocol. It can be redeemed on-chain at any time for the native tokens on each blockchain it is on, and this redeem value goes up after every single trade. It can never go down, only UP.",
    "logo": "io1j9u0fmy20lm0uz8gfrh2c0wmuxjl43cdmgva4a.png",
    "type": "xrc20",
    "symbol": "UP",
    "decimals": 18
  },
  {
    "name": "Binance Coin",
    "description": "",
    "logo": "io1jlnvfzr8lhper2xla8gknmxsqhgajq5ravu4wr.png",
    "type": "xrc20",
    "symbol": "BNB",
    "decimals": 18
  },
  {
    "name": "Binance USD",
    "description": "",
    "logo": "io1sj4uk2pjhesxxsd9qy52avwmgw4qzazfrypm04.png",
    "type": "xrc20",
    "symbol": "BUSD_b",
    "decimals": 18
  },
  {
    "name": "Rainbow",
    "description": "Rainbow is a Smart decentralized token builds on XRC20",
    "logo": "io18d6759s7k4pgw842844vf9uktrcvfjdwekw9ea.png",
    "type": "xrc20",
    "symbol": "RAIN",
    "decimals": 8
  },
  {
    "name": "BOB",
    "description": "BOB is a Smart decentralized token builds on XRC20",
    "logo": "io1fs9py0ck0e8jjyl0eh7sqj56r0knaswd0s746d.png",
    "type": "xrc20",
    "symbol": "BOB",
    "decimals": 10
  },
  {
    "name": "GameFantasyToken",
    "description": "Game Fantasy Token",
    "logo": "io1zl0el07pek4sly8dmscccnm0etd8xr8j02t4y7.png",
    "type": "xrc20",
    "symbol": "GFT",
    "decimals": 18
  },
  {
    "name": "GameFantasyStar",
    "description": "Game Fantasy Star",
    "logo": "io1t585efypl4e9ex7xks2upnjm8saawfk0v0s5sj.png",
    "type": "xrc20",
    "symbol": "GFS",
    "decimals": 18
  },
  {
    "name": "Wrapped Matic",
    "description": "Wrapped Matic Token",
    "logo": "io13envp44hps9j85ulfvs6r6k99wagaky60pzl2c.png",
    "type": "xrc20",
    "symbol": "Matic",
    "decimals": 18
  },
  {
    "name": "WETH-MATIC",
    "description": "Matic Wrapped Ether",
    "logo": "io1v5m9d7zrs852xkdzdresqf3phwc5cchc5crylc.png",
    "type": "xrc20",
    "symbol": "WETH_m",
    "decimals": 18
  },
  {
    "name": "Matic Wrapped BTC",
    "description": "Matic Wrapped BTC",
    "logo": "io10u9dv0ys93nmr7smzyptpkhlhzylt4wtqzrvld.png",
    "type": "xrc20",
    "symbol": "WBTC_m",
    "decimals": 8
  },
  {
    "name": "Matic DAI Stablecoin",
    "description": "Matic DAI Stablecoin",
    "logo": "io1v25anp7t7nz954gdam2m27eqp4arr93jly4maa.png",
    "type": "xrc20",
    "symbol": "DAI_m",
    "decimals": 18
  },
  {
    "name": "Matic Tether USD",
    "description": "Matic Tether USD",
    "logo": "io18ndhcj88pwz5a5h68yhzz6r4q8vykwhugq45ns.png",
    "type": "xrc20",
    "symbol": "USDT_m",
    "decimals": 6
  },
  {
    "name": "Matic USD Coin",
    "description": "Matic USD Coin",
    "logo": "io1cpx682vazuf4s4amjd7jlwejr5akc65plgmdru.png",
    "type": "xrc20",
    "symbol": "USDC_m",
    "decimals": 6
  },
  {
    "name": "Matic SushiToken",
    "description": "SushiToken",
    "logo": "io1990thrrc9cvxhjmsmx5pysznqs734h6uhxfxkq.png",
    "type": "xrc20",
    "symbol": "Sushi_m",
    "decimals": 18
  },
  {
    "name": "Matic Quickswap",
    "description": "Matic Quickswap token",
    "logo": "io1u346nz58mj5cjuj7ng3cn96upwam37v9axtju2.png",
    "type": "xrc20",
    "symbol": "QUICK",
    "decimals": 18
  },
  {
    "name": "Matic Aava Token",
    "description": "Matic Aava token",
    "logo": "io14tw8gyn3p8v5fcmvh4c0w8797ryjrlrvnsr6zf.png",
    "type": "xrc20",
    "symbol": "AAVE_m",
    "decimals": 18
  },
  {
    "name": "Crosschain IOTX",
    "description": "Crosschain IOTX Token",
    "decimals": 18,
    "type": "xrc20",
    "symbol": "CIOTX",
    "logo": "io1nxetpma4de3wx6tqcgxdtj5wc64a24t64dc76s.png"
  },
  {
    "name": "CMC Staking",
    "description": "Exclusive IoTeX Staking NFT earned from iotex.io/start",
    "logo": "io1hpqrl7ay6zhsusctz2x9260rxhkqp3xf7maaqj.png",
    "type": "xrc721",
    "symbol": "CMCS",
    "image_urls": [
      "https://ipfs.io/ipfs/bafybeiekvqnjn6cqm4jdiatgnzkoyu2nw4c6s2fadsv4k7wr7vmpgmpik4"
    ]
  },
  {
    "name": "Tether USDT",
    "decimals": 6,
    "symbol": "USDT",
    "type": "xrc20",
    "logo": "io1d77dcytfk5fsck089eg7669gfpqunrx35ue5ln.png"
  },
  {
    "name": "USD Coin",
    "decimals": 6,
    "symbol": "USDC",
    "type": "xrc20",
    "logo": "io18v4l9dfr74xyu320pz4zsmgrz9d07vnvy20yrh.png"
  },
  {
    "name": "DAI",
    "decimals": 18,
    "symbol": "DAI",
    "type": "xrc20",
    "logo": "io1rjadsk4xdleuztwgf3vgrzrwav5urwumaakt0w.png"
  },
  {
    "name": "MCN.VENTURES",
    "decimals": 18,
    "symbol": "MCN",
    "type": "xrc20",
    "logo": "io18lsyxgygtesjggcj2nyqyqzgwxlxsysc9lgmg8.png"
  },
  {
    "name": "Metanyx - Limited Edition NFT for IoTeX",
    "description": "Metanyx + IoTeX limited edition NFT, 100 tokens identified by tokenid 1-100, verify with metanyx.nft",
    "logo": "io15wrl9ws86vvq2qxz6zal72k8anq8mz8sx8n65h.png",
    "type": "xrc721",
    "symbol": "Metanyx",
    "image_urls": [
      "https://ipfs.io/ipfs/bafybeiaifztqtdvki7vtapiv75c4lcuejmss52qtcptopmi2xuimcceugm?filename=metanyxnft.png"
    ]
  },
  {
    "name": "iMAGICToken",
    "decimals": 18,
    "symbol": "iMAGIC",
    "type": "xrc20",
    "logo": "io1fyx0h7decsmr8hw3j6xsv2vkyfl0gw9fcz3hfz.png"
  },
  {
    "name": "ZOOM TOKEN",
    "decimals": 18,
    "symbol": "ZOOM",
    "type": "xrc20",
    "logo": "io1secz5lugnzch9h3ed6esf47czgr3y7g43k5jcv.png"
  },
  {
    "name": "CLOUD TOKEN",
    "decimals": 18,
    "symbol": "CLOUD",
    "type": "xrc20",
    "logo": "io1fzlznshpukgtm7zgzejjnw8qsynuxyzrwv629k.png"
  },
  {
    "name": "SEAGULL FINANCE TOKEN",
    "decimals": 18,
    "symbol": "FISH",
    "type": "xrc20",
    "logo": "io1wyvvmta30t72xzqe4079u3pgs6x5y2dx8ue25z.png"
  },
  {
    "name": "Parrot Egg",
    "description": "Turbocharged yield farming experience on the IoTeX network. ",
    "logo": "io1zakt2yfmfzzm8gv5h45s26krlcm6fw2unck7a2.png",
    "type": "xrc20",
    "symbol": "iPEGG",
    "decimals": 18
  },
  {
    "name": "WOWSwap",
    "description": "WOWswap is a decentralized leveraged trading protocol.",
    "logo": "io16e77pc9ql4a3thyrfzaehe6z70zc2pz5x60q22.png",
    "decimals": 18,
    "symbol": "WOW",
    "type": "xrc20"
  },
  {
    "name": "IOTEXCHART",
    "description": "IOTEXCHART is the genesis chart platform for the IOTEX blockchain.",
    "logo": "iotexchart.png",
    "decimals": 18,
    "symbol": "IOTEXCHART",
    "type": "xrc20"
  },
  {
    "name": "BSC Tether USD",
    "description": "BSC Tether USD",
    "decimals": 18,
    "symbol": "USDT_b",
    "type": "xrc20",
    "logo": "io1gtyj2h272ghg8vtw5ydrhgzv95a0egre4zemtf.png"
  },
  {
    "name": "BSC USD Coin",
    "decimals": 18,
    "symbol": "USDC_b",
    "type": "xrc20",
    "description": "BSC USD Coin",
    "logo": "io1qde5ded9wg540tpv4dkwhrr5lsvva2ga3hf6ry.png"
  },
  {
    "name": "ZoomSwapV2",
    "decimals": 18,
    "symbol": "ZM",
    "type": "xrc20",
    "logo": "io1lpaw6pygngwaq9vans3tp4tmx3dtzmwa38cf2d.png"
  },
  {
    "name": "MinMaxToken",
    "description": "#IoTeX native cross-chain stablecoin AMM to MINimize fee and MAXimize yield for everyone!",
    "decimals": 18,
    "symbol": "MAX",
    "type": "xrc20",
    "logo": "io1u3wetfnvla4tt6dhjm845dhsv6d08mycve0w0r.png"
  },
  {
    "name": "MachineFi NFT",
    "description": "Enable millions of users to capture the value from the future machine economy and expand the possibilities of the Metaverse, Web3 world, and beyond.",
    "logo": "io1p3dtqfkhf3z3xa4y0xp59f595r5e5klwwnrex7.png",
    "type": "xrc721",
    "symbol": "MFI",
    "image_urls": ["https://machinefi.com/nft/image/0"]
  },
  {
    "name": "The Force Token",
    "description": "The Force Token",
    "logo": "io1p00c9unkxz0zal2fglhguz3y3vnjd6xlx24h8m.png",
    "type": "xrc20",
    "decimals": 18,
    "symbol": "FOR"
  },
  {
    "name": "xDollar Interverse Money",
    "description": "xDollar Finance, the decentralized 0% interest rate lending protocol of xDollar Interverse Money.",
    "decimals": 18,
    "symbol": "XIM",
    "type": "xrc20",
    "logo": "io1a35seh2y3c7tk50dzdwlwgcpcvn94ruqsshltu.png"
  },
  {
    "name": "Blade Warrior",
    "description": "Blade Warrior is an open blockchain game ecosystem. The team comes from well-known 3A game development companies and well-known international blockchain organizations.",
    "decimals": 18,
    "symbol": "Blade",
    "type": "xrc20",
    "logo": "io1ex2s5f8f3d7hruzktslpqpywt78vgvzsx384dw.png"
  },
  {
    "name": "Blade EGG",
    "description": "Blade Warrior is an open blockchain game ecosystem. The team comes from well-known 3A game development companies and well-known international blockchain organizations.",
    "decimals": 18,
    "symbol": "EGG",
    "type": "xrc20",
    "logo": "io109mf3ua2tfkm2lkzq432hu03ys7vuv4d5m40gk.png"
  },
  {
    "name": "Blade Character",
    "description": "Blade Warrior is an open blockchain game ecosystem. The team comes from well-known 3A game development companies and well-known international blockchain organizations.",
    "logo": "io18n9gze9dhapgml4jjtpdrmycq0m8e8kmden7fl.png",
    "type": "xrc721",
    "symbol": "NBLC",
    "image_urls": ["https://www.blade.game/image/logo.png"]
  },
  {
    "name": "Blade Weapon",
    "description": "Blade Warrior is an open blockchain game ecosystem. The team comes from well-known 3A game development companies and well-known international blockchain organizations.",
    "logo": "io1nasw2uce050w7d5mz4005hcy3kx4zz2zhewav6.png",
    "type": "xrc721",
    "symbol": "NBLW",
    "image_urls": ["https://www.blade.game/image/logo.png"]
  },
  {
    "name": "FilDA",
    "description": "FilDA is a secure decentralized digital asset bank.",
    "decimals": 18,
    "symbol": "FILDA",
    "type": "xrc20",
    "logo": "io1xgy9hr4g23ffz79apa8f95lay3668g2e57h6j2.png"
  },
  {
    "name": "BOT",
    "description": "Multichain ecosystem built under the UX of an NFT-based Play-To-Earn game. Unique wallet with a built in NFT Marketplace, DEX, seasonal NFT and Token AirDrops & game-based Multifunctional messenger.",
    "decimals": 18,
    "symbol": "BOT",
    "type": "xrc20",
    "logo": "io1etcq5krprmxnqg9jqxzfefm2xmyx8gq5p20lwg.png"
  },
  {
    "name": "BioShib",
    "description": "BioShib",
    "logo": "io186ngxd2tlrf4nnv7cmsgkkhv9ywhrkyq8rejue.png",
    "type": "xrc20",
    "symbol": "bioShib",
    "decimals": 18
  },
  {
    "name": "CloutContracts",
    "decimals": 0,
    "symbol": "CCS",
    "type": "xrc20",
    "description": "CloutContracts",
    "logo": "io1daejpenv38639dw8xplp7c9zr4ff0c9p9kfx3g.png"
  }
]

export default useTokenMetadata
