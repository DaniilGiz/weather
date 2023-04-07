import { useState, useEffect } from "react";

interface LocationData {
  city: string;
  country: string;
}

export const useUserLocation = (): LocationData | undefined => {
  const [location, setLocation] = useState<LocationData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setLocation({ city: data.city, country: data.country });
      } catch (error) {
        console.error("Failed to fetch location:", error);
      }
    };

    fetchData();
  }, []);

  return location;
};
