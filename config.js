// USE NOTEPAD++ FOR BETTER EDITOR https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.6.4/npp.8.6.4.Installer.x64.exe
// Portal settings ////////////////////////////////////////////////////////
var portal_key = '79f6ad7a-8ec9-4549-b94d-698f6fb1eee6'; // portal key that you received upon registration: https://lazydev.unaux.com/register/
var hotspot_name = ' ';
var login_option = 0; // 0 for voucher only, 1 for voucher with password (for mikhmon users)
var currency_symbol = '₱';
var mac_as_voucher = true;
var hide_voucher_details = false;
var noPausePrefix = ['TR', 'PR', 'MR', 'CR', 'T-', 'RD']; // No pause voucher that started with this prefix
var noExtendPrefix = ['TR', 'PR', 'MR', 'CR', 'T-', 'RD', 'GCASH', 'PAYMAYA', 'GRABPAY', 'SHOPEEPAY', 'RM', 'RA']; // No extend voucher that started with this prefix
var portal_adminpage_username = '1';
var portal_adminpage_password = '1';

// Misc settings //////////////////////////////////////////////////////////
var footer_text = '<br><br><i>Bookmark this link for easier portal access</i></p><a href="http://rmwifi.com/"><b>rmwifi.com</b></a></p>••••••••••••••••••••••••••<br><a href="https://rmpisowifi.tawk.help/"><b>Check FAQs here</b></a><br><br>All rights reserved ' + new Date().getFullYear();
var announcement = true;
var announcement_duration = 60; //10s
var announcement_text = 'ADDED FEATURES<br>• Loyalty points <br><a style="color:#fff" href="/loyalty.html" title="my Points">Sign up here</a><br>• Cashless Payment<br>• Movie search function<br>• Watch anime<br><br>';

// Portal buttons settings ////////////////////////////////////////////////
var hide_insertcoin_button = false;
var hide_movies_button = false;
var hide_iptv_button = false;
var hide_eload_button = false;
var hide_vault_button = false;
var hide_charging_button = true; // not yet implemented
var hide_loyal_button = false;
var hide_pause_button = false;
var hide_member_login = false;
var pause_limit = 0; // pause available per voucher, 0 = unli pause

// Loyal points system settings ///////////////////////////////////////////
var loyal_points_Database = 'reymauriceDonesa_db'; //public database, if you want your own database. pm me
var points_per_piso = 0.1; // 1 peso = 0.2pts
var remote_api_ip = 'sg-1.waspradi.us:25426'; // port:8728 same as juanfi manager remote ip. purchase to vexifi, hostddns, remotewinbox
const redeemTime = [
  {
    Label: '5 points',
    Time: '30m',
    Points: '5',
    Validity: '5m',
  },
  {
    Label: '10 points',
    Time: '1h',
    Points: '10',
    Validity: '60m',
  },
  {
    Label: '20 points',
    Time: '3h',
    Points: '20',
    Validity: '120m',
  },
  {
    Label: '30 points',
    Time: '5h',
    Points: '30',
    Validity: '300m',
  },
  {
    Label: '50 points',
    Time: '1d',
    Points: '50',
    Validity: '1440m',
  },
];

// GCash setting //////////////////////////////////////////////////////////
// Follow this guide to activate GCash: https://payments.wifree.network/tutorial/ewallet-voucher-purchase/
var hide_gcash_button = false;
var gcash_url =
  'https://payments.wifree.network/xendit/production/purchase_voucher.php';
var gcash_key = '65d79326d79a7'; // portal key from wifree telegram bot

// Telegram coindrop notification /////////////////////////////////////////
var enable_coin_drop = true;
var BotToken = '7109140183:AAFXbb0awHYZcZIewCMFaBdhO1czjFz42UE';
var ChatId = '-1002062809408';

// Vendo Setting //////////////////////////////////////////////////////////
// If single vendo
var VendoIpAddress = '10.0.0.254';
// If multi vendo
var multi_vendo = true;
var multi_vendo_type = '2'; // 0 = manual, 1 = auto via Hotspot Address, 2 = auto via Interface Name
var multi_vendo_ip = [
  {
        vendo_name : 'RM Pisowifi - Annex', // vendo name
        vendo_ip : '10.0.0.254', // vendo ip
        hotspot_address : '10.0.0.1', // hotspot address
        vlan_id : 'Bridge1-HS' //interface name
    },
    {
        vendo_name : 'RM Pisowifi - Main', // vendo name
        vendo_ip : '10.0.10.254', // vendo ip
        hotspot_address : '10.0.0.1', // hotspot address
        vlan_id : 'vlan10' //interface name
    }//,
   // {
   //     vendo_name : 'RM Pisowifi - GCash', // vendo name
     //   vendo_ip : '10.0.10.253', // vendo ip
     //   hotspot_address : '10.0.0.1', // hotspot address
        //vlan_id : 'vlan10' //interface name
   // }
// palaging walang "," kuwit or comma sa dulong bracket "}" ang huling vendo setting
];

