//Ищем загрузку страницы логина
let loginInterval;
loginInterval = setInterval(() => {
  totop = document.getElementById("to-top");
  console.log(totop);
  if (totop) {
    // Переходим на русский
    str = document.documentElement.outerHTML;
    if (str.indexOf("Кіру") + 1) {
      document.body.innerHTML = document.body.innerHTML.replace(
        'ILinkListener-localeRu"',
        'ILinkListener-localeRu" id="rus"'
      );
      document.getElementById("rus").click();
    }

    signData = "<auth><data>EIYEFZIXHXMYJXW5IAAXTGS5</data></auth>";
    signature = `<?xml version="1.0" encoding="UTF-8" standalone="no"?><auth><data>EIYEFZIXHXMYJXW5IAAXTGS5</data><ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
<ds:SignedInfo>
<ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
<ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"/>
<ds:Reference URI="">
<ds:Transforms>
<ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
<ds:Transform Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315#WithComments"/>
</ds:Transforms>
<ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/>
<ds:DigestValue>LDwQnCDHPCvQC5zZdLO+X8ulZnip+bTyIHgNJZpwB5E=</ds:DigestValue>
</ds:Reference>
</ds:SignedInfo>
<ds:SignatureValue>
fpn1SZKAk0ru24BnVHgB7PAz9NC9P/TbeIitTXmq8Wz5iJs5m9VG87bQJ0u4xoXlHt5Il+xmzKpf
XzyeP3JA+ezW46yMAQ6SS8gwQcn68Tm4FTgm+BAlHAT9vl1azOOLaTNlGfH33jXHXF5XLUuORukX
NwCsON2fsJphV43krmF86oHDqD7vptmuH2Yzc8zKbo7o3NEfWgVi5qqTNupHEzlTyUINbezZAq2c
Wk7Yjla1/nb8b8aXxnr8gbvFC3qostWNX99ChNaXBcr2dAPzoKVbc3yP0ueWTetQ19hG9Qfar/NT
7HR3Oc49Stw6D3XgCUoHRjlZRWeZsRZHI+x8qQ==
</ds:SignatureValue>
<ds:KeyInfo>
<ds:X509Data>
<ds:X509Certificate>
MIIGYTCCBEmgAwIBAgIUQi/VRNQ2SkvAN1f9fK3XuPB4gV8wDQYJKoZIhvcNAQELBQAwUjELMAkG
A1UEBhMCS1oxQzBBBgNVBAMMOtKw0JvQotCi0KvSmiDQmtCj05jQm9CQ0J3QlNCr0KDQo9Co0Ksg
0J7QoNCi0JDQm9Cr0pogKFJTQSkwHhcNMjMxMTI4MDQzODIxWhcNMjYxMTI3MDQzODIxWjCBizEm
MCQGA1UEAwwd0KHQo9Cb0KLQkNCd0J7QkiDQndCj0KDQm9CQ0J0xGTAXBgNVBAQMENCh0KPQm9Ci
0JDQndCe0JIxGDAWBgNVBAUTD0lJTjcxMDUyNDM1MDA0MzELMAkGA1UEBhMCS1oxHzAdBgNVBCoM
FtCW0JDQodCj0JvQkNCd0J7QktCY0KcwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDM
N6ufckcB6BS/ZLEZpnhl9c1rvZ/4V/CZDbyWX9myjXo+eVTjFwqibqdU6HBX+kajQVSjqND0ojvp
lubhxYnL+8t+1FVZX8VZlIga3XYtMCj509IEOv8Ma/0bjY1M7sqNwu08OLEDJCw51eqSnBfKTDlH
dtVAWtAL7B4kUYV6dqBqTA/NbLQQ/G3Yirdmc4wC9QxDHBAdV6eox0phetEMCVOxCD4TvCOsIV4+
b2/oX+aJvYXxE39bN3qzfID03Z2fc6KQAc7AKVrkA1ed9XoBx4wWS8sfz8EVZsoe+hxwyp/JP5/5
Dd3fuFAhWGwwet3+UwfqgAAwuRme4Hf2OLQZAgMBAAGjggHzMIIB7zAOBgNVHQ8BAf8EBAMCBaAw
HQYDVR0lBBYwFAYIKwYBBQUHAwIGCCqDDgMDBAEBMF4GA1UdIARXMFUwUwYHKoMOAwMCBDBIMCEG
CCsGAQUFBwIBFhVodHRwOi8vcGtpLmdvdi5rei9jcHMwIwYIKwYBBQUHAgIwFwwVaHR0cDovL3Br
aS5nb3Yua3ovY3BzMFYGA1UdHwRPME0wS6BJoEeGIWh0dHA6Ly9jcmwucGtpLmdvdi5rei9uY2Ff
cnNhLmNybIYiaHR0cDovL2NybDEucGtpLmdvdi5rei9uY2FfcnNhLmNybDBaBgNVHS4EUzBRME+g
TaBLhiNodHRwOi8vY3JsLnBraS5nb3Yua3ovbmNhX2RfcnNhLmNybIYkaHR0cDovL2NybDEucGtp
Lmdvdi5rei9uY2FfZF9yc2EuY3JsMGIGCCsGAQUFBwEBBFYwVDAuBggrBgEFBQcwAoYiaHR0cDov
L3BraS5nb3Yua3ovY2VydC9uY2FfcnNhLmNlcjAiBggrBgEFBQcwAYYWaHR0cDovL29jc3AucGtp
Lmdvdi5rejAdBgNVHQ4EFgQUQi/VRNQ2SkvAN1f9fK3XuPB4gV8wDwYDVR0jBAgwBoAEW2p0ETAW
BgYqgw4DAwUEDDAKBggqgw4DAwUCAjANBgkqhkiG9w0BAQsFAAOCAgEAqO8ElCYuKh06HZcXNwXQ
azTVUNFosFiUKvnj8uAF6JUzk9KxUzMEMlNuN/Nk4OOdeSDyCRGZPnF5JdHaBTC+7tZnvUEur5oi
QumnCBVjiehf6gw2k420SEpzFv8P8JXV1lwbORCnSZRpw+6QRig71uabrI9adYKYasyp/jlc0NOL
MyiUxBqJ8Npq14BoGMNLQHhT11sE8pZuiseTbrvDeZusIB/SIgfkzTi7wd5jBqRe+qg/bS0+SReG
AkS4klQpCIgl8HJ+WHj0QHbtnLpG0DOoiGCSGtdMKKoFVwgSsbftK9AL20PeNrqlcgmMYgQiyxSA
SFE0p/SNR3i63j6e8lBmhRseOH+5Q5vj6xmbtgjmoW4fIlYkb/uolvcmtXHnwW8hdVu00TSOR03O
6fJ2yBXDuw/XO/+T3RcSlK9Zdleew5uMiX/MjYZSVOvw+0jxWAxvferhJaCaaPAjykyAUTHWTjn+
G8jWfhBC/SyJ9tsWFkH/ZrBzVBRIQM01ZXDjJIXhWP1CkIybQ+fQCafvixVPGUnM8sRWjxzS89d/
y3GII0VdQCqpm/pV6n2Z0kn3/ItOEN8S3M2S0zE7JV42NVKf/nxCHGsX54lkEhf2Xq3ulEfOxvf9
smcFNLfyQLVkS+3BDnB128HVegkcWG5hEoT8ojUZkDtr4kvFKW8mR70=
</ds:X509Certificate>
</ds:X509Data>
</ds:KeyInfo>
</ds:Signature></auth>`;

    //document.querySelectorAll('form>input')[0].type='';
    //document.querySelectorAll('form>input')[1].type='';
    document.querySelectorAll("form>input")[0].value = signData;
    document.querySelectorAll("form>input")[1].value = signature;
    //присваиваем кнопке вход ID
    //document.body.innerHTML = document.body.innerHTML.replace(
    //'class="btn btn-success btn-block"', 'class="btn btn-success btn-block" id="OkId"');
    //присваиваем полям логин и пароль ID
    //document.body.innerHTML = document.body.innerHTML.replace('"Логин"', '"Логин" id="loginId"');
    //document.body.innerHTML = document.body.innerHTML.replace('"Пароль"', '"Пароль" id="passId"');
    // заполняем поля логин пароль
    document.querySelector("input[name=login]").value = "-";
    document.querySelector("input[name=password]").value = "-";

    // завершаем цикл
    clearInterval(loginInterval);
    // Нажимаем на кнопку вход
    //document.getElementById('OkId').click();
  }
}, 500);
