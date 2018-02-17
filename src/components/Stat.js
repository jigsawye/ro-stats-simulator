import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import styled from 'styled-components';
import range from 'lodash/range';

const { Option } = Select;

const StatsContainer = styled.div`
  margin: 5px 0;
`;

const Label = styled.div`
  display: inline-block;
  width: 30px;
  font-weight: bold;
  line-height: 32px;
  margin-right: 10px;
`;

const Plus = styled.span`
  margin: 0 7px;
`;

const Bonuse = styled.div`
  display: inline-block;
  width: 10px;
`;

const Stats = ({ label, value, onChange, bonuse, otherStat, onChangeOtherStat }) => (
  <StatsContainer>
    <Label>{label}</Label>
    <Select style={{ width: 70 }} value={value} onChange={onChange}>
      {range(1, 100).map((stat) => <Option key={stat}>{stat}</Option>)}
    </Select>
    <Plus>+</Plus>
    <Bonuse>{bonuse}</Bonuse>
    <Plus>+</Plus>
    <Select style={{ width: 70 }} value={otherStat} onChange={onChangeOtherStat}>
      {range(0, 50).map((stat) => <Option key={stat}>{stat}</Option>)}
    </Select>
  </StatsContainer>
);

Stats.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  bonuse: PropTypes.number.isRequired,
  otherStat: PropTypes.number.isRequired,
  onChangeOtherStat: PropTypes.func.isRequired,
};

export default Stats;
