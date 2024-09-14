// app/api/saveData/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Define the path to your JSON file
    const filePath = path.join(process.cwd(), "data.json");

    // Read the existing data
    let existingData = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf8");
      existingData = JSON.parse(fileData);
    }

    // Append the new data
    existingData.push(data);

    // Write the updated data to the file
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

    return NextResponse.json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
  }
}

// Handle GET requests to read data
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data.json");

    let existingData = [];

    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf8");

      if (fileData.trim()) {
        existingData = JSON.parse(fileData);
      }
    }

    return NextResponse.json(existingData);
  } catch (error) {
    console.error("Error reading data:", error);
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
  }
}
