import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Paper, Button, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TableSnippet from "./common/TableSnippet";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchApi() {
            try {
                const { data: response } = await axios.get(
                    process.env.REACT_APP_API_URL
                );
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchApi();
    }, []);

    const handleDelete = (id) => {
        const updated = data.filter((keyword) => keyword.id !== id);
        setData(updated);
    };

    return (
        <div className="home_container">
            <div className="filter_header flex">
                <p>Add Another Keyword</p>
                <Paper color="primary">1/5</Paper>
                <h3>upgrade</h3>
                <h4>advance search</h4>
            </div>
            <Paper className="filter_container flex">
                <SearchIcon style={{ margin: "0 15px" }} />
                <InputBase
                    style={{ flexGrow: "1" }}
                    placeholder="Enter your filters here"
                />
                <Button
                    style={{ margin: "0 15px" }}
                    color="primary"
                    variant="contained"
                    size="large"
                >
                    save filters
                </Button>
            </Paper>
            <div className="table_heading flex">
                <h5>The terms you are tracking</h5>
                <p>The data will refresh every 5 min</p>
            </div>
            <TableSnippet
                headers={[
                    "Keywords",
                    "Goal",
                    "Matches",
                    "Search Status",
                    "Delete Keyword",
                ]}
                data={data}
                handleDelete={handleDelete}
            />
            <Button
                className="view_result_btn"
                variant="contained"
                color="primary"
                size="large"
            >
                view results
            </Button>
        </div>
    );
};

export default Home;
