import {request} from "@@/plugin-request/request";
import {stringify} from "querystring";
import stringMatching = jasmine.stringMatching;

const DataApiTree = {
  url: string,
  name? : string,
}

/**
 * 获取数据API组（树结构）
 */
export function getApiGroupTree() {
  return request<Record<any, any>>('/vapi/getApiGroupTree', {
    method: 'POST',
  });
}
