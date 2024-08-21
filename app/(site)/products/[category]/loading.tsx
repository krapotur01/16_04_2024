import React from "react";
import {CircularProgress} from "@nextui-org/react";

export default function Loading() {
  return (
	<div className="flex-1 flex items-center justify-center">
        <CircularProgress color="success" aria-label="Loading..."/>
    </div>
  )
}
