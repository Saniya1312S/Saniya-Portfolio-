import React, { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork as WorkIcon } from "react-icons/md";
import { IoSchool as SchoolIcon } from "react-icons/io5";
import { FaStar as StarIcon } from "react-icons/fa";
import "./WorkExperience.css";
import { TimelineItem } from "../types";
import { getTimeline } from "../queries/getTimeline";
import { fallbackTimeline } from "./WorkExperienceFallback";

const WorkExperience: React.FC = () => {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>(fallbackTimeline);

  useEffect(() => {
    let ignore = false;
    async function loadTimeline() {
      try {
        const items = await getTimeline();
        console.log("SUPABASE TIMELINE TEST:", items);
        if (!ignore && items.length) {
          setTimelineData(items);
        }
      } catch (error) {
        console.error("Unable to load timeline from Supabase", error);
      }
    }

    loadTimeline();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={`${item.name}-${index}`}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? index === 0
                  ? { background: "rgb(33, 150, 243)", color: "#fff" }
                  : { background: "rgb(240, 240, 240)", color: "#fff" }
                : { background: "rgb(255, 224, 230)", color: "#fff" }
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? { borderRight: index === 0 ? "7px solid rgb(33, 150, 243)" : "7px solid rgb(240, 240, 240)" }
                : { borderRight: "7px solid rgb(255, 224, 230)" }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: "rgb(33, 150, 243)", color: "#fff" }
                : { background: "rgb(255, 160, 200)", color: "#fff" }
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            <div style={{ color: "black" }}>
              {item.timelineType === "work" ? (
                <>
                  <h3 className="vertical-timeline-element-title">{item.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                  <p className="vertical-timeline-element-tech">{item.techStack}</p>
                </>
              ) : (
                <>
                  <h3 className="vertical-timeline-element-title">{item.name}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                  <p className="vertical-timeline-element-tech">{item.techStack}</p>
                </>
              )}
              <ul>
                {item.summaryPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<StarIcon />} />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;

