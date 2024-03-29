function safe_add(_,$){var n=(65535&_)+(65535&$);return(_>>16)+($>>16)+(n>>16)<<16|65535&n}function rol(_,$){return _<<$|_>>>32-$}function cmn(_,$,n,r,f,t){return safe_add(rol(safe_add(safe_add($,_),safe_add(r,t)),f),n)}function ff(_,$,n,r,f,t,h){return cmn($&n|~$&r,_,$,f,t,h)}function gg(_,$,n,r,f,t,h){return cmn($&r|n&~r,_,$,f,t,h)}function hh(_,$,n,r,f,t,h){return cmn($^n^r,_,$,f,t,h)}function ii(_,$,n,r,f,t,h){return cmn(n^($|~r),_,$,f,t,h)}function coreMD5(_){var $=1732584193,n=-271733879,r=-1732584194,f=271733878;for(i=0;i<_.length;i+=16){var t=$,h=n,e=r,g=f;$=ff($,n,r,f,_[i+0],7,-680876936),f=ff(f,$,n,r,_[i+1],12,-389564586),r=ff(r,f,$,n,_[i+2],17,606105819),n=ff(n,r,f,$,_[i+3],22,-1044525330),$=ff($,n,r,f,_[i+4],7,-176418897),f=ff(f,$,n,r,_[i+5],12,1200080426),r=ff(r,f,$,n,_[i+6],17,-1473231341),n=ff(n,r,f,$,_[i+7],22,-45705983),$=ff($,n,r,f,_[i+8],7,1770035416),f=ff(f,$,n,r,_[i+9],12,-1958414417),r=ff(r,f,$,n,_[i+10],17,-42063),n=ff(n,r,f,$,_[i+11],22,-1990404162),$=ff($,n,r,f,_[i+12],7,1804603682),f=ff(f,$,n,r,_[i+13],12,-40341101),r=ff(r,f,$,n,_[i+14],17,-1502002290),n=ff(n,r,f,$,_[i+15],22,1236535329),$=gg($,n,r,f,_[i+1],5,-165796510),f=gg(f,$,n,r,_[i+6],9,-1069501632),r=gg(r,f,$,n,_[i+11],14,643717713),n=gg(n,r,f,$,_[i+0],20,-373897302),$=gg($,n,r,f,_[i+5],5,-701558691),f=gg(f,$,n,r,_[i+10],9,38016083),r=gg(r,f,$,n,_[i+15],14,-660478335),n=gg(n,r,f,$,_[i+4],20,-405537848),$=gg($,n,r,f,_[i+9],5,568446438),f=gg(f,$,n,r,_[i+14],9,-1019803690),r=gg(r,f,$,n,_[i+3],14,-187363961),n=gg(n,r,f,$,_[i+8],20,1163531501),$=gg($,n,r,f,_[i+13],5,-1444681467),f=gg(f,$,n,r,_[i+2],9,-51403784),r=gg(r,f,$,n,_[i+7],14,1735328473),n=gg(n,r,f,$,_[i+12],20,-1926607734),$=hh($,n,r,f,_[i+5],4,-378558),f=hh(f,$,n,r,_[i+8],11,-2022574463),r=hh(r,f,$,n,_[i+11],16,1839030562),n=hh(n,r,f,$,_[i+14],23,-35309556),$=hh($,n,r,f,_[i+1],4,-1530992060),f=hh(f,$,n,r,_[i+4],11,1272893353),r=hh(r,f,$,n,_[i+7],16,-155497632),n=hh(n,r,f,$,_[i+10],23,-1094730640),$=hh($,n,r,f,_[i+13],4,681279174),f=hh(f,$,n,r,_[i+0],11,-358537222),r=hh(r,f,$,n,_[i+3],16,-722521979),n=hh(n,r,f,$,_[i+6],23,76029189),$=hh($,n,r,f,_[i+9],4,-640364487),f=hh(f,$,n,r,_[i+12],11,-421815835),r=hh(r,f,$,n,_[i+15],16,530742520),n=hh(n,r,f,$,_[i+2],23,-995338651),$=ii($,n,r,f,_[i+0],6,-198630844),f=ii(f,$,n,r,_[i+7],10,1126891415),r=ii(r,f,$,n,_[i+14],15,-1416354905),n=ii(n,r,f,$,_[i+5],21,-57434055),$=ii($,n,r,f,_[i+12],6,1700485571),f=ii(f,$,n,r,_[i+3],10,-1894986606),r=ii(r,f,$,n,_[i+10],15,-1051523),n=ii(n,r,f,$,_[i+1],21,-2054922799),$=ii($,n,r,f,_[i+8],6,1873313359),f=ii(f,$,n,r,_[i+15],10,-30611744),r=ii(r,f,$,n,_[i+6],15,-1560198380),n=ii(n,r,f,$,_[i+13],21,1309151649),$=ii($,n,r,f,_[i+4],6,-145523070),f=ii(f,$,n,r,_[i+11],10,-1120210379),r=ii(r,f,$,n,_[i+2],15,718787259),n=ii(n,r,f,$,_[i+9],21,-343485551),$=safe_add($,t),n=safe_add(n,h),r=safe_add(r,e),f=safe_add(f,g)}return[$,n,r,f]}function binl2hex(_){for(var $="0123456789abcdef",n="",r=0;r<4*_.length;r++)n+=$.charAt(_[r>>2]>>r%4*8+4&15)+$.charAt(_[r>>2]>>r%4*8&15);return n}function binl2b64(_){for(var $="",n=0;n<32*_.length;n+=6)$+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(_[n>>5]<<n%32&63|_[n>>6]>>32-n%32&63);return $}function str2binl(_){for(var $=(_.length+8>>6)+1,n=Array(16*$),r=0;r<16*$;r++)n[r]=0;for(var r=0;r<_.length;r++)n[r>>2]|=(255&_.charCodeAt(r))<<r%4*8;return n[r>>2]|=128<<r%4*8,n[16*$-2]=8*_.length,n}function strw2binl(_){for(var $=(_.length+4>>5)+1,n=Array(16*$),r=0;r<16*$;r++)n[r]=0;for(var r=0;r<_.length;r++)n[r>>1]|=_.charCodeAt(r)<<r%2*16;return n[r>>1]|=128<<r%2*16,n[16*$-2]=16*_.length,n}function hexMD5(_){return binl2hex(coreMD5(str2binl(_)))}function hexMD5w(_){return binl2hex(coreMD5(strw2binl(_)))}function b64MD5(_){return binl2b64(coreMD5(str2binl(_)))}function b64MD5w(_){return binl2b64(coreMD5(strw2binl(_)))}function calcMD5(_){return binl2hex(coreMD5(str2binl(_)))}