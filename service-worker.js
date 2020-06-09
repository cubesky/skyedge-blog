/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2016/12/25/hello-friends/index.html","f687f43041c12a32bdc6e0eafe49c1b2"],["2016/12/26/xuetang-auto-time/index.html","54484347ff72c42fca98a321b2c5e24f"],["2016/12/26/zf-auto-tech-rate/index.html","834ddf3b03298292f8bbc55cdd664fb9"],["2016/12/27/project-my-screen-app/Project-My-Screen-1.png","1ef39212cd45595cc91f718dab07537c"],["2016/12/27/project-my-screen-app/index.html","53df52f4b22c876794aa591cab3541aa"],["2017/01/05/blog-update-1-2-5/index.html","d9f5acc3627e700a849dd991c2cc2f1e"],["2017/01/16/2017-first-snow/2017-First-Snow-1.jpg","9cc7dc9cca8233cf21b5f8ca3f21843b"],["2017/01/16/2017-first-snow/index.html","095ec2dc19abbf67bc94536d1edeb085"],["2017/01/21/docker-minecraft-server/Minecraft-With-Docker-Docker.svg","7a372f89efa294ade59ab75079dd35f0"],["2017/01/21/docker-minecraft-server/Minecraft-With-Docker-Forge.png","290614e1bd977fe14fb364a1afb0f064"],["2017/01/21/docker-minecraft-server/Minecraft-With-Docker-ForgeInstaller.png","73270f9a6c875d7e6b52d1eeaf16bf6d"],["2017/01/21/docker-minecraft-server/Minecraft-With-Docker-Minecraft.svg","74c8d665c483371f20ef379a0a23fc20"],["2017/01/21/docker-minecraft-server/Minecraft-With-Docker-Qrcode.jpg","189666d232b3b8e823637f572229a436"],["2017/01/21/docker-minecraft-server/index.html","7f4e44906fe17b0d36c54ef00406c23b"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-1.png","f1d7ef95522d8123940deeb984dc5ea2"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-10.png","8538f2000a35faa6531ffff3bd41e561"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-2.png","edf15f491fc62764691f41c917afc50b"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-3.png","7ea61f777e79e2d4d1aa2592ac598f88"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-4.png","6c135099403d8886aa424dbe70a096e9"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-5.png","3f73322fa7643329aedebe45f5a44231"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-6.png","28cf41fc8ce30ccc0d0615e31bcefa1a"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-7.png","eeb0cd409b0b1fea16ac457e33c98831"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-8.png","cce0ebeae12320b6e0e1568693900ad3"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-9.png","42d6bdd94d13bc6ff0e1b1ea8d6fde07"],["2017/01/31/zf-login-page-fix/index.html","1e298feffd39a81bd81ff11f049fed14"],["2017/02/11/thinking-2017-2-7/index.html","41df1f1067e93ec6984b1663092f5342"],["2017/02/20/new-index-page/index.html","4deabe2e3aef3fa8e39a320b7316983b"],["2017/02/24/blog-update-1-3-0/index.html","fc02249241aa2273b60d0a16174df33c"],["2017/02/24/join-into-nyaacat/index.html","92490696836ad4602de480c98788626a"],["2017/03/18/alpine-linux-setup/Alpine-Linux-1.png","d579df045218edd1ba295ed8997d0a85"],["2017/03/18/alpine-linux-setup/Alpine-Linux-2.png","3ad9681a9276197fbaab3c3bcb94aa79"],["2017/03/18/alpine-linux-setup/index.html","5a5e3408fc7c5548073c3175b1af7fc5"],["2017/03/19/linkchecker/index.html","029ba5205470b38d4a6babcd68bbac51"],["2017/03/22/qubesos/Qubes-1.png","1b519a6c55d8e6369558d5ec1a2f9ced"],["2017/03/22/qubesos/Qubes-2.png","a825929e73ac04f08bed8dea5a61ef0c"],["2017/03/22/qubesos/Qubes-3.png","e5bd609fe224a7c039debb0551fa5102"],["2017/03/22/qubesos/Qubes-4.png","29701f14f533448b2db2c3380df8dd9b"],["2017/03/22/qubesos/Qubes-5.png","846a37c97761cf19e0c890f9ee979653"],["2017/03/22/qubesos/index.html","20a73aa3d06643391c8115cc7283b5a4"],["2017/04/02/pgp/index.html","b4d8f475e2d735fa01dbbd038e63934b"],["2017/04/14/btrfs-crash/index.html","23288c98bb7796aabdbad0ac8d1cb5a2"],["2017/04/30/one-adobe-carsh-resolve/Crash-1.jpg","5fc7dfc34d92270584173e5bd95d854a"],["2017/04/30/one-adobe-carsh-resolve/Crash-2.jpg","99a2e1d164b2b13486698e2560df7d8c"],["2017/04/30/one-adobe-carsh-resolve/Crash-4.jpg","f0290dbf31895beb00408cf506dc2fed"],["2017/04/30/one-adobe-carsh-resolve/Crash-5.png","cea9775592152450f3c9a153c279ee3a"],["2017/04/30/one-adobe-carsh-resolve/index.html","9d0f0cc7fe7aff5aac8881bdf89c9aae"],["2017/05/09/qq-flash-photo-capture/index.html","c632e586996756476fe9ac38fc5bebdf"],["2017/05/09/qq-flash-photo-capture/qq-flash-capture-1.jpg","35e5f78517151457e356dfe06a88c755"],["2017/05/09/qq-flash-photo-capture/qq-flash-capture-2.png","bd6943e6e6590a0b30702b2b7eb3c490"],["2017/05/09/qq-flash-photo-capture/qq-flash-capture-3.png","282b442fbe69cabf0543c521ba4d120c"],["2017/05/09/qq-flash-photo-capture/qq-flash-capture-4.png","dcc067a92b808d704569188157e4f031"],["2017/05/09/qq-flash-photo-capture/qq-flash-capture-5.png","e89f94ebaa9584d875079a20760314a3"],["2017/05/09/qq-flash-photo-capture/qq-flash-capture-6.png","9ef43fad94d5cb28ecf4671c71c921fe"],["2017/05/25/letapkfly/index.html","a02b8e7267cd3bfaeacf2aa40ce4906d"],["2017/06/18/why-not-continue-use-eclipse-on-android-program/index.html","3aa207c10f07d22b84d8e6983182a56f"],["2017/07/02/oneplus5/Assistant.png","8d7d5edfa2b9570b1e181f5a0014e21c"],["2017/07/02/oneplus5/Battery1.jpg","39115cd11172e9ae2b04626c7d36506d"],["2017/07/02/oneplus5/Battery2.jpg","6688f3daf9e840739226687dd2467502"],["2017/07/02/oneplus5/Magisk.jpg","25066a340f3becdda3473d75aabc13f0"],["2017/07/02/oneplus5/MagiskHide.jpg","65a248b95eaa22c96b9e158cfa27d9ac"],["2017/07/02/oneplus5/MiPush.png","fcde84b0dc38a466c7ddd2f097a73f6b"],["2017/07/02/oneplus5/NowOnTap.jpg","ea572ec6ebf675d8857907060457be07"],["2017/07/02/oneplus5/activitylauncher.jpg","0e0609aead74bd3550050db63796da54"],["2017/07/02/oneplus5/bridge.jpg","cc6ceee5256d99b92c857fc013f7fbb9"],["2017/07/02/oneplus5/developer.jpg","79d717ac443aa0a17ad46e2d9f58af5c"],["2017/07/02/oneplus5/egg.jpg","64b75bada828632c277ccfe8e2f96fe8"],["2017/07/02/oneplus5/greenify.jpg","7c670fd5e21eae565de287b44cfda3cd"],["2017/07/02/oneplus5/index.html","a1321a0e7601327f6be6a418a88745b0"],["2017/07/02/oneplus5/island.jpg","9973474efcd37d926a228f3ae4a128f2"],["2017/07/11/buy-and-trans-jp/index.html","d74fac7947a60c150f5b775300a6a1f4"],["2017/09/15/lifbbs/index.html","94807f354c3e690ddbde73f34e05ae97"],["2017/09/29/unbox-alimooncake/all.jpg","755fc1501f48408dfacaf533a4e63813"],["2017/09/29/unbox-alimooncake/box-out.jpg","4be57e0f9ee7c925abb4ed7a41410dee"],["2017/09/29/unbox-alimooncake/box-together.jpg","36d50880f2432a3d22c015177393baa2"],["2017/09/29/unbox-alimooncake/box-zoomin.jpg","bd4a67856bd31d3fc5f4640ea52871aa"],["2017/09/29/unbox-alimooncake/index.html","c82b2608a017715da1def9412a6dde1b"],["2017/09/29/unbox-alimooncake/open-all.jpg","87744b866ce0be2ab6799c5839b81816"],["2017/09/29/unbox-alimooncake/open-left.jpg","039dc0f5aa4a296e13fa82ff459dd602"],["2017/09/29/unbox-alimooncake/open-mooncake.jpg","3375eee7411daabe58145c2911a7b7a6"],["2017/09/29/unbox-alimooncake/open-right.jpg","1cf03d0e3a15684f879712b0086cba0c"],["2017/09/29/unbox-alimooncake/unbox-self.jpg","bbb821e0c7e61c8daab409707f45aefc"],["2017/09/29/unbox-alimooncake/unbox.jpg","f5a16801f22b85512f6e36c19fc04a02"],["2017/11/18/bplayer/index.html","88a8472cac5514394b639419865ebeb1"],["2017/11/18/talk-2017-11/index.html","498571a7d5bc5507bff1769ae7d77c70"],["2017/11/29/android-optimize-app/index.html","aad3bf3fafe8f41eba4c63aa244c424a"],["2018/01/02/bye_2017_hello_2018/index.html","885b6a4d75403e3760a53c456365317b"],["2018/01/02/bye_2017_hello_2018/liyin.jpg","93511ae6f31039554649151cecf2075f"],["2018/04/19/blog-categories-sort/index.html","8645aba272eb104e74a73a58e667efef"],["2018/04/19/googleanalytic-dnt/DNT_Chrome.png","b29018d9a489b9fe982c5566c28a1786"],["2018/04/19/googleanalytic-dnt/DNT_FF.png","3288dbba8587a5be92616c9bb9cecba6"],["2018/04/19/googleanalytic-dnt/GTag.png","bfe2268449c12c03b7fbeb1cb47d1c34"],["2018/04/19/googleanalytic-dnt/GoogleAnalytics.png","2dbb3936bd769bae38e03454d7e5105d"],["2018/04/19/googleanalytic-dnt/index.html","aa172aa53dd1f96011067112f881f180"],["2018/05/02/use-ssr-on-gnu-linux/Tumbleweed.png","b3624ba8c14ab0b4b577980604cf206b"],["2018/05/02/use-ssr-on-gnu-linux/index.html","6f3668a5a6dffee96d0e6fcc6943cb5e"],["2018/05/02/use-ssr-on-gnu-linux/x220.png","e1dfd05e03ae8f60a0e143d68d5af277"],["2018/06/16/talk-2018-06/Table_1.png","5c36a292351acb432e96b9489e76d6a8"],["2018/06/16/talk-2018-06/index.html","94029e8a232adce3bef78ce1067e8134"],["2018/07/27/write-after-telegram-banned/index.html","5f890d2cf1b41bfabd32573bfe8a2625"],["2018/08/13/xinjiang-note/index.html","8496b8a3185f366858f06b0d39d622d9"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/connect.png","b4d02648c9740cc2e89c91a8687e2a43"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/final-1.jpg","13219aabc78e21c470fb67cef6a744ee"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/final-2.jpg","354fbc321d216fc4d2bed94c293b39be"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/i211.png","d6b11b75a7f82bdca715657446b54c91"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/index.html","ec02cb22fa0d93c3046f3dae3f1eac69"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/install.jpg","676611c6e84ddc8de42993f16be7a5e6"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/offlinedisk-1.png","96fbc233c770fae748a66d1c6c466f7c"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/offlinedisk-2.png","5fb334d7240711f4bd9e7176000477cb"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/prepareclient-1.png","d49206949ac207329c609b050595da0f"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/prepareclient-2.png","3ab971622c1da46ef5e71b4d904a3ecf"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/starsnail.jpg","68cb52e47e5f68f3df94dcec5a143ba4"],["2020/01/23/use-jupyter-with-wolfram-engine/index.html","f7e49e8fcfcf35758a5607f1e2ba8d59"],["2020/01/23/use-jupyter-with-wolfram-engine/jupyter.png","3f0b7ec15b91c99ba4855757e9597c13"],["2020/01/23/use-jupyter-with-wolfram-engine/wolfram.png","3424b16190236afdc9385142b2c4139b"],["2020/03/01/matrix-wechat-bridge/index.html","c7048bd42cce3fd0bbf151aa8d56b586"],["2020/03/16/use-remoteapp-host-on-non-windows-server/RemoteApp_Tool_Create.png","bb422a1144bbf1f2e91e4120828a8b55"],["2020/03/16/use-remoteapp-host-on-non-windows-server/RemoteApp_Tool_Main.png","0958ffa6fb0c30b45014f6a6955970e0"],["2020/03/16/use-remoteapp-host-on-non-windows-server/index.html","9785002dda8f082129d691bd49d2e4d7"],["2020/04/25/bilibili-360-video-in-vr/index.html","5447dbd0a54e0d1d59a3e4b27ed32988"],["about/index.html","88109ce6e72cd1f006ec4dc81784b9a2"],["amibafix/index.html","318d30b14a38d5d6cf4046f420a6f40e"],["archives/2016/12/index.html","c11b77e3f7250a7c043361f10ae515f1"],["archives/2016/index.html","8ed7805831143bff0e30039876603c73"],["archives/2017/01/index.html","5128ecb3e5924e6dd41bca94a5fc4b8e"],["archives/2017/02/index.html","ee069a5f50309eaae5557566f69e9c8a"],["archives/2017/03/index.html","87487fb6f14d5ec33c2b43d788284681"],["archives/2017/04/index.html","e45dd1cb099230951c4dbba3cc7742ba"],["archives/2017/05/index.html","d71b062a6e8b1d36f9bc8d860f8a714b"],["archives/2017/06/index.html","5f0aa109db22775dbb99bbdc8562485c"],["archives/2017/07/index.html","b16ddf674b642f38c2365c5d84b6bffe"],["archives/2017/09/index.html","7ea62cd4a48d687923c6e4951c069f81"],["archives/2017/11/index.html","de754cf8a3ce15ce14c9817fe8cedc7b"],["archives/2017/index.html","f1c37b3bc8492efddcea9bdfdcc94ea9"],["archives/2017/page/2/index.html","671ee0398920a2bf0a4e9851fb543182"],["archives/2017/page/3/index.html","e8e10c76b633f04f4a4c97f503afc924"],["archives/2018/01/index.html","825958d730d25258928faf74fe454860"],["archives/2018/04/index.html","f0df4acea23b81595e0d7c10f564d40e"],["archives/2018/05/index.html","5629440b152693b88e17ffbbc2b72c2f"],["archives/2018/06/index.html","c430cd2b0547dc1c5b0d1da5e66b4d95"],["archives/2018/07/index.html","f5c80e89fcefb6fe53d02580c72ffdd7"],["archives/2018/08/index.html","b0bb63fd721a57f4e76aeadaec4db743"],["archives/2018/index.html","f53fa3afd0504f93f9d1d0fb1afa91e9"],["archives/2019/05/index.html","5c4394b22fc05c796f6125ebf0b10845"],["archives/2019/index.html","c87c3da678fd7350fe5bf9a6195e5e48"],["archives/2020/01/index.html","a9864e6b811e79d9435fa377cffd8d3d"],["archives/2020/03/index.html","383dec6d109187238a4798c74a70988b"],["archives/2020/04/index.html","7bbd46fe02a799b5cd8d2771cfe5d7b8"],["archives/2020/index.html","e9029b6ed5182c9700bafd06831e4ad7"],["archives/index.html","e56208005eb8bc8e4456b8f3f08a25e9"],["archives/page/2/index.html","bfffe8423e0628c85e7956cb62ecdd4c"],["archives/page/3/index.html","7734d06de0e70245c6d0e850fdf1877b"],["archives/page/4/index.html","6b82aa9fa629ab23e5043dc1feeb237e"],["bangumi/index.html","d4e47063e60147ceaed1ce686dc6e6f3"],["categories/Javascipt-书签工具/index.html","780ef49e44c1138fcebd14631a7e7c41"],["categories/崩溃/index.html","cdd6dd1b7a15c438b5dd2b3f13f1ecfe"],["categories/开箱/index.html","ca7dd3b31f616317e40eba64b9edcc7c"],["categories/技术栈/index.html","d4e094a54a0269c96a6cb213b4b6b8db"],["categories/技术栈/page/2/index.html","c7ff1a306a871b5930c5d1988f762bd5"],["categories/推广推荐/index.html","ce4acebf89a71b2b4196896b4169f9fb"],["categories/购物/index.html","5c54df2878e771266cef01d56b487008"],["categories/闲聊/index.html","9c6977f8135e3b933b97bd8f3422f45b"],["categories/闲聊/page/2/index.html","7feece3fe2d22725d11281be75523039"],["categories/隐私/index.html","90cdc7dca2c2fec293df7ba9cf500c3c"],["class/index.html","3ece2fecb4aa064d2ee7184861e8b5d9"],["creativecommons/index.html","60019fb2ddd1e93fcc14a7af80ad0b48"],["css/disqus-proxy.css","87976db321c1c288aa3d9d4af06c8ad8"],["css/disqus-proxy.min.css","caa38dd245e9da4c20580c256e540bd6"],["css/duoshuo.css","bdd8f7eb0dd14fc7e719cab11e685a9e"],["css/duoshuo.min.css","6457d80daef45eca1f7399b2329b1dc2"],["css/fontawesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["css/gallery.min.css","a62dc56ec5981c978cddcba32f2dc875"],["css/ie-blocker.css","4c323bd282014d64264bad241f1c14d3"],["css/material-icons.css","a6a841fd177f69bd07dbe919a744439b"],["css/material.css","f65ff1c879db0e257bd7d9521f0eaa57"],["css/material.min.css","67b6bbd91d44e12c7304a47f58672d38"],["css/prettify.css","074dc30ad95ce2f227848a2c38bc7fbd"],["css/prettify.min.css","ce9f124ce53dbfcf5758512737ee9899"],["css/prettify/atelier-cave-dark.min.css","78d9bbfc7d0f526727e9da749cd08a44"],["css/prettify/atelier-cave-light.min.css","e4c2bf4caff36e974733bae61be7a10b"],["css/prettify/atelier-dune-dark.min.css","4aafbf8ec70b42c2b7964aa2b347bf68"],["css/prettify/atelier-dune-light.min.css","65f9c4494342967919044e847347634c"],["css/prettify/atelier-estuary-dark.min.css","79f259a7e1a0ab58772d339f97c53bf7"],["css/prettify/atelier-estuary-light.min.css","65039bc195c71fa32df0c35bc902587d"],["css/prettify/atelier-forest-dark.min.css","cbc537385cc8ab19748f9d4160a1e46c"],["css/prettify/atelier-forest-light.min.css","1dda1f8f21aeedbe0fb68caf55c615e0"],["css/prettify/atelier-heath-dark.min.css","b52d843659b13491b555f324bebfe9e8"],["css/prettify/atelier-heath-light.min.css","0d999c502c821f1b761ad772d7301067"],["css/prettify/atelier-lakeside-dark.min.css","f48fd98ed8f7ed8aa59fb57c87247b23"],["css/prettify/atelier-lakeside-light.min.css","bc790feb4057204347c45ea551d0d784"],["css/prettify/atelier-plateau-dark.min.css","e81b69c147a9ffbd298dccdaf02a810f"],["css/prettify/atelier-plateau-light.min.css","ad2d0ed869dc8142306110f8b7fa9035"],["css/prettify/atelier-savanna-dark.min.css","b3a404d78c50fbe9968d0d4dac123484"],["css/prettify/atelier-savanna-light.min.css","7d4087bd0552352c12ee3dd8f397db75"],["css/prettify/atelier-seaside-dark.min.css","10a0183644bd5c369616f0b94298c8f5"],["css/prettify/atelier-seaside-light.min.css","6fbd6de95fcd79393de5fbb4e7a3dac7"],["css/prettify/atelier-sulphurpool-dark.min.css","be693407f25090368983c17ad1fe1dca"],["css/prettify/atelier-sulphurpool-light.min.css","fcd7ecab5bfa792ac082257e73f08abd"],["css/prettify/github-v2.min.css","01fccac6dfbe2befe58590654a39f1c2"],["css/prettify/github.min.css","dab580bb047648b053d1546fe31e1215"],["css/prettify/hemisu-dark.min.css","7095b0461d4cf22e7935f0e447807c6d"],["css/prettify/hemisu-light.min.css","54e6d654c095a946b257a243ffd5f3f7"],["css/prettify/tomorrow-night-blue.min.css","2733cdcd81e2ca4e8d6598b2237c2eef"],["css/prettify/tomorrow-night-bright.min.css","f15804e96aa1b47d36233c5b02732f28"],["css/prettify/tomorrow-night-eighties.min.css","d8b250cd444ef8aafcaff7e5fd3f2830"],["css/prettify/tomorrow-night.min.css","4259c6664fdae3e77c5dbc2d5c10cf88"],["css/prettify/tomorrow.min.css","1c8792425eb2dedea306ec47bcb3c648"],["css/prettify/tranquil-heart.min.css","ba5de9f48f4cb1b3b12b42fe047cc30e"],["css/prettify/vibrant-ink.min.css","7b913faaa19c1af792ed54c7e0cf3deb"],["css/prism-line-numbers.css","0564af490a8f693fd09dd696e9734a8f"],["css/prism.css","12172c9e0b25e59e8e925b84065c78f0"],["css/style.css","d076c234da67bef747946e096fcd155b"],["css/style.min.css","34a865290917c3f73ae93479a78c0efb"],["css/uc.css","31dc264064481a02fb48046046a76084"],["fonts/MaterialIcons-Regular.eot","e79bfd88537def476913f3ed52f4f4b3"],["fonts/MaterialIcons-Regular.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["fonts/MaterialIcons-Regular.woff","012cf6a10129e2275d79d6adac7f3b02"],["fonts/Roboto-Black.ttf","4dae2e3c6207a71de6b078b879230062"],["fonts/Roboto-Bold.ttf","a68db3b33213fa138e6f72a5b76ac632"],["fonts/Roboto-Light.ttf","8d252992868e895b059335848dec3402"],["fonts/Roboto-Medium.ttf","989d2dff37a09f19c6dbc6f0e8f9b4ea"],["fonts/Roboto-Regular.ttf","8f793587dcf03f31c551c5b60d175fc2"],["fonts/Roboto-Thin.ttf","21c61396b4bea54e7308a7cda49edbe0"],["fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["img/avatar.png","0acf37b762876c3999bb712819ef0fe3"],["img/bg.png","4491b5e3d2320fb530a6ecf4a3d27e9b"],["img/browserstack_logo.png","9901607d552cbf936a8c86e6f206aa47"],["img/daily_pic.png","8655723de1bfb93de6290938f18cb8a0"],["img/favicon.png","7a80435df04b3eb691b8f172f09a8473"],["img/footer/footer_ico-bilibili.svg","d67fcd7d1fa5999e9a785b2dfaa39f2c"],["img/footer/footer_ico-facebook.svg","64c580c2986d6f16d04b1c4d3b896fd2"],["img/footer/footer_ico-github.svg","4b3dc07ff72cee5be0eff6a100a354cd"],["img/footer/footer_ico-gplus.svg","7d75444af4019d5612e2005ab501eca5"],["img/footer/footer_ico-instagram.svg","c8eaf1f2fe5f4d9a7b26f2981d6f14ed"],["img/footer/footer_ico-linkedin.svg","5e4c53b53c9d59880c6e483d57309a6a"],["img/footer/footer_ico-segmentfault.svg","dbf66b5f0165802dc698eec23e147967"],["img/footer/footer_ico-telegram.svg","50e65465cc40292f7101255daed7c593"],["img/footer/footer_ico-tumblr.svg","b127eb5d3e455ba8794ddc4d060df5bc"],["img/footer/footer_ico-twitter.svg","90ff42c9e275a7cd7ca5bf4291c93961"],["img/footer/footer_ico-v2ex.svg","3500b18a911b661a2b379b36b39def20"],["img/footer/footer_ico-weibo.svg","f1f6375680122267b9ebfc3b546307e8"],["img/footer/footer_ico-zhihu.svg","39538ba6607a9dcadf6d4dca35b687b8"],["img/gallery/arrow.svg","f3f776676f3b78b5180c9d2e08c2d532"],["img/gallery/close.svg","181336ad0bd48cdde68d7fb8be304daf"],["img/gallery/spinner.svg","2a61c8efd2d72146d79a2f6692840a85"],["img/logo.png","7a80435df04b3eb691b8f172f09a8473"],["img/random/material-1.png","0c4e486759ad62e3415f8f197f0311f7"],["img/random/material-10.png","2263d9d1cc9b0724e6331374c33f988b"],["img/random/material-11.png","41127baf9a286e968a63653dee50ba21"],["img/random/material-12.png","2507dbe92186b0b39df6331347aa2c27"],["img/random/material-13.png","5d127887b6d043259f7e2fb99cd08175"],["img/random/material-14.png","84c21a53679bddbe415fdae1d3c02163"],["img/random/material-15.png","ec116546453394cc0d78e580d6d52dd5"],["img/random/material-16.png","39a5dca2dc2de60bd5dd191f205db7d6"],["img/random/material-17.png","30a855e361dcf170aecdce04ce564c68"],["img/random/material-18.png","584900ff821930a8b093b4c0a58be34b"],["img/random/material-19.png","c004830c8683856939dc83b75b230b66"],["img/random/material-2.png","fa4f4588b9fab07979acd61b94d34fa0"],["img/random/material-3.png","418c3457b6792eb732844d41d2501294"],["img/random/material-4.png","99898b727359e568759eebbb2c9e4a8b"],["img/random/material-5.png","e521776cb427f848546e20d784888a55"],["img/random/material-6.png","db810792edf3d40de5baf5401a9a0626"],["img/random/material-7.png","d7e9fe3e0e3db6b841ab12fad331daed"],["img/random/material-8.png","9f1914138052c3a631e1f2b2cf674a46"],["img/random/material-9.png","069b687b7f1069254c816a56317bfaad"],["img/sidebar_header.png","0ac2232bb0756d0d4e5f04875b443217"],["img/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["index.html","62e70bb69e9fa8ad2d2efed5b60e3c9e"],["js/MathJax.js","1bef8ba3b323e77cd264bfc09662ae1e"],["js/Valine.min.js","c640924dc2c3508b1a1c8f3ab726f3fa"],["js/gallery/gallery.js","54dbd709efe8893194901af3fce1379d"],["js/hanabi-browser-bundle.js","3e48b9fa9ce496eaaee7783ea2e316a4"],["js/ie-blocker.en.js","eb054767893aa2f8e981be25c4221415"],["js/ie-blocker.zhCN.js","861699947bcd571f62d6dc10f1c43be0"],["js/jquery.min.js","a9cbac0142cd78192ca9f7ea50cdbe22"],["js/js.js","d69f3cf073c561b1820bbdd62b60bb06"],["js/js.min.js","067f54cc49bc46b052c6ac99074ccf8c"],["js/lazyload.min.js","d4171fcee357a95fa7b45ea0abee57dd"],["js/lsloader.js","d01962f06751b296c985a8fee73019f8"],["js/lsloader.min.js","fdef13cf99a299ae566d65ab828cdc19"],["js/nprogress.js","a65dd085bf65bea475165c8b5276b563"],["js/prettify.min.js","58dd3b7e2bc741230a5b2ec1987041eb"],["js/queue.js","3ef240fa4fc55888e5e234e48f23fc95"],["js/queue.min.js","1677e3c59497558a9f53b73b726dedc6"],["js/smoothscroll.js","94ecbf0028f9b2e48d8bb6551556e915"],["links/index.html","5039662d22cd5ec52841f76e21d3f54f"],["live/index.html","5963faaafa92f12bc54551cafcd7f37d"],["myfiles/css/bootstrap_liyin.css","c94f41110432c5f63d6c0f411a9e19fd"],["myfiles/images/PWA/logo072.png","b6d0bd5d5eaed02bcaa097480262845e"],["myfiles/images/PWA/logo192.png","09a7f9105942ce2044344dcd648e7a05"],["myfiles/images/PWA/logo256.png","14ccbe0f4e7b75637c2f0583c8fc7291"],["myfiles/images/PWA/logo512.png","00de9954c985fef8b32ceeb019540124"],["myfiles/images/amiba/1.png","c09704d708191afd6275dffe00cb7587"],["myfiles/images/amiba/2.png","159fc61f7ff373bd4576627e10fb8a31"],["myfiles/images/amiba/3.png","f78e34ab0895352447605c75b3698b49"],["myfiles/images/amiba/4.jpg","88d64ce70de4a083c6ea0e7b9abe81d3"],["myfiles/images/avatar.min.png","09ee02a1b11537dd400b4297ff4b1b14"],["myfiles/images/avatar.png","d0e54c14dde6f12438910ea0fe2ab4fb"],["myfiles/images/cachemoment.svg","200e6d663a4bea67a6d0f4a85bf18932"],["myfiles/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["myfiles/images/daily_pic.jpg","aa8f648f4b2bd0d3b4fb6f1a1dfe1d77"],["myfiles/images/favicon.png","7d0e50ede2f4bebc87b59f94ece9f08f"],["myfiles/images/logo.min.png","79888a29f8d834256191077e218d9e96"],["myfiles/images/logo.png","c49cd5fd22e38b63292740ab0f5071c4"],["myfiles/javascriptbookmark/pjjsblet.js","4190a415871256ca7dc0facdf36f4246"],["myfiles/js/combined.js","d784fa8b6d98d27699781bd9a7cf19f0"],["myfiles/js/hmthelper.js","5b4615653b79f4bb2008524b60dac42a"],["myfiles/js/linkChecker/linkChecker.js","3774991471d73b50382facffc1825cd5"],["myfiles/js/linkChecker/main.js","03c69efec85a158067f49159f063eb00"],["myfiles/js/links/links.js","822910dde8f26de60893cd1582e93df8"],["myfiles/js/links/main.js","db6004771eb64c707c9c9185db71e03d"],["myfiles/js/menufix/main.js","1e5baa37aa73581f339e1d9f43a85fc8"],["myfiles/js/menufix/menufix.js","bf0136593dbca4111775a7af608951de"],["myfiles/js/nomirror.js","ec8461064e2ce285ef3b45a008f30e58"],["myfiles/js/yiyan/dependency/jquery.noty.packaged.min.js","e064d6a7566edc482527936efff5fc67"],["myfiles/js/yiyan/main.js","68989e5dab463c6c9cfa9bf564912166"],["myfiles/js/yiyan/yiyan.js","8697b87414674b45cd9c7165d6842fcb"],["myfiles/links/avatar-KeJun.png","4728ef21c49df76c6a4bb9e552fd10c5"],["myfiles/links/avatar-Marnger.jpg","30037cf1e0a8688c5ddc3a3bd49f9f2e"],["myfiles/links/avatar-Vigorous.png","386a122b977449fc4cf441309fc4e8fe"],["myfiles/links/avatar-ccooss.jpg","575e68a76914b5ab4c20ee453a423607"],["myfiles/links/avatar-halyul.png","1f96e22e0f849d6d578872a11c115e05"],["myfiles/links/avatar-iVanilla.jpg","d781159043acbe0b37eac2a3dffd33ad"],["myfiles/links/avatar-imeto.jpg","088db10a843e02f779924b114f6adbee"],["myfiles/links/avatar-imiku.png","aa44885c8abb51241162087b9c829902"],["myfiles/links/avatar-kookxiang.jpg","e656a6b1751048375d6fe1401950fa43"],["myfiles/links/avatar-luo.jpg","d4b9e25bd739561c8eb92961fcd0b64e"],["myfiles/links/avatar-lwl12.jpg","f1f019d67b3c516753ad3caef01585a9"],["myfiles/links/avatar-nekolines.jpg","ffae6c96344109b1d239cb096b144e0a"],["myfiles/links/avatar-pdc.jpg","5666c1b01d95e602f2a4db04c47ee3c6"],["myfiles/links/avatar-petercxy.jpg","95d517ae2b9c2420787b4fdbe17d2e97"],["myfiles/links/avatar-troy.jpg","0346ecfe9e528cdbf63b4afbcf2eff88"],["myfiles/links/avatar-yashi.png","8ac30256764a0cf85893fc147c5204b9"],["myfiles/links/avatar-yiyangwang.jpg","be83908f1ef6ee24af4575adb881ff33"],["myfiles/links/avatar-yukari.png","87de1cc70e12d6afd4875bd04d7a2cc5"],["myfiles/links/avatar-zhaoj.png","00c54730ebaa749bc3af1f13b5c5baa5"],["myfiles/thumbnail/Alpine-Linux-折腾记.png","7e8fece2fef24a5970eaa88bad24f746"],["myfiles/thumbnail/An-Adobe-Crash.png","c2bc5ce88fb1b6951db0046735c7db8d"],["myfiles/thumbnail/Project-My-Screen-App.jpg","81f43d89dfd18b7ecc15001be2cbc1a3"],["myfiles/thumbnail/QQ-Flash-Capture.png","1763b461d41f8850d9f5e3f0c4784417"],["myfiles/thumbnail/ZF-Loginpage-Fix.png","f1d7ef95522d8123940deeb984dc5ea2"],["myfiles/thumbnail/slogan-.png","fdabbd2f38a7599ca5ca012b97ae33d3"],["myfiles/thumbnail/slogan.png","0e4278c5c78ddcf335c3564b1694fdb4"],["myfiles/thumbnail/加入了喵窝.png","51e35b91a8362e27085e3bc5cf49c5cc"],["myfiles/thumbnail/学堂在线自动刷视频时间.png","23b5609d4294f645e5e17afdec5c3a90"],["myfiles/thumbnail/正方教务系统自动教学评价.png","775c5546755531577d94bde3c870d904"],["myfiles/userjs/AutoXuetangx.user.js","86a3c0efe1e5c64fdc985be9b7e995e7"],["myfiles/userjs/FixZFLoginpage.user.js","67dbdf3321eca739036ad201eb1f249a"],["page/2/index.html","f707c82e7202ae8c8e8834be46e61a04"],["page/3/index.html","7381bc5d68ebe6f4f1bccdb742023586"],["page/4/index.html","25e58f87bc16c729c56668ef494fa8b2"],["skyedge/index.html","49e6b55897e2ae1fab50062eb43bd52a"],["slogan/index.html","630458bacc67ca17cdf78461a5851e81"],["tags/Adobe/index.html","66c3e60437314a6654fe6027c6d256df"],["tags/Android/index.html","99d816814bc4fec3a4b154c7107acc8d"],["tags/Bilibili/index.html","e730adcea3b2f517f7ab08c4b98da5bb"],["tags/CaaS/index.html","cb9ae97c26eb8c0e7b1170c5ecbee757"],["tags/DNT/index.html","54357564d9016d3261e28aed89c7e0c7"],["tags/Do-Not-Track/index.html","ec51d14a6b1455fd2fac3844d8588ba5"],["tags/Docker/index.html","abf79c297842cd705287699d716401cd"],["tags/GTag/index.html","ba4853780ecfa8d1162f9f197178b849"],["tags/Google-Analytics/index.html","27ff33abcd804a3f23f37c581c3cfe7e"],["tags/Javascript/index.html","9ee622698edc933e7cefc856a903b228"],["tags/Jupyter/index.html","3eb4d4fb331e0f3b654f759ac43129e4"],["tags/Linux/index.html","99f5a8c1a4185fe438b96702a2f181a4"],["tags/Lumia/index.html","970720e72aa913483d8a40409bbca822"],["tags/Matrix/index.html","1c6754b1a4eec94d29594fab2efef905"],["tags/Minecraft/index.html","c3582e7fed733f7ef59e546f8babe423"],["tags/OnePlus5/index.html","a7dd95ac385cdcc15b24c8debbf9ce88"],["tags/PGP/index.html","c25e4a39863f230626639d46609f5f12"],["tags/Python/index.html","452599510b8b6e5c6d0c45fdc6cd34bc"],["tags/RDP/index.html","455ec20e98e25294d83298270e175d93"],["tags/RemoteApp/index.html","451d8ef42e27da477a0ce7af7acafeaf"],["tags/SSR/index.html","96ea22e6cdadcdb08da2c2c34e48e8c6"],["tags/VR/index.html","e5c00c1de100401ef017799755e40052"],["tags/Wechaty/index.html","e652d8d154016be5a8d204a6fde06de4"],["tags/WindowServer/index.html","7a25eb470dd5b01272936fdc68efcbf4"],["tags/Windows-Phone/index.html","358ee6cbbc169d05b0cd4bf2f92ea71e"],["tags/Windows/index.html","43cfbbdc5082e99579866d949b645fd4"],["tags/Wolfram/index.html","d53588f813de2c00faf4fd73b2dd3f2a"],["tags/bPlayer/index.html","34d2dabbbbd25f66e5afcd54df7cdcdb"],["tags/btrfs/index.html","fab9178ba3bffdf0a0126a38b2a35ece"],["tags/hexo-material-theme/index.html","2e4fcded91f9891dedbc04590542c27a"],["tags/index.html","8a1a54dbac86559a02faeeda87a54483"],["tags/一加5/index.html","8688467e65c0ae1b1baac3cd214a3ee3"],["tags/主题/index.html","73247ed8a34bbccaae7fbee8d84a93c5"],["tags/云/index.html","4ae361bd17e52f0967ca4ed80abbfcce"],["tags/优化/index.html","3696cb9fd11270c3f692ba6be44910b3"],["tags/千锋/index.html","34b2824be3451d463266cc81d4a07af2"],["tags/博客/index.html","80b797968d12a425fe9b65c6ea0788bc"],["tags/喵窝/index.html","43c8066744a559f758c699d42d610389"],["tags/安全/index.html","a8fa947bc29677f9a715425da63e2b76"],["tags/屏幕同步/index.html","b0124e9860f012bc87d8ce483661c36b"],["tags/崩溃/index.html","24071ad2b1fe4369dddded8da2e668aa"],["tags/工作/index.html","0e9e97a468efc9eca898cbb9d39e87ca"],["tags/开箱/index.html","b407ed9d04eafa75d511bc0971b3b5ca"],["tags/微信/index.html","5aabb2d94e7dcabfca5e8bfe294fd30a"],["tags/总结/index.html","8764caaa208a49a613fb0545f783bbf8"],["tags/折腾/index.html","ad365fff0b6ee79c3e435bd47034cf5d"],["tags/正方教务/index.html","aeba756a8a0bfbc52c55dff0e34a23f3"],["tags/毕设/index.html","06245e9e6fd45cb9f6f12716a84da384"],["tags/游记/index.html","49150fd7dbce45ee1471df630745dd16"],["tags/瞎想/index.html","dc4370fbd96250e3eb9b35ec3a7f368f"],["tags/购物/index.html","f7784d728a70d79ea2b6d7f869741918"],["tags/转运/index.html","bcf220cfcabf1f210da1b9bff780a93f"],["tags/闲聊/index.html","55f112879afd98b268287b4852ba1b5f"],["tags/阿里/index.html","a65a9f6890d81decfc7ab89ead2f11f7"],["timeline/index.html","07796435518d8f6a644224db1eebaa24"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







