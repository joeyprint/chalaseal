import { Box, BoxProps } from '@mui/material';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

type MapViewerProps = {
  latitude: number;
  longitude: number;
  popupMessage?: string;
  zoom?: number;
} & BoxProps;

const MapViewer = (props: MapViewerProps) => {
  const { latitude, longitude, popupMessage, zoom = 15, ...restProps } = props;

  return (
    <Box width={1} height={300} {...restProps} overflow={'hidden'}>
      <MapContainer
        center={[latitude, longitude]}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: '100%' }}
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker position={[latitude, longitude]}>
          {popupMessage && <Popup>{popupMessage}</Popup>}
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default MapViewer;
