/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

const useSearchEmployee = (url) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, []);

  return {data, error, loading};

}

export default useSearchEmployee;

export async function saveEmployee(url, employee) {
  await fetch(url, {
    "method": 'POST',
    "body": JSON.stringify(employee),
    "headers":{
      "Content-Type": 'application/json'
    }
  })
}

export async function removeEmployee(url) {
  await fetch(url, {
    "method": 'DELETE',
    "headers":{
      "Content-Type": 'application/json'
    }
  })
}

export async function updateEmployee(url, employee) {
  await fetch(url, {
    "method": 'PUT',
    "body": JSON.stringify(employee),
    "headers":{
      "Content-Type": 'application/json'
    }
  })
}
