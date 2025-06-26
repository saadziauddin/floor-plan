import React, { useState } from 'react';
import { ScrollArea } from "@radix-ui/react-scroll-area";
import DefaultUserImage from '/DefaultUserImage.png';

const floorData = [
  {
    title: "Inbound",
    rows: ["A-1", "A-2", "A-3", "A-4", "A-5", "A-6", "A-7", "A-8", "A-9", "A-10"]
  },
  {
    title: "Inbound",
    rows: ["B-1", "B-2", "B-3", "B-4", "B-5", "B-6", "B-7", "B-8", "B-9", "B-10"]
  },
  {
    title: "Inbound",
    rows: ["C-1", "C-2", "C-3", "C-4", "C-5", "C-6", "C-7", "C-8", "C-9", "C-10"]
  },
  {
    title: "Inbound",
    rows: ["D-1", "D-2", "D-3", "D-4", "D-5", "D-6", "D-7", "D-8", "D-9", "D-10", "D-11", "D-12", "D-13"]
  },
  {
    title: "Inbound",
    rows: ["E-1", "E-2", "E-3", "E-4", "E-5", "E-6", "E-7", "E-8", "E-9", "E-10", "E-11", "E-12", "E-13", "E-14", "E-15"]
  },
  {
    title: "M-Inbound",
    rows: []
  },
  {
    title: "Inbound",
    rows: ["F-1", "F-2", "F-3", "F-4", "F-5", "F-6", "F-7", "F-8", "F-9", "F-10", "F-11", "F-12", "F-13", "F-14", "F-15"]
  },
  {
    title: "Inbound",
    rows: ["G-1", "G-2", "G-3", "G-4", "G-5", "G-6", "G-7", "G-8", "G-9", "G-10", "G-11", "G-12", "G-13", "G-14", "G-15"]
  },
  {
    title: "Inbound",
    rows: ["H-1", "H-2", "H-3", "H-4", "H-5", "H-6", "H-7", "H-8", "H-9", "H-10", "H-11", "H-12", "H-13", "H-14", "H-15"]
  },
  {
    title: "Inbound",
    rows: ["I-1", "I-2", "I-3", "I-4", "I-5", "I-6", "I-7", "I-8", "I-9", "I-10", "I-11", "I-12", "I-13", "I-14", "I-15"]
  },
  {
    title: "Konnect",
    rows: ["J-1", "J-2", "J-3", "J-4", "J-5", "J-6", "J-7", "J-8", "J-9", "J-10", "J-11", "J-12", "J-13", "J-14", "J-15"]
  },
  {
    title: "Ghost Busters",
    rows: ["K-1", "K-2", "K-3", "K-4", "K-5", "K-6", "K-7", "K-8", "K-9", "K-10", "K-11"]
  },
  {
    title: "Training Team",
    rows: ["L-1", "L-2", "L-3", "L-4", "L-5"]
  },
  {
    title: "TVU",
    rows: ["Y-1", "Y-2", "Y-3", "Y-4", "Y-5", "Y-6", "Y-7", "Y-8", "Y-9", "Y-10", "Y-11", "Y-12", "Y-13", "Y-14", "Y-15", "Y-16"]
  },
  {
    title: "TVU",
    rows: ["X-1", "X-2", "X-3", "X-4", "X-5", "X-6", "X-7", "X-8", "X-9", "X-10", "X-11", "X-12", "X-13", "X-14", "X-15", "X-16"]
  },
  {
    title: "Cus. Care & TVU",
    rows: ["W-1", "W-2", "W-3", "W-4", "W-5", "W-6", "W-7", "W-8", "W-9", "W-10", "W-11", "W-12", "W-13", "W-14", "W-15", "W-16", "W-17", "W-18", "W-19"]
  },
  {
    title: "Customer Care",
    rows: ["V-1", "V-2", "V-3", "V-4", "V-5", "V-6", "V-7", "V-8", "V-9", "V-10", "V-11", "V-12"]
  },
  {
    title: "I-Care Unit",
    rows: ["U-1", "U-2", "U-3", "U-4", "U-5", "U-6", "U-7", "U-8", "U-9"]
  },
  {
    title: "Priority Banking",
    rows: ["T-1", "T-2", "T-3", "T-4", "T-5", "T-6", "T-7", "T-8", "T-9", "T-10", "T-11"]
  },
  {
    title: "Call Back Unit",
    rows: ["S-1", "S-2", "S-3", "S-4", "S-5", "S-6", "S-7", "S-8", "S-9", "S-10", "S-11"]
  },
  {
    title: "Inbound",
    rows: ["R-1", "R-2", "R-3", "R-4", "R-5", "R-6", "R-7", "R-8", "R-9", "R-10", "R-11", "R-12"]
  },
  {
    title: "Remittance",
    rows: ["Q-1", "Q-2", "Q-3", "Q-4", "Q-5", "Q-6", "Q-7", "Q-8", "Q-9", "Q-10", "Q-11", "Q-12", "Q-13", "Q-14", "Q-15", "Q-16", "Q-17", "Q-18", "Q-19", "Q-20", "Q-21", "Q-22", "Q-23"]
  },
  {
    title: "Personal Loan",
    rows: ["P-1", "P-2", "P-3", "P-4", "P-5", "P-6", "P-7", "P-8", "P-9", "P-10"]
  },
  {
    title: "Personal Loan",
    rows: ["O-1", "O-2", "O-3", "O-4", "O-5", "O-6", "O-7", "O-8", "O-9", "O-10"]
  },
  {
    title: "Banca",
    rows: ["N-1", "N-2", "N-3", "N-4", "N-5", "N-6", "N-7", "N-8", "N-9", "N-10", "N-11", "N-12", "N-13", "N-14", "N-15", "N-16", "N-17", "N-18", "N-19", "N-20", "N-21"]
  },
  {
    title: "Credit Card",
    rows: ["M-1", "M-2", "M-3", "M-4", "M-5", "M-6", "M-7", "M-8", "M-9", "M-10"]
  }
];

