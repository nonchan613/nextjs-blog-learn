// src/components/Elements/Date/index.tsx
import { DateProps } from "./type";
import { parseISO, format } from "date-fns";
import React from "react";

const Date: React.FC<DateProps> = ({ dateString }) => {
	const date = parseISO(dateString);
	return <time dateTime={dateString}>{format(date, "yyyy/MM/dd")}</time>;
};

export default Date;