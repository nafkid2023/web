jwplayer.key = "XSuP4qMl+9tK17QNb+4+th2Pm9AWgMO/cYH8CI0HGGr7bdjo";
var _get = function (_0x42aac1) {
  if (_0x42aac1 = new RegExp("[?&]" + encodeURIComponent(_0x42aac1) + "=([^&]*)").exec(location.search)) {
    return decodeURIComponent(_0x42aac1[0x1]);
  }
};
var _standalone = _get('standalone');
var _isIframe = !!(_get('iframe') == "large");
var _initHostname = window.location.hostname;
var _listEvents = [];
var _type = 'livetv';
var _currData = 'eyJpZF9pcHR2IjoiNTkiLCJuYW1hX2NoYW5uZWwiOiJDSDEgQUZDIEFzaWFuIEN1cCAyMDI0IiwidGFnbGluZSI6IkFGQyBBc2lhbiBDdXAgMjAyNCIsImplbmlzIjoiaGxzIiwidXJsX2lwdHYiOiJodHRwczovL3JtdHYuYWthbWFpemVkLm5ldC9obHMvbGl2ZS8yMDQzMTU0L3JtdHYtZW4td2ViL21hc3Rlci5tM3U4IiwiZ2JyX2Jhc2U2NCI6ImRhdGE6aW1hZ2VcL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUhnQUFBQmFDQVlBQUFCekFKTHZBQUFnQUVsRVFWUjRYdTFkQ1p4TmRSdCs3bjduM3Rrc1k4WnU3QnBMcEpJaXNoWVZvajVDcVpTMWtsMUpkckpFVko5UVViWksyYklUU1h4YXZwREltajNyN0ROM3Y5XC96XC9zKzlrelgzcTNDSFRyOXB4c3k1OTU3emZcLzd2XC9yenYwU1VXcXVmSFpZN282R2pZYkRiNFwvWmMrUmFmVHFWZW1wYVVoTlRVVlJxTlJuYXZYNnlcLzNscGQ5cjh1KzRHYjZnOEdMb3ZjY1JJY3hNZkRydlRCNGpmQnBTXC95SGg4NWxSZjlHUnhDVlZSWU9KOWZmNGtHalJ4ckJ3XC9mUWxTeGNQd2M5QVNmNEZSOGZEd0V3Q09LRm54QTg3OVNwVStvMW9aeDdwUXU5NmYrdWM4Rlk3QWhlbnBzWFBwTWJlZ0xzMTExV1wvbjVmTHE4RlExc2RBQTdkQXJjSE1GbjlxTitpZ2RvazV3SHM4XC9tVTlBbTRjdnlSNUlyVXBxZW5xXC9ORWNpODhCSEI1dno5Nm41c2UwQXNYUU8rQzAzWUdvMWZId20zSWdzN0hkZFY1UTFnbUMyYjN5OEsrdFhGd3U3d3dSK2hSNStHNjBCdDhHc0JCTU9SN1FrSkNqaFFId1JIUWcxTHE5WG9oVWl2bkJuOFhcL0h0d1E4amY1THhcL2p2OXZCWHpJaE52b3c3ZzErWkJwT1FZOWpORHBOU0g1XC9aQlwvaXdtVUxcL21aSU1LRXpSOUdZZmtrQTN4dU53d21NK28xYjRnc1wvVm5vU2hkdHFIU0F3V0JBbmp4NWNvQUx2bUVRZkFFeEl5TkRTVzFRYlFmVjhybHFYSUM5bk9UXC9mN2Q3ODUydDB6dmhOZWt3ZEdFY1BIbjJFUlBhNElBV3ZEekFYcDVqUU5xMlNwalkrUWgwdE1Fd0dsQ3ZSVjI0OUJtYUJJc2paYmZiYzRBVE1JTnZISlRVRXlkTzVJQXZmdzlLYmZDRDVmeHpnZjBINUQreFFmMXV3T3hIbDBsNWthXC9LWHVnSmxOOXZ1SUlFVTZCMEprU2N2ZzE5SDl3T2d6dUN0aGVVNERxYVgxU3A3TVAreU1qSWk2UXVDS3pMNWNMWnMyZlZoOGp2Uk5MUGRhcUN3QWFkcmo5eFdcLys4SkxBQ09qXC9ObnNHTnVoMzF1TGREQ2lXUkN2aENEYTNVOHJrcW1nQWJ6TENubGtUdkJcL1pCbngwRG45R0RCZ1wvZUR5ZlNvTHZ6MXRiS0JsXC9xRUdBRllQbTdTT3k1bnJJQUt1QmVyRUwrd2V2UHJvQ2VUcFZQNTBEOG5hZlFlWUtkUUdrMjlvOXRNRlUwVmJrdFBSNHYxVDhJcTZjZ0hUUW5tajcwSUZ5eHYwQjNWN1hIaVpYbWlnZWxVSUE4ZWZLaytyZElySHdGXC94NzhIdGEyVmhkY0ZJWnZGNmc0dVZQdTZIUFdUTTc1czVEOGphXC9qUmNobG1IeGVPUEtmeEpBRithbXVxVGtscHlBNlYwbnRwUTg5blN6eHhWNnFrOHBZbUs4elJxTjJzXC9KbzJUY2ZkRFdxdGpudjlod09oMHBjQ0xnU1wvZ1JWZGZDdFBSNVBMbkdpZ2lDR0Ezb2hiZ1NcL0VVYVwvRjZrUlJ6QjJaVWw0SXc3eWhjRVE5UElBU3paRXI5TmpWTnNUeU41ZEhGNkxDMjk4MWdyV3hLT2FpZzdhVjFISlRxZFRTZXk1c1cxUXNrVnFSU1ZmVHFXSGVCdFg3YlRnWnRSOGhNQ0M4THNcL2NNMWFsazNDTzVGd2JRUEllWDR1YWxCYlhWK1RRNkNva3AyV2t4aXpMQW1PNkIzVTBLWXJycGZmYXdLM0JiNFlINE52NTF2eGNCY3pHajFWaFVBejRoR0F4YjRlUG54WUFXc3ltUlM0NTk2b0FDdVNHN1RCNGU0aDZcL1IrWHE5TDNRc0ludHZ0NHIrOUFjXC9mQjVQRklucGFnV3d3bU9CeFM4eit1d041eFJXOUtpY0VOQTFWdGM2VWdVSHprdUF0dHBWNWpxRGtYdVJ0NVZ3Rll4cDRtU1RaXC8zVkJMSjY1R3owbmxJTTl0Z1ExT3pYd3JSVmErRk5TVXRRT05wdk41K1dSQmVUY281TEZoNUI3OWhKQUhabzJhWXpIMnp5S1lvVmorQWN4WlV3Q1NDZ1hzTUVtb3dYcEdWbFlzMjRkWm56d0tZNGNQZ0ZmSU9XcXBQdTZhSGJOM3Vyb2FEVjgwWVBxclptMEVDZExPUW1YQjlqdjg4Q3JNME9YSFFHenpnaW5QUU41TE9WaDBFZENWenlocnBKZ2tkcGdrVUFrMWMyTVNEaG5vM3lVVW1iaXRHUzhpWHVZR3FiNm5iZmd6VkZEVVNEU2lwMGIxbUhMZ29VNHMzTWZkQmtPV054VXp4NHhMOXdDWERDdjFRSlQ0UVNVdTdjbWJtM2NFSjc4K2JIMHF5MFlPR0FZTERwS09HTlFINldIeTgybDVYXC8wWXZTK1A3Q0RmNGRVVXdwMVhqdDNZeFlpYnptS250TVo4dENrYUx0TkFKYnZvVjFEdExVcURINkNYcVpZSTMrd0NoU01ieVUwRW5ERDFkWnFhOGtnbnJ2ZHg3Z3hKbHFIOVl2bTRmajMzMkpjelwvNUl0Tm9RbGUxQWxNT0xTS2J0ZkZUUGNpOHVldGRHTVVOTXlQUFZjSE90c2cxK09LbTVUbG9CYTFKNU5INm1HNzRcL2RoYXY5QnNDQTZYQlpDTFlsQkFtWCtFSjJ2V1wvQTh4THZZZU9pUTZcL2hacklpVlQ3Tmt4Y1VWSFowZk9QMEFDT3NsU0NTV2VEN3BaU1RmMENwa2l2cUdOeHNpNjB3VmZyZnY3cys4cEdsSlNleWV2RHNQNDk0RHF4Qnh2bXpVQitCeER0MUNHR2NhR1pHOVwvTVRSXC9CTUVrdnFwYzJWNU1CVVhtVUF3cURrXC85ejBFbk5JdWpabm14a2U1MXcyS09nU3l5Rit6djF4dk45QnlBbDI4VUZGem0rZkdYdHo5N0hwVjRucm9GZlFpWHJVVXhjVlFuWjFuMkIwelNmSWJSRGgyaHJFdStSRWx3KzhRR1Y2QkJnZzFJYmxPVFEzdXphbnlYWGFXUTViVVN2YmxnNGJUSnNXUm1JekhMQllqVWdscUdHbmJsWkswR3hlUVFXYlZuRWpHbGZmbGlVMmdWenRVQzZpa0oweU5CN2tFWVZtZUYySXB1XC95WXpPaTJKVnFtUGJxUlJzMjNzTWptd1BMT0swWGNWRDAwalVGalFGZnFzRFk1ZVVRM3IwMW9CcWxnOE8zVEdJRkJ0TWJhQUF6czdPemtsQmhxT0hMQUNKclJXQTlOeU0yZG5wNlBYc3YyaGo1d0dwSnhCSmlZM1ZSeU92bDdaV0hFV2VaXC9ENllmY2FFRVd0NStVdnhMMVNFaXllR08yYWllNkxod0NuOFc5WlpvWlwvOURpOWJyNDMxWG1xMFkxTVNuUTZIUmRYM25pYzhVWGd5Rm5uVllSV2Uyc2RONmZQNEtDdE56R0w1VVpIRnY0TDFUeXViVkZSM1wvXC9IRVdrdXd3amFxamxaNFcxck5YWHFvcVNaNlBRWUNFckhsbzJ4WWRFTW1OME8yT2tNUmRGV1JudjRuWFpTd0dPNkFFWktnWVg2TGxvQUZvazNhc2tBQWRoTkZTalNZdUJyVHpJZDZCTDJCQmVSYmhpeUpLSmtpSlhKRDgxbXZPeWdLZkJHSnVDbjR3NjRUYmJcL1k0blwvekttOE9SM3pFQjR6UHlzVDVSdG00YkZCM0hpOFZxTXBpN3ZUSFBLYjJrMkpNSXNYWGFMZ2ZhSExmY2h2XC96ZWZLRjR2djR3TTZOMCtCeHJIMldDTUlSREhqaUVQUmR0R29NdytQeUpsSVFnaTR3SEd0bTZZaldZWUhmek9FSWx5VFJBMXhvcVhBdUVVOW9xUkpWRDZIUkZDTmVMdkhQU1VuU0xyM0NScFwvTHdzZmgyaFJEMVRxelg2ZnI0WVdaYll2XC9uR0xudzdiaktkaFwvZHBob2Y1WkYzaHZSajhjU0k4Um5yWHZETHFwWkRWZElTaE9Ld0craE81QW1BQ0kycFdBS1lZbzZvM0N3MHFKR0xIMmNOSXpVaEJUTG9MVVJZVGJIb1RjN2wwcm5RaWo0Q0hraXFoalpuQW0wVkZVXC8yYXpBWTQrWHUzcUhwNnh5THAwZlMwWFFRMm13Qzd6WlJpbHhzbkxRWmtScGd4OXRsZW1EcmhROHpOVEtORWgrYkJcL3BWZDRPYzFHR2hhUk9vY2tRY3hZV1Y1WkJxUFViS0RZWktBZlBtWU9QalpWbjFoV0kyeHVRTmdQY1hMelhCRzRsNlJ0RWgzTmdaWFQ4SXBkenFxUDlxTUFFeUFMZHRKeDhvSE8zZTVUUnhsU3ArREFMcU10TGJVM0FabXRBeG1FeHhlTnl5VWRsSFJUdjR1VWs4N3hRVnpreHFUUlNsUEk0Wk9zeEVWcWxaRW80Wk5zSGp3Wkt5TE1tSG5LVzZLcTQ4dk56SkRjRzVBaVhlZHBuU01YVm9jMmRIN05mK1owcTNscHErc2RFMklRNVExTG5jQUxDR09TTERZWWpua1c5WDhadFIwZVdCeVphRndrenBvMUxJbGxudytIMXVXTFVjY2VVbVJYQ01uSlRhTk5qU1RJV0IwcVZKNGZ1UUliRm0zRmd2ZlwvamZpQ0xLSjBoSkRuOXJuTWVJVXpadTVaQUtlNmRxSnR0cUFhZjFmaHYyTUMzVjc5c0hqRTlcL2lackNHc0t4XC9SWFkxYjFcL3VUV0p1djlTR3pXNjhOQ1VlTVpWXC9oWmVSQWJkNXlCOWdSSDRDWERoM0FIeXB1N0x5WnNjXC8yeG83Wm4wSVBVVXIyMjdFV1ZaUitydzFDVFpFWVB6eno4T1JmQkw3YlRHWVBITTJKczZZamZmbmZJeVltRWg4OGZGTWJGazRIMVwvUG5JTllPbWd0K1wvWkFmRkpwYlB4ME1iYk9YWWk4bGdqbUJYeDRidHBFMUg2c0U0N3BvcmtOREVxNnJ1WnhVWlJMMVZQcnlTelVlWWF4T0NPRllDUWZ5aldRZ0VXQWkrZGVnUFZNY3RTdldCeTFieTlKRm1oZXJKanlFYUw4SG1UUVRqOHk0alhZaXhYQWUwUEdJQzFQTWF4YXM0RlNhV0VwanVFSHBjTnI5Q0pQbEJtdnZOZ0o4UVZqVUtSc1VZeCs1RWtVVHZjeGd3VGtLMUVFVHczcWorRXZEY0hLXC9TekJtU0xob1YwMkJlcmlvU3p3bnpublFvREZJYlNYMllQZUh4Ym1OVHRVREIrcW82WHpSU1BhVml6M0F1eW1CeHlabm95WEgzOFlQMjVjaVpkR0RxTnh0bVBLMEtINFpkOWV2TDEwTlY2ZlBnK2ZmTGlBUlFTS25qQlN1RDVlZXNoNnFqdXhjMjRtRXhiT200WjNlXC9kQzVxa1RhTk94TGVvMGI0YkpBNGJpNExmYjRMK2xHcFpcLzl3dTNoSVJRMVwvNFEwNVFkc1I4amw3TXlaRXVsZDArUWZjeXBodUJrNlh4MnhOaHpzUVNMUlRLUXBGYWxzQjF0NzcwZHF4YXVoTXZ2d2wzdFdxQnQxeTVZc21RMVVpbXhyd3g4azdhV1hpbHRybFNhUk0zUlhWTjU1WmdvQTVZdCtnRHhMRTZjUFBJcituZnNpS2gwT21PMlNQU2dGbWpTcmcrTDdubVp6dlFvYlwveGFNelwvRTUzQmJVekZtVFVsa0dRXC9EYjByV2loR2hBT3lOUUhSMExwWmdjVVdrY1BcL3lzMjJ4YWZGTXZEWnFFRVlOSDRtengwOHhZdFRqblM4V1lsZEtNam84XC9LSldOQW5Ra29JZ1NSYXJlSmtFekpreEVYUGZISVwvdmw2MkNpYkh6VTEwNjRlalI0OWgrTkExenZ2cUdTUkE3SXBqeURLV0Y1TytXY2VGRSswME92RHFuTW54RnRcL0NPbWNaa3RpdVV3OCt1aUdoYjJkeXJvcFhIeVFSRm0zYk5VQ3BXajdYVFp5SlwvZ1JoMDY5Y1RyNzB4RGdYTFZzU3ozWHVqZnQyV3pINlp6cU1acWNJRHhhTlZ1NGZSXC9ySDcwYU41Y1wvUWIxQTk3OXU3RmtsbWZvbGlKa21qNDFQTjhyNEdzS0ZtWlJKR0N1c1JvVjluTHVnUnlQb01MZHp5V2pDWXYwbjhRTW9BaUtsejU4RFBkbWNkZUx2Y0N6TlFIMVJWdGFSNGpldmZ2am1MMGM2ZVwvTlFMSnFja29XcVlNbXJWXC9CdkhGeTZGMWlcL2FVWUdhcVZDMVhzNlFLWUhxb295Y01oNVcxMTdPbkRtTFcrTGRZZVRLaFJaZm5ZSW1MZ3lFaUFUMjY5dUM3bWxRTjJTK0poaENsNThyTEgrSVpFaXJ4c24wSlwvOEd3ejhvenUwV0FKUjBid3VIbnZjUllTK2RlZ0dtQUdRUFR0bkxoeDA0YmgxTnB5U2hnOHlQQzVjQ2I0OGVqVkxVNzJJRDFLUHAyNllQc0xNYVZTc2RxSlNWRmNhRzlmbVwvT1ZCemFcL3pPbURoK09KaTBmeGoyTjc4ZlJJNmNSVTdBb1h1emVGNjVrY3BxRUNhTFNwRkx3dVBZU0xJekpOTU5lVEZ4Zmdsd3Qxb1paS3c2bGJPam5wbzQxbDh5OUFCdG9mNTJNRGVXN3pwbUJYcThOeE8xM0pzRnM4Y0hDNXF1ZmZ0aWxQTTYzMzU2T0FcL3VQY21HazFFZVVSTTBKSzRKWm9YYyttSXl0UDI1R3kwY2VoSnZsMHVUa0RNVEVGa2FiRnUyUWtwb0dyOFBGZ3JLRjZwbWxSMWFhUE1GTVN3Z1M5TGVjd3V5YVZKYThKajlHcnJJaHkzcUNEV1VzZW9mQTZ2QnhZOFlhY3JXVEZWakNIQTYwMEl5eU1PRFZYcWhkNTA1RTJNMXN3aktpZjQrQitHYkR6NHlTQ0xCSzlkRXpkWkZcL0Z1SEVtSEVEY2ZjOU5hbWlVNUdha28yK3ZRZmgxd05zK3VMaWlPUmU5NFAxYWIwbmtzVEswMmozZWlrazF0N0RqU3IzY0dWTklnb3J4bGdrOTBydytZdXZkVHJxQ1NDWlVcL3paZzN2cjFzRFR6N1pEVW9XeXVLdEdBeVlxNkgwcVFwdkV0RTVNZmU4TjJDTXQyTFh6QUVZTUcwdENIbjlQbTY1am1sSmpZSWJtekZ6VlRTRGFoakc3WCs5R2tUcEg4TXlvV0pxSjBHeXdWTitpOU96eHpoM1ZwRXNzbzNKNlpDZExyNVRHdVJJdWs4XC9IakJVTENIcnVmbzh2SGFQSHZZcmE5OWJDbmRVYk1PZE1sNGxTZmNkZDVkRHkwYWFZUG5VTzl1NCt5dEtpdE9FSTBaXC8wSHRVcUt6MUJvUzNrVlFWWVphZmxQaGtGeEdcL0RhNThXSTlPRFppT0VRd0MyK1hOSk5lbVM5Nk1BMXRTbzhLQ3JWYXVFXC8zeTNoZUN5YWlDSmVUcEVJcXZaN2hTTUhOMFBreVorZ0pRekhuaTgyVmp6NWVkWXZHUVJKb3licVVnQVB0cHhnMEVhMXJVK3JDYzdkTUQ3MHo4TXlaa0pZYTNcL3dpbmk5WXZtWVI2Y1hRNWpWcFZtVGZwd1NPOG4yOU5DSHlUM1N2QTVGRkpSdVFzV3pjWFJrN1wvaHl6VnJzV0g5MXpoK1wvRFNYSmtLVkRjZE02SU9mdHhcL0UxQ2x6eWVMdzRJdmw4XC9Ed1F5M2hjY1FvS1krTU5hTnlwVXBvMExBdVNwY3FpeGRlNkluVU0rTE1YR2MxVFpQalp4VkxjY3BNYWVqMVVYNUVKQjRLeVFhcmdxT2JHejNYcW1oTmR0WFwvZlF4NUxGWWRpd29MNENLTkowOGUyaXFxM0ExZmJVTHZYaVwvajdYY200TmlSTXhnMmRCeHRtQXR6NTA5SDIzKzFSODJhdFRCOCtBQkVSdEpEemNwa1QxWW12dHZ5RVwvcjFHUUt6U1ZLQzFcL3NRTGhhWkhUUTdYbjBtN3U5Rzg5SXVTODN0a0JyNUg2VXNoYmprWVpVdDl3S3N2R2VWZ1ZBTmVGNFc5XC8za1pkU3FmUmZhUE02T2htSUZHZllrbzNqeFJLeGVzNXhPbGdramgwOWlVN1VPNzB4N25TekpGQlFxVklpTFFFa2xxVzc5dWsyWSt1NU11SnpNUlRQOHVoNVpxMHViSW1GWjBnWXpNV012ejdhVTkyaUhtWnpSeWgrWDlcL1JGYzNuY0xESG1XZ25PQ1k5NG44clowc0ZpTVpQK1MxWWk3OXRIaDZ0Z29UamNWKzl1UFBWMGU4eWJzeGhUM3A3TkZLVUhFOThlakowN3RtTEg5bCt4K2V2dnVUa1U2MW5aT2ltMGE0N1dsV2t4MTBxK1ZZcUcxNVZwMjQreHk4blJzcDdSWm5jb0taYmM5TVhYcWlPUjBPdG1GaTdYQWh6a1B3U0JKamg5K25YRDZGSGptTFdTdHRkQVNNUStuOXFzTmhuME5xejdjalBYeEl2WHh3XC9HQUpMYVhka2todE5EbFdrMFhyOERyNDhlamdFREJsSGFHVU5MNmlvY0RrblFjSFlIdTdUaFpFMzQ5Vlh4Y0ZnT1FrYzJxRVFQbDYwUDh6NzlKT1wvZEFBQUhlVHpzYU1nSHpKMDdEN05uZmN5ditRU0theVBlTWNITGx5Y09wODl3TEFKM2ZyMTZkYkZpeFJweXFHMTBzaHhJU2lxSEhqMjdvVVN4UW5pZ2NYTk9xdUh3TjFadXd1S1FcL0RkRFBpbG55WStkSjBjaVwvdGFEWklaU09ua3ZHc3ZqWW1kUWhZN2t0dVJpZ0M5ZWZnTUhtRXgrYXh6aUUyS1I3WFJoOWNyMW1ERnpMaDBTQTl6c1UxSW1TeVVQUkx0NWNXdjFLbWpcL1pCdmE2OEtzbmNiZ2tZZGJJU09GTmxtbE5jUHBDT2JSbVlZdFwveE1HZkJCUGdBbWU5RFVyVlgycGE5VnM5STBGc0RoSExFTFVwdDE5dUZrakhEdDVGRldTcW1IRTBOSDRlU3R6MDlJNXdOVXdSdmd4Yk1SQXVNbXdkTEJKTFhcL2VRdWplK1htMUlFWjJNXC94T2Z3c1hrRFdBSmQ1UE1mK0VOMWNsMFE2bjhsZEN6cE1VN01YbVJMWEJHT21NNVY0YmZQSGlTXC8rdmRDdXdFVVZ4b2hNS0ZxQkhcL1FnU1N5Umkwb1MzOE90ZUpna292bSs5T3g1bnFLNVhyMXFIZGVzMmttdkY0aU5iWFdTeW5NWUx1QjRFblRcL2FUTDlMc05PUWpva3JrNUJ1KzFFUkExVTM0cVVBRnU2WitDRTNFc0FpZVhIeDBmU2M3OEhjT1o4eVMwWHVwY2VOXC9BbjU2RHoxUis4ZVBabnhxb1p5ekVcL1BtN05BeXdMcXNwRW5yeDFEQm85QTkyNjlOWTg4SncwYVhoSXMxK1dqN2UwMDBZeUMxWCtqd3BGMlUzcjhsOGpIaUczMlNGUDRqUVN3RlBaMVRNd1wvMEtRK0JyN2FEeWRKcEh2eGhWN1l1XC85WDFMeTdGalp2MnNqQ3dqRDA2ZCtQSVlTSGZLM2VhTjZpQ1FzMFp0UzQ4MTZ5TnpoRVRCR1Rydzk3STVUdFpHRnpWdnpkditMSjBmblZ2ZnJGQVZORWhQTzFqcVJnblVJMHZMRUExdUpYdHBkUmNyTlJxblFpMnJScGc3aUNoZENmUkhZREhheXVYYnRpMDZadjBiSkZDeXhhdkpBSmppOFpWbEdZeFFkamtTSWN1eXZQQlY3Nm5yUHlcL29KaGk0dnpnak1wMFFMdUpVSTZHUVpMQWIraEFGYldNMGl1RThJYU43VTBqUnJZdFwvVGtVKzB4NjZNUDBhVnpaMno4YWpPMlwvT2VIQUw5SjBvR1M4OVhDRFhJMVF4R2s2M1lPR3pWWWNFakI2OHZqNExJZDVYVXpwY3BZXC9cL3hRU1pncmJrU24zM1hqQVh6K3ltdkd5U3Z0b1VaMkU3TE9XNkpFQ1J3NGNFQjUxQnJiTWdpb0xFcjRxdWJnZmVrbEJjbXZGOTZPUWI3YjJOTENXZEV5eFBSY2dHV1RtMXd4R055Uzkza2pxZWpmd1EzYUk2WWRoV0Fuc2E5MG9ORWgwVk9sZWRrVkViUlptbjhhNk5nTGVxUFhnVDBacWtwZ056TkR1UWlVcVhjU2p3MWpuTXRMdnpDdEtwcnJ3THFpK1BCVmpuMitJUUVPVE1zVjdwVW9YV2xYa2JZUGJlZ1pJUlZ1VldBNG1zd0cwd0JYQ2o3VWRiNXU1d2s1VlBhcU1cL0pIakZ4YUZSN2JiNnBidzhyS2tVZllvOHkxMjF5eDZObmdFQ0xTY2pFditvOVdXR2d0d3M1UVk2Qm9pendNbGZoUE9sSUJkYXpZa1NLNzJ1d3NFMGtDNFQ2WEpIaVwvQXFhSmFVdW42U1FtZkZrUjZlWWQzSlpNV3pLMTZxVTRHOW5kdm1RQ3NHVnVES3dzb2Q1Z0VoekkrREFSXC8yU0hkcmo5OXR0SWhvOWlmWmpkZ1J5SEpOT0RuRXhocG1lazRmVHBaSlhzT0hVcUdXTkh2Y0hOSUVzbzhuNWxRdHQxRTFcL1JNVklMcHFcL2daUWFyN1wvdjVZVVwvNlJiWGx1Qm56Nnd5cHNLZFVSYThIZHNIc2lvYSs2UFliRStEOEJkZzZHVzFIV25vS1oxdUlhcVluTGNaS09WVlNTcFF3aWw0MkpkbExsVjIrNUMzWXN2bGJiVFp6R050ZnRRVkpXRkErQXdIT1ZcL0ZIZEo5V1hEV2xlWFIyZ21yRUcwOGZSUEt1c3ZDWnlURDlzTXlOQm5EQWtrcXBUUGlWd2NmN0NMOVlzRk9tVmxQUEVpMExCMVBVdElXZGluN082aENBWmY1T09CK1NpUFg2STNnYkRnNkkyWVhSNjhyQ2E4aGduVHNibWR2TFlHSkhVbnE4Y2NpTzNZclJpNnJjV0FENzZTeDU2WUYwZUs0RGloYVBSM3hjUHVUUEg0TThzYkdJc2xsaFV1TUp2Y2pJeWtaS2VpWlZkQnArTzNXR1pMd3ptRDV0Qml0SkREZWtLKzB5SmJod0FGNDRXakNlNVNTZUdMZzRUM3JFOG1Kd1JlMkIxWmNYZlI3WURXdEtCVjZtRlwvZVwvWU1CdGo5MWdYclRJWlhUZWFDU1dMVW5TM1RFeUxNbE1NbnNVQmNja3o1a0lxbWphTEpucTU2RjZkbklNaEl4dXZMMzZYVml4ZEUwZ0thUU5VZ2pQUTNqU21YeW1VaFI3bFZ4NDlGVWJraHFmeElFTmhmQkJuek1jMDJoaXErbFpURmhmQmlrMnp1bThvY0lrMmxZekpUV0x0QjNwSDVZZUpEVWFVTnBiQXVNSUZXam5QTWxOXC9aMDJXa1lQdXgzQldkamhDN0JNc1BjeEI2MisweDduclhRWXZTZFZRTmY3ZGlIZVYwcjVGakczN1VQblNkd0FuQlIwUXdFc3pRZ2VBWk1cL3FLbDRhajVsY0xhVU9GdWFwNndOQ05lR29xbCtOR3BsR2FoXC80WFQ3Y0pSZ3ljQkpwNE40MDBZNmpnN3pBZFJ2Vmh6TFpua1J4ZUdjVGxiSGhueFdGdTc4T3puXC82d1pqZEFTcXBtcmFIVjFsVlJEM2tzeHU0RUEwa1dMT3JWTjBXaE1uMW9tOWRybXlHVHB4V0JyWkVRcDlMbHE0Rnh2VWsxbVl6QkF2MnV2aU5WdWszWjI1ZEpZUkpRSklOV3pEcERXVjRJcElSVDVQMG8wbHdVRW1ocG9PeTEzZXVtMFREQm5XRXlXTDE4QmRkOTZEV2ZQR2tmXC9zNUtEd3BcL0hKSng4bzFhemplTUFLWmU4N1B5ZXRCUDNDdkhUTzlna1wvd2FZWHpZSFhUS3Vub3NsejBhalc1Z1FUT3lhTWZlSlFiZ0ZZOU9nRjYzckpLbmNRRkZITnFkajI4enA4OWRVNmZEWlwvT1h1RVhSajN4bUQrdklMSmpsUWtWVXhDNTQ2dkVHRHBmdENlQlhWZXFqSVhBY3hlU2NiNTZXUmQ4cm1IUzlrb0hzOEpnRnVMWVwvUVRONWdYclFRdjhOekVTTTZ5XC9HSGJhdFd4SUFYeFRwMjY0dG5uMnVPRnJzUFJzTkY5Nk5xOUErcmM4eERWdFYzUmJITVNIQmZ4cllNYkszd2xXRHFlVFl5RGpVVlBvZVwvY1NEallHRCtpeFJrWXp1YWFRV2l5dUJlbUVDOVI1QTV3aUlVeU9tZnVERXlaT2hGclZtM0FmN2V1UmVcL2VnOUdxVlhOMDd6S1k1amtEY3orZWp2SzNsR1JmY0JydXZmdlJBQ3Npb0pxRG1KNlgxUXBmZ01VZTZ6aCt1TzBvS3hKckplUFEramhNZnptZHpXZHNwZ3ZyTUVsYzRZQXE5dWxvWjlqQ29aUG5LVWozSVBsSWFrNEhLU3QrRDUrN1NNZkQ3YUhEd1lxS2p5VVhvNWxqdmFsK1pReXBVc0Y4dlJvcnJNdFByclRRVGRPVTFIcjVyRCtWOEpLaWhEY3owSlZJWmlXbDNtREtadnVIcUhCcEZISFFNZVBuTVwvWU16dXBRVGVXcUFIWCtvM3F1cHBHVzVUaDNuSk5zT1wvSUZZYkFtWTlpcVFreFJHdEN2MXZjd2VzcVJZSnBMaWcyU085Nnhld1dYMFlncUZlK0ZNMXVIRld0bm9HU3A0Z3FjemgwSDRkWEIzWkFRSDRleUplXC9qbXV1eDk5QnF4clU2VkV5Nm05Nm1GV1BlNklWbXpSdWplSkhxekc0bDRKdlwvTE1adHR6YmllekdNTXB6RnBcL05ub1dxMWNzclduejJkUnVaSGYzdzRleUxLSmQ2bkhPeTlCOWRoNkpEeDZEdWdHd012QWRxUFkwZlBvdlk5VGJscFlnSWgyTldFVm52dm9Pc1JCRm5wRlRJNnJJa0gwTytEWWxneXpZVnRzK3h3c2F0QmJiM3dsZUNnV3Bid0pnMjdENnhubXRITVJSNkIzYnVPWWQ3OENhaGJweG5ITDJUQmtXWEZ4NSs5Z1VxVnk3Rnd3Q2RmODRaMzdGbWhub25VdWxWbmZMOWxId0Vtd2U2UmVqajA2Mm0yanJiQnRwODJvRXpKbXVRdFdURm5cL2hpeUxXXC9EODkzN3NlTlwvTnpwMWVaTE8yQUxNbVRjVmhlTnF3UnBoeEw2RFgyRUlSeVAyN1wvY1NYbmw1RlBiczIwb3o4QkZlSFwva1dwazlad01cL2lnZ3BoUUNGdzliSmdsd0pZeCs2TWJuTVRFRnZBaWRlYUhvSXhLNDdKRUcxRGhEWEEwbVV2ZlVPZHVyWWxFXC9KcHZESmdPSm1RXC9WR3hRbTM4c3ZkclNwOFhydzBlalk5bnI4Q0NMXC82TnlsWEtvM1N4T3Bnd2lZNVU0enNZQ2kxRTgyWVBvVktGQmhnM2NRQmF0T1J6N2RuTlwvOFFUeitDOUQ5NUM1VnNhVUxyTitHWFwvYXRXMzlOelRyNm91UkprT1hcL1dPSXBqMzZic29VYWlPSXZFZFBMb0pnMThieGNcL3ZpVkVqSitIVTZTT1lNR0U4aGcyWmdKbnZMMUdrdmVzRmNEWit3NWoxNVRrdGFCdU9yeXBDVXlQcHpNRElxSENXWU9tUWs2ckp6bCsrWVlZcWpTcVhRN1wvdEpsU3JVcDhQcTg1aXFGT1d6ZHl6c09Dek5TaWVHTWNtN2lTVVNheU5YZnZXSWlPZERWdXNcLzlxWXVpeFJwQ3JlbkR3Y0xWbzBSY2RuWHNUYlU4YXFWdE1LcGVzU1VBdTF3eG9jTzNZY2RXdTFvZ1JhdUVBTzNGT3JPbWJPR1l2RXdqVnAzXC9VNGN2d0hTdTV3REJyU2d3YkFSb2tGeVhzN0dGTjNKSEdlRHhQd1hwdGVwbk1sV0QySmp2c3F1c28rREJyM0lMbzBXUU5yWmtIdHdSNEI4bUNZU3JDbTRpUlpVYkNJSFY5OXZSUnRcL3RXUkRwR0Ywdmt5WWxqQVAzcmttQnB3VnFac01heForUTFpK2J0Yk9jUzdhNWZlZUdmS2FMUnEzbFYxOThcLzQ2RTFzM2JvRHZ4MFwvU1J2OEFFcVh1QXRmYjFxRUFnWHRTQ3JiR0M0K1Y2ZjY3ZVh3MGNlanVTaG1uUGp0REFvWEtZZ2lDVld3NThBM3FoSGM2OHNncGRhT2l1WHJZUHZPTlZqMCtUb002RGVTRzRHOFZEWm5YOHNqK09SVWlmVEZvZlQ0c1wvSDh0QktZTm5RRkhQdXJzOUlrRHhhbFl4aG9mdzFQZ0pYM3pGSUJIWms3YTFSQ1pGUWsxcVwvOW5xbEZEeElLUnhDUXlvcEhwZU9JaHNOSGZzRlAyNWlQYlZDYkZCVXJ1XC9UVCtXZzdZTVdTSDVSNlQ2cGNBaVdLbDhEaFEwZFZDWEhGMHMwa0FmalVxS1VWU3pkd3BCS2Y1OEJKOE5GNWZPUlF0K09rQUIrK1dMS0t3MWxPd0d6TlF2c25udUJqQUR4VXd3dVFsZWxGb3dkcWNGcEFLcmIrZDdmeTNLOTlcL1Zpa1ZsS1YwdVpoazJRQUFBVWNTVVJCVklkbGhNT3dCMFBmYjRXQkhaWnhDRnc4Q3hEQmNFNExJOE1QWUpWbzBNWUdha1VmQVpJZDd1cUpLazUwN1BnMFZxNWFodCtPbmFFTjVsUE5kR2ZoNWJCUTRXQ1ZLbDJDWjdPVVJ2cktqbTM3RVpzM2dvXC9na1lkelJITCtaQnlkSlQxMlwvbnlBbWtBZVlTXC9lY3lyYXR1bUE3VDl0eDdZZmR4RjRQVjdzK1FUZUdQY3VNME9ScU5cL3dibzZFeU1ER2padFFNTDRrSW13bVpHUW04MjkySFB6MW1GTGxKaU9MNzlmd1VNOURabElESExDaTU4U2c2R0o3a095Z09UcDFDNmNJdWRVWUthbWNCY253NFFldzJuYVwvajJmSWFYQTJKR1BMZDZzNURxa0pDaVRFb0dYTEZ2ajM1SG1ZTVdzQ1ZxNWNqWTBiZnVBdzBSM1l1WHNqeXBlNVc2bm5EZDhzUSt2SG5zS0pvMDY4K1wvNWdlc2s5TVhYcXUralZjeUNPSFU2bjhcL1k0XC9qM2xUYXhldXhpdEgzMGEzMnhheWRDclBQYnUzWW1PVFwvZkIyclZyZUU1cjdOOTdVbm5YTldyZWlqV3J2K0VZNGdLS3ZYWGt5QkZ1cm10UGxOY2ttSHhvc3dzUHRhbUMrYk9cL1poM1l4Z1NPbFlQRFUwa0dpSmJnS1V3bFdMc3N6U09WaXd3UTAwdVVzVE1iMVJ0ZG54M0tHTzhNdHYrOEdwWG9CZWNyb0ZjOVIxVXExdWM0UWozajVaWDBtdTlYVFdVSkJXMllOMitPeWxTOTk5RXdzalptY3JUaFJOeGF1VFpUZXdXWW4rWmpcL0t3WitIblhlc2JMTlNpcDYxRHJyaGJZXC9QMHlWSzk2cjlJaWk1Wk9RN3MyejlOVVZFZUxWdlV4ZWVKSEhQMndUNWtJbVgrWlF3dTZSbElzbFNRMVVsZ3RUU29zTmh2Y2ZIeWJnUnBKaHBWNjVmbU1mUGFBbEJQRFUwVmZZcUdrT3VUeUg4S2lSWitnZWRPdWJBM05vdVAxS1dkZHJjUnp6M1hFanpcLytpSmQ2OU1XcEV3N2xCQ1dWcjRWUFBwK01TR3NoeENYWVVibGlMY2EwNzZMSENcLzJ3ZFBrbnFGV2pOVFZZTlBFN3pYQnBBcnAzN2EwR3RtemJcL2gxRHJVcnNmUGdaNWNyVVF0djJUZW5NSldQNWtzMTB0TEpvMjEzWXNcLytcL0tGZTZKbDhmeVUwb3plS2hQNnpxR3UyQjh6NG1QRlgwUlN2QkhjbUgzZ3djOUFJMmI5bU1idDA3b2htVEZhTkdqRUh2UGkrek96OEtuMzAyR1wvWHJ0Y0MzUHl4RHRjb04wUGJKcHZoNDFob1VLbXJIK1BFVGNUYjVHTnREKzZKbnI4NDRjaWdabjMyNkdwMnBmaDJ1TkRWdWFPNmNlUmc5WmhEZWVXY2FPbkxJK0l6M0Y3RU45WGFjWVZicjU1OE80cUZtOTJQVE54dHhmNU82Nk5LcHY3S0I2bkZ6T2EwdjF3TytLMzltcmdCWTJCYmk5UnZvXC9aWXVteCt6Wms5RlZZSm9NZk5KWkRLTmxVbDFVY2s2c1V0OFlwaWY0K3oxZkZxWUptWGFkRHNEa3hkU05aSVpsRDYyM2VtbFZWUTlwa1lhejRUU0lUVms0V3FSSkUrSFRkS2lmczZvVWxOM3BKZ3VcL2JZYyttR2dJOGFFYnlBZnJiSWJWMTdsNjNoR3JnQllaZGNES1VCSmZzaUNwNmFsSWlwU25JbkF5S09jTkdIQWhpc25Rd2hYakprSXZsc2VFRTN3WmRxT0dseXFSaVVGUTRwZ3kwcUF4aU92MVBnOUN0aWNRNmJWNWd3RkRcLzgybDF4amcxV3BVSTBDMW1KZkdYSGtjUXVKV1JaWmUwcVlwaXJsMzNLdTFtZ0drdElVSUZTbGZuNGZQYlkzWHU0XC9VczJQVXU4WEhMYVM4OWc0eGNEVE5rYk8zNE5kaDBLY0Y4ZEt1aExsczBYNk5ja1A1eU4zU1BCZlhVR0M5ZWlcL0hzVHdVYjNvT1R1WWthckhvV2wyOVJqN2NBZm9MOTk2K09haVwvK3F0bmY5NnNiZTNzaHo0XC9mZlwvSlY5YTVsQUdHdEJDZk1qRjMzczExKzdkYmc0SlZ1c1pzTGRLcld1cDBKdmh1QWtBRG1PcXpUWFlZVGNQd0RrekxZTzl3Ym5EQ1wvNnJlK0FtQVBpdkxsSHVmWDJ1NFdUbDNpVyt2bGV1QXI2YnhZdSt2a3Q5ZlQ3OUg0Q3Z6N3BmczBcLzlCK0JydHRUWFwvb01FWEIrSHdmMFA4N3ZQUUhUb09vVUFBQUFBU1VWT1JLNUNZSUk9IiwicHJlbWl1bSI6ImYiLCJha3RpZiI6InQiLCJhZGFwdGVyIjoiZGlyZWN0IiwiYWxwaGFfMl9jb2RlIjoiU1AiLCJoZWFkZXJfaXB0diI6IntcIlJlZmVyZXJcIjpcIm5vbmVcIixcIk9yaWdpblwiOlwibm9uZVwiLFwiVXNlci1BZ2VudFwiOlwiTW96aWxsYVwvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQ7IHJ2OjEyMS4wKSBHZWNrb1wvMjAxMDAxMDEgRmlyZWZveFwvMTIxLjBcIn0iLCJwaW5uZWQiOiJ0IiwidXJsX2xpY2Vuc2UiOiJkMzFlMGVlNjBlMDM0ZTIyOGU3ZjIxOTY1MGMwZDZlMjpjNTBjMjQ3ZDVhMzRjMWZiZDU2NWFkMzE4ODYyODdjYiIsIm5hbWVzcGFjZSI6IkNIMSBBRkMgQXNpYW4gQ3VwIDIwMjQiLCJoZWFkZXJfbGljZW5zZSI6IntcIngtZGF0YVwiOlwibm9uZVwifSIsInBsYXRmb3JtIjoiW3dlYl0ifQ==';
var _idIptv = "59";
var _idEvent = '0';
var _isReady			= false;

