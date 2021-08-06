import { useState, useEffect } from 'react';

const useFetch = (url, page) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        const getData = async () => {
            const response = await fetch(url + page, {
                signal: abortCont.signal,
            });

            if (!response.ok) {
                throw Error('could not fetch the data for that resource');
            }

            const data = await response.json();

            return data;
        };

        getData()
            .then((data) => {
                setData(data);
                setError(null);
                setIsPending(false);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
            });

        return () => abortCont.abort();
    }, [url, page]);

    return { data, isPending, error };
};

export default useFetch;
