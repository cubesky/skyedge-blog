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

var precacheConfig = [["2016/12/25/hello-friends/index.html","5a0cecd8d92d352bb7c9b8b09cc65147"],["2016/12/26/xuetang-auto-time/index.html","ed5119e07e05b1e070ecfcea0e2729d7"],["2016/12/26/zf-auto-tech-rate/index.html","7dfce68a40cf6a77adc617eddbcaf3b6"],["2016/12/27/project-my-screen-app/Project-My-Screen-1.png","1ef39212cd45595cc91f718dab07537c"],["2016/12/27/project-my-screen-app/index.html","b979eae6d3b1b644472d5c147f5b85de"],["2017/01/05/blog-update-1-2-5/index.html","c88d46e56bc80d68a4bc3399e686e77d"],["2017/01/16/2017-first-snow/2017-First-Snow-1.jpg","9cc7dc9cca8233cf21b5f8ca3f21843b"],["2017/01/16/2017-first-snow/index.html","f4efb545ed52eb6512d0c06a74f14f5c"],["2017/01/21/docker-minecraft-server/Minecraft-With-Docker-Docker.svg","7a372f89efa294ade59ab75079dd35f0"],["2017/01/21/docker-minecraft-server/Minecraft-With-Docker-Forge.png","290614e1bd977fe14fb364a1afb0f064"],["2017/01/21/docker-minecraft-server/Minecraft-With-Docker-ForgeInstaller.png","73270f9a6c875d7e6b52d1eeaf16bf6d"],["2017/01/21/docker-minecraft-server/Minecraft-With-Docker-Minecraft.svg","74c8d665c483371f20ef379a0a23fc20"],["2017/01/21/docker-minecraft-server/Minecraft-With-Docker-Qrcode.jpg","189666d232b3b8e823637f572229a436"],["2017/01/21/docker-minecraft-server/index.html","1a065d95fd066f6dfaa718bab8e5afb6"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-1.png","f1d7ef95522d8123940deeb984dc5ea2"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-10.png","8538f2000a35faa6531ffff3bd41e561"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-2.png","edf15f491fc62764691f41c917afc50b"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-3.png","7ea61f777e79e2d4d1aa2592ac598f88"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-4.png","6c135099403d8886aa424dbe70a096e9"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-5.png","3f73322fa7643329aedebe45f5a44231"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-6.png","28cf41fc8ce30ccc0d0615e31bcefa1a"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-7.png","eeb0cd409b0b1fea16ac457e33c98831"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-8.png","cce0ebeae12320b6e0e1568693900ad3"],["2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-9.png","42d6bdd94d13bc6ff0e1b1ea8d6fde07"],["2017/01/31/zf-login-page-fix/index.html","c03dfa18450b046a000f9fce11f83ebe"],["2017/02/11/thinking-2017-2-7/index.html","a64684a347b72914aab00d0703851af0"],["2017/02/20/new-index-page/index.html","6042df751e1376e9db188d17c4638efd"],["2017/02/24/blog-update-1-3-0/index.html","274af820169f6c6ae7e7297671006f3a"],["2017/02/24/join-into-nyaacat/index.html","41b3b0c554ed5095f7012f720787c165"],["2017/03/18/alpine-linux-setup/Alpine-Linux-1.png","d579df045218edd1ba295ed8997d0a85"],["2017/03/18/alpine-linux-setup/Alpine-Linux-2.png","3ad9681a9276197fbaab3c3bcb94aa79"],["2017/03/18/alpine-linux-setup/index.html","a7985cbc8c0982a7781f876d9c84f98d"],["2017/03/19/linkchecker/index.html","d3e3551e79b293aa4365ed7e538800c9"],["2017/03/22/qubesos/Qubes-1.png","1b519a6c55d8e6369558d5ec1a2f9ced"],["2017/03/22/qubesos/Qubes-2.png","a825929e73ac04f08bed8dea5a61ef0c"],["2017/03/22/qubesos/Qubes-3.png","e5bd609fe224a7c039debb0551fa5102"],["2017/03/22/qubesos/Qubes-4.png","29701f14f533448b2db2c3380df8dd9b"],["2017/03/22/qubesos/Qubes-5.png","846a37c97761cf19e0c890f9ee979653"],["2017/03/22/qubesos/index.html","cf5e86f5661f32b35d8cc74cd9b4611b"],["2017/04/02/pgp/index.html","92defc73328a66d131f1c14e0e8093a2"],["2017/04/14/btrfs-crash/index.html","61a94dcc8f04dc924258ad451e1e55b8"],["2017/04/30/one-adobe-carsh-resolve/Crash-1.jpg","5fc7dfc34d92270584173e5bd95d854a"],["2017/04/30/one-adobe-carsh-resolve/Crash-2.jpg","99a2e1d164b2b13486698e2560df7d8c"],["2017/04/30/one-adobe-carsh-resolve/Crash-4.jpg","f0290dbf31895beb00408cf506dc2fed"],["2017/04/30/one-adobe-carsh-resolve/Crash-5.png","cea9775592152450f3c9a153c279ee3a"],["2017/04/30/one-adobe-carsh-resolve/index.html","27d300eebe45fdd1678001f389d093d2"],["2017/05/09/qq-flash-photo-capture/index.html","fde63e36beb05bcbaf32cc67919aaea0"],["2017/05/09/qq-flash-photo-capture/qq-flash-capture-1.jpg","35e5f78517151457e356dfe06a88c755"],["2017/05/09/qq-flash-photo-capture/qq-flash-capture-2.png","bd6943e6e6590a0b30702b2b7eb3c490"],["2017/05/09/qq-flash-photo-capture/qq-flash-capture-3.png","282b442fbe69cabf0543c521ba4d120c"],["2017/05/09/qq-flash-photo-capture/qq-flash-capture-4.png","dcc067a92b808d704569188157e4f031"],["2017/05/09/qq-flash-photo-capture/qq-flash-capture-5.png","e89f94ebaa9584d875079a20760314a3"],["2017/05/09/qq-flash-photo-capture/qq-flash-capture-6.png","9ef43fad94d5cb28ecf4671c71c921fe"],["2017/05/25/letapkfly/index.html","c7863e0f30cebcf7a17dccef891ee6c6"],["2017/06/18/why-not-continue-use-eclipse-on-android-program/index.html","6ae871f281ea1b0d79275a7ee762aed7"],["2017/07/02/oneplus5/Assistant.png","8d7d5edfa2b9570b1e181f5a0014e21c"],["2017/07/02/oneplus5/Battery1.jpg","39115cd11172e9ae2b04626c7d36506d"],["2017/07/02/oneplus5/Battery2.jpg","6688f3daf9e840739226687dd2467502"],["2017/07/02/oneplus5/Magisk.jpg","25066a340f3becdda3473d75aabc13f0"],["2017/07/02/oneplus5/MagiskHide.jpg","65a248b95eaa22c96b9e158cfa27d9ac"],["2017/07/02/oneplus5/MiPush.png","fcde84b0dc38a466c7ddd2f097a73f6b"],["2017/07/02/oneplus5/NowOnTap.jpg","ea572ec6ebf675d8857907060457be07"],["2017/07/02/oneplus5/activitylauncher.jpg","0e0609aead74bd3550050db63796da54"],["2017/07/02/oneplus5/bridge.jpg","cc6ceee5256d99b92c857fc013f7fbb9"],["2017/07/02/oneplus5/developer.jpg","79d717ac443aa0a17ad46e2d9f58af5c"],["2017/07/02/oneplus5/egg.jpg","64b75bada828632c277ccfe8e2f96fe8"],["2017/07/02/oneplus5/greenify.jpg","7c670fd5e21eae565de287b44cfda3cd"],["2017/07/02/oneplus5/index.html","938882d824d0bc1927ac4bcfac37d0aa"],["2017/07/02/oneplus5/island.jpg","9973474efcd37d926a228f3ae4a128f2"],["2017/07/11/buy-and-trans-jp/index.html","ec33f2cf37c868ed474b511fdff2aceb"],["2017/09/15/lifbbs/index.html","a363834bb6d21948f538d33c57a2af0e"],["2017/09/29/unbox-alimooncake/all.jpg","755fc1501f48408dfacaf533a4e63813"],["2017/09/29/unbox-alimooncake/box-out.jpg","4be57e0f9ee7c925abb4ed7a41410dee"],["2017/09/29/unbox-alimooncake/box-together.jpg","36d50880f2432a3d22c015177393baa2"],["2017/09/29/unbox-alimooncake/box-zoomin.jpg","bd4a67856bd31d3fc5f4640ea52871aa"],["2017/09/29/unbox-alimooncake/index.html","e0ebc023f66d27f2a0e8f8dcab4ab3b4"],["2017/09/29/unbox-alimooncake/open-all.jpg","87744b866ce0be2ab6799c5839b81816"],["2017/09/29/unbox-alimooncake/open-left.jpg","039dc0f5aa4a296e13fa82ff459dd602"],["2017/09/29/unbox-alimooncake/open-mooncake.jpg","3375eee7411daabe58145c2911a7b7a6"],["2017/09/29/unbox-alimooncake/open-right.jpg","1cf03d0e3a15684f879712b0086cba0c"],["2017/09/29/unbox-alimooncake/unbox-self.jpg","bbb821e0c7e61c8daab409707f45aefc"],["2017/09/29/unbox-alimooncake/unbox.jpg","f5a16801f22b85512f6e36c19fc04a02"],["2017/11/18/bplayer/index.html","b78efbcf0e8c74338ec87e05709f6943"],["2017/11/18/talk-2017-11/index.html","1ebd79a1cc7bf2b6997250a9f30b9539"],["2017/11/29/android-optimize-app/index.html","1c25d112554a93e37dd4a892f103dfec"],["2018/01/02/bye_2017_hello_2018/index.html","6ff0bf22af1fffa66e01efc717657e63"],["2018/01/02/bye_2017_hello_2018/liyin.jpg","93511ae6f31039554649151cecf2075f"],["2018/04/19/blog-categories-sort/index.html","69409bb0371cf47dccff86dc78b9c203"],["2018/04/19/googleanalytic-dnt/DNT_Chrome.png","b29018d9a489b9fe982c5566c28a1786"],["2018/04/19/googleanalytic-dnt/DNT_FF.png","3288dbba8587a5be92616c9bb9cecba6"],["2018/04/19/googleanalytic-dnt/GTag.png","bfe2268449c12c03b7fbeb1cb47d1c34"],["2018/04/19/googleanalytic-dnt/GoogleAnalytics.png","2dbb3936bd769bae38e03454d7e5105d"],["2018/04/19/googleanalytic-dnt/index.html","1e4ebc91a6627909f6ce9e0c0533c8f6"],["2018/05/02/use-ssr-on-gnu-linux/Tumbleweed.png","b3624ba8c14ab0b4b577980604cf206b"],["2018/05/02/use-ssr-on-gnu-linux/index.html","a77cd2d6d9e76c7bb704a7fdf7c6ee38"],["2018/05/02/use-ssr-on-gnu-linux/x220.png","e1dfd05e03ae8f60a0e143d68d5af277"],["2018/06/16/talk-2018-06/Table_1.png","5c36a292351acb432e96b9489e76d6a8"],["2018/06/16/talk-2018-06/index.html","dd75957932f059f660fd206c528bcf93"],["2018/07/27/write-after-telegram-banned/index.html","30be9365da1b50785a5a384de9ecabc3"],["2018/08/13/xinjiang-note/index.html","b26329b2c70aae9485239b77353e71e0"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/connect.png","b4d02648c9740cc2e89c91a8687e2a43"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/final-1.jpg","13219aabc78e21c470fb67cef6a744ee"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/final-2.jpg","354fbc321d216fc4d2bed94c293b39be"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/i211.png","d6b11b75a7f82bdca715657446b54c91"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/index.html","8586154008d8539b9a993e6fc5d0dcf4"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/install.jpg","676611c6e84ddc8de42993f16be7a5e6"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/offlinedisk-1.png","96fbc233c770fae748a66d1c6c466f7c"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/offlinedisk-2.png","5fb334d7240711f4bd9e7176000477cb"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/prepareclient-1.png","d49206949ac207329c609b050595da0f"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/prepareclient-2.png","3ab971622c1da46ef5e71b4d904a3ecf"],["2019/05/13/star-snail-use-ms-hyperv-server-2016/starsnail.jpg","68cb52e47e5f68f3df94dcec5a143ba4"],["2020/01/23/use-jupyter-with-wolfram-engine/index.html","d44b752fff3ef8cfbb14b438352ea6de"],["2020/01/23/use-jupyter-with-wolfram-engine/jupyter.png","3f0b7ec15b91c99ba4855757e9597c13"],["2020/01/23/use-jupyter-with-wolfram-engine/wolfram.png","3424b16190236afdc9385142b2c4139b"],["2020/03/01/matrix-wechat-bridge/index.html","b999edc3c74968a5271a8d316b068c97"],["2020/03/16/use-remoteapp-host-on-non-windows-server/RemoteApp_Tool_Create.png","bb422a1144bbf1f2e91e4120828a8b55"],["2020/03/16/use-remoteapp-host-on-non-windows-server/RemoteApp_Tool_Main.png","0958ffa6fb0c30b45014f6a6955970e0"],["2020/03/16/use-remoteapp-host-on-non-windows-server/index.html","eef027e9862097ae90a5246e4d907fd0"],["about/index.html","e4f503742fb4c397bfef08f5821fd850"],["amibafix/index.html","1cf7f11ffe51ff311a3b8dffc5c50584"],["archives/2016/12/index.html","0b0510f03d688282f5ab52c390538c3b"],["archives/2016/index.html","53f1b19b843990c3f8a51fc912251ac0"],["archives/2017/01/index.html","12bcf537d36736db18e456ddbeb9ec1a"],["archives/2017/02/index.html","79bce66e444730dedb18ab31e5accd6c"],["archives/2017/03/index.html","d6d9fc988a6c958400b130df0c84d0cc"],["archives/2017/04/index.html","44a1bc8aaba845b32afc49e405a472bc"],["archives/2017/05/index.html","a83b52b02cea0d22c6d70e3fe97d9295"],["archives/2017/06/index.html","dae7b4c3b581a0cf4d19f8d4eee52b21"],["archives/2017/07/index.html","f47c2e97721f28d54bd622f68e7e862a"],["archives/2017/09/index.html","354179c36790d4e372f052502547d906"],["archives/2017/11/index.html","f2150ab65b9d963f3fe16432dee3546d"],["archives/2017/index.html","b17f6293b427881c59cef7c51429ae44"],["archives/2017/page/2/index.html","54b7b4bb757afb5a64db304d9e158641"],["archives/2017/page/3/index.html","049b5ea63d83a7bb7dcd30b2ecec8629"],["archives/2018/01/index.html","ec944dbd9ac304d794ea01fee9417a4c"],["archives/2018/04/index.html","e1723ebfd79e00637889e1c394284fb1"],["archives/2018/05/index.html","a8ee430df9665d9a54c45a87e71bad06"],["archives/2018/06/index.html","e6a11d8ac030d8c328e84eb483c9d39f"],["archives/2018/07/index.html","28261761d41318d9835f46d1ca06b899"],["archives/2018/08/index.html","eb5527828d0dd7f184a873a48f564276"],["archives/2018/index.html","494b44a717f4863c0a5c0032b5fda88c"],["archives/2019/05/index.html","0e0f9804eeb4ab995a1e44d8e086884a"],["archives/2019/index.html","c4f12cecb39e3779017379b127c1472c"],["archives/2020/01/index.html","60484860467db936e36b37bacf834333"],["archives/2020/03/index.html","93317f8e2628da858be646bdf258bbc5"],["archives/2020/index.html","1aa6fb6cbadf4d038b26423643391598"],["archives/index.html","c0864bbc0fd4d7bdf299654e6a83d840"],["archives/page/2/index.html","6edf83d2a1de27526dc28acfee4c129e"],["archives/page/3/index.html","aa3cd5d128f57c2bfd74adad48281814"],["archives/page/4/index.html","9d656887cb65e7e8965e67ad50d0082f"],["bangumi/index.html","6be57ab175657b7a113b70275d03ce6d"],["categories/Javascipt-书签工具/index.html","000f4e79f08ffe6cedfc1f31c0ae343f"],["categories/崩溃/index.html","f58c04274ee60e636e07964e63546c83"],["categories/开箱/index.html","a4e3596aa583bd85cc1c3ba9495e7344"],["categories/技术栈/index.html","77bc87bd9998845ab73daa8675cc70b7"],["categories/技术栈/page/2/index.html","e3df9ae94579c3569d490efe23ca9478"],["categories/推广推荐/index.html","233ca97a554ac5dfc8eafedeb35b64f1"],["categories/购物/index.html","6a88a1452768cf7e1f7be6f2b64dfc02"],["categories/闲聊/index.html","92e01f61463c5432fdf889f9ede1dd22"],["categories/闲聊/page/2/index.html","70a79b1ef9b968555eec6314fee30174"],["categories/隐私/index.html","a3057a1b314fea6116fe470ad42403b9"],["class/index.html","26ed0eb33f57b763ae7bcc05fe3a5d0f"],["creativecommons/index.html","1b9ffcd0abd546a2d56fc3720bbcda44"],["css/disqus-proxy.css","87976db321c1c288aa3d9d4af06c8ad8"],["css/disqus-proxy.min.css","caa38dd245e9da4c20580c256e540bd6"],["css/duoshuo.css","bdd8f7eb0dd14fc7e719cab11e685a9e"],["css/duoshuo.min.css","6457d80daef45eca1f7399b2329b1dc2"],["css/fontawesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["css/gallery.min.css","a62dc56ec5981c978cddcba32f2dc875"],["css/ie-blocker.css","4c323bd282014d64264bad241f1c14d3"],["css/material-icons.css","a6a841fd177f69bd07dbe919a744439b"],["css/material.css","f65ff1c879db0e257bd7d9521f0eaa57"],["css/material.min.css","67b6bbd91d44e12c7304a47f58672d38"],["css/prettify.css","074dc30ad95ce2f227848a2c38bc7fbd"],["css/prettify.min.css","ce9f124ce53dbfcf5758512737ee9899"],["css/prettify/atelier-cave-dark.min.css","78d9bbfc7d0f526727e9da749cd08a44"],["css/prettify/atelier-cave-light.min.css","e4c2bf4caff36e974733bae61be7a10b"],["css/prettify/atelier-dune-dark.min.css","4aafbf8ec70b42c2b7964aa2b347bf68"],["css/prettify/atelier-dune-light.min.css","65f9c4494342967919044e847347634c"],["css/prettify/atelier-estuary-dark.min.css","79f259a7e1a0ab58772d339f97c53bf7"],["css/prettify/atelier-estuary-light.min.css","65039bc195c71fa32df0c35bc902587d"],["css/prettify/atelier-forest-dark.min.css","cbc537385cc8ab19748f9d4160a1e46c"],["css/prettify/atelier-forest-light.min.css","1dda1f8f21aeedbe0fb68caf55c615e0"],["css/prettify/atelier-heath-dark.min.css","b52d843659b13491b555f324bebfe9e8"],["css/prettify/atelier-heath-light.min.css","0d999c502c821f1b761ad772d7301067"],["css/prettify/atelier-lakeside-dark.min.css","f48fd98ed8f7ed8aa59fb57c87247b23"],["css/prettify/atelier-lakeside-light.min.css","bc790feb4057204347c45ea551d0d784"],["css/prettify/atelier-plateau-dark.min.css","e81b69c147a9ffbd298dccdaf02a810f"],["css/prettify/atelier-plateau-light.min.css","ad2d0ed869dc8142306110f8b7fa9035"],["css/prettify/atelier-savanna-dark.min.css","b3a404d78c50fbe9968d0d4dac123484"],["css/prettify/atelier-savanna-light.min.css","7d4087bd0552352c12ee3dd8f397db75"],["css/prettify/atelier-seaside-dark.min.css","10a0183644bd5c369616f0b94298c8f5"],["css/prettify/atelier-seaside-light.min.css","6fbd6de95fcd79393de5fbb4e7a3dac7"],["css/prettify/atelier-sulphurpool-dark.min.css","be693407f25090368983c17ad1fe1dca"],["css/prettify/atelier-sulphurpool-light.min.css","fcd7ecab5bfa792ac082257e73f08abd"],["css/prettify/github-v2.min.css","01fccac6dfbe2befe58590654a39f1c2"],["css/prettify/github.min.css","dab580bb047648b053d1546fe31e1215"],["css/prettify/hemisu-dark.min.css","7095b0461d4cf22e7935f0e447807c6d"],["css/prettify/hemisu-light.min.css","54e6d654c095a946b257a243ffd5f3f7"],["css/prettify/tomorrow-night-blue.min.css","2733cdcd81e2ca4e8d6598b2237c2eef"],["css/prettify/tomorrow-night-bright.min.css","f15804e96aa1b47d36233c5b02732f28"],["css/prettify/tomorrow-night-eighties.min.css","d8b250cd444ef8aafcaff7e5fd3f2830"],["css/prettify/tomorrow-night.min.css","4259c6664fdae3e77c5dbc2d5c10cf88"],["css/prettify/tomorrow.min.css","1c8792425eb2dedea306ec47bcb3c648"],["css/prettify/tranquil-heart.min.css","ba5de9f48f4cb1b3b12b42fe047cc30e"],["css/prettify/vibrant-ink.min.css","7b913faaa19c1af792ed54c7e0cf3deb"],["css/prism-line-numbers.css","0564af490a8f693fd09dd696e9734a8f"],["css/prism.css","12172c9e0b25e59e8e925b84065c78f0"],["css/style.css","d076c234da67bef747946e096fcd155b"],["css/style.min.css","34a865290917c3f73ae93479a78c0efb"],["css/uc.css","31dc264064481a02fb48046046a76084"],["fonts/MaterialIcons-Regular.eot","e79bfd88537def476913f3ed52f4f4b3"],["fonts/MaterialIcons-Regular.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["fonts/MaterialIcons-Regular.woff","012cf6a10129e2275d79d6adac7f3b02"],["fonts/Roboto-Black.ttf","4dae2e3c6207a71de6b078b879230062"],["fonts/Roboto-Bold.ttf","a68db3b33213fa138e6f72a5b76ac632"],["fonts/Roboto-Light.ttf","8d252992868e895b059335848dec3402"],["fonts/Roboto-Medium.ttf","989d2dff37a09f19c6dbc6f0e8f9b4ea"],["fonts/Roboto-Regular.ttf","8f793587dcf03f31c551c5b60d175fc2"],["fonts/Roboto-Thin.ttf","21c61396b4bea54e7308a7cda49edbe0"],["fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["img/avatar.png","0acf37b762876c3999bb712819ef0fe3"],["img/bg.png","4491b5e3d2320fb530a6ecf4a3d27e9b"],["img/browserstack_logo.png","9901607d552cbf936a8c86e6f206aa47"],["img/daily_pic.png","8655723de1bfb93de6290938f18cb8a0"],["img/favicon.png","7a80435df04b3eb691b8f172f09a8473"],["img/footer/footer_ico-bilibili.svg","d67fcd7d1fa5999e9a785b2dfaa39f2c"],["img/footer/footer_ico-facebook.svg","64c580c2986d6f16d04b1c4d3b896fd2"],["img/footer/footer_ico-github.svg","4b3dc07ff72cee5be0eff6a100a354cd"],["img/footer/footer_ico-gplus.svg","7d75444af4019d5612e2005ab501eca5"],["img/footer/footer_ico-instagram.svg","c8eaf1f2fe5f4d9a7b26f2981d6f14ed"],["img/footer/footer_ico-linkedin.svg","5e4c53b53c9d59880c6e483d57309a6a"],["img/footer/footer_ico-segmentfault.svg","dbf66b5f0165802dc698eec23e147967"],["img/footer/footer_ico-telegram.svg","50e65465cc40292f7101255daed7c593"],["img/footer/footer_ico-tumblr.svg","b127eb5d3e455ba8794ddc4d060df5bc"],["img/footer/footer_ico-twitter.svg","90ff42c9e275a7cd7ca5bf4291c93961"],["img/footer/footer_ico-v2ex.svg","3500b18a911b661a2b379b36b39def20"],["img/footer/footer_ico-weibo.svg","f1f6375680122267b9ebfc3b546307e8"],["img/footer/footer_ico-zhihu.svg","39538ba6607a9dcadf6d4dca35b687b8"],["img/gallery/arrow.svg","f3f776676f3b78b5180c9d2e08c2d532"],["img/gallery/close.svg","181336ad0bd48cdde68d7fb8be304daf"],["img/gallery/spinner.svg","2a61c8efd2d72146d79a2f6692840a85"],["img/logo.png","7a80435df04b3eb691b8f172f09a8473"],["img/random/material-1.png","0c4e486759ad62e3415f8f197f0311f7"],["img/random/material-10.png","2263d9d1cc9b0724e6331374c33f988b"],["img/random/material-11.png","41127baf9a286e968a63653dee50ba21"],["img/random/material-12.png","2507dbe92186b0b39df6331347aa2c27"],["img/random/material-13.png","5d127887b6d043259f7e2fb99cd08175"],["img/random/material-14.png","84c21a53679bddbe415fdae1d3c02163"],["img/random/material-15.png","ec116546453394cc0d78e580d6d52dd5"],["img/random/material-16.png","39a5dca2dc2de60bd5dd191f205db7d6"],["img/random/material-17.png","30a855e361dcf170aecdce04ce564c68"],["img/random/material-18.png","584900ff821930a8b093b4c0a58be34b"],["img/random/material-19.png","c004830c8683856939dc83b75b230b66"],["img/random/material-2.png","fa4f4588b9fab07979acd61b94d34fa0"],["img/random/material-3.png","418c3457b6792eb732844d41d2501294"],["img/random/material-4.png","99898b727359e568759eebbb2c9e4a8b"],["img/random/material-5.png","e521776cb427f848546e20d784888a55"],["img/random/material-6.png","db810792edf3d40de5baf5401a9a0626"],["img/random/material-7.png","d7e9fe3e0e3db6b841ab12fad331daed"],["img/random/material-8.png","9f1914138052c3a631e1f2b2cf674a46"],["img/random/material-9.png","069b687b7f1069254c816a56317bfaad"],["img/sidebar_header.png","0ac2232bb0756d0d4e5f04875b443217"],["img/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["index.html","9699dd4fb8b93a61e2704ebb226b11ed"],["js/MathJax.js","1bef8ba3b323e77cd264bfc09662ae1e"],["js/Valine.min.js","c640924dc2c3508b1a1c8f3ab726f3fa"],["js/gallery/gallery.js","54dbd709efe8893194901af3fce1379d"],["js/hanabi-browser-bundle.js","3e48b9fa9ce496eaaee7783ea2e316a4"],["js/ie-blocker.en.js","eb054767893aa2f8e981be25c4221415"],["js/ie-blocker.zhCN.js","861699947bcd571f62d6dc10f1c43be0"],["js/jquery.min.js","a9cbac0142cd78192ca9f7ea50cdbe22"],["js/js.js","d69f3cf073c561b1820bbdd62b60bb06"],["js/js.min.js","067f54cc49bc46b052c6ac99074ccf8c"],["js/lazyload.min.js","d4171fcee357a95fa7b45ea0abee57dd"],["js/lsloader.js","d01962f06751b296c985a8fee73019f8"],["js/lsloader.min.js","fdef13cf99a299ae566d65ab828cdc19"],["js/nprogress.js","a65dd085bf65bea475165c8b5276b563"],["js/prettify.min.js","58dd3b7e2bc741230a5b2ec1987041eb"],["js/queue.js","3ef240fa4fc55888e5e234e48f23fc95"],["js/queue.min.js","1677e3c59497558a9f53b73b726dedc6"],["js/smoothscroll.js","94ecbf0028f9b2e48d8bb6551556e915"],["links/index.html","3681a7df8e0cf0cd6748a76778c790bc"],["live/index.html","5963faaafa92f12bc54551cafcd7f37d"],["myfiles/css/bootstrap_liyin.css","c94f41110432c5f63d6c0f411a9e19fd"],["myfiles/images/PWA/logo072.png","b6d0bd5d5eaed02bcaa097480262845e"],["myfiles/images/PWA/logo192.png","09a7f9105942ce2044344dcd648e7a05"],["myfiles/images/PWA/logo256.png","14ccbe0f4e7b75637c2f0583c8fc7291"],["myfiles/images/PWA/logo512.png","00de9954c985fef8b32ceeb019540124"],["myfiles/images/amiba/1.png","c09704d708191afd6275dffe00cb7587"],["myfiles/images/amiba/2.png","159fc61f7ff373bd4576627e10fb8a31"],["myfiles/images/amiba/3.png","f78e34ab0895352447605c75b3698b49"],["myfiles/images/amiba/4.jpg","88d64ce70de4a083c6ea0e7b9abe81d3"],["myfiles/images/avatar.min.png","f926293e70b42b903ee681df10fa541c"],["myfiles/images/avatar.png","50563cfd716ef38ac504ceb1545361f5"],["myfiles/images/cachemoment.svg","200e6d663a4bea67a6d0f4a85bf18932"],["myfiles/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["myfiles/images/daily_pic.jpg","aa8f648f4b2bd0d3b4fb6f1a1dfe1d77"],["myfiles/images/favicon.png","7d0e50ede2f4bebc87b59f94ece9f08f"],["myfiles/images/logo.min.png","79888a29f8d834256191077e218d9e96"],["myfiles/images/logo.png","c49cd5fd22e38b63292740ab0f5071c4"],["myfiles/javascriptbookmark/pjjsblet.js","4190a415871256ca7dc0facdf36f4246"],["myfiles/js/combined.js","d784fa8b6d98d27699781bd9a7cf19f0"],["myfiles/js/hmthelper.js","5b4615653b79f4bb2008524b60dac42a"],["myfiles/js/linkChecker/linkChecker.js","3774991471d73b50382facffc1825cd5"],["myfiles/js/linkChecker/main.js","03c69efec85a158067f49159f063eb00"],["myfiles/js/links/links.js","822910dde8f26de60893cd1582e93df8"],["myfiles/js/links/main.js","db6004771eb64c707c9c9185db71e03d"],["myfiles/js/menufix/main.js","1e5baa37aa73581f339e1d9f43a85fc8"],["myfiles/js/menufix/menufix.js","bf0136593dbca4111775a7af608951de"],["myfiles/js/nomirror.js","ec8461064e2ce285ef3b45a008f30e58"],["myfiles/js/yiyan/dependency/jquery.noty.packaged.min.js","e064d6a7566edc482527936efff5fc67"],["myfiles/js/yiyan/main.js","68989e5dab463c6c9cfa9bf564912166"],["myfiles/js/yiyan/yiyan.js","8697b87414674b45cd9c7165d6842fcb"],["myfiles/links/avatar-KeJun.png","4728ef21c49df76c6a4bb9e552fd10c5"],["myfiles/links/avatar-Marnger.jpg","30037cf1e0a8688c5ddc3a3bd49f9f2e"],["myfiles/links/avatar-Vigorous.png","386a122b977449fc4cf441309fc4e8fe"],["myfiles/links/avatar-ccooss.jpg","575e68a76914b5ab4c20ee453a423607"],["myfiles/links/avatar-halyul.png","1f96e22e0f849d6d578872a11c115e05"],["myfiles/links/avatar-iVanilla.jpg","d781159043acbe0b37eac2a3dffd33ad"],["myfiles/links/avatar-imeto.jpg","088db10a843e02f779924b114f6adbee"],["myfiles/links/avatar-imiku.png","aa44885c8abb51241162087b9c829902"],["myfiles/links/avatar-kookxiang.jpg","e656a6b1751048375d6fe1401950fa43"],["myfiles/links/avatar-luo.jpg","d4b9e25bd739561c8eb92961fcd0b64e"],["myfiles/links/avatar-lwl12.jpg","f1f019d67b3c516753ad3caef01585a9"],["myfiles/links/avatar-nekolines.jpg","ffae6c96344109b1d239cb096b144e0a"],["myfiles/links/avatar-pdc.jpg","5666c1b01d95e602f2a4db04c47ee3c6"],["myfiles/links/avatar-petercxy.jpg","95d517ae2b9c2420787b4fdbe17d2e97"],["myfiles/links/avatar-troy.jpg","0346ecfe9e528cdbf63b4afbcf2eff88"],["myfiles/links/avatar-yashi.png","8ac30256764a0cf85893fc147c5204b9"],["myfiles/links/avatar-yiyangwang.jpg","be83908f1ef6ee24af4575adb881ff33"],["myfiles/links/avatar-yukari.png","87de1cc70e12d6afd4875bd04d7a2cc5"],["myfiles/links/avatar-zhaoj.png","00c54730ebaa749bc3af1f13b5c5baa5"],["myfiles/thumbnail/Alpine-Linux-折腾记.png","7e8fece2fef24a5970eaa88bad24f746"],["myfiles/thumbnail/An-Adobe-Crash.png","c2bc5ce88fb1b6951db0046735c7db8d"],["myfiles/thumbnail/Project-My-Screen-App.jpg","81f43d89dfd18b7ecc15001be2cbc1a3"],["myfiles/thumbnail/QQ-Flash-Capture.png","1763b461d41f8850d9f5e3f0c4784417"],["myfiles/thumbnail/ZF-Loginpage-Fix.png","f1d7ef95522d8123940deeb984dc5ea2"],["myfiles/thumbnail/slogan-.png","fdabbd2f38a7599ca5ca012b97ae33d3"],["myfiles/thumbnail/slogan.png","0e4278c5c78ddcf335c3564b1694fdb4"],["myfiles/thumbnail/加入了喵窝.png","51e35b91a8362e27085e3bc5cf49c5cc"],["myfiles/thumbnail/学堂在线自动刷视频时间.png","23b5609d4294f645e5e17afdec5c3a90"],["myfiles/thumbnail/正方教务系统自动教学评价.png","775c5546755531577d94bde3c870d904"],["myfiles/userjs/AutoXuetangx.user.js","86a3c0efe1e5c64fdc985be9b7e995e7"],["myfiles/userjs/FixZFLoginpage.user.js","67dbdf3321eca739036ad201eb1f249a"],["page/2/index.html","b720970d968d01d4c2ef7d050368732c"],["page/3/index.html","b2f9a352a62f811ef43e08e753ea39a7"],["page/4/index.html","8627d1ae4b21cb0c8c8c179cd47365c1"],["skyedge/index.html","b21386afe6b89c46a9337d4314d56cf8"],["slogan/index.html","d3a190bc8f681201f2e39248a48e1ddb"],["tags/Adobe/index.html","aee8d706dc2fc5da1de12a7a67fb9d1d"],["tags/Android/index.html","c5a71c65d045b28d3f226314b3de705d"],["tags/CaaS/index.html","e436824f99bfaf7fd594e91445950936"],["tags/DNT/index.html","e4d5148ce88b23047fec5296d2cc2430"],["tags/Do-Not-Track/index.html","bd7f910f4c6847273e60335aa4b74783"],["tags/Docker/index.html","aacb21470678e5b28f2e3d07cf36994e"],["tags/GTag/index.html","4d2778bcf4f9b3f4b96d1462f6c90db0"],["tags/Google-Analytics/index.html","b005743dd2e7ee1f86da8494c583faf1"],["tags/Javascript/index.html","e63584871166bc5012c408672981accf"],["tags/Jupyter/index.html","0aac678047985bf916c0e25163b1a84c"],["tags/Linux/index.html","0f7677c27868be430b42c14a0acbb664"],["tags/Lumia/index.html","542da21b9fff4df7e534607c7864091d"],["tags/Matrix/index.html","9da6a02d0e5c0182c4dbf2d190763c9c"],["tags/Minecraft/index.html","aada50af94d643e674667989efb8cac2"],["tags/OnePlus5/index.html","589dc26403217610203207cf1e48da96"],["tags/PGP/index.html","2150ed6a17e14cc0b4fdd13e69662663"],["tags/Python/index.html","c42dcc3ab6c4e058dfc5f315684dd846"],["tags/RDP/index.html","578dab1537aeca51631e4f0731a33f52"],["tags/RemoteApp/index.html","1acc051f52b04160eef27cf3c5d9cbb3"],["tags/SSR/index.html","0b22e2fe1b1cc282488c0b68c8331680"],["tags/Wechaty/index.html","3f8ec47172c65937015af9466d0dae92"],["tags/WindowServer/index.html","63d409983bdced152cbfec81d4bb45c4"],["tags/Windows-Phone/index.html","bf53931e8a1a794ebec8e1eb120485bf"],["tags/Windows/index.html","7ca6188be8f2b3e7ac053ef45a654586"],["tags/Wolfram/index.html","c71d3351ee3ee9a2acf73c2cb5a9ff3c"],["tags/bPlayer/index.html","132494a84d940c5641343ec19c0f12cf"],["tags/btrfs/index.html","b69c461c76874327849f886f7e50c7ea"],["tags/hexo-material-theme/index.html","c3286231b4377dffe72ec3f86fbadb11"],["tags/index.html","1a20cbbba9857537df3355e43b7dcdd1"],["tags/一加5/index.html","5f35a77b4e520169429c1eac01d97abd"],["tags/主题/index.html","f40196d8203f3af97f5098d4d1feee46"],["tags/云/index.html","f8902f3dcdf21f8ac824545e1eac40c7"],["tags/优化/index.html","a47908419248c9f62d118a2b7fcdab66"],["tags/千锋/index.html","6508c23ce0d55bcc720c7e6df21d4de8"],["tags/博客/index.html","a6bfd1f3c97af3c122a831bc20b554be"],["tags/喵窝/index.html","c2bc205426f905df25ef97740f2bee6d"],["tags/安全/index.html","a430016f07cf2e7a0a6f5c5b3a67534b"],["tags/屏幕同步/index.html","91c844c3aeca3098a7bf98fad5bb428a"],["tags/崩溃/index.html","e78ed145f4d874d3e0110c6d3589b52f"],["tags/工作/index.html","5434a21f1f50e29b08956a9f60257872"],["tags/开箱/index.html","5837c44d3359c217b21dc0628a987129"],["tags/微信/index.html","13b20f5b0eacd47cce3e47ab14e9837b"],["tags/总结/index.html","77b9006d7d8a2feaaf3c85f10fef343a"],["tags/折腾/index.html","0ff6c014de5c4e957c3c5ab82c953bf0"],["tags/正方教务/index.html","26fd292a975df1e6831ddfaf7a2ab5fe"],["tags/毕设/index.html","2e4b2caa676c568b510460e547b88196"],["tags/游记/index.html","87ab15b12fbe9d051ac2139ea229d783"],["tags/瞎想/index.html","f613f395cae59b72ea2f7d0148c8a55b"],["tags/购物/index.html","c2ea910a32d5ffbfbde937db79363eda"],["tags/转运/index.html","532ac9a9a8b5356ffec8008325fe30d0"],["tags/闲聊/index.html","8fe747c1c90cc63f11be69d052f601b0"],["tags/阿里/index.html","4f60fb2de8f68c3ae5ed70b4a2227f04"],["timeline/index.html","fb19d7ffffb170f5b9f77a51c364bc78"]];
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







