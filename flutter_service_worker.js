'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ef0f50efccbf932ea8d6f00852c2108f",
"index.html": "1bfec5480cf78be471de291594171b9e",
"/": "1bfec5480cf78be471de291594171b9e",
"main.dart.js": "ca478f2cac679e04afbce6c58cb0c7a2",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5ca6370271a007abbdb95ec00bca15dd",
".git/config": "5613aa90752b98aae822c2d10724d5da",
".git/objects/61/eadb89aea6153a57e48498b482acb103ba5fbf": "4f7fae8a8dffe3e5fb18cca324b7ea75",
".git/objects/0d/ab553dc8b9a8327458de8e5ad9a132cd15db77": "32c41189e4f01e49eedbe9d097ec9e34",
".git/objects/0c/e73e7e095fc629ffdfbb374cf30dde8cec72dc": "9c4f542f85a19d0e4d9e40be17ac45c9",
".git/objects/50/17fedf47c1b025a57b3796bebfd40e0c1e131d": "159bfd4936eef8c7ef110d06dd5b1871",
".git/objects/03/7ded25b2c9f63382c070e0ca0f093d3d7b1bbf": "3fa35255b6c41f734fdd558874bfc1a5",
".git/objects/9e/a738cd55d59c2dc32219f0e8a34026587924b0": "b80d04c5d5b065880916696f7f41895a",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/6a/b4c4c90e21f71b3b911e18a13642c23b13e720": "4a0c4dc520a4ac69500a2b0d6d26fefb",
".git/objects/69/23cec43258fc0c5110c8604cfde0ab9fe7778a": "b2981273beb059e26bbce04a6d3acb5b",
".git/objects/56/fa769baf22f16d20bef246a928150856573fbe": "66a1bdad30c2dca238fb45d65d48b634",
".git/objects/0b/43a2ba7c0702297a23129d14e35f518f80dbcc": "c09977ae0210550d544d27da70f97f61",
".git/objects/93/27133ebf28a833b3ca9de7a090110c72f6a173": "2808fee0bf7f52821d73fca196547b10",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/34/b690c8c3ae71b6f8e39b1e7d68c939887dc9b2": "f925ea7af0834c57ad6dc8ba45be340c",
".git/objects/a3/d08202ddc57965ceaa54d452772d72476a1c6b": "1e52055b0e81019b2f6c39ad7071d06d",
".git/objects/b2/04d41cd2d3ad55fc34cbdf70f923f022eac5a2": "d42df7ca435d44aacc44368ea0e83691",
".git/objects/ac/258c09557f8d7ccfb8d8cd95b02e6fad01a27d": "451c62b833853e624b0fa56c4d59ef56",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/b3/32bb46100153415772be160621b0dd21c39c51": "9fd82c55d0ff045ef229145342c09e96",
".git/objects/b3/c5c973d49cacd4d25292448c6753b077a7ff89": "15f12899eb33554661bfaa046cfb6579",
".git/objects/d6/e3778ba11e60e149d7052c3014c08c15d8c0e0": "7bb6ae94182a647ee576fda9dca45112",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/15dd318f112069d8d78241dfe3f123cb8ba4b8": "b650544643578e798338149f7f1be80a",
".git/objects/ae/39f0695cf6edda410da473947ab1c658bfce22": "db2165c42f2b89c588713d2c5772f926",
".git/objects/f4/0d363f69768f44311fe782dde7920c9f864141": "72a2411207e2e9c4d88c1310faea9bf0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/c1c2910544241a699a9c836ff917271a78da53": "3146fa52ab33bc9a48f0fd98c6134fb0",
".git/objects/c0/2499cafe7e7cd01c114c3c84621a5ee3959ada": "c36a1037ecc8eec2c1d619452d8c1092",
".git/objects/ca/c2b6889863bb7313e25e8110f8b3cc5a7e7a32": "b5f32759b09d6cedf4c3b150e631cbe9",
".git/objects/e4/a223afb5aab650b7538f3c920789461ce00067": "e1b1fb8f0c2b78e85050c8513b11d9fd",
".git/objects/e4/5081b6f31650ba5403fb532082e992eee3bf02": "d705ee69bfaee16bb0b3fb2b36e0bcaf",
".git/objects/c8/e879d769e628010da7da46167c088fe8c1d28a": "92a48e56d128df318d8a0839179f6398",
".git/objects/ec/b658a83d3b9cf759516597762b9430decbaa7f": "c58b20514077c42084f7af9c52542c00",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/11/a36bf6979165bc2c5b7d6fdfd87836e2057839": "978bfe0b51e58c980d88a077e50e86f4",
".git/objects/7d/79c3232ed5079a4aaa836086648de36477c50b": "e0e963c867bde0d2063d8b3aee9d5e85",
".git/objects/1f/eecf581d75ea726605f6865e960c3121a93b7a": "7d2a72cd3a38c4a0b23291ee56ae0918",
".git/objects/28/9b9845c3a2d488c8fc49c00956d6c809440696": "8ffd96dc06a58db63178bc73f7d93067",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/62893b3636b500ea387b3806fe2880c51a77b6": "804dd50104cf0aa70084f972db175c0b",
".git/objects/21/a5c044bfc01b9cff7cffb13f04251db9dcb67d": "c385645ab1f6209ad3271039b837bf5a",
".git/objects/4d/40bd8ec9a1e09994779bb3ee28e423941f9254": "fadf6427940de0a5e839c57a59041c5c",
".git/objects/75/18e2dce8d8dcf70c44f6b1169b0326d87e1d47": "ba62effea8d817c284de1d49d3d14e1b",
".git/objects/81/4502f4823a5b1054fd5b5f455b4926a7a35751": "c04c8a04005830e552e1c0f9a0af55d8",
".git/objects/81/2392ace9a71de996643d31c1921f735cc46376": "95d26e176156081816508a970f12660d",
".git/objects/81/71b5416b71cd5ab5c9068ebe30b90f72933b0f": "96f7b20a48dd91cbccc1f0f91da02b53",
".git/objects/2f/59d79b6cedba3412d2128a4eff2e4f1bcf8d45": "55d2d3fe9380f703165ced21d6efadb2",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/3d63ff829d0aebbdf59c595f117a12b6438c3b": "2b5d1927195c5215c63bb4e2fac8b1ee",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/5d/a8026d03daa86e4c98a4a5a43315f508546d32": "2992e314b6ff2bff3845b853a42e9474",
".git/objects/54/0e5f963df03ae665a83ec19fb2f526a5a17e8f": "4e30b94d99db873b5b51d3f9c6f5708e",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/11f19cd922053a2fc3af494588e560ce9f3846": "1f31619ed6aea08577a4fbb836410829",
".git/objects/52/dfea27ffb3ebde0e0f9ce142bb5e1fd9c5904d": "d23afbb23ecacb4eda50a6ea651d004f",
".git/objects/d3/eef2062e7084c1d7b7480f5213c3edb23863b3": "6faea4317fa2dca07eaa6497ada44720",
".git/objects/d3/45b5cd0c2bd801cfc5d05e39cd84bd17d960ab": "55f06bba1976dccb814450aeee142e42",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/af/25fe37fcb32150e75c9495a92be17284303dbb": "5a4cb63736a6791b6ffa06201c1919c1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/64d75ce1234132e678684b2dbdb1e8e45d7c1d": "b2d79ef25b0b67ad741332de86d3f617",
".git/objects/de/6bd4a2025b98a69cc6ed53041c3de3b764e325": "2e9f894ec847b2af8e87d793177ee4b2",
".git/objects/de/62897d37efcc842fede06ade22ec9cdcb0cc89": "63919e380c47cd3db0894956ef59f589",
".git/objects/b0/37359cb0ed45be95f75ca1f39ce23f617e1a8b": "903283d4df798fed9dce5f216c507f0f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/505b0c3eec57b442c8098d5cefa4bb81f4ce03": "e49000b22521e0d1e09fd98d67cc51df",
".git/objects/c4/cbb6f1c9b243df2022b958e91132fb70a5417b": "8449544480d1cc6da96126d3e7f2c0db",
".git/objects/e6/0ca4e78f5ebeb3dccdd8ca4cf5fceb78916182": "9972635952b346e50ee73e6ae8c3aec0",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/6cbb88af091ba7e0594aab0167a59307dc408f": "53c02a7817fdbed508b2bc5a704b6dd5",
".git/objects/e8/b4039f01534cc95b83d9b9fd33c3322536c10c": "379549d6441fd7e4bcf88cbdf73e0ef1",
".git/objects/c2/e53b1fe2a5a1cb90a760c73e225937d489c95c": "9b94c39ac6df63a003a2889a2004aac7",
".git/objects/f6/d06b49c610e11c89e1bbdd914e241122bb36a5": "960a4fefec8a7ba2e2746fc77d38cb17",
".git/objects/f1/3d02d5313eb8bd28e5342a934869c18c925798": "7a36fa97d2d5eb8f5f79408f5787ffde",
".git/objects/ce/b5424546ac1c9ab8b8e8524cf762ad47bbb6ca": "38455ccdba5c38075a30f4e84e806f70",
".git/objects/46/96315ca9b78e00b9c1b0b2f291d2c68cdf01b5": "e037e84d1c7470365d63bc49532def08",
".git/objects/2c/0fabc0ba0f546dbc9efda4f208037887a4bdd1": "bd8102ff4b1752cc86edb89be708ced6",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/2620c49598bb0c31daf30f60f5d75ec434dde3": "9b88179dfa75e3fc6418c64212a1f703",
".git/objects/1e/efabb13f734ed5a94708f66ba802bda11f5421": "240b0a615fa44fa32ccd824ccd9d2ccb",
".git/objects/4a/91def1a81167b13fca422831d978c2e765b725": "2df552ba3ccb3c91d0d5f0294572e855",
".git/objects/24/7a988c1b04c4d6ea27ea820d0b5f5d70e6a9d4": "238301710a4fa47e15814d5263f78562",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/85/4db0e05ed35c315e7ca38eb9844b5d19e8e389": "5ffeda0cd768bb47273586158166a99b",
".git/objects/1c/fbd64269bf97c2e77108ba93ed421d24b0910f": "3e8a0453af62bc64887e57e23387cdcc",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/8e/03ff0ff7eb6d7749fc481bec78db97d81552dc": "f354e37a648d8e1ff78179bd23cb2a51",
".git/HEAD": "349f745df88529f034073b089d30afc8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b66c111164cf006dc260c2806629314c",
".git/logs/refs/heads/hackathon-compiled": "56499e1f6016ef69bd10c7ff909cc605",
".git/logs/refs/remotes/origin/hackathon-compiled": "877311f0da38bc8d6b84ef70260b49ec",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/hackathon-compiled": "5a525b0da220e617869114a23eecf800",
".git/refs/remotes/origin/hackathon-compiled": "5a525b0da220e617869114a23eecf800",
".git/index": "38aa4ed60cd3c05108903f4a5926e719",
".git/COMMIT_EDITMSG": "09644d1eacdac085ba0c91bba1a2fbc3",
"assets/AssetManifest.json": "e0b55ccf365207ce8bb58e0b172bcaa3",
"assets/NOTICES": "9f712743cc6951de6f3dde0a5c58afc0",
"assets/FontManifest.json": "a416077bbcccfd2927e44aeb1320760a",
"assets/AssetManifest.bin.json": "789750f0a010bca47dc0200a04a710d7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/localization/test/assets/lang2/en_US.json": "b389499c34b7ee2ec98c62fe49e08fa0",
"assets/packages/localization/test/assets/lang2/pt_BR.json": "08e9b784a138126822761beec7614524",
"assets/packages/localization/test/assets/lang/en_US.json": "18804652fbce3b62aacb6cce6f572f3c",
"assets/packages/localization/test/assets/lang/pt_BR.json": "f999b93065fe17d355d1ac5dcc1ff830",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/lib/i18n/ta_IN.json": "47bd0f47d8986da4da828f80e6ca871d",
"assets/lib/i18n/sa_IN.json": "25ebb8dbdb561c22ef633409381fbadb",
"assets/lib/i18n/en_US.json": "25ebb8dbdb561c22ef633409381fbadb",
"assets/lib/i18n/trash.txt": "d41d8cd98f00b204e9800998ecf8427e",
"assets/lib/i18n/hi_IN.json": "a99c45df3614e97794fb972a15f76fa6",
"assets/lib/i18n/kn_IN.json": "90dd78edcb2745cd422110188d25bb42",
"assets/lib/i18n/ml_IN.json": "d75a80cb65b1257b88ad5792a2518c2a",
"assets/lib/i18n/te_IN.json": "19ec2a14e3017065311d63fb1c3ba44d",
"assets/AssetManifest.bin": "4369e6ac4d2c50ce3a73128faf469128",
"assets/fonts/GothamSSm-Black.ttf": "9bd49cdd4f3006832c8c1e051f1ca59a",
"assets/fonts/GothamSSm-XLight.ttf": "0d59a403b9bef0a8b12da51880e43cdb",
"assets/fonts/GothamSSm-XLightItalic.ttf": "efc4c5baef50975a1d85329c5ba6e8fc",
"assets/fonts/GothamSSm-Medium.ttf": "3cc225a990cc86e7d3a5d291a2ea0f44",
"assets/fonts/GothamSSm-BoldItalic.ttf": "c5b142af2c295f8606ec4bcba80fdc9e",
"assets/fonts/GothamSSm-BlackItalic.ttf": "4a250066bbedb1960bbe6ae7a6ce39fa",
"assets/fonts/GothamSSm-MediumItalic.ttf": "094bcc29d842b3f66e503bdc12875e6e",
"assets/fonts/MaterialIcons-Regular.otf": "d2a3ddda64924155f243b7ab41796293",
"assets/fonts/GothamSSm-LightItalic.ttf": "23721dcb2afa93f25696faca4a0ada8a",
"assets/fonts/GothamSSm-BookItalic.ttf": "6941513a49d146b342b31334eb8c7a8a",
"assets/fonts/GothamSSm-Light.ttf": "7a7c85043f6019390513170d1d3e57f9",
"assets/fonts/GothamSSm-Book.ttf": "40ae923bc3dd7654525f2c675e72c148",
"assets/fonts/GothamSSm-Bold.ttf": "2071eb324c77d1ca691fca3447c581b3",
"assets/assets/images/logo-characters.png": "32d48ed0baf69cef3a40d631c9e4505a",
"assets/assets/images/mockup.png": "ab2d32537f0ab19b22f9d72f6de42933",
"assets/assets/images/senior.png": "61b67be094521dd65f0d5bf4c784305f",
"assets/assets/images/github.png": "f307a14f48f13a63be7f2e0b2d293131",
"assets/assets/images/shore.jpeg": "b08c1212107eb0f825440aa5d211dd34",
"assets/assets/images/motivation.png": "3323463ffec24870cdedb1c9f4e62a48",
"assets/assets/images/junior.png": "624c1449a1cf5a20647bba16365eaf1d",
"assets/assets/images/logo.png": "553776cafe944e9b2e6d161c489b4aba",
"assets/assets/images/characters/Deer.svg": "e977fed0ed54f3f1f378bdbe323a0138",
"assets/assets/images/characters/Beaver.svg": "008fc064f96b52cc77777a5937742758",
"assets/assets/images/characters/Rabbit.svg": "29aed66cd8d9b23557eec57672e7d6fe",
"assets/assets/images/characters/Fox.svg": "f293acb4b1dc3eef1d1fd2df93203956",
"assets/assets/images/characters/Frog.svg": "c3094c709c49daa1babfe03a66e4d563",
"assets/assets/images/characters/sloth.svg": "a2e9f5ded6b941949a19b1eb67a37124",
"assets/assets/images/bg.png": "f960c381691235037c82ef575d261a50",
"assets/assets/icons/tokilogo.svg": "069c456139b83b4b4c1cb4fd55898969",
"assets/assets/icons/senior.svg": "68d92d1607d977c52a1068e5578d2c59",
"assets/assets/icons/beginner.svg": "dac2efb2161426ca9a966840dda91bd4",
"assets/assets/icons/junior.svg": "27920b5cfa26555086bcad0c439f59b8",
"assets/assets/icons/sophomore.svg": "8d231a059c17385371f6e5f95a8f884f",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
