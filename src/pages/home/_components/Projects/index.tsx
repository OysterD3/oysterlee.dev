import React from "react";
import ProjectTemplate from "./Template";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2 className="section-header">
        <span>Projects</span>
      </h2>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <ProjectTemplate
          imageUrl="/projects/OMS.png"
          projectName="Owner Management System"
          stack={["NuxtJS", "NodeJS", "ExpressJS", "MySQL"]}
        />
        <ProjectTemplate
          imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=192&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzA1Nzg5MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
          projectName="Finance Report Automation"
          stack={["Python", "NodeJS", "Puppeteer", "Pandas"]}
        />
        <ProjectTemplate
          imageUrl="/projects/booking_engine.png"
          projectName="Hotel Booking Engine"
          website="https://book.victoriahome.co"
          stack={["NuxtJS", "NodeJS", "ExpressJS", "MySQL"]}
        />
        <ProjectTemplate
          imageUrl="/projects/vpanel_be.png"
          projectName="Hotel Booking Engine's Admin Panel"
          stack={["NuxtJS", "NodeJS", "ExpressJS", "MySQL"]}
        />
        <ProjectTemplate
          imageUrl="/projects/intel.png"
          projectName="Intel Dashboard"
          stack={["NuxtJS", "NodeJS", "ExpressJS", "MySQL"]}
        />
        <ProjectTemplate
          imageUrl="/projects/wms.png"
          projectName="Warehouse Management System"
          stack={["VueJS", "NodeJS", "ExpressJS", "MySQL"]}
        />
        <ProjectTemplate
          imageUrl="/projects/maintenance-defect-report-form.png"
          projectName="Maintenance Defect Report Form"
          stack={["VueJS", "NodeJS", "ExpressJS", "Jira"]}
        />
        <ProjectTemplate
          imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=192&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzA1Nzg5MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
          projectName="Report Automation"
          stack={[
            "Python",
            "NodeJS",
            "Puppeteer",
            "Pandas",
            "Openpyxl",
            "Golang",
            "Excelize",
          ]}
        />
        <ProjectTemplate
          imageUrl="/projects/listing.png"
          projectName="Listing Platform"
          website="https://listing-stg.journey.com.my/"
          stack={["NuxtJS", "NodeJS", "NestJS", "MySQL"]}
        />
        <ProjectTemplate
          imageUrl="/projects/vtapau.png"
          projectName="VTapau"
          website="https://vtapau.com/"
          stack={["NuxtJS", "Golang", "Fiber", "MySQL"]}
        />
        <ProjectTemplate
          imageUrl="/projects/malaysia-404.png"
          projectName="Malaysia 404"
          website="https://oysterd3.github.io/malaysia-404/"
          github="https://github.com/OysterD3/malaysia-404"
          stack={["Javascript"]}
        />
      </ul>
    </section>
  );
};

export default ProjectsSection;
