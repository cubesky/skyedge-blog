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

var precacheConfig = [["/2016/12/25/hello-friends/index.html","9dcaf7cb6b756d546adb35b81bb4b197"],["/2016/12/26/xuetang-auto-time/index.html","0765574511e51dcfaa1c075dc5f541d9"],["/2016/12/26/zf-auto-tech-rate/index.html","135a3ed62de4f7b19d114d8616c4ec15"],["/2016/12/27/project-my-screen-app/Project-My-Screen-1.png","1ef39212cd45595cc91f718dab07537c"],["/2016/12/27/project-my-screen-app/index.html","2349dc1d0e933f96a7941b6722d48447"],["/2017/01/05/blog-update-1-2-5/index.html","635ac7683418c4229f6b7717a1f33e55"],["/2017/01/16/2017-first-snow/2017-First-Snow-1.jpg","9cc7dc9cca8233cf21b5f8ca3f21843b"],["/2017/01/16/2017-first-snow/index.html","9549d1f35ece22c3910d79a274254747"],["/2017/01/21/docker-minecraft-server/Minecraft-With-Docker-Docker.svg","7a372f89efa294ade59ab75079dd35f0"],["/2017/01/21/docker-minecraft-server/Minecraft-With-Docker-Forge.png","290614e1bd977fe14fb364a1afb0f064"],["/2017/01/21/docker-minecraft-server/Minecraft-With-Docker-ForgeInstaller.png","73270f9a6c875d7e6b52d1eeaf16bf6d"],["/2017/01/21/docker-minecraft-server/Minecraft-With-Docker-Minecraft.svg","74c8d665c483371f20ef379a0a23fc20"],["/2017/01/21/docker-minecraft-server/Minecraft-With-Docker-Qrcode.jpg","189666d232b3b8e823637f572229a436"],["/2017/01/21/docker-minecraft-server/index.html","327d20d94ee3d92622b142b0eb33965e"],["/2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-1.png","f1d7ef95522d8123940deeb984dc5ea2"],["/2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-10.png","8538f2000a35faa6531ffff3bd41e561"],["/2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-2.png","edf15f491fc62764691f41c917afc50b"],["/2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-3.png","7ea61f777e79e2d4d1aa2592ac598f88"],["/2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-4.png","6c135099403d8886aa424dbe70a096e9"],["/2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-5.png","3f73322fa7643329aedebe45f5a44231"],["/2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-6.png","28cf41fc8ce30ccc0d0615e31bcefa1a"],["/2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-7.png","eeb0cd409b0b1fea16ac457e33c98831"],["/2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-8.png","cce0ebeae12320b6e0e1568693900ad3"],["/2017/01/31/zf-login-page-fix/ZF-Loginpage-Fix-9.png","42d6bdd94d13bc6ff0e1b1ea8d6fde07"],["/2017/01/31/zf-login-page-fix/index.html","2c4acd6042448939ded41a81f5338862"],["/2017/02/11/thinking-2017-2-7/index.html","e18bd903620eb756f563ef9039e377ea"],["/2017/02/20/new-index-page/index.html","8f75a495b18ebed9d08719520f60ba13"],["/2017/02/24/blog-update-1-3-0/index.html","616b7d496a770dc6668d71167e71a40b"],["/2017/02/24/join-into-nyaacat/index.html","aeb8f62c57f082c55d9725a5fd6b3d2d"],["/2017/03/18/alpine-linux-setup/Alpine-Linux-1.png","d579df045218edd1ba295ed8997d0a85"],["/2017/03/18/alpine-linux-setup/Alpine-Linux-2.png","3ad9681a9276197fbaab3c3bcb94aa79"],["/2017/03/18/alpine-linux-setup/index.html","9770d155ce08b95439b81a1f2915628d"],["/2017/03/19/linkchecker/index.html","985ccaf90bcf83a47c3b1837cd01e658"],["/2017/03/22/qubesos/Qubes-1.png","1b519a6c55d8e6369558d5ec1a2f9ced"],["/2017/03/22/qubesos/Qubes-2.png","a825929e73ac04f08bed8dea5a61ef0c"],["/2017/03/22/qubesos/Qubes-3.png","e5bd609fe224a7c039debb0551fa5102"],["/2017/03/22/qubesos/Qubes-4.png","29701f14f533448b2db2c3380df8dd9b"],["/2017/03/22/qubesos/Qubes-5.png","846a37c97761cf19e0c890f9ee979653"],["/2017/03/22/qubesos/index.html","201525d74b0f2910378504a606c707f1"],["/2017/04/02/pgp/index.html","854a5107d495734cbd0809c1490669a4"],["/2017/04/14/btrfs-crash/index.html","8b361eee88a4d8d630f3a18ba13be4b2"],["/2017/04/30/one-adobe-carsh-resolve/Crash-1.jpg","5fc7dfc34d92270584173e5bd95d854a"],["/2017/04/30/one-adobe-carsh-resolve/Crash-2.jpg","99a2e1d164b2b13486698e2560df7d8c"],["/2017/04/30/one-adobe-carsh-resolve/Crash-4.jpg","f0290dbf31895beb00408cf506dc2fed"],["/2017/04/30/one-adobe-carsh-resolve/Crash-5.png","cea9775592152450f3c9a153c279ee3a"],["/2017/04/30/one-adobe-carsh-resolve/index.html","ba35fead3c39d88d5a89b6e7f495d51c"],["/2017/05/09/qq-flash-photo-capture/index.html","444d24cf9862884d2c91728cfb322046"],["/2017/05/09/qq-flash-photo-capture/qq-flash-capture-1.jpg","35e5f78517151457e356dfe06a88c755"],["/2017/05/09/qq-flash-photo-capture/qq-flash-capture-2.png","bd6943e6e6590a0b30702b2b7eb3c490"],["/2017/05/09/qq-flash-photo-capture/qq-flash-capture-3.png","282b442fbe69cabf0543c521ba4d120c"],["/2017/05/09/qq-flash-photo-capture/qq-flash-capture-4.png","dcc067a92b808d704569188157e4f031"],["/2017/05/09/qq-flash-photo-capture/qq-flash-capture-5.png","e89f94ebaa9584d875079a20760314a3"],["/2017/05/09/qq-flash-photo-capture/qq-flash-capture-6.png","9ef43fad94d5cb28ecf4671c71c921fe"],["/2017/05/25/letapkfly/index.html","04b608446e80e4a01c1f5dae299c6df1"],["/2017/06/18/why-not-continue-use-eclipse-on-android-program/index.html","94e7ce7e028420bdc9e94731693b4f2b"],["/2017/07/02/oneplus5/Assistant.png","8d7d5edfa2b9570b1e181f5a0014e21c"],["/2017/07/02/oneplus5/Battery1.jpg","39115cd11172e9ae2b04626c7d36506d"],["/2017/07/02/oneplus5/Battery2.jpg","6688f3daf9e840739226687dd2467502"],["/2017/07/02/oneplus5/Magisk.jpg","25066a340f3becdda3473d75aabc13f0"],["/2017/07/02/oneplus5/MagiskHide.jpg","65a248b95eaa22c96b9e158cfa27d9ac"],["/2017/07/02/oneplus5/MiPush.png","fcde84b0dc38a466c7ddd2f097a73f6b"],["/2017/07/02/oneplus5/NowOnTap.jpg","ea572ec6ebf675d8857907060457be07"],["/2017/07/02/oneplus5/activitylauncher.jpg","0e0609aead74bd3550050db63796da54"],["/2017/07/02/oneplus5/bridge.jpg","cc6ceee5256d99b92c857fc013f7fbb9"],["/2017/07/02/oneplus5/developer.jpg","79d717ac443aa0a17ad46e2d9f58af5c"],["/2017/07/02/oneplus5/egg.jpg","64b75bada828632c277ccfe8e2f96fe8"],["/2017/07/02/oneplus5/greenify.jpg","7c670fd5e21eae565de287b44cfda3cd"],["/2017/07/02/oneplus5/index.html","382401de4dd5b05f93b3a13745734a2a"],["/2017/07/02/oneplus5/island.jpg","9973474efcd37d926a228f3ae4a128f2"],["/2017/07/11/buy-and-trans-jp/index.html","f0c89a06ecae882d119c3e5574111686"],["/2017/09/15/lifbbs/index.html","6c11bf97e3f79ec7d772be9c12ca8b80"],["/2017/09/29/unbox-alimooncake/all.jpg","755fc1501f48408dfacaf533a4e63813"],["/2017/09/29/unbox-alimooncake/box-out.jpg","4be57e0f9ee7c925abb4ed7a41410dee"],["/2017/09/29/unbox-alimooncake/box-together.jpg","36d50880f2432a3d22c015177393baa2"],["/2017/09/29/unbox-alimooncake/box-zoomin.jpg","bd4a67856bd31d3fc5f4640ea52871aa"],["/2017/09/29/unbox-alimooncake/index.html","9f50f64fb85b9f732ad92dc9c25a9b78"],["/2017/09/29/unbox-alimooncake/open-all.jpg","87744b866ce0be2ab6799c5839b81816"],["/2017/09/29/unbox-alimooncake/open-left.jpg","039dc0f5aa4a296e13fa82ff459dd602"],["/2017/09/29/unbox-alimooncake/open-mooncake.jpg","3375eee7411daabe58145c2911a7b7a6"],["/2017/09/29/unbox-alimooncake/open-right.jpg","1cf03d0e3a15684f879712b0086cba0c"],["/2017/09/29/unbox-alimooncake/unbox-self.jpg","bbb821e0c7e61c8daab409707f45aefc"],["/2017/09/29/unbox-alimooncake/unbox.jpg","f5a16801f22b85512f6e36c19fc04a02"],["/2017/11/18/bplayer/index.html","4d30404e6fc036131610be95c1d0b690"],["/2017/11/18/talk-2017-11/index.html","b3428e287103e2391f8f8d5413be183f"],["/2017/11/29/android-optimize-app/index.html","2e1f0cd4d71f8c34fd6dc32a79288eda"],["/2018/01/02/bye_2017_hello_2018/index.html","d6e0176580f3f00e897df36d41713fdc"],["/2018/01/02/bye_2017_hello_2018/liyin.jpg","93511ae6f31039554649151cecf2075f"],["/about/index.html","04b20a8c47588ba9661d0ffa17452d04"],["/amibafix/index.html","2d9c66d2c89fbf13a99c0ff1bcb5e40c"],["/amibafix/index/1.png","c09704d708191afd6275dffe00cb7587"],["/amibafix/index/2.png","159fc61f7ff373bd4576627e10fb8a31"],["/amibafix/index/3.png","f78e34ab0895352447605c75b3698b49"],["/archives/2016/12/index.html","7a06831adf4bab54382c444004274287"],["/archives/2016/index.html","e457757e27b00930bb12225b5d56cb2a"],["/archives/2017/01/index.html","779f3830ce421b23b024505b38a4fe0d"],["/archives/2017/02/index.html","94ec63dcf29490df42ca7a25a04cb057"],["/archives/2017/03/index.html","c7483a138ee3f45a444772133a44e1f6"],["/archives/2017/04/index.html","895df25ae0f0a88f77d92d3f7651c504"],["/archives/2017/05/index.html","ab3534c94ee456416f58a8a49a58b13f"],["/archives/2017/06/index.html","ae5dd1b372a681583b05efaa66f5fe0a"],["/archives/2017/07/index.html","241014ece8c75f52c71748e0c08add01"],["/archives/2017/09/index.html","22fc7910295bd34090d1fd869c4da77e"],["/archives/2017/11/index.html","b7ca38cfb6e190c9428f80189cc1a221"],["/archives/2017/index.html","b98207797c6f3ce57fb51e05bdb33071"],["/archives/2017/page/2/index.html","2d5887ed4ea6f483f0f946fdae616563"],["/archives/2017/page/3/index.html","e6da0ac6bb138e5b796438c985780788"],["/archives/2018/01/index.html","552214f94a7dc44ac7bd95886ddf594d"],["/archives/2018/index.html","951900ad62c93f462f7e3dc029a07b71"],["/archives/index.html","1d4db004043027ddce3ddd2a7c3f2d17"],["/archives/page/2/index.html","144fc3be0c7fe7b5d1e37d6492cd5143"],["/archives/page/3/index.html","fe03df763a5f0e7767c681a64c2a5871"],["/categories/Android/index.html","167795aebff6e7ba5277af60dc5eb006"],["/categories/Javascipt-书签工具/index.html","10d3759f9ddafaec1a668258dfc4db91"],["/categories/Linux/index.html","f7e5d4f5ceb71d60a77c3d83d1030a77"],["/categories/云/index.html","ea42f0bcf7e7cd67abf8b6b154cc3155"],["/categories/博客升级/index.html","c7a90b5f1472258c5c2f1eca85ead32f"],["/categories/安全/index.html","670c7328fe6da0b2840bb969ab00f7d7"],["/categories/崩溃/index.html","30789c2c71352f6f6459b1b0478e1d16"],["/categories/开箱/index.html","0bba3523fed8fe20e091f102d0b086a4"],["/categories/网页开发/index.html","7309576c995f69714b2c9ba869bbee7e"],["/categories/购物/index.html","b044d129ed12c7e814db95c7e35c010e"],["/categories/软件推荐/index.html","e1aefc5e057d2659b8e57725adc7a44b"],["/categories/闲聊/index.html","aa9e8cdd0b2ee36ee9c89d0c7f2a9c2d"],["/class/index.html","009ca89e9cda0ce203ee044a3d296487"],["/creativecommons/index.html","cb887be47b68f80826ed21ae9baf926c"],["/css/disqus-proxy.css","87976db321c1c288aa3d9d4af06c8ad8"],["/css/disqus-proxy.min.css","caa38dd245e9da4c20580c256e540bd6"],["/css/duoshuo.css","bdd8f7eb0dd14fc7e719cab11e685a9e"],["/css/duoshuo.min.css","6457d80daef45eca1f7399b2329b1dc2"],["/css/fontawesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/gallery.min.css","a62dc56ec5981c978cddcba32f2dc875"],["/css/ie-blocker.css","4c323bd282014d64264bad241f1c14d3"],["/css/material-icons.css","a6a841fd177f69bd07dbe919a744439b"],["/css/material.css","f65ff1c879db0e257bd7d9521f0eaa57"],["/css/material.min.css","67b6bbd91d44e12c7304a47f58672d38"],["/css/prettify.css","074dc30ad95ce2f227848a2c38bc7fbd"],["/css/prettify.min.css","ce9f124ce53dbfcf5758512737ee9899"],["/css/prettify/atelier-cave-dark.min.css","78d9bbfc7d0f526727e9da749cd08a44"],["/css/prettify/atelier-cave-light.min.css","e4c2bf4caff36e974733bae61be7a10b"],["/css/prettify/atelier-dune-dark.min.css","4aafbf8ec70b42c2b7964aa2b347bf68"],["/css/prettify/atelier-dune-light.min.css","65f9c4494342967919044e847347634c"],["/css/prettify/atelier-estuary-dark.min.css","79f259a7e1a0ab58772d339f97c53bf7"],["/css/prettify/atelier-estuary-light.min.css","65039bc195c71fa32df0c35bc902587d"],["/css/prettify/atelier-forest-dark.min.css","cbc537385cc8ab19748f9d4160a1e46c"],["/css/prettify/atelier-forest-light.min.css","1dda1f8f21aeedbe0fb68caf55c615e0"],["/css/prettify/atelier-heath-dark.min.css","b52d843659b13491b555f324bebfe9e8"],["/css/prettify/atelier-heath-light.min.css","0d999c502c821f1b761ad772d7301067"],["/css/prettify/atelier-lakeside-dark.min.css","f48fd98ed8f7ed8aa59fb57c87247b23"],["/css/prettify/atelier-lakeside-light.min.css","bc790feb4057204347c45ea551d0d784"],["/css/prettify/atelier-plateau-dark.min.css","e81b69c147a9ffbd298dccdaf02a810f"],["/css/prettify/atelier-plateau-light.min.css","ad2d0ed869dc8142306110f8b7fa9035"],["/css/prettify/atelier-savanna-dark.min.css","b3a404d78c50fbe9968d0d4dac123484"],["/css/prettify/atelier-savanna-light.min.css","7d4087bd0552352c12ee3dd8f397db75"],["/css/prettify/atelier-seaside-dark.min.css","10a0183644bd5c369616f0b94298c8f5"],["/css/prettify/atelier-seaside-light.min.css","6fbd6de95fcd79393de5fbb4e7a3dac7"],["/css/prettify/atelier-sulphurpool-dark.min.css","be693407f25090368983c17ad1fe1dca"],["/css/prettify/atelier-sulphurpool-light.min.css","fcd7ecab5bfa792ac082257e73f08abd"],["/css/prettify/github-v2.min.css","01fccac6dfbe2befe58590654a39f1c2"],["/css/prettify/github.min.css","dab580bb047648b053d1546fe31e1215"],["/css/prettify/hemisu-dark.min.css","7095b0461d4cf22e7935f0e447807c6d"],["/css/prettify/hemisu-light.min.css","54e6d654c095a946b257a243ffd5f3f7"],["/css/prettify/tomorrow-night-blue.min.css","2733cdcd81e2ca4e8d6598b2237c2eef"],["/css/prettify/tomorrow-night-bright.min.css","f15804e96aa1b47d36233c5b02732f28"],["/css/prettify/tomorrow-night-eighties.min.css","d8b250cd444ef8aafcaff7e5fd3f2830"],["/css/prettify/tomorrow-night.min.css","4259c6664fdae3e77c5dbc2d5c10cf88"],["/css/prettify/tomorrow.min.css","1c8792425eb2dedea306ec47bcb3c648"],["/css/prettify/tranquil-heart.min.css","ba5de9f48f4cb1b3b12b42fe047cc30e"],["/css/prettify/vibrant-ink.min.css","7b913faaa19c1af792ed54c7e0cf3deb"],["/css/prism-line-numbers.css","0564af490a8f693fd09dd696e9734a8f"],["/css/prism.css","863caf87650d967d28bead332b605908"],["/css/style.css","a17a2be6861f791702cbba535751ea78"],["/css/style.min.css","30a7ad655ddc5137c3c6f31f7da39ece"],["/css/uc.css","31dc264064481a02fb48046046a76084"],["/fonts/FontAwesome.otf","0d2717cd5d853e5c765ca032dfd41a4d"],["/fonts/MaterialIcons-Regular.eot","e79bfd88537def476913f3ed52f4f4b3"],["/fonts/MaterialIcons-Regular.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["/fonts/MaterialIcons-Regular.woff","012cf6a10129e2275d79d6adac7f3b02"],["/fonts/MaterialIcons-Regular.woff2","570eb83859dc23dd0eec423a49e147fe"],["/fonts/Roboto-Black.ttf","4dae2e3c6207a71de6b078b879230062"],["/fonts/Roboto-Bold.ttf","a68db3b33213fa138e6f72a5b76ac632"],["/fonts/Roboto-Light.ttf","8d252992868e895b059335848dec3402"],["/fonts/Roboto-Medium.ttf","989d2dff37a09f19c6dbc6f0e8f9b4ea"],["/fonts/Roboto-Regular.ttf","8f793587dcf03f31c551c5b60d175fc2"],["/fonts/Roboto-Thin.ttf","21c61396b4bea54e7308a7cda49edbe0"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/img/avatar.png","0acf37b762876c3999bb712819ef0fe3"],["/img/bg.png","4491b5e3d2320fb530a6ecf4a3d27e9b"],["/img/browserstack_logo.png","9901607d552cbf936a8c86e6f206aa47"],["/img/daily_pic.png","8655723de1bfb93de6290938f18cb8a0"],["/img/favicon.png","7a80435df04b3eb691b8f172f09a8473"],["/img/footer/footer_ico-bilibili.svg","d67fcd7d1fa5999e9a785b2dfaa39f2c"],["/img/footer/footer_ico-facebook.svg","64c580c2986d6f16d04b1c4d3b896fd2"],["/img/footer/footer_ico-github.svg","4b3dc07ff72cee5be0eff6a100a354cd"],["/img/footer/footer_ico-gplus.svg","7d75444af4019d5612e2005ab501eca5"],["/img/footer/footer_ico-instagram.svg","c8eaf1f2fe5f4d9a7b26f2981d6f14ed"],["/img/footer/footer_ico-linkedin.svg","5e4c53b53c9d59880c6e483d57309a6a"],["/img/footer/footer_ico-telegram.svg","50e65465cc40292f7101255daed7c593"],["/img/footer/footer_ico-tumblr.svg","b127eb5d3e455ba8794ddc4d060df5bc"],["/img/footer/footer_ico-twitter.svg","90ff42c9e275a7cd7ca5bf4291c93961"],["/img/footer/footer_ico-v2ex.svg","3500b18a911b661a2b379b36b39def20"],["/img/footer/footer_ico-weibo.svg","f1f6375680122267b9ebfc3b546307e8"],["/img/footer/footer_ico-zhihu.svg","39538ba6607a9dcadf6d4dca35b687b8"],["/img/gallery/arrow.svg","f3f776676f3b78b5180c9d2e08c2d532"],["/img/gallery/close.svg","181336ad0bd48cdde68d7fb8be304daf"],["/img/gallery/spinner.svg","2a61c8efd2d72146d79a2f6692840a85"],["/img/logo.png","7a80435df04b3eb691b8f172f09a8473"],["/img/random/material-1.png","0c4e486759ad62e3415f8f197f0311f7"],["/img/random/material-10.png","2263d9d1cc9b0724e6331374c33f988b"],["/img/random/material-11.png","41127baf9a286e968a63653dee50ba21"],["/img/random/material-12.png","2507dbe92186b0b39df6331347aa2c27"],["/img/random/material-13.png","5d127887b6d043259f7e2fb99cd08175"],["/img/random/material-14.png","84c21a53679bddbe415fdae1d3c02163"],["/img/random/material-15.png","ec116546453394cc0d78e580d6d52dd5"],["/img/random/material-16.png","39a5dca2dc2de60bd5dd191f205db7d6"],["/img/random/material-17.png","30a855e361dcf170aecdce04ce564c68"],["/img/random/material-18.png","584900ff821930a8b093b4c0a58be34b"],["/img/random/material-19.png","c004830c8683856939dc83b75b230b66"],["/img/random/material-2.png","fa4f4588b9fab07979acd61b94d34fa0"],["/img/random/material-3.png","418c3457b6792eb732844d41d2501294"],["/img/random/material-4.png","99898b727359e568759eebbb2c9e4a8b"],["/img/random/material-5.png","e521776cb427f848546e20d784888a55"],["/img/random/material-6.png","db810792edf3d40de5baf5401a9a0626"],["/img/random/material-7.png","d7e9fe3e0e3db6b841ab12fad331daed"],["/img/random/material-8.png","9f1914138052c3a631e1f2b2cf674a46"],["/img/random/material-9.png","069b687b7f1069254c816a56317bfaad"],["/img/sidebar_header.png","0ac2232bb0756d0d4e5f04875b443217"],["/img/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/index.html","2b19eab8060515f04d3e581bd229f353"],["/js/MathJax.js","1bef8ba3b323e77cd264bfc09662ae1e"],["/js/Valine.min.js","c640924dc2c3508b1a1c8f3ab726f3fa"],["/js/gallery/gallery.js","54dbd709efe8893194901af3fce1379d"],["/js/hanabi-browser-bundle.js","3e48b9fa9ce496eaaee7783ea2e316a4"],["/js/ie-blocker.en.js","eb054767893aa2f8e981be25c4221415"],["/js/ie-blocker.zhCN.js","861699947bcd571f62d6dc10f1c43be0"],["/js/jquery.min.js","a9cbac0142cd78192ca9f7ea50cdbe22"],["/js/js.js","4d7fdfc9ec6f519ce4a6e08b45bba972"],["/js/js.min.js","57fe77c06b9a94cba23ccdf1a1eb43e5"],["/js/lazyload.min.js","d4171fcee357a95fa7b45ea0abee57dd"],["/js/lsloader.js","d01962f06751b296c985a8fee73019f8"],["/js/lsloader.min.js","fdef13cf99a299ae566d65ab828cdc19"],["/js/nprogress.js","a65dd085bf65bea475165c8b5276b563"],["/js/prettify.min.js","58dd3b7e2bc741230a5b2ec1987041eb"],["/js/queue.js","3ef240fa4fc55888e5e234e48f23fc95"],["/js/queue.min.js","1677e3c59497558a9f53b73b726dedc6"],["/js/smoothscroll.js","94ecbf0028f9b2e48d8bb6551556e915"],["/links/index.html","94634c2b3788073dc482c2d6ff800a15"],["/myfiles/css/bootstrap_liyin.css","c94f41110432c5f63d6c0f411a9e19fd"],["/myfiles/images/PWA/logo072.png","b6d0bd5d5eaed02bcaa097480262845e"],["/myfiles/images/PWA/logo192.png","09a7f9105942ce2044344dcd648e7a05"],["/myfiles/images/PWA/logo256.png","14ccbe0f4e7b75637c2f0583c8fc7291"],["/myfiles/images/PWA/logo512.png","00de9954c985fef8b32ceeb019540124"],["/myfiles/images/avatar.min.png","f926293e70b42b903ee681df10fa541c"],["/myfiles/images/avatar.png","50563cfd716ef38ac504ceb1545361f5"],["/myfiles/images/cachemoment.svg","200e6d663a4bea67a6d0f4a85bf18932"],["/myfiles/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["/myfiles/images/daily_pic.jpg","aa8f648f4b2bd0d3b4fb6f1a1dfe1d77"],["/myfiles/images/favicon.png","7d0e50ede2f4bebc87b59f94ece9f08f"],["/myfiles/images/logo.min.png","79888a29f8d834256191077e218d9e96"],["/myfiles/images/logo.png","c49cd5fd22e38b63292740ab0f5071c4"],["/myfiles/javascriptbookmark/pjjsblet.js","4190a415871256ca7dc0facdf36f4246"],["/myfiles/js/combined.js","d784fa8b6d98d27699781bd9a7cf19f0"],["/myfiles/js/hmthelper.js","5b4615653b79f4bb2008524b60dac42a"],["/myfiles/js/linkChecker/linkChecker.js","c479d9bf8e5576f5fdf2153654cde9b6"],["/myfiles/js/linkChecker/main.js","03c69efec85a158067f49159f063eb00"],["/myfiles/js/links/links.js","0054d0588a54341c7a5c79a5a7ab5c2b"],["/myfiles/js/links/main.js","db6004771eb64c707c9c9185db71e03d"],["/myfiles/js/menufix/main.js","1e5baa37aa73581f339e1d9f43a85fc8"],["/myfiles/js/menufix/menufix.js","9946c8dbf5754ebd956d4f199ffadbb0"],["/myfiles/js/nomirror.js","b99f2fcef872f9309ac1b0f142ef0078"],["/myfiles/js/yiyan/dependency/jquery.noty.packaged.min.js","e064d6a7566edc482527936efff5fc67"],["/myfiles/js/yiyan/main.js","68989e5dab463c6c9cfa9bf564912166"],["/myfiles/js/yiyan/yiyan.js","9fc67e21f4dd57c18c84d4d8435e1e60"],["/myfiles/links/avatar-KeJun.png","4728ef21c49df76c6a4bb9e552fd10c5"],["/myfiles/links/avatar-Marnger.jpg","30037cf1e0a8688c5ddc3a3bd49f9f2e"],["/myfiles/links/avatar-ccooss.jpg","575e68a76914b5ab4c20ee453a423607"],["/myfiles/links/avatar-halyul.png","1f96e22e0f849d6d578872a11c115e05"],["/myfiles/links/avatar-iVanilla.jpg","d781159043acbe0b37eac2a3dffd33ad"],["/myfiles/links/avatar-imeto.jpg","088db10a843e02f779924b114f6adbee"],["/myfiles/links/avatar-imiku.png","aa44885c8abb51241162087b9c829902"],["/myfiles/links/avatar-kookxiang.jpg","e656a6b1751048375d6fe1401950fa43"],["/myfiles/links/avatar-luo.jpg","d4b9e25bd739561c8eb92961fcd0b64e"],["/myfiles/links/avatar-lwl12.jpg","f1f019d67b3c516753ad3caef01585a9"],["/myfiles/links/avatar-nekolines.jpg","ffae6c96344109b1d239cb096b144e0a"],["/myfiles/links/avatar-pdc.jpg","5666c1b01d95e602f2a4db04c47ee3c6"],["/myfiles/links/avatar-petercxy.jpg","95d517ae2b9c2420787b4fdbe17d2e97"],["/myfiles/links/avatar-troy.jpg","0346ecfe9e528cdbf63b4afbcf2eff88"],["/myfiles/links/avatar-yashi.png","8ac30256764a0cf85893fc147c5204b9"],["/myfiles/links/avatar-yiyangwang.jpg","be83908f1ef6ee24af4575adb881ff33"],["/myfiles/links/avatar-yukari.png","87de1cc70e12d6afd4875bd04d7a2cc5"],["/myfiles/links/avatar-zhaoj.png","00c54730ebaa749bc3af1f13b5c5baa5"],["/myfiles/thumbnail/Alpine-Linux-折腾记.png","7e8fece2fef24a5970eaa88bad24f746"],["/myfiles/thumbnail/An-Adobe-Crash.png","c2bc5ce88fb1b6951db0046735c7db8d"],["/myfiles/thumbnail/Project-My-Screen-App.jpg","81f43d89dfd18b7ecc15001be2cbc1a3"],["/myfiles/thumbnail/QQ-Flash-Capture.png","1763b461d41f8850d9f5e3f0c4784417"],["/myfiles/thumbnail/ZF-Loginpage-Fix.png","f1d7ef95522d8123940deeb984dc5ea2"],["/myfiles/thumbnail/slogan-.png","fdabbd2f38a7599ca5ca012b97ae33d3"],["/myfiles/thumbnail/slogan.png","0e4278c5c78ddcf335c3564b1694fdb4"],["/myfiles/thumbnail/加入了喵窝.png","51e35b91a8362e27085e3bc5cf49c5cc"],["/myfiles/thumbnail/学堂在线自动刷视频时间.png","23b5609d4294f645e5e17afdec5c3a90"],["/myfiles/thumbnail/正方教务系统自动教学评价.png","775c5546755531577d94bde3c870d904"],["/myfiles/userjs/AutoXuetangx.user.js","86a3c0efe1e5c64fdc985be9b7e995e7"],["/myfiles/userjs/FixZFLoginpage.user.js","67dbdf3321eca739036ad201eb1f249a"],["/page/2/index.html","9ff93543cd3e8258bfd556094616bd3b"],["/page/3/index.html","a2ed10e35e50e7a1ff01524a8bc2968c"],["/skyedge/index.html","3feb015a97f4410dae8142dbe7deb69c"],["/slogan/index.html","9bf8ea5e2b2b4b6e316d5457cafe2240"],["/tags/Adobe/index.html","eb3bda391882a0a203b645331aa22386"],["/tags/Android/index.html","de6bcb293eb9589bef815d97ca2f390d"],["/tags/CaaS/index.html","35ecd50314fce4c7fc92fe1619683a03"],["/tags/Docker/index.html","cae479b4c13267bba997b4192a6f9169"],["/tags/Javascript/index.html","cba9478a9672c56f7563aa42805957e6"],["/tags/Linux/index.html","f5ba1a7f248e610ed055987b9e6d299e"],["/tags/Lumia/index.html","1c43145d89910626b185b50cae8b8179"],["/tags/Minecraft/index.html","8f2390a7f9384cc54b5c6a18ea8911ac"],["/tags/OnePlus5/index.html","1c30ecfd20c6730fdf8d5b562dcf0e59"],["/tags/PGP/index.html","2f3688e972b99d33dd66175119fd69a2"],["/tags/Python/index.html","a720637c5150ed659d8d37df575090ac"],["/tags/Windows-Phone/index.html","33f7fec64846cbca65e0d1071d9743e5"],["/tags/bPlayer/index.html","01c5d6a90c6b2dd94749f8ff90b783b1"],["/tags/btrfs/index.html","181f7f268afffd0e685b833f77eb6327"],["/tags/hexo-material-theme/index.html","e0f7b31566c2368f9ef4f8e9ab016866"],["/tags/index.html","5370d2a4aa53924fa973ce6777b0958a"],["/tags/一加5/index.html","1a247f54cc9d5b4081fd101372ffd65b"],["/tags/主题/index.html","95fd0c3c88f7a53db5400c4b33eb58ac"],["/tags/云/index.html","f9dd2dffcbbab5116e9276e96d8dc11a"],["/tags/优化/index.html","022301eafe2c6df9a8a18514280d6d14"],["/tags/千锋/index.html","5a98562db62757afff38ef53b757ad47"],["/tags/喵窝/index.html","cd6dc3bd9e687f34579730eb80596535"],["/tags/安全/index.html","44746a53821edbf5f859246a33b82bc6"],["/tags/屏幕同步/index.html","cf8964f9ffed27990a27f93bc9b06870"],["/tags/崩溃/index.html","d860f2a02f69b184a29f2774a7100113"],["/tags/开箱/index.html","fbf3194ce75aba6b40f779b5135c9fbb"],["/tags/总结/index.html","150f2bae85583614668a6712d5da9842"],["/tags/折腾/index.html","34fb5352cfdcb54b2ee3f6f3253e9dae"],["/tags/正方教务/index.html","cf54efd2df61cceb39a2595873dc5826"],["/tags/瞎想/index.html","f50a69a39e3783852c74108d10157604"],["/tags/购物/index.html","4c67c407ee3080cd822c0c3d75df9563"],["/tags/转运/index.html","75905d1e81d1c7fa5d6adcaa2ce7f546"],["/tags/闲聊/index.html","347c193c17c63713b16c01723cc6659b"],["/tags/阿里/index.html","fcbf2e8714cf3915c6fcafc761777a6a"],["/timeline/index.html","160b5d7ca6dbb1476d5ebabe4636ae6b"]];
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




