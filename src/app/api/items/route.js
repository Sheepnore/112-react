// 後端 提供給 前端 使用
// `export` 傳出去 這個Get function


                      //呼叫
export async function GET(){
  // 1. get access token
  const token = await getToken();
  //console.log(token);
  // 2. get data from TDX API
  
  //const apiData = await fetchData(token);
  //console.log(apiData);
  return Response.json({});
}


// 
async function getToken(){
  const authURL = "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";
  const params = new URLSearchParams();
  params.append('grant_type','client_creditials');
  params.append('client_id',process.env.TDX_CLIENT_ID);
  //console.log(process.env.TDX_CLIENT_ID);
  params.append('client_secret',process.env.TDX_CLIENT_SECRET);


                        // 這個API 回傳資料格式不一定和其他API的資料格式相同，還是要去看人家API 資料格式是怎麼寫的

                        // `fetch` 抓資料 -- fetch(url,method,headers)
  try{
    const response = await fetch(authURL, {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
      },
      body: params,
    });
    console.log(response);
      // (response.ok) -- response 回傳成功後才會執行以下程式


    if (response.ok){
      const data = await response.json();
      console.log(JSON.stringify(data));
      return data.access_token;
    } else{
      console.error("Error fetching token", response.status);
    }
  } catch (error){
    console.log('Error fetching token', error);
  }
}

async function fetchData(token){
  const apiURL = "http://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";

  try{
    const response = await fetch(apiURL, {
      method: 'Get',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response.ok){
      const data = await response.json();
      console.log(JSON.stringify(data));
      return data;
    }
    else{
        console.error('Error fetching data:',response.status);
    }
  } catch (error){
    console.error('Error fetching data:', error);
  }
}