function xorDecrypt(base64Data, key) {
    const rawData = atob(base64Data);
    let output = "";

    for (let i = 0; i < rawData.length; i++) {
        output += String.fromCharCode(
            rawData.charCodeAt(i) ^ key.charCodeAt(i % key.length)
        );
    }

    return output;
}

window.addEventListener("message", (event) => {
      // cek asal pesan
  //if (event.origin !== "https://domainB.com") return;

  var dataJsonEvent = JSON.parse(event.data);
  if(dataJsonEvent.type == '_isReady'){
	  _isReady = true;
  }
  //console.log('dataJsonEvent', dataJsonEvent);
});
var _intervalPlay = null;
var _simmerTv = "<div class=\"card-box\">";
_simmerTv += "<div class=\"wrapper-box\">";
_simmerTv += "  <div class=\"pic-box animate\"></div>";
_simmerTv += "  <div class=\"right-box\">";
_simmerTv += " <div class=\"simmer-text br animate w150\"></div>";
_simmerTv += " <div class=\"simmer-text br animate w70\"></div>";
_simmerTv += "  </div>";
_simmerTv += "</div>";
_simmerTv += "</div>";
var _simmerEvent = "<div class=\"card-box\">";
_simmerEvent += "<div class=\"simmer-text br animate w150\"></div>";
_simmerEvent += "<div class=\"simmer-text-mini br animate w170\"></div>";
_simmerEvent += "<div class=\"wrapper-box\">";
_simmerEvent += "  <div class=\"w200\">";
_simmerEvent += " <div class=\"simmer-text br animate w60\"></div>";
_simmerEvent += " <div class=\"simmer-text br animate w60\"></div>";
_simmerEvent += "  </div>";
_simmerEvent += "  <div class=\"right-box\" style=\"text-align: right\">";
_simmerEvent += " <div class=\"simmer-text br animate w30\"></div>";
_simmerEvent += " <div class=\"simmer-text br animate w50\"></div>";
_simmerEvent += "  </div>";
_simmerEvent += '</div>';
_simmerEvent += "</div>";
var _loopCounter = 0x0;
var _vastMinCounter = 0x3c;
var _vastCounter = 0x0;
var _playerInstance = jwplayer("player");
$("#sports_tv_container").scroll(function (_0x3d9ea0) {
  var _0x2ca1ae = $('#sports_tv_container').scrollTop();
  setCookie("scroll_position", _0x2ca1ae, 0x1);
});
$("#live_tv_container").scroll(function (_0x23c16d) {
  var _0x488552 = $("#live_tv_container").scrollTop();
  setCookie("entertainment_scroll_position", _0x488552, 0x1);
});
$("#events_container").scroll(function (_0x569e18) {
  var _0x4bfea4 = $("#events_container").scrollTop();
  setCookie('event_scroll_position', _0x4bfea4, 0x1);
});
var _bodyWidth = window.innerWidth;
var _bodyHeight = window.innerHeight;
$(window).resize(function () {
  _onResize(true);
});

