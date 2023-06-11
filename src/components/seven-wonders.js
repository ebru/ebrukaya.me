import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { BoldText } from './section-card/section-card.styles'

import Colosseum from './../images/seven-wonders/colosseum.png';
import MachuPicchu from './../images/seven-wonders/machu-picchu.png';
import Christ from './../images/seven-wonders/christ-the-redeemer.png';
import GreatWall from './../images/seven-wonders/the-great-wall.png';
import TajMahal from './../images/seven-wonders/taj-mahal.png';
import ChichenItza from './../images/seven-wonders/chichen-itza.png';
import Petra from './../images/seven-wonders/petra.png';

const wonders = [
  { src: Colosseum, title: "Colosseum", country: '🇮🇹', visited: 2018 },
  { src: MachuPicchu, title: "Machu Picchu", country: '🇵🇪', visited: 2023 },
  { src: Christ, title: "Christ the Redeemer", country: '🇧🇷', visited: null },
  { src: TajMahal, title: "Taj Mahal", country: '🇮🇳', visited: null },
  { src: ChichenItza, title: "Chichen Itza", country: '🇲🇽', visited: null },
  { src: Petra, title: "Petra", country: '🇯🇴', visited: null },
  { src: GreatWall, title: "Great Wall of China", country: '🇨🇳', visited: null },
];

function SevenWonders() {
  return (
    <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column' }}>
      <BoldText>Seven wonders:</BoldText>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {wonders.map((wonder, index) => (
          <div
            style={{ position: 'relative', width: '14%', margin: '0.5em', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
            key={index}
          >
            <Tooltip
              PopperProps={{
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, -20],
                    },
                  },
                ],
              }}
              title={
                <Box>
                  <Typography variant="body2">
                    {wonder.country} <strong>{wonder.title}</strong>
                  </Typography>
                  <Typography variant="body2">
                    {wonder.visited ? `Visited: ${wonder.visited}` : undefined}
                  </Typography>
                </Box>
              }
              arrow
              placement="top"
            >
              <img
                src={wonder.src}
                alt={wonder.title}
                width="100%"
                style={{ opacity: wonder.visited ? 1 : 0.4 }}
              />
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SevenWonders;
