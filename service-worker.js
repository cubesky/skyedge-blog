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

var precacheConfig = [["/2016/12/25/hello-friends/index.html","8664845ba48a2be82570aff23274ccd9"],["/2016/12/26/xuetang-auto-time/index.html","9eaa939c4cc49383da74eb2b93a16b9d"],["/2016/12/26/zf-auto-tech-rate/index.html","9a571686913b6dcd2b9652d5c36c70f5"],["/2016/12/27/project-my-screen-app/Project-My-Screen-1.png","1ef39212cd45595cc91f718dab07537c"],["/2016/12/27/project-my-screen-app/index.html","693ed34234f831c2af311d977f6f9560"],["/2017/01/05/blog-update-1-2-5/index.html","5249946bcb441128d07ddd2fac27d7a1"],["/2017/01/16/2017-first-snow/2017-First-Snow-1.jpg","9cc7dc9cca8233cf21b5f8ca3f21843b"],["/2017/01/16/2017-first-snow/index.html","b8a2a126eb372960244b37fd21fb3846"],["/2017/01/21/docker-minecraft-server/Minecraft-With-Docker-Docker.svg","7a372f89efa294ade59ab75079dd35f0"],["/2017/01/21/docker-minecraft-server/Minecraft-With-Docker-Forge.png","290614e1bd977fe14fb364a1afb0f064"],["/2017/01/21/docker-minecraft-server/Minecraft-With-Docker-ForgeInstaller.png","73270f9a6c875d7e6b52d1eeaf16bf6d"],["/2017/01/21/docker-minecraft-server/Minecraft-With-Docker-Minecraft.svg","74c8d665c483371f20ef379a0a23fc20"],["/2017/01/21/docker-minecraft-server/Minecraft-With-Docker-Qrcode.jpg","189666d232b3b8e823637f572229a436"],["/2017/01/21/docker-minecraft-server/index.html","fc87d3f444dc059f1a7ed87a76dd89ba"],["/2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-1.png","f1d7ef95522d8123940deeb984dc5ea2"],["/2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-10.png","8538f2000a35faa6531ffff3bd41e561"],["/2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-2.png","edf15f491fc62764691f41c917afc50b"],["/2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-3.png","7ea61f777e79e2d4d1aa2592ac598f88"],["/2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-4.png","6c135099403d8886aa424dbe70a096e9"],["/2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-5.png","3f73322fa7643329aedebe45f5a44231"],["/2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-6.png","28cf41fc8ce30ccc0d0615e31bcefa1a"],["/2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-7.png","eeb0cd409b0b1fea16ac457e33c98831"],["/2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-8.png","cce0ebeae12320b6e0e1568693900ad3"],["/2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-9.png","42d6bdd94d13bc6ff0e1b1ea8d6fde07"],["/2017/01/31/zf-login-page-fix/index.html","b8478e528b7c4d119b25d3d3c399a43f"],["/2017/02/11/thinking-2017-2-7/index.html","ea691349e277ab39e7336aad38f0051b"],["/2017/02/20/new-index-page/index.html","3e109d50609a00555450995a6e5693c7"],["/2017/02/24/blog-update-1-3-0/index.html","8302b279a437a992b2e2a939403c661c"],["/2017/02/24/join-into-nyaacat/index.html","54178cc7377772d83e3edaf2ec3fbe97"],["/2017/03/18/alpine-linux-setup/Alpine-Linux-1.png","d579df045218edd1ba295ed8997d0a85"],["/2017/03/18/alpine-linux-setup/Alpine-Linux-2.png","3ad9681a9276197fbaab3c3bcb94aa79"],["/2017/03/18/alpine-linux-setup/index.html","5a6b7df96046e28b8c1501faf3113145"],["/2017/03/19/linkchecker/index.html","7293e33a9d6ea08d7eb703875c1612b8"],["/2017/03/22/qubesos/Qubes-1.png","1b519a6c55d8e6369558d5ec1a2f9ced"],["/2017/03/22/qubesos/Qubes-2.png","a825929e73ac04f08bed8dea5a61ef0c"],["/2017/03/22/qubesos/Qubes-3.png","e5bd609fe224a7c039debb0551fa5102"],["/2017/03/22/qubesos/Qubes-4.png","29701f14f533448b2db2c3380df8dd9b"],["/2017/03/22/qubesos/Qubes-5.png","846a37c97761cf19e0c890f9ee979653"],["/2017/03/22/qubesos/index.html","61787ed499b138c403ddf44f091fce2a"],["/2017/04/02/pgp/index.html","380ba223fbf20d0d32a41c3d18fc1849"],["/2017/04/14/btrfs-crash/index.html","8bb4254e9e2d574611a93f9e0b2db91b"],["/2017/04/30/one-adobe-carsh-resolve/Crash-1.jpg","5fc7dfc34d92270584173e5bd95d854a"],["/2017/04/30/one-adobe-carsh-resolve/Crash-2.jpg","99a2e1d164b2b13486698e2560df7d8c"],["/2017/04/30/one-adobe-carsh-resolve/Crash-4.jpg","f0290dbf31895beb00408cf506dc2fed"],["/2017/04/30/one-adobe-carsh-resolve/Crash-5.png","cea9775592152450f3c9a153c279ee3a"],["/2017/04/30/one-adobe-carsh-resolve/index.html","6bb040cc73376d9c30239010b89d9682"],["/2017/05/09/qq-flash-photo-capture/index.html","7c5a7635c567e6795356f8f19da326ff"],["/2017/05/09/qq-flash-photo-capture/qq-flash-capture-1.jpg","35e5f78517151457e356dfe06a88c755"],["/2017/05/09/qq-flash-photo-capture/qq-flash-capture-2.png","bd6943e6e6590a0b30702b2b7eb3c490"],["/2017/05/09/qq-flash-photo-capture/qq-flash-capture-3.png","282b442fbe69cabf0543c521ba4d120c"],["/2017/05/09/qq-flash-photo-capture/qq-flash-capture-4.png","dcc067a92b808d704569188157e4f031"],["/2017/05/09/qq-flash-photo-capture/qq-flash-capture-5.png","e89f94ebaa9584d875079a20760314a3"],["/2017/05/09/qq-flash-photo-capture/qq-flash-capture-6.png","9ef43fad94d5cb28ecf4671c71c921fe"],["/2017/05/25/letapkfly/index.html","9e03d32475733cb757523d44197d0b29"],["/2017/06/18/why-not-continue-use-eclipse-on-android-program/index.html","c12a79de28e52d4af87fc5c954f729b9"],["/2017/07/02/oneplus5/Assistant.png","8d7d5edfa2b9570b1e181f5a0014e21c"],["/2017/07/02/oneplus5/Battery1.jpg","39115cd11172e9ae2b04626c7d36506d"],["/2017/07/02/oneplus5/Battery2.jpg","6688f3daf9e840739226687dd2467502"],["/2017/07/02/oneplus5/Magisk.jpg","25066a340f3becdda3473d75aabc13f0"],["/2017/07/02/oneplus5/MagiskHide.jpg","65a248b95eaa22c96b9e158cfa27d9ac"],["/2017/07/02/oneplus5/MiPush.png","fcde84b0dc38a466c7ddd2f097a73f6b"],["/2017/07/02/oneplus5/NowOnTap.jpg","ea572ec6ebf675d8857907060457be07"],["/2017/07/02/oneplus5/activitylauncher.jpg","0e0609aead74bd3550050db63796da54"],["/2017/07/02/oneplus5/bridge.jpg","cc6ceee5256d99b92c857fc013f7fbb9"],["/2017/07/02/oneplus5/developer.jpg","79d717ac443aa0a17ad46e2d9f58af5c"],["/2017/07/02/oneplus5/egg.jpg","64b75bada828632c277ccfe8e2f96fe8"],["/2017/07/02/oneplus5/greenify.jpg","7c670fd5e21eae565de287b44cfda3cd"],["/2017/07/02/oneplus5/index.html","07cb92bee645c257ce9fc5fdd5dd92b6"],["/2017/07/02/oneplus5/island.jpg","9973474efcd37d926a228f3ae4a128f2"],["/2017/07/11/buy-and-trans-jp/index.html","aa81ed7e5c496be373eb8ab90877add5"],["/2017/09/15/lifbbs/index.html","124c0cb419de3bf28d1f92971f51c904"],["/2017/09/29/unbox-alimooncake/all.jpg","755fc1501f48408dfacaf533a4e63813"],["/2017/09/29/unbox-alimooncake/box-out.jpg","4be57e0f9ee7c925abb4ed7a41410dee"],["/2017/09/29/unbox-alimooncake/box-together.jpg","36d50880f2432a3d22c015177393baa2"],["/2017/09/29/unbox-alimooncake/box-zoomin.jpg","bd4a67856bd31d3fc5f4640ea52871aa"],["/2017/09/29/unbox-alimooncake/index.html","40f39b3631ee5a0ab325a461cab64d7b"],["/2017/09/29/unbox-alimooncake/open-all.jpg","87744b866ce0be2ab6799c5839b81816"],["/2017/09/29/unbox-alimooncake/open-left.jpg","039dc0f5aa4a296e13fa82ff459dd602"],["/2017/09/29/unbox-alimooncake/open-mooncake.jpg","3375eee7411daabe58145c2911a7b7a6"],["/2017/09/29/unbox-alimooncake/open-right.jpg","1cf03d0e3a15684f879712b0086cba0c"],["/2017/09/29/unbox-alimooncake/unbox-self.jpg","bbb821e0c7e61c8daab409707f45aefc"],["/2017/09/29/unbox-alimooncake/unbox.jpg","f5a16801f22b85512f6e36c19fc04a02"],["/2017/11/18/bplayer/index.html","99f021d21be5d39332fc2ef79b814e2b"],["/2017/11/18/talk-2017-11/index.html","ad8d110307aa754021d47d5eed9c5ca9"],["/2017/11/29/android-optimize-app/index.html","8206696f41d722ad9b76d87ada94747b"],["/2018/01/02/bye_2017_hello_2018/index.html","daeca5843e591da41043e070f12a0b91"],["/2018/01/02/bye_2017_hello_2018/liyin.jpg","93511ae6f31039554649151cecf2075f"],["/2018/04/19/blog-categories-sort/index.html","8a447cf87c40f975c3e45d9fb8e89059"],["/2018/04/19/googleanalytic-dnt/DNT_Chrome.png","b29018d9a489b9fe982c5566c28a1786"],["/2018/04/19/googleanalytic-dnt/DNT_FF.png","3288dbba8587a5be92616c9bb9cecba6"],["/2018/04/19/googleanalytic-dnt/GTag.png","bfe2268449c12c03b7fbeb1cb47d1c34"],["/2018/04/19/googleanalytic-dnt/GoogleAnalytics.png","2dbb3936bd769bae38e03454d7e5105d"],["/2018/04/19/googleanalytic-dnt/index.html","fc077a18526512a70f238e176b0425de"],["/2018/05/02/use-ssr-on-gnu-linux/Tumbleweed.png","b3624ba8c14ab0b4b577980604cf206b"],["/2018/05/02/use-ssr-on-gnu-linux/index.html","d44382809842662abac808840c257267"],["/2018/05/02/use-ssr-on-gnu-linux/x220.png","e1dfd05e03ae8f60a0e143d68d5af277"],["/2018/06/16/talk-2018-06/Table_1.png","5c36a292351acb432e96b9489e76d6a8"],["/2018/06/16/talk-2018-06/index.html","c793af29c732e6efb469fcdf9e266cbf"],["/about/index.html","3eb54691ad89f98cca057b6f90c04f08"],["/amibafix/index.html","d541b80de2028cf1f7bb13ba4a34500a"],["/archives/2016/12/index.html","df28cfe7cb81dbcb7e4efab42041dcbf"],["/archives/2016/index.html","20cafc750216d05ff749b971ca0e5bc5"],["/archives/2017/01/index.html","73bf76738669f2f12549a7c734bb4029"],["/archives/2017/02/index.html","4421452156a16d8ed921bc6c98559e82"],["/archives/2017/03/index.html","bf32fc6bd5523e690937869ddc2fa661"],["/archives/2017/04/index.html","080fffd74d42ff1e6d1e8aad4123f81d"],["/archives/2017/05/index.html","771d3471b6720ca8f35fd4b044964116"],["/archives/2017/06/index.html","6a0e2e16fa5564f6f88674e29ce01234"],["/archives/2017/07/index.html","5b266d66f551a60ed7c632767e51acec"],["/archives/2017/09/index.html","9bd3c4c48a784909c17f8f81012e14a9"],["/archives/2017/11/index.html","4abb41c9ccab5114595eb4257e8d9197"],["/archives/2017/index.html","7b1a9e6ff019da64f2ef6347d27fdafa"],["/archives/2017/page/2/index.html","a98002c466db1db2749698a69a27954f"],["/archives/2017/page/3/index.html","a5f7a96eee2197f54559887530df5d6b"],["/archives/2018/01/index.html","604276d760de8fac1e48a1f92209eb30"],["/archives/2018/04/index.html","b7c0cb0f566f01423bab4cb5254210f1"],["/archives/2018/05/index.html","50e61d79c7722886bd1e3d644c373774"],["/archives/2018/06/index.html","14aa13f7058794315a9fd195b263b4e5"],["/archives/2018/index.html","9f3d50ff23e0fd2c1c25a27167821330"],["/archives/index.html","9da40737f1bc306da3f7f9c1277ae195"],["/archives/page/2/index.html","094367ac26ee411a24f36ebfad8b98bc"],["/archives/page/3/index.html","1563e15a8d9fd4f09f9f314d5bfaf4cd"],["/archives/page/4/index.html","6c918c2d10f5452ffe19512403568b2e"],["/bangumi/index.html","5b16a59e187678156a7b5b09bf1c4210"],["/categories/Javascipt-书签工具/index.html","830ec733dac032611176c1cc9c25bd55"],["/categories/崩溃/index.html","29d8a6fb112323e1a674eb77b70895e8"],["/categories/开箱/index.html","17773903d88230a0b3875b59cdcd26ee"],["/categories/技术栈/index.html","b9ea75a05f26c8cdf9c0b9ea8d5694c2"],["/categories/推广推荐/index.html","c8e55d099860bea10d36df9f58e078d4"],["/categories/购物/index.html","128cae8db0abdc48346d5e6470bffdcb"],["/categories/闲聊/index.html","593ae4b3f6ffc58bd17a99612b5bb045"],["/categories/隐私/index.html","6da1c621c7843dccfec9cec94ef9b1c4"],["/class/index.html","5436236652dcc5e5c3dc16ef72c11d45"],["/creativecommons/index.html","1407649abd0d0aa300a1848f04597c40"],["/css/disqus-proxy.css","87976db321c1c288aa3d9d4af06c8ad8"],["/css/disqus-proxy.min.css","caa38dd245e9da4c20580c256e540bd6"],["/css/duoshuo.css","bdd8f7eb0dd14fc7e719cab11e685a9e"],["/css/duoshuo.min.css","6457d80daef45eca1f7399b2329b1dc2"],["/css/fontawesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/gallery.min.css","a62dc56ec5981c978cddcba32f2dc875"],["/css/ie-blocker.css","4c323bd282014d64264bad241f1c14d3"],["/css/material-icons.css","a6a841fd177f69bd07dbe919a744439b"],["/css/material.css","f65ff1c879db0e257bd7d9521f0eaa57"],["/css/material.min.css","67b6bbd91d44e12c7304a47f58672d38"],["/css/prettify.css","074dc30ad95ce2f227848a2c38bc7fbd"],["/css/prettify.min.css","ce9f124ce53dbfcf5758512737ee9899"],["/css/prettify/atelier-cave-dark.min.css","78d9bbfc7d0f526727e9da749cd08a44"],["/css/prettify/atelier-cave-light.min.css","e4c2bf4caff36e974733bae61be7a10b"],["/css/prettify/atelier-dune-dark.min.css","4aafbf8ec70b42c2b7964aa2b347bf68"],["/css/prettify/atelier-dune-light.min.css","65f9c4494342967919044e847347634c"],["/css/prettify/atelier-estuary-dark.min.css","79f259a7e1a0ab58772d339f97c53bf7"],["/css/prettify/atelier-estuary-light.min.css","65039bc195c71fa32df0c35bc902587d"],["/css/prettify/atelier-forest-dark.min.css","cbc537385cc8ab19748f9d4160a1e46c"],["/css/prettify/atelier-forest-light.min.css","1dda1f8f21aeedbe0fb68caf55c615e0"],["/css/prettify/atelier-heath-dark.min.css","b52d843659b13491b555f324bebfe9e8"],["/css/prettify/atelier-heath-light.min.css","0d999c502c821f1b761ad772d7301067"],["/css/prettify/atelier-lakeside-dark.min.css","f48fd98ed8f7ed8aa59fb57c87247b23"],["/css/prettify/atelier-lakeside-light.min.css","bc790feb4057204347c45ea551d0d784"],["/css/prettify/atelier-plateau-dark.min.css","e81b69c147a9ffbd298dccdaf02a810f"],["/css/prettify/atelier-plateau-light.min.css","ad2d0ed869dc8142306110f8b7fa9035"],["/css/prettify/atelier-savanna-dark.min.css","b3a404d78c50fbe9968d0d4dac123484"],["/css/prettify/atelier-savanna-light.min.css","7d4087bd0552352c12ee3dd8f397db75"],["/css/prettify/atelier-seaside-dark.min.css","10a0183644bd5c369616f0b94298c8f5"],["/css/prettify/atelier-seaside-light.min.css","6fbd6de95fcd79393de5fbb4e7a3dac7"],["/css/prettify/atelier-sulphurpool-dark.min.css","be693407f25090368983c17ad1fe1dca"],["/css/prettify/atelier-sulphurpool-light.min.css","fcd7ecab5bfa792ac082257e73f08abd"],["/css/prettify/github-v2.min.css","01fccac6dfbe2befe58590654a39f1c2"],["/css/prettify/github.min.css","dab580bb047648b053d1546fe31e1215"],["/css/prettify/hemisu-dark.min.css","7095b0461d4cf22e7935f0e447807c6d"],["/css/prettify/hemisu-light.min.css","54e6d654c095a946b257a243ffd5f3f7"],["/css/prettify/tomorrow-night-blue.min.css","2733cdcd81e2ca4e8d6598b2237c2eef"],["/css/prettify/tomorrow-night-bright.min.css","f15804e96aa1b47d36233c5b02732f28"],["/css/prettify/tomorrow-night-eighties.min.css","d8b250cd444ef8aafcaff7e5fd3f2830"],["/css/prettify/tomorrow-night.min.css","4259c6664fdae3e77c5dbc2d5c10cf88"],["/css/prettify/tomorrow.min.css","1c8792425eb2dedea306ec47bcb3c648"],["/css/prettify/tranquil-heart.min.css","ba5de9f48f4cb1b3b12b42fe047cc30e"],["/css/prettify/vibrant-ink.min.css","7b913faaa19c1af792ed54c7e0cf3deb"],["/css/prism-line-numbers.css","0564af490a8f693fd09dd696e9734a8f"],["/css/prism.css","12172c9e0b25e59e8e925b84065c78f0"],["/css/style.css","a17a2be6861f791702cbba535751ea78"],["/css/style.min.css","30a7ad655ddc5137c3c6f31f7da39ece"],["/css/uc.css","31dc264064481a02fb48046046a76084"],["/fonts/FontAwesome.otf","0d2717cd5d853e5c765ca032dfd41a4d"],["/fonts/MaterialIcons-Regular.eot","e79bfd88537def476913f3ed52f4f4b3"],["/fonts/MaterialIcons-Regular.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["/fonts/MaterialIcons-Regular.woff","012cf6a10129e2275d79d6adac7f3b02"],["/fonts/MaterialIcons-Regular.woff2","570eb83859dc23dd0eec423a49e147fe"],["/fonts/Roboto-Black.ttf","4dae2e3c6207a71de6b078b879230062"],["/fonts/Roboto-Bold.ttf","a68db3b33213fa138e6f72a5b76ac632"],["/fonts/Roboto-Light.ttf","8d252992868e895b059335848dec3402"],["/fonts/Roboto-Medium.ttf","989d2dff37a09f19c6dbc6f0e8f9b4ea"],["/fonts/Roboto-Regular.ttf","8f793587dcf03f31c551c5b60d175fc2"],["/fonts/Roboto-Thin.ttf","21c61396b4bea54e7308a7cda49edbe0"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/img/avatar.png","0acf37b762876c3999bb712819ef0fe3"],["/img/bg.png","4491b5e3d2320fb530a6ecf4a3d27e9b"],["/img/browserstack_logo.png","9901607d552cbf936a8c86e6f206aa47"],["/img/daily_pic.png","8655723de1bfb93de6290938f18cb8a0"],["/img/favicon.png","7a80435df04b3eb691b8f172f09a8473"],["/img/footer/footer_ico-bilibili.svg","d67fcd7d1fa5999e9a785b2dfaa39f2c"],["/img/footer/footer_ico-facebook.svg","64c580c2986d6f16d04b1c4d3b896fd2"],["/img/footer/footer_ico-github.svg","4b3dc07ff72cee5be0eff6a100a354cd"],["/img/footer/footer_ico-gplus.svg","7d75444af4019d5612e2005ab501eca5"],["/img/footer/footer_ico-instagram.svg","c8eaf1f2fe5f4d9a7b26f2981d6f14ed"],["/img/footer/footer_ico-linkedin.svg","5e4c53b53c9d59880c6e483d57309a6a"],["/img/footer/footer_ico-telegram.svg","50e65465cc40292f7101255daed7c593"],["/img/footer/footer_ico-tumblr.svg","b127eb5d3e455ba8794ddc4d060df5bc"],["/img/footer/footer_ico-twitter.svg","90ff42c9e275a7cd7ca5bf4291c93961"],["/img/footer/footer_ico-v2ex.svg","3500b18a911b661a2b379b36b39def20"],["/img/footer/footer_ico-weibo.svg","f1f6375680122267b9ebfc3b546307e8"],["/img/footer/footer_ico-zhihu.svg","39538ba6607a9dcadf6d4dca35b687b8"],["/img/gallery/arrow.svg","f3f776676f3b78b5180c9d2e08c2d532"],["/img/gallery/close.svg","181336ad0bd48cdde68d7fb8be304daf"],["/img/gallery/spinner.svg","2a61c8efd2d72146d79a2f6692840a85"],["/img/logo.png","7a80435df04b3eb691b8f172f09a8473"],["/img/random/material-1.png","0c4e486759ad62e3415f8f197f0311f7"],["/img/random/material-10.png","2263d9d1cc9b0724e6331374c33f988b"],["/img/random/material-11.png","41127baf9a286e968a63653dee50ba21"],["/img/random/material-12.png","2507dbe92186b0b39df6331347aa2c27"],["/img/random/material-13.png","5d127887b6d043259f7e2fb99cd08175"],["/img/random/material-14.png","84c21a53679bddbe415fdae1d3c02163"],["/img/random/material-15.png","ec116546453394cc0d78e580d6d52dd5"],["/img/random/material-16.png","39a5dca2dc2de60bd5dd191f205db7d6"],["/img/random/material-17.png","30a855e361dcf170aecdce04ce564c68"],["/img/random/material-18.png","584900ff821930a8b093b4c0a58be34b"],["/img/random/material-19.png","c004830c8683856939dc83b75b230b66"],["/img/random/material-2.png","fa4f4588b9fab07979acd61b94d34fa0"],["/img/random/material-3.png","418c3457b6792eb732844d41d2501294"],["/img/random/material-4.png","99898b727359e568759eebbb2c9e4a8b"],["/img/random/material-5.png","e521776cb427f848546e20d784888a55"],["/img/random/material-6.png","db810792edf3d40de5baf5401a9a0626"],["/img/random/material-7.png","d7e9fe3e0e3db6b841ab12fad331daed"],["/img/random/material-8.png","9f1914138052c3a631e1f2b2cf674a46"],["/img/random/material-9.png","069b687b7f1069254c816a56317bfaad"],["/img/sidebar_header.png","0ac2232bb0756d0d4e5f04875b443217"],["/img/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/index.html","f4b4fb1dd035fe49e26f771544252371"],["/js/MathJax.js","1bef8ba3b323e77cd264bfc09662ae1e"],["/js/Valine.min.js","c640924dc2c3508b1a1c8f3ab726f3fa"],["/js/gallery/gallery.js","54dbd709efe8893194901af3fce1379d"],["/js/hanabi-browser-bundle.js","3e48b9fa9ce496eaaee7783ea2e316a4"],["/js/ie-blocker.en.js","eb054767893aa2f8e981be25c4221415"],["/js/ie-blocker.zhCN.js","861699947bcd571f62d6dc10f1c43be0"],["/js/jquery.min.js","a9cbac0142cd78192ca9f7ea50cdbe22"],["/js/js.js","d69f3cf073c561b1820bbdd62b60bb06"],["/js/js.min.js","77e5d6e9a36e20f80e9f5880ecd9c1e2"],["/js/lazyload.min.js","d4171fcee357a95fa7b45ea0abee57dd"],["/js/lsloader.js","d01962f06751b296c985a8fee73019f8"],["/js/lsloader.min.js","fdef13cf99a299ae566d65ab828cdc19"],["/js/nprogress.js","a65dd085bf65bea475165c8b5276b563"],["/js/prettify.min.js","58dd3b7e2bc741230a5b2ec1987041eb"],["/js/queue.js","3ef240fa4fc55888e5e234e48f23fc95"],["/js/queue.min.js","1677e3c59497558a9f53b73b726dedc6"],["/js/smoothscroll.js","94ecbf0028f9b2e48d8bb6551556e915"],["/links/index.html","bf0406fb75bf30f270c6902717c7bd13"],["/myfiles/css/bootstrap_liyin.css","c94f41110432c5f63d6c0f411a9e19fd"],["/myfiles/images/PWA/logo072.png","b6d0bd5d5eaed02bcaa097480262845e"],["/myfiles/images/PWA/logo192.png","09a7f9105942ce2044344dcd648e7a05"],["/myfiles/images/PWA/logo256.png","14ccbe0f4e7b75637c2f0583c8fc7291"],["/myfiles/images/PWA/logo512.png","00de9954c985fef8b32ceeb019540124"],["/myfiles/images/amiba/1.png","c09704d708191afd6275dffe00cb7587"],["/myfiles/images/amiba/2.png","159fc61f7ff373bd4576627e10fb8a31"],["/myfiles/images/amiba/3.png","f78e34ab0895352447605c75b3698b49"],["/myfiles/images/amiba/4.jpg","88d64ce70de4a083c6ea0e7b9abe81d3"],["/myfiles/images/avatar.min.png","f926293e70b42b903ee681df10fa541c"],["/myfiles/images/avatar.png","50563cfd716ef38ac504ceb1545361f5"],["/myfiles/images/cachemoment.svg","200e6d663a4bea67a6d0f4a85bf18932"],["/myfiles/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["/myfiles/images/daily_pic.jpg","aa8f648f4b2bd0d3b4fb6f1a1dfe1d77"],["/myfiles/images/favicon.png","7d0e50ede2f4bebc87b59f94ece9f08f"],["/myfiles/images/logo.min.png","79888a29f8d834256191077e218d9e96"],["/myfiles/images/logo.png","c49cd5fd22e38b63292740ab0f5071c4"],["/myfiles/javascriptbookmark/pjjsblet.js","4190a415871256ca7dc0facdf36f4246"],["/myfiles/js/combined.js","d784fa8b6d98d27699781bd9a7cf19f0"],["/myfiles/js/hmthelper.js","5b4615653b79f4bb2008524b60dac42a"],["/myfiles/js/linkChecker/linkChecker.js","c479d9bf8e5576f5fdf2153654cde9b6"],["/myfiles/js/linkChecker/main.js","03c69efec85a158067f49159f063eb00"],["/myfiles/js/links/links.js","0054d0588a54341c7a5c79a5a7ab5c2b"],["/myfiles/js/links/main.js","db6004771eb64c707c9c9185db71e03d"],["/myfiles/js/menufix/main.js","1e5baa37aa73581f339e1d9f43a85fc8"],["/myfiles/js/menufix/menufix.js","9946c8dbf5754ebd956d4f199ffadbb0"],["/myfiles/js/nomirror.js","b99f2fcef872f9309ac1b0f142ef0078"],["/myfiles/js/yiyan/dependency/jquery.noty.packaged.min.js","e064d6a7566edc482527936efff5fc67"],["/myfiles/js/yiyan/main.js","68989e5dab463c6c9cfa9bf564912166"],["/myfiles/js/yiyan/yiyan.js","9fc67e21f4dd57c18c84d4d8435e1e60"],["/myfiles/links/avatar-KeJun.png","4728ef21c49df76c6a4bb9e552fd10c5"],["/myfiles/links/avatar-Marnger.jpg","30037cf1e0a8688c5ddc3a3bd49f9f2e"],["/myfiles/links/avatar-ccooss.jpg","575e68a76914b5ab4c20ee453a423607"],["/myfiles/links/avatar-halyul.png","1f96e22e0f849d6d578872a11c115e05"],["/myfiles/links/avatar-iVanilla.jpg","d781159043acbe0b37eac2a3dffd33ad"],["/myfiles/links/avatar-imeto.jpg","088db10a843e02f779924b114f6adbee"],["/myfiles/links/avatar-imiku.png","aa44885c8abb51241162087b9c829902"],["/myfiles/links/avatar-kookxiang.jpg","e656a6b1751048375d6fe1401950fa43"],["/myfiles/links/avatar-luo.jpg","d4b9e25bd739561c8eb92961fcd0b64e"],["/myfiles/links/avatar-lwl12.jpg","f1f019d67b3c516753ad3caef01585a9"],["/myfiles/links/avatar-nekolines.jpg","ffae6c96344109b1d239cb096b144e0a"],["/myfiles/links/avatar-pdc.jpg","5666c1b01d95e602f2a4db04c47ee3c6"],["/myfiles/links/avatar-petercxy.jpg","95d517ae2b9c2420787b4fdbe17d2e97"],["/myfiles/links/avatar-troy.jpg","0346ecfe9e528cdbf63b4afbcf2eff88"],["/myfiles/links/avatar-yashi.png","8ac30256764a0cf85893fc147c5204b9"],["/myfiles/links/avatar-yiyangwang.jpg","be83908f1ef6ee24af4575adb881ff33"],["/myfiles/links/avatar-yukari.png","87de1cc70e12d6afd4875bd04d7a2cc5"],["/myfiles/links/avatar-zhaoj.png","00c54730ebaa749bc3af1f13b5c5baa5"],["/myfiles/thumbnail/Alpine-Linux-折腾记.png","7e8fece2fef24a5970eaa88bad24f746"],["/myfiles/thumbnail/An-Adobe-Crash.png","c2bc5ce88fb1b6951db0046735c7db8d"],["/myfiles/thumbnail/Project-My-Screen-App.jpg","81f43d89dfd18b7ecc15001be2cbc1a3"],["/myfiles/thumbnail/QQ-Flash-Capture.png","1763b461d41f8850d9f5e3f0c4784417"],["/myfiles/thumbnail/ZF-Loginpage-Fix.png","f1d7ef95522d8123940deeb984dc5ea2"],["/myfiles/thumbnail/slogan-.png","fdabbd2f38a7599ca5ca012b97ae33d3"],["/myfiles/thumbnail/slogan.png","0e4278c5c78ddcf335c3564b1694fdb4"],["/myfiles/thumbnail/加入了喵窝.png","51e35b91a8362e27085e3bc5cf49c5cc"],["/myfiles/thumbnail/学堂在线自动刷视频时间.png","23b5609d4294f645e5e17afdec5c3a90"],["/myfiles/thumbnail/正方教务系统自动教学评价.png","775c5546755531577d94bde3c870d904"],["/myfiles/userjs/AutoXuetangx.user.js","86a3c0efe1e5c64fdc985be9b7e995e7"],["/myfiles/userjs/FixZFLoginpage.user.js","67dbdf3321eca739036ad201eb1f249a"],["/page/2/index.html","9aceeeafe6c3906ca7bd56ffc67b5873"],["/page/3/index.html","9647bcf1a8c51c0a9d9dc6748c5e5299"],["/page/4/index.html","08b0102bc49f1f1ea297257a38d51053"],["/skyedge/index.html","cac82150f4f8bb1a0fb87bc69f67f279"],["/slogan/index.html","c171a3975823454805f26f8b86bb3610"],["/tags/Adobe/index.html","aa15a1bf4d25d27895ce0a2c44184d24"],["/tags/Android/index.html","c2a334c026b566bb4560fea7a37deb7d"],["/tags/CaaS/index.html","9c3d3a78647135de8194465a1d76cb7d"],["/tags/DNT/index.html","6ef182fcb50d6f1bfbb385b52612dae8"],["/tags/Do-Not-Track/index.html","fc256d779ae86321bae92d6931b39edd"],["/tags/Docker/index.html","82b9190cf9e35b54acb7dcaa8a101f7f"],["/tags/GTag/index.html","371c99e9828eb9f15c03941161d40131"],["/tags/Google-Analytics/index.html","949c9fbcd2e2da0a3bf64b94068ded66"],["/tags/Javascript/index.html","7fc03a966655c6dae49a8ca499d76ce0"],["/tags/Linux/index.html","5b591872f880bd962d98210689c2b49e"],["/tags/Lumia/index.html","80605ecf3e7c60e8cc4077dd4aed7f25"],["/tags/Minecraft/index.html","3de040af6a7af3ca07d3337e13645801"],["/tags/OnePlus5/index.html","1d33ffde03102015bd7da2d7efb9fb3b"],["/tags/PGP/index.html","fbafb06b221337fccf0f3b79701aaeef"],["/tags/Python/index.html","3745c3b13068aad12c8e7ebfe00742ec"],["/tags/SSR/index.html","7d79a894b5e36d43fece2ac4df12d183"],["/tags/Windows-Phone/index.html","9eb979128f863a7d7c1f1382a3e1d7f6"],["/tags/bPlayer/index.html","786f465a763664d2c6b4918708efa2e6"],["/tags/btrfs/index.html","56f3dc62590d12e1c3d803187999aac6"],["/tags/hexo-material-theme/index.html","4ab178ce548b9030af3a70c5170e062a"],["/tags/index.html","20755b9e75997c953f469d4352c4aecf"],["/tags/一加5/index.html","463e7870a6df8cfc7feab0b4ca8c3f3b"],["/tags/主题/index.html","1a731a5df5673097c2694a9cdfe045c9"],["/tags/云/index.html","d5f7aa506c7b4a0e98716204141001dc"],["/tags/优化/index.html","c60ee542dd737d56dce46cd31a1d85e5"],["/tags/千锋/index.html","55c714291b1589e1e9b8f39951ba034e"],["/tags/博客/index.html","254a946a524b12464f6e285df477943f"],["/tags/喵窝/index.html","58e8d38d87421a1da76de77cc49a7096"],["/tags/安全/index.html","6a42ad4a4bc3f1d57049d1cb0877ea81"],["/tags/屏幕同步/index.html","bfab5157e84c0b449ae65c854370a9a3"],["/tags/崩溃/index.html","4001bdfa07fd6e5477b7cb2485786475"],["/tags/工作/index.html","8363940e030df8deb37d4f6d47fa5db1"],["/tags/开箱/index.html","f23925afbc93ac98855f19f10b063917"],["/tags/总结/index.html","1b8a5ea40a9b77ead7258cfa357b3263"],["/tags/折腾/index.html","1638a25997a4e379b4fdf03ecc6cb2db"],["/tags/正方教务/index.html","244944ced9f94ab1026ad681f930ad87"],["/tags/毕设/index.html","724398aa338af82805b1587cf82378c9"],["/tags/瞎想/index.html","b156da88baf3ef11feb464a8b2b9eab9"],["/tags/购物/index.html","73a00d2ab28a99ad68316f0101225336"],["/tags/转运/index.html","473ebf33e5e4d369d44f28f172532141"],["/tags/闲聊/index.html","4e4975bf7c0f3a68e2b8c2c55e9a93a7"],["/tags/阿里/index.html","cafb195131eae4a662bfcfa4fd89906e"],["/timeline/index.html","b110d853ea007299c754699fb5ec48f9"]];
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
    var navigateFallback = '/offline.html';
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


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/service-worker.js", toolbox.cacheFirst, {});
toolbox.router.get("/*", toolbox.networkFirst, {"origin":"skyedge.b0.upaiyun.com"});




