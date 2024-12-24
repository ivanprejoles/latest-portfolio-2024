import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-xl mb-4">The requested page could not be found.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
