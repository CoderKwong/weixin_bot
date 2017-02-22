export function getUrls({
    baseHost = 'wx2.qq.com',
    weixinHost = 'weixin.qq.com',
    fileHost = 'file.wx.qq.com',
    pushHost = 'webpush.weixin.qq.com',
}) {
    return {
        LANG: 'zh_CN',
        QRCODE_PATH: 'https://login.weixin.qq.com/qrcode/',
        API_jsLogin: 'https://login.' + weixinHost + '/jslogin',
        API_login: 'https://login.' + weixinHost + '/cgi-bin/mmwebwx-bin/login',
        API_synccheck: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/synccheck',
        API_webwxdownloadmedia: 'https://' + fileHost + '/cgi-bin/mmwebwx-bin/webwxgetmedia',
        API_webwxuploadmedia: 'https://' + fileHost + '/cgi-bin/mmwebwx-bin/webwxuploadmedia',
        API_webwxpreview: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxpreview',
        API_webwxinit: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxinit',
        API_webwxgetcontact: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxgetcontact',
        API_webwxsync: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxsync',
        API_webwxbatchgetcontact: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxbatchgetcontact',
        API_webwxgeticon: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxgeticon',
        API_webwxsendmsg: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxsendmsg',
        API_webwxsendmsgimg: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxsendmsgimg',
        API_webwxsendemoticon: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxsendemoticon',
        API_webwxsendappmsg: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxsendappmsg',
        API_webwxgetheadimg: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxgetheadimg',
        API_webwxgetmsgimg: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxgetmsgimg',
        API_webwxgetmedia: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxgetmedia',
        API_webwxgetvideo: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxgetvideo',
        API_webwxlogout: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxlogout',
        API_webwxgetvoice: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxgetvoice',
        API_webwxupdatechatroom: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxupdatechatroom',
        API_webwxcreatechatroom: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxcreatechatroom',
        API_webwxstatusnotify: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxstatusnotify',
        API_webwxcheckurl: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxcheckurl',
        API_webwxverifyuser: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxverifyuser',
        API_webwxfeedback: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxsendfeedback',
        API_webwxreport: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxstatreport',
        API_webwxsearch: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxsearchcontact',
        API_webwxoplog: 'https://' + baseHost + '/cgi-bin/mmwebwx-bin/webwxoplog',
    };
}

