import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const ParentDashboard = () => {
    const [busLocation, setBusLocation] = useState({ lat: 37.7749, lng: -122.4194 }); // Default location
    const [busDetails, setBusDetails] = useState({ bus_number: '', driver_name: '' });

    useEffect(() => {
        // Fetch bus details
        fetch('/api/bus/123')
            .then((res) => res.json())
            .then((data) => {
                console.log('Bus Details:', data); // Debugging
                setBusDetails(data);
            })
            .catch((error) => console.error('Error fetching bus details:', error));

        // Real-time bus location updates via socket.io
        socket.on('locationUpdate', (location) => {
            console.log('New Location:', location); // Debugging
            setBusLocation(location.coordinates);
        });

        // Clean up socket connection on unmount
        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div>
            <h1>Bus: {busDetails?.bus_number}</h1>
            <p>Driver: {busDetails?.driver_name}</p>
            <LoadScript googleMapsApiKey='YOUR_GOOGLE_MAPS_KEY'>
                <GoogleMap
                    mapContainerStyle={{ height: '400px', width: '800px' }}
                    center={busLocation}
                    zoom={15}
                >
                    <Marker position={busLocation} />
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default ParentDashboard;