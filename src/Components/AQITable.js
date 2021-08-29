import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Tag} from 'antd';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 12,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    width: 800,
    margin: 'auto'
  },
});

export const AQITable = ({data}) => {
  const classes = useStyles();
  console.log('Data',data)
  return (
    
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>City</StyledTableCell>
            <StyledTableCell align="right">AQI</StyledTableCell>
            <StyledTableCell align="right">Last Updated</StyledTableCell>
            <StyledTableCell align="right">Trend</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(data).map((row) => (
            <StyledTableRow key={row}>
              <StyledTableCell component="th" scope="row">
                <strong>{row}</strong>
              </StyledTableCell>
              <StyledTableCell align="right"><Tag color = {data[row].color}>{data[row].aqi.split('-').pop()}</Tag></StyledTableCell>
              <StyledTableCell align="right">{data[row].timeToDisplay}</StyledTableCell>
              <StyledTableCell align="right">
                {/* <Sparklines data={data[row].aqi.split('-')} limit={10} width={100} height={20} margin={50}>
                  <SparklinesLine color="blue" />
                </Sparklines> */}
                <Sparklines data={data[row].aqi.split('-')} limit={20}>
                  <SparklinesLine color="#1c8cdc" />
                  <SparklinesSpots />
                </Sparklines>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
