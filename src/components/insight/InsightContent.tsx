import React from "react";

interface InsightDataProps {
  id: number;
  title: string;
  content: string;
}

interface InsightContentProps {
  itemData: InsightDataProps;
}

const InsightContent: React.FC<InsightContentProps> = ({ itemData }) => {
  return (
    <div key={itemData.id} className="mb-4 last:mb-0">
        <h4 className="darkLight-text-color text-xl md:text-2xl mb-2 capitalize font-semibold">{itemData.title}</h4>
        <p className="darkLight-text-color text-base pb-0 mb-0">{itemData.content}</p>
    </div>
  );
};

export default InsightContent;