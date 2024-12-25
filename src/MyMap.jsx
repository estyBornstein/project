
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MyMap({ lat, lon }) {
    const position = [lat, lon];

    return (
        <div style={{ height: '30vh' }}>
            <MapContainer
                key={`${lat}-${lon}`} // הוספנו את ה-key שיבטיח שהמפה תתעדכן אם ה- lat או lon משתנים
                style={{ width: '100%', height: '100%' }}
                center={position}
                zoom={13}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default MyMap;
