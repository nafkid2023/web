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
var _currData = 'ewogICJpZF9pcHR2IjogIjQwOCIsCiAgIm5hbWFfY2hhbm5lbCI6ICJDSDEgQUZDIEFzaWFuIEN1cCAyMDI0IiwKICAidGFnbGluZSI6ICJBRkMgQXNpYW4gQ3VwIDIwMjQiLAogICJqZW5pcyI6ICJobHMiLAogICJ1cmxfaXB0diI6ICJodHRwczovL2Y3Y2NmN2ZjLnd1cmwuY29tL21hc3Rlci9mMzZkMjVlN2U1MmYxYmE4ZDdlNTZlYjg1OWM2MzY1NjMyMTRmNTQxL1VtRnJkWFJsYmxSV0xYQjBYMFpKUmtGUWJIVnpVRzl5ZEhWbmRXVnpaVjlJVEZNL3BsYXlsaXN0Lm0zdTgiLAogICJnYnJfYmFzZTY0IjogImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSGdBQUFCYUNBWUFBQUJ6QUpMdkFBQWdBRWxFUVZSNFh1MWRDWnhOZFJ0KzduN24zdGtzWThadTdCcExwSklpc2hZVm9qNUNxWlMxa2wxSmRySkVWSjlRVWJaSzJiSVRTWHhhdnBESW1qM3I3RE4zdjkvei9zKzlrelgzcTNDSFRyOXB4c3k1OTU3emYvN3Yvcnp2MFNVV3F1ZkhaWTdvNkdqWWJEYjQvWmMrUmFmVHFWZW1wYVVoTlRVVlJxTlJuYXZYNnkvM2xwZDlyOHUrNEdiNmc4R0xvdmNjUkljeE1mRHJ2VEI0amZCcFMveUhoODVsUmY5R1J4Q1ZWUllPSjlmZjRrR2pSeHJCdy9mUWxTeGNQd2M5QVNmNEZSOGZEd0V3Q09LRm54QTg3OVNwVStvMW9aeDdwUXU5NmYrdWM4Rlk3QWhlbnBzWFBwTWJlZ0xzMTExVy9uNWZMcThGUTFzZEFBN2RBcmNITUZuOXFOK2lnZG9rNXdIczgvbVU5QW00Y3Z5UjVJclVwcWVucS9ORWNpODhCSEI1dno5Nm41c2UwQXNYUU8rQzAzWUdvMWZId20zSWdzN0hkZFY1UTFnbUMyYjN5OEsrdFhGd3U3d3dSK2hSNStHNjBCdDhHc0JCTU9SN1FrSkNqaFFId1JIUWcxTHE5WG9oVWl2bkJuOFgvSHR3UThqZjVMeC9qdjl2Qlh6SWhOdm93N2cxK1pCcE9RWTlqTkRwTlNINS9aQi9pd21VTC9tWklNS0V6UjlHWWZra0EzeHVOd3dtTStvMWI0Z3MvVm5vU2hkdHFIU0F3V0JBbmp4NWNvQUx2bUVRZkFFeEl5TkRTVzFRYlFmVjhybHFYSUM5bk9UL2Y3ZDc4NTJ0MHp2aE5la3dkR0VjUEhuMkVSUGE0SUFXdkR6QVhwNWpRTnEyU3BqWStRaDB0TUV3R2xDdlJWMjQ5Qm1hQklzalpiZmJjNEFUTUlOdkhKVFVFeWRPNUlBdmZ3OUtiZkNENWZ4emdmMEg1RCt4UWYxdXdPeEhsMGw1a2EvS1h1Z0psTjl2dUlJRVU2QjBKa1NjdmcxOUg5d09nenVDdGhlVTREcWFYMVNwN01QK3lNaklpNlF1Q0t6TDVjTFpzMmZWaDhqdlJOTFBkYXFDd0FhZHJqOXhXLys4SkxBQ09qL05uc0dOdWgzMXVMZERDaVdSQ3ZoQ0RhM1U4cmtxbWdBYnpMQ25sa1R2Qi9aQm54MERuOUdEQmcvZUR5ZlNvTHZ6MXRiS0JsL3FFR0FGWVBtN1NPeTVucklBS3VCZXJFTCt3ZXZQcm9DZVRwVlA1MEQ4bmFmUWVZS2RRR2syOW85dE1GVTBWYmt0UFI0djFUOElxNmNnSFRRbm1qNzBJRnl4djBCM1Y3WEhpWlhtaWdlbFVJQThlZktrK3JkSXJId0YveDc4SHRhMlZoZGNGSVp2RjZnNHVWUHU2SFBXVE03NXM1RDhqYS9qUmNobG1IeGVPUEtmeEpBRithbXVxVGtscHlBNlYwbnRwUTg5blN6eHhWNnFrOHBZbUs4elJxTjJzL0pvMlRjZmREV3F0am52OWh3T2gwcGNDTGdTL2dSVmRmQ3RQUjVQTG5HaWdpQ0dBM29oYmdTL0VVYS9GNmtSUnpCMlpVbDRJdzd5aGNFUTlQSUFTelpFcjlOalZOc1R5TjVkSEY2TEMyOTgxZ3JXeEtPYWlnN2FWMUhKVHFkVFNleTVzVzFRc2tWcVJTVmZUcVdIZUJ0WDdiVGdadFI4aE1DQzhMcy9jTTFhbGszQ081RndiUVBJZVg0dWFsQmJYVitUUTZDb2twMldreGl6TEFtTzZCM1UwS1lycnBmZmF3SzNCYjRZSDROdjUxdnhjQmN6R2oxVmhVQXo0aEdBeGI0ZVBueFlBV3N5bVJTNDU5Nm9BQ3VTRzdUQjRlNGg2L1IrWHE5TDNRc0ludHZ0NHIrOUFjL2ZCNVBGSW5wYWdXd3dtT0J4Uzh6K3V3TjV4Ulc5S2ljRU5BMVZ0YzZVZ1VIemt1QXR0cFY1anFEa1h1UnQ1VndGWXhwNG1TVFovM1ZCTEo2NUd6MG5sSU05dGdRMU96WHdyUlZhK0ZOU1V0UU9OcHZONStXUkJlVGNvNUxGaDVCNzloSkFIWm8yYVl6SDJ6eUtZb1ZqK0FjeFpVd0NTQ2dYc01FbW93WHBHVmxZczI0ZFpuendLWTRjUGdGZklPV3FwUHU2YUhiTjN1cm9hRFY4MFlQcXJabTBFQ2RMT1FtWEI5anY4OENyTTBPWEhRR3p6Z2luUFFONUxPVmgwRWRDVnp5aHJwSmdrZHBna1VBazFjMk1TRGhubzN5VVVtYml0R1M4aVh1WUdxYjZuYmZnelZGRFVTRFNpcDBiMW1ITGdvVTRzM01mZEJrT1dOeFV6eDR4TDl3Q1hEQ3YxUUpUNFFTVXU3Y21ibTNjRUo3OCtiSDBxeTBZT0dBWUxEcEtPR05RSDZXSHk4Mmw1WC8wWXZTK1A3Q0RmNGRVVXdwMVhqdDNZeFlpYnptS250TVo4dENrYUx0TkFKYnZvVjFEdExVcURINkNYcVpZSTMrd0NoU01ieVUwRW5ERDFkWnFhOGtnbnJ2ZHg3Z3hKbHFIOVl2bTRmajMzMkpjei81SXROb1FsZTFBbE1PTFNLYnRmRlRQY2k4dWV0ZEdNVU5NeVBQVmNIT3RzZzErT0ttNVRsb0JhMUo1Tkg2bUc3NC9kaGF2OUJzQ0E2WEJaQ0xZbEJBbVgrRUoydlcvQTh4THZZZU9pUTYvaFpySWlWVDdOa3hjVVZIWjBmT1AwQUNPc2xTQ1NXZUQ3cFpTVGYwQ3BraXZxR054c2k2MHdWZnJmdjdzKzhwR2xKU2V5ZXZEc1A0OTREcXhCeHZtelVCK0J4RHQxQ0dHY2FHWkc5L01UUi9CTUVrdnFwYzJWNU1CVVhtVUF3cURrLzl6MEVuTkl1alpubXhrZTUxdzJLT2dTeXlGK3p2MXh2TjlCeUFsMjhVRkZ6bStmR1h0ejk3SHBWNG5yb0ZmUWlYclVVeGNWUW5aMW4yQjB6U2ZJYlJEaDJockV1K1JFbHcrOFFHVjZCQmdnMUlibE9UUTN1emFueVhYYVdRNWJVU3ZibGc0YlRKc1dSbUl6SExCWWpVZ2xxR0duYmxaSzBHeGVRUVdiVm5FakdsZmZsaVUyZ1Z6dFVDNmlrSjB5TkI3a0VZVm1lRjJJcHUveVl6T2kySlZxbVBicVJSczIzc01qbXdQTE9LMFhjVkQwMGpVRmpRRmZxc0RZNWVVUTNyMDFvQnFsZzhPM1RHSUZCdE1iYUFBenM3T3prbEJocU9ITEFDSnJSV0E5TnlNMmRucDZQWHN2MmhqNXdHcEp4QkppWTNWUnlPdmw3WldIRVdlWi9ENllmY2FFRVd0NStVdnhMMVNFaXllR08yYWllNkxod0NuOFc5WlpvWi85RGk5YnI0MzFYbXEwWTFNU25RNkhSZFgzbmljOFVYZ3lGbm5WWVJXZTJzZE42ZlA0S0N0TnpHTDVVWkhGdjRMMVR5dWJWRlIzLy9IRVdrdXd3amFxamxaNFcxck5YWHFvcVNaNlBRWUNFckhsbzJ4WWRFTW1OME8yT2tNUmRGV1JudjRuWFpTd0dPNkFFWktnWVg2TGxvQUZvazNhc2tBQWRoTkZTalNZdUJyVHpJZDZCTDJCQmVSYmhpeUpLSmtpSlhKRDgxbXZPeWdLZkJHSnVDbjR3NjRUYmIvWTRuL3pLbThPUjN6RUI0elB5c1Q1UnRtNGJGQjNIaThWcU1waTd2VEhQS2IyazJKTUlzWFhhTGdmYUhMZmNodi96ZWZLRjR2djR3TTZOMCtCeHJIMldDTUlSREhqaUVQUmR0R29NdytQeUpsSVFnaTR3SEd0bTZZaldZWUhmek9FSWx5VFJBMXhvcVhBdUVVOW9xUkpWRDZIUkZDTmVMdkhQU1VuU0xyM0NScC9Md3NmaDJoUkQxVHF6WDZmcjRZV1piWXYvbkdMbnc3YmpLZGgvZHBob2Y1WkYzaHZSajhjU0k4Um5yWHZETHFwWkRWZElTaE9Ld0craE81QW1BQ0kycFdBS1lZbzZvM0N3MHFKR0xIMmNOSXpVaEJUTG9MVVJZVGJIb1RjN2wwcm5RaWo0Q0hraXFoalpuQW0wVkZVLzJhekFZNCtYdTNxSHA2eHlMcDBmUzBYUVEybXdDN3paUmlseHNuTFFaa1JwZ3g5dGxlbURyaFE4ek5US05FaCtiQi9wVmQ0T2MxR0doYVJPb2NrUWN4WVdWNVpCcVBVYktEWVpLQWZQbVlPUGpaVm4xaFdJMnh1UU5nUGNYTHpYQkc0bDZSdEVoM05nWlhUOElwZHpxcVA5cU1BRXlBTGR0Sng4b0hPM2U1VFJ4bFNwK0RBTHFNdExiVTNBWm10QXhtRXh4ZU55eVVkbEhSVHY0dVVrODd4UVZ6a3hxVFJTbFBJNFpPc3hFVnFsWkVvNFpOc0hqd1pLeUxNbUhuS1c2S3E0OHZOekpEY0c1QWlYZWRwblNNWFZvYzJkSDdOZitaMHEzbHBxK3NkRTJJUTVRMUxuY0FMQ0dPU0xEWVlqbmtXOVg4WnRSMGVXQnlaYUZ3a3pwbzFMSWxsbncrSDF1V0xVY2NlVW1SWENNbkpUYU5OalNUSVdCMHFWSjRmdVFJYkZtM0ZndmYvamZpQ0xLSjBoSkRuOXJuTWVJVXpadTVaQUtlNmRxSnR0cUFhZjFmaHYyTUMzVjc5c0hqRTkvaVpyQ0dzS3gvUlhZMWIxL3VUV0p1djlTR3pXNjhOQ1VlTVpWL2haZVJBYmQ1eUI5Z1JINENYRGgzQUh5cHU3THlac2MvMnhvN1puMElQVVVyMjI3RVdWWlIrcncxQ1RaRVlQenp6OE9SZkJMN2JUR1lQSE0ySnM2WWpmZm5mSXlZbUVoODhmRk1iRms0SDEvUG5JTllPbWd0Ky9aQWZGSnBiUHgwTWJiT1hZaThsZ2ptQlh4NGJ0cEUxSDZzRTQ3cG9ya05ERXE2cnVaeFVaUkwxVlByeVN6VWVZYXhPQ09GWUNRZnlqV1FnRVdBaStkZWdQVk1jdFN2V0J5MWJ5OUpGbWhlckpqeUVhTDhIbVRRVGo4eTRqWFlpeFhBZTBQR0lDMVBNYXhhczRGU2FXRXBqdUVIcGNOcjlDSlBsQm12dk5nSjhRVmpVS1JzVVl4KzVFa1VUdmN4Z3dUa0sxRUVUdzNxaitFdkRjSEsvU3pCbVNMaG9WMDJCZXJpb1N6d256bm5Rb0RGSWJTWDJZUGVIeGJtTlR0VURCK3FvNlh6UlNQYVZpejNBdXltQnh5Wm5veVhIMzhZUDI1Y2laZEdEcU54dG1QSzBLSDRaZDlldkwxME5WNmZQZytmZkxpQVJRU0tuakJTdUQ1ZWVzaDZxanV4YzI0bUV4Yk9tNFozZS9kQzVxa1RhTk94TGVvMGI0YkpBNGJpNExmYjRMK2xHcFovOXd1M2hJUlExLzRRMDVRZHNSOGpsN015WkV1bGQwK1FmY3lwaHVCazZYeDJ4Tmh6c1FTTFJUS1FwRmFsc0IxdDc3MGRxeGF1aE12dndsM3RXcUJ0MXk1WXNtUTFVaW14cnd4OGs3YVdYaWx0cmxTYVJNM1JYVk41NVpnb0E1WXQrZ0R4TEU2Y1BQSXIrbmZzaUtoME9tTzJTUFNnRm1qU3JnK0w3bm1aenZRb2IveGFNei9FNTNCYlV6Rm1UVWxrR1EvRGIwcldpaEdoQU95TlFIUjBMcFpnY1VXa2NQL3lzMjJ4YWZGTXZEWnFFRVlOSDRtengwOHhZdFRqblM4V1lsZEtNam84L0tKV05BblFrb0lnU1JhcmVKa0V6Smt4RVhQZkhJL3ZsNjJDaWJIelUxMDY0ZWpSNDloK05BMXp2dnFHU1JBN0lwanlES1dGNU8rV2NlRkUrMDBPdkRxbk1ueEZ0L0NPbWNaa3RpdVV3OCt1aUdoYjJkeXJvcFhIeVFSRm0zYk5VQ3BXajdYVFp5Si9nUmgwNjljVHI3MHhEZ1hMVnNTejNYdWpmdDJXekg2WnpxTVpxY0lEeGFOVnU0ZlIvckg3MGFONWMvUWIxQTk3OXU3RmtsbWZvbGlKa21qNDFQTjhyNEdzS0ZtWlJKR0N1c1JvVjluTHVnUnlQb01MZHp5V2pDWXYwbjhRTW9BaUtsejU4RFBkbWNkZUx2Y0N6TlFIMVJWdGFSNGpldmZ2am1MMGM2ZS9OUUxKcWNrb1dxWU1tclYvQnZIRnk2RjFpL2FVWUdhcVZDMVhzNlFLWUhxb295Y01oNVcxMTdPbkRtTFcrTGRZZVRLaFJaZm5ZSW1MZ3lFaUFUMjY5dUM3bWxRTjJTK0poaENsNThyTEgrSVpFaXJ4c24wSi84R3d6OG96dTBXQUpSMGJ3dUhudmNSWVMrZGVnR21BR1FQVHRuTGh4MDRiaDFOcHlTaGc4eVBDNWNDYjQ4ZWpWTFU3MklEMUtQcDI2WVBzTE1hVlNzZHFKU1ZGY2FHOWZtL09WQnphL3pPbURoK09KaTBmeGoyTjc4ZlJJNmNSVTdBb1h1emVGNjVrY3BxRUNhTFNwRkx3dVBZU0xJekpOTU5lVEZ4Zmdsd3Qxb1paS3c2bGJPam5wbzQxbDh5OUFCdG9mNTJNRGVXN3pwbUJYcThOeE8xM0pzRnM4Y0hDNXF1ZmZ0aWxQTTYzMzU2T0EvdVBjbUdrMUVlVVJNMEpLNEpab1hjK21JeXRQMjVHeTBjZWhKdmwwdVRrRE1URUZrYWJGdTJRa3BvR3I4UEZncktGNnBtbFIxYWFQTUZNU3dnUzlMZWN3dXlhVkphOEpqOUdyckloeTNxQ0RXVXNlb2ZBNnZCeFk4WWFjcldURlZqQ0hBNjAwSXl5TU9EVlhxaGQ1MDVFMk0xc3dqS2lmNCtCK0diRHo0eVNDTEJLOWRFemRaRi9GdUhFbUhFRGNmYzlOYW1pVTVHYWtvMit2UWZoMXdOcyt1TGlpT1JlOTRQMWFiMG5rc1RLMDJqM2Vpa2sxdDdEalNyM2NHVk5JZ29yeGxnazkwcncrWXV2ZFRycUNTQ1pVL3paZzN2cjFzRFR6N1pEVW9XeXVLdEdBeVlxNkgwcVFwdkV0RTVNZmU4TjJDTXQyTFh6QUVZTUcwdENIbjlQbTY1am1sSmpZSWJtekZ6VlRTRGFoakc3WCs5R2tUcEg4TXlvV0pxSjBHeXdWTitpOU96eHpoM1ZwRXNzbzNKNlpDZExyNVRHdVJJdWs4L0hqQlVMQ0hydWZvOHZIYVBIdllyYTk5YkNuZFViTU9kTWw0bFNmY2RkNWREeTBhYVlQblVPOXU0K3l0S2l0T0VJMFovMEh0VXFLejFCb1Mza1ZRVllaYWZsUGhrRnhHL0RhNThXSTlPRFppT0VRd0MyK1hOSk5lbVM5Nk1BMXRTbzhLQ3JWYXVFLzN5M2hlQ3lhaUNKZVRwRUlxdlo3aFNNSE4wUGt5WitnSlF6SG5pODJWano1ZWRZdkdRUkpveWJxVWdBUHRweGcwRWExclUrckNjN2RNRDcwejhNeVprSllhMy93aW5pOVl2bVlSNmNYUTVqVnBWbVRmcHdTTzhuMjlOQ0h5VDNTdkE1RkZKUnVRc1d6Y1hSazcvaHl6VnJzV0g5MXpoKy9EU1hKa0tWRGNkTTZJT2Z0eC9FMUNsenllTHc0SXZsOC9Ed1F5M2hjY1FvS1krTU5hTnlwVXBvMExBdVNwY3FpeGRlNkluVU0rTE1YR2MxVFpQalp4VkxjY3BNYWVqMVVYNUVKQjRLeVFhcmdxT2JHejNYcW1oTmR0WC9mUXg1TEZZZGl3b0w0Q0tOSjA4ZTJpcXEzQTFmYlVMdlhpL2o3WGNtNE5pUk14ZzJkQnh0bUF0ejUwOUgyMysxUjgyYXRUQjgrQUJFUnRKRHpjcGtUMVltdnR2eUUvcjFHUUt6U1ZLQzEvc1FMaGFaSFRRN1huMG03dTlHODlJdVM4M3RrQnI1SDZVc2hiamtZWlV0OXdLc3ZHZVZnVkFOZUY0VzkvM2taZFNxZlJmYVBNNk9obUlGR2ZZa28zanhSS3hlczV4T2xna2poMDlpVTdVTzcweDduU3pKRkJRcVZJaUxRRWtscVc3OXVrMlkrdTVNdUp6TVJUUDh1aDVacTB1YkltRlowZ1l6TVdNdno3YVU5MmlIbVp6UnloK1g5L1JGYzNuY0xESG1XZ25PQ1k5NG44clowc0ZpTVpQK1MxWWk3OXRIaDZ0Z29UamNWKzl1UFBWMGU4eWJzeGhUM3A3TkZLVUhFOThlakowN3RtTEg5bCt4K2V2dnVUa1U2MW5aT2ltMGE0N1dsV2t4MTBxK1ZZcUcxNVZwMjQreHk4blJzcDdSWm5jb0taYmM5TVhYcWlPUjBPdG1GaTdYQWh6a1B3U0JKamg5K25YRDZGSGptTFdTdHRkQVNNUStuOXFzTmhuME5xejdjalBYeEl2WHh3L0dBSkxhWGRra2h0TkRsV2swWHI4RHI0OGVqZ0VEQmxIYUdVTkw2aW9jRGtuUWNIWUh1N1RoWkUzNDlWWHhjRmdPUWtjMnFFUVBsNjBQOHo3OUpPL2RBQUFIZVR6c2FNZ0h6SjA3RDdObmZjeXYrUVNLYXlQZU1jSExseWNPcDg5d0xBSjNmcjE2ZGJGaXhScHlxRzEwc2h4SVNpcUhIajI3b1VTeFFuaWdjWE5PcXVId04xWnV3dUtRL0RkRFBpbG55WStkSjBjaS90YURaSVpTT25rdkdzdmpZbWRRaFk3a3R1UmlnQzllZmdNSG1FeCtheHppRTJLUjdYUmg5Y3IxbURGekxoMFNBOXpzVTFJbVN5VVBSTHQ1Y1d2MUttai9aQnZhNjhLc25jYmdrWWRiSVNPRk5sbWxOY1BwQ09iUm1ZWXQveE1HZkJCUGdBbWU5RFVyVlgycGE5VnM5STBGc0RoSExFTFVwdDE5dUZrakhEdDVGRldTcW1IRTBOSDRlU3R6MDlJNXdOVXdSdmd4Yk1SQXVNbXdkTEJKTFgvZVF1amUrWG0xSUVaMk0veE9md3NYa0RXQUpkNVBNZitFTjFjbDBRNm44bGRDenBNVTdNWG1STFhCR09tTTVWNGJmUEhpUy8rdmRDdXdFVVZ4b2hNS0ZxQkgvUWdTU3lSaTBvUzM4T3RlSmdrb3ZtKzlPeDVucUs1WHIxcUhkZXMya212RjRpTmJYV1N5bk1ZTHVCNEVuVC9hVEw5THNOT1Fqb2tyazVCdSsxRVJBMVUzNHFVQUZ1NlorQ0UzRXNBaWVYSHgwZlNjNzhIY09aOHlTMFh1cGNlTi9BbjU2RHoxUis4ZVBabnhxb1p5ekUvUG03TkF5d0xxc3BFbnJ4MURCbzlBOTI2OU5ZODhKdzBhWGhJczErV2o3ZTAwMFl5QzFYK2p3cEYyVTNyOGw4akhpRzMyU0ZQNGpRU3dGUFoxVE13LzBLUStCcjdhRHlkSnBIdnhoVjdZdS85WDFMeTdGalp2MnNqQ3dqRDA2ZCtQSVlTSGZLM2VhTjZpQ1FzMFp0UzQ4MTZ5TnpoRVRCR1Rydzk3STVUdFpHRnpWdnpkditMSjBmblZ2ZnJGQVZORWhQTzFqcVJnblVJMHZMRUExdUpYdHBkUmNyTlJxblFpMnJScGc3aUNoZENmUkhZREhheXVYYnRpMDZadjBiSkZDeXhhdkpBSmppOFpWbEdZeFFkamtTSWN1eXZQQlY3Nm5yUHkvb0poaTR2emdqTXAwUUx1SlVJNkdRWkxBYitoQUZiV00waXVFOElhTjdVMGpScll0L1RrVSsweDY2TVAwYVZ6WjJ6OGFqTzIvT2VIQUw5SjBvR1M4OVhDRFhJMVF4R2s2M1lPR3pWWWNFakI2OHZqNExJZDVYVXpwY3BZLy94UVNaZ3Jia1NuMzNYakFYeit5bXZHeVN2dG9VWjJFN0xPVzZKRUNSdzRjRUI1MUJyYk1naW9MRXI0cXViZ2Zla2xCY212Rjk2T1FiN2IyTkxDV2RFeXhQUmNnR1dUbTF3eEdOeVM5M2tqcWVqZndRM2FJNllkaFdBbnNhOTBvTkVoMFZPbGVka1ZFYlJabW44YTZOZ0xlcVBYZ1QwWnFrcGdOek5EdVFpVXFYY1NqdzFqbk10THZ6Q3RLcHJyd0xxaStQQlZqbjIrSVFFT1RNc1Y3cFVvWFdsWGtiWVBiZWdaSVJWdVZXQTRtc3dHMHdCWENqN1VkYjV1NXdrNVZQYXFNL0pIakZ4YUZSN2JiNnBidzhyS2tVZllvOHkxMjF5eDZObmdFQ0xTY2pFditvOVdXR2d0d3M1UVk2Qm9pendNbGZoUE9sSUJkYXpZa1NLNzJ1d3NFMGtDNFQ2WEpIaS9BcWFKYVV1bjZTUW1mRmtSNmVZZDNKWk1XeksxNnFVNEc5bmR2bVFDc0dWdURLd3NvZDVnRWh6SStEQVIvMlNIZHJqOTl0dElobzlpZlpqZGdSeUhKTk9EbkV4aHBtZWs0ZlRwWkpYc09IVXFHV05IdmNITklFc284bjVsUXR0MUUxL1JNVklMcHEvZ1pRYXI3L3Y1WVUvNlJiWGx1Qm56Nnd5cHNLZFVSYThIZHNIc2lvYSs2UFliRStEOEJkZzZHVzFIV25vS1oxdUlhcVluTGNaS09WVlNTcFF3aWw0MkpkbExsVjIrNUMzWXN2bGJiVFp6R050ZnRRVkpXRkErQXdIT1YvRkhkSjlXWERXbGVYUjJnbXJFRzA4ZlJQS3VzdkNaeVREOXNNeU5CbkRBa2txcFRQaVZ3Y2Y3Q0w5WXNGT21WbFBQRWkwTEIxUFV0SVdkaW43TzZoQ0FaZjVPT0IrU2lQWDZJM2diRGc2STJZWFI2OHJDYThoZ25Uc2JtZHZMWUdKSFVucThjY2lPM1lyUmk2cmNXQUQ3NlN4NTZZRjBlSzREaWhhUFIzeGNQdVRQSDRNOHNiR0lzbGxoVXVNSnZjakl5a1pLZWlaVmRCcCtPM1dHWkx3em1ENXRCaXRKRERla0srMHlKYmh3QUY0NFdqQ2U1U1NlR0xnNFQzckU4bUp3UmUyQjFaY1hmUjdZRFd0S0JWNm1GL2UvWU1CdGo5MWdYclRJWlhUZWFDU1dMVW5TM1RFeUxNbE1NbnNVQmNja3o1a0lxbWphTEpucTU2RjZkbklNaEl4dXZMMzZYVml4ZEUwZ0thUU5VZ2pQUTNqU21YeW1VaFI3bFZ4NDlGVWJraHFmeElFTmhmQkJuek1jMDJoaXErbFpURmhmQmlrMnp1bThvY0lrMmxZekpUV0x0QjNwSDVZZUpEVWFVTnBiQXVNSUZXam5QTWxOL1owMldrWVB1eDNCV2RqaEM3Qk1zUGN4QjYyKzB4N25yWFFZdlNkVlFOZjdkaUhlVjByNUZqRzM3VVBuU2R3QW5CUjBRd0VzelFnZUFaTS9xS2w0YWo1bGNMYVVPRnVhcDZ3TkNOZUdvcWwrTkdwbEdhaC80WFQ3Y0pSZ3ljQkpwNE40MDBZNmpnN3pBZFJ2Vmh6TFpua1J4ZUdjVGxiSGhueFdGdTc4T3puLzZ3WmpkQVNxcG1yYUhWMWxWUkQza3N4dTRFQTBrV0xPclZOMFdoTW4xb205ZHJteUdUcHhXQnJaRVFwOUxscTRGeHZVazFtWXpCQXYydXZpTlZ1azNaMjVkSllSSlFKSU5XekRwRFdWNElwSVJUNVAwbzBsd1VFbWhwb095MTNldW0wVERCbldFeVdMMThCZGQ5NkRXZlBHa2YvczVLRHdwL0hKSng4bzFhemplTUFLWmU4N1B5ZXRCUDNDdkhUTzlnay93YVlYellIWFRLdW5vc2x6MGFqVzVnUVRPeWFNZmVKUWJnRlk5T2dGNjNySktuY1FGRkhOcWRqMjh6cDg5ZFU2ZkRaL09YdUVYUmozeG1EK3ZJTEpqbFFrVlV4QzU0NnZFR0RwZnRDZUJYVmVxaklYQWN4ZVNjYjU2V1JkOHJtSFM5a29IczhKZ0Z1TFkvUVRONWdYclFRdjhOekVTTTZ5L0dIYmF0V3hJQVh4VHAyNjR0bm4ydU9GcnNQUnNORjk2TnE5QStyYzh4RFZ0VjNSYkhNU0hCZnhyWU1iSzN3bFdEcWVUWXlEalVWUG9lL2NTRGpZR0QraXhSa1l6dWFhUVdpeXVCZW1FQzlSNUE1d2lJVXlPbWZ1REV5Wk9oRnJWbTNBZjdldVJlL2VnOUdxVlhOMDd6S1k1amtEY3orZWp2SzNsR1JmY0JydXZmdlJBQ3Npb0pxRG1KNlgxUXBmZ01VZTZ6aCt1TzBvS3hKckplUFEramhNZnptZHpXZHNwZ3ZyTUVsYzRZQXE5dWxvWjlqQ29aUG5LVWozSVBsSWFrNEhLU3QrRDUrN1NNZkQ3YUhEd1lxS2p5VVhvNWxqdmFsK1pReXBVc0Y4dlJvcnJNdFByclRRVGRPVTFIcjVyRCtWOEpLaWhEY3owSlZJWmlXbDNtREtadnVIcUhCcEZISFFNZVBuTS9ZTXp1cFFUZVdxQUhYK28zcXVwcEdXNVRoM25KTnNPL0lGWWJBbVk5aXFRa3hSR3RDdjF2Y3dlc3FSWUpwTGlnMlNPOTZ4ZXdXWDBZZ3FGZStGTTF1SEZXdG5vR1NwNGdxY3poMEg0ZFhCM1pBUUg0ZXlKZS9qbXV1eDk5QnF4clU2VkV5Nm05Nm1GV1BlNklWbXpSdWplSkhxekc0bDRKdi9MTVp0dHpiaWV6R01NcHpGcC9Obm9XcTFjc3JXbnoyZFJ1WkhmM3c0ZXlMS0pkNm5IT3k5QjlkaDZKRHg2RHVnR3dNdkFkcVBZMGZQb3ZZOVRibHBZZ0loMk5XRVZudnZvT3NSQkZucEZUSTZySWtIME8rRFlsZ3l6WVZ0cyt4d3NhdEJiYjN3bGVDZ1dwYndKZzI3RDZ4bm10SE1SUjZCM2J1T1lkNzhDYWhicHhuSEwyVEJrV1hGeDUrOWdVcVZ5N0Z3d0NkZjg0WjM3Rm1obm9uVXVsVm5mTDlsSHdFbXdlNlJlamowNjJtMmpyYkJ0cDgyb0V6Sm11UXRXVEZuL2hpeUxXL0Q4OTM3c2VOL056cDFlWkxPMkFMTW1UY1ZoZU5xd1JwaHhMNkRYMkVJUnlQMjcvY1NYbmw1RlBiczIwb3o4QkZlSC9rV3BrOVp3TS9pZ2dwaFFDRnc5YkpnbHdKWXgrNk1ibk1URUZ2QWlkZWFIb0l4SzQ3SkVHMURoRFhBMG1VdmZVT2R1cllsRS9KcHZESmdPSm1RL1ZHeFFtMzhzdmRyU3A4WHJ3MGVqWTlucjhDQ0wvNk55bFhLbzNTeE9wZ3dpWTVVNHpzWUNpMUU4MllQb1ZLRkJoZzNjUUJhdE9Sejdkbk4vOFFUeitDOUQ5NUM1VnNhVUxyTitHWC9hdFczOU56VHI2b3VSSmtPWC9XT0lwajM2YnNvVWFpT0l2RWRQTG9KZzE4YnhjL3ZpVkVqSitIVTZTT1lNR0U4aGcyWmdKbnZMMUdrdmVzRmNEWit3NWoxNVRrdGFCdU9yeXBDVXlQcHpNRElxSENXWU9tUWs2ckp6bCsrWVlZcWpTcVhRNy90SmxTclVwOFBxODVpcUZPV3pkeXpzT0N6TlNpZUdNY203aVNVU2F5TlhmdldJaU9kRFZ1cy85cVl1aXhScENyZW5Ed2NMVm8wUmNkblhzVGJVOGFxVnRNS3Blc1NVQXUxd3hvY08zWWNkV3Uxb2dSYXVFQU8zRk9yT21iT0dZdkV3alZwMy9VNGN2d0hTdTV3REJyU2d3YkFSb2tGeVhzN0dGTjNKSEdlRHhQd1hwdGVwbk1sV0QySmp2c3F1c28rREJyM0lMbzBXUU5yWmtIdHdSNEI4bUNZU3JDbTRpUlpVYkNJSFY5OXZSUnQvdFdSRHBHRjB2a3lZbGpBUDNya21CcHdWcVpzTWF4WitRMWkrYnRiT2NTN2E1ZmVlR2ZLYUxScTNsVjE5OC80NkUxczNib0R2eDAvU1J2OEFFcVh1QXRmYjFxRUFnWHRTQ3JiR0M0K1Y2ZjY3ZVh3MGNlanVTaG1uUGp0REFvWEtZZ2lDVld3NThBM3FoSGM2OHNncGRhT2l1WHJZUHZPTlZqMCtUb002RGVTRzRHOFZEWm5YOHNqK09SVWlmVEZvZlQ0cy9IOHRCS1lOblFGSFB1cnM5SWtEeGFsWXhob2Z3MVBnSlgzekZJQkhaazdhMVJDWkZRazFxLzlucWxGRHhJS1J4Q1F5b3BIcGVPSWhzTkhmc0ZQMjVpUGJWQ2JGQlVydS9UVCtXZzdZTVdTSDVSNlQ2cGNBaVdLbDhEaFEwZFZDWEhGMHMwa0FmalVxS1VWU3pkd3BCS2Y1OEJKOE5GNWZPUlF0K09rQUIrK1dMS0t3MWxPd0d6TlF2c25udUJqQUR4VXd3dVFsZWxGb3dkcWNGcEFLcmIrZDdmeTNLOTkvVmlrVmxLVjB1WmhrMlFBQUFVY1NVUkJWSWRsaE1Pd0IwUGZiNFdCSFpaeENGdzhDeERCY0U0TEk4TVBZSlZvME1ZR2FrVWZBWklkN3VxSktrNTA3UGcwVnE1YWh0K09uYUVONWxQTmRHZmg1YkJRNFdDVktsMkNaN09VUnZyS2ptMzdFWnMzZ28vZ2tZZHpSSEwrWkJ5ZEpUMTIvbnlBbWtBZVlTL2VjeXJhdHVtQTdUOXR4N1lmZHhGNFBWN3MrUVRlR1BjdU0wT1JxTi93Ym82RXlNREdqWnRRTUw0a0ltd21aR1FtODI5MkhQejFtRkxsSmlPTDc5ZndVTTlEWmxJREhMQ2k1OFNnNkdKN2tPeWdPVHAxQzZjSXVkVVlLYW1jQmNudzRRZXcybmEvajJmSWFYQTJKR1BMZDZzNURxa0pDaVRFb0dYTEZ2ajM1SG1ZTVdzQ1ZxNWNqWTBiZnVBdzBSM1l1WHNqeXBlNVc2bm5EZDhzUSt2SG5zS0pvMDY4Ky81Z2VzazlNWFhxdStqVmN5Q09IVTZuOC9ZNC9qM2xUYXhldXhpdEgzMGEzMnhheWRDclBQYnUzWW1PVC9mQjJyVnJlRTVyN045N1VublhOV3JlaWpXcnYrRVk0Z0tLdlhYa3lCRnVybXRQbE5ja21IeG9zd3NQdGFtQytiTy9aaDNZeGdTT2xZUERVMGtHaUpiZ0tVd2xXTHNzelNPVml3d1EwMHVVc1RNYjFSdGRueDNLR084TXR2KzhHcFhvQmVjcm9GYzlSMVVxMXVjNFFqM2o1WlgwbXU5WFRXVUpCVzJZTjIrT3lsUzk5OUV3c2pabWNyVGhSTnhhdVRaVGV3V1luK1pqL0t3WitIblhlc2JMTlNpcDYxRHJyaGJZL1AweVZLOTZyOUlpaTVaT1E3czJ6OU5VVkVlTFZ2VXhlZUpISFAyd1Q1a0ltWCtaUXd1NlJsSXNsU1ExVWxndFRTb3NOaHZjZkh5YmdScEpocFY2NWZtTWZQYUFsQlBEVTBWZllxR2tPdVR5SDhLaVJaK2dlZE91YkEzTm91UDFLV2RkcmNSenozWEVqei8raUpkNjlNV3BFdzdsQkNXVnI0VlBQcCtNU0dzaHhDWFlVYmxpTGNhMDc2TEhDLzJ3ZFBrbnFGV2pOVFZZTlBFN3pYQnBBcnAzN2EwR3RtemIvaDFEclVyc2ZQZ1o1Y3JVUXR2MlRlbk1KV1A1a3MxMHRMSm8yMTNZcy8rL0tGZTZKbDhmeVUwb3plS2hQNnpxR3UyQjh6NG1QRlgwUlN2QkhjbUgzZ3djOUFJMmI5bU1idDA3b2htVEZhTkdqRUh2UGkrek96OEtuMzAyRy9YcnRjQzNQeXhEdGNvTjBQYkpwdmg0MWhvVUttckgrUEVUY1RiNUdOdEQrNkpucjg0NGNpZ1puMzI2R3AycGZoMnVORFZ1YU82Y2VSZzlaaERlZVdjYU9uTEkrSXozRjdFTjlYYWNZVmJyNTU4TzRxRm05MlBUTnh0eGY1TzY2TktwdjdLQjZuRnpPYTB2MXdPK0szOW1yZ0JZMkJiaTlSdm8vWll1bXgrelprOUZWWUpvTWZOSlpES05sVWwxVWNrNnNVdDhZcGlmNCt6MWZGcVlKbVhhZERzRGt4ZFNOWklabEQ2MjNlbWxWVlE5cGtZYXo0VFNJVFZrNFdxUkpFK0hUZEtpZnM2b1VsTjNwSmd1L2JZYyttR2dJOGFFYnlBZnJiSWJWMTdsNjNoR3JnQllaZGNES1VCSmZzaUNwNmFsSWlwU25JbkF5S09jTkdIQWhpc25Rd2hYakprSXZsc2VFRTN3WmRxT0dseXFSaVVGUTRwZ3kwcUF4aU92MVBnOUN0aWNRNmJWNWd3RkQvODJsMXhqZzFXcFVJMEMxbUpmR1hIa2NRdUpXUlpaZTBxWXBpcmwzM0t1MW1nR2t0SVVJRlNsZm40ZlBiWTNYdTQvVXMyUFV1OFhITGFTODlnNHhjRFROa2JPMzROZGgwS2NGOGRLdWhMbHMwWDZOY2tQNXlOM1NQQmZYVUdDOWVpL0hzVHdVYjNvT1R1WWthckhvV2wyOVJqN2NBZm9MOTk2K09haS8rcXRuZjk2c2JlM3NoejQvZmYvSlY5YTVsQUdHdEJDZk1qRjMzczExKzdkYmc0SlZ1c1pzTGRLcld1cDBKdmh1QWtBRG1PcXpUWFlZVGNQd0RrekxZTzl3Ym5EQy82cmUrQW1BUGl2TGxIdWZYMnU0V1RsM2lXK3ZsZXVBcjZieFl1K3ZrdDlmVDc5SDRDdno3cGZzMC85QitCcnR0VFgvb01FWEIrSHdmMFA4N3ZQUUhUb09vVUFBQUFBU1VWT1JLNUNZSUk9IiwKICAicHJlbWl1bSI6ICJmIiwKICAiYWt0aWYiOiAidCIsCiAgImFkYXB0ZXIiOiAiZGlyZWN0IiwKICAiYWxwaGFfMl9jb2RlIjogIlNQIiwKICAiaGVhZGVyX2lwdHYiOiAie1wiUmVmZXJlclwiOlwibm9uZVwiLFwiT3JpZ2luXCI6XCJub25lXCIsXCJVc2VyLUFnZW50XCI6XCJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0OyBydjoxMjEuMCkgR2Vja28vMjAxMDAxMDEgRmlyZWZveC8xMjEuMFwifSIsCiAgInBpbm5lZCI6ICJ0IiwKICAidXJsX2xpY2Vuc2UiOiAiZDMxZTBlZTYwZTAzNGUyMjhlN2YyMTk2NTBjMGQ2ZTI6YzUwYzI0N2Q1YTM0YzFmYmQ1NjVhZDMxODg2Mjg3Y2IiLAogICJuYW1lc3BhY2UiOiAiQ0gxIEFGQyBBc2lhbiBDdXAgMjAyNCIsCiAgImhlYWRlcl9saWNlbnNlIjogIntcIngtZGF0YVwiOlwibm9uZVwifSIsCiAgInBsYXRmb3JtIjogIlt3ZWJdIgp9';
var _idIptv = "408";
var _idEvent = '0';
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

