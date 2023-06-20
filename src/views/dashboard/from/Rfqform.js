// https://stackoverflow.com/questions/62663451/treating-warnings-as-errors-because-process-env-ci-true-failed-to-compile
 import Card from '../../../components/Card'
import imgsuccess from '../../../assets/images/pages/img-success.png'
import { Row, Col, Form, Image, Nav, Tab, FormCheck, Button, Accordion } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Base64Downloader from "react-base64-downloader";
import { useHistory, Link } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars-2';

const FormWizard = () => {
  
    const [postData1,setPostData1] = useState({
        // 1.js
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        Month: 
    new Date(Date.now()).getMonth()  ,
        //GENERAL								
        Company_Name: " ",
        Address: " ",
        City_State_Zip: " ",
        Contact: " ",
        Phone: " ",
        Email: " ",
        Engineering_Contact: " ",
        Phone: " ",
        Email: " ",
    
        //_DESCRIPTION_OF_PRODUCT_/_INTENDED_USE
        Description: " ",
    
        Voltage_1:	" ",			
        Current_Power_1:	" ",				
        Frequency_1:	" ",								
        Other_1:	" ",							

        //_MODEL_NUMBER			
        Model_Number_1: " ",
    
        //_CLASSIFICATION	
        Stationary: " ",
        Fixed: " ",// 
        Portable: " ", 
        Body_worn: " ",
        Mobile: " ",
        Hand_held: " ",
        Class_I: " ",
        Class_II: " ",
        Internally_: " ",
        USB_Powered: " ",
    
        //_SERVICES_REQUESTED	
        ETL_Listing_for_North_America_yes: " ",                      
        ETL_Classification_for_North_America_yes: " ",                      
        ETL_Recognition_for_North_America_yes: " ",                      
        FDA_ASCA_Pilot_Program_yes: " ",                      
        EU_Test_Reports_yes: " ",                      
        IEC_Test_Reports_yes: " ",                      
        CB_Scheme_Evaluation_yes: " ",                      
        Limited_Production_Certification_yes: " ",                      
        Field_Label_Evaluation_yes: " ",                      
        Design_Review_yes: " ",                      
        EMC_Testing_yes: " ",                      
        Test_Data_Only_yes: " ",                      
        ROHS_Evaluation_yes: " ",                      
        Performance_Testing_yes: " ",                      
        Intertek_Assurance_and_Consulting_yes: " ",                      
        Other_yes: " ",
        Testing_at_Manufacturers_Premises_yes: " ",
        Witness_Manufacturers_Testing_yes: " ",
        Intertek_Data_Acceptance_Program_SATELLITE_yes: " ",

        // NO
        ETL_Listing_for_North_America_no: " ",
        ETL_Classification_for_North_America_no: " ",
        ETL_Recognition_for_North_America_no: " ",
        FDA_ASCA_Pilot_Program_no: " ",
        EU_Test_Reports_no: " ",
        IEC_Test_Reports_no: " ",
        CB_Scheme_Evaluation_no: " ",
        Limited_Production_Certification_no: " ",
        Field_Label_Evaluation_no: " ",
        Design_Review_no: " ",
        EMC_Testing_no: " ",
        Test_Data_Only_no: " ",
        ROHS_Evaluation_no: " ",
        Performance_Testing_no: " ",
        Intertek_Assurance_and_Consulting_no: " ",
        Other_no: " ",
        Testing_at_Manufacturers_Premises_no: " ",
        Witness_Manufacturers_Testing_no: " ",
        Intertek_Data_Acceptance_Program_SATELLITE_no: " ",  
        
        Description_of_revision_1:" ",
        //REPORT_REVISION	
        Report_Numbers_to_be_Revised: " ",
        CDR_Listing_Report: " ",
        CB_Reports: " ",
        EU_Reports: " ",
        Description_of_revision: " ",
    
        //_INTENDED_MARKET_COUNTRIES	
        Australia_yes: " ",
        Brazil_yes: " ",
        Canada_yes: " ",
        China_yes: " ",
        Denmark_yes: " ",
        European_Union_yes: " ",
        Israel_yes: " ",
        Japan_yes: " ",
        Korea_yes: " ",
        Mexico_yes: " ",
        Saudi_Arabia_yes: " ",
        Singapore_yes: " ",
        Switzerland_yes: " ",
        United_Kingdom_yes: " ",
        United_States_yes: " ",
        Other_INTENDED_MARKET_COUNTRIES_yes: " ",

        Australia_no: " ",
        Brazil_no: " ",
        Canada_no: " ",
        China_no: " ",
        Denmark_no: " ",
        European_Union_no: " ",
        Israel_no: " ",
        Japan_no: " ",
        Korea_no: " ",
        Mexico_no: " ",
        Saudi_Arabia_no: " ",
        Singapore_no: " ",
        Switzerland_no: " ",
        United_Kingdom_no: " ",
        United_States_no: " ",
        Other_INTENDED_MARKET_COUNTRIES_no: " ",
    
        //_SPECIAL_REQUIRMENTS_FOR_FUNCTIONALITLY/TESTING_OF_THE_PRODUCT	
        SPECIAL_REQUIRMENTS_FOR_FUNCTIONALITLY_TESTING_OF_THE_PRODUCT: " ",
    
        //_REQUESTED_STANDARDS_FOR_EVALUATION		
        REQUESTED_STANDARDS_FOR_EVALUATION: " ",
        //_STANDARDS_QUESTIONS								
        Would_you_like_your_product_evaluated_to_the_first_amendment_of_60601_Third_Edition_yes: " ",
        Does_your_product_incorporate_the_use_of_software_yes: " ",
        Do_you_have_a_risk_management_file_for_your_product_that_is_compliant_with_the_requirements_of_ISO_14971_yes: " ",
        Intertek_currently_does_not_offer_an_evaluation_of_EN_ISO_14971_yes: " ", _2012_yes: " ", _which_requires_a_review_of_all_items_in_the_Risk_Management_File_against_the_differences_between_the_requirements_of_the_Medical_Device_Directive_and_ISO_14971: " ", _as_required_for_CE_marking_to_the_Medical_Device_Directive_yes: " ", _which_is_not_a_certification_provided_by_Intertek_yes: " ",
        Has_your_ISO_14971_Risk_Management_Process_been_reviewed_by_Intertek: " ",
        If_Yes_to_above_question_please_provide_Intertek_Project_Number_the_review_was_completed_under_yes: " ",
        Usability_File___Would_you_like_Intertek_to_evaluate_your_Usability_Engineering_File_against_IEC_62366_yes: " ", _2015_yes: " ",
        If_yes_to_a_usability_file_review_which_standard_would_you_like_Intertek_to_use_yes: " ",
        Does_your_product_have_alarms_incorporated_into_the_medical_device_606018_yes: " ",
        If_Yes_for_alarms_what_type_of_alarms_are_provided_yes: " ",
        Will_your_product_be_used_in_a_home_health_care_environment_606011_yes: " ",
        Does_your_product_incorporate_the_use_of_a_laser_60825_yes: " ",
        Does_your_product_incorporate_the_use_of_X_Ray_yes: " ",
        Does_your_product_use_batteries_yes: " ",
        If_yes_what_kind_of_battery_is_used_yes: " ",
        Does_your_product_incorporate_the_use_of_LEDs_as_luminaires_lamp_IEC_62471_yes: " ",
        Does_your_product_have_wireless_communication_capabilities_yes: " ",
        Will_your_product_be_used_in_a_emergency_medical_services_environment_606012_yes: " ",
        Is_the_product_rated_IP_rated_for_protection_against_solid_foreign_objects_yes: " ",
        Is_the_product_rated_IP_rated_for_protection_against_water_yes: " ",


        Would_you_like_your_product_evaluated_to_the_first_amendment_of_60601_Third_Edition_no: " ",
        Does_your_product_incorporate_the_use_of_software_no: " ",
        Do_you_have_a_risk_management_file_for_your_product_that_is_compliant_with_the_requirements_of_ISO_14971_no: " ",
        Intertek_currently_does_not_offer_an_evaluation_of_EN_ISO_14971_no: " ", _2012_no: " ", _which_requires_a_review_of_all_items_in_the_Risk_Management_File_against_the_differences_between_the_requirements_of_the_Medical_Device_Directive_and_ISO_14971: " ", _as_required_for_CE_marking_to_the_Medical_Device_Directive_no: " ", _which_is_not_a_certification_provided_by_Intertek_no: " ",
        Has_your_ISO_14971_Risk_Management_Process_been_reviewed_by_Intertek: " ",
        If_no_to_above_question_please_provide_Intertek_Project_Number_the_review_was_completed_under_no: " ",
        Usability_File___Would_you_like_Intertek_to_evaluate_your_Usability_Engineering_File_against_IEC_62366_no: " ", _2015_no: " ",
        If_no_to_a_usability_file_review_which_standard_would_you_like_Intertek_to_use_no: " ",
        Does_your_product_have_alarms_incorporated_into_the_medical_device_606018_no: " ",
        If_no_for_alarms_what_type_of_alarms_are_provided_no: " ",
        Will_your_product_be_used_in_a_home_health_care_environment_606011_no: " ",
        Does_your_product_incorporate_the_use_of_a_laser_60825_no: " ",
        Does_your_product_incorporate_the_use_of_X_Ray_no: " ",
        Does_your_product_use_batteries_no: " ",
        If_no_what_kind_of_battery_is_used_no: " ",
        Does_your_product_incorporate_the_use_of_LEDs_as_luminaires_lamp_IEC_62471_no: " ",
        Does_your_product_have_wireless_communication_capabilities_no: " ",
        Will_your_product_be_used_in_a_emergency_medical_services_environment_606012_no: " ",
        Is_the_product_rated_IP_rated_for_protection_against_solid_foreign_objects_no: " ",
        Is_the_product_rated_IP_rated_for_protection_against_water_no: " ",
    
        // 2.js
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        //_EMC_REQUEST_FOR_QUOTE								
        United_States_EMC_REQUEST_FOR_QUOTE: " ",
        Canada_EMC_REQUEST_FOR_QUOTE: " ",
        Europe_EMC_REQUEST_FOR_QUOTE: " ",
        Other_EMC_REQUEST_FOR_QUOTE: " ",
    
        //_Product_Information
        Product_name_and_or_model: " ",
        Type_of_equipment_equipment_description: " ",
        Where_is_the_equipment_intended_to_be_used: " ",
        Does_the_equipment_have_wireless_transmit_capability: " ",
        Equipment_dimensions_and_weight: " ",
    
        //_Power_Requirements_and_Equipment_Setup
        DC: " ",
        fiftyHz: " ",
        sixtyHz: " ",
        Other_Power_Requirements_and_Equipment_Setup: " ",
        one_two_zeroV: " ",
        TWOthreezeroV: " ",
        twozero8V: " ",
        twofourzeroV: " ",
        _380V: " ",
        _460V: " ",
        _Other_volt: " ",
        Phase: " ",
        Single: " ",
        Three_Phase: " ",
        Air: " ",
        PSI: " ",
        Gas: " ",
        Water: " ",
        GPM: " ",
        Other_Services: " ",
        Frequency_of_highest_clock_oscillator_in_your_system: " ",
        Approximate_set_up_time_for_your_device_in_hours: " ",
    
        // Cables
        List_all_AC_and_I_O_cables_that_your_equipment_uses: " ",
    
        //_Modes_of_Operation
        ONE_The_estimated_worst_case_operating_modes_should_be_selected_representing_most_typical_functions_of_the_equipment_to_be_tested_and_fully_exercise_all_components_systems: " ",
        TWO_The_estimated_worst_case_operating_modes_should_be_selected_representing_most_typical_functions_of_the_equipment_to_be_tested_and_fully_exercise_all_components_systems: " ",
    
        //Monitoring_of_the_Equipment_Under_Test: " ",
        Please_provide_instructions_below_on_how_to_observe_the_equipment_under_test_to_verify_proper_operation_in_all_modes: " ",
    
        // 3.js
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        ETLCB_Scheme_Certification_Support__Define_Applicable_Standards: " ",
        Electrical_Safety_Test_Plan_Preparation: " ",
        EMC_Test_Plan_Preparation: " ",
        Preliminary_Design__Construction_Review_PDR: " ",
        Prepare_or_Review_InsulationIsolation_Diagram: " ",
        Risk_Management_File_Review_and_Checklist_Completion: " ",
        Software_Lifecycle_Document_Review_and_Checklist_Completion: " ",
        Usability_File_Review_and_Checklist_Completion: " ",
        Accompanying_Documents_Review_and_Checklist_Completion: " ",
        Coexistence_Risk_Assessment__Test_Plan: " ",
        Cybersecurity_Risk_Assessment__Test_Plan: " ",
        Laboratory_Findings_Report_Review__Remediation: " ",
        EMC_Troubleshooting__Design_Review: " ",
        FDA_510k_Premarket_Notification_Regulatory_Submission: " ",
        FDA_De_Novo_Program_Regulatory_Submission: " ",
        FDA_Pre_Submission_Request_for_Feedback: " ",
        FDA_513g_Request_for_Classification: " ",
        EU_MDR_Technical_Documentation_Assessment: " ",
        EU_IVDR_Technical_Documentation_Assessment: " ",
        UK_Medical_Device_Technical_Documentation_Assessment: " ",
        UK_IVD_Technical_Documentation_Assessment: " ",
        Global_Market_Access___Regulatory_Requirements_Definition: " ",
        Global_Market_Access___Radio_Registration: " ",
        Global_Market_Access___Brazil_INMETRO_Certification: " ",
        Training___Medical_Device_Industry_Overview: " ",
        Training___Medical_Electrical_Standards_including_AIM_7351731: " ",
        Training___Risk_Management_per_ISO_14971_2019: " ",
        Training___Software_Lifecycle__FDA_Requirements: " ",
        Performance_Test_Method_Development__Validation: " ",
        Design_Verification_Support___Plans_and_Protocols: " ",
        Biological_Evaluation_Plans: " ",
        Formative_Usability_Study: " ",
        Summative_Usability_Study: " ",
    
        // 4.js
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        //_GENERAL_PRODUCT_SPECIFICATIONS
        Body_Worn_GENERAL_PRODUCT_SPECIFICATIONS: " ",
        Product_Classification: " ",
        Length_of_Product_mm: " ",
        Width_of_Product_mm: " ",
        Height_of_Product_mm: " ",
        Weight__of_Product_mm: " ",
        Transit_Operable: " ",
    
        //_PRODUCT_ENVIRONMENTAL_SPECIFICATIONS								
        Transport_and_Storage_Between_Uses: " ",
        Minimum_Ambient_Temperature_C: " ",
    
        Maximum_Ambient_Temperature_C: " ",
    
        Maximum_Humidity: " ",
    
        Low: " ", High: " ",
    
        BEFORE_Ambient_Temperature_Range_C: " ",
        AFTER_Ambient_Temperature_Range_C: " ",
    
        BEFORE_Relative_Humidity_Range: " ",
        AFTER_Relative_Humidity_Range: " ",
    
        BEFORE_Atmospheric_Pressure_Range_hPa: " ",
        AFTER_Atmospheric_Pressure_Range_hPa: " ",
        //_SUPPLY_MAINS_CONDITIONS								
    
    
        BEFORE_Voltage_Range_Vac: " ",
        AFTER_Voltage_Range_Vac: " ",
    
        BEFORE_Voltage_Range_Vdc: " ",
        AFTER_Voltage_Range_Vdc: " ",
        // 5.js
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
        //_GENERAL_LASER_INFORMATION								
    
        Laser_Manufacturer: " ",
    
        Model_Number_laser: " ",
    
        Laser_Classification: " ",
    
        FDA_Accession_Number: " ",
    
        // GENERAL_PRODUCT_INFORMATION								
    
        Proposed_Product_Laser_Classification: " ",
    
        Cooling_Means: " ",
    
        Gas_Connection: " ",
    
        // CONTINUOUS_WAVE_LASERS								
    
    
    
        Circular: " ", Beam_Diameter_CONTINUOUS_WAVE_LASERS: " ",
    
        Retangular: " ", Length: " ", Width: " ",
    
        Wavelength: " ",
    
        Maximum_Power: " ",
    
        Minimum_Power: " ",
    
        Duty_Cycle: " ",
    
        // PULSUED_LASERS								
    
    
    
        Circular: " ", Beam_Diameter_PULSUED_LASERS: " ",
    
        Retangular: " ", Length: " ", Width: " ",
    
        Wavelength: " ",
    
        Maximum_Energy: " ",
    
        Minimum_Energy: " ",
    
        Repetition_Rate: " ",
    
        Pulse_Width: " ",
    
        Maximum_Power: " ",
    
        Duty_Cycle: " ",
    
        // LASER_SAFETY								
        LASER_SAFETY: " ",
    
        // BEAM_HAZARDS								
    
        Optical_Density_for_Laser_Googles: " ",
    
        Maximum_Permissible_Exposure_Limit: " ",
    
        Nominal_Ocular_Hazard_Distance: " ",
    
        Beam_Divergence: " ",
    
        Focal_Distance: " ",
    
        Recommended_Beam_Dump: " ",
    
        NON_BEAM_HAZARDS: " ",
    
        BEFORE_Toxin_Hazards: " ",
        AFTER_Toxin_Hazards: " ",
    
        BEFORE_Carcinogens: " ",
        AFTER_Carcinogens: " ",
    
        BEFORE_Flammable_Gases: " ",
        AFTER_Flammable_Gases: " ",
    
        BEFORE_Asphyxiation: " ",
        AFTER_Asphyxiation: " ",
    
        BEFORE_Explosion: " ",
        AFTER_Explosion: " ",
    
        // PERSONAL_PROTECTIVE_EQUIPMENT					 			
    
        BEFORE_Coveralls: " ",
        AFTER_Coveralls: " ",
    
        BEFORE_Eye: " ",
        AFTER_Eye: " ",
    
        BEFORE_Hearing: " ",
        AFTER_Hearing: " ",
    
        BEFORE_Respirator: " ",
        AFTER_Respirator: " ",
    
        BEFORE_SCBA: " ",
        AFTER_SCBA: " ",
    
        BEFORE_Skin: " ",
        AFTER_Skin: " ",
    
        // FIRE_EXTINGUISHER								
    
        BCF_Power: " ",
    
        Carbon_Dioxide: " ",
    
        Dry_Power: " ",
    
        Foam: " ",
    
        Nitrogen: " ",
    
        Water: " ",
    
        // RECOMMENDED_SAFE_OPERATION_INSTRUCTIONS_FOR_FIRING_LASER								
        RECOMMENDED_SAFE_OPERATION_INSTRUCTIONS_FOR_FIRING_LASER: " ",
    
    
    
        // INTERTEK_USE								
    
        Location_INTERTEK_USE: " ",
    
        Laser_Engineer_Level: " ",
    
        Engineer: " ",
    
    
    
    
    
        // 6.js
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        //_TYPE_OF_INFUSION_PUMP								
    
        Volumetric_Infusion_Pump: " ",
    
        Drip_rate_Infusion_Pump: " ",
    
        Type_1___Continuous_Infusion_Flow_Only: " ",
    
        Type_2___Non_continuous_Flow_Only: " ",
    
        Type_3___Discrete_Delivery_of_a_Bolus: " ",
    
        Type_4___Type_1_Combined_With_Type_3_and_or_Type_2_in_Same_Equipment: " ",
    
        Type_5___Profile_Pump: " ",
    
        // FLOW_RATES								
    
        Minimum_FLOW_RATES: " ",
    
        Intermediate: " ",
    
        Maximum_FLOW_RATES: " ",
    
        // BOLUS								
    
        Minimum_BOLUS: " ",
    
        Maximum_BOLUS: " ",
    
        // INFUSION_SETS								
    
        Number_of_Infusion_Sets_Used_With_Equipment_Under_Test: " ",
    
    
    
    
        // 7.js
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        // CLIENT_PROBE_QUESTIONAIRE								
    
        Probe_Name: " ",
    
        System_Name: " ",
        Continuous_Wave: " ",
        Pulse_Type: " ",
        Circular: " ",
        Acoustic_Radiation_Aperture: " ",
    
        // CIRCULAR_APERTURES							
    
        Diameter_mm: " ",
    
        Focal_Location_mm: " ",
    
        // RECTANGULAR_APERATURES								
    
        Pitch_mm: " ",
    
        Elevation_Height_mm: " ",
    
        Evaluation_Focal_Location_mm: " ",
    
        // OTHER_APERTURES								
    
        Description: " ",
    
        Focal_Location_mm: " ",
    
        Aperature_Area_mm2: " ",
    
        // SCANNING_FORMAT								
        Linear: " ",
    
    
        Lines_per_Image: " ",
    
        Frame_Rate: " ",
    
        // SECTOR_FORMAT								
    
        Scan_Angle_deg: " ",
    
        ROC_OR_Apex_Distance_mm: " ",
    
        // LINEAR_FORMAT								
    
        Scan_Length_mm: " ",
    
    
    
        // PULSE_TYPES_ADD_ADDITIONAL_ROWS_IF_NEEDED								
    
        Number_of_Pulses_Types: " ",
        Description: " ",
    
        Nominal_Center_Frequency_MHz: " ",
    
        // ADDITIONAL_INFORMATION_FOR_DOPPLER_PULSE_TYPES								
    
        Number_of_PW_Gate_Sizes: " ",
    
        Range_of_PW_Gate_Sizes: " ",
    
        // FOCAL_LOCATIONS_ADD_ADDITIONAL_ROWS_IF_NEEDED								
    
        Number_of_Focal_Locations: " ",
    
        Focal_Depth_mm: " ",
    
        Number_of_Elements_Used: " ",
    
        Aperature_Area_mm2: " ",
    
        // NOTES								
        NOTES: " ",
    
    
        // 8.js
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // GENERAL_X-RAY_INFORMATION							
    
        X_Ray_Source: " ",
    
        Model_Number_xray: " ",
    
        HV_Generator: " ",
    
        Model_Number_xray_2: " ",
    
        Detector: " ",
    
        Model_Number_xray_3: " ",
    
        X_Ray_Type_Purpose: " ",
    
    
    
        // GENERAL_PRODUCT_INFORMATION							
    
        Product: " ",
    
        Model_Number_last: " ",
    
        Ratings: " ",
    
        Cooling_Means: " ",
    
        Gas_Connection: " ",
    })
    const [postData, setPostData] = useState({
        Regulatory_Model_Name: "",
        Product_Name: "",
        Regulatory_Family: "",
        Product_Category: "BATT",
        Product_Description: "",
        Model_Difference: "",
        Household: "",
        Commercial: "",
        Clinical: "",
        Applicable_Standards: "IEC 60086-1:2015",
        Applicant_Name_and_Address: "",
        Manufacturer_Name_and_Address: "",
        TradeMark: "",
        Family: "",
        Market: "Africa",

        Overall_Size_of_Equipment: "",
        WebGLShader: "mm",
        Voltage: "",
        Phase: "",
        Frequency: "",
        Power: "",
        Current: "",
        Operation_Mode: "",
        Ordinary_person: "",
        Children_likely_present: "",
        Instructed_person: "",
        Skilled_person: "",
        AC_mains: "",
        DC_mains: "",
        Battery_Powered: "",
        Skilled_person: "",

        Non_detachable_Supply_Cord: "",
        Appliance_Coupler: "",
        Direct_plug_in: "",
        Non_detachable_Supply_Cord_B: "",
        Appliance_Coupler_B: "",

        Permanent_connection: "",
        Mating_connector: "",
        Movable: "",
        Transportable: "",
        Stationary_for_building_in: "",
        Wall_ceiling_mounted_SRME_rack_mounted: "",
        Hand_held: "",
        Other: "",

        Pollution_Degree: "",
        Manufacturer_Specific_Max_Operating_Ambient: "",
        Ingree_Protection_Classification: "",
        Altitude_During_Operation: "",
        Mass_Of_Equipment: "",
        Relative_Humidity: "",
        Atmospheric_Pressure: "",
        Indoor: "",
        Outdoor: "",

        Copy_of_Marking_Plate: "",
        WarningOrCautionary_Marking: "",
        Fuse_Type: "",
        Fuse_Marking: "",

        //complaince report
        Report_Number: "No Option",
    });
    const [rfq_id, Setrfq_id] = useState();

    const [Name, SetName] = useState("");
    const [Work_Phone, SetWork_Phone] = useState("");
    const [Company_Name, SetCompany_Name] = useState("");
    const [vendordetails, Setvendordetails] = useState("");
    const [approver, Setapprover] = useState("");
    const [description, Setdescription] = useState("");
    const [
        any_other_instructions_for_quoting,
        Setany_other_instructions_for_quoting,
    ] = useState("");
    const [statement_for_qualification, Setstatement_for_qualification] = useState("");
    const [to, Setto] = useState("");
    const [status, Setstatus] = useState("Published");
    const [from, Setfrom] = useState("");

    const [postDZata, setPosZtData] = useState({
        name: '',
        to: '',
        from: '',
        Dates: '',
        vendordetails: '',

        approver: '',
        description: '',
        any_other_instructions_for_quoting: '',
        statement_for_qualification: '',
        status: ''
    });

    const [showf, setshowf] = useState(true)
    const [showf1, setshowf1] = useState(true)
    const [showf2, setshowf2] = useState(true)
    const [showf3, setshowf3] = useState(true)
    const [showf4, setshowf4] = useState(true)
    const [showf5, setshowf5] = useState(true)
    const [showf6, setshowf6] = useState(true)
    const [showf7, setshowf7] = useState(true)
    const [showf8, setshowf8] = useState(true)
    const [butt, setbutt] = useState(true)
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
    const navigate = useHistory();

    const handleSubmit = async () => {
        const result = fetch("http://localhost:5005/rfqmanagers", {
            method: "post",
            body: JSON.stringify(postData1),
            headers: { "Content-Type": "application/json" },
        });
        // result = await result.json();
        if (result) {
            alert("added Succesfully!");

            navigate.push('/')
        }

    };
    useEffect(async () => { if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) navigate.push('/auth/sign-in') }, []);
    useEffect(() => {
        if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
            if (user.username === "Admin1") { navigate.push('/approver') }
            else if (user.username !== "Admin") { navigate.push('/ath') }
        }
        else {
            navigate.push('/auth/sign-in')
        }
    }, [])
    const disableButton = () => {
        // if (showf === true && showf1 === true && showf2 === true && showf3 === true && showf4 === true && showf5 === true && showf6 === true && showf7 === true && showf8 === true) {
        //     const button = document.querySelector('#bttn')
        //     button.disabled = true
        //     alert("Please atleast fill one Input!");
        // }
        // else{



        //     const result = fetch("https://drab-wrap-jay.cyclic.app/rfqmanagers", {
        //         method: "post",
        //         body: JSON.stringify(postData1),
        //         headers: { "Content-Type": "application/json" },
        //     });
        //     // result = await result.json();
        //     if (result) {
        //         alert("added Succesfully!");
    
        //         navigate.push('/')
        //     }
    

        // }
        const result = fetch("https://drab-wrap-jay.cyclic.app/rfqmanagers", {
                method: "post",
                body: JSON.stringify(postData1),
                headers: { "Content-Type": "application/json" },
            });
            // result = await result.json();
            if (result) {
                alert("added Succesfully!");
    
                navigate.push('/')
            }


    }
    useEffect(() => {
        if (showf === false && showf1 === false && showf2 === false && showf3 === false && showf4 === false && showf5 === false && showf6 === false && showf7 === false && showf8 === false) {
            console.log('hello world')
            setbutt(false)
        }
    }, [])
    const [show, AccountShow] = useState('A');
    return (
        <>
            <div>
                <Row>
                    <Col sm="12" lg="12">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">RFQ Manager</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>

                                <Row>
                                    <Col>
                                        <Form.Check className="form-check form-switch form-check-inline">
                                            <FormCheck.Input type="checkbox" id="switch2"   onClick={() => setshowf(!showf)} />
                                            <FormCheck.Label className=" pl-2" htmlFor="switch2">Medical Safety</FormCheck.Label>
                                        </Form.Check>
                                    </Col>
                                    <br />

                                    <Col>
                                        <Form.Check className="form-check form-switch form-check-inline">
                                            <FormCheck.Input type="checkbox" id="switch2"   onClick={() => setshowf1(!showf1)} />
                                            <FormCheck.Label className=" pl-2" htmlFor="switch2">Medical EMC</FormCheck.Label>
                                        </Form.Check>
                                    </Col>
                                    <br />
                                    <Col>
                                        <Form.Check className="form-check form-switch form-check-inline">
                                            <FormCheck.Input type="checkbox" id="switch2"   onClick={() => setshowf2(!showf2)} />
                                            <FormCheck.Label className=" pl-2" htmlFor="switch2">Assurance Services</FormCheck.Label>
                                        </Form.Check>
                                    </Col>

                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <Form.Check className="form-check form-switch form-check-inline">
                                            <FormCheck.Input type="checkbox" id="switch2"   onClick={() => setshowf3(!showf3)} />
                                            <FormCheck.Label className=" pl-2" htmlFor="switch2">Home Healthcare</FormCheck.Label>
                                        </Form.Check>
                                    </Col>
                                    <br />

                                    <Col>
                                        <Form.Check className="form-check form-switch form-check-inline">
                                            <FormCheck.Input type="checkbox" id="switch2"   onClick={() => setshowf4(!showf4)} />
                                            <FormCheck.Label className=" pl-2" htmlFor="switch2">Laser Safety</FormCheck.Label>
                                        </Form.Check>
                                    </Col>
                                    <br />
                                    <Col>
                                        <Form.Check className="form-check form-switch form-check-inline">
                                            <FormCheck.Input type="checkbox" id="switch2"   onClick={() => setshowf5(!showf5)} />
                                            <FormCheck.Label className=" pl-2" htmlFor="switch2">Infusion Pump</FormCheck.Label>
                                        </Form.Check>
                                    </Col>

                                </Row>

                                <br />
                                <Row>
                                    <Col>
                                        <Form.Check className="form-check form-switch form-check-inline">
                                            <FormCheck.Input type="checkbox" id="switch2"   onClick={() => setshowf6(!showf6)} />
                                            <FormCheck.Label className=" pl-2" htmlFor="switch2">Ultrasound Probe</FormCheck.Label>
                                        </Form.Check>
                                    </Col>
                                    <br />

                                    <Col>
                                        <Form.Check className="form-check form-switch form-check-inline">
                                            <FormCheck.Input type="checkbox" id="switch2"   onClick={() => setshowf7(!showf7)} />
                                            <FormCheck.Label className=" pl-2" htmlFor="switch2">X-Ray</FormCheck.Label>
                                        </Form.Check>
                                    </Col>
                                    <br />
                                    <Col>
                                        <Form.Check className="form-check form-switch form-check-inline">
                                            <FormCheck.Input type="checkbox" id="switch2"   onClick={() => setshowf8(!showf8)} />
                                            <FormCheck.Label className=" pl-2" htmlFor="switch2">EMS Environment</FormCheck.Label>
                                        </Form.Check>
                                    </Col>

                                </Row>





                                <br />
                                <hr />


                                <div className="bd-example">    
                                    {
                                        showf ?



                                          null :   <Accordion defaultActiveKey="0"> <h2><i>--Medical Safety</i></h2><br />
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header><b>GENERAL</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Company Name:{" "}
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Company_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Company_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Address: *
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="Product_Name"
                                                                            className="form-control"
                                                                            value={postData.Address}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Address: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            City, State Zip: *
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.City_State_Zip}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    City_State_Zip: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Contact: *
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Contact}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Contact: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                        
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Phone:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Phone}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Phone: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Email:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Email}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Email: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Engineering Contact:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Engineering_Contact}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Engineering_Contact: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>




                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header><b> DESCRIPTION OF PRODUCT / INTENDED USE</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <Form.Group className="mb-3 form-group">
                                                                   
                                                                    <Form.Label htmlFor="exampleFormControlTextarea1"> DESCRIPTION OF PRODUCT / INTENDED USE</Form.Label>
                                                                    <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5"  value={postData.Description} onChange={(e) => setPostData({ ...postData, Description: e.target.value, }) }/>

                                                                </Form.Group>



                                                            </div>
                                                        </div>                                        </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header><b>MODEL NUMBER</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <Form.Group className="form-group">
                                                            <Form.Label htmlFor="exampleInputText1">Model </Form.Label>
                                                            <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5"  value={postData.Model_Number_1} onChange={(e) => setPostData({ ...postData, Model_Number_1: e.target.value, }) }/>

                                                            <Form.Control type="text" id="exampleInputText1" placeholder="Type here.." />
                                                        </Form.Group>
                                                    </Accordion.Body>
                                                </Accordion.Item>



                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header><b>ELECTRICAL RATINGS</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Voltage:{" "}
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Voltage_1}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Voltage_1: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Frequency: *
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="Product_Name"
                                                                            className="form-control"
                                                                            value={postData.Frequency_1}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Frequency_1: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Current/Power:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Current_Power_1}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Current_Power_1: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                   
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Other:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Other_1}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Other_1: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>




                                                            </div>
                                                        </div>                                        </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header><b>CLASSIFICATION</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Stationary:	{" "}
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Stationary}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Stationary: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Portable:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="Product_Name"
                                                                            className="form-control"
                                                                            value={postData.Portable}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Portable: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Mobile:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Mobile}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Mobile: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Class I:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Class_I}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Class_I: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Fixed:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Fixed}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Fixed: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                        
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Body-worn:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Body_worn}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Body_worn: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Hand-held:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Hand_held}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Hand_held: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                         
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Class II:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Class_II}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Class_II: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <p>Note: Class I means the product has a protective earth connection, Class II does not.</p>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Internally Powered:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Internally_}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Internally_: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            USB Powered:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.USB_Powered}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    USB_Powered: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>



                                                            </div>
                                                        </div>                                                 </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="5">
                                                    <Accordion.Header><b>SERVICES REQUESTED</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>ETL Listing for North America</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="ETL_Listing_for_North_America_yes">Yes</option>
                                                                            <option value="ETL_Listing_for_North_America_no">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: ETL Listing means all applicable standards - general, collateral, and particulars - are applied during the evaluation.
                                                                </u></i> </p>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label> ETL Classification for North America:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="ETL_Classification_for_North_America_yes">Yes</option>
                                                                            <option value="ETL_Classification_for_North_America_no">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: ETL Classification means some of the collateral standards or ISO standards were not completed during the evaluation.       </u>                     </i> </p>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>ETL Recognition for North America:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="ETL_Recognition_for_North_America_yes">Yes</option>
                                                                            <option value="ETL_Recognition_for_North_America_no">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: ETL Recognition is a component based evaluation in which all of the requirements of the standard can not be met do to the construction of the component.
                                                                </u>  </i> </p>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>FDA ASCA Pilot Program: </Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="FDA_ASCA_Pilot_Program_yes">Yes</option>
                                                                            <option value="FDA_ASCA_Pilot_Program_no">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: Under the ASCA Pilot, the FDA grants ASCA Recognition to qualified accreditation bodies to accredit testing laboratories to perform premarket testing for medical device companies. Relying upon international conformity assessment standards and a set of FDA-identified ASCA program specifications, the Pilot is intended to increase consistency and predictability in the FDA's approach to assessing conformance with FDA-recognized consensus standards and test methods eligible for inclusion in the ASCA Pilot in medical device premarket reviews.                            </u>  </i> </p>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>EU Test Reports:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="EU_Test_Reports_yes">Yes</option>
                                                                            <option value="EU_Test_Reports_no">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>                         Note: Test reports provided for EU are not an Intertek Certification, these reports can be used to assist with your submittal to a Notified Body in the EU. </u>
                                                                </i> </p>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>IEC Test Reports:					:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="IEC_Test_Reports_yes">Yes</option>
                                                                            <option value="IEC_Test_Reports_no">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: Test reports provided are not an Intertek Certification, these reports can be used to assist with your submittal to the FDA or clinical trials.                            </u> </i> </p>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>CB Scheme Evaluation:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="CB_Scheme_Evaluation_yes">Yes</option>
                                                                            <option value="CB_Scheme_Evaluation_no">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Limited Production Certification::</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Limited_Production_Certification_yes">Yes</option>
                                                                            <option value="Limited_Production_Certification_no">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: LPC evaluation is the same as a listing, except the certification does not require follow-up inspections as only a limited number of products are be produced.                            </u> </i> </p>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Field Label Evaluation::</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Field_Label_Evaluation_yes">Yes</option>
                                                                            <option value="Field_Label_Evaluation_no">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Design Review:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Design_Review_yes">Yes</option>
                                                                            <option value="Design_Review_no">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>


                                                                <p><i>
                                                                    Note: Intertek will request a list of question or goals expected from the design review.                            </i> </p>


                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>EMC Testing</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="EMC_Testing_yes">Yes</option>
                                                                            <option value="EMC_Testing_no">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label> Test Data Only:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Test_Data_Only_yes">Yes</option>
                                                                            <option value="Test_Data_Only_no">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>ROHS Evaluation:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="ROHS_Evaluation_yes">Yes</option>
                                                                            <option value="ROHS_Evaluation_no">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Performance Testing:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Performance_Testing_yes">Yes</option>
                                                                            <option value="Performance_Testing_no">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Intertek Assurance and Consulting:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Intertek_Assurance_and_Consulting_yes">Yes</option>
                                                                            <option value="Intertek_Assurance_and_Consulting_no">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Other:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Other_yes">Yes</option>
                                                                            <option value="Other_no">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Testing_at_Manufacturers_Premises_yes">Yes</option>
                                                                            <option value="Testing_at_Manufacturers_Premises_no">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Witness Manufacturer's Testing:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Witness_Manufacturers_Testing_yes">Yes</option>
                                                                            <option value="Witness_Manufacturers_Testing_no">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Intertek Data Acceptance Program SATELLITE (CTF)</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Intertek_Data_Acceptance_Program_SATELLITE_yes">Yes</option>
                                                                            <option value="Intertek_Data_Acceptance_Program_SATELLITE_no">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <Form.Group className="mb-3 form-group">
                                                                    <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                    <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5"     value={postData.Description_of_revision_1}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Description_of_revision_1: e.target.value,
                                                                            })
                                                                        }/>
                                                                </Form.Group>


                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="6">
                                                    <Accordion.Header><b>REPORT REVISION</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Report Numbers to be Revised:</Form.Label>
                                                                        <Form.Group className="form-group">

                                                                            <Form.Control type="text" id="exampleInputText1"    value={postData.Report_Numbers_to_be_Revised}onChange={(e) =>setPostData({...postData, Report_Numbers_to_be_Revised: e.target.value,})}/>

                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>CDR / Listing Report:</Form.Label>
                                                                        <Form.Group className="form-group">
                                                                            <Form.Control type="text" id="exampleInputText1"    value={postData.CDR_Listing_Report}onChange={(e) =>setPostData({...postData, CDR_Listing_Report: e.target.value,})}/>

                                                                        </Form.Group>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                        <Form.Group className="form-group">
                                                                            <Form.Control type="text" id="exampleInputText1"    value={postData.CB_Reports}onChange={(e) =>setPostData({...postData, CB_Reports: e.target.value,})}/>

                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>EU Reports:</Form.Label>
                                                                        <Form.Group className="form-group">
                                                                            <Form.Control type="text" id="exampleInputText1"    value={postData.EU_Reports}onChange={(e) =>setPostData({...postData, EU_Reports: e.target.value,})}/>

                                                                        </Form.Group>
                                                                    </div>
                                                                </div>

                                                                <Form.Group className="mb-3 form-group">
                                                                    <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                    <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5"     value={postData.Description_of_revision}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Description_of_revision: e.target.value,
                                                                            })
                                                                        }/>
                                                                </Form.Group>
                                                            </div>
                                                        </div>


                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="7">
                                                    <Accordion.Header><b>INTENDED MARKET COUNTRIES</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> Australia:		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Australia_yes">Yes</option>
                                                                        <option value="Australia_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Brazil:
                                                                    </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Brazil_yes">Yes</option>
                                                                        <option value="Brazil_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> Canada:
                                                                    </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Canada_yes">Yes</option>
                                                                        <option value="Canada_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> China:
                                                                    </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="China_yes">Yes</option>
                                                                        <option value="China_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Denmark:
                                                                    </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Denmark_yes">Yes</option>
                                                                        <option value="Denmark_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>European Union:
                                                                    </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="European_Union_yes">Yes</option>
                                                                        <option value="European_Union_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Israel:
                                                                    </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Israel_yes">Yes</option>
                                                                        <option value="Israel_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> Japan:
                                                                    </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Japan_yes">Yes</option>
                                                                        <option value="Japan_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> Korea:
                                                                    </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Korea_yes">Yes</option>
                                                                        <option value="Korea_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Mexico:
                                                                    </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Mexico_yes">Yes</option>
                                                                        <option value="Mexico_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Saudi Arabia
                                                                        :
                                                                    </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Saudi_Arabia_yes">Yes</option>
                                                                        <option value="Saudi_Arabia_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Singapore
                                                                        :
                                                                    </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Singapore_yes">Yes</option>
                                                                        <option value="Singapore_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Switzerland:
                                                                        :
                                                                    </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Switzerland_yes">Yes</option>
                                                                        <option value="Switzerland_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>United Kingdom
                                                                        :
                                                                    </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="United_Kingdom_yes">Yes</option>
                                                                        <option value="United_Kingdom_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>United States:
                                                                        :
                                                                    </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="United_States_yes">Yes</option>
                                                                        <option value="United_States_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <label className="form-label">
                                                                        Other:
                                                                        :	{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Other_INTENDED_MARKET_COUNTRIES_yes}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Other_INTENDED_MARKET_COUNTRIES_yes: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>

                                                        </div>


                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="8">
                                                    <Accordion.Header><b>SPECIAL REQUIRMENTS FOR FUNCTIONALITLY/TESTING OF THE PRODUCT</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <Form.Group className="mb-3 form-group">
                                                                    <Form.Label htmlFor="exampleFormControlTextarea1"> DESCRIPTION OF PRODUCT / INTENDED USE</Form.Label>
                                                                    <Form.Control as="textarea" id="exampleFormControlTextarea1"
                                                                     rows="5"
                                                                     value={postData.SPECIAL_REQUIRMENTS_FOR_FUNCTIONALITLY_TESTING_OF_THE_PRODUCT}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                SPECIAL_REQUIRMENTS_FOR_FUNCTIONALITLY_TESTING_OF_THE_PRODUCT: e.target.value,
                                                                            })
                                                                        } />
                                                                </Form.Group>



                                                            </div>
                                                        </div>                                                      </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="9">
                                                    <Accordion.Header><b>REQUESTED STANDARDS FOR EVALUATION</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <Form.Group className="mb-3 form-group">
                                                                    <Form.Label htmlFor="exampleFormControlTextarea1"> DESCRIPTION OF PRODUCT / INTENDED USE</Form.Label>
                                                                    <Form.Control as="textarea" id="exampleFormControlTextarea1"
                                                                     rows="5"
                                                                     value={postData.REQUESTED_STANDARDS_FOR_EVALUATION}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                REQUESTED_STANDARDS_FOR_EVALUATION: e.target.value,
                                                                            })
                                                                        } />
                                                                </Form.Group>



                                                            </div>
                                                        </div>                                                      </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="10">
                                                    <Accordion.Header><b> STANDARDS QUESTIONS</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> Would you like your product evaluated to the first amendment of 60601-1, Third Edition?						:		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Would_you_like_your_product_evaluated_to_the_first_amendment_of_60601_Third_Edition_yes">Yes</option>
                                                                        <option value="Would_you_like_your_product_evaluated_to_the_first_amendment_of_60601_Third_Edition_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>  Does your product incorporate the use of software?
                                                                        :		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Does_your_product_incorporate_the_use_of_software_yes">Yes</option>
                                                                        <option value="Does_your_product_incorporate_the_use_of_software_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> Do you have a risk management file for your product that is compliant with the requirements of ISO 14971?
                                                                        :		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Do_you_have_a_risk_management_file_for_your_product_that_is_compliant_with_the_requirements_of_ISO_14971_yes">Yes</option>
                                                                        <option value="Do_you_have_a_risk_management_file_for_your_product_that_is_compliant_with_the_requirements_of_ISO_14971_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Usability File - Would you like Intertek to evaluate your Usability Engineering File against IEC 62366-1: 2015?


                                                                        :		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Usability_File___Would_you_like_Intertek_to_evaluate_your_Usability_Engineering_File_against_IEC_62366_yes">Yes</option>
                                                                        <option value="Usability_File___Would_you_like_Intertek_to_evaluate_your_Usability_Engineering_File_against_IEC_62366_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p>"Note: Intertek Certification (Listing or CB Scheme) to IEC 60601-1 Amendment 1 utilizes ISO 14971: 2007 and IEC 60601-1 Amendment 2 utilizes ISO 14971:2019 for the Risk Management Process Review.
                                                                Intertek currently does not offer an evaluation of EN ISO 14971: 2012, which requires a review of all items in the Risk Management File against the differences between the requirements of the Medical Device Directive and ISO 14971, as required for CE marking to the Medical Device Directive, which is not a certification provided by Intertek"
                                                            </p>

                                                            <div className="col-md-3">

                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        If Yes to above question, please provide Intertek Project Number the review was completed under


                                                                        :{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.If_Yes_to_above_question_please_provide_Intertek_Project_Number_the_review_was_completed_under_yes}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                If_Yes_to_above_question_please_provide_Intertek_Project_Number_the_review_was_completed_under_yes: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>




                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Has your ISO 14971-1 Risk Management Process been reviewed by Intertek?

                                                                        :		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Has_your_ISO_14971_Risk_Management_Process_been_reviewed_by_Intertek">Yes</option>
                                                                        <option value="Has_your_ISO_14971_Risk_Management_Process_been_reviewed_by_Intertek">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>


                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>If yes to a usability file review which standard would you like Intertek to use:


                                                                        :		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="If_yes_to_a_usability_file_review_which_standard_would_you_like_Intertek_to_use_yes">Yes</option>
                                                                        <option value="No">If_yes_to_a_usability_file_review_which_standard_would_you_like_Intertek_to_use_no</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p>Note: IEC 60601-1:2005+A1: 2012, Ed. 3.0 requires compliance with IEC 60601-1-6:2010+A1:2013, Ed. 3.0 which reference compliance to IEC 62366:2007+A1:2014.  IEC 60601-1:2005+A1:2012+A2:202, Ed. 3.0 requires compliacne with IEC 60601-1:2010+A1:2013+A2:2020, Ed. 3.0 which references compliance to IEC 62366-1:2015+A1:2020, Ed. 1.0
                                                            </p>
                                                            
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> If Yes to above question, please provide Intertek Project Number the review was completed under



                                                                        :		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="If_Yes_to_above_question_please_provide_Intertek_Project_Number_the_review_was_completed_under_yes">Yes</option>
                                                                        <option value="If_Yes_to_above_question_please_provide_Intertek_Project_Number_the_review_was_completed_under_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Usability File - Would you like Intertek to evaluate your Usability Engineering File against IEC 62366-1: 2015?



                                                                        :		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Usability_File___Would_you_like_Intertek_to_evaluate_your_Usability_Engineering_File_against_IEC_62366_yes">Yes</option>
                                                                        <option value="Usability_File___Would_you_like_Intertek_to_evaluate_your_Usability_Engineering_File_against_IEC_62366_yes">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>If yes to a usability file review which standard would you like Intertek to use:




                                                                        :		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="If_yes_to_a_usability_file_review_which_standard_would_you_like_Intertek_to_use_yes">Yes</option>
                                                                        <option value="If_yes_to_a_usability_file_review_which_standard_would_you_like_Intertek_to_use_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p>Note: IEC 60601-1:2005+A1: 2012, Ed. 3.0 requires compliance with IEC 60601-1-6:2010+A1:2013, Ed. 3.0 which reference compliance to IEC 62366:2007+A1:2014.  IEC 60601-1:2005+A1:2012+A2:202, Ed. 3.0 requires compliacne with IEC 60601-1:2010+A1:2013+A2:2020, Ed. 3.0 which references compliance to IEC 62366-1:2015+A1:2020, Ed. 1.0
                                                            </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>  Does your product have alarms incorporated into the medical device 60601-1-8?




                                                                        :		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Does_your_product_have_alarms_incorporated_into_the_medical_device_606018_yes">Yes</option>
                                                                        <option value="Does_your_product_have_alarms_incorporated_into_the_medical_device_606018_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>If Yes for alarms what type of alarms are provided




                                                                        :		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="If_Yes_for_alarms_what_type_of_alarms_are_provided_yes">Yes</option>
                                                                        <option value="If_Yes_for_alarms_what_type_of_alarms_are_provided_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Will your product be used in a home health care environment 60601-1-11?





                                                                        :		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Will_your_product_be_used_in_a_home_health_care_environment_606011_yes">Yes</option>
                                                                        <option value="Will_your_product_be_used_in_a_home_health_care_environment_606011_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><b><u>If yes above, please fill out the Home Healthcare Quoting Tab
                                                            </u></b></p>
                                                            <p>"Note: Definition of a home healthcare environment - dwelling place in which a patient lives or other places where patients are present, excluding professional healthcare facility environments where operators with medical training are continually available when patients are present
                                                                Professional healthcare facilities include hospitals, physician offices, freestanding surgical centers, dental offices, freestanding birthing centers, limited care facilities, multiple treatment facilities, and emergency medical services.
                                                                Other places where patients are present include the outdoor environment, the office environment while working, and in vehicles"
                                                            </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Does your product incorporate the use of a laser 60825?





                                                                        :		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Does_your_product_incorporate_the_use_of_a_laser_60825_yes">Yes</option>
                                                                        <option value="Does_your_product_incorporate_the_use_of_a_laser_60825_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Does your product incorporate the use of X-Ray?





                                                                        :		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Does_your_product_incorporate_the_use_of_X_Ray_yes">Yes</option>
                                                                        <option value="Does_your_product_incorporate_the_use_of_X_Ray_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Does your product use batteries






                                                                        :		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Does_your_product_use_batteries_yes">Yes</option>
                                                                        <option value="Does_your_product_use_batteries_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>If yes what kind of battery is used:






                                                                        :		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="If_yes_what_kind_of_battery_is_used_yes">Yes</option>
                                                                        <option value="If_yes_what_kind_of_battery_is_used_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Does your product incorporate the use of LEDs as luminaires/lamp IEC 62471?






                                                                        :		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Does_your_product_incorporate_the_use_of_LEDs_as_luminaires_lamp_IEC_62471_yes">Yes</option>
                                                                        <option value="Does_your_product_incorporate_the_use_of_LEDs_as_luminaires_lamp_IEC_62471_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Does your product have wireless communication capabilities?






                                                                        :		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Does_your_product_have_wireless_communication_capabilities_yes">Yes</option>
                                                                        <option value="Does_your_product_have_wireless_communication_capabilities_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Will your product be used in a emergency medical services environment 60601-1-12?







                                                                        :		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Will_your_product_be_used_in_a_emergency_medical_services_environment_606012_yes">Yes</option>
                                                                        <option value="Will_your_product_be_used_in_a_emergency_medical_services_environment_606012_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p>"Note: The EMS ENVIRONMENT includes: – responding to and providing life support at the scene of an emergency to a PATIENT
                                                                reported as experiencing injury or illness in a pre-hospital setting, and transporting the PATIENT, while continuing such life support care, to an appropriate professional healthcare facility for further care.
                                                                – providing monitoring, treatment or diagnosis during transport between professional healthcare facilities."
                                                            </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Is the product rated IP rated for protection against solid foreign objects







                                                                        :		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Is_the_product_rated_IP_rated_for_protection_against_solid_foreign_objects_yes">Yes</option>
                                                                        <option value="Is_the_product_rated_IP_rated_for_protection_against_solid_foreign_objects_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Is the product rated IP rated for protection against water







                                                                        :		</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Is_the_product_rated_IP_rated_for_protection_against_water_yes">Yes</option>
                                                                        <option value="Is_the_product_rated_IP_rated_for_protection_against_water_no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>


                                                        </div>

                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion> 
                                    }
                                </div>
                                <div className="bd-example">
                                    {
                                        showf1 ?



                                         null :   <Accordion defaultActiveKey="0"><br /><h2><i>--Medical EMC</i></h2><br />
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header><b>EMC REQUEST FOR QUOTE
                                                    </b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-3">
                                                                    <div className="checkbox mb-3">
                                                                        <label className="form-label">
                                                                            Where do you intend to sell or market your product?:{" "}
                                                                        </label>
                                                                        <Form.Check className="form-check ">
                                                                            <Form.Check.Input type="checkbox" defaultValue="" id="flexCheckDefault3" />
                                                                            <Form.Check.Label htmlFor="flexCheckDefault3">
                                                                                United States
                                                                            </Form.Check.Label>

                                                                        </Form.Check>
                                                                        <Form.Check className="form-check ">
                                                                            <Form.Check.Input type="checkbox" defaultValue="" id="flexCheckDefault3" />
                                                                            <Form.Check.Label htmlFor="flexCheckDefault3">
                                                                                Canada
                                                                            </Form.Check.Label>

                                                                        </Form.Check>
                                                                        <Form.Check className="form-check ">
                                                                            <Form.Check.Input type="checkbox" defaultValue="" id="flexCheckDefault3" />
                                                                            <Form.Check.Label htmlFor="flexCheckDefault3">
                                                                                Europe
                                                                            </Form.Check.Label>

                                                                        </Form.Check>
                                                                        <label className="form-label">
                                                                            other:{" "}
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="  "
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>




                                                            </div>

                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header><b> Product Information
                                                    </b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Product name and/or model #:
                                                                            {" "}
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Type of equipment (equipment description):
                                                                            {" "}
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Where is the equipment intended to be used?

                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Does the equipment have wireless transmit capability?

                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Equipment dimensions and weight:

                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header><b>Power Requirements and Equipment Setup
                                                    </b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-3">
                                                                    <div className="checkbox mb-3">
                                                                        <label className="form-label">
                                                                            fREQUENCY:
                                                                        </label>
                                                                        <Form.Check className="form-check ">
                                                                            <Form.Check.Input type="checkbox" defaultValue="" id="flexCheckDefault3" />
                                                                            <Form.Check.Label htmlFor="flexCheckDefault3">
                                                                                DC
                                                                            </Form.Check.Label>

                                                                        </Form.Check>
                                                                        <Form.Check className="form-check ">
                                                                            <Form.Check.Input type="checkbox" defaultValue="" id="flexCheckDefault3" />
                                                                            <Form.Check.Label htmlFor="flexCheckDefault3">
                                                                                50Hz
                                                                            </Form.Check.Label>

                                                                        </Form.Check>
                                                                        <Form.Check className="form-check ">
                                                                            <Form.Check.Input type="checkbox" defaultValue="" id="flexCheckDefault3" />
                                                                            <Form.Check.Label htmlFor="flexCheckDefault3">
                                                                                60Hz
                                                                            </Form.Check.Label>

                                                                        </Form.Check>
                                                                        <label className="form-label">
                                                                            other:{" "}
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="  "
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-3">
                                                                    <div className="checkbox mb-3">
                                                                        <label className="form-label">
                                                                            Voltage:{" "}
                                                                        </label>
                                                                        <Form.Check className="form-check ">
                                                                            <Form.Check.Input type="checkbox" defaultValue="" id="flexCheckDefault3" />
                                                                            <Form.Check.Label htmlFor="flexCheckDefault3">
                                                                                120V
                                                                            </Form.Check.Label>

                                                                        </Form.Check>
                                                                        <Form.Check className="form-check ">
                                                                            <Form.Check.Input type="checkbox" defaultValue="" id="flexCheckDefault3" />
                                                                            <Form.Check.Label htmlFor="flexCheckDefault3">
                                                                                230V
                                                                            </Form.Check.Label>

                                                                        </Form.Check>
                                                                        <Form.Check className="form-check ">
                                                                            <Form.Check.Input type="checkbox" defaultValue="" id="flexCheckDefault3" />
                                                                            <Form.Check.Label htmlFor="flexCheckDefault3">
                                                                                208V
                                                                            </Form.Check.Label>

                                                                        </Form.Check>
                                                                        <Form.Check className="form-check ">
                                                                            <Form.Check.Input type="checkbox" defaultValue="" id="flexCheckDefault3" />
                                                                            <Form.Check.Label htmlFor="flexCheckDefault3">
                                                                                240V
                                                                            </Form.Check.Label>

                                                                        </Form.Check>
                                                                        <Form.Check className="form-check ">
                                                                            <Form.Check.Input type="checkbox" defaultValue="" id="flexCheckDefault3" />
                                                                            <Form.Check.Label htmlFor="flexCheckDefault3">
                                                                                380V
                                                                            </Form.Check.Label>

                                                                        </Form.Check>
                                                                        <Form.Check className="form-check ">
                                                                            <Form.Check.Input type="checkbox" defaultValue="" id="flexCheckDefault3" />
                                                                            <Form.Check.Label htmlFor="flexCheckDefault3">
                                                                                460V
                                                                            </Form.Check.Label>

                                                                        </Form.Check>
                                                                        <label className="form-label">
                                                                            other:{" "}
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="  "
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-3">
                                                                    <div className="checkbox mb-3">
                                                                        <label className="form-label">
                                                                            Current:<b>Phase</b>{" "}
                                                                        </label>
                                                                        <Form.Check className="form-check ">
                                                                            <Form.Check.Input type="checkbox" defaultValue="" id="flexCheckDefault3" />
                                                                            <Form.Check.Label htmlFor="flexCheckDefault3">
                                                                                Single
                                                                            </Form.Check.Label>

                                                                        </Form.Check>
                                                                        <Form.Check className="form-check ">
                                                                            <Form.Check.Input type="checkbox" defaultValue="" id="flexCheckDefault3" />
                                                                            <Form.Check.Label htmlFor="flexCheckDefault3">
                                                                                Three-Phase
                                                                            </Form.Check.Label>

                                                                        </Form.Check>

                                                                    </div>
                                                                </div>
                                                                <div className="col-3">
                                                                    <div className="checkbox mb-3">
                                                                        <label className="form-label">
                                                                            Services:{" "}
                                                                        </label>
                                                                        <Form.Check className="form-check ">
                                                                            <Form.Check.Input type="checkbox" defaultValue="" id="flexCheckDefault3" />
                                                                            <Form.Check.Label htmlFor="flexCheckDefault3">
                                                                                Air(PSI)
                                                                            </Form.Check.Label>

                                                                        </Form.Check>
                                                                        <Form.Check className="form-check ">
                                                                            <Form.Check.Input type="checkbox" defaultValue="" id="flexCheckDefault3" />
                                                                            <Form.Check.Label htmlFor="flexCheckDefault3">
                                                                                Gas
                                                                            </Form.Check.Label>

                                                                        </Form.Check>
                                                                        <Form.Check className="form-check ">
                                                                            <Form.Check.Input type="checkbox" defaultValue="" id="flexCheckDefault3" />
                                                                            <Form.Check.Label htmlFor="flexCheckDefault3">
                                                                                Water(GPM)
                                                                            </Form.Check.Label>

                                                                        </Form.Check>
                                                                        <label className="form-label">
                                                                            other:{" "}
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="  "
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>

                                                                </div>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Frequency of highest clock oscillator in your system:

                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Approximate set-up time for your device (in hours):

                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>



                                                            </div>

                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>



                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header><b>Cables</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">

                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1">List all AC and I/O cables that your equipment uses.
                                                                    :</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>
                                                        </div>                                        </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header><b>Modes of Operation
                                                    </b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="form-card text-start">

                                                                <Form.Group className="mb-3 form-group">
                                                                    <Form.Label htmlFor="exampleFormControlTextarea1">The estimated worst-case operating modes should be selected representing most typical functions of the equipment to be tested and fully exercise all components/systems.

                                                                        :</Form.Label>
                                                                    <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                                </Form.Group>
                                                            </div>
                                                        </div>                                                 </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="5">
                                                    <Accordion.Header><b>Monitoring of the Equipment Under Test:
                                                    </b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1">The estimated worst-case operating modes should be selected representing most typical functions of the equipment to be tested and fully exercise all components/systems.

                                                                    :</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>
                                                            <p>If available, please include a product brochure, spec. sheet, or link to your website for the product you would like evaluated.
                                                            </p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                            </Accordion>
                                    }
                                </div>
                                <div className="bd-example">
                                    {
                                        showf2 ?



                                        null :     <Accordion defaultActiveKey="0"><br /><h2><i>--Assurance Services</i></h2><br />
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header><b>Assurance Service Description</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  ETLCB Scheme Certification Support  Define Applicable Standards:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Electrical Safety Test Plan Preparation:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  EMC Test Plan Preparation:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Preliminary Design  Construction Review PDR:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Prepare or Review InsulationIsolation Diagram:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Risk Management File Review and Checklist Completion:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Software Lifecycle Document Review and Checklist Completion:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Usability File Review and Checklist Completion:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Accompanying Documents Review and Checklist Completion:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Coexistence Risk Assessment  Test Plan:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Cybersecurity Risk Assessment  Test Plan:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Laboratory Findings Report Review  Remediation:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  EMC Troubleshooting  Design Review:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  FDA 510k Premarket Notification Regulatory Submission:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  FDA De Novo Program Regulatory Submission:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  FDA Pre-Submission Request for Feedback:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  FDA 513g Request for Classification:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  U MDR Technical Documentation Assessment:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  EU IVDR Technical Documentation Assessment:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  UK Medical Device Technical Documentation Assessment:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  UK IVD Technical Documentation Assessment:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Global Market Access - Regulatory Requirements Definition:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Global Market Access - Radio Registration:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Global Market Access - Brazil INMETRO Certification:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Training - Medical Device Industry Overview:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Training - Medical Electrical Standards including AIM 7351731:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Training - Risk Management per ISO 14971 2019:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Training - Software Lifecycle  FDA Requirements:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Performance Test Method Development  Validation:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Design Verification Support - Plans and Protocols:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Biological Evaluation Plans:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Formative Usability Study:       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>  Summative Usability Study       </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                            </div>

                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>








                                            </Accordion>
                                    }
                                </div>
                                <div className="bd-example">
                                    {
                                        showf3 ?



                                        null :     <Accordion defaultActiveKey="0"><br /><h2><i>--Home Healthcare</i></h2><br />
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header><b>GENERAL PRODUCT SPECIFICATIONS
                                                    </b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">




                                                                <div className="col-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Product Classification:
                                                                        </Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Body Worn</option>

                                                                        </select>
                                                                    </div>











                                                                </div>







                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Length of Product (mm):

                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Width of Product (mm):

                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Height of Product (mm):

                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Weight  of Product (mm):


                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>


                                                                </div>
                                                                <div className="col-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Transit Operable

                                                                        </Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>

                                                                        </select>
                                                                    </div>













                                                                </div>


















                                                            </div>

                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header><b>PRODUCT ENVIRONMENTAL SPECIFICATIONS

                                                    </b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <h4> <u>Transport and Storage Between Uses: </u>
                                                                </h4>
                                                                <br/>
                                                                <br/>
                                                              
                                                                <div className="col-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Minimum Ambient Temperature (°C):

                                                                        </Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Body Worn</option>

                                                                        </select>
                                                                    </div>












                                                                </div>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Maximum Ambient Temperature (°C):



                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>


                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Maximum Humidity (%):



                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>


                                                                </div>





                                                               
                                                            </div>
                                                            

                                                            <br/>		
                                                                     <br/>	


                                                                     <h4><u>Maximum Humidity (%):	</u></h4>
                                                                     <div className="table-responsive mt-4">
                        <table id="basic-table" className="table table-striped mb-0" role="grid">
                           <thead>
                              <tr>
                             
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                       <h4><u>Environmental Operating Conditions		</u>	</h4>
                                    </div>
                                 </td>

                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td><div className="text-primary">Low</div></td>
                                 
                                    
                                    </div>
                                 </td>
                                 <td> </td>
                                 <td><div className="text-danger">High</div></td>
                                
                              </tr>          
                              <tr>
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                       <h6>Ambient Temperature Range (°C):					</h6>
                                    </div>
                                 </td>

                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>
                                 
                                    
                                    </div>
                                 </td>
                                 <td>  <h4>to					</h4></td>
                                 <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>
                                
                              </tr>     
                              <tr>
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                       <h6>Relative Humidity Range (%):							</h6>
                                    </div>
                                 </td>

                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>
                                 
                                    
                                    </div>
                                 </td>
                                 <td>  <h4>to					</h4></td>
                                 <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>
                                
                              </tr>     
                              <tr>
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                       <h6>Atmospheric Pressure Range (hPa):									</h6>
                                    </div>
                                 </td>

                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>
                                 
                                    
                                    </div>
                                 </td>
                                 <td>  <h4>to					</h4></td>
                                 <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>
                                
                              </tr>     
                         
                           </tbody>
                        </table>
                     </div>

                                                                   
                                                                      


                                                  
 


                                                        </div>                                        </Accordion.Body>
                                                </Accordion.Item>
                                              



                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header><b>SUPPLY MAINS CONDITIONS								</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            
                                                        <div className="table-responsive mt-4">
                        <table id="basic-table" className="table table-striped mb-0" role="grid">
                           <thead>
                              <tr>
                             
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                       <h4><u> 	</u>	</h4>
                                    </div>
                                 </td>

                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td><div className="text-primary">Low</div></td>
                                 
                                    
                                    </div>
                                 </td>
                                 <td> </td>
                                 <td><div className="text-danger">High</div></td>
                                
                              </tr>          
                              <tr>
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                       <h6>Voltage Range (Vac):							</h6>
                                    </div>
                                 </td>

                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>
                                 
                                    
                                    </div>
                                 </td>
                                 <td>  <h4>to					</h4></td>
                                 <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>
                                
                              </tr>     
                              <tr>
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                       <h6>Voltage Range (Vdc):									</h6>
                                    </div>
                                 </td>

                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>
                                 
                                    
                                    </div>
                                 </td>
                                 <td>  <h4>to					</h4></td>
                                 <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>
                                
                              </tr>     
                             
                         
                           </tbody>
                        </table>
                     </div>
                                                        </div>                                        </Accordion.Body>
                                                </Accordion.Item>
                                             
                                               
                                              
                                               
                                             
                                            </Accordion>
                                    }
                                </div>
                                <div className="bd-example">
                                    {
                                        showf4 ?



                                          null:  <Accordion defaultActiveKey="0"><br /><h2><i>--Laser Safety</i></h2><br />
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header><b>GENERAL LASER INFORMATION								</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                        
                                                         <div className='row'>
                                                         <div className="col-md-3"><div className="form-group"><Form.Label>Laser  Manufacturer :					</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>			
								
                                <div className="col-md-3"><div className="form-group"><Form.Label>Model  Number :		</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>						
                                                               
                                <div className="col-md-3"><div className="form-group"><Form.Label>Laser  Classification :	</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>							
                                                               
                                <div className="col-md-3"><div className="form-group"><Form.Label>FDA  Accession  Number :		</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>						
                                                       
                                                         </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header><b> GENERAL PRODUCT INFORMATION								</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                           
                                                            <div className="row">
                                                              

 <div className="col-md-3"><div className="form-group"><Form.Label>Proposed  Product  Laser  Classification :	</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>							
								
                                <div className="col-md-3"><div className="form-group"><Form.Label>Cooling  Means :				</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>				
                                                               
                                <div className="col-md-3"><div className="form-group"><Form.Label>Gas  Connection :	</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>	



                                                            </div>
                                                        </div>                                        </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header><b>CONTINUOUS WAVE LASERS								</b></Accordion.Header>
                                                    <Accordion.Body>
                                                    <h4>Is the beam?								</h4>
                                                         <div className='row'>
                                                         <div className="table-responsive mt-4">
                        <table id="basic-table" className="table table-striped mb-0" role="grid">
                           <thead>
                              <tr>
                             
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                       <h4><u>Circular:		</u>	</h4>
                                    </div>
                                 </td>

                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>
                                 
                                    
                                    </div>
                                 </td>
                                 <td>
                                   <div className="d-flex align-items-center">
                                 <td>   <h4><u> Beam Diameter:</u>	</h4> </td>

                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>
                                 
                                    
                                    </div>
                                 </td>
                             
                                
                              </tr>          
                              <tr>
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                       <h4><u>Retangular	:		</u>	</h4>
                                    </div>
                                 </td>

                                 <td>
                                   <div className="d-flex align-items-center">
                                 <td>   <h4><u> Length:</u>	</h4> </td>

                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>
                                 
                                    
                                    </div>
                                 </td>
                              
                                 <td>
                                   <div className="d-flex align-items-center">
                                 <td>   <h4><u> Width:</u>	</h4> </td>

                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>
                                 
                                    
                                    </div>
                                 </td>
                                
                              </tr>     
                         
                           </tbody>
                        </table>
                     </div>

                     <div className="col-md-3"><div className="form-group"><Form.Label>Wavelength  :	</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>							
								
                                <div className="col-md-3"><div className="form-group"><Form.Label>Maximum   Power  :	</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>							
                                                               
                                <div className="col-md-3"><div className="form-group"><Form.Label>Minimum   Power  :	</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>							
                                                               
                                <div className="col-md-3"><div className="form-group"><Form.Label>Duty   Cycle  :	</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>	
                                                         </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>



                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header><b>PULSUED LASERS								</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                           

<div className='row'>
<div className="table-responsive mt-4">
                        <table id="basic-table" className="table table-striped mb-0" role="grid">
                           <thead>
                              <tr>
                             
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                       <h4><u>Circular:		</u>	</h4>
                                    </div>
                                 </td>

                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>
                                 
                                    
                                    </div>
                                 </td>
                                 <td>
                                   <div className="d-flex align-items-center">
                                 <td>   <h4><u> Beam Diameter:</u>	</h4> </td>

                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>
                                 
                                    
                                    </div>
                                 </td>
                             
                                
                              </tr>          
                              <tr>
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                       <h4><u>Retangular	:		</u>	</h4>
                                    </div>
                                 </td>

                                 <td>
                                   <div className="d-flex align-items-center">
                                 <td>   <h4><u> Length:</u>	</h4> </td>

                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>
                                 
                                    
                                    </div>
                                 </td>
                              
                                 <td>
                                   <div className="d-flex align-items-center">
                                 <td>   <h4><u> Width:</u>	</h4> </td>

                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>
                                 
                                    
                                    </div>
                                 </td>
                                
                              </tr>     
                         
                           </tbody>
                        </table>
                     </div>

<div className="col-md-3"><div className="form-group"><Form.Label>    Maximum Energy:				</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>				
                                                                
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>   Minimum Energy:			</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>					
                                                                                                 
                                                               <div className="col-md-3"><div className="form-group"><Form.Label>    Repetition Rate:	</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>							
                                                                                                 
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>   Pulse Width:								
                                                                                                 </Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>   Maximum Power:	</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>	<p>(If Maximum Energy is Not Known)			</p>		 			
                                                                                                 
                                                                <div className="col-md-3"><div className="form-group"><Form.Label>   Duty Cycle:	</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                 
                                 
</div>

                                                        </div>                                        </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header><b>LASER SAFETY								</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            
                                                          
                                                        </div>                                                 </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="5">
                                                    <Accordion.Header><b>BEAM HAZARDS								</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            
                                                              
                                                      
                                                            <div className='row'>
                                                            <div className="col-md-3"><div className="form-group"><Form.Label>         Optical Density for Laser Googles:			</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>					
								
                                <div className="col-md-3"><div className="form-group"><Form.Label>      Maximum Permissible Exposure Limit:	</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>							
                                                               
                                <div className="col-md-3"><div className="form-group"><Form.Label>      Nominal Ocular Hazard Distance:	</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>							
                                                               
                                <div className="col-md-3"><div className="form-group"><Form.Label>      Beam Divergence:					</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>			
                                                               
                                <div className="col-md-3"><div className="form-group"><Form.Label>      Focal Distance:				</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>				
                                                               
                                <div className="col-md-3"><div className="form-group"><Form.Label>      Recommended Beam Dump:	</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="6">
                                                    <Accordion.Header><b>NON-BEAM HAZARDS				</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                            <div className="table-responsive mt-4">
                        <table id="basic-table" className="table table-striped mb-0" role="grid">
                           <thead>
                              <tr>
                             
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                       <h4><u>NON-BEAM HAZARDS			</u>	</h4>
                                    </div>
                                 </td>

                                
                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td>   <h4><u>  			</u>	</h4> </td>     

                                 
                                    
                                    </div>
                                 </td>
                                 <td>   <h4><u> SOURCE			:</u>	</h4> </td>
                                
                              </tr>          
                            
                              <tr>
                              <td>   <h5> Toxin Hazards:			 </h5> </td>

                                 
                                    
 
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                    <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                                    </div>
                                 </td>

                                
                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                             
                                 
                                    
                                    </div>
                                 </td>
                             

                             
                                
                              </tr> 
                              <tr>
                              <td>   <h5> Carcinogens:				 	</h5> </td>

                                 
                                    
 
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                    <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                                    </div>
                                 </td>

                                
                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                             
                                 
                                    
                                    </div>
                                 </td>
                             

                             
                                
                              </tr>     <tr>
                              <td>   <h5> Flammable Gases:				  	</h5> </td>

                                 
                                    
 
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                    <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                                    </div>
                                 </td>

                                
                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                             
                                 
                                    
                                    </div>
                                 </td>
                             

                             
                                
                              </tr> 
                              <tr>
                              <td>   <h5> Asphyxiation:						  	</h5> </td>

                                 
                                    
 
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                    <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                                    </div>
                                 </td>

                                
                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                             
                                 
                                    
                                    </div>
                                 </td>
                             

                             
                                
                              </tr> 
                              <tr>
                              <td>   <h5> Explosion:								  	</h5> </td>

                                 
                                    
 
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                    <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                                    </div>
                                 </td>

                                
                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                             
                                 
                                    
                                    </div>
                                 </td>
                             

                             
                                
                              </tr> 
                           </tbody>
                        </table>
                     </div>
                     

                                                            </div>
                                                         
                                                        </div>


                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="7">
                                                    <Accordion.Header><b>PERSONAL PROTECTIVE EQUIPMENT				</b></Accordion.Header>
                                                    <Accordion.Body>
                                                    <div className="form-card text-start">
                                                            <div className="row">
                                                            <div className="table-responsive mt-4">
                        <table id="basic-table" className="table table-striped mb-0" role="grid">
                           <thead>
                              <tr>
                             
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                       <h4><u>PERSONAL PROTECTIVE EQUIPMENT			</u>	</h4>
                                    </div>
                                 </td>

                                
                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td>   <h4><u>  			</u>	</h4> </td>     

                                 
                                    
                                    </div>
                                 </td>
                                 <td>   <h4><u> TYPE					:</u>	</h4> </td>
                                
                              </tr>          
                            
                              <tr>
                              <td>   <h5>Coveralls:					 </h5> </td>

                                 
                                    
 
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                    <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                                    </div>
                                 </td>

                                
                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                             
                                 
                                    
                                    </div>
                                 </td>
                             

                             
                                
                              </tr> 
                              <tr>
                              <td>   <h5> Eye:					 	</h5> </td>

                                 
                                    
 
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                    <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                                    </div>
                                 </td>

                                
                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                             
                                 
                                    
                                    </div>
                                 </td>
                             

                             
                                
                              </tr>     <tr>
                              <td>   <h5> Hearing:						  	</h5> </td>

                                 
                                    
 
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                    <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                                    </div>
                                 </td>

                                
                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                             
                                 
                                    
                                    </div>
                                 </td>
                             

                             
                                
                              </tr> 
                              <tr>
                              <td>   <h5>Respirator:							 	</h5> </td>

                                 
                                    
 
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                    <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                                    </div>
                                 </td>

                                
                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                             
                                 
                                    
                                    </div>
                                 </td>
                             

                             
                                
                              </tr> 
                              <tr>
                              <td>   <h5> SCBA:									  	</h5> </td>

                                 
                                    
 
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                    <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                                    </div>
                                 </td>

                                
                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                             
                                 
                                    
                                    </div>
                                 </td>
                             

                             
                                
                              </tr> 
                              <tr>
                              <td>   <h5>Skin:									  	</h5> </td>

                                 
                                    
 
                                 <td>
                                    <div className="d-flex align-items-center">
                                 
                                    <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                                    </div>
                                 </td>

                                
                                 <td>
                                   <div className="d-flex align-items-center">
                                   <td> <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value, }) } /></td>

                             
                                 
                                    
                                    </div>
                                 </td>
                             

                             
                                
                              </tr> 
                           </tbody>
                        </table>
                     </div>
                     

                                                            </div>
                                                         
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="8">
                                                    <Accordion.Header><b> FIRE EXTINGUISHER								</b></Accordion.Header>
                                                    <Accordion.Body>
                                                    <div className="form-card text-start">
                                                            <div className="row">
                                                            
  <div className="col-md-3"><div className="form-group"><Form.Label> BCF Power:		</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>						
								
                                <div className="col-md-3"><div className="form-group"><Form.Label> Carbon Dioxide:	</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>							
                                                               
                                <div className="col-md-3"><div className="form-group"><Form.Label> Dry Power:	</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>							
                                                               
                                <div className="col-md-3"><div className="form-group"><Form.Label> Foam:	</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>						
                                                               
                                <div className="col-md-3"><div className="form-group"><Form.Label> Nitrogen:</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>								
                                                               
                                <div className="col-md-3"><div className="form-group"><Form.Label> Water:		</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>
                                                            </div>
                                                            </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="9">
                                                    <Accordion.Header><b>RECOMMENDED SAFE OPERATION INSTRUCTIONS FOR FIRING LASER								</b></Accordion.Header>
                                                    <Accordion.Body>
                                                    <div className="form-card text-start">
                                                            <div className="row">
                                                            <Form.Group className="mb-3 form-group">
                                                                    <Form.Label htmlFor="exampleFormControlTextarea1"> DESCRIPTION OF PRODUCT / INTENDED USE</Form.Label>
                                                                    <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                                </Form.Group>
                                                            </div>
                                                            </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="10">
                                                    <Accordion.Header><b> INTERTEK USE								</b></Accordion.Header>
                                                    <Accordion.Body>


                                                    <div className="form-card text-start">
                                                            <div className="row">
                                                             
  <div className="col-md-3"><div className="form-group"><Form.Label> Location INTERTEK USE :		</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>						
								
                                <div className="col-md-3"><div className="form-group"><Form.Label> Laser Engineer Level	:</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div> 							
                                                               
                                <div className="col-md-3"><div className="form-group"><Form.Label> Engineer	: 		</Form.Label> <Form.Group className="form-group"> <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>
 </Form.Group></div></div>					
                                   
                                                            </div>
                                                            </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion> 
                                    }
                                </div>
                                <div className="bd-example">
                                    {
                                        showf5 ?



                                          null:   <Accordion defaultActiveKey="0"><br /><h2><i>--Infusion Pump</i></h2><br />
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header><b>TYPE OF INFUSION PUMP								</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            
								
                                                        <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                        Drip-rate Infusion Pump	:	
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>			
                                                                <div className="col-md-3"> <div className="form-group"> <label className="form-label">Type 1 - Continuous Infusion Flow Only	: </label> <input type="text" className="form-control" value={postData.Regulatory_Model_Name} onChange={(e) => setPostData({ ...postData, Regulatory_Model_Name: e.target.value, }) } /> </div> </div>			
                                                                <div className="col-md-3"> <div className="form-group"> <label className="form-label">Type 2 - Non-continuous Flow Only	 :</label> <input type="text" className="form-control" value={postData.Regulatory_Model_Name} onChange={(e) => setPostData({ ...postData, Regulatory_Model_Name: e.target.value, }) } /> </div> </div>			
                                                                <div className="col-md-3"> <div className="form-group"> <label className="form-label">Type 3 - Discrete Delivery of a Bolus	: </label> <input type="text" className="form-control" value={postData.Regulatory_Model_Name} onChange={(e) => setPostData({ ...postData, Regulatory_Model_Name: e.target.value, }) } /> </div> </div>			
                                                                <div className="col-md-3"> <div className="form-group"> <label className="form-label"> Type 4 - Type 1 Combined With Type 3 and/or Type 2 in Same Equipment	: </label> <input type="text" className="form-control" value={postData.Regulatory_Model_Name} onChange={(e) => setPostData({ ...postData, Regulatory_Model_Name: e.target.value, }) } /> </div> </div>			
                                                                <div className="col-md-3"> <div className="form-group"> <label className="form-label"> Type 5 - Profile Pump	: </label> <input type="text" className="form-control" value={postData.Regulatory_Model_Name} onChange={(e) => setPostData({ ...postData, Regulatory_Model_Name: e.target.value, }) } /> </div> </div>			
                                                   	
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header><b>FLOW RATES								</b></Accordion.Header>
                                                    <Accordion.Body>


                                                    <div className="form-card text-start">
                                                            
								
                                                            <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <label className="form-label">
                                                                            Minimum	(ml/hr):
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                value={postData.Regulatory_Model_Name}
                                                                                onChange={(e) =>
                                                                                    setPostData({
                                                                                        ...postData,
                                                                                        Regulatory_Model_Name: e.target.value,
                                                                                    })
                                                                                }
                                                                            />
                                                                        </div>
                                                                    </div>			
                                                                    <div className="col-md-3"> <div className="form-group"> <label className="form-label">Intermediate		(ml/hr)	: </label> <input type="text" className="form-control" value={postData.Regulatory_Model_Name} onChange={(e) => setPostData({ ...postData, Regulatory_Model_Name: e.target.value, }) } /> </div> </div>			
                                                                    <div className="col-md-3"> <div className="form-group"> <label className="form-label">Maximum		(ml/hr) :</label> <input type="text" className="form-control" value={postData.Regulatory_Model_Name} onChange={(e) => setPostData({ ...postData, Regulatory_Model_Name: e.target.value, }) } /> </div> </div>			
                                                           
                                                            </div>
                                                                                                </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header><b>BOLUS								</b></Accordion.Header>
                                                    <Accordion.Body>
                                                    <div className="form-card text-start">
                                                    <div className="col-md-3"> <div className="form-group"> <label className="form-label">Minimum			(ml/hr) :</label> <input type="text" className="form-control" value={postData.Regulatory_Model_Name} onChange={(e) => setPostData({ ...postData, Regulatory_Model_Name: e.target.value, }) } /> </div> </div>			

                                                    <div className="col-md-3"> <div className="form-group"> <label className="form-label">Maximum		(ml/hr) :</label> <input type="text" className="form-control" value={postData.Regulatory_Model_Name} onChange={(e) => setPostData({ ...postData, Regulatory_Model_Name: e.target.value, }) } /> </div> </div>			

                                                    </div>

                                                    </Accordion.Body>
                                                </Accordion.Item>



                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header><b>INFUSION SETS								</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                           
                                                              
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                        Number of Infusion Sets Used With Equipment Under Test 				:{" "}
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            
                                                        </div>                                        </Accordion.Body>
                                                </Accordion.Item>
                                       
                                            </Accordion> 
                                    }
                                </div>
                                <div className="bd-example">
                                    {
                                        showf6 ?



                                        null :     <Accordion defaultActiveKey="0"><br /><h2><i>--Ultrasound Probe</i></h2><br />
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header><b>CLIENT PROBE QUESTIONAIRE								</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Company Name:{" "}
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Address: *
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="Product_Name"
                                                                            className="form-control"
                                                                            value={postData.Product_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            City, State Zip: *
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Family}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Family: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Contact: *
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Phone:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Email:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Model_Difference}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Model_Difference: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Engineering Contact:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>




                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header><b> DESCRIPTION OF PRODUCT / INTENDED USE</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <Form.Group className="mb-3 form-group">
                                                                    <Form.Label htmlFor="exampleFormControlTextarea1"> DESCRIPTION OF PRODUCT / INTENDED USE</Form.Label>
                                                                    <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                                </Form.Group>



                                                            </div>
                                                        </div>                                        </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header><b>MODEL NUMBER</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <Form.Group className="form-group">
                                                            <Form.Label htmlFor="exampleInputText1">Model </Form.Label>
                                                            <Form.Control type="text" id="exampleInputText1" placeholder="Type here.." />
                                                        </Form.Group>
                                                    </Accordion.Body>
                                                </Accordion.Item>



                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header><b>ELECTRICAL RATINGS</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Voltage:{" "}
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Frequency: *
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="Product_Name"
                                                                            className="form-control"
                                                                            value={postData.Product_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            City, State Zip: *
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Family}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Family: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Current/Power:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Other:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>




                                                            </div>
                                                        </div>                                        </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header><b>CLASSIFICATION</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Stationary:	{" "}
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Portable:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="Product_Name"
                                                                            className="form-control"
                                                                            value={postData.Product_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Mobile:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Family}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Family: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Class I:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Fixed:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Fixed:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Body-worn:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Hand-held:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Body-worn:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Class II:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <p>Note: Class I means the product has a protective earth connection, Class II does not.</p>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Internally Powered:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            USB Powered:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>



                                                            </div>
                                                        </div>                                                 </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="5">
                                                    <Accordion.Header><b>SERVICES REQUESTED</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label> </Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: ETL Listing means all applicable standards - general, collateral, and particulars - are applied during the evaluation.
                                                                </u></i> </p>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label> ETL Classification for North America:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: ETL Classification means some of the collateral standards or ISO standards were not completed during the evaluation.       </u>                     </i> </p>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>ETL Recognition for North America:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: ETL Recognition is a component based evaluation in which all of the requirements of the standard can not be met do to the construction of the component.
                                                                </u>  </i> </p>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>FDA ASCA Pilot Program: </Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: Under the ASCA Pilot, the FDA grants ASCA Recognition to qualified accreditation bodies to accredit testing laboratories to perform premarket testing for medical device companies. Relying upon international conformity assessment standards and a set of FDA-identified ASCA program specifications, the Pilot is intended to increase consistency and predictability in the FDA's approach to assessing conformance with FDA-recognized consensus standards and test methods eligible for inclusion in the ASCA Pilot in medical device premarket reviews.                            </u>  </i> </p>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>EU Test Reports:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>                         Note: Test reports provided for EU are not an Intertek Certification, these reports can be used to assist with your submittal to a Notified Body in the EU. </u>
                                                                </i> </p>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>IEC Test Reports:					:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: Test reports provided are not an Intertek Certification, these reports can be used to assist with your submittal to the FDA or clinical trials.                            </u> </i> </p>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>CB Scheme Evaluation:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Limited Production Certification::</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: LPC evaluation is the same as a listing, except the certification does not require follow-up inspections as only a limited number of products are be produced.                            </u> </i> </p>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Field Label Evaluation::</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Design Review:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>


                                                                <p><i>
                                                                    Note: Intertek will request a list of question or goals expected from the design review.                            </i> </p>


                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>EMC Testing</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label> Test Data Only:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>ROHS Evaluation:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Performance Testing:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Intertek Assurance and Consulting:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Other:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Witness Manufacturer's Testing:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Intertek Data Acceptance Program SATELLITE (CTF)</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <Form.Group className="mb-3 form-group">
                                                                    <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                    <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                                </Form.Group>


                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="6">
                                                    <Accordion.Header><b>REPORT REVISION</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Report Numbers to be Revised:</Form.Label>
                                                                        <Form.Group className="form-group">
                                                                            <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>

                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>CDR / Listing Report:</Form.Label>
                                                                        <Form.Group className="form-group">
                                                                            <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>

                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                        <Form.Group className="form-group">
                                                                            <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>

                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>EU Reports:</Form.Label>
                                                                        <Form.Group className="form-group">
                                                                            <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>

                                                                        </Form.Group>
                                                                    </div>
                                                                </div>

                                                                <Form.Group className="mb-3 form-group">
                                                                    <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                    <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                                </Form.Group>
                                                            </div>
                                                        </div>


                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="7">
                                                    <Accordion.Header><b>INTENDED MARKET COUNTRIES</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="8">
                                                    <Accordion.Header><b>SPECIAL REQUIRMENTS FOR FUNCTIONALITLY/TESTING OF THE PRODUCT</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="9">
                                                    <Accordion.Header><b>REQUESTED STANDARDS FOR EVALUATION</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="10">
                                                    <Accordion.Header><b> STANDARDS QUESTIONS</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                    }
                                </div>
                                <div className="bd-example">
                                    {
                                        showf7 ?



                                           null: 
                                            <Accordion defaultActiveKey="0"><br /><h2><i>--X-Ray</i></h2><br />
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header><b>GENERAL</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Company Name:{" "}
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Address: *
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="Product_Name"
                                                                            className="form-control"
                                                                            value={postData.Product_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            City, State Zip: *
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Family}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Family: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Contact: *
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Phone:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Email:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Model_Difference}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Model_Difference: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Engineering Contact:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>




                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header><b> DESCRIPTION OF PRODUCT / INTENDED USE</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <Form.Group className="mb-3 form-group">
                                                                    <Form.Label htmlFor="exampleFormControlTextarea1"> DESCRIPTION OF PRODUCT / INTENDED USE</Form.Label>
                                                                    <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                                </Form.Group>



                                                            </div>
                                                        </div>                                        </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header><b>MODEL NUMBER</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <Form.Group className="form-group">
                                                            <Form.Label htmlFor="exampleInputText1">Model </Form.Label>
                                                            <Form.Control type="text" id="exampleInputText1" placeholder="Type here.." />
                                                        </Form.Group>
                                                    </Accordion.Body>
                                                </Accordion.Item>



                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header><b>ELECTRICAL RATINGS</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Voltage:{" "}
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Frequency: *
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="Product_Name"
                                                                            className="form-control"
                                                                            value={postData.Product_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            City, State Zip: *
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Family}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Family: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Current/Power:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Other:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>




                                                            </div>
                                                        </div>                                        </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header><b>CLASSIFICATION</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Stationary:	{" "}
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Portable:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="Product_Name"
                                                                            className="form-control"
                                                                            value={postData.Product_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Mobile:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Family}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Family: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Class I:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Fixed:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Fixed:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Body-worn:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Hand-held:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Body-worn:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Class II:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <p>Note: Class I means the product has a protective earth connection, Class II does not.</p>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Internally Powered:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            USB Powered:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>



                                                            </div>
                                                        </div>                                                 </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="5">
                                                    <Accordion.Header><b>SERVICES REQUESTED</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label> </Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: ETL Listing means all applicable standards - general, collateral, and particulars - are applied during the evaluation.
                                                                </u></i> </p>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label> ETL Classification for North America:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: ETL Classification means some of the collateral standards or ISO standards were not completed during the evaluation.       </u>                     </i> </p>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>ETL Recognition for North America:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: ETL Recognition is a component based evaluation in which all of the requirements of the standard can not be met do to the construction of the component.
                                                                </u>  </i> </p>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>FDA ASCA Pilot Program: </Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: Under the ASCA Pilot, the FDA grants ASCA Recognition to qualified accreditation bodies to accredit testing laboratories to perform premarket testing for medical device companies. Relying upon international conformity assessment standards and a set of FDA-identified ASCA program specifications, the Pilot is intended to increase consistency and predictability in the FDA's approach to assessing conformance with FDA-recognized consensus standards and test methods eligible for inclusion in the ASCA Pilot in medical device premarket reviews.                            </u>  </i> </p>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>EU Test Reports:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>                         Note: Test reports provided for EU are not an Intertek Certification, these reports can be used to assist with your submittal to a Notified Body in the EU. </u>
                                                                </i> </p>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>IEC Test Reports:					:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: Test reports provided are not an Intertek Certification, these reports can be used to assist with your submittal to the FDA or clinical trials.                            </u> </i> </p>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>CB Scheme Evaluation:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Limited Production Certification::</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: LPC evaluation is the same as a listing, except the certification does not require follow-up inspections as only a limited number of products are be produced.                            </u> </i> </p>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Field Label Evaluation::</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Design Review:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>


                                                                <p><i>
                                                                    Note: Intertek will request a list of question or goals expected from the design review.                            </i> </p>


                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>EMC Testing</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label> Test Data Only:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>ROHS Evaluation:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Performance Testing:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Intertek Assurance and Consulting:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Other:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Witness Manufacturer's Testing:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Intertek Data Acceptance Program SATELLITE (CTF)</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <Form.Group className="mb-3 form-group">
                                                                    <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                    <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                                </Form.Group>


                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="6">
                                                    <Accordion.Header><b>REPORT REVISION</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Report Numbers to be Revised:</Form.Label>
                                                                        <Form.Group className="form-group">
                                                                            <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>

                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>CDR / Listing Report:</Form.Label>
                                                                        <Form.Group className="form-group">
                                                                            <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>

                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                        <Form.Group className="form-group">
                                                                            <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>

                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>EU Reports:</Form.Label>
                                                                        <Form.Group className="form-group">
                                                                            <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>

                                                                        </Form.Group>
                                                                    </div>
                                                                </div>

                                                                <Form.Group className="mb-3 form-group">
                                                                    <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                    <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                                </Form.Group>
                                                            </div>
                                                        </div>


                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="7">
                                                    <Accordion.Header><b>INTENDED MARKET COUNTRIES</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="8">
                                                    <Accordion.Header><b>SPECIAL REQUIRMENTS FOR FUNCTIONALITLY/TESTING OF THE PRODUCT</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="9">
                                                    <Accordion.Header><b>REQUESTED STANDARDS FOR EVALUATION</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="10">
                                                    <Accordion.Header><b> STANDARDS QUESTIONS</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion> 
                                    }
                                </div>
                                <div className="bd-example">
                                    {
                                        showf8 ?



                                         null:    <Accordion defaultActiveKey="0"><br /><h2><i>--EMS Environment</i></h2><br />
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header><b>GENERAL</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Company Name:{" "}
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Address: *
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="Product_Name"
                                                                            className="form-control"
                                                                            value={postData.Product_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            City, State Zip: *
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Family}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Family: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Contact: *
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Phone:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Email:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Model_Difference}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Model_Difference: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Engineering Contact:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>




                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header><b> DESCRIPTION OF PRODUCT / INTENDED USE</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <Form.Group className="mb-3 form-group">
                                                                    <Form.Label htmlFor="exampleFormControlTextarea1"> DESCRIPTION OF PRODUCT / INTENDED USE</Form.Label>
                                                                    <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                                </Form.Group>



                                                            </div>
                                                        </div>                                        </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header><b>MODEL NUMBER</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <Form.Group className="form-group">
                                                            <Form.Label htmlFor="exampleInputText1">Model </Form.Label>
                                                            <Form.Control type="text" id="exampleInputText1" placeholder="Type here.." />
                                                        </Form.Group>
                                                    </Accordion.Body>
                                                </Accordion.Item>



                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header><b>ELECTRICAL RATINGS</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Voltage:{" "}
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Frequency: *
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="Product_Name"
                                                                            className="form-control"
                                                                            value={postData.Product_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            City, State Zip: *
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Family}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Family: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Current/Power:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Other:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>




                                                            </div>
                                                        </div>                                        </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header><b>CLASSIFICATION</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Stationary:	{" "}
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Model_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Model_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Portable:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="Product_Name"
                                                                            className="form-control"
                                                                            value={postData.Product_Name}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Name: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Mobile:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Regulatory_Family}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Regulatory_Family: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Class I:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Fixed:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Fixed:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Body-worn:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Hand-held:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Body-worn:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Class II:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <p>Note: Class I means the product has a protective earth connection, Class II does not.</p>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Internally Powered:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            USB Powered:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={postData.Product_Description}
                                                                            onChange={(e) =>
                                                                                setPostData({
                                                                                    ...postData,
                                                                                    Product_Description: e.target.value,
                                                                                })
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>



                                                            </div>
                                                        </div>                                                 </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="5">
                                                    <Accordion.Header><b>SERVICES REQUESTED</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label> </Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: ETL Listing means all applicable standards - general, collateral, and particulars - are applied during the evaluation.
                                                                </u></i> </p>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label> ETL Classification for North America:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: ETL Classification means some of the collateral standards or ISO standards were not completed during the evaluation.       </u>                     </i> </p>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>ETL Recognition for North America:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: ETL Recognition is a component based evaluation in which all of the requirements of the standard can not be met do to the construction of the component.
                                                                </u>  </i> </p>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>FDA ASCA Pilot Program: </Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: Under the ASCA Pilot, the FDA grants ASCA Recognition to qualified accreditation bodies to accredit testing laboratories to perform premarket testing for medical device companies. Relying upon international conformity assessment standards and a set of FDA-identified ASCA program specifications, the Pilot is intended to increase consistency and predictability in the FDA's approach to assessing conformance with FDA-recognized consensus standards and test methods eligible for inclusion in the ASCA Pilot in medical device premarket reviews.                            </u>  </i> </p>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>EU Test Reports:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>                         Note: Test reports provided for EU are not an Intertek Certification, these reports can be used to assist with your submittal to a Notified Body in the EU. </u>
                                                                </i> </p>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>IEC Test Reports:					:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: Test reports provided are not an Intertek Certification, these reports can be used to assist with your submittal to the FDA or clinical trials.                            </u> </i> </p>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>CB Scheme Evaluation:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Limited Production Certification::</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <p><i><u>
                                                                    Note: LPC evaluation is the same as a listing, except the certification does not require follow-up inspections as only a limited number of products are be produced.                            </u> </i> </p>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Field Label Evaluation::</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Design Review:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>


                                                                <p><i>
                                                                    Note: Intertek will request a list of question or goals expected from the design review.                            </i> </p>


                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>EMC Testing</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label> Test Data Only:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>ROHS Evaluation:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Performance Testing:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Intertek Assurance and Consulting:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Other:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Witness Manufacturer's Testing:</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Intertek Data Acceptance Program SATELLITE (CTF)</Form.Label>
                                                                        <select className="form-select mb-3 shadow-none">
                                                                            <option defaultValue>Open this select menu</option>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <Form.Group className="mb-3 form-group">
                                                                    <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                    <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                                </Form.Group>


                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="6">
                                                    <Accordion.Header><b>REPORT REVISION</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-card text-start">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    {/* <h3 className="mb-4">Account Information: </h3> */}
                                                                </div>
                                                                <div className="col-5">
                                                                    {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Report Numbers to be Revised:</Form.Label>
                                                                        <Form.Group className="form-group">
                                                                            <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>

                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>CDR / Listing Report:</Form.Label>
                                                                        <Form.Group className="form-group">
                                                                            <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>

                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                        <Form.Group className="form-group">
                                                                            <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>

                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">


                                                                        <Form.Label>EU Reports:</Form.Label>
                                                                        <Form.Group className="form-group">
                                                                            <Form.Control type="text" id="exampleInputText1"    value={postData.Description_of_revision_1}onChange={(e) =>setPostData({...postData, Description_of_revision_1: e.target.value,})}/>

                                                                        </Form.Group>
                                                                    </div>
                                                                </div>

                                                                <Form.Group className="mb-3 form-group">
                                                                    <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                    <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                                </Form.Group>
                                                            </div>
                                                        </div>


                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="7">
                                                    <Accordion.Header><b>INTENDED MARKET COUNTRIES</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="8">
                                                    <Accordion.Header><b>SPECIAL REQUIRMENTS FOR FUNCTIONALITLY/TESTING OF THE PRODUCT</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="9">
                                                    <Accordion.Header><b>REQUESTED STANDARDS FOR EVALUATION</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="10">
                                                    <Accordion.Header><b> STANDARDS QUESTIONS</b></Accordion.Header>
                                                    <Accordion.Body>
                                                        This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion> 
                                    }
                                </div>
                                <br />

                                {
                                    butt ?

                                        <button type="button" name="next" className="btn btn-primary next action-button float-end" value="Next" id='bttn' onClick={disableButton}> Submit </button>
                                        : null}

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default FormWizard
