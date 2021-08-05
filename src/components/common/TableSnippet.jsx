import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";

const TableSnippet = ({ headers, data, handleDelete }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {headers.map((header) => (
                            <TableCell key={header} align="center">
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((option) => (
                        <TableRow key={option.id}>
                            <TableCell align="center">
                                {option.keyword}
                            </TableCell>
                            <TableCell align="center">{option.goal}</TableCell>
                            <TableCell align="center">
                                {option.matches}
                            </TableCell>
                            <TableCell align="center">
                                {option.search_status}
                            </TableCell>
                            <TableCell size="small" align="center">
                                <IconButton
                                    onClick={() => handleDelete(option.id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableSnippet;
