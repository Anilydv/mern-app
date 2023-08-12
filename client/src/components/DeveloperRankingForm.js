import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function FormComponent({ userData }) {
  const [values, setValues] = useState({
    technicalSkills: "",
    projectPortfolio: "",
    problemSolving: "",
    experience: "",
    communicationSkills: "",
  });

  const [errors, setErrors] = useState("");

  const validateInput = () => {
    const {
      technicalSkills,
      projectPortfolio,
      problemSolving,
      experience,
      communicationSkills,
    } = values;
    if (
      !technicalSkills ||
      !projectPortfolio ||
      !problemSolving ||
      !experience ||
      !communicationSkills
    ) {
      setErrors("All the fields are required");
      return true;
    }
    if (
      technicalSkills &&
      (isNaN(technicalSkills) || +technicalSkills < 0 || +technicalSkills > 10)
    ) {
      setErrors("Value must be between 0 and 10");
      return true;
    }
    if (
      projectPortfolio &&
      (isNaN(projectPortfolio) ||
        +projectPortfolio < 0 ||
        +projectPortfolio > 10)
    ) {
      setErrors("Value must be between 0 and 10");
      return true;
    }
    if (
      problemSolving &&
      (isNaN(problemSolving) || +problemSolving < 0 || +problemSolving > 10)
    ) {
      setErrors("Value must be between 0 and 10");
      return true;
    }
    if (
      experience &&
      (isNaN(experience) || +experience < 0 || +experience > 10)
    ) {
      setErrors("Value must be between 0 and 10");
      return true;
    }
    if (
      communicationSkills &&
      (isNaN(communicationSkills) ||
        +communicationSkills < 0 ||
        +communicationSkills > 10)
    ) {
      setErrors("Value must be between 0 and 10");
      return true;
    }
    setErrors("");
    return false;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const calculateTotalPoint = (developer) => {
    const weights = {
      technicalSkills: 3,
      projectPortfolio: 2.5,
      problemSolving: 2,
      experience: 1.5,
      communicationSkills: 1,
    };

    const developerTotalPoint = (
      developer.technicalSkills * weights.technicalSkills +
      developer.projectPortfolio * weights.projectPortfolio +
      developer.problemSolving * weights.problemSolving +
      developer.experience * weights.experience +
      developer.communicationSkills * weights.communicationSkills
    ).toFixed(2);

    return developerTotalPoint;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateInput()) {
      return;
    }

    const totalRankingPoints = calculateTotalPoint(values);

    const userId = userData._id;

    const handleApiCall = () => {
      return axios
        .post("/rankingFormSubmit", { ...values, totalRankingPoints, userId })
        .then((res) => res)
        .catch((err) => {
          return err.response;
        });
    };

    const resData = await handleApiCall();

    if (resData.status === 422) {
      toast.error(resData.data.error);
    } else {
      toast.success(resData.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors && <div style={{ color: "red", padding: "10px" }}>{errors}</div>}
      <div>
        <label htmlFor="technicalSkills">Technical Skills:</label>
        <input
          type="text"
          id="technicalSkills"
          name="technicalSkills"
          value={values.technicalSkills}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="projectPortfolio">Project Portfolio:</label>
        <input
          type="text"
          id="projectPortfolio"
          name="projectPortfolio"
          value={values.projectPortfolio}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="problemSolving">Problem Solving:</label>
        <input
          type="text"
          id="problemSolving"
          name="problemSolving"
          value={values.problemSolving}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="experience">Experience:</label>
        <input
          type="text"
          id="experience"
          name="experience"
          value={values.experience}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="communicationSkills">Communication Skills:</label>
        <input
          type="text"
          id="communicationSkills"
          name="communicationSkills"
          value={values.communicationSkills}
          onChange={handleInputChange}
        />
      </div>
      <button
        type="submit"
        style={{ margin: "15px", padding: "5px 25px 5px 25px" }}
      >
        Submit
      </button>
    </form>
  );
}
