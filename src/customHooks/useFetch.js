import React from 'react';

// Creating one time custome hook using useEffect hook to fetch data from network
export const useFetch = (url, page) => {
    // State to control the list data fetched from server
    const [data, setData] = React.useState({
        loading:true,
        error:false,
        list:[

        ]
    });

    React.useEffect(() => {
        setData({
            loading:true,
            error:false,
            list:[

            ]
        })
        try {
            (
                async () => {
                    const response = await fetch(url);
                    const json_data = await response.json();

                    // setting new state of fetched server data on every new render
                    setData((state) => ({
                        ...state,
                        loading:false,
                        list:[
                            ...json_data
                        ]
                    }))
                }
            )();
        } catch (error) {
            setData(async (state) => ({
                ...state,
                loading:false,
                error:true,
            }))
        }
    }, [page, url]);

    return data
}