const Block = ({ title, rows }) => (
  <div className="text-white rounded shadow m-2 w-fit align-top">
    <div className="bg-[#2cb34a] font-bold text-center p-1 border-b border-white rounded">{title}</div>
    <div className="bg-[#d9d9d9] text-black grid grid-cols-2 gap-1 p-1">
      {rows.map((item, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-300 text-center text-sm p-1 rounded"
        >
          {item}
        </div>
      ))}
    </div>
  </div>
);

const statusCards = [
  { status: "Break", color: "bg-yellow-400" },
  { status: "Lunch", color: "bg-orange-500" },
  { status: "Busy", color: "bg-red-500" },
  { status: "Training", color: "bg-blue-500" },
  { status: "Offline", color: "bg-gray-400" },
  { status: "Idle", color: "bg-purple-400" },
  { status: "Meeting", color: "bg-green-500" },
];

const StatusCard = ({ status, color, cardHeight }) => (
  <div
    className={` flex-shrink-0 ${color} text-white p-3 rounded-lg shadow-md flex flex-col items-center justify-between resize overflow-auto cursor-pointer w-[200px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-105`}
    style={{ minWidth: "200px", height: cardHeight }}
  >
    <img
      src={DefaultUserImage}
      alt="User"
      className="rounded-full w-[100px] h-[100px] object-cover border-4 border-white hover:border-yellow-300 transition-all duration-300"
    />
    <div className="font-semibold text-center mt-2">{status}</div>
  </div>
);

export default function FloorPlan() {
  const [cardRowHeight, setCardRowHeight] = useState(240);
  return (
    <div className="min-h-screen bg-gray-200 p-4">
      <h1 className="text-4xl font-bold text-center text-[#2cb34a] mb-5">
        FLOOR PLAN DIGITAL CUSTOMER EXPERIENCE - HABIB BANK LIMITED
      </h1>

      {/* Expandable Scrollable Cards Row */}
      <div
        className="overflow-x-auto flex items-center justify-center gap-4 mb-6 resize-y overflow-auto rounded-lg bg-white shadow p-4"
        style={{ height: `${cardRowHeight}px` }}
      >
        {statusCards.map((card, index) => (
          <StatusCard
            key={index}
            status={card.status}
            color={card.color}
            cardHeight={`${cardRowHeight - 40}px`}
          />
        ))}
      </div>

      {/* Floor Blocks */}
      <div className="flex flex-wrap justify-center items-start">
        {floorData.map((block, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center ${block.title === "M-Inbound" ? "self-center" : ""}`}
          >
            <Block title={block.title} rows={block.rows} />
          </div>
        ))}
      </div>
    </div>
  );
};
