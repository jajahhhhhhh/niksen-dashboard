import React from "react";

type Props = {
  params: { id: string };
};

export default async function PropertyPlaceholder({ params }: Props) {
  const { id } = await params;
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex items-center justify-center">
      <div className="p-8 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-2">Property</h1>
        <p className="text-sm text-gray-600">Placeholder page for id: <strong>{id}</strong></p>
      </div>
    </div>
  );
}
