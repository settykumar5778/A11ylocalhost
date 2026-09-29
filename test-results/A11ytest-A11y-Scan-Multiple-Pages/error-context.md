# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: A11ytest\A11y.spec.js >> Scan Multiple Pages
- Location: A11ytest\A11y.spec.js:35:1

# Error details

```
Error: Accessibility Quality Gate Failed. Critical/Serious Issues Found: 2
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - complementary "Choose country or region" [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]: Choose another country or region to see content specific to your location and shop online.
      - generic [ref=e5]:
        - generic [ref=e6]:
          - button " India " [ref=e7]:
            - generic [ref=e8]:
              - generic [ref=e9]: 
              - generic [ref=e10]: India
            - text: 
          - text: 
        - button "Continue" [ref=e11] [cursor=pointer]
        - button "Close country or region selector" [ref=e12] [cursor=pointer]
  - heading "Apple" [level=1] [ref=e16]
  - navigation "Global" [ref=e17]:
    - list [ref=e19]:
      - listitem [ref=e20]:
        - link "Apple" [ref=e21] [cursor=pointer]:
          - /url: /
      - listitem [ref=e22]:
        - generic [ref=e24]:
          - list [ref=e26]:
            - listitem [ref=e27]:
              - link "Store" [ref=e28] [cursor=pointer]:
                - /url: /us/shop/goto/store
            - listitem:
              - button "Store menu"
          - list [ref=e31]:
            - listitem [ref=e32]:
              - link "Mac" [ref=e33] [cursor=pointer]:
                - /url: /mac/
            - listitem:
              - button "Mac menu"
          - list [ref=e36]:
            - listitem [ref=e37]:
              - link "iPad" [ref=e38] [cursor=pointer]:
                - /url: /ipad/
            - listitem:
              - button "iPad menu"
          - list [ref=e41]:
            - listitem [ref=e42]:
              - link "iPhone" [ref=e43] [cursor=pointer]:
                - /url: /iphone/
            - listitem:
              - button "iPhone menu"
          - list [ref=e46]:
            - listitem [ref=e47]:
              - link "Watch" [ref=e48] [cursor=pointer]:
                - /url: /watch/
            - listitem:
              - button "Watch menu"
          - list [ref=e51]:
            - listitem [ref=e52]:
              - link "Vision" [ref=e53] [cursor=pointer]:
                - /url: /apple-vision-pro/
            - listitem:
              - button "Vision menu"
          - list [ref=e56]:
            - listitem [ref=e57]:
              - link "AirPods" [ref=e58] [cursor=pointer]:
                - /url: /airpods/
            - listitem:
              - button "AirPods menu"
          - list [ref=e61]:
            - listitem [ref=e62]:
              - link "TV and Home" [ref=e63] [cursor=pointer]:
                - /url: /tv-home/
                - generic [ref=e64]: TV & Home
            - listitem:
              - button "TV and Home menu"
          - list [ref=e66]:
            - listitem [ref=e67]:
              - link "Entertainment" [ref=e68] [cursor=pointer]:
                - /url: /entertainment/
            - listitem:
              - button "Entertainment menu"
          - list [ref=e71]:
            - listitem [ref=e72]:
              - link "Accessories" [ref=e73] [cursor=pointer]:
                - /url: /us/shop/goto/buy_accessories
            - listitem:
              - button "Accessories menu"
          - list [ref=e76]:
            - listitem [ref=e77]:
              - link "Support" [ref=e78] [cursor=pointer]:
                - /url: https://support.apple.com/?cid=gn-ols-home-hp-tab
            - listitem:
              - button "Support menu"
      - listitem [ref=e80]:
        - button "Search apple.com" [ref=e81] [cursor=pointer]
      - listitem [ref=e82]:
        - button "Shopping Bag" [ref=e84] [cursor=pointer]
  - main [ref=e85]:
    - generic [ref=e86]:
      - generic [ref=e87]:
        - link [aria-hidden] [ref=e88] [cursor=pointer]:
          - /url: /iphone-18-pro/
        - generic [ref=e89]:
          - generic:
            - heading "iPhone 18 Pro" [level=2]
            - paragraph: Pro further.
          - generic [ref=e90]:
            - link "Learn more, iPhone 18 Pro" [ref=e91] [cursor=pointer]:
              - /url: /iphone-18-pro/
              - text: Learn more
            - link "Buy, iPhone 18 Pro" [ref=e92] [cursor=pointer]:
              - /url: /us/shop/goto/buy_iphone/iphone_18_pro
              - text: Buy
        - img "iPhone 18 Pro, burgundy color (dark red), back exterior, Pro Fusion camera system at top, Apple logo in center, Side exterior, Side button, Camera Control, the word Pro written in large silver colored text and glowing with a blue and pink neon effect" [ref=e95]
      - generic [ref=e96]:
        - link [aria-hidden] [ref=e97] [cursor=pointer]:
          - /url: /iphone-duo/
        - generic [ref=e98]:
          - generic:
            - heading "iPhone Duo" [level=2]
            - paragraph: Hello, hello.
            - paragraph: Pre-order starting 5:00 a.m. PT on 10.16 Available starting 10.23
          - generic [ref=e99]:
            - link "Learn more, iPhone Duo" [ref=e100] [cursor=pointer]:
              - /url: /iphone-duo/
              - text: Learn more
            - link "View pricing, iPhone Duo" [ref=e101] [cursor=pointer]:
              - /url: /us/shop/goto/buy_iphone/iphone_duo
              - text: View pricing
        - img "iPhone Duo, held by two hands in landscape orientation, unfolded, interior display features Home Screen" [ref=e104]
      - generic [ref=e105]:
        - link [aria-hidden] [ref=e106] [cursor=pointer]:
          - /url: /apple-watch-series-12/
        - generic [ref=e107]:
          - generic [ref=e108]:
            - generic:
              - heading "Apple Watch Series 12" [level=2]
          - generic [ref=e109]:
            - generic:
              - paragraph:
                - text: The most accurate heart rate sensing in a wearable.
                - superscript: "1"
            - generic [ref=e110]:
              - link "Learn more, Apple Watch Series 12" [ref=e111] [cursor=pointer]:
                - /url: /apple-watch-series-12/
                - text: Learn more
              - link "Buy, Apple Watch Series 12" [ref=e112] [cursor=pointer]:
                - /url: /us/shop/goto/buy_watch/apple_watch_series_12
                - text: Buy
        - img "Two Apple Watch Series 12 devices, aluminum case, dark bronze color, olive Sport Band, one showing front of watch with Heart Rate app, one showing back of watch with Health Sensing System with glowing green LED lights" [ref=e115]
    - generic [ref=e116]:
      - generic [ref=e117]:
        - link [aria-hidden] [ref=e118] [cursor=pointer]:
          - /url: /apple-watch-ultra-4/
        - generic [ref=e119]:
          - generic:
            - heading "Apple Watch Ultra 4" [level=3]
            - paragraph: A battery you can’t outrun.
          - generic [ref=e120]:
            - link "Learn more, Apple Watch Ultra 4" [ref=e121] [cursor=pointer]:
              - /url: /apple-watch-ultra-4/
              - text: Learn more
            - link "Buy, Apple Watch Ultra 4" [ref=e122] [cursor=pointer]:
              - /url: /us/shop/goto/buy_watch/apple_watch_ultra_4
              - text: Buy
        - img "Apple Watch Ultra 4, titanium case, natural color, right exterior, Digital Crown, raised side button, digital watch face, translucent gray Ocean Band" [ref=e125]
      - generic [ref=e126]:
        - link [aria-hidden] [ref=e127] [cursor=pointer]:
          - /url: /mac-mini/
        - generic [ref=e128]:
          - generic:
            - heading "Mac mini" [level=3]
            - paragraph: Now with M6 and M5 Pro.
          - generic [ref=e129]:
            - link "Learn more, Mac mini M6 and M5 Pro" [ref=e130] [cursor=pointer]:
              - /url: /mac-mini/
              - text: Learn more
            - link "Buy, Mac mini M6 and M5 Pro" [ref=e131] [cursor=pointer]:
              - /url: /us/shop/goto/buy_mac/mac_mini
              - text: Buy
        - img "Front view of Mac mini balanced on the fingertips of an up-stretched hand, front shows two Thunderbolt ports, status indicator light and headphone jack, tapered black base at bottom, flat top, rounded sides, straight edges, silver color" [ref=e134]
      - generic [ref=e135]:
        - link [aria-hidden] [ref=e136] [cursor=pointer]:
          - /url: /macbook-air/
        - generic [ref=e137]:
          - generic:
            - heading "MacBook Air" [level=3]
            - paragraph: Now supercharged by M5.
          - generic [ref=e138]:
            - link "Learn more, MacBook Air with M5" [ref=e139] [cursor=pointer]:
              - /url: /macbook-air/
              - text: Learn more
            - link "Buy, MacBook Air with M5" [ref=e140] [cursor=pointer]:
              - /url: /us/shop/goto/buy_mac/macbook_air
              - text: Buy
        - img "Two open MacBook Air laptops in sky blue color forming arrow shape, emphasizing narrow profile" [ref=e143]
      - generic [ref=e144]:
        - link [aria-hidden] [ref=e145] [cursor=pointer]:
          - /url: /ipad-air/
        - generic [ref=e146]:
          - generic:
            - heading "iPad Air" [level=3]
            - paragraph: Now supercharged by M4.
          - generic [ref=e147]:
            - link "Learn more, iPad Air" [ref=e148] [cursor=pointer]:
              - /url: /ipad-air/
              - text: Learn more
            - link "Buy, iPad Air" [ref=e149] [cursor=pointer]:
              - /url: /us/shop/goto/buy_ipad/ipad_air
              - text: Buy
        - img "iPad Air models floating, back exterior, single-lens camera, front exterior, rounded corners, black display bezel" [ref=e152]
      - generic [ref=e153]:
        - link [aria-hidden] [ref=e154] [cursor=pointer]:
          - /url: /us/shop/goto/apple_upgrade
        - generic [ref=e155]:
          - generic:
            - heading "Apple Upgrade" [level=3]
            - paragraph:
              - text: Love it. Lease it. Upgrade it.
              - superscript: "2"
          - link "Learn more, Apple Upgrade" [ref=e157] [cursor=pointer]:
            - /url: /us/shop/goto/apple_upgrade
            - text: Learn more
        - img "Apple Upgrade, iPhone 18 Pro appears, iPhone silhouette fans out from behind into spectrum of purple and red colors, iPad Pro appears, iPad Pro silhouette fans into spectrum of colors, MacBook Pro appears, MacBook Pro silhouette fans into spectrum of colors, Apple Watch Series 12 appears, Apple Watch Series 12 silhouette fans into spectrum of colors." [ref=e161]
      - generic [ref=e162]:
        - link [aria-hidden] [ref=e163] [cursor=pointer]:
          - /url: /apple-card/
        - generic [ref=e164]:
          - generic:
            - heading "Apple Card" [level=3]
            - paragraph: Get up to 3% Daily Cash back with every purchase.
          - generic [ref=e165]:
            - link "Learn more, Apple Card" [ref=e166] [cursor=pointer]:
              - /url: /apple-card/
              - text: Learn more
            - link "Apply now, Apple Card" [ref=e167] [cursor=pointer]:
              - /url: https://card.apple.com/apply/application?referrer=cid%3Dapy-200-10000036&start=false
              - text: Apply now
        - img "Apple Card, front, Apple logo in top left, cardholder name in middle left Marisa Robertson, card chip in middle right." [ref=e170]
    - generic [ref=e172]:
      - heading "Endless entertainment." [level=2] [ref=e174]
      - generic [ref=e175]:
        - tablist [ref=e176]:
          - tab "Item 1" [selected]
          - tab "Item 2" [ref=e177] [cursor=pointer]
          - tab "Item 3" [ref=e179] [cursor=pointer]
          - tab "Item 4" [ref=e181] [cursor=pointer]
          - tab "Item 5" [ref=e183] [cursor=pointer]
          - tab "Item 6" [ref=e185] [cursor=pointer]
          - tab "Item 7" [ref=e187] [cursor=pointer]
          - tab "Item 8" [ref=e189] [cursor=pointer]
          - tab "Item 9" [ref=e191] [cursor=pointer]
        - button "Play endless entertainment gallery" [ref=e193] [cursor=pointer]
      - group "Gallery of Apple TV shows, movies, and sports." [ref=e197]:
        - list [ref=e198]:
          - tabpanel "Item 1" [ref=e199]:
            - link "Stream now, Brothers - Comedy - Friends. And family?" [ref=e200] [cursor=pointer]:
              - /url: https://tv.apple.com/us/show/brothers/umc.cmc.17g1y5mzqp92sc0ge1c0hdorg?l=en-US?itscg=10000&itsct=atv-apl_hp-stream_now--220622
              - generic [ref=e204]:
                - generic [aria-hidden] [ref=e205]: Stream now
                - paragraph [aria-hidden] [ref=e206]: Comedy•Friends. And family?
          - tabpanel [aria-hidden] [ref=e207]:
            - link:
              - /url: https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o?l=en-US?itscg=10000&itsct=atv-apl_hp-stream_now--220622
              - generic:
                - generic:
                  - generic [aria-hidden]: Stream now
                  - paragraph [aria-hidden]: Thriller•New season.
          - tabpanel [aria-hidden] [ref=e208]:
            - link:
              - /url: https://tv.apple.com/us/room/formula-1/uts.room.formula-1?itscg=10000&itsct=atv-apl_hp-stream_now--220622
              - generic:
                - generic:
                  - generic [aria-hidden]: F1 on Apple TV
                  - paragraph [aria-hidden]: Every Grand Prix™, live and on demand—all in one place, all year long.
          - tabpanel [aria-hidden] [ref=e209]:
            - link:
              - /url: https://tv.apple.com/us/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy?l=en-US?itscg=10000&itsct=atv-apl_hp-stream_now--220622
              - generic:
                - generic:
                  - generic [aria-hidden]: Stream now
                  - paragraph [aria-hidden]: Comedy•The hit comedy is back and Tedder than ever.
          - tabpanel [aria-hidden] [ref=e210]:
            - link:
              - /url: https://tv.apple.com/us/channel/mls/tvs.sbd.7000?itscg=10000&itsct=atv-apl_hp-stream_now--220622
              - generic:
                - generic:
                  - generic [aria-hidden]: MLS on Apple TV
                  - paragraph [aria-hidden]: Watch every club, every match, live—all season long.
          - tabpanel [aria-hidden] [ref=e211]:
            - link:
              - /url: https://tv.apple.com/us/show/knife-edge-chasing-michelin-stars/umc.cmc.2yhce9h11ctctdi23b29k1ek3?l=en-US?itscg=10000&itsct=atv-apl_hp-stream_now--220622
              - generic:
                - generic:
                  - generic [aria-hidden]: Stream now
                  - paragraph [aria-hidden]: Documentary•New season.
          - tabpanel [aria-hidden] [ref=e212]:
            - link:
              - /url: https://tv.apple.com/us/movie/mayday/umc.cmc.shin43vzfoz3h4ggx41z8rf?l=en-US?itscg=10000&itsct=atv-apl_hp-stream_now--220622
              - generic:
                - generic:
                  - generic [aria-hidden]: Stream now
                  - paragraph [aria-hidden]: Action•A friendship with major red flags.
          - tabpanel [aria-hidden] [ref=e213]:
            - link:
              - /url: https://tv.apple.com/us/show/widows-bay/umc.cmc.1zzly0vah46bnvnwf0qkrjhh2?l=en-US?itscg=10000&itsct=atv-apl_hp-stream_now--220622
              - generic:
                - generic:
                  - generic [aria-hidden]: Stream now
                  - paragraph [aria-hidden]: Comedy•14 Emmy® Awards Including Best Comedy
          - tabpanel [aria-hidden] [ref=e214]:
            - link:
              - /url: https://tv.apple.com/us/show/dark-matter/umc.cmc.4luj45vtqpmjsvb6sc2675oeg?l=en-US?itscg=10000&itsct=atv-apl_hp-stream_now--220622
              - generic:
                - generic:
                  - generic [aria-hidden]: Stream now
                  - paragraph [aria-hidden]: Sci-Fi•There’s no world like home.
      - group "Gallery of Apple services, including Fitness Plus, Apple Arcade, and Apple Music" [ref=e215]:
        - list [ref=e216]:
          - tabpanel "Item 1" [ref=e217]:
            - link "Play now, Hello Kitty Island Adventure" [ref=e218] [cursor=pointer]:
              - /url: https://apps.apple.com/us/app/hello-kitty-island-adventure/id1553505132?itscg=10000&itsct=aa-apl_hp-play_now--240326
              - generic [ref=e226]:
                - generic [aria-hidden] [ref=e227]: Play now
                - paragraph [aria-hidden] [ref=e228]: Hello Kitty Island Adventure
          - tabpanel [aria-hidden] [ref=e229]:
            - link [ref=e230] [cursor=pointer]:
              - /url: https://music.apple.com/us/station/miley-the-zane-lowe-interview/ra.6810826773?itscg=10000&itsct=am-apl_hp-listen_now--240326
              - paragraph [ref=e233]: "Miley: The Zane Lowe Interview"
              - generic [aria-hidden] [ref=e240]: Listen now
          - tabpanel [aria-hidden] [ref=e241]:
            - link:
              - /url: https://fitness.apple.com/us/workout/treadmill-with-emily-music-by-becky-g/6807496192?itscg=10000&itsct=afp-apl_hp-watch_now--240326
              - generic:
                - generic:
                  - generic [aria-hidden]: Watch now
                  - paragraph [aria-hidden]: Treadmill with Emily • Music by Becky G
          - tabpanel [aria-hidden] [ref=e242]:
            - link:
              - /url: https://apps.apple.com/us/app/powerwash-simulator/id6477445344?itscg=10000&itsct=aa-apl_hp-play_now--240326
              - generic:
                - generic:
                  - generic [aria-hidden]: Play now
                  - paragraph [aria-hidden]: PowerWash Simulator
          - tabpanel [aria-hidden] [ref=e243]:
            - link:
              - /url: https://music.apple.com/us/playlist/new-music-daily/pl.2b0e6e332fdf4b7a91164da3162127b5?itscg=10000&itsct=am-apl_hp-listen_now--240326
              - generic:
                - paragraph: New Music Daily
              - generic:
                - generic:
                  - generic [aria-hidden]: Listen now
          - tabpanel [aria-hidden] [ref=e244]:
            - link:
              - /url: https://fitness.apple.com/us/studio-collection/join-the-team-with-ted-lasso/1673607671?itscg=10000&itsct=afp-apl_hp-watch_now--240326
              - generic:
                - generic:
                  - generic [aria-hidden]: Watch now
                  - paragraph [aria-hidden]: Join the Team with “Ted Lasso”
          - tabpanel [aria-hidden] [ref=e245]:
            - link:
              - /url: https://apps.apple.com/us/app/madden-nfl-27-arcade-edition/id6755553408?itscg=10000&itsct=aa-apl_hp-play_now--240326
              - generic:
                - generic:
                  - generic [aria-hidden]: Play now
                  - paragraph [aria-hidden]: Madden NFL 27 Arcade Edition
          - tabpanel [aria-hidden] [ref=e246]:
            - link:
              - /url: https://music.apple.com/us/playlist/todays-hits/pl.f4d106fed2bd41149aaacabb233eb5eb?itscg=10000&itsct=am-apl_hp-listen_now--240326
              - generic:
                - paragraph: Today’s Hits
              - generic:
                - generic:
                  - generic [aria-hidden]: Listen now
          - tabpanel [aria-hidden] [ref=e247]:
            - link [ref=e248] [cursor=pointer]:
              - /url: https://fitness.apple.com/us/studio-collection/so-fresh-90s-dance/1740390507?itscg=10000&itsct=afp-apl_hp-watch_now--240326
              - generic [ref=e256]:
                - generic [aria-hidden] [ref=e257]: Watch now
                - paragraph [aria-hidden] [ref=e258]: So Fresh! '90s Dance
  - contentinfo [ref=e259]:
    - generic [ref=e260]:
      - heading "Apple Footer" [level=2] [ref=e261]
      - region "Footnotes" [ref=e262]:
        - list [ref=e263]:
          - listitem [ref=e264]:
            - text: Based on data from an Apple-conducted study of heart rate accuracy, during July and August 2026, utilizing commercially available best-selling wearables available as of June 2026. For more information, visit
            - link "apple.com/HRAccuracy" [ref=e265] [cursor=pointer]:
              - /url: /HRAccuracy/
            - text: .
          - listitem [ref=e266]: "Apple Upgrade is a device leasing program available in the U.S. (excluding U.S. territories). Leases are provided by Klarna: subject to eligibility and credit approval, including final approval at checkout. To be eligible, you must be a U.S. resident, at least 18 years old (or the legal age in your state), have an accepted credit or debit card, and have an Apple Account. Additional eligibility criteria apply. Device must be in good condition upon return; damage fees may apply. For iPhone only: In order to lease an iPhone, you must select an eligible carrier (but you cannot use a prepaid carrier plan). Upgrades require entering into a new lease and are subject to eligibility and credit approval. Apple Upgrade is not available on refurbished devices or online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses or enterprises; Government, Education, or Veterans and Military Purchase Programs."
        - list [ref=e267]:
          - listitem [ref=e268]:
            - generic [ref=e269]:
              - paragraph [ref=e270]: To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
              - paragraph [ref=e271]: Apple Payments Services LLC, a subsidiary of Apple Inc., is a service provider of Goldman Sachs Bank USA for Apple Card and Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC is a bank.
              - paragraph [ref=e272]: All communications from Apple and Goldman Sachs Bank USA about Apple Card (including transactional and marketing communications) and customer service support are available in English. Certain communications about Apple Card can be viewed in another language depending on your device language settings. If you reside in the U.S. Virgin Islands, American Samoa, Guam, Northern Mariana Islands, or U.S. Minor Outlying Islands, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
          - listitem [ref=e273]:
            - generic [ref=e274]:
              - text: Learn more about how Apple Card applications are evaluated at
              - link "support.apple.com/kb/HT209218" [ref=e275] [cursor=pointer]:
                - /url: https://support.apple.com/kb/HT209218
              - text: .
          - listitem [ref=e276]: A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV.
          - listitem [ref=e277]: Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.
      - navigation "Apple Directory" [ref=e278]:
        - generic [ref=e279]:
          - generic:
            - heading "Shop and Learn" [level=3] [ref=e280]
            - list [ref=e282]:
              - listitem [ref=e283]:
                - link "Store" [ref=e284] [cursor=pointer]:
                  - /url: /us/shop/goto/store
              - listitem [ref=e285]:
                - link "Mac" [ref=e286] [cursor=pointer]:
                  - /url: /mac/
              - listitem [ref=e287]:
                - link "iPad" [ref=e288] [cursor=pointer]:
                  - /url: /ipad/
              - listitem [ref=e289]:
                - link "iPhone" [ref=e290] [cursor=pointer]:
                  - /url: /iphone/
              - listitem [ref=e291]:
                - link "Watch" [ref=e292] [cursor=pointer]:
                  - /url: /watch/
              - listitem [ref=e293]:
                - link "Vision" [ref=e294] [cursor=pointer]:
                  - /url: /apple-vision-pro/
              - listitem [ref=e295]:
                - link "AirPods" [ref=e296] [cursor=pointer]:
                  - /url: /airpods/
              - listitem [ref=e297]:
                - link "TV & Home" [ref=e298] [cursor=pointer]:
                  - /url: /tv-home/
              - listitem [ref=e299]:
                - link "AirTag" [ref=e300] [cursor=pointer]:
                  - /url: /airtag/
              - listitem [ref=e301]:
                - link "Accessories" [ref=e302] [cursor=pointer]:
                  - /url: /us/shop/goto/buy_accessories
              - listitem [ref=e303]:
                - link "Gift Cards" [ref=e304] [cursor=pointer]:
                  - /url: /us/shop/goto/giftcards
          - generic:
            - heading "Apple Wallet" [level=3] [ref=e305]
            - list [ref=e307]:
              - listitem [ref=e308]:
                - link "Wallet" [ref=e309] [cursor=pointer]:
                  - /url: /wallet/
              - listitem [ref=e310]:
                - link "Apple Card" [ref=e311] [cursor=pointer]:
                  - /url: /apple-card/
              - listitem [ref=e312]:
                - link "Apple Pay" [ref=e313] [cursor=pointer]:
                  - /url: /apple-pay/
              - listitem [ref=e314]:
                - link "Apple Cash" [ref=e315] [cursor=pointer]:
                  - /url: /apple-cash/
        - generic [ref=e316]:
          - generic:
            - heading "Account" [level=3] [ref=e317]
            - list [ref=e319]:
              - listitem [ref=e320]:
                - link "Manage Your Apple Account" [ref=e321] [cursor=pointer]:
                  - /url: https://account.apple.com/
              - listitem [ref=e322]:
                - link "Apple Store Account" [ref=e323] [cursor=pointer]:
                  - /url: /us/shop/goto/account
              - listitem [ref=e324]:
                - link "iCloud.com" [ref=e325] [cursor=pointer]:
                  - /url: https://www.icloud.com
          - generic:
            - heading "Entertainment" [level=3] [ref=e326]
            - list [ref=e328]:
              - listitem [ref=e329]:
                - link "Apple One" [ref=e330] [cursor=pointer]:
                  - /url: /apple-one/
              - listitem [ref=e331]:
                - link "Apple TV" [ref=e332] [cursor=pointer]:
                  - /url: /apple-tv/
              - listitem [ref=e333]:
                - link "Apple Music" [ref=e334] [cursor=pointer]:
                  - /url: /apple-music/
              - listitem [ref=e335]:
                - link "Apple Arcade" [ref=e336] [cursor=pointer]:
                  - /url: /apple-arcade/
              - listitem [ref=e337]:
                - link "Apple Fitness+" [ref=e338] [cursor=pointer]:
                  - /url: /apple-fitness-plus/
              - listitem [ref=e339]:
                - link "Apple News+" [ref=e340] [cursor=pointer]:
                  - /url: /apple-news/
              - listitem [ref=e341]:
                - link "Apple Podcasts" [ref=e342] [cursor=pointer]:
                  - /url: /apple-podcasts/
              - listitem [ref=e343]:
                - link "Apple Books" [ref=e344] [cursor=pointer]:
                  - /url: /apple-books/
              - listitem [ref=e345]:
                - link "App Store" [ref=e346] [cursor=pointer]:
                  - /url: /app-store/
        - generic [ref=e347]:
          - generic:
            - heading "Apple Store" [level=3] [ref=e348]
            - list [ref=e350]:
              - listitem [ref=e351]:
                - link "Find a Store" [ref=e352] [cursor=pointer]:
                  - /url: /retail/
              - listitem [ref=e353]:
                - link "Genius Bar" [ref=e354] [cursor=pointer]:
                  - /url: /retail/geniusbar/
              - listitem [ref=e355]:
                - link "Today at Apple" [ref=e356] [cursor=pointer]:
                  - /url: /today/
              - listitem [ref=e357]:
                - link "Group Reservations" [ref=e358] [cursor=pointer]:
                  - /url: /today/groups/
              - listitem [ref=e359]:
                - link "Apple Camp" [ref=e360] [cursor=pointer]:
                  - /url: /today/camp/
              - listitem [ref=e361]:
                - link "Apple Store App" [ref=e362] [cursor=pointer]:
                  - /url: https://apps.apple.com/us/app/apple-store/id375380948
              - listitem [ref=e363]:
                - link "Certified Refurbished" [ref=e364] [cursor=pointer]:
                  - /url: /us/shop/goto/special_deals
              - listitem [ref=e365]:
                - link "Apple Upgrade" [ref=e366] [cursor=pointer]:
                  - /url: /us/shop/goto/apple_upgrade
              - listitem [ref=e367]:
                - link "Apple Trade In" [ref=e368] [cursor=pointer]:
                  - /url: /us/shop/goto/trade_in
              - listitem [ref=e369]:
                - link "Financing" [ref=e370] [cursor=pointer]:
                  - /url: /us/shop/goto/payment_plan
              - listitem [ref=e371]:
                - link "Carrier Deals at Apple" [ref=e372] [cursor=pointer]:
                  - /url: /us/shop/goto/buy_iphone/carrier_offers
              - listitem [ref=e373]:
                - link "Order Status" [ref=e374] [cursor=pointer]:
                  - /url: /us/shop/goto/order/list
              - listitem [ref=e375]:
                - link "Shopping Help" [ref=e376] [cursor=pointer]:
                  - /url: /us/shop/goto/help
        - generic [ref=e377]:
          - generic:
            - heading "For Business" [level=3] [ref=e378]
            - list [ref=e380]:
              - listitem [ref=e381]:
                - link "Apple and Business" [ref=e382] [cursor=pointer]:
                  - /url: /business/
              - listitem [ref=e383]:
                - link "Shop for Business" [ref=e384] [cursor=pointer]:
                  - /url: /retail/business/
          - generic:
            - heading "For Education" [level=3] [ref=e385]
            - list [ref=e387]:
              - listitem [ref=e388]:
                - link "Apple and Education" [ref=e389] [cursor=pointer]:
                  - /url: /education/
              - listitem [ref=e390]:
                - link "Shop for K-12" [ref=e391] [cursor=pointer]:
                  - /url: /education/k12/how-to-buy/
              - listitem [ref=e392]:
                - link "Shop for College" [ref=e393] [cursor=pointer]:
                  - /url: /us/shop/goto/educationrouting
          - generic:
            - heading "For Healthcare" [level=3] [ref=e394]
            - list [ref=e396]:
              - listitem [ref=e397]:
                - link "Apple and Healthcare" [ref=e398] [cursor=pointer]:
                  - /url: /healthcare/
          - generic:
            - heading "For Government" [level=3] [ref=e399]
            - list [ref=e401]:
              - listitem [ref=e402]:
                - link "Apple and Government" [ref=e403] [cursor=pointer]:
                  - /url: /government/
              - listitem [ref=e404]:
                - link "Shop for Veterans and Military" [ref=e405] [cursor=pointer]:
                  - /url: /us/shop/goto/eppstore/veteransandmilitary
              - listitem [ref=e406]:
                - link "Shop for State and Local Employees" [ref=e407] [cursor=pointer]:
                  - /url: /us_epp_67909/store
              - listitem [ref=e408]:
                - link "Shop for Federal Employees" [ref=e409] [cursor=pointer]:
                  - /url: /us_epp_55499/store
        - generic [ref=e410]:
          - generic:
            - heading "Apple Values" [level=3] [ref=e411]
            - list [ref=e413]:
              - listitem [ref=e414]:
                - link "Accessibility" [ref=e415] [cursor=pointer]:
                  - /url: /accessibility/
              - listitem [ref=e416]:
                - link "Education" [ref=e417] [cursor=pointer]:
                  - /url: /education-initiative/
              - listitem [ref=e418]:
                - link "Environment" [ref=e419] [cursor=pointer]:
                  - /url: /environment/
              - listitem [ref=e420]:
                - link "Inclusion and Diversity" [ref=e421] [cursor=pointer]:
                  - /url: /diversity/
              - listitem [ref=e422]:
                - link "Privacy" [ref=e423] [cursor=pointer]:
                  - /url: /privacy/
              - listitem [ref=e424]:
                - link "Racial Equity and Justice" [ref=e425] [cursor=pointer]:
                  - /url: /racial-equity-justice-initiative/
              - listitem [ref=e426]:
                - link "Supply Chain Innovation" [ref=e427] [cursor=pointer]:
                  - /url: /supply-chain/
          - generic:
            - heading "About Apple" [level=3] [ref=e428]
            - list [ref=e430]:
              - listitem [ref=e431]:
                - link "Newsroom" [ref=e432] [cursor=pointer]:
                  - /url: /newsroom/
              - listitem [ref=e433]:
                - link "Apple Leadership" [ref=e434] [cursor=pointer]:
                  - /url: /leadership/
              - listitem [ref=e435]:
                - link "Career Opportunities" [ref=e436] [cursor=pointer]:
                  - /url: /careers/us/
              - listitem [ref=e437]:
                - link "Investors" [ref=e438] [cursor=pointer]:
                  - /url: https://investor.apple.com/
              - listitem [ref=e439]:
                - link "Ethics & Compliance" [ref=e440] [cursor=pointer]:
                  - /url: /compliance/
              - listitem [ref=e441]:
                - link "Events" [ref=e442] [cursor=pointer]:
                  - /url: /apple-events/
              - listitem [ref=e443]:
                - link "Contact Apple" [ref=e444] [cursor=pointer]:
                  - /url: /contact/
      - generic [ref=e445]:
        - generic [ref=e446]:
          - text: "More ways to shop:"
          - link "Find an Apple Store" [ref=e447] [cursor=pointer]:
            - /url: /retail/
          - text: or
          - link "other retailer" [ref=e448] [cursor=pointer]:
            - /url: https://locate.apple.com/
          - text: near you.
          - generic [ref=e449]:
            - text: Or call
            - link "1-800-MY-APPLE" [ref=e450] [cursor=pointer]:
              - /url: tel:1-800-692-7753
            - text: (1-800-692-7753).
        - generic [ref=e451]:
          - generic [ref=e452]:
            - generic [ref=e453]: Copyright © 2026 Apple Inc. All rights reserved.
            - list [ref=e454]:
              - listitem [ref=e455]:
                - link "Privacy Policy" [ref=e456] [cursor=pointer]:
                  - /url: /legal/privacy/
              - listitem [ref=e457]:
                - link "Terms of Use" [ref=e458] [cursor=pointer]:
                  - /url: /legal/internet-services/terms/site.html
              - listitem [ref=e459]:
                - link "Sales and Refunds" [ref=e460] [cursor=pointer]:
                  - /url: /us/shop/goto/help/sales_refunds
              - listitem [ref=e461]:
                - link "Legal" [ref=e462] [cursor=pointer]:
                  - /url: /legal/
              - listitem [ref=e463]:
                - link "Site Map" [ref=e464] [cursor=pointer]:
                  - /url: /sitemap/
          - link "United States. Choose your country or region" [ref=e466] [cursor=pointer]:
            - /url: /choose-country-region/
            - text: United States
```

