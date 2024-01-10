import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_CONFIG } from "../configs/API_CONFIG";
export interface IUser {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number | string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string | null;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export default function useFetch(): {
  status: "error" | "success" | "pending";
  data: IUser[];
} {
  const fetch = async () =>
    await axios(API_CONFIG).then((res) => res.data.results);

  const { status, data } = useQuery({
    queryFn: fetch,
    queryKey: ["people"],
    staleTime: 1000 * 60 * 1,
  });
  return { status, data };
}
