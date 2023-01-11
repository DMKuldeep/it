import React from "react";
import "@fontsource/poppins";
import "./CrmHomepage.css";
import SideBar from "./SideBar";
import Table from "react-bootstrap/Table";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const CrmHomepage = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>

          <div className="col-md-10">
            <br /> <br />
            <div className="row">
              <div className="col-md-12">
                <br />
                <form>
                  <div className="row">
                    <div className="col-md-3">
                      <div class="form-group">
                      <label for="from" style={{ color: "#002060" }}>
                      Start Date
                    </label>
                      <input type="date" class="form-control" id="source" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div class="form-group">
                        <label for="from" style={{ color: "#002060" }}>
                          End Date
                        </label>
                        &nbsp;
                        <input type="date" class="form-control" id="source" />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div class="form-group">
                        <label for="from" style={{ color: "#002060" }}>
                          User
                        </label>
                        <div class="form-group">
                          <select
                            border="1px solid black"
                            class="form-select form-control"
                          >
                            <option value="">--All--</option>
                            <option value="raj">
                              raj&nbsp;(&nbsp;Admin&nbsp;)&nbsp;
                            </option>
                            <option value="Ramesh">
                              Ramesh&nbsp;(&nbsp;L0&nbsp;)&nbsp;
                            </option>
                            <option value="naveen">
                              naveen&nbsp;(&nbsp;KNE&nbsp;)&nbsp;
                            </option>
                            <option value="RM Group">
                              RM Group&nbsp;(&nbsp;L0&nbsp;)&nbsp;
                            </option>
                            <option value="vijay">
                              vijay&nbsp;(&nbsp;L0&nbsp;)&nbsp;
                            </option>
                            <option value="AutoEmailAgent">
                              AutoEmailAgent&nbsp;(&nbsp;Admin&nbsp;)&nbsp;
                            </option>
                            <option value="Rajesh">
                              Rajesh&nbsp;(&nbsp;L1&nbsp;)&nbsp;
                            </option>
                            <option value="AutoWebAgent">
                              AutoWebAgent&nbsp;(&nbsp;L0&nbsp;)&nbsp;
                            </option>
                            <option value="bhutani12">
                              bhutani12&nbsp;(&nbsp;L0&nbsp;)&nbsp;
                            </option>
                            <option value="skd">
                              skd&nbsp;(&nbsp;L2&nbsp;)&nbsp;
                            </option>
                            <option value="abc">
                              abc&nbsp;(&nbsp;KNE&nbsp;)&nbsp;
                            </option>
                            <option value="abcd">
                              abcd&nbsp;(&nbsp;KNE&nbsp;)&nbsp;
                            </option>
                            <option value="abcde">
                              abcde&nbsp;(&nbsp;KNE&nbsp;)&nbsp;
                            </option>
                            <option value="bcde">
                              bcde&nbsp;(&nbsp;KNE&nbsp;)&nbsp;
                            </option>
                            <option value="bc1de">
                              bc1de&nbsp;(&nbsp;KNE&nbsp;)&nbsp;
                            </option>
                            <option value="bc21de">
                              bc21de&nbsp;(&nbsp;KNE&nbsp;)&nbsp;
                            </option>
                            <option value="bc021de">
                              bc021de&nbsp;(&nbsp;KNE&nbsp;)&nbsp;
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div class="form-group">
                        <br /> &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button
                          type="button"
                          class="btn"
                          style={{ backgroundColor: "#002060", color: "#fff" }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <br />

                <table class="table table-bordered">
                  <tbody>
                    <tr>
                      <th style={{ color: "#002060" }}>SLA</th>
                      <th style={{ color: "#002060" }}>Severity </th>
                      <th style={{ color: "#002060" }}>Status</th>
                    </tr>

                    <tr>
                      <td>
                        > 2hrs <a href="1">1</a> &nbsp; &nbsp; &nbsp; &nbsp;
                      </td>
                      <td>
                        {" "}
                        Severity- <a href="1">1</a> &nbsp; &nbsp;
                      </td>
                      <td>
                        Open <a href="1">1</a> &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      </td>
                    </tr>

                    <tr>
                      <td>
                        > 3-6 hrs <a href="2">2</a>&nbsp; &nbsp;
                      </td>
                      <td>
                        {" "}
                        Severity- <a href="2">2</a> &nbsp; &nbsp;
                      </td>
                      <td>
                        Closed <a href="1">1</a> &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      </td>
                    </tr>

                    <tr>
                      <td>
                        > 7-12 hrs <a href="1">3</a> &nbsp;
                      </td>
                      <td>
                        {" "}
                        Severity- <a href="1">3</a> &nbsp; &nbsp;
                      </td>
                      <td>
                        Partially Opened <a href="1">1</a> &nbsp;
                      </td>
                    </tr>

                    <tr>
                      <td>
                        >12 hrs <a href="4">4</a> &nbsp; &nbsp; &nbsp;
                      </td>
                      <td>
                        {" "}
                        Severity- <a href="4">4</a> &nbsp; &nbsp;
                      </td>
                      <td>
                        SPV Approval <a href="1">5</a> &nbsp; &nbsp;&nbsp;&nbsp;
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <Table striped bordered hover="sm">
                  <tbody>
                    <tr>
                      <th style={{ color: "#002060" }}> #</th>
                      <th style={{ color: "#002060" }}> Date Time</th>
                      <th style={{ color: "#002060" }}> Description</th>
                      <th style={{ color: "#002060" }}> Phone/Email</th>
                      <th style={{ color: "#002060" }}> Category</th>
                      <th style={{ color: "#002060" }}> Sub Category</th>
                      <th style={{ color: "#002060" }}> Ticket</th>
                      <th style={{ color: "#002060" }}> Status</th>
                      <th style={{ color: "#002060" }}> Sev</th>
                      <th style={{ color: "#002060" }}> Expected TAT</th>
                      <th style={{ color: "#002060" }}> Actual TAT</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>01-01-2023; 10:20</td>
                      <td>Server Error</td>
                      <td>abc@gmail.com</td>
                      <td>1</td>
                      <td>2</td>
                      <td>5</td>
                      <td>Pending</td>
                      <td>10</td>
                      <td>25-01-2023</td>
                      <td>28-01-2023</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>01-01-2023; 10:20</td>
                      <td>Server Error</td>
                      <td>abc@gmail.com</td>
                      <td>1</td>
                      <td>2</td>
                      <td>5</td>
                      <td>Pending</td>
                      <td>10</td>
                      <td>25-01-2023</td>
                      <td>28-01-2023</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>01-01-2023; 10:20</td>
                      <td>Server Error</td>
                      <td>abc@gmail.com</td>
                      <td>1</td>
                      <td>2</td>
                      <td>5</td>
                      <td>Pending</td>
                      <td>10</td>
                      <td>25-01-2023</td>
                      <td>28-01-2023</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>01-01-2023; 10:20</td>
                      <td>Server Error</td>
                      <td>abc@gmail.com</td>
                      <td>1</td>
                      <td>2</td>
                      <td>5</td>
                      <td>Pending</td>
                      <td>10</td>
                      <td>25-01-2023</td>
                      <td>28-01-2023</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>01-01-2023; 10:20</td>
                      <td>Server Error</td>
                      <td>abc@gmail.com</td>
                      <td>1</td>
                      <td>2</td>
                      <td>5</td>
                      <td>Pending</td>
                      <td>10</td>
                      <td>25-01-2023</td>
                      <td>28-01-2023</td>
                    </tr>
                  </tbody>
                </Table>
                <br />
                <p>
                  Press <b>Submit</b> and check console for URL-encoded form
                  data that would be submitted.
                </p>
                <button
                  type="button"
                  class="btn"
                  style={{ backgroundColor: "#002060", color: "#fff" }}
                >
                  Submit
                </button>
                <br />
                <br />
                <p>Selected rows data:</p>
                <br />
                <p>Form data as submitted to the server:</p>
                <form>
                  <div className="row">
                    <div className="col-md-4">
                      <div class="form-group">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        <label for="from">Assign/Transfer To</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div class="form-group">
                        <select
                          border="1px solid black"
                          class="form-select form-control"
                        >
                          <option value="">--Select--</option>
                          <option value="raj">
                            raj&nbsp;(&nbsp;Admin&nbsp;)&nbsp;
                          </option>
                          <option value="Ramesh">
                            Ramesh&nbsp;(&nbsp;L0&nbsp;)&nbsp;
                          </option>
                          <option value="naveen">
                            naveen&nbsp;(&nbsp;KNE&nbsp;)&nbsp;
                          </option>
                          <option value="RM Group">
                            RM Group&nbsp;(&nbsp;L0&nbsp;)&nbsp;
                          </option>
                          <option value="vijay">
                            vijay&nbsp;(&nbsp;L0&nbsp;)&nbsp;
                          </option>
                          <option value="AutoEmailAgent">
                            AutoEmailAgent&nbsp;(&nbsp;Admin&nbsp;)&nbsp;
                          </option>
                          <option value="Rajesh">
                            Rajesh&nbsp;(&nbsp;L1&nbsp;)&nbsp;
                          </option>
                          <option value="AutoWebAgent">
                            AutoWebAgent&nbsp;(&nbsp;L0&nbsp;)&nbsp;
                          </option>
                          <option value="bhutani12">
                            bhutani12&nbsp;(&nbsp;L0&nbsp;)&nbsp;
                          </option>
                          <option value="skd">
                            skd&nbsp;(&nbsp;L2&nbsp;)&nbsp;
                          </option>
                          <option value="abc">
                            abc&nbsp;(&nbsp;KNE&nbsp;)&nbsp;
                          </option>
                          <option value="abcd">
                            abcd&nbsp;(&nbsp;KNE&nbsp;)&nbsp;
                          </option>
                          <option value="abcde">
                            abcde&nbsp;(&nbsp;KNE&nbsp;)&nbsp;
                          </option>
                          <option value="bcde">
                            bcde&nbsp;(&nbsp;KNE&nbsp;)&nbsp;
                          </option>
                          <option value="bc1de">
                            bc1de&nbsp;(&nbsp;KNE&nbsp;)&nbsp;
                          </option>
                          <option value="bc21de">
                            bc21de&nbsp;(&nbsp;KNE&nbsp;)&nbsp;
                          </option>
                          <option value="bc021de">
                            bc021de&nbsp;(&nbsp;KNE&nbsp;)&nbsp;
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div class="form-group">
                        <button
                          type="button"
                          class="btn"
                          style={{ backgroundColor: "#002060", color: "#fff" }}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CrmHomepage;
