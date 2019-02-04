import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Card, Cascader, Col, Popover, Row, Select } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import classes from '../constants/classes';
import { BaseLevelTips, JobLevelTips } from '../components/Tips/BaseInfo';
import { getBaseLevelRange, getJobLevelRange } from '../constants/ranges';
import * as baseInfoActions from '../actions/baseInfo';

const { Option } = Select;

const Label = styled.label`
  margin-right: 10px;
`;

const BaseInfo = ({
  baseLevelRange,
  jobLevelRange,
  baseLevel,
  jobLevel,
  job,
  setBaseLevel,
  setJobLevel,
  setJob,
}) => (
  <Card title="Base Info" style={{ marginTop: 15 }}>
    <Row gutter={16}>
      <Col span={7}>
        <Popover
          title="Base Level (基本等級)"
          content={BaseLevelTips}
          placement="bottomLeft"
        >
          <Label>Lv.</Label>
        </Popover>
        <Select style={{ width: 70 }} value={baseLevel} onChange={setBaseLevel}>
          {baseLevelRange.map(level => (
            <Option key={level}>{level}</Option>
          ))}
        </Select>
      </Col>
      <Col span={7}>
        <Popover
          title="Job Level (職業等級)"
          content={JobLevelTips}
          placement="bottom"
        >
          <Label>Job Lv.</Label>
        </Popover>
        <Select style={{ width: 70 }} value={jobLevel} onChange={setJobLevel}>
          {jobLevelRange.map(level => (
            <Option key={level}>{level}</Option>
          ))}
        </Select>
      </Col>
      <Col span={10}>
        <Label>Job</Label>
        <Cascader
          options={classes}
          value={job}
          onChange={setJob}
          allowClear={false}
        />
      </Col>
    </Row>
  </Card>
);

BaseInfo.propTypes = {
  baseLevel: PropTypes.number.isRequired,
  baseLevelRange: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  job: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  jobLevel: PropTypes.number.isRequired,
  jobLevelRange: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  setBaseLevel: PropTypes.func.isRequired,
  setJob: PropTypes.func.isRequired,
  setJobLevel: PropTypes.func.isRequired,
};

const mapStateToProps = ({ baseLevel, jobLevel, job }) => ({
  baseLevel,
  jobLevel,
  job,
  baseLevelRange: getBaseLevelRange(job),
  jobLevelRange: getJobLevelRange(job),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(baseInfoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseInfo);