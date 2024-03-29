// USE NOTEPAD++ FOR BETTER EDITOR https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.6.4/npp.8.6.4.Installer.x64.exe
// Portal settings ////////////////////////////////////////////////////////var hotspot_name = 'Lazy hotspot v5';
var hotspot_name = '';
var login_option = 0; // 0 for voucher only, 1 for voucher with password (for mikhmon users)
var currency_symbol = '₱';
var mac_as_voucher = true;
var hide_voucher_details = false;
var noPausePrefix = ['TR', 'PR', 'MR', 'CR', 'T-']; // No pause voucher that started with this prefix
var noExtendPrefix = ['TR', 'PR', 'MR', 'CR', 'T-']; // No extend voucher that started with this prefix

// Misc settings //////////////////////////////////////////////////////////
var footer_text = 'All rights reserved ' + new Date().getFullYear();// + '<br> Managed by RM Pisowifi';
var announcement = true;
var announcement_duration = 3; //10s
var announcement_text = 'REMINDERS<br>• Scheduled System Reboot <br>   &#160&#160&#160&#160@ 3AM daily<br><br>ADDED FEATURES<br>• Cashless payments<br><br>CHANGES:<br>• New Interface<br>• E-loading<br><br>OTHERS<br>• Movie search function<br>• Watch anime';

// Portal buttons settings ////////////////////////////////////////////////
var hide_movies_button = false;
var hide_eload_button = false;
var hide_charging_button = true;
var hide_loyal_button = true;
var hide_pause_button = false;
var pause_limit = 10; // pause available per voucher

// Loyal points system settings ///////////////////////////////////////////
var loyal_points_Database = 'JuanFi'; //public database, if you want your own database. pm me
var points_per_piso = 0.2; // 1 peso = 0.2pts
var admin_username = 'admin'; //10.0.0.1/reset.html credentials
var admin_password = 'p@ssw0rd!23'; //10.0.0.1/reset.html credentials

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
        vendo_name : 'RM Pisowifi - Annex',
        vendo_ip : '10.0.0.254',
        hotspot_address : '10.0.0.1',
        vlan_id : 'bridge1-HS'
    },
    {
        vendo_name : 'RM Pisowifi - Main',
        vendo_ip : '10.0.10.254',
        hotspot_address : '10.0.0.1',
        vlan_id : 'vlan10'
    }
];