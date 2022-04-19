import axios from "axios";

/**
 * 获取数据API组（树结构）
 */
export function getApiGroupTree() {
  return axios.post('/vapi/getApiGroupTree')
}

export function demoMp() {
  return axios.get("localhost:8080/vapi/demoMp")
}
