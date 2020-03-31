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

var precacheConfig = [["2016/12/25/hello-friends/index.html","bef9b938d3ca924008393d8d6ab81041"],["2016/12/26/xuetang-auto-time/index.html","1beafc80ca594b7c148b3b09e32c008d"],["2016/12/26/zf-auto-tech-rate/index.html","a4953ab54a10b2d907fb4c5cf12502a1"],["2016/12/27/project-my-screen-app/Project-My-Screen-1.png","1ef39212cd45595cc91f718dab07537c"],["2016/12/27/project-my-screen-app/index.html","6ca86892d3d2f0eb48b8466f9342ce04"],["2017/01/05/blog-update-1-2-5/index.html","b559f5b553ce1951217364911d9dba3b"],["2017/01/16/2017-first-snow/2017-First-Snow-1.jpg","9cc7dc9cca8233cf21b5f8ca3f21843b"],["2017/01/16/2017-first-snow/index.html","d5b69ba4d1640a62511f46037e13ce0f"],["2017/01/21/docker-minecraft-server/Minecraft-With-Docker-Docker.svg","7a372f89efa294ade59ab75079dd35f0"],["2017/01/21/docker-minecraft-server/Minecraft-With-Docker-Forge.png","290614e1bd977fe14fb364a1afb0f064"],["2017/01/21/docker-minecraft-server/Minecraft-With-Docker-ForgeInstaller.png","73270f9a6c875d7e6b52d1eeaf16bf6d"],["2017/01/21/docker-minecraft-server/Minecraft-With-Docker-Minecraft.svg","74c8d665c483371f20ef379a0a23fc20"],["2017/01/21/docker-minecraft-server/Minecraft-With-Docker-Qrcode.jpg","189666d232b3b8e823637f572229a436"],["2017/01/21/docker-minecraft-server/index.html","0a50555c55453b523b5217070a5cdd03"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-1.png","f1d7ef95522d8123940deeb984dc5ea2"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-10.png","8538f2000a35faa6531ffff3bd41e561"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-2.png","edf15f491fc62764691f41c917afc50b"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-3.png","7ea61f777e79e2d4d1aa2592ac598f88"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-4.png","6c135099403d8886aa424dbe70a096e9"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-5.png","3f73322fa7643329aedebe45f5a44231"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-6.png","28cf41fc8ce30ccc0d0615e31bcefa1a"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-7.png","eeb0cd409b0b1fea16ac457e33c98831"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-8.png","cce0ebeae12320b6e0e1568693900ad3"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-9.png","42d6bdd94d13bc6ff0e1b1ea8d6fde07"],["2017/01/31/zf-login-page-fix/index.html","cd647e93c977a7174d81a5bb54262fe9"],["2017/02/11/thinking-2017-2-7/index.html","c8fdb0fa9f26fd37fdd9813726b719d5"],["2017/02/20/new-index-page/index.html","14c01562ac583a86d738c27b70a3bfd3"],["2017/02/24/blog-update-1-3-0/index.html","d8645fc9ffc596053fdacdcc653a524a"],["2017/02/24/join-into-nyaacat/index.html","893f289adfd161f55d7bebe3a1f670a9"],["2017/03/18/alpine-linux-setup/Alpine-Linux-1.png","d579df045218edd1ba295ed8997d0a85"],["2017/03/18/alpine-linux-setup/Alpine-Linux-2.png","3ad9681a9276197fbaab3c3bcb94aa79"],["2017/03/18/alpine-linux-setup/index.html","c026dc466951d563506affcbe589503b"],["2017/03/19/linkchecker/index.html","a023cf2f307e75f897583b37d3d5a801"],["2017/03/22/qubesos/Qubes-1.png","1b519a6c55d8e6369558d5ec1a2f9ced"],["2017/03/22/qubesos/Qubes-2.png","a825929e73ac04f08bed8dea5a61ef0c"],["2017/03/22/qubesos/Qubes-3.png","e5bd609fe224a7c039debb0551fa5102"],["2017/03/22/qubesos/Qubes-4.png","29701f14f533448b2db2c3380df8dd9b"],["2017/03/22/qubesos/Qubes-5.png","846a37c97761cf19e0c890f9ee979653"],["2017/03/22/qubesos/index.html","56ee70a536ca84072b3bf0984c89ed95"],["2017/04/02/pgp/index.html","b22f874a9f7aee41b5b867846f20e746"],["2017/04/14/btrfs-crash/index.html","b8ed7a1a7522d6b0a3c374fd5b0f870f"],["2017/04/30/one-adobe-carsh-resolve/Crash-1.jpg","5fc7dfc34d92270584173e5bd95d854a"],["2017/04/30/one-adobe-carsh-resolve/Crash-2.jpg","99a2e1d164b2b13486698e2560df7d8c"],["2017/04/30/one-adobe-carsh-resolve/Crash-4.jpg","f0290dbf31895beb00408cf506dc2fed"],["2017/04/30/one-adobe-carsh-resolve/Crash-5.png","cea9775592152450f3c9a153c279ee3a"],["2017/04/30/one-adobe-carsh-resolve/index.html","a5130a266f22cb9c0e22b2b7e2b09c25"],["2017/05/09/qq-flash-photo-capture/index.html","8940a58fc0c940308e162ab3ebffa2d7"],["2017/05/09/qq-flash-photo-capture/qq-flash-capture-1.jpg","35e5f78517151457e356dfe06a88c755"],["2017/05/09/qq-flash-photo-capture/qq-flash-capture-2.png","bd6943e6e6590a0b30702b2b7eb3c490"],["2017/05/09/qq-flash-photo-capture/qq-flash-capture-3.png","282b442fbe69cabf0543c521ba4d120c"],["2017/05/09/qq-flash-photo-capture/qq-flash-capture-4.png","dcc067a92b808d704569188157e4f031"],["2017/05/09/qq-flash-photo-capture/qq-flash-capture-5.png","e89f94ebaa9584d875079a20760314a3"],["2017/05/09/qq-flash-photo-capture/qq-flash-capture-6.png","9ef43fad94d5cb28ecf4671c71c921fe"],["2017/05/25/letapkfly/index.html","d81471b832f665084b6abe758bf372e1"],["2017/06/18/why-not-continue-use-eclipse-on-android-program/index.html","9380cc96ee57d61d924a6717e9beb545"],["2017/07/02/oneplus5/Assistant.png","8d7d5edfa2b9570b1e181f5a0014e21c"],["2017/07/02/oneplus5/Battery1.jpg","39115cd11172e9ae2b04626c7d36506d"],["2017/07/02/oneplus5/Battery2.jpg","6688f3daf9e840739226687dd2467502"],["2017/07/02/oneplus5/Magisk.jpg","25066a340f3becdda3473d75aabc13f0"],["2017/07/02/oneplus5/MagiskHide.jpg","65a248b95eaa22c96b9e158cfa27d9ac"],["2017/07/02/oneplus5/MiPush.png","fcde84b0dc38a466c7ddd2f097a73f6b"],["2017/07/02/oneplus5/NowOnTap.jpg","ea572ec6ebf675d8857907060457be07"],["2017/07/02/oneplus5/activitylauncher.jpg","0e0609aead74bd3550050db63796da54"],["2017/07/02/oneplus5/bridge.jpg","cc6ceee5256d99b92c857fc013f7fbb9"],["2017/07/02/oneplus5/developer.jpg","79d717ac443aa0a17ad46e2d9f58af5c"],["2017/07/02/oneplus5/egg.jpg","64b75bada828632c277ccfe8e2f96fe8"],["2017/07/02/oneplus5/greenify.jpg","7c670fd5e21eae565de287b44cfda3cd"],["2017/07/02/oneplus5/index.html","f756fe9e1284f57442360edf3282f216"],["2017/07/02/oneplus5/island.jpg","9973474efcd37d926a228f3ae4a128f2"],["2017/07/11/buy-and-trans-jp/index.html","f893bbeabb5a9b41c844bc480b045cf0"],["2017/09/15/lifbbs/index.html","74ae573d431f176d1c78b86076f109c1"],["2017/09/29/unbox-alimooncake/all.jpg","755fc1501f48408dfacaf533a4e63813"],["2017/09/29/unbox-alimooncake/box-out.jpg","4be57e0f9ee7c925abb4ed7a41410dee"],["2017/09/29/unbox-alimooncake/box-together.jpg","36d50880f2432a3d22c015177393baa2"],["2017/09/29/unbox-alimooncake/box-zoomin.jpg","bd4a67856bd31d3fc5f4640ea52871aa"],["2017/09/29/unbox-alimooncake/index.html","1a9f27f30b0408ffbdbe661f8954d76d"],["2017/09/29/unbox-alimooncake/open-all.jpg","87744b866ce0be2ab6799c5839b81816"],["2017/09/29/unbox-alimooncake/open-left.jpg","039dc0f5aa4a296e13fa82ff459dd602"],["2017/09/29/unbox-alimooncake/open-mooncake.jpg","3375eee7411daabe58145c2911a7b7a6"],["2017/09/29/unbox-alimooncake/open-right.jpg","1cf03d0e3a15684f879712b0086cba0c"],["2017/09/29/unbox-alimooncake/unbox-self.jpg","bbb821e0c7e61c8daab409707f45aefc"],["2017/09/29/unbox-alimooncake/unbox.jpg","f5a16801f22b85512f6e36c19fc04a02"],["2017/11/18/bplayer/index.html","ffefa24b330bb8a6d4e80157b023dd1e"],["2017/11/18/talk-2017-11/index.html","2cc0cc92f95abd49e00900b242a270c8"],["2017/11/29/android-optimize-app/index.html","33af76bfa51145ec9b5823d2dcb7e058"],["2018/01/02/bye_2017_hello_2018/index.html","48b8c45a746a2f6c37bdf4f848f2a2f9"],["2018/01/02/bye_2017_hello_2018/liyin.jpg","93511ae6f31039554649151cecf2075f"],["2018/04/19/blog-categories-sort/index.html","7249ecbec3a1ee05b1e5752fe2fcfdd7"],["2018/04/19/googleanalytic-dnt/DNT_Chrome.png","b29018d9a489b9fe982c5566c28a1786"],["2018/04/19/googleanalytic-dnt/DNT_FF.png","3288dbba8587a5be92616c9bb9cecba6"],["2018/04/19/googleanalytic-dnt/GTag.png","bfe2268449c12c03b7fbeb1cb47d1c34"],["2018/04/19/googleanalytic-dnt/GoogleAnalytics.png","2dbb3936bd769bae38e03454d7e5105d"],["2018/04/19/googleanalytic-dnt/index.html","5ca626d91c4387fbe8cef494432a5c36"],["2018/05/02/use-ssr-on-gnu-linux/Tumbleweed.png","b3624ba8c14ab0b4b577980604cf206b"],["2018/05/02/use-ssr-on-gnu-linux/index.html","58af7e763a2c73528f74499414d7549e"],["2018/05/02/use-ssr-on-gnu-linux/x220.png","e1dfd05e03ae8f60a0e143d68d5af277"],["2018/06/16/talk-2018-06/Table_1.png","5c36a292351acb432e96b9489e76d6a8"],["2018/06/16/talk-2018-06/index.html","38ba5e26441506001d4994c88d5efbe5"],["2018/07/27/write-after-telegram-banned/index.html","8021687c6e21ecff9f43412abb0b92e8"],["2018/08/13/xinjiang-note/index.html","8ca4339eddc94be46b24310601612e53"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/connect.png","b4d02648c9740cc2e89c91a8687e2a43"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/final-1.jpg","13219aabc78e21c470fb67cef6a744ee"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/final-2.jpg","354fbc321d216fc4d2bed94c293b39be"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/i211.png","d6b11b75a7f82bdca715657446b54c91"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/index.html","ec5154476259baf3179c08297469a6d9"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/install.jpg","676611c6e84ddc8de42993f16be7a5e6"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/offlinedisk-1.png","96fbc233c770fae748a66d1c6c466f7c"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/offlinedisk-2.png","5fb334d7240711f4bd9e7176000477cb"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/prepareclient-1.png","d49206949ac207329c609b050595da0f"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/prepareclient-2.png","3ab971622c1da46ef5e71b4d904a3ecf"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/starsnail.jpg","68cb52e47e5f68f3df94dcec5a143ba4"],["2020/01/23/use-jupyter-with-wolfram-engine/index.html","2ff88f3f10d4c7049c26061f9afc86ef"],["2020/01/23/use-jupyter-with-wolfram-engine/jupyter.png","3f0b7ec15b91c99ba4855757e9597c13"],["2020/01/23/use-jupyter-with-wolfram-engine/wolfram.png","3424b16190236afdc9385142b2c4139b"],["2020/03/01/matrix-wechat-bridge/index.html","8be81c213dfac43153303a4ceae37a5c"],["2020/03/16/use-remoteapp-host-on-non-windows-server/RemoteApp_Tool_Create.png","bb422a1144bbf1f2e91e4120828a8b55"],["2020/03/16/use-remoteapp-host-on-non-windows-server/RemoteApp_Tool_Main.png","0958ffa6fb0c30b45014f6a6955970e0"],["2020/03/16/use-remoteapp-host-on-non-windows-server/index.html","82430e64d01ca5da358253d832b2d5d5"],["about/index.html","917c31b42107c4c9eb32c63c63c0918f"],["amibafix/index.html","9dec4537519b6c3c1367ef26fb32e7ea"],["archives/2016/12/index.html","bdb8f22ddefac03b4215ea69ab72a3bf"],["archives/2016/index.html","c935a43b4582053592435edf061cac4e"],["archives/2017/01/index.html","91cdb695cd383a70d9b14fba83510336"],["archives/2017/02/index.html","88cb4de5d697eef41b531643a3c69750"],["archives/2017/03/index.html","bc842059a5815c9d341063bbe10c01dc"],["archives/2017/04/index.html","4d57161d0f49ee506ab78dab90ab3d56"],["archives/2017/05/index.html","79e205a8351db0f60cf9d672b077f725"],["archives/2017/06/index.html","d2c31d333fbf913e159d22b7e634d52b"],["archives/2017/07/index.html","1bf752c6f313276dd3f527916784bdf0"],["archives/2017/09/index.html","fe068eedc49f505fda7ef8987c1165f0"],["archives/2017/11/index.html","d3420aaed8b5ff1972f9e2eb81f77c6d"],["archives/2017/index.html","d5dc25b79b438b2da90ca79ce8b4f18b"],["archives/2017/page/2/index.html","10809221294f1f6a67b0f68368d4c0cf"],["archives/2017/page/3/index.html","2a5c5cd02d0dc0fff703d37cd37c3c48"],["archives/2018/01/index.html","f5e380887bc8cf6d2f96a1d2c05eddb2"],["archives/2018/04/index.html","961e10376fb451c1d766c83a9ffbf240"],["archives/2018/05/index.html","c32b0ab68202823d9a20ff6982bd8715"],["archives/2018/06/index.html","b31e88f1f77dcea6622779ae107d1598"],["archives/2018/07/index.html","227618a4bd5521861a5e81387784d310"],["archives/2018/08/index.html","d8a7b0330920ce6170d17515dc5037c2"],["archives/2018/index.html","181c5c3cc05408c35e80b46508e78349"],["archives/2019/05/index.html","dd7c66737aa1b8d8bf8f8af5a3793ce5"],["archives/2019/index.html","805fe8bde35ec3f5db34d25a31ace4cc"],["archives/2020/01/index.html","7c804e48507cc62dd9e448cc9d3a71c0"],["archives/2020/03/index.html","269f857ef8af49d076d84b2981840e84"],["archives/2020/index.html","e61e7ff8254de5945c81b4b5ec5f6c40"],["archives/index.html","cf3e98eb9e642299cc1052ed46e4a8e1"],["archives/page/2/index.html","dee1e6d85a059970693e62509c6481a9"],["archives/page/3/index.html","4aa5ee0f94b1e25d6466feb2651f5673"],["archives/page/4/index.html","2995f085e78d02e5d17ca236dbf9f1fa"],["bangumi/index.html","0b04cfdc79ac4d97ad96141d4bcc7472"],["categories/Javascipt-书签工具/index.html","0570a8863680c105da867e597fe82bf9"],["categories/崩溃/index.html","d909f735dc550d9c2e8a2d27c3fbda3b"],["categories/开箱/index.html","53db0800f2c4a1867fd477d085dc8ff9"],["categories/技术栈/index.html","f8a85e12d48ebee2e0ebcf73ee2026f6"],["categories/技术栈/page/2/index.html","2fb358acb7b79ec1c8b4e28be82e0580"],["categories/推广推荐/index.html","06df33c409ef7b79aa6301859019a393"],["categories/购物/index.html","5596ea4cccd3f2883411f802af114d69"],["categories/闲聊/index.html","a524a9afc86305e7f2174b98ef60789f"],["categories/闲聊/page/2/index.html","48b9f846eb650f7ce4e590d7e17d447c"],["categories/隐私/index.html","bca1f1efd7dd7e1993dceb88885ff479"],["class/index.html","e3fe494b8ecc1c65c72c0037cba93236"],["creativecommons/index.html","a5e79ec534432d243d4aaf074478f0d7"],["css/disqus-proxy.css","87976db321c1c288aa3d9d4af06c8ad8"],["css/disqus-proxy.min.css","caa38dd245e9da4c20580c256e540bd6"],["css/duoshuo.css","bdd8f7eb0dd14fc7e719cab11e685a9e"],["css/duoshuo.min.css","6457d80daef45eca1f7399b2329b1dc2"],["css/fontawesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["css/gallery.min.css","a62dc56ec5981c978cddcba32f2dc875"],["css/ie-blocker.css","4c323bd282014d64264bad241f1c14d3"],["css/material-icons.css","a6a841fd177f69bd07dbe919a744439b"],["css/material.css","f65ff1c879db0e257bd7d9521f0eaa57"],["css/material.min.css","67b6bbd91d44e12c7304a47f58672d38"],["css/prettify.css","074dc30ad95ce2f227848a2c38bc7fbd"],["css/prettify.min.css","ce9f124ce53dbfcf5758512737ee9899"],["css/prettify/atelier-cave-dark.min.css","78d9bbfc7d0f526727e9da749cd08a44"],["css/prettify/atelier-cave-light.min.css","e4c2bf4caff36e974733bae61be7a10b"],["css/prettify/atelier-dune-dark.min.css","4aafbf8ec70b42c2b7964aa2b347bf68"],["css/prettify/atelier-dune-light.min.css","65f9c4494342967919044e847347634c"],["css/prettify/atelier-estuary-dark.min.css","79f259a7e1a0ab58772d339f97c53bf7"],["css/prettify/atelier-estuary-light.min.css","65039bc195c71fa32df0c35bc902587d"],["css/prettify/atelier-forest-dark.min.css","cbc537385cc8ab19748f9d4160a1e46c"],["css/prettify/atelier-forest-light.min.css","1dda1f8f21aeedbe0fb68caf55c615e0"],["css/prettify/atelier-heath-dark.min.css","b52d843659b13491b555f324bebfe9e8"],["css/prettify/atelier-heath-light.min.css","0d999c502c821f1b761ad772d7301067"],["css/prettify/atelier-lakeside-dark.min.css","f48fd98ed8f7ed8aa59fb57c87247b23"],["css/prettify/atelier-lakeside-light.min.css","bc790feb4057204347c45ea551d0d784"],["css/prettify/atelier-plateau-dark.min.css","e81b69c147a9ffbd298dccdaf02a810f"],["css/prettify/atelier-plateau-light.min.css","ad2d0ed869dc8142306110f8b7fa9035"],["css/prettify/atelier-savanna-dark.min.css","b3a404d78c50fbe9968d0d4dac123484"],["css/prettify/atelier-savanna-light.min.css","7d4087bd0552352c12ee3dd8f397db75"],["css/prettify/atelier-seaside-dark.min.css","10a0183644bd5c369616f0b94298c8f5"],["css/prettify/atelier-seaside-light.min.css","6fbd6de95fcd79393de5fbb4e7a3dac7"],["css/prettify/atelier-sulphurpool-dark.min.css","be693407f25090368983c17ad1fe1dca"],["css/prettify/atelier-sulphurpool-light.min.css","fcd7ecab5bfa792ac082257e73f08abd"],["css/prettify/github-v2.min.css","01fccac6dfbe2befe58590654a39f1c2"],["css/prettify/github.min.css","dab580bb047648b053d1546fe31e1215"],["css/prettify/hemisu-dark.min.css","7095b0461d4cf22e7935f0e447807c6d"],["css/prettify/hemisu-light.min.css","54e6d654c095a946b257a243ffd5f3f7"],["css/prettify/tomorrow-night-blue.min.css","2733cdcd81e2ca4e8d6598b2237c2eef"],["css/prettify/tomorrow-night-bright.min.css","f15804e96aa1b47d36233c5b02732f28"],["css/prettify/tomorrow-night-eighties.min.css","d8b250cd444ef8aafcaff7e5fd3f2830"],["css/prettify/tomorrow-night.min.css","4259c6664fdae3e77c5dbc2d5c10cf88"],["css/prettify/tomorrow.min.css","1c8792425eb2dedea306ec47bcb3c648"],["css/prettify/tranquil-heart.min.css","ba5de9f48f4cb1b3b12b42fe047cc30e"],["css/prettify/vibrant-ink.min.css","7b913faaa19c1af792ed54c7e0cf3deb"],["css/prism-line-numbers.css","0564af490a8f693fd09dd696e9734a8f"],["css/prism.css","12172c9e0b25e59e8e925b84065c78f0"],["css/style.css","d076c234da67bef747946e096fcd155b"],["css/style.min.css","34a865290917c3f73ae93479a78c0efb"],["css/uc.css","31dc264064481a02fb48046046a76084"],["fonts/MaterialIcons-Regular.eot","e79bfd88537def476913f3ed52f4f4b3"],["fonts/MaterialIcons-Regular.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["fonts/MaterialIcons-Regular.woff","012cf6a10129e2275d79d6adac7f3b02"],["fonts/Roboto-Black.ttf","4dae2e3c6207a71de6b078b879230062"],["fonts/Roboto-Bold.ttf","a68db3b33213fa138e6f72a5b76ac632"],["fonts/Roboto-Light.ttf","8d252992868e895b059335848dec3402"],["fonts/Roboto-Medium.ttf","989d2dff37a09f19c6dbc6f0e8f9b4ea"],["fonts/Roboto-Regular.ttf","8f793587dcf03f31c551c5b60d175fc2"],["fonts/Roboto-Thin.ttf","21c61396b4bea54e7308a7cda49edbe0"],["fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["img/avatar.png","0acf37b762876c3999bb712819ef0fe3"],["img/bg.png","4491b5e3d2320fb530a6ecf4a3d27e9b"],["img/browserstack_logo.png","9901607d552cbf936a8c86e6f206aa47"],["img/daily_pic.png","8655723de1bfb93de6290938f18cb8a0"],["img/favicon.png","7a80435df04b3eb691b8f172f09a8473"],["img/footer/footer_ico-bilibili.svg","d67fcd7d1fa5999e9a785b2dfaa39f2c"],["img/footer/footer_ico-facebook.svg","64c580c2986d6f16d04b1c4d3b896fd2"],["img/footer/footer_ico-github.svg","4b3dc07ff72cee5be0eff6a100a354cd"],["img/footer/footer_ico-gplus.svg","7d75444af4019d5612e2005ab501eca5"],["img/footer/footer_ico-instagram.svg","c8eaf1f2fe5f4d9a7b26f2981d6f14ed"],["img/footer/footer_ico-linkedin.svg","5e4c53b53c9d59880c6e483d57309a6a"],["img/footer/footer_ico-segmentfault.svg","dbf66b5f0165802dc698eec23e147967"],["img/footer/footer_ico-telegram.svg","50e65465cc40292f7101255daed7c593"],["img/footer/footer_ico-tumblr.svg","b127eb5d3e455ba8794ddc4d060df5bc"],["img/footer/footer_ico-twitter.svg","90ff42c9e275a7cd7ca5bf4291c93961"],["img/footer/footer_ico-v2ex.svg","3500b18a911b661a2b379b36b39def20"],["img/footer/footer_ico-weibo.svg","f1f6375680122267b9ebfc3b546307e8"],["img/footer/footer_ico-zhihu.svg","39538ba6607a9dcadf6d4dca35b687b8"],["img/gallery/arrow.svg","f3f776676f3b78b5180c9d2e08c2d532"],["img/gallery/close.svg","181336ad0bd48cdde68d7fb8be304daf"],["img/gallery/spinner.svg","2a61c8efd2d72146d79a2f6692840a85"],["img/logo.png","7a80435df04b3eb691b8f172f09a8473"],["img/random/material-1.png","0c4e486759ad62e3415f8f197f0311f7"],["img/random/material-10.png","2263d9d1cc9b0724e6331374c33f988b"],["img/random/material-11.png","41127baf9a286e968a63653dee50ba21"],["img/random/material-12.png","2507dbe92186b0b39df6331347aa2c27"],["img/random/material-13.png","5d127887b6d043259f7e2fb99cd08175"],["img/random/material-14.png","84c21a53679bddbe415fdae1d3c02163"],["img/random/material-15.png","ec116546453394cc0d78e580d6d52dd5"],["img/random/material-16.png","39a5dca2dc2de60bd5dd191f205db7d6"],["img/random/material-17.png","30a855e361dcf170aecdce04ce564c68"],["img/random/material-18.png","584900ff821930a8b093b4c0a58be34b"],["img/random/material-19.png","c004830c8683856939dc83b75b230b66"],["img/random/material-2.png","fa4f4588b9fab07979acd61b94d34fa0"],["img/random/material-3.png","418c3457b6792eb732844d41d2501294"],["img/random/material-4.png","99898b727359e568759eebbb2c9e4a8b"],["img/random/material-5.png","e521776cb427f848546e20d784888a55"],["img/random/material-6.png","db810792edf3d40de5baf5401a9a0626"],["img/random/material-7.png","d7e9fe3e0e3db6b841ab12fad331daed"],["img/random/material-8.png","9f1914138052c3a631e1f2b2cf674a46"],["img/random/material-9.png","069b687b7f1069254c816a56317bfaad"],["img/sidebar_header.png","0ac2232bb0756d0d4e5f04875b443217"],["img/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["index.html","396c9e40086cabad450a1d9d77ce4bea"],["js/MathJax.js","1bef8ba3b323e77cd264bfc09662ae1e"],["js/Valine.min.js","c640924dc2c3508b1a1c8f3ab726f3fa"],["js/gallery/gallery.js","54dbd709efe8893194901af3fce1379d"],["js/hanabi-browser-bundle.js","3e48b9fa9ce496eaaee7783ea2e316a4"],["js/ie-blocker.en.js","eb054767893aa2f8e981be25c4221415"],["js/ie-blocker.zhCN.js","861699947bcd571f62d6dc10f1c43be0"],["js/jquery.min.js","a9cbac0142cd78192ca9f7ea50cdbe22"],["js/js.js","d69f3cf073c561b1820bbdd62b60bb06"],["js/js.min.js","067f54cc49bc46b052c6ac99074ccf8c"],["js/lazyload.min.js","d4171fcee357a95fa7b45ea0abee57dd"],["js/lsloader.js","d01962f06751b296c985a8fee73019f8"],["js/lsloader.min.js","fdef13cf99a299ae566d65ab828cdc19"],["js/nprogress.js","a65dd085bf65bea475165c8b5276b563"],["js/prettify.min.js","58dd3b7e2bc741230a5b2ec1987041eb"],["js/queue.js","3ef240fa4fc55888e5e234e48f23fc95"],["js/queue.min.js","1677e3c59497558a9f53b73b726dedc6"],["js/smoothscroll.js","94ecbf0028f9b2e48d8bb6551556e915"],["links/index.html","6a0d589ac87b35da4e633e65556cda6b"],["live/index.html","5963faaafa92f12bc54551cafcd7f37d"],["myfiles/css/bootstrap_liyin.css","c94f41110432c5f63d6c0f411a9e19fd"],["myfiles/images/PWA/logo072.png","b6d0bd5d5eaed02bcaa097480262845e"],["myfiles/images/PWA/logo192.png","09a7f9105942ce2044344dcd648e7a05"],["myfiles/images/PWA/logo256.png","14ccbe0f4e7b75637c2f0583c8fc7291"],["myfiles/images/PWA/logo512.png","00de9954c985fef8b32ceeb019540124"],["myfiles/images/amiba/1.png","c09704d708191afd6275dffe00cb7587"],["myfiles/images/amiba/2.png","159fc61f7ff373bd4576627e10fb8a31"],["myfiles/images/amiba/3.png","f78e34ab0895352447605c75b3698b49"],["myfiles/images/amiba/4.jpg","88d64ce70de4a083c6ea0e7b9abe81d3"],["myfiles/images/avatar.min.png","f926293e70b42b903ee681df10fa541c"],["myfiles/images/avatar.png","50563cfd716ef38ac504ceb1545361f5"],["myfiles/images/cachemoment.svg","200e6d663a4bea67a6d0f4a85bf18932"],["myfiles/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["myfiles/images/daily_pic.jpg","aa8f648f4b2bd0d3b4fb6f1a1dfe1d77"],["myfiles/images/favicon.png","7d0e50ede2f4bebc87b59f94ece9f08f"],["myfiles/images/logo.min.png","79888a29f8d834256191077e218d9e96"],["myfiles/images/logo.png","c49cd5fd22e38b63292740ab0f5071c4"],["myfiles/javascriptbookmark/pjjsblet.js","4190a415871256ca7dc0facdf36f4246"],["myfiles/js/combined.js","d784fa8b6d98d27699781bd9a7cf19f0"],["myfiles/js/hmthelper.js","5b4615653b79f4bb2008524b60dac42a"],["myfiles/js/linkChecker/linkChecker.js","3774991471d73b50382facffc1825cd5"],["myfiles/js/linkChecker/main.js","03c69efec85a158067f49159f063eb00"],["myfiles/js/links/links.js","822910dde8f26de60893cd1582e93df8"],["myfiles/js/links/main.js","db6004771eb64c707c9c9185db71e03d"],["myfiles/js/menufix/main.js","1e5baa37aa73581f339e1d9f43a85fc8"],["myfiles/js/menufix/menufix.js","bf0136593dbca4111775a7af608951de"],["myfiles/js/nomirror.js","ec8461064e2ce285ef3b45a008f30e58"],["myfiles/js/yiyan/dependency/jquery.noty.packaged.min.js","e064d6a7566edc482527936efff5fc67"],["myfiles/js/yiyan/main.js","68989e5dab463c6c9cfa9bf564912166"],["myfiles/js/yiyan/yiyan.js","8697b87414674b45cd9c7165d6842fcb"],["myfiles/links/avatar-KeJun.png","4728ef21c49df76c6a4bb9e552fd10c5"],["myfiles/links/avatar-Marnger.jpg","30037cf1e0a8688c5ddc3a3bd49f9f2e"],["myfiles/links/avatar-Vigorous.png","386a122b977449fc4cf441309fc4e8fe"],["myfiles/links/avatar-ccooss.jpg","575e68a76914b5ab4c20ee453a423607"],["myfiles/links/avatar-halyul.png","1f96e22e0f849d6d578872a11c115e05"],["myfiles/links/avatar-iVanilla.jpg","d781159043acbe0b37eac2a3dffd33ad"],["myfiles/links/avatar-imeto.jpg","088db10a843e02f779924b114f6adbee"],["myfiles/links/avatar-imiku.png","aa44885c8abb51241162087b9c829902"],["myfiles/links/avatar-kookxiang.jpg","e656a6b1751048375d6fe1401950fa43"],["myfiles/links/avatar-luo.jpg","d4b9e25bd739561c8eb92961fcd0b64e"],["myfiles/links/avatar-lwl12.jpg","f1f019d67b3c516753ad3caef01585a9"],["myfiles/links/avatar-nekolines.jpg","ffae6c96344109b1d239cb096b144e0a"],["myfiles/links/avatar-pdc.jpg","5666c1b01d95e602f2a4db04c47ee3c6"],["myfiles/links/avatar-petercxy.jpg","95d517ae2b9c2420787b4fdbe17d2e97"],["myfiles/links/avatar-troy.jpg","0346ecfe9e528cdbf63b4afbcf2eff88"],["myfiles/links/avatar-yashi.png","8ac30256764a0cf85893fc147c5204b9"],["myfiles/links/avatar-yiyangwang.jpg","be83908f1ef6ee24af4575adb881ff33"],["myfiles/links/avatar-yukari.png","87de1cc70e12d6afd4875bd04d7a2cc5"],["myfiles/links/avatar-zhaoj.png","00c54730ebaa749bc3af1f13b5c5baa5"],["myfiles/thumbnail/Alpine-Linux-折腾记.png","7e8fece2fef24a5970eaa88bad24f746"],["myfiles/thumbnail/An-Adobe-Crash.png","c2bc5ce88fb1b6951db0046735c7db8d"],["myfiles/thumbnail/Project-My-Screen-App.jpg","81f43d89dfd18b7ecc15001be2cbc1a3"],["myfiles/thumbnail/QQ-Flash-Capture.png","1763b461d41f8850d9f5e3f0c4784417"],["myfiles/thumbnail/ZF-Loginpage-Fix.png","f1d7ef95522d8123940deeb984dc5ea2"],["myfiles/thumbnail/slogan-.png","fdabbd2f38a7599ca5ca012b97ae33d3"],["myfiles/thumbnail/slogan.png","0e4278c5c78ddcf335c3564b1694fdb4"],["myfiles/thumbnail/加入了喵窝.png","51e35b91a8362e27085e3bc5cf49c5cc"],["myfiles/thumbnail/学堂在线自动刷视频时间.png","23b5609d4294f645e5e17afdec5c3a90"],["myfiles/thumbnail/正方教务系统自动教学评价.png","775c5546755531577d94bde3c870d904"],["myfiles/userjs/AutoXuetangx.user.js","86a3c0efe1e5c64fdc985be9b7e995e7"],["myfiles/userjs/FixZFLoginpage.user.js","67dbdf3321eca739036ad201eb1f249a"],["page/2/index.html","666995b0d943db3f75c6d9c33da3151b"],["page/3/index.html","51ca63f1d23c97dd05754f6fd969ff7e"],["page/4/index.html","b25f067593b2f92d99743d6f631cded6"],["skyedge/index.html","37b97c5b819f58ce063c5cfeb17a6a9e"],["slogan/index.html","fb1635312414977fea05d93b6385e8cb"],["tags/Adobe/index.html","5e9e0bced3cf1e40a749d1c284f9cfe3"],["tags/Android/index.html","7fd460db0f3a5d5ba4fd2e3aaf253b67"],["tags/CaaS/index.html","98499537c3495195fcddb0531673189f"],["tags/DNT/index.html","1e33c07be5b18fd0ae2bd80d58760246"],["tags/Do-Not-Track/index.html","20a24dd8ca476a599e550ca8f8fad2f1"],["tags/Docker/index.html","e50653f13d62b9ce15656c30fb2309b3"],["tags/GTag/index.html","e2cc79cbdd8a595848b451b418bca940"],["tags/Google-Analytics/index.html","046d3fd2560c07b3fbd0290d43c592e2"],["tags/Javascript/index.html","996c18899963c47e64f9a0f5ef907024"],["tags/Jupyter/index.html","10860036598acd808a9c553b90b26a88"],["tags/Linux/index.html","45a93624b5ac77d48376ecf9562bf79e"],["tags/Lumia/index.html","d9fd36ad90748b439cf1ba3ee3e1fbf4"],["tags/Matrix/index.html","a5c30c63767edd80af4fc4fc4dccca85"],["tags/Minecraft/index.html","0ea85b97e3b7b32bd0abb3fe427b58e3"],["tags/OnePlus5/index.html","d231d01f0f48e3b331be1d69d1a52009"],["tags/PGP/index.html","5a5cae0bfffc611fe08eaa0eb7045709"],["tags/Python/index.html","6a1fc5e1d926b15c42d154f0fc5271b2"],["tags/RDP/index.html","13987e1659837857b9805fa519e7109c"],["tags/RemoteApp/index.html","2058ce23790d1d9bdc45421b5680e6bd"],["tags/SSR/index.html","4ccce9cabb3835bc9cd08390edd8863d"],["tags/Wechaty/index.html","e8fb0621ae161ca9f8cf422b1cf35fad"],["tags/WindowServer/index.html","12f9f3bdace685c394a105a04943ccb1"],["tags/Windows-Phone/index.html","f58356df36c1fcccd7a2a41044902e5c"],["tags/Windows/index.html","571d890c26ea129e83ef2910eff7356c"],["tags/Wolfram/index.html","54fcd94065112201dcf26e23c03105a5"],["tags/bPlayer/index.html","9e424ca294cb09808ccff58ef40849e8"],["tags/btrfs/index.html","dc2c812c3f761e8435a85708977983da"],["tags/hexo-material-theme/index.html","67004b250a8182642a25f791fd9e117d"],["tags/index.html","c6978560efa68c1316e882ff73da8240"],["tags/一加5/index.html","52d386b43c3632d703690659378a53cd"],["tags/主题/index.html","648adbefbc494e03b464c3114ddb4ddb"],["tags/云/index.html","ca0468f65947bf380eb43605ab1b805a"],["tags/优化/index.html","85aa2ff91e92f7c0b8b2ab3d154aa980"],["tags/千锋/index.html","a83c830c91700d4eea3132e32a10b788"],["tags/博客/index.html","1a3f05ea27c33381d4d552cda6bd77d1"],["tags/喵窝/index.html","fd1733b3f3d2d71c20544eddc83c5ddd"],["tags/安全/index.html","15afe384bc25402c1b1eacc34cdbf648"],["tags/屏幕同步/index.html","62a4905ab375afb4bd7f51dd90af9423"],["tags/崩溃/index.html","ec0793228b1f2272329aff8dd99e4e99"],["tags/工作/index.html","f35adf3fc9cbfac1b54272d0aa0badb7"],["tags/开箱/index.html","66894ddfde49eac2942c044385e19be0"],["tags/微信/index.html","3e10b0a2d08218732a386667ab341bc2"],["tags/总结/index.html","dfdcd62d591c68c78164acd1eef74deb"],["tags/折腾/index.html","95335081313f41c4ea31d923b18f0b64"],["tags/正方教务/index.html","5c003a2ea416614af8888435f50abdf0"],["tags/毕设/index.html","623a9e5d768d352cf212c5a878960229"],["tags/游记/index.html","08dfc7f48859f3362ef74198e2377d08"],["tags/瞎想/index.html","ee9eb6374583cedc71602c53dcab37fc"],["tags/购物/index.html","6d7a4a14c79ecd68068d0ee14896dd7b"],["tags/转运/index.html","b0a5284a064c05c045b0bc01d549b100"],["tags/闲聊/index.html","9d73d1705767036956d8be4a6beee992"],["tags/阿里/index.html","de6401c1a26f9c84d3ebec9d03e3a9fc"],["timeline/index.html","6080e6d54fd24a841e30b924b1957298"]];
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