// Fungsi untuk membangun ulang player
function rebuildPlayer(encodedData, url, event) {
  if (_isIframe) return;

  // Sembunyikan embed YouTube
  $("#embed_youtube").hide().html('');

  // Decode data channel/event
  const data = JSON.parse(atob(encodedData));

  // Update history dan judul halaman
  window.history.pushState({ pageTitle: data.nama_channel + " - Duktek TV" }, '', url);
  if (event != null && typeof event !== "undefined") {
    event.preventDefault();
  }

  // Atur judul dokumen
  if (typeof data.nama_event === "undefined") {
    document.title = "Live Streaming " + data.nama_channel;
  } else {
    document.title = `${data.player_1} VS ${data.player_2} - Live Streaming ${data.nama_event}`;
  }

  // Jika dalam iframe, kirim pesan ke parent
  if (window.top !== window.self) {
    const message = {
      title: document.title,
      path: url.replace("https://" + _initHostname, ''),
      type: "changeUrl"
    };
    const referrer = new URL(document.referrer);
    window.parent.postMessage(JSON.stringify(message), "https://" + referrer.hostname);
  }

  // Jika tipe adalah "events"
  if (_type === "events") {
    const startTime = new Date(data.jadwal_event).getTime();
    const stopTime  = new Date(data.jadwal_stop).getTime();
    const now       = new Date().getTime();

    const timeUntilStart = startTime - now;
    const timeUntilStop  = stopTime - now;

    // Event belum dimulai
    if (timeUntilStart > 0) {
      if (_playerInstance) _playerInstance.remove();
      jwplayer("player").remove();
      _playerInstance = null;

      // Tentukan background sesuai event
      let bgImage = "https://cdn.jsdelivr.net/gh/nafkid2023/web/img/jis.jpg";
      if (data.nama_event.toLowerCase() === "caf africa cup of nations") {
        bgImage = "https://www.cafonline.com/media/gdgf5rol/agxswzwn76qqeum51its.png";
      } else if (data.nama_event.toLowerCase() === "afc asian cup") {
        bgImage = "https://production.togglestatic.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&Quality=85&ImageId='7196980'&EntityType='LinearSchedule'&EntityId='ec37b5b7-1bec-46ce-9367-d0b37c5029ac'&Width=1080&Height=608&ResizeAction='fill'&HorizontalAlignment='center'&VerticalAlignment='top'";
      } else if (data.nama_event.toLowerCase() === "english premier league") {
        bgImage = "https://cdnuploads.aa.com.tr/uploads/Contents/2021/08/13/thumbs_b_c_d391bd815724afbe9b49e0879b86ff38.jpg?v=210138";
      } else if (data.nama_event.toLowerCase() === "spanish la liga") {
        bgImage = "https://www.pointspreads.com/wp-content/uploads/2023/07/2024-la-liga-betting-predictions.jpg";
      }

      $("#player_wrapper").attr("style", 
        `background-image:linear-gradient(rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.9) 100%), url(${bgImage});
         background-repeat:no-repeat;background-size:cover;background-position:center center;`);

      // Tampilkan countdown kickoff
      let timerHtml = `
        <div style="margin-bottom:8px;font-size:30px;">${_countDownPlay(data.jadwal_event)}</div>
        <div>${data.player_1}&nbsp;<img style="max-width:20px!important;border-radius:2px!important" alt="${data.player_1}" src="${data.logo_1}" height="15px" />&nbsp; vs &nbsp;<img style="max-width:20px!important;border-radius:2px!important" alt="${data.player_2}" src="${data.logo_2}" height="15px" />&nbsp;${data.player_2}</div>
        <div style="font-size:15px!important;margin-top:8px;">Kickoff ${_date(data.jadwal_event)} ${_time(data.jadwal_event)}</div>
      `;
      $("#timer").html(timerHtml).show();

      // Update countdown setiap 500ms
      _intervalPlay = setInterval(function () {
        const remaining = new Date(data.jadwal_event).getTime() - new Date().getTime();
        if (remaining <= 0) {
          $('.list_event').each(function () {
            if (data.id_event == $(this).attr("data-id")) {
              $(this).trigger('click');
              _reformatTime();
              clearInterval(_intervalPlay);
            }
          });
        }
        $("#timer").html(timerHtml);
      }, 500);

      return false;
    }

    // Event sudah berakhir
    if (timeUntilStop <= 0) {
      if (_playerInstance) _playerInstance.remove();
      jwplayer("player").remove();
      _playerInstance = null;

      // Background sesuai event
      let bgImage = "https://cdn.jsdelivr.net/gh/nafkid2023/web/img/jis.jpg";
      if (data.nama_event.toLowerCase() === "caf africa cup of nations") {
        bgImage = "https://www.cafonline.com/media/gdgf5rol/agxswzwn76qqeum51its.png";
      } else if (data.nama_event.toLowerCase() === "afc asian cup") {
        bgImage = "https://production.togglestatic.com/shain/v1/dataservice/ResizeImage/$value?Format='jpg'&Quality=85&ImageId='7196980'&EntityType='LinearSchedule'&EntityId='ec37b5b7-1bec-46ce-9367-d0b37c5029ac'&Width=1080&Height=608&ResizeAction='fill'&HorizontalAlignment='center'&VerticalAlignment='top'";
      } else if (data.nama_event.toLowerCase() === "english premier league") {
        bgImage = "https://cdnuploads.aa.com.tr/uploads/Contents/2021/08/13/thumbs_b_c_d391bd815724afbe9b49e0879b86ff38.jpg?v=210138";
      } else if (data.nama_event.toLowerCase() === "spanish la liga") {
        bgImage = "https://www.pointspreads.com/wp-content/uploads/2023/07/2024-la-liga-betting-predictions.jpg";
      }

      $("#player_wrapper").attr("style", 
        `background-image:linear-gradient(rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.9) 100%), url(${bgImage});
         background-repeat:no-repeat;background-size:cover;background-position:center center;`);

      // Tampilkan pesan pertandingan berakhir
      let timerHtml = `
        <div style="margin-bottom:8px;font-size:30px;">The Match has Ended</div>
        <div>${data.player_1}&nbsp;<img style="max-width:20px!important;border-radius:2px!important" alt="${data.player_1}" src="${data.logo_1}" height="15px" />&nbsp; vs &nbsp;<img style="max-width:20px!important;border-radius:2px!important" alt="${data.player_2}" src="${data.logo_2}" height="15px" />&nbsp;${data.player_2}</div>
        <div style="font-size:15px!important;margin-top:8px;">Please watch other matches!</div>
      `;
      $("#timer").html(timerHtml).show();

      // Update setiap 500ms
      _intervalPlay = setInterval(function () {
        const remaining = new Date(data.jadwal_event).getTime() - new Date().getTime();
        if (remaining <= 0) {
          $(".list_event").each(function () {
            if (data.id_event == $(this).attr("data-id")) {
              $(this).trigger("click");
              _reformatTime();
              clearInterval(_intervalPlay);
            }
          });
        }
        $("#timer").html(timerHtml);
      }, 500);

      return false;
    } else if (_intervalPlay) {
      clearInterval(_intervalPlay);
    }
  }

  // Reset timer
  _intervalPlay = null;
  $("#timer").hide();

  // Setup ulang JWPlayer
  const playerWidth  = document.getElementById("player_wrapper").clientWidth;
  const playerHeight = document.getElementById("player_wrapper").clientHeight;

  if (_playerInstance) _playerInstance.remove();
  jwplayer("player").remove();
  _playerInstance = jwplayer("player");

  // Setup berdasarkan jenis stream
  if (data.jenis === 'hls') {
    _playerInstance.setup({
      playlist: [{
        title: data.nama_channel,
        sources: [{
          default: false,
          file: data.url_iptv,
          label: '0'
        }]
      }],
      width: playerWidth + 'px',
      height: playerHeight + 'px',
      advertising: {
        client: 'vast',
        schedule: _vastScheduler()
      },
      aspectratio: '16:9',
      primary: "html5",
      setFullscreen: true,
      displaytitle: true,
      autostart: true,
      image: "https://cdn.jsdelivr.net/gh/nafkid2023/web/img/jis.jpg",
      logo: {
        file: "/engine/pwa/img/duktek-sports-black.png",
        link: 'https://' + _initHostname,
        position: 'top-right',
        hide: "false"
      },
      cast: {},
      sharing: { sites: ["reddit", "facebook", "twitter"] },
      skin: {
        controlbar: {
          background: 'rgba(0,0,0,0)',
          icons: "rgba(255,255,255,1)",
          iconsActive: '#FFFFFF',
          text: "#FFFFFF"
        },
        menus: {
          background: '#333333',
          text: 'rgba(255,255,255,0.8)',
          textActive: "#FFFFFF"
        },
        timeslider: {
          progress: "#F2F2F2",
          rail: "rgba(255,255,255,0.3)"
        },
        tooltips: {
          background: "#FFFFFF",
          text: "#000000"
        }
      }
    }).on("ready", function () {
      _isFullScreen = jwplayer().getFullscreen();
    }).on("error", function () {
      $('.jw-error-text').html("An unexpected error occurred, always use Chrome Browser or UC Browser !!!");
      setTimeout(function () {
        console.log('Replaying');
        _reloadOnError();
      }, 3000); // 0xbb8 = 3000 ms
    });

  } else if (data.jenis === "dash-clearkey") {
    const licenseParts = data.url_license.split(':');

    if (navigator.onLine) {
      // Jika online, gunakan iframe player eksternal
      const iframeUrl = "https://duktek-player.blogspot.com/?v=" + 
        btoa(btoa(btoa(data.url_iptv) + ':' + btoa(licenseParts[0]) + ':' + btoa(licenseParts[1])));
      const iframeHtml = `<iframe width="100%" height="100%" src="${iframeUrl}&amp;controls=0" 
                          title="${data.nama_channel} - Duktek TV" frameborder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          allowfullscreen></iframe>`;
      $("#embed_youtube").html(iframeHtml).show();
    } else {
      // Jika offline, gunakan JWPlayer dengan DRM ClearKey
      _playerInstance.setup({
        playlist: [{
          title: data.nama_channel + " - Duktek TV",
          sources: [{
            default: false,
            file: data.url_iptv,
            type: "dash",
            drm: {
              clearkey: {
                keyId: licenseParts[0],
                key: licenseParts[1]
              }
            },
            label: '0'
          }]
        }],
        width: playerWidth + 'px',
        height: playerHeight + 'px',
        advertising: { client: "vast", schedule: _vastScheduler() },
        aspectratio: '16:9',
        primary: 'html5',
        setFullscreen: true,
        displaytitle: true,
        autostart: true,
        image: "https://cdn.jsdelivr.net/gh/nafkid2023/web/img/jis.jpg",
        logo: {
          file: "/engine/pwa/img/duktek-sports-black.png",
          link: "https://" + _initHostname,
          position: "top-right",
          hide: 'false'
        },
        cast: {},
        sharing: { sites: ["reddit", "facebook", "twitter"] },
        skin: {
          controlbar: { background: 'rgba(0,0,0,0)', icons: "rgba(255,255,255,1)", iconsActive: "#FFFFFF", text: '#FFFFFF' },
          menus: { background: "#333333", text: 'rgba(255,255,255,0.8)', textActive: '#FFFFFF' },
          timeslider: { progress: '#F2F2F2', rail: 'rgba(255,255,255,0.3)' },
          tooltips: { background: "#FFFFFF", text: "#000000" }
        }
      }).on("ready", function () {
        _isFullScreen = jwplayer().getFullscreen();
      }).on("error", function () {
        $(".jw-error-text").html("An unexpected error occurred, always use Chrome Browser or UC Browser !!!");
        setTimeout(function () {
          console.log('Replaying');
          _reloadOnError();
        }, 3000);
      });
    }

  } else if (data.jenis === "dash-widevine") {
    // DRM Widevine dengan headers
    const headers = [];
    for (let key in data.header_license) {
      headers.push({ name: key, value: data.header_license[key] });
    }

    _playerInstance.setup({
      playlist: [{
        title: data.nama_channel + " - Duktek TV",
        sources: [{
          default: false,
          file: data.url_iptv,
          type: "dash",
          drm: {
            widevine: {
              url: data.url_license,
              headers: headers
            }
          },
          label: '0'
        }]
      }],
      width: playerWidth + 'px',
      height: playerHeight + 'px',
      advertising: { client: "vast", schedule: _vastScheduler() },
      aspectratio: "16:9",
      primary: "html5",
      setFullscreen: true,
      displaytitle: true,
      autostart: true,
      image: "https://cdn.jsdelivr.net/gh/nafkid2023/web/img/jis.jpg",
      logo: {
        file: "/engine/pwa/img/duktek-sports-black.png",
        link: 'https://' + _initHostname,
        position: "top-right",
        hide: "false"
      },
      cast: {},
      sharing: { sites: ["reddit", "facebook", 'twitter'] },
      skin: {
        controlbar: { background: "rgba(0,0,0,0)", icons: 'rgba(255,255,255,1)', iconsActive: "#FFFFFF", text: "#FFFFFF" },
        menus: { background: "#333333", text: "rgba(255,255,255,0.8)", textActive: "#FFFFFF" },
        timeslider: { progress: "#F2F2F2", rail: "rgba(255,255,255,0.3)" },
        tooltips: { background: "#FFFFFF", text: '#000000' }
      }
    }).on("ready", function () {
      _isFullScreen = jwplayer().getFullscreen();
    }).on("error", function () {
      $(".jw-error-text").html("An unexpected error occurred, always use Chrome Browser or UC Browser !!!");
      setTimeout(function () {
        console.log("Replaying");
        _reloadOnError();
      }, 3000);
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
        $("#player_wrapper").attr("style", "background-image:linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%), url(https://cdn.jsdelivr.net/gh/nafkid2023/web/img/jis.jpg);background-repeat:no-repeat;background-size:cover;background-position:center center;");
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
          $('#player_wrapper').attr("style", "background-image:linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%), url(https://cdn.jsdelivr.net/gh/nafkid2023/web/img/jis.jpg);background-repeat:no-repeat;background-size:cover;background-position:center center;");
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
      'image': 'https://cdn.jsdelivr.net/gh/nafkid2023/web/img/jis.jpg',
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
      $(".jw-error-text").html("An unexpected error occurred, <span class=\"jw-break jw-reset\"></span>always use <strong>Chrome Browser</strong> or <strong>UC Browser</strong> !!!");
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
	// Event handler untuk klik pada daftar channel
	$(".list_channel").off("click").on("click", function (event) {
		// Ambil atribut dari elemen yang diklik
		const channelUrl = $(this).attr("data-url");
		const iptvData   = $(this).attr("data-iptv");
		const channelId  = $(this).attr("data-id");

		// Simpan data ke variabel global
		_currData    = iptvData;
		_loopCounter = 0;              // reset counter
		_type        = 'livetv';       // set tipe ke live tv
		_idIptv      = channelId;

		// Reset tampilan aktif
		$(".list_channel").removeClass("active");
		$(".list_event").removeClass("active");
		$(this).addClass("active");

		// Hentikan interval play jika ada
		if (_intervalPlay != null) {
			clearInterval(_intervalPlay);
		}

		// Reset style font-weight untuk nama channel
		$(".nama_channel").css("font-weight", "400");
		$(this).find(".nama_channel").css("font-weight", "500");

		// Reset style font-weight untuk event
		$(".list_event").removeClass("active");
		$(".nama_event").css("font-weight", "400");
		$(".player_event").css("font-weight", "400");

		// Bangun ulang player dengan data channel yang dipilih
		_rebuildPlayer(iptvData, channelUrl, event);

		// Tampilkan banner kotak (iframe disisipkan dari base64)
		$("#banner-kotak").html(atob(
			"PGlmcmFtZSB0aXRsZT0iTWlkZGxlIEJhbm5lciIgYWxsb3d0cmFuc3BhcmVuY3k9InRydWUiIHNjcm9sbGluZz0ibm8iIGZyYW1lYm9yZGVyPSIwIiBmcmFtZXNwYWNpbmc9IjAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiBzcmM9Ij9pZnJhbWU9bGFyZ2UiPjwvaWZyYW1lPg=="
		));

		// Cegah aksi default (misalnya navigasi link)
		event.preventDefault();
	});

	// Event handler untuk klik pada daftar event
	$(".list_event").off("click").on("click", function (event) {
		// Ambil atribut dari elemen yang diklik
		const eventUrl   = $(this).attr("data-url");
		const iptvData   = $(this).attr("data-iptv");
		const parsedData = JSON.parse(atob(iptvData));

		// Simpan data ke variabel global
		_currData    = iptvData;
		_idIptv      = parsedData.id_iptv;
		_idEvent     = parsedData.id_event;
		_loopCounter = 0;              // reset counter
		_type        = 'events';       // set tipe ke events

		// Hentikan interval play jika ada
		if (_intervalPlay != null) {
			clearInterval(_intervalPlay);
		}

		// Reset tampilan aktif untuk event
		$(".list_event").removeClass("active");
		$(this).addClass("active");

		// Atur style font-weight untuk nama event & player
		$(".nama_event").css("font-weight", "400");
		$(this).find(".nama_event").css("font-weight", "500");

		$(".player_event").css("font-weight", "400");
		$(this).find(".player_event").css("font-weight", "500");

		// Sisipkan script analytics (Google Tag Manager) dari base64
		$("#analytics").html(atob(
			"PCEtLSBHb29nbGUgdGFnIChndGFnLmpzKSAtLT4KPHNjcmlwdCBhc3luYyBzcmM9Imh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry1ORjBCVzRRMkRHIj48L3NjcmlwdD4KPHNjcmlwdD4KICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTsKICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9CiAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTsKCiAgZ3RhZygnY29uZmlnJywgJ0ctTkYwQlc0UTJERycpOwo8L3NjcmlwdD4="
		));

		// Tandai channel yang sesuai dengan event
		$(".list_channel").each(function (index) {
			if ($(".list_channel").eq(index).attr('data-id') === parsedData.id_iptv) {
				$(".list_channel").removeClass("active");
				$(".nama_channel").css("font-weight", "400");

				$(".list_channel").eq(index).find(".nama_channel").css("font-weight", "500");
				$(".list_channel").eq(index).addClass("active");
			}
		});

		// Bangun ulang player dengan data event yang dipilih
		_rebuildPlayer(iptvData, eventUrl, event);

		// Tampilkan banner kotak (iframe disisipkan dari base64)
		$("#banner-kotak").html(atob(
			"PGlmcmFtZSB0aXRsZT0iTWlkZGxlIEJhbm5lciIgYWxsb3d0cmFuc3BhcmVuY3k9InRydWUiIHNjcm9sbGluZz0ibm8iIGZyYW1lYm9yZGVyPSIwIiBmcmFtZXNwYWNpbmc9IjAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiBzcmM9Ij9pZnJhbWU9bGFyZ2UiPjwvaWZyYW1lPg=="
		));

		// Cegah aksi default (misalnya navigasi link)
		event.preventDefault();
	});

  
  
	// Event handler untuk tombol copy
	$(".copy_button").off("click").on("click", function (event) {
		// Ambil atribut dari elemen yang diklik
		const url  = $(this).attr("data-url");
		const info = $(this).attr("data-info");

		// Jika ada data-info, decode dari base64 lalu copy
		if (typeof info !== "undefined" && info !== false) {
			_copy("📌 " + atob(info));
		} else {
			// Jika tidak ada data-info, copy langsung URL
			_copy(url);
		}

		// Cegah aksi default (misalnya navigasi link)
		event.preventDefault();
	});

  
  
	// Ambil path dari URL
	const currentPath = window.location.pathname;

	// Pisahkan path berdasarkan tanda "-"
	const pathParts = currentPath.split('-');

	if (currentPath === '/') {
		// Jika berada di halaman root "/", pilih channel acak
		const totalChannels = $(".list_channel").length - 1;
		const randomIndex   = Math.floor(Math.random() * totalChannels);

		// Trigger klik pada channel acak
		$(".list_channel").eq(randomIndex).trigger("click");

	} else {
		// Jika path dimulai dengan "live-match"
		if (currentPath.substr(1, 10) === "live-match") {
			const targetId = pathParts[2];
			const targetPanel = $(".list_event[data-id='" + targetId + "']").attr("data-target");

			// Trigger klik pada event dan panel terkait
			$(".list_event[data-id='" + targetId + "']").trigger("click");
			$(".button_panel[data-target='" + targetPanel + "']").trigger("click");

		} else if (currentPath.substr(1, 7) === "live-tv") {
			// Jika path dimulai dengan "live-tv"
			const targetId = pathParts[2];
			const targetPanel = $(".list_channel[data-id='" + targetId + "']").attr("data-target");

			// Trigger klik pada channel dan panel terkait
			$(".list_channel[data-id='" + targetId + "']").trigger("click");
			$(".button_panel[data-target='" + targetPanel + "']").trigger("click");
		}
	}

};


$(document).ready(function () {
 if(_isIframe) {
	// Jika dijalankan dalam iframe
	let bannerHtml = `
	  <a style="text-decoration:none;" 
		 href="https://play.google.com/store/apps/details?id=com.live_streaming_tv.online_tv" 
		 data-href="https://play.google.com/store/apps/details?id=com.live_streaming_tv.online_tv" 
		 title="Download BitTV on Play Store." target="_blank">
		<div style="width:300px;height:250px;border:0px solid;
					background-image:url(https://cdn.jsdelivr.net/gh/nafkid2023/web/img/banner-kotak-gplay.png);
					background-repeat:no-repeat;background-position:0px 0px;
					background-size:300px 250px;">&nbsp;</div>
	  </a>
	  <img src="//sstatic1.histats.com/0.gif?4842598&101" alt="" style="display:none;" border="0">
	`;
	$('body').html(bannerHtml);

	// Blokir klik kanan → buka iklan
	window.parent.document.oncontextmenu = function () {
	  window.open('https://gillspaste.com/ah6mpfpr?key=4f96b6473c1da3d55814c78c1ca4a8ae', "_blank");
	  return false;
	};
	document.oncontextmenu = function () {
	  window.open("https://play.google.com/store/apps/details?id=com.live_streaming_tv.online_tv", "_blank");
	  return false;
	};

	// Overlay klik → buka iklan
	window.parent.$("#overlay").off("click").on("click", function (event) {
	  window.parent._iklanIsCountdown = false;
	  $(this).hide();
	  window.open('https://gillspaste.com/ah6mpfpr?key=4f96b6473c1da3d55814c78c1ca4a8ae', '_blank');
	  event.preventDefault();
	});

	// Cek apakah ada event aktif untuk menampilkan iklan
	let enableAds = false;
	const eventsList = window.parent._listEvents;
	for (let i = 0; i < eventsList.length; i++) {
	  const startTime = new Date(eventsList[i].jadwal_event).getTime();
	  const stopTime  = new Date(eventsList[i].jadwal_stop).getTime();
	  const now       = new Date().getTime();

	  if (startTime <= now && stopTime > now) {
		enableAds = window.parent._enableAds;
		break;
	  }
	}

	// Fungsi untuk menambahkan kelas random dan trigger iklan
	function triggerAds() {
	  if (!enableAds) return;
	  const randomClass = generateRandomString(10);
	  const bodyElement = window.parent.$("body");

	  bodyElement.addClass(randomClass);
	  window.parent.$("." + randomClass).off("click").on("click", function () {
		bodyElement.removeClass(randomClass);
		window.open('https://gillspaste.com/ah6mpfpr?key=4f96b6473c1da3d55814c78c1ca4a8ae', "_blank");
		bodyElement.off("click");
	  });
	}

	// Fungsi untuk membuat string random
	function generateRandomString(length) {
	  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	  let result = "";
	  for (let i = 0; i < length; i++) {
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	  }
	  return result;
	}

	triggerAds();

  } else {
	// Jika bukan iframe → deteksi lokasi via Cloudflare trace
	$.get("https://1.1.1.1/cdn-cgi/trace", {}, function (response) {
	  const lines = response.split("\n");
	  let locale = "en";
	  let redirectUrl = "";

	  for (let i = 0; i < lines.length; i++) {
		const parts = lines[i].split("=");
		if (parts[0] === "loc") {
		  locale = parts[1].toLowerCase();
		  break;
		}
	  }

	  // Sesuaikan teks berdasarkan lokasi
	  if (locale === "id") {
		$("#donasi").html("Traktir Kopi").attr("href", "https://saweria.co/duktek");
		$("#telegram").html("Gabung Channel Telegram");
		$("div[data-target='sports-event']").html("Jadwal");
		$("div[data-target='sports-tv']").html("Olahraga");
		$("div[data-target='live-tv']").html("Hiburan");
	  } else {
		$("#donasi").html("Buy Me a Coffee").attr("href", "https://www.buymeacoffee.com/duktek");
		$("#telegram").html("Join Telegram Channel");
		$("div[data-target='sports-event']").html("Events");
		$("div[data-target='sports-tv']").html("Sports TV");
		$("div[data-target='live-tv']").html("Live TV");
	  }

	  if (["in", "id", "ru"].includes(locale)) {
		redirectUrl = "https://sports.duktek.online/" + locale +
		  "?ref=aHR0cHM6Ly9zcG9ydHMuZHVrdGVrLm9ubGluZS9zZXJ2aWNlLXdvcmtlci5qcw==";
	  }
	});

	// Resize awal
	_onResize(false);

	// Event handler untuk tombol panel
	$(".button_panel").off("click").on("click", function () {
	  const targetId = $(this).attr("data-target");
	  $(".button_panel").removeClass("active");
	  $(".target_panel").removeClass("active");
	  $(this).addClass("active");
	  $("#" + targetId).addClass("active");
	  _onResize(true);
	});

	// Sisipkan Google Analytics dari base64
	$("#analytics").html(atob(
	  "PCEtLSBHb29nbGUgdGFnIChndGFnLmpzKSAtLT4KPHNjcmlwdCBhc3luYyBzcmM9Imh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry1ORjBCVzRRMkRHIj48L3NjcmlwdD4KPHNjcmlwdD4KICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTsKICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9CiAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTsKCiAgZ3RhZygnY29uZmlnJywgJ0ctTkYwQlc0UTJERycpOwo8L3NjcmlwdD4="
	));

	// Sisipkan banner kotak dari base64
	$("#banner-kotak").html(atob(
	  "PGlmcmFtZSB0aXRsZT0iTWlkZGxlIEJhbm5lciIgYWxsb3d0cmFuc3BhcmVuY3k9InRydWUiIHNjcm9sbGluZz0ibm8iIGZyYW1lYm9yZGVyPSIwIiBmcmFtZXNwYWNpbmc9IjAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiBzcmM9Ij9pZnJhbWU9bGFyZ2UiPjwvaWZyYW1lPg=="
	));
  }
});

$("#first-loader").fadeOut("slow");
// Fungsi untuk menyalin teks ke clipboard
function copyToClipboard(text) {
  // Ambil elemen input tersembunyi
  const inputElement = document.getElementById('myInput');

  // Set nilai input dengan teks yang ingin disalin
  inputElement.value = text;

  // Jika dijalankan di dalam iframe, ganti hostname dengan hostname referrer
  if (window.top !== window.self) {
    const referrerUrl = new URL(document.referrer);
    inputElement.value = text.replace(_initHostname, referrerUrl.hostname);
  }

  // Pilih teks di dalam input
  inputElement.select();
  inputElement.setSelectionRange(0, 99999); // 0x1869f = 100,000 → cukup besar untuk memastikan semua teks terpilih

  // Jika di dalam iframe, kirim pesan ke parent window
  if (window.top !== window.self) {
    const message = {
      title: '',
      path: '',
      text: inputElement.value,
      type: "copyToClipboard"
    };
    const referrerUrl = new URL(document.referrer);
    window.parent.postMessage(JSON.stringify(message), "https://" + referrerUrl.hostname);

  // Jika bukan iframe, gunakan API clipboard browser
  } else {
    navigator.clipboard.writeText(inputElement.value);
  }
}



// Fungsi untuk memotong string panjang dengan ellipsis di tengah
function middleEllipsis(text) {
  let result = '';

  // Jika panjang string lebih dari 30 karakter
  if (text.length > 30) {
    // Ambil 10 karakter pertama + "..." + 15 karakter terakhir
    result = text.substr(0, 10) + '...' + text.substr(text.length - 15, text.length);
  } else {
    // Jika tidak terlalu panjang, tampilkan apa adanya
    result = text;
  }

  return result;
}

// Fungsi untuk menampilkan shimmer loading (efek skeleton UI)
function shimmerLoading() {
  let shimmerTvHtml = '';
  let shimmerEventHtml = '';

  // Tambahkan shimmer TV sebanyak 11 kali (0 sampai 10)
  for (let i = 0; i <= 10; i++) {
    shimmerTvHtml += _simmerTv;
  }

  // Tambahkan shimmer Event sebanyak 11 kali (0 sampai 10)
  for (let i = 0; i <= 10; i++) {
    shimmerEventHtml += _simmerEvent;
  }

  // Sisipkan shimmer ke dalam container masing-masing
  $("#sports_tv_container").html(shimmerTvHtml);
  $("#live_tv_container").html(shimmerTvHtml);
  $("#events_container").html(shimmerEventHtml);

  // Reload menu setelah shimmer ditampilkan
  _reloadMenu();
}


var _reloadMenu = function () {
	  if (_isIframe) {
		return;
	  }
	// Ambil data Sports TV dari file JSON
	$.get('https://cdn.jsdelivr.net/gh/nafkid2023/web/json/sportstv.json', {}, function (sportsTvData) {
		let htmlContent = '';

		// Kosongkan container sebelum diisi ulang
		$("#sports_tv_container").html('');

		// Loop semua data channel
		for (let i = 0; i < sportsTvData.length; i++) {
			const channel = sportsTvData[i];

			// Buat slug dari nama channel (lowercase, tanpa spasi/karakter khusus)
			const channelSlug = String(channel.nama_channel)
				.normalize("NFKD")
				.replace(/[\u0300-\u036f]/g, '')   // hapus tanda diakritik
				.trim()
				.toLowerCase()
				.replace(/[^a-z0-9 -]/g, '')       // hapus karakter non-alfanumerik
				.replace(/\s+/g, '-')              // ganti spasi dengan "-"
				.replace(/-+/g, '-');              // hapus duplikasi "-"

			// URL untuk channel
			const channelUrl = `https://${_initHostname}/live-tv-${channel.id_iptv}-${channelSlug}.html`;

			// Tambahkan tombol copy link
			htmlContent += `
			  <div class="event_wrapper">
				<a data-url="${channelUrl}" 
				   href="${channelUrl}" 
				   class="copy_button">&nbsp;</a>
			`;

			// Tambahkan link utama channel
			htmlContent += `
				<a title="${channel.nama_channel}" 
				   data-iptv="${btoa(JSON.stringify(channel))}" 
				   data-target="sports-tv" 
				   class="list_channel ${_idIptv == channel.id_iptv ? "active" : ""}" 
				   data-id="${channel.id_iptv}" 
				   href="/live-tv-${channel.id_iptv}-${channelSlug}.html" 
				   data-url="/live-tv-${channel.id_iptv}-${channelSlug}.html">
				   
				   <div style="height:45px;width:60px;overflow:hidden;border-radius:8px;">
					 <img alt="${channel.nama_channel}" 
						  src="${channel.gbr_base64}" 
						  width="60px" height="45px" />
				   </div>
				   
				   <div style="flex-grow:2; padding-left:10px;">
					 <div>
					   <span style="font-weight:${_idIptv == channel.id_iptv ? "500" : "400"}" 
							 class="nama_channel">${channel.nama_channel}</span>
					 </div>
					 <div><label class="tagline">Online</label></div>
				   </div>
				</a>
			  </div>
			`;
		}

		// Masukkan hasil HTML ke container
		$("#sports_tv_container").html(htmlContent);

		// Inisialisasi fungsi tambahan
		_initDuktekSports();

		// Set posisi scroll sesuai cookie
		document.getElementById('sports_tv_container').scrollTop = getCookie("scroll_position");
	}, 'json');

	// Ambil data Live TV dari file JSON
	$.get('https://cdn.jsdelivr.net/gh/nafkid2023/web/json/livetv.json', {}, function (liveTvData) {
		let htmlContent = '';

		// Kosongkan container sebelum diisi ulang
		$("#live_tv_container").html('');

		// Loop semua data channel
		for (let i = 0; i < liveTvData.length; i++) {
			const channel = liveTvData[i];

			// Buat slug dari nama channel (lowercase, tanpa spasi/karakter khusus)
			const channelSlug = String(channel.nama_channel)
				.normalize("NFKD")
				.replace(/[\u0300-\u036f]/g, '')   // hapus tanda diakritik
				.trim()
				.toLowerCase()
				.replace(/[^a-z0-9 -]/g, '')       // hapus karakter non-alfanumerik
				.replace(/\s+/g, '-')              // ganti spasi dengan "-"
				.replace(/-+/g, '-');              // hapus duplikasi "-"

			// URL untuk channel
			const channelUrl = `https://${_initHostname}/live-tv-${channel.id_iptv}-${channelSlug}.html`;

			// Tambahkan tombol copy link
			htmlContent += `
			  <div class="event_wrapper">
				<a data-url="${channelUrl}" 
				   href="${channelUrl}" 
				   class="copy_button">&nbsp;</a>
			`;

			// Tambahkan link utama channel
			htmlContent += `
				<a title="${channel.nama_channel}" 
				   data-iptv="${btoa(JSON.stringify(channel))}" 
				   data-target="live-tv" 
				   class="list_channel ${_idIptv == channel.id_iptv ? "active" : ""}" 
				   data-id="${channel.id_iptv}" 
				   href="/live-tv-${channel.id_iptv}-${channelSlug}.html" 
				   data-url="/live-tv-${channel.id_iptv}-${channelSlug}.html">
				   
				   <div style="height:45px;width:60px;overflow:hidden;border-radius:8px;">
					 <img alt="${channel.nama_channel}" 
						  src="${channel.gbr_base64}" 
						  width="60px" height="45px" />
				   </div>
				   
				   <div style="flex-grow:2; padding-left:10px;">
					 <div>
					   <span style="font-weight:${_idIptv == channel.id_iptv ? "500" : "400"}" 
							 class="nama_channel">${channel.nama_channel}</span>
					 </div>
					 <div><label class="tagline">Online</label></div>
				   </div>
				</a>
			  </div>
			`;
		}

		// Masukkan hasil HTML ke container
		$("#live_tv_container").html(htmlContent);

		// Inisialisasi fungsi tambahan
		_initDuktekSports();

		// Set posisi scroll sesuai cookie
		document.getElementById("live_tv_container").scrollTop = getCookie("entertainment_scroll_position");
	}, 'json');

  // Ambil data event dari file JSON
	$.get("http://blog.me/iptv/jsondata/duktek-sports-events.json", {'_stamp': btoa(_timeMinute())}, function (eventJsonData) {
		// Kosongkan container sebelum diisi ulang
		$("#events_container").html('');

		// Simpan data event ke variabel global
		_listEvents = eventJsonData;
		console.log(_listEvents);

		let eventHtml = '';
		let jumlahEventAktif = 0;

		if (eventJsonData.length > 0) {
			for (let i = 0; i < eventJsonData.length; i++) {
				const event = eventJsonData[i];

				// Hitung selisih waktu antara sekarang dan jadwal stop
				const jadwalStop = new Date(event.jadwal_stop).getTime();
				const now = new Date().getTime();
				const selisih = jadwalStop - now;

				if (selisih > 0) {
					jumlahEventAktif++;
				}

				// Buat teks untuk tombol copy
				let textEventCopy = `${event.nama_event}\r\n      ${_timePure(event.jadwal_event)} | ${event.player_1} vs ${event.player_2}\r\n`;
				textEventCopy += `      Link: https://dutk.fun/e${event.id_event}`;
				textEventCopy = btoa(textEventCopy);

				// Buat slug URL dari nama event dan nama pemain
				const slugEvent = String(event.nama_event).normalize("NFKD").replace(/[\u0300-\u036f]/g, '')
					.trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
				const slugPlayer1 = String(event.player_1).normalize("NFKD").replace(/[\u0300-\u036f]/g, '')
					.trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
				const slugPlayer2 = String(event.player_2).normalize("NFKD").replace(/[\u0300-\u036f]/g, '')
					.trim().toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');

				const eventUrl = `https://${_initHostname}/live-match-${event.id_event}-${slugEvent}-${slugPlayer1}-vs-${slugPlayer2}.html`;

				// Tambahkan tombol copy link
				eventHtml += `
				  <div class="event_wrapper">
					<a data-url="${eventUrl}" 
					   href="${eventUrl}" 
					   data-info="${textEventCopy}" 
					   class="copy_button">&nbsp;</a>
				`;

				// Tambahkan link utama event
				eventHtml += `
					<a title="${event.nama_event} - ${event.player_1} VS ${event.player_2}" 
					   id="event_${event.id_event}" 
					   data-iptv="${btoa(JSON.stringify(event))}" 
					   data-target="sports-event" 
					   class="list_event ${_idEvent == event.id_event ? 'active' : ''}" 
					   data-id="${event.id_event}" 
					   href="/live-match-${event.id_event}-${slugEvent}-${slugPlayer1}-vs-${slugPlayer2}.html" 
					   data-url="/live-match-${event.id_event}-${slugEvent}-${slugPlayer1}-vs-${slugPlayer2}.html">
					   
					   <div style="width:100%">
						 <div class="nama_event" 
							  style="margin-bottom:3px!important;font-weight:${_idEvent == event.id_event ? "500" : "400"}" 
							  data-name="${event.nama_event}" 
							  data-time="${event.jadwal_event}">
							  <span style="font-weight:500">${event.nama_event}</span>
						 </div>
						 <div class="text_event" 
							  data-url="${eventUrl}" 
							  style="color:#898989;margin-bottom:10px;font-size:12px;text-decoration:none;">
							  ${middleEllipsis(eventUrl)}
						 </div>
						 <div style="display:flex;width:100%;" class="fixture">
						   <div class="child_1" style="flex-grow:2;">
							 <div class="flex" style="display:flex;margin-bottom:10px">
							   <div style="width:15px;height:15px;margin-right:15px;" class="me-3">
								 <img style="max-width:20px!important;border-radius:2px!important" 
									  alt="${event.player_1}" src="${event.logo_1}" height="15px" />
							   </div>
							   <div style="flex-grow:2">
								 <div class="player_event line-1" 
									  style="font-weight:${_idEvent == event.id_event ? "500" : "400"}">
									  ${event.player_1}
								 </div>
							   </div>
							 </div>
							 <div class="flex" style="display:flex">
							   <div style="width:15px;height:15px;margin-right:15px;" class="me-3">
								 <img style="max-width:20px!important;border-radius:2px!important" 
									  alt="${event.player_2}" src="${event.logo_2}" height="15px" />
							   </div>
							   <div style="flex-grow:2">
								 <div class="player_event line-1" 
									  style="font-weight:${_idEvent == event.id_event ? "500" : "400"}">
									  ${event.player_2}
								 </div>
							   </div>
							 </div>
						   </div>
						   <div style="width:100px;text-align:right">
							 <div data-target="#event_${event.id_event}" 
								  class="tanggal_event" 
								  style="font-size:13px;" 
								  data-time="${event.jadwal_event}" 
								  data-stop="${event.jadwal_stop}">&nbsp;</div>
							 <div class="waktu_event" 
								  style="font-size:13px;" 
								  data-time="${event.jadwal_event}">&nbsp;</div>
						   </div>
						 </div>
					   </div>
					</a>
				  </div>
				`;
			}

			// Jika tidak ada event aktif
			if (jumlahEventAktif === 0) {
				eventHtml = `
				  <div class="event_wrapper">
					<div style="margin-top:50px;height:200px;
								background:url(https://cdn.jsdelivr.net/gh/nafkid2023/web/img/no-events.png);
								background-size:auto 100%;background-repeat:no-repeat;background-position:center;">
					</div>
					<div style="text-align:center;font-size:18px;color:#8A8A8A;padding:10px 30px 5px;font-weight:bold;">
					  Oops!, No events for now
					</div>
					<div style="text-align:center;font-size:14px;color:#8A8A8A;padding:0px 30px;">
					  Watch this space for upcoming events!
					</div>
				  </div>
				`;
			}
		} else {
			// Jika tidak ada data event sama sekali
			eventHtml = `
			  <div class="event_wrapper">
				<div style="margin-top:50px;height:200px;
							background:url(https://cdn.jsdelivr.net/gh/nafkid2023/web/img/no-events.png);
							background-size:auto 100%;background-repeat:no-repeat;background-position:center;">
				</div>
				<div style="text-align:center;font-size:18px;color:#8A8A8A;padding:10px 30px 5px;font-weight:bold;">
				  Oops!, No events for now
				</div>
				<div style="text-align:center;font-size:14px;color:#8A8A8A;padding:0px 30px;">
				  Watch this space for upcoming events!
				</div>
			  </div>
			`;
		}

		// Masukkan hasil HTML ke container
		$("#events_container").html(eventHtml);

		// Format ulang waktu event
		_reformatTime();

		// Inisialisasi fungsi tambahan
		_initDuktekSports();

		// Set posisi scroll sesuai cookie
		document.getElementById("events_container").scrollTop = getCookie("event_scroll_position");
	}, "json");

};
_simmerLoading();
// Jalankan fungsi _reloadMenu setiap 7.200.000 ms (2 jam)
setInterval(function () {
  _reloadMenu();
}, 7200000);

// Jalankan fungsi _reformatTime setiap 10.000 ms (10 detik)
setInterval(function () {
  _reformatTime();
}, 10000);