function sendPostMessage(_0x4eb976, _0x4a7105) {		
	var _0x126c9e = document.getElementById(_0x4eb976).contentWindow;  
	_0x126c9e.postMessage(btoa(_0x4a7105), "https://veros-player.blogspot.com/");
	console.log('Sedang Mengirim pesan', 'https://veros-player.blogspot.com/');
}


var _vastScheduler = function () {
  var _0x372789 = [];
  return _0x372789;
  if (_vastCounter >= _vastMinCounter) {
    _vastCounter = 0x0;
    _vastMinCounter = getRandomInt(0x78, 0x12c);
    _0x372789 = [{
      'offset': "pre",
      'tag': "https://majorcharacter.com/dhmmFIz/d.G/N/vQZFGnUo/Zelmg9SuaZzUJlikRPDTOUEw/OPDgA/4_NOTZUZt/NPTSAm4LMcD/gc1/N/gi"
    }, {
      'offset': 'pause',
      'tag': "https://s.magsrv.com/splash.php?idzone=5163312"
    }];
  }
  return _0x372789;
};
var _isApk = false;
var _onResize = function (_0x3d0755) {
  if (_isIframe) {
    return;
  }
  let _0x792ad8 = 'browser';
  if (navigator.standalone || window.matchMedia("(display-mode: standalone)").matches) {
    _0x792ad8 = "standalone";
  }
  if (_0x792ad8 == "standalone" || _standalone == "android" || _standalone == 'ok') {
    $("#download_apk").hide();
    $("#install").hide();
    $('#partner').hide();
    $("#donasi").show();
  } else {
    $('#download_apk').show();
    $("#partner").show();
    $('#donasi').hide();
  }
  _bodyWidth = window.innerWidth;
  _bodyHeight = window.innerHeight;
  var _0x2555fa = document.getElementById("player_wrapper").clientWidth;
  var _0x1b082c = document.getElementById("player_wrapper").clientHeight;
  _initPlayer(_0x2555fa, _0x1b082c, _0x3d0755);
  var _0x31c5c9 = document.getElementById("channels").clientHeight;
  var _0x265851 = document.getElementById("wrapper_panel_header").clientHeight;
  var _0x38034a = document.getElementById("footer_container").clientHeight;
  var _0x3b4198 = parseInt(_0x31c5c9 - (_0x265851 + _0x38034a));
  $('#channel_container').attr("style", "height:" + (_0x3b4198 - 0x37) + "px!important");
  if (screen.orientation.type == "landscape-primary") {
    $("#banner").attr('style', '');
  } else {
    var _0xd9984c = document.getElementById("banner").clientWidth;
    var _0x23fada = parseInt((_0xd9984c - 0x140) / 0x2);
    if (_get("standalone") == "android" || _isApk) {
      _isApk = true;
      $("#banner").attr("style", 'padding-left:' + _0x23fada + "px;height:0px;background:#96A496");
    } else {
      $('#banner').attr("style", "padding-left:" + _0x23fada + "px;height:50px;background:#96A496");
    }
  }
  setTimeout(function () {
    _0x31c5c9 = document.getElementById("channels").clientHeight;
    _0x265851 = document.getElementById('wrapper_panel_header').clientHeight;
    _0x38034a = document.getElementById('footer_container').clientHeight;
    _0x3b4198 = parseInt(_0x31c5c9 - (_0x265851 + _0x38034a));
    $("#channel_container").attr("style", "height:" + (_0x3b4198 - 0x5) + "px!important");
  }, 0x2710);
};
var _rebuildPlayer = function (_0x22bedd, _0x18a080, _0x49de1a) {
  if (_isIframe) {
    return;
  }
  $("#embed_youtube").hide();
  $("#embed_youtube").html('');
  $("#embed_shaka").hide();
  //$("#embed_shaka").html('<iframe src="https://veros-player.blogspot.com?type=dash-clearkey&v=WVVoU01HTklUVFpNZVRsNFkwTXhkMkpIVWpCTVYzaHdaRzFWZEZsdVFuSk1XRlpxV2tNeGQyTnRPV3RNYlVaeVdWY3hhR0ZZY0d4YVF6VjFXbGhSZGxsdVFuSk1XRkl5VERKT2IwMXFhelZNTWxKc1dtMUdNVnBIZURCTU0wNXdZbTFTYkdWRVNYVmlXRUpyT2s1VVVUVlpWMGt6V1RKUmVrNVhSVEpPUjBwcFRtMUthVTVFWXpWYVYwNXNXVmRSZDA1SFVUSlBWMUU5T2s5RVNUVk9lbXMxV2xkUk1VMTZVbXROVkVadFdUSkdhMXBYU1RCWmFrVTFUV3BSTWs0eVZYZE9WRUU5" id="shaka_player_iframe" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
  var _0x367781 = JSON.parse(atob(_0x22bedd));
  window.history.pushState({
    'pageTitle': _0x367781.nama_channel + " - Duktek TV"
  }, '', _0x18a080);
  if (_0x49de1a != null && typeof _0x49de1a != "undefined") {
    _0x49de1a.preventDefault();
  }
  if (typeof _0x367781.nama_event == "undefined") {
    document.title = "Live Streaming " + _0x367781.nama_channel;
  } else {
    document.title = _0x367781.player_1 + " VS " + _0x367781.player_2 + " - Live Streaming " + _0x367781.nama_event;
  }
  /*
  sementara
  if (window.top != window.self) {
    var _0x58eb24 = {
      'title': '',
      'path': '',
      'type': "changeUrl"
    };
    var _0x2d9588 = _0x18a080.replace("https://" + _initHostname, '');
    _0x58eb24.title = document.title;
    _0x58eb24.path = _0x2d9588;
    var _0x3cf1d9 = new URL(document.referrer);
    window.parent.postMessage(JSON.stringify(_0x58eb24), "https://" + _0x3cf1d9.hostname);
  }*/
  if (_type == "events") {
    var _0x45902c = new Date(_0x367781.jadwal_event).getTime();
    var _0x2565ac = new Date(_0x367781.jadwal_stop).getTime();
    var _0x1ae3ae = new Date().getTime();
    var _0xde1f3f = _0x45902c - _0x1ae3ae;
    var _0x9ee8fd = _0x2565ac - _0x1ae3ae;
    if (_0xde1f3f > 0x0) {
      if (_playerInstance != null) {
        _playerInstance.remove();
      }
      jwplayer("player").remove();
      _playerInstance = null;
      var _0xb61135 = "https://raw.githubusercontent.com/nafkid2023/web/main/img/fifa2026.webp";
      if (_0x367781.nama_event.toLowerCase() == "caf africa cup of nations") {
        _0xb61135 = 'https://www.cafonline.com/media/gdgf5rol/agxswzwn76qqeum51its.png';
      } else {
        if (_0x367781.nama_event.toLowerCase() == "afc asian cup") {
          _0xb61135 = 'https://production.togglestatic.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%277196980%27&EntityType=%27LinearSchedule%27&EntityId=%27ec37b5b7-1bec-46ce-9367-d0b37c5029ac%27&Width=1080&Height=608&ResizeAction=%27fill%27&HorizontalAlignment=%27center%27&VerticalAlignment=%27top%27';
        } else {
          if (_0x367781.nama_event.toLowerCase() == "english premier league") {
            _0xb61135 = "https://cdnuploads.aa.com.tr/uploads/Contents/2021/08/13/thumbs_b_c_d391bd815724afbe9b49e0879b86ff38.jpg?v=210138";
          } else if (_0x367781.nama_event.toLowerCase() == "spanish la liga") {
            _0xb61135 = "https://www.pointspreads.com/wp-content/uploads/2023/07/2024-la-liga-betting-predictions.jpg";
          }
        }
      }
      $("#player_wrapper").attr("style", "background-image:linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%), url(" + _0xb61135 + ");background-repeat:no-repeat;background-size:cover;background-position:center center;");
      var _0x4d919c = "<div style=\"margin-bottom:8px;font-size:30px;\">" + _countDownPlay(_0x367781.jadwal_event) + "</div><div>" + _0x367781.player_1 + "&nbsp;<img style=\"max-width:20px!important;border-radius:2px!important\" alt=\"" + _0x367781.player_1 + "\" src=\"" + _0x367781.logo_1 + "\" height=\"15px\" />&nbsp;" + " vs " + "&nbsp;<img style=\"max-width:20px!important;border-radius:2px!important\" alt=\"" + _0x367781.player_2 + "\" src=\"" + _0x367781.logo_2 + "\" height=\"15px\" />&nbsp;" + _0x367781.player_2 + "</div><div style=\"font-size:15px!important;margin-top:8px;\">Kickoff " + _date(_0x367781.jadwal_event) + " " + _time(_0x367781.jadwal_event) + "</div>";
      $("#timer").html(_0x4d919c);
      $("#timer").show();
      _intervalPlay = setInterval(function () {
        var _0x40f5a4 = new Date(_0x367781.jadwal_event).getTime();
        var _0x58a96d = new Date().getTime();
        var _0x283715 = _0x40f5a4 - _0x58a96d;
        if (_0x283715 <= 0x0) {
          $('.list_event').each(function (_0x2880cc) {
            var _0x5ceec1 = $(this).attr("data-id");
            if (_0x367781.id_event == _0x5ceec1) {
              $(this).trigger('click');
              _reformatTime();
              clearInterval(_intervalPlay);
            }
          });
        }
        _0x4d919c = "<div style=\"margin-bottom:8px;font-size:30px;\">" + _countDownPlay(_0x367781.jadwal_event) + "</div><div>" + _0x367781.player_1 + "&nbsp;<img style=\"max-width:20px!important;border-radius:2px!important\" alt=\"" + _0x367781.player_1 + "\" src=\"" + _0x367781.logo_1 + "\" height=\"15px\" />&nbsp;" + " vs " + "&nbsp;<img style=\"max-width:20px!important;border-radius:2px!important\" alt=\"" + _0x367781.player_2 + "\" src=\"" + _0x367781.logo_2 + "\" height=\"15px\" />&nbsp;" + _0x367781.player_2 + "</div><div style=\"font-size:15px!important;margin-top:8px;\">Kickoff " + _date(_0x367781.jadwal_event) + " " + _time(_0x367781.jadwal_event) + "</div>";
        $("#timer").html(_0x4d919c);
      }, 0x1f4);
      return false;
    } else {
      if (_0x9ee8fd <= 0x0) {
        if (_playerInstance != null) {
          _playerInstance.remove();
        }
        jwplayer("player").remove();
        _playerInstance = null;
        var _0xb61135 = "https://raw.githubusercontent.com/nafkid2023/web/main/img/fifa2026.webp";
        if (_0x367781.nama_event.toLowerCase() == "caf africa cup of nations") {
          _0xb61135 = "https://www.cafonline.com/media/gdgf5rol/agxswzwn76qqeum51its.png";
        } else {
          if (_0x367781.nama_event.toLowerCase() == "afc asian cup") {
            _0xb61135 = 'https://production.togglestatic.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%277196980%27&EntityType=%27LinearSchedule%27&EntityId=%27ec37b5b7-1bec-46ce-9367-d0b37c5029ac%27&Width=1080&Height=608&ResizeAction=%27fill%27&HorizontalAlignment=%27center%27&VerticalAlignment=%27top%27';
          } else {
            if (_0x367781.nama_event.toLowerCase() == "english premier league") {
              _0xb61135 = "https://cdnuploads.aa.com.tr/uploads/Contents/2021/08/13/thumbs_b_c_d391bd815724afbe9b49e0879b86ff38.jpg?v=210138";
            } else if (_0x367781.nama_event.toLowerCase() == "spanish la liga") {
              _0xb61135 = "https://www.pointspreads.com/wp-content/uploads/2023/07/2024-la-liga-betting-predictions.jpg";
            }
          }
        }
        $("#player_wrapper").attr("style", "background-image:linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%), url(" + _0xb61135 + ");background-repeat:no-repeat;background-size:cover;background-position:center center;");
        var _0x4d919c = "<div style=\"margin-bottom:8px;font-size:30px;\">The Match has Ended</div><div>" + _0x367781.player_1 + "&nbsp;<img style=\"max-width:20px!important;border-radius:2px!important\" alt=\"" + _0x367781.player_1 + "\" src=\"" + _0x367781.logo_1 + "\" height=\"15px\" />&nbsp;" + " vs " + "&nbsp;<img style=\"max-width:20px!important;border-radius:2px!important\" alt=\"" + _0x367781.player_2 + "\" src=\"" + _0x367781.logo_2 + "\" height=\"15px\" />&nbsp;" + _0x367781.player_2 + "</div><div style=\"font-size:15px!important;margin-top:8px;\">Please watch other matches!</div>";
        $("#timer").html(_0x4d919c);
        $("#timer").show();
        _intervalPlay = setInterval(function () {
          var _0x26935d = new Date(_0x367781.jadwal_event).getTime();
          var _0x3737c7 = new Date().getTime();
          var _0x380717 = _0x26935d - _0x3737c7;
          if (_0x380717 <= 0x0) {
            $(".list_event").each(function (_0x2d9e4e) {
              var _0x198be4 = $(this).attr("data-id");
              if (_0x367781.id_event == _0x198be4) {
                $(this).trigger("click");
                _reformatTime();
                clearInterval(_intervalPlay);
              }
            });
          }
          _0x4d919c = "<div style=\"margin-bottom:8px;font-size:30px;\">The Match has Ended</div><div>" + _0x367781.player_1 + "&nbsp;<img style=\"max-width:20px!important;border-radius:2px!important\" alt=\"" + _0x367781.player_1 + "\" src=\"" + _0x367781.logo_1 + "\" height=\"15px\" />&nbsp;" + " vs " + "&nbsp;<img style=\"max-width:20px!important;border-radius:2px!important\" alt=\"" + _0x367781.player_2 + "\" src=\"" + _0x367781.logo_2 + "\" height=\"15px\" />&nbsp;" + _0x367781.player_2 + "</div><div style=\"font-size:15px!important;margin-top:8px;\">Please watch other matches!</div>";
          $("#timer").html(_0x4d919c);
        }, 0x1f4);
        return false;
      } else if (_intervalPlay != null) {
        clearInterval(_intervalPlay);
      }
    }
  }
  _intervalPlay = null;
  $("#timer").hide();
  var _0x104400 = document.getElementById("player_wrapper").clientWidth;
  var _0x52b417 = document.getElementById('player_wrapper').clientHeight;
  if (_playerInstance != null) {
    _playerInstance.remove();
  }
  jwplayer("player").remove();
  _playerInstance = null;
  _playerInstance = jwplayer("player");
  if (_0x367781.jenis == 'hls') {
    _playerInstance.setup({
      'playlist': [{
        'title': _0x367781.nama_channel,
        'sources': [{
          'default': false,
          'file': _0x367781.url_iptv,
          'label': '0'
        }]
      }],
      'width': _0x104400 + 'px',
      'height': _0x52b417 + 'px',
      'advertising': {
        'client': 'vast',
        'schedule': _vastScheduler()
      },
      'aspectratio': '16:9',
      'primary': "html5",
      'setFullscreen': true,
      'displaytitle': true,
      'autostart': true,
      'image': "https://raw.githubusercontent.com/nafkid2023/web/main/img/fifa2026.webp",
      'logo': {
        'file': "/engine/pwa/img/duktek-sports-black.png",
        'link': 'https://' + _initHostname,
        'position': 'top-right',
        'hide': "false"
      },
      'cast': {},
      'sharing': {
        'sites': ["reddit", 'facebook', 'twitter']
      },
      'skin': {
        'controlbar': {
          'background': 'rgba(0,0,0,0)',
          'icons': "rgba(255,255,255,1)",
          'iconsActive': '#FFFFFF',
          'text': "#FFFFFF"
        },
        'menus': {
          'background': '#333333',
          'text': 'rgba(255,255,255,0.8)',
          'textActive': "#FFFFFF"
        },
        'timeslider': {
          'progress': "#F2F2F2",
          'rail': "rgba(255,255,255,0.3)"
        },
        'tooltips': {
          'background': "#FFFFFF",
          'text': "#000000"
        }
      }
    }).on("ready", function () {
      _isFullScreen = jwplayer().getFullscreen();
    }).on("error", function () {
      $('.jw-error-text').html("An unexpected error occurred, <span class=\"jw-break jw-reset\"></span>always use <strong>Chrome Browser</strong>!!!");
      setTimeout(function () {
        console.log('Replaying');
        _reloadOnError();
      }, 0xbb8);
    });
  } else if (_0x367781.jenis == "dash-clearkey") {
	  
      var _0x4a699a = xorDecrypt(_0x367781.url_license, 'indonesia').split(':');
      if (navigator.onLine) {
        var _shakaPlayerUrl = "https://veros-player.blogspot.com/?type=dash-clearkey&v=" + btoa(btoa(btoa(_0x367781.url_iptv) + ':' + btoa(_0x4a699a[0x0]) + ':' + btoa(_0x4a699a[0x1])));
		if(!_isReady || $('#shaka_player_iframe').length == 0){
			var _embedHtml = "<iframe  id=\"shaka_player_iframe\" width=\"100%\" height=\"100%\" src=\"" + _shakaPlayerUrl + "&amp;controls=0\" title=\"" + _0x367781.nama_channel + " - Duktek TV\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>";
			$("#embed_youtube").html('');
			$("#embed_youtube").hide();
			$("#embed_shaka").html(_embedHtml);
			$("#embed_shaka").show();
			
		} else {
			sendPostMessage('shaka_player_iframe', _shakaPlayerUrl); 
			
		}
		$("#embed_shaka").show();
      } else {
        _playerInstance.setup({
          'playlist': [{
            'title': _0x367781.nama_channel + " - Duktek TV",
            'sources': [{
              'default': false,
              'file': _0x367781.url_iptv,
              'type': "dash",
              'drm': {
                'clearkey': {
                  'keyId': _0x4a699a[0x0],
                  'key': _0x4a699a[0x1]
                }
              },
              'label': '0'
            }]
          }],
          'width': _0x104400 + 'px',
          'height': _0x52b417 + 'px',
          'advertising': {
            'client': "vast",
            'schedule': _vastScheduler()
          },
          'aspectratio': '16:9',
          'primary': 'html5',
          'setFullscreen': true,
          'displaytitle': true,
          'autostart': true,
          'image': "https://raw.githubusercontent.com/nafkid2023/web/main/img/fifa2026.webp",
          'logo': {
            'file': "/engine/pwa/img/duktek-sports-black.png",
            'link': "https://" + _initHostname,
            'position': "top-right",
            'hide': 'false'
          },
          'cast': {},
          'sharing': {
            'sites': ["reddit", "facebook", "twitter"]
          },
          'skin': {
            'controlbar': {
              'background': 'rgba(0,0,0,0)',
              'icons': "rgba(255,255,255,1)",
              'iconsActive': "#FFFFFF",
              'text': '#FFFFFF'
            },
            'menus': {
              'background': "#333333",
              'text': 'rgba(255,255,255,0.8)',
              'textActive': '#FFFFFF'
            },
            'timeslider': {
              'progress': '#F2F2F2',
              'rail': 'rgba(255,255,255,0.3)'
            },
            'tooltips': {
              'background': "#FFFFFF",
              'text': "#000000"
            }
          }
        }).on("ready", function () {
          _isFullScreen = jwplayer().getFullscreen();
        }).on("error", function () {
          $(".jw-error-text").html("An unexpected error occurred, <span class=\"jw-break jw-reset\"></span>always use <strong>Chrome Browser</strong>!!!");
          setTimeout(function () {
            console.log('Replaying');
            _reloadOnError();
          }, 0xbb8);
        });
      }
    } else if (_0x367781.jenis == "dash-clearkey-multi") {
		if(_isIframe){
			$('#embed_youtube').hide();
			$('#embed_youtube').html('');
			$('#embed_shaka').hide();
			$('#embed_shaka').html('');
		}
		var _keyMulti			= xorDecrypt(_0x367781.url_license, 'indonesia').split(',');
		var _keyString			= [];
		for(var _x=0,_len=_keyMulti.length;_x<_len;_x++){
			var _keyStr = _keyMulti[_x].split(':');
			
			_keyString.push(btoa(_keyStr[0])+':'+btoa(_keyStr[1]));
		}
		var _key 				= btoa(_keyString.join(','));
		
		
		var _shakaPlayerUrl		= 'https://veros-player.blogspot.com?type='+_0x367781.jenis+'&v='+btoa(btoa(btoa(_0x367781.url_iptv)+':'+_key));
		//var _shakaPlayerUrl	= '/player.html';
		if(!_isReady || $('#shaka_player_iframe').length == 0){
			var _embedHtml 			= '<iframe id="shaka_player_iframe" width="100%" height="100%" src="'+_shakaPlayerUrl+'" title="'+_jsonData.nama_channel+' - Gorra Sports.tv" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
			$('#embed_youtube').html('');
			$('#embed_youtube').hide();
			$('#embed_shaka').html(_embedHtml);
			$('#embed_shaka').show();
		} else {
			sendPostMessage('shaka_player_iframe', _shakaPlayerUrl); 
		}
		$('#embed_youtube').hide();
		$('#embed_shaka').show();
		_isIframe = false;
    } else if (_0x367781.jenis == "dash-widevine") {
        var _0x26b4ca = _0x367781.header_license;
        var _0xe4d403 = [];
        for (var _0x4a699a in _0x26b4ca) {
          console.log(_0x4a699a, _0x26b4ca[_0x4a699a]);
          _0xe4d403.push({
            'name': _0x4a699a,
            'value': _0x26b4ca[_0x4a699a]
          });
        }
        var _0x4a699a = xorDecrypt(_0x367781.url_license, 'indonesia').split(':');
        _playerInstance.setup({
          'playlist': [{
            'title': _0x367781.nama_channel + " - Duktek TV",
            'sources': [{
              'default': false,
              'file': _0x367781.url_iptv,
              'type': "dash",
              'drm': {
                'widevine': {
                  'url': xorDecrypt(_0x367781.url_license, 'indonesia'),
                  'headers': _0xe4d403
                }
              },
              'label': '0'
            }]
          }],
          'width': _0x104400 + 'px',
          'height': _0x52b417 + 'px',
          'advertising': {
            'client': "vast",
            'schedule': _vastScheduler()
          },
          'aspectratio': "16:9",
          'primary': "html5",
          'setFullscreen': true,
          'displaytitle': true,
          'autostart': true,
          'image': "https://raw.githubusercontent.com/nafkid2023/web/main/img/fifa2026.webp",
          'logo': {
            'file': "/engine/pwa/img/duktek-sports-black.png",
            'link': 'https://' + _initHostname,
            'position': "top-right",
            'hide': "false"
          },
          'cast': {},
          'sharing': {
            'sites': ["reddit", "facebook", 'twitter']
          },
          'skin': {
            'controlbar': {
              'background': "rgba(0,0,0,0)",
              'icons': 'rgba(255,255,255,1)',
              'iconsActive': "#FFFFFF",
              'text': "#FFFFFF"
            },
            'menus': {
              'background': "#333333",
              'text': "rgba(255,255,255,0.8)",
              'textActive': "#FFFFFF"
            },
            'timeslider': {
              'progress': "#F2F2F2",
              'rail': "rgba(255,255,255,0.3)"
            },
            'tooltips': {
              'background': "#FFFFFF",
              'text': '#000000'
            }
          }
        }).on("ready", function () {
          _isFullScreen = jwplayer().getFullscreen();
        }).on("error", function () {
          $(".jw-error-text").html("An unexpected error occurred, <span class=\"jw-break jw-reset\"></span>always use <strong>Chrome Browser</strong>!!!");
          setTimeout(function () {
            console.log("Replaying");
            _reloadOnError();
          }, 0xbb8);
        });
      }
};
var _countDownPlay = function (_0x490549) {
  var _0x567c68 = new Date(_0x490549).getTime();
  var _0x13afc5 = new Date().getTime();
  var _0x25f07d = _0x567c68 - _0x13afc5;
  var _0x402c1c = Math.floor(_0x25f07d / 86400000);
  var _0x3db1f9 = Math.floor(_0x25f07d % 86400000 / 3600000);
  var _0x4813e2 = Math.floor(_0x25f07d % 3600000 / 60000);
  var _0x3f59c8 = Math.floor(_0x25f07d % 60000 / 0x3e8);
  if (_0x402c1c > 0x0) {
    var _0x4e1ff2 = "<div style=\"background:url(https://statics.1mv.xyz/img/player/icon_none@2x.png); background-repeat:no-repeat;background-size:80px 80px; background-position:center center;height:80px;margin-bottom:20px\">&nbsp;</div><span style=\"width:65px;display:inline-block;text-align:center;\">" + _0x402c1c.toString().padStart(0x2, '0') + "d</span>&nbsp;:&nbsp;<span style=\"width:65px;display:inline-block;text-align:center;\">" + _0x3db1f9.toString().padStart(0x2, '0') + "h</span>&nbsp;:&nbsp;<span style=\"width:65px;display:inline-block;text-align:center;\">" + _0x4813e2.toString().padStart(0x2, '0') + "m</span>&nbsp;:&nbsp;<span style=\"width:65px;display:inline-block;text-align:center;\">" + _0x3f59c8.toString().padStart(0x2, '0') + "s</span>";
  } else {
    var _0x4e1ff2 = "<div style=\"background:url(https://statics.1mv.xyz/img/player/icon_none@2x.png); background-repeat:no-repeat;background-size:80px 80px; background-position:center center;height:80px;margin-bottom:20px\">&nbsp;</div><span style=\"width:65px;display:inline-block;text-align:center;\">" + _0x3db1f9.toString().padStart(0x2, '0') + "h</span>&nbsp;:&nbsp;<span style=\"width:65px;display:inline-block;text-align:center;\">" + _0x4813e2.toString().padStart(0x2, '0') + "m</span>&nbsp;:&nbsp;<span style=\"width:65px;display:inline-block;text-align:center;\">" + _0x3f59c8.toString().padStart(0x2, '0') + "s</span>";
  }
  return _0x4e1ff2;
};
var _initPlayer = function (_0x1389a5, _0x4d7856, _0x2ed0aa) {
  if (_isIframe) {
    return;
  }
  if (_type == "events") {
    if (_intervalPlay != null) {
      clearInterval(_intervalPlay);
    }
    var _0x1f411e = JSON.parse(atob(_currData));
    var _0x33a07b = new Date(_0x1f411e.jadwal_event).getTime();
    var _0x3256cf = new Date(_0x1f411e.jadwal_stop).getTime();
    var _0x74bb10 = new Date().getTime();
    var _0x200e4c = _0x33a07b - _0x74bb10;
    var _0x4b676e = _0x3256cf - _0x74bb10;
    if (_0x200e4c > 0x0) {
      $("#timer").show();
      if (_0x1f411e.nama_event.toLowerCase() == "caf africa cup of nations") {
        $("#player_wrapper").attr("style", "background-image:linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%), url(https://www.cafonline.com/media/gdgf5rol/agxswzwn76qqeum51its.png);background-repeat:no-repeat;background-size:cover;background-position:center center;");
      } else if (_0x1f411e.nama_event.toLowerCase() == "afc asian cup") {
        $("#player_wrapper").attr("style", "background-image:linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%), url(https://production.togglestatic.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%277196980%27&EntityType=%27LinearSchedule%27&EntityId=%27ec37b5b7-1bec-46ce-9367-d0b37c5029ac%27&Width=1080&Height=608&ResizeAction=%27fill%27&HorizontalAlignment=%27center%27&VerticalAlignment=%27top%27);background-repeat:no-repeat;background-size:cover;background-position:center center;");
      } else {
        $("#player_wrapper").attr("style", "background-image:linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%), url(https://raw.githubusercontent.com/nafkid2023/web/main/img/fifa2026.webp);background-repeat:no-repeat;background-size:cover;background-position:center center;");
      }
      var _0x21dee8 = "<div style=\"margin-bottom:8px;font-size:30px;\">" + _countDownPlay(_0x1f411e.jadwal_event) + '</div><div>' + _0x1f411e.player_1 + "&nbsp;<img style=\"max-width:20px!important;border-radius:2px!important\" alt=\"" + _0x1f411e.player_1 + "\" src=\"" + _0x1f411e.logo_1 + "\" height=\"15px\" />&nbsp;" + " vs " + "&nbsp;<img style=\"max-width:20px!important;border-radius:2px!important\" alt=\"" + _0x1f411e.player_2 + "\" src=\"" + _0x1f411e.logo_2 + "\" height=\"15px\" />&nbsp;" + _0x1f411e.player_2 + "</div><div style=\"font-size:15px!important;margin-top:8px;\">Kickoff " + _date(_0x1f411e.jadwal_event) + " " + _time(_0x1f411e.jadwal_event) + '</div>';
      $("#timer").html(_0x21dee8);
      $("#timer").show();
      _intervalPlay = setInterval(function () {
        var _0x1ab0a5 = new Date(_0x1f411e.jadwal_event).getTime();
        var _0xc88231 = new Date().getTime();
        var _0x4c7303 = _0x1ab0a5 - _0xc88231;
        if (_0x4c7303 <= 0x0) {
          clearInterval(_intervalPlay);
          $('.list_event').each(function (_0x36dac9) {
            var _0x4cc0f5 = $(this).attr("data-id");
            if (_0x1f411e.id_event == _0x4cc0f5) {
              $(this).trigger("click");
              _reformatTime();
            }
          });
        }
        _0x21dee8 = "<div style=\"margin-bottom:8px;font-size:30px;\">" + _countDownPlay(_0x1f411e.jadwal_event) + "</div><div>" + _0x1f411e.player_1 + "&nbsp;<img style=\"max-width:20px!important;border-radius:2px!important\" alt=\"" + _0x1f411e.player_1 + "\" src=\"" + _0x1f411e.logo_1 + "\" height=\"15px\" />&nbsp;" + " vs " + "&nbsp;<img style=\"max-width:20px!important;border-radius:2px!important\" alt=\"" + _0x1f411e.player_2 + "\" src=\"" + _0x1f411e.logo_2 + "\" height=\"15px\" />&nbsp;" + _0x1f411e.player_2 + "</div><div style=\"font-size:15px!important;margin-top:8px;\">Kickoff " + _date(_0x1f411e.jadwal_event) + " " + _time(_0x1f411e.jadwal_event) + "</div>";
        $("#timer").html(_0x21dee8);
      }, 0x1f4);
      return;
    } else {
      if (_0x4b676e <= 0x0) {
        $("#timer").show();
        if (_0x1f411e.nama_event.toLowerCase() == "caf africa cup of nations") {
          $("#player_wrapper").attr('style', "background-image:linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%), url(https://www.cafonline.com/media/gdgf5rol/agxswzwn76qqeum51its.png);background-repeat:no-repeat;background-size:cover;background-position:center center;");
        } else if (_0x1f411e.nama_event.toLowerCase() == "afc asian cup") {
          $("#player_wrapper").attr("style", "background-image:linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%), url(https://production.togglestatic.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%277196980%27&EntityType=%27LinearSchedule%27&EntityId=%27ec37b5b7-1bec-46ce-9367-d0b37c5029ac%27&Width=1080&Height=608&ResizeAction=%27fill%27&HorizontalAlignment=%27center%27&VerticalAlignment=%27top%27);background-repeat:no-repeat;background-size:cover;background-position:center center;");
        } else {
          $('#player_wrapper').attr("style", "background-image:linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%), url(https://raw.githubusercontent.com/nafkid2023/web/main/img/fifa2026.webp);background-repeat:no-repeat;background-size:cover;background-position:center center;");
        }
        var _0x21dee8 = "<div style=\"margin-bottom:8px;font-size:30px;\">The Match has Ended</div><div>" + _0x1f411e.player_1 + "&nbsp;<img style=\"max-width:20px!important;border-radius:2px!important\" alt=\"" + _0x1f411e.player_1 + "\" src=\"" + _0x1f411e.logo_1 + "\" height=\"15px\" />&nbsp;" + " vs " + "&nbsp;<img style=\"max-width:20px!important;border-radius:2px!important\" alt=\"" + _0x1f411e.player_2 + "\" src=\"" + _0x1f411e.logo_2 + "\" height=\"15px\" />&nbsp;" + _0x1f411e.player_2 + "</div><div style=\"font-size:15px!important;margin-top:8px;\">Please watch other matches!</div>";
        $("#timer").html(_0x21dee8);
        $("#timer").show();
        _intervalPlay = setInterval(function () {
          var _0x34f3be = new Date(_0x1f411e.jadwal_event).getTime();
          var _0xfbac96 = new Date().getTime();
          var _0x1aefa7 = _0x34f3be - _0xfbac96;
          if (_0x1aefa7 <= 0x0) {
            clearInterval(_intervalPlay);
            $(".list_event").each(function (_0x3a67af) {
              var _0x286aa8 = $(this).attr("data-id");
              if (_0x1f411e.id_event == _0x286aa8) {
                $(this).trigger("click");
                _reformatTime();
              }
            });
          }
          _0x21dee8 = "<div style=\"margin-bottom:8px;font-size:30px;\">The Match has Ended</div><div>" + _0x1f411e.player_1 + "&nbsp;<img style=\"max-width:20px!important;border-radius:2px!important\" alt=\"" + _0x1f411e.player_1 + "\" src=\"" + _0x1f411e.logo_1 + "\" height=\"15px\" />&nbsp;" + " vs " + "&nbsp;<img style=\"max-width:20px!important;border-radius:2px!important\" alt=\"" + _0x1f411e.player_2 + "\" src=\"" + _0x1f411e.logo_2 + "\" height=\"15px\" />&nbsp;" + _0x1f411e.player_2 + "</div><div style=\"font-size:15px!important;margin-top:8px;\">Please watch other matches!</div>";
          $("#timer").html(_0x21dee8);
        }, 0x1f4);
        return;
      }
    }
  } else {
    $("#timer").hide();
  }
  _intervalPlay = null;
  if (_0x2ed0aa) {
    _playerInstance.resize(_0x1389a5, _0x4d7856);
    return;
  } else {
    _playerInstance = jwplayer("player");
    _playerInstance.setup({
      'playlist': [{
        'title': "Duktek Sports - Duktek TV",
        'sources': [{
          'default': false,
          'file': atob("aHR0cHM6Ly9td21wb3MwMy5ha2FtYWl6ZWQubmV0L291dC92MS82NGE1OTQ3N2M1ZDM0YWZiYTc1NGU3NjNiYjEyYWM4MS9tYW5pZmVzdC5tcGQ="),
          'type': "dash",
          'drm': {
            'clearkey': {
              'keyId': "d31e0ee60e034e228e7f219650c0d6e2",
              'key': "c50c247d5a34c1fbd565ad31886287cb"
            }
          },
          'label': '0'
        }]
      }],
      'width': _0x1389a5 + 'px',
      'height': _0x4d7856 + 'px',
      'advertising': {
        'client': "vast",
        'schedule': _vastScheduler()
      },
      'aspectratio': '16:9',
      'primary': 'html5',
      'setFullscreen': true,
      'displaytitle': true,
      'autostart': true,
      'image': 'https://raw.githubusercontent.com/nafkid2023/web/main/img/fifa2026.webp',
      'logo': {
        'file': '/engine/pwa/img/duktek-sports-black.png',
        'link': 'https://' + _initHostname,
        'position': "top-right",
        'hide': 'false'
      },
      'cast': {},
      'sharing': {
        'sites': ["reddit", "facebook", "twitter"]
      },
      'skin': {
        'controlbar': {
          'background': "rgba(0,0,0,0)",
          'icons': "rgba(255,255,255,1)",
          'iconsActive': "#FFFFFF",
          'text': "#FFFFFF"
        },
        'menus': {
          'background': '#333333',
          'text': "rgba(255,255,255,0.8)",
          'textActive': '#FFFFFF'
        },
        'timeslider': {
          'progress': "#F2F2F2",
          'rail': "rgba(255,255,255,0.3)"
        },
        'tooltips': {
          'background': '#FFFFFF',
          'text': '#000000'
        }
      }
    }).on("ready", function () {
      _isFullScreen = jwplayer().getFullscreen();
    }).on("error", function () {
      $(".jw-error-text").html("An unexpected error occurred, <span class=\"jw-break jw-reset\"></span>always use <strong>Chrome Browser</strong>!!!");
      setTimeout(function () {
        console.log("Replaying");
        _reloadOnError();
      }, 0xbb8);
    });
  }
};
function setCookie(_0x4c9bb7, _0xb2d1eb, _0x3aafcb) {
  let _0x1d1da9 = new Date();
  _0x1d1da9.setTime(_0x1d1da9.getTime() + _0x3aafcb * 0x18 * 0x3c * 0x3c * 0x3e8);
  const _0x219565 = "expires=" + _0x1d1da9.toUTCString();
  document.cookie = _0x4c9bb7 + '=' + _0xb2d1eb + "; " + _0x219565 + "; path=/";
}
function getCookie(_0x2b394f) {
  const _0x5b343c = _0x2b394f + '=';
  const _0x53b56e = decodeURIComponent(document.cookie);
  const _0x5e5b64 = _0x53b56e.split("; ");
  var _0x5189c8 = 0x0;
  _0x5e5b64.forEach(_0x3779f8 => {
    if (_0x3779f8.indexOf(_0x5b343c) === 0x0) {
      _0x5189c8 = _0x3779f8.substring(_0x5b343c.length);
    }
  });
  return _0x5189c8;
}
function getRandomInt(_0x41d17f, _0x21747c) {
  _0x41d17f = Math.ceil(_0x41d17f);
  _0x21747c = Math.floor(_0x21747c);
  return Math.floor(Math.random() * (_0x21747c - _0x41d17f + 0x1)) + _0x41d17f;
}
var _reloadOnError = function () {
  var _0x58259f = false;
  $(".list_event").each(function (_0x2bf5a4) {
    if ($(".list_event").eq(_0x2bf5a4).hasClass("active")) {
      $('.list_event').eq(_0x2bf5a4).trigger("click");
      _0x58259f = true;
    }
  });
  if (!_0x58259f) {
    $(".list_channel").each(function (_0x1749b6) {
      if ($('.list_channel').eq(_0x1749b6).hasClass("active")) {
        $(".list_channel").eq(_0x1749b6).trigger("click");
      }
    });
  }
};
var _reloadStreaming = function () {
  if (_isIframe) {
    return;
  }
  return;
  _reloadOnError();
};
var _loopingTime = getRandomInt(0x708, 0xe10);
var _batasAwal = 0x1e;
var _iklanIsCountdown = false;
var _timerIklan = 0x0;
var _timerInterval = setInterval(function () {
  _vastCounter++;
  if (!_iklanIsCountdown) {
    _timerIklan++;
  }
  if (_timerIklan >= _batasAwal) {
    _showDirectLink();
    _timerIklan = 0x0;
    _batasAwal = getRandomInt(0x708, 0xe10);
  }
  _loopCounter++;
  if (_loopCounter >= _loopingTime) {
    _loopCounter = 0x0;
    _loopingTime = getRandomInt(0x258, 0x708);
    _reloadStreaming();
  }
}, 0x3e8);
var _showDirectLink = function () {
  _iklanIsCountdown = true;
  $('#ad_button').show();
  var _0xdf37c0 = 0x5;
  var _0x4fac6b = setInterval(function () {
    $("#ad_button").html("Ad in " + _0xdf37c0);
    $("#ad_button").attr("style", "bottom: 50px; right:0px;display:block;");
    if (_0xdf37c0 <= 0x0) {
      clearInterval(_0x4fac6b);
      _0xdf37c0 = 0x5;
      $("#ad_button").hide();
      $('#overlay').show();
    }
    _0xdf37c0--;
  }, 0x3e8);
};
var _date = function (_0x30700a) {
  const _0x1f98d6 = new Date(_0x30700a);
  const _0x322dd8 = new Date();
  var _0x2b2615 = _0x1f98d6 - _0x322dd8;
  const _0x19f7f3 = ["Jan", 'Feb', "Mar", "Apr", 'May', "Jun", "Jul", "Aug", "Sep", 'Oct', 'Nov', 'Dec'];
  var _0x57f2e2 = _0x1f98d6.getDate().toString().padStart(0x2, '0') + ", " + _0x19f7f3[_0x1f98d6.getMonth()] + " " + _0x1f98d6.getFullYear();
  var _0x2c6412 = _0x322dd8.getDate().toString().padStart(0x2, '0') + ", " + _0x19f7f3[_0x322dd8.getMonth()] + " " + _0x322dd8.getFullYear();
  return _0x2b2615 > 0x0 ? _0x57f2e2 == _0x2c6412 ? "Today" : _0x57f2e2 : "<div style=\"width:auto;padding:4px 8px;font-size:10px;font-weight:bold;background:#CF2325;color:#EAEAEA;border-radius:4px;display:inline-block;\">LIVE</div>";
};
var _time = function (_0x208165) {
  const _0x3cab4b = new Date(_0x208165);
  const _0xc151a7 = new Date();
  var _0x2e1030 = _0x3cab4b - _0xc151a7;
  var _0x4ed701 = _positive(_0x3cab4b.getTimezoneOffset()) / 0x3c;
  var _0x4e9e38 = '';
  if (_0x4ed701 == 0x9) {
    _0x4e9e38 = "WIT";
  } else {
    if (_0x4ed701 == 0x8) {
      _0x4e9e38 = "WITA";
    } else if (_0x4ed701 == 0x7) {
      _0x4e9e38 = "WIB";
    } else if (_0x4ed701 >= 0x0) {
      _0x4e9e38 = 'GMT+' + (_positive(_0x3cab4b.getTimezoneOffset()) / 0x3c).toString().padStart(0x2, '0');
    } else {
      _0x4e9e38 = "GMT" + (_positive(_0x3cab4b.getTimezoneOffset()) / 0x3c).toString().padStart(0x2, '0');
    }
  }
  var _0xeda575 = _0x3cab4b.getHours().toString().padStart(0x2, '0') + ':' + _0x3cab4b.getMinutes().toString().padStart(0x2, '0') + " " + _0x4e9e38;
  return _0x2e1030 > 0x0 ? _0xeda575.trim() : "<span style=\"color:#BF2325;font-weight:500\">" + _0xeda575.trim() + "</span>";
};
var _timeMinute = function () {
  const _0x10acf5 = new Date();
  let _0x4f751e = _0x10acf5.getMinutes().toString();
  let _0x378f9e = _0x10acf5.getHours().toString();
  let _0x5ab528 = _0x10acf5.getDate().toString();
  let _0x16dd4a = _0x10acf5.getMonth().toString();
  let _0x379e85 = _0x10acf5.getYear().toString();
  var _0x254211 = (_positive(_0x10acf5.getTimezoneOffset()) / 0x3c).toString();
  let _0x1d2eeb = _0x254211 + _0x379e85 + _0x16dd4a + _0x5ab528 + _0x378f9e + _0x4f751e;
  let _0x5b1087 = _0x1d2eeb.length - 0x1;
  _0x1d2eeb = _0x1d2eeb.substr(0x0, _0x5b1087);
  return _0x1d2eeb;
};
var _timePure = function (_0x3b4bf1) {
  const _0x2e7644 = new Date(_0x3b4bf1);
  const _0x394bc6 = new Date();
  var _0x541f4b = _0x2e7644 - _0x394bc6;
  var _0x2af942 = _positive(_0x2e7644.getTimezoneOffset()) / 0x3c;
  var _0x4192ec = '';
  if (_0x2af942 == 0x9) {
    _0x4192ec = 'WIT';
  } else {
    if (_0x2af942 == 0x8) {
      _0x4192ec = "WITA";
    } else if (_0x2af942 == 0x7) {
      _0x4192ec = "WIB";
    } else if (_0x2af942 >= 0x0) {
      _0x4192ec = 'GMT+' + (_positive(_0x2e7644.getTimezoneOffset()) / 0x3c).toString().padStart(0x2, '0');
    } else {
      _0x4192ec = "GMT" + (_positive(_0x2e7644.getTimezoneOffset()) / 0x3c).toString().padStart(0x2, '0');
    }
  }
  var _0x384ab3 = _0x2e7644.getHours().toString().padStart(0x2, '0') + ':' + _0x2e7644.getMinutes().toString().padStart(0x2, '0') + " " + _0x4192ec;
  return _0x541f4b > 0x0 ? _0x384ab3.trim() : _0x384ab3.trim();
};
var _positive = function (_0x565219) {
  _0x565219 = _0x565219 * -0x1;
  return _0x565219;
};
var _reformatTime = function () {
  $(".tanggal_event").each(function (_0x5046c0) {
    var _0x234c44 = _date($(this).attr("data-time"));
    var _0x3bec39 = $(this).attr('data-stop');
    var _0x170ba8 = $(this).attr("data-target");
    $(this).html(_0x234c44);
    const _0x4680fc = new Date(_0x3bec39);
    const _0x2f9844 = new Date();
    var _0x5e4844 = _0x4680fc - _0x2f9844;
    if (_0x5e4844 <= 0x0) {
      $(_0x170ba8).fadeOut("slow");
    }
  });
  $(".waktu_event").each(function (_0x209a2d) {
    var _0x50a481 = _time($(this).attr("data-time"));
    $(this).html(_0x50a481);
  });
};
var _slugify = function (_0x49d88b) {
  return String(_0x49d88b).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
};
var _initDuktekSports = function () {
  $(".list_channel").off("click").on("click", function (_0x4f73fe) {
    var _0x13005e = $(this).attr("data-url");
    var _0x25594b = $(this).attr("data-iptv");
    _currData = _0x25594b;
    _loopCounter = 0x0;
    _type = 'livetv';
    _idIptv = $(this).attr('data-id');
    $(".list_channel").removeClass("active");
    $(".list_event").removeClass("active");
    $(this).addClass("active");
    if (_intervalPlay != null) {
      clearInterval(_intervalPlay);
    }
    $(".nama_channel").attr("style", "font-weight:400");
    $(this).find(".nama_channel").attr("style", 'font-weight:500');
    $(".list_event").removeClass("active");
    $(".nama_event").attr("style", 'font-weight:400');
    $(".player_event").attr("style", 'font-weight:400');
    _rebuildPlayer(_0x25594b, _0x13005e, _0x4f73fe);
    $("#banner-kotak").html(atob("PGlmcmFtZSB0aXRsZT0iTWlkZGxlIEJhbm5lciIgYWxsb3d0cmFuc3BhcmVuY3k9InRydWUiIHNjcm9sbGluZz0ibm8iIGZyYW1lYm9yZGVyPSIwIiBmcmFtZXNwYWNpbmc9IjAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiBzcmM9Ij9pZnJhbWU9bGFyZ2UiPjwvaWZyYW1lPg=="));
    _0x4f73fe.preventDefault();
  });
  $(".list_event").off("click").on("click", function (_0xce5596) {
    var _0x344cd3 = $(this).attr("data-url");
    var _0x33e69b = $(this).attr("data-iptv");
    _currData = _0x33e69b;
    var _0x5e2a12 = JSON.parse(atob(_0x33e69b));
    _idIptv = _0x5e2a12.id_iptv;
    _idEvent = _0x5e2a12.id_event;
    _loopCounter = 0x0;
    _type = 'events';
    if (_intervalPlay != null) {
      clearInterval(_intervalPlay);
    }
    $(".list_event").removeClass("active");
    $(this).addClass("active");
    $('.nama_event').attr('style', "font-weight:400");
    $(this).find(".nama_event").attr('style', "font-weight:500");
    $(".player_event").attr("style", "font-weight:400");
    $(this).find(".player_event").attr("style", "font-weight:500");
    
    $(".list_channel").each(function (_0x5c7333) {
      if ($(".list_channel").eq(_0x5c7333).attr('data-id') == _0x5e2a12.id_iptv) {
        $('.list_channel').removeClass('active');
        $(".nama_channel").attr("style", "font-weight:400");
        $(".list_channel").eq(_0x5c7333).find(".nama_channel").attr("style", "font-weight:500");
        $(".list_channel").eq(_0x5c7333).addClass("active");
      }
    });
    _rebuildPlayer(_0x33e69b, _0x344cd3, _0xce5596);
    $("#banner-kotak").html(atob("PGlmcmFtZSB0aXRsZT0iTWlkZGxlIEJhbm5lciIgYWxsb3d0cmFuc3BhcmVuY3k9InRydWUiIHNjcm9sbGluZz0ibm8iIGZyYW1lYm9yZGVyPSIwIiBmcmFtZXNwYWNpbmc9IjAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiBzcmM9Ij9pZnJhbWU9bGFyZ2UiPjwvaWZyYW1lPg=="));
    _0xce5596.preventDefault();
  });
  $(".copy_button").off("click").on("click", function (_0x51c415) {
    var _0x40c20a = $(this).attr("data-url");
    var _0x2ad091 = $(this).attr("data-info");
    if (typeof _0x2ad091 !== "undefined" && _0x2ad091 !== false) {
      _copy("📌 " + atob(_0x2ad091));
    } else {
      _copy(_0x40c20a);
    }
    _0x51c415.preventDefault();
  });
  var _0x5ea374 = window.location.pathname;
  var _0x4be89c = _0x5ea374.split('-');
  if (_0x5ea374 == '/') {
    var _0x2649e0 = $(".list_channel").length - 0x1;
    var _0x369a8a = Math.floor(Math.random() * _0x2649e0);
    $(".list_channel").eq(_0x369a8a).trigger("click");
  } else {
    if (_0x5ea374.substr(0x1, 0xa) == "live-match") {
      var _0x32c7c1 = $(".list_event[data-id=\"" + _0x4be89c[0x2] + "\"]").attr("data-target");
      $(".list_event[data-id=\"" + _0x4be89c[0x2] + "\"]").trigger("click");
      $(".button_panel[data-target=\"" + _0x32c7c1 + "\"]").trigger("click");
    } else {
      if (_0x5ea374.substr(0x1, 0x7) == "live-tv") {
        var _0x32c7c1 = $(".list_channel[data-id=\"" + _0x4be89c[0x2] + "\"]").attr("data-target");
        $(".list_channel[data-id=\"" + _0x4be89c[0x2] + "\"]").trigger("click");
        $(".button_panel[data-target=\"" + _0x32c7c1 + "\"]").trigger("click");
      }
    }
  }
};
$(document).ready(function () {
  if (_isIframe) {
    var _0x1db541 = "<a style=\"text-decoration:none;\" href=\"https://play.google.com/store/apps/details?id=com.live_streaming_tv.online_tv\" data-href=\"https://play.google.com/store/apps/details?id=com.live_streaming_tv.online_tv\" title=\"Download BitTV on Play Store.\" target=\"_blank\"><div style=\"width:300px;height:250px;border:0px solid;background-image:url(https://cdn.jsdelivr.net/gh/nafkid2023/web/img/banner-kotak-gplay.png);background-repeat:no-repeat;background-position:0px 0px;background-size:300px 250px;\">&nbsp;</div></a>";
    _0x1db541 += "<img  src=\"//sstatic1.histats.com/0.gif?4842598&101\" alt=\"\" style=\"display:none;\" border=\"0\">";
    $('body').html(_0x1db541);
    window.parent.document.oncontextmenu = function () {
      window.open('https://gillspaste.com/ah6mpfpr?key=4f96b6473c1da3d55814c78c1ca4a8ae', "_blank");
      return false;
    };
    document.oncontextmenu = function () {
      window.open("https://play.google.com/store/apps/details?id=com.live_streaming_tv.online_tv", "_blank");
      return false;
    };
    window.parent.$("#overlay").off("click").on('click', function (_0x33c153) {
      window.parent._iklanIsCountdown = false;
      $(this).hide();
      window.open('https://gillspaste.com/ah6mpfpr?key=4f96b6473c1da3d55814c78c1ca4a8ae', '_blank');
      _0x33c153.preventDefault();
    });
    var _0xcea9e7 = false;
    var _0x2688c3 = window.parent._listEvents;
    var _0x36d237 = 0x0;
    for (var _0x33c483 = _0x2688c3.length; _0x36d237 < _0x33c483; _0x36d237++) {
      var _0x2b87cd = new Date(_0x2688c3[_0x36d237].jadwal_event).getTime();
      var _0x23094d = new Date(_0x2688c3[_0x36d237].jadwal_stop).getTime();
      var _0x5211e4 = new Date().getTime();
      var _0x404205 = _0x2b87cd - _0x5211e4;
      var _0x354d60 = _0x23094d - _0x5211e4;
      if (_0x404205 <= 0x0 && _0x354d60 > 0x0) {
        _0xcea9e7 = window.parent._enableAds;
        break;
      }
    }
    var _0x544919 = function () {
      if (!_0xcea9e7) {
        return;
      }
      var _0x582ba8 = _0x512fc2(0xa);
      var _0x17b3cc = window.parent.$("body");
      window.parent.$('body').addClass(_0x582ba8);
      window.parent.$('.' + _0x582ba8).off("click").on("click", function (_0x1437d5) {
        _0x17b3cc.removeClass(_0x582ba8);
        window.open('https://gillspaste.com/ah6mpfpr?key=4f96b6473c1da3d55814c78c1ca4a8ae', "_blank");
        _0x17b3cc.off("click");
      });
    };
    var _0x512fc2 = function (_0x251cd8) {
      let _0x4a81d1 = '';
      const _0xcaf1d0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".length;
      let _0x2da98f = 0x0;
      while (_0x2da98f < _0x251cd8) {
        _0x4a81d1 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * _0xcaf1d0));
        _0x2da98f += 0x1;
      }
      return _0x4a81d1;
    };
    _0x544919();
  } else {
    $.get("https://1.1.1.1/cdn-cgi/trace", {}, function (_0x1b2b39) {
      var _0x2df424 = _0x1b2b39.split("\n");
      var _0xa778b6 = 0x0;
      for (var _0x30a4eb = _0x2df424.length; _0xa778b6 < _0x30a4eb; _0xa778b6++) {
        var _0x514e9b = _0x2df424[_0xa778b6].split('=');
        var _0x319059 = 'en';
        var _0x5d630e = '';
        if (_0x514e9b[0x0] == 'loc') {
          _0x319059 = _0x514e9b[0x1].toLowerCase();
          break;
        }
      }
      if (_0x319059 == 'id') {
        $("#donasi").html("Traktir Kopi");
        $("#telegram").html("Gabung Channel Telegram");
        $("#donasi").attr("href", "https://saweria.co/duktek");
        $("div[data-target=\"sports-event\"]").html("Jadwal");
        $("div[data-target=\"sports-tv\"]").html("Olahraga");
        $("div[data-target=\"live-tv\"]").html("Hiburan");
      } else {
        $("#donasi").html("Buy Me a Coffee");
        $('#telegram').html("Join Telegram Channel");
        $("#donasi").attr("href", 'https://www.buymeacoffee.com/duktek');
        $("div[data-target=\"sports-event\"]").html("Events");
        $("div[data-target=\"sports-tv\"]").html("Sports TV");
        $("div[data-target=\"live-tv\"]").html("Live TV");
      }      
    });
    _onResize(false);
    $(".button_panel").off("click").on("click", function () {
      var _0x570c6d = $(this).attr('data-target');
      $(".button_panel").removeClass("active");
      $(".target_panel").removeClass('active');
      $(this).addClass("active");
      $('#' + _0x570c6d).addClass("active");
      _onResize(true);
    });
    
    $('#banner-kotak').html(atob("PGlmcmFtZSB0aXRsZT0iTWlkZGxlIEJhbm5lciIgYWxsb3d0cmFuc3BhcmVuY3k9InRydWUiIHNjcm9sbGluZz0ibm8iIGZyYW1lYm9yZGVyPSIwIiBmcmFtZXNwYWNpbmc9IjAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiBzcmM9Ij9pZnJhbWU9bGFyZ2UiPjwvaWZyYW1lPg=="));
  }
});
$("#first-loader").fadeOut("slow");
var _copy = function (_0x1a442a) {
  var _0x3f0dfc = document.getElementById('myInput');
  _0x3f0dfc.value = _0x1a442a;
  if (window.top != window.self) {
    var _0x234f52 = new URL(document.referrer);
    _0x3f0dfc.value = _0x1a442a.replace(_initHostname, _0x234f52.hostname);
  }
  _0x3f0dfc.select();
  _0x3f0dfc.setSelectionRange(0x0, 0x1869f);
  if (window.top != window.self) {
    var _0x35f366 = {
      'title': '',
      'path': '',
      'text': _0x3f0dfc.value,
      'type': "copyToClipboard"
    };
    window.parent.postMessage(JSON.stringify(_0x35f366), "https://" + _0x234f52.hostname);
  } else if (window.top == window.self) {
    navigator.clipboard.writeText(_0x3f0dfc.value);
  }
};
function _middleEllipsis(_0x1b8c25) {
  var _0xe7e5f = '';
  if (_0x1b8c25.length > 0x1e) {
    _0xe7e5f = _0x1b8c25.substr(0x0, 0xa) + '...' + _0x1b8c25.substr(_0x1b8c25.length - 0xf, _0x1b8c25.length);
  } else {
    _0xe7e5f = _0x1b8c25;
  }
  return _0xe7e5f;
}
var _simmerLoading = function () {
  var _0x48ac16 = '';
  var _0xc47b54 = '';
  for (var _0x4a11f7 = 0x0; _0x4a11f7 <= 0xa; _0x4a11f7++) {
    _0x48ac16 += _simmerTv;
  }
  for (var _0x4a11f7 = 0x0; _0x4a11f7 <= 0xa; _0x4a11f7++) {
    _0xc47b54 += _simmerEvent;
  }
  $("#sports_tv_container").html(_0x48ac16);
  $("#live_tv_container").html(_0x48ac16);
  $("#events_container").html(_0xc47b54);
  _reloadMenu();
};
var _reloadMenu = function () {
  if (_isIframe) {
    return;
  }
  $.get('https://raw.githubusercontent.com/nafkid2023/web/main/json/sportstv.json', {}, function (_0xa4ed25) {
    var _0xac868e = '';
    $("#sports_tv_container").html('');
    var _0xa8ccda = 0x0;
    for (var _0x294f01 = _0xa4ed25.length; _0xa8ccda < _0x294f01; _0xa8ccda++) {
      _0xac868e += "<div class=\"event_wrapper\"><a  data-url=\"https://" + _initHostname + '/live-tv-' + _0xa4ed25[_0xa8ccda].id_iptv + '-' + String(_0xa4ed25[_0xa8ccda].nama_channel).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + ".html\" href=\"https://" + _initHostname + "/live-tv-" + _0xa4ed25[_0xa8ccda].id_iptv + '-' + String(_0xa4ed25[_0xa8ccda].nama_channel).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + ".html\" class=\"copy_button\">&nbsp;</a>";
      _0xac868e += "<a title=\"" + _0xa4ed25[_0xa8ccda].nama_channel + "\" data-iptv=\"" + btoa(JSON.stringify(_0xa4ed25[_0xa8ccda])) + "\"  data-target=\"sports-tv\" class=\"list_channel " + (_idIptv == _0xa4ed25[_0xa8ccda].id_iptv ? "active" : '') + "\" data-id=\"" + _0xa4ed25[_0xa8ccda].id_iptv + "\" href=\"/live-tv-" + _0xa4ed25[_0xa8ccda].id_iptv + '-' + String(_0xa4ed25[_0xa8ccda].nama_channel).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + ".html\" data-url=\"/live-tv-" + _0xa4ed25[_0xa8ccda].id_iptv + '-' + String(_0xa4ed25[_0xa8ccda].nama_channel).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + ".html\">";
      _0xac868e += " <div style=\"height:45px;width:60px;overflow:hidden;border-radius:8px;\">";
      _0xac868e += "  <img alt=\"" + _0xa4ed25[_0xa8ccda].nama_channel + "\" src=\"" + _0xa4ed25[_0xa8ccda].gbr_base64 + "\" width=\"60px\" height=\"45px\" />";
      _0xac868e += " </div>";
      _0xac868e += " <div style=\"flex-grow:2; padding-left:10px;\">";
      _0xac868e += "  <div><span style=\"font-weight:" + (_idIptv == _0xa4ed25[_0xa8ccda].id_iptv ? "500" : "400") + "\" class=\"nama_channel\">" + _0xa4ed25[_0xa8ccda].nama_channel + "</span></div>";
      _0xac868e += "  <div><label class=\"tagline\">Online</label></div>";
      _0xac868e += " </div>";
      _0xac868e += "</a>";
      _0xac868e += "</div>";
    }
    $("#sports_tv_container").html(_0xac868e);
    _initDuktekSports();
    document.getElementById('sports_tv_container').scrollTop = getCookie("scroll_position");
  }, 'json');
  $.get('https://raw.githubusercontent.com/nafkid2023/web/main/json/livetv.json', {}, function (_jsonDataLiveTV) {
	
	//var _jsonDataLiveTV = xorDecrypt(_jsonDataLiveTVEncrypted, 'indonesia'); 	
	//_jsonDataLiveTV.url_license
    var _0x1245c6 = '';
    $("#live_tv_container").html('');
    var _0x3eb79 = 0x0;
    for (var _0x8c48ce = _jsonDataLiveTV.length; _0x3eb79 < _0x8c48ce; _0x3eb79++) {
      _0x1245c6 += "<div class=\"event_wrapper\"><a data-url=\"https://" + _initHostname + "/live-tv-" + _jsonDataLiveTV[_0x3eb79].id_iptv + '-' + String(_jsonDataLiveTV[_0x3eb79].nama_channel).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + ".html\" href=\"https://" + _initHostname + '/live-tv-' + _jsonDataLiveTV[_0x3eb79].id_iptv + '-' + String(_jsonDataLiveTV[_0x3eb79].nama_channel).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + ".html\" class=\"copy_button\">&nbsp;</a>";
      _0x1245c6 += "<a title=\"" + _jsonDataLiveTV[_0x3eb79].nama_channel + "\" data-iptv=\"" + btoa(JSON.stringify(_jsonDataLiveTV[_0x3eb79])) + "\"  data-target=\"live-tv\" class=\"list_channel " + (_idIptv == _jsonDataLiveTV[_0x3eb79].id_iptv ? "active" : '') + "\" data-id=\"" + _jsonDataLiveTV[_0x3eb79].id_iptv + "\" href=\"/live-tv-" + _jsonDataLiveTV[_0x3eb79].id_iptv + '-' + String(_jsonDataLiveTV[_0x3eb79].nama_channel).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + ".html\" data-url=\"/live-tv-" + _jsonDataLiveTV[_0x3eb79].id_iptv + '-' + String(_jsonDataLiveTV[_0x3eb79].nama_channel).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + ".html\">";
      _0x1245c6 += " <div style=\"height:45px;width:60px;overflow:hidden;border-radius:8px;\">";
      _0x1245c6 += "  <img alt=\"" + _jsonDataLiveTV[_0x3eb79].nama_channel + "\" src=\"" + _jsonDataLiveTV[_0x3eb79].gbr_base64 + "\" width=\"60px\" height=\"45px\" />";
      _0x1245c6 += " </div>";
      _0x1245c6 += " <div style=\"flex-grow:2; padding-left:10px;\">";
      _0x1245c6 += "  <div><span style=\"font-weight:" + (_idIptv == _jsonDataLiveTV[_0x3eb79].id_iptv ? "500" : "400") + "\" class=\"nama_channel\">" + _jsonDataLiveTV[_0x3eb79].nama_channel + "</span></div>";
      _0x1245c6 += "  <div><label class=\"tagline\">Online</label></div>";
      _0x1245c6 += " </div>";
      _0x1245c6 += "</a>";
      _0x1245c6 += "</div>";
    }
    $("#live_tv_container").html(_0x1245c6);
    _initDuktekSports();
    document.getElementById("live_tv_container").scrollTop = getCookie("entertainment_scroll_position");
  }, 'json');
  $.get("https://raw.githubusercontent.com/nafkid2023/web/main/json/events.json", {
    '_stamp': btoa(_timeMinute())
  }, function (_0x5bbffa) {
    $("#events_container").html('');
    _listEvents = _0x5bbffa;
    var _0x59391e = '';
    var _0x1ab65b = 0x0;
    if (_0x5bbffa.length > 0x0) {
      var _0xac8206 = 0x0;
      for (var _0x55468b = _0x5bbffa.length; _0xac8206 < _0x55468b; _0xac8206++) {
        var _0x31bdc3 = new Date(_0x5bbffa[_0xac8206].jadwal_stop).getTime();
        var _0x63d7d2 = new Date().getTime();
        var _0x2baa83 = _0x31bdc3 - _0x63d7d2;
        if (_0x2baa83 > 0x0) {
          _0x1ab65b++;
        }
        var _0x485091 = _0x5bbffa[_0xac8206].nama_event + "\r\n" + "      " + _timePure(_0x5bbffa[_0xac8206].jadwal_event) + " | " + _0x5bbffa[_0xac8206].player_1 + " vs " + _0x5bbffa[_0xac8206].player_2 + "\r\n";
        _0x485091 += "      Link: https://pd-2026.blogspot.com/e" + btoa(_0x5bbffa[_0xac8206].id_event).replace("==", "").replace("=", "")+'.html';
        _0x485091 = btoa(_0x485091);
        _0x59391e += "<div class=\"event_wrapper\"><a data-url=\"https://" + _initHostname + "/live-match-" + _0x5bbffa[_0xac8206].id_event + '-' + String(_0x5bbffa[_0xac8206].nama_event).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + '-' + String(_0x5bbffa[_0xac8206].player_1).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + '-vs-' + String(_0x5bbffa[_0xac8206].player_2).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + ".html\" href=\"https://" + _initHostname + "/live-match-" + _0x5bbffa[_0xac8206].id_event + '-' + String(_0x5bbffa[_0xac8206].nama_event).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + '-' + String(_0x5bbffa[_0xac8206].player_1).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + "-vs-" + String(_0x5bbffa[_0xac8206].player_2).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + ".html\" data-info=\"" + _0x485091 + "\" class=\"copy_button\">&nbsp;</a>";
        _0x59391e += "<a title=\"" + _0x5bbffa[_0xac8206].nama_event + " - " + _0x5bbffa[_0xac8206].player_1 + " VS " + _0x5bbffa[_0xac8206].player_2 + "\" id=\"event_" + _0x5bbffa[_0xac8206].id_event + "\" data-iptv=\"" + btoa(JSON.stringify(_0x5bbffa[_0xac8206])) + "\" data-target=\"sports-event\" class=\"list_event " + (_idEvent == _0x5bbffa[_0xac8206].id_event ? 'active' : '') + "\" data-id=\"" + _0x5bbffa[_0xac8206].id_event + "\" href=\"/live-match-" + _0x5bbffa[_0xac8206].id_event + '-' + String(_0x5bbffa[_0xac8206].nama_event).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + '-' + String(_0x5bbffa[_0xac8206].player_1).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + "-vs-" + String(_0x5bbffa[_0xac8206].player_2).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + ".html\" data-url=\"/live-match-" + _0x5bbffa[_0xac8206].id_event + '-' + String(_0x5bbffa[_0xac8206].nama_event).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + '-' + String(_0x5bbffa[_0xac8206].player_1).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + "-vs-" + String(_0x5bbffa[_0xac8206].player_2).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + ".html\">";
        _0x59391e += " <div style=\"width:100%\">";
        _0x59391e += "   <div class=\"nama_event\" style=\"margin-bottom:3px!important;font-weight:" + (_idEvent == _0x5bbffa[_0xac8206].id_event ? "500" : "400") + "\" data-name=\"" + _0x5bbffa[_0xac8206].nama_event + "\" data-time=\"" + _0x5bbffa[_0xac8206].jadwal_event + "\"><span style=\"font-weight:500\">" + _0x5bbffa[_0xac8206].nama_event + '</span></div>';
        _0x59391e += "   <div class=\"text_event\" data-url=\"https://" + _initHostname + "/live-match-" + _0x5bbffa[_0xac8206].id_event + '-' + String(_0x5bbffa[_0xac8206].nama_event).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + '-' + String(_0x5bbffa[_0xac8206].player_1).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + "-vs-" + String(_0x5bbffa[_0xac8206].player_2).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + ".html\" style=\"color:#898989;margin-bottom:10px;font-size:12px;text-decoration:none;\">" + _middleEllipsis("https://" + _initHostname + "/live-match-" + _0x5bbffa[_0xac8206].id_event + '-' + String(_0x5bbffa[_0xac8206].nama_event).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + '-' + String(_0x5bbffa[_0xac8206].player_1).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + "-vs-" + String(_0x5bbffa[_0xac8206].player_2).normalize("NFKD").replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') + ".html") + "</div>";
        _0x59391e += "  <div style=\"display:flex;width:100%;\" class=\"fixture\">";
        _0x59391e += "   <div class=\"child_1\" style=\"flex-grow:2;\">";
        _0x59391e += "    <div class=\"flex\" style=\"display:flex;margin-bottom:10px\">";
        _0x59391e += "     <div style=\"width:15px;border:0px solid;height:15px;margin-right:15px;\" class=\"me-3\">";
        _0x59391e += "      <img style=\"max-width:20px!important;border-radius:2px!important\" alt=\"" + _0x5bbffa[_0xac8206].player_1 + "\"  src=\"" + _0x5bbffa[_0xac8206].logo_1 + "\" height=\"15px\" />";
        _0x59391e += "     </div>";
        _0x59391e += "     <div style=\"flex-grow:2\">";
        _0x59391e += "      <div style=\"\">";
        _0x59391e += "        <div class=\"player_event line-1\" style=\"font-weight:" + (_idEvent == _0x5bbffa[_0xac8206].id_event ? "500" : "400") + "\">" + _0x5bbffa[_0xac8206].player_1 + "</div>";
        _0x59391e += "      </div>";
        _0x59391e += "     </div>";
        _0x59391e += "    </div>";
        _0x59391e += "    <div class=\"flex\" style=\"display:flex\">";
        _0x59391e += "     <div style=\"width:15px;border:0px solid;height:15px;margin-right:15px;\" class=\"me-3\">";
        _0x59391e += "      <img style=\"max-width:20px!important;border-radius:2px!important\" alt=\"" + _0x5bbffa[_0xac8206].player_2 + "\" src=\"" + _0x5bbffa[_0xac8206].logo_2 + "\" height=\"15px\" />";
        _0x59391e += "     </div>";
        _0x59391e += "     <div style=\"flex-grow:2\">";
        _0x59391e += "      <div style=\"\">";
        _0x59391e += "        <div class=\"player_event line-1\" style=\"font-weight:" + (_idEvent == _0x5bbffa[_0xac8206].id_event ? "500" : "400") + "\">" + _0x5bbffa[_0xac8206].player_2 + '</div>';
        _0x59391e += "      </div>";
        _0x59391e += "     </div>";
        _0x59391e += "    </div>";
        _0x59391e += "   </div>";
        _0x59391e += "   <div style=\"width:100px;text-align: right\">";
        _0x59391e += "    <div data-target=\"#event_" + _0x5bbffa[_0xac8206].id_event + "\" class=\"tanggal_event\" style=\"font-size:13px;\" data-time=\"" + _0x5bbffa[_0xac8206].jadwal_event + "\" data-stop=\"" + _0x5bbffa[_0xac8206].jadwal_stop + "\">&nbsp;</div>";
        _0x59391e += "    <div class=\"waktu_event\" style=\"font-size:13px;\" data-time=\"" + _0x5bbffa[_0xac8206].jadwal_event + "\">&nbsp;</div>";
        _0x59391e += "   </div>";
        _0x59391e += "  </div>";
        _0x59391e += " </div>";
        _0x59391e += "</a>";
        _0x59391e += "</div>";
      }
      if (_0x1ab65b == 0x0) {
        _0x59391e = "<div class=\"event_wrapper\"><div style=\"margin-top:50px;height:200px;background:url(https://cdn.jsdelivr.net/gh/nafkid2023/web/img/no-events.png); background-size:auto 100%;background-repeat:no-repeat;background-position:center;\"></div><div style=\"text-align:center;font-size:18px;color:#8A8A8A;padding:10px 30px 5px;font-weight:bold;\">Oops!, No events for now</div><div style=\"text-align:center;font-size:14px;color:#8A8A8A;padding:0px 30px;\">Watch this space for upcoming events!</div></div>";
      }
    } else {
      _0x59391e = "<div class=\"event_wrapper\"><div style=\"margin-top:50px;height:200px;background:url(https://cdn.jsdelivr.net/gh/nafkid2023/web/img/no-events.png); background-size:auto 100%;background-repeat:no-repeat;background-position:center;\"></div><div style=\"text-align:center;font-size:18px;color:#8A8A8A;padding:10px 30px 5px;font-weight:bold;\">Oops!, No events for now</div><div style=\"text-align:center;font-size:14px;color:#8A8A8A;padding:0px 30px;\">Watch this space for upcoming events!</div></div>";
    }
    $("#events_container").html(_0x59391e);
    _reformatTime();
    _initDuktekSports();
    document.getElementById("events_container").scrollTop = getCookie("event_scroll_position");
  }, "json");
};
_simmerLoading();
setInterval(function () {
  _reloadMenu();
}, 0x6ddd00);
setInterval(function () {
  _reformatTime();
}, 0x2710);
