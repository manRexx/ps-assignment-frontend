import React from "react";

const InfoSection = ({ title, children }) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
};

InfoSection.Item = ({ label, value }) => (
  <div>
    <span className="text-sm text-gray-500">{label}</span>
    <p className="font-medium overflow-clip">{value}</p>
  </div>
);

export default InfoSection;
