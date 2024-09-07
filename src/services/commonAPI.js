import axios from "axios";

const commonAPI = async (httpMethod,url,regBody) => {
  const redConfig = {
    url,
    method:httpMethod,
    data:regBody
  }
  return await axios(redConfig).then((res)=>{
    return res
  }).catch((err)=>{
    return err
  })
}

export default commonAPI