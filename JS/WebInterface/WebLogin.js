//Ищем загрузку страницы логина
let loginInterval;
loginInterval = setInterval(()=>{
	totop = document.getElementById('to-top');
	console.log(totop);
	if (totop)
		{
			// Переходим на русский
			str=document.documentElement.outerHTML;
			if (str.indexOf('Кіру')+1) 	{
				document.body.innerHTML = document.body.innerHTML.replace(
			'ILinkListener-localeRu"', 'ILinkListener-localeRu" id="rus"');	
			document.getElementById('rus').click();}

			signData  = '<auth><data>ZAFMCZKBRUHJCB7BC624JNYY</data></auth>';
			signature = `<?xml version="1.0" encoding="UTF-8" standalone="no"?><auth><data>ZAFMCZKBRUHJCB7BC624JNYY</data><ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
<ds:SignedInfo>
<ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
<ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"/>
<ds:Reference URI="">
<ds:Transforms>
<ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
<ds:Transform Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315#WithComments"/>
</ds:Transforms>
<ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/>
<ds:DigestValue>jaIniFmwzZKGexArZLYSoVGj8YIfiRNQBFZ5wfEYjUA=</ds:DigestValue>
</ds:Reference>
</ds:SignedInfo>
<ds:SignatureValue>
dscRY2aC0CfiwO+qGlG4v/HbO7iDbSxvTFJO0sp5+HdkRLpoQvdoLxIbyZllyF1bF5WVYCTFQ8z3
z2YrPY4bIfYYZWY2t3ouRT8RhmbxpCGC01gQd1Uh7INDepF0QIz7xN/8Q1Uaa8Ywi0jvpJ6P2SK0
p2rRegr6JWHsYssnZ8jArvRzRA7lazpDiwhgPm5Rpek3jy/tNJueHZWZxBib11kSEU+DnaAELS33
k7IQzSRrlEgj8DzcIMS0St5eJG3Wd3Hc2GR+b8k74xgE1ehHmuNcX4/7M5UEB/cnkl19mIGvyUw2
HdLv+ghFwxgVUEuQDTdcn0I6tBQTWopy7K1vJQ==
</ds:SignatureValue>
<ds:KeyInfo>
<ds:X509Data>
<ds:X509Certificate>
MIIGXTCCBEWgAwIBAgIUEoEa7i45bC5zkwTa//w8omrBn6EwDQYJKoZIhvcNAQELBQAwUjELMAkG
A1UEBhMCS1oxQzBBBgNVBAMMOtKw0JvQotCi0KvSmiDQmtCj05jQm9CQ0J3QlNCr0KDQo9Co0Ksg
0J7QoNCi0JDQm9Cr0pogKFJTQSkwHhcNMjMxMTE2MDM1MzQ0WhcNMjYxMTE1MDM1MzQ0WjCBhzEi
MCAGA1UEAwwZ0JHQntCZ0KfQo9CaINCc0JjQpdCQ0JjQmzEVMBMGA1UEBAwM0JHQntCZ0KfQo9Ca
MRgwFgYDVQQFEw9JSU44NTA4MDczNTAwNTQxCzAJBgNVBAYTAktaMSMwIQYDVQQqDBrQkNCb0JXQ
mtCh0JDQndCU0KDQntCS0JjQpzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANhYsNX4
O0k/dB89cMkaL++q4lOLsvMIg8t8d2hC8K86tlb2ye3tQNrV/sp3zH1rqGbRTXFvULst5qgDHu/a
UjePkpHzaRbCO/R8VsxK7SSaHdROCqCgu0/h5jMy4a94H+1UoE2lijR80B7ke+ViwPs2O+S6f33+
cZb6G5Vf9P1sDkyvy+U4IZ4A0DXu+Fk4TF+zGXmSc+wnvP6MgRDxCnsLvJ4oFT/We1fXgGo5MwiR
VN2JXKgERdEViGzfrFqku1z2velEi/TVJnDN0EfbzraY0o3VEnhl3v2LDsOZsE55qd5/dNc2pWVA
l2IjQIgbu7F+tkHo/J9+L10YNzoppOkCAwEAAaOCAfMwggHvMA4GA1UdDwEB/wQEAwIFoDAdBgNV
HSUEFjAUBggrBgEFBQcDAgYIKoMOAwMEAQEwXgYDVR0gBFcwVTBTBgcqgw4DAwIEMEgwIQYIKwYB
BQUHAgEWFWh0dHA6Ly9wa2kuZ292Lmt6L2NwczAjBggrBgEFBQcCAjAXDBVodHRwOi8vcGtpLmdv
di5rei9jcHMwVgYDVR0fBE8wTTBLoEmgR4YhaHR0cDovL2NybC5wa2kuZ292Lmt6L25jYV9yc2Eu
Y3JshiJodHRwOi8vY3JsMS5wa2kuZ292Lmt6L25jYV9yc2EuY3JsMFoGA1UdLgRTMFEwT6BNoEuG
I2h0dHA6Ly9jcmwucGtpLmdvdi5rei9uY2FfZF9yc2EuY3JshiRodHRwOi8vY3JsMS5wa2kuZ292
Lmt6L25jYV9kX3JzYS5jcmwwYgYIKwYBBQUHAQEEVjBUMC4GCCsGAQUFBzAChiJodHRwOi8vcGtp
Lmdvdi5rei9jZXJ0L25jYV9yc2EuY2VyMCIGCCsGAQUFBzABhhZodHRwOi8vb2NzcC5wa2kuZ292
Lmt6MB0GA1UdDgQWBBSCgRruLjlsLnOTBNr//DyiasGfoTAPBgNVHSMECDAGgARbanQRMBYGBiqD
DgMDBQQMMAoGCCqDDgMDBQICMA0GCSqGSIb3DQEBCwUAA4ICAQBsB4gJwMt67H7K/UgtI3Fxoy/Z
/biCFTK5EGcZiMS+jApIzwJQ/v069RQiq1Gv+6dpA3JUgCuauV1kRvT1dPoOYDhsZpZHiLX0A71n
LLa4N3pQvGMYOyzGgAS4rahd783pjELo/kBUycYGhCCvvpVO3J8BmyZYAJAtEA3P1f7ZgHM1vGk8
ZNtjxLhgqmujdDPE2ELw/knYzZCcLM/6NrewVZv4OpTzCQK2MknbruTkHs9tY9tkNxdWeHHSVV4p
KplJF6h1soNUZWaPXSiE0+RbvskMawuZnUrP+Q4sRKkj/0rPsne+chELkajYadVKTihssVZnCOui
vXzp+89lXidP7q5ka6/98AXwC93BCM1a6n3VvhDJ9EXR2lope9pEVf2Uik6nlw7JRYquMKyPwBtC
l+dWod1orSAvbi0MxjsmdUBgsyQ7477UlictMG+pufplh7OCRxZlFp1je+24W4cqzma1SoZ/iRuW
yEmDS8yirmWJ6Ks8fRhn1JbiA65auqu7mEdB4MBT5IoOPOlC/D5iqX70V4XlZLlcTe8SWfSS6F+d
LPfsg8LwcyWrmNtYdvy0+Kl8f4Asfp5BA9zfOjXxd/+psEG8vPfJHSB1hzhYHA8Zq071i3iEbyIY
PhrxTSycgPQqWanVHLjITVvYQ6uoNgEabx5excrYMaJe42wgAA==
</ds:X509Certificate>
</ds:X509Data>
</ds:KeyInfo>
</ds:Signature></auth>`;

			document.querySelectorAll('form>input')[0].value=signData;
			document.querySelectorAll('form>input')[1].value=signature;

			// заполняем поля логин пароль
			document.querySelector('input[name=login]').value='-';
			document.querySelector('input[name=password]').value='-';			

			// завершаем цикл
			clearInterval(loginInterval);
		}
},500);

