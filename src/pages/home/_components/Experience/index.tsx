import React, { useState } from "react";
import Tabs from "../../../../components/Tabs";
import type { TabItem } from "../../../../components/Tabs";
import About from "../About";
import Template from "./Template";

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabItems: TabItem[] = [
    {
      title: "Revenue Monster",
      component: function RevenueMonster() {
        return (
          <Template
            designation="Front-end Developer"
            companyName="Revenue Monster"
            companyLink="https://revenuemonster.my/"
            companyState="Remote"
            from="June 2020"
            to="Present"
          >
            <ul className="list-disc text-base list-inside space-y-2">
              <li>Assist in various internal and external projects</li>
              <li>
                Involved in developing Web Application and Desktop Application
              </li>
            </ul>
          </Template>
        );
      },
    },
    {
      title: "VTapau",
      component: function VTapau() {
        return (
          <Template
            designation="Full-Stack Web Developer"
            companyName="VTapau"
            companyLink="https://vtapau.com"
            companyState="Remote"
            from="March"
            to="June 2020"
          >
            <ul className="list-disc text-base list-inside space-y-2">
              <li>Food review platform</li>
              <li>Responsible for the whole system design</li>
            </ul>
          </Template>
        );
      },
    },
    {
      title: "Victoria Home",
      component: function VictoriaHome() {
        return (
          <Template
            designation="Full-Stack Web Developer"
            companyName="Victoria Home"
            companyLink="https://victoriahome.co"
            companyState="Kuala Lumpur"
            from="August 2018"
            to="June 2020"
          >
            <ul className="list-disc text-base list-inside space-y-2">
              <li>Worked in IT department independently</li>
              <li>Guide an intern at a time</li>
              <li>
                Provided effective troubleshooting and remediation for web
                applications.
              </li>
              <li>
                Remained dedicated to emerging technology and the latest digital
                marketing concepts.
              </li>
              <li>Continually reinforce industry best practices.</li>
              <li>
                Effectively multi-tasked and worked well with other departments.
              </li>
            </ul>
          </Template>
        );
      },
    },
    {
      title: "Victoria Home (Intern)",
      component: function VictoriaHome() {
        return (
          <Template
            designation="IT Intern"
            companyName="Victoria Home"
            companyLink="https://victoriahome.co"
            companyState="Kuala Lumpur"
            from="May 2018"
            to="July 2018"
          >
            <ul className="list-disc text-base list-inside space-y-2">
              <li>Always able to finish given task before the deadline</li>
              <li>
                Write several automation scripts by using JS + Python to help
                finance department for daily task
              </li>
              <li>
                Completed Owner Management System from scratch by using VueJS as
                frontend and NodeJS as backend
              </li>
              <li>
                Developed Booking Engine at 70% completeness before internship
                end
              </li>
            </ul>
          </Template>
        );
      },
    },
    {
      title: "VPGAME",
      component: function VPGAME() {
        return (
          <Template
            designation="Part-time Southeast Asia Operation"
            companyName="VPGAME"
            companyLink="https://vpgame.com"
            companyState="Remote"
            from="July 2017"
            to="December 2019"
          >
            <ul className="list-disc text-base list-inside space-y-2">
              <li>Handle the players&#39; reports, questions, etc...</li>
              <li>Handling the operation in Southeast Asia</li>
              <li>Be a driver when the team arrive Malaysia</li>
              <li>
                Created a web app for reporting player with PHP, ease
                everyone&#39;s job
              </li>
            </ul>
          </Template>
        );
      },
    },
  ];
  return (
    <section id="experiences">
      <h2 className="section-header">
        <span>Experiences</span>
      </h2>
      <Tabs
        tabItems={tabItems}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </section>
  );
};

export default Experience;