export const CODES = {
    oplogCmdId: {
        TOPCONTACT: 3,
        MODREMARKNAME: 2,
    },
    SP_CONTACT_FILE_HELPER: 'filehelper',
    SP_CONTACT_NEWSAPP: 'newsapp',
    SP_CONTACT_RECOMMEND_HELPER: 'fmessage',
    CONTACTFLAG_CONTACT: 1,
    CONTACTFLAG_CHATCONTACT: 2,
    CONTACTFLAG_CHATROOMCONTACT: 4,
    CONTACTFLAG_BLACKLISTCONTACT: 8,
    CONTACTFLAG_DOMAINCONTACT: 16,
    CONTACTFLAG_HIDECONTACT: 32,
    CONTACTFLAG_FAVOURCONTACT: 64,
    CONTACTFLAG_3RDAPPCONTACT: 128,
    CONTACTFLAG_SNSBLACKLISTCONTACT: 256,
    CONTACTFLAG_NOTIFYCLOSECONTACT: 512,
    CONTACTFLAG_TOPCONTACT: 2048,
    MM_USERATTRVERIFYFALG_BIZ: 1,
    MM_USERATTRVERIFYFALG_FAMOUS: 2,
    MM_USERATTRVERIFYFALG_BIZ_BIG: 4,
    MM_USERATTRVERIFYFALG_BIZ_BRAND: 8,
    MM_USERATTRVERIFYFALG_BIZ_VERIFIED: 16,
    MM_DATA_TEXT: 1,
    MM_DATA_HTML: 2,
    MM_DATA_IMG: 3,
    MM_DATA_PRIVATEMSG_TEXT: 11,
    MM_DATA_PRIVATEMSG_HTML: 12,
    MM_DATA_PRIVATEMSG_IMG: 13,
    MM_DATA_VOICEMSG: 34,
    MM_DATA_PUSHMAIL: 35,
    MM_DATA_QMSG: 36,
    MM_DATA_VERIFYMSG: 37,
    MM_DATA_PUSHSYSTEMMSG: 38,
    MM_DATA_QQLIXIANMSG_IMG: 39,
    MM_DATA_POSSIBLEFRIEND_MSG: 40,
    MM_DATA_SHARECARD: 42,
    MM_DATA_VIDEO: 43,
    MM_DATA_VIDEO_IPHONE_EXPORT: 44,
    MM_DATA_EMOJI: 47,
    MM_DATA_LOCATION: 48,
    MM_DATA_APPMSG: 49,
    MM_DATA_VOIPMSG: 50,
    MM_DATA_STATUSNOTIFY: 51,
    MM_DATA_VOIPNOTIFY: 52,
    MM_DATA_VOIPINVITE: 53,
    MM_DATA_MICROVIDEO: 62,
    MM_DATA_SYSNOTICE: 9999,
    MM_DATA_SYS: 1e4,
    MM_DATA_RECALLED: 10002,
    MSGTYPE_TEXT: 1,
    MSGTYPE_IMAGE: 3,
    MSGTYPE_VOICE: 34,
    MSGTYPE_VIDEO: 43,
    MSGTYPE_MICROVIDEO: 62,
    MSGTYPE_EMOTICON: 47,
    MSGTYPE_APP: 49,
    MSGTYPE_VOIPMSG: 50,
    MSGTYPE_VOIPNOTIFY: 52,
    MSGTYPE_VOIPINVITE: 53,
    MSGTYPE_LOCATION: 48,
    MSGTYPE_STATUSNOTIFY: 51,
    MSGTYPE_SYSNOTICE: 9999,
    MSGTYPE_POSSIBLEFRIEND_MSG: 40,
    MSGTYPE_VERIFYMSG: 37,
    MSGTYPE_SHARECARD: 42,
    MSGTYPE_SYS: 1e4,
    MSGTYPE_RECALLED: 10002,
    MSG_SEND_STATUS_READY: 0,
    MSG_SEND_STATUS_SENDING: 1,
    MSG_SEND_STATUS_SUCC: 2,
    MSG_SEND_STATUS_FAIL: 5,
    APPMSGTYPE_TEXT: 1,
    APPMSGTYPE_IMG: 2,
    APPMSGTYPE_AUDIO: 3,
    APPMSGTYPE_VIDEO: 4,
    APPMSGTYPE_URL: 5,
    APPMSGTYPE_ATTACH: 6,
    APPMSGTYPE_OPEN: 7,
    APPMSGTYPE_EMOJI: 8,
    APPMSGTYPE_VOICE_REMIND: 9,
    APPMSGTYPE_SCAN_GOOD: 10,
    APPMSGTYPE_GOOD: 13,
    APPMSGTYPE_EMOTION: 15,
    APPMSGTYPE_CARD_TICKET: 16,
    APPMSGTYPE_REALTIME_SHARE_LOCATION: 17,
    APPMSGTYPE_TRANSFERS: 2e3,
    APPMSGTYPE_RED_ENVELOPES: 2001,
    APPMSGTYPE_READER_TYPE: 100001,
    UPLOAD_MEDIA_TYPE_IMAGE: 1,
    UPLOAD_MEDIA_TYPE_VIDEO: 2,
    UPLOAD_MEDIA_TYPE_AUDIO: 3,
    UPLOAD_MEDIA_TYPE_ATTACHMENT: 4,
    PROFILE_BITFLAG_NOCHANGE: 0,
    PROFILE_BITFLAG_CHANGE: 190,
    CHATROOM_NOTIFY_OPEN: 1,
    CHATROOM_NOTIFY_CLOSE: 0,
    StatusNotifyCode_READED: 1,
    StatusNotifyCode_ENTER_SESSION: 2,
    StatusNotifyCode_INITED: 3,
    StatusNotifyCode_SYNC_CONV: 4,
    StatusNotifyCode_QUIT_SESSION: 5,
    VERIFYUSER_OPCODE_ADDCONTACT: 1,
    VERIFYUSER_OPCODE_SENDREQUEST: 2,
    VERIFYUSER_OPCODE_VERIFYOK: 3,
    VERIFYUSER_OPCODE_VERIFYREJECT: 4,
    VERIFYUSER_OPCODE_SENDERREPLY: 5,
    VERIFYUSER_OPCODE_RECVERREPLY: 6,
    ADDSCENE_PF_QQ: 4,
    ADDSCENE_PF_EMAIL: 5,
    ADDSCENE_PF_CONTACT: 6,
    ADDSCENE_PF_WEIXIN: 7,
    ADDSCENE_PF_GROUP: 8,
    ADDSCENE_PF_UNKNOWN: 9,
    ADDSCENE_PF_MOBILE: 10,
    ADDSCENE_PF_WEB: 33,
    TIMEOUT_SYNC_CHECK: 0,
    EMOJI_FLAG_GIF: 2,
    KEYCODE_BACKSPACE: 8,
    KEYCODE_ENTER: 13,
    KEYCODE_SHIFT: 16,
    KEYCODE_ESC: 27,
    KEYCODE_DELETE: 34,
    KEYCODE_ARROW_LEFT: 37,
    KEYCODE_ARROW_UP: 38,
    KEYCODE_ARROW_RIGHT: 39,
    KEYCODE_ARROW_DOWN: 40,
    KEYCODE_NUM2: 50,
    KEYCODE_AT: 64,
    KEYCODE_NUM_ADD: 107,
    KEYCODE_NUM_MINUS: 109,
    KEYCODE_ADD: 187,
    KEYCODE_MINUS: 189,
    MM_NOTIFY_CLOSE: 0,
    MM_NOTIFY_OPEN: 1,
    MM_SOUND_CLOSE: 0,
    MM_SOUND_OPEN: 1,
    MM_SEND_FILE_STATUS_QUEUED: 0,
    MM_SEND_FILE_STATUS_SENDING: 1,
    MM_SEND_FILE_STATUS_SUCCESS: 2,
    MM_SEND_FILE_STATUS_FAIL: 3,
    MM_SEND_FILE_STATUS_CANCEL: 4,
    MM_EMOTICON_WEB: '_web',
};

export const SP_ACCOUNTS = 'newsapp,fmessage,filehelper,weibo,qqmail,fmessage,' +
    'tmessage,qmessage,qqsync,floatbottle,lbsapp,shakeapp,medianote,qqfriend,' +
    'readerapp,blogapp,facebookapp,masssendapp,meishiapp,feedsapp,voip,' +
    'blogappweixin,weixin,brandsessionholder,weixinreminder,wxid_novlwrv3lqwv11,' +
    'gh_22b87fa7cb3c,officialaccounts,notification_messages,wxid_novlwrv3lqwv11,' +
    'gh_22b87fa7cb3c,wxitil,userexperience_alarm,notification_messages';

export const PUSH_HOST_LIST = [
    'webpush.wx2.qq.com',
    'webpush.wx8.qq.com',
    'webpush.weixin.qq.com',
    'webpush.web2.wechat.com',
    'webpush.web.wechat.com',
];
