import React from 'react';
import thirdGradeTests from '../../data/3rd_grade_tests.js'
import EigthGradeTest from '../../data/8th_grade_test_scores.js'
import AvgRaceMath from '../../data/average_race_ethnicity_math_scores.js'
import AvgRaceReading from '../../data/average_race_ethnicity_reading_scores.js'
import AvgRaceWriting from '../../data/average_race_ethnicity_writing_scores.js'
const Header = ({selectData}) => {
  return (
    <div><h3>Other Colorado School District Data</h3>
      <button id="button" onClick={() => selectData(thirdGradeTests)}>3rd Grade Test Data</button> 
      <button id="button" onClick={() => selectData(EigthGradeTest)}>8th Grade Test Data</button> 
      <button id="button" onClick={() => selectData(AvgRaceMath)}>Average Math Scores by Race</button> 
      <button id="button" onClick={() => selectData(AvgRaceReading)}>Average Reading Scores by Race</button> 
      <button id="button" onClick={() => selectData(AvgRaceWriting)}>Average Writing Scores by Race</button> 
    </div>
  )
}

export default Header;