# Test source

```ts
  188 |                 
  189 |                 <p>
  190 |                 <strong>Target:</strong>
  191 |                 ${node.target.join(', ')}
  192 |                 </p>
  193 |                 <p>
  194 |                 <strong>HTML Snippet:</strong>
  195 |                 </p>
  196 |                 <pre>
  197 |                 ${node.html
  198 |                     .replace(/</g, '&lt;')
  199 |                     .replace(/>/g, '&gt;')
  200 |                 }
  201 |                 </pre>
  202 |                 <p>
  203 |                 <strong>Failure Summary:</strong>
  204 |                 </p>
  205 |                 <pre>
  206 |                 ${node.failureSummary || 'N/A'}
  207 |                 </pre>
  208 |                 <p>
  209 |                 <strong>Issue Screenshot:</strong>
  210 |                 </p>
  211 |                 <p>
  212 |                 ${v.id}-${nodeIndex+1}.png
  213 |                 </p>
  214 |                 <p>
  215 |                 <strong>Actual Result:</strong>
  216 |                 </p>
  217 |                 <pre>
  218 |                 ${node.failureSummary || 'N/A'}
  219 |                 </pre>
  220 |                 <p>
  221 |                 <strong>Fix Recommendation:</strong>
  222 |                 </p>
  223 |                 <p>Review and follow the remediation guidance:</p>
  224 |                 <p>
  225 |                 ${v.helpURL}
  226 |                 </p>
  227 |                 `).join('')
  228 |             }
  229 |             <hr>            
  230 |             `;
  231 |         });
  232 |     }
  233 | 
  234 | });
  235 | htmlContent += `
  236 | </body>
  237 | </html>
  238 | `;
  239 | 
  240 | const totalViolations =
  241 | criticalCount +
  242 | seriousCount +
  243 | moderateCount +
  244 | minorCount;
  245 | 
  246 | let accessibilityScore =
  247 |  100 - (
  248 |     criticalCount * 10 +
  249 |     seriousCount * 5 +
  250 |     moderateCount * 2 +
  251 |     minorCount * 1
  252 |    );
  253 |     
  254 |     accessibilityScore =
  255 |     Math.max(accessibilityScore, 0);
  256 | 
  257 | const summarySection = `
  258 |    <h2>Accessibility Summary</h2>
  259 |     <p><strong>Report ID:</strong> ${reportId}</p>
  260 |     <p><strong>Application:</strong> ${applicationName}</p>
  261 |     <p><strong>Scan Date:</strong> ${scanDate}</p>
  262 |     <p><strong>Pages Scanned:</strong> ${pages.length}</p>
  263 |     <p><strong>Total Violations:</strong> ${totalViolations}</p>
  264 |     <p><strong>Critical:</strong> ${criticalCount}</p>
  265 |     <p><strong>Serious:</strong> ${seriousCount}</p>
  266 |     <p><strong>Moderate:</strong> ${moderateCount}</p>
  267 |     <p><strong>Minor:</strong> ${minorCount}</p>
  268 | 
  269 |     <p>
  270 |     <strong>Accessibility Score:</strong>
  271 |       ${accessibilityScore}%
  272 |     </p>
  273 | 
  274 |     <p>
  275 |       <strong>Status:</strong>
  276 |         ${
  277 |             criticalCount > 0 ||
  278 |             seriousCount > 0
  279 |             ? 'FAIL'
  280 |             : 'PASS'
  281 |         }
  282 |         </p>
  283 |         <hr>
  284 |     `;
  285 |       htmlContent = summarySection + htmlContent;
  286 |       fs.writeFileSync('a11y-report.html', htmlContent);
  287 |       if (totalCriticalOrSeriousIssues > 0) {
> 288 |         throw new Error(
      |               ^ Error: Accessibility Quality Gate Failed. Critical/Serious Issues Found: 2
  289 |             `Accessibility Quality Gate Failed. Critical/Serious Issues Found: ${totalCriticalOrSeriousIssues}`
  290 |         );
  291 |       }
  292 | 
  293 |     console.log("Accessibility Scan Started");
  294 |     console.log("Report Created Successfully");
  295 | 
  296 | }
  297 | );
```