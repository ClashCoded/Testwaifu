import React from "react"
import HeaderCN from "../Layout/Header/HeaderCN"
import HeroCN from "../Components/Hero/HeroCN"
import AboutCN from "../Components/About/AboutCN"
import RoadmapCN from "../Components/Roadmap/RoadmapCN"
import TeamCN from "../Components/Team/TeamCN"
import FaqCN from "../Components/FAQ/FaqCN"
import GangCN from "../Components/Gang/GangCN"
import CollectionCN from "../Components/Collection/CollectionCN"
import GovernanceCN from "../Components/Governance/GovernanceCN"
import PoweredCN from "../Components/Powered/PoweredCN"
import LaunchCN from "../Components/Launch/LaunchCN"
import FooterCN from "../Layout/Footer/FooterCN"
import { startSaga } from '../saga/rootSaga';


const CN = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <HeaderCN />
      <HeroCN />
      <AboutCN />
      <CollectionCN />
      <GovernanceCN />
      <LaunchCN />
      <RoadmapCN />
      <TeamCN />
      <FaqCN />
      <PoweredCN />
      <GangCN />
      <FooterCN />
    </div>
  )
}
export default () => {
  startSaga();
  return <CN />
};