import fetch from "node-fetch";
import { getSettings } from "../settings";
import * as querystring from "querystring";

type Error = { status: number; message: string };
async function makeRequest<TResponse>(requestArgs: {
  method: "get" | "post" | "put";
  endpoint: string;
  body?: Record<string, any>;
}): Promise<{ data?: TResponse; error?: Error }> {
  try {
    const BASE_URL = "https://api.track.toggl.com/api/v8/";
    const { token } = await getSettings();
    const basicAuth = `Basic ${Buffer.from(`${token}:api_token`).toString(
      "base64"
    )}`;
    const body =
      requestArgs.method !== "get" && requestArgs.body !== undefined
        ? JSON.stringify(requestArgs.body)
        : undefined;

    const res = await fetch(`${BASE_URL}${requestArgs.endpoint}`, {
      method: requestArgs.method,
      body,
      headers: {
        Authorization: basicAuth,
      },
    });

    if (!res.ok) {
      if (res.status === 403) {
        return {
          error: {
            status: res.status,
            message:
              "Not authorized. Set your toggl token by running `toggl set-token <your-toggl-token>`",
          },
        };
      }
      return { error: { status: res.status, message: res.statusText } };
    }
    const data = await res.json();

    if (data.hasOwnProperty("data")) {
      return { data: data.data };
    }
    return { data };
  } catch (err: any) {
    return { error: { status: 500, message: `${err.name}: ${err.mesage}` } };
  }
}

const USER_AGENT = "<alex-driaguine/toggler>";

interface Task {
  id: number;
  wid: number;
  pid: number;
  billable: boolean;
  start: string;
  duration: number;
  description: string;
  duronly: boolean;
  at: string;
  uid: number;
  guid?: string;
  stop?: string;
}

const current = () => {
  return makeRequest<Task>({
    endpoint: "time_entries/current",
    method: "get",
  });
};

const stop = (id: number) => {
  return makeRequest<Task>({
    endpoint: `time_entries/${id}/stop`,
    method: "put",
  });
};

const start = async (description: string) => {
  const { projectId: pid } = await getSettings();
  return makeRequest<Task>({
    endpoint: "time_entries/start",
    method: "post",
    body: {
      time_entry: {
        description,
        pid,
        created_with: USER_AGENT,
      },
    },
  });
};

const entries = async (args: { start_date: string; end_date: string }) => {
  return makeRequest<Task[]>({
    endpoint: "time_entries?" + querystring.stringify(args),
    method: "get",
  });
};

export const togglService = {
  start,
  stop,
  current,
  entries,
};
