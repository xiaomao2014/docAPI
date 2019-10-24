---
title: API接口文档 v0.0.1
language_tabs:
  - javascript: JavaScript
  - java: Java
  - python: Python
toc_footers: []
includes: []
search: false
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v3.6.6 -->

<h1 id="api-">API接口文档 v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="//localhost:8081/">//localhost:8081/</a>

<h1 id="api---">基础信息</h1>

基础信息接口

## 查询币种

<a id="opIdlistUsingGET"></a>

> Code samples

```javascript

const headers = {
  'Accept':'*/*'

};

fetch('/localhost:8081/coin/enabled',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```java
URL obj = new URL("/localhost:8081/coin/enabled");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.get('/localhost:8081/coin/enabled', headers = headers)

print r.json()

```

`GET /coin/enabled`

获取所有币种列表

> Example responses

> 200 Response

<h3 id="查询币种-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[API_](#schemaapi_)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## 汇率折算

<a id="opIdfiatConvertUsingGET"></a>

> Code samples

```javascript
const inputBody = 'string';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'

};

fetch('/localhost:8081/coin/exchange',
{
  method: 'GET',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```java
URL obj = new URL("/localhost:8081/coin/exchange");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*'
}

r = requests.get('/localhost:8081/coin/exchange', headers = headers)

print r.json()

```

`GET /coin/exchange`

法币汇率

> Body parameter

```json
"string"
```

<h3 id="汇率折算-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|false|法币|

> Example responses

> 200 Response

<h3 id="汇率折算-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[API_](#schemaapi_)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api---">行情信息</h1>

行情信息

## 获得指定交易对深度数据

<a id="opIdgetDepthRenderUsingGET"></a>

> Code samples

```javascript

const headers = {
  'Accept':'*/*'

};

fetch('/localhost:8081/market/depth',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```java
URL obj = new URL("/localhost:8081/market/depth");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.get('/localhost:8081/market/depth', headers = headers)

print r.json()

```

`GET /market/depth`

获得指定交易对深度数据

<h3 id="获得指定交易对深度数据-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|false|交易对 (BTCUSDT,ETHUSDT...)|
|step|query|string|false|深度档数 (STEP0=0-99,STEP1=0-19,STEP2=20-39,STEP3=40-59,STEP4=60-79,STEP5=80-99)|

> Example responses

> 200 Response

<h3 id="获得指定交易对深度数据-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[_9](#schema_9)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## 获得指定交易对的K线数据

<a id="opIdgetKlineUsingGET"></a>

> Code samples

```javascript

const headers = {
  'Accept':'*/*'

};

fetch('/localhost:8081/market/kline',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```java
URL obj = new URL("/localhost:8081/market/kline");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.get('/localhost:8081/market/kline', headers = headers)

print r.json()

```

`GET /market/kline`

获得指定交易对的K线数据

<h3 id="获得指定交易对的k线数据-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|false|交易对|
|klineType|query|string|false|周期标识|
|klineStep|query|string|false|长度|

> Example responses

> 200 Response

<h3 id="获得指定交易对的k线数据-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|{"status":"success","data":[[最高价,开盘价,最低价,收盘价,成交量,时间戳]],"message": null}|[_K_](#schema_k_)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## 获得指定交易对的信息

<a id="opIdtickerUsingGET"></a>

> Code samples

```javascript

const headers = {
  'Accept':'*/*'

};

fetch('/localhost:8081/market/ticker',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```java
URL obj = new URL("/localhost:8081/market/ticker");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.get('/localhost:8081/market/ticker', headers = headers)

print r.json()

```

`GET /market/ticker`

获得指定交易对的信息

<h3 id="获得指定交易对的信息-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|false|交易对|

> Example responses

> 200 Response

<h3 id="获得指定交易对的信息-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|{"status":"success","data":{tradeName,buy,sell,high,low,last,open,chg,vol24hour},"message": null}|[_6](#schema_6)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## 获得全部交易对的信息

<a id="opIdtickersUsingGET"></a>

> Code samples

```javascript

const headers = {
  'Accept':'*/*'

};

fetch('/localhost:8081/market/tickers',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```java
URL obj = new URL("/localhost:8081/market/tickers");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.get('/localhost:8081/market/tickers', headers = headers)

print r.json()

```

`GET /market/tickers`

获得全部交易对的信息

> Example responses

> 200 Response

<h3 id="获得全部交易对的信息-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|{"status":"success","data":[{tradeName,buy,sell,high,low,last,open,chg,vol24hour}],"message": null}|[_5](#schema_5)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## 单个交易对的历史成交

<a id="opIdtradeUsingGET"></a>

> Code samples

```javascript

const headers = {
  'Accept':'*/*'

};

fetch('/localhost:8081/market/trade',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```java
URL obj = new URL("/localhost:8081/market/trade");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.get('/localhost:8081/market/trade', headers = headers)

print r.json()

```

`GET /market/trade`

单个交易对的历史成交

<h3 id="单个交易对的历史成交-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|false|交易对|

> Example responses

> 200 Response

<h3 id="单个交易对的历史成交-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[_7](#schema_7)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## 全部交易对计价单位和小数位

<a id="opIdgetTradeInfoUsingGET"></a>

> Code samples

```javascript

const headers = {
  'Accept':'*/*'

};

fetch('/localhost:8081/market/tradeInfo',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```java
URL obj = new URL("/localhost:8081/market/tradeInfo");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.get('/localhost:8081/market/tradeInfo', headers = headers)

print r.json()

```

`GET /market/tradeInfo`

全部交易对计价单位和小数位

> Example responses

> 200 Response

<h3 id="全部交易对计价单位和小数位-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[_2](#schema_2)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_API_">API_</h2>
<!-- backwards compatibility -->
<a id="schemaapi_"></a>
<a id="schema_API_"></a>
<a id="tocSapi_"></a>
<a id="tocsapi_"></a>

```json
{
  "data": {},
  "message": "string",
  "status": "string"
}

```

API接口通用返回对象

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|message|string|false|none|返回信息|
|status|string|false|none|返回状态|

<h2 id="tocS_K_">K_</h2>
<!-- backwards compatibility -->
<a id="schemak_"></a>
<a id="schema_K_"></a>
<a id="tocSk_"></a>
<a id="tocsk_"></a>

```json
{
  "s1": 0,
  "s2": 0,
  "s3": 0,
  "s4": 0,
  "s5": 0,
  "s6": 0
}

```

K线

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s1|number|false|none|最高价|
|s2|number|false|none|开盘价|
|s3|number|false|none|最低价|
|s4|number|false|none|收盘价|
|s5|number|false|none|成交量|
|s6|number|false|none|时间戳|

<h2 id="tocS__">_</h2>
<!-- backwards compatibility -->
<a id="schema_"></a>
<a id="schema__"></a>
<a id="tocS_"></a>
<a id="tocs_"></a>

```json
{
  "buy": [
    {
      "amount": 0,
      "price": 0
    }
  ],
  "sell": [
    {
      "amount": 0,
      "price": 0
    }
  ]
}

```

买卖深度数据

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buy|[[_8](#schema_8)]|false|none|buy|
|sell|[[_8](#schema_8)]|false|none|sell|

<h2 id="tocS__2">_2</h2>
<!-- backwards compatibility -->
<a id="schema_2"></a>
<a id="schema__2"></a>
<a id="tocS_2"></a>
<a id="tocs_2"></a>

```json
{
  "data": [
    {
      "baseCurrency": "string",
      "countPrescision": 0,
      "pricePrecision": 0,
      "quoteCurrency": "string",
      "symbol": "string"
    }
  ],
  "message": "string",
  "status": "string"
}

```

交易对计价单位和小数位

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[_3](#schema_3)]|false|none|返回数据|
|message|string|false|none|返回信息|
|status|string|false|none|返回状态|

<h2 id="tocS__3">_3</h2>
<!-- backwards compatibility -->
<a id="schema_3"></a>
<a id="schema__3"></a>
<a id="tocS_3"></a>
<a id="tocs_3"></a>

```json
{
  "baseCurrency": "string",
  "countPrescision": 0,
  "pricePrecision": 0,
  "quoteCurrency": "string",
  "symbol": "string"
}

```

单价和小数位

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseCurrency|string|false|none|baseCurrency|
|countPrescision|integer(int32)|false|none|countPrescision|
|pricePrecision|integer(int32)|false|none|pricePrecision|
|quoteCurrency|string|false|none|quoteCurrency|
|symbol|string|false|none|symbol|

<h2 id="tocS__4">_4</h2>
<!-- backwards compatibility -->
<a id="schema_4"></a>
<a id="schema__4"></a>
<a id="tocS_4"></a>
<a id="tocs_4"></a>

```json
{
  "amount": 0,
  "direction": "string",
  "price": 0,
  "time": 0
}

```

历史成交数据

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|false|none|amount|
|direction|string|false|none|direction|
|price|number|false|none|price|
|time|integer(int64)|false|none|time|

<h2 id="tocS__5">_5</h2>
<!-- backwards compatibility -->
<a id="schema_5"></a>
<a id="schema__5"></a>
<a id="tocS_5"></a>
<a id="tocs_5"></a>

```json
{
  "data": [
    {
      "buy": 0,
      "chg": 0,
      "high": 0,
      "last": 0,
      "low": 0,
      "open": 0,
      "sell": 0,
      "tradeName": "string",
      "vol24hour": 0
    }
  ],
  "message": "string",
  "status": "string"
}

```

所有交易对信息

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[_10](#schema_10)]|false|none|返回数据|
|message|string|false|none|返回信息|
|status|string|false|none|返回状态|

<h2 id="tocS__6">_6</h2>
<!-- backwards compatibility -->
<a id="schema_6"></a>
<a id="schema__6"></a>
<a id="tocS_6"></a>
<a id="tocs_6"></a>

```json
{
  "data": {
    "buy": 0,
    "chg": 0,
    "high": 0,
    "last": 0,
    "low": 0,
    "open": 0,
    "sell": 0,
    "tradeName": "string",
    "vol24hour": 0
  },
  "message": "string",
  "status": "string"
}

```

指定交易对信息

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[_10](#schema_10)|false|none|none|
|message|string|false|none|返回信息|
|status|string|false|none|返回状态|

<h2 id="tocS__7">_7</h2>
<!-- backwards compatibility -->
<a id="schema_7"></a>
<a id="schema__7"></a>
<a id="tocS_7"></a>
<a id="tocs_7"></a>

```json
{
  "data": [
    {
      "amount": 0,
      "direction": "string",
      "price": 0,
      "time": 0
    }
  ],
  "message": "string",
  "status": "string"
}

```

指定交易对历史成交数据

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[_4](#schema_4)]|false|none|返回数据|
|message|string|false|none|返回信息|
|status|string|false|none|返回状态|

<h2 id="tocS__8">_8</h2>
<!-- backwards compatibility -->
<a id="schema_8"></a>
<a id="schema__8"></a>
<a id="tocS_8"></a>
<a id="tocs_8"></a>

```json
{
  "amount": 0,
  "price": 0
}

```

深度数据

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|false|none|amount|
|price|number|false|none|price|

<h2 id="tocS__9">_9</h2>
<!-- backwards compatibility -->
<a id="schema_9"></a>
<a id="schema__9"></a>
<a id="tocS_9"></a>
<a id="tocs_9"></a>

```json
{
  "data": [
    {
      "buy": [
        {
          "amount": 0,
          "price": 0
        }
      ],
      "sell": [
        {
          "amount": 0,
          "price": 0
        }
      ]
    }
  ],
  "message": "string",
  "status": "string"
}

```

获得指定交易对深度数据

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[_](#schema_)]|false|none|返回数据|
|message|string|false|none|返回信息|
|status|string|false|none|返回状态|

<h2 id="tocS__K_">_K_</h2>
<!-- backwards compatibility -->
<a id="schema_k_"></a>
<a id="schema__K_"></a>
<a id="tocS_k_"></a>
<a id="tocs_k_"></a>

```json
{
  "data": [
    {
      "s1": 0,
      "s2": 0,
      "s3": 0,
      "s4": 0,
      "s5": 0,
      "s6": 0
    }
  ],
  "message": "string",
  "status": "string"
}

```

获得指定交易对的K线数据

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[K_](#schemak_)]|false|none|返回数据|
|message|string|false|none|返回信息|
|status|string|false|none|返回状态|

<h2 id="tocS__10">_10</h2>
<!-- backwards compatibility -->
<a id="schema_10"></a>
<a id="schema__10"></a>
<a id="tocS_10"></a>
<a id="tocs_10"></a>

```json
{
  "buy": 0,
  "chg": 0,
  "high": 0,
  "last": 0,
  "low": 0,
  "open": 0,
  "sell": 0,
  "tradeName": "string",
  "vol24hour": 0
}

```

行情信息

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buy|number|false|none|buy|
|chg|number|false|none|chg|
|high|number|false|none|high|
|last|number|false|none|last|
|low|number|false|none|low|
|open|number|false|none|open|
|sell|number|false|none|sell|
|tradeName|string|false|none|tradeName|
|vol24hour|number|false|none|vol24hour|

