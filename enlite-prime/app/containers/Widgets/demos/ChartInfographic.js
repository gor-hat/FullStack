import React, { PureComponent } from 'react';
import { fade } from '@material-ui/core/styles/colorManipulator';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  BarChart, Bar,
  AreaChart, Area,
  LineChart, Line,
  PieChart, Pie, Cell
} from 'recharts';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';
import lime from '@material-ui/core/colors/lime';
import { data1, data2 } from 'enl-api/chart/chartMiniData';
import { CounterWidget } from 'enl-components';
import styles from 'enl-components/Widget/widget-jss';

const colors = [red[300], blue[300], cyan[300], lime[300]];

class ChartInfographic extends PureComponent {
  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.rootCounter}>
        <Grid container spacing={2}>
          <Grid item md={3} xs={6}>
            <CounterWidget
              color="primary-main"
              start={0}
              end={20}
              duration={3}
              title="Monthly Income"
              unitBefore="$ "
              unitAfter="k"
            >
              <PieChart width={100} height={100}>
                <Pie
                  data={data2}
                  cx={50}
                  cy={50}
                  dataKey="value"
                  innerRadius={20}
                  outerRadius={40}
                  fill="#FFFFFF"
                  paddingAngle={5}
                >
                  {
                    data2.map((entry, index) => <Cell key={index.toString()} fill={colors[index % colors.length]} />)
                  }
                </Pie>
              </PieChart>
            </CounterWidget>
          </Grid>
          <Grid item md={3} xs={6}>
            <CounterWidget
              color="primary-dark"
              start={0}
              end={20}
              duration={3}
              title="Weekly Sales"
            >
              <BarChart width={100} height={40} data={data1}>
                <Bar dataKey="uv" fill="#ffffff" />
              </BarChart>
            </CounterWidget>
          </Grid>
          <Grid item md={3} xs={6}>
            <CounterWidget
              color="secondary-main"
              start={0}
              end={321}
              duration={3}
              title="New Customers"
            >
              <AreaChart width={100} height={60} data={data1}>
                <Area type="monotone" dataKey="uv" stroke={theme.palette.secondary.main} fill={fade(theme.palette.secondary.main, 0.5)} />
              </AreaChart>
            </CounterWidget>
          </Grid>
          <Grid item md={3} xs={6}>
            <CounterWidget
              color="secondary-dark"
              start={0}
              end={82}
              duration={3}
              title="Active Users"
            >
              <LineChart width={100} height={80} data={data1}>
                <Line type="monotone" dataKey="pv" stroke="#FFFFFF" strokeWidth={2} />
              </LineChart>
            </CounterWidget>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ChartInfographic.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ChartInfographic